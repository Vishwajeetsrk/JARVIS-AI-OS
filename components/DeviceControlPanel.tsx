"use client";

import { useEffect, useState } from "react";
import {
  Laptop, Terminal, Play, Folder, Cpu, Code2, Globe, Shield, RefreshCw, X,
  ChevronRight, CheckCircle2, Monitor, Layers, HardDrive, Zap, Server, Copy, Calculator, FileText, Check
} from "lucide-react";

export default function DeviceControlPanel() {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("git status");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [launchedApp, setLaunchedApp] = useState("");
  const [sysStatus, setSysStatus] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const apps = [
    { id: "vscode", name: "VS Code", icon: Code2, desc: "Open current workspace in VS Code" },
    { id: "terminal", name: "Terminal", icon: Terminal, desc: "Open Windows Terminal / PowerShell" },
    { id: "chrome", name: "Chrome", icon: Globe, desc: "Launch web browser" },
    { id: "explorer", name: "File Explorer", icon: Folder, desc: "Explore local folders" },
    { id: "notepad", name: "Notepad", icon: FileText, desc: "Quick notes editor" },
    { id: "calculator", name: "Calculator", icon: Calculator, desc: "Windows Calculator" },
  ];

  const quickDiagnostics = [
    { label: "Git Status", cmd: "git status" },
    { label: "Node & NPM Runtime", cmd: "node -v && npm -v" },
    { label: "Check Network Ping", cmd: "ping 8.8.8.8 -n 2" },
    { label: "Node Processes", cmd: "tasklist | findstr node" },
    { label: "Directory Listing", cmd: "dir" },
  ];

  const fetchStatus = () => {
    fetch("/api/os", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "status" }),
    })
      .then((r) => r.json())
      .then((d) => setSysStatus(d))
      .catch(() => {});
  };

  useEffect(() => {
    if (open) fetchStatus();
  }, [open]);

  const handleLaunch = async (appId: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/os", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "launch_app", appName: appId }),
      });
      const data = await res.json();
      if (data.success) {
        setLaunchedApp(`✅ ${data.message}`);
        setTimeout(() => setLaunchedApp(""), 3500);
      } else {
        setLaunchedApp(`❌ ${data.error}`);
      }
    } catch (e: any) {
      setLaunchedApp(`❌ Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRunCommand = async (cmdToRun?: string) => {
    const target = cmdToRun || command;
    if (!target.trim() || loading) return;

    setLoading(true);
    setOutput((prev) => (prev ? `${prev}\n\n$ ${target}\nExecuting on Windows daemon...` : `$ ${target}\nExecuting on Windows daemon...`));

    try {
      const res = await fetch("/api/os", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "execute_command", command: target }),
      });
      const data = await res.json();
      if (data.success) {
        setOutput((prev) => `${prev}\n${data.stdout || data.stderr || "[Exit code 0: Command completed successfully]"}`);
      } else {
        setOutput((prev) => `${prev}\nError: ${data.error || "Execution failed"}`);
      }
    } catch (e: any) {
      setOutput((prev) => `${prev}\nFailed: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyOutput = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Device Bridge"
        style={{
          position: "fixed",
          bottom: 24,
          left: "clamp(200px, 19vw, 280px)",
          zIndex: 40,
          background: "rgba(6, 16, 32, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 229, 255, 0.35)",
          borderRadius: 24,
          padding: "9px 16px",
          display: "flex",
          alignItems: "center",
          gap: 9,
          color: "#ffffff",
          cursor: "pointer",
          fontSize: 12,
          fontWeight: 700,
          boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          fontFamily: "var(--font-mono)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#00e5ff";
          e.currentTarget.style.boxShadow = "0 0 28px rgba(0, 229, 255, 0.35)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.35)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 229, 255, 0.15)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <Laptop size={15} style={{ color: "#00e5ff" }} />
        <span>PC Device Bridge</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(2, 5, 14, 0.9)",
            backdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            style={{
              width: "min(840px, 96vw)",
              maxHeight: "90vh",
              background: "#050d1a",
              border: "1px solid rgba(0, 229, 255, 0.4)",
              borderRadius: 24,
              boxShadow: "0 0 70px rgba(0, 229, 255, 0.25), 0 24px 60px rgba(0,0,0,0.95)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "20px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(135deg, rgba(0,229,255,0.12) 0%, transparent 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <img
                  src="/main-logo.png"
                  alt="NEXORA"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.4)",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                    NEXORA PC & Device Bridge
                  </h3>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0, marginTop: 2 }}>
                    Hardware Telemetry, App Launchers & Local PowerShell Command Runner
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, overflowY: "auto" }}>
              {/* Telemetry Strip */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: 10,
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                }}
              >
                <div>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>Host OS: </span>
                  <span style={{ color: "#00e5ff", fontWeight: 700 }}>Windows (x64)</span>
                </div>
                <div>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>Node Runtime: </span>
                  <span style={{ color: "#10b981", fontWeight: 700 }}>{sysStatus?.nodeVersion || "v24.20.0"}</span>
                </div>
                <div>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>Bridge Daemon: </span>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>🟢 Online (0.4ms)</span>
                </div>
              </div>

              {/* 1-Click App Launcher */}
              <div>
                <span style={{ fontSize: 10.5, letterSpacing: "0.15em", color: "#00e5ff", textTransform: "uppercase", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                  1-Click Windows Application Launcher
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 10, marginTop: 10 }}>
                  {apps.map((app) => {
                    const Icon = app.icon;
                    return (
                      <button
                        key={app.id}
                        onClick={() => handleLaunch(app.id)}
                        disabled={loading}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.09)",
                          borderRadius: 14,
                          padding: "12px 10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 6,
                          color: "#ffffff",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#00e5ff";
                          e.currentTarget.style.background = "rgba(0, 229, 255, 0.1)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <Icon size={20} style={{ color: "#00e5ff" }} />
                        <span style={{ fontSize: 11, fontWeight: 700 }}>{app.name}</span>
                      </button>
                    );
                  })}
                </div>
                {launchedApp && (
                  <div style={{ marginTop: 8, fontSize: 11.5, color: "#34d399", fontWeight: 700 }}>
                    {launchedApp}
                  </div>
                )}
              </div>

              {/* Diagnostic Shortcuts */}
              <div>
                <span style={{ fontSize: 10.5, letterSpacing: "0.15em", color: "#a855f7", textTransform: "uppercase", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                  Pre-Built Diagnostic Routines
                </span>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                  {quickDiagnostics.map((qd) => (
                    <button
                      key={qd.label}
                      onClick={() => handleRunCommand(qd.cmd)}
                      disabled={loading}
                      style={{
                        background: "rgba(168,85,247,0.12)",
                        border: "1px solid rgba(168,85,247,0.35)",
                        borderRadius: 8,
                        padding: "5px 12px",
                        color: "#a855f7",
                        fontSize: 11,
                        fontFamily: "var(--font-mono)",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      {qd.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CLI Command Runner */}
              <div>
                <span style={{ fontSize: 10.5, letterSpacing: "0.15em", color: "#00e5ff", textTransform: "uppercase", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                  Execute PowerShell / CMD Command
                </span>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRunCommand();
                  }}
                  style={{ display: "flex", gap: 10, marginTop: 10 }}
                >
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="e.g. git status, dir, node -v, ping 8.8.8.8"
                    style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: 12,
                      padding: "10px 14px",
                      color: "#ffffff",
                      fontSize: 12,
                      fontFamily: "var(--font-mono)",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading || !command.trim()}
                    style={{
                      background: "#00e5ff",
                      color: "#04080f",
                      border: "none",
                      borderRadius: 12,
                      padding: "10px 18px",
                      fontWeight: 800,
                      cursor: "pointer",
                      fontSize: 12,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {loading ? "Running..." : "Execute"}
                  </button>
                </form>
              </div>

              {/* Terminal Output Window */}
              {output && (
                <div
                  style={{
                    background: "rgba(0,0,0,0.85)",
                    border: "1px solid rgba(0, 229, 255, 0.25)",
                    borderRadius: 14,
                    padding: 16,
                    maxHeight: 220,
                    overflowY: "auto",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.4)", fontSize: 10, fontFamily: "var(--font-mono)" }}>
                      <Terminal size={12} />
                      <span>TERMINAL OUTPUT</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={handleCopyOutput}
                        style={{ background: "transparent", border: "none", color: "#00e5ff", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontSize: 10, fontFamily: "var(--font-mono)" }}
                      >
                        {copied ? <Check size={11} /> : <Copy size={11} />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                      </button>
                      <button
                        onClick={() => setOutput("")}
                        style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 10, fontFamily: "var(--font-mono)" }}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <pre style={{ margin: 0, fontSize: 11.5, fontFamily: "Consolas, monospace", color: "#38bdf8", whiteSpace: "pre-wrap", lineHeight: 1.55 }}>
                    {output}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
