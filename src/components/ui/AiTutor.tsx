"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AiTutor({
  courseTitle,
  lessonTitle,
  lessonContent,
}: {
  courseTitle: string;
  lessonTitle: string;
  lessonContent: string;
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "tutor",
          courseTitle,
          lessonTitle,
          lessonContent: lessonContent.substring(0, 3000),
          question: userMsg,
          history: messages.slice(-6),
        }),
      });
      const data = await res.json();
      if (data.error) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.error }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response || "..." }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Erreur de communication avec l'IA." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed", bottom: 24, right: 24, width: 56, height: 56,
          borderRadius: "50%", background: "var(--primary)", color: "#fff",
          border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(79,70,229,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.2rem", zIndex: 1000,
        }}
        title="Demander a l'IA"
      >
        <i className="fas fa-robot" />
      </button>
    );
  }

  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, width: 380, height: 520,
      background: "var(--bg-card)", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      display: "flex", flexDirection: "column", zIndex: 1000, overflow: "hidden",
      border: "1px solid var(--border)",
    }}>
      {/* Header */}
      <div style={{ padding: "14px 16px", background: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
        <i className="fas fa-robot" />
        <span style={{ fontWeight: 600, fontSize: "0.9rem", flex: 1 }}>Tuteur IA</span>
        <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "1rem" }}>
          <i className="fas fa-times" />
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--text-light)" }}>
            <i className="fas fa-graduation-cap" style={{ fontSize: "2rem", marginBottom: 12, display: "block", color: "var(--border)" }} />
            <p style={{ fontSize: "0.85rem" }}>Posez une question sur cette lecon.</p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-lighter)", marginTop: 4 }}>Je vous guiderai sans donner directement la reponse.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
            maxWidth: "85%",
            padding: "10px 14px",
            borderRadius: 12,
            background: msg.role === "user" ? "var(--primary)" : "var(--bg)",
            color: msg.role === "user" ? "#fff" : "var(--text)",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
          }}>
            {msg.content}
          </div>
        ))}
        {loading && (
          <div style={{ alignSelf: "flex-start", padding: "10px 14px", borderRadius: 12, background: "var(--bg)", fontSize: "0.85rem", color: "var(--text-light)" }}>
            <i className="fas fa-spinner fa-spin" style={{ marginRight: 6 }} /> Reflexion...
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: 12, borderTop: "1px solid var(--border)", display: "flex", gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
          placeholder="Posez votre question..."
          style={{ flex: 1, padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.85rem", fontFamily: "inherit" }}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()}
          style={{
            width: 40, height: 40, borderRadius: 8,
            background: "var(--primary)", color: "#fff", border: "none",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: loading || !input.trim() ? 0.5 : 1,
          }}
        >
          <i className="fas fa-paper-plane" />
        </button>
      </div>
    </div>
  );
}
