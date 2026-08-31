"use client";

import { useEffect, useRef, useState } from "react";
import {
  Video, Sparkles, Wand2, Play, Pause, Volume2, Copy, Check, Calendar, Clock,
  TrendingUp, DollarSign, Share2, Youtube, Instagram, Twitter, Linkedin,
  Layers, X, ChevronRight, BarChart3, Eye, ThumbsUp, MessageSquare, Flame, Download, Film, ShieldCheck
} from "lucide-react";
import { generatePlatformMetadata, generateVideoScript, INITIAL_SOCIAL_METRICS } from "@/lib/content/socialOptimizer";
import { PlatformMetadata, SocialPlatform, VideoScript } from "@/lib/content/types";
import { renderVideoToBlob, generateSrtSubtitles } from "@/lib/content/videoRenderer";

export default function ContentStudio() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"script" | "render" | "visuals" | "metadata" | "scheduler" | "analytics">("script");
  const [topic, setTopic] = useState("Autonomous 18-Agent AI Operating System in React 19");
  const [script, setScript] = useState<VideoScript>(() => generateVideoScript("Autonomous 18-Agent AI Operating System"));
  const [metadata, setMetadata] = useState<Record<SocialPlatform, PlatformMetadata>>(() =>
    generatePlatformMetadata("Autonomous AI OS", "How I Built an Autonomous 18-Agent AI Operating System")
  );
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform>("youtube");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [speakingScene, setSpeakingScene] = useState<number | null>(null);

  // Video Rendering State
  const [rendering, setRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [renderStatus, setRenderStatus] = useState("");
  const [renderedBlobUrl, setRenderedBlobUrl] = useState<string | null>(null);
  const [srtData, setSrtData] = useState<string>("");

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("OPEN_CONTENT_STUDIO", handleOpen);
    return () => window.removeEventListener("OPEN_CONTENT_STUDIO", handleOpen);
  }, []);

  const handleGenerateScript = () => {
    const newScript = generateVideoScript(topic);
    setScript(newScript);
    setMetadata(generatePlatformMetadata(topic, newScript.title));
    setRenderedBlobUrl(null);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSpeakScene = (text: string, sceneNum: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (speakingScene === sceneNum) {
      setSpeakingScene(null);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.05;
    utter.onend = () => setSpeakingScene(null);
    setSpeakingScene(sceneNum);
    window.speechSynthesis.speak(utter);
  };

  const handleStartRender = async () => {
    setRendering(true);
    setRenderProgress(0);
    setRenderStatus("Initializing canvas and graphic assets...");
    setRenderedBlobUrl(null);

    try {
      const { videoBlob, srtContent } = await renderVideoToBlob(script, (progress, status) => {
        setRenderProgress(progress);
        setRenderStatus(status);
      });

      const url = URL.createObjectURL(videoBlob);
      setRenderedBlobUrl(url);
      setSrtData(srtContent);
    } catch (err: any) {
      setRenderStatus(`Rendering error: ${err.message}`);
    } finally {
      setRendering(false);
    }
  };

  const handleDownloadVideo = () => {
    if (!renderedBlobUrl) return;
    const a = document.createElement("a");
    a.href = renderedBlobUrl;
    a.download = `JARVIS_Video_${Date.now()}.webm`;
    a.click();
  };

  const handleDownloadSrt = () => {
    const content = srtData || generateSrtSubtitles(script);
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `JARVIS_Subtitles_${Date.now()}.srt`;
    a.click();
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(2, 5, 14, 0.92)",
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
              width: "min(1080px, 96vw)",
              maxHeight: "90vh",
              background: "#050d1a",
              border: "1px solid rgba(236, 72, 153, 0.4)",
              borderRadius: 24,
              boxShadow: "0 0 70px rgba(236, 72, 153, 0.25), 0 24px 60px rgba(0,0,0,0.95)",
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
                background: "linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(5,13,26,0.6) 100%)",
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
                    boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h2 style={{ fontSize: 19, fontWeight: 800, margin: 0, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                    NEXORA Autonomous Content & Video Studio
                  </h2>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0, marginTop: 2 }}>
                    AI Scriptwriting · In-Browser Video Rendering · SEO Metadata · Best Posting Times · Analytics & Revenue
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
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div
              style={{
                display: "flex",
                gap: 6,
                padding: "10px 28px",
                background: "rgba(0,0,0,0.4)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                overflowX: "auto",
              }}
            >
              {[
                { id: "script", label: "Script & Storyboard", icon: Video },
                { id: "render", label: "Render & Export Video", icon: Film },
                { id: "visuals", label: "Thumbnails & Visuals", icon: Sparkles },
                { id: "metadata", label: "Viral SEO & Best Timing", icon: Flame },
                { id: "scheduler", label: "Multi-Platform Scheduler", icon: Calendar },
                { id: "analytics", label: "Analytics & Earnings", icon: BarChart3 },
              ].map((t) => {
                const Icon = t.icon;
                const active = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as any)}
                    style={{
                      background: active ? "rgba(236,72,153,0.2)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${active ? "#ec4899" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: 12,
                      padding: "8px 16px",
                      color: active ? "#ec4899" : "rgba(255,255,255,0.65)",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon size={14} />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB BODY */}
            <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
              {/* TAB 1: SCRIPT & STORYBOARD */}
              {activeTab === "script" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Topic Bar */}
                  <div style={{ display: "flex", gap: 10 }}>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="Enter a video topic or concept..."
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(236,72,153,0.3)",
                        borderRadius: 14,
                        padding: "12px 18px",
                        color: "#ffffff",
                        fontSize: 13,
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={handleGenerateScript}
                      style={{
                        background: "linear-gradient(135deg, #ec4899, #f43f5e)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: 14,
                        padding: "12px 24px",
                        fontWeight: 800,
                        fontSize: 13,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Wand2 size={16} />
                      <span>Generate Full Script</span>
                    </button>
                  </div>

                  {/* Hook Card */}
                  <div
                    style={{
                      background: "rgba(236,72,153,0.08)",
                      border: "1px solid rgba(236,72,153,0.3)",
                      borderRadius: 16,
                      padding: 18,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: "#ec4899", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                        🔥 Viral Hook (0-3s Retention Booster)
                      </span>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>
                        Duration: {script.totalDurationSeconds}s · 9:16 Vertical
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#ffffff", lineHeight: 1.5 }}>
                      "{script.hook}"
                    </p>
                  </div>

                  {/* Scene-by-Scene Storyboard */}
                  <div>
                    <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 800, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-mono)" }}>
                      Scene-by-Scene Storyboard ({script.scenes.length} Scenes)
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {script.scenes.map((scene) => (
                        <div
                          key={scene.sceneNumber}
                          style={{
                            background: "rgba(6,16,32,0.8)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 16,
                            padding: 18,
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: 12, fontWeight: 800, color: "#ec4899", fontFamily: "var(--font-mono)" }}>
                              SCENE {scene.sceneNumber} ({scene.durationSeconds}s)
                            </span>
                            <div style={{ display: "flex", gap: 8 }}>
                              <button
                                onClick={() => handleSpeakScene(scene.voiceoverText, scene.sceneNumber)}
                                style={{
                                  background: speakingScene === scene.sceneNumber ? "#ec4899" : "rgba(255,255,255,0.06)",
                                  border: "1px solid rgba(255,255,255,0.12)",
                                  borderRadius: 8,
                                  padding: "4px 10px",
                                  color: "#ffffff",
                                  fontSize: 11,
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 5,
                                }}
                              >
                                <Volume2 size={13} />
                                <span>{speakingScene === scene.sceneNumber ? "Playing Audio..." : "Preview Voiceover"}</span>
                              </button>
                            </div>
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                            {/* Visual */}
                            <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: 12 }}>
                              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                                🎨 Visual Shot & AI Prompt:
                              </span>
                              <p style={{ margin: "4px 0 0", fontSize: 12, color: "#38bdf8", lineHeight: 1.4 }}>
                                {scene.visualPrompt}
                              </p>
                              <div style={{ marginTop: 8, fontSize: 11, fontWeight: 800, color: "#facc15", fontFamily: "var(--font-mono)" }}>
                                TEXT OVERLAY: [{scene.onScreenText}]
                              </div>
                            </div>

                            {/* Voiceover */}
                            <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: 12 }}>
                              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                                🎙️ Spoken Voiceover Audio:
                              </span>
                              <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "#ffffff", lineHeight: 1.5 }}>
                                "{scene.voiceoverText}"
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: IN-BROWSER VIDEO RENDERING & EXPORT */}
              {activeTab === "render" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: 16, padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#ffffff" }}>
                        In-Browser Video & Subtitle Compiler
                      </h3>
                      <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                        Renders particle animations, kinetic subtitles, and audio voiceover directly on canvas.
                      </p>
                    </div>

                    <button
                      onClick={handleStartRender}
                      disabled={rendering}
                      style={{
                        background: rendering ? "rgba(255,255,255,0.1)" : "linear-gradient(135deg, #ec4899, #f43f5e)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: 12,
                        padding: "10px 22px",
                        fontWeight: 800,
                        fontSize: 12.5,
                        cursor: rendering ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        boxShadow: "0 0 20px rgba(236,72,153,0.3)",
                      }}
                    >
                      <Film size={15} />
                      <span>{rendering ? `Rendering ${renderProgress}%...` : "Render & Compile Video"}</span>
                    </button>
                  </div>

                  {/* Progress Bar */}
                  {rendering && (
                    <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: 14, border: "1px solid rgba(236,72,153,0.2)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#ec4899", fontFamily: "var(--font-mono)", marginBottom: 8, fontWeight: 700 }}>
                        <span>{renderStatus}</span>
                        <span>{renderProgress}%</span>
                      </div>
                      <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ width: `${renderProgress}%`, height: "100%", background: "linear-gradient(90deg, #ec4899, #38bdf8)", transition: "width 0.2s" }} />
                      </div>
                    </div>
                  )}

                  {/* Video Player Output Preview */}
                  {renderedBlobUrl && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 14, background: "rgba(6,16,32,0.85)", border: "1px solid rgba(16,185,129,0.4)", borderRadius: 18, padding: 20 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: "#10b981", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                          ✅ Video Render Ready (WebM / MP4)
                        </span>
                        <div style={{ display: "flex", gap: 10 }}>
                          <button
                            onClick={handleDownloadVideo}
                            style={{
                              background: "#10b981",
                              color: "#000000",
                              border: "none",
                              borderRadius: 10,
                              padding: "8px 16px",
                              fontWeight: 800,
                              fontSize: 12,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <Download size={14} /> Download Video (.webm)
                          </button>
                          <button
                            onClick={handleDownloadSrt}
                            style={{
                              background: "rgba(255,255,255,0.08)",
                              border: "1px solid rgba(255,255,255,0.2)",
                              color: "#ffffff",
                              borderRadius: 10,
                              padding: "8px 14px",
                              fontWeight: 700,
                              fontSize: 12,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <Download size={14} /> Download Subtitles (.srt)
                          </button>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "center", background: "#000000", borderRadius: 14, overflow: "hidden", maxHeight: 420 }}>
                        <video src={renderedBlobUrl} controls autoPlay style={{ maxHeight: 400, maxWidth: "100%", borderRadius: 12 }} />
                      </div>
                    </div>
                  )}

                  {/* Subtitles SRT Preview */}
                  <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: "#38bdf8", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                        Auto-Generated SRT Subtitle File
                      </span>
                      <button
                        onClick={handleDownloadSrt}
                        style={{ background: "transparent", border: "none", color: "#38bdf8", cursor: "pointer", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}
                      >
                        <Download size={12} /> Export .SRT
                      </button>
                    </div>
                    <pre style={{ margin: 0, fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.75)", background: "rgba(0,0,0,0.3)", padding: 12, borderRadius: 10, maxHeight: 180, overflowY: "auto" }}>
                      {srtData || generateSrtSubtitles(script)}
                    </pre>
                  </div>
                </div>
              )}

              {/* TAB 3: THUMBNAILS & VISUALS */}
              {activeTab === "visuals" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: 16, padding: 18 }}>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#ffffff" }}>
                      AI Image & Thumbnail Concept Engine
                    </h3>
                    <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                      Engineered high-CTR image generation prompts for Midjourney, DALL-E 3, and Imagen 3.
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                      {
                        title: "Concept A: 3D Holographic Constellation",
                        prompt: "Hyperrealistic cinematic close-up of a glowing neon cyan particle orb floating in dark space, surrounded by 18 miniature golden holographic agent avatars, 8k render, octane render, high contrast, viral YouTube thumbnail style",
                        overlay: "BUILDING JARVIS IN 2026",
                      },
                      {
                        title: "Concept B: Futuristic Developer Cockpit",
                        prompt: "First-person view of a developer looking at 3 ultrawide holographic transparent monitors displaying real-time agent execution code, cybernetic lighting, cinematic depth of field, dramatic neon pink and cyan atmosphere",
                        overlay: "18 AI AGENTS WORKING FOR YOU",
                      },
                    ].map((concept, idx) => (
                      <div key={idx} style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h4 style={{ margin: 0, fontSize: 13.5, fontWeight: 700, color: "#ec4899" }}>{concept.title}</h4>
                          <button
                            onClick={() => handleCopy(concept.prompt, `concept_${idx}`)}
                            style={{ background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 8, padding: "4px 8px", color: "#ffffff", fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                          >
                            {copiedKey === `concept_${idx}` ? <Check size={12} /> : <Copy size={12} />}
                            <span>{copiedKey === `concept_${idx}` ? "Copied" : "Copy Prompt"}</span>
                          </button>
                        </div>
                        <p style={{ margin: 0, fontSize: 12, color: "#38bdf8", lineHeight: 1.5, background: "rgba(0,0,0,0.4)", padding: 10, borderRadius: 8 }}>
                          {concept.prompt}
                        </p>
                        <div style={{ fontSize: 11, fontWeight: 800, color: "#facc15", fontFamily: "var(--font-mono)" }}>
                          THUMBNAIL BADGE TEXT: [{concept.overlay}]
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: VIRAL SEO & BEST TIMING */}
              {activeTab === "metadata" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    {(["youtube", "instagram", "x", "linkedin", "tiktok"] as SocialPlatform[]).map((p) => {
                      const active = selectedPlatform === p;
                      return (
                        <button
                          key={p}
                          onClick={() => setSelectedPlatform(p)}
                          style={{
                            background: active ? "rgba(236,72,153,0.25)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${active ? "#ec4899" : "rgba(255,255,255,0.08)"}`,
                            borderRadius: 10,
                            padding: "8px 14px",
                            color: active ? "#ffffff" : "rgba(255,255,255,0.6)",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            textTransform: "uppercase",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>

                  {metadata[selectedPlatform] && (
                    <div style={{ background: "rgba(6,16,32,0.85)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: 18, padding: 22, display: "flex", flexDirection: "column", gap: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 12, padding: "10px 14px" }}>
                        <Clock size={16} style={{ color: "#10b981" }} />
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981", fontFamily: "var(--font-mono)" }}>
                          BEST UPLOAD TIME: {metadata[selectedPlatform].bestUploadTime}
                        </span>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                            Title
                          </span>
                          <button
                            onClick={() => handleCopy(metadata[selectedPlatform].title, "meta_title")}
                            style={{ background: "transparent", border: "none", color: "#ec4899", fontSize: 11, cursor: "pointer" }}
                          >
                            {copiedKey === "meta_title" ? "Copied" : "Copy Title"}
                          </button>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", background: "rgba(0,0,0,0.3)", padding: 12, borderRadius: 10 }}>
                          {metadata[selectedPlatform].title}
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                            Viral Hashtags ({metadata[selectedPlatform].hashtags.length})
                          </span>
                          <button
                            onClick={() => handleCopy(metadata[selectedPlatform].hashtags.join(" "), "meta_tags")}
                            style={{ background: "transparent", border: "none", color: "#ec4899", fontSize: 11, cursor: "pointer" }}
                          >
                            {copiedKey === "meta_tags" ? "Copied" : "Copy Hashtags"}
                          </button>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {metadata[selectedPlatform].hashtags.map((h) => (
                            <span key={h} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: "rgba(236,72,153,0.15)", border: "1px solid rgba(236,72,153,0.3)", color: "#f472b6" }}>
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                            Full Description
                          </span>
                          <button
                            onClick={() => handleCopy(metadata[selectedPlatform].description, "meta_desc")}
                            style={{ background: "transparent", border: "none", color: "#ec4899", fontSize: 11, cursor: "pointer" }}
                          >
                            {copiedKey === "meta_desc" ? "Copied" : "Copy Description"}
                          </button>
                        </div>
                        <pre style={{ margin: 0, fontSize: 11.5, fontFamily: "var(--font-mono)", color: "#ffffff", background: "rgba(0,0,0,0.3)", padding: 12, borderRadius: 10, whiteSpace: "pre-wrap", lineHeight: 1.5 }}>
                          {metadata[selectedPlatform].description}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: SCHEDULER */}
              {activeTab === "scheduler" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: 16, padding: 18 }}>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#ffffff" }}>
                      Multi-Platform Publishing Queue
                    </h3>
                    <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                      Queued video distribution across YouTube Shorts, Instagram Reels, TikTok, and X.
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { platform: "YouTube Shorts", title: "How I Built an 18-Agent AI OS", date: "Today · 6:30 PM IST", status: "Ready to Publish" },
                      { platform: "Instagram Reels", title: "Stop Building Basic AI Bots", date: "Today · 7:15 PM IST", status: "Scheduled" },
                      { platform: "X / Twitter Thread", title: "Architecting an AI OS with React 19", date: "Tomorrow · 8:00 AM EST", status: "Scheduled" },
                      { platform: "LinkedIn Article", title: "5 Lessons in Multi-Agent System Design", date: "Tomorrow · 9:30 AM IST", status: "Scheduled" },
                    ].map((item, i) => (
                      <div key={i} style={{ background: "rgba(6,16,32,0.75)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>{item.title}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", marginTop: 2 }}>
                            {item.platform} · {item.date}
                          </div>
                        </div>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 8, background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", fontFamily: "var(--font-mono)" }}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: ANALYTICS & REVENUE */}
              {activeTab === "analytics" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
                    {[
                      { label: "Total Views", val: "248.6K", icon: Eye, color: "#38bdf8" },
                      { label: "Total Likes", val: "19.4K", icon: ThumbsUp, color: "#ec4899" },
                      { label: "Comments", val: "1,380", icon: MessageSquare, color: "#facc15" },
                      { label: "Engagement Rate", val: "8.4%", icon: TrendingUp, color: "#10b981" },
                      { label: "Estimated Revenue", val: "₹52,400", icon: DollarSign, color: "#34d399" },
                    ].map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <div key={i} style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>{stat.label}</span>
                            <Icon size={16} style={{ color: stat.color }} />
                          </div>
                          <span style={{ fontSize: 22, fontWeight: 900, color: stat.color, fontFamily: "var(--font-display)" }}>
                            {stat.val}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ background: "rgba(6,16,32,0.85)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 18, padding: 22 }}>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#34d399" }}>
                      Monetization & Revenue Breakdown (This Month)
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
                      <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: 14 }}>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>YouTube Partner AdSense</div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: "#ffffff", marginTop: 4 }}>₹28,600</div>
                      </div>
                      <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: 14 }}>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Brand Sponsorships & Referrals</div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: "#ffffff", marginTop: 4 }}>₹23,800</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
