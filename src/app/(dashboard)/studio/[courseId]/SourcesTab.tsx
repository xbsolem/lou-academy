"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { CourseSource } from "@/types/database";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "text/markdown",
];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export default function SourcesTab({ courseId }: { courseId: string }) {
  const [sources, setSources] = useState<CourseSource[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("course_sources")
      .select("*")
      .eq("course_id", courseId)
      .order("created_at", { ascending: false });
    if (data) setSources(data);
  }, [courseId, supabase]);

  useEffect(() => { load(); }, [load]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);

    if (!ALLOWED_TYPES.includes(file.type) && !file.name.endsWith(".md") && !file.name.endsWith(".txt")) {
      setError("Type de fichier non supporte. Formats acceptes: PDF, DOCX, TXT, Markdown.");
      return;
    }
    if (file.size > MAX_SIZE) {
      setError("Fichier trop volumineux (max 10 MB).");
      return;
    }

    setUploading(true);

    const ext = file.name.split(".").pop() || "bin";
    const storagePath = `courses/${courseId}/sources/${Date.now()}-${file.name}`;

    const { data: sourceRow } = await supabase
      .from("course_sources")
      .insert({
        course_id: courseId,
        name: file.name,
        file_type: ext,
        storage_path: storagePath,
        status: "uploading",
      })
      .select()
      .single();

    if (!sourceRow) {
      setError("Erreur lors de la creation de l'entree source.");
      setUploading(false);
      return;
    }

    const { error: uploadError } = await supabase.storage
      .from("course-sources")
      .upload(storagePath, file);

    if (uploadError) {
      await supabase.from("course_sources").update({ status: "failed" }).eq("id", sourceRow.id);
      setError(`Erreur upload: ${uploadError.message}. Verifiez que le bucket 'course-sources' existe dans Supabase Storage.`);
      setUploading(false);
      await load();
      return;
    }

    await supabase.from("course_sources").update({ status: "ready" }).eq("id", sourceRow.id);
    setUploading(false);
    await load();
    e.target.value = "";
  };

  const deleteSource = async (id: string, path: string) => {
    if (!confirm("Supprimer cette source ?")) return;
    await supabase.storage.from("course-sources").remove([path]);
    await supabase.from("course_sources").delete().eq("id", id);
    await load();
  };

  const statusColors: Record<string, { bg: string; color: string; label: string }> = {
    uploading: { bg: "#fffbeb", color: "#d97706", label: "Upload..." },
    processing: { bg: "#eff6ff", color: "#2563eb", label: "Traitement..." },
    ready: { bg: "#ecfdf5", color: "#059669", label: "Pret" },
    failed: { bg: "#fef2f2", color: "#dc2626", label: "Echec" },
  };

  const iconForType: Record<string, string> = {
    pdf: "fa-file-pdf",
    docx: "fa-file-word",
    txt: "fa-file-alt",
    md: "fa-file-alt",
    pptx: "fa-file-powerpoint",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 4 }}>Sources et documents</h3>
          <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>
            Uploadez des documents pour enrichir la formation.
          </p>
        </div>
        <label
          style={{
            padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
            color: "#fff", cursor: uploading ? "not-allowed" : "pointer",
            fontSize: "0.85rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8,
            opacity: uploading ? 0.7 : 1,
          }}
        >
          <i className={`fas ${uploading ? "fa-spinner fa-spin" : "fa-upload"}`} />
          {uploading ? "Upload..." : "Ajouter un document"}
          <input type="file" accept=".pdf,.docx,.txt,.md" onChange={handleUpload} style={{ display: "none" }} disabled={uploading} />
        </label>
      </div>

      {error && (
        <div style={{ padding: "12px 16px", background: "#fef2f2", color: "#dc2626", borderRadius: 8, marginBottom: 16, fontSize: "0.85rem" }}>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: 8 }} />
          {error}
        </div>
      )}

      {sources.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "var(--bg-card)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
          <i className="fas fa-folder-open" style={{ fontSize: "3rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text-light)" }}>Aucune source</h3>
          <p style={{ color: "var(--text-lighter)", fontSize: "0.85rem" }}>
            Ajoutez des documents PDF, DOCX ou TXT pour enrichir votre formation.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sources.map((source) => {
            const s = statusColors[source.status] || statusColors.failed;
            return (
              <div key={source.id} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", background: "var(--bg-card)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                <i className={`fas ${iconForType[source.file_type] || "fa-file"}`} style={{ fontSize: "1.3rem", color: "var(--primary)", width: 24, textAlign: "center" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, fontSize: "0.9rem" }}>{source.name}</div>
                  <div style={{ color: "var(--text-lighter)", fontSize: "0.75rem", marginTop: 2 }}>
                    {source.file_type.toUpperCase()} • {new Date(source.created_at).toLocaleDateString("fr-FR")}
                  </div>
                </div>
                <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600, background: s.bg, color: s.color }}>
                  {s.label}
                </span>
                <button
                  onClick={() => deleteSource(source.id, source.storage_path)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-lighter)", fontSize: "0.85rem" }}
                >
                  <i className="fas fa-trash" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
