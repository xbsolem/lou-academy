"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { first_name: firstName, last_name: lastName, role: "learner" },
        },
      });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e293b 0%, #4f46e5 100%)",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "48px",
          width: "100%",
          maxWidth: "440px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
        }}
      >
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

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
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
