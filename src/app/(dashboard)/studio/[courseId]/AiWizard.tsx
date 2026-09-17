"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface CurriculumModule {
  title: string;
  description: string;
  lessons: { title: string; type: string; estimatedDuration: number }[];
}

interface Curriculum {
  title: string;
  description: string;
  objectives: string[];
  modules: CurriculumModule[];
}

export default function AiWizard({
  courseId,
  onDone,
}: {
  courseId: string;
  onDone: () => void;
}) {
  const [step, setStep] = useState<"brief" | "curriculum" | "generating">("brief");
  const [subject, setSubject] = useState("");
  const [audience, setAudience] = useState("");
  const [level, setLevel] = useState("debutant");
  const [durationH, setDurationH] = useState("5");
  const [objectives, setObjectives] = useState("");
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);
  const [curriculum, setCurriculum] = useState<Curriculum | null>(null);
  const [genProgress, setGenProgress] = useState("");
  const supabase = createClient();

  const generateCurriculum = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate_curriculum",
          subject, audience, level, durationHours: durationH, objectives, instructions,
        }),
      });
      const data = await res.json();
      if (data.error) { alert(data.error); setLoading(false); return; }
      setCurriculum(data.curriculum);
      setStep("curriculum");
    } catch {
      alert("Erreur lors de la generation");
    } finally {
      setLoading(false);
    }
  };

  const applyCurriculum = async () => {
    if (!curriculum) return;
    setStep("generating");
    setGenProgress("Creation des modules et lecons...");

    for (let mi = 0; mi < curriculum.modules.length; mi++) {
      const mod = curriculum.modules[mi];
      setGenProgress(`Module ${mi + 1}/${curriculum.modules.length}: ${mod.title}`);

      const { data: newModule } = await supabase.from("modules").insert({
        course_id: courseId,
        title: mod.title,
        description: mod.description,
        position: mi,
      }).select().single();

      if (!newModule) continue;

      for (let li = 0; li < mod.lessons.length; li++) {
        const lesson = mod.lessons[li];
        await supabase.from("lessons").insert({
          module_id: newModule.id,
          title: lesson.title,
          lesson_type: lesson.type === "quiz" ? "quiz" : "lesson",
          position: li,
          estimated_duration_minutes: lesson.estimatedDuration || null,
        });
      }
    }

    if (curriculum.description) {
      await supabase.from("courses").update({
        description: curriculum.description,
      }).eq("id", courseId);
    }

    setGenProgress("Termine !");
    setTimeout(() => onDone(), 1000);
  };

  const removeCurrModule = (idx: number) => {
    if (!curriculum) return;
    setCurriculum({
      ...curriculum,
      modules: curriculum.modules.filter((_, i) => i !== idx),
    });
  };

  const removeCurrLesson = (mi: number, li: number) => {
    if (!curriculum) return;
    const modules = [...curriculum.modules];
    modules[mi] = { ...modules[mi], lessons: modules[mi].lessons.filter((_, i) => i !== li) };
    setCurriculum({ ...curriculum, modules });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", border: "1px solid var(--border)",
    borderRadius: "var(--radius-sm)", fontSize: "0.9rem", fontFamily: "inherit",
  };

  if (step === "generating") {
    return (
      <div style={{ textAlign: "center", padding: 60 }}>
        <div className="spinner" style={{ margin: "0 auto 20px", width: 40, height: 40, borderWidth: 4 }} />
        <h3 style={{ marginBottom: 8 }}>Generation en cours...</h3>
        <p style={{ color: "var(--text-light)" }}>{genProgress}</p>
      </div>
    );
  }

  if (step === "curriculum" && curriculum) {
    return (
      <div>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 16 }}>
          <i className="fas fa-wand-magic-sparkles" style={{ marginRight: 8, color: "var(--primary)" }} />
          Programme genere
        </h2>
        <p style={{ color: "var(--text-light)", marginBottom: 24 }}>
          Modifiez le programme puis cliquez sur Utiliser ce programme pour creer les modules en base.
        </p>

        {curriculum.modules.map((mod, mi) => (
          <div key={mi} style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", marginBottom: 16, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>Module {mi + 1} — {mod.title}</h3>
              <button onClick={() => removeCurrModule(mi)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--danger)", fontSize: "0.85rem" }}>
                <i className="fas fa-trash" /> Supprimer
              </button>
            </div>
            {mod.lessons.map((lesson, li) => (
              <div key={li} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
                <i className={`fas ${lesson.type === "quiz" ? "fa-question-circle" : "fa-file-alt"}`} style={{ color: "var(--primary)", width: 20, textAlign: "center" }} />
                <span style={{ flex: 1, fontSize: "0.9rem" }}>{lesson.title}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-lighter)" }}>{lesson.estimatedDuration} min</span>
                <button onClick={() => removeCurrLesson(mi, li)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--danger)", fontSize: "0.75rem" }}>
                  <i className="fas fa-times" />
                </button>
              </div>
            ))}
          </div>
        ))}

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button onClick={applyCurriculum}
            style={{ padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--success)", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <i className="fas fa-check" /> Utiliser ce programme
          </button>
          <button onClick={() => { setStep("brief"); setCurriculum(null); }}
            style={{ padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer", fontSize: "0.9rem", fontFamily: "inherit" }}
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 700 }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>
        <i className="fas fa-wand-magic-sparkles" style={{ marginRight: 8, color: "var(--primary)" }} />
        Generer avec l&apos;IA
      </h2>
      <p style={{ color: "var(--text-light)", marginBottom: 24 }}>
        Decrivez la formation souhaitee et l&apos;IA generera un programme structure.
      </p>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Sujet *</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Ex: SQL pour Data Analysts" style={inputStyle} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Public cible</label>
          <input type="text" value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="Ex: Debutants en analyse de donnees" style={inputStyle} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Niveau</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)} style={inputStyle}>
              <option value="debutant">Debutant</option>
              <option value="intermediaire">Intermediaire</option>
              <option value="avance">Avance</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Duree (heures)</label>
            <input type="number" value={durationH} onChange={(e) => setDurationH(e.target.value)} min="1" style={inputStyle} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Objectifs</label>
          <textarea value={objectives} onChange={(e) => setObjectives(e.target.value)} rows={3} placeholder="Les objectifs pedagogiques..." style={{ ...inputStyle, resize: "vertical" }} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>Instructions supplementaires</label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} rows={3} placeholder="Precision sur le ton, le style..." style={{ ...inputStyle, resize: "vertical" }} />
        </div>

        <button onClick={generateCurriculum} disabled={loading || !subject}
          style={{
            padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--primary)", color: "#fff",
            border: "none", cursor: loading || !subject ? "not-allowed" : "pointer", fontSize: "0.9rem",
            fontWeight: 500, fontFamily: "inherit", opacity: loading || !subject ? 0.7 : 1,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}
        >
          <i className="fas fa-wand-magic-sparkles" />
          {loading ? "Generation..." : "Generer le programme"}
        </button>
      </div>
    </div>
  );
}
