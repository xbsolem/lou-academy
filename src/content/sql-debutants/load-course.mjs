import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DIR = dirname(fileURLToPath(import.meta.url));

function readJson(name) {
  return JSON.parse(readFileSync(join(DIR, name), "utf8"));
}

function injectDb(blocks, db, lesson) {
  const practical = Boolean(lesson?.practicalExam);
  return (blocks || []).map((block) => {
    if (block.block_type !== "sql_exercise") return { ...block };
    const content = { ...(block.content || {}) };
    content.schema = db.schema;
    content.setupSql = db.setupSql;
    if (!Array.isArray(content.hints)) content.hints = [];
    if (content.starterQuery == null) content.starterQuery = "SELECT ";
    if (!Array.isArray(content.expectedColumns)) content.expectedColumns = [];
    if (!Array.isArray(content.expectedResult)) content.expectedResult = [];
    if (content.orderRequired == null) {
      content.orderRequired = /ORDER\s+BY/i.test(String(content.solution || ""));
    }
    if (content.points == null) content.points = 4;
    content.practicalExam = practical;
    const metadata = {
      ...(block.metadata && typeof block.metadata === "object" ? block.metadata : {}),
    };
    if (practical) metadata.practicalExam = true;
    return {
      ...block,
      content,
      metadata: Object.keys(metadata).length > 0 ? metadata : null,
    };
  });
}

export function loadCourse() {
  const meta = readJson("course.meta.json");
  const db = readJson("db.json");
  const quiz = readJson("quiz.json");

  const moduleDir = join(DIR, "modules");
  const moduleFiles = readdirSync(moduleDir)
    .filter((f) => f.endsWith(".json"))
    .sort();

  const modules = moduleFiles.map((file) => {
    const raw = JSON.parse(readFileSync(join(moduleDir, file), "utf8"));
    return {
      ...raw,
      lessons: (raw.lessons || []).map((lesson) => {
        const next = {
          ...lesson,
          blocks: injectDb(lesson.blocks, db, lesson),
        };
        if (lesson.hasQuiz || lesson.lesson_type === "quiz") {
          next.quiz = quiz;
        }
        return next;
      }),
    };
  });

  return {
    ...meta,
    pedagogicalDb: db,
    modules,
  };
}

export function collectExercises(course) {
  const exercises = [];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      for (const block of lesson.blocks || []) {
        if (block.block_type === "sql_exercise") {
          exercises.push({
            moduleTitle: mod.title,
            lessonTitle: lesson.title,
            lessonType: lesson.lesson_type,
            ...block.content,
          });
        }
      }
    }
  }
  return exercises;
}

export function collectQuiz(course) {
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      if (lesson.quiz) return lesson.quiz;
    }
  }
  return null;
}

export { DIR as CONTENT_DIR };
