export interface QuizAttemptPayload {
  answers: Record<string, number[]>;
  currentIndex: number;
}

export function parseQuizAttemptPayload(raw: unknown): QuizAttemptPayload {
  let value = raw;
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return { answers: {}, currentIndex: 0 };
    }
  }
  if (!value || typeof value !== "object") {
    return { answers: {}, currentIndex: 0 };
  }
  const rec = value as Record<string, unknown>;
  if (rec.answers && typeof rec.answers === "object" && !Array.isArray(rec.answers)) {
    return {
      answers: rec.answers as Record<string, number[]>,
      currentIndex: typeof rec.currentIndex === "number" ? rec.currentIndex : 0,
    };
  }
  const looksLikeAnswers = Object.values(rec).every((v) => Array.isArray(v) || v == null);
  if (looksLikeAnswers) {
    return { answers: rec as Record<string, number[]>, currentIndex: 0 };
  }
  return { answers: {}, currentIndex: 0 };
}
