import { createServerSupabase } from "@/lib/supabase/server";
import CourseCard from "@/components/ui/CourseCard";

export default async function CataloguePage() {
  const supabase = await createServerSupabase();

  const { data: courses } = await supabase
    .from("courses")
    .select("*, modules(id), enrollments(id)")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
        Catalogue des formations
      </h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        {courses?.length ?? 0} formations disponibles
      </p>

      {courses && courses.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              moduleCount={Array.isArray(course.modules) ? course.modules.length : 0}
              enrollCount={Array.isArray(course.enrollments) ? course.enrollments.length : 0}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-light)" }}>
          <i className="fas fa-book-open" style={{ fontSize: "4rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucune formation disponible</h3>
          <p>Les formations publiées apparaîtront ici.</p>
        </div>
      )}
    </>
  );
}
