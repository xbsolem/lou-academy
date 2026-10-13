export interface LessonGate {
  id: string;
  lesson_type: string;
  is_required: boolean;
  content_blocks?: { block_type: string; content?: string; metadata?: Record<string, unknown> | null }[];
}

function blockIsPractical(block: { content?: string; metadata?: Record<string, unknown> | null }): boolean {
  const meta = block.metadata || {};
  if (meta.practicalExam || meta.practical_exam) return true;
  if (!block.content) return false;
  try {
    const parsed = JSON.parse(block.content) as { practicalExam?: boolean; practical_exam?: boolean };
    return Boolean(parsed.practicalExam || parsed.practical_exam);
  } catch {
    return false;
  }
}

export function isPracticalLesson(lesson: LessonGate): boolean {
  const sqlBlocks = (lesson.content_blocks || []).filter((block) => block.block_type === "sql_exercise");
  if (sqlBlocks.length >= 2) return true;
  return sqlBlocks.some(blockIsPractical);
}

export function requiredLessons(lessons: LessonGate[]): LessonGate[] {
  const required = lessons.filter((lesson) => lesson.is_required);
  return required.length > 0 ? required : lessons;
}

export function computeProgressPercent(lessons: LessonGate[], progress: Record<string, string>): number {
  const pool = requiredLessons(lessons);
  if (pool.length === 0) return 0;
  const completed = pool.filter((lesson) => progress[lesson.id] === "completed").length;
  return Math.round((completed / pool.length) * 100);
}

export function canIssueCertificate(lessons: LessonGate[], progress: Record<string, string>): boolean {
  const pool = requiredLessons(lessons);
  if (pool.length === 0) return false;
  if (!pool.every((lesson) => progress[lesson.id] === "completed")) return false;

  const quizzes = lessons.filter((lesson) => lesson.lesson_type === "quiz");
  if (quizzes.length > 0) {
    const lastQuiz = quizzes[quizzes.length - 1];
    if (progress[lastQuiz.id] !== "completed") return false;
    if (!quizzes.every((quiz) => !quiz.is_required || progress[quiz.id] === "completed")) return false;
  }

  const practicals = lessons.filter((lesson) => isPracticalLesson(lesson));
  if (practicals.some((lesson) => progress[lesson.id] !== "completed")) {
    return false;
  }

  return true;
}

export const PRACTICAL_PASSING_SCORE = 14;
export const PRACTICAL_MAX_SCORE = 20;
export const PRACTICAL_POINTS_PER_TASK = 4;
