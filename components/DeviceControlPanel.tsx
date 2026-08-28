"use client";

import { useEffect, useState } from "react";
import {
  Laptop, Terminal, Play, Folder, Cpu, Code2, Globe, Shield, RefreshCw, X,
  ChevronRight, CheckCircle2, Monitor, Layers, HardDrive, Zap, Server
} from "lucide-react";

export default function DeviceControlPanel() {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [launchedApp, setLaunchedApp] = useState("");
  const [sysStatus, setSysStatus] = useState<any>(null);

  const apps = [
    { id: "vscode", name: "VS Code", icon: Code2, desc: "Open current workspace in VS Code" },
    { id: "terminal", name: "Terminal", icon: Terminal, desc: "Open Windows Terminal / PowerShell" },
    { id: "chrome", name: "Chrome", icon: Globe, desc: "Launch web browser" },
    { id: "explorer", name: "File Explorer", icon: Folder, desc: "Explore local folders" },
    { id: "slack", name: "Slack", icon: Cpu, desc: "Open team communication" },
  ];

  useEffect(() => {
    if (open) {
      fetch("/api/os", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "status" }),
      })
        .then((r) => r.json())
        .then((d) => setSysStatus(d))
        .catch(() => {});
    }
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

  const handleRunCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim() || loading) return;

    setLoading(true);
    setOutput("Executing on Windows PC/Laptop daemon...");

    try {
      const res = await fetch("/api/os", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "execute_command", command }),
      });
      const data = await res.json();
      if (data.success) {
        setOutput(data.stdout || data.stderr || "Command executed successfully (0 exit code).");
      } else {
        setOutput(`Error: ${data.error || "Execution failed"}`);
      }
    } catch (e: any) {
      setOutput(`Failed: ${e.message}`);
    } finally {
      setLoading(false);
    }
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
          background: "rgba(6, 16, 32, 0.8)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 229, 255, 0.3)",
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
          e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.3)";
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
            background: "rgba(2, 5, 14, 0.85)",
            backdropFilter: "blur(20px)",
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
              width: "min(720px, 94vw)",
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
                background: "linear-gradient(135deg, rgba(0,229,255,0.1) 0%, transparent 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "rgba(0, 229, 255, 0.15)",
                    border: "1px solid rgba(0, 229, 255, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 16px rgba(0, 229, 255, 0.25)",
                  }}
                >
                  <Laptop size={22} style={{ color: "#00e5ff" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                    PC & Laptop Device Control Bridge
                  </h3>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0, marginTop: 2 }}>
                    Execute local OS actions, launch PC apps & manage daemon processes
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
                  transition: "all 0.2s",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Telemetry Strip */}
              {sysStatus && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
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
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Platform: </span>
                    <span style={{ color: "#00e5ff", fontWeight: 700 }}>{sysStatus.platform} ({sysStatus.arch})</span>
                  </div>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Node Runtime: </span>
                    <span style={{ color: "#10b981", fontWeight: 700 }}>{sysStatus.nodeVersion}</span>
                  </div>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Daemon: </span>
                    <span style={{ color: "#34d399", fontWeight: 700 }}>Online</span>
                  </div>
                </div>
              )}

              {/* Quick App Launcher */}
              <div>
                <span style={{ fontSize: 10.5, letterSpacing: "0.18em", color: "#00e5ff", textTransform: "uppercase", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                  1-Click Application Launcher
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
                          borderRadius: 16,
                          padding: "14px 10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 8,
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
                        <Icon size={22} style={{ color: "#00e5ff" }} />
                        <span style={{ fontSize: 11.5, fontWeight: 700 }}>{app.name}</span>
                      </button>
                    );
                  })}
                </div>
                {launchedApp && (
                  <div style={{ marginTop: 10, fontSize: 12, color: "#34d399", fontWeight: 700 }}>
                    {launchedApp}
                  </div>
                )}
              </div>

              {/* CLI Command Runner */}
              <div>
                <span style={{ fontSize: 10.5, letterSpacing: "0.18em", color: "#00e5ff", textTransform: "uppercase", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                  Run PowerShell / CLI Command
                </span>
                <form onSubmit={handleRunCommand} style={{ display: "flex", gap: 10, marginTop: 10 }}>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="e.g. git status, dir, node -v, ping google.com"
                    style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: 14,
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: 12.5,
                      fontFamily: "var(--font-mono)",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading || !command.trim()}
                    style={{
                      background: command.trim() ? "#00e5ff" : "rgba(255,255,255,0.1)",
                      color: command.trim() ? "#04080f" : "rgba(255,255,255,0.3)",
                      border: "none",
                      borderRadius: 14,
                      padding: "10px 20px",
                      fontWeight: 700,
                      cursor: command.trim() ? "pointer" : "default",
                      fontSize: 12.5,
                      fontFamily: "var(--font-mono)",
                      boxShadow: command.trim() ? "0 0 16px rgba(0, 229, 255, 0.4)" : "none",
                    }}
                  >
                    Execute
                  </button>
                </form>
              </div>

              {/* Terminal Output Window */}
              {output && (
                <div
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(0, 229, 255, 0.25)",
                    borderRadius: 16,
                    padding: 16,
                    maxHeight: 200,
                    overflowY: "auto",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, color: "rgba(255,255,255,0.4)", fontSize: 10, fontFamily: "var(--font-mono)" }}>
                    <Terminal size={12} />
                    <span>TERMINAL OUTPUT</span>
                  </div>
                  <pre style={{ margin: 0, fontSize: 11.5, fontFamily: "var(--font-mono)", color: "#38bdf8", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
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
