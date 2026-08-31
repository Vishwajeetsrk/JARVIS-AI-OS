"use client";

import { useState, useEffect } from "react";
import { User, Target, Github, FolderGit2, Briefcase, Video, Building2, Sparkles, Layers, FileText } from "lucide-react";
import CareerOS from "./CareerOS";
import CyberResume from "./CyberResume";
import MissionLog from "./MissionLog";
import GithubProjectsPanel from "./GithubProjectsPanel";
import GrowthCenter from "./GrowthCenter";
import WorkspaceProjectsPanel from "./WorkspaceProjectsPanel";

export default function PortfolioOverlay() {
  const [activePanel, setActivePanel] = useState<"career" | "resume" | "mission" | "github" | "growth" | "workspace" | null>(null);

  useEffect(() => {
    const handleOpenResume = () => setActivePanel("resume");
    const handleOpenCareer = () => setActivePanel("career");
    window.addEventListener("OPEN_RESUME_STUDIO", handleOpenResume);
    window.addEventListener("OPEN_CYBER_RESUME", handleOpenResume);
    window.addEventListener("OPEN_CAREER_OS", handleOpenCareer);
    return () => {
      window.removeEventListener("OPEN_RESUME_STUDIO", handleOpenResume);
      window.removeEventListener("OPEN_CYBER_RESUME", handleOpenResume);
      window.removeEventListener("OPEN_CAREER_OS", handleOpenCareer);
    };
  }, []);

  const handleOpenUIStudio = () => {
    window.dispatchEvent(new CustomEvent("OPEN_UI_STUDIO"));
  };

  const handleOpenContentStudio = () => {
    window.dispatchEvent(new CustomEvent("OPEN_CONTENT_STUDIO"));
  };

  const handleOpenAgencyOS = () => {
    window.dispatchEvent(new CustomEvent("OPEN_AGENCY_OS"));
  };

  return (
    <>
      {/* Sleek Cyber Right Sidebar Dock */}
      <div
        id="right-sidebar-dock"
        style={{
          position: "fixed",
          right: "clamp(8px, 1.4vw, 20px)",
          top: "54%",
          transform: "translateY(-50%)",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "stretch",
          background: "rgba(4, 10, 20, 0.9)",
          padding: "10px 8px",
          borderRadius: 22,
          backdropFilter: "blur(28px)",
          border: "1px solid rgba(0, 229, 255, 0.35)",
          boxShadow: "0 0 35px rgba(0, 229, 255, 0.2), 0 20px 50px rgba(0,0,0,0.85)",
          maxWidth: "220px",
          maxHeight: "calc(100dvh - 110px)",
          overflowY: "auto",
        }}
        className="no-scrollbar"
      >
        {/* Sidebar Brand Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "4px 8px 8px 8px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            marginBottom: 2,
          }}
        >
          <img
            src="/main-logo.png"
            alt="NEXORA"
            style={{ width: 18, height: 18, borderRadius: 5, objectFit: "contain" }}
          />
          <span style={{ fontSize: "0.68rem", fontWeight: 900, letterSpacing: "0.14em", color: "#00e5ff", fontFamily: "var(--font-display)" }}>
            NEXORA HUB
          </span>
        </div>

        {/* 1. Projects Hub */}
        <button
          onClick={() => setActivePanel(activePanel === "workspace" ? null : "workspace")}
          style={{
            background: activePanel === "workspace" ? "rgba(0, 229, 255, 0.25)" : "transparent",
            border: activePanel === "workspace" ? "1px solid #00e5ff" : "1px solid transparent",
            color: activePanel === "workspace" ? "#00e5ff" : "rgba(240,237,232,0.9)",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontWeight: 700,
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            if (activePanel !== "workspace") {
              e.currentTarget.style.background = "rgba(0, 229, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.3)";
            }
          }}
          onMouseLeave={(e) => {
            if (activePanel !== "workspace") {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "transparent";
            }
          }}
          title="Projects Hub & Workspace"
        >
          <FolderGit2 size={15} color="#00e5ff" />
          <span style={{ whiteSpace: "nowrap" }}>Projects Hub</span>
        </button>

        {/* 2. UI Studio (50+ Components) */}
        <button
          onClick={handleOpenUIStudio}
          style={{
            background: "rgba(168, 85, 247, 0.16)",
            border: "1px solid rgba(168, 85, 247, 0.45)",
            color: "#d8b4fe",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(168, 85, 247, 0.2)",
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.3)";
            e.currentTarget.style.borderColor = "#c084fc";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.16)";
            e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.45)";
          }}
          title="Open UI Component Studio (50+ Pro Components)"
        >
          <Sparkles size={15} color="#c084fc" />
          <span style={{ whiteSpace: "nowrap" }}>UI Studio (50+)</span>
        </button>

        {/* 3. Career OS 2.0 */}
        <button
          onClick={() => setActivePanel(activePanel === "career" ? null : "career")}
          style={{
            background: activePanel === "career" ? "rgba(0, 229, 255, 0.25)" : "rgba(0, 229, 255, 0.08)",
            border: activePanel === "career" ? "1px solid #00e5ff" : "1px solid rgba(0, 229, 255, 0.35)",
            color: "#00e5ff",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(0,229,255,0.15)",
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0, 229, 255, 0.22)";
            e.currentTarget.style.borderColor = "#00e5ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = activePanel === "career" ? "rgba(0, 229, 255, 0.25)" : "rgba(0, 229, 255, 0.08)";
            e.currentTarget.style.borderColor = activePanel === "career" ? "#00e5ff" : "rgba(0, 229, 255, 0.35)";
          }}
          title="Career OS 2.0 & Job Intelligence"
        >
          <Briefcase size={15} color="#00e5ff" />
          <span style={{ whiteSpace: "nowrap" }}>Career OS 2.0</span>
        </button>

        {/* 4. Resume Studio (8 Canonical Resumes) */}
        <button
          onClick={() => setActivePanel(activePanel === "resume" ? null : "resume")}
          style={{
            background: activePanel === "resume" ? "rgba(16, 185, 129, 0.25)" : "rgba(16, 185, 129, 0.08)",
            border: activePanel === "resume" ? "1px solid #10b981" : "1px solid rgba(16, 185, 129, 0.35)",
            color: "#34d399",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(16,185,129,0.15)",
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(16, 185, 129, 0.22)";
            e.currentTarget.style.borderColor = "#10b981";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = activePanel === "resume" ? "rgba(16, 185, 129, 0.25)" : "rgba(16, 185, 129, 0.08)";
            e.currentTarget.style.borderColor = activePanel === "resume" ? "#10b981" : "rgba(16, 185, 129, 0.35)";
          }}
          title="Resume Studio (8 Canonical Variations)"
        >
          <FileText size={15} color="#34d399" />
          <span style={{ whiteSpace: "nowrap" }}>Resume Studio</span>
        </button>

        {/* 5. Video & Content Studio */}
        <button
          onClick={handleOpenContentStudio}
          style={{
            background: "rgba(236, 72, 153, 0.12)",
            border: "1px solid rgba(236, 72, 153, 0.4)",
            color: "#ec4899",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(236, 72, 153, 0.2)",
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(236, 72, 153, 0.25)";
            e.currentTarget.style.borderColor = "#ec4899";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(236, 72, 153, 0.12)";
            e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.4)";
          }}
          title="Video & Social Content Studio"
        >
          <Video size={15} color="#ec4899" />
          <span style={{ whiteSpace: "nowrap" }}>Video Studio</span>
        </button>

        {/* 6. Client Finder & Agency OS */}
        <button
          onClick={handleOpenAgencyOS}
          style={{
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            color: "#10b981",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(16, 185, 129, 0.2)",
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(16, 185, 129, 0.25)";
            e.currentTarget.style.borderColor = "#10b981";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(16, 185, 129, 0.12)";
            e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
          }}
          title="Client Finder & Freelance Agency OS"
        >
          <Building2 size={15} color="#10b981" />
          <span style={{ whiteSpace: "nowrap" }}>Agency OS</span>
        </button>

        {/* 7. Mission Log */}
        <button
          onClick={() => setActivePanel(activePanel === "mission" ? null : "mission")}
          style={{
            background: activePanel === "mission" ? "rgba(16, 185, 129, 0.2)" : "transparent",
            border: activePanel === "mission" ? "1px solid rgba(16, 185, 129, 0.5)" : "1px solid transparent",
            color: activePanel === "mission" ? "#10b981" : "rgba(240,237,232,0.85)",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            if (activePanel !== "mission") {
              e.currentTarget.style.background = "rgba(16, 185, 129, 0.1)";
              e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)";
            }
          }}
          onMouseLeave={(e) => {
            if (activePanel !== "mission") {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "transparent";
            }
          }}
          title="Mission Log & Agent Tasks"
        >
          <Target size={15} color="#10b981" />
          <span style={{ whiteSpace: "nowrap" }}>Mission Log</span>
        </button>

        {/* 8. GitHub */}
        <button
          onClick={() => setActivePanel(activePanel === "github" ? null : "github")}
          style={{
            background: activePanel === "github" ? "rgba(0, 229, 255, 0.2)" : "transparent",
            border: activePanel === "github" ? "1px solid rgba(0, 229, 255, 0.5)" : "1px solid transparent",
            color: activePanel === "github" ? "#00e5ff" : "rgba(240,237,232,0.85)",
            padding: "7px 11px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            transition: "all 0.2s",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            if (activePanel !== "github") {
              e.currentTarget.style.background = "rgba(0, 229, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.3)";
            }
          }}
          onMouseLeave={(e) => {
            if (activePanel !== "github") {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "transparent";
            }
          }}
          title="GitHub Projects & Repos"
        >
          <Github size={15} color="#00e5ff" />
          <span style={{ whiteSpace: "nowrap" }}>GitHub Hub</span>
        </button>
      </div>

      {/* Render Active Panels */}
      {activePanel === "workspace" && <WorkspaceProjectsPanel onClose={() => setActivePanel(null)} />}
      {activePanel === "career" && <CareerOS onClose={() => setActivePanel(null)} />}
      {activePanel === "resume" && <CyberResume onClose={() => setActivePanel(null)} />}
      {activePanel === "mission" && <MissionLog onClose={() => setActivePanel(null)} />}
      {activePanel === "github" && <GithubProjectsPanel onClose={() => setActivePanel(null)} />}
      {activePanel === "growth" && <GrowthCenter onClose={() => setActivePanel(null)} />}
    </>
  );
}
