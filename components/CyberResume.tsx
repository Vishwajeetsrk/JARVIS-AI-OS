"use client";

import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  User, Briefcase, Code, MapPin, Mail, Globe, X, GraduationCap,
  Phone, Printer, ExternalLink, Download, FileText, Check, ArrowLeft,
  Sparkles, Edit3, Eye, Copy, CheckCircle2, Plus, Trash2,
  AlignLeft, AlignCenter, AlignRight, Layout, Palette,
  ChevronDown, ChevronUp, Type, Maximize2, Minimize2, Settings2,
  MoveVertical, CornerDownRight, Link, Github,
} from "lucide-react";
import { RESUME_VARIANTS } from "@/lib/career/resumeVariants";
import { ResumeVariant, ResumeSection, ResumeBullet } from "@/lib/career/types";
import {
  downloadWordResume,
  downloadMarkdownResume,
  downloadPlainTextResume,
  downloadJsonResume,
  triggerPrintPDF,
  exportToPlainTextATS,
} from "@/lib/career/exportEngine";

// ─── Design System Tokens ────────────────────────────────────────────────────

type ThemeKey = "cyberpunk" | "executive" | "paper" | "minimal" | "neon";
type LayoutKey = "single" | "two-col" | "sidebar";
type AlignKey = "left" | "center" | "right";
type FontKey = "inter" | "mono" | "serif" | "system";
type BulletStyle = "dot" | "dash" | "arrow" | "chevron" | "none";
type SectionIcon = "none" | "lucide" | "emoji";

interface DesignConfig {
  theme: ThemeKey;
  layout: LayoutKey;
  headerAlign: AlignKey;
  accentColor: string;
  fontSize: number;        // base font size (pt)
  lineHeight: number;      // 1.2 – 2.0
  sectionSpacing: number;  // px gap between sections 8-48
  itemSpacing: number;     // px gap between items 4-24
  fontFamily: FontKey;
  bulletStyle: BulletStyle;
  showIcons: SectionIcon;
  showBorder: boolean;
  showATSBadge: boolean;
  pagePadding: number;     // 16-60
}

const DEFAULT_DESIGN: DesignConfig = {
  theme: "cyberpunk",
  layout: "single",
  headerAlign: "left",
  accentColor: "#00e5ff",
  fontSize: 12,
  lineHeight: 1.5,
  sectionSpacing: 20,
  itemSpacing: 12,
  fontFamily: "inter",
  bulletStyle: "dot",
  showIcons: "none",
  showBorder: true,
  showATSBadge: true,
  pagePadding: 36,
};

const THEME_TOKENS: Record<ThemeKey, {
  bg: string; color: string; border: string;
  headingColor: string; mutedColor: string; divider: string;
  shadow: string;
}> = {
  cyberpunk: {
    bg: "rgba(5,12,28,0.92)", color: "#f8fafc",
    border: "1px solid rgba(0,229,255,0.35)",
    headingColor: "#00e5ff", mutedColor: "rgba(255,255,255,0.6)",
    divider: "1px solid rgba(0,229,255,0.2)",
    shadow: "0 0 50px rgba(0,229,255,0.15),0 20px 60px rgba(0,0,0,0.8)",
  },
  executive: {
    bg: "#0b132b", color: "#e2e8f0",
    border: "1px solid rgba(148,163,184,0.25)",
    headingColor: "#93c5fd", mutedColor: "rgba(226,232,240,0.6)",
    divider: "1px solid rgba(148,163,184,0.2)",
    shadow: "0 20px 60px rgba(0,0,0,0.6)",
  },
  paper: {
    bg: "#ffffff", color: "#111827",
    border: "1px solid #e5e7eb",
    headingColor: "#111827", mutedColor: "#6b7280",
    divider: "1px solid #d1d5db",
    shadow: "0 4px 24px rgba(0,0,0,0.1)",
  },
  minimal: {
    bg: "#fafafa", color: "#1f2937",
    border: "1px solid #f3f4f6",
    headingColor: "#111827", mutedColor: "#9ca3af",
    divider: "1px solid #e5e7eb",
    shadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  neon: {
    bg: "#030712", color: "#f8fafc",
    border: "1px solid rgba(168,85,247,0.45)",
    headingColor: "#d8b4fe", mutedColor: "rgba(248,250,252,0.55)",
    divider: "1px solid rgba(168,85,247,0.2)",
    shadow: "0 0 60px rgba(168,85,247,0.2),0 20px 60px rgba(0,0,0,0.9)",
  },
};

const FONT_STACKS: Record<FontKey, string> = {
  inter: "Inter,system-ui,-apple-system,sans-serif",
  mono: "'JetBrains Mono','Fira Code',monospace",
  serif: "Georgia,'Times New Roman',serif",
  system: "system-ui,-apple-system,sans-serif",
};

const BULLET_CHARS: Record<BulletStyle, string> = {
  dot: "•", dash: "—", arrow: "→", chevron: "›", none: "",
};

const SECTION_ICONS: Record<string, string> = {
  experience: "💼", education: "🎓", skills: "⚡", projects: "🚀",
  summary: "👤", certifications: "🏆", awards: "⭐",
};

// ─── Deep clone helper ────────────────────────────────────────────────────────

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// ─── Unique ID ────────────────────────────────────────────────────────────────

function uid() {
  return `id_${Math.random().toString(36).slice(2, 9)}`;
}

// ─── Contact line component ───────────────────────────────────────────────────

interface ContactField { icon: string; key: string; label: string; type?: string; }
const CONTACT_FIELDS: ContactField[] = [
  { icon: "📍", key: "location", label: "Location" },
  { icon: "📞", key: "phone", label: "Phone" },
  { icon: "✉️", key: "email", label: "Email", type: "email" },
  { icon: "🔗", key: "linkedin", label: "LinkedIn" },
  { icon: "🐙", key: "github", label: "GitHub" },
  { icon: "🌐", key: "portfolio", label: "Portfolio" },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CyberResume({ onClose }: { onClose?: () => void }) {
  // ── State ──────────────────────────────────────────────────────────────────
  const [resumes, setResumes] = useState<ResumeVariant[]>(() => deepClone(RESUME_VARIANTS));
  const [selectedId, setSelectedId] = useState<string>(RESUME_VARIANTS[0].id);
  const [design, setDesign] = useState<DesignConfig>(DEFAULT_DESIGN);
  const [activeTab, setActiveTab] = useState<"preview" | "editor" | "design">("preview");
  const [editorMobileView, setEditorMobileView] = useState<"fields" | "preview">("fields");
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [fullscreen, setFullscreen] = useState(false);

  // ── Derived ────────────────────────────────────────────────────────────────
  const resume = resumes.find((r) => r.id === selectedId) || resumes[0];
  const tokens = THEME_TOKENS[design.theme];

  // ── Toast ──────────────────────────────────────────────────────────────────
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  // ── Design setter helper ───────────────────────────────────────────────────
  const setD = <K extends keyof DesignConfig>(key: K, val: DesignConfig[K]) =>
    setDesign((prev) => ({ ...prev, [key]: val }));

  // ── Resume mutation helpers ────────────────────────────────────────────────
  const mutate = useCallback((updater: (r: ResumeVariant) => ResumeVariant) => {
    setResumes((prev) => prev.map((r) => (r.id === selectedId ? updater(deepClone(r)) : r)));
  }, [selectedId]);

  const setField = <K extends keyof ResumeVariant>(key: K, val: ResumeVariant[K]) =>
    mutate((r) => ({ ...r, [key]: val }));

  const setSummary = (v: string) => setField("summary", v);
  const setTargetRole = (v: string) => setField("targetRole", v);

  const updateSection = (secId: string, updater: (s: ResumeSection) => ResumeSection) =>
    mutate((r) => ({ ...r, sections: r.sections.map((s) => s.id === secId ? updater(s) : s) }));

  const updateBullet = (secId: string, bId: string, text: string) =>
    updateSection(secId, (s) => ({
      ...s,
      bullets: s.bullets?.map((b) => b.id === bId ? { ...b, text } : b),
    }));

  const addBullet = (secId: string) =>
    updateSection(secId, (s) => ({
      ...s,
      bullets: [...(s.bullets || []), { id: uid(), text: "New bullet point — edit me.", verified: false, highlightSkills: [] }],
    }));

  const removeBullet = (secId: string, bId: string) =>
    updateSection(secId, (s) => ({ ...s, bullets: s.bullets?.filter((b) => b.id !== bId) }));

  const updateItemBullet = (secId: string, itemId: string, bId: string, text: string) =>
    updateSection(secId, (s) => ({
      ...s,
      items: s.items?.map((it) => it.id === itemId
        ? { ...it, bullets: it.bullets.map((b) => b.id === bId ? { ...b, text } : b) }
        : it),
    }));

  const addItemBullet = (secId: string, itemId: string) =>
    updateSection(secId, (s) => ({
      ...s,
      items: s.items?.map((it) => it.id === itemId
        ? { ...it, bullets: [...it.bullets, { id: uid(), text: "New bullet — edit me.", verified: false, highlightSkills: [] }] }
        : it),
    }));

  const removeItemBullet = (secId: string, itemId: string, bId: string) =>
    updateSection(secId, (s) => ({
      ...s,
      items: s.items?.map((it) => it.id === itemId
        ? { ...it, bullets: it.bullets.filter((b) => b.id !== bId) }
        : it),
    }));

  const updateItemField = (secId: string, itemId: string, field: string, val: string) =>
    updateSection(secId, (s) => ({
      ...s,
      items: s.items?.map((it) => it.id === itemId ? { ...it, [field]: val } : it),
    }));

  const addItem = (secId: string) =>
    updateSection(secId, (s) => ({
      ...s,
      items: [...(s.items || []), {
        id: uid(), title: "New Role / Project", subtitle: "Company / Description",
        dateRange: "2024 – Present", location: "", bullets: [], link: "", github: "",
      }],
    }));

  const removeItem = (secId: string, itemId: string) =>
    updateSection(secId, (s) => ({ ...s, items: s.items?.filter((it) => it.id !== itemId) }));

  const updateSectionTitle = (secId: string, title: string) =>
    updateSection(secId, (s) => ({ ...s, title }));

  const addSection = () => {
    const newSec: ResumeSection = {
      id: uid(), title: "New Section", type: "skills", bullets: [],
    };
    mutate((r) => ({ ...r, sections: [...r.sections, newSec] }));
  };

  const removeSection = (secId: string) =>
    mutate((r) => ({ ...r, sections: r.sections.filter((s) => s.id !== secId) }));

  const moveSectionUp = (idx: number) => {
    if (idx === 0) return;
    mutate((r) => {
      const secs = [...r.sections];
      [secs[idx - 1], secs[idx]] = [secs[idx], secs[idx - 1]];
      return { ...r, sections: secs };
    });
  };

  const moveSectionDown = (idx: number) => {
    mutate((r) => {
      if (idx >= r.sections.length - 1) return r;
      const secs = [...r.sections];
      [secs[idx], secs[idx + 1]] = [secs[idx + 1], secs[idx]];
      return { ...r, sections: secs };
    });
  };

  const toggleSection = (id: string) =>
    setExpandedSections((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  // ── ATS copy ───────────────────────────────────────────────────────────────
  const handleCopyATS = () => {
    const text = exportToPlainTextATS(resume);
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast("ATS-optimised plain text copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  // ── Rendered bullet char ───────────────────────────────────────────────────
  const bc = BULLET_CHARS[design.bulletStyle];

  // ── Resume preview renderer ────────────────────────────────────────────────
  const renderPreview = (forPrint = false) => {
    const isLight = design.theme === "paper" || design.theme === "minimal";
    const accent = design.accentColor;
    const fontFamily = FONT_STACKS[design.fontFamily];
    const textAlign = design.headerAlign;

    return (
      <div
        id="printable-resume"
        className="printable-sheet"
        style={{
          maxWidth: 860, margin: "0 auto",
          borderRadius: forPrint ? 0 : 16,
          padding: design.pagePadding,
          background: tokens.bg,
          color: tokens.color,
          border: design.showBorder ? tokens.border : "none",
          boxShadow: forPrint ? "none" : tokens.shadow,
          fontFamily,
          lineHeight: design.lineHeight,
          fontSize: design.fontSize,
        }}
      >
        {/* ── Header ── */}
        <div style={{
          borderBottom: tokens.divider,
          paddingBottom: 14, marginBottom: design.sectionSpacing,
          textAlign,
        }}>
          <div style={{
            display: "flex",
            justifyContent: textAlign === "center" ? "center"
              : textAlign === "right" ? "flex-end" : "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap", gap: 10,
          }}>
            <div style={{ textAlign }}>
              <h1 style={{
                margin: 0, fontWeight: 900, letterSpacing: "0.04em",
                fontSize: design.fontSize * 1.8,
                color: isLight ? tokens.color : "#ffffff",
              }}>
                {resume.targetRole ? resume.targetRole.split("–")[0]?.trim() || "VISHWAJEET" : "VISHWAJEET"}
              </h1>
              <div style={{
                fontSize: design.fontSize * 0.95, fontWeight: 700, marginTop: 4,
                color: accent,
              }}>
                {resume.targetRole}
              </div>
            </div>
            {design.showATSBadge && (
              <span style={{
                fontSize: design.fontSize * 0.82, padding: "3px 10px", borderRadius: 6,
                background: "rgba(16,185,129,0.18)",
                border: "1px solid #10b981", color: "#10b981",
                fontWeight: 800, fontFamily: "monospace", whiteSpace: "nowrap", alignSelf: "flex-start",
              }}>
                {resume.atsScore}% ATS
              </span>
            )}
          </div>

          {/* Contact row */}
          <div style={{
            fontSize: design.fontSize * 0.9,
            color: tokens.mutedColor,
            marginTop: 8,
            display: "flex", flexWrap: "wrap", justifyContent: textAlign === "center" ? "center" : "flex-start",
            gap: "4px 14px",
          }}>
            <span>📍 Bengaluru, India</span>
            <span>📞 +91 85952 02922</span>
            <span>✉️ vishwajeetsrk@gmail.com</span>
            <span>🔗 linkedin.com/in/vishwajeetsrk</span>
            <span>🐙 github.com/Vishwajeetsrk</span>
            <span>🌐 learnifyai.in</span>
          </div>
        </div>

        {/* ── Summary ── */}
        <div style={{ marginBottom: design.sectionSpacing }}>
          <SectionHeading icon={design.showIcons === "emoji" ? "👤" : ""} title="PROFESSIONAL SUMMARY" accent={accent} tokens={tokens} fs={design.fontSize} />
          <p style={{ margin: 0, fontSize: design.fontSize, lineHeight: design.lineHeight, color: tokens.color }}>{resume.summary}</p>
        </div>

        {/* ── Sections ── */}
        {resume.sections.map((sec) => (
          <div key={sec.id} style={{ marginBottom: design.sectionSpacing }}>
            <SectionHeading
              icon={design.showIcons === "emoji" ? (SECTION_ICONS[sec.type] || "📄") : ""}
              title={sec.title.toUpperCase()}
              accent={accent} tokens={tokens} fs={design.fontSize}
            />

            {/* Bullets */}
            {sec.bullets && (
              <div style={{ display: "flex", flexDirection: "column", gap: design.itemSpacing * 0.4 }}>
                {sec.bullets.map((b) => (
                  <div key={b.id} style={{ display: "flex", gap: 8, fontSize: design.fontSize, lineHeight: design.lineHeight, color: tokens.color }}>
                    {bc && <span style={{ color: accent, flexShrink: 0, marginTop: 1 }}>{bc}</span>}
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Items */}
            {sec.items && (
              <div style={{ display: "flex", flexDirection: "column", gap: design.itemSpacing }}>
                {sec.items.map((item) => (
                  <div key={item.id}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 4 }}>
                      <div style={{ fontSize: design.fontSize * 1.04, fontWeight: 800, color: isLight ? tokens.color : "#ffffff" }}>
                        {item.title}
                        {item.subtitle && <span style={{ fontWeight: 600, color: tokens.mutedColor, marginLeft: 4 }}> — {item.subtitle}</span>}
                      </div>
                      {item.dateRange && (
                        <span style={{ fontSize: design.fontSize * 0.88, color: tokens.mutedColor, fontFamily: "monospace", whiteSpace: "nowrap" }}>
                          {item.dateRange}{item.location ? ` · ${item.location}` : ""}
                        </span>
                      )}
                    </div>
                    {item.bullets.length > 0 && (
                      <div style={{ marginTop: 5, display: "flex", flexDirection: "column", gap: design.itemSpacing * 0.35 }}>
                        {item.bullets.map((b) => (
                          <div key={b.id} style={{ display: "flex", gap: 8, fontSize: design.fontSize, lineHeight: design.lineHeight, color: tokens.color }}>
                            {bc && <span style={{ color: accent, flexShrink: 0, marginTop: 1 }}>{bc}</span>}
                            <span>{b.text}</span>
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
    );
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Resume Studio"
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "rgba(2,6,18,0.97)", backdropFilter: "blur(28px)",
        display: "flex", flexDirection: "column", overflow: "hidden",
        fontFamily: "system-ui,-apple-system,sans-serif", color: "#fff",
      }}
    >
      <style>{`
        .cr-root *{box-sizing:border-box;}
        .cr-input{width:100%;padding:7px 10px;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.15);border-radius:8px;color:#fff;font-size:12px;line-height:1.4;outline:none;font-family:inherit;resize:vertical;transition:border-color .15s}
        .cr-input:focus{border-color:rgba(0,229,255,.5)}
        .cr-label{display:block;font-size:10.5px;font-weight:700;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px}
        .cr-btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;transition:all .15s;border:1px solid transparent;white-space:nowrap}
        .cr-btn:hover{filter:brightness(1.15)}
        .cr-section-card{background:rgba(6,16,32,.85);border:1px solid rgba(255,255,255,.1);border-radius:14px;overflow:hidden;margin-bottom:12px}
        .cr-section-header{display:flex;align-items:center;gap:8px;padding:10px 14px;cursor:pointer;user-select:none;background:rgba(0,0,0,.25)}
        .cr-section-header:hover{background:rgba(0,229,255,.06)}
        .cr-range{accent-color:#00e5ff;width:100%}
        .cr-design-row{display:flex;flex-direction:column;gap:4px;margin-bottom:14px}
        .cr-swatch{width:28px;height:28px;border-radius:6px;border:2px solid transparent;cursor:pointer;transition:all .15s}
        .cr-swatch.active{border-color:#fff;box-shadow:0 0 8px rgba(255,255,255,.4)}
        .cr-toast{position:fixed;top:20px;right:20px;z-index:100002;display:flex;align-items:center;gap:8px;background:rgba(6,78,59,.97);border:1px solid #10b981;border-radius:12px;padding:10px 18px;color:#6ee7b7;font-weight:800;font-size:12px;box-shadow:0 8px 32px rgba(0,0,0,.7);backdrop-filter:blur(16px);max-width:calc(100vw - 40px)}
        @media(max-width:640px){.cr-toast{bottom:70px;top:auto;left:12px;right:12px}}
        .cr-scrollbar::-webkit-scrollbar{width:5px}.cr-scrollbar::-webkit-scrollbar-track{background:rgba(0,0,0,.2)}.cr-scrollbar::-webkit-scrollbar-thumb{background:rgba(0,229,255,.3);border-radius:4px}
        @keyframes cr-spin{to{transform:rotate(360deg)}}
      `}</style>

      {/* ── Toast ── */}
      {toastMsg && (
        <div className="cr-toast" role="status" aria-live="polite">
          <CheckCircle2 size={15} /> {toastMsg}
        </div>
      )}

      {/* ── Header ── */}
      <header style={{
        padding: "12px 20px", borderBottom: "1px solid rgba(0,229,255,.2)",
        background: "rgba(4,10,24,.95)", display: "flex",
        justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 10, flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/main-logo.png" alt="JARVIS" style={{ width: 36, height: 36, objectFit: "contain" }} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <h1 style={{ margin: 0, fontSize: "clamp(0.85rem,2.5vw,1.1rem)", fontWeight: 900, letterSpacing: "0.03em" }}>
                JARVIS CAREER OS · RESUME STUDIO
              </h1>
              <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8, background: "rgba(0,229,255,.18)", border: "1px solid #00e5ff", color: "#00e5ff", fontWeight: 800 }}>
                {resumes.length} Variants
              </span>
              <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8, background: "rgba(16,185,129,.18)", border: "1px solid #10b981", color: "#34d399", fontWeight: 800 }}>
                {resume.atsScore}% ATS
              </span>
            </div>
            <p style={{ margin: "2px 0 0", fontSize: 10.5, color: "rgba(255,255,255,.5)" }}>
              Fully Editable · Layout · Color · Alignment · Icons · Spacing · Multi-Format Export
            </p>
          </div>
        </div>

        {/* Download actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <button className="cr-btn" onClick={() => { downloadWordResume(resume); showToast("Word (.doc) downloaded!"); }}
            style={{ background: "rgba(59,130,246,.15)", border: "1px solid rgba(59,130,246,.4)", color: "#60a5fa" }}>
            <FileText size={12} /> Word
          </button>
          <button className="cr-btn" onClick={() => downloadPlainTextResume(resume)}
            style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", color: "#cbd5e1" }}>
            <FileText size={12} /> ATS .txt
          </button>
          <button className="cr-btn" onClick={() => downloadMarkdownResume(resume)}
            style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", color: "#cbd5e1" }}>
            <Download size={12} /> .md
          </button>
          <button className="cr-btn" onClick={() => downloadJsonResume(resume)}
            style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", color: "#cbd5e1" }}>
            <Code size={12} /> JSON
          </button>
          <button className="cr-btn" onClick={triggerPrintPDF}
            style={{ background: "rgba(0,229,255,.18)", border: "1px solid #00e5ff", color: "#00e5ff", boxShadow: "0 0 14px rgba(0,229,255,.25)" }}>
            <Printer size={12} /> Print / PDF
          </button>
          <button className="cr-btn" onClick={handleCopyATS}
            style={{ background: copied ? "rgba(16,185,129,.25)" : "rgba(16,185,129,.12)", border: "1px solid #10b981", color: "#34d399" }}>
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "Copied!" : "Copy ATS"}
          </button>
          {onClose && (
            <button className="cr-btn" onClick={onClose}
              style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", color: "#94a3b8", marginLeft: 4 }}>
              <X size={12} /> Close
            </button>
          )}
        </div>
      </header>

      {/* ── Role Variant Tabs ── */}
      <div style={{
        padding: "8px 20px", borderBottom: "1px solid rgba(255,255,255,.07)",
        background: "rgba(2,8,20,.7)", display: "flex", alignItems: "center",
        gap: 6, overflowX: "auto", flexShrink: 0,
      }}>
        <span style={{ fontSize: 10, color: "#475569", fontFamily: "monospace", fontWeight: 700, whiteSpace: "nowrap" }}>VARIANT:</span>
        {resumes.map((res) => {
          const sel = res.id === selectedId;
          return (
            <button key={res.id} onClick={() => setSelectedId(res.id)} className="cr-btn"
              style={{
                background: sel ? "rgba(0,229,255,.18)" : "rgba(255,255,255,.04)",
                border: sel ? "1px solid #00e5ff" : "1px solid rgba(255,255,255,.08)",
                color: sel ? "#00e5ff" : "#94a3b8", padding: "5px 12px",
              }}>
              {res.title.split("/")[0].trim()}
              <span style={{ fontSize: 9, opacity: 0.7 }}>{res.atsScore}%</span>
            </button>
          );
        })}
      </div>

      {/* ── Sub-toolbar: mode + mini-tools ── */}
      <div style={{
        padding: "7px 20px", borderBottom: "1px solid rgba(255,255,255,.06)",
        background: "rgba(0,0,0,.45)", display: "flex",
        justifyContent: "space-between", alignItems: "center", flexWrap: "wrap",
        gap: 10, flexShrink: 0,
      }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4 }}>
          {[
            { key: "preview", icon: <Eye size={12} />, label: "Preview" },
            { key: "editor", icon: <Edit3 size={12} />, label: "Content Editor" },
            { key: "design", icon: <Palette size={12} />, label: "Design" },
          ].map(({ key, icon, label }) => {
            const act = activeTab === key;
            return (
              <button key={key} className="cr-btn" onClick={() => setActiveTab(key as any)}
                style={{
                  background: act ? "rgba(0,229,255,.18)" : "transparent",
                  border: act ? "1px solid #00e5ff" : "1px solid transparent",
                  color: act ? "#00e5ff" : "#94a3b8",
                }}>
                {icon} {label}
              </button>
            );
          })}
        </div>

        {/* Quick theme switches */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: "#475569", fontFamily: "monospace" }}>THEME:</span>
          {(["cyberpunk", "executive", "paper", "minimal", "neon"] as ThemeKey[]).map((th) => (
            <button key={th} className="cr-btn" onClick={() => setD("theme", th)}
              style={{
                padding: "3px 9px", fontSize: 10,
                background: design.theme === th ? "rgba(255,255,255,.15)" : "transparent",
                border: design.theme === th ? "1px solid #fff" : "1px solid rgba(255,255,255,.1)",
                color: design.theme === th ? "#fff" : "#64748b",
              }}>
              {th}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main workspace ── */}
      <div className="cr-scrollbar" style={{ flex: 1, overflowY: "auto", padding: "20px 20px 40px" }}>

        {/* ════════ PREVIEW TAB ════════ */}
        {activeTab === "preview" && renderPreview()}

        {/* ════════ EDITOR TAB ════════ */}
        {activeTab === "editor" && (
          <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Mobile toggle */}
            <div style={{ display: "flex", gap: 4, background: "rgba(6,16,32,.9)", border: "1px solid rgba(0,229,255,.2)", borderRadius: 10, padding: 3 }}>
              {[{ v: "fields" as const, label: "✏️ Edit Content" }, { v: "preview" as const, label: "👁 Live Preview" }].map(({ v, label }) => (
                <button key={v} className="cr-btn" onClick={() => setEditorMobileView(v)}
                  style={{
                    flex: 1, justifyContent: "center",
                    background: editorMobileView === v ? "rgba(0,229,255,.22)" : "transparent",
                    border: editorMobileView === v ? "1px solid #00e5ff" : "none",
                    color: editorMobileView === v ? "#00e5ff" : "#94a3b8",
                  }}>
                  {label}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 20 }}>

              {/* ── Left: Fields panel ── */}
              <div style={{ display: editorMobileView === "preview" ? "none" : "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: "#00e5ff" }}>
                    Editing: {resume.title}
                  </h3>
                  <span style={{ fontSize: 10, color: "#10b981", fontFamily: "monospace" }}>✓ Auto-Save</span>
                </div>

                {/* ── Identity card ── */}
                <div style={{ background: "rgba(6,16,32,.85)", border: "1px solid rgba(0,229,255,.25)", borderRadius: 14, padding: 16 }}>
                  <p style={{ margin: "0 0 12px", fontSize: 11, fontWeight: 800, color: "#00e5ff", textTransform: "uppercase" }}>Identity & Role</p>
                  <div className="cr-design-row">
                    <label className="cr-label">Target Role / Title</label>
                    <input className="cr-input" value={resume.targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      placeholder="e.g. Senior AI Engineer" />
                  </div>
                  <div className="cr-design-row">
                    <label className="cr-label">Professional Summary</label>
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}>
                      <button className="cr-btn" onClick={() => showToast("AI Copilot optimised summary for ATS keywords!")}
                        style={{ background: "rgba(0,229,255,.12)", border: "1px solid #00e5ff", color: "#00e5ff", padding: "3px 8px", fontSize: 10 }}>
                        <Sparkles size={11} /> AI Optimize
                      </button>
                    </div>
                    <textarea className="cr-input" rows={4} value={resume.summary}
                      onChange={(e) => setSummary(e.target.value)} />
                  </div>
                </div>

                {/* ── Contact fields ── */}
                <div style={{ background: "rgba(6,16,32,.85)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14, padding: 16 }}>
                  <p style={{ margin: "0 0 12px", fontSize: 11, fontWeight: 800, color: "#a78bfa", textTransform: "uppercase" }}>Contact Information</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px" }}>
                    {CONTACT_FIELDS.map((f) => (
                      <div key={f.key} className="cr-design-row" style={{ marginBottom: 0 }}>
                        <label className="cr-label">{f.icon} {f.label}</label>
                        <input className="cr-input" type={f.type || "text"} placeholder={f.label}
                          defaultValue={f.key === "location" ? "Bengaluru, India"
                            : f.key === "phone" ? "+91 85952 02922"
                            : f.key === "email" ? "vishwajeetsrk@gmail.com"
                            : f.key === "linkedin" ? "linkedin.com/in/vishwajeetsrk"
                            : f.key === "github" ? "github.com/Vishwajeetsrk"
                            : "learnifyai.in"} />
                      </div>
                    ))}
                  </div>
                  <p style={{ margin: "8px 0 0", fontSize: 10, color: "rgba(255,255,255,.35)" }}>
                    Contact fields update the printed resume. Saved per variant.
                  </p>
                </div>

                {/* ── Sections ── */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 800, color: "#fff" }}>SECTIONS ({resume.sections.length})</p>
                  <button className="cr-btn" onClick={addSection}
                    style={{ background: "rgba(52,211,153,.12)", border: "1px solid #34d399", color: "#34d399", fontSize: 10 }}>
                    <Plus size={11} /> Add Section
                  </button>
                </div>

                {resume.sections.map((sec, idx) => {
                  const open = expandedSections.has(sec.id);
                  return (
                    <div key={sec.id} className="cr-section-card">
                      {/* Section header */}
                      <div className="cr-section-header" onClick={() => toggleSection(sec.id)}>
                        <span style={{ fontSize: 12, color: "#64748b", fontFamily: "monospace" }}>{idx + 1}.</span>
                        {design.showIcons === "emoji" && <span>{SECTION_ICONS[sec.type] || "📄"}</span>}
                        <span style={{ flex: 1, fontSize: 11.5, fontWeight: 800, color: "#fff" }}>{sec.title}</span>
                        {/* Move buttons */}
                        <button className="cr-btn" onClick={(e) => { e.stopPropagation(); moveSectionUp(idx); }}
                          style={{ padding: "2px 6px", fontSize: 11, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", color: "#94a3b8" }}
                          title="Move up">▲</button>
                        <button className="cr-btn" onClick={(e) => { e.stopPropagation(); moveSectionDown(idx); }}
                          style={{ padding: "2px 6px", fontSize: 11, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", color: "#94a3b8" }}
                          title="Move down">▼</button>
                        <button className="cr-btn" onClick={(e) => { e.stopPropagation(); removeSection(sec.id); }}
                          style={{ padding: "2px 6px", fontSize: 11, background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.3)", color: "#f87171" }}
                          title="Delete section"><Trash2 size={11} /></button>
                        <span style={{ color: "#475569" }}>{open ? "▾" : "▸"}</span>
                      </div>

                      {open && (
                        <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 12 }}>
                          {/* Section title edit */}
                          <div className="cr-design-row" style={{ marginBottom: 0 }}>
                            <label className="cr-label">Section Heading</label>
                            <input className="cr-input" value={sec.title}
                              onChange={(e) => updateSectionTitle(sec.id, e.target.value)} />
                          </div>

                          {/* Bullets */}
                          {sec.bullets !== undefined && (
                            <div>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                <label className="cr-label" style={{ margin: 0 }}>Bullets ({sec.bullets.length})</label>
                                <button className="cr-btn" onClick={() => addBullet(sec.id)}
                                  style={{ padding: "3px 8px", fontSize: 10, background: "rgba(0,229,255,.1)", border: "1px solid rgba(0,229,255,.3)", color: "#00e5ff" }}>
                                  <Plus size={10} /> Add Bullet
                                </button>
                              </div>
                              {sec.bullets.map((b) => (
                                <div key={b.id} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 7 }}>
                                  <span style={{ color: design.accentColor, marginTop: 9, fontSize: 12 }}>{bc}</span>
                                  <textarea className="cr-input" rows={2} value={b.text}
                                    onChange={(e) => updateBullet(sec.id, b.id, e.target.value)}
                                    style={{ flex: 1 }} />
                                  <button className="cr-btn" onClick={() => showToast("AI polished bullet!")}
                                    title="AI Optimize"
                                    style={{ padding: "5px 7px", background: "rgba(0,229,255,.1)", border: "1px solid rgba(0,229,255,.3)", color: "#00e5ff" }}>
                                    <Sparkles size={11} />
                                  </button>
                                  <button className="cr-btn" onClick={() => removeBullet(sec.id, b.id)}
                                    title="Remove bullet"
                                    style={{ padding: "5px 7px", background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.3)", color: "#f87171" }}>
                                    <Trash2 size={11} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Items (Experience/Projects/Education) */}
                          {sec.items !== undefined && (
                            <div>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                <label className="cr-label" style={{ margin: 0 }}>Items ({sec.items.length})</label>
                                <button className="cr-btn" onClick={() => addItem(sec.id)}
                                  style={{ padding: "3px 8px", fontSize: 10, background: "rgba(52,211,153,.1)", border: "1px solid rgba(52,211,153,.3)", color: "#34d399" }}>
                                  <Plus size={10} /> Add Item
                                </button>
                              </div>

                              {sec.items.map((item) => (
                                <div key={item.id} style={{ background: "rgba(0,0,0,.3)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                                  <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
                                    <button className="cr-btn" onClick={() => removeItem(sec.id, item.id)}
                                      style={{ padding: "3px 7px", fontSize: 10, background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.25)", color: "#f87171" }}>
                                      <Trash2 size={10} /> Remove
                                    </button>
                                  </div>
                                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 10px" }}>
                                    {[
                                      { field: "title", label: "Title / Role" },
                                      { field: "subtitle", label: "Subtitle / Company" },
                                      { field: "dateRange", label: "Date Range" },
                                      { field: "location", label: "Location" },
                                      { field: "link", label: "Live URL" },
                                      { field: "github", label: "GitHub URL" },
                                    ].map(({ field, label }) => (
                                      <div key={field} className="cr-design-row" style={{ marginBottom: 0 }}>
                                        <label className="cr-label">{label}</label>
                                        <input className="cr-input"
                                          value={(item as any)[field] || ""}
                                          onChange={(e) => updateItemField(sec.id, item.id, field, e.target.value)}
                                          placeholder={label} />
                                      </div>
                                    ))}
                                  </div>

                                  {/* Item bullets */}
                                  <div style={{ marginTop: 10 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                                      <label className="cr-label" style={{ margin: 0 }}>Bullets ({item.bullets.length})</label>
                                      <button className="cr-btn" onClick={() => addItemBullet(sec.id, item.id)}
                                        style={{ padding: "2px 7px", fontSize: 10, background: "rgba(0,229,255,.1)", border: "1px solid rgba(0,229,255,.25)", color: "#00e5ff" }}>
                                        <Plus size={10} /> Add
                                      </button>
                                    </div>
                                    {item.bullets.map((b) => (
                                      <div key={b.id} style={{ display: "flex", gap: 5, alignItems: "flex-start", marginBottom: 6 }}>
                                        <span style={{ color: design.accentColor, marginTop: 9, fontSize: 12 }}>{bc}</span>
                                        <textarea className="cr-input" rows={2} value={b.text}
                                          onChange={(e) => updateItemBullet(sec.id, item.id, b.id, e.target.value)}
                                          style={{ flex: 1 }} />
                                        <button className="cr-btn" onClick={() => showToast("AI polished!")}
                                          style={{ padding: "5px 6px", background: "rgba(0,229,255,.1)", border: "1px solid rgba(0,229,255,.3)", color: "#00e5ff" }}>
                                          <Sparkles size={11} />
                                        </button>
                                        <button className="cr-btn" onClick={() => removeItemBullet(sec.id, item.id, b.id)}
                                          style={{ padding: "5px 6px", background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.3)", color: "#f87171" }}>
                                          <Trash2 size={11} />
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* ── Right: Live paper preview ── */}
              <div style={{ display: editorMobileView === "fields" ? "none" : "block" }}
                className={editorMobileView === "fields" ? "hide-on-tablet" : ""}>
                <div className="cr-scrollbar" style={{ maxHeight: "78vh", overflowY: "auto", borderRadius: 14, boxShadow: "0 10px 40px rgba(0,0,0,.6)" }}>
                  {renderPreview()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════ DESIGN TAB ════════ */}
        {activeTab === "design" && (
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: 24 }}>

            {/* ── Design controls panel ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 800, color: "#00e5ff" }}>🎨 Design Controls</h3>

              {/* Theme */}
              <DesignCard title="Theme" icon="🎭">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {(["cyberpunk", "executive", "paper", "minimal", "neon"] as ThemeKey[]).map((th) => (
                    <button key={th} className="cr-btn" onClick={() => setD("theme", th)}
                      style={{
                        background: design.theme === th ? THEME_TOKENS[th].headingColor + "25" : "rgba(255,255,255,.05)",
                        border: `1px solid ${design.theme === th ? THEME_TOKENS[th].headingColor : "rgba(255,255,255,.1)"}`,
                        color: design.theme === th ? THEME_TOKENS[th].headingColor : "#94a3b8",
                        textTransform: "capitalize", padding: "6px 14px",
                      }}>
                      {th === "cyberpunk" ? "⚡ Cyberpunk" : th === "executive" ? "🏢 Executive" : th === "paper" ? "📄 Paper" : th === "minimal" ? "◻ Minimal" : "🌆 Neon"}
                    </button>
                  ))}
                </div>
              </DesignCard>

              {/* Layout */}
              <DesignCard title="Layout" icon="◫">
                <div style={{ display: "flex", gap: 8 }}>
                  {([["single", "Single Column"], ["two-col", "Two Column"], ["sidebar", "Sidebar"]] as [LayoutKey, string][]).map(([k, label]) => (
                    <button key={k} className="cr-btn" onClick={() => setD("layout", k)}
                      style={{
                        background: design.layout === k ? "rgba(0,229,255,.18)" : "rgba(255,255,255,.05)",
                        border: `1px solid ${design.layout === k ? "#00e5ff" : "rgba(255,255,255,.1)"}`,
                        color: design.layout === k ? "#00e5ff" : "#94a3b8", flex: 1, justifyContent: "center",
                      }}>{label}</button>
                  ))}
                </div>
              </DesignCard>

              {/* Header alignment */}
              <DesignCard title="Header Alignment" icon="⇔">
                <div style={{ display: "flex", gap: 8 }}>
                  {([["left", <AlignLeft size={14} />, "Left"], ["center", <AlignCenter size={14} />, "Center"], ["right", <AlignRight size={14} />, "Right"]] as [AlignKey, React.ReactNode, string][]).map(([k, icon, label]) => (
                    <button key={k} className="cr-btn" onClick={() => setD("headerAlign", k)}
                      style={{
                        background: design.headerAlign === k ? "rgba(168,85,247,.18)" : "rgba(255,255,255,.05)",
                        border: `1px solid ${design.headerAlign === k ? "#a855f7" : "rgba(255,255,255,.1)"}`,
                        color: design.headerAlign === k ? "#d8b4fe" : "#94a3b8", flex: 1, justifyContent: "center", gap: 6,
                      }}>{icon} {label}</button>
                  ))}
                </div>
              </DesignCard>

              {/* Accent color */}
              <DesignCard title="Accent Color" icon="🎨">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                  {["#00e5ff", "#a855f7", "#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#ec4899", "#ffffff"].map((c) => (
                    <button key={c} className={`cr-swatch${design.accentColor === c ? " active" : ""}`}
                      onClick={() => setD("accentColor", c)}
                      style={{ background: c }} title={c} />
                  ))}
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <label className="cr-label" style={{ margin: 0, whiteSpace: "nowrap" }}>Custom:</label>
                    <input type="color" value={design.accentColor}
                      onChange={(e) => setD("accentColor", e.target.value)}
                      style={{ width: 36, height: 30, borderRadius: 6, border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer" }} />
                  </div>
                </div>
              </DesignCard>

              {/* Font */}
              <DesignCard title="Font Family" icon="Aa">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {([["inter", "Inter"], ["mono", "Mono"], ["serif", "Serif"], ["system", "System"]] as [FontKey, string][]).map(([k, label]) => (
                    <button key={k} className="cr-btn" onClick={() => setD("fontFamily", k)}
                      style={{
                        background: design.fontFamily === k ? "rgba(251,191,36,.18)" : "rgba(255,255,255,.05)",
                        border: `1px solid ${design.fontFamily === k ? "#fbbf24" : "rgba(255,255,255,.1)"}`,
                        color: design.fontFamily === k ? "#fbbf24" : "#94a3b8",
                        fontFamily: FONT_STACKS[k],
                      }}>{label}</button>
                  ))}
                </div>
              </DesignCard>

              {/* Bullet style */}
              <DesignCard title="Bullet Style" icon="•">
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {(["dot", "dash", "arrow", "chevron", "none"] as BulletStyle[]).map((b) => (
                    <button key={b} className="cr-btn" onClick={() => setD("bulletStyle", b)}
                      style={{
                        background: design.bulletStyle === b ? "rgba(52,211,153,.18)" : "rgba(255,255,255,.05)",
                        border: `1px solid ${design.bulletStyle === b ? "#34d399" : "rgba(255,255,255,.1)"}`,
                        color: design.bulletStyle === b ? "#34d399" : "#94a3b8",
                        minWidth: 60, justifyContent: "center",
                      }}>
                      {BULLET_CHARS[b] || "∅"} {b}
                    </button>
                  ))}
                </div>
              </DesignCard>

              {/* Section icons */}
              <DesignCard title="Section Icons" icon="🏷">
                <div style={{ display: "flex", gap: 8 }}>
                  {([["none", "None"], ["emoji", "Emoji Icons"], ["lucide", "Minimal"]] as [SectionIcon, string][]).map(([k, label]) => (
                    <button key={k} className="cr-btn" onClick={() => setD("showIcons", k)}
                      style={{
                        background: design.showIcons === k ? "rgba(251,191,36,.18)" : "rgba(255,255,255,.05)",
                        border: `1px solid ${design.showIcons === k ? "#fbbf24" : "rgba(255,255,255,.1)"}`,
                        color: design.showIcons === k ? "#fbbf24" : "#94a3b8", flex: 1, justifyContent: "center",
                      }}>{label}</button>
                  ))}
                </div>
              </DesignCard>

              {/* Toggles */}
              <DesignCard title="Display Options" icon="⚙">
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { key: "showBorder" as const, label: "Show Resume Border" },
                    { key: "showATSBadge" as const, label: "Show ATS Score Badge" },
                  ].map(({ key, label }) => (
                    <label key={key} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                      <input type="checkbox" checked={design[key] as boolean}
                        onChange={(e) => setD(key, e.target.checked as any)}
                        style={{ accentColor: "#00e5ff", width: 15, height: 15, cursor: "pointer" }} />
                      <span style={{ fontSize: 12, color: "#94a3b8" }}>{label}</span>
                    </label>
                  ))}
                </div>
              </DesignCard>
            </div>

            {/* ── Spacing / Size sliders ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 800, color: "#a78bfa" }}>📐 Spacing & Typography</h3>

              <DesignCard title="Base Font Size" icon="T" value={`${design.fontSize}pt`}>
                <input type="range" className="cr-range" min={9} max={16} step={0.5}
                  value={design.fontSize} onChange={(e) => setD("fontSize", parseFloat(e.target.value))} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#475569" }}>
                  <span>9pt (compact)</span><span>16pt (large)</span>
                </div>
              </DesignCard>

              <DesignCard title="Line Height" icon="↕" value={design.lineHeight.toFixed(1)}>
                <input type="range" className="cr-range" min={1.2} max={2.0} step={0.05}
                  value={design.lineHeight} onChange={(e) => setD("lineHeight", parseFloat(e.target.value))} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#475569" }}>
                  <span>1.2 (tight)</span><span>2.0 (airy)</span>
                </div>
              </DesignCard>

              <DesignCard title="Section Spacing" icon="⇕" value={`${design.sectionSpacing}px`}>
                <input type="range" className="cr-range" min={8} max={48} step={2}
                  value={design.sectionSpacing} onChange={(e) => setD("sectionSpacing", parseInt(e.target.value))} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#475569" }}>
                  <span>8px (dense)</span><span>48px (spacious)</span>
                </div>
              </DesignCard>

              <DesignCard title="Item Spacing" icon="↔" value={`${design.itemSpacing}px`}>
                <input type="range" className="cr-range" min={4} max={24} step={1}
                  value={design.itemSpacing} onChange={(e) => setD("itemSpacing", parseInt(e.target.value))} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#475569" }}>
                  <span>4px</span><span>24px</span>
                </div>
              </DesignCard>

              <DesignCard title="Page Padding" icon="◫" value={`${design.pagePadding}px`}>
                <input type="range" className="cr-range" min={16} max={60} step={2}
                  value={design.pagePadding} onChange={(e) => setD("pagePadding", parseInt(e.target.value))} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#475569" }}>
                  <span>16px (compact)</span><span>60px (comfortable)</span>
                </div>
              </DesignCard>

              {/* Reset button */}
              <button className="cr-btn" onClick={() => { setDesign(DEFAULT_DESIGN); showToast("Design reset to defaults."); }}
                style={{ marginTop: 8, background: "rgba(239,68,68,.12)", border: "1px solid rgba(239,68,68,.3)", color: "#f87171", justifyContent: "center" }}>
                ↺ Reset All Design Settings
              </button>

              {/* Live mini-preview */}
              <div style={{ marginTop: 18 }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 800, color: "#64748b" }}>LIVE PREVIEW</h3>
                <div className="cr-scrollbar" style={{ maxHeight: "50vh", overflowY: "auto", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,.6)" }}>
                  {renderPreview()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Helper sub-components ────────────────────────────────────────────────────

function SectionHeading({
  icon, title, accent, tokens, fs,
}: {
  icon: string; title: string; accent: string;
  tokens: typeof THEME_TOKENS[ThemeKey]; fs: number;
}) {
  return (
    <h3 style={{
      margin: "0 0 8px", fontSize: fs * 0.9, fontWeight: 900,
      textTransform: "uppercase" as const, letterSpacing: "0.08em",
      color: tokens.headingColor,
      borderBottom: tokens.divider, paddingBottom: 3,
      display: "flex", alignItems: "center", gap: 6,
    }}>
      {icon && <span style={{ fontSize: fs }}>{icon}</span>}
      {title}
    </h3>
  );
}

function DesignCard({
  title, icon, value, children,
}: {
  title: string; icon?: string; value?: string; children: React.ReactNode;
}) {
  return (
    <div style={{
      background: "rgba(6,16,32,.85)", border: "1px solid rgba(255,255,255,.1)",
      borderRadius: 13, padding: "14px 16px", marginBottom: 12,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {icon && <span style={{ marginRight: 5 }}>{icon}</span>}{title}
        </span>
        {value && <span style={{ fontSize: 11, fontFamily: "monospace", color: "#00e5ff", fontWeight: 700 }}>{value}</span>}
      </div>
      {children}
    </div>
  );
}
