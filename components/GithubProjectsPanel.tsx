"use client";

import { useEffect, useState } from "react";
import { Github, Star, GitFork, Activity, Shield, Terminal, ArrowUpRight, X } from "lucide-react";

export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  homepage: string | null;
  updated_at: string;
}

export default function GithubProjectsPanel({ onClose }: { onClose?: () => void }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Hardcoded overrides for top priority projects based on user input
  const VIP_REPOS: Record<string, string> = {
    "LUXURY-LAUNDRY": "https://luxurylaundry.vercel.app/",
    "learnifyai": "https://www.learnifyai.in/",
    "DreamSync": "https://dream-sync-nine.vercel.app/",
    "JARVIS-AI-OS": "https://jarvisaios.vercel.app/",
    "vishwajeetsrk.github.io": "https://vishwajeetsrk.github.io/"
  };

  useEffect(() => {
    // Fetch real repos from Vishwajeetsrk
    fetch("https://api.github.com/users/Vishwajeetsrk/repos?sort=updated&per_page=12")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Apply the hardcoded overrides and prioritize VIP repos
          const processedRepos = data.map(repo => {
            if (VIP_REPOS[repo.name]) {
              return { ...repo, homepage: VIP_REPOS[repo.name] };
            }
            return repo;
          });
          
          // Sort so VIP repos appear first
          processedRepos.sort((a, b) => {
            const isAVip = !!VIP_REPOS[a.name];
            const isBVip = !!VIP_REPOS[b.name];
            if (isAVip && !isBVip) return -1;
            if (!isAVip && isBVip) return 1;
            return 0;
          });

          setRepos(processedRepos.slice(0, 6)); // Keep top 6
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load GitHub data", err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "clamp(340px, 80vw, 800px)",
        maxHeight: "80vh",
        background: "rgba(4, 10, 20, 0.85)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(0, 229, 255, 0.2)",
        borderRadius: 24,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0, 229, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        color: "#f0ede8"
      }}
    >
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(0, 229, 255, 0.15)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, rgba(0, 229, 255, 0.05), transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Github size={24} color="#00e5ff" />
          <h2 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 600 }}>GitHub Command Center</h2>
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

      <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, color: "#00e5ff" }}>
            <Activity className="animate-spin" size={32} />
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {repos.map(repo => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: 20,
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(0, 229, 255, 0.4)";
                  e.currentTarget.style.background = "rgba(0, 229, 255, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)";
                  e.currentTarget.style.background = "rgba(0,0,0,0.4)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#00e5ff", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                    <Terminal size={16} /> {repo.name}
                  </h3>
                  <ArrowUpRight size={16} color="rgba(240,237,232,0.4)" />
                </div>
                
                <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.5, flex: 1 }}>
                  {repo.description || "No description provided."}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8, fontSize: "0.85rem", color: "rgba(240,237,232,0.5)", fontFamily: "var(--font-mono)" }}>
                  {repo.language && (
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5a623" }} />
                      {repo.language}
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Star size={14} /> {repo.stargazers_count}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <GitFork size={14} /> {repo.forks_count}
                  </div>
                </div>
                
                {repo.homepage && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPreviewUrl(repo.homepage!.startsWith("http") ? repo.homepage! : `https://${repo.homepage}`);
                    }}
                    style={{
                      marginTop: 12,
                      padding: "8px 16px",
                      background: "rgba(0, 229, 255, 0.15)",
                      border: "1px solid rgba(0, 229, 255, 0.4)",
                      borderRadius: 12,
                      color: "#00e5ff",
                      cursor: "pointer",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(0, 229, 255, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(0, 229, 255, 0.15)";
                    }}
                  >
                    Launch Live Preview
                  </button>
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Live Preview Modal */}
      {previewUrl && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(8px)",
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40
        }}>
          <div style={{
            width: "100%",
            height: "100%",
            background: "#04080f",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            borderRadius: 24,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 40px rgba(0, 229, 255, 0.2)"
          }}>
            <div style={{
              padding: "16px 24px",
              background: "rgba(0, 229, 255, 0.1)",
              borderBottom: "1px solid rgba(0, 229, 255, 0.2)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#00e5ff", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
                <Activity size={18} className="animate-pulse" />
                Live Preview: {previewUrl}
              </div>
              <button
                onClick={() => setPreviewUrl(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#f0ede8",
                  cursor: "pointer",
                }}
              >
                <X size={24} />
              </button>
            </div>
            <iframe
              src={previewUrl}
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Live Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}
