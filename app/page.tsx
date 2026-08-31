"use client";

import { useState, useEffect } from "react";
import ApexWorld from "@/components/ApexWorld";
import ApexOverviewPanel from "@/components/ApexOverviewPanel";
import PortfolioOverlay from "@/components/PortfolioOverlay";
import ProjectLauncher from "@/components/ProjectLauncher";
import DeviceControlPanel from "@/components/DeviceControlPanel";
import ConnectorsManager from "@/components/ConnectorsManager";
import ContentStudio from "@/components/ContentStudio";
import ClientAgencyOS from "@/components/ClientAgencyOS";
import UIComponentStudio from "@/components/UIComponentStudio";
import CyberResume from "@/components/CyberResume";
import { Terminal, Plug, Github, Sparkles, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [uiStudioOpen, setUiStudioOpen] = useState(false);
  const [resumeStudioOpen, setResumeStudioOpen] = useState(false);

  useEffect(() => {
    const handleOpenUI = () => setUiStudioOpen(true);
    const handleOpenResume = () => setResumeStudioOpen(true);
    window.addEventListener("OPEN_UI_STUDIO", handleOpenUI);
    window.addEventListener("OPEN_RESUME_STUDIO", handleOpenResume);
    return () => {
      window.removeEventListener("OPEN_UI_STUDIO", handleOpenUI);
      window.removeEventListener("OPEN_RESUME_STUDIO", handleOpenResume);
    };
  }, []);

  const handleOpenConsole = () => {
    window.dispatchEvent(new CustomEvent("OPEN_PROJECT_LAUNCHER"));
  };

  const handleOpenConnectors = () => {
    window.dispatchEvent(new CustomEvent("OPEN_CONNECTORS_MANAGER"));
  };

  const handleOpenUIStudio = () => {
    setUiStudioOpen(true);
    window.dispatchEvent(new CustomEvent("OPEN_UI_STUDIO"));
  };

  const handleOpenResumeStudio = () => {
    setResumeStudioOpen(true);
    window.dispatchEvent(new CustomEvent("OPEN_RESUME_STUDIO"));
  };

  return (
    <main
      id="main"
      style={{
        background: "#04080f",
        color: "#f0ede8",
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Top-left overview HUD: live clock + weather + user profile links */}
      <ApexOverviewPanel />

      {/* Top Left Master Brand Logo */}
      <div
        style={{
          position: "fixed",
          top: 14,
          left: "clamp(12px, 1.8vw, 24px)",
          zIndex: 70,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "6px 14px",
          background: "rgba(4, 10, 22, 0.88)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 229, 255, 0.35)",
          borderRadius: 24,
          boxShadow: "0 0 25px rgba(0, 229, 255, 0.2)",
          pointerEvents: "auto",
        }}
      >
        <div style={{ position: "relative", width: 26, height: 26, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
          <img
            src="/main-logo.png"
            alt="NEXORA Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span className="hide-on-mobile" style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.18em", color: "#ffffff", fontFamily: "var(--font-display)" }}>
              NEXORA
            </span>
            <span style={{ fontSize: 9.5, padding: "1px 6px", borderRadius: 6, background: "rgba(0,229,255,0.15)", border: "1px solid #00e5ff", color: "#00e5ff", fontWeight: 800, fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>
              JARVIS AI OS
            </span>
          </div>
        </div>
      </div>

      {/* The world: 3D Particle Orb Core + Orbiting Agent Reasoning Constellation */}
      <section style={{ position: "relative", height: "100vh", minHeight: 620, width: "100%" }}>
        <ApexWorld />
      </section>

      {/* Interactive Personal Portfolio Triggers */}
      <PortfolioOverlay />

      {/* Workspace Project Launcher, Device Bridge & Connectors Modals */}
      <ProjectLauncher />
      <DeviceControlPanel />
      <ConnectorsManager />
      <ContentStudio />
      <ClientAgencyOS />
      <UIComponentStudio isOpen={uiStudioOpen} onClose={() => setUiStudioOpen(false)} />
      {resumeStudioOpen && <CyberResume onClose={() => setResumeStudioOpen(false)} />}

      {/* Top Right Header Controls */}
      <div
        style={{
          position: "fixed",
          top: 14,
          right: "clamp(8px, 1.4vw, 20px)",
          zIndex: 85,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >

        <button
          onClick={handleOpenConsole}
          aria-label="Open Workspace Console"
          title="Open Workspace Console & Project Hub"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#00e5ff",
            border: "1px solid rgba(0, 229, 255, 0.45)",
            borderRadius: 20,
            padding: "6px 12px",
            background: "rgba(0, 229, 255, 0.12)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 16px rgba(0, 229, 255, 0.2)",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0, 229, 255, 0.25)";
            e.currentTarget.style.borderColor = "#00e5ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0, 229, 255, 0.12)";
            e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.45)";
          }}
        >
          <Terminal size={13} />
          <span className="hide-on-mobile">Console</span>
        </button>

        <button
          onClick={handleOpenConnectors}
          aria-label="Open Connectors & Keys"
          title="Open Connectors & API Vault"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#a855f7",
            border: "1px solid rgba(168, 85, 247, 0.45)",
            borderRadius: 20,
            padding: "6px 12px",
            background: "rgba(168, 85, 247, 0.12)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 16px rgba(168, 85, 247, 0.2)",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.25)";
            e.currentTarget.style.borderColor = "#a855f7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.12)";
            e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.45)";
          }}
        >
          <Plug size={13} />
          <span className="hide-on-mobile">Connectors</span>
        </button>

        <a
          href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Repository"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(240, 237, 232, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 20,
            padding: "6px 12px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(8px)",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 5,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
          }}
        >
          <Github size={13} />
          <span className="hide-on-mobile">GitHub</span>
        </a>
      </div>
    </main>
  );
}
