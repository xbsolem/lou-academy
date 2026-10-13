#!/usr/bin/env node
/**
 * Assembles src/content/sql-debutants/*.json and writes
 * supabase/005_seed_sql_debutants.sql — an idempotent seed for the
 * SQL editor (role postgres). Does not need a service-role key.
 * Apply 004_progress_metadata.sql first (schema), then this 005 seed.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { loadCourse, collectExercises } from "../src/content/sql-debutants/load-course.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

async function verifyExercisesWithSqlJs(exercises) {
  let initSqlJs;
  try {
    initSqlJs = (await import("sql.js")).default;
  } catch {
    console.warn("sql.js not installed — skipping expectedResult verification.");
    return;
  }

  let SQL;
  try {
    const wasmPath = require.resolve("sql.js/dist/sql-wasm.wasm");
    const { readFileSync } = await import("node:fs");
    SQL = await initSqlJs({ wasmBinary: readFileSync(wasmPath) });
  } catch (err) {
    console.warn("Could not load sql.js wasm — skipping verification.", err.message);
    return;
  }

  const mismatches = [];
  for (const ex of exercises) {
    const db = new SQL.Database();
    try {
      db.run(ex.setupSql);
      const result = db.exec(ex.solution);
      const actualCols = result.length > 0 ? result[0].columns : [];
      const actual =
        result.length > 0
          ? result[0].values.map((row) => row.map(String))
          : [];
      const expected = (ex.expectedResult || []).map((row) => row.map(String));
      const expectedCols = ex.expectedColumns || [];
      const colsMatch =
        expectedCols.length > 0 &&
        actualCols.length === expectedCols.length &&
        actualCols.every((col, i) => col === expectedCols[i]);
      const match =
        actual.length === expected.length &&
        actual.every(
          (row, i) =>
            row.length === expected[i].length &&
            row.every((val, j) => val === expected[i][j])
        );
      if (!match || !colsMatch) {
        mismatches.push({
          lessonTitle: ex.lessonTitle,
          solution: ex.solution,
          expected,
          actual,
          expectedColumns: expectedCols,
          actualColumns: actualCols,
        });
      }
    } catch (err) {
      mismatches.push({
        lessonTitle: ex.lessonTitle,
        solution: ex.solution,
        error: String(err),
      });
    } finally {
      db.close();
    }
  }

  if (mismatches.length > 0) {
    console.error("expectedResult mismatch for", mismatches.length, "exercise(s):");
    console.error(JSON.stringify(mismatches, null, 2));
    process.exit(1);
  }
  console.log(`Verified ${exercises.length} exercises against sql.js.`);
}

function emitSql(course) {
  const payload = JSON.stringify(course, null, 2);
  return `-- LOU Academy — seed: SQL pour débutants (2 heures)
-- Slug UNIQUE: sql-pour-debutants-2h
--
-- How to run
--   1. Open the Supabase SQL Editor as postgres (Dashboard → SQL).
--   2. Paste this entire file.
--   3. Execute. Safe to run twice: insert-if-absent on slug, children
--      inserted only if that course still has 0 modules.
--
-- Prerequisite: supabase/004_progress_metadata.sql (schema first).
-- Do NOT run supabase/001_schema.sql, 002, or 003 together with this file.
-- Do NOT DELETE the course (ON DELETE CASCADE would wipe children).
-- No service-role key required. No .env.local involved.
--
-- Insert order: courses → modules → lessons → content_blocks + quizzes
--               → quiz_questions (options / correct_answer as JSON arrays).
-- The course starts as draft, then is published at the end of THIS script
-- once children are in place (or already were, on a re-run).

BEGIN;

-- 1) Course row (draft). No-op if slug already exists — never a second tree.
INSERT INTO courses (
  title,
  slug,
  description,
  category,
  level,
  estimated_duration_minutes,
  status,
  creator_id,
  icon,
  gradient
)
SELECT
  ${sqlString(course.title)},
  'sql-pour-debutants-2h',
  ${sqlString(course.description)},
  'Data',
  'debutant',
  120,
  'draft',
  (SELECT id FROM profiles WHERE role IN ('admin', 'creator') ORDER BY created_at LIMIT 1),
  'fa-database',
  'linear-gradient(135deg, #4f46e5, #7c3aed)'
WHERE NOT EXISTS (
  SELECT 1 FROM courses WHERE slug = 'sql-pour-debutants-2h'
)
AND EXISTS (
  SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')
);

DO $guard$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')) THEN
    RAISE EXCEPTION 'Aucun profil admin/creator. Créez un utilisateur staff avant ce seed.';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'sql-pour-debutants-2h') THEN
    RAISE EXCEPTION 'Cours sql-pour-debutants-2h absent (creator_id NULL ?).';
  END IF;
END
$guard$;

-- 2–5) Modules, lessons, content_blocks, quizzes, quiz_questions.
-- Skip the whole tree if this course already has modules (idempotent).
DO $seed$
DECLARE
  payload        jsonb := $coursejson$
${payload}
$coursejson$;
  v_course_id    uuid;
  v_module_id    uuid;
  v_lesson_id    uuid;
  v_quiz_id      uuid;
  v_mod          record;
  v_les          record;
  v_blk          record;
  v_q            record;
BEGIN
  SELECT id INTO v_course_id
  FROM courses
  WHERE slug = 'sql-pour-debutants-2h';

  IF EXISTS (SELECT 1 FROM modules WHERE course_id = v_course_id) THEN
    RAISE NOTICE 'sql-pour-debutants-2h a déjà des modules — pas de second arbre.';
  ELSE
    FOR v_mod IN
      SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
      FROM jsonb_array_elements(payload->'modules') WITH ORDINALITY AS t
    LOOP
      INSERT INTO modules (course_id, title, description, position)
      VALUES (
        v_course_id,
        v_mod.obj->>'title',
        v_mod.obj->>'description',
        COALESCE((v_mod.obj->>'position')::int, v_mod.pos)
      )
      RETURNING id INTO v_module_id;

      FOR v_les IN
        SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
        FROM jsonb_array_elements(v_mod.obj->'lessons') WITH ORDINALITY AS t
      LOOP
        INSERT INTO lessons (
          module_id,
          title,
          description,
          lesson_type,
          position,
          estimated_duration_minutes,
          is_required
        )
        VALUES (
          v_module_id,
          v_les.obj->>'title',
          v_les.obj->>'description',
          COALESCE(v_les.obj->>'lesson_type', 'lesson'),
          COALESCE((v_les.obj->>'position')::int, v_les.pos),
          NULLIF(v_les.obj->>'estimated_duration_minutes', '')::int,
          COALESCE((v_les.obj->>'is_required')::boolean, true)
        )
        RETURNING id INTO v_lesson_id;

        FOR v_blk IN
          SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
          FROM jsonb_array_elements(COALESCE(v_les.obj->'blocks', '[]'::jsonb)) WITH ORDINALITY AS t
        LOOP
          INSERT INTO content_blocks (lesson_id, block_type, content, position, metadata)
          VALUES (
            v_lesson_id,
            v_blk.obj->>'block_type',
            CASE
              WHEN jsonb_typeof(v_blk.obj->'content') IN ('object', 'array')
                THEN (v_blk.obj->'content')::text
              ELSE COALESCE(v_blk.obj->>'content', '')
            END,
            COALESCE((v_blk.obj->>'position')::int, v_blk.pos),
            CASE
              WHEN jsonb_typeof(v_blk.obj->'metadata') = 'object'
                THEN v_blk.obj->'metadata'
              ELSE NULL
            END
          );
        END LOOP;

        IF v_les.obj->>'lesson_type' = 'quiz' AND v_les.obj->'quiz' IS NOT NULL THEN
          INSERT INTO quizzes (lesson_id, title, passing_score, max_attempts)
          VALUES (
            v_lesson_id,
            v_les.obj->'quiz'->>'title',
            COALESCE((v_les.obj->'quiz'->>'passing_score')::numeric, 70),
            NULLIF(v_les.obj->'quiz'->>'max_attempts', '')::int
          )
          RETURNING id INTO v_quiz_id;

          FOR v_q IN
            SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
            FROM jsonb_array_elements(v_les.obj->'quiz'->'questions') WITH ORDINALITY AS t
          LOOP
            INSERT INTO quiz_questions (
              quiz_id,
              question,
              question_type,
              options,
              correct_answer,
              explanation,
              position
            )
            VALUES (
              v_quiz_id,
              v_q.obj->>'question',
              COALESCE(v_q.obj->>'question_type', 'single_choice'),
              v_q.obj->'options',
              v_q.obj->'correct_answer',
              v_q.obj->>'explanation',
              COALESCE((v_q.obj->>'position')::int, v_q.pos)
            );
          END LOOP;
        END IF;
      END LOOP;
    END LOOP;
  END IF;
END
$seed$;

-- Publish once content exists (this course only). Idempotent.
-- On a first run, children have just been inserted. On a re-run, they
-- already exist. Either way the catalogue can show the course.
-- To keep a local draft, comment out the UPDATE below — do not DELETE.
UPDATE courses
SET
  status = 'published',
  published_at = COALESCE(published_at, now()),
  updated_at = now()
WHERE slug = 'sql-pour-debutants-2h';

COMMIT;
`;
}

function sqlString(value) {
  return "'" + String(value).replace(/'/g, "''") + "'";
}

const course = loadCourse();
const exercises = collectExercises(course);
await verifyExercisesWithSqlJs(exercises);

const outPath = join(ROOT, "supabase", "005_seed_sql_debutants.sql");
writeFileSync(outPath, emitSql(course), "utf8");
console.log("Wrote", outPath);
console.log(
  `Course ${course.slug}: ${course.modules.length} modules, ${course.modules.reduce((n, m) => n + m.lessons.length, 0)} lessons, ${exercises.length} sql_exercise blocks.`
);
