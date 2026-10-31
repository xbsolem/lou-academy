import { createServerSupabase } from "@/lib/supabase/server";
import { rows, tableMissing } from "./safe";
import { skillsToDevelop } from "./mastery";

export type LearnerCourse = {
  id: string;
  title: string;
  icon: string | null;
  gradient: string | null;
  slug?: string | null;
  category?: string | null;
};

export type ResumeTarget = {
  courseId: string;
  courseTitle: string;
  lessonId: string | null;
  lessonTitle: string | null;
};

export type SkillRow = {
  id: string;
  title: string;
  description: string;
  workplace_application: string;
  mastery: number;
  courseTitle: string;
  courseId: string;
};

export type BadgeRow = {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned_at: string;
  shared: boolean;
  userBadgeId: string;
  courseTitle: string | null;
};

export type ChallengeRow = {
  id: string;
  title: string;
  workplace_context: string;
  challenge_type: string;
  courseId: string;
  courseTitle: string;
  lessonId: string | null;
  status: string;
};

export type MissionRow = {
  id: string;
  title: string;
  problem: string;
  skills_summary: string;
  situations: string;
  outcome: string;
  kind: "core" | "advanced";
  courseId: string;
  courseTitle: string;
  moduleId: string | null;
};

export type ReviewHint = {
  courseId: string;
  courseTitle: string;
  lessonId: string | null;
  score: number;
  message: string;
};

export type LearnerJourney = {
  inProgress: { course: LearnerCourse; progress: number; status: string }[];
  completed: { course: LearnerCourse; progress: number }[];
  resume: ResumeTarget | null;
  nextMission: MissionRow | null;
  skills: SkillRow[];
  skillsToGrow: SkillRow[];
  badges: BadgeRow[];
  challenges: ChallengeRow[];
  reviews: ReviewHint[];
  deliverables: { title: string; href: string; detail: string }[];
  globalPercent: number;
  skillCount: number;
  doneCount: number;
};

function asCourse(raw: unknown): LearnerCourse | null {
  const row = Array.isArray(raw) ? raw[0] : raw;
  if (!row || typeof row !== "object") return null;
  const c = row as LearnerCourse;
  return c.id && c.title ? c : null;
}

export async function loadLearnerJourney(userId: string): Promise<LearnerJourney> {
  const supabase = await createServerSupabase();

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("progress_percent, status, last_lesson_id, last_activity_at, course_id, courses(id, title, icon, gradient, slug, category)")
    .eq("user_id", userId)
    .order("last_activity_at", { ascending: false });

  const rowsEnroll = enrollments || [];
  const inProgress = rowsEnroll
    .filter((e) => e.status !== "completed")
    .map((e) => {
      const course = asCourse(e.courses);
      return course ? { course, progress: Number(e.progress_percent) || 0, status: e.status } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const completed = rowsEnroll
    .filter((e) => e.status === "completed")
    .map((e) => {
      const course = asCourse(e.courses);
      return course ? { course, progress: Number(e.progress_percent) || 0 } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const latest = rowsEnroll[0];
  let resume: ResumeTarget | null = null;
  if (latest) {
    const course = asCourse(latest.courses);
    if (course) {
      let lessonTitle: string | null = null;
      if (latest.last_lesson_id) {
        const lessonRes = await supabase.from("lessons").select("title").eq("id", latest.last_lesson_id).maybeSingle();
        lessonTitle = lessonRes.data?.title || null;
      }
      resume = {
        courseId: course.id,
        courseTitle: course.title,
        lessonId: latest.last_lesson_id || null,
        lessonTitle,
      };
    }
  }

  const courseIds = rowsEnroll.map((e) => e.course_id).filter(Boolean);
  const skillsRes = await supabase
    .from("user_skills")
    .select("id, mastery, skill_id, skill_definitions(id, title, description, workplace_application, course_id, courses(title))")
    .eq("user_id", userId);
  const skills: SkillRow[] = tableMissing(skillsRes.error)
    ? []
    : (skillsRes.data || []).map((row: any) => {
        const def = Array.isArray(row.skill_definitions) ? row.skill_definitions[0] : row.skill_definitions;
        const course = asCourse(def?.courses);
        return {
          id: def?.id || row.skill_id,
          title: def?.title || "Compétence",
          description: def?.description || "",
          workplace_application: def?.workplace_application || "",
          mastery: Number(row.mastery) || 1,
          courseTitle: course?.title || "",
          courseId: def?.course_id || "",
        };
      });

  const badgesRes = await supabase
    .from("user_badges")
    .select("id, earned_at, shared, badges(id, title, description, icon, course_id, courses(title))")
    .eq("user_id", userId)
    .order("earned_at", { ascending: false });
  const badges: BadgeRow[] = tableMissing(badgesRes.error)
    ? []
    : (badgesRes.data || []).map((row: any) => {
        const badge = Array.isArray(row.badges) ? row.badges[0] : row.badges;
        const course = asCourse(badge?.courses);
        return {
          id: badge?.id || "",
          title: badge?.title || "Réalisation",
          description: badge?.description || "",
          icon: badge?.icon || "fa-award",
          earned_at: row.earned_at,
          shared: Boolean(row.shared),
          userBadgeId: row.id,
          courseTitle: course?.title || null,
        };
      });

  let challenges: ChallengeRow[] = [];
  if (courseIds.length > 0) {
    const chRes = await supabase
      .from("challenges")
      .select("id, title, workplace_context, challenge_type, course_id, lesson_id, courses(title)")
      .in("course_id", courseIds)
      .limit(40);
    const progressRes = await supabase
      .from("user_challenge_progress")
      .select("challenge_id, status")
      .eq("user_id", userId);
    const progressMap = new Map((progressRes.data || []).map((p: { challenge_id: string; status: string }) => [p.challenge_id, p.status]));
    challenges = tableMissing(chRes.error)
      ? []
      : (chRes.data || []).map((ch: any) => {
          const course = asCourse(ch.courses);
          return {
            id: ch.id,
            title: ch.title,
            workplace_context: ch.workplace_context,
            challenge_type: ch.challenge_type,
            courseId: ch.course_id,
            courseTitle: course?.title || "",
            lessonId: ch.lesson_id,
            status: progressMap.get(ch.id) || "available",
          };
        });
  }

  let nextMission: MissionRow | null = null;
  const focusCourse = inProgress[0]?.course || completed[0]?.course;
  if (focusCourse) {
    const missionRes = await supabase
      .from("course_missions")
      .select("*")
      .eq("course_id", focusCourse.id)
      .is("module_id", null)
      .maybeSingle();
    if (missionRes.data) {
      nextMission = {
        id: missionRes.data.id,
        title: missionRes.data.title,
        problem: missionRes.data.problem,
        skills_summary: missionRes.data.skills_summary,
        situations: missionRes.data.situations,
        outcome: missionRes.data.outcome,
        kind: missionRes.data.kind === "advanced" ? "advanced" : "core",
        courseId: focusCourse.id,
        courseTitle: focusCourse.title,
        moduleId: null,
      };
    }
  }

  const attemptsRes = await supabase
    .from("quiz_attempts")
    .select("score, passed, completed_at, quiz_id, quizzes(lesson_id, lessons(title, modules(course_id, courses(id, title))))")
    .eq("user_id", userId)
    .not("completed_at", "is", null)
    .order("completed_at", { ascending: false })
    .limit(20);
  const reviews: ReviewHint[] = [];
  for (const attempt of attemptsRes.data || []) {
    if (attempt.passed || Number(attempt.score) >= 80) continue;
    const quiz = Array.isArray(attempt.quizzes) ? attempt.quizzes[0] : attempt.quizzes;
    const lesson = quiz && (Array.isArray((quiz as any).lessons) ? (quiz as any).lessons[0] : (quiz as any).lessons);
    const mod = lesson && (Array.isArray(lesson.modules) ? lesson.modules[0] : lesson.modules);
    const course = asCourse(mod?.courses);
    if (!course) continue;
    if (reviews.some((r) => r.courseId === course.id)) continue;
    reviews.push({
      courseId: course.id,
      courseTitle: course.title,
      lessonId: quiz?.lesson_id || null,
      score: Number(attempt.score) || 0,
      message: `Vous pouvez revoir une étape de « ${course.title} » (score ${Math.round(Number(attempt.score) || 0)} %). Ce n'est pas un échec : c'est une piste de consolidation, si vous le souhaitez.`,
    });
    if (reviews.length >= 3) break;
  }

  const { data: certificates } = await supabase.from("certificates").select("id").eq("user_id", userId);
  const deliverables = [
    ...completed.map((c) => ({
      title: c.course.title,
      href: `/player/${c.course.id}`,
      detail: "Parcours terminé — attestation dans Certificats si les conditions sont réunies.",
    })),
    ...badges.slice(0, 4).map((b) => ({
      title: b.title,
      href: "/espace",
      detail: b.description,
    })),
  ];
  if ((certificates || []).length > 0) {
    deliverables.unshift({
      title: `${certificates!.length} attestation${certificates!.length > 1 ? "s" : ""}`,
      href: "/certificats",
      detail: "Documents déjà délivrés pour les parcours validés.",
    });
  }

  const globalPercent =
    rowsEnroll.length > 0
      ? Math.round(rowsEnroll.reduce((s, e) => s + (Number(e.progress_percent) || 0), 0) / rowsEnroll.length)
      : 0;

  return {
    inProgress,
    completed,
    resume,
    nextMission,
    skills,
    skillsToGrow: skillsToDevelop(skills),
    badges,
    challenges: challenges.filter((c) => c.status !== "completed").slice(0, 6),
    reviews,
    deliverables: deliverables.slice(0, 8),
    globalPercent,
    skillCount: skills.length,
    doneCount: completed.length,
  };
}

export async function loadCourseJourney(courseId: string) {
  const supabase = await createServerSupabase();
  const [missionsRes, skillsRes, challengesRes] = await Promise.all([
    supabase.from("course_missions").select("*").eq("course_id", courseId).order("position"),
    supabase.from("skill_definitions").select("*").eq("course_id", courseId).order("position"),
    supabase.from("challenges").select("*").eq("course_id", courseId),
  ]);
  return {
    missions: tableMissing(missionsRes.error) ? [] : rows(missionsRes),
    skills: tableMissing(skillsRes.error) ? [] : rows(skillsRes),
    challenges: tableMissing(challengesRes.error) ? [] : rows(challengesRes),
  };
}
