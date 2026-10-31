import type { jsPDF } from "jspdf";
import { stripTags } from "@/lib/notes/sanitize";
import type { RevisionSheetDoc } from "@/lib/revision/schema";

const MARGIN = 16;
const LINE = 5.4;
const PAGE_BOTTOM = 277;

async function createDoc() {
  const { jsPDF } = await import("jspdf");
  return new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
}

function writeWrapped(doc: jsPDF, text: string, y: { value: number }, options?: { bold?: boolean; size?: number; color?: [number, number, number] }) {
  const size = options?.size ?? 11;
  doc.setFont("helvetica", options?.bold ? "bold" : "normal");
  doc.setFontSize(size);
  if (options?.color) doc.setTextColor(...options.color);
  else doc.setTextColor(30, 41, 59);
  const lines = doc.splitTextToSize(text, 210 - MARGIN * 2) as string[];
  for (const line of lines) {
    if (y.value > PAGE_BOTTOM) {
      doc.addPage();
      y.value = MARGIN;
    }
    doc.text(line, MARGIN, y.value);
    y.value += LINE * (size / 11);
  }
}

function paintHeader(doc: jsPDF, kicker: string) {
  doc.setFillColor(79, 70, 229);
  doc.rect(0, 0, 210, 8, "F");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(79, 70, 229);
  doc.text(kicker, MARGIN, 16);
}

export async function downloadNotesPdf(input: {
  courseTitle: string;
  lessonTitle: string;
  title: string;
  html: string;
}) {
  const doc = await createDoc();
  paintHeader(doc, "LOU Academy — Mes notes");
  const y = { value: 24 };
  writeWrapped(doc, input.title || input.lessonTitle, y, { bold: true, size: 16, color: [79, 70, 229] });
  y.value += 2;
  writeWrapped(doc, `${input.courseTitle} · ${input.lessonTitle}`, y, { size: 10, color: [100, 116, 139] });
  y.value += 4;
  const text = stripTags(input.html);
  if (!text) {
    writeWrapped(doc, "Note vide.", y, { size: 11, color: [100, 116, 139] });
  } else {
    writeWrapped(doc, text, y);
  }
  const slug = (input.lessonTitle || "note").slice(0, 40).replace(/[^\w]+/g, "-");
  doc.save(`notes-${slug}.pdf`);
}

export async function downloadRevisionPdf(input: {
  courseTitle: string;
  lessonTitle: string;
  sheet: RevisionSheetDoc;
}) {
  const doc = await createDoc();
  paintHeader(doc, "LOU Academy — Fiche de révision");
  const y = { value: 24 };
  writeWrapped(doc, input.sheet.title || input.lessonTitle, y, { bold: true, size: 16, color: [79, 70, 229] });
  y.value += 2;
  writeWrapped(doc, `${input.courseTitle} · ${input.lessonTitle}`, y, { size: 10, color: [100, 116, 139] });
  y.value += 4;
  if (input.sheet.sections.length === 0) {
    writeWrapped(doc, "Aucune section renseignée à partir du contenu de la leçon.", y);
  }
  for (const section of input.sheet.sections) {
    y.value += 2;
    writeWrapped(doc, section.title, y, { bold: true, size: 13, color: [55, 48, 163] });
    y.value += 1;
    for (const item of section.items) {
      writeWrapped(doc, `• ${item}`, y);
    }
  }
  const slug = (input.lessonTitle || "fiche").slice(0, 40).replace(/[^\w]+/g, "-");
  doc.save(`fiche-${slug}.pdf`);
}
