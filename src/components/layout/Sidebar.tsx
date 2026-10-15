"use client";

import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Profile } from "@/types/database";

const menuItems = [
  { path: "/", icon: "fa-th-large", label: "Tableau de bord", roles: ["admin", "creator"] },
  { path: "/", icon: "fa-home", label: "Accueil", roles: ["learner"] },
  { path: "/espace", icon: "fa-user-circle", label: "Mon espace" },
  { path: "/catalogue", icon: "fa-book-open", label: "Catalogue" },
  { path: "/mes-formations", icon: "fa-play-circle", label: "Mes formations" },
  { path: "/suggestions", icon: "fa-lightbulb", label: "Suggestions" },
  { path: "/studio", icon: "fa-plus-circle", label: "Course Studio", roles: ["admin", "creator"] },
  { path: "/apprenants", icon: "fa-users", label: "Apprenants", roles: ["admin"] },
  { path: "/rapports", icon: "fa-chart-bar", label: "Rapports", roles: ["admin", "creator"] },
  { path: "/certificats", icon: "fa-certificate", label: "Certificats" },
  { path: "/parametres", icon: "fa-cog", label: "Paramètres", roles: ["admin"] },
];

export default function Sidebar({ profile, open, onClose }: { profile: Profile; open: boolean; onClose: () => void }) {
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

  const navigate = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <div className={`sidebar-overlay${open ? " active" : ""}`} onClick={onClose} />
      <nav className={`sidebar-nav${open ? " open" : ""}`} aria-label="Menu">
        <div className="sidebar-brand">
          <div className="sidebar-brand-title">
            <i className="fas fa-graduation-cap" />
            <span>LOU Academy</span>
          </div>
          <button type="button" className="sidebar-close" onClick={onClose} aria-label="Fermer le menu">
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="sidebar-user">
          <div className="sidebar-avatar">{initials}</div>
          <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
            <span className="sidebar-user-name">
              {profile.first_name} {profile.last_name}
            </span>
            <span className="sidebar-user-role">{roleLabel}</span>
          </div>
        </div>

        <ul className="sidebar-list">
          {visibleItems.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);
            return (
              <li
                key={`${item.path}-${item.label}`}
                className={`sidebar-item${isActive ? " active" : ""}`}
                onClick={() => navigate(item.path)}
              >
                <i className={`fas ${item.icon}`} />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-footer">
          <button type="button" onClick={handleLogout} className="sidebar-logout">
            <i className="fas fa-sign-out-alt" />
            <span>Déconnexion</span>
          </button>
        </div>
      </nav>
    </>
  );
}
