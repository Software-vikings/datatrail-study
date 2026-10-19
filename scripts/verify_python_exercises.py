#!/usr/bin/env python3
"""Execute every Python exercise reference solution against its named checks."""

import contextlib
import io
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "python-exercises.js"
PREFIX = "window.DataTrailPythonExercises = "


def main() -> None:
    source = SOURCE.read_text(encoding="utf-8")
    if not source.startswith(PREFIX):
        raise SystemExit("Python exercise bank has an unexpected format")

    payload = source[len(PREFIX):].strip()
    if payload.endswith(";"):
        payload = payload[:-1].strip()
    tasks = json.loads(payload)

    passed = 0
    for task_index, task in enumerate(tasks, start=1):
        namespace = {"__name__": "__main__"}
        captured = io.StringIO()
        active_test = "setup or reference solution"
        try:
            with contextlib.redirect_stdout(captured):
                if task.get("setup", "").strip():
                    exec(compile(task["setup"], "<setup>", "exec", dont_inherit=True), namespace)
                exec(compile(task["solution"], "<reference solution>", "exec", dont_inherit=True), namespace)

            namespace["__output__"] = captured.getvalue()
            namespace["__source__"] = task["solution"]
            for test in task["tests"]:
                active_test = test["name"]
                exec(compile(test["code"], "<" + test["name"] + ">", "exec", dont_inherit=True), namespace)
                passed += 1
        except Exception as exc:
            raise SystemExit(
                f"Exercise {task_index:02d} failed: {task.get('title', 'untitled')}\n"
                f"Named check: {active_test}\n"
                f"Error: {type(exc).__name__}: {exc}"
            ) from exc

        print(f"Exercise {task_index:02d}: {task['title']} — {len(task['tests'])} named checks passed")

    print(f"Verified {len(tasks)} reference solutions and {passed} named checks.")


if __name__ == "__main__":
    main()
