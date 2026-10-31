import { describe, expect, it } from "vitest";
import { hasUsableLessonSource, normalizeRevisionSheet, revisionSheetIsEmpty } from "./schema";

describe("normalizeRevisionSheet", () => {
  it("keeps only the eight known sections and drops empties", () => {
    const doc = normalizeRevisionSheet(
      {
        title: "Paie — bases",
        invented: "ne doit pas passer",
        sections: {
          objectifs: { items: ["Lire un bulletin"] },
          points_cles: { items: [] },
          extra: { items: ["inventé"] },
          synthese: { items: ["Retenir le brut et le net"] },
        },
      },
      "Fallback"
    );
    expect(doc.title).toBe("Paie — bases");
    expect(doc.sections.map((s) => s.key)).toEqual(["objectifs", "synthese"]);
    expect(doc.sections.some((s) => s.key === "points_cles")).toBe(false);
    expect(JSON.stringify(doc)).not.toMatch(/inventé/);
  });

  it("accepts a sections array with keys", () => {
    const doc = normalizeRevisionSheet(
      {
        sections: [{ key: "definitions", items: ["SMIC"] }, { key: "inconnu", items: ["x"] }],
      },
      "Leçon"
    );
    expect(doc.sections).toHaveLength(1);
    expect(doc.sections[0].title).toMatch(/Définitions/);
  });

  it("marks empty docs", () => {
    expect(revisionSheetIsEmpty(normalizeRevisionSheet({}, "x"))).toBe(true);
  });
});

describe("hasUsableLessonSource", () => {
  it("rejects thin sources so the API cannot invent a course", () => {
    expect(hasUsableLessonSource("ok")).toBe(false);
    expect(hasUsableLessonSource("Le bulletin de paie présente le salaire brut, les cotisations et le net à payer pour le salarié.")).toBe(true);
  });
});
