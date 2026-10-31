#!/usr/bin/env node
/**
 * Imports consultant-junior-workforce-organization via the Data API (secret key).
 * Idempotent: no second tree if the slug already has modules.
 * Does not touch sql-pour-debutants-2h nor devenir-recruteur-a-z nor devenir-gestionnaire-de-paie nor chef-projet-marketing-developpement.
 *
 *   SUPABASE_SECRET_KEY=sb_secret_… node scripts/import-workforce.mjs
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import { loadCourse } from "../src/content/consultant-workforce/load-course.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SLUG = "consultant-junior-workforce-organization";

function loadEnvLocal() {
  try {
    const raw = readFileSync(join(ROOT, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq < 1) continue;
      const key = trimmed.slice(0, eq);
      let val = trimmed.slice(eq + 1);
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    /* optional */
  }
}

function die(message, error) {
  console.error(message);
  if (error?.message) console.error(error.message);
  process.exit(1);
}

async function insertChunk(supabase, table, rows, size = 80) {
  for (let i = 0; i < rows.length; i += size) {
    const slice = rows.slice(i, i + size);
    const { error } = await supabase.from(table).insert(slice);
    if (error) die(`Insert ${table} failed at ${i}`, error);
  }
}

loadEnvLocal();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const secret = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url) die("NEXT_PUBLIC_SUPABASE_URL manquant.");
if (!secret) die("SUPABASE_SECRET_KEY manquant.");

const supabase = createClient(url, secret, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const course = await loadCourse();
const { data: staff, error: staffError } = await supabase
  .from("profiles")
  .select("id")
  .in("role", ["admin", "creator"])
  .order("created_at", { ascending: true })
  .limit(1);
if (staffError) die("Lecture profiles", staffError);
if (!staff?.length) die("Aucun profil admin/creator. Créez un compte staff d'abord.");

const { data: existing, error: existingError } = await supabase
  .from("courses")
  .select("id")
  .eq("slug", SLUG)
  .maybeSingle();
if (existingError) die("Lecture courses", existingError);

let courseId = existing?.id;
if (!courseId) {
  const { data: created, error: createError } = await supabase
    .from("courses")
    .insert({
      title: course.title,
      slug: SLUG,
      description: course.description,
      category: course.category,
      level: course.level,
      estimated_duration_minutes: course.estimated_duration_minutes || 300,
      status: "draft",
      creator_id: staff[0].id,
      icon: course.icon,
      gradient: course.gradient,
    })
    .select("id")
    .single();
  if (createError) die("Création du cours", createError);
  courseId = created.id;
  console.log("Cours créé", courseId);
} else {
  console.log("Cours déjà présent", courseId);
}

const { count, error: countError } = await supabase
  .from("modules")
  .select("id", { count: "exact", head: true })
  .eq("course_id", courseId);
if (countError) die("Comptage modules", countError);

if ((count || 0) > 0) {
  console.log(`Déjà ${count} modules — pas de second arbre.`);
} else {
  console.log(`Import de ${course.modules.length} modules…`);
  for (const [modIndex, mod] of course.modules.entries()) {
    const { data: moduleRow, error: moduleError } = await supabase
      .from("modules")
      .insert({
        course_id: courseId,
        title: mod.title,
        description: mod.description || null,
        position: typeof mod.position === "number" ? mod.position : modIndex,
      })
      .select("id")
      .single();
    if (moduleError) die(`Module ${mod.title}`, moduleError);

    for (const [lesIndex, lesson] of (mod.lessons || []).entries()) {
      const { data: lessonRow, error: lessonError } = await supabase
        .from("lessons")
        .insert({
          module_id: moduleRow.id,
          title: lesson.title,
          description: lesson.description || null,
          lesson_type: lesson.lesson_type || "lesson",
          position: typeof lesson.position === "number" ? lesson.position : lesIndex,
          estimated_duration_minutes: lesson.estimated_duration_minutes ?? null,
          is_required: lesson.is_required !== false,
        })
        .select("id")
        .single();
      if (lessonError) die(`Leçon ${lesson.title}`, lessonError);

      const blocks = (lesson.blocks || []).map((block, blockIndex) => ({
        lesson_id: lessonRow.id,
        block_type: block.block_type || "text",
        content:
          block.content == null
            ? ""
            : typeof block.content === "string"
              ? block.content
              : JSON.stringify(block.content),
        position: typeof block.position === "number" ? block.position : blockIndex,
        metadata: block.metadata && typeof block.metadata === "object" ? block.metadata : null,
      }));
      if (blocks.length) await insertChunk(supabase, "content_blocks", blocks, 100);

      if (lesson.lesson_type === "quiz" && lesson.quiz) {
        const { data: quizRow, error: quizError } = await supabase
          .from("quizzes")
          .insert({
            lesson_id: lessonRow.id,
            title: lesson.quiz.title,
            passing_score: lesson.quiz.passing_score ?? 70,
            max_attempts: lesson.quiz.max_attempts ?? null,
          })
          .select("id")
          .single();
        if (quizError) die(`Quiz ${lesson.title}`, quizError);

        const questions = (lesson.quiz.questions || []).map((question, qIndex) => ({
          quiz_id: quizRow.id,
          question: question.question,
          question_type: question.question_type || "single_choice",
          options: question.options,
          correct_answer: Array.isArray(question.correct_answer)
            ? question.correct_answer
            : [question.correct_answer],
          explanation: question.explanation || null,
          position: typeof question.position === "number" ? question.position : qIndex,
        }));
        if (questions.length) await insertChunk(supabase, "quiz_questions", questions, 50);
      }
    }
    process.stdout.write(`  [${modIndex + 1}/${course.modules.length}] ${mod.title}\n`);
  }
}

const { error: publishError } = await supabase
  .from("courses")
  .update({
    status: "published",
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  })
  .eq("id", courseId);
if (publishError) die("Publication", publishError);

const { count: moduleCount } = await supabase
  .from("modules")
  .select("id", { count: "exact", head: true })
  .eq("course_id", courseId);
console.log("Publié.", SLUG, "modules:", moduleCount);
