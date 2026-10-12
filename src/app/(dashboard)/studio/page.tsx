import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import CourseCard from "@/components/ui/CourseCard";
import Link from "next/link";

export default async function StudioListPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || !["admin", "creator"].includes(profile.role)) {
    redirect("/");
  }

  const { data: courses } = await supabase
    .from("courses")
    .select("*, modules(id)")
    .eq("creator_id", user.id)
    .order("updated_at", { ascending: false });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
            Course Studio
          </h1>
          <p style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>
            Créez et gérez vos formations
          </p>
        </div>
        <Link
          href="/studio/new"
          style={{
            padding: "10px 24px",
            borderRadius: "var(--radius-sm)",
            background: "var(--primary)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <i className="fas fa-plus" /> Nouvelle formation
        </Link>
      </div>

      {courses && courses.length > 0 ? (
        <div className="cards-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              moduleCount={Array.isArray(course.modules) ? course.modules.length : 0}
              showStudioLink
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-light)" }}>
          <i className="fas fa-plus-circle" style={{ fontSize: "4rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucune formation</h3>
          <p style={{ marginBottom: 20 }}>Créez votre première formation pour commencer.</p>
          <Link
            href="/studio/new"
            style={{
              padding: "10px 24px",
              borderRadius: "var(--radius-sm)",
              background: "var(--primary)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            <i className="fas fa-plus" /> Créer une formation
          </Link>
        </div>
      )}
    </>
  );
}
