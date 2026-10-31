import { describe, expect, it } from "vitest";
import { buildLearnerNotifications } from "./notifications";

describe("buildLearnerNotifications", () => {
  it("adds a soft revision reminder only when opted in", () => {
    const base = {
      enrollments: [],
      publishedCourses: [],
      hasCareerProfile: true,
    };
    const off = buildLearnerNotifications(base);
    const on = buildLearnerNotifications({ ...base, revisionReminders: true });
    expect(off.some((n) => n.id === "revision-optin")).toBe(false);
    expect(on.some((n) => n.href === "/mes-revisions")).toBe(true);
    expect(on.find((n) => n.id === "revision-optin")?.body).toMatch(/Aucune obligation/i);
  });
});
