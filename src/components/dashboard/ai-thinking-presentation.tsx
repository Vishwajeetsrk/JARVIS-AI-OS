import { useState } from "react";
import {
  Brain, Sparkles, Terminal, Play, CheckCircle2, ChevronRight,
  Code2, Eye, Copy, ExternalLink, Zap, Layers, RefreshCw, Cpu
} from "lucide-react";
import { toast } from "sonner";

interface ReasoningStep {
  id: string;
  stage: string;
  engine: string;
  detail: string;
  latency: string;
  status: "completed" | "processing" | "ready";
}

const MASTER_PROMPTS = [
  {
    title: "🌟 Wardelio 3D Try-On & Haptic Physics",
    category: "Mobile UI/UX",
    prompt: "Jarvis, upgrade Wardelio mobile app on my Desktop with Three.js 3D Virtual Try-On, luxury 3D buttons, and 60fps haptics.",
    gradient: "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-300",
  },
  {
    title: "📰 Top 10 Breaking News Live Stream",
    category: "Live News",
    prompt: "can you tell me top 10 news todays?",
    gradient: "from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-300",
  },
  {
    title: "🧠 Autonomous SaaS PRD & Architecture",
    category: "System Design",
    prompt: "Generate a production-ready PRD, architecture diagram, and security best practices for a multi-tenant AI automation platform.",
    gradient: "from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-300",
  },
  {
    title: "🛡️ Visual Screen & App Bug Hunter",
    category: "Quality Audit",
    prompt: "Audit my current active screen, inspect visual hierarchy, detect layout bugs, and generate step-by-step fix plan.",
    gradient: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-300",
  },
];

export function AIThinkingPresentation({ onExecutePrompt }: { onExecutePrompt?: (p: string) => void }) {
  const [activeTab, setActiveTab] = useState<"reasoning" | "sandbox" | "prompts">("reasoning");
  const [selectedPrompt, setSelectedPrompt] = useState(MASTER_PROMPTS[0].prompt);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationIndex, setSimulationIndex] = useState(4);
  const [sandboxButtonVariant, setSandboxButtonVariant] = useState<"luxury" | "cyber" | "emerald">("luxury");
  const [buttonPressed, setButtonPressed] = useState(false);

  const steps: ReasoningStep[] = [
    {
      id: "1",
      stage: "1. Intent & Context Classification",
      engine: "Groq LLaMA 3.3 70B Versatile",
      detail: "Parsed natural language tokens -> Identified high-priority system action & project context.",
      latency: "18ms",
      status: simulationIndex >= 1 ? "completed" : "ready",
    },
    {
      id: "2",
      stage: "2. Unified Memory & Context Retrieval",
      engine: "Supabase + PostgreSQL Vector Store",
      detail: "Fetched Vishwajeet's preferences, active projects (Wardelio, Learnify AI), and 5 daily pillars.",
      latency: "32ms",
      status: simulationIndex >= 2 ? "completed" : "ready",
    },
    {
      id: "3",
      stage: "3. Multi-Engine Cognitive Reasoning",
      engine: "Google Gemini 2.0 Flash + OpenRouter Gateway",
      detail: "Synthesized multi-modal architecture, code diffs, and structured response vectors.",
      latency: "140ms",
      status: simulationIndex >= 3 ? "completed" : "ready",
    },
    {
      id: "4",
      stage: "4. Autonomous Tool & File Execution",
      engine: "Mastra Agent Core & Node IO Bridge",
      detail: "Created local files, recorded history to .artifacts/history.json, and spoke voice feedback.",
      latency: "45ms",
      status: simulationIndex >= 4 ? "completed" : "ready",
    },
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationIndex(0);
    let curr = 0;
    const interval = setInterval(() => {
      curr += 1;
      setSimulationIndex(curr);
      if (curr >= 4) {
        clearInterval(interval);
        setIsSimulating(false);
        toast.success("Thinking presentation cycle finished!");
      }
    }, 450);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const sandboxCode = `<Mobile3DButton
  variant="${sandboxButtonVariant}"
  size="lg"
  onClick={() => triggerHaptics()}
>
  ✨ Launch Next Action
</Mobile3DButton>`;

  return (
    <section className="rounded-2xl border border-border/80 bg-card/80 p-5 shadow-lg backdrop-blur-md relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Brain className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
              Cognitive Thinking Presentation & Live Sandbox
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-mono text-primary font-bold">
                LIVE ENGINE
              </span>
            </h2>
            <p className="text-xs text-muted-foreground">
              Real-time multi-agent reasoning, interactive code sandbox, and 1-click suggested prompts.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center rounded-lg border border-border bg-surface p-1 text-xs">
          <button
            onClick={() => setActiveTab("reasoning")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-medium transition-all ${
              activeTab === "reasoning"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cpu className="h-3.5 w-3.5" /> Thinking Mode
          </button>
          <button
            onClick={() => setActiveTab("sandbox")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-medium transition-all ${
              activeTab === "sandbox"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="h-3.5 w-3.5" /> Live Sandbox
          </button>
          <button
            onClick={() => setActiveTab("prompts")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-medium transition-all ${
              activeTab === "prompts"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" /> Master Prompts
          </button>
        </div>
      </div>

      {/* TAB 1: THINKING PRESENTATION */}
      {activeTab === "reasoning" && (
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between gap-3 bg-surface/50 p-3 rounded-xl border border-border/60">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              <span>Simulating prompt:</span>
              <span className="font-semibold text-foreground truncate max-w-md">"{selectedPrompt}"</span>
            </div>
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="flex items-center gap-1.5 rounded-lg bg-primary/20 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/30 transition-all active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`h-3 w-3 ${isSimulating ? "animate-spin" : ""}`} />
              Re-run Thinking Flow
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((step) => {
              const isDone = step.status === "completed";
              return (
                <div
                  key={step.id}
                  className={`rounded-xl border p-3.5 transition-all relative ${
                    isDone
                      ? "border-primary/50 bg-primary/5 shadow-sm"
                      : "border-border/60 bg-surface/30 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                      {step.stage}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">{step.latency}</span>
                  </div>
                  <div className="mt-1.5 text-xs font-semibold text-foreground flex items-center gap-1.5">
                    {isDone ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-primary/40 border-t-transparent animate-spin shrink-0" />
                    )}
                    <span className="truncate">{step.engine}</span>
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: LIVE UI SANDBOX */}
      {activeTab === "sandbox" && (
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Live Preview Pane */}
          <div className="rounded-xl border border-border bg-surface/40 p-5 flex flex-col justify-between items-center text-center relative min-h-[220px]">
            <div className="w-full flex items-center justify-between text-xs text-muted-foreground border-b border-border/50 pb-2">
              <span className="font-mono">Interactive Component Canvas</span>
              <div className="flex items-center gap-1.5">
                {(["luxury", "cyber", "emerald"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setSandboxButtonVariant(v)}
                    className={`rounded px-2 py-0.5 text-[10px] font-mono uppercase transition-colors ${
                      sandboxButtonVariant === v
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-surface hover:text-foreground"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Rendered 3D Button Demo */}
            <div className="my-6">
              <button
                onMouseDown={() => setButtonPressed(true)}
                onMouseUp={() => setButtonPressed(false)}
                onClick={() => {
                  toast.success("Haptic 3D button press event triggered!");
                  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(20);
                }}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 transform active:translate-y-1 shadow-lg ${
                  sandboxButtonVariant === "luxury"
                    ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-amber-500/20 border-b-4 border-amber-600"
                    : sandboxButtonVariant === "cyber"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25 border-b-4 border-blue-700"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-500/20 border-b-4 border-teal-700"
                } ${buttonPressed ? "translate-y-1 border-b-0" : ""}`}
              >
                ✨ Test 3D Tactile Press
              </button>
            </div>

            <p className="text-[11px] text-muted-foreground font-mono">
              Rendered with 60 FPS spring physics & Capacitor vibration haptics.
            </p>
          </div>

          {/* Code Viewer Pane */}
          <div className="rounded-xl border border-border bg-slate-950 p-4 font-mono text-xs text-slate-300 relative flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400 font-semibold">Mobile3DButton.tsx</span>
              <button
                onClick={() => copyCode(sandboxCode)}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
              >
                <Copy className="h-3 w-3" /> Copy
              </button>
            </div>
            <pre className="mt-3 overflow-x-auto text-emerald-400 leading-relaxed">
              <code>{sandboxCode}</code>
            </pre>
            <div className="mt-4 pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
              <span>Ready for Wardelio & JARVIS UI</span>
              <span className="text-cyan-400">TypeScript · React 19</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MASTER PROMPTS */}
      {activeTab === "prompts" && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {MASTER_PROMPTS.map((mp) => (
            <div
              key={mp.title}
              className={`rounded-xl border p-4 bg-gradient-to-b ${mp.gradient} flex flex-col justify-between transition-all hover:-translate-y-0.5`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider opacity-75 font-semibold">
                  {mp.category}
                </span>
                <h3 className="mt-1 text-xs font-bold leading-snug">{mp.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed opacity-85 line-clamp-3">
                  "{mp.prompt}"
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPrompt(mp.prompt);
                  if (onExecutePrompt) {
                    onExecutePrompt(mp.prompt);
                  } else {
                    navigator.clipboard.writeText(mp.prompt);
                    toast.success("Prompt copied to clipboard!");
                  }
                }}
                className="mt-3.5 flex items-center justify-center gap-1.5 rounded-lg bg-foreground/10 px-3 py-1.5 text-xs font-semibold hover:bg-foreground/20 transition-all active:scale-95"
              >
                <Play className="h-3 w-3" /> Run Prompt
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
