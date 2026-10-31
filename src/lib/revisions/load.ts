import { createServerSupabase } from "@/lib/supabase/server";
import { tableMissing } from "@/lib/octalysis/safe";
import { normalizeRevisionSheet } from "@/lib/revision/schema";
import type { RevisionLibraryItem } from "./types";

function nest<T>(raw: unknown): T | null {
  const row = Array.isArray(raw) ? raw[0] : raw;
  return (row as T) || null;
}

export async function loadRevisionLibrary(userId: string): Promise<{
  items: RevisionLibraryItem[];
  tablesMissing: boolean;
}> {
  const supabase = await createServerSupabase();
  const [notesRes, sheetsRes] = await Promise.all([
    supabase
      .from("lesson_notes")
      .select("id, title, body_text, body_html, updated_at, lesson_id, course_id, lessons(title, modules(title, course_id, courses(id, title)))")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false }),
    supabase
      .from("revision_sheets")
      .select("id, title, sections, updated_at, generated_at, lesson_id, course_id, lessons(title, modules(title, course_id, courses(id, title)))")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false }),
  ]);

  const notesGone = tableMissing(notesRes.error);
  const sheetsGone = tableMissing(sheetsRes.error);
  const items: RevisionLibraryItem[] = [];

  if (!notesGone) {
    for (const row of notesRes.data || []) {
      const lesson = nest<{ title?: string; modules?: unknown }>(row.lessons);
      const mod = nest<{ title?: string; courses?: unknown; course_id?: string }>(lesson?.modules);
      const course = nest<{ id?: string; title?: string }>(mod?.courses);
      items.push({
        kind: "note",
        id: row.id,
        title: row.title || lesson?.title || "Note",
        updatedAt: row.updated_at,
        lessonId: row.lesson_id,
        lessonTitle: lesson?.title || "Leçon",
        moduleTitle: mod?.title || "Module",
        courseId: row.course_id || course?.id || "",
        courseTitle: course?.title || "Formation",
        preview: (row.body_text || "").slice(0, 180),
        bodyHtml: row.body_html || "",
      });
    }
  }

  if (!sheetsGone) {
    for (const row of sheetsRes.data || []) {
      const lesson = nest<{ title?: string; modules?: unknown }>(row.lessons);
      const mod = nest<{ title?: string; courses?: unknown }>(lesson?.modules);
      const course = nest<{ id?: string; title?: string }>(mod?.courses);
      const sheet = normalizeRevisionSheet({ title: row.title, sections: row.sections }, row.title || lesson?.title || "Fiche");
      items.push({
        kind: "sheet",
        id: row.id,
        title: sheet.title,
        updatedAt: row.updated_at || row.generated_at,
        lessonId: row.lesson_id,
        lessonTitle: lesson?.title || "Leçon",
        moduleTitle: mod?.title || "Module",
        courseId: row.course_id || course?.id || "",
        courseTitle: course?.title || "Formation",
        preview: sheet.sections[0]?.items[0] || "",
        sheet,
      });
    }
  }

  items.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  return { items, tablesMissing: notesGone || sheetsGone };
}

export type { RevisionLibraryItem, GroupedRevisions } from "./types";
export { groupRevisionLibrary } from "./group";
