import { nextMastery } from "./mastery";
import { tableMissing } from "./safe";

type Client = {
  from: (table: string) => any;
};

export type PracticeSource = "quiz_pass" | "sql_success" | "challenge_complete";

export type AwardResult = {
  skillsUpdated: number;
  badgesEarned: number;
  challengesCompleted: number;
};

function empty(): AwardResult {
  return { skillsUpdated: 0, badgesEarned: 0, challengesCompleted: 0 };
}

export async function recordPracticeSuccess(
  supabase: Client,
  input: {
    userId: string;
    lessonId: string;
    courseId: string;
    source: PracticeSource;
    score?: number | null;
  }
): Promise<AwardResult> {
  const result = empty();
  const score = input.score == null ? null : Number(input.score);

  const evidenceRes = await supabase
    .from("skill_evidence")
    .select("skill_id, evidence_type, lesson_id")
    .eq("lesson_id", input.lessonId);
  if (tableMissing(evidenceRes.error)) return result;

  const evidences: { skill_id: string; evidence_type: string; lesson_id: string }[] = evidenceRes.data || [];

  for (const ev of evidences) {
    const upsertEv = await supabase.from("user_skill_events").upsert(
      {
        user_id: input.userId,
        skill_id: ev.skill_id,
        lesson_id: ev.lesson_id,
        evidence_type: input.source,
        score,
      },
      { onConflict: "user_id,skill_id,lesson_id" }
    );
    if (tableMissing(upsertEv.error)) return result;

    const mappedRes = await supabase.from("skill_evidence").select("lesson_id").eq("skill_id", ev.skill_id);
    const eventsRes = await supabase
      .from("user_skill_events")
      .select("lesson_id, score")
      .eq("user_id", input.userId)
      .eq("skill_id", ev.skill_id);

    const mappedCount = (mappedRes.data || []).length;
    const completedCount = (eventsRes.data || []).length;
    const bestScore = (eventsRes.data || []).reduce((best: number | null, row: { score: number | null }) => {
      const n = row.score == null ? null : Number(row.score);
      if (n == null) return best;
      return best == null ? n : Math.max(best, n);
    }, null as number | null);

    const currentRes = await supabase
      .from("user_skills")
      .select("mastery")
      .eq("user_id", input.userId)
      .eq("skill_id", ev.skill_id)
      .maybeSingle();
    const current = Number(currentRes.data?.mastery) || 0;
    const mastery = nextMastery({ current, mappedCount, completedCount, bestScore });
    if (mastery < 1) continue;

    const write = await supabase.from("user_skills").upsert(
      {
        user_id: input.userId,
        skill_id: ev.skill_id,
        mastery,
        source: input.source,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,skill_id" }
    );
    if (!write.error) {
      result.skillsUpdated += 1;
      if (current === 0) {
        await supabase.from("activity_events").insert({
          user_id: input.userId,
          course_id: input.courseId,
          lesson_id: input.lessonId,
          event_type: "Compétence validée",
          metadata: { skill_id: ev.skill_id, mastery },
        });
      }
    }
  }

  const challengeRes = await supabase.from("challenges").select("id").eq("lesson_id", input.lessonId).maybeSingle();
  if (challengeRes.data?.id) {
    const prog = await supabase.from("user_challenge_progress").upsert(
      {
        user_id: input.userId,
        challenge_id: challengeRes.data.id,
        status: "completed",
        score,
        completed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,challenge_id" }
    );
    if (!prog.error) result.challengesCompleted += 1;
  }

  result.badgesEarned = await awardEligibleBadges(supabase, input.userId, input.courseId);
  return result;
}

async function awardEligibleBadges(supabase: Client, userId: string, courseId: string): Promise<number> {
  const badgesRes = await supabase.from("badges").select("id, criteria").eq("course_id", courseId);
  if (tableMissing(badgesRes.error) || !badgesRes.data) return 0;

  const skillsRes = await supabase
    .from("user_skills")
    .select("mastery, skill_id, skill_definitions!inner(course_id)")
    .eq("user_id", userId);
  const courseSkills = (skillsRes.data || []).filter((row: { skill_definitions: { course_id: string } | { course_id: string }[] }) => {
    const def = Array.isArray(row.skill_definitions) ? row.skill_definitions[0] : row.skill_definitions;
    return def?.course_id === courseId;
  });

  const enrollRes = await supabase
    .from("enrollments")
    .select("status")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .maybeSingle();

  const ownedRes = await supabase.from("user_badges").select("badge_id").eq("user_id", userId);
  const owned = new Set((ownedRes.data || []).map((row: { badge_id: string }) => row.badge_id));

  let earned = 0;
  for (const badge of badgesRes.data as { id: string; criteria: Record<string, unknown> }[]) {
    if (owned.has(badge.id)) continue;
    const type = String(badge.criteria?.type || "");
    let ok = false;
    if (type === "first_skill") ok = courseSkills.length >= 1;
    if (type === "skills_at_least") {
      const count = Number(badge.criteria.count) || 0;
      const mastery = Number(badge.criteria.mastery) || 1;
      ok = courseSkills.filter((s: { mastery: number }) => Number(s.mastery) >= mastery).length >= count;
    }
    if (type === "course_complete") ok = enrollRes.data?.status === "completed";
    if (type === "all_skills_at_least") {
      const mastery = Number(badge.criteria.mastery) || 4;
      ok = courseSkills.length > 0 && courseSkills.every((s: { mastery: number }) => Number(s.mastery) >= mastery);
    }
    if (!ok) continue;

    const insert = await supabase.from("user_badges").upsert(
      { user_id: userId, badge_id: badge.id },
      { onConflict: "user_id,badge_id", ignoreDuplicates: true }
    );
    if (!insert.error) {
      earned += 1;
      await supabase.from("activity_events").insert({
        user_id: userId,
        course_id: courseId,
        event_type: "Réalisation obtenue",
        metadata: { badge_id: badge.id },
      });
    }
  }
  return earned;
}
