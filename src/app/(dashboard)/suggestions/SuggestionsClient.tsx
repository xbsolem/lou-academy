"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type RequestRow = {
  id: string;
  created_at: string;
  user_id: string;
  metadata: {
    topic?: string;
    target_role?: string;
    motivation?: string;
  } | null;
  profiles?: { first_name: string; last_name: string; email: string } | null;
};

export default function SuggestionsClient({
  isAdmin,
  userId,
  initialRequests,
}: {
  isAdmin: boolean;
  userId: string;
  initialRequests: RequestRow[];
}) {
  const router = useRouter();
  const supabase = createClient();
  const [topic, setTopic] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [motivation, setMotivation] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const submit = async () => {
    if (!topic.trim()) {
      setMessage("Indiquez au moins le sujet ou le poste visé.");
      return;
    }
    setSaving(true);
    setMessage("");
    const { error } = await supabase.from("activity_events").insert({
      user_id: userId,
      event_type: "Demande de formation",
      metadata: {
        topic: topic.trim(),
        target_role: targetRole.trim() || null,
        motivation: motivation.trim() || null,
      },
    });
    setSaving(false);
    if (error) {
      setMessage("L'envoi a échoué. Réessayez dans un instant.");
      return;
    }
    setTopic("");
    setTargetRole("");
    setMotivation("");
    setMessage("Demande envoyée. L'équipe pédagogique la verra dans les indicateurs. Ce n'est pas une inscription automatique.");
    router.refresh();
  };

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Suggestions de formation</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Demandez un parcours selon ce que vous voulez apprendre ou le poste visé. Une demande n&apos;ouvre pas de session et ne garantit pas la création du cours.
      </p>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 28, maxWidth: 720 }}>
        <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 16 }}>Nouvelle demande</h2>
        <label style={labelStyle}>Sujet ou compétences à apprendre</label>
        <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Ex. Excel paie, conduite du changement, SQL…" style={inputStyle} />
        <label style={labelStyle}>Poste visé (facultatif)</label>
        <input value={targetRole} onChange={(e) => setTargetRole(e.target.value)} placeholder="Ex. chargé de paie, recruteur, consultant junior…" style={inputStyle} />
        <label style={labelStyle}>Motivation</label>
        <textarea
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Pourquoi maintenant ? Contexte professionnel, délai, niveau actuel…"
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <button type="button" onClick={submit} disabled={saving} style={btnStyle}>
          {saving ? "Envoi…" : "Envoyer la suggestion"}
        </button>
        {message && <p style={{ marginTop: 12, fontSize: "0.85rem" }}>{message}</p>}
      </div>

      <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
        {isAdmin ? "Toutes les demandes" : "Vos demandes"}
      </h2>
      {initialRequests.length === 0 ? (
        <p style={{ color: "var(--text-light)" }}>Aucune demande pour le moment.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {initialRequests.map((row) => {
            const meta = row.metadata || {};
            const who = row.profiles ? `${row.profiles.first_name} ${row.profiles.last_name}` : "Vous";
            return (
              <div key={row.id} style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 18, boxShadow: "var(--shadow)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                  <strong>{meta.topic || "Sujet non précisé"}</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-lighter)" }}>
                    {new Date(row.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                </div>
                {isAdmin && <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: 6 }}>{who}</p>}
                {meta.target_role && (
                  <p style={{ fontSize: "0.85rem", marginBottom: 4 }}>
                    Poste visé : <strong>{meta.target_role}</strong>
                  </p>
                )}
                {meta.motivation && <p style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>{meta.motivation}</p>}
              </div>
            );
          })}
        </div>
      )}
    </>
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
