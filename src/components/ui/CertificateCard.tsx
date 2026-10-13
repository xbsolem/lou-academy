"use client";

import { formatCourseDuration } from "@/lib/duration";

export default function CertificateCard({
  courseTitle,
  learnerName,
  issuedAt,
  certificateNumber,
  durationMinutes,
}: {
  courseTitle: string;
  learnerName: string | null;
  issuedAt: string;
  certificateNumber: string;
  durationMinutes: number | null;
}) {
  const dateLabel = new Date(issuedAt).toLocaleDateString("fr-FR");
  const duration = formatCourseDuration(durationMinutes);

  const downloadPdf = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const w = doc.internal.pageSize.getWidth();
    const h = doc.internal.pageSize.getHeight();

    doc.setFillColor(241, 245, 249);
    doc.rect(0, 0, w, h, "F");
    doc.setDrawColor(79, 70, 229);
    doc.setLineWidth(1.2);
    doc.rect(10, 10, w - 20, h - 20);
    doc.setDrawColor(6, 182, 212);
    doc.setLineWidth(0.4);
    doc.rect(13, 13, w - 26, h - 26);

    doc.setTextColor(79, 70, 229);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("CERTIFICAT DE REUSSITE", w / 2, 40, { align: "center" });

    doc.setTextColor(30, 41, 59);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(13);
    doc.text("Ce certificat est decerne a", w / 2, 62, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(79, 70, 229);
    doc.text(learnerName || "Apprenant", w / 2, 78, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(13);
    doc.setTextColor(30, 41, 59);
    doc.text("pour avoir suivi avec succes la formation", w / 2, 94, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    const titleLines = doc.splitTextToSize(courseTitle, w - 50);
    doc.text(titleLines, w / 2, 108, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139);
    const meta = [
      `Date : ${dateLabel}`,
      duration ? `Duree : ${duration}` : null,
      `N° ${certificateNumber}`,
    ].filter(Boolean).join("    •    ");
    doc.text(meta, w / 2, h - 32, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(79, 70, 229);
    doc.text("LMS LOU", w / 2, h - 20, { align: "center" });

    doc.save(`certificat-${certificateNumber}.pdf`);
  };

  return (
    <div style={{ background: "var(--bg-card)", border: "2px solid var(--border)", borderRadius: "var(--radius)", padding: 32, textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--primary), var(--secondary))" }} />
      <i className="fas fa-award" style={{ fontSize: "3rem", color: "var(--warning)", marginBottom: 16 }} />
      <h3 style={{ marginBottom: 8, fontSize: "1.1rem" }}>{courseTitle}</h3>
      {learnerName && <p style={{ color: "var(--text-light)", fontSize: "0.85rem", marginBottom: 4 }}><strong>{learnerName}</strong></p>}
      <p style={{ fontSize: "0.8rem", color: "var(--text-lighter)", marginTop: 12 }}>
        <i className="fas fa-calendar" /> Délivré le {dateLabel}
      </p>
      {duration && (
        <p style={{ fontSize: "0.8rem", color: "var(--text-lighter)", marginTop: 4 }}>
          <i className="fas fa-clock" /> Durée : {duration}
        </p>
      )}
      <p style={{ fontSize: "0.75rem", color: "var(--text-lighter)", marginTop: 8 }}>
        Code: {certificateNumber}
      </p>
      <button
        onClick={downloadPdf}
        style={{
          marginTop: 16, padding: "8px 16px", borderRadius: "var(--radius-sm)",
          background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer",
          fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8,
        }}
      >
        <i className="fas fa-file-pdf" /> Télécharger le PDF
      </button>
    </div>
  );
}
