import { describe, expect, it } from "vitest";
import { DEFAULT_QUIZ_PASSING_SCORE, isAnswerCorrect, scoreQuiz } from "./quiz-scoring";

const questions = Array.from({ length: 10 }, (_, i) => ({
  id: `q${i + 1}`,
  correct_answer: [0],
}));

function answersFor(correctCount: number): Record<string, number[]> {
  const answers: Record<string, number[]> = {};
  questions.forEach((q, i) => {
    answers[q.id] = [i < correctCount ? 0 : 1];
  });
  return answers;
}

describe("quiz scoring", () => {
  it("uses 70% as the default passing threshold", () => {
    expect(DEFAULT_QUIZ_PASSING_SCORE).toBe(70);
    expect(scoreQuiz(questions, answersFor(7)).passed).toBe(true);
    expect(scoreQuiz(questions, answersFor(7)).percent).toBe(70);
    expect(scoreQuiz(questions, answersFor(6)).passed).toBe(false);
    expect(scoreQuiz(questions, answersFor(6)).percent).toBe(60);
  });

  it("passes 21/30 and fails 20/30 at 70%", () => {
    const thirty = Array.from({ length: 30 }, (_, i) => ({
      id: `q${i + 1}`,
      correct_answer: [1],
    }));
    const pass: Record<string, number[]> = {};
    const fail: Record<string, number[]> = {};
    thirty.forEach((q, i) => {
      pass[q.id] = [i < 21 ? 1 : 0];
      fail[q.id] = [i < 20 ? 1 : 0];
    });
    expect(scoreQuiz(thirty, pass).percent).toBe(70);
    expect(scoreQuiz(thirty, pass).passed).toBe(true);
    expect(scoreQuiz(thirty, fail).percent).toBe(67);
    expect(scoreQuiz(thirty, fail).passed).toBe(false);
  });

  it("scores multiple-choice regardless of selected order", () => {
    expect(isAnswerCorrect([2, 0, 1], [0, 1, 2])).toBe(true);
    expect(isAnswerCorrect([0, 1], [0, 1, 2])).toBe(false);
  });

  it("does not mutate the correct_answer array", () => {
    const correct = [2, 0];
    isAnswerCorrect([0, 2], correct);
    expect(correct).toEqual([2, 0]);
  });
});
