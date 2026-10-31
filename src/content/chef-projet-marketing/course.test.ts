import { describe, expect, it } from "vitest";
import { collectLessons, collectQuizzes, loadCourse, requiredMinutes } from "./load-course.mjs";

const course = await loadCourse();
const lessons = collectLessons(course);
const quizzes = collectQuizzes(course);

describe("Chef de projet marketing — 5 heures", () => {
  it("a le slug catalogue et 300 minutes", () => {
    expect(course.slug).toBe("chef-projet-marketing-developpement");
    expect(course.title).toMatch(/Chef de projet marketing/);
    expect(course.estimated_duration_minutes).toBe(300);
    expect(course.description).toMatch(/RNCP/);
    expect(requiredMinutes(course)).toBe(300);
  });

  it("a 10 modules", () => {
    expect(course.modules.length).toBe(10);
  });

  it("calibre chaque module sur le budget minutes (leçons required)", () => {
    const budgets = [20, 35, 30, 40, 25, 35, 30, 30, 20, 35];
    for (const mod of course.modules) {
      const sum = (mod.lessons || [])
        .filter((l: { is_required?: boolean }) => l.is_required !== false)
        .reduce((n: number, l: { estimated_duration_minutes?: number }) => n + (Number(l.estimated_duration_minutes) || 0), 0);
      expect(sum, mod.title).toBe(budgets[mod.position]);
    }
  });

  it("ne livre pas de leçon vide ni de lorem", () => {
    for (const lesson of lessons) {
      if (lesson.lesson_type !== "lesson") continue;
      expect(lesson.lesson_type).not.toBe("sql_exercise");
      const texts = (lesson.blocks || []).filter((b: { block_type: string }) =>
        ["heading", "text", "callout", "code"].includes(b.block_type)
      );
      expect(texts.length, lesson.title).toBeGreaterThanOrEqual(6);
      for (const b of texts) {
        expect(String(b.content ?? "")).not.toMatch(/lorem ipsum/i);
        expect(String(b.content).trim().length, lesson.title).toBeGreaterThan(8);
      }
    }
  });

  it("a des quiz valides", () => {
    expect(quizzes.length).toBeGreaterThanOrEqual(10);
    for (const { lessonTitle, quiz } of quizzes) {
      expect(quiz.questions.length, lessonTitle).toBeGreaterThanOrEqual(5);
      for (const question of quiz.questions) {
        expect(question.options.length).toBeGreaterThanOrEqual(2);
        for (const idx of question.correct_answer) {
          expect(idx).toBeGreaterThanOrEqual(0);
          expect(idx).toBeLessThan(question.options.length);
        }
        expect(String(question.explanation || "").trim().length).toBeGreaterThan(8);
      }
    }
  });
});
