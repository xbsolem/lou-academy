import type { RevisionSheetDoc } from "@/lib/revision/schema";

export type RevisionLibraryItem = {
  kind: "note" | "sheet";
  id: string;
  title: string;
  updatedAt: string;
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  courseId: string;
  courseTitle: string;
  preview: string;
  sheet?: RevisionSheetDoc;
  bodyHtml?: string;
};

export type GroupedRevisions = {
  courseId: string;
  courseTitle: string;
  modules: {
    moduleTitle: string;
    lessons: {
      lessonId: string;
      lessonTitle: string;
      notes: RevisionLibraryItem[];
      sheets: RevisionLibraryItem[];
    }[];
  }[];
};
