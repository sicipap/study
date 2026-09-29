// Generates the 6-month BCS routine (daily 4 hours) as Markdown files.
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'routine');
const START = Date.UTC(2026, 9, 1); // 1 October 2026
const TOTAL_DAYS = 182;             // 1 Oct 2026 -> 31 Mar 2027
const P1_END = 112;                 // Phase 1: day 1-112  (Foundation, 16 weeks)
const P2_END = 154;                 // Phase 2: day 113-154 (Revision + PYQ, 6 weeks)
                                    // Phase 3: day 155-182 (Model tests + final revision)

const H = '🔥 ';

const SUBJ = {
  MATH: 'Math',
  MENT: 'Mental Ability',
  BAN: 'Bangla',
  ENG: 'English',
  BD: 'Bangladesh Affairs',
  INT: 'International Affairs',
  SCI: 'General Science',
  ICT: 'Computer & ICT',
  GEO: 'Geography & Disaster',
  ETH: 'Ethics & Governance',
};

// ---------- Topic queues (in study order; 🔥 = hot / frequently asked) ----------
const T = {};

T.MATH = [
  H + 'Number system, divisibility rules', H + 'LCM & HCF', 'Fractions, decimals, simplification',
  H + 'Square/cube roots, surds & indices (সূচক)', H + 'Percentage', H + 'Profit & loss', 'Simple interest',
  H + 'Compound interest', H + 'Ratio & proportion', 'Partnership (অংশীদারি কারবার)', H + 'Average', 'Age problems',
  H + 'Work & time', 'Pipes & cisterns', H + 'Time, speed & distance', 'Boats & streams, trains',
  'Mixture & alligation', H + 'Algebraic formulas & identities', H + 'Factorization', 'Linear equations (1 & 2 variables)',
  'Quadratic equations & roots', 'Inequalities', H + 'Logarithm', H + 'Sets & Venn diagram',
  H + 'Arithmetic progression (সমান্তর ধারা)', 'Geometric progression & series', 'Lines, angles, parallel lines',
  H + 'Triangles & Pythagoras theorem', H + 'Quadrilaterals & polygons (interior/exterior angles)',
  H + 'Circle: chord, tangent, arc, angles', H + 'Mensuration: triangle, rectangle, square',
  'Mensuration: circle & sector', 'Mensuration: cube, cuboid, cylinder, cone, sphere',
  H + 'Trigonometric ratios & identities', 'Heights & distances', H + 'Permutation', H + 'Combination',
  H + 'Probability', 'Statistics: mean, median, mode', 'Functions & relations (domain, range)',
  'Coordinate geometry basics (distance, slope)',
];
T.MENT = [
  'Verbal analogy', 'Word meaning based reasoning', H + 'Classification / odd one out', H + 'Number series',
  H + 'Letter series & alphabet test', H + 'Coding-decoding', H + 'Blood relations', H + 'Direction sense',
  'Ranking & ordering', 'Seating arrangement (linear & circular)', H + 'Clock problems', H + 'Calendar problems',
  H + 'Syllogism / logical deduction', 'Statement & conclusion / assumption', H + 'Mirror & water images',
  'Paper folding & cutting', H + 'Counting figures (triangles, squares)', 'Figure series & pattern completion',
  H + 'Dice & cube', 'Embedded figures / spatial ability', H + 'Mechanical: gears, pulleys, levers',
  'Mechanical: force, motion, basic physics', 'Puzzles & problem solving', 'Spelling & sentence rearrangement',
  'Data sufficiency', 'Numerical ability shortcuts',
];
const BAN_LANG = [
  H + 'ভাষার উৎপত্তি, বাংলা ভাষার ইতিহাস ও উপভাষা', H + 'ধ্বনি ও বর্ণ (স্বর/ব্যঞ্জন)', 'বর্ণের উচ্চারণ স্থান, যুক্তবর্ণ',
  'ধ্বনি পরিবর্তন (অপিনিহিতি, অভিশ্রুতি, স্বরসঙ্গতি)', H + 'সন্ধি: স্বরসন্ধি', H + 'সন্ধি: ব্যঞ্জন, বিসর্গ, নিপাতনে সিদ্ধ',
  'ণত্ব ও ষত্ব বিধান', H + 'শব্দের উৎস: তৎসম, তদ্ভব, দেশি, বিদেশি', 'পদ: বিশেষ্য, বিশেষণ, সর্বনাম', 'পদ: ক্রিয়া, অব্যয়',
  H + 'সমাস: দ্বন্দ্ব, কর্মধারয়', H + 'সমাস: তৎপুরুষ, বহুব্রীহি, দ্বিগু, অব্যয়ীভাব', H + 'উপসর্গ', 'প্রত্যয় (কৃৎ ও তদ্ধিত)',
  H + 'কারক ও বিভক্তি', 'বচন, লিঙ্গ, পুরুষ', 'ক্রিয়ার কাল ও ভাব', 'বাচ্য ও বাচ্য পরিবর্তন', 'বাক্য: সরল, জটিল, যৌগিক ও রূপান্তর',
  H + 'বানান শুদ্ধি (প্রমিত বানান রীতি)', H + 'বাক্য শুদ্ধি ও অপপ্রয়োগ', H + 'সমার্থক শব্দ', H + 'বিপরীতার্থক শব্দ',
  H + 'বাগধারা ও প্রবাদ', H + 'এক কথায় প্রকাশ', H + 'পারিভাষিক শব্দ', 'যতিচিহ্ন, সাধু ও চলিত রীতি', 'অলংকার ও ছন্দ (মৌলিক)',
  'শব্দ গঠন, দ্বিরুক্ত শব্দ', 'সংখ্যাবাচক ও ক্রমবাচক শব্দ',
];
const BAN_LIT = [
  H + 'সাহিত্যের যুগবিভাগ ও চর্যাপদ', 'অন্ধকার যুগ, শ্রীকৃষ্ণকীর্তন (বড়ু চণ্ডীদাস)', H + 'মঙ্গলকাব্য (মনসা, চণ্ডী, অন্নদা)',
  H + 'বৈষ্ণব পদাবলি, অনুবাদ সাহিত্য, আরাকান রাজসভা (আলাওল, দৌলত কাজী)',
  'পুঁথি সাহিত্য, মর্সিয়া, নাথ সাহিত্য, মৈমনসিংহ গীতিকা, কবিগান', H + 'ফোর্ট উইলিয়াম কলেজ ও বাংলা গদ্যের বিকাশ',
  'ঈশ্বরচন্দ্র বিদ্যাসাগর, প্যারীচাঁদ মিত্র', H + 'মাইকেল মধুসূদন দত্ত', 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়, দীনবন্ধু মিত্র',
  'মীর মশাররফ হোসেন, কায়কোবাদ', H + 'রবীন্দ্রনাথ: জীবনী ও কাব্য', H + 'রবীন্দ্রনাথ: উপন্যাস, ছোটগল্প, নাটক',
  H + 'কাজী নজরুল ইসলাম: কাব্য', H + 'নজরুল: গদ্য, নাটক, পত্রিকা', 'শরৎচন্দ্র ও বেগম রোকেয়া', H + 'জীবনানন্দ দাশ ও জসীমউদ্দীন',
  'তিরিশের কবি, ফররুখ আহমদ, সুকান্ত', 'প্রমথ চৌধুরী (সবুজপত্র), সত্যেন্দ্রনাথ দত্ত', 'বিভূতিভূষণ, তারাশঙ্কর, মানিক বন্দ্যোপাধ্যায়',
  H + 'শামসুর রাহমান, আল মাহমুদ, সৈয়দ শামসুল হক', H + 'মুনীর চৌধুরী, সৈয়দ ওয়ালীউল্লাহ, শহীদুল্লা কায়সার',
  'হুমায়ূন আহমেদ, আখতারুজ্জামান ইলিয়াস, সেলিনা হোসেন', H + 'ভাষা আন্দোলন ও মুক্তিযুদ্ধভিত্তিক সাহিত্য',
  H + 'ছদ্মনাম ও উপাধি', H + 'পত্রপত্রিকা ও সম্পাদক', 'বিখ্যাত পঙক্তি ও প্রথম রচনা', 'মুসলিম সাহিত্য সমাজ (শিখা গোষ্ঠী), বাংলা একাডেমি',
];
const ENG_LANG = [
  H + 'Noun: kinds, number, gender', 'Pronoun & its agreement', 'Adjective & degrees of comparison',
  H + 'Verb: finite/non-finite (gerund, participle, infinitive)', H + 'Tense', H + 'Subject-verb agreement',
  H + 'Right form of verbs', 'Adverb', H + 'Preposition & appropriate preposition', 'Conjunction', 'Articles',
  H + 'Voice change', H + 'Narration', H + 'Transformation of sentences', H + 'Conditional sentences',
  H + 'Correction of sentences / error detection', 'Sentence completion', H + 'Phrases & idioms', H + 'Group verbs',
  H + 'Synonyms', H + 'Antonyms', H + 'Spelling (correctly spelt words)', H + 'One-word substitution', 'Analogy',
  'Clauses (noun, adjective, adverb)', 'Modals & causative verbs', 'Punctuation & capitalization',
  H + 'Foreign words & phrases (Latin, French)', 'Word formation: prefix & suffix', 'Vocabulary from newspapers',
];
const ENG_LIT = [
  H + 'Periods of English literature', H + 'Old & Middle English: Beowulf, Chaucer', H + 'Elizabethan: Spenser, Marlowe',
  H + 'Shakespeare: tragedies', H + 'Shakespeare: comedies, histories, sonnets', H + 'Ben Jonson, John Donne (Metaphysical), Milton',
  'Restoration & Neo-classical: Dryden, Pope, Swift, Defoe', '18th-century novel: Richardson, Fielding, Johnson, Goldsmith',
  H + 'Romantic: Wordsworth, Coleridge', H + 'Romantic: Byron, Shelley, Keats', 'Victorian poets: Tennyson, Browning, Arnold',
  H + 'Victorian novel: Dickens, Brontës, Hardy, George Eliot', H + 'Modern: Yeats, T. S. Eliot',
  'Modern: Joyce, Woolf, Lawrence, Conrad, Orwell', 'Drama: Shaw, Wilde, Beckett, Osborne',
  H + 'American literature: Whitman, Frost, Hemingway, Arthur Miller', H + 'Literary terms: sonnet, ode, elegy, epic, ballad',
  H + 'Literary terms: allegory, satire, figures of speech', H + 'Famous quotations & lines', H + 'Famous characters & pen names',
  'Nobel laureates in literature', 'World literature: Greek, Russian, French classics', 'South Asian & postcolonial writers in English',
];
T.BD = [
  'Ancient Bengal: janapadas, Maurya, Gupta, Shashanka', H + 'Pala & Sena dynasties',
  H + 'Sultanate: Bakhtiyar Khalji, Iliyas Shahi, Hussain Shahi', H + 'Mughal era, Baro Bhuiyans, Subedars, Nawabs',
  H + 'Plassey 1757, Buxar, Dewani', H + 'British rule: Permanent Settlement, Titumir, Faraizi, Indigo, 1857',
  H + '1905 partition, Muslim League, Lahore Resolution 1940, 1947', H + 'Language Movement 1948–1952',
  '1954 election, 1956 constitution, 1958 martial law, 1962', H + 'Six-point 1966, Agartala case, 1969 uprising',
  H + '1970 election & 7 March speech', H + '1971: Operation Searchlight, declaration, Mujibnagar Govt',
  H + '1971: sectors, commanders, forces, Bir Sreshtho', H + '1971: victory, surrender, martyred intellectuals, foreign role',
  'Post-1971 political history', H + 'Constitution: making, preamble, fundamental principles',
  H + 'Constitution: fundamental rights (Art. 26–47)', H + 'Constitution: amendments',
  H + 'Constitution: key articles (President, PM, Parliament, Judiciary, EC, PSC, CAG)', 'Executive: President, PM, cabinet',
  'Legislature: Jatiya Sangsad, Speaker, committees', 'Judiciary, Ombudsman, ACC', 'Local government structure',
  H + 'Administration: divisions, districts; CHT Accord 1997', H + 'Location, area, borders, enclaves (2015), maritime boundary',
  H + 'Rivers & bridges (Padma Bridge etc.)', H + 'Hills, islands, Sundarbans, haors', 'Climate & seasons of Bangladesh',
  H + 'Economy: GDP, per capita, budget, Economic Review', H + 'Agriculture: crops, varieties, research institutes',
  H + 'Industry: RMG, jute, EPZ, economic zones', H + 'Mineral resources: gas fields, coal, limestone',
  H + 'Power & energy: Rooppur NPP, renewables', H + 'Mega projects: Metro rail, Karnaphuli tunnel, Matarbari',
  'Transport: ports, airports, railways', H + 'Population & Census 2022, literacy', 'Education, health & SDG indicators',
  H + 'Ethnic groups (ক্ষুদ্র নৃগোষ্ঠী)', 'Culture: festivals, music, art, cinema', H + 'Archaeological & World Heritage sites',
  H + 'National symbols, anthem, flag, emblem', 'Sports & national awards', H + 'Bangladesh in UN, OIC, SAARC, BIMSTEC; peacekeeping',
  H + 'Foreign policy & Rohingya crisis', H + 'Blue economy, climate change, Delta Plan 2100',
  H + 'Recent history 2024–26: July uprising, interim govt, reform commissions, 13th election',
  'Bangladesh current affairs (last 12 months)', H + 'Important dates & "firsts" of Bangladesh',
];
T.INT = [
  H + 'Concepts: state, sovereignty, geopolitics, balance of power', 'Ancient civilizations',
  'Renaissance, American & French revolutions, Industrial Revolution', H + 'World War I, Versailles, League of Nations',
  H + 'World War II & Cold War', H + 'UN: formation, charter, organs', H + 'UN specialized agencies & HQs',
  'UN Secretaries-General & peacekeeping', H + 'SAARC, ASEAN, BIMSTEC, EU, AU', H + 'WTO, IMF, World Bank, ADB, AIIB, NDB',
  H + 'NATO, QUAD, AUKUS, SCO', H + 'OIC, OPEC, GCC, Commonwealth, G7, G20, BRICS', H + 'Israel–Palestine & Middle East',
  H + 'Russia–Ukraine war', H + 'South China Sea, Taiwan, Indo-Pacific', 'Kashmir, India–Pakistan, Afghanistan',
  H + 'Myanmar & Rohingya', H + 'Climate: UNFCCC, Kyoto, Paris Agreement, COPs', 'Nuclear treaties: NPT, CTBT, TPNW',
  H + 'International law: ICJ, ICC, UNCLOS', 'Human rights: UDHR, CEDAW, CRC', H + 'Countries: capitals, currencies, parliaments',
  H + 'Borders, straits, canals; Durand, McMahon, Radcliffe lines', 'World leaders (current heads of state/govt)',
  H + 'Nobel Prizes (latest)', 'International sports events', H + 'International days & years',
  H + 'Global indices & Bangladesh\'s rank', H + 'Major treaties: Westphalia, Camp David, Oslo, Simla',
  'International current affairs (last 12 months)', 'Chinese & Russian revolutions, Arab Spring',
  H + 'Soft/hard power, diplomacy, terrorism, Belt & Road',
];
T.SCI = [
  H + 'Units, measurement, SI', 'Motion, force, Newton\'s laws, gravity', 'Work, energy, power', H + 'Heat & temperature',
  H + 'Sound', H + 'Light: reflection, refraction, lens, dispersion', H + 'Electricity & magnetism',
  H + 'Atom, radioactivity, fission & fusion', H + 'Matter, atomic structure, periodic table', H + 'Acids, bases, salts, pH',
  H + 'Metals, non-metals, alloys, ores', H + 'Carbon compounds, polymers, fuels',
  H + 'Everyday chemistry: fertilizer, soap, glass, cement, common names', 'Cell & tissue', H + 'Plants & photosynthesis',
  H + 'Animal classification', H + 'Human body: digestion, blood, circulation', H + 'Human body: nervous, respiratory, excretory, hormones',
  H + 'Vitamins, minerals & deficiency diseases', H + 'Diseases (viral/bacterial) & vaccines', H + 'Genetics, DNA, biotechnology',
  'Food science & preservation', H + 'Environment, pollution, greenhouse effect', H + 'Solar system & space missions',
  'Atmosphere layers, rocks, earthquakes', H + 'Inventions & inventors', 'Renewable energy & nanotechnology',
  H + 'Medical technology: X-ray, CT, MRI, ECG',
];
T.ICT = [
  H + 'History & generations of computers', 'Types of computers', 'Hardware: CPU, ALU, registers',
  H + 'Memory: RAM, ROM, cache, storage units', H + 'Input & output devices', H + 'Number systems & conversion',
  H + 'Boolean algebra & logic gates', H + 'Software & operating systems', 'Programming languages, compiler, algorithm, flowchart',
  H + 'Database: DBMS, SQL, keys', H + 'Networks: LAN/MAN/WAN, topologies', H + 'Network devices; OSI & TCP/IP',
  H + 'Internet: IP, DNS, HTTP, FTP, SMTP', 'Email, WWW, browsers, search engines', H + 'Fiber optics, satellite, 1G–5G',
  H + 'Wi-Fi, Bluetooth, NFC, RFID', H + 'Cyber security: malware, phishing, firewall, encryption',
  H + 'Cloud computing, IoT, Big data', H + 'AI, machine learning, LLMs, robotics', H + 'Blockchain, crypto, VR/AR, metaverse',
  H + 'MS Office: Word, Excel, PowerPoint', H + 'E-commerce & e-governance', H + 'ICT in Bangladesh: satellite, submarine cables, cyber law',
  H + 'Abbreviations & full forms', 'IT companies, founders & inventions', 'Multimedia & file formats',
];
T.GEO = [
  H + 'Earth: latitude, longitude, time zones', H + 'Atmosphere, winds, climate zones', 'Oceans, currents, tides',
  H + 'World\'s largest/longest: rivers, mountains, deserts', H + 'Physiography & soils of Bangladesh',
  H + 'Ecosystem, biodiversity, protected areas of BD', H + 'Climate change, global warming, ozone',
  H + 'Disasters: cyclone, flood, earthquake, landslide, drought', H + 'Disaster management in BD: cycle, SOD, early warning',
  H + 'Environmental conventions: Ramsar, CBD, Montreal', 'Population, urbanization, migration',
  'Rocks, volcanoes, plate tectonics', 'Maps, GIS & remote sensing',
];
T.ETH = [
  H + 'Ethics & morality: concept, sources', H + 'Values: types, social values, values education',
  H + 'Ethical theories: Kant, utilitarianism, virtue ethics', H + 'Socrates, Plato, Aristotle & famous quotes',
  H + 'Good governance: concept & indicators', H + 'Rule of law, accountability, transparency',
  H + 'Law, liberty & equality', H + 'National Integrity Strategy (NIS) 2012', H + 'RTI Act 2009, Citizen Charter, Ombudsman',
  'Corruption & ACC, e-governance', 'Civil service values & code of conduct', 'Human rights & gender equality',
  'Social justice, public interest, conflict of interest', 'Emotional intelligence & professional integrity',
];

// Bangla & English alternate between language and literature topics
function interleave(a, b) {
  const r = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) r.push(a[i]);
    if (i < b.length) r.push(b[i]);
  }
  return r;
}
T.BAN = interleave(BAN_LANG, BAN_LIT);
T.ENG = interleave(ENG_LANG, ENG_LIT);

// Used once the main queue is finished in Phase 1
const EXTRA = {
  MATH: ['PYQ: Arithmetic (10th–47th BCS)', 'PYQ: Algebra', 'PYQ: Geometry & Mensuration', 'Speed drill: 25 mixed MCQ in 25 min'],
  MENT: ['PYQ: Mental Ability (all BCS)', 'Speed drill: 30 reasoning MCQ in 25 min'],
  BAN: ['PYQ: বাংলা ব্যাকরণ (last 10 BCS)', 'PYQ: বাংলা সাহিত্য (last 10 BCS)'],
  ENG: ['PYQ: English grammar (last 10 BCS)', 'PYQ: English literature (last 10 BCS)', 'Vocabulary: 40 new words + revision'],
  BD: ['PYQ: Bangladesh Affairs'],
  INT: ['PYQ: International Affairs'],
  SCI: ['PYQ: General Science (last 10 BCS)', 'Revise 🔥 Physics/Chemistry/Biology topics'],
  ICT: ['PYQ: Computer & ICT (last 10 BCS)', 'Revise 🔥 ICT topics + abbreviations'],
  GEO: ['PYQ: Geography & Disaster Management'],
  ETH: ['PYQ: Ethics, Values & Good Governance'],
};

// Weekly template. JS getUTCDay(): 0=Sun ... 6=Sat. Friday (5) is test/review day.
const WEEK = {
  6: ['MATH', 'BAN', 'ENG', 'BD'],   // Saturday
  0: ['MENT', 'ENG', 'BAN', 'INT'],  // Sunday
  1: ['MATH', 'BAN', 'SCI', 'ICT'],  // Monday
  2: ['MENT', 'ENG', 'BD', 'GEO'],   // Tuesday
  3: ['MATH', 'BAN', 'ENG', 'SCI'],  // Wednesday
  4: ['BD', 'INT', 'ICT', 'ETH'],    // Thursday
};
const DAYNAME = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = [];
for (let i = 0; i < TOTAL_DAYS; i++) {
  const d = new Date(START + i * 86400000);
  days.push({ n: i + 1, d, dow: d.getUTCDay(), phase: i + 1 <= P1_END ? 1 : i + 1 <= P2_END ? 2 : 3 });
}
const fmt = d => `${String(d.getUTCDate()).padStart(2, '0')} ${MONTHS[d.getUTCMonth()].slice(0, 3)} ${d.getUTCFullYear()}`;
const cell = (code, text) => `**${SUBJ[code]}:** ${text}`;
const strip = t => t.replace(H, '');

// Stable topic ids (e.g. BD-01) — materials/topics/<id>.md holds each topic's notes
const TOPICS = [], ID = {};
for (const k of Object.keys(SUBJ)) ID[k] = T[k].map((t, i) => {
  const id = `${k}-${String(i + 1).padStart(2, '0')}`;
  TOPICS.push({ id, code: k, subject: SUBJ[k], title: strip(t), hot: t.startsWith(H) });
  return id;
});

// ---------- Phase 1: one new topic per slot ----------
const ptr = {}, extraPtr = {};
Object.keys(SUBJ).forEach(k => { ptr[k] = 0; extraPtr[k] = 0; });
const covered = {}; // month key -> subject -> topics
function nextTopic(code) {
  if (ptr[code] < T[code].length) return T[code][ptr[code]++];
  const e = EXTRA[code];
  return e[extraPtr[code]++ % e.length];
}

// ---------- Phase 2: split each subject's topics into revision chunks ----------
const p2Slots = {};
Object.keys(SUBJ).forEach(k => (p2Slots[k] = 0));
days.filter(x => x.phase === 2 && WEEK[x.dow]).forEach(x => WEEK[x.dow].forEach(c => p2Slots[c]++));
const p2Chunks = {}, p2Ptr = {}, p2Ids = {};
for (const k of Object.keys(SUBJ)) {
  const list = T[k], n = p2Slots[k], chunks = [], ids = [];
  for (let i = 0; i < n; i++) {
    const a = Math.floor((i * list.length) / n), b = Math.floor(((i + 1) * list.length) / n);
    chunks.push(list.slice(a, Math.max(b, a + 1)).map(strip).join(' · '));
    ids.push(ID[k].slice(a, Math.max(b, a + 1)));
  }
  p2Chunks[k] = chunks;
  p2Ids[k] = ids;
  p2Ptr[k] = 0;
}

// ---------- Phase 3 rapid-revision rotation ----------
const RAPID = [
  ['**Bangla:** বানান, বাক্য শুদ্ধি, সমাস, সন্ধি, বাগধারা, এক কথায় প্রকাশ',
   '**English:** right form of verbs, correction, idioms, group verbs, synonyms/antonyms',
   '**BD Affairs:** 1952–1971 timeline, Constitution articles & amendments',
   '**Math:** formula sheet + 20 mixed MCQ (timed)'],
  ['**Bangla Lit:** মধুসূদন, রবীন্দ্রনাথ, নজরুল, ছদ্মনাম, পত্রিকা',
   '**English Lit:** periods, Shakespeare, Romantics, Victorians, famous quotes',
   '**International:** UN & organizations, HQs, current conflicts, treaties',
   '**Mental Ability:** series, coding, blood relation, clock/calendar, mechanical'],
  ['**Science:** human body, vitamins, diseases, chemical names, light/sound/heat',
   '**ICT:** number system, logic gates, networking, security, abbreviations',
   '**Geography & Ethics:** disaster management, climate treaties, NIS, RTI, governance',
   '**Current affairs:** last 6 months BD + world, budget, indices, Nobel'],
];

let weeklyTest = 0, monthlyTest = 0, modelTest = 0, rapidIdx = 0;

for (const x of days) {
  const mk = `${x.d.getUTCFullYear()}-${x.d.getUTCMonth()}`;
  covered[mk] = covered[mk] || {};
  const isLastFriOfMonth = x.dow === 5 && new Date(x.d.getTime() + 7 * 86400000).getUTCMonth() !== x.d.getUTCMonth();
  const daysLeft = TOTAL_DAYS - x.n;
  x.topics = [[], [], [], []];

  if (x.phase === 1) {
    if (x.dow === 5) {
      if (isLastFriOfMonth) {
        monthlyTest++;
        x.slots = [`📝 **Monthly Model Test #${monthlyTest}:** 200 MCQ, 2 hours, syllabus covered so far (hours 1–2)`, '↑ (test continues)',
          '**Test analysis:** check every wrong & guessed answer, note weak topics', '**Current affairs:** monthly magazine + key news of the month'];
      } else {
        weeklyTest++;
        x.slots = [`📝 **Weekly Test #${weeklyTest}:** 50 MCQ on this week's topics (35 min) + analysis`,
          '**Current affairs:** this week\'s newspaper notes', '**Revision:** all 🔥 topics of this week; update short notes',
          '**Backlog:** finish any missed topic (else extra PYQ practice)'];
      }
    } else {
      x.slots = WEEK[x.dow].map((c, si) => {
        const before = ptr[c];
        const t = nextTopic(c);
        if (ptr[c] > before) x.topics[si] = [ID[c][before]];
        (covered[mk][c] = covered[mk][c] || []).push(t);
        return cell(c, t);
      });
    }
  } else if (x.phase === 2) {
    if (x.dow === 5) {
      x.slots = ['📝 **Subject Test:** 100 MCQ on this week\'s revised topics (1 hr)', '**Test analysis** + correct your notes',
        '**Current affairs:** weekly news + monthly magazine', '**Weak area:** redo the 20 hardest questions of the week'];
    } else {
      x.slots = WEEK[x.dow].map((c, si) => {
        x.topics[si] = p2Ids[c][p2Ptr[c]];
        const t = p2Chunks[c][p2Ptr[c]++];
        (covered[mk][c] = covered[mk][c] || []).push('🔁 ' + t);
        return `**${SUBJ[c]}:** 🔁 Revise + PYQ — ${t}`;
      });
    }
  } else {
    if (daysLeft <= 1) {
      x.slots = ['**Final look:** your own short notes only (no new topics)', '**Final look:** formula sheet & Constitution key articles',
        '**Final look:** current affairs one-pager', '**Rest:** prepare admit card, pen, sleep 7–8 hours'];
    } else if ([6, 1, 3].includes(x.dow)) {
      modelTest++;
      x.slots = [`📝 **Full Model Test #${modelTest}:** 200 MCQ, 2 hours, strict timing, OMR sheet (hours 1–2)`, '↑ (test continues)',
        '**Analysis:** mark wrong/guessed answers, calculate score after −0.5 negative', '**Fix mistakes:** re-read the topics you got wrong today'];
    } else if (x.dow === 5) {
      x.slots = ['**Current affairs:** final round (BD + international)', '**Constitution:** important articles & amendments quick read',
        '**Math & Mental:** formula sheet + 30 mixed MCQ', '**Light review** of the week\'s mistake notebook'];
    } else {
      x.slots = RAPID[rapidIdx++ % RAPID.length];
    }
  }
}

// ---------- Write monthly files ----------
fs.mkdirSync(OUT, { recursive: true });
const PHASE_NAME = {
  1: 'Phase 1 — Foundation (cover the full syllabus once, 🔥 topics first)',
  2: 'Phase 2 — Revision + Previous Year Questions (PYQ)',
  3: 'Phase 3 — Full Model Tests + Final Revision',
};
const byMonth = {};
days.forEach(x => {
  const k = `${x.d.getUTCFullYear()}-${String(x.d.getUTCMonth()).padStart(2, '0')}`;
  (byMonth[k] = byMonth[k] || []).push(x);
});
const weekStart = START - ((new Date(START).getUTCDay() + 1) % 7) * 86400000; // Saturday on/before start
const weekNo = x => Math.floor((x.d.getTime() - weekStart) / (7 * 86400000)) + 1;

// Machine-readable copy for the website (website/build.js reads this)
fs.writeFileSync(path.join(OUT, 'routine.json'), JSON.stringify({
  start: new Date(START).toISOString().slice(0, 10),
  totalDays: TOTAL_DAYS,
  phases: [
    { n: 1, name: 'Foundation', from: 1, to: P1_END },
    { n: 2, name: 'Revision + PYQ', from: P1_END + 1, to: P2_END },
    { n: 3, name: 'Model tests', from: P2_END + 1, to: TOTAL_DAYS },
  ],
  days: days.map(x => ({ n: x.n, date: x.d.toISOString().slice(0, 10), dow: x.dow, phase: x.phase, week: weekNo(x), slots: x.slots, topics: x.topics })),
  topics: TOPICS,
}, null, 1), 'utf8');

Object.keys(byMonth).sort().forEach((k, mi) => {
  const list = byMonth[k];
  const d0 = list[0].d;
  const title = `${MONTHS[d0.getUTCMonth()]} ${d0.getUTCFullYear()}`;
  const phases = [...new Set(list.map(x => x.phase))];
  let md = `# Month ${mi + 1}: ${title}\n\n`;
  md += `**Day ${list[0].n} → Day ${list[list.length - 1].n}** of 182  \n`;
  md += `**Phase:** ${phases.map(p => PHASE_NAME[p]).join(' / ')}\n\n`;
  md += `> Daily 4 hours = 4 blocks of 50 min study + 10 min break. Friday is test & review day.  \n`;
  md += `> 🔥 = hot / frequently asked topic. 🔁 = revision. Tick ☐ → ☑ when the day is done.  \n`;
  md += `> Extra (optional, outside the 4 hours): 15 min newspaper every day for current affairs.\n\n`;
  md += `See [00_Study_Guideline.md](00_Study_Guideline.md) for strategy, books and timing.\n\n`;

  let curWeek = null;
  for (const x of list) {
    const w = weekNo(x);
    if (w !== curWeek) {
      curWeek = w;
      md += `\n## Week ${w}\n\n| Day | Date | Hour 1 | Hour 2 | Hour 3 | Hour 4 | Done |\n|---|---|---|---|---|---|---|\n`;
    }
    const label = x.dow === 5 ? `**${DAYNAME[x.dow]}**` : DAYNAME[x.dow];
    md += `| ${x.n} | ${fmt(x.d)} (${label}) | ${x.slots.join(' | ')} | ☐ |\n`;
  }

  const cov = covered[`${d0.getUTCFullYear()}-${d0.getUTCMonth()}`] || {};
  const keys = Object.keys(SUBJ).filter(c => cov[c]);
  if (keys.length) {
    md += `\n## Month-end checklist — topics studied this month\n\n`;
    for (const c of keys) {
      md += `**${SUBJ[c]}**\n`;
      [...new Set(cov[c])].forEach(t => (md += `- [ ] ${t}\n`));
      md += `\n`;
    }
  }
  const fname = `${String(mi + 1).padStart(2, '0')}_${MONTHS[d0.getUTCMonth()]}_${d0.getUTCFullYear()}.md`;
  fs.writeFileSync(path.join(OUT, fname), md, 'utf8');
  console.log('wrote', fname, list.length, 'days');
});

// ---------- Hot topics checklist ----------
let hot = '# 🔥 Hot Topics Checklist — BCS Preliminary\n\n';
hot += 'These topics are asked most often in previous BCS exams. Revise each at least 3 times before the exam.\n\n';
hot += '| Subject | Marks |\n|---|---|\n';
const MARKS = { BAN: 35, ENG: 35, BD: 30, INT: 20, GEO: 10, SCI: 15, ICT: 15, MATH: 15, MENT: 15, ETH: 10 };
for (const c of ['BAN', 'ENG', 'BD', 'INT', 'GEO', 'SCI', 'ICT', 'MATH', 'MENT', 'ETH']) hot += `| ${SUBJ[c]} | ${MARKS[c]} |\n`;
hot += '| **Total** | **200** |\n\n';
hot += 'Revision rounds: ☐ = Round 1 (Phase 1) · ☐ = Round 2 (Phase 2) · ☐ = Round 3 (Phase 3)\n';
for (const c of ['BAN', 'ENG', 'BD', 'INT', 'GEO', 'SCI', 'ICT', 'MATH', 'MENT', 'ETH']) {
  hot += `\n## ${SUBJ[c]} (${MARKS[c]} marks)\n\n`;
  T[c].filter(t => t.startsWith(H)).forEach(t => (hot += `- ☐ ☐ ☐ ${strip(t)}\n`));
}
fs.writeFileSync(path.join(OUT, '07_Hot_Topics_Checklist.md'), hot, 'utf8');

// Report coverage so we know Phase 1 covered every topic
for (const k of Object.keys(SUBJ)) console.log(k, 'topics', T[k].length, 'phase1 used', ptr[k], 'p2 slots', p2Slots[k]);
console.log('model tests', modelTest, 'weekly', weeklyTest, 'monthly', monthlyTest);
