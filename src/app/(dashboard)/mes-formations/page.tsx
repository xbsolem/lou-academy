import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MesFormationsPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("*, courses(*)")
    .eq("user_id", user.id)
    .order("last_activity_at", { ascending: false });

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Mes formations</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Suivez votre progression
      </p>

      {enrollments && enrollments.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {enrollments.map((e) => {
            const c = e.courses as { id: string; title: string; description: string | null; gradient: string | null; icon: string | null; category: string | null } | null;
            if (!c) return null;
            const p = Number(e.progress_percent);
            const color = p >= 100 ? "#10b981" : p > 50 ? "#4f46e5" : "#f59e0b";
            return (
              <Link key={e.id} href={`/player/${c.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow)", cursor: "pointer" }}>
                  <div style={{ height: 120, background: c.gradient || "linear-gradient(135deg, #4f46e5, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`fas ${c.icon || "fa-book"}`} style={{ fontSize: "2.5rem", color: "rgba(255,255,255,0.3)" }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 12 }}>{c.title}</h3>
                    <div style={{ width: "100%", height: 8, background: "var(--border)", borderRadius: 10, overflow: "hidden", marginBottom: 8 }}>
                      <div style={{ height: "100%", width: `${p}%`, background: color, borderRadius: 10, transition: "width 0.5s" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-light)" }}>
                      <span>{p >= 100 ? "Terminee" : "En cours"}</span>
                      <span>{Math.round(p)}%</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-light)" }}>
          <i className="fas fa-play-circle" style={{ fontSize: "4rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucune formation en cours</h3>
          <p style={{ marginBottom: 20 }}>Inscrivez-vous a une formation dans le catalogue.</p>
          <Link href="/catalogue" style={{ padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--primary)", color: "#fff", textDecoration: "none", fontSize: "0.9rem" }}>
            Voir le catalogue
          </Link>
        </div>
      )}
    </>
  );
}
