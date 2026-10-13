"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

function messageFromAuthParams(raw: string) {
  const params = new URLSearchParams(raw.startsWith("?") || raw.startsWith("#") ? raw.slice(1) : raw);
  const err = params.get("error");
  const code = params.get("error_code");
  if (code === "otp_expired" || err === "access_denied") {
    return "Le lien de confirmation est invalide ou a expire. Ouvre https://lou-academy.vercel.app (pas localhost), inscris-toi ou reconnecte-toi, et utilise un nouvel email de confirmation.";
  }
  if (err === "confirmation") {
    return "La confirmation a echoue. Utilise un lien recent envoye depuis lou-academy.vercel.app.";
  }
  return "";
}

function humanAuthError(message: string) {
  const lower = message.toLowerCase();
  if (lower.includes("failed to fetch") || lower.includes("fetch failed") || lower.includes("network")) {
    return "Impossible de joindre la base. Le projet Supabase est probablement en pause ou supprime. Restaure-le sur supabase.com puis reessaie.";
  }
  if (lower.includes("invalid login") || lower.includes("invalid credentials")) {
    return "Email ou mot de passe incorrect.";
  }
  if (lower.includes("email not confirmed")) {
    return "Confirme d'abord ton email (lien recu dans ta boite mail), puis reconnecte-toi.";
  }
  if (lower.includes("rate limit")) {
    return "Trop de tentatives. Attends quelques minutes, ou cree le compte dans Supabase (Authentication > Add user).";
  }
  return message;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fromQuery = messageFromAuthParams(window.location.search);
    const fromHash = messageFromAuthParams(window.location.hash.replace(/^#/, ""));
    const message = fromQuery || fromHash;
    if (message) setError(message);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const supabase = createClient();

    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: { first_name: firstName, last_name: lastName, role: "learner" },
        },
      });
      if (error) {
        setError(humanAuthError(error.message));
        setLoading(false);
        return;
      }
      if (!data.session) {
        setSuccess("Compte cree. Verifiez votre email pour confirmer, puis connectez-vous.");
        setIsSignUp(false);
        setLoading(false);
        return;
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(humanAuthError(error.message));
        setLoading(false);
        return;
      }
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <i
            className="fas fa-graduation-cap"
            style={{ fontSize: "2.5rem", color: "#4f46e5", marginBottom: "12px" }}
          />
          <h1
            style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "4px" }}
          >
            LOU Academy
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
            {isSignUp
              ? "Créez votre compte"
              : "Connectez-vous à votre espace"}
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
        {success && (
          <div
            style={{
              background: "#ecfdf5",
              color: "#059669",
              padding: "12px 16px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              marginBottom: "20px",
            }}
          >
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-grid-2" style={{ gap: "12px", marginBottom: "16px" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  Prénom
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required={isSignUp}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontFamily: "inherit",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  Nom
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required={isSignUp}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            </div>
          )}

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.fr"
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontFamily: "inherit",
              }}
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
            {loading ? (
              <span>Chargement...</span>
            ) : isSignUp ? (
              "Créer mon compte"
            ) : (
              "Se connecter"
            )}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "0.85rem",
            color: "#64748b",
          }}
        >
          {isSignUp ? "Déjà un compte ?" : "Pas encore de compte ?"}{" "}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError("");
              setSuccess("");
            }}
            style={{
              background: "none",
              border: "none",
              color: "#4f46e5",
              cursor: "pointer",
              fontWeight: 600,
              fontFamily: "inherit",
            }}
          >
            {isSignUp ? "Se connecter" : "S'inscrire"}
          </button>
        </p>
      </div>
    </div>
  );
}
