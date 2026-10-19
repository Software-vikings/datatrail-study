global.window = {};
require("./assets/python-exercises.js");
require("./assets/python-data-analytics.js");
require("./assets/python-data-analytics-lessons.js");
require("./assets/programme1-readiness.js");
const tasks = global.window.DataTrailPythonExercises;
const programme = global.window.DataTrailPythonAnalytics;
const programmeLessons = global.window.DataTrailPythonAnalyticsLessons;
const readiness = global.window.DataTrailProgramme1Readiness;
const html = require("fs").readFileSync("index.html", "utf8");
if (!programme || programme.status !== "in-progress" || !Array.isArray(programmeLessons) || programmeLessons.length !== 21) throw new Error("Programme 1 must have its all 21 Python analytics chapters available");
if (programme.chapters.filter(x => x.status === "available").map(x => x.id).join(",") !== "P1-C00,P1-C01,P1-C02,P1-C03,P1-C04,P1-C05,P1-C06,P1-C07,P1-C08,P1-C09,P1-C10,P1-C11,P1-C12,P1-C13,P1-C14,P1-C15,P1-C16,P1-C17,P1-C18,P1-C19,P1-C20") throw new Error("Programme 1 available chapter states are incorrect");
if (!Array.isArray(tasks) || tasks.length !== 84) throw new Error("Expected 84 Python exercises");
if (!readiness || !Array.isArray(readiness.projects) || readiness.projects.length !== 4) throw new Error("Expected four Programme 1 portfolio projects");
if (!Array.isArray(readiness.interviewQuestions) || readiness.interviewQuestions.length !== 100) throw new Error("Expected 100 Programme 1 interview questions");
const tierCounts = readiness.interviewQuestions.reduce((counts, question) => { counts[question.tier] = (counts[question.tier] || 0) + 1; return counts; }, {});
if (JSON.stringify(tierCounts) !== JSON.stringify({Lowball:20,Core:35,Highball:25,Trap:20})) throw new Error("Programme 1 interview tier allocation is incorrect");
if (!html.includes('src="assets/programme1-readiness.js"')) throw new Error("Programme 1 readiness asset is not loaded");

for (const [index, task] of tasks.entries()) {
  if (!task.title || !task.prompt || !task.starter || !task.solution || !Array.isArray(task.tests) || task.tests.length < 2) {
    throw new Error("Incomplete Python exercise at index " + index);
  }
  for (const test of task.tests) {
    if (!test.name || !test.code) throw new Error("Unnamed or empty test in exercise " + index);
  }
}
const lessonStart = html.indexOf("const pythonCourse=") + "const pythonCourse=".length;
const lessonEnd = html.indexOf(";\nlessonRows.Python=", lessonStart);
const mapStart = html.indexOf("const pythonLessonTaskMap=") + "const pythonLessonTaskMap=".length;
const mapEnd = html.indexOf(";\nconst trackOrder=", mapStart);
if (lessonStart < 0 || lessonEnd < 0 || mapStart < 0 || mapEnd < 0) throw new Error("Python lesson syllabus or exercise map missing");
const lessons = JSON.parse(html.slice(lessonStart, lessonEnd));
const taskMap = JSON.parse(html.slice(mapStart, mapEnd));
if (lessons.length !== 84 || taskMap.length !== lessons.length) throw new Error("Python lesson-to-exercise map is out of sync");
const levelCounts = lessons.reduce((counts, lesson) => {
  counts[lesson[1]] = (counts[lesson[1]] || 0) + 1;
  return counts;
}, {});
if (levelCounts.Basic !== 22 || levelCounts.Intermediate !== 40 || levelCounts.Advanced !== 22) throw new Error("Python stage lesson counts are incorrect: " + JSON.stringify(levelCounts));
const moduleStart = html.indexOf("const pythonModules=") + "const pythonModules=".length;
const moduleEnd = html.indexOf(";\nconst pythonLessonTaskMap=", moduleStart);
if (moduleStart < 0 || moduleEnd < 0) throw new Error("Python stage metadata is missing");
const modules = JSON.parse(html.slice(moduleStart, moduleEnd));
if (JSON.stringify(modules.map(x => [x.start, x.end])) !== JSON.stringify([[0,22],[22,62],[62,84]])) throw new Error("Python stage boundaries are incorrect");
const syllabusText = lessons.map(x => x[0].toLowerCase()).join(" ");
for (const topic of ["oop foundations", "inheritance", "polymorphism", "generators", "decorators", "descriptors", "metaclasses"]) {
  if (!syllabusText.includes(topic)) throw new Error("Python syllabus is missing core topic: " + topic);
}
if (!html.includes("Lowball") || !html.includes("Highball") || !html.includes("Trap") || !html.includes("data-interview-set")) throw new Error("Python interview sets or filters are missing");
if (taskMap.some(i => !Number.isInteger(i) || i < 0 || i >= tasks.length)) throw new Error("Invalid Python exercise mapping");
if (taskMap.some((taskIndex, lessonIndex) => taskIndex !== lessonIndex)) throw new Error("Every Python lesson must map to its own exercise");
const trackOrderStart = html.indexOf("const trackOrder=") + "const trackOrder=".length;
const trackOrderEnd = html.indexOf(";", trackOrderStart);
if (trackOrderStart < 0 || trackOrderEnd < 0) throw new Error("Track order declaration missing");
const trackOrder = JSON.parse(html.slice(trackOrderStart, trackOrderEnd));
if (trackOrder[0] !== "Python for Data Analytics" || trackOrder[1] !== "Python" || !html.includes("const tracks=trackOrder.map")) throw new Error("Programme 1 must be first while the separate Python course remains available");
if ((html.match(/function openLesson\(track,id\)/g) || []).length !== 1) throw new Error("Expected exactly one openLesson handler");
if (!html.includes('id="runWorkedExample"') || !html.includes("worked_example_stdout.getvalue()")) throw new Error("Runnable worked-example output is missing");
if ((html.match(/data-track-open=/g) || []).length < 2 || !html.includes('querySelectorAll("[data-track-open]")')) throw new Error("Dashboard and learning-path cards must be clickable");
for (const marker of ['id="tutorPythonRun"', 'id="tutorPythonCheck"', 'id="tutorPythonSolution"', 'id="tutorPythonOutput"', 'id="tutorPythonFeedback"']) {
  if (!html.includes(marker)) throw new Error("Python lesson practice is missing " + marker);
}
if (!html.includes("esc(pythonTask.prompt)") || !html.includes("tutor_task_tests_json") || !html.includes("tutor_test_results")) throw new Error("Python lesson task is not wired to its real exercise prompt and tests");
if (!html.includes("analyticsTaskComplete") || !html.includes("analyticsDrafts") || !html.includes('"expected" in tutor_test')) throw new Error("Programme 1 needs isolated progress, saved drafts and expected/actual test feedback");
if (programmeLessons.some((lesson, i) => lesson.curriculumId !== programme.chapters[i].id || !lesson.exercise || lesson.exercise.tests.length < 2)) throw new Error("Programme 1 lesson packages do not match their curriculum chapters");
if (!html.includes("Run your code and pass all the checks before continuing.")) throw new Error("Python lessons must require a passing task before continuing");
console.log("Validated", programmeLessons.length, "Programme 1 lessons,", lessons.length, "legacy Python lessons,", tasks.length, "legacy exercises,", tasks.reduce((n, x) => n + x.tests.length, 0), "legacy named tests, interview sets, runnable examples and interactive lesson grading.");
