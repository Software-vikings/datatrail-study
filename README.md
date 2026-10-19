# DataTrail — Learn by doing

A browser-based data analytics learning studio for beginners progressing toward analyst-level work. The existing Python course contains 84 lessons, 84 executable coding exercises and 205 named test cases, with explicit Basic, Intermediate and Advanced boundaries and a dedicated Python interview gym with 51 questions. Programme 1, Python for Data Analytics, is the new beginner-to-analyst curriculum being released separately in verified chapters. SQL and the other subject tracks remain in the site; their teaching redesign is staged separately.

Programme 1 — **Python for Data Analytics** — is being built and released in verified phases. Its versioned 21-chapter curriculum lives in `assets/python-data-analytics.js`; the first 17 interactive chapters are available in the feature release: nine core Python chapters (P1-C00–P1-C08), NumPy foundations (P1-C09), five pandas chapters (P1-C10–P1-C14), statistics (P1-C15) and visualisation (P1-C16). The remaining four chapters stay marked as planned. The separate 84-lesson Python course remains available alongside Programme 1.

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

Python is divided into three explicitly marked stages. **Basic (22 lessons)** covers execution, syntax, types, decisions, loops, collections, functions, files, errors, tests and a sales-report checkpoint. **Intermediate (40 lessons)** begins with OOP and covers classes, constructors, instance/class attributes, classmethod/staticmethod, properties, inheritance, super(), overriding, polymorphism, duck typing, composition, dunder methods, dataclasses, ABCs, Protocols, iterators, generators, closures, decorators, recursion, context managers, typing, testing/mocking, packages, virtual environments, logging and CLI design. **Advanced (22 lessons)** covers descriptors, metaclasses, multiple inheritance/MRO, object identity, copy semantics, garbage collection, weak references, algorithmic complexity, advanced data structures, profiling, caching, async/asyncio, cancellation, concurrency, the GIL, locks/queues, streaming ETL, idempotency, security, generics and dependency injection. Each lesson maps to its own executable coding exercise. The next lesson stays locked until the current lesson and matching exercise pass. DataFox appears in the learning interface.

## Learning paths

- Excel: datasets, clean table structure, cell references, sorting and filtering, formulas, conditional logic, SUMIFS, lookups and PivotTables.
- SQL: relational tables, rows and keys, query structure, SELECT, filtering, sorting, aggregation, joins, CASE, CTEs and window functions.
- Python for Data Analytics (Programme 1): a 21-chapter path from beginner Python to analyst workflows. Chapters 00–16 are released with beginner-first teaching, runnable examples, expected output, prediction prompts, coding exercises, hints, reference solutions and mastery checks. The available sequence now includes NumPy, end-to-end pandas workflows, statistical inference, uncertainty and effect sizes, plus Matplotlib/Seaborn/Plotly visualisation and analytical communication. Chapters 17–20 are visibly marked as planned.
- Python (separate course): 84 lessons across Basic (22), Intermediate (40) and Advanced (22), including OOP, descriptors, metaclasses, generators, decorators, testing, concurrency and production-oriented design.
- NumPy: arrays and axes, importing libraries, indexing, vectorisation, broadcasting, aggregation and boolean masks.
- pandas: DataFrames, creating and inspecting tables, reading files, selecting, filtering, sorting, missing values, groupby, merge and pivot tables.
- Statistics: what statistical thinking is, variable types, counts and percentages, averages, spread, sampling, bias, probability, confidence intervals and hypothesis testing.
- Power BI: BI fundamentals, data-model/report concepts, chart selection, KPIs, data preparation, relationships, star schema, measures, DAX and dashboard design.
- Career toolkit: projects, practice arena, and interview preparation.

## Python coding studio and stage progression

- The Python exercise editor uses CodeMirror with Python syntax highlighting and line numbers. A plain-text editor fallback remains available if the editor CDN cannot load.
- Python code executes locally in the browser using Pyodide 314.0.7. No local Python installation or account is required; first use downloads the runtime and needs an internet connection.
- Each of the 84 exercises in the separate Python course has a starter, hint, model solution and named test cases. Programme 1 currently has 17 interactive lessons with 106 named exercise checks; each uses its own lesson package and beginner-oriented exercise. NumPy, pandas, SciPy and Matplotlib are loaded automatically for the relevant lessons; Seaborn and Plotly are installed when their visualisation lesson is opened. Matplotlib and Plotly outputs receive chart previews in the coding workspace. Learners can run code separately from checking correctness; released Programme 1 examples show expected output alongside the actual browser-Python result. Failed checks are named, and tests can show expected versus actual values. Chapter progression requires the coding checks and knowledge check to pass.
- The Python interview gym contains 51 questions: Lowball screening, Core practical questions, Highball deep dives and Trap/gotcha questions. Each includes a model answer, interviewer rationale and a follow-up prompt.
- Continuous integration syntax-checks the application and exercise bank, verifies stage boundaries and the lesson-to-exercise mapping, and executes every reference solution against its named tests.

## Other labs

- SQL uses SQLite compiled to WebAssembly through sql.js. First use requires internet access to load the runtime.
- Standalone NumPy and pandas reference labs remain available alongside the integrated Programme 1 lessons. Statistics and visualisation lessons use the same browser Python runtime with declared packages and chart previews.
- Excel is a guided formula trainer, not Microsoft Excel.
- Power BI is a guided model/DAX/report simulator, not Power BI Desktop.
- Statistics provides small descriptive calculators and interpretation practice.

## Progress and privacy

Progress is stored in this browser using localStorage and is not synced to a server. Use **My progress → Export progress JSON** to create a backup before switching browsers or devices. Programme 1 uses its own chapter completion and draft keys, separate from the existing 84-lesson Python track, so the new chapters do not overwrite that track’s saved work. The one-time migration behaviour for older DataTrail releases remains unchanged.

No sign-in, paid API key or backend is required.

## Programme 1 development documentation

- [Programme 1 development log](docs/PROGRAMME_1_DEVELOPMENT_LOG.md) — delivered phases, current availability and verification commands.
- [Programme 1 lesson authoring standard](docs/PROGRAMME_1_LESSON_AUTHORING.md) — required lesson structure, teaching rules, test model and release checklist.
- [Programme 1 engineering handoff](docs/DATATRAIL_PYTHON_PROGRAMME_HANDOFF.md) — full curriculum status, technical architecture, branch/PR chain, CI requirements and exact next implementation scope.
- [New-chat continuation prompt](docs/CHATGPT_NEW_CHAT_PROMPT.md) — ready-to-paste instructions to continue implementation in a fresh ChatGPT conversation.

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


## Programme 1 development checks

Run these checks from the repository root before submitting curriculum changes:

```bash
python3 -m pip install numpy pandas scipy matplotlib seaborn plotly
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_python_exercises.py
```

The first check validates chapter order, release states, prerequisites, references, projects, interview targets, topic coverage and the existing lesson-to-exercise mapping. The second executes all released Programme 1 lesson solutions and named tests in isolated temporary working directories. The third executes all 84 reference solutions in the separate Python course. The `Validate DataTrail Programme 1` GitHub Actions workflow runs these checks on Programme 1 feature branches and stacked pull requests; it does not deploy feature branches to GitHub Pages.
