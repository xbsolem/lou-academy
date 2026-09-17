"use client";

import { useState } from "react";
import type { Profile, Enrollment } from "@/types/database";

type LearnerWithEnroll = Profile & { enrollments: Pick<Enrollment, "id" | "progress_percent" | "course_id" | "status">[] };

export default function ApprenantsClient({ learners: initial }: { learners: LearnerWithEnroll[] }) {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [search, setSearch] = useState("");

  const filtered = initial.filter((l) => {
    if (filter === "active" && l.status !== "active") return false;
    if (filter === "inactive" && l.status !== "inactive") return false;
    if (search) {
      const q = search.toLowerCase();
      return `${l.first_name} ${l.last_name}`.toLowerCase().includes(q) || l.email.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Gestion des apprenants</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        {initial.length} apprenants enregistres
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", gap: 12 }}>
          {(["all", "active", "inactive"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                padding: "8px 20px", borderRadius: 20, border: `1px solid ${filter === f ? "var(--primary)" : "var(--border)"}`,
                background: filter === f ? "var(--primary)" : "var(--bg-card)", color: filter === f ? "#fff" : "inherit",
                cursor: "pointer", fontSize: "0.85rem", fontFamily: "inherit",
              }}
            >
              {f === "all" ? "Tous" : f === "active" ? "Actifs" : "Inactifs"}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", fontFamily: "inherit", width: 240 }}
        />
      </div>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Apprenant", "Role", "Service", "Formations", "Progression", "Statut"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "14px 24px", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => {
              const initials = `${l.first_name?.[0] || ""}${l.last_name?.[0] || ""}`.toUpperCase();
              const enrollCount = l.enrollments?.length || 0;
              const completed = l.enrollments?.filter((e) => e.status === "completed").length || 0;
              const avgP = enrollCount > 0 ? Math.round(l.enrollments.reduce((s, e) => s + Number(e.progress_percent), 0) / enrollCount) : 0;
              const pColor = avgP >= 80 ? "#10b981" : avgP >= 40 ? "#4f46e5" : "#f59e0b";
              return (
                <tr key={l.id}>
                  <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, color: "#fff", fontSize: "0.75rem" }}>{initials}</div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{l.first_name} {l.last_name}</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{l.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--border)", fontSize: "0.85rem" }}>{l.role}</td>
                  <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--border)", fontSize: "0.85rem" }}>{l.department || "-"}</td>
                  <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--border)", fontSize: "0.85rem" }}>{completed}/{enrollCount}</td>
                  <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 80, height: 6, background: "var(--border)", borderRadius: 10, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${avgP}%`, background: pColor, borderRadius: 10 }} />
                      </div>
                      <span style={{ fontSize: "0.8rem" }}>{avgP}%</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 600, background: l.status === "active" ? "#ecfdf5" : "#fef2f2", color: l.status === "active" ? "#059669" : "#dc2626" }}>
                      {l.status === "active" ? "Actif" : "Inactif"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "var(--text-light)" }}>
            Aucun apprenant trouve.
          </div>
        )}
      </div>
    </>
  );
}
