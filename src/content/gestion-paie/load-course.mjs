import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

export const CONTENT_DIR = dirname(fileURLToPath(import.meta.url));

export async function loadCourse() {
  const meta = JSON.parse(readFileSync(join(CONTENT_DIR, "course.meta.json"), "utf8"));
  const moduleDir = join(CONTENT_DIR, "modules");
  const files = readdirSync(moduleDir)
    .filter((f) => /^\d{2}-/.test(f) && (f.endsWith(".mjs") || f.endsWith(".json")))
    .sort();

  const modules = [];
  for (const file of files) {
    const full = join(moduleDir, file);
    let raw;
    if (file.endsWith(".json")) {
      raw = JSON.parse(readFileSync(full, "utf8"));
    } else {
      const imported = await import(pathToFileURL(full).href);
      raw = imported.default;
    }
    modules.push({
      ...raw,
      position: typeof raw.position === "number" ? raw.position : modules.length,
      lessons: (raw.lessons || []).map((lesson, i) => ({
        ...lesson,
        position: typeof lesson.position === "number" ? lesson.position : i,
      })),
    });
  }

  return { ...meta, modules };
}

export function collectQuizzes(course) {
  const quizzes = [];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons || []) {
      if (lesson.lesson_type === "quiz" && lesson.quiz) {
        quizzes.push({
          moduleTitle: mod.title,
          lessonTitle: lesson.title,
          quiz: lesson.quiz,
        });
      }
    }
  }
  return quizzes;
}

export function collectLessons(course) {
  return course.modules.flatMap((mod) =>
    (mod.lessons || []).map((lesson) => ({
      moduleTitle: mod.title,
      ...lesson,
    }))
  );
}
