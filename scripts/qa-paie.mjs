#!/usr/bin/env node
import { collectLessons, collectQuizzes, loadCourse } from "../src/content/gestion-paie/load-course.mjs";

const course = await loadCourse();
const lessons = collectLessons(course);
const quizzes = collectQuizzes(course);
const questions = quizzes.flatMap((x) => x.quiz.questions || []);

const issues = [];
for (const lesson of lessons) {
  if (lesson.lesson_type === "lesson") {
    const texts = (lesson.blocks || []).filter((b) => b.block_type === "text");
    const chars = texts.reduce((n, b) => n + String(b.content || "").length, 0);
    if (chars < 800) issues.push(`Court: ${lesson.moduleTitle} / ${lesson.title} (${chars} car.)`);
    if (/lorem ipsum|TODO|TBD|\bxxx\b/i.test(JSON.stringify(lesson.blocks))) {
      issues.push(`Placeholder: ${lesson.moduleTitle} / ${lesson.title}`);
    }
  }
  if (lesson.lesson_type === "quiz" && !lesson.quiz) {
    issues.push(`Quiz sans objet quiz: ${lesson.title}`);
  }
}

const blob = JSON.stringify(course);
if (/certification RNCP|diplôme d'État reconnu/i.test(blob)) {
  issues.push("Allégation RNCP / diplôme d'État à retirer");
}

console.log("Modules :", course.modules.length);
console.log("Leçons  :", lessons.length);
console.log("Quiz    :", quizzes.length);
console.log("Questions:", questions.length);
for (const mod of course.modules) {
  const qz = (mod.lessons || []).filter((l) => l.lesson_type === "quiz").length;
  console.log(`  [${mod.position}] ${mod.title} — ${mod.lessons.length} leçons (${qz} quiz)`);
}
if (issues.length) {
  console.log("\nAlertes qualité:");
  for (const issue of issues) console.log(" -", issue);
  process.exitCode = 1;
} else {
  console.log("\nAucune alerte structurelle.");
}
