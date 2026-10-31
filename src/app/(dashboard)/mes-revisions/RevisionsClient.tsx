"use client";

import { useState } from "react";
import Link from "next/link";
import { downloadNotesPdf, downloadRevisionPdf } from "@/lib/pdf/a4";
import type { GroupedRevisions, RevisionLibraryItem } from "@/lib/revisions/types";

export default function RevisionsClient({ groups }: { groups: GroupedRevisions[] }) {
  const [busyId, setBusyId] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const download = async (item: RevisionLibraryItem) => {
    setBusyId(item.id);
    try {
      if (item.kind === "note") {
        await downloadNotesPdf({
          courseTitle: item.courseTitle,
          lessonTitle: item.lessonTitle,
          title: item.title,
          html: item.bodyHtml || item.preview,
        });
      } else if (item.sheet) {
        await downloadRevisionPdf({
          courseTitle: item.courseTitle,
          lessonTitle: item.lessonTitle,
          sheet: item.sheet,
        });
      }
    } finally {
      setBusyId(null);
    }
  };

  if (groups.length === 0) {
    return (
      <div className="journey-block">
        <p className="muted">
          Aucune note ni fiche pour le moment. Ouvrez une leçon, puis utilisez « Mes notes » ou « Fiche de
          révision ».{" "}
          <Link href="/mes-formations" className="inline-link">
            Reprendre une formation
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="revisions-library">
      {groups.map((course) => (
        <section key={course.courseId} className="journey-block" style={{ marginBottom: 20 }}>
          <h2>
            <Link href={`/player/${course.courseId}`}>{course.courseTitle}</Link>
          </h2>
          {course.modules.map((mod) => (
            <div key={mod.moduleTitle} className="revision-module">
              <h3>{mod.moduleTitle}</h3>
              {mod.lessons.map((lesson) => (
                <div key={lesson.lessonId} className="revision-lesson">
                  <div className="revision-lesson-head">
                    <strong>{lesson.lessonTitle}</strong>
                    <Link href={`/player/${course.courseId}`} className="inline-link">
                      Ouvrir la leçon
                    </Link>
                  </div>
                  {[...lesson.notes, ...lesson.sheets].map((item) => {
                    const open = openId === item.id;
                    return (
                      <article key={item.id} className="revision-item">
                        <div className="revision-item-row">
                          <span className={`revision-pill ${item.kind}`}>
                            {item.kind === "note" ? "Note" : "Fiche"}
                          </span>
                          <span className="revision-item-title">{item.title}</span>
                          <button type="button" className="secondary-btn" onClick={() => setOpenId(open ? null : item.id)}>
                            {open ? "Masquer" : "Voir"}
                          </button>
                          <button
                            type="button"
                            className="secondary-btn"
                            disabled={busyId === item.id}
                            onClick={() => download(item)}
                          >
                            {busyId === item.id ? <i className="fas fa-spinner fa-spin" /> : <i className="fas fa-file-pdf" />}
                            PDF
                          </button>
                        </div>
                        {open && item.kind === "note" && (
                          <div className="lesson-html" dangerouslySetInnerHTML={{ __html: item.bodyHtml || `<p>${item.preview}</p>` }} />
                        )}
                        {open && item.kind === "sheet" && item.sheet && (
                          <div className="sheet-sections">
                            {item.sheet.sections.map((section) => (
                              <section key={section.key}>
                                <h4>{section.title}</h4>
                                <ul>
                                  {section.items.map((line, i) => (
                                    <li key={`${section.key}-${i}`}>{line}</li>
                                  ))}
                                </ul>
                              </section>
                            ))}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
