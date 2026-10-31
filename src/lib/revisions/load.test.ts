import { describe, expect, it } from "vitest";
import { groupRevisionLibrary } from "./group";
import type { RevisionLibraryItem } from "./types";

describe("groupRevisionLibrary", () => {
  it("groups notes and sheets by course, module and lesson", () => {
    const items: RevisionLibraryItem[] = [
      {
        kind: "note",
        id: "n1",
        title: "Note",
        updatedAt: "2026-01-02",
        lessonId: "l1",
        lessonTitle: "Bulletin",
        moduleTitle: "Bases",
        courseId: "c1",
        courseTitle: "Paie",
        preview: "brut",
      },
      {
        kind: "sheet",
        id: "s1",
        title: "Fiche",
        updatedAt: "2026-01-03",
        lessonId: "l1",
        lessonTitle: "Bulletin",
        moduleTitle: "Bases",
        courseId: "c1",
        courseTitle: "Paie",
        preview: "net",
      },
    ];
    const grouped = groupRevisionLibrary(items);
    expect(grouped).toHaveLength(1);
    expect(grouped[0].modules[0].lessons[0].notes).toHaveLength(1);
    expect(grouped[0].modules[0].lessons[0].sheets).toHaveLength(1);
  });
});
