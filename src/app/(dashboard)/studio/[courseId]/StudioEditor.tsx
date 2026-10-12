"use client";

import { useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { Course, Module, Lesson } from "@/types/database";
import ModuleList from "./ModuleList";
import LessonEditor from "./LessonEditor";
import AiWizard from "./AiWizard";
import CourseInfoTab from "./CourseInfoTab";
import SourcesTab from "./SourcesTab";
import AnalyticsTab from "./AnalyticsTab";
import EnrolleesTab from "./EnrolleesTab";

type ModuleWithLessons = Module & { lessons: (Lesson & { content_blocks: { id: string }[] })[] };

export default function StudioEditor({
  course: initialCourse,
  initialModules,
}: {
  course: Course;
  initialModules: ModuleWithLessons[];
}) {
  const [course, setCourse] = useState(initialCourse);
  const [modules, setModules] = useState(initialModules);
  const [activeTab, setActiveTab] = useState<"content" | "info" | "enrollees" | "sources" | "analytics" | "ai">("content");
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const refresh = useCallback(async () => {
    const { data } = await supabase
      .from("modules")
      .select("*, lessons(*, content_blocks(id))")
      .eq("course_id", course.id)
      .order("position")
      .order("position", { referencedTable: "lessons" });
    if (data) setModules(data as ModuleWithLessons[]);
  }, [course.id, supabase]);

  const addModule = async () => {
    const maxPos = modules.length > 0 ? Math.max(...modules.map((m) => m.position)) : -1;
    const { error } = await supabase.from("modules").insert({
      course_id: course.id,
      title: "Nouveau module",
      position: maxPos + 1,
    });
    if (!error) await refresh();
  };

  const renameModule = async (id: string, title: string) => {
    await supabase.from("modules").update({ title }).eq("id", id);
    await refresh();
  };

  const deleteModule = async (id: string) => {
    if (!confirm("Supprimer ce module et toutes ses lecons ?")) return;
    await supabase.from("modules").delete().eq("id", id);
    await refresh();
  };

  const moveModule = async (id: string, direction: "up" | "down") => {
    const idx = modules.findIndex((m) => m.id === id);
    if (idx < 0) return;
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= modules.length) return;
    const a = modules[idx];
    const b = modules[swapIdx];
    await Promise.all([
      supabase.from("modules").update({ position: b.position }).eq("id", a.id),
      supabase.from("modules").update({ position: a.position }).eq("id", b.id),
    ]);
    await refresh();
  };

  const addLesson = async (moduleId: string) => {
    const mod = modules.find((m) => m.id === moduleId);
    const maxPos = mod && mod.lessons.length > 0 ? Math.max(...mod.lessons.map((l) => l.position)) : -1;
    const { error } = await supabase.from("lessons").insert({
      module_id: moduleId,
      title: "Nouvelle lecon",
      lesson_type: "lesson",
      position: maxPos + 1,
    });
    if (!error) await refresh();
  };

  const deleteLesson = async (id: string) => {
    if (!confirm("Supprimer cette lecon ?")) return;
    setSelectedLesson(null);
    await supabase.from("lessons").delete().eq("id", id);
    await refresh();
  };

  const moveLesson = async (id: string, moduleId: string, direction: "up" | "down") => {
    const mod = modules.find((m) => m.id === moduleId);
    if (!mod) return;
    const idx = mod.lessons.findIndex((l) => l.id === id);
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= mod.lessons.length) return;
    const a = mod.lessons[idx];
    const b = mod.lessons[swapIdx];
    await Promise.all([
      supabase.from("lessons").update({ position: b.position }).eq("id", a.id),
      supabase.from("lessons").update({ position: a.position }).eq("id", b.id),
    ]);
    await refresh();
  };

  const publish = async () => {
    if (!course.title) return alert("Le titre est requis.");
    if (!course.description) return alert("La description est requise.");
    if (modules.length === 0) return alert("Au moins 1 module est requis.");
    const hasLesson = modules.some((m) => m.lessons.length > 0);
    if (!hasLesson) return alert("Au moins 1 lecon est requise.");

    setSaving(true);
    await supabase.from("courses").update({
      status: "published",
      published_at: new Date().toISOString(),
    }).eq("id", course.id);
    setCourse({ ...course, status: "published", published_at: new Date().toISOString() });
    setSaving(false);
  };

  const unpublish = async () => {
    setSaving(true);
    await supabase.from("courses").update({ status: "draft", published_at: null }).eq("id", course.id);
    setCourse({ ...course, status: "draft", published_at: null });
    setSaving(false);
  };

  const archive = async () => {
    if (!confirm("Archiver cette formation ? Elle ne sera plus visible dans le catalogue.")) return;
    setSaving(true);
    await supabase.from("courses").update({ status: "archived" }).eq("id", course.id);
    setCourse({ ...course, status: "archived" as const });
    setSaving(false);
  };

  const duplicate = async () => {
    setSaving(true);
    const { data: newCourse } = await supabase.from("courses").insert({
      title: `${course.title} (copie)`,
      description: course.description,
      category: course.category,
      level: course.level,
      estimated_duration_minutes: course.estimated_duration_minutes,
      thumbnail_url: course.thumbnail_url,
      icon: course.icon,
      gradient: course.gradient,
      status: "draft",
      creator_id: course.creator_id,
    }).select().single();

    if (newCourse) {
      for (const mod of modules) {
        const { data: newMod } = await supabase.from("modules").insert({
          course_id: newCourse.id,
          title: mod.title,
          description: mod.description,
          position: mod.position,
        }).select().single();
        if (!newMod) continue;
        for (const lesson of mod.lessons) {
          const { data: newLesson } = await supabase.from("lessons").insert({
            module_id: newMod.id,
            title: lesson.title,
            description: lesson.description,
            lesson_type: lesson.lesson_type,
            position: lesson.position,
            estimated_duration_minutes: lesson.estimated_duration_minutes,
          }).select().single();
          if (!newLesson) continue;
          const { data: blocks } = await supabase.from("content_blocks").select("*").eq("lesson_id", lesson.id).order("position");
          if (blocks) {
            for (const block of blocks) {
              await supabase.from("content_blocks").insert({
                lesson_id: newLesson.id,
                block_type: block.block_type,
                content: block.content,
                position: block.position,
                metadata: block.metadata,
              });
            }
          }
        }
      }
      router.push(`/studio/${newCourse.id}`);
    }
    setSaving(false);
  };

  const tabs = [
    { id: "content" as const, label: "Contenu", icon: "fa-layer-group" },
    { id: "info" as const, label: "Informations", icon: "fa-info-circle" },
    { id: "enrollees" as const, label: "Apprenants", icon: "fa-users" },
    { id: "sources" as const, label: "Sources", icon: "fa-folder-open" },
    { id: "analytics" as const, label: "Analytics", icon: "fa-chart-bar" },
    { id: "ai" as const, label: "IA", icon: "fa-wand-magic-sparkles" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="studio-header">
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <button
            onClick={() => router.push("/studio")}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem", color: "var(--text-light)" }}
          >
            <i className="fas fa-arrow-left" />
          </button>
          <h1 style={{ fontSize: "1.4rem", fontWeight: 700 }}>{course.title}</h1>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 20,
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              background: course.status === "published" ? "#ecfdf5" : course.status === "draft" ? "#fffbeb" : "#fef2f2",
              color: course.status === "published" ? "#059669" : course.status === "draft" ? "#d97706" : "#dc2626",
            }}
          >
            {course.status === "published" ? "Publié" : course.status === "draft" ? "Brouillon" : "Archivé"}
          </span>
        </div>
        <div className="studio-header-actions">
          <button
            onClick={duplicate}
            disabled={saving}
            style={{
              padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg)",
              color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer",
              fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            <i className="fas fa-copy" /> Dupliquer
          </button>
          <button
            onClick={() => window.open(`/player/${course.id}?preview=1`, "_blank")}
            style={{
              padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg)",
              color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer",
              fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            <i className="fas fa-eye" /> Prévisualiser
          </button>
          {course.status === "published" ? (
            <button
              onClick={unpublish}
              disabled={saving}
              style={{
                padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--warning)",
                color: "#fff", border: "none", cursor: "pointer",
                fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >
              <i className="fas fa-eye-slash" /> Dépublier
            </button>
          ) : course.status === "archived" ? (
            <button
              onClick={async () => {
                await supabase.from("courses").update({ status: "draft" }).eq("id", course.id);
                setCourse({ ...course, status: "draft" });
              }}
              disabled={saving}
              style={{
                padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
                color: "#fff", border: "none", cursor: "pointer",
                fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >
              <i className="fas fa-undo" /> Restaurer
            </button>
          ) : (
            <button
              onClick={publish}
              disabled={saving}
              style={{
                padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--success)",
                color: "#fff", border: "none", cursor: "pointer",
                fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >
              <i className="fas fa-rocket" /> Publier
            </button>
          )}
          {course.status !== "archived" && (
            <button
              onClick={archive}
              disabled={saving}
              style={{
                padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg)",
                color: "var(--danger)", border: "1px solid var(--border)", cursor: "pointer",
                fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >
              <i className="fas fa-archive" /> Archiver
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="studio-tabs" style={{ borderBottom: "2px solid var(--border)", marginBottom: 24 }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSelectedLesson(null); }}
            style={{
              padding: "12px 24px", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500,
              color: activeTab === tab.id ? "var(--primary)" : "var(--text-light)",
              borderBottom: `2px solid ${activeTab === tab.id ? "var(--primary)" : "transparent"}`,
              marginBottom: -2, background: "none", border: "none",
              borderTop: "none", borderLeft: "none", borderRight: "none",
              fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8,
            }}
          >
            <i className={`fas ${tab.icon}`} /> {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "content" && !selectedLesson && (
        <>
        {modules.length > 0 && modules.some((m) => m.lessons.length > 0) && (
          <div style={{ marginBottom: 16 }}>
            <button
              onClick={async () => {
                if (!confirm("Generer le contenu IA pour toutes les lecons vides ? Cela peut prendre du temps.")) return;
                setSaving(true);
                const allLessons = modules.flatMap((m) => m.lessons);
                for (const lesson of allLessons) {
                  if (lesson.content_blocks && lesson.content_blocks.length > 0) continue;
                  try {
                    const res = await fetch("/api/ai", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ action: "lesson_content", lessonTitle: lesson.title, courseId: course.id, aiAction: "generate", existingContent: "" }),
                    });
                    const data = await res.json();
                    if (data.blocks && Array.isArray(data.blocks)) {
                      for (let i = 0; i < data.blocks.length; i++) {
                        await supabase.from("content_blocks").insert({
                          lesson_id: lesson.id,
                          block_type: data.blocks[i].type || "text",
                          content: data.blocks[i].content || "",
                          position: i,
                        });
                      }
                    }
                  } catch { /* skip on error */ }
                }
                await refresh();
                setSaving(false);
              }}
              disabled={saving}
              style={{ padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--primary)", color: "#fff", border: "none", cursor: saving ? "not-allowed" : "pointer", fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8, opacity: saving ? 0.7 : 1 }}
            >
              <i className="fas fa-wand-magic-sparkles" /> {saving ? "Generation en cours..." : "Generer le contenu (IA)"}
            </button>
          </div>
        )}
        <ModuleList
          modules={modules}
          onAddModule={addModule}
          onRenameModule={renameModule}
          onDeleteModule={deleteModule}
          onMoveModule={moveModule}
          onAddLesson={addLesson}
          onDeleteLesson={deleteLesson}
          onMoveLesson={moveLesson}
          onSelectLesson={setSelectedLesson}
        />
        </>
      )}

      {activeTab === "content" && selectedLesson && (
        <LessonEditor
          lessonId={selectedLesson}
          courseId={course.id}
          onBack={() => setSelectedLesson(null)}
          onRefresh={refresh}
        />
      )}

      {activeTab === "info" && (
        <CourseInfoTab course={course} onUpdate={(updated) => setCourse(updated)} />
      )}

      {activeTab === "enrollees" && <EnrolleesTab courseId={course.id} />}

      {activeTab === "sources" && <SourcesTab courseId={course.id} />}

      {activeTab === "analytics" && <AnalyticsTab courseId={course.id} />}

      {activeTab === "ai" && (
        <AiWizard courseId={course.id} onDone={() => { setActiveTab("content"); refresh(); }} />
      )}
    </div>
  );
}
