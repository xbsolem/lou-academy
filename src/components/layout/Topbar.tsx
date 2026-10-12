"use client";

import { useState } from "react";

export default function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const [search, setSearch] = useState("");

  return (
    <header className="topbar">
      <button
        className="hamburger-btn"
        onClick={onToggleSidebar}
        aria-label="Menu"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="topbar-search">
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
