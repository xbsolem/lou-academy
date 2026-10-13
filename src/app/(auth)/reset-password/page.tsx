"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  fontSize: "0.9rem",
  fontFamily: "inherit",
} as const;

const labelStyle = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 600,
  marginBottom: "6px",
} as const;

function humanResetError(message: string) {
  const lower = message.toLowerCase();
  if (lower.includes("failed to fetch") || lower.includes("fetch failed") || lower.includes("network")) {
    return "Impossible de joindre la base. Réessaie dans un instant.";
  }
  if (lower.includes("same password") || lower.includes("should be different")) {
    return "Choisis un mot de passe différent de l'ancien.";
  }
  if (lower.includes("at least") || lower.includes("too short") || lower.includes("6")) {
    return "Le mot de passe doit contenir au moins 6 caractères.";
  }
  if (lower.includes("session") || lower.includes("not authenticated") || lower.includes("auth session")) {
    return "Ce lien de réinitialisation est invalide ou a expiré. Demande un nouvel email depuis la page de connexion.";
  }
  return message;
}

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [ready, setReady] = useState(false);
  const [canReset, setCanReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error")) {
      setError(
        "Ce lien de réinitialisation est invalide ou a expiré. Demande un nouvel email depuis la page de connexion."
      );
    }

    const supabase = createClient();
    let cancelled = false;

    const syncSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (cancelled) return;
      setCanReset(!!session);
      setReady(true);
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setCanReset(true);
        setReady(true);
        return;
      }
      if (session) {
        setCanReset(true);
      }
    });

    void syncSession();

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError(humanResetError(updateError.message));
      setLoading(false);
      return;
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      router.push("/");
      router.refresh();
      return;
    }

    router.push("/login?reset=success");
    router.refresh();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <i
            className="fas fa-key"
            style={{ fontSize: "2.5rem", color: "#4f46e5", marginBottom: "12px" }}
          />
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "4px" }}>
            Nouveau mot de passe
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
            Choisissez un mot de passe pour votre compte LOU Academy
          </p>
        </div>

        {error && (
          <div
            style={{
              background: "#fef2f2",
              color: "#dc2626",
              padding: "12px 16px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )}

        {!ready ? (
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.9rem" }}>
            Chargement...
          </p>
        ) : canReset ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Nouveau mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                autoComplete="new-password"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle}>Confirmer le mot de passe</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                autoComplete="new-password"
                style={inputStyle}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                background: "#4f46e5",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                fontFamily: "inherit",
              }}
            >
              {loading ? "Enregistrement..." : "Enregistrer le mot de passe"}
            </button>
          </form>
        ) : (
          <div>
            <p
              style={{
                color: "#64748b",
                fontSize: "0.9rem",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Aucune session de réinitialisation. Ouvre le lien reçu par email,
              ou demande un nouvel email depuis la page de connexion.
            </p>
            <a
              href="/login"
              style={{
                display: "block",
                textAlign: "center",
                color: "#4f46e5",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Retour à la connexion
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
