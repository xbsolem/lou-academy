"use client";

import { useEffect, useState } from "react";
import { downloadRevisionPdf } from "@/lib/pdf/a4";
import { REVISION_SECTION_LABELS, type RevisionSheetDoc } from "@/lib/revision/schema";

export default function LessonRevisionSheet({
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
  const [sheet, setSheet] = useState<RevisionSheetDoc | null>(null);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const res = await fetch(`/api/revision-sheet?lessonId=${encodeURIComponent(lessonId)}&courseId=${encodeURIComponent(courseId)}`);
        const data = await res.json();
        if (cancelled) return;
        if (data.tablesMissing) {
          setInfo("Les fiches ne sont pas encore disponibles. Exécutez supabase/022_revision_sheets.sql dans l'éditeur SQL.");
        }
        setSheet(data.sheet || null);
      } catch {
        if (!cancelled) setError("Impossible de charger la fiche existante.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, lessonId, courseId]);

  const generate = async (regenerate: boolean) => {
    if (busy) return;
    setBusy(true);
    setError(null);
    setInfo(null);
    try {
      const res = await fetch("/api/revision-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, lessonId, regenerate }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error || "La fiche n'a pas pu être générée.");
        return;
      }
      setSheet(data.sheet);
      if (data.saved === false) {
        setInfo("Fiche générée, mais non enregistrée. Exécutez supabase/022_revision_sheets.sql pour la conserver.");
      }
    } catch {
      setError("Erreur de communication. Réessayez.");
    } finally {
      setBusy(false);
    }
  };

  const exportPdf = async () => {
    if (!sheet) return;
    await downloadRevisionPdf({ courseTitle, lessonTitle, sheet });
  };

  if (!open) return null;

  return (
    <div className="sheet-modal" role="dialog" aria-labelledby="sheet-title">
      <div className="sheet-modal-card">
        <div className="notes-panel-head">
          <div>
            <p className="notes-kicker">Fiche de révision</p>
            <h3 id="sheet-title">{lessonTitle}</h3>
          </div>
          <button type="button" className="notes-close" onClick={onClose} aria-label="Fermer la fiche">
            <i className="fas fa-times" />
          </button>
        </div>
        <p className="muted" style={{ marginBottom: 12 }}>
          Synthèse à partir du contenu réel de la leçon. Les sections vides sont omises. Rien n&apos;est inventé.
          Facultatif : cela ne bloque pas la leçon.
        </p>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {info && <p className="form-info">{info}</p>}
        {loading && <p className="muted">Chargement de la fiche…</p>}
        {!loading && sheet && (
          <div className="sheet-sections">
            {sheet.sections.map((section) => (
              <section key={section.key}>
                <h4>{REVISION_SECTION_LABELS[section.key]}</h4>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={`${section.key}-${i}`}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
        {!loading && !sheet && !error && (
          <p className="muted">Aucune fiche pour cette leçon. Vous pouvez en générer une à partir du contenu.</p>
        )}
        <div className="action-row" style={{ marginTop: 16 }}>
          <button type="button" className="primary-btn" onClick={() => generate(Boolean(sheet))} disabled={busy}>
            {busy && <i className="fas fa-spinner fa-spin" />}
            {sheet ? "Régénérer" : "Générer la fiche"}
          </button>
          <button type="button" className="secondary-btn" onClick={exportPdf} disabled={!sheet}>
            <i className="fas fa-file-pdf" /> Télécharger le PDF
          </button>
        </div>
      </div>
    </div>
  );
}
