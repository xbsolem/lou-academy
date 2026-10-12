"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Lesson, ContentBlock } from "@/types/database";
import QuizEditor from "./QuizEditor";

const BLOCK_TYPES = [
  { type: "heading", label: "Titre", icon: "fa-heading" },
  { type: "text", label: "Texte", icon: "fa-align-left" },
  { type: "callout", label: "Callout", icon: "fa-lightbulb" },
  { type: "code", label: "Code", icon: "fa-code" },
  { type: "image", label: "Image", icon: "fa-image" },
  { type: "video", label: "Video", icon: "fa-video" },
];

export default function LessonEditor({
  lessonId,
  courseId,
  onBack,
  onRefresh,
}: {
  lessonId: string;
  courseId: string;
  onBack: () => void;
  onRefresh: () => void;
}) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [lessonTab, setLessonTab] = useState<"content" | "quiz">("content");
  const supabase = createClient();

  const loadData = useCallback(async () => {
    const [{ data: l }, { data: b }] = await Promise.all([
      supabase.from("lessons").select("*").eq("id", lessonId).single(),
      supabase.from("content_blocks").select("*").eq("lesson_id", lessonId).order("position"),
    ]);
    if (l) { setLesson(l); setTitle(l.title); }
    if (b) setBlocks(b);
  }, [lessonId, supabase]);

  useEffect(() => { loadData(); }, [loadData]);

  const saveTitle = async () => {
    if (!title.trim()) return;
    await supabase.from("lessons").update({ title }).eq("id", lessonId);
    onRefresh();
  };

  const addBlock = async (blockType: string) => {
    const maxPos = blocks.length > 0 ? Math.max(...blocks.map((b) => b.position)) : -1;
    await supabase.from("content_blocks").insert({
      lesson_id: lessonId,
      block_type: blockType,
      content: "",
      position: maxPos + 1,
    });
    await loadData();
  };

  const updateBlock = async (id: string, content: string) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, content } : b)));
  };

  const saveBlock = async (id: string) => {
    const block = blocks.find((b) => b.id === id);
    if (!block) return;
    setSaving(true);
    await supabase.from("content_blocks").update({ content: block.content }).eq("id", id);
    setSaving(false);
  };

  const deleteBlock = async (id: string) => {
    await supabase.from("content_blocks").delete().eq("id", id);
    await loadData();
  };

  const moveBlock = async (id: string, direction: "up" | "down") => {
    const idx = blocks.findIndex((b) => b.id === id);
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= blocks.length) return;
    await Promise.all([
      supabase.from("content_blocks").update({ position: blocks[swapIdx].position }).eq("id", blocks[idx].id),
      supabase.from("content_blocks").update({ position: blocks[idx].position }).eq("id", blocks[swapIdx].id),
    ]);
    await loadData();
  };

  const generateWithAi = async (action: string) => {
    setAiLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "lesson_content",
          lessonTitle: title,
          courseId,
          aiAction: action,
          existingContent: blocks.map((b) => b.content).join("\n"),
        }),
      });
      const data = await res.json();
      if (data.error) { alert(data.error); return; }
      if (data.blocks && Array.isArray(data.blocks)) {
        const maxPos = blocks.length > 0 ? Math.max(...blocks.map((b) => b.position)) : -1;
        for (let i = 0; i < data.blocks.length; i++) {
          await supabase.from("content_blocks").insert({
            lesson_id: lessonId,
            block_type: data.blocks[i].type || "text",
            content: data.blocks[i].content || "",
            position: maxPos + 1 + i,
          });
        }
        await loadData();
      }
    } catch {
      alert("Erreur lors de la generation IA");
    } finally {
      setAiLoading(false);
    }
  };

  if (!lesson) return <div style={{ padding: 40, textAlign: "center" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem", color: "var(--text-light)" }}>
          <i className="fas fa-arrow-left" />
        </button>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={saveTitle}
          style={{
            flex: 1, fontSize: "1.2rem", fontWeight: 600, border: "none",
            borderBottom: "2px solid transparent", padding: "4px 0", fontFamily: "inherit",
            background: "transparent",
          }}
          onFocus={(e) => { (e.target as HTMLElement).style.borderBottomColor = "var(--primary)"; }}
        />
        {saving && <span style={{ fontSize: "0.8rem", color: "var(--text-lighter)" }}>Sauvegarde...</span>}
      </div>

      {/* Lesson Tabs */}
      <div className="studio-tabs" style={{ borderBottom: "2px solid var(--border)", marginBottom: 20 }}>
        {[
          { id: "content" as const, label: "Contenu", icon: "fa-file-alt" },
          { id: "quiz" as const, label: "Quiz", icon: "fa-question-circle" },
        ].map((t) => (
          <button key={t.id} onClick={() => setLessonTab(t.id)}
            style={{
              padding: "10px 20px", cursor: "pointer", fontSize: "0.85rem", fontWeight: 500,
              color: lessonTab === t.id ? "var(--primary)" : "var(--text-light)",
              borderBottom: `2px solid ${lessonTab === t.id ? "var(--primary)" : "transparent"}`,
              marginBottom: -2, background: "none", border: "none", borderTop: "none", borderLeft: "none", borderRight: "none",
              fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            <i className={`fas ${t.icon}`} /> {t.label}
          </button>
        ))}
      </div>

      {lessonTab === "quiz" && <QuizEditor lessonId={lessonId} />}

      {lessonTab === "content" && <>
      {/* AI Actions */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {[
          { action: "generate", label: "Generer", icon: "fa-wand-magic-sparkles" },
          { action: "improve", label: "Ameliorer", icon: "fa-sparkles" },
          { action: "simplify", label: "Simplifier", icon: "fa-compress" },
          { action: "expand", label: "Developper", icon: "fa-expand" },
          { action: "add_examples", label: "Exemples", icon: "fa-list" },
          { action: "generate_quiz", label: "Quiz", icon: "fa-question-circle" },
        ].map((a) => (
          <button
            key={a.action}
            onClick={() => generateWithAi(a.action)}
            disabled={aiLoading}
            style={{
              padding: "6px 14px", borderRadius: 20, border: "1px solid var(--border)",
              background: "var(--bg-card)", cursor: aiLoading ? "not-allowed" : "pointer",
              fontSize: "0.8rem", fontFamily: "inherit", display: "inline-flex",
              alignItems: "center", gap: 6, color: "var(--primary)",
              opacity: aiLoading ? 0.5 : 1,
            }}
          >
            <i className={`fas ${a.icon}`} /> {a.label}
          </button>
        ))}
        {aiLoading && <span style={{ fontSize: "0.8rem", color: "var(--primary)", display: "flex", alignItems: "center", gap: 6 }}><div className="spinner" /> Generation...</span>}
      </div>

      {/* Content Blocks */}
      {blocks.map((block, bi) => (
        <div
          key={block.id}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            marginBottom: 12,
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-lighter)", textTransform: "uppercase" }}>
              {block.block_type}
            </span>
            <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
              <button onClick={() => moveBlock(block.id, "up")} disabled={bi === 0} style={tinyBtnStyle}><i className="fas fa-chevron-up" /></button>
              <button onClick={() => moveBlock(block.id, "down")} disabled={bi === blocks.length - 1} style={tinyBtnStyle}><i className="fas fa-chevron-down" /></button>
              <button onClick={() => deleteBlock(block.id)} style={{ ...tinyBtnStyle, color: "var(--danger)" }}><i className="fas fa-trash" /></button>
            </div>
          </div>
          <div style={{ padding: 12 }}>
            {block.block_type === "heading" ? (
              <input
                type="text"
                value={block.content}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                onBlur={() => saveBlock(block.id)}
                placeholder="Titre..."
                style={{ width: "100%", border: "none", fontSize: "1.2rem", fontWeight: 700, fontFamily: "inherit", background: "transparent" }}
              />
            ) : block.block_type === "code" ? (
              <textarea
                value={block.content}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                onBlur={() => saveBlock(block.id)}
                placeholder="Code..."
                style={{
                  width: "100%", border: "none", fontFamily: "monospace", fontSize: "0.85rem",
                  background: "#1e293b", color: "#e2e8f0", padding: 12, borderRadius: 6, minHeight: 100, resize: "vertical",
                }}
              />
            ) : (
              <textarea
                value={block.content}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                onBlur={() => saveBlock(block.id)}
                placeholder="Contenu..."
                style={{
                  width: "100%", border: "none", fontSize: "0.9rem", fontFamily: "inherit",
                  background: "transparent", minHeight: 80, resize: "vertical", lineHeight: 1.6,
                }}
              />
            )}
          </div>
        </div>
      ))}

      {/* Add Block */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-lighter)", display: "flex", alignItems: "center", marginRight: 8 }}>
          <i className="fas fa-plus" style={{ marginRight: 6 }} /> Ajouter:
        </span>
        {BLOCK_TYPES.map((bt) => (
          <button
            key={bt.type}
            onClick={() => addBlock(bt.type)}
            style={{
              padding: "6px 14px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)",
              background: "var(--bg-card)", cursor: "pointer", fontSize: "0.8rem", fontFamily: "inherit",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            <i className={`fas ${bt.icon}`} /> {bt.label}
          </button>
        ))}
      </div>
      </>}
    </div>
  );
}

const tinyBtnStyle: React.CSSProperties = {
  width: 24, height: 24, borderRadius: 4, border: "1px solid var(--border)",
  background: "var(--bg-card)", cursor: "pointer", fontSize: "0.65rem",
  color: "var(--text-light)", display: "inline-flex", alignItems: "center", justifyContent: "center",
};
