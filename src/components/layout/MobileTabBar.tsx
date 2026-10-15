"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Profile } from "@/types/database";

export default function MobileTabBar({ profile }: { profile: Profile }) {
  const pathname = usePathname();
  const learner = profile.role === "learner";
  const items = learner
    ? [
        { href: "/", icon: "fa-home", label: "Accueil" },
        { href: "/catalogue", icon: "fa-book-open", label: "Catalogue" },
        { href: "/mes-formations", icon: "fa-play-circle", label: "Formations" },
        { href: "/espace", icon: "fa-user-circle", label: "Espace" },
      ]
    : [
        { href: "/", icon: "fa-th-large", label: "Accueil" },
        { href: "/catalogue", icon: "fa-book-open", label: "Catalogue" },
        { href: "/studio", icon: "fa-plus-circle", label: "Studio" },
        { href: "/rapports", icon: "fa-chart-bar", label: "Rapports" },
      ];

  return (
    <nav className="mobile-tabbar" aria-label="Navigation principale">
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-tabbar-item${active ? " active" : ""}`}
          >
            <i className={`fas ${item.icon}`} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
