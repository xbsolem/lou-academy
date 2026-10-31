import { describe, expect, it } from "vitest";
import { collectLessons, collectQuizzes, loadCourse } from "./load-course.mjs";

const course = await loadCourse();
const lessons = collectLessons(course);
const quizzes = collectQuizzes(course);

describe("Devenir recruteur — contenu", () => {
  it("a le slug et les champs catalogue stables", () => {
    expect(course.slug).toBe("devenir-recruteur-a-z");
    expect(course.title).toMatch(/Devenir recruteur/);
    expect(course.category).toBe("Ressources humaines");
    expect(course.level).toBe("debutant");
    expect(course.icon).toBe("fa-user-tie");
    expect(course.estimated_duration_minutes).toBe(2400);
    expect(course.description).toMatch(/RNCP/);
  });

  it("ne livre pas de leçon théorique vide ni de lorem", () => {
    expect(course.modules.length).toBeGreaterThan(0);
    for (const mod of course.modules) {
      expect(mod.lessons.length, mod.title).toBeGreaterThan(0);
      for (const lesson of mod.lessons) {
        if (lesson.lesson_type !== "lesson") continue;
        const textish = (lesson.blocks || []).filter((b: { block_type: string }) =>
          ["heading", "text", "callout", "code"].includes(b.block_type)
        );
        expect(textish.length, lesson.title).toBeGreaterThanOrEqual(6);
        for (const b of textish) {
          expect(String(b.content ?? ""), lesson.title).not.toMatch(/lorem ipsum/i);
          expect(b.content, `${mod.title} / ${lesson.title}`).toEqual(expect.any(String));
          if (b.block_type === "heading") {
            expect(String(b.content).trim().length).toBeGreaterThan(2);
          } else if (b.block_type === "text") {
            expect(String(b.content).trim().length, `${mod.title} / ${lesson.title}`).toBeGreaterThan(30);
          }
        }
      }
    }
  });

  it("a des quiz avec options, index valides et explications", () => {
    expect(quizzes.length).toBeGreaterThan(0);
    for (const { lessonTitle, quiz } of quizzes) {
      expect(quiz.questions.length, lessonTitle).toBeGreaterThanOrEqual(5);
      expect(quiz.passing_score).toBeGreaterThanOrEqual(70);
      for (const question of quiz.questions) {
        expect(question.options.length, question.question).toBeGreaterThanOrEqual(2);
        expect(Array.isArray(question.correct_answer)).toBe(true);
        for (const idx of question.correct_answer) {
          expect(idx, question.question).toBeGreaterThanOrEqual(0);
          expect(idx, question.question).toBeLessThan(question.options.length);
        }
        expect(String(question.explanation || "").trim().length, question.question).toBeGreaterThan(8);
      }
    }
  });

  it("ne contient pas de leçon sql_exercise", () => {
    for (const lesson of lessons) {
      expect(lesson.lesson_type).not.toBe("sql_exercise");
      for (const block of lesson.blocks || []) {
        expect(block.block_type).not.toBe("sql_exercise");
      }
    }
  });
});
