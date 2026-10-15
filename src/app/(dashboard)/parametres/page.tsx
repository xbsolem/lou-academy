import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LearningModePicker from "@/components/learning/LearningModePicker";

export default async function ParametresPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
  if (!profile || profile.role !== "admin") redirect("/");

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Parametres</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>Configurez votre plateforme LMS</p>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 24 }}>
        <LearningModePicker />
      </div>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 24 }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
          <i className="fas fa-building" style={{ marginRight: 8, color: "var(--primary)" }} />
          Informations de la plateforme
        </h3>
        <div className="form-grid-2" style={{ marginBottom: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Nom de la plateforme</label>
            <input type="text" defaultValue="LOU Academy" style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: "0.9rem", fontFamily: "inherit" }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Email administrateur</label>
            <input type="email" defaultValue={profile.email} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: "0.9rem", fontFamily: "inherit" }} />
          </div>
        </div>
      </div>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 24 }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
          <i className="fas fa-bell" style={{ marginRight: 8, color: "var(--warning)" }} />
          Notifications
        </h3>
        <div style={{ marginBottom: 12 }}><label style={{ fontSize: "0.85rem" }}><input type="checkbox" defaultChecked style={{ marginRight: 8 }} />Notifier les apprenants lors de l&apos;inscription</label></div>
        <div style={{ marginBottom: 12 }}><label style={{ fontSize: "0.85rem" }}><input type="checkbox" defaultChecked style={{ marginRight: 8 }} />Rappels automatiques pour formations en retard</label></div>
        <div style={{ marginBottom: 12 }}><label style={{ fontSize: "0.85rem" }}><input type="checkbox" defaultChecked style={{ marginRight: 8 }} />Email de felicitation a la completion</label></div>
      </div>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 24 }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
          <i className="fas fa-certificate" style={{ marginRight: 8, color: "var(--success)" }} />
          Certificats
        </h3>
        <div style={{ marginBottom: 12 }}><label style={{ fontSize: "0.85rem" }}><input type="checkbox" defaultChecked style={{ marginRight: 8 }} />Generer automatiquement les certificats</label></div>
        <div>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Score minimum pour validation (%)</label>
          <input type="number" defaultValue={70} min={0} max={100} style={{ width: 120, padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: "0.9rem", fontFamily: "inherit" }} />
        </div>
      </div>
    </>
  );
}
