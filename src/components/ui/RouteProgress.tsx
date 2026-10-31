"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [wide, setWide] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    setActive(true);
    setWide(false);
    const start = window.setTimeout(() => setWide(true), 20);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setWide(true);
      window.setTimeout(() => setActive(false), 280);
    }, 420);
    return () => {
      window.clearTimeout(start);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || link.target === "_blank") return;
      if (href.startsWith("http") && !href.includes(window.location.host)) return;
      setActive(true);
      setWide(false);
      window.setTimeout(() => setWide(true), 20);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!active) return null;
  return (
    <div className="route-progress" role="progressbar" aria-label="Chargement de la page">
      <div className={`route-progress-bar${wide ? " wide" : ""}`} />
    </div>
  );
}
