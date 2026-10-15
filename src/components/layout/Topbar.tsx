"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Profile } from "@/types/database";
import {
  buildAdminNotifications,
  buildLearnerNotifications,
  readDismissed,
  saveDismissed,
  type AppNotification,
} from "@/lib/notifications";

type CourseHit = { id: string; title: string; category: string | null; status: string };
type LearnerHit = { id: string; first_name: string; last_name: string; email: string };

export default function Topbar({
  profile,
  onToggleSidebar,
}: {
  profile: Profile;
  onToggleSidebar: () => void;
}) {
  const router = useRouter();
  const supabase = createClient();
  const searchRef = useRef<HTMLInputElement>(null);
  const searchWrap = useRef<HTMLDivElement>(null);
  const notifWrap = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [courses, setCourses] = useState<CourseHit[]>([]);
  const [learners, setLearners] = useState<LearnerHit[]>([]);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const isStaff = profile.role === "admin" || profile.role === "creator";

  useEffect(() => {
    setDismissed(readDismissed(profile.id));
  }, [profile.id]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const published = await supabase
        .from("courses")
        .select("id, title, category, status")
        .eq("status", "published")
        .order("title");
      if (!cancelled && published.data) setCourses(published.data);

      if (profile.role === "admin") {
        const people = await supabase
          .from("profiles")
          .select("id, first_name, last_name, email")
          .eq("role", "learner")
          .order("last_name");
        if (!cancelled && people.data) setLearners(people.data);
      }

      const { data: enrollments } = await supabase
        .from("enrollments")
        .select("progress_percent, status, last_activity_at, enrolled_at, courses(id, title, category)")
        .eq("user_id", profile.id);

      const hasCareer = Boolean(profile.target_role || profile.current_project || profile.career_goal);

      if (profile.role === "learner" || profile.role === "creator") {
        const list = buildLearnerNotifications({
          enrollments: enrollments || [],
          publishedCourses: published.data || [],
          hasCareerProfile: hasCareer,
        });
        if (!cancelled) setNotifications(list);
      } else {
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
        const staleCut = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString();
        const [{ count: openRequests }, { count: connections7d }, { data: stale }] = await Promise.all([
          supabase
            .from("activity_events")
            .select("id", { count: "exact", head: true })
            .eq("event_type", "Demande de formation"),
          supabase
            .from("activity_events")
            .select("id", { count: "exact", head: true })
            .eq("event_type", "Connexion")
            .gte("created_at", weekAgo),
          supabase
            .from("enrollments")
            .select("id, last_activity_at, status, enrolled_at")
            .neq("status", "completed")
            .limit(400),
        ]);
        const staleCount = (stale || []).filter((row) => {
          const stamp = row.last_activity_at || row.enrolled_at;
          return stamp && stamp < staleCut;
        }).length;
        if (!cancelled) {
          setNotifications(
            buildAdminNotifications({
              openRequests: openRequests || 0,
              staleEnrollments: staleCount,
              connections7d: connections7d || 0,
            })
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [profile.id, profile.role, profile.target_role, profile.current_project, profile.career_goal]);

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      const target = event.target as Node;
      if (searchWrap.current && !searchWrap.current.contains(target)) setSearchOpen(false);
      if (notifWrap.current && !notifWrap.current.contains(target)) setNotifOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const q = search.trim().toLowerCase();
  const courseHits = useMemo(
    () =>
      q
        ? courses.filter(
            (c) =>
              c.title.toLowerCase().includes(q) || (c.category || "").toLowerCase().includes(q)
          )
        : courses.slice(0, 6),
    [courses, q]
  );
  const learnerHits = useMemo(
    () =>
      profile.role !== "admin" || !q
        ? []
        : learners.filter((p) =>
            `${p.first_name} ${p.last_name} ${p.email}`.toLowerCase().includes(q)
          ),
    [profile.role, learners, q]
  );

  const visibleNotifs = notifications.filter((n) => !dismissed.has(n.id));

  const goFirst = useCallback(() => {
    if (courseHits[0]) {
      router.push(`/catalogue?q=${encodeURIComponent(courseHits[0].title)}`);
      setSearchOpen(false);
      setSearch("");
      return;
    }
    if (learnerHits[0]) {
      router.push(`/apprenants?q=${encodeURIComponent(q)}`);
      setSearchOpen(false);
      return;
    }
    router.push(`/catalogue?q=${encodeURIComponent(search.trim())}`);
    setSearchOpen(false);
  }, [courseHits, learnerHits, q, router, search]);

  const dismissOne = (id: string) => {
    const next = new Set(dismissed);
    next.add(id);
    setDismissed(next);
    saveDismissed(profile.id, next);
  };

  const dismissAll = () => {
    const next = new Set(notifications.map((n) => n.id));
    setDismissed(next);
    saveDismissed(profile.id, next);
  };

  return (
    <header className="topbar">
      <button className="hamburger-btn" onClick={onToggleSidebar} aria-label="Menu">
        <i className="fas fa-bars" />
      </button>
      <div className="topbar-search" ref={searchWrap}>
        <button
          type="button"
          className="topbar-search-icon"
          aria-label="Rechercher"
          onClick={() => {
            setSearchOpen(true);
            searchRef.current?.focus();
          }}
        >
          <i className="fas fa-search" />
        </button>
        <input
          ref={searchRef}
          type="search"
          placeholder="Rechercher…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchOpen(true);
          }}
          onFocus={() => setSearchOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              goFirst();
            }
            if (e.key === "Escape") setSearchOpen(false);
          }}
        />
        {searchOpen && (
          <div className="topbar-panel">
            {!q && (
              <p className="topbar-panel-hint">Tapez un titre, une catégorie{isStaff ? " ou un apprenant" : ""}.</p>
            )}
            {courseHits.length > 0 && (
              <>
                <div className="topbar-panel-label">Formations</div>
                {courseHits.slice(0, 8).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="topbar-panel-item"
                    onClick={() => {
                      router.push(`/catalogue?q=${encodeURIComponent(c.title)}`);
                      setSearchOpen(false);
                      setSearch("");
                    }}
                  >
                    <i className="fas fa-book-open" />
                    <span>
                      {c.title}
                      {c.category ? <small>{c.category}</small> : null}
                    </span>
                  </button>
                ))}
              </>
            )}
            {learnerHits.length > 0 && (
              <>
                <div className="topbar-panel-label">Apprenants</div>
                {learnerHits.slice(0, 6).map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="topbar-panel-item"
                    onClick={() => {
                      router.push(`/apprenants?q=${encodeURIComponent(`${p.first_name} ${p.last_name}`)}`);
                      setSearchOpen(false);
                      setSearch("");
                    }}
                  >
                    <i className="fas fa-user" />
                    <span>
                      {p.first_name} {p.last_name}
                      <small>{p.email}</small>
                    </span>
                  </button>
                ))}
              </>
            )}
            {q && courseHits.length === 0 && learnerHits.length === 0 && (
              <p className="topbar-panel-hint">Aucun résultat. Entrée ouvre le catalogue filtré.</p>
            )}
            <button
              type="button"
              className="topbar-panel-item topbar-panel-more"
              onClick={() => {
                router.push(`/catalogue?q=${encodeURIComponent(search.trim())}`);
                setSearchOpen(false);
              }}
            >
              <i className="fas fa-arrow-right" />
              <span>Ouvrir le catalogue{search.trim() ? ` pour « ${search.trim()} »` : ""}</span>
            </button>
          </div>
        )}
      </div>
      <div style={{ display: "flex", gap: 8, marginLeft: "auto" }} ref={notifWrap}>
        <button
          type="button"
          className="topbar-bell"
          aria-label="Notifications"
          onClick={() => setNotifOpen((open) => !open)}
        >
          <i className="fas fa-bell" />
          {visibleNotifs.length > 0 && <span className="topbar-bell-dot">{visibleNotifs.length}</span>}
        </button>
        {notifOpen && (
          <div className="topbar-panel topbar-panel-right">
            <div className="topbar-panel-head">
              <strong>Notifications</strong>
              {visibleNotifs.length > 0 && (
                <button type="button" onClick={dismissAll} className="topbar-link-btn">
                  Tout marquer lu
                </button>
              )}
            </div>
            {visibleNotifs.length === 0 ? (
              <p className="topbar-panel-hint">Aucune notification pour le moment.</p>
            ) : (
              visibleNotifs.map((n) => (
                <div key={n.id} className="topbar-notif">
                  <button
                    type="button"
                    className="topbar-panel-item"
                    onClick={() => {
                      dismissOne(n.id);
                      setNotifOpen(false);
                      router.push(n.href);
                    }}
                  >
                    <i
                      className={`fas ${n.kind === "continue" ? "fa-play-circle" : n.kind === "suggest" ? "fa-lightbulb" : "fa-info-circle"}`}
                    />
                    <span>
                      {n.title}
                      <small>{n.body}</small>
                    </span>
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </header>
  );
}
