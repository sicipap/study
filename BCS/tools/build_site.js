// Builds website/index.html from the routine, the guideline and the daily materials.
//   node tools/gen_routine.js   (only when the routine changes)
//   node tools/build_site.js
// Materials: materials/**/Day_NNN_*.md  (NNN = day number of the routine).
// A material file becomes an exam when it has "## Part ..." question sections and an
// "Answer key" table — see materials/Week_01/Day_002_2026-10-02_Weekly_Test_1.md for the format.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8').replace(/\r\n/g, '\n');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
}

const OPT = /\((ক|খ|গ|ঘ|a|b|c|d)\)\s*/;

function parseExam(md, day) {
  if (!/^## Part /m.test(md) || !/Answer key/i.test(md)) return null;
  const lines = md.split('\n');
  const title = (md.match(/^# (.*)$/m) || [, `Day ${day} test`])[1].split(': ').pop();
  const minutes = +((md.match(/Time:\s*(\d+)\s*minutes/i) || [, 35])[1]);
  const questions = [];
  let part = '';
  let inKey = false;
  const key = {}, explain = {};
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^## .*Answer key/i.test(l)) { inKey = true; continue; }
    if (inKey) {
      if (/^\|/.test(l)) {
        const cells = l.split('|').map(s => s.trim()).filter(Boolean);
        for (let j = 0; j + 1 < cells.length; j += 2) if (/^\d+$/.test(cells[j])) key[+cells[j]] = cells[j + 1];
      }
      const ex = l.match(/^- \*\*(Q[\d\s&Q]+):\*\*\s*(.*)$/);
      if (ex) (ex[1].match(/\d+/g) || []).forEach(n => (explain[+n] = ex[2]));
      if (/^## /.test(l) && !/Answer key/i.test(l)) inKey = false;
      continue;
    }
    const p = l.match(/^## Part [A-Z]+ — (.*?)(?: \(\d+.*\))?$/);
    if (p) { part = p[1]; continue; }
    const q = l.match(/^\*\*(\d+)\.\*\*\s*(.*)$/);
    if (q) {
      const optLine = (lines[i + 1] || '').trim();
      const bits = optLine.split(OPT).filter(s => s !== '');
      const options = [];
      for (let j = 0; j + 1 < bits.length; j += 2) options.push({ key: bits[j], text: bits[j + 1].trim() });
      questions.push({ n: +q[1], part, text: q[2].trim(), options });
      i++;
    }
  }
  questions.forEach(q => { q.answer = key[q.n]; if (explain[q.n]) q.explain = explain[q.n]; });
  const bad = questions.filter(q => q.options.length !== 4 || !q.options.some(o => o.key === q.answer));
  if (bad.length) throw new Error(`Day ${day}: questions without 4 options or a valid answer: ${bad.map(q => q.n).join(', ')}`);

  // Reading view: hide the questions and the key, keep the rest of the day's plan
  const start = md.search(/^## Rules/m) >= 0 ? md.search(/^## Rules/m) : md.search(/^## Part /m);
  const afterKey = md.slice(start).search(/^## Hour /m);
  const reading = md.slice(0, start) + '\n<!--EXAM-->\n\n' + (afterKey >= 0 ? md.slice(start + afterKey) : '');
  return { exam: { id: `day-${day}`, day, title, minutes, questions }, reading };
}

const routine = JSON.parse(read('routine/routine.json'));
const materials = {};
const exams = [];
for (const file of walk(path.join(ROOT, 'materials')).sort()) {
  const m = path.basename(file).match(/^Day_(\d{3})_.*\.md$/);
  if (!m) continue;
  const day = +m[1];
  const md = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const ex = parseExam(md, day);
  if (ex) exams.push(ex.exam);
  materials[day] = { file: path.relative(ROOT, file).replace(/\\/g, '/'), md: ex ? ex.reading : md, examId: ex ? ex.exam.id : null };
}

// Topic notes: materials/topics/<ID>.md -> website/topics/<SUBJECT CODE>.json (loaded on demand by the page)
const { parseTopic } = require('./topic_parser');
const topicDir = path.join(ROOT, 'materials', 'topics');
const outDir = path.join(ROOT, 'website', 'topics');
fs.mkdirSync(outDir, { recursive: true });
const scheduled = {};
routine.days.forEach(d => (d.topics || []).forEach((ids, slot) => ids.forEach(id => (scheduled[id] = scheduled[id] || []).push([d.n, slot]))));
const bundles = {}, problems = [];
const topicIndex = routine.topics.map(t => {
  const f = path.join(topicDir, t.id + '.md');
  let has = false, quizCount = 0;
  if (fs.existsSync(f)) {
    const r = parseTopic(fs.readFileSync(f, 'utf8'));
    if (r.errors.length) problems.push(`${t.id}: ${r.errors.join('; ')}`);
    (bundles[t.code] = bundles[t.code] || {})[t.id] = { notes: r.notes.replace(/^# .*\n+/, ''), quiz: r.quiz.filter(q => q.options.length === 4 && q.answer) };
    has = true;
    quizCount = bundles[t.code][t.id].quiz.length;
  }
  return { ...t, has, quizCount, days: scheduled[t.id] || [] };
});
for (const f of fs.readdirSync(outDir)) if (f.endsWith('.json')) fs.unlinkSync(path.join(outDir, f));
for (const [code, b] of Object.entries(bundles)) fs.writeFileSync(path.join(outDir, code + '.json'), JSON.stringify(b), 'utf8');
if (problems.length) console.warn('Topic files with problems (quiz questions skipped):\n  ' + problems.join('\n  '));

const data = {
  routine,
  topics: topicIndex,
  guide: read('routine/00_Study_Guideline.md'),
  hot: read('routine/07_Hot_Topics_Checklist.md'),
  materials,
  exams,
  builtAt: new Date().toISOString(),
};
delete data.routine.topics;
const json = JSON.stringify(data).replace(/</g, '\\u003c');
const tpl = read('website/template.html');
if (!tpl.includes('/*__DATA__*/')) throw new Error('template is missing the /*__DATA__*/ marker');
fs.writeFileSync(path.join(ROOT, 'website', 'index.html'), tpl.replace('/*__DATA__*/', () => `window.BCS_DATA = ${json};`), 'utf8');
console.log(`Built website/index.html: ${routine.days.length} days, ${Object.keys(materials).length} day files, ${exams.length} exams, ${topicIndex.filter(t => t.has).length}/${topicIndex.length} topic notes in ${Object.keys(bundles).length} bundles`);
