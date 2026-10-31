import type { RevisionLibraryItem, GroupedRevisions } from "./types";

export function groupRevisionLibrary(items: RevisionLibraryItem[]): GroupedRevisions[] {
  const courses = new Map<string, GroupedRevisions>();
  for (const item of items) {
    const course = courses.get(item.courseId) || {
      courseId: item.courseId,
      courseTitle: item.courseTitle,
      modules: [],
    };
    let module = course.modules.find((m) => m.moduleTitle === item.moduleTitle);
    if (!module) {
      module = { moduleTitle: item.moduleTitle, lessons: [] };
      course.modules.push(module);
    }
    let lesson = module.lessons.find((l) => l.lessonId === item.lessonId);
    if (!lesson) {
      lesson = { lessonId: item.lessonId, lessonTitle: item.lessonTitle, notes: [], sheets: [] };
      module.lessons.push(lesson);
    }
    if (item.kind === "note") lesson.notes.push(item);
    else lesson.sheets.push(item);
    courses.set(item.courseId, course);
  }
  return Array.from(courses.values());
}
