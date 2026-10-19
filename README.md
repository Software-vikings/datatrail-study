# DataTrail — Learn by doing

A browser-based data analytics learning studio for beginners progressing toward analyst-level work. The existing Python course contains 84 lessons, 84 executable coding exercises and 205 named test cases, with explicit Basic, Intermediate and Advanced boundaries and a dedicated Python interview gym with 51 questions. Programme 1, Python for Data Analytics, is the new beginner-to-analyst curriculum being released separately in verified chapters. SQL and the other subject tracks remain in the site; their teaching redesign is staged separately.

Programme 1 — **Python for Data Analytics** — is a separate 21-chapter beginner-to-analyst curriculum defined in `assets/python-data-analytics.js`. Its Phase 7 feature branch releases all 21 interactive chapters (P1-C00–P1-C20) with 155 named coding checks. The sequence covers core Python, NumPy/pandas, statistics/visualisation, deterministic API collection, SQLite/pandas database integration, openpyxl workbook automation and four end-to-end analyst portfolio projects. Its 100-question interview bank is divided into Lowball (20), Core (35), Highball (25) and Trap (20). The separate 84-lesson Python course remains available, with its 205 named checks preserved.

## Publish the study site

The GitHub Pages deployment workflow publishes from `main` (or by an authorised manual dispatch). **Programme 1's 21-chapter implementation is currently held in the stacked feature pull requests #1–#7, not yet merged into `main`.** The production site therefore must not be assumed to contain this new curriculum yet.

After the full PR chain has been reviewed and merged in order (#1 → #2 → #3 → #4 → #5 → #6 → #7), and the repository owner has authorised publication:

1. Open **Settings → Pages** and confirm **Source** is set to **GitHub Actions**.
2. Open the **Actions** tab and select **Deploy DataTrail to GitHub Pages**.
3. Run the workflow only after the final merged `main` branch passes the release gate.
4. Confirm the deployment workflow succeeds, then use the site URL shown in its workflow summary.

The expected project-site URL is `https://software-vikings.github.io/datatrail-study/`, but a URL existing does not prove that the latest feature stack has been deployed. Verify the deployment run before treating it as live.

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
- Python for Data Analytics (Programme 1): all 21 chapters (P1-C00–P1-C20) are released with beginner-first teaching, runnable examples, expected output, prediction prompts, coding exercises, hints, reference solutions and mastery checks. The sequence includes NumPy, pandas, statistics, Matplotlib/Seaborn/Plotly visualisation, offline API collection, SQLite/pandas integration, automated Excel reporting, four executable portfolio projects and a 100-question analyst interview bank.
- Python (separate course): 84 lessons across Basic (22), Intermediate (40) and Advanced (22), including OOP, descriptors, metaclasses, generators, decorators, testing, concurrency and production-oriented design.
- NumPy: arrays and axes, importing libraries, indexing, vectorisation, broadcasting, aggregation and boolean masks.
- pandas: DataFrames, creating and inspecting tables, reading files, selecting, filtering, sorting, missing values, groupby, merge and pivot tables.
- Statistics: what statistical thinking is, variable types, counts and percentages, averages, spread, sampling, bias, probability, confidence intervals and hypothesis testing.
- Power BI: BI fundamentals, data-model/report concepts, chart selection, KPIs, data preparation, relationships, star schema, measures, DAX and dashboard design.
- Career toolkit: projects, practice arena, and interview preparation.

## Python coding studio and stage progression

- The Python exercise editor uses CodeMirror with Python syntax highlighting and line numbers. A plain-text editor fallback remains available if the editor CDN cannot load.
- Python code executes locally in the browser using Pyodide 314.0.7. No local Python installation or account is required; first use downloads the runtime and needs an internet connection.
- Each of the 84 exercises in the separate Python course has a starter, hint, model solution and named test cases. Programme 1 currently has 21 interactive lessons with 155 named exercise checks; each uses its own lesson package and beginner-oriented exercise. NumPy, pandas, SciPy and Matplotlib are loaded automatically for the relevant lessons; Seaborn and Plotly are installed when their visualisation lesson is opened. Matplotlib and Plotly outputs receive chart previews in the coding workspace. Learners can run code separately from checking correctness; released Programme 1 examples show expected output alongside the actual browser-Python result. Failed checks are named, and tests can show expected versus actual values. Chapter progression requires the coding checks and knowledge check to pass.
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
- [Programme 1 engineering handoff](docs/DATATRAIL_PYTHON_PROGRAMME_HANDOFF.md) — verified completed curriculum, technical architecture, final CI evidence, stacked PR chain and remaining release-readiness checks.
- [New-chat continuation prompt](docs/CHATGPT_NEW_CHAT_PROMPT.md) — ready-to-paste instructions for release-readiness review from the completed 21-chapter state.

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
python3 -m pip install numpy pandas scipy matplotlib seaborn plotly openpyxl
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
node --check assets/programme1-readiness.js
node --check scripts/validate_pages_release.js
node scripts/validate_pages_release.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_programme1_lessons.py scripts/verify_programme1_projects.py scripts/verify_python_exercises.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_programme1_projects.py
python3 scripts/verify_python_exercises.py
```

The Pages release script checks the exact production chapter set, project and question counts, legacy exercise inventory and UI-to-asset wiring. The Python curriculum validator checks chapter order, release states, prerequisites, references, project folders and interview allocation. The lesson and project verifiers execute the released examples in isolated temporary working directories; the legacy verifier runs all 84 reference solutions. The `Validate DataTrail Programme 1` workflow runs these checks on feature branches and stacked pull requests. It does not deploy feature branches to GitHub Pages.


## Programme 1 portfolio and analyst interview readiness

The completed Programme 1 curriculum includes four executable analyst portfolio projects under `projects/programme-1/`. Each project contains synthetic input data or deterministic fixtures, a runnable Python workflow and a README with its business question, metrics, methodology, deliverables and limitations.

Verify all four projects from the repository root:

```bash
python3 -m pip install pandas matplotlib openpyxl
python3 scripts/verify_programme1_projects.py
```

The Programme 1 interview bank contains **100 questions**: Lowball 20, Core 35, Highball 25 and Trap 20. Each includes a model answer, interviewer rationale and follow-up. The separate 51-question Python interview gym remains distinct.


### Phase 7 verification evidence

The final Phase 7 head `2b82e58b92661639898d8f8e6e4be653bfb734b3` passed both fresh GitHub Actions validations:
- [Push run #130](https://github.com/Software-vikings/datatrail-study/actions/runs/39202830859) — success.
- [Pull-request run #131](https://github.com/Software-vikings/datatrail-study/actions/runs/39202835462) — success.

Both runs passed the shared Pages release gate, the 21-chapter curriculum validator, all 155 Programme 1 checks, all four project executions and the 84/205 legacy regression suite. This verifies the feature branch; it does not publish the site.
