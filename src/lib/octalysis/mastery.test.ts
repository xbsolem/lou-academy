import { describe, expect, it } from "vitest";
import { masteryLabel, nextMastery, skillsToDevelop } from "./mastery";

describe("nextMastery", () => {
  it("does not award mastery for opening a lesson (no evidence)", () => {
    expect(nextMastery({ current: 0, mappedCount: 3, completedCount: 0, bestScore: null })).toBe(0);
  });

  it("never decreases an earned level", () => {
    expect(nextMastery({ current: 4, mappedCount: 1, completedCount: 1, bestScore: 70 })).toBe(4);
  });

  it("awards Application for a single mapped proof that passed", () => {
    expect(nextMastery({ current: 0, mappedCount: 1, completedCount: 1, bestScore: 70 })).toBe(3);
  });

  it("reaches Maîtrise only with full proofs and a high score", () => {
    expect(nextMastery({ current: 0, mappedCount: 2, completedCount: 2, bestScore: 90 })).toBe(5);
    expect(nextMastery({ current: 0, mappedCount: 2, completedCount: 2, bestScore: 80 })).toBe(4);
  });
});

describe("masteryLabel", () => {
  it("labels the five professional levels", () => {
    expect(masteryLabel(1)).toBe("Découverte");
    expect(masteryLabel(5)).toBe("Maîtrise");
    expect(masteryLabel(0)).toBe("Non commencée");
  });
});

describe("skillsToDevelop", () => {
  it("prioritises the lowest mastery first", () => {
    const rows = [
      { mastery: 5, id: "a" },
      { mastery: 2, id: "b" },
      { mastery: 4, id: "c" },
    ];
    expect(skillsToDevelop(rows, 2).map((s) => s.id)).toEqual(["b", "c"]);
  });
});
