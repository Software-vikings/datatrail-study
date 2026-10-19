# Programme 1 development log

This log records the implemented state of Programme 1 and the checks run for each release. A chapter is counted as available only after its lesson package, tutor integration and automated checks are complete.

## Current release state

- Curriculum: all 21 chapters (P1-C00 through P1-C20) are implemented and released in the Phase 7 feature branch; manifest version 1.6.0.
- Available interactive chapters: **21 of 21**.
- Available coding exercises: **21**, with **162 named automated checks**.
- Portfolio: **four runnable projects** with synthetic data/deterministic fixtures and isolated project verification.
- Interview readiness: **100 Programme 1 questions** — Lowball 20, Core 35, Highball 25 and Trap 20.
- Existing Python course: the separate **84-lesson** track, **84 reference solutions** and **205 named test cases** remain preserved. Its separate 51-question interview gym is not merged into Programme 1.
- Progress: Programme 1 chapter completion/drafts and project-studio progress use separate keys; legacy Python progress is not reset or reused.
- Branch/release state: the final Phase 7 feature branch is `programme-1/phase-7-analyst-projects-interview-readiness`, last successful source-audit code/test head `cfc34de3d5ef04c62707771eb166781525bec53c`. PRs #1–#7 remain a stacked sequence, open and unmerged.
- Deployment: no GitHub Pages deployment has been performed for this feature stack. Do not claim the current production site contains these changes until the PRs merge in order and the Pages workflow succeeds.
- Remaining release tasks: independent code review and manual browser/device QA, followed by explicit owner approval for merge/deploy. GitHub's previous Codex review attempt was blocked by exhausted review quota; no submitted review records or inline threads were present at the checkpoint.
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


## Superseded handoff snapshot — historical only

An earlier handoff snapshot in this log recorded the state after Phase 5, before Phase 6 and Phase 7 were implemented. Its 17/21 availability count, planned C17–C20 status and proposed next-batch instructions are historical and are **not current**. The authoritative current status is the 21/21 release state at the beginning of this document and in `docs/DATATRAIL_PYTHON_PROGRAMME_HANDOFF.md`.

All remaining release actions are review, manual browser/device QA and explicit merge/deployment authorisation; no further Programme 1 lesson phase is pending.

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



## 2026-10-19 — Phase 7 implementation: Analyst projects and interview readiness (P1-C20)

### Delivered
1. Released P1-C20, **Analyst projects and interview readiness**, with a beginner-first worked example, prediction, knowledge check, editable starter, hint, reference solution and 12 named checks. Its readiness evaluator checks common analytical evidence and project-specific deliverables for all four projects.
2. Added four runnable portfolio projects: Sales Data Cleaning and Quality Audit; Retail Performance Analysis; Customer Funnel and Cohort Analysis; Automated Reporting Pipeline. Each includes source data or deterministic fixtures, Python workflows and a standalone README.
3. Added `scripts/verify_programme1_projects.py`, which executes the projects in isolated temporary directories and validates metrics, output files, reconciliations and the generated workbook.
4. Added 100 Programme 1 interview questions with model answers, interviewer rationales and follow-ups: Lowball 20, Core 35, Highball 25 and Trap 20.
5. Integrated the project milestone studio with its own saved-progress key and added the Programme 1 interview filter without replacing the older project prompts or legacy 51-question Python interview gym.
6. Advanced the manifest to v1.6.0; P1-C00–P1-C20 are available. Updated the release validator, feature-branch CI and independent Pages deployment gate to require 21 chapters, four project implementations and the exact interview allocation.

### Full Phase 7 validation commands
```bash
python3 -m pip install numpy pandas scipy matplotlib seaborn plotly openpyxl
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
node --check assets/programme1-readiness.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_programme1_lessons.py scripts/verify_python_exercises.py scripts/verify_programme1_projects.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_programme1_projects.py
python3 scripts/verify_python_exercises.py
```

### GitHub Actions verification — success

Final verified feature head: `2b82e58b92661639898d8f8e6e4be653bfb734b3`.

- [Push validation #130](https://github.com/Software-vikings/datatrail-study/actions/runs/39202830859) — success.
- [Pull-request validation #131](https://github.com/Software-vikings/datatrail-study/actions/runs/39202835462) — success.
- JavaScript syntax, Python syntax, shared Pages release gate and curriculum/semantic validation all passed.
- Programme 1: **21 released lessons and 155 named coding checks — all passed**.
- Portfolio: **all four projects executed**; row-quality audit, retail analysis/charts, funnel/cohort outputs and API-fixture → SQLite → pandas → Excel pipeline verified in temporary directories.
- Legacy Python: **84 reference solutions and 205 named checks — all passed**.
- The Pages workflow now calls the same shared `scripts/validate_pages_release.js` gate that feature CI executes. The Pages workflow also runs the lesson verifier, project verifier and legacy suite before publishing.
- PR #7 remains stacked on Phase 6. No PR was merged and no GitHub Pages deployment was triggered.



## 2026-10-19 — Final documentation checkpoint

After refreshing the engineering handoff and new-chat continuation prompt, the documentation-updated Phase 7 head `91c06bb0ffda7f9b680f4a6369b36f0893fc117a` passed fresh GitHub Actions validation:

- [Push validation #132](https://github.com/Software-vikings/datatrail-study/actions/runs/39202959904) — success.
- [Pull-request validation #133](https://github.com/Software-vikings/datatrail-study/actions/runs/39202963594) — success.

Both runs passed the shared Pages release gate, Programme 1 curriculum/semantic validation, all 21 lesson packages and 155 named checks, all four portfolio project verifications, and the legacy Python suite (84 reference solutions / 205 named checks). These are feature-branch validation runs; they do not publish the website.


## 2026-10-19 — Release hardening: Programme 1 project-progress backup lifecycle

### Defect found and fixed
A source audit found that the four-project studio stored milestone progress in the separate `datatrail-p1-project-progress` localStorage key, but the existing DataTrail progress JSON export/import and Reset progress action did not include that independent store. This could omit portfolio milestones from a learner's backup and leave them behind after a full reset.

### Implementation
1. Added a shared normalizer for Programme 1 project milestone state. It accepts only known project IDs and valid integer milestone indices, removes duplicates and ignores malformed values.
2. Added `programme1ProjectProgress` to the existing progress JSON export.
3. Updated import to restore and normalise this state when present. Older backup files without this field remain valid and do not erase already-saved Programme 1 project milestones.
4. Updated Reset progress to clear both the main DataTrail progress key and the separate Programme 1 project-progress key.
5. Updated the progress-export help text, README and handoff documentation.
6. Extended `scripts/validate_pages_release.js` to assert that export/import/reset are wired and to execute the actual normalizer against duplicate, negative, fractional, out-of-range and unknown-project values.
7. Extended the manual QA checklist with export, import, backwards-compatibility and reset scenarios. These browser tests remain not yet executed.

### GitHub Actions verification — success
The final hardening regression run on feature PR #7, run [#171](https://github.com/Software-vikings/datatrail-study/actions/runs/39205041871), completed successfully on the branch snapshot containing application commit `041f93df0000de1058d0b1792177f8e9579d9b41` and sanitizer-test commit `7df406556807e731163897e102e8438ab54cdb7e`.

- JavaScript syntax and the shared Pages release validator: passed, including the runtime sanitizer regression.
- Curriculum alignment: passed for all 21 available chapters.
- Programme 1 lesson verifier: all **155 named checks** passed.
- Project verifier: all **four portfolio projects** executed successfully.
- Legacy verifier: all **84 reference solutions and 205 named checks** passed.

The run validates the feature PR; it does not merge the PR or publish GitHub Pages. Independent code review and human browser/device acceptance testing remain outstanding.


## 2026-10-19 — Final source-audit pass 2

### Verified hardening
- Programme 1 now has **162 named lesson checks** across its 21 available chapters.
- Project 1 rejects missing customer/product identifiers, empty input, non-finite values, calculated line-revenue overflow and monthly total overflow.
- Project 2 enforces a unique `order_line_id` while allowing repeated `order_id` values, validates dimensions and finite source values, and rejects row/segment/month aggregate overflow.
- Project 3 computes a sequence-aware distinct-customer funnel and rejects missing/duplicate event identifiers.
- Project 4 validates canonical months, allowed statuses and nonblank IDs, uses an explicitly begun transaction for idempotent SQLite table replacement, preflights paid aggregates before touching the last successful outputs, and tests rollback/preservation after an injected insert failure.
- C18 rejects infinite/NaN monetary amounts; C19 validates real calendar months, finite revenue and cross-file duplicate order IDs; C20 rejects empty narrative evidence and malformed deliverable collections.
- The manual QA checklist includes these edge cases; human browser/device testing is still not claimed complete.

### GitHub Actions verification
The full PR validation [run #265](https://github.com/Software-vikings/datatrail-study/actions/runs/39209310350) passed on code/test head `cfc34de3d5ef04c62707771eb166781525bec53c`:
- Syntax checks, shared Pages gate and semantic curriculum validation: passed.
- 21 Programme 1 lessons and **162 named checks**: passed.
- Four project verifiers: passed.
- Legacy Python 84 reference solutions / 205 named checks: passed.

The feature stack remains unmerged and unpublished. Independent review, human browser/device QA and explicit owner approval for merge/deployment remain outstanding.
