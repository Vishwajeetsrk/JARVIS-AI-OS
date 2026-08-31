"use client";

import ApexWorld from "@/components/ApexWorld";
import ApexOverviewPanel from "@/components/ApexOverviewPanel";
import PortfolioOverlay from "@/components/PortfolioOverlay";
import ProjectLauncher from "@/components/ProjectLauncher";
import DeviceControlPanel from "@/components/DeviceControlPanel";
import ConnectorsManager from "@/components/ConnectorsManager";
import ContentStudio from "@/components/ContentStudio";
import ClientAgencyOS from "@/components/ClientAgencyOS";
import UIComponentStudio from "@/components/UIComponentStudio";
import { Terminal, Plug, Github, Sparkles, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const handleOpenConsole = () => {
    window.dispatchEvent(new CustomEvent("OPEN_PROJECT_LAUNCHER"));
  };

  const handleOpenConnectors = () => {
    window.dispatchEvent(new CustomEvent("OPEN_CONNECTORS_MANAGER"));
  };

  const handleOpenUIStudio = () => {
    window.dispatchEvent(new CustomEvent("OPEN_UI_STUDIO"));
  };

  const handleOpenResumeStudio = () => {
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

      {/* Top Center Master Brand Logo */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "6px 18px",
          background: "rgba(4, 10, 22, 0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 229, 255, 0.25)",
          borderRadius: 24,
          boxShadow: "0 0 25px rgba(0, 229, 255, 0.12)",
          pointerEvents: "auto",
        }}
      >
        <div style={{ position: "relative", width: 28, height: 28, borderRadius: 8, overflow: "hidden" }}>
          <img
            src="/main-logo.png"
            alt="NEXORA Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.18em", color: "#ffffff", fontFamily: "var(--font-display)" }}>
              NEXORA
            </span>
            <span style={{ fontSize: 9.5, padding: "1px 6px", borderRadius: 6, background: "rgba(0,229,255,0.15)", border: "1px solid #00e5ff", color: "#00e5ff", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
              JARVIS AI OS v4.0
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
      <UIComponentStudio />

      {/* Top Right Header Controls */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: "clamp(16px, 3vw, 40px)",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <button
          onClick={handleOpenUIStudio}
          aria-label="Open UI Studio"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#c084fc",
            border: "1px solid rgba(192, 132, 252, 0.45)",
            borderRadius: 20,
            padding: "7px 16px",
            background: "rgba(168, 85, 247, 0.15)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 16px rgba(168, 85, 247, 0.25)",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.35)";
            e.currentTarget.style.borderColor = "#c084fc";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.15)";
            e.currentTarget.style.borderColor = "rgba(192, 132, 252, 0.45)";
          }}
        >
          <Sparkles size={13} color="#c084fc" />
          <span>UI Studio</span>
        </button>

        <button
          onClick={handleOpenResumeStudio}
          aria-label="Open Resume Studio"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#34d399",
            border: "1px solid rgba(16, 185, 129, 0.45)",
            borderRadius: 20,
            padding: "7px 16px",
            background: "rgba(16, 185, 129, 0.15)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 16px rgba(16, 185, 129, 0.25)",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(16, 185, 129, 0.35)";
            e.currentTarget.style.borderColor = "#34d399";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(16, 185, 129, 0.15)";
            e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.45)";
          }}
        >
          <FileText size={13} color="#34d399" />
          <span>Resume Studio</span>
        </button>

        <button
          onClick={handleOpenConsole}
          aria-label="Open Workspace Console"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#00e5ff",
            border: "1px solid rgba(0, 229, 255, 0.45)",
            borderRadius: 20,
            padding: "7px 16px",
            background: "rgba(0, 229, 255, 0.12)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 16px rgba(0, 229, 255, 0.2)",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
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
          <span>Workspace Console</span>
        </button>

        <button
          onClick={handleOpenConnectors}
          aria-label="Open Connectors & Keys"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#a855f7",
            border: "1px solid rgba(168, 85, 247, 0.45)",
            borderRadius: 20,
            padding: "7px 14px",
            background: "rgba(168, 85, 247, 0.12)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 16px rgba(168, 85, 247, 0.2)",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
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
          <span>Connectors</span>
        </button>

        <a
          href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(240, 237, 232, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 20,
            padding: "7px 14px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(8px)",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            e.currentTarget.style.color = "rgba(240, 237, 232, 0.8)";
          }}
        >
          <Github size={13} />
          <span>GitHub</span>
        </a>
      </div>
    </main>
  );
}
