# Topic note format (one file per topic)

File: `materials/topics/<ID>.md`, e.g. `materials/topics/BD-01.md`. IDs and titles come from `routine/routine.json` (`topics`).
The website opens this note when a routine task for that topic is clicked, then runs the practice MCQs as an interactive quiz.

## Audience and scope
- Readers are candidates for **BCS Preliminary** and other Bangladesh government job exams: Bangladesh Bank and other bank jobs (AD, Officer, SO), PSC non-cadre, NTRCA, primary assistant teacher, ministry/department jobs (9th–20th grade), NSI, police SI, and so on.
- Cover what those exams **actually ask**: facts, definitions, dates, names, formulas and exceptions that repeat in previous questions. Put the most frequently asked facts first, and mark them with 🔥.
- One note = one 50-minute study hour: roughly **600–1,100 words** of notes plus the MCQs. Dense, scannable, and accurate beats long.

## Accuracy rules (most important)
- Write only facts you are confident are correct and widely accepted in standard Bangladeshi textbooks and job-exam guides. Where the sources genuinely disagree, give the answer commonly accepted in exams and add a short note ("some sources say …").
- For figures that change (GDP, budget, population estimates, current office-holders, latest rankings, "current" events), give the most recent figure you are sure of **with its year or "as of"**, and add a line: `> 🔄 Update: check the latest figure in a newspaper or the Bangladesh Economic Review.` Never invent recent numbers.
- Don't claim "asked in the 38th BCS" and the like unless you are certain. Use "frequently asked" instead.

## Language
- **Bangla (BAN-\*) topics:** write the note in **Bangla**.
- **English (ENG-\*) topics:** write in English.
- **All other subjects:** write in English. Add Bangla terms in brackets where exams use them, e.g. "sovereignty (সার্বভৌমত্ব)". Bangladesh-affairs names and places may be in Bangla script where natural.

## Required structure
```markdown
# <Topic title exactly as in routine.json, without 🔥>

> **Why it matters:** one or two lines on how exams ask about this topic.

## <Section heading>
…notes: short paragraphs, bullet lists, and tables for lists of facts…

## <More sections as needed>

## Quick revision
- 5–10 one-line facts to re-read before the exam

## Practice MCQ
**1.** Question text?
(a) option (b) option (c) option (d) option

**2.** …
(a) … (b) … (c) … (d) …

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | one short line |
| 2 | d | one short line |
```

## MCQ rules
- **8 questions** per topic (maths and mental-ability topics may have 8–10 worked-style questions).
- Every question has exactly **four options on ONE line**, right after the question line, labelled `(a) (b) (c) (d)`. For Bangla topics, use `(ক) (খ) (গ) (ঘ)`.
- Don't use parentheses followed by a single letter inside option text, e.g. "(a)", or it breaks the parser.
- Exactly one correct answer. Spread correct answers across a/b/c/d.
- Every answer must be backed by the notes above. The "Explanation" column is required: one short line, and for maths the key step.
- Math and mental ability: include worked examples in the notes (question → steps → answer) and shortcut formulas in a table.

## Style
- Use `**bold**` for the fact itself (names, dates, answers). Mark hot facts with 🔥 sparingly.
- Tables for lists of facts (who/what/when). No HTML. No images. No links to outside sites.
