"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function NewCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("debutant");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const categories = [
    "Onboarding", "Sécurité", "Management", "Bureautique",
    "Conformité", "Soft Skills", "Gestion de projet", "RSE",
    "Commercial", "Ressources Humaines", "Data", "Développement",
  ];

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const slug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      + "-" + Date.now().toString(36);

    const durationMinutes = duration ? parseInt(duration) * 60 : null;

    const { data, error } = await supabase
      .from("courses")
      .insert({
        title,
        slug,
        description,
        category,
        level,
        estimated_duration_minutes: durationMinutes,
        creator_id: user.id,
        status: "draft",
        icon: "fa-book",
        gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)",
      })
      .select()
      .single();

    if (error) {
      alert("Erreur: " + error.message);
      setLoading(false);
      return;
    }

    router.push(`/studio/${data.id}`);
  };

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
        Nouvelle formation
      </h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Renseignez les informations de base pour commencer
      </p>

      <form onSubmit={handleCreate} style={{ maxWidth: 700 }}>
        <div
          style={{
            background: "var(--bg-card)",
            borderRadius: "var(--radius)",
            padding: 24,
            boxShadow: "var(--shadow)",
            marginBottom: 24,
          }}
        >
          <h3 style={{ fontSize: "1.1rem", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
            <i className="fas fa-info-circle" style={{ marginRight: 8, color: "var(--primary)" }} />
            Informations générales
          </h3>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
              Titre de la formation *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: SQL pour Data Analysts"
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.9rem",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décrivez le contenu et les objectifs..."
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.9rem",
                fontFamily: "inherit",
                minHeight: 120,
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
                Catégorie
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                }}
              >
                <option value="">Choisir...</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
                Niveau
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                }}
              >
                <option value="debutant">Débutant</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="avance">Avancé</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
              Durée estimée (heures)
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Ex: 5"
              min="0"
              style={{
                width: 200,
                padding: "10px 14px",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.9rem",
                fontFamily: "inherit",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 24px",
              borderRadius: "var(--radius-sm)",
              background: "var(--primary)",
              color: "#fff",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
              fontFamily: "inherit",
              opacity: loading ? 0.7 : 1,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <i className="fas fa-save" />
            {loading ? "Création..." : "Créer la formation"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/studio")}
            style={{
              padding: "10px 24px",
              borderRadius: "var(--radius-sm)",
              background: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontFamily: "inherit",
            }}
          >
            Annuler
          </button>
        </div>
      </form>
    </>
  );
}
