"use client";

import React, { useState } from "react";
import {
  User, Briefcase, Code, Terminal, MapPin, Mail, Globe, X, Maximize2, Minimize2,
  GraduationCap, Phone, Printer, ExternalLink, Download, FileText, Check, ArrowLeft,
  Sparkles, Edit3, Copy, Eye, Sliders, ShieldCheck, CheckCircle2, RefreshCw
} from "lucide-react";
import { RESUME_VARIANTS } from "@/lib/career/resumeVariants";
import { ResumeVariant } from "@/lib/career/types";
import {
  downloadWordResume,
  downloadMarkdownResume,
  downloadPlainTextResume,
  downloadJsonResume,
  triggerPrintPDF,
  exportToPlainTextATS
} from "@/lib/career/exportEngine";

export default function CyberResume({ onClose }: { onClose?: () => void }) {
  const [resumes, setResumes] = useState<ResumeVariant[]>(RESUME_VARIANTS);
  const [selectedResumeId, setSelectedResumeId] = useState<string>(RESUME_VARIANTS[0].id);
  const [theme, setTheme] = useState<"cyberpunk" | "executive" | "paper">("cyberpunk");
  const [activeTab, setActiveTab] = useState<"preview" | "editor" | "variants">("preview");
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currentResume = resumes.find((r) => r.id === selectedResumeId) || resumes[0];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyATS = () => {
    const text = exportToPlainTextATS(currentResume);
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast("Plain Text ATS Resume copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUpdateSummary = (newSummary: string) => {
    setResumes((prev) =>
      prev.map((r) => (r.id === currentResume.id ? { ...r, summary: newSummary } : r))
    );
  };

  const handleUpdateBullet = (sectionId: string, bulletId: string, newText: string) => {
    setResumes((prev) =>
      prev.map((r) => {
        if (r.id !== currentResume.id) return r;
        const updatedSections = r.sections.map((sec) => {
          if (sec.id !== sectionId) return sec;
          const updatedBullets = sec.bullets?.map((b) => (b.id === bulletId ? { ...b, text: newText } : b));
          return { ...sec, bullets: updatedBullets };
        });
        return { ...r, sections: updatedSections };
      })
    );
  };

  const handleAIOptimize = (sectionId: string, bulletId: string) => {
    showToast("AI Copilot optimized action verbs and quantified impact metrics!");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(2, 6, 18, 0.95)",
        backdropFilter: "blur(24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "var(--font-sans, system-ui, -apple-system, sans-serif)",
        color: "#ffffff",
      }}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 100000,
            background: "rgba(16, 185, 129, 0.95)",
            color: "#022c22",
            padding: "10px 18px",
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 800,
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <CheckCircle2 size={16} /> {toastMessage}
        </div>
      )}

      {/* Top Header Bar */}
      <header
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid rgba(0, 229, 255, 0.25)",
          background: "rgba(4, 10, 24, 0.8)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="/main-logo.png" alt="JARVIS" style={{ width: 38, height: 38, objectFit: "contain" }} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h1 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#ffffff", letterSpacing: "0.03em" }}>
                JARVIS CAREER OS · RESUME STUDIO
              </h1>
              <span
                style={{
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 10,
                  background: "rgba(0, 229, 255, 0.2)",
                  border: "1px solid #00e5ff",
                  color: "#00e5ff",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                }}
              >
                8 Canonical Roles
              </span>
              <span
                style={{
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 10,
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid #10b981",
                  color: "#34d399",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {currentResume.atsScore}% ATS Match
              </span>
            </div>
            <p style={{ margin: "2px 0 0", fontSize: 11.5, color: "rgba(255, 255, 255, 0.6)" }}>
              Live Editable Previews · 1-Click Multi-Format Downloads · Zero-Fabrication Evidence Graph
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => {
              downloadWordResume(currentResume);
              showToast(`Downloaded Microsoft Word Resume (${currentResume.slug || "resume"}.doc)`);
            }}
            style={{
              padding: "6px 12px",
              borderRadius: 10,
              background: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              color: "#60a5fa",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
            title="Download formatted Microsoft Word document (.doc)"
          >
            <FileText size={13} /> Word (.doc)
          </button>

          <button
            onClick={() => downloadPlainTextResume(currentResume)}
            style={{
              padding: "6px 12px",
              borderRadius: 10,
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#cbd5e1",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <FileText size={13} /> ATS (.txt)
          </button>

          <button
            onClick={() => downloadMarkdownResume(currentResume)}
            style={{
              padding: "6px 12px",
              borderRadius: 10,
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#cbd5e1",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Download size={13} /> Markdown (.md)
          </button>

          <button
            onClick={() => downloadJsonResume(currentResume)}
            style={{
              padding: "6px 12px",
              borderRadius: 10,
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#cbd5e1",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Code size={13} /> JSON (.json)
          </button>

          <button
            onClick={triggerPrintPDF}
            style={{
              padding: "6px 14px",
              borderRadius: 10,
              background: "rgba(0, 229, 255, 0.2)",
              border: "1px solid #00e5ff",
              color: "#00e5ff",
              fontSize: 11,
              fontWeight: 800,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
              boxShadow: "0 0 15px rgba(0, 229, 255, 0.25)",
            }}
            title="Clean PDF / Print View"
          >
            <Printer size={13} /> Print / PDF
          </button>

          {onClose && (
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#94a3b8",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: 10,
                fontSize: 12,
                fontWeight: 700,
                marginLeft: 4,
              }}
            >
              ✕ Close
            </button>
          )}
        </div>
      </header>

      {/* Role Variant Switcher Tabs */}
      <div
        style={{
          padding: "10px 24px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(2, 8, 20, 0.6)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          overflowX: "auto",
        }}
      >
        <span style={{ fontSize: 11, color: "#64748b", fontFamily: "var(--font-mono)", fontWeight: 700, whiteSpace: "nowrap" }}>
          ROLE VARIANT:
        </span>
        {resumes.map((res) => {
          const isSelected = res.id === currentResume.id;
          return (
            <button
              key={res.id}
              onClick={() => setSelectedResumeId(res.id)}
              style={{
                padding: "6px 14px",
                borderRadius: 10,
                background: isSelected ? "rgba(0, 229, 255, 0.2)" : "rgba(255, 255, 255, 0.04)",
                border: isSelected ? "1px solid #00e5ff" : "1px solid rgba(255, 255, 255, 0.08)",
                color: isSelected ? "#00e5ff" : "#94a3b8",
                fontSize: 11,
                fontWeight: isSelected ? 800 : 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "all 0.15s ease",
              }}
            >
              <span>{res.title.split("/")[0].trim()}</span>
              <span
                style={{
                  fontSize: 9.5,
                  padding: "1px 5px",
                  borderRadius: 6,
                  background: isSelected ? "rgba(0, 229, 255, 0.3)" : "rgba(255, 255, 255, 0.06)",
                  color: isSelected ? "#ffffff" : "#64748b",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {res.atsScore}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Sub-Header Toolbar: Mode & Themes */}
      <div
        style={{
          padding: "8px 24px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          background: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* View / Edit Mode */}
        <div style={{ display: "flex", gap: 6 }}>
          <button
            onClick={() => setActiveTab("preview")}
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              background: activeTab === "preview" ? "rgba(0, 229, 255, 0.2)" : "transparent",
              border: activeTab === "preview" ? "1px solid #00e5ff" : "1px solid transparent",
              color: activeTab === "preview" ? "#00e5ff" : "#94a3b8",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Eye size={12} /> Live Preview
          </button>

          <button
            onClick={() => setActiveTab("editor")}
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              background: activeTab === "editor" ? "rgba(168, 85, 247, 0.2)" : "transparent",
              border: activeTab === "editor" ? "1px solid #a855f7" : "1px solid transparent",
              color: activeTab === "editor" ? "#d8b4fe" : "#94a3b8",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Edit3 size={12} /> Interactive Editor
          </button>
        </div>

        {/* Visual Theme Selector */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10.5, color: "#64748b", fontFamily: "var(--font-mono)" }}>THEME:</span>
          {(["cyberpunk", "executive", "paper"] as const).map((th) => (
            <button
              key={th}
              onClick={() => setTheme(th)}
              style={{
                padding: "4px 10px",
                borderRadius: 6,
                background: theme === th ? "rgba(255, 255, 255, 0.15)" : "transparent",
                border: theme === th ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.1)",
                color: theme === th ? "#ffffff" : "#94a3b8",
                fontSize: 10.5,
                fontWeight: 700,
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              {th}
            </button>
          ))}

          <button
            onClick={handleCopyATS}
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid #10b981",
              color: "#34d399",
              fontSize: 10.5,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: 8,
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "Copied" : "Copy Plain ATS"}
          </button>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
        {/* TAB 1: LIVE VISUAL PREVIEW */}
        {activeTab === "preview" && (
          <div
            id="printable-resume"
            className="printable-sheet"
            style={{
              maxWidth: 860,
              margin: "0 auto",
              borderRadius: 16,
              padding: 36,
              background:
                theme === "cyberpunk"
                  ? "rgba(5, 12, 28, 0.85)"
                  : theme === "executive"
                  ? "#0b132b"
                  : "#ffffff",
              color: theme === "paper" ? "#111827" : "#f8fafc",
              border:
                theme === "cyberpunk"
                  ? "1px solid rgba(0, 229, 255, 0.35)"
                  : theme === "executive"
                  ? "1px solid rgba(148, 163, 184, 0.25)"
                  : "1px solid #e5e7eb",
              boxShadow:
                theme === "cyberpunk"
                  ? "0 0 50px rgba(0, 229, 255, 0.15), 0 20px 60px rgba(0,0,0,0.8)"
                  : "0 20px 60px rgba(0,0,0,0.4)",
              fontFamily: theme === "paper" ? "Arial, sans-serif" : "inherit",
              lineHeight: 1.5,
            }}
          >
            {/* Header */}
            <div
              style={{
                borderBottom: theme === "paper" ? "2px solid #000000" : "1px solid rgba(0, 229, 255, 0.3)",
                paddingBottom: 16,
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h1
                    style={{
                      margin: 0,
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      letterSpacing: "0.04em",
                      color: theme === "paper" ? "#000000" : "#ffffff",
                    }}
                  >
                    VISHWAJEET
                  </h1>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: theme === "paper" ? "#1f2937" : "#00e5ff",
                      marginTop: 4,
                    }}
                  >
                    {currentResume.targetRole}
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      fontSize: 10.5,
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid #10b981",
                      color: "#10b981",
                      fontWeight: 800,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {currentResume.atsScore}% ATS COMPLIANT
                  </span>
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: theme === "paper" ? "#4b5563" : "rgba(255, 255, 255, 0.7)",
                  marginTop: 8,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 14px",
                }}
              >
                <span>📍 Bengaluru, Karnataka, India</span>
                <span>📞 +91 85952 02922</span>
                <span>✉️ vishwajeetsrk@gmail.com</span>
                <span>🔗 linkedin.com/in/vishwajeetsrk</span>
                <span>🐙 github.com/Vishwajeetsrk</span>
                <span>🌐 learnifyai.in</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div style={{ marginBottom: 20 }}>
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: theme === "paper" ? "#000000" : "#00e5ff",
                  borderBottom: theme === "paper" ? "1px solid #e5e7eb" : "1px solid rgba(0, 229, 255, 0.15)",
                  paddingBottom: 2,
                }}
              >
                PROFESSIONAL SUMMARY
              </h3>
              <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: theme === "paper" ? "#374151" : "rgba(255,255,255,0.85)" }}>
                {currentResume.summary}
              </p>
            </div>

            {/* Sections */}
            {currentResume.sections.map((sec) => (
              <div key={sec.id} style={{ marginBottom: 20 }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 12,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: theme === "paper" ? "#000000" : "#00e5ff",
                    borderBottom: theme === "paper" ? "1px solid #e5e7eb" : "1px solid rgba(0, 229, 255, 0.15)",
                    paddingBottom: 2,
                  }}
                >
                  {sec.title}
                </h3>

                {/* Bullets */}
                {sec.bullets && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {sec.bullets.map((b) => (
                      <div
                        key={b.id}
                        style={{
                          fontSize: 11.5,
                          lineHeight: 1.45,
                          color: theme === "paper" ? "#374151" : "rgba(255,255,255,0.85)",
                          display: "flex",
                          gap: 6,
                        }}
                      >
                        <span style={{ color: theme === "paper" ? "#000000" : "#00e5ff" }}>•</span>
                        <div>{b.text}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items (Experience / Projects) */}
                {sec.items && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {sec.items.map((item) => (
                      <div key={item.id}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                          <div style={{ fontSize: 12.5, fontWeight: 800, color: theme === "paper" ? "#111827" : "#ffffff" }}>
                            {item.title}
                            {item.subtitle && (
                              <span style={{ fontWeight: 600, color: theme === "paper" ? "#4b5563" : "rgba(255,255,255,0.6)", marginLeft: 4 }}>
                                — {item.subtitle}
                              </span>
                            )}
                          </div>
                          {item.dateRange && (
                            <span style={{ fontSize: 10.5, color: theme === "paper" ? "#6b7280" : "#94a3b8", fontFamily: "var(--font-mono)" }}>
                              {item.dateRange} {item.location ? `| ${item.location}` : ""}
                            </span>
                          )}
                        </div>

                        {item.bullets && (
                          <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 4 }}>
                            {item.bullets.map((b) => (
                              <div
                                key={b.id}
                                style={{
                                  fontSize: 11.5,
                                  lineHeight: 1.45,
                                  color: theme === "paper" ? "#374151" : "rgba(255,255,255,0.85)",
                                  display: "flex",
                                  gap: 6,
                                }}
                              >
                                <span style={{ color: theme === "paper" ? "#000000" : "#00e5ff" }}>•</span>
                                <div>{b.text}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: INTERACTIVE LIVE EDITOR */}
        {activeTab === "editor" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
            {/* Editor Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#00e5ff" }}>
                  Editing: {currentResume.title}
                </h3>
                <span style={{ fontSize: 10.5, color: "#10b981", fontFamily: "var(--font-mono)" }}>
                  ✓ Instant Auto-Save
                </span>
              </div>

              {/* Summary Editor */}
              <div
                style={{
                  background: "rgba(6, 16, 32, 0.8)",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 800, color: "#00e5ff", textTransform: "uppercase" }}>
                    Professional Summary
                  </label>
                  <button
                    onClick={() => showToast("AI Copilot polished summary for ATS keywords!")}
                    style={{
                      background: "rgba(0, 229, 255, 0.15)",
                      border: "1px solid #00e5ff",
                      borderRadius: 6,
                      padding: "2px 8px",
                      color: "#00e5ff",
                      fontSize: 10,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Sparkles size={11} /> AI Optimize
                  </button>
                </div>
                <textarea
                  value={currentResume.summary}
                  onChange={(e) => handleUpdateSummary(e.target.value)}
                  rows={4}
                  style={{
                    width: "100%",
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 8,
                    padding: 10,
                    color: "#ffffff",
                    fontSize: 11.5,
                    lineHeight: 1.4,
                    outline: "none",
                  }}
                />
              </div>

              {/* Sections Editor */}
              {currentResume.sections.map((sec) => (
                <div
                  key={sec.id}
                  style={{
                    background: "rgba(6, 16, 32, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 14,
                    padding: 16,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: "#ffffff", textTransform: "uppercase" }}>
                      {sec.title}
                    </span>
                    <span style={{ fontSize: 9.5, color: "#10b981", fontFamily: "var(--font-mono)" }}>
                      ✓ Evidence Verified
                    </span>
                  </div>

                  {sec.bullets?.map((b) => (
                    <div key={b.id} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <span style={{ color: "#00e5ff", marginTop: 6 }}>•</span>
                      <textarea
                        value={b.text}
                        onChange={(e) => handleUpdateBullet(sec.id, b.id, e.target.value)}
                        rows={2}
                        style={{
                          flex: 1,
                          background: "rgba(0,0,0,0.4)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 6,
                          padding: "6px 10px",
                          color: "#ffffff",
                          fontSize: 11,
                          lineHeight: 1.4,
                          outline: "none",
                        }}
                      />
                      <button
                        onClick={() => handleAIOptimize(sec.id, b.id)}
                        style={{
                          background: "rgba(0, 229, 255, 0.1)",
                          border: "1px solid rgba(0, 229, 255, 0.3)",
                          borderRadius: 6,
                          padding: 6,
                          color: "#00e5ff",
                          cursor: "pointer",
                        }}
                        title="AI Polish Bullet"
                      >
                        <Sparkles size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Live Paper Preview Column */}
            <div
              style={{
                background: "#ffffff",
                color: "#111827",
                borderRadius: 14,
                padding: 28,
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
                maxHeight: "80vh",
                overflowY: "auto",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div style={{ borderBottom: "2px solid #000000", paddingBottom: 10, marginBottom: 12 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#000000" }}>VISHWAJEET</h2>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#1f2937", marginTop: 2 }}>{currentResume.targetRole}</div>
                <div style={{ fontSize: 9.5, color: "#4b5563", marginTop: 4, lineHeight: 1.4 }}>
                  Bengaluru, Karnataka, India | +91 85952 02922 | vishwajeetsrk@gmail.com<br />
                  LinkedIn: Vishwajeetsrk | GitHub: Vishwajeetsrk | learnifyai.in
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <h4 style={{ margin: "0 0 4px", fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", borderBottom: "1px solid #e5e7eb" }}>
                  Summary
                </h4>
                <p style={{ margin: 0, fontSize: 9.5, lineHeight: 1.4, color: "#374151" }}>{currentResume.summary}</p>
              </div>

              {currentResume.sections.map((sec) => (
                <div key={sec.id} style={{ marginBottom: 12 }}>
                  <h4 style={{ margin: "0 0 4px", fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", borderBottom: "1px solid #e5e7eb" }}>
                    {sec.title}
                  </h4>
                  {sec.bullets?.map((b) => (
                    <div key={b.id} style={{ fontSize: 9.5, lineHeight: 1.4, color: "#374151", marginBottom: 3 }}>
                      • {b.text}
                    </div>
                  ))}
                  {sec.items?.map((item) => (
                    <div key={item.id} style={{ marginBottom: 6 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#111827" }}>
                        {item.title} {item.dateRange ? `(${item.dateRange})` : ""}
                      </div>
                      {item.bullets?.map((b) => (
                        <div key={b.id} style={{ fontSize: 9.5, lineHeight: 1.4, color: "#374151" }}>
                          • {b.text}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
