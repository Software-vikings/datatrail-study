# Programme 1 development log

This log records the implemented state of Programme 1 and the checks run for each release. A chapter is counted as available only after its lesson package, tutor integration and automated checks are complete.

## Current release state

- Curriculum: 21 chapters across five stages, defined in `assets/python-data-analytics.js`.
- Available interactive chapters: 17 of 21 (P1-C00 through P1-C16).
- Available coding exercises: 17, with 106 named automated checks.
- Planned chapters: 4 (P1-C17 through P1-C20).
- Existing Python course: its separate 84-lesson track remains available and is not replaced by Programme 1.
- Progress: Programme 1 chapter completion and drafts use separate localStorage keys. Existing Python progress and drafts continue using their original keys.
- Deployment: development occurs on feature branches and stacked pull requests. Nothing is published to the live site until the required pull requests are merged to `main`.

## 2026-10-19 — Phase 2: First beginner learning slice

### Delivered

1. Added a distinct **Python for Data Analytics** learning path without replacing the existing Python course.
2. Released P1-C00, **Getting started with Python**, covering running code, output, errors, the browser runtime and optional local script execution.
3. Released P1-C01, **First instructions and calculations**, covering print, comments, expressions, variables, assignment and basic shop calculations.
4. Added runnable worked examples with expected output beside the actual result from browser Python.
5. Added independent Programme 1 draft and completion state. P1-C01 is locked until P1-C00 is completed.
6. Added named test feedback with expected and actual values where the test provides them.
7. Added the released-lesson reference verifier and integrated it into CI.
8. Updated the README, curriculum validator, deployment validation and lesson-authoring standard.

### Verification

GitHub Actions run [#25](https://github.com/Software-vikings/datatrail-study/actions/runs/39190627418) completed successfully. The two released lessons passed all 6 named checks. All 84 legacy Python reference solutions passed their 205 named checks. JavaScript syntax, Python syntax and curriculum validation also passed.

## 2026-10-19 — Phase 3: Core Python foundations

### Delivered

1. Released P1-C02, **Types, conversion and text**: integers, floats, strings, Boolean values, conversion, whitespace and consistent text formatting.
2. Released P1-C03, **Decisions and business rules**: comparison operators, Boolean conditions, ordered if/elif/else branches and inclusive business thresholds.
3. Released P1-C04, **Loops and repeated work**: for loops, iterating over records, counters, accumulators and conditional counting.
4. Released P1-C05, **Python collections for business data**: lists, tuples, dictionaries, sets, indexing, key lookup, deduplication and membership.
5. Released P1-C06, **Functions and reusable analysis**: parameters, arguments, return values, local scope and default arguments.
6. Released P1-C07, **Errors, debugging and tests**: common Python exceptions, reading errors, try/except for expected conversion failures and assertions.
7. Released P1-C08, **Files, CSV, JSON and dates**: CSV DictReader, numeric conversion, ISO dates, pathlib, JSON serialisation, file writing and reading.
8. Added self-contained examples, expected outputs, prediction explanations, practical tasks, hints, model solutions and named tests for every new chapter.
9. Added regression guards for the core concepts and isolated file-based reference tests in temporary working directories.
10. Updated the README, manifest, release validation, production deployment gate and this development log.

### Verification commands

Run from the repository root:

```bash
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_programme1_lessons.py scripts/verify_python_exercises.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_python_exercises.py
```

The phase is considered verified only when the matching GitHub Actions run completes successfully. The checks validate lesson-to-curriculum alignment, required topic coverage, reference solutions, named exercise checks, the entire legacy exercise bank and JavaScript/Python syntax. They do not replace manual browser and device review.

**Phase 3 CI result:** GitHub Actions run [#50](https://github.com/Software-vikings/datatrail-study/actions/runs/39192611471) completed successfully. All nine released Programme 1 lessons passed their 45 named checks; all 84 legacy Python reference solutions passed their 205 named checks. JavaScript/Python syntax and curriculum/topic validation also passed.


## 2026-10-19 — Phase 4: NumPy and pandas foundations

### Delivered

1. Released P1-C09, **NumPy numerical foundations**: array construction, shape, dimensions and dtypes; indexing and slicing; reshape and concatenate; vectorised calculations; broadcasting; Boolean masks; axis-based aggregation; finite-value checks and `np.where`.
2. Released P1-C10, **pandas: tables from files**: Series and DataFrames, CSV loading and export, date parsing, structural inspection, numeric types and a real CSV round-trip. The lesson explains that `read_excel()` requires a compatible Excel engine to be available.
3. Released P1-C11, **Selecting, filtering and transforming rows**: column selection, `loc`/`iloc`, compound Boolean filtering, sorting, string cleaning, date parts and derived business categories.
4. Released P1-C12, **Data cleaning and quality checks**: duplicate business keys, missing values, invalid numeric/date conversion, negative values, explicit validity rules and before/after audit counts.
5. Released P1-C13, **Grouping and business summaries**: named `groupby` aggregations, unique counts, revenue shares, `transform`, `filter`, crosstabs and pivot tables.
6. Released P1-C14, **Joining, reshaping and time-based analysis**: `concat`, validated many-to-one merges, unmatched-key checks, monthly resampling, rolling averages, prior-period shifts, pivot and melt.
7. Added lesson-level package declarations and integrated automatic NumPy/pandas loading into both the worked-example runner and graded coding-exercise runner. The standalone NumPy/pandas lab reuses the same package-loading helper.
8. Added real NumPy/pandas imports to the lesson reference verifier and installed those dependencies in GitHub Actions before running lesson tests.
9. Updated the release validator and production deployment gate to require the exact first 15 chapters. Chapters P1-C15–P1-C20 remain planned and are not represented as released.
10. Updated the README, this development log and the lesson-authoring standard. The separate 84-lesson Python course and its saved progress keys remain separate and unchanged.

### Verification commands

Run from the repository root:

```bash
python3 -m pip install numpy pandas
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_programme1_lessons.py scripts/verify_python_exercises.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_python_exercises.py
```

The Stage B release adds 44 named NumPy/pandas exercise checks. Together, the 15 available Programme 1 lessons contain 89 named checks. Automated validation also retains all 84 legacy Python reference solutions and their 205 named checks.


## 2026-10-19 — Phase 5: Statistics and visualisation

### Delivered

1. Released P1-C15, **Statistics for working analysts**: variable descriptions, quantiles and IQR outliers; sample standard deviation and standard error; t-based confidence intervals; independent Welch and paired t-tests; Cohen's d; chi-square for categorical conversion outcomes; one-way ANOVA; Pearson correlation; binomial and normal probabilities.
2. Built an applied statistical workflow that requires the learner to match each test to the data type and study design, report effect size and uncertainty, and distinguish statistical significance from causation.
3. Released P1-C16, **Visualisation and analytical communication**: Matplotlib figure/axes, Seaborn distribution comparisons, Plotly interactive figures, chart selection, titles, units, legends, accessible labels, zero baselines, uncertainty intervals, annotation and misleading scales.
4. Added an integrated three-chart exercise: an uncertainty-aware Matplotlib bar chart, a Seaborn campaign box plot and a Plotly interactive monthly trend. The task ends with a question/method/result/limitation/action narrative.
5. Added a safe, sandboxed chart-preview surface to both the worked-example and coding-exercise steps. Matplotlib figures are rendered as images and Plotly figures are displayed in a sandboxed HTML iframe.
6. Added lesson-specific SciPy and Matplotlib package loading, with Seaborn and Plotly installed through micropip when P1-C16 is opened.
7. Extended the reference verifier to import actual SciPy, Matplotlib, Seaborn and Plotly dependencies. Matplotlib is configured with the headless Agg backend for deterministic CI verification.
8. Expanded CI dependency installation and topic, runtime-package, PyPI-package and chart-renderer validation. The production deployment gate now requires exactly P1-C00 through P1-C16.
9. Updated the README, this log and the lesson-authoring standard. Four final curriculum chapters (P1-C17–P1-C20) remain planned.

### Verification commands

Run from the repository root:

```bash
python3 -m pip install numpy pandas scipy matplotlib seaborn plotly
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_programme1_lessons.py scripts/verify_python_exercises.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_python_exercises.py
```

Phase 5 adds 17 named checks across two lessons. Programme 1 now contains 17 released lessons and 106 named exercise checks. The CI suite continues to execute all 84 reference solutions and 205 named checks in the separate legacy Python course.

**Phase 5 CI result:** GitHub Actions run [#83](https://github.com/Software-vikings/datatrail-study/actions/runs/39196482320) completed successfully. Run #81 also passed; #83 is the latest successful run after the final Phase 5 documentation update. All 17 released Programme 1 lessons passed their 106 named checks; all 84 legacy Python reference solutions passed their 205 named checks. Dependency installation, JavaScript/Python syntax, curriculum validation, runtime package declarations and chart preview integration also passed.


## 2026-10-19 — New-chat handoff checkpoint (Phase 6 not yet implemented)

### Verified repository state

- Programme 1 remains a 21-chapter, five-stage curriculum.
- P1-C00–P1-C16 are implemented and verified: **17 interactive lessons and 106 named exercise checks**.
- P1-C17–P1-C20 remain planned. Do not count any of them as released.
- The separate Python course remains at **84 reference solutions and 205 named tests**.
- Programme 1 progress and drafts remain separate from the original Python course. Do not rename, reset or reuse its legacy progress keys.
- The latest successful Phase 5 CI run is [#83](https://github.com/Software-vikings/datatrail-study/actions/runs/39196482320). It verified the 17 Programme 1 lessons/106 checks, the 84 legacy Python solutions/205 checks, syntax, curriculum and dependency/package integration.
- Phase 5 head at this checkpoint: `2f84fc5ecc6bf60f2c06653dab2473cfc18c96bc`.
- Phase 5 is a stacked feature branch and has not been merged to `main`. The Phase 5 branch was 69 commits ahead of `main` with no commits behind at the checkpoint.

### Stacked pull-request sequence

1. [PR #1 — curriculum foundation](https://github.com/Software-vikings/datatrail-study/pull/1), based on `main`.
2. [PR #2 — first Programme 1 lessons](https://github.com/Software-vikings/datatrail-study/pull/2), based on Phase 1.
3. [PR #3 — core Python C02–C08](https://github.com/Software-vikings/datatrail-study/pull/3), based on Phase 2.
4. [PR #4 — NumPy/pandas C09–C14](https://github.com/Software-vikings/datatrail-study/pull/4), based on Phase 3.
5. [PR #5 — statistics/visualisation C15–C16](https://github.com/Software-vikings/datatrail-study/pull/5), based on Phase 4.
6. Phase 6 PR #6 is not created yet. Its continuation branch is `programme-1/phase-6-analyst-workflows-readiness`, based on `programme-1/phase-5-statistics-visualisation`.

All Phase 1–5 PRs were open and unmerged at the checkpoint. Query GitHub for their live state before resuming. Do not merge or deploy unless explicitly authorised.

### Next implementation batch — Phase 6

Implement all three lessons as complete interactive packages:

- **P1-C17 — APIs and external data collection:** HTTP and GET requests, query parameters, JSON parsing, response/status validation, timeouts, bounded retry/backoff, pagination, rate limits, environment-variable credentials and reproducible storage. Keep exercises deterministic; do not require real external APIs, secrets or third-party uptime.
- **P1-C18 — Python and database integration:** SQLite connections/cursors, parameterised SQL, transactions, context managers/cleanup, pandas read/write integration and SQL-versus-pandas judgement. Use temporary or in-memory databases.
- **P1-C19 — Excel automation and repeatable reporting:** workbook/sheet creation, reading/writing, styles, number formats, formulas, batch monthly-file processing, logging, validation/reconciliation and reusable reporting workflows. Use temporary files and confirm openpyxl browser/micropip compatibility if selected.

Phase 6 release target: 20 available lessons (P1-C00–P1-C19), one planned chapter (P1-C20), a consistent manifest/deploy gate and full regression success. Update the curriculum validator's exact release set and CI dependencies. Run all lesson solutions and named checks, all legacy Python checks, syntax, validator and deployment gate. Record the actual final CI run in the docs and PR #6. Then leave the PR open and unmerged.

### Following batch — Phase 7

After Phase 6 is fully complete and verified, implement P1-C20, **Analyst projects and interview readiness**. Deliver all four substantial portfolio projects and the full Programme 1 interview target of 100 questions (Lowball 20, Core 35, Highball 25, Trap 20), plus meaningful end-to-end assessment, rubrics, documentation and readiness criteria. Keep the legacy 51-question Python interview gym distinct. Stack Phase 7 on Phase 6 and update the production release gate to C00–C20 only after this final chapter is truly complete.

### Handoff documentation added

- `docs/DATATRAIL_PYTHON_PROGRAMME_HANDOFF.md` is the detailed source of truth for curriculum, architecture, progress isolation, verification, package/runtime design, next-phase scope and the PR dependency chain.
- `docs/CHATGPT_NEW_CHAT_PROMPT.md` contains the ready-to-paste continuation prompt.
- The README links both documents.

**Important:** The Phase 6 branch was created for continuity, but no Phase 6 lesson or runtime implementation has been committed at this checkpoint. Start the next session by verifying the branch and repository state, then implement; do not report Phase 6 as complete.


## 2026-10-19 — Phase 6 implementation: Analyst workflows (P1-C17–P1-C19)

### Implementation delivered
1. P1-C17 — **APIs and external data collection**: GET query construction, JSON parsing and schema checks, HTTP status handling, finite timeout, bounded retry/backoff, 4xx versus 429/5xx handling, pagination stop condition and maximum-page guard, environment-variable credentials and reproducible JSON storage. The fake transport is deterministic; examples and automated checks do not call the public internet or require secrets.
2. P1-C18 — **Python and database integration**: in-memory SQLite, keys and constraints, parameterised queries, SQL-injection resistance, transaction commit/rollback, explicit connection close, pandas read_sql_query/to_sql and reconciliation.
3. P1-C19 — **Excel automation and repeatable reporting**: openpyxl batch ingestion from monthly CSVs, invalid-row logging, Summary and Details sheets, styling, number formats, column widths, frozen headers, filters, grand-total formula, recalculation settings and real save/reopen validation.
4. Manifest release advanced to 1.5.0; C00–C19 available; C20 remains planned. The validator, CI installation and independent Pages deployment gate now require the exact first 20 chapters.
5. Programme 1 progress keys and the separate legacy 84-lesson Python course remain unchanged.

### Validation commands
```bash
python3 -m pip install numpy pandas scipy matplotlib seaborn plotly openpyxl
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_programme1_lessons.py scripts/verify_python_exercises.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_python_exercises.py
```

### CI evidence
**Phase 6 GitHub Actions verification — success:**  
- Push validation [run #102](https://github.com/Software-vikings/datatrail-study/actions/runs/39199800740) — successful on commit `ebeef6fb137e743a44145ae3cf2e06ea8d2c0317`.
- Pull-request validation [run #103](https://github.com/Software-vikings/datatrail-study/actions/runs/39199806299) — successful on the same head.
- Programme 1: **20 released lessons and all 143 named coding checks passed**.
- Legacy Python: **84 reference solutions and all 205 named checks passed**.
- Dependency installation, JavaScript/Python syntax, curriculum/lesson alignment and both exercise suites passed.
- The Phase 6 branch remains stacked on Phase 5. PR #6 is open and unmerged; nothing was deployed.

