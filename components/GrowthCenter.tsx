"use client";

import { useState } from "react";
import { Briefcase, BookOpen, Cpu, X, CheckCircle, Activity, Award, ExternalLink, Zap } from "lucide-react";

export default function GrowthCenter({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<"jobs" | "courses" | "diagnostics">("courses");

  // Curated list based on Vishwajeet's Resume (React, Next.js, Supabase, WebGL, AI Agents)
  const COURSES = [
    {
      title: "Next.js 15 Full Course 2026 (Hindi)",
      provider: "YouTube - Free",
      tags: ["Next.js", "Hindi", "Video"],
      desc: "Complete project-based Next.js 15 App Router tutorial explained in Hindi.",
      url: "https://www.youtube.com/results?search_query=Next.js+15+full+course+hindi"
    },
    {
      title: "Build AI Agents with LangChain & OpenAI (English)",
      provider: "YouTube - Free",
      tags: ["AI Agents", "English", "Video"],
      desc: "Learn to build autonomous AI agents from scratch using modern frameworks.",
      url: "https://www.youtube.com/results?search_query=build+ai+agents+full+course+2026"
    },
    {
      title: "React & Three.js / WebGL Masterclass (Hindi)",
      provider: "YouTube - Free",
      tags: ["React", "WebGL", "Hindi"],
      desc: "Master 3D web development, perfect for upgrading the APEX-UI core.",
      url: "https://www.youtube.com/results?search_query=react+three+fiber+hindi"
    },
    {
      title: "Supabase Vector Database Crash Course (English)",
      provider: "YouTube - Free",
      tags: ["Supabase", "pgvector", "English"],
      desc: "Store and query AI embeddings using Supabase for your RAG applications.",
      url: "https://www.youtube.com/results?search_query=supabase+vector+database+crash+course"
    }
  ];

  const JOBS = [
    {
      role: "AI Software Engineer",
      company: "Wellfound (Startups)",
      match: "98% Match",
      desc: "Ideal for your experience building AI-powered SaaS and automation workflows.",
      url: "https://wellfound.com/jobs?role=Software%20Engineer&keywords=AI%20Agent"
    },
    {
      role: "Frontend Architect (React/WebGL)",
      company: "LinkedIn Remote",
      match: "95% Match",
      desc: "Leverages your skills in 3D WebGL (APEX-UI) and modern glassmorphic design systems.",
      url: "https://www.linkedin.com/jobs/search/?keywords=Frontend%20Architect%20React%20WebGL&f_WT=2"
    },
    {
      role: "Full Stack Developer (Next.js/Supabase)",
      company: "YCombinator Startups",
      match: "92% Match",
      desc: "Perfect fit for your stack: React 19, Next.js, Tailwind, and Supabase.",
      url: "https://www.workatastartup.com/companies?query=Next.js%20Supabase"
    }
  ];

  const DIAGNOSTICS = [
    { id: "perf", label: "APEX-UI Render Profiling", status: "ok", msg: "60fps stable on WebGL particle core." },
    { id: "sec", label: "API Token Security", status: "warn", msg: "Ensure .env variables are omitted from git." },
    { id: "pkg", label: "Dependency Audit", status: "warn", msg: "3 high severity vulnerabilities found in upstream npm packages. Run `npm audit fix`." },
    { id: "ai", label: "Model Optimization", status: "ok", msg: "Groq LLaMA 3.3 latency < 400ms." }
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "clamp(340px, 80vw, 900px)",
        maxHeight: "80vh",
        background: "rgba(4, 10, 20, 0.9)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(139, 92, 246, 0.3)", // Purple accent for Growth
        borderRadius: 24,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(139, 92, 246, 0.15)",
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        color: "#f0ede8"
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, rgba(139, 92, 246, 0.1), transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ padding: 8, background: "rgba(139, 92, 246, 0.2)", borderRadius: 12, display: "flex" }}>
            <Zap size={20} color="#8b5cf6" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 600 }}>Growth & Upgrades Engine</h2>
            <div style={{ fontSize: "0.75rem", color: "rgba(139, 92, 246, 0.7)", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
              JARVIS Proactive Capabilities
            </div>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(240,237,232,0.5)",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        
        {/* Sidebar */}
        <div style={{ width: 220, borderRight: "1px solid rgba(255,255,255,0.05)", padding: 16, display: "flex", flexDirection: "column", gap: 8, background: "rgba(0,0,0,0.2)" }}>
          <button
            onClick={() => setActiveTab("courses")}
            style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
              background: activeTab === "courses" ? "rgba(139, 92, 246, 0.1)" : "transparent",
              border: activeTab === "courses" ? "1px solid rgba(139, 92, 246, 0.3)" : "1px solid transparent",
              borderRadius: 12,
              color: activeTab === "courses" ? "#8b5cf6" : "rgba(240,237,232,0.6)",
              cursor: "pointer", textAlign: "left", transition: "all 0.2s"
            }}
          >
            <BookOpen size={18} /> <span style={{ fontWeight: 500 }}>Learning Path</span>
          </button>
          
          <button
            onClick={() => setActiveTab("jobs")}
            style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
              background: activeTab === "jobs" ? "rgba(139, 92, 246, 0.1)" : "transparent",
              border: activeTab === "jobs" ? "1px solid rgba(139, 92, 246, 0.3)" : "1px solid transparent",
              borderRadius: 12,
              color: activeTab === "jobs" ? "#8b5cf6" : "rgba(240,237,232,0.6)",
              cursor: "pointer", textAlign: "left", transition: "all 0.2s"
            }}
          >
            <Briefcase size={18} /> <span style={{ fontWeight: 500 }}>Career Feed</span>
          </button>

          <button
            onClick={() => setActiveTab("diagnostics")}
            style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
              background: activeTab === "diagnostics" ? "rgba(139, 92, 246, 0.1)" : "transparent",
              border: activeTab === "diagnostics" ? "1px solid rgba(139, 92, 246, 0.3)" : "1px solid transparent",
              borderRadius: 12,
              color: activeTab === "diagnostics" ? "#8b5cf6" : "rgba(240,237,232,0.6)",
              cursor: "pointer", textAlign: "left", transition: "all 0.2s"
            }}
          >
            <Cpu size={18} /> <span style={{ fontWeight: 500 }}>Diagnostics</span>
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 32, overflowY: "auto" }}>
          
          {activeTab === "courses" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>Recommended Courses</h3>
              <p style={{ color: "rgba(240,237,232,0.7)", marginBottom: 24 }}>Curated resources for 2026 based on your skills in Next.js, Supabase, and AI Agents.</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {COURSES.map((c, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#8b5cf6" }}>{c.title}</h4>
                      <div style={{ fontSize: "0.85rem", color: "rgba(240,237,232,0.5)" }}>{c.provider}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
                      {c.tags.map(t => (
                        <span key={t} style={{ background: "rgba(139, 92, 246, 0.1)", color: "#8b5cf6", padding: "4px 8px", borderRadius: 8, fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <p style={{ margin: "0 0 16px 0", color: "rgba(240,237,232,0.8)", fontSize: "0.95rem", lineHeight: 1.5 }}>{c.desc}</p>
                    <a href={c.url} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#8b5cf6", textDecoration: "none", fontSize: "0.9rem" }}>
                      Enroll Free <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "jobs" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>AI & Full Stack Opportunities</h3>
              <p style={{ color: "rgba(240,237,232,0.7)", marginBottom: 24 }}>High-match career paths extracted automatically from your Cyber Resume data.</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {JOBS.map((j, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(139, 92, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Briefcase size={24} color="#8b5cf6" />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#fff" }}>{j.role}</h4>
                      <div style={{ color: "#8b5cf6", fontSize: "0.9rem", margin: "4px 0 8px 0" }}>{j.company}</div>
                      <p style={{ margin: "0 0 12px 0", color: "rgba(240,237,232,0.7)", fontSize: "0.9rem", lineHeight: 1.5 }}>{j.desc}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "4px 10px", borderRadius: 12, fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
                          <Award size={14} /> {j.match}
                        </span>
                        <a href={j.url} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "rgba(139, 92, 246, 0.15)", border: "1px solid rgba(139, 92, 246, 0.4)", borderRadius: 12, color: "#8b5cf6", fontSize: "0.8rem", textDecoration: "none", transition: "all 0.2s" }}>
                          View Matches <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "diagnostics" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>System Diagnostics</h3>
              <p style={{ color: "rgba(240,237,232,0.7)", marginBottom: 24 }}>JARVIS automated audit of APEX-UI platform health and required upgrades.</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {DIAGNOSTICS.map(d => (
                  <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12 }}>
                    {d.status === "ok" ? <CheckCircle color="#10b981" size={20} /> : <Activity color="#f5a623" size={20} />}
                    <div style={{ flex: 1 }}>
                      <div style={{ color: "#fff", fontWeight: 500 }}>{d.label}</div>
                      <div style={{ color: "rgba(240,237,232,0.6)", fontSize: "0.9rem", marginTop: 4 }}>{d.msg}</div>
                    </div>
                    <button style={{ padding: "6px 12px", background: "transparent", border: `1px solid ${d.status === "ok" ? "#10b981" : "#f5a623"}`, color: d.status === "ok" ? "#10b981" : "#f5a623", borderRadius: 8, fontSize: "0.8rem", cursor: "pointer" }}>
                      {d.status === "ok" ? "Verified" : "Fix Issue"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
