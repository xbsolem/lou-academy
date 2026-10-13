import { createServerSupabase } from "@/lib/supabase/server";
import CertificateCard from "@/components/ui/CertificateCard";

export default async function CertificatsPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile } = await supabase.from("profiles").select("role, first_name, last_name").eq("id", user!.id).single();
  const isAdmin = profile?.role === "admin";

  const query = isAdmin
    ? supabase.from("certificates").select("*, profiles(first_name, last_name), courses(title, estimated_duration_minutes)").order("issued_at", { ascending: false })
    : supabase.from("certificates").select("*, courses(title, estimated_duration_minutes)").eq("user_id", user!.id).order("issued_at", { ascending: false });

  const { data: certs } = await query;

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Certificats</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        {certs?.length ?? 0} certificats délivrés
      </p>

      {certs && certs.length > 0 ? (
        <div className="cards-grid">
          {certs.map((cert) => {
            const course = cert.courses as { title: string; estimated_duration_minutes: number | null } | null;
            const courseName = course?.title || "Formation";
            const learnerName = isAdmin && cert.profiles
              ? `${(cert.profiles as { first_name: string; last_name: string }).first_name} ${(cert.profiles as { last_name: string; first_name: string }).last_name}`
              : `${profile?.first_name || ""} ${profile?.last_name || ""}`.trim();
            return (
              <CertificateCard
                key={cert.id}
                courseTitle={courseName}
                learnerName={learnerName || null}
                issuedAt={cert.issued_at}
                certificateNumber={cert.certificate_number}
                durationMinutes={course?.estimated_duration_minutes ?? null}
              />
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-light)" }}>
          <i className="fas fa-certificate" style={{ fontSize: "4rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucun certificat</h3>
          <p>Les certificats apparaîtront ici après validation des formations.</p>
        </div>
      )}
    </>
  );
}
