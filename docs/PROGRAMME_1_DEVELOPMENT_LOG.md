# Programme 1 development log

This log records the implemented state of Programme 1 and the checks run for each release. A chapter is counted as available only after its lesson package, tutor integration and automated checks are complete.

## Current release state

- Curriculum: 21 chapters across five stages, defined in `assets/python-data-analytics.js`.
- Available interactive chapters: 15 of 21 (P1-C00 through P1-C14).
- Available coding exercises: 15, with 89 named automated checks.
- Planned chapters: 6 (P1-C15 through P1-C20).
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
