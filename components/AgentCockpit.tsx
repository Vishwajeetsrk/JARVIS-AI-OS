"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Send, Play, Terminal, Bot, CheckCircle, Volume2, VolumeX,
  Maximize2, Minimize2, X, RefreshCw, Copy, Check, ChevronRight, Zap
} from "lucide-react";

export type AgentNodeSel = { name: string; key: string; color: string };

export type AgentSpec = {
  role: string;
  caps: string[];
  asks?: string[];
  status: "online" | "standby" | "integration";
  systemPrompt?: string;
};

export const AGENT_REGISTRY: Record<string, AgentSpec> = {
  chief_of_staff: {
    role: "Autonomous Executive Orchestrator",
    status: "online",
    caps: [
      "Aggregates Slack, Email, and Calendar action items into unified briefings",
      "Routes high-priority engineering & business requests across specialized agents",
      "Escalates blockers and drafts daily morning executive wraps",
    ],
    asks: ["Generate Today's Executive Briefing", "Scan Slack for dropped customer threads", "Draft weekly progress agenda"],
    systemPrompt: "You are the Chief of Staff in JARVIS AI OS. Summarize, prioritize, and structure daily work with executive clarity.",
  },
  memory: {
    role: "Persistent Knowledge & Memory Vault",
    status: "online",
    caps: [
      "Maintains vector embeddings across all workspace projects and conversations",
      "Automatically injects historical architectural context into new prompts",
      "Tracks user preferences, tool credentials, and coding standards",
    ],
    asks: ["Recall project architecture decisions", "Summarize knowledge base", "List active user preferences"],
    systemPrompt: "You are the Memory Vault curator. You manage long-term persistent context, recall historical decisions, and organize knowledge.",
  },
  strategist: {
    role: "High-Level Product & System Architect",
    status: "online",
    caps: [
      "Evaluates architectural trade-offs, scalability, and system bottlenecks",
      "Designs microservices and end-to-end data pipelines",
      "Plans product roadmaps and milestone dependencies",
    ],
    asks: ["Review system scalability", "Compare database architectures", "Draft MVP launch strategy"],
    systemPrompt: "You are the Principal Systems Strategist. Provide rigorous, first-principles technical architecture and product guidance.",
  },
  researcher: {
    role: "Deep Web & Technical Research Analyst",
    status: "online",
    caps: [
      "Conducts multi-source technical and competitor deep dives",
      "Synthesizes academic papers, documentation, and API specifications",
      "Verifies citations and creates comprehensive research briefs",
    ],
    asks: ["Research WebGPU shader optimizations", "Analyze competitors in AI OS market", "Synthesize OpenAPI 3.1 best practices"],
    systemPrompt: "You are the Deep Research Agent. Deliver thorough, structured, evidence-backed research briefs with actionable takeaways.",
  },
  finance: {
    role: "Usage, Cost & Token Attribution Guard",
    status: "online",
    caps: [
      "Monitors multi-model token spend across OpenAI, Gemini, Groq, and Anthropic",
      "Attributes costs per bot persona and workspace project",
      "Generates monthly budget forecasts and unused SaaS seat alerts",
    ],
    asks: ["Calculate token cost per bot this month", "Identify highest API cost drivers", "Recommend LLM routing optimizations"],
    systemPrompt: "You are the Finance & LLM Cost Optimizer. Provide precise token and financial analysis to maximize ROI.",
  },
  editor: {
    role: "Technical Writing & Quality Assurance Gate",
    status: "online",
    caps: [
      "Refines documentation, READMEs, changelogs, and technical briefs",
      "Enforces consistent tone, clarity, and grammatical precision",
      "Formats code walkthroughs and user-facing announcements",
    ],
    asks: ["Polish release notes for v4.0", "Edit technical architecture doc", "Format PR description"],
    systemPrompt: "You are the Technical Editor. Polish, clarify, and elevate written communication and documentation.",
  },
  sales: {
    role: "Autonomous Prospecting & Sequencing Engine",
    status: "online",
    caps: [
      "Discovers ICP accounts from LinkedIn and GitHub trending repos",
      "Drafts hyper-personalized outreach and follow-up sequences",
      "Syncs qualified pipeline deals into CRM systems",
    ],
    asks: ["Draft personalized outreach to CTOs", "Qualify inbound lead responses", "Generate 5-step email follow-up sequence"],
    systemPrompt: "You are the Sales Outbound specialist. Draft high-converting, concise, highly tailored B2B outreach.",
  },
  marketing: {
    role: "Growth, Content & Launch Strategist",
    status: "online",
    caps: [
      "Generates viral technical launch threads and developer blogs",
      "Analyzes SEO keywords, conversion funnels, and landing page copy",
      "Plans multi-channel product distribution",
    ],
    asks: ["Write a viral X launch thread for JARVIS", "Analyze landing page conversion rate", "Draft newsletter feature spotlight"],
    systemPrompt: "You are the Growth & Marketing Lead. Craft compelling, developer-friendly marketing and launch narratives.",
  },
  ops: {
    role: "DevOps, CI/CD & Cloud Infrastructure",
    status: "online",
    caps: [
      "Automates Docker builds, GitHub Actions workflows, and Kubernetes manifests",
      "Manages Supabase migrations, Cloudflare edge functions, and DNS",
      "Runs automated health checks and self-healing error recovery",
    ],
    asks: ["Generate GitHub Actions CI workflow", "Audit Dockerfile layer caching", "Inspect Supabase database connection pool"],
    systemPrompt: "You are the Infrastructure & DevOps Lead. Produce hardened, production-ready DevOps configurations and scripts.",
  },
  social_media: {
    role: "Multi-Platform Developer Evangelist",
    status: "online",
    caps: [
      "Schedules engaging technical updates across X, LinkedIn, and Discord",
      "Creates visual code snippets and benchmark comparisons",
      "Engages with developer community queries",
    ],
    asks: ["Draft 3 technical tweets on React 19", "Create LinkedIn engineering spotlight", "Summarize weekly open-source commits"],
    systemPrompt: "You are the Developer Community Voice. Write engaging, insightful technical posts that resonate with software engineers.",
  },
  engineering: {
    role: "Full-Stack Software Architect",
    status: "online",
    caps: [
      "Implements modern React 19, TypeScript, Next.js, and TanStack features",
      "Refactors complex algorithms, state machines, and API handlers",
      "Enforces zero-error type safety and pristine architectural boundaries",
    ],
    asks: ["Scaffold full-stack CRUD API route", "Optimize React render performance", "Implement robust error boundary handler"],
    systemPrompt: "You are the Principal Software Engineer. Write elegant, strongly typed, production-grade TypeScript code.",
  },
  design: {
    role: "Creative Technologist & UI/UX Director",
    status: "online",
    caps: [
      "Designs dark-mode glassmorphic interfaces, OKLCH palettes, and fluid layouts",
      "Creates bespoke SVG animations, Three.js shaders, and particle systems",
      "Enforces WCAG accessibility and micro-interaction responsiveness",
    ],
    asks: ["Design cyberpunk glassmorphic card component", "Craft custom GLSL wave shader", "Audit UI color contrast and typography"],
    systemPrompt: "You are the UI/UX & Motion Design Director. Provide breathtaking design specifications and modern CSS/Tailwind code.",
  },
  developer: {
    role: "Autonomous Code Refactoring & Test Engineer",
    status: "online",
    caps: [
      "Writes comprehensive unit, integration, and E2E test suites",
      "Runs automated code linting and regression diagnostics",
      "Modernizes legacy codebases and upgrades framework versions",
    ],
    asks: ["Write Vitest suite for API routes", "Diagnose memory leak in component", "Generate OpenAPI specification from routes"],
    systemPrompt: "You are the Autonomous Code & Test Engineer. Write rigorous tests, fix edge cases, and ensure flawless stability.",
  },
  analytics: {
    role: "Real-Time Telemetry & Metric Engine",
    status: "integration",
    caps: ["Ingests multi-channel events across Slack, GitHub, and Supabase", "Tracks sub-second voice latency (<500ms target) and self-heals errors"],
    asks: ["Display live telemetry overview"],
  },
  crm: {
    role: "Enterprise Pipeline & Client State Store",
    status: "integration",
    caps: ["Synchronizes customer lifecycle stages from lead to active deployment"],
    asks: ["List active CRM pipeline stages"],
  },
  calendar: {
    role: "Time Coordination & Schedule Sense",
    status: "integration",
    caps: ["Orchestrates meetings, cron jobs, and scheduled agent runs"],
    asks: ["Review today's upcoming scheduled tasks"],
  },
  email: {
    role: "Multi-Inbox Scanner & Reply Dispatcher",
    status: "integration",
    caps: ["Categorizes inbound communications and drafts contextual responses"],
    asks: ["Draft response to latest inquiry"],
  },
  drive: {
    role: "Document Parser & Workspace Artifact Vault",
    status: "integration",
    caps: ["Indexes local PDF, Markdown, and source code repositories"],
    asks: ["Search documents for API specs"],
  },
};

export default function AgentCockpit({
  sel,
  onClose,
  onStateChange,
}: {
  sel: AgentNodeSel;
  onClose: () => void;
  onStateChange?: (state: "idle" | "thinking" | "speaking") => void;
}) {
  const spec = AGENT_REGISTRY[sel.key] || {
    role: "Specialist Agent",
    status: "online",
    caps: ["Connected to JARVIS Autonomous Core"],
    asks: ["Run diagnostic scan"],
  };

  const c = sel.color;
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string; time: string; model?: string }>>([
    {
      role: "assistant",
      text: `Greetings. I am your **${sel.name}** specialist. How can I assist your workflow in JARVIS AI OS today?`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("gemini-2.0-flash");
  const [isMaximized, setIsMaximized] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSend = async (customText?: string) => {
    const textToSend = customText || prompt;
    if (!textToSend.trim() || loading) return;

    const userMsg = {
      role: "user" as const,
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);
    onStateChange?.("thinking");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          model,
          agentId: sel.key,
          systemPrompt: spec.systemPrompt,
        }),
      });

      if (!res.ok) throw new Error("API Execution Failed");
      const data = await res.json();

      onStateChange?.("speaking");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply || "Task completed successfully.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          model: data.model || model,
        },
      ]);

      if (autoSpeak && typeof window !== "undefined" && "speechSynthesis" in window) {
        const cleanText = (data.reply || "").replace(/[*#`_\[\]]/g, "").slice(0, 180);
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 1.05;
        window.speechSynthesis.speak(utterance);
      }

      setTimeout(() => {
        onStateChange?.("idle");
      }, 3500);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `⚠️ Execution error: ${err.message || "Failed to contact AI router."}`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      onStateChange?.("idle");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        right: isMaximized ? 20 : "clamp(12px, 3vw, 40px)",
        top: isMaximized ? 20 : "clamp(60px, 9vh, 90px)",
        bottom: isMaximized ? 20 : "clamp(60px, 9vh, 90px)",
        width: isMaximized ? "calc(100vw - 40px)" : "min(480px, 94vw)",
        zIndex: 90,
        background: "rgba(5, 11, 24, 0.94)",
        backdropFilter: "blur(32px)",
        border: `1px solid ${c}66`,
        borderRadius: 24,
        boxShadow: `0 0 60px ${c}26, 0 20px 60px rgba(0,0,0,0.9)`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: `1px solid ${c}28`,
          background: `linear-gradient(135deg, ${c}15 0%, rgba(5,11,24,0.4) 100%)`,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 14,
            background: `${c}20`,
            border: `1px solid ${c}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: `0 0 16px ${c}33`,
          }}
        >
          <Bot size={22} style={{ color: c }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: "0.06em", color: "#ffffff", fontFamily: "var(--font-display)" }}>
              {sel.name.toUpperCase()}
            </span>
            <span
              style={{
                fontSize: 9.5,
                padding: "2px 8px",
                borderRadius: 10,
                background: spec.status === "online" ? "#10b98125" : "#f59e0b25",
                border: `1px solid ${spec.status === "online" ? "#10b98166" : "#f59e0b66"}`,
                color: spec.status === "online" ? "#34d399" : "#fbbf24",
                fontWeight: 700,
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              {spec.status}
            </span>
          </div>
          <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.55)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {spec.role}
          </p>
        </div>

        {/* Model Selector */}
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={{
            background: "rgba(0,0,0,0.6)",
            border: `1px solid ${c}44`,
            borderRadius: 10,
            color: "#f1f5f9",
            fontSize: 11,
            padding: "5px 9px",
            outline: "none",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
          }}
        >
          <option value="gemini-2.0-flash">Gemini 2.0 Flash</option>
          <option value="llama-3.3-70b">Groq LLaMA 3.3 70B</option>
          <option value="deepseek-r1">DeepSeek R1</option>
        </select>

        {/* Audio Toggle & Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <button
            onClick={() => setAutoSpeak((s) => !s)}
            style={{
              background: autoSpeak ? `${c}20` : "none",
              border: `1px solid ${autoSpeak ? c : "transparent"}`,
              borderRadius: 8,
              color: autoSpeak ? c : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              padding: 6,
            }}
            title={autoSpeak ? "Voice feedback ON" : "Voice feedback OFF"}
          >
            {autoSpeak ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>
          <button
            onClick={() => setIsMaximized((m) => !m)}
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.45)", cursor: "pointer", padding: 6 }}
            title={isMaximized ? "Restore size" : "Maximize"}
          >
            {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.45)", cursor: "pointer", padding: 6 }}
            title="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Suggested Quick Triggers */}
      {spec.asks && spec.asks.length > 0 && (
        <div
          style={{
            padding: "10px 16px",
            background: "rgba(0,0,0,0.35)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            overflowX: "auto",
          }}
        >
          <Sparkles size={14} style={{ color: c, flexShrink: 0 }} />
          {spec.asks.map((ask) => (
            <button
              key={ask}
              onClick={() => handleSend(ask)}
              disabled={loading}
              style={{
                background: `${c}12`,
                border: `1px solid ${c}38`,
                borderRadius: 16,
                padding: "4px 12px",
                fontSize: 11,
                color: "rgba(255,255,255,0.9)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = c;
                e.currentTarget.style.background = `${c}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${c}38`;
                e.currentTarget.style.background = `${c}12`;
              }}
            >
              {ask}
            </button>
          ))}
        </div>
      )}

      {/* Messages Scroll Area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "18px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {messages.map((m, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "88%",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "12px 16px",
                borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                background: m.role === "user" ? `linear-gradient(135deg, ${c}ee 0%, ${c}99 100%)` : "rgba(255,255,255,0.05)",
                border: `1px solid ${m.role === "user" ? c : "rgba(255,255,255,0.12)"}`,
                color: m.role === "user" ? "#02050b" : "#f8fafc",
                fontWeight: m.role === "user" ? 600 : 400,
                fontSize: 13,
                lineHeight: 1.65,
                wordBreak: "break-word",
                whiteSpace: "pre-wrap",
                boxShadow: m.role === "user" ? `0 0 20px ${c}33` : "none",
              }}
            >
              {m.text}
              {m.role === "assistant" && (
                <button
                  onClick={() => copyToClipboard(m.text, idx)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.3)",
                    border: "none",
                    borderRadius: 6,
                    color: "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    padding: 4,
                  }}
                  title="Copy text"
                >
                  {copiedIdx === idx ? <Check size={12} style={{ color: "#34d399" }} /> : <Copy size={12} />}
                </button>
              )}
            </div>
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.4)",
                marginTop: 4,
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                display: "flex",
                gap: 6,
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>{m.time}</span>
              {m.model && <span style={{ color: `${c}cc` }}>· {m.model}</span>}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "rgba(255,255,255,0.04)", borderRadius: 14, alignSelf: "flex-start" }}>
            <RefreshCw size={14} className="animate-spin" style={{ color: c }} />
            <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.6)" }}>Orchestrating multi-model reasoning...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{
          padding: "16px 18px",
          borderTop: `1px solid rgba(255,255,255,0.08)`,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={`Command ${sel.name}...`}
          disabled={loading}
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.06)",
            border: `1px solid rgba(255,255,255,0.15)`,
            borderRadius: 14,
            padding: "10px 16px",
            color: "#ffffff",
            fontSize: 12.5,
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = c)}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
        />
        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          style={{
            background: prompt.trim() ? c : "rgba(255,255,255,0.08)",
            color: prompt.trim() ? "#02050b" : "rgba(255,255,255,0.3)",
            border: "none",
            borderRadius: 14,
            padding: "10px 18px",
            cursor: prompt.trim() ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            boxShadow: prompt.trim() ? `0 0 16px ${c}55` : "none",
            transition: "all 0.2s ease",
          }}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
