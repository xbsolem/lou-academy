"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import OctagonStudio from "@/components/octalysis/OctagonStudio";
import { checksFromCounts, scoreOctagon } from "@/lib/octalysis/checklist";
import { tableMissing } from "@/lib/octalysis/safe";

export default function QualityTab({
  courseId,
  quizLessonCount,
  optionalLessonCount,
}: {
  courseId: string;
  quizLessonCount: number;
  optionalLessonCount: number;
}) {
  const [missionCount, setMissionCount] = useState(0);
  const [mappedSkillCount, setMappedSkillCount] = useState(0);
  const [challengeCount, setChallengeCount] = useState(0);
  const [explanationCount, setExplanationCount] = useState(0);
  const supabase = createClient();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [missions, skills, challenges, questions] = await Promise.all([
        supabase.from("course_missions").select("id", { count: "exact", head: true }).eq("course_id", courseId),
        supabase.from("skill_evidence").select("id, skill_definitions!inner(course_id)", { count: "exact", head: true }).eq("skill_definitions.course_id", courseId),
        supabase.from("challenges").select("id", { count: "exact", head: true }).eq("course_id", courseId),
        supabase.from("quiz_questions").select("id, explanation, quizzes!inner(lessons!inner(modules!inner(course_id)))").eq("quizzes.lessons.modules.course_id", courseId),
      ]);
      if (cancelled) return;
      setMissionCount(tableMissing(missions.error) ? 0 : missions.count || 0);
      setMappedSkillCount(tableMissing(skills.error) ? 0 : skills.count || 0);
      setChallengeCount(tableMissing(challenges.error) ? 0 : challenges.count || 0);
      const explained = tableMissing(questions.error)
        ? 0
        : (questions.data || []).filter((q: { explanation?: string | null }) => Boolean(q.explanation)).length;
      setExplanationCount(explained);
    })();
    return () => {
      cancelled = true;
    };
  }, [courseId, supabase]);

  const checks = checksFromCounts({
    missionCount,
    quizLessonCount,
    mappedSkillCount,
    challengeCount,
    explanationCount,
    optionalLessonCount,
  });

  return <OctagonStudio checks={checks} score={scoreOctagon(checks)} />;
}
