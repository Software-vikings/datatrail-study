# DataTrail — Learn by doing

A browser-based data analytics learning studio for beginners moving toward analyst-level work. Development is being delivered in quality-controlled phases. **Phase 1 is the rebuilt Python course: 33 sequenced lessons, 22 executable coding exercises and 60 named test cases.** SQL and the other subject tracks remain in the site; their teaching redesign is staged for later phases.

## Publish the study site

The website files are ready on the `main` branch. To publish:

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and check the **Deploy DataTrail to GitHub Pages** workflow.
4. Once its deployment succeeds, use the URL shown in the workflow summary. For a public project site it will normally be:

   `https://software-vikings.github.io/datatrail-study/`

GitHub Pages is available for public repositories on GitHub Free. Publishing from a private repository requires an eligible paid plan. A Pages site is public on the internet unless it is privately published through an eligible enterprise plan.

## How DataTrail teaches

Every lesson follows the same five-stage learning loop:

1. **Understand** — meet one idea in plain language before technical terminology.
2. **See an example** — follow a worked example and its professional meaning.
3. **Your turn** — attempt a small task, with a hint and a revealable worked solution.
4. **Check yourself** — answer an auto-marked question and retry when needed.
5. **Lock it in** — review the key takeaway and complete the lesson.

Python Phase 1 follows six units: getting started; logic and repetition; Python collections; reusable programs; working with files and data; and analyst practice. Lessons are ordered so that each concept is introduced before it is needed in a later exercise. The next lesson stays locked until the learner completes the current lesson and its matching coding exercise. DataFox, the DataTrail mascot, appears in the learning interface.

## Learning paths

- Excel: datasets, clean table structure, cell references, sorting and filtering, formulas, conditional logic, SUMIFS, lookups and PivotTables.
- SQL: relational tables, rows and keys, query structure, SELECT, filtering, sorting, aggregation, joins, CASE, CTEs and window functions.
- Python Phase 1: 33 lessons covering execution, output, expressions, variables, types, strings, conversion, Boolean logic, decisions, loops, lists, tuples, dictionaries, sets, functions, scope, modules, errors, exceptions, file handling, CSV, JSON, dates, comprehensions, sorting and a sales-summary project.
- NumPy: arrays and axes, importing libraries, indexing, vectorisation, broadcasting, aggregation and boolean masks.
- pandas: DataFrames, creating and inspecting tables, reading files, selecting, filtering, sorting, missing values, groupby, merge and pivot tables.
- Statistics: what statistical thinking is, variable types, counts and percentages, averages, spread, sampling, bias, probability, confidence intervals and hypothesis testing.
- Power BI: BI fundamentals, data-model/report concepts, chart selection, KPIs, data preparation, relationships, star schema, measures, DAX and dashboard design.
- Career toolkit: projects, practice arena, and interview preparation.

## Python Phase 1 coding studio

- The Python exercise editor uses CodeMirror with Python syntax highlighting and line numbers. A plain-text editor fallback remains available if the editor CDN cannot load.
- Python code executes locally in the browser using Pyodide 314.0.7. No local Python installation or account is required; first use downloads the runtime and needs an internet connection.
- Each coding exercise has a starter, a hint, a worked solution and named test cases. Learners can run code separately from running tests. Progress unlocks sequentially and code drafts are saved in the browser.
- Continuous integration syntax-checks the application and exercise bank, verifies the lesson-to-exercise mapping and executes every reference solution against its test suite.

## Other labs

- SQL uses SQLite compiled to WebAssembly through sql.js. First use requires internet access to load the runtime.
- NumPy and pandas are still separate learning tracks, with package loading available in the browser Python runtime.
- Excel is a guided formula trainer, not Microsoft Excel.
- Power BI is a guided model/DAX/report simulator, not Power BI Desktop.
- Statistics provides small descriptive calculators and interpretation practice.

## Progress and privacy

Progress is stored in this browser using localStorage. It is not synced to a server. Use **My progress → Export progress JSON** to create a backup before switching browsers or devices. Because the Python syllabus has been rebuilt from the ground up, old Python lesson completion marks are reset on the first load of this release; progress in the other subject tracks is preserved.

No sign-in, paid API key or backend is required.

## Run locally

Open `index.html`, or serve this directory with:

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765.

## Sample data

The SQL lab contains a small synthetic customers and orders dataset. Use its Download CSV button to export the orders table. A copy is also in `orders-sample.csv`. All names and amounts are fictional.

## Licence

**Proprietary — All Rights Reserved.** Copyright (c) 2026 Software Vikings. No general permission is granted to copy, modify, redistribute, or commercially exploit DataTrail without prior written permission. See the [LICENSE](./LICENSE) file for the full notice.

Because this repository may be made public, GitHub's Terms of Service still allow users to view and fork it within GitHub while it is public. This notice does not prevent viewing or platform-level forking. Third-party components remain subject to their own licences.
