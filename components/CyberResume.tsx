"use client";

import { useState } from "react";
import { User, Briefcase, Code, Terminal, MapPin, Mail, Globe, X, Maximize2, Minimize2, GraduationCap, Phone, Printer, ExternalLink, Download, FileText, Check, ArrowLeft } from "lucide-react";

export default function CyberResume({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"profile" | "experience" | "skills" | "projects" | "education">("profile");
  const [maximized, setMaximized] = useState(false);
  const [template, setTemplate] = useState<"cyberpunk" | "executive" | "minimal">("cyberpunk");
  const [copied, setCopied] = useState(false);

  const TABS = [
    { id: "profile", label: "Profile", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Terminal },
    { id: "education", label: "Education & Awards", icon: GraduationCap },
  ] as const;

  const SKILLS = [
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"] },
    { category: "Backend & Cloud", items: ["Node.js", "Express.js", "REST APIs", "Vercel", "Render", "PHP"] },
    { category: "Database & ORM", items: ["Supabase", "Firebase", "PostgreSQL", "MongoDB", "MySQL", "Prisma", "Upstash Redis"] },
    { category: "AI & Automation", items: ["OpenRouter", "Gemini", "Claude", "ChatGPT", "Antigravity", "Prompt Engineering"] },
    { category: "Programming", items: ["JavaScript", "Python", "SQL", "Java (Basic)"] },
    { category: "CRM & Tools", items: ["Salesforce CRM", "Data Loader", "Razorpay", "Cloudinary", "GitHub"] }
  ];

  const EXPERIENCE = [
    {
      title: "Reconciliation & Data Management",
      company: "Rootbridge Academy Pvt Ltd",
      date: "Dec 2024 - Present",
      location: "Bengaluru",
      description: "Entered, verified, and maintained over 200,000 records with exceptional accuracy. Resolved 50+ recurring data mismatches monthly. Achieved a 30% increase in data accuracy through rigorous validation checks."
    },
    {
      title: "Social Media Intern",
      company: "Sorting Hat Technologies (Unacademy)",
      date: "Feb 2026 - Mar 2026",
      location: "Bengaluru",
      description: "Designed thumbnails and optimized metadata for educational content. Managed uploads and structured UI content systems on the Atlas platform. Improved workflow efficiency using Python-based automation."
    },
    {
      title: "Fundraiser",
      company: "Rootbridge Academy Pvt Ltd",
      date: "Jun 2023 - Nov 2024",
      location: "Bengaluru",
      description: "Engaged potential donors through face-to-face interactions. Achieved fundraising targets consistently, promoting awareness of the organization's initiatives."
    },
    {
      title: "Social Media Designer Intern",
      company: "WeLive Foundation",
      date: "Jan 2023 - May 2023",
      location: "Bengaluru",
      description: "Designed social media creatives using Canva. Improved engagement through visually optimized content and audience-focused design strategies. Created WordPress blogs."
    }
  ];

  const PROJECTS = [
    {
      title: "JARVIS AI OS",
      date: "Core OS Platform",
      stack: "TypeScript, React 19, Next.js, Three.js, Groq, Gemini",
      description: "Autonomous personal operating system featuring 3D WebGL particle orb, reasoning constellation web, and 15 specialist agents.",
      github: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      live: "http://localhost:3000"
    },
    {
      title: "Wardelio Mobile App",
      date: "Android & iOS Companion",
      stack: "React, Vite, Capacitor, Tailwind CSS",
      description: "Mobile wardrobe & style companion featuring 150+ screens, 3D interactive buttons, smooth animations, and custom settings flow.",
      github: "https://github.com/Vishwajeetsrk",
      live: "C:\\Users\\vishw\\OneDrive\\Desktop\\Wardelio"
    },
    {
      title: "Learnify AI",
      date: "May 2026 - Present",
      stack: "React 19, TypeScript, Next.js, Tailwind, Supabase, OpenRouter",
      description: "Full-stack AI-powered learning platform combining intelligent tutoring, creator tools, gamification, and AI career guidance.",
      github: "https://github.com/Vishwajeetsrk",
      live: "https://learnifyai.in"
    },
    {
      title: "Razorpay to Salesforce Sync Module",
      date: "Office Automation Workflow",
      stack: "TypeScript, Node.js, Python, Salesforce Data Loader",
      description: "7-step daily donation reconciliation, Lead/Account matching, Opportunity insertion, and confirmation email automation.",
      github: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      live: ""
    }
  ];

  const EDUCATION = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "St. Aloysius Degree College, Bengaluru",
      date: "Apr 2023 - Jul 2026"
    },
    {
      degree: "Diploma in Software Development",
      school: "Oxford Software Institute, New Delhi",
      date: "Feb 2021 - Feb 2022"
    }
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("https://github.com/Vishwajeetsrk/JARVIS-AI-OS");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: maximized ? 0 : "8%",
        left: maximized ? 0 : "50%",
        transform: maximized ? "none" : "translateX(-50%)",
        width: maximized ? "100vw" : "clamp(340px, 86vw, 1040px)",
        height: maximized ? "104vh" : "84vh",
        background: template === "executive" ? "#0b1329" : template === "minimal" ? "#060913" : "rgba(4, 10, 20, 0.88)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(0, 229, 255, 0.25)",
        borderRadius: maximized ? 0 : 24,
        boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 35px rgba(0, 229, 255, 0.15)",
        display: "flex",
        flexDirection: "column",
        zIndex: 90,
        overflow: "hidden",
        color: "#ffffff"
      }}
    >
      {/* Header Bar */}
      <div
        className="no-print"
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0, 229, 255, 0.04)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={onClose}
            style={{
              background: "rgba(0, 229, 255, 0.12)",
              border: "1px solid rgba(0, 229, 255, 0.4)",
              borderRadius: 12,
              padding: "5px 12px",
              color: "#00e5ff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 700,
              fontFamily: "var(--font-mono)",
            }}
          >
            <ArrowLeft size={13} /> Back
          </button>
          <User size={22} style={{ color: "#00e5ff" }} />
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, fontFamily: "var(--font-display)" }}>
            Vishwajeet Cyber Resume & Credentials
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Format selector */}
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value as any)}
            className="cyber-dropdown"
            style={{ fontSize: 11, padding: "4px 8px" }}
          >
            <option value="cyberpunk">Cyberpunk Dark</option>
            <option value="executive">Executive Modern</option>
            <option value="minimal">Minimalist Clean</option>
          </select>

          {/* Download PDF / Print Button */}
          <button
            onClick={handlePrint}
            style={{
              background: "rgba(0, 229, 255, 0.15)",
              border: "1px solid #00e5ff",
              color: "#00e5ff",
              padding: "5px 12px",
              borderRadius: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 700,
              fontFamily: "var(--font-mono)"
            }}
          >
            <Printer size={13} /> Print / Export PDF
          </button>

          <button
            onClick={handleShare}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              padding: "5px 12px",
              borderRadius: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontFamily: "var(--font-mono)"
            }}
          >
            {copied ? <Check size={13} style={{ color: "#10b981" }} /> : <Download size={13} />}
            {copied ? "Copied Link!" : "Share Link"}
          </button>

          <button
            onClick={() => setMaximized(!maximized)}
            style={{ background: "transparent", border: "none", color: "rgba(240,237,232,0.6)", cursor: "pointer" }}
          >
            {maximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          <button
            onClick={onClose}
            style={{ background: "transparent", border: "none", color: "rgba(240,237,232,0.6)", cursor: "pointer" }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div
        className="no-print"
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(0,0,0,0.2)",
          overflowX: "auto"
        }}
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                flex: 1,
                minWidth: 100,
                padding: "12px 16px",
                background: active ? "rgba(0, 229, 255, 0.1)" : "transparent",
                border: "none",
                borderBottom: active ? "2px solid #00e5ff" : "2px solid transparent",
                color: active ? "#00e5ff" : "rgba(240,237,232,0.6)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "all 0.2s"
              }}
            >
              <Icon size={14} /> {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: "auto", padding: 28 }}>
        {activeTab === "profile" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                background: "rgba(6, 16, 32, 0.75)",
                padding: 24,
                borderRadius: 20,
                border: "1px solid rgba(0, 229, 255, 0.2)",
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                alignItems: "center"
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00e5ff, #10b981)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#000",
                  fontFamily: "var(--font-display)"
                }}
              >
                V
              </div>

              <div style={{ flex: 1, minWidth: 200 }}>
                <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                  Vishwajeet
                </h1>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: "#00e5ff", fontFamily: "var(--font-mono)" }}>
                  Full-Stack AI Software Engineer & Systems Architect
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 10, fontSize: 11, color: "rgba(240,237,232,0.7)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={12} /> Bengaluru, India</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Mail size={12} /> vishwajeetsrk@github</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Globe size={12} /> github.com/Vishwajeetsrk</span>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: 14, color: "#00e5ff", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>
                Executive Summary
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(240,237,232,0.8)" }}>
                Results-driven Full-Stack AI Engineer specializing in Next.js 19, TypeScript, React 19, Supabase, and autonomous multi-agent orchestration. Proven track record in optimizing enterprise workflows, high-precision data reconciliation (200,000+ records), and crafting high-conversion 60fps digital experiences across web, desktop (Tauri/Rust), and mobile (Capacitor/React Native).
              </p>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {SKILLS.map((group) => (
              <div
                key={group.category}
                style={{
                  background: "rgba(6, 16, 32, 0.6)",
                  padding: 18,
                  borderRadius: 16,
                  border: "1px solid rgba(0, 229, 255, 0.15)"
                }}
              >
                <h4 style={{ margin: "0 0 12px", fontSize: 13, color: "#00e5ff", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                  {group.category}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(240,237,232,0.9)"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "experience" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(6, 16, 32, 0.75)",
                  padding: 20,
                  borderRadius: 16,
                  border: "1px solid rgba(0, 229, 255, 0.15)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#ffffff" }}>{exp.title}</h3>
                    <div style={{ fontSize: 12, color: "#00e5ff", marginTop: 2 }}>{exp.company} · {exp.location}</div>
                  </div>
                  <span style={{ fontSize: 11, color: "rgba(240,237,232,0.5)", fontFamily: "var(--font-mono)" }}>{exp.date}</span>
                </div>
                <p style={{ margin: "10px 0 0", fontSize: 12.5, lineHeight: 1.6, color: "rgba(240,237,232,0.75)" }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(6, 16, 32, 0.75)",
                  padding: 20,
                  borderRadius: 16,
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#ffffff" }}>{proj.title}</h3>
                    <span style={{ fontSize: 10, color: "#10b981", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{proj.date}</span>
                  </div>
                  <div style={{ fontSize: 10.5, color: "#00e5ff", fontFamily: "var(--font-mono)", marginTop: 4 }}>
                    {proj.stack}
                  </div>
                  <p style={{ margin: "10px 0 0", fontSize: 12, lineHeight: 1.5, color: "rgba(240,237,232,0.75)" }}>
                    {proj.description}
                  </p>
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 11,
                        color: "#00e5ff",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontFamily: "var(--font-mono)"
                      }}
                    >
                      <ExternalLink size={12} /> GitHub Link
                    </a>
                  )}
                  {proj.live && (
                    <span style={{ fontSize: 11, color: "rgba(240,237,232,0.6)", fontFamily: "var(--font-mono)" }}>
                      🔗 {proj.live}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(6, 16, 32, 0.75)",
                  padding: 20,
                  borderRadius: 16,
                  border: "1px solid rgba(0, 229, 255, 0.15)",
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap"
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#ffffff" }}>{edu.degree}</h3>
                  <div style={{ fontSize: 12, color: "#00e5ff", marginTop: 2 }}>{edu.school}</div>
                </div>
                <span style={{ fontSize: 11, color: "rgba(240,237,232,0.5)", fontFamily: "var(--font-mono)" }}>{edu.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
