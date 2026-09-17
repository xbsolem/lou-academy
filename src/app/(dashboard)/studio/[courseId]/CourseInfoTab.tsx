"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Course } from "@/types/database";

const categories = [
  "Onboarding", "Securite", "Management", "Bureautique",
  "Conformite", "Soft Skills", "Gestion de projet", "RSE",
  "Commercial", "Ressources Humaines", "Data", "Developpement",
];

export default function CourseInfoTab({
  course,
  onUpdate,
}: {
  course: Course;
  onUpdate: (c: Course) => void;
}) {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description || "");
  const [category, setCategory] = useState(course.category || "");
  const [level, setLevel] = useState(course.level || "debutant");
  const [duration, setDuration] = useState(
    course.estimated_duration_minutes ? String(Math.round(course.estimated_duration_minutes / 60)) : ""
  );
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  const save = async () => {
    setSaving(true);
    const updates = {
      title,
      description,
      category,
      level,
      estimated_duration_minutes: duration ? parseInt(duration) * 60 : null,
    };
    const { data } = await supabase
      .from("courses")
      .update(updates)
      .eq("id", course.id)
      .select()
      .single();
    if (data) onUpdate(data);
    setSaving(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", border: "1px solid var(--border)",
    borderRadius: "var(--radius-sm)", fontSize: "0.9rem", fontFamily: "inherit",
  };

  return (
    <div style={{ maxWidth: 700 }}>
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 24 }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
          <i className="fas fa-info-circle" style={{ marginRight: 8, color: "var(--primary)" }} />
          Informations
        </h3>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Titre</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5}
            style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Categorie</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
              <option value="">Choisir...</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Niveau</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)} style={inputStyle}>
              <option value="debutant">Debutant</option>
              <option value="intermediaire">Intermediaire</option>
              <option value="avance">Avance</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Duree (heures)</label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} min="0" style={{ ...inputStyle, width: 200 }} />
        </div>

        <button onClick={save} disabled={saving}
          style={{
            padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
            color: "#fff", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit",
            opacity: saving ? 0.7 : 1, display: "inline-flex", alignItems: "center", gap: 8,
          }}
        >
          <i className="fas fa-save" /> {saving ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </div>
    </div>
  );
}
