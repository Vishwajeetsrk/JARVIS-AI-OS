"use client";

import { useState } from "react";
import { User, Target, Github } from "lucide-react";
import CyberResume from "./CyberResume";
import MissionLog from "./MissionLog";
import GithubProjectsPanel from "./GithubProjectsPanel";
import GrowthCenter from "./GrowthCenter";

export default function PortfolioOverlay() {
  const [activePanel, setActivePanel] = useState<"resume" | "mission" | "github" | "growth" | null>(null);

  return (
    <>
      {/* Interactive Trigger Buttons */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(24px, 5vw, 40px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          gap: 16,
          alignItems: "center",
          background: "rgba(4, 10, 20, 0.6)",
          padding: "8px 16px",
          borderRadius: 32,
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0, 229, 255, 0.2)",
          boxShadow: "0 0 20px rgba(0, 229, 255, 0.1)"
        }}
      >
        <button
          onClick={() => setActivePanel(activePanel === "resume" ? null : "resume")}
          style={{
            background: activePanel === "resume" ? "rgba(0, 229, 255, 0.15)" : "transparent",
            border: activePanel === "resume" ? "1px solid rgba(0, 229, 255, 0.4)" : "1px solid transparent",
            color: activePanel === "resume" ? "#00e5ff" : "rgba(240,237,232,0.8)",
            padding: "8px 16px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.2s"
          }}
        >
          <User size={16} /> Resume
        </button>

        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />

        <button
          onClick={() => setActivePanel(activePanel === "mission" ? null : "mission")}
          style={{
            background: activePanel === "mission" ? "rgba(16, 185, 129, 0.15)" : "transparent",
            border: activePanel === "mission" ? "1px solid rgba(16, 185, 129, 0.4)" : "1px solid transparent",
            color: activePanel === "mission" ? "#10b981" : "rgba(240,237,232,0.8)",
            padding: "8px 16px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.2s"
          }}
        >
          <Target size={16} /> Mission Log
        </button>

        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />

        <button
          onClick={() => setActivePanel(activePanel === "github" ? null : "github")}
          style={{
            background: activePanel === "github" ? "rgba(0, 229, 255, 0.15)" : "transparent",
            border: activePanel === "github" ? "1px solid rgba(0, 229, 255, 0.4)" : "1px solid transparent",
            color: activePanel === "github" ? "#00e5ff" : "rgba(240,237,232,0.8)",
            padding: "8px 16px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.2s"
          }}
        >
          <Github size={16} /> GitHub Hub
        </button>

        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />

        <button
          onClick={() => setActivePanel(activePanel === "growth" ? null : "growth")}
          style={{
            background: activePanel === "growth" ? "rgba(139, 92, 246, 0.15)" : "transparent",
            border: activePanel === "growth" ? "1px solid rgba(139, 92, 246, 0.4)" : "1px solid transparent",
            color: activePanel === "growth" ? "#8b5cf6" : "rgba(240,237,232,0.8)",
            padding: "8px 16px",
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.2s"
          }}
        >
          <Target size={16} /> Upgrades
        </button>
      </div>

      {/* Render Active Panel */}
      {activePanel === "resume" && <CyberResume onClose={() => setActivePanel(null)} />}
      {activePanel === "mission" && <MissionLog onClose={() => setActivePanel(null)} />}
      {activePanel === "github" && <GithubProjectsPanel onClose={() => setActivePanel(null)} />}
      {activePanel === "growth" && <GrowthCenter onClose={() => setActivePanel(null)} />}
    </>
  );
}
