#!/usr/bin/env node
/**
 * Writes supabase/007a + 007b (split for SQL editor size) and a short 007 pointer.
 * Idempotent. Does not touch sql-pour-debutants-2h nor devenir-recruteur-a-z.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCourse, collectLessons, collectQuizzes } from "../src/content/gestion-paie/load-course.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SLUG = "devenir-gestionnaire-de-paie";

function sqlString(value) {
  return "'" + String(value ?? "").replace(/'/g, "''") + "'";
}

function insertLoop() {
  return `
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
          module_id, title, description, lesson_type, position,
          estimated_duration_minutes, is_required
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
              quiz_id, question, question_type, options, correct_answer, explanation, position
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
    END LOOP`;
}

function emitPart(courseSlice, { tag, header, guard, footer }) {
  const payload = JSON.stringify(courseSlice, null, 2);
  return `${header}

BEGIN;
${guard}

DO $seed$
DECLARE
  payload        jsonb := $${tag}$
${payload}
$${tag}$;
  v_course_id    uuid;
  v_module_id    uuid;
  v_lesson_id    uuid;
  v_quiz_id      uuid;
  v_mod          record;
  v_les          record;
  v_blk          record;
  v_q            record;
BEGIN
  SELECT id INTO v_course_id FROM courses WHERE slug = ${sqlString(SLUG)};
  IF v_course_id IS NULL THEN
    RAISE EXCEPTION 'Cours ${SLUG} absent. Exécutez 007a d''abord.';
  END IF;
${footer.skipCheck}
      ${insertLoop()}
${footer.skipEnd}
END
$seed$;

${footer.after}

COMMIT;
`;
}

const course = await loadCourse();
const lessons = collectLessons(course);
const quizzes = collectQuizzes(course);
if (course.modules.length === 0) {
  console.error("Aucun module trouvé");
  process.exit(1);
}

const sorted = [...course.modules].sort((a, b) => a.position - b.position);
const mid = Math.ceil(sorted.length / 2);
const part1 = { ...course, modules: sorted.slice(0, mid) };
const part2 = { ...course, modules: sorted.slice(mid) };

const headerA = `-- LOU Academy — 007a PARTIE 1/2 — ${SLUG}
-- Modules 1 à ${mid} (positions ${part1.modules[0].position}–${part1.modules.at(-1).position}).
-- SQL Editor (postgres). Ne touche pas sql-pour-debutants-2h ni devenir-recruteur-a-z.
-- Puis exécutez 007b.`;

const guardA = `
INSERT INTO courses (
  title, slug, description, category, level, estimated_duration_minutes,
  status, creator_id, icon, gradient
)
SELECT
  ${sqlString(course.title)},
  ${sqlString(SLUG)},
  ${sqlString(course.description)},
  ${sqlString(course.category)},
  ${sqlString(course.level)},
  ${Number(course.estimated_duration_minutes) || 3600},
  'draft',
  (SELECT id FROM profiles WHERE role IN ('admin', 'creator') ORDER BY created_at LIMIT 1),
  ${sqlString(course.icon)},
  ${sqlString(course.gradient)}
WHERE NOT EXISTS (SELECT 1 FROM courses WHERE slug = ${sqlString(SLUG)})
AND EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator'));

DO $guard$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')) THEN
    RAISE EXCEPTION 'Aucun profil admin/creator.';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM courses WHERE slug = ${sqlString(SLUG)}) THEN
    RAISE EXCEPTION 'Cours ${SLUG} absent.';
  END IF;
END
$guard$;
`;

const sqlA = emitPart(part1, {
  tag: "coursejsona",
  header: headerA,
  guard: guardA,
  footer: {
    skipCheck: `  IF EXISTS (SELECT 1 FROM modules WHERE course_id = v_course_id) THEN
    RAISE NOTICE '007a : modules déjà présents — skip.';
  ELSE`,
    skipEnd: `  END IF;`,
    after: "-- Reste en draft jusqu'à 007b.",
  },
});

const sqlB = emitPart(part2, {
  tag: "coursejsonb",
  header: `-- LOU Academy — 007b PARTIE 2/2 — ${SLUG}
-- Modules restants (positions ${part2.modules[0].position}–${part2.modules.at(-1).position}).
-- Exécuter APRÈS 007a.`,
  guard: "",
  footer: {
    skipCheck: `  IF EXISTS (
    SELECT 1 FROM modules WHERE course_id = v_course_id AND position >= ${part2.modules[0].position}
  ) THEN
    RAISE NOTICE '007b : déjà chargé — skip.';
  ELSE`,
    skipEnd: `  END IF;`,
    after: `UPDATE courses
SET status = 'published',
    published_at = COALESCE(published_at, now()),
    updated_at = now()
WHERE slug = ${sqlString(SLUG)};`,
  },
});

const dir = join(ROOT, "supabase");
writeFileSync(join(dir, "007a_seed_devenir_gestionnaire_paie.sql"), sqlA, "utf8");
writeFileSync(join(dir, "007b_seed_devenir_gestionnaire_paie.sql"), sqlB, "utf8");
writeFileSync(
  join(dir, "007_seed_devenir_gestionnaire_paie.sql"),
  `-- POINTER — le seed est découpé (éditeur SQL ~1 Mo).
-- 1. Exécutez 007a_seed_devenir_gestionnaire_paie.sql
-- 2. Exécutez 007b_seed_devenir_gestionnaire_paie.sql
-- Slug: ${SLUG}
-- ${course.modules.length} modules, ${lessons.length} leçons, ${quizzes.length} quiz.
-- Régénérer : node scripts/generate-paie-seed.mjs
-- Ne touche PAS sql-pour-debutants-2h ni devenir-recruteur-a-z.
`,
  "utf8"
);

console.log(
  `Wrote 007a + 007b. ${course.modules.length} modules, ${lessons.length} lessons, ${quizzes.length} quizzes.`
);
console.log("007a bytes", Buffer.byteLength(sqlA), "007b bytes", Buffer.byteLength(sqlB));
