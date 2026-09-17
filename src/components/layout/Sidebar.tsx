"use client";

import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Profile } from "@/types/database";

const menuItems = [
  { path: "/", icon: "fa-th-large", label: "Tableau de bord" },
  { path: "/catalogue", icon: "fa-book-open", label: "Catalogue" },
  { path: "/mes-formations", icon: "fa-play-circle", label: "Mes formations" },
  { path: "/studio", icon: "fa-plus-circle", label: "Course Studio", roles: ["admin", "creator"] },
  { path: "/apprenants", icon: "fa-users", label: "Apprenants", roles: ["admin"] },
  { path: "/rapports", icon: "fa-chart-bar", label: "Rapports", roles: ["admin", "creator"] },
  { path: "/certificats", icon: "fa-certificate", label: "Certificats" },
  { path: "/parametres", icon: "fa-cog", label: "Paramètres", roles: ["admin"] },
];

export default function Sidebar({ profile }: { profile: Profile }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const initials = `${profile.first_name?.[0] || ""}${profile.last_name?.[0] || ""}`.toUpperCase() || "?";
  const roleLabel = profile.role === "admin" ? "Administrateur" : profile.role === "creator" ? "Formateur" : "Apprenant";

  const visibleItems = menuItems.filter(
    (item) => !item.roles || item.roles.includes(profile.role)
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav
      style={{
        width: 260,
        background: "var(--sidebar-bg)",
        color: "var(--sidebar-text)",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          <i
            className="fas fa-graduation-cap"
            style={{ fontSize: "1.6rem", color: "var(--primary-light)" }}
          />
          <span>LOU Academy</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            background: "var(--primary)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            color: "#fff",
            fontSize: "0.85rem",
          }}
        >
          {initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}
          >
            {profile.first_name} {profile.last_name}
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-lighter)" }}>
            {roleLabel}
          </span>
        </div>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: "12px 0",
          flex: 1,
          overflowY: "auto",
        }}
      >
        {visibleItems.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);
          return (
            <li
              key={item.path}
              onClick={() => router.push(item.path)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 24px",
                cursor: "pointer",
                fontSize: "0.9rem",
                borderLeft: `3px solid ${isActive ? "var(--primary-light)" : "transparent"}`,
                background: isActive ? "rgba(79,70,229,0.15)" : "transparent",
                color: isActive ? "#fff" : "inherit",
                transition: "all 0.2s",
              }}
            >
              <i className={`fas ${item.icon}`} style={{ width: 20, textAlign: "center" }} />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>

      <div
        style={{
          padding: "16px 24px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "none",
            border: "none",
            color: "var(--text-lighter)",
            cursor: "pointer",
            fontSize: "0.9rem",
            padding: "8px 0",
            fontFamily: "inherit",
          }}
        >
          <i className="fas fa-sign-out-alt" />
          <span>Déconnexion</span>
        </button>
      </div>
    </nav>
  );
}
