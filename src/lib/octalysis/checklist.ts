export type OctagonChecks = {
  hasMission: boolean;
  hasQuiz: boolean;
  hasSkillsMapped: boolean;
  hasPortfolioHook: boolean;
  hasSocialOptIn: boolean;
  hasChallenges: boolean;
  hasFeedbackExplanations: boolean;
  hasOptionalAdvanced: boolean;
};

export const CORE_DRIVE_LABELS = {
  cd1: "Sens et mission",
  cd2: "Progression et preuves",
  cd3: "Mise en pratique",
  cd4: "Portefeuille",
  cd5: "Partage volontaire",
  cd6: "Rareté (non utilisée)",
  cd7: "Approfondissements facultatifs",
  cd8: "Pression (non utilisée)",
} as const;

export type CoreDriveId = keyof typeof CORE_DRIVE_LABELS;

export type OctagonScore = {
  drives: Record<CoreDriveId, number>;
  total: number;
  note: string;
};

function points(on: boolean, yes = 10, no = 2): number {
  return on ? yes : no;
}

/** Scores indicatifs à partir d'une checklist explicite — pas une mesure scientifique. */
export function scoreOctagon(checks: OctagonChecks): OctagonScore {
  const drives: Record<CoreDriveId, number> = {
    cd1: points(checks.hasMission),
    cd2: Math.round((points(checks.hasQuiz) + points(checks.hasSkillsMapped)) / 2),
    cd3: Math.round((points(checks.hasChallenges) + points(checks.hasFeedbackExplanations)) / 2),
    cd4: points(checks.hasPortfolioHook),
    cd5: points(checks.hasSocialOptIn, 8, 3),
    cd6: 0,
    cd7: points(checks.hasOptionalAdvanced, 6, 3),
    cd8: 0,
  };
  const total = Object.values(drives).reduce((sum, n) => sum + n, 0);
  return {
    drives,
    total,
    note: "Scores indicatifs, fondés sur une checklist (mission, quiz, compétences, portefeuille, partage volontaire). Ce n'est pas une mesure scientifique, ni une preuve d'apprentissage.",
  };
}

export function checksFromCounts(input: {
  missionCount: number;
  quizLessonCount: number;
  mappedSkillCount: number;
  challengeCount: number;
  explanationCount: number;
  optionalLessonCount: number;
}): OctagonChecks {
  return {
    hasMission: input.missionCount > 0,
    hasQuiz: input.quizLessonCount > 0,
    hasSkillsMapped: input.mappedSkillCount > 0,
    hasPortfolioHook: true,
    hasSocialOptIn: true,
    hasChallenges: input.challengeCount > 0,
    hasFeedbackExplanations: input.explanationCount > 0,
    hasOptionalAdvanced: input.optionalLessonCount > 0,
  };
}
