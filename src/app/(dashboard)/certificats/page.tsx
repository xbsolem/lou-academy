import { createServerSupabase } from "@/lib/supabase/server";

export default async function CertificatsPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user!.id).single();
  const isAdmin = profile?.role === "admin";

  const query = isAdmin
    ? supabase.from("certificates").select("*, profiles(first_name, last_name), courses(title)").order("issued_at", { ascending: false })
    : supabase.from("certificates").select("*, courses(title)").eq("user_id", user!.id).order("issued_at", { ascending: false });

  const { data: certs } = await query;

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Certificats</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        {certs?.length ?? 0} certificats delivres
      </p>

      {certs && certs.length > 0 ? (
        <div className="cards-grid">
          {certs.map((cert) => {
            const courseName = (cert.courses as { title: string } | null)?.title || "Formation";
            const learnerName = isAdmin && cert.profiles
              ? `${(cert.profiles as { first_name: string; last_name: string }).first_name} ${(cert.profiles as { first_name: string; last_name: string }).last_name}`
              : null;
            return (
              <div key={cert.id} style={{ background: "var(--bg-card)", border: "2px solid var(--border)", borderRadius: "var(--radius)", padding: 32, textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--primary), var(--secondary))" }} />
                <i className="fas fa-award" style={{ fontSize: "3rem", color: "var(--warning)", marginBottom: 16 }} />
                <h3 style={{ marginBottom: 8, fontSize: "1.1rem" }}>{courseName}</h3>
                {learnerName && <p style={{ color: "var(--text-light)", fontSize: "0.85rem", marginBottom: 4 }}><strong>{learnerName}</strong></p>}
                <p style={{ fontSize: "0.8rem", color: "var(--text-lighter)", marginTop: 12 }}>
                  <i className="fas fa-calendar" /> Delivre le {new Date(cert.issued_at).toLocaleDateString("fr-FR")}
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-lighter)", marginTop: 8 }}>
                  Code: {cert.certificate_number}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-light)" }}>
          <i className="fas fa-certificate" style={{ fontSize: "4rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucun certificat</h3>
          <p>Les certificats apparaitront ici apres validation des formations.</p>
        </div>
      )}
    </>
  );
}
