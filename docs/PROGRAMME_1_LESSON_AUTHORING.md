# Programme 1 lesson authoring standard

Every released Programme 1 chapter must be a complete, teachable unit. A chapter must not be marked available merely because its title or outline exists.

## Required lesson structure

Each lesson in `assets/python-data-analytics-lessons.js` maps to one chapter in `assets/python-data-analytics.js` through `curriculumId`. It must include:

- A stable lesson ID matching `curriculumId`, a title, level, duration and prerequisite IDs.
- An optional `packages` list for non-standard Python dependencies. The browser runner must load those packages before running the worked example and graded exercise; the reference verifier and CI must import the same dependencies.
- A plain-English explanation, a familiar analogy and a technically accurate definition.
- A small, self-contained Python example and its exact expected output.
- A prediction prompt and explanation where useful.
- A knowledge-check question, answer options, correct option index and explanation.
- A practical task, a specific hint and a complete reference solution.
- An exercise with starter code, optional setup code, hint, reference solution and at least four independent, uniquely named tests for core foundation chapters.

## Teaching requirements

1. Start with the real-world problem, then use an everyday analogy, introduce the Python idea and finish with the formal definition.
2. Teach one main new idea at a time. Do not require a concept that belongs in a later chapter.
3. Keep examples small enough for a beginner to predict before running.
4. Show expected output separately from actual output. A successful run does not count as a correct answer.
5. Keep the learner's code editable. Save drafts locally and distinguish execution errors from failed requirements.
6. Failed tests should name the requirement and, where meaningful, show expected and actual values. Add a useful failure explanation and allow another attempt.
7. Use meaningful business examples without hiding the Python concept behind excessive domain complexity.
8. The reference solution must pass every test in `scripts/verify_programme1_lessons.py`.
9. File-based exercises must run inside a clean temporary working directory in automated verification. Tests must not create artifacts in the repository.
10. The learner must pass the coding exercise and knowledge check before the chapter can be marked complete.
11. Do not use elapsed time, XP or typing speed as a substitute for demonstrated understanding.
12. A chapter may be marked `available` only after its content, lesson flow, progress behaviour and automated checks are complete. All other chapters remain `planned`.

## Data model and tests

The lesson file is a JSON-compatible JavaScript assignment. Lessons that use a runtime package declare it explicitly, for example `"packages": ["numpy", "pandas"]`; the learner does not need to open a separate lab before running the lesson:

```js
window.DataTrailPythonAnalyticsLessons = [
  {
    "id": "p1-c00",
    "curriculumId": "P1-C00",
    "prerequisites": [],
    "title": "Example chapter",
    "example": "print(\"Hello\")",
    "expectedOutput": "Hello",
    "exercise": {
      "setup": "",
      "starter": "print(\"Replace me\")",
      "hint": "A useful nudge.",
      "solution": "print(\"Hello\")",
      "tests": [
        {
          "name": "Displays the requested result",
          "code": "assert __output__.strip() == 'Hello'",
          "expected": "Hello",
          "actual": "__output__.strip()",
          "failureMessage": "Explain the requirement in ordinary language."
        },
        {
          "name": "Uses one output line",
          "code": "assert len(__output__.strip().splitlines()) == 1"
        }
      ]
    }
  }
];
```

Tests execute with the learner's namespace. The harness also provides `__output__` (captured standard output) and `__source__` (the submitted code). When a test provides `expected`, `actual` and `failureMessage`, the interface displays concrete comparison feedback after a failure.

## Release checklist

- [ ] Manifest chapter exists, has correct prerequisites and is marked available only after completion.
- [ ] Lesson object exists and links to the correct manifest chapter.
- [ ] All required lesson fields are present, including exact runtime packages where needed.
- [ ] Every example runs and its displayed expected output is correct.
- [ ] Starter code is genuinely incomplete but runnable or intentionally explainable.
- [ ] Required packages load in the browser runner and are importable in the CI verifier.
- [ ] Reference solution passes every named test.
- [ ] Incorrect attempts produce understandable feedback.
- [ ] Chapter locking, lesson completion and saved drafts behave as documented.
- [ ] File exercises leave no test artifacts in the repository.
- [ ] README and development log are updated in the same development batch.
- [ ] CI checks both Programme 1 and the existing Python course.
- [ ] Production deployment remains gated until the validated pull request is merged to `main`.
