// Parses a topic note (materials/topics/<ID>.md, see materials/topics/FORMAT.md).
// Returns { title, notes, quiz: [{n, text, options:[{key,text}], answer, explain}], errors: [] }
const OPT = /\((ক|খ|গ|ঘ|a|b|c|d)\)\s*/;

function parseTopic(md) {
  md = md.replace(/\r\n/g, '\n');
  const errors = [];
  const title = (md.match(/^# (.+)$/m) || [])[1];
  if (!title) errors.push('missing "# Title" line');
  const qStart = md.search(/^## Practice MCQ/m);
  const kStart = md.search(/^## Answer key/m);
  if (qStart < 0) errors.push('missing "## Practice MCQ" section');
  if (kStart < 0 || kStart < qStart) errors.push('missing "## Answer key" section after the MCQs');
  const notes = qStart >= 0 ? md.slice(0, qStart).trim() : md.trim();
  const quiz = [];
  if (qStart >= 0 && kStart > qStart) {
    const lines = md.slice(qStart, kStart).split('\n');
    for (let i = 0; i < lines.length; i++) {
      const q = lines[i].match(/^\*\*(\d+)\.\*\*\s*(.*)$/);
      if (!q) continue;
      let j = i + 1;
      while (j < lines.length && !lines[j].trim()) j++;
      const bits = (lines[j] || '').trim().split(OPT).filter(s => s !== '');
      const options = [];
      for (let k = 0; k + 1 < bits.length; k += 2) options.push({ key: bits[k], text: bits[k + 1].trim() });
      if (options.length !== 4) errors.push(`Q${q[1]}: expected 4 options on the line after the question, found ${options.length}`);
      quiz.push({ n: +q[1], text: q[2].trim(), options });
      i = j;
    }
    const key = {};
    md.slice(kStart).split('\n').forEach(l => {
      if (!/^\|/.test(l)) return;
      const c = l.split('|').slice(1, -1).map(s => s.trim());
      if (/^\d+$/.test(c[0])) key[+c[0]] = { ans: c[1], explain: c[2] || '' };
    });
    quiz.forEach(q => {
      const k = key[q.n];
      if (!k) return errors.push(`Q${q.n}: no row in the answer key`);
      if (!q.options.some(o => o.key === k.ans)) errors.push(`Q${q.n}: answer "${k.ans}" is not one of its option labels`);
      q.answer = k.ans;
      if (k.explain) q.explain = k.explain;
    });
    if (quiz.length < 5) errors.push(`only ${quiz.length} MCQs found (need 8)`);
  }
  return { title, notes, quiz, errors };
}

module.exports = { parseTopic };

// CLI: node tools/topic_parser.js [ID ...]   (no IDs = check every topic file)
if (require.main === module) {
  const fs = require('fs'), path = require('path');
  const dir = path.join(__dirname, '..', 'materials', 'topics');
  const routine = require('../routine/routine.json');
  const titles = Object.fromEntries(routine.topics.map(t => [t.id, t.title]));
  const ids = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(dir).filter(f => /^[A-Z]+-\d+\.md$/.test(f)).map(f => f.slice(0, -3));
  let bad = 0;
  for (const id of ids) {
    const f = path.join(dir, id + '.md');
    if (!fs.existsSync(f)) { console.log(`${id}: MISSING`); bad++; continue; }
    const r = parseTopic(fs.readFileSync(f, 'utf8'));
    if (!titles[id]) r.errors.push('unknown topic id');
    const words = r.notes.split(/\s+/).length;
    if (r.errors.length) { bad++; console.log(`${id}: ${r.errors.join('; ')}`); }
    else console.log(`${id}: OK (${words} words, ${r.quiz.length} MCQ)`);
  }
  console.log(bad ? `${bad} file(s) need fixing` : 'All files OK');
  process.exitCode = bad ? 1 : 0;
}
