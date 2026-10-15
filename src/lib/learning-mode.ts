export type LearningMode = "engaged" | "calm";

export const LEARNING_MODE_EVENT = "Mode d'apprentissage";

export function isLearningMode(value: unknown): value is LearningMode {
  return value === "engaged" || value === "calm";
}

export function storageKey(userId: string) {
  return `lou-learning-mode-${userId}`;
}

export function readLocalMode(userId: string): LearningMode | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(storageKey(userId));
    return isLearningMode(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeLocalMode(userId: string, mode: LearningMode) {
  try {
    window.localStorage.setItem(storageKey(userId), mode);
  } catch {
    /* quota / private mode */
  }
}

export function applyLearningModeAttr(mode: LearningMode | null) {
  if (typeof document === "undefined") return;
  if (mode) document.documentElement.dataset.learningMode = mode;
  else delete document.documentElement.dataset.learningMode;
}

export const MODE_LABELS: Record<LearningMode, { title: string; choice: string; hint: string }> = {
  calm: {
    title: "Classique",
    choice: "Je souhaite apprendre de manière classique",
    hint: "Interface professionnelle : progression en pourcentage, leçons et quiz, sans éléments ludiques à l’écran.",
  },
  engaged: {
    title: "Ludique",
    choice: "Je souhaite apprendre de manière ludique",
    hint: "Mêmes contenus, avec encouragements, barre de progression plus visible et un suivi d’avancement plus vivant.",
  },
};

export function xpFromCompletedLessons(completedCount: number) {
  const xp = Math.max(0, completedCount) * 20;
  const level = Math.floor(xp / 100) + 1;
  return { xp, level, xpInLevel: xp % 100, nextLevelAt: 100 };
}
