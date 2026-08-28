"use client";

import { useState } from "react";
import { User, Briefcase, Code, Terminal, Trophy, Zap, MapPin, Mail, Globe, Target, Shield, X, Maximize2, Minimize2 } from "lucide-react";

export default function CyberResume({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"profile" | "experience" | "skills" | "achievements">("profile");
  const [maximized, setMaximized] = useState(false);

  const TABS = [
    { id: "profile", label: "Profile", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Core Skills", icon: Code },
    { id: "achievements", label: "Milestones", icon: Trophy },
  ] as const;

  const SKILLS = [
    { category: "Frontend / UI", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "WebGL / Three.js", "Glassmorphism UI"] },
    { category: "Backend / Cloud", items: ["Node.js", "Python", "Supabase", "Firebase", "REST APIs", "WebSockets"] },
    { category: "AI & ML", items: ["LLM Agents", "Retrieval-Augmented Generation (RAG)", "OpenAI", "Groq", "Voice Cloning", "Vercel AI SDK"] },
    { category: "DevOps & Tools", items: ["Git / GitHub", "Docker", "Linux Shell", "Vercel", "CI/CD Pipelines"] }
  ];

  const EXPERIENCE = [
    {
      title: "Creator & Lead Architect",
      company: "JARVIS AI OS",
      date: "2024 - Present",
      description: "Architected an autonomous 8-bot intelligence OS featuring live Monaco code editing, real-time voice synthesis, and Supabase cloud memory. Designed custom glowing glassmorphic APEX-UI."
    },
    {
      title: "Full-Stack Software Engineer",
      company: "Independent Developer",
      date: "2022 - Present",
      description: "Developed end-to-end full-stack applications integrating modern React frontends with powerful AI models and scalable backend infrastructure."
    }
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: maximized ? 0 : "10%",
        left: maximized ? 0 : "50%",
        transform: maximized ? "none" : "translateX(-50%)",
        width: maximized ? "100vw" : "clamp(340px, 80vw, 900px)",
        height: maximized ? "100vh" : "80vh",
        background: "rgba(4, 10, 20, 0.85)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(0, 229, 255, 0.2)",
        borderRadius: maximized ? 0 : 24,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0, 229, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        fontFamily: "var(--font-sans)",
        color: "#f0ede8"
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid rgba(0, 229, 255, 0.15)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, rgba(0, 229, 255, 0.05), transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "rgba(0, 229, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(0, 229, 255, 0.3)"
            }}
          >
            <User size={16} color="#00e5ff" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.05em" }}>Vishwajeet | Dossier</h2>
            <div style={{ fontSize: "0.75rem", color: "rgba(0, 229, 255, 0.7)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Classified Personnel File
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setMaximized(!maximized)}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(240,237,232,0.5)",
              cursor: "pointer",
              padding: 4,
            }}
          >
            {maximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(240,237,232,0.5)",
              cursor: "pointer",
              padding: 4,
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", flexDirection: maximized ? "row" : "column" }}>
        
        {/* Sidebar Tabs */}
        <div
          style={{
            width: maximized ? 240 : "100%",
            borderRight: maximized ? "1px solid rgba(255,255,255,0.05)" : "none",
            borderBottom: maximized ? "none" : "1px solid rgba(255,255,255,0.05)",
            padding: 16,
            display: "flex",
            flexDirection: maximized ? "column" : "row",
            gap: 8,
            overflowX: "auto",
            background: "rgba(0,0,0,0.2)"
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  background: isActive ? "rgba(0, 229, 255, 0.1)" : "transparent",
                  border: isActive ? "1px solid rgba(0, 229, 255, 0.3)" : "1px solid transparent",
                  borderRadius: 12,
                  color: isActive ? "#00e5ff" : "rgba(240,237,232,0.6)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                  minWidth: maximized ? "auto" : 140
                }}
              >
                <Icon size={18} />
                <span style={{ fontWeight: 500, fontSize: "0.9rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, padding: 32, overflowY: "auto" }}>
          
          {activeTab === "profile" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 32, animation: "fadeIn 0.3s ease-out" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #00e5ff, #0077ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)",
                    border: "2px solid rgba(0, 229, 255, 0.5)"
                  }}
                >
                  <Terminal size={48} color="#fff" />
                </div>
                <div>
                  <h1 style={{ fontSize: "2.5rem", margin: 0, fontWeight: 700, color: "#fff" }}>Vishwajeet</h1>
                  <p style={{ fontSize: "1.2rem", color: "#00e5ff", margin: "4px 0 16px 0", fontFamily: "var(--font-mono)" }}>
                    AI Operating System Architect & Full-Stack Developer
                  </p>
                  
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>
                      <MapPin size={16} /> India
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>
                      <Mail size={16} /> Contact Available
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>
                      <Globe size={16} /> jarvisaios.vercel.app
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", padding: 24, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ margin: "0 0 12px 0", color: "#00e5ff", display: "flex", alignItems: "center", gap: 8 }}>
                  <Shield size={18} /> Executive Summary
                </h3>
                <p style={{ lineHeight: 1.7, color: "rgba(240,237,232,0.8)", fontSize: "0.95rem" }}>
                  Visionary engineer and designer dedicated to pushing the boundaries of autonomous intelligence interfaces. 
                  Specializes in bridging the gap between complex AI logic and breathtaking, fluid user experiences. 
                  Creator of the APEX-UI design language and the JARVIS AI OS platform.
                </p>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>Core Competencies</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                {SKILLS.map(skillGroup => (
                  <div key={skillGroup.category} style={{ background: "rgba(0, 229, 255, 0.03)", padding: 20, borderRadius: 16, border: "1px solid rgba(0, 229, 255, 0.1)" }}>
                    <h4 style={{ color: "#00e5ff", margin: "0 0 16px 0", fontSize: "1rem" }}>{skillGroup.category}</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {skillGroup.items.map(item => (
                        <span key={item} style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: 20, fontSize: "0.85rem", color: "rgba(240,237,232,0.9)" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
               <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>Professional Experience</h3>
               <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                 {EXPERIENCE.map((exp, i) => (
                   <div key={i} style={{ position: "relative", paddingLeft: 24, borderLeft: "2px solid rgba(0, 229, 255, 0.3)" }}>
                     <div style={{ position: "absolute", left: -6, top: 4, width: 10, height: 10, borderRadius: "50%", background: "#00e5ff", boxShadow: "0 0 10px #00e5ff" }} />
                     <h4 style={{ margin: 0, fontSize: "1.2rem", color: "#fff" }}>{exp.title}</h4>
                     <div style={{ color: "#00e5ff", fontSize: "0.9rem", margin: "4px 0 12px 0", fontFamily: "var(--font-mono)" }}>
                       {exp.company} | {exp.date}
                     </div>
                     <p style={{ color: "rgba(240,237,232,0.7)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                       {exp.description}
                     </p>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div style={{ animation: "fadeIn 0.3s ease-out", display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ margin: "0 0 16px 0", color: "#fff", fontSize: "1.5rem" }}>Milestones & Goals</h3>
              
              <div style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(16, 185, 129, 0.1)", padding: 20, borderRadius: 12, border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <Target color="#10b981" size={24} />
                <div>
                  <h4 style={{ margin: 0, color: "#fff" }}>JARVIS AI OS v4.0 Release</h4>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>Successfully launched the massive master architecture rewrite combining TanStack and Next.js platforms.</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(245, 166, 35, 0.1)", padding: 20, borderRadius: 12, border: "1px solid rgba(245, 166, 35, 0.3)" }}>
                <Zap color="#f5a623" size={24} />
                <div>
                  <h4 style={{ margin: 0, color: "#fff" }}>APEX-UI Design System</h4>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>Invented a hardware-accelerated, DOM-based 3D simulation glassmorphism framework.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
