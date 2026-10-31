export const MASTERY_LABELS = {
  1: "Découverte",
  2: "Initiation",
  3: "Application",
  4: "Autonomie",
  5: "Maîtrise",
} as const;

export type MasteryRank = 0 | 1 | 2 | 3 | 4 | 5;

export function masteryLabel(level: number): string {
  if (level >= 1 && level <= 5) return MASTERY_LABELS[level as 1 | 2 | 3 | 4 | 5];
  return "Non commencée";
}

/**
 * Calcule un niveau de maîtrise à partir de preuves (quiz réussi, SQL réussi, défi).
 * Ouvrir une leçon n'est pas une preuve. Le niveau ne redescend jamais.
 */
export function nextMastery(input: {
  current: number;
  mappedCount: number;
  completedCount: number;
  bestScore: number | null;
}): number {
  const current = clampMastery(input.current);
  if (input.completedCount <= 0) return current;

  const mapped = Math.max(0, input.mappedCount);
  const done = Math.max(0, input.completedCount);
  const score = input.bestScore == null ? 0 : input.bestScore;

  let proposed = 1;
  if (done >= 2 || score >= 75) proposed = 2;
  if (score >= 80 || done >= 3) proposed = 3;
  if (mapped > 1 && done >= mapped) proposed = 4;
  if (mapped > 1 && done >= mapped && score >= 90) proposed = 5;

  if (mapped === 1 && done === 1) {
    proposed = Math.max(proposed, 3);
    if (score >= 85) proposed = Math.max(proposed, 4);
    if (score >= 95) proposed = 5;
  }

  if (mapped === 0 && done >= 1) {
    proposed = score >= 90 ? 4 : score >= 80 ? 3 : 2;
  }

  return Math.max(current, proposed);
}

function clampMastery(value: number): number {
  if (!Number.isFinite(value) || value < 0) return 0;
  if (value > 5) return 5;
  return Math.floor(value);
}

export function skillsToDevelop<T extends { mastery: number }>(skills: T[], limit = 4): T[] {
  return [...skills]
    .filter((s) => s.mastery < 5)
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, limit);
}
