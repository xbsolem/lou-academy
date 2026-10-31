"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { noteIsEmpty, sanitizeNoteHtml, sanitizeNoteHtmlFallback, stripTags } from "@/lib/notes/sanitize";
import { downloadNotesPdf } from "@/lib/pdf/a4";
import { tableMissing } from "@/lib/octalysis/safe";

export default function LessonNotes({
  courseId,
  courseTitle,
  lessonId,
  lessonTitle,
  open,
  onClose,
}: {
  courseId: string;
  courseTitle: string;
  lessonId: string;
  lessonTitle: string;
  open: boolean;
  onClose: () => void;
}) {
  const supabase = createClient();
  const editorRef = useRef<HTMLDivElement>(null);
  const saveTimer = useRef<number | null>(null);
  const [title, setTitle] = useState(lessonTitle);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);

  const persist = useCallback(
    async (nextTitle: string, html: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError("Vous devez être connecté pour enregistrer une note.");
        setStatus("error");
        return;
      }
      const clean = typeof window === "undefined" ? sanitizeNoteHtmlFallback(html) : sanitizeNoteHtml(html);
      if (noteIsEmpty(clean) && !nextTitle.trim()) return;
      setStatus("saving");
      const { error: upsertError } = await supabase.from("lesson_notes").upsert(
        {
          user_id: user.id,
          lesson_id: lessonId,
          course_id: courseId,
          title: nextTitle.trim() || lessonTitle,
          body_html: clean,
          body_text: stripTags(clean),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,lesson_id" }
      );
      if (upsertError) {
        setStatus("error");
        setError(
          tableMissing(upsertError)
            ? "Les notes ne sont pas encore disponibles. Exécutez supabase/021_lesson_notes.sql dans l'éditeur SQL."
            : "Impossible d'enregistrer la note. Réessayez."
        );
        return;
      }
      setError(null);
      setStatus("saved");
    },
    [courseId, lessonId, lessonTitle, supabase]
  );

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    setError(null);
    setStatus("idle");
    setTitle(lessonTitle);
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || cancelled) return;
      const { data, error: loadError } = await supabase
        .from("lesson_notes")
        .select("title, body_html")
        .eq("user_id", user.id)
        .eq("lesson_id", lessonId)
        .maybeSingle();
      if (cancelled) return;
      if (loadError && tableMissing(loadError)) {
        setError("Les notes ne sont pas encore disponibles. Exécutez supabase/021_lesson_notes.sql dans l'éditeur SQL.");
        setLoaded(true);
        return;
      }
      if (data) {
        setTitle(data.title || lessonTitle);
        if (editorRef.current) editorRef.current.innerHTML = data.body_html || "";
      } else if (editorRef.current) {
        editorRef.current.innerHTML = "";
      }
      setLoaded(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [lessonId, lessonTitle, supabase]);

  const scheduleSave = () => {
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      void persist(title, editorRef.current?.innerHTML || "");
    }, 700);
  };

  const apply = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    scheduleSave();
  };

  const exportPdf = async () => {
    setPdfBusy(true);
    try {
      await downloadNotesPdf({
        courseTitle,
        lessonTitle,
        title,
        html: editorRef.current?.innerHTML || "",
      });
    } finally {
      setPdfBusy(false);
    }
  };

  return (
    <aside className={`notes-panel${open ? " open" : ""}`} aria-hidden={!open}>
      <div className="notes-panel-head">
        <div>
          <p className="notes-kicker">Mes notes</p>
          <strong>Leçon en cours</strong>
        </div>
        <button type="button" className="notes-close" onClick={onClose} aria-label="Fermer les notes">
          <i className="fas fa-times" />
        </button>
      </div>
      <p className="muted" style={{ marginBottom: 10 }}>
        Facultatif : la leçon reste accessible sans notes. Enregistrement automatique, visible uniquement par vous.
      </p>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <input
        className="notes-title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          scheduleSave();
        }}
        placeholder="Titre de la note"
        aria-label="Titre de la note"
      />
      <div className="notes-toolbar" role="toolbar" aria-label="Mise en forme">
        <button type="button" onClick={() => apply("formatBlock", "H3")} title="Titre">
          Titre
        </button>
        <button type="button" onClick={() => apply("bold")} title="Gras">
          <strong>Gras</strong>
        </button>
        <button type="button" onClick={() => apply("insertUnorderedList")} title="Liste">
          Liste
        </button>
        <button type="button" onClick={exportPdf} disabled={pdfBusy || !loaded}>
          {pdfBusy ? <i className="fas fa-spinner fa-spin" /> : <i className="fas fa-file-pdf" />} PDF
        </button>
      </div>
      <div
        ref={editorRef}
        className="notes-editor"
        contentEditable
        suppressContentEditableWarning
        data-placeholder="Écrivez vos notes : titres, listes, gras…"
        onInput={scheduleSave}
        onBlur={() => void persist(title, editorRef.current?.innerHTML || "")}
      />
      <p className="notes-status" aria-live="polite">
        {status === "saving" && "Enregistrement…"}
        {status === "saved" && "Enregistré"}
        {status === "error" && "Non enregistré"}
        {status === "idle" && loaded && "Prêt"}
      </p>
    </aside>
  );
}
