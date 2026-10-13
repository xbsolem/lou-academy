export function isAnswerCorrect(userAnswer: number[], correctAnswer: number[]): boolean {
  const user = [...userAnswer].sort((a, b) => a - b);
  const correct = [...correctAnswer].sort((a, b) => a - b);
  return user.length === correct.length && user.every((value, i) => value === correct[i]);
}

export function scoreQuiz(
  questions: { id: string; correct_answer: number[] }[],
  answers: Record<string, number[]>,
  passingScore = 70
): { correct: number; total: number; percent: number; passed: boolean } {
  let correct = 0;
  for (const question of questions) {
    if (isAnswerCorrect(answers[question.id] || [], question.correct_answer)) {
      correct++;
    }
  }
  const total = questions.length;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  return {
    correct,
    total,
    percent,
    passed: percent >= passingScore,
  };
}

export const DEFAULT_QUIZ_PASSING_SCORE = 70;
