"use client";

import { useState } from "react";

export default function Topbar() {
  const [search, setSearch] = useState("");

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 32px",
        background: "var(--bg-card)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ flex: 1, maxWidth: 500, position: "relative" }}>
        <i
          className="fas fa-search"
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--text-lighter)",
          }}
        />
        <input
          type="text"
          placeholder="Rechercher une formation, un apprenant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 16px 10px 42px",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            fontSize: "0.9rem",
            background: "var(--bg)",
            fontFamily: "inherit",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            cursor: "pointer",
            position: "relative",
            fontSize: "1rem",
            color: "var(--text-light)",
          }}
        >
          <i className="fas fa-bell" />
        </button>
      </div>
    </header>
  );
}
