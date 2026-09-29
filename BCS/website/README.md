# BCS 182 website

`index.html` is generated. Edit `template.html` (the design and app code) or the Markdown files, then rebuild:

```
node tools/gen_routine.js   # only if the routine topics or dates change
node tools/build_site.js    # rebuilds website/index.html
```

## Topic notes (what opens when you click a task)
Each routine topic has an ID, such as `BD-01`, and a note at `materials/topics/<ID>.md`. The format is in `materials/topics/FORMAT.md`. Check notes with `node tools/topic_parser.js [ID ...]`. The build packs them into `website/topics/<SUBJECT>.json`; publish those files alongside `index.html`.

## Adding a day's material
Save it as `materials/Week_NN/Day_NNN_YYYY-MM-DD_<name>.md`. `NNN` is the day number in the routine (Day 1 = 1 Oct 2026). The site shows it on that day's page automatically.

## Adding an exam
Use the same file format as `materials/Week_01/Day_002_2026-10-02_Weekly_Test_1.md`:
- `Time: 35 minutes` in the rules section sets the timer.
- Sections start with `## Part A — <Subject> (1–15)`.
- Each question is `**N.** question text`, with its four options on the next line: `(ক) … (খ) … (গ) … (ঘ) …` or `(a) … (b) … (c) … (d) …`.
- A `## ✅ Answer key` section holds a table of `| Q | Ans |` pairs. Optional explanations go on lines like `- **Q4:** text`.

The build stops with an error if any question doesn't have 4 options or a valid answer.
