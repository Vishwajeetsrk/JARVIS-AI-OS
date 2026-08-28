"use client";

import { useState } from "react";
import { User, Briefcase, Code, Terminal, Trophy, MapPin, Mail, Globe, Target, Shield, X, Maximize2, Minimize2, GraduationCap, Award, Phone } from "lucide-react";

export default function CyberResume({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"profile" | "experience" | "skills" | "projects" | "education">("profile");
  const [maximized, setMaximized] = useState(false);

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
      title: "Learnify AI",
      date: "May 2026 - Present",
      stack: "React 19, TypeScript, Next.js, Tailwind, Supabase, OpenRouter",
      description: "Built a full-stack AI-powered learning platform combining intelligent tutoring, creator tools, gamification, and AI career guidance.",
      link: "learnifyai.in"
    },
    {
      title: "DreamSync — AI Career Intelligence",
      date: "Feb 2026 - Apr 2026",
      stack: "Next.js, Tailwind, Firebase, Gemini, Upstash Redis, Framer Motion",
      description: "Designed a modern AI-powered platform for career growth. Features AI Resume Builder, ATS Checker, LinkedIn Optimizer, and Portfolio Generator.",
      link: ""
    },
    {
      title: "Luxury Laundry — SaaS Platform",
      date: "Apr 2026 - May 2026",
      stack: "Next.js, Express.js, PostgreSQL, Prisma, Socket.io, Tailwind",
      description: "Developed responsive customer and admin dashboards for a premium SaaS platform with real-time updates and scalable frontend architecture.",
      link: ""
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

  return (
    <div
      style={{
        position: "fixed",
        top: maximized ? 0 : "10%",
        left: maximized ? 0 : "50%",
        transform: maximized ? "none" : "translateX(-50%)",
        width: maximized ? "100vw" : "clamp(340px, 80vw, 1000px)",
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
                    AI Software Engineer & Full Stack Developer
                  </p>
                  
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>
                      <MapPin size={16} /> Bengaluru, India
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>
                      <Mail size={16} /> vishwajeetsrk@gmail.com
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>
                      <Phone size={16} /> +91 85952 02922
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 12 }}>
                    <a href="https://vishwajeetsrk.github.io" target="_blank" style={{ display: "flex", alignItems: "center", gap: 6, color: "#00e5ff", textDecoration: "none", fontSize: "0.9rem" }}>
                      <Globe size={16} /> Portfolio
                    </a>
                    <a href="https://github.com/Vishwajeetsrk" target="_blank" style={{ display: "flex", alignItems: "center", gap: 6, color: "#00e5ff", textDecoration: "none", fontSize: "0.9rem" }}>
                      <Globe size={16} /> GitHub
                    </a>
                    <a href="https://learnifyai.in" target="_blank" style={{ display: "flex", alignItems: "center", gap: 6, color: "#00e5ff", textDecoration: "none", fontSize: "0.9rem" }}>
                      <Globe size={16} /> learnifyai.in
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", padding: 24, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ margin: "0 0 12px 0", color: "#00e5ff", display: "flex", alignItems: "center", gap: 8 }}>
                  <Shield size={18} /> Executive Objective
                </h3>
                <p style={{ lineHeight: 1.7, color: "rgba(240,237,232,0.8)", fontSize: "0.95rem" }}>
                  AI-focused Full Stack Developer with hands-on experience building AI-powered SaaS applications, modern web platforms, 
                  and automation workflows. Skilled in modern frontend architectures, Supabase, AI API integration, and responsive design. 
                  Passionate about Generative AI, cloud technologies, and creating scalable digital products that improve learning and productivity.
                </p>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>Technical Arsenal</h3>
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
               <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                 {EXPERIENCE.map((exp, i) => (
                   <div key={i} style={{ position: "relative", paddingLeft: 24, borderLeft: "2px solid rgba(0, 229, 255, 0.3)" }}>
                     <div style={{ position: "absolute", left: -6, top: 4, width: 10, height: 10, borderRadius: "50%", background: "#00e5ff", boxShadow: "0 0 10px #00e5ff" }} />
                     <h4 style={{ margin: 0, fontSize: "1.2rem", color: "#fff" }}>{exp.title}</h4>
                     <div style={{ color: "#00e5ff", fontSize: "0.9rem", margin: "4px 0 12px 0", fontFamily: "var(--font-mono)" }}>
                       {exp.company} | {exp.location} | {exp.date}
                     </div>
                     <p style={{ color: "rgba(240,237,232,0.7)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                       {exp.description}
                     </p>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
               <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>Key Projects</h3>
               <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                 {PROJECTS.map((proj, i) => (
                   <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 24 }}>
                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                       <h4 style={{ margin: 0, fontSize: "1.2rem", color: "#00e5ff" }}>{proj.title}</h4>
                       <div style={{ fontSize: "0.85rem", color: "rgba(240,237,232,0.5)", fontFamily: "var(--font-mono)" }}>{proj.date}</div>
                     </div>
                     <div style={{ color: "#10b981", fontSize: "0.85rem", margin: "8px 0 16px 0", fontFamily: "var(--font-mono)" }}>
                       Tech Stack: {proj.stack}
                     </div>
                     <p style={{ color: "rgba(240,237,232,0.8)", lineHeight: 1.6, fontSize: "0.95rem", margin: 0 }}>
                       {proj.description}
                     </p>
                     {proj.link && (
                       <a href={`https://${proj.link}`} target="_blank" style={{ display: "inline-block", marginTop: 16, color: "#00e5ff", fontSize: "0.9rem", textDecoration: "none", borderBottom: "1px solid #00e5ff" }}>
                         View Project ↗
                       </a>
                     )}
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeTab === "education" && (
            <div style={{ animation: "fadeIn 0.3s ease-out", display: "flex", flexDirection: "column", gap: 40 }}>
              <div>
                <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>Education</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {EDUCATION.map((edu, i) => (
                    <div key={i} style={{ display: "flex", gap: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0, 229, 255, 0.1)", border: "1px solid rgba(0, 229, 255, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <GraduationCap size={24} color="#00e5ff" />
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#fff" }}>{edu.degree}</h4>
                        <div style={{ color: "rgba(240,237,232,0.7)", fontSize: "0.95rem", margin: "4px 0" }}>{edu.school}</div>
                        <div style={{ color: "#00e5ff", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>{edu.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ margin: "0 0 24px 0", color: "#fff", fontSize: "1.5rem" }}>Awards & Certifications</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(245, 166, 35, 0.1)", padding: 20, borderRadius: 12, border: "1px solid rgba(245, 166, 35, 0.3)" }}>
                    <Award color="#f5a623" size={24} />
                    <div>
                      <h4 style={{ margin: 0, color: "#fff" }}>1st Prize in Web Design Competition</h4>
                      <p style={{ margin: "4px 0 0 0", color: "rgba(240,237,232,0.7)", fontSize: "0.9rem" }}>NEURO2026 organized by Charan's Degree College (Apr 2026)</p>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
                    {["Full Stack Development (ISM UNIV)", "MySQL Basics (Great Learning)", "Google Sheets (Google Cloud)", "Build Brand using Canva"].map((cert, i) => (
                      <span key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 16px", borderRadius: 8, fontSize: "0.85rem", color: "rgba(240,237,232,0.8)" }}>
                        🏅 {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
