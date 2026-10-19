#!/usr/bin/env python3
"""Validate the Programme 1 curriculum, released lessons and legacy Python anchors."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]


def load_assignment(path: Path, variable_name: str) -> Any:
    source = path.read_text(encoding="utf-8")
    prefix = f"window.{variable_name} = "
    if not source.startswith(prefix):
        raise AssertionError(f"{path.relative_to(ROOT)} must start with {prefix!r}")
    payload = source[len(prefix):].strip()
    if payload.endswith(";"):
        payload = payload[:-1].strip()
    return json.loads(payload)


def extract_json_between(source: str, start_marker: str, end_marker: str) -> Any:
    start = source.find(start_marker)
    if start < 0:
        raise AssertionError(f"Could not find {start_marker!r} in index.html")
    start += len(start_marker)
    end = source.find(end_marker, start)
    if end < 0:
        raise AssertionError(f"Could not find {end_marker!r} after {start_marker!r}")
    payload = source[start:end].strip()
    if payload.endswith(";"):
        payload = payload[:-1].strip()
    return json.loads(payload)


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def validate_manifest(programme: dict[str, Any]) -> None:
    require(programme.get("id") == "python-data-analytics", "Unexpected Programme 1 ID")
    require(programme.get("status") == "in-progress", "Programme 1 must be marked in progress once lessons are released")
    chapters = programme.get("chapters", [])
    require(len(chapters) == 21, f"Expected 21 chapters, found {len(chapters)}")

    chapter_ids = [chapter.get("id") for chapter in chapters]
    expected_ids = [f"P1-C{i:02d}" for i in range(21)]
    require(chapter_ids == expected_ids, "Chapter IDs or order do not match P1-C00 through P1-C20")
    require(len(set(chapter_ids)) == len(chapter_ids), "Chapter IDs must be unique")

    by_id = {chapter["id"]: chapter for chapter in chapters}
    for position, chapter in enumerate(chapters):
        require(chapter.get("order") == position + 1, f"Incorrect order on {chapter['id']}")
        for field in ("title", "stage", "topics", "outcomes", "references"):
            require(bool(chapter.get(field)), f"{chapter['id']} is missing {field}")
        require(
            isinstance(chapter.get("prerequisites"), list),
            f"{chapter['id']} prerequisites must be a list (empty is valid for the first chapter)",
        )
        for prerequisite in chapter["prerequisites"]:
            require(prerequisite in by_id, f"{chapter['id']} has unknown prerequisite {prerequisite}")
            require(
                by_id[prerequisite]["order"] < chapter["order"],
                f"{chapter['id']} has a forward or circular prerequisite: {prerequisite}",
            )

    available_ids = [chapter["id"] for chapter in chapters if chapter.get("status") == "available"]
    planned_ids = [chapter["id"] for chapter in chapters if chapter.get("status") == "planned"]
    expected_available = [f"P1-C{i:02d}" for i in range(17)]
    require(available_ids == expected_available, f"Unexpected released chapter set: {available_ids}")
    require(len(planned_ids) == 4, f"Expected four planned chapters, found {len(planned_ids)}")
    require(len(available_ids) + len(planned_ids) == len(chapters), "Every chapter must be either available or planned")
    release = programme.get("release", {})
    require(release.get("availableChapters") == expected_available, "Release index does not match the available chapters")
    require(release.get("plannedChapterCount") == 4, "Release planned chapter count must be four")

    stage_counts: dict[str, int] = {}
    for chapter in chapters:
        stage_counts[chapter["stage"]] = stage_counts.get(chapter["stage"], 0) + 1

    stage_definitions = programme.get("stages", [])
    require(len(stage_definitions) == 5, "Expected five learning stages")
    for stage in stage_definitions:
        count = stage_counts.get(stage["id"], 0)
        require(count == stage["chapterCount"], f"Stage {stage['id']} expected {stage['chapterCount']} chapters, found {count}")
        require(stage["firstChapter"] in by_id and stage["lastChapter"] in by_id, f"Invalid boundary for stage {stage['id']}")
        require(by_id[stage["firstChapter"]]["stage"] == stage["id"], f"Wrong first chapter for {stage['id']}")
        require(by_id[stage["lastChapter"]]["stage"] == stage["id"], f"Wrong last chapter for {stage['id']}")

    references = programme.get("referenceShelf", [])
    reference_ids = {reference.get("id") for reference in references}
    require(len(reference_ids) == len(references), "Reference IDs must be unique")
    for reference in references:
        require(reference.get("title") and reference.get("url") and reference.get("purpose"), "Every reference needs a title, URL and purpose")
    for chapter in chapters:
        for reference_id in chapter["references"]:
            require(reference_id in reference_ids, f"{chapter['id']} refers to missing source {reference_id}")

    projects = programme.get("projects", [])
    require(len(projects) == 4, f"Expected four portfolio projects, found {len(projects)}")
    for project in projects:
        require(project.get("id") and project.get("title") and project.get("skills") and project.get("deliverables"), "Incomplete portfolio project")
        for chapter_id in project.get("chapters", []):
            require(chapter_id in by_id, f"{project['id']} refers to unknown chapter {chapter_id}")

    interview_plan = programme.get("interviewPlan", [])
    counts = {item.get("id"): item.get("targetQuestions") for item in interview_plan}
    expected_counts = {"Lowball": 20, "Core": 35, "Highball": 25, "Trap": 20}
    require(counts == expected_counts, f"Unexpected interview allocation: {counts}")
    require(sum(counts.values()) == 100, "Interview question targets must total 100")



def validate_released_lessons(programme: dict[str, Any], lessons: list[dict[str, Any]]) -> None:
    available = [chapter for chapter in programme["chapters"] if chapter.get("status") == "available"]
    require(len(lessons) == len(available), "Every available chapter must have exactly one lesson package")
    lesson_ids = [lesson.get("curriculumId") for lesson in lessons]
    expected_ids = [chapter["id"] for chapter in available]
    require(lesson_ids == expected_ids, f"Released lesson order does not match available chapters: {lesson_ids}")

    for lesson, chapter in zip(lessons, available):
        require(lesson.get("id") == chapter["id"].lower(), f"{chapter['id']} has an unexpected lesson ID")
        require(lesson.get("title") == chapter["title"], f"{chapter['id']} lesson title does not match the curriculum")
        require(
            lesson.get("prerequisites") == [item.lower() for item in chapter["prerequisites"]],
            f"{chapter['id']} lesson prerequisites do not match the curriculum",
        )
        for field in ("level", "mins", "plain", "definition", "analogy", "example", "expectedOutput", "question", "options", "answer", "why", "task", "hint", "solution", "exercise"):
            require(lesson.get(field) not in (None, "", []), f"{chapter['id']} lesson is missing {field}")

        exercise = lesson["exercise"]
        for field in ("title", "prompt", "starter", "hint", "solution", "tests"):
            require(exercise.get(field) not in (None, "", []), f"{chapter['id']} exercise is missing {field}")
        tests = exercise["tests"]
        require(len(tests) >= 2, f"{chapter['id']} needs at least two named tests")
        names = [test.get("name") for test in tests]
        require(all(names), f"{chapter['id']} contains an unnamed test")
        require(len(names) == len(set(names)), f"{chapter['id']} contains duplicate test names")
        for test in tests:
            require(test.get("code"), f"{chapter['id']} contains an empty test")
            if test.get("expected") is not None:
                require(test.get("actual"), f"{chapter['id']} test {test['name']} has expected but no actual expression")
            if test.get("actual") is not None:
                require("expected" in test, f"{chapter['id']} test {test['name']} has actual but no expected value")
            if test.get("failureMessage"):
                require(bool(test["failureMessage"].strip()), f"{chapter['id']} has an empty failure message")

    required_solution_markers = {
        "P1-C02": ["int(", "float(", ".strip()", ".title()", "f\""],
        "P1-C03": ["if ", "elif ", "else:", ">="],
        "P1-C04": ["for sale in daily_sales:", "+="],
        "P1-C05": ["for order in orders:", "order[\"amount\"]", "set()", "unique_cities.add"],
        "P1-C06": ["def calculate_invoice_total", "tax_rate=0.18", "return round("],
        "P1-C07": ["def safe_amount", "try:", "except ValueError"],
        "P1-C08": ["csv.DictReader", "json.dumps", "write_text(", "date.fromisoformat", "read_text("],
        "P1-C09": ["import numpy as np", "np.array(", "sum(axis=1)", "sum(axis=0)", "np.isfinite(", "np.where("],
        "P1-C10": ["import pandas as pd", "pd.read_csv", "to_csv(", "parse_dates"],
        "P1-C11": [".loc[", ".iloc[", ".str.", ".dt.", "sort_values(", "np.where("],
        "P1-C12": ["pd.to_numeric(", "pd.to_datetime(", "drop_duplicates(", "notna()", "negative_amount_count"],
        "P1-C13": ["groupby(", "agg(", "transform(", "filter(", "pd.crosstab(", "pivot_table("],
        "P1-C14": ["pd.concat(", "merge(", 'validate="many_to_one"', 'resample("MS")', "rolling(", "shift(", ".melt("],
        "P1-C15": ["from scipy import stats", "quantile(", "stats.t.interval(", "ttest_ind(", "ttest_rel(", "chi2_contingency(", "f_oneway(", "pearsonr(", "binom.pmf(", "norm.cdf("],
        "P1-C16": ["import matplotlib.pyplot as plt", "import seaborn as sns", "import plotly.express as px", "yerr=", "sns.boxplot(", "px.line(", "to_html(", "chart_story"],
    }
    required_packages = {
        "P1-C09": ["numpy"],
        "P1-C10": ["numpy", "pandas"],
        "P1-C11": ["numpy", "pandas"],
        "P1-C12": ["numpy", "pandas"],
        "P1-C13": ["numpy", "pandas"],
        "P1-C14": ["numpy", "pandas"],
        "P1-C15": ["numpy", "pandas", "scipy"],
        "P1-C16": ["numpy", "pandas", "matplotlib"],
    }
    for lesson in lessons:
        curriculum_id = lesson["curriculumId"]
        if curriculum_id in required_packages:
            require(lesson.get("packages") == required_packages[curriculum_id], f"{curriculum_id} must declare its exact runtime packages")
    required_pypi_packages = {
        "P1-C16": ["seaborn", "plotly"],
    }
    for lesson in lessons:
        curriculum_id = lesson["curriculumId"]
        if curriculum_id in required_pypi_packages:
            require(lesson.get("pypiPackages") == required_pypi_packages[curriculum_id], f"{curriculum_id} must declare its exact PyPI packages")
    for lesson in lessons:
        if lesson["curriculumId"] in required_solution_markers:
            exercise_source = lesson["exercise"]["solution"]
            for marker in required_solution_markers[lesson["curriculumId"]]:
                require(marker in exercise_source, f"{lesson['curriculumId']} reference solution is missing {marker!r}")
            require(len(lesson["exercise"]["tests"]) >= 4, f"{lesson['curriculumId']} needs at least four independent checks")

def validate_exercises(index_html: str, tasks: list[dict[str, Any]]) -> None:
    course = extract_json_between(index_html, "const pythonCourse=", "\nlessonRows.Python=")
    task_map = extract_json_between(index_html, "const pythonLessonTaskMap=", ";\nconst trackOrder=")
    require(len(course) == 84, f"Expected 84 existing Python lessons, found {len(course)}")
    require(len(tasks) == 84, f"Expected 84 Python exercises, found {len(tasks)}")
    require(len(task_map) == len(course), "Lesson-to-exercise map length does not match lesson count")
    require(task_map == list(range(84)), "Existing Python lesson-to-exercise mapping is not one-to-one and positional")

    for lesson_number, task_index in enumerate(task_map, start=1):
        task = tasks[task_index]
        require(task.get("title") and task.get("prompt") and task.get("starter") and task.get("hint") and task.get("solution"), f"Exercise {lesson_number} is incomplete")
        tests = task.get("tests", [])
        require(len(tests) >= 2, f"Exercise {lesson_number} needs at least two named tests")
        names = [test.get("name") for test in tests]
        require(all(names), f"Exercise {lesson_number} has an unnamed test")
        require(len(names) == len(set(names)), f"Exercise {lesson_number} has duplicate test names")

    # Semantic regression guards: these caught a prior positional mapping defect.
    lesson_27 = course[26]
    exercise_27 = tasks[task_map[26]]
    require("try and except" in lesson_27[0].lower(), "Lesson 27 no longer has its expected topic")
    require("safe conversion" in lesson_27[11].lower(), "Lesson 27 practice objective changed; review the semantic guard")
    require(exercise_27["title"].startswith("27 · Convert messy numeric input safely"), "Lesson 27 is mapped to the wrong exercise title")
    require("safe_float" in exercise_27["prompt"] and "safe_float" in exercise_27["starter"], "Lesson 27 exercise must practise safe_float")
    require("except ValueError" in exercise_27["solution"], "Lesson 27 reference solution must handle invalid numeric text")
    require(any("invalid text" in test["name"].lower() for test in exercise_27["tests"]), "Lesson 27 must test invalid numeric text")

    lesson_28 = course[27]
    exercise_28 = tasks[task_map[27]]
    require("pathlib" in lesson_28[0].lower(), "Lesson 28 no longer has its expected topic")
    require("write the text" in lesson_28[11].lower(), "Lesson 28 practice objective changed; review the semantic guard")
    require(exercise_28["title"].startswith("28 · Read and write a text file"), "Lesson 28 is mapped to the wrong exercise title")
    require("save_and_read_text" in exercise_28["prompt"] and "save_and_read_text" in exercise_28["starter"], "Lesson 28 exercise must practise file reading and writing")
    require("write_text" in exercise_28["solution"] and "read_text" in exercise_28["solution"], "Lesson 28 reference solution must write and read the file")
    require(any("unicode" in test["name"].lower() for test in exercise_28["tests"]), "Lesson 28 must test UTF-8 text")


def main() -> None:
    index_path = ROOT / "index.html"
    index_html = index_path.read_text(encoding="utf-8")
    require('src="assets/python-data-analytics.js"' in index_html, "Programme 1 manifest is not loaded by index.html")
    require('src="assets/python-data-analytics-lessons.js"' in index_html, "Programme 1 released lessons are not loaded by index.html")

    programme = load_assignment(ROOT / "assets/python-data-analytics.js", "DataTrailPythonAnalytics")
    lessons = load_assignment(ROOT / "assets/python-data-analytics-lessons.js", "DataTrailPythonAnalyticsLessons")
    tasks = load_assignment(ROOT / "assets/python-exercises.js", "DataTrailPythonExercises")

    validate_manifest(programme)
    validate_released_lessons(programme, lessons)
    require("async function prepareProgrammePackages" in index_html, "Programme 1 needs a lesson-specific Python package loader")
    require(index_html.count("await prepareProgrammePackages(py,l);") >= 2, "Worked examples and coding exercises must load their declared Python packages")
    require("await micropip.install(programme_missing_pypi)" in index_html, "Programme 1 needs a PyPI package installation path")
    require("async function capturePythonVisuals" in index_html and "frame.srcdoc=payload.plotly_html" in index_html, "Matplotlib and Plotly charts must render in the lesson output")
    require('id="tutorPythonChart"' in index_html and 'id="workedExampleChart"' in index_html, "Both worked examples and graded exercises need chart preview hosts")
    print("[PASS] Programme 1: 21 chapters, five stages, 17 interactive lesson packages available, four planned, four projects and 100 interview targets.")

    validate_exercises(index_html, tasks)
    print("[PASS] Existing Python track: 84 lessons, 84 exercises, one-to-one mapping and semantic guards for lessons 27–28.")

    total_tests = sum(len(task["tests"]) for task in tasks)
    print(f"[PASS] Exercise bank structure: {len(tasks)} exercises and {total_tests} named checks.")


if __name__ == "__main__":
    main()
