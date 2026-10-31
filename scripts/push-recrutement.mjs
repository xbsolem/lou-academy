#!/usr/bin/env node
/**
 * Pushes devenir-recruteur-a-z into Supabase (service role, bypasses RLS).
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=eyJ... node --env-file=.env.local scripts/push-recrutement.mjs
 * Idempotent: skips the tree if the slug already has modules.
 */
import { createClient } from "@supabase/supabase-js";
import { loadCourse, collectLessons, collectQuizzes } from "../src/content/recrutement-a-z/load-course.mjs";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Il manque NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
const course = await loadCourse();
const lessonsCount = collectLessons(course).length;
const quizCount = collectQuizzes(course).length;

const { data: staff, error: staffErr } = await supabase
  .from("profiles")
  .select("id")
  .in("role", ["admin", "creator"])
  .order("created_at", { ascending: true })
  .limit(1)
  .maybeSingle();
if (staffErr || !staff) {
  console.error("Aucun profil admin/creator.", staffErr);
  process.exit(1);
}

const { data: existing } = await supabase
  .from("courses")
  .select("id, status")
  .eq("slug", course.slug)
  .maybeSingle();

let courseId = existing?.id;
if (!courseId) {
  const { data: created, error } = await supabase
    .from("courses")
    .insert({
      title: course.title,
      slug: course.slug,
      description: course.description,
      category: course.category,
      level: course.level,
      estimated_duration_minutes: course.estimated_duration_minutes,
      status: "draft",
      creator_id: staff.id,
      icon: course.icon,
      gradient: course.gradient,
    })
    .select("id")
    .single();
  if (error) {
    console.error("Insert course:", error);
    process.exit(1);
  }
  courseId = created.id;
  console.log("Cours créé", courseId);
} else {
  console.log("Cours déjà présent", courseId);
}

const { count } = await supabase
  .from("modules")
  .select("id", { count: "exact", head: true })
  .eq("course_id", courseId);

if ((count || 0) > 0) {
  await supabase
    .from("courses")
    .update({ status: "published", published_at: new Date().toISOString() })
    .eq("id", courseId)
    .is("published_at", null);
  console.log(`Déjà ${count} modules — pas de second arbre. Cours publié si besoin.`);
  process.exit(0);
}

for (const [mi, mod] of course.modules.entries()) {
  const { data: moduleRow, error: modErr } = await supabase
    .from("modules")
    .insert({
      course_id: courseId,
      title: mod.title,
      description: mod.description || "",
      position: typeof mod.position === "number" ? mod.position : mi,
    })
    .select("id")
    .single();
  if (modErr) {
    console.error("Module", mod.title, modErr);
    process.exit(1);
  }
  process.stdout.write(`\n[${mi + 1}/${course.modules.length}] ${mod.title}`);

  for (const [li, lesson] of (mod.lessons || []).entries()) {
    const { data: lessonRow, error: lesErr } = await supabase
      .from("lessons")
      .insert({
        module_id: moduleRow.id,
        title: lesson.title,
        description: lesson.description || "",
        lesson_type: lesson.lesson_type || "lesson",
        position: typeof lesson.position === "number" ? lesson.position : li,
        estimated_duration_minutes: lesson.estimated_duration_minutes ?? null,
        is_required: lesson.is_required !== false,
      })
      .select("id")
      .single();
    if (lesErr) {
      console.error("\nLesson", lesson.title, lesErr);
      process.exit(1);
    }

    const blocks = (lesson.blocks || []).map((block, bi) => ({
      lesson_id: lessonRow.id,
      block_type: block.block_type,
      content: typeof block.content === "string" ? block.content : JSON.stringify(block.content ?? ""),
      position: typeof block.position === "number" ? block.position : bi,
      metadata: block.metadata && typeof block.metadata === "object" ? block.metadata : null,
    }));
    if (blocks.length) {
      const { error: blkErr } = await supabase.from("content_blocks").insert(blocks);
      if (blkErr) {
        console.error("\nBlocks", lesson.title, blkErr);
        process.exit(1);
      }
    }

    if (lesson.lesson_type === "quiz" && lesson.quiz) {
      const { data: quizRow, error: quizErr } = await supabase
        .from("quizzes")
        .insert({
          lesson_id: lessonRow.id,
          title: lesson.quiz.title,
          passing_score: lesson.quiz.passing_score ?? 70,
          max_attempts: lesson.quiz.max_attempts ?? null,
        })
        .select("id")
        .single();
      if (quizErr) {
        console.error("\nQuiz", lesson.title, quizErr);
        process.exit(1);
      }
      const questions = (lesson.quiz.questions || []).map((question, qi) => ({
        quiz_id: quizRow.id,
        question: question.question,
        question_type: question.question_type || "single_choice",
        options: question.options,
        correct_answer: question.correct_answer,
        explanation: question.explanation || "",
        position: typeof question.position === "number" ? question.position : qi,
      }));
      if (questions.length) {
        const { error: qErr } = await supabase.from("quiz_questions").insert(questions);
        if (qErr) {
          console.error("\nQuestions", lesson.title, qErr);
          process.exit(1);
        }
      }
    }
  }
}

const { error: pubErr } = await supabase
  .from("courses")
  .update({
    status: "published",
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  })
  .eq("id", courseId);
if (pubErr) {
  console.error("\nPublish:", pubErr);
  process.exit(1);
}

console.log(`\nPublié. ${course.modules.length} modules, ${lessonsCount} leçons, ${quizCount} quiz.`);
