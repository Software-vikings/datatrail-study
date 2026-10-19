# Programme 1 development log

This log records the implemented state of Programme 1 and the checks run for each release. A chapter is counted as available only after its lesson package, tutor integration and automated checks are complete.

## Current release state

- Curriculum: 21 chapters across five stages, defined in `assets/python-data-analytics.js`.
- Available interactive chapters: 9 of 21 (P1-C00 through P1-C08).
- Available coding exercises: 9, with 45 named automated checks.
- Planned chapters: 12 (P1-C09 through P1-C20).
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
