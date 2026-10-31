export const REVISION_SECTION_KEYS = [
  "objectifs",
  "points_cles",
  "definitions",
  "methodes",
  "exemples",
  "vigilance",
  "verification",
  "synthese",
] as const;

export type RevisionSectionKey = (typeof REVISION_SECTION_KEYS)[number];

export const REVISION_SECTION_LABELS: Record<RevisionSectionKey, string> = {
  objectifs: "Objectifs de la leçon",
  points_cles: "Points clés",
  definitions: "Définitions et vocabulaire",
  methodes: "Méthodes et procédures",
  exemples: "Exemples issus du cours",
  vigilance: "Points de vigilance",
  verification: "Questions de vérification",
  synthese: "À retenir",
};

export type RevisionSection = {
  key: RevisionSectionKey;
  title: string;
  items: string[];
};

export type RevisionSheetDoc = {
  title: string;
  sections: RevisionSection[];
};

function asStringArray(value: unknown): string[] {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed ? [trimmed] : [];
  }
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function sectionFromUnknown(key: RevisionSectionKey, raw: unknown): RevisionSection | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as { items?: unknown; content?: unknown; text?: unknown; bullets?: unknown };
  const items = asStringArray(row.items ?? row.bullets ?? row.content ?? row.text);
  if (items.length === 0) return null;
  return { key, title: REVISION_SECTION_LABELS[key], items };
}

/** Ne conserve que les 8 sections connues, omet les vides, n'invente rien. */
export function normalizeRevisionSheet(raw: unknown, fallbackTitle: string): RevisionSheetDoc {
  const source = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const nested = source.sections && typeof source.sections === "object" ? (source.sections as Record<string, unknown>) : source;
  const title =
    typeof source.title === "string" && source.title.trim()
      ? source.title.trim().slice(0, 180)
      : fallbackTitle;

  const sections: RevisionSection[] = [];
  for (const key of REVISION_SECTION_KEYS) {
    const candidate = Array.isArray(nested)
      ? (nested as unknown[]).find((item) => {
          if (!item || typeof item !== "object") return false;
          const k = (item as { key?: unknown }).key;
          return k === key;
        })
      : nested[key];
    const section = sectionFromUnknown(key, candidate);
    if (section) sections.push(section);
  }

  return { title, sections };
}

export function hasUsableLessonSource(text: string): boolean {
  return text.replace(/\s+/g, " ").trim().length >= 40;
}

export function revisionSheetIsEmpty(doc: RevisionSheetDoc): boolean {
  return doc.sections.length === 0;
}
