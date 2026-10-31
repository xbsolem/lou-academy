import { describe, expect, it } from "vitest";
import { checksFromCounts, scoreOctagon } from "./checklist";

describe("scoreOctagon", () => {
  it("keeps scarcity and pressure at zero", () => {
    const score = scoreOctagon(checksFromCounts({
      missionCount: 1,
      quizLessonCount: 1,
      mappedSkillCount: 2,
      challengeCount: 3,
      explanationCount: 4,
      optionalLessonCount: 1,
    }));
    expect(score.drives.cd6).toBe(0);
    expect(score.drives.cd8).toBe(0);
    expect(score.total).toBeGreaterThan(0);
    expect(score.note).toMatch(/indicatif/i);
  });

  it("lowers meaning when no mission is present", () => {
    const withMission = scoreOctagon(checksFromCounts({
      missionCount: 1,
      quizLessonCount: 0,
      mappedSkillCount: 0,
      challengeCount: 0,
      explanationCount: 0,
      optionalLessonCount: 0,
    }));
    const without = scoreOctagon(checksFromCounts({
      missionCount: 0,
      quizLessonCount: 0,
      mappedSkillCount: 0,
      challengeCount: 0,
      explanationCount: 0,
      optionalLessonCount: 0,
    }));
    expect(withMission.drives.cd1).toBeGreaterThan(without.drives.cd1);
  });
});
