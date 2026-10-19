# Programme 1 development log

This file is updated with each Programme 1 development phase. It records what is actually implemented and tested; it is not a promise that planned chapters are already available.

## Current release state

- Curriculum: 21 chapters across five stages, defined in \`assets/python-data-analytics.js\`.
- Available interactive chapters: 2 of 21 (P1-C00 and P1-C01).
- Available exercises: 2, each with a starter, hint, reference solution and named automated checks.
- Existing Python course: the separate 84-lesson track remains available and is not replaced by Programme 1.
- Progress: Programme 1 lesson completion and drafts use separate localStorage keys. Existing Python progress and drafts continue using their existing keys.
- Deployment: changes are developed on a feature branch and are not deployed to the live site until the relevant pull requests are merged to \`main\`.

## 2026-10-19 — Phase 2, first beginner learning slice

### Delivered in this phase

1. Added a distinct **Python for Data Analytics** learning path. It uses the five-step lesson tutor already in DataTrail and does not overwrite the legacy Python track.
2. Released P1-C00, **Getting started with Python**. It introduces code, running a program, output, errors, the browser runner and optional local script execution.
3. Released P1-C01, **First instructions and calculations**. It covers \`print()\`, comments, expressions, variables, assignment and basic shop revenue/profit calculations.
4. Added runnable worked examples with the expected output shown alongside the output produced by the browser Python runtime.
5. Added chapter-specific code drafts and completion state. P1-C01 remains locked until P1-C00 is completed; the older Python course uses its original completion and draft state.
6. Added specific test-failure guidance with expected and actual values where a test defines them.
7. Added a Python verification script for released Programme 1 reference solutions and named checks, and wired it into CI.
8. Updated the README, curriculum validator, deployment validation and lesson-authoring guidance.

### Verification

Run the following from the repository root:

\`\`\`bash
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
node --check assets/python-exercises.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_python_exercises.py scripts/verify_programme1_lessons.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_python_exercises.py
\`\`\`

The GitHub Actions validation workflow runs these checks on the feature branch and its pull request. A successful CI run is required before a phase is reported as verified.
