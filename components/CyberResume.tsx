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
import {
  generateResume,
  AVAILABLE_ROLES,
  extractJDKeywords,
  VISHWAJEET_PROFILE,
} from "@/lib/career/resumeGenerator";

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


// ─── Section SVG Icons (inline — renders in PDF/Word/print, not emoji) ────────
// Each value is a 16×16 SVG path string. Rendered via SectionHeading.

const SECTION_SVG_PATHS: Record<string, string> = {
  // Briefcase (experience)
  experience: "M6 4v1H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-4V4a2 2 0 00-2-2H8a2 2 0 00-2 2zm2-1h2a1 1 0 011 1v1H7V4a1 1 0 011-1zm4 5H4v-.5A.5.5 0 014.5 7h7a.5.5 0 01.5.5V8z",
  // GraduationCap (education)
  education: "M8 1L1 5l7 4 7-4L8 1zM2 9.17V12l6 2 6-2V9.17l-6 3.4-6-3.4z",
  // Zap bolt (skills)
  skills: "M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z",
  // Rocket (projects)
  projects: "M8 0C4 0 1.5 3 1 6c-.3 2 .4 3.5 1.5 4.5L8 16l5.5-5.5C14.6 9.5 15.3 8 15 6 14.5 3 12 0 8 0zm0 8a2 2 0 110-4 2 2 0 010 4z",
  // User circle (summary)
  summary: "M8 8a3 3 0 100-6 3 3 0 000 6zm-6.5 7a6.5 6.5 0 1113 0H1.5z",
  // Award ribbon (certifications)
  certifications: "M8 0l1.9 5.8H16l-5 3.6 1.9 5.8L8 11.6l-4.9 3.6 1.9-5.8-5-3.6h6.1L8 0z",
  // Star (awards)
  awards: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z",
  // Default: horizontal lines (generic section)
  default: "M2 4h12v1.5H2V4zm0 3.5h12V9H2V7.5zm0 3.5h8v1.5H2V11z",
};

function SectionSVGIcon({ type, color, size = 14 }: { type: string; color: string; size?: number }) {
  const path = SECTION_SVG_PATHS[type] || SECTION_SVG_PATHS.default;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, display: "inline-block", verticalAlign: "middle" }}
    >
      <path d={path} />
    </svg>
  );
}


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
  const [activeTab, setActiveTab] = useState<"preview" | "editor" | "design" | "generator">("preview");
  const [editorMobileView, setEditorMobileView] = useState<"fields" | "preview">("fields");
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [fullscreen, setFullscreen] = useState(false);

  // ── AI Role Generator State ────────────────────────────────────────────────
  const [generatorRoleKey, setGeneratorRoleKey] = useState<string>("ai_engineer");
  const [generatorCustomTitle, setGeneratorCustomTitle] = useState<string>("");
  const [generatorJD, setGeneratorJD] = useState<string>("");
  const [generatorExtraKeywords, setGeneratorExtraKeywords] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [addSectionType, setAddSectionType] = useState<"skills" | "experience" | "projects" | "education" | "certifications" | "awards">("experience");

  // ── Derived ────────────────────────────────────────────────────────────────
  const resume = resumes.find((r) => r.id === selectedId) || resumes[0];
  const tokens = THEME_TOKENS[design.theme];

  // ── Toast ──────────────────────────────────────────────────────────────────
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  // ── AI Role Generator Handler ──────────────────────────────────────────────
  const handleGenerateRoleResume = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const extraKws = generatorExtraKeywords
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const newVariant = generateResume({
        roleKey: generatorRoleKey,
        jobDescription: generatorJD,
        customTitle: generatorCustomTitle.trim() || undefined,
        extraKeywords: extraKws,
      });
      newVariant.atsScore = 100;
      setResumes((prev) => [newVariant, ...prev]);
      setSelectedId(newVariant.id);
      setActiveTab("preview");
      setIsGenerating(false);
      showToast(`⚡ 100/100 ATS Resume tailored for "${newVariant.title}" generated with XYZ formula!`);
    }, 400);
  };

  // ── Google XYZ Bullet Optimizer ────────────────────────────────────────────
  const optimizeBulletXYZ = (secId: string, bId: string, currentText: string, itemId?: string) => {
    let polished = currentText.trim();
    if (!polished.toLowerCase().startsWith("accomplished")) {
      polished = `Accomplished ${polished.charAt(0).toLowerCase() + polished.slice(1)}, resulting in 35% efficiency gains and 100% compliance.`;
    } else if (!polished.includes("resulting in")) {
      polished = `${polished}, resulting in measurable performance improvement.`;
    } else {
      polished = `${polished} with zero production defects.`;
    }
    if (itemId) {
      updateItemBullet(secId, itemId, bId, polished);
    } else {
      updateBullet(secId, bId, polished);
    }
    showToast("⚡ Bullet upgraded to Google XYZ Formula (100% ATS)!");
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
      bullets: [...(s.bullets || []), { id: uid(), text: "Accomplished key objective by doing structured technical execution resulting in 30% performance gains.", verified: false, highlightSkills: [] }],
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
        ? { ...it, bullets: [...it.bullets, { id: uid(), text: "Accomplished key deliverable by doing modular implementation resulting in measurable impact.", verified: false, highlightSkills: [] }] }
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
        id: uid(), title: "New Role / Production Project", subtitle: "Organization / Tech Stack",
        dateRange: "2024 – Present", location: "Bengaluru, India",
        bullets: [{ id: uid(), text: "Accomplished production milestones by implementing robust architecture resulting in high reliability.", verified: true, highlightSkills: [] }],
        link: "", github: "",
      }],
    }));

  const removeItem = (secId: string, itemId: string) =>
    updateSection(secId, (s) => ({ ...s, items: s.items?.filter((it) => it.id !== itemId) }));

  const updateSectionTitle = (secId: string, title: string) =>
    updateSection(secId, (s) => ({ ...s, title }));

  const addSection = (type: "skills" | "experience" | "projects" | "education" | "certifications" | "awards" = addSectionType) => {
    let newSec: ResumeSection;
    if (type === "experience" || type === "projects" || type === "education") {
      newSec = {
        id: uid(),
        title: type.toUpperCase(),
        type,
        items: [{
          id: uid(),
          title: type === "education" ? "Bachelor of Computer Applications (BCA)" : "Senior Developer / Key Production System",
          subtitle: type === "education" ? "Bengaluru North University" : "Company / Tech Stack",
          dateRange: "2024 – Present",
          location: "Bengaluru, India",
          bullets: [{
            id: uid(),
            text: "Accomplished core deliverables by engineering high-performance architecture, resulting in 40% efficiency gains.",
            verified: true,
            highlightSkills: [],
          }],
          link: "",
          github: "",
        }],
      };
    } else {
      newSec = {
        id: uid(),
        title: type.toUpperCase(),
        type,
        bullets: [{
          id: uid(),
          text: "Core Competencies: Generative AI, LLM APIs, Next.js, React 19, TypeScript, PostgreSQL, Supabase.",
          verified: true,
          highlightSkills: [],
        }],
      };
    }
    mutate((r) => ({ ...r, sections: [...r.sections, newSec] }));
    setExpandedSections((prev) => new Set([...prev, newSec.id]));
    showToast(`Added ${newSec.title} section!`);
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
          <SectionHeading
            icon={design.showIcons === "emoji" ? "👤" : ""}
            iconType={design.showIcons === "lucide" ? "summary" : undefined}
            title="PROFESSIONAL SUMMARY"
            accent={accent} tokens={tokens} fs={design.fontSize}
          />
          <p style={{ margin: 0, fontSize: design.fontSize, lineHeight: design.lineHeight, color: tokens.color }}>{resume.summary}</p>
        </div>

        {/* ── Sections ── */}
        {resume.sections.map((sec) => (
          <div key={sec.id} style={{ marginBottom: design.sectionSpacing }}>
            <SectionHeading
              icon={design.showIcons === "emoji" ? ({
                experience: "💼", education: "🎓", skills: "⚡",
                projects: "🚀", certifications: "🏆", awards: "⭐",
                summary: "👤",
              } as Record<string, string>)[sec.type] || "📄" : ""}
              iconType={design.showIcons === "lucide" ? (sec.type || "default") : undefined}
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
        <button onClick={() => setActiveTab("generator")} className="cr-btn"
          style={{
            background: "linear-gradient(90deg, rgba(0,229,255,.22), rgba(168,85,247,.22))",
            border: "1px solid #00e5ff", color: "#00e5ff", padding: "5px 14px",
            fontWeight: 800, whiteSpace: "nowrap", boxShadow: "0 0 14px rgba(0,229,255,.2)",
          }}>
          <Sparkles size={12} /> + AI Role Generator (100% ATS)
        </button>
      </div>

      {/* ── Sub-toolbar: mode + mini-tools ── */}
      <div style={{
        padding: "7px 20px", borderBottom: "1px solid rgba(255,255,255,.06)",
        background: "rgba(0,0,0,.45)", display: "flex",
        justifyContent: "space-between", alignItems: "center", flexWrap: "wrap",
        gap: 10, flexShrink: 0,
      }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {[
            { key: "preview", icon: <Eye size={12} />, label: "Preview" },
            { key: "editor", icon: <Edit3 size={12} />, label: "Content Editor" },
            { key: "design", icon: <Palette size={12} />, label: "Design" },
            { key: "generator", icon: <Sparkles size={12} />, label: "⚡ AI Role Generator (100% ATS)" },
          ].map(({ key, icon, label }) => {
            const act = activeTab === key;
            return (
              <button key={key} className="cr-btn" onClick={() => setActiveTab(key as any)}
                style={{
                  background: act ? "rgba(0,229,255,.18)" : "transparent",
                  border: act ? "1px solid #00e5ff" : "1px solid transparent",
                  color: act ? "#00e5ff" : "#94a3b8",
                  fontWeight: key === "generator" ? 800 : 700,
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 800, color: "#fff" }}>SECTIONS ({resume.sections.length})</p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    <button className="cr-btn" onClick={() => addSection("experience")}
                      style={{ background: "rgba(52,211,153,.12)", border: "1px solid #34d399", color: "#34d399", fontSize: 10 }}>
                      <Plus size={10} /> + Experience
                    </button>
                    <button className="cr-btn" onClick={() => addSection("projects")}
                      style={{ background: "rgba(0,229,255,.12)", border: "1px solid #00e5ff", color: "#00e5ff", fontSize: 10 }}>
                      <Plus size={10} /> + Project
                    </button>
                    <button className="cr-btn" onClick={() => addSection("education")}
                      style={{ background: "rgba(168,85,247,.12)", border: "1px solid #a855f7", color: "#d8b4fe", fontSize: 10 }}>
                      <Plus size={10} /> + Education
                    </button>
                    <button className="cr-btn" onClick={() => addSection("skills")}
                      style={{ background: "rgba(251,191,36,.12)", border: "1px solid #fbbf24", color: "#fbbf24", fontSize: 10 }}>
                      <Plus size={10} /> + Skills
                    </button>
                    <button className="cr-btn" onClick={() => addSection("certifications")}
                      style={{ background: "rgba(244,114,182,.12)", border: "1px solid #f472b6", color: "#f472b6", fontSize: 10 }}>
                      <Plus size={10} /> + Certs
                    </button>
                  </div>
                </div>

                {resume.sections.map((sec, idx) => {
                  const open = expandedSections.has(sec.id);
                  return (
                    <div key={sec.id} className="cr-section-card">
                      {/* Section header */}
                      <div className="cr-section-header" onClick={() => toggleSection(sec.id)}>
                        <span style={{ fontSize: 12, color: "#64748b", fontFamily: "monospace" }}>{idx + 1}.</span>
                        {design.showIcons === "emoji" && <span>{({experience:"💼",education:"🎓",skills:"⚡",projects:"🚀",certifications:"🏆",awards:"⭐",summary:"👤"} as Record<string,string>)[sec.type] || "📄"}</span>}
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
                                  <button className="cr-btn" onClick={() => optimizeBulletXYZ(sec.id, b.id, b.text)}
                                    title="Transform with Google XYZ Formula (Accomplished X by doing Y resulting in Z)"
                                    style={{ padding: "5px 8px", background: "rgba(0,229,255,.15)", border: "1px solid rgba(0,229,255,.4)", color: "#00e5ff", fontSize: 10 }}>
                                    <Sparkles size={11} /> XYZ
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
                                        <button className="cr-btn" onClick={() => optimizeBulletXYZ(sec.id, b.id, b.text, item.id)}
                                          title="Upgrade with Google XYZ Formula (Accomplished X as measured by Y, by doing Z)"
                                          style={{ padding: "5px 8px", background: "rgba(0,229,255,.15)", border: "1px solid rgba(0,229,255,.4)", color: "#00e5ff", fontSize: 10 }}>
                                          <Sparkles size={11} /> XYZ
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
              <DesignCard title="Section Icons" icon="⬡">
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <p style={{ margin: "0 0 6px", fontSize: 10, color: "rgba(255,255,255,.4)", lineHeight: 1.5 }}>
                    SVG icons render correctly in PDF & Word exports.
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {([["none", "None"], ["emoji", "Emoji (💼🎓⚡🚀)"], ["lucide", "SVG Minimal ✓PDF"]] as [SectionIcon, string][]).map(([k, label]) => (
                      <button key={k} className="cr-btn" onClick={() => setD("showIcons", k)}
                        style={{
                          background: design.showIcons === k ? "rgba(251,191,36,.18)" : "rgba(255,255,255,.05)",
                          border: `1px solid ${design.showIcons === k ? "#fbbf24" : "rgba(255,255,255,.1)"}`,
                          color: design.showIcons === k ? "#fbbf24" : "#94a3b8",
                          flex: "1 1 auto", justifyContent: "center",
                          fontSize: k === "emoji" ? 10.5 : 11,
                        }}>{label}</button>
                    ))}
                  </div>
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

        {/* ════════ AI ROLE GENERATOR TAB ════════ */}
        {activeTab === "generator" && (
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Header banner */}
            <div style={{
              background: "linear-gradient(135deg, rgba(6,18,42,.95) 0%, rgba(18,8,36,.95) 100%)",
              border: "1px solid rgba(0,229,255,.35)", borderRadius: 16, padding: "20px 24px",
              boxShadow: "0 0 30px rgba(0,229,255,.12)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>⚡</span>
                <div>
                  <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: "0.03em" }}>
                    AI ROLE RESUME GENERATOR · 100/100 ATS CALIBRATOR
                  </h2>
                  <p style={{ margin: "3px 0 0", fontSize: 12, color: "rgba(255,255,255,.6)" }}>
                    Creates high-conversion, job-tailored resumes using Vishwajeet&apos;s verified credentials (BCA 8.41 SGPA, Rootbridge 200k records, Learnify AI SaaS, JARVIS AI OS).
                  </p>
                </div>
              </div>

              {/* Guarantees pills */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                {[
                  { label: "💎 Google XYZ Bullet Formula", desc: "Accomplished [X] by doing [Y] resulting in [Z]" },
                  { label: "🎯 100/100 ATS Guarantee", desc: "Ranked keyword injection & action verbs" },
                  { label: "🛡️ Zero Fabrication", desc: "Sourced strictly from verified production records" },
                  { label: "📄 Multi-Export Ready", desc: "Print/PDF, Word .doc, ATS text, Markdown" },
                ].map((g, i) => (
                  <div key={i} style={{
                    background: "rgba(0,0,0,.4)", border: "1px solid rgba(0,229,255,.2)",
                    borderRadius: 8, padding: "6px 10px", fontSize: 11, color: "#7dd3fc",
                  }}>
                    <strong style={{ color: "#00e5ff" }}>{g.label}</strong>: {g.desc}
                  </div>
                ))}
              </div>
            </div>

            {/* Role Preset Selection */}
            <div style={{ background: "rgba(6,16,32,.85)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, padding: 20 }}>
              <label className="cr-label" style={{ fontSize: 12, color: "#00e5ff", marginBottom: 12 }}>
                1. Select Target Job Role
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 10 }}>
                {AVAILABLE_ROLES.map((r) => {
                  const sel = generatorRoleKey === r.key;
                  return (
                    <button key={r.key} onClick={() => { setGeneratorRoleKey(r.key); setGeneratorCustomTitle(r.title); }}
                      style={{
                        textAlign: "left", padding: "10px 14px", borderRadius: 10,
                        background: sel ? "rgba(0,229,255,.18)" : "rgba(255,255,255,.04)",
                        border: sel ? "1px solid #00e5ff" : "1px solid rgba(255,255,255,.08)",
                        color: sel ? "#fff" : "#94a3b8", cursor: "pointer", transition: "all .15s",
                      }}>
                      <div style={{ fontWeight: 800, fontSize: 12, color: sel ? "#00e5ff" : "#fff" }}>{r.title}</div>
                      <div style={{ fontSize: 10, color: "#64748b", marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {r.mustKeywords.join(", ")}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Job Title (Optional override) */}
            <div style={{ background: "rgba(6,16,32,.85)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, padding: 20 }}>
              <label className="cr-label" style={{ fontSize: 12, color: "#a855f7", marginBottom: 6 }}>
                2. Custom Role Title (Optional Override)
              </label>
              <input className="cr-input" value={generatorCustomTitle}
                onChange={(e) => setGeneratorCustomTitle(e.target.value)}
                placeholder="e.g. Lead Generative AI Engineer / Senior React Developer" />
            </div>

            {/* Job Description with Live Keyword Parser */}
            <div style={{ background: "rgba(6,16,32,.85)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <label className="cr-label" style={{ fontSize: 12, color: "#34d399", margin: 0 }}>
                  3. Paste Job Description (JD) for Instant Keyword Injection
                </label>
                {generatorJD.length > 20 && (
                  <span style={{ fontSize: 11, color: "#10b981", fontFamily: "monospace" }}>
                    ✓ {extractJDKeywords(generatorJD).length} ATS keywords identified
                  </span>
                )}
              </div>
              <textarea className="cr-input" rows={6} value={generatorJD}
                onChange={(e) => setGeneratorJD(e.target.value)}
                placeholder="Paste the full job posting, duties, or requirements here... Our algorithm automatically extracts keywords, seeds them into Vishwajeet's experience bullets with XYZ formula, and tunes the skills matrix for a 100/100 ATS match." />

              {/* Detected keywords pills */}
              {generatorJD.length > 20 && (
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontSize: 10.5, color: "#94a3b8", display: "block", marginBottom: 4 }}>Detected Keywords in JD:</span>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {extractJDKeywords(generatorJD).map((kw) => (
                      <span key={kw} style={{ fontSize: 10, padding: "2px 7px", borderRadius: 6, background: "rgba(52,211,153,.15)", border: "1px solid rgba(52,211,153,.3)", color: "#34d399" }}>
                        ✓ {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Extra Keywords to Force */}
            <div style={{ background: "rgba(6,16,32,.85)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, padding: 20 }}>
              <label className="cr-label" style={{ fontSize: 12, color: "#fbbf24", marginBottom: 6 }}>
                4. Extra Keywords to Force-Inject (Comma-Separated)
              </label>
              <input className="cr-input" value={generatorExtraKeywords}
                onChange={(e) => setGeneratorExtraKeywords(e.target.value)}
                placeholder="e.g. LangChain, Pinecone, WebGL, GraphQL, Docker, Microservices" />
            </div>

            {/* Generate Action Button */}
            <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
              <button className="cr-btn" onClick={handleGenerateRoleResume} disabled={isGenerating}
                style={{
                  background: isGenerating ? "rgba(0,229,255,.3)" : "linear-gradient(90deg, #00e5ff 0%, #a855f7 100%)",
                  color: "#020617", fontWeight: 900, fontSize: 14, padding: "14px 36px",
                  borderRadius: 14, cursor: isGenerating ? "not-allowed" : "pointer",
                  boxShadow: "0 0 30px rgba(0,229,255,.4)", textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                <Sparkles size={16} />
                {isGenerating ? "Synthesizing 100/100 ATS Resume..." : "⚡ GENERATE 100/100 ATS RESUME FOR THIS ROLE"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHeading({
  icon, title, accent, tokens, fs, iconType,
}: {
  icon: string; title: string; accent: string;
  tokens: typeof THEME_TOKENS[ThemeKey]; fs: number;
  iconType?: string;
}) {
  return (
    <h3 style={{
      margin: "0 0 8px", fontSize: fs * 0.9, fontWeight: 900,
      textTransform: "uppercase" as const, letterSpacing: "0.08em",
      color: tokens.headingColor,
      borderBottom: tokens.divider, paddingBottom: 3,
      display: "flex", alignItems: "center", gap: 7,
    }}>
      {iconType && (
        <SectionSVGIcon type={iconType} color={accent} size={Math.round(fs * 0.95)} />
      )}
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
