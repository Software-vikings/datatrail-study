#!/usr/bin/env python3
"""Execute the released Programme 1 lesson solutions against their named tests."""

from __future__ import annotations

import contextlib
import io
import json
import os
import tempfile
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
LESSONS_FILE = ROOT / "assets" / "python-data-analytics-lessons.js"


def load_lessons() -> list[dict[str, Any]]:
    source = LESSONS_FILE.read_text(encoding="utf-8")
    prefix = "window.DataTrailPythonAnalyticsLessons = "
    if not source.startswith(prefix):
        raise AssertionError("Lesson file has an unexpected JavaScript assignment")
    payload = source[len(prefix):].strip()
    if payload.endswith(";"):
        payload = payload[:-1].strip()
    lessons = json.loads(payload)
    if not isinstance(lessons, list):
        raise AssertionError("Programme 1 lessons must be a list")
    return lessons


def verify_lesson(lesson: dict[str, Any]) -> int:
    for package in lesson.get("packages", []):
        try:
            __import__(package)
        except ImportError as exc:
            raise AssertionError(f"{lesson['curriculumId']} requires the {package!r} package") from exc
    exercise = lesson["exercise"]
    namespace: dict[str, Any] = {"__name__": "__main__"}
    setup = exercise.get("setup", "")
    solution = exercise["solution"]
    output = io.StringIO()
    tests = exercise.get("tests", [])
    if len(tests) < 2:
        raise AssertionError(f"{lesson['id']} needs at least two named tests")

    # Each lesson gets a clean temporary working directory. This allows file
    # lessons to create and reload real files without leaving artifacts in the repo.
    original_directory = os.getcwd()
    try:
        with tempfile.TemporaryDirectory(prefix=f"datatrail-{lesson['id']}-") as working_directory:
            os.chdir(working_directory)
            with contextlib.redirect_stdout(output):
                if setup.strip():
                    exec(compile(setup, f"<{lesson['id']} setup>", "exec", dont_inherit=True), namespace)
                exec(compile(solution, f"<{lesson['id']} solution>", "exec", dont_inherit=True), namespace)

            namespace["__output__"] = output.getvalue()
            namespace["__source__"] = solution

            for test in tests:
                name = test.get("name")
                if not name:
                    raise AssertionError(f"{lesson['id']} contains an unnamed test")
                try:
                    exec(compile(test["code"], f"<{lesson['id']} {name}>", "exec", dont_inherit=True), namespace)
                except Exception as exc:
                    raise AssertionError(f"{lesson['id']} · {name}: {type(exc).__name__}: {exc}") from exc
    finally:
        os.chdir(original_directory)

    print(f"[PASS] {lesson['curriculumId']} · {lesson['title']} ({len(tests)} named checks)")
    return len(tests)


def main() -> None:
    lessons = load_lessons()
    if not lessons:
        raise SystemExit("No released Programme 1 lessons were found")
    ids = [lesson.get("curriculumId") for lesson in lessons]
    if len(ids) != len(set(ids)):
        raise SystemExit("Programme 1 lesson curriculum IDs must be unique")
    total = sum(verify_lesson(lesson) for lesson in lessons)
    print(f"Verified {len(lessons)} released Programme 1 lessons and {total} named checks.")


if __name__ == "__main__":
    main()
