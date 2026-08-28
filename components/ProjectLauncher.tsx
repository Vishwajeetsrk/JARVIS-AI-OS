"use client";

import { useEffect, useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Layers, Terminal, X, ChevronRight, Activity, Cpu, Search, Star, GitFork } from "lucide-react";

export interface ProjectData {
  id: string;
  name: string;
  category: string;
  description: string;
  status: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  stats?: {
    components: number;
    files: number;
    linesOfCode: string;
  };
}

export default function ProjectLauncher() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (data.projects) setProjects(data.projects);
      })
      .catch(() => {});
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "core", label: "Core OS" },
    { id: "saas", label: "SaaS Apps" },
    { id: "ai", label: "AI & Voice" },
    { id: "template", label: "Templates" },
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
          background: "rgba(6, 16, 32, 0.8)",
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
              width: "min(960px, 94vw)",
              maxHeight: "88vh",
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
                padding: "22px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(5,13,26,0.5) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "rgba(0, 229, 255, 0.15)",
                    border: "1px solid rgba(0, 229, 255, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)",
                  }}
                >
                  <Layers size={24} style={{ color: "#00e5ff" }} />
                </div>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                    Vishwajeet Workspace Projects
                  </h2>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0, marginTop: 2 }}>
                    Production-Grade AI Operating Systems, Full-Stack SaaS & Autonomous Tools
                  </p>
                </div>
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

            {/* Filter & Search Controls */}
            <div
              style={{
                padding: "14px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(0,0,0,0.3)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              {/* Category Pills */}
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
                      transition: "all 0.15s",
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div style={{ position: "relative", minWidth: 220 }}>
                <Search size={14} style={{ position: "absolute", left: 10, top: 9, color: "rgba(255,255,255,0.4)" }} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter projects..."
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
                padding: 28,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                gap: 18,
              }}
            >
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: 20,
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 16,
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.5)";
                    e.currentTarget.style.background = "rgba(0, 229, 255, 0.04)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", margin: 0, fontFamily: "var(--font-display)" }}>
                        {p.name}
                      </h3>
                      <span
                        style={{
                          fontSize: 9.5,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "3px 9px",
                          borderRadius: 10,
                          background: p.status === "production" ? "#10b98125" : "#3b82f625",
                          border: `1px solid ${p.status === "production" ? "#10b98166" : "#3b82f666"}`,
                          color: p.status === "production" ? "#34d399" : "#60a5fa",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {p.status}
                      </span>
                    </div>

                    <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, margin: 0 }}>
                      {p.description}
                    </p>
                  </div>

                  {/* Stats & Tags */}
                  <div>
                    {p.stats && (
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          fontSize: 11,
                          color: "rgba(255,255,255,0.45)",
                          fontFamily: "var(--font-mono)",
                          marginBottom: 12,
                          padding: "6px 10px",
                          background: "rgba(0,0,0,0.3)",
                          borderRadius: 8,
                        }}
                      >
                        <span>{p.stats.components} components</span>
                        <span>·</span>
                        <span>{p.stats.files} files</span>
                        <span>·</span>
                        <span style={{ color: "#00e5ff", fontWeight: 700 }}>{p.stats.linesOfCode} LOC</span>
                      </div>
                    )}

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 10.5,
                            padding: "3px 9px",
                            borderRadius: 8,
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            color: "rgba(255,255,255,0.75)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div style={{ display: "flex", gap: 10 }}>
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: 1,
                            background: "rgba(0, 229, 255, 0.15)",
                            border: "1px solid rgba(0, 229, 255, 0.4)",
                            borderRadius: 12,
                            padding: "9px 14px",
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#00e5ff",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            boxShadow: "0 0 16px rgba(0, 229, 255, 0.15)",
                            transition: "all 0.2s",
                          }}
                        >
                          <span>Open Workspace</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 12,
                            padding: "9px 14px",
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                          }}
                          title="View Repository"
                        >
                          <FolderGit2 size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
