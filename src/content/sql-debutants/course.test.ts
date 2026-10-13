import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CONTENT_DIR,
  collectExercises,
  collectQuiz,
  loadCourse,
} from "./load-course.mjs";

const course = loadCourse();
const exercises = collectExercises(course);
const quiz = collectQuiz(course);

describe("SQL débutants course content", () => {
  it("has the stable slug and catalogue fields", () => {
    expect(course.slug).toBe("sql-pour-debutants-2h");
    expect(course.title).toBe("SQL pour débutants – Apprendre SQL en 2 heures");
    expect(course.description).toMatch(
      /Apprenez à interroger une base de données, même si vous n'avez jamais écrit une ligne de SQL/
    );
    expect(course.level).toBe("debutant");
    expect(course.category).toBe("Data");
    expect(course.icon).toBe("fa-database");
    expect(course.gradient).toBe("linear-gradient(135deg, #4f46e5, #7c3aed)");
    expect(course.estimated_duration_minutes).toBe(120);
  });

  it("has 6 named modules", () => {
    expect(course.modules).toHaveLength(6);
    expect(course.modules.map((m: { title: string }) => m.title)).toEqual([
      "Découvrir SQL",
      "Premières requêtes",
      "Filtrer",
      "Trier et limiter",
      "Calculer",
      "Évaluation finale",
    ]);
  });

  it("does not ship empty theory lessons or lorem", () => {
    for (const mod of course.modules) {
      expect(mod.lessons.length).toBeGreaterThan(0);
      for (const lesson of mod.lessons) {
        if (lesson.lesson_type !== "lesson") continue;
        const textish = (lesson.blocks || []).filter((b: { block_type: string }) =>
          ["heading", "text", "callout", "code"].includes(b.block_type)
        );
        expect(textish.length).toBeGreaterThanOrEqual(3);
        for (const b of textish) {
          expect(b.content).not.toMatch(/lorem ipsum/i);
          if (b.block_type === "heading") {
            expect(String(b.content).trim().length).toBeGreaterThan(2);
          } else {
            expect(String(b.content).trim().length).toBeGreaterThan(20);
          }
        }
      }
    }
  });

  it("has 20 sql_exercise blocks with the player JSON shape", () => {
    expect(exercises.length).toBe(20);
    for (const ex of exercises) {
      expect(ex.lessonType).toBe("sql_exercise");
      expect(ex.instructions.trim().length).toBeGreaterThan(10);
      expect(ex.schema).toMatch(/CLIENTS\(/);
      expect(ex.setupSql).toMatch(/CREATE TABLE clients/i);
      expect(ex.setupSql).toMatch(/CREATE TABLE produits/i);
      expect(ex.setupSql).toMatch(/CREATE TABLE commandes/i);
      expect(Array.isArray(ex.expectedResult)).toBe(true);
      expect(ex.expectedResult.length).toBeGreaterThan(0);
      expect(Array.isArray(ex.expectedColumns), ex.lessonTitle).toBe(true);
      expect(ex.expectedColumns.length, ex.lessonTitle).toBeGreaterThan(0);
      expect(ex.hints.length).toBeGreaterThan(0);
      expect(ex.solution).toMatch(/SELECT/i);
      expect(ex).toHaveProperty("starterQuery");
      expect(typeof ex.points).toBe("number");
      expect(typeof ex.practicalExam).toBe("boolean");
      expect(["facile", "intermediaire", "application"]).toContain(ex.difficulty);
    }
  });

  it("includes the 15 required practice solutions", () => {
    const solutions = exercises.map((e: { solution: string }) =>
      e.solution.replace(/\s+/g, " ").trim().replace(/;$/, "")
    );
    const required = [
      "SELECT * FROM clients",
      "SELECT prenom FROM clients",
      "SELECT prenom, ville FROM clients",
      "SELECT * FROM clients WHERE age >= 18",
      "SELECT * FROM clients WHERE ville = 'Paris'",
      "SELECT * FROM clients WHERE age > 25",
      "SELECT * FROM clients WHERE ville = 'Paris' AND age > 25",
      "SELECT * FROM clients ORDER BY age ASC",
      "SELECT * FROM clients ORDER BY age DESC",
      "SELECT * FROM clients ORDER BY age DESC LIMIT 3",
      "SELECT COUNT(*) FROM clients",
      "SELECT AVG(prix) FROM produits",
      "SELECT SUM(prix) FROM produits",
      "SELECT * FROM produits WHERE prix > 50",
      "SELECT * FROM produits ORDER BY prix DESC LIMIT 5",
    ];
    for (const sql of required) {
      expect(solutions, sql).toContain(sql);
    }
  });

  it("marks ORDER BY exercises as order-sensitive", () => {
    const ordered = exercises.filter((e: { solution: string }) =>
      /ORDER\s+BY/i.test(e.solution)
    );
    expect(ordered.length).toBeGreaterThanOrEqual(4);
    for (const ex of ordered) {
      expect(ex.orderRequired).toBe(true);
    }
  });

  it("does not require row order when the solution has no ORDER BY", () => {
    const unordered = exercises.filter(
      (e: { solution: string }) => !/ORDER\s+BY/i.test(e.solution)
    );
    expect(unordered.length).toBeGreaterThan(0);
    for (const ex of unordered) {
      expect(ex.orderRequired, ex.lessonTitle).toBe(false);
    }
  });

  it("has a 30-question single_choice quiz, passing_score 70, one correct each", () => {
    expect(quiz).toBeTruthy();
    expect(quiz.passing_score).toBe(70);
    expect(quiz.questions).toHaveLength(30);

    const difficulties: Record<string, number> = { easy: 0, intermediate: 0, application: 0 };
    const correctIdx = new Set<number>();
    const wordings = new Set<string>();

    for (const q of quiz.questions) {
      expect(q.question_type).toBe("single_choice");
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options).toHaveLength(4);
      expect(Array.isArray(q.correct_answer)).toBe(true);
      expect(q.correct_answer).toHaveLength(1);
      const idx = q.correct_answer[0];
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThanOrEqual(3);
      correctIdx.add(idx);
      expect(q.explanation.trim().length).toBeGreaterThan(10);
      expect(wordings.has(q.question)).toBe(false);
      wordings.add(q.question);
      difficulties[q.difficulty] += 1;
    }

    expect(difficulties.easy).toBe(10);
    expect(difficulties.intermediate).toBe(15);
    expect(difficulties.application).toBe(5);
    expect(correctIdx.size).toBeGreaterThanOrEqual(3);
  });

  it("stores quiz options and answers as JSON arrays, not stringified strings", () => {
    const raw = JSON.parse(readFileSync(join(CONTENT_DIR, "quiz.json"), "utf8"));
    const q0 = raw.questions[0];
    expect(Array.isArray(q0.options)).toBe(true);
    expect(Array.isArray(q0.correct_answer)).toBe(true);
    expect(typeof q0.options).not.toBe("string");
    expect(typeof q0.correct_answer).not.toBe("string");
  });

  it("puts the practical exam in one lesson with 5 tasks worth 4 points", () => {
    const practical = course.modules[5].lessons.find(
      (l: { practicalExam?: boolean }) => l.practicalExam
    );
    expect(practical).toBeTruthy();
    const tasks = (practical.blocks || []).filter(
      (b: { block_type: string }) => b.block_type === "sql_exercise"
    );
    expect(tasks).toHaveLength(5);
    for (const task of tasks) {
      expect(task.content.points).toBe(4);
      expect(task.content.practicalExam).toBe(true);
      expect(task.metadata?.practicalExam).toBe(true);
    }
  });

  it("keeps practice lessons to a single sql_exercise so they are not the exam", () => {
    for (const mod of course.modules.slice(0, 5)) {
      for (const lesson of mod.lessons) {
        if (lesson.lesson_type !== "sql_exercise") continue;
        const sqlBlocks = (lesson.blocks || []).filter(
          (b: { block_type: string }) => b.block_type === "sql_exercise"
        );
        expect(sqlBlocks.length).toBe(1);
        expect(lesson.practicalExam).toBeFalsy();
        expect(sqlBlocks[0].content.practicalExam).toBe(false);
        expect(sqlBlocks[0].content.points).toBe(4);
      }
    }
  });
});

describe("idempotent seed SQL", () => {
  it("inserts-if-absent on slug, never deletes courses, publishes at the end", () => {
    const sql = readFileSync(
      join(CONTENT_DIR, "../../../supabase/005_seed_sql_debutants.sql"),
      "utf8"
    );
    expect(sql).toContain("sql-pour-debutants-2h");
    expect(sql).toMatch(/004_progress_metadata/);
    expect(sql).toMatch(/WHERE NOT EXISTS/i);
    expect(sql).toMatch(/déjà des modules/);
    expect(sql).toContain("status = 'published'");
    expect(sql).not.toMatch(/DELETE FROM courses/i);
    expect(sql).not.toMatch(/DROP TABLE courses/i);
    expect(sql).toContain("'[]'::jsonb");
    expect(sql).toMatch(/v_q\.obj->'options'/);
    expect(sql).toMatch(/v_q\.obj->'correct_answer'/);
  });
});
