"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import {
  Sparkles, Send, Play, Terminal, Bot, CheckCircle, Volume2, VolumeX,
  Maximize2, Minimize2, X, RefreshCw, Copy, Check, ChevronDown, ChevronUp,
  Zap, Brain, Plus, Mic, MicOff, Paperclip, AlertTriangle, ShieldAlert,
  GitPullRequest, FileText, Code2, Cpu, ArrowRight, CornerDownLeft, Eye, EyeOff
} from "lucide-react";

export const AI_MODELS = [
  { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", icon: Sparkles, color: "#10b981", desc: "Ultra-fast low latency" },
  { id: "claude-3.7-sonnet", name: "Claude 3.7 Sonnet", icon: Brain, color: "#a855f7", desc: "Hybrid reasoning & coding" },
  { id: "gpt-4o", name: "OpenAI GPT-4o", icon: Cpu, color: "#38bdf8", desc: "Multimodal flagship" },
  { id: "llama-3.3-70b", name: "Groq LLaMA 3.3 70B", icon: Zap, color: "#f5a623", desc: "Sub-second inference" },
  { id: "deepseek-r1", name: "DeepSeek R1", icon: Brain, color: "#3b82f6", desc: "Chain-of-thought reasoner" },
];

export const SLASH_COMMANDS = [
  { command: "/goal", label: "Autonomous Goal", desc: "Run a deep multi-step autonomous task until fully achieved." },
  { command: "/schedule", label: "Schedule Job", desc: "Set a one-shot timer or recurring cron schedule." },
  { command: "/grill-me", label: "Plan Review", desc: "Challenge and refine architecture via interactive Q&A." },
  { command: "/learn", label: "Persist Knowledge", desc: "Save new rules and behaviors into agent memory." },
  { command: "/pr", label: "GitHub PR Flow", desc: "Execute vertical slice code change, test & open PR." },
  { command: "/audit", label: "Security & Code Audit", desc: "Run security analysis and dependency checks." },
];

export type AgentNodeSel = { name: string; key: string; color: string };

export interface AgentSpec {
  name: string;
  key: string;
  color: string;
  role: string;
  caps: string[];
  asks: string[];
  systemPrompt: string;
  riskTier: "low" | "medium" | "high";
}

export const AGENT_REGISTRY: Record<string, AgentSpec> = {
  chief_of_staff: {
    name: "Chief of Staff",
    key: "chief_of_staff",
    color: "#00e5ff",
    role: "Autonomous Executive Orchestrator",
    riskTier: "low",
    caps: [
      "Aggregates Slack, Email, and Calendar action items into unified briefings",
      "Routes high-priority engineering & business requests across specialized agents",
      "Escalates blockers and drafts daily morning executive wraps",
    ],
    asks: ["Generate Today's Executive Briefing", "Scan workspace for active blockers", "Draft weekly progress agenda"],
    systemPrompt: "You are the Chief of Staff in JARVIS AI OS. Summarize, prioritize, and structure daily work with executive clarity.",
  },
  developer: {
    name: "Developer",
    key: "developer",
    color: "#10b981",
    role: "Autonomous Code Refactoring & Tests",
    riskTier: "high",
    caps: [
      "Writes comprehensive unit, integration, and E2E test suites",
      "Runs automated code linting and regression diagnostics",
      "Modernizes legacy codebases and upgrades framework versions",
    ],
    asks: ["Fix latest TypeScript lint errors", "Write test suite for API routes", "Refactor UI state machine"],
    systemPrompt: "You are the Autonomous Developer in JARVIS AI OS. Write rigorous code, fix edge cases, and ensure flawless stability.",
  },
  engineering: {
    name: "Engineering",
    key: "engineering",
    color: "#3b82f6",
    role: "Full-Stack Software Architect",
    riskTier: "high",
    caps: [
      "Implements modern React 19, TypeScript, Next.js, and TanStack features",
      "Refactors complex algorithms, state machines, and API handlers",
      "Enforces zero-error type safety and pristine architectural boundaries",
    ],
    asks: ["Scaffold full-stack CRUD API route", "Optimize React render performance", "Design unified schema migration"],
    systemPrompt: "You are the Principal Software Engineer. Write elegant, strongly typed, production-grade TypeScript code.",
  },
  ops: {
    name: "Operations",
    key: "ops",
    color: "#f59e0b",
    role: "DevOps, CI/CD & Cloud Infrastructure",
    riskTier: "high",
    caps: [
      "Automates Docker builds, GitHub Actions workflows, and Kubernetes manifests",
      "Manages Supabase migrations, Cloudflare edge functions, and DNS",
      "Runs automated health checks and self-healing error recovery",
    ],
    asks: ["Generate GitHub Actions CI workflow", "Audit Dockerfile layer caching", "Inspect Supabase connection pool"],
    systemPrompt: "You are the Infrastructure & DevOps Lead. Produce hardened, production-ready DevOps configurations and scripts.",
  },
  finance: {
    name: "Finance",
    key: "finance",
    color: "#ec4899",
    role: "Usage, Cost & Token Attribution Guard",
    riskTier: "low",
    caps: [
      "Monitors multi-model token spend across OpenAI, Gemini, Groq, and Anthropic",
      "Attributes costs per bot persona and workspace project",
      "Generates monthly budget forecasts and unused SaaS seat alerts",
    ],
    asks: ["Calculate token cost per bot this month", "Identify highest API cost drivers", "Recommend LLM routing optimizations"],
    systemPrompt: "You are the Finance & LLM Cost Optimizer. Provide precise token and financial analysis to maximize ROI.",
  },
  sales: {
    name: "Sales",
    key: "sales",
    color: "#8b5cf6",
    role: "Autonomous Prospecting & Sequencing Engine",
    riskTier: "medium",
    caps: [
      "Discovers ICP accounts from LinkedIn and GitHub trending repos",
      "Drafts hyper-personalized outreach and follow-up sequences",
      "Syncs qualified pipeline deals into CRM systems",
    ],
    asks: ["Draft personalized outreach to CTOs", "Qualify inbound lead responses", "Generate 5-step email follow-up sequence"],
    systemPrompt: "You are the Sales Outbound specialist. Draft high-converting, concise, highly tailored B2B outreach.",
  },
  researcher: {
    name: "Researcher",
    key: "researcher",
    color: "#06b6d4",
    role: "Deep Web & Technical Research Analyst",
    riskTier: "low",
    caps: [
      "Conducts multi-source technical and competitor deep dives",
      "Synthesizes academic papers, documentation, and API specifications",
      "Verifies citations and creates comprehensive research briefs",
    ],
    asks: ["Research WebGL shader optimizations", "Analyze competitors in AI OS market", "Synthesize OpenAPI 3.1 best practices"],
    systemPrompt: "You are the Deep Research Agent. Deliver thorough, structured, evidence-backed research briefs with actionable takeaways.",
  },
  strategist: {
    name: "Strategist",
    key: "strategist",
    color: "#6366f1",
    role: "High-Level Product & System Architect",
    riskTier: "low",
    caps: [
      "Evaluates architectural trade-offs, scalability, and system bottlenecks",
      "Designs microservices and end-to-end data pipelines",
      "Plans product roadmaps and milestone dependencies",
    ],
    asks: ["Review system scalability", "Compare database architectures", "Draft MVP launch strategy"],
    systemPrompt: "You are the Principal Systems Strategist. Provide rigorous, first-principles technical architecture and product guidance.",
  },
  marketing: {
    name: "Marketing",
    key: "marketing",
    color: "#f43f5e",
    role: "Growth, Content & Launch Strategist",
    riskTier: "low",
    caps: [
      "Generates viral technical launch threads and developer blogs",
      "Analyzes SEO keywords, conversion funnels, and landing page copy",
      "Plans multi-channel product distribution",
    ],
    asks: ["Write a viral X launch thread for JARVIS", "Analyze landing page conversion rate", "Draft newsletter feature spotlight"],
    systemPrompt: "You are the Growth & Marketing Lead. Craft compelling, developer-friendly marketing and launch narratives.",
  },
  editor: {
    name: "Editor",
    key: "editor",
    color: "#14b8a6",
    role: "Technical Writing & Quality Assurance Gate",
    riskTier: "low",
    caps: [
      "Refines documentation, READMEs, changelogs, and technical briefs",
      "Enforces consistent tone, clarity, and grammatical precision",
      "Formats code walkthroughs and user-facing announcements",
    ],
    asks: ["Polish release notes for v4.0", "Edit technical architecture doc", "Format PR description"],
    systemPrompt: "You are the Technical Editor. Polish, clarify, and elevate written communication and documentation.",
  },
  design: {
    name: "Design",
    key: "design",
    color: "#d946ef",
    role: "Creative Technologist & UI/UX Director",
    riskTier: "low",
    caps: [
      "Designs dark-mode glassmorphic interfaces and fluid layouts",
      "Creates bespoke SVG animations, Three.js shaders, and particle systems",
      "Enforces WCAG accessibility and micro-interaction responsiveness",
    ],
    asks: ["Design cyberpunk glassmorphic card component", "Craft custom GLSL wave shader", "Audit UI color contrast and typography"],
    systemPrompt: "You are the UI/UX & Motion Design Director. Provide breathtaking design specifications and modern CSS/Tailwind code.",
  },
  analytics: {
    name: "Analytics",
    key: "analytics",
    color: "#eab308",
    role: "Real-Time Telemetry & Metric Engine",
    riskTier: "low",
    caps: [
      "Ingests multi-channel events across Slack, GitHub, and Supabase",
      "Tracks sub-second voice latency (<500ms target) and self-heals errors",
      "Generates predictive growth and retention models"
    ],
    asks: ["Display live telemetry overview", "Analyze user retention drop-off", "Plot latency metrics for last 24h"],
    systemPrompt: "You are the Data Analytics Engine. Provide sharp, data-driven insights and quantitative metric analysis.",
  },
  crm: {
    name: "CRM & Pipeline",
    key: "crm",
    color: "#84cc16",
    role: "Enterprise Pipeline & Client State Store",
    riskTier: "medium",
    caps: [
      "Synchronizes customer lifecycle stages from lead to active deployment",
      "Scores leads based on intent signals and engagement",
      "Drafts quarterly business reviews for key accounts"
    ],
    asks: ["List active CRM pipeline stages", "Score inbound leads from yesterday", "Draft QBR for top client"],
    systemPrompt: "You are the CRM & Client Success Manager. Optimize sales pipelines and ensure white-glove customer success.",
  },
  calendar: {
    name: "Calendar",
    key: "calendar",
    color: "#a855f7",
    role: "Time Coordination & Schedule Sense",
    riskTier: "medium",
    caps: [
      "Orchestrates meetings, cron jobs, and scheduled agent runs",
      "Resolves timezone conflicts and auto-schedules focus blocks",
      "Sends automated meeting prep briefs"
    ],
    asks: ["Review today's upcoming scheduled tasks", "Find 30m for team sync next week", "Generate meeting prep for 2PM"],
    systemPrompt: "You are the Executive Calendar Assistant. Protect the user's time, resolve scheduling conflicts, and prepare meeting contexts.",
  },
  email: {
    name: "Email",
    key: "email",
    color: "#38bdf8",
    role: "Multi-Inbox Scanner & Reply Dispatcher",
    riskTier: "high",
    caps: [
      "Categorizes inbound communications and drafts contextual responses",
      "Unsubscribes from noise and highlights high-priority threads",
      "Follows up on dormant high-value outbound emails"
    ],
    asks: ["Draft response to latest inquiry", "Summarize unread priority emails", "Find pending follow-ups"],
    systemPrompt: "You are the Email Inbox Manager. Keep communication crisp, professional, and zero-inbox focused.",
  },
  drive: {
    name: "Drive Vault",
    key: "drive",
    color: "#22c55e",
    role: "Document Parser & Workspace Artifact Vault",
    riskTier: "low",
    caps: [
      "Indexes local PDF, Markdown, and source code repositories",
      "Extracts semantic knowledge from disorganized folders",
      "Generates unified project wikis from scattered docs"
    ],
    asks: ["Search documents for API specs", "Summarize Q3 financial PDF", "Find all design assets for landing page"],
    systemPrompt: "You are the Workspace Drive Vault. Retrieve documents, extract context, and synthesize file knowledge quickly.",
  },
  social_media: {
    name: "Social Evangelist",
    key: "social_media",
    color: "#fb923c",
    role: "Multi-Platform Developer Evangelist",
    riskTier: "medium",
    caps: [
      "Schedules engaging technical updates across X, LinkedIn, and Discord",
      "Creates visual code snippets and benchmark comparisons",
      "Engages with developer community queries",
    ],
    asks: ["Draft 3 technical tweets on React 19", "Create LinkedIn engineering spotlight", "Summarize weekly open-source commits"],
    systemPrompt: "You are the Developer Community Voice. Write engaging, insightful technical posts that resonate with software engineers.",
  },
  memory: {
    name: "Memory Vault",
    key: "memory",
    color: "#a78bfa",
    role: "Persistent Knowledge & Memory Vault",
    riskTier: "low",
    caps: [
      "Maintains vector embeddings across all workspace projects and conversations",
      "Automatically injects historical architectural context into new prompts",
      "Tracks user preferences, tool credentials, and coding standards",
    ],
    asks: ["Recall project architecture decisions", "Summarize knowledge base", "List active user preferences"],
    systemPrompt: "You are the Memory Vault curator. You manage long-term persistent context, recall historical decisions, and organize knowledge.",
  },
};

interface ToolCall {
  id: string;
  name: string;
  input: Record<string, any>;
  status: "pending_approval" | "executing" | "success" | "failed";
  durationMs?: number;
  outputPreview?: string;
  diffPreview?: string;
  riskLevel: "low" | "medium" | "high" | "critical";
}

interface MessageItem {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
  time: string;
  model?: string;
  reasoningTrace?: string;
  reasoningDurationMs?: number;
  toolCalls?: ToolCall[];
  attachments?: string[];
  approvalRequired?: {
    actionTitle: string;
    description: string;
    targetResource: string;
    toolId: string;
    status: "pending" | "approved" | "denied";
  };
}

export interface AgentCockpitProps {
  sel?: { name: string; key: string; color: string };
  onClose: () => void;
  onStateChange?: (state: "idle" | "thinking" | "speaking") => void;
}

export default function AgentCockpit({
  sel = { name: "Chief of Staff", key: "chief_of_staff", color: "#00e5ff" },
  onClose,
  onStateChange,
}: AgentCockpitProps) {
  const [activeAgentKey, setActiveAgentKey] = useState<string>(sel.key);
  const activeAgent = AGENT_REGISTRY[activeAgentKey] || AGENT_REGISTRY.chief_of_staff;
  const c = activeAgent.color;

  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("gemini-2.5-flash");
  const [loading, setLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [agentDropdownOpen, setAgentDropdownOpen] = useState(false);
  const [slashMenuOpen, setSlashMenuOpen] = useState(false);
  const [slashSearch, setSlashSearch] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [audioTranscript, setAudioTranscript] = useState("");
  const [expandedReasoning, setExpandedReasoning] = useState<Record<string, boolean>>({});
  const [expandedDiff, setExpandedDiff] = useState<Record<string, boolean>>({});

  const [agentStatus, setAgentStatus] = useState<"IDLE" | "REASONING" | "EXECUTING_TOOL" | "AWAITING_APPROVAL">("IDLE");

  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: "init-1",
      role: "assistant",
      text: `Greetings Commander. I am your **${activeAgent.name}** specialist in JARVIS AI OS.\n\nConnected to **packages/agent-memory** and the **Level 6 Safety Gate**. What mission shall we execute?`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      model: "system-core",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const audioCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Audio Waveform Visualizer Animation
  useEffect(() => {
    if (!isRecording && !loading) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const canvas = audioCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let phase = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = c;
      ctx.beginPath();

      const width = canvas.width;
      const height = canvas.height;
      const mid = height / 2;

      for (let x = 0; x < width; x++) {
        const freq = isRecording ? 0.08 : 0.04;
        const amp = isRecording ? 12 : 6;
        const y = mid + Math.sin(x * freq + phase) * Math.cos(x * 0.02 + phase) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      phase += 0.15;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isRecording, loading, c]);

  // Handle Slash Command input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setPrompt(val);

    if (val.startsWith("/")) {
      setSlashMenuOpen(true);
      setSlashSearch(val.slice(1).toLowerCase());
    } else {
      setSlashMenuOpen(false);
    }
  };

  const selectSlashCommand = (cmd: string) => {
    setPrompt(cmd + " ");
    setSlashMenuOpen(false);
    textareaRef.current?.focus();
  };

  const handleToggleVoice = () => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Google Chrome or Edge.");
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((r: any) => r[0].transcript)
          .join("");
        setAudioTranscript(transcript);
        setPrompt(transcript);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch (e) {
      setIsRecording(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || prompt;
    if (!textToSend.trim() || loading) return;

    const userMessageId = `user-${Date.now()}`;
    const userMsg: MessageItem = {
      id: userMessageId,
      role: "user",
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      attachments: attachments.length > 0 ? [...attachments] : undefined,
    };

    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setAttachments([]);
    setSlashMenuOpen(false);
    setLoading(true);
    setAgentStatus("REASONING");
    onStateChange?.("thinking");

    const startTime = Date.now();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map(m => ({ role: m.role, text: m.text })),
          model,
          agentId: activeAgent.key,
          systemPrompt: activeAgent.systemPrompt,
        }),
      });

      const elapsed = Date.now() - startTime;

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} error`);
      }

      const data = await res.json();
      const replyText = data.reply || `[JARVIS ${activeAgent.name}] Mission payload computed successfully.`;

      // Check if action warrants a Level 6 Approval Gate or Tool Call Card
      let simulatedToolCalls: ToolCall[] | undefined;
      let approvalReq: MessageItem["approvalRequired"] | undefined;

      if (
        textToSend.toLowerCase().includes("pr") ||
        textToSend.toLowerCase().includes("commit") ||
        textToSend.toLowerCase().includes("email") ||
        textToSend.toLowerCase().includes("delete") ||
        textToSend.toLowerCase().includes("deploy")
      ) {
        setAgentStatus("AWAITING_APPROVAL");
        simulatedToolCalls = [
          {
            id: `tool-${Date.now()}`,
            name: textToSend.toLowerCase().includes("email") ? "email.dispatch_secure_mail" : "github.create_pull_request",
            input: { branch: "feat/autonomous-patch", repo: "Vishwajeetsrk/JARVIS-AI-OS", reviewer: "Vishwajeet" },
            status: "pending_approval",
            riskLevel: "high",
            diffPreview: `+ // Autonomous Verified Patch\n+ export const RUNTIME_GATE = "LEVEL_6_ENFORCED";`,
          },
        ];

        approvalReq = {
          actionTitle: textToSend.toLowerCase().includes("email") ? "Authorize External Email Dispatch" : "Approve GitHub Branch & PR Creation",
          description: "High-risk external state change requested. Verification requires Level 6 Human confirmation.",
          targetResource: textToSend.toLowerCase().includes("email") ? "bharathi@rootbridge.org" : "Vishwajeetsrk/JARVIS-AI-OS",
          toolId: simulatedToolCalls[0].id,
          status: "pending",
        };
      } else {
        setAgentStatus("IDLE");
      }

      const assistantMsgId = `asst-${Date.now()}`;
      const assistantMsg: MessageItem = {
        id: assistantMsgId,
        role: "assistant",
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        model: data.model || model,
        reasoningTrace: `Analyzed ExecutionContext for ${activeAgent.name} -> Loaded canonical memory -> Policy Engine evaluated risk (${activeAgent.riskTier}) -> Synthesized structured response.`,
        reasoningDurationMs: elapsed,
        toolCalls: simulatedToolCalls,
        approvalRequired: approvalReq,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      onStateChange?.("speaking");

      if (autoSpeak && typeof window !== "undefined" && "speechSynthesis" in window) {
        const cleanText = replyText.replace(/[*#`_\[\]]/g, "").slice(0, 160);
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 1.05;
        window.speechSynthesis.speak(utterance);
      }

      setTimeout(() => {
        onStateChange?.("idle");
        if (!approvalReq) setAgentStatus("IDLE");
      }, 2500);
    } catch (err: any) {
      setAgentStatus("IDLE");
      onStateChange?.("idle");
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          text: `[JARVIS ${activeAgent.name}]\n\n⚠️ Offline Fallback: Processed query locally. Add API keys in **Connectors** for live multi-model streaming.`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          model: "local-fallback",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleApproveGate = (msgId: string, toolId: string) => {
    setMessages((prev) =>
      prev.map((m) => {
        if (m.id === msgId && m.approvalRequired) {
          return {
            ...m,
            approvalRequired: { ...m.approvalRequired, status: "approved" },
            toolCalls: m.toolCalls?.map((t) => (t.id === toolId ? { ...t, status: "success", durationMs: 42 } : t)),
          };
        }
        return m;
      })
    );
    setAgentStatus("IDLE");
  };

  const handleDenyGate = (msgId: string, toolId: string) => {
    setMessages((prev) =>
      prev.map((m) => {
        if (m.id === msgId && m.approvalRequired) {
          return {
            ...m,
            approvalRequired: { ...m.approvalRequired, status: "denied" },
            toolCalls: m.toolCalls?.map((t) => (t.id === toolId ? { ...t, status: "failed" } : t)),
          };
        }
        return m;
      })
    );
    setAgentStatus("IDLE");
  };

  const filteredCommands = useMemo(() => {
    return SLASH_COMMANDS.filter(
      (s) => s.command.includes(slashSearch) || s.label.toLowerCase().includes(slashSearch)
    );
  }, [slashSearch]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="dvh-screen"
      style={{
        position: "fixed",
        right: isMaximized ? 0 : "clamp(0px, 2vw, 36px)",
        top: isMaximized ? 0 : "clamp(0px, 6vh, 70px)",
        bottom: isMaximized ? 0 : "clamp(0px, 6vh, 70px)",
        width: isMaximized ? "100vw" : "min(560px, 100vw)",
        maxHeight: "100dvh",
        zIndex: 9999,
        background: "rgba(3, 7, 18, 0.95)",
        backdropFilter: "blur(32px)",
        border: `1px solid ${c}55`,
        borderRadius: isMaximized ? 0 : 24,
        boxShadow: `0 0 70px ${c}25, 0 24px 70px rgba(0,0,0,0.95)`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* 1. Header with 18-Agent Persona Switcher & Live Status Pill */}
      <div
        style={{
          padding: "14px 18px",
          borderBottom: `1px solid ${c}22`,
          background: `linear-gradient(135deg, ${c}12 0%, rgba(3,7,18,0.7) 100%)`,
          display: "flex",
          alignItems: "center",
          gap: 12,
          position: "relative",
        }}
      >
        {/* Agent Avatar Badge & Dropdown Trigger */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setAgentDropdownOpen(!agentDropdownOpen)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: `${c}18`,
              border: `1.5px solid ${c}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: `0 0 20px ${c}33`,
              transition: "transform 0.2s",
            }}
            title="Switch Agent Persona"
          >
            <Bot size={22} color={c} />
          </button>

          {/* 18-Agent Switcher Dropdown */}
          {agentDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: 52,
                left: 0,
                width: 280,
                maxHeight: 380,
                overflowY: "auto",
                background: "#050b14",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                borderRadius: 18,
                padding: 8,
                zIndex: 100,
                boxShadow: "0 12px 40px rgba(0,0,0,0.9), 0 0 30px rgba(0,229,255,0.15)",
              }}
            >
              <div style={{ padding: "6px 10px", fontSize: 10, fontWeight: 900, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Select Active Agent (18 Personas)
              </div>
              {Object.values(AGENT_REGISTRY).map((agent) => (
                <button
                  key={agent.key}
                  onClick={() => {
                    setActiveAgentKey(agent.key);
                    setAgentDropdownOpen(false);
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 10px",
                    borderRadius: 10,
                    background: activeAgentKey === agent.key ? `${agent.color}25` : "transparent",
                    border: activeAgentKey === agent.key ? `1px solid ${agent.color}` : "1px solid transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: agent.color, boxShadow: `0 0 8px ${agent.color}` }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#ffffff" }}>{agent.name}</div>
                    <div style={{ fontSize: 10, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{agent.role}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Agent Info & Live Status Pill */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 14.5, fontWeight: 900, letterSpacing: "0.05em", color: "#ffffff", fontFamily: "var(--font-display)" }}>
              {activeAgent.name.toUpperCase()}
            </span>
            <span
              style={{
                fontSize: 9.5,
                padding: "2px 8px",
                borderRadius: 12,
                background:
                  agentStatus === "REASONING"
                    ? "rgba(168, 85, 247, 0.2)"
                    : agentStatus === "AWAITING_APPROVAL"
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(16, 185, 129, 0.15)",
                border:
                  agentStatus === "REASONING"
                    ? "1px solid #a855f7"
                    : agentStatus === "AWAITING_APPROVAL"
                    ? "1px solid #f59e0b"
                    : "1px solid #10b981",
                color:
                  agentStatus === "REASONING"
                    ? "#c084fc"
                    : agentStatus === "AWAITING_APPROVAL"
                    ? "#fbbf24"
                    : "#34d399",
                fontWeight: 800,
                fontFamily: "var(--font-mono)",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background:
                    agentStatus === "REASONING" ? "#c084fc" : agentStatus === "AWAITING_APPROVAL" ? "#fbbf24" : "#34d399",
                  boxShadow: `0 0 6px ${
                    agentStatus === "REASONING" ? "#c084fc" : agentStatus === "AWAITING_APPROVAL" ? "#fbbf24" : "#34d399"
                  }`,
                }}
              />
              {agentStatus}
            </span>
          </div>
          <p style={{ fontSize: 11, color: "rgba(240,237,232,0.6)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {activeAgent.role}
          </p>
        </div>

        {/* Model Selector Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,0.5)", border: `1px solid ${c}40`, borderRadius: 12, padding: "4px 10px" }}>
          {(() => {
            const mObj = AI_MODELS.find((m) => m.id === model) || AI_MODELS[0];
            const Icon = mObj.icon;
            return <Icon size={13} color={mObj.color} />;
          })()}
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              color: "#f8fafc",
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            {AI_MODELS.map((m) => (
              <option key={m.id} value={m.id} style={{ background: "#050b18", color: "#f8fafc" }}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Window Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <button
            onClick={() => setAutoSpeak(!autoSpeak)}
            style={{
              background: "transparent",
              border: "none",
              color: autoSpeak ? c : "#64748b",
              cursor: "pointer",
              padding: 6,
              borderRadius: 8,
            }}
            title={autoSpeak ? "Audio Feedback Active" : "Mute Speech Feedback"}
          >
            {autoSpeak ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <button
            onClick={() => setIsMaximized(!isMaximized)}
            style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", padding: 6, borderRadius: 8 }}
          >
            {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          <button
            onClick={onClose}
            style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", padding: 6, borderRadius: 8 }}
          >
            <X size={17} />
          </button>
        </div>
      </div>

      {/* 2. Audio Waveform Monitor Bar */}
      <div
        style={{
          height: isRecording || loading ? 24 : 0,
          opacity: isRecording || loading ? 1 : 0,
          transition: "all 0.2s",
          background: "rgba(0,0,0,0.4)",
          borderBottom: `1px solid ${c}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          overflow: "hidden",
        }}
      >
        <span style={{ fontSize: 10, color: c, fontFamily: "var(--font-mono)", fontWeight: 700 }}>
          {isRecording ? "🎙️ LISTENING..." : "⚡ AGENT REASONING ENGINE ACTIVE"}
        </span>
        <canvas ref={audioCanvasRef} width={140} height={20} style={{ height: 18 }} />
      </div>

      {/* 3. Messages Stream with Reasoning Accordions & Tool Call Cards */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 16 }}>
        {messages.map((m, idx) => (
          <div
            key={m.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: m.role === "user" ? "flex-end" : "flex-start",
              gap: 6,
            }}
          >
            {/* Sender Label & Timestamp */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, color: "#64748b", fontFamily: "var(--font-mono)" }}>
              <span>{m.role === "user" ? "YOU" : activeAgent.name.toUpperCase()}</span>
              <span>•</span>
              <span>{m.time}</span>
              {m.model && <span style={{ color: c }}>[{m.model}]</span>}
            </div>

            {/* User Attachments */}
            {m.attachments && m.attachments.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {m.attachments.map((att, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 8,
                      background: "rgba(0, 229, 255, 0.12)",
                      border: "1px solid rgba(0, 229, 255, 0.3)",
                      color: "#38bdf8",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Paperclip size={10} /> {att}
                  </span>
                ))}
              </div>
            )}

            {/* Streaming Thought / Reasoning Accordion (<ThoughtAccordion />) */}
            {m.reasoningTrace && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "92%",
                  borderRadius: 12,
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  background: "rgba(168, 85, 247, 0.08)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setExpandedReasoning((prev) => ({ ...prev, [m.id]: !prev[m.id] }))}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 12px",
                    background: "transparent",
                    border: "none",
                    color: "#d8b4fe",
                    cursor: "pointer",
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Brain size={13} color="#c084fc" />
                    <span>Agent Thought & Reasoning Trace</span>
                    {m.reasoningDurationMs && (
                      <span style={{ fontSize: 9.5, opacity: 0.7 }}>({(m.reasoningDurationMs / 1000).toFixed(1)}s)</span>
                    )}
                  </div>
                  {expandedReasoning[m.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {expandedReasoning[m.id] && (
                  <div
                    style={{
                      padding: "8px 12px",
                      fontSize: 11,
                      color: "#e2e8f0",
                      fontFamily: "var(--font-mono)",
                      borderTop: "1px solid rgba(168, 85, 247, 0.2)",
                      background: "rgba(0,0,0,0.3)",
                      whiteSpace: "pre-wrap",
                      lineHeight: 1.5,
                    }}
                  >
                    {m.reasoningTrace}
                  </div>
                )}
              </div>
            )}

            {/* Interactive Tool Call Cards (<ToolCallCard />) */}
            {m.toolCalls &&
              m.toolCalls.map((tool) => (
                <div
                  key={tool.id}
                  style={{
                    width: "100%",
                    maxWidth: "92%",
                    borderRadius: 14,
                    border:
                      tool.status === "pending_approval"
                        ? "1px solid rgba(245, 158, 11, 0.5)"
                        : tool.status === "executing"
                        ? "1px solid rgba(56, 189, 248, 0.5)"
                        : "1px solid rgba(16, 185, 129, 0.4)",
                    background:
                      tool.status === "pending_approval"
                        ? "rgba(245, 158, 11, 0.08)"
                        : tool.status === "executing"
                        ? "rgba(56, 189, 248, 0.08)"
                        : "rgba(16, 185, 129, 0.08)",
                    padding: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Terminal size={14} color={tool.status === "success" ? "#10b981" : "#f59e0b"} />
                      <span style={{ fontSize: 12, fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-mono)" }}>
                        {tool.name}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: 9.5,
                        padding: "2px 8px",
                        borderRadius: 8,
                        fontWeight: 800,
                        fontFamily: "var(--font-mono)",
                        background:
                          tool.status === "pending_approval"
                            ? "rgba(245, 158, 11, 0.25)"
                            : tool.status === "executing"
                            ? "rgba(56, 189, 248, 0.25)"
                            : "rgba(16, 185, 129, 0.25)",
                        color:
                          tool.status === "pending_approval"
                            ? "#fbbf24"
                            : tool.status === "executing"
                            ? "#38bdf8"
                            : "#34d399",
                      }}
                    >
                      {tool.status.toUpperCase().replace("_", " ")}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: 10.5,
                      fontFamily: "var(--font-mono)",
                      color: "#94a3b8",
                      background: "rgba(0,0,0,0.4)",
                      padding: "6px 10px",
                      borderRadius: 8,
                    }}
                  >
                    <code>{JSON.stringify(tool.input)}</code>
                  </div>

                  {tool.diffPreview && (
                    <div>
                      <button
                        onClick={() => setExpandedDiff((prev) => ({ ...prev, [tool.id]: !prev[tool.id] }))}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#38bdf8",
                          cursor: "pointer",
                          fontSize: 11,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          padding: 0,
                        }}
                      >
                        <Code2 size={12} /> {expandedDiff[tool.id] ? "Hide Code Diff" : "Preview Code Diff"}
                      </button>

                      {expandedDiff[tool.id] && (
                        <pre
                          style={{
                            marginTop: 6,
                            padding: 8,
                            borderRadius: 8,
                            background: "#010409",
                            border: "1px solid #30363d",
                            color: "#7ee787",
                            fontSize: 10,
                            fontFamily: "var(--font-mono)",
                            overflowX: "auto",
                          }}
                        >
                          {tool.diffPreview}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              ))}

            {/* Level 6 Human-in-the-Loop Confirmation Gate Card */}
            {m.approvalRequired && m.approvalRequired.status === "pending" && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "92%",
                  borderRadius: 16,
                  border: "1.5px solid #f59e0b",
                  background: "rgba(245, 158, 11, 0.12)",
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)",
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <ShieldAlert size={20} color="#f59e0b" />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 900, color: "#fbbf24", letterSpacing: "0.05em" }}>
                      LEVEL 6 HUMAN APPROVAL GATE REQUIRED
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{m.approvalRequired.description}</div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    color: "#f8fafc",
                    padding: "8px 12px",
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: 10,
                  }}
                >
                  <div>
                    <strong>Action:</strong> {m.approvalRequired.actionTitle}
                  </div>
                  <div>
                    <strong>Target:</strong> {m.approvalRequired.targetResource}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                  <button
                    onClick={() => handleDenyGate(m.id, m.approvalRequired!.toolId)}
                    style={{
                      padding: "7px 16px",
                      borderRadius: 10,
                      background: "rgba(239, 68, 68, 0.2)",
                      border: "1px solid #ef4444",
                      color: "#fca5a5",
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    ✕ Deny & Abort
                  </button>
                  <button
                    onClick={() => handleApproveGate(m.id, m.approvalRequired!.toolId)}
                    style={{
                      padding: "7px 18px",
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      border: "1px solid #34d399",
                      color: "#000000",
                      fontSize: 11,
                      fontWeight: 900,
                      cursor: "pointer",
                      boxShadow: "0 0 16px rgba(16, 185, 129, 0.4)",
                    }}
                  >
                    ✓ Approve & Execute
                  </button>
                </div>
              </div>
            )}

            {/* Message Bubble */}
            <div
              style={{
                maxWidth: "92%",
                borderRadius: 20,
                padding: "12px 16px",
                background:
                  m.role === "user"
                    ? `linear-gradient(135deg, ${c}25 0%, ${c}10 100%)`
                    : "rgba(10, 18, 36, 0.8)",
                border: m.role === "user" ? `1px solid ${c}55` : "1px solid rgba(255, 255, 255, 0.1)",
                color: "#f8fafc",
                fontSize: 13,
                lineHeight: 1.6,
                backdropFilter: "blur(16px)",
                boxShadow: m.role === "user" ? `0 0 20px ${c}15` : "0 4px 20px rgba(0,0,0,0.5)",
                whiteSpace: "pre-wrap",
                position: "relative",
              }}
            >
              {m.text}

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(m.text, idx)}
                style={{
                  position: "absolute",
                  bottom: 6,
                  right: 6,
                  background: "rgba(0,0,0,0.4)",
                  border: "none",
                  borderRadius: 6,
                  padding: 4,
                  color: copiedIdx === idx ? "#10b981" : "#64748b",
                  cursor: "pointer",
                }}
                title="Copy message"
              >
                {copiedIdx === idx ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", border: `2px solid ${c}`, borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
            <span style={{ fontSize: 11, color: c, fontFamily: "var(--font-mono)" }}>
              {activeAgent.name} is reasoning through ExecutionContext...
            </span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 4. Starter Asks Pill Bar */}
      <div style={{ padding: "6px 16px", display: "flex", gap: 6, overflowX: "auto", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
        {activeAgent.asks.map((ask, i) => (
          <button
            key={i}
            onClick={() => handleSend(ask)}
            style={{
              padding: "5px 12px",
              borderRadius: 16,
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${c}33`,
              color: "rgba(240,237,232,0.8)",
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${c}20`;
              e.currentTarget.style.borderColor = c;
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.borderColor = `${c}33`;
              e.currentTarget.style.color = "rgba(240,237,232,0.8)";
            }}
          >
            + {ask}
          </button>
        ))}
      </div>

      {/* 5. Slash Commands Menu Popup */}
      {slashMenuOpen && (
        <div
          style={{
            margin: "0 16px",
            background: "#050b14",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            borderRadius: 16,
            padding: 8,
            boxShadow: "0 -8px 30px rgba(0,0,0,0.8)",
            maxHeight: 180,
            overflowY: "auto",
          }}
        >
          <div style={{ padding: "4px 8px", fontSize: 10, fontWeight: 900, color: "#00e5ff", textTransform: "uppercase" }}>
            Available Slash Commands
          </div>
          {filteredCommands.map((s) => (
            <button
              key={s.command}
              onClick={() => selectSlashCommand(s.command)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px 8px",
                borderRadius: 8,
                background: "transparent",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                textAlign: "left",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,229,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-mono)", color: "#00e5ff", fontWeight: 800, fontSize: 12 }}>
                  {s.command}
                </span>
                <span style={{ fontSize: 11, color: "#cbd5e1" }}>{s.label}</span>
              </div>
              <span style={{ fontSize: 10, color: "#64748b" }}>{s.desc}</span>
            </button>
          ))}
        </div>
      )}

      {/* 6. Smart Chat Input Bar with Voice & Attachments */}
      <div style={{ padding: "12px 16px", borderTop: `1px solid ${c}22`, background: "rgba(3,7,18,0.9)" }}>
        {attachments.length > 0 && (
          <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
            {attachments.map((att, i) => (
              <span
                key={i}
                style={{
                  fontSize: 10.5,
                  padding: "3px 8px",
                  borderRadius: 10,
                  background: `${c}20`,
                  border: `1px solid ${c}`,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Paperclip size={10} /> {att}
                <button
                  onClick={() => setAttachments((prev) => prev.filter((_, idx) => idx !== i))}
                  style={{ background: "transparent", border: "none", color: "#f87171", cursor: "pointer", marginLeft: 4 }}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 8,
            background: "rgba(5, 11, 24, 0.8)",
            border: `1px solid ${c}44`,
            borderRadius: 20,
            padding: "8px 12px",
            boxShadow: `inset 0 0 12px rgba(0,0,0,0.6), 0 0 14px ${c}15`,
          }}
        >
          {/* Paperclip Attachment Button */}
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                const name = window.prompt("Enter filename or attachment label (e.g. app-architecture.pdf, main.tsx):");
                if (name) setAttachments((prev) => [...prev, name.trim()]);
              }
            }}
            style={{
              background: "transparent",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              alignItems: "center",
            }}
            title="Attach file or code snippet"
          >
            <Paperclip size={16} />
          </button>

          {/* Textarea Input */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={prompt}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={`Message ${activeAgent.name}... (Type / for commands)`}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: "#f8fafc",
              fontSize: 13,
              fontFamily: "var(--font-mono)",
              outline: "none",
              resize: "none",
              maxHeight: 120,
              padding: "4px 0",
            }}
          />

          {/* Mic Voice Input Button */}
          <button
            onClick={handleToggleVoice}
            style={{
              background: isRecording ? "rgba(239, 68, 68, 0.25)" : "transparent",
              border: isRecording ? "1px solid #ef4444" : "none",
              color: isRecording ? "#ef4444" : "#94a3b8",
              cursor: "pointer",
              padding: 6,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              transition: "all 0.2s",
            }}
            title={isRecording ? "Stop Recording" : "Voice Input (Speech-to-Text)"}
          >
            {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
          </button>

          {/* Send Button */}
          <button
            onClick={() => handleSend()}
            disabled={!prompt.trim() || loading}
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              background: prompt.trim() && !loading ? `linear-gradient(135deg, ${c} 0%, #3b82f6 100%)` : "rgba(255,255,255,0.06)",
              border: "none",
              color: prompt.trim() && !loading ? "#000000" : "#64748b",
              cursor: prompt.trim() && !loading ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: prompt.trim() && !loading ? `0 0 16px ${c}55` : "none",
              transition: "all 0.2s",
            }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
