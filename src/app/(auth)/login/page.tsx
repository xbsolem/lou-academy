"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

function messageFromAuthParams(raw: string) {
  const params = new URLSearchParams(raw.startsWith("?") || raw.startsWith("#") ? raw.slice(1) : raw);
  const err = params.get("error");
  const code = params.get("error_code");
  if (code === "otp_expired" || err === "access_denied") {
    return "Ce lien est invalide ou a expiré. Ouvre https://lou-academy.vercel.app (pas localhost) et demande un nouvel email (confirmation ou mot de passe oublié).";
  }
  if (err === "confirmation") {
    return "Ce lien n'est plus valide ou a déjà été utilisé. Connecte-toi si ton compte est actif, ou demande un nouvel email (confirmation ou mot de passe oublié).";
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
    return "Confirme d'abord ton email (boite de reception et spam), puis reconnecte-toi. Tu peux aussi renvoyer l'email ci-dessous.";
  }
  if (lower.includes("rate limit")) {
    return "Trop de tentatives (limite d'emails Supabase). Attends quelques minutes, ou confirme le compte a la main dans Supabase (Authentication > Users).";
  }
  if (lower.includes("already") && lower.includes("confirm")) {
    return "Cet email est deja confirme. Connecte-toi avec ton mot de passe.";
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
  const [resending, setResending] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  useEffect(() => {
    const hashRaw = window.location.hash.replace(/^#/, "");
    const hashParams = new URLSearchParams(hashRaw);
    if (hashParams.get("type") === "recovery" || hashParams.get("access_token")) {
      window.location.replace(`/reset-password${window.location.hash}`);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get("code") || params.get("token_hash") || params.get("type") === "recovery") {
      params.set("next", "/reset-password");
      window.location.replace(`/auth/callback?${params.toString()}`);
      return;
    }

    if (params.get("reset") === "success") {
      setSuccess("Mot de passe mis à jour. Connecte-toi avec ton nouveau mot de passe.");
    }

    const fromQuery = messageFromAuthParams(window.location.search);
    const fromHash = messageFromAuthParams(hashRaw);
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
        const alreadyRegistered = (data.user?.identities?.length ?? 1) === 0;
        setSuccess(
          alreadyRegistered
            ? "Ce compte existe deja. Si l'email n'est pas confirme, renvoie la confirmation ci-dessous et verifie le dossier spam."
            : "Compte cree. Verifie ta boite mail (et le dossier spam) pour confirmer, puis connecte-toi."
        );
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

  const handleResend = async () => {
    if (!email) {
      setError("Saisis ton email pour renvoyer la confirmation.");
      return;
    }
    setResending(true);
    setError("");
    setSuccess("");
    const supabase = createClient();
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setError(humanAuthError(error.message));
    } else {
      setSuccess("Email de confirmation renvoye. Verifie ta boite et le dossier spam.");
    }
    setResending(false);
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Saisis ton email pour réinitialiser le mot de passe.");
      return;
    }
    setResetting(true);
    setError("");
    setSuccess("");
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });
    if (error) {
      setError(humanAuthError(error.message));
    } else {
      setSuccess("Email de réinitialisation envoyé");
    }
    setResetting(false);
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

          <div style={{ marginBottom: isSignUp ? "24px" : "8px" }}>
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
          {!isSignUp && (
            <p
              style={{
                textAlign: "right",
                marginBottom: "24px",
                fontSize: "0.85rem",
              }}
            >
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={loading || resetting}
                style={{
                  background: "none",
                  border: "none",
                  color: "#4f46e5",
                  cursor: resetting || loading ? "not-allowed" : "pointer",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  padding: 0,
                }}
              >
                {resetting ? "Envoi..." : "Mot de passe oublié"}
              </button>
            </p>
          )}

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
        {!isSignUp && (
          <p
            style={{
              textAlign: "center",
              marginTop: "12px",
              fontSize: "0.85rem",
              color: "#64748b",
            }}
          >
            Pas reçu le mail ?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={loading || resending}
              style={{
                background: "none",
                border: "none",
                color: "#4f46e5",
                cursor: resending || loading ? "not-allowed" : "pointer",
                fontWeight: 600,
                fontFamily: "inherit",
              }}
            >
              {resending ? "Envoi..." : "Renvoyer l'email de confirmation"}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
