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
      {/* Interactive Trigger Buttons Bar */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(24px, 5vw, 40px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          gap: 10,
          alignItems: "center",
          background: "rgba(4, 10, 20, 0.85)",
          padding: "7px 16px",
          borderRadius: 32,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 229, 255, 0.35)",
          boxShadow: "0 0 30px rgba(0, 229, 255, 0.2)",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "96vw",
        }}
      >
        {/* Brand Icon */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 6, borderRight: "1px solid rgba(255,255,255,0.12)" }}>
          <img
            src="/main-logo.png"
            alt="NEXORA"
            style={{ width: 22, height: 22, borderRadius: 6, objectFit: "contain" }}
          />
          <span style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.12em", color: "#ffffff", fontFamily: "var(--font-display)" }}>
            NEXORA
          </span>
        </div>

        {/* 1. Projects Hub */}
        <button
          onClick={() => setActivePanel(activePanel === "workspace" ? null : "workspace")}
          style={{
            background: activePanel === "workspace" ? "rgba(0, 229, 255, 0.2)" : "transparent",
            border: activePanel === "workspace" ? "1px solid rgba(0, 229, 255, 0.5)" : "1px solid transparent",
            color: activePanel === "workspace" ? "#00e5ff" : "rgba(240,237,232,0.9)",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: 700,
            transition: "all 0.2s",
          }}
        >
          <FolderGit2 size={15} /> Projects Hub
        </button>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

        {/* 2. UI Studio (50+ Components) */}
        <button
          onClick={handleOpenUIStudio}
          style={{
            background: "rgba(168, 85, 247, 0.18)",
            border: "1px solid #a855f7",
            color: "#d8b4fe",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: 800,
            boxShadow: "0 0 16px rgba(168, 85, 247, 0.25)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.35)";
            e.currentTarget.style.borderColor = "#c084fc";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.18)";
            e.currentTarget.style.borderColor = "#a855f7";
          }}
        >
          <Sparkles size={15} color="#c084fc" /> UI Studio (50+)
        </button>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

        {/* 3. Career OS 2.0 */}
        <button
          onClick={() => setActivePanel(activePanel === "career" ? null : "career")}
          style={{
            background: activePanel === "career" ? "rgba(0, 229, 255, 0.25)" : "rgba(0, 229, 255, 0.08)",
            border: activePanel === "career" ? "1px solid #00e5ff" : "1px solid rgba(0, 229, 255, 0.35)",
            color: "#00e5ff",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(0,229,255,0.15)",
            transition: "all 0.2s",
          }}
        >
          <Briefcase size={15} /> Career OS 2.0
        </button>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

        {/* 3.5 Resume Studio (8 Canonical Resumes) */}
        <button
          onClick={() => setActivePanel(activePanel === "resume" ? null : "resume")}
          style={{
            background: activePanel === "resume" ? "rgba(16, 185, 129, 0.25)" : "rgba(16, 185, 129, 0.08)",
            border: activePanel === "resume" ? "1px solid #10b981" : "1px solid rgba(16, 185, 129, 0.35)",
            color: "#34d399",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(16,185,129,0.15)",
            transition: "all 0.2s",
          }}
        >
          <FileText size={15} /> Resume Studio
        </button>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

        {/* 4. Content & Video Studio */}
        <button
          onClick={handleOpenContentStudio}
          style={{
            background: "rgba(236, 72, 153, 0.12)",
            border: "1px solid rgba(236, 72, 153, 0.4)",
            color: "#ec4899",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(236, 72, 153, 0.2)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(236, 72, 153, 0.25)";
            e.currentTarget.style.borderColor = "#ec4899";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(236, 72, 153, 0.12)";
            e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.4)";
          }}
        >
          <Video size={15} /> Video & Content Studio
        </button>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

        {/* 5. Client Finder & Agency OS */}
        <button
          onClick={handleOpenAgencyOS}
          style={{
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            color: "#10b981",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: 800,
            boxShadow: "0 0 14px rgba(16, 185, 129, 0.2)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.25)";
            e.currentTarget.style.borderColor = "#10b981";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(16, 185, 129, 0.12)";
            e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
          }}
        >
          <Building2 size={15} /> Client Finder & Agency
        </button>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

        {/* 6. Mission Log */}
        <button
          onClick={() => setActivePanel(activePanel === "mission" ? null : "mission")}
          style={{
            background: activePanel === "mission" ? "rgba(16, 185, 129, 0.15)" : "transparent",
            border: activePanel === "mission" ? "1px solid rgba(16, 185, 129, 0.4)" : "1px solid transparent",
            color: activePanel === "mission" ? "#10b981" : "rgba(240,237,232,0.8)",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.2s",
          }}
        >
          <Target size={15} /> Mission Log
        </button>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

        {/* 7. GitHub */}
        <button
          onClick={() => setActivePanel(activePanel === "github" ? null : "github")}
          style={{
            background: activePanel === "github" ? "rgba(0, 229, 255, 0.15)" : "transparent",
            border: activePanel === "github" ? "1px solid rgba(0, 229, 255, 0.4)" : "1px solid transparent",
            color: activePanel === "github" ? "#00e5ff" : "rgba(240,237,232,0.8)",
            padding: "7px 14px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.2s",
          }}
        >
          <Github size={15} /> GitHub Hub
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
