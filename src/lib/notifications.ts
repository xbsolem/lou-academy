export type AppNotification = {
  id: string;
  title: string;
  body: string;
  href: string;
  kind: "continue" | "suggest" | "system";
  createdAt: string;
};

type EnrollmentRow = {
  progress_percent: number;
  status: string;
  last_activity_at: string | null;
  enrolled_at: string;
  courses:
    | { id: string; title: string; category: string | null }
    | { id: string; title: string; category: string | null }[]
    | null;
};

type CourseRow = {
  id: string;
  title: string;
  category: string | null;
};

function courseOf(row: EnrollmentRow) {
  const raw = row.courses as unknown;
  return (Array.isArray(raw) ? raw[0] : raw) as { id: string; title: string; category: string | null } | null;
}

export function buildLearnerNotifications(args: {
  enrollments: EnrollmentRow[];
  publishedCourses: CourseRow[];
  hasCareerProfile: boolean;
}): AppNotification[] {
  const items: AppNotification[] = [];
  const enrolledIds = new Set<string>();

  for (const row of args.enrollments) {
    const course = courseOf(row);
    if (!course) continue;
    enrolledIds.add(course.id);
    if (row.status === "completed") continue;
    const pct = Math.round(Number(row.progress_percent) || 0);
    items.push({
      id: `continue-${course.id}`,
      title: pct > 0 ? "Reprendre votre formation" : "Commencer votre formation",
      body:
        pct > 0
          ? `${course.title} — ${pct} % déjà réalisés. Un créneau court suffit pour avancer.`
          : `${course.title} est dans votre parcours. Lancez la première leçon quand vous êtes prêt.`,
      href: `/player/${course.id}`,
      kind: "continue",
      createdAt: row.last_activity_at || row.enrolled_at,
    });
  }

  const remaining = args.publishedCourses.filter((c) => !enrolledIds.has(c.id));
  for (const course of remaining.slice(0, 3)) {
    items.push({
      id: `suggest-${course.id}`,
      title: "Formation disponible",
      body: `${course.title}${course.category ? ` (${course.category})` : ""}. Utile si vous visez un autre métier ou un complément de compétences.`,
      href: `/catalogue?q=${encodeURIComponent(course.title)}`,
      kind: "suggest",
      createdAt: new Date().toISOString(),
    });
  }

  if (!args.hasCareerProfile) {
    items.push({
      id: "espace-profil",
      title: "Compléter Mon espace",
      body: "Indiquez le poste visé et votre projet : les suggestions de formations en seront plus pertinentes.",
      href: "/espace",
      kind: "system",
      createdAt: new Date().toISOString(),
    });
  }

  return items.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(0, 8);
}

export function buildAdminNotifications(args: {
  openRequests: number;
  staleEnrollments: number;
  connections7d: number;
}): AppNotification[] {
  const items: AppNotification[] = [];
  if (args.openRequests > 0) {
    items.push({
      id: "admin-requests",
      title: "Demandes de formation",
      body: `${args.openRequests} suggestion${args.openRequests > 1 ? "s" : ""} d'apprenant à examiner.`,
      href: "/suggestions",
      kind: "system",
      createdAt: new Date().toISOString(),
    });
  }
  if (args.staleEnrollments > 0) {
    items.push({
      id: "admin-stale",
      title: "Parcours sans activité",
      body: `${args.staleEnrollments} inscription${args.staleEnrollments > 1 ? "s" : ""} en cours sans activité récente.`,
      href: "/rapports",
      kind: "continue",
      createdAt: new Date().toISOString(),
    });
  }
  items.push({
    id: "admin-conn",
    title: "Connexions 7 jours",
    body: `${args.connections7d} session${args.connections7d > 1 ? "s" : ""} enregistrée${args.connections7d > 1 ? "s" : ""}. Voir les indicateurs.`,
    href: "/rapports",
    kind: "suggest",
    createdAt: new Date().toISOString(),
  });
  return items;
}

export function readDismissed(userId: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(`lou-notif-dismissed-${userId}`);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

export function saveDismissed(userId: string, ids: Set<string>) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(`lou-notif-dismissed-${userId}`, JSON.stringify([...ids]));
}
