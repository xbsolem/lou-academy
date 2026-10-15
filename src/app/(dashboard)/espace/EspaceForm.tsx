"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function EspaceForm({
  userId,
  targetRole,
  currentProject,
  careerGoal,
}: {
  userId: string;
  targetRole: string;
  currentProject: string;
  careerGoal: string;
}) {
  const router = useRouter();
  const supabase = createClient();
  const [target_role, setTargetRole] = useState(targetRole);
  const [current_project, setCurrentProject] = useState(currentProject);
  const [career_goal, setCareerGoal] = useState(careerGoal);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const save = async () => {
    setSaving(true);
    setMessage("");
    const payload = {
      target_role: target_role.trim() || null,
      current_project: current_project.trim() || null,
      career_goal: career_goal.trim() || null,
    };
    const { error } = await supabase.from("profiles").update(payload).eq("id", userId);
    if (error) {
      await supabase.from("activity_events").insert({
        user_id: userId,
        event_type: "Profil professionnel",
        metadata: payload,
      });
    }
    setSaving(false);
    setMessage("Enregistré. Ces informations aident à proposer des formations utiles, sans garantir un poste.");
    router.refresh();
  };

  return (
    <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
      <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>Projet professionnel</h2>
      <p style={{ color: "var(--text-light)", fontSize: "0.85rem", marginBottom: 16 }}>
        Ces champs sont facultatifs. Ils ne constituent pas une promesse d&apos;embauche.
      </p>
      <label style={labelStyle}>Poste visé</label>
      <input
        value={target_role}
        onChange={(e) => setTargetRole(e.target.value)}
        placeholder="Ex. gestionnaire de paie junior, consultant W&O…"
        style={inputStyle}
      />
      <label style={labelStyle}>Projet en cours</label>
      <input
        value={current_project}
        onChange={(e) => setCurrentProject(e.target.value)}
        placeholder="Ex. reconversion, montée en compétences interne…"
        style={inputStyle}
      />
      <label style={labelStyle}>Évolution souhaitée</label>
      <textarea
        value={career_goal}
        onChange={(e) => setCareerGoal(e.target.value)}
        placeholder="Ex. tenir un portefeuille paie, rejoindre un cabinet, évoluer vers un poste RH…"
        rows={4}
        style={{ ...inputStyle, resize: "vertical" }}
      />
      <button type="button" onClick={save} disabled={saving} style={btnStyle}>
        {saving ? "Enregistrement…" : "Enregistrer"}
      </button>
      {message && <p style={{ marginTop: 12, fontSize: "0.85rem", color: "var(--success)" }}>{message}</p>}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 600,
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-sm)",
  fontSize: "0.9rem",
  fontFamily: "inherit",
  marginBottom: 14,
};

const btnStyle: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "var(--radius-sm)",
  border: "none",
  background: "var(--primary)",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: "inherit",
};
