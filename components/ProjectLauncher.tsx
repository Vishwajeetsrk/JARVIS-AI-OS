"use client";

import { useEffect, useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Layers, Terminal, X, ChevronRight, Activity, Cpu, Search, Star, GitFork, Play, Folder, RefreshCw, CheckCircle2, Shield } from "lucide-react";

export interface ProjectData {
  id: string;
  name: string;
  category: string;
  description: string;
  status: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  path?: string;
  stats?: {
    components: number;
    files: number;
    linesOfCode: string;
  };
}

export default function ProjectLauncher() {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState<"projects" | "console">("projects");
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Integrated Workspace Console State
  const [consoleCmd, setConsoleCmd] = useState("git status");
  const [consoleOutput, setConsoleOutput] = useState("JARVIS Workspace Console v4.0.0 Online.\nReady to execute PowerShell and project management workflows.\nType a command or select a quick diagnostic below.");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("OPEN_PROJECT_LAUNCHER", handleOpen);
    return () => window.removeEventListener("OPEN_PROJECT_LAUNCHER", handleOpen);
  }, []);

  const loadProjects = () => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (data.projects) setProjects(data.projects);
      })
      .catch(() => {});
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const categories = [
    { id: "all", label: "All Projects (6)" },
    { id: "core", label: "Core OS" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI & Career" },
    { id: "office", label: "Office Workflows" },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = filter === "all" || p.category === filter;
    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleRunConsoleCommand = async (cmdToRun?: string) => {
    const targetCmd = cmdToRun || consoleCmd;
    if (!targetCmd.trim() || running) return;

    setRunning(true);
    setConsoleOutput((prev) => `${prev}\n\n$ ${targetCmd}\nExecuting...`);

    try {
      const res = await fetch("/api/os", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "execute_command", command: targetCmd }),
      });
      const data = await res.json();
      if (data.success) {
        setConsoleOutput((prev) => `${prev}\n${data.stdout || data.stderr || "[Exit code 0: Done]"}`);
      } else {
        setConsoleOutput((prev) => `${prev}\nError: ${data.error || "Command execution failed"}`);
      }
    } catch (err: any) {
      setConsoleOutput((prev) => `${prev}\nFailed: ${err.message}`);
    } finally {
      setRunning(false);
    }
  };

  const handleLaunchLocalWorkspace = async (projectPath?: string) => {
    if (!projectPath) return;
    try {
      await fetch("/api/os", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "launch_app", appName: "explorer", cwd: projectPath }),
      });
    } catch {}
  };

  return (
    <>
      {/* Floating Launcher Trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Projects Hub"
        style={{
          position: "fixed",
          bottom: 24,
          left: "clamp(16px, 3vw, 40px)",
          zIndex: 40,
          background: "rgba(6, 16, 32, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 229, 255, 0.35)",
          borderRadius: 24,
          padding: "9px 18px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "#ffffff",
          cursor: "pointer",
          boxShadow: "0 0 24px rgba(0, 229, 255, 0.2)",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#00e5ff";
          e.currentTarget.style.boxShadow = "0 0 32px rgba(0, 229, 255, 0.4)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.35)";
          e.currentTarget.style.boxShadow = "0 0 24px rgba(0, 229, 255, 0.2)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00e5ff", boxShadow: "0 0 12px #00e5ff" }} />
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
          Projects Hub ({projects.length || 6})
        </span>
        <ChevronRight size={15} style={{ color: "#00e5ff" }} />
      </button>

      {/* Projects Modal Drawer */}
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
              width: "min(1040px, 96vw)",
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
                background: "linear-gradient(135deg, rgba(0,229,255,0.12) 0%, rgba(5,13,26,0.6) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
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
                  <h2 style={{ fontSize: 19, fontWeight: 800, margin: 0, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                    NEXORA Workspace Projects & Console
                  </h2>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0, marginTop: 2 }}>
                    Verified Real Systems: JARVIS AI OS · Learnify AI · Wardelio · DreamSync · Luxury Laundry · Salesforce
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {/* View Switcher */}
                <div style={{ display: "flex", background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: 3, border: "1px solid rgba(255,255,255,0.1)" }}>
                  <button
                    onClick={() => setActiveView("projects")}
                    style={{
                      background: activeView === "projects" ? "rgba(0,229,255,0.2)" : "transparent",
                      border: "none",
                      borderRadius: 9,
                      padding: "5px 12px",
                      color: activeView === "projects" ? "#00e5ff" : "rgba(255,255,255,0.6)",
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Layers size={13} /> Project Grid
                  </button>
                  <button
                    onClick={() => setActiveView("console")}
                    style={{
                      background: activeView === "console" ? "rgba(0,229,255,0.2)" : "transparent",
                      border: "none",
                      borderRadius: 9,
                      padding: "5px 12px",
                      color: activeView === "console" ? "#00e5ff" : "rgba(255,255,255,0.6)",
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Terminal size={13} /> Workspace Console
                  </button>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* VIEW 1: PROJECTS GRID */}
            {activeView === "projects" && (
              <>
                {/* Filter & Search Controls */}
                <div
                  style={{
                    padding: "12px 28px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(0,0,0,0.3)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setFilter(c.id)}
                        style={{
                          background: filter === c.id ? "rgba(0, 229, 255, 0.2)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${filter === c.id ? "#00e5ff" : "rgba(255,255,255,0.08)"}`,
                          borderRadius: 12,
                          padding: "6px 14px",
                          fontSize: 11.5,
                          fontWeight: 600,
                          color: filter === c.id ? "#00e5ff" : "rgba(255,255,255,0.7)",
                          cursor: "pointer",
                        }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>

                  <div style={{ position: "relative", minWidth: 220 }}>
                    <Search size={14} style={{ position: "absolute", left: 10, top: 9, color: "rgba(255,255,255,0.4)" }} />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Filter real projects..."
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 12,
                        padding: "6px 12px 6px 32px",
                        color: "#ffffff",
                        fontSize: 12,
                        outline: "none",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>

                {/* Project Grid */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: 24,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 310px), 1fr))",
                    gap: 16,
                  }}
                >
                  {filteredProjects.map((p) => (
                    <div
                      key={p.id}
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: 18,
                        padding: 18,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: 14,
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
                          <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "#ffffff", margin: 0, fontFamily: "var(--font-display)" }}>
                            {p.name}
                          </h3>
                          <span
                            style={{
                              fontSize: 9.5,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              padding: "3px 8px",
                              borderRadius: 8,
                              background: p.status === "production" ? "#10b98125" : "#3b82f625",
                              border: `1px solid ${p.status === "production" ? "#10b98166" : "#3b82f666"}`,
                              color: p.status === "production" ? "#34d399" : "#60a5fa",
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {p.status}
                          </span>
                        </div>

                        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, margin: 0 }}>
                          {p.description}
                        </p>
                      </div>

                      <div>
                        {p.stats && (
                          <div
                            style={{
                              display: "flex",
                              gap: 10,
                              fontSize: 10.5,
                              color: "rgba(255,255,255,0.45)",
                              fontFamily: "var(--font-mono)",
                              marginBottom: 10,
                              padding: "5px 8px",
                              background: "rgba(0,0,0,0.3)",
                              borderRadius: 8,
                            }}
                          >
                            <span>{p.stats.components} comps</span>
                            <span>·</span>
                            <span>{p.stats.files} files</span>
                            <span>·</span>
                            <span style={{ color: "#00e5ff", fontWeight: 700 }}>{p.stats.linesOfCode} LOC</span>
                          </div>
                        )}

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: 10,
                                padding: "2px 7px",
                                borderRadius: 6,
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.75)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div style={{ display: "flex", gap: 8 }}>
                          {p.demoUrl && (
                            <a
                              href={p.demoUrl}
                              target={p.demoUrl.startsWith("http") && !p.demoUrl.includes("localhost:3000") ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              style={{
                                flex: 1,
                                background: "rgba(0, 229, 255, 0.15)",
                                border: "1px solid rgba(0, 229, 255, 0.4)",
                                borderRadius: 10,
                                padding: "8px 12px",
                                fontSize: 11.5,
                                fontWeight: 700,
                                color: "#00e5ff",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 6,
                              }}
                            >
                              <span>Open System</span>
                              <ExternalLink size={13} />
                            </a>
                          )}
                          {p.path && (
                            <button
                              onClick={() => handleLaunchLocalWorkspace(p.path)}
                              style={{
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: 10,
                                padding: "8px 12px",
                                color: "#ffffff",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                fontSize: 11,
                              }}
                              title="Open Folder Explorer"
                            >
                              <Folder size={14} />
                            </button>
                          )}
                          {p.repoUrl && (
                            <a
                              href={p.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                borderRadius: 10,
                                padding: "8px 12px",
                                color: "rgba(255,255,255,0.8)",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              title="View GitHub Repository"
                            >
                              <FolderGit2 size={15} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* VIEW 2: INTEGRATED WORKSPACE CONSOLE */}
            {activeView === "console" && (
              <div style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 16, overflowY: "auto" }}>
                {/* Diagnostic shortcuts */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>
                    QUICK DIAGNOSTICS:
                  </span>
                  {[
                    { label: "Git Status", cmd: "git status" },
                    { label: "Git Log", cmd: "git log -n 3 --oneline" },
                    { label: "Node & NPM Version", cmd: "node -v && npm -v" },
                    { label: "Test Network Ping", cmd: "ping 8.8.8.8 -n 2" },
                    { label: "Directory Listing", cmd: "dir" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleRunConsoleCommand(s.cmd)}
                      disabled={running}
                      style={{
                        background: "rgba(0,229,255,0.1)",
                        border: "1px solid rgba(0,229,255,0.3)",
                        borderRadius: 8,
                        padding: "4px 10px",
                        color: "#00e5ff",
                        fontSize: 10.5,
                        fontFamily: "var(--font-mono)",
                        cursor: "pointer",
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* Command input form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRunConsoleCommand();
                  }}
                  style={{ display: "flex", gap: 10 }}
                >
                  <div style={{ position: "relative", flex: 1 }}>
                    <span style={{ position: "absolute", left: 12, top: 10, color: "#00e5ff", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                      $
                    </span>
                    <input
                      type="text"
                      value={consoleCmd}
                      onChange={(e) => setConsoleCmd(e.target.value)}
                      placeholder="Type a PowerShell or shell command to run in D:\Team of Vishwajeet..."
                      style={{
                        width: "100%",
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(0,229,255,0.3)",
                        borderRadius: 12,
                        padding: "10px 14px 10px 28px",
                        color: "#ffffff",
                        fontSize: 12.5,
                        fontFamily: "var(--font-mono)",
                        outline: "none",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={running || !consoleCmd.trim()}
                    style={{
                      background: "#00e5ff",
                      color: "#000000",
                      border: "none",
                      borderRadius: 12,
                      padding: "10px 20px",
                      fontWeight: 800,
                      fontSize: 12.5,
                      fontFamily: "var(--font-mono)",
                      cursor: "pointer",
                    }}
                  >
                    {running ? "Running..." : "Run Command"}
                  </button>
                </form>

                {/* Console Output Screen */}
                <div
                  style={{
                    flex: 1,
                    minHeight: 280,
                    background: "rgba(0,0,0,0.85)",
                    border: "1px solid rgba(0,229,255,0.25)",
                    borderRadius: 14,
                    padding: 16,
                    overflowY: "auto",
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.9)",
                  }}
                >
                  <pre
                    style={{
                      margin: 0,
                      fontSize: 11.5,
                      fontFamily: "Consolas, 'Courier New', monospace",
                      color: "#38bdf8",
                      whiteSpace: "pre-wrap",
                      lineHeight: 1.55,
                    }}
                  >
                    {consoleOutput}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
