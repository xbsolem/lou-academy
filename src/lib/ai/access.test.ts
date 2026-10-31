import { describe, expect, it } from "vitest";
import { authorizeAiAction, isRateLimited, missingOpenAiKeyMessage } from "./access";

describe("authorizeAiAction", () => {
  it("rejects unknown actions", () => {
    const result = authorizeAiAction({ action: "pwn", role: "admin", enrolled: true });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.status).toBe(400);
  });

  it("keeps curriculum generation for staff only", () => {
    const learner = authorizeAiAction({ action: "generate_curriculum", role: "learner", enrolled: true });
    const admin = authorizeAiAction({ action: "generate_curriculum", role: "admin", enrolled: false });
    expect(learner.ok).toBe(false);
    expect(admin.ok).toBe(true);
  });

  it("requires enrollment for tutor and revision sheets", () => {
    const blocked = authorizeAiAction({ action: "revision_sheet", role: "learner", enrolled: false });
    const ok = authorizeAiAction({ action: "tutor", role: "learner", enrolled: true });
    const staff = authorizeAiAction({ action: "tutor", role: "creator", enrolled: false });
    expect(blocked.ok).toBe(false);
    expect(ok.ok).toBe(true);
    expect(staff.ok).toBe(true);
  });
});

describe("rate limit", () => {
  it("blocks at the configured ceiling", () => {
    expect(isRateLimited(7)).toBe(false);
    expect(isRateLimited(8)).toBe(true);
  });
});

describe("missing key", () => {
  it("mentions OPENAI_API_KEY without exposing a secret", () => {
    const message = missingOpenAiKeyMessage();
    expect(message).toMatch(/OPENAI_API_KEY/);
    expect(message).not.toMatch(/sk-/);
  });
});
