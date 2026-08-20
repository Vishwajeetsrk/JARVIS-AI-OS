import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import heroImg from "@/assets/console-hero.jpg";
import { StatusBadge } from "@/components/jarvis/status-badge";
import { ArcReactorHud } from "@/components/jarvis/arc-reactor-hud";
import {
  CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Smartphone, Monitor, Terminal,
  Radio, TrendingUp, Users, MemoryStick, Sparkles, ArrowRight, GitBranch,
  Database, Brain, Infinity, Download, ExternalLink, AppWindow, Apple,
  Laptop, Video, Briefcase, Award, HardDrive, Play, Flame, Layers, Star
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "JARVIS AI OS v2.6.0 — Persistent-Memory Autonomous Operating System" },
      {
        name: "description",
        content:
          "JARVIS AI OS: Persistent memory, 3D VRoid companion avatar, 9 autonomous agents, screen recording studio, and office CRM workflow automation.",
      },
    ],
  }),
});

const AGENTS = [
  "Lead Orchestrator", "Work & CRM Agent", "Learning & Code Mentor", "Career & Resume Agent",
  "Project & Product Agent", "YouTube Growth Agent", "Side Income Agent", "Memory Governance",
  "Automation Daemon", "saas-builder", "voice-echo-guard", "storage-health-agent"
];

const CONTEXT_MODES = [
  { id: "focus", name: "🧠 Focus Mode", desc: "Silences distractions, starts 30-min deep work timer." },
  { id: "work", name: "💼 Work Mode", desc: "CRM & Razorpay 7-step donation reconciliation pipeline." },
  { id: "build", name: "🚀 Builder Mode", desc: "Project architecture for Wardelio, Learnify AI & JARVIS." },
  { id: "gym", name: "🏋️ Gym Mode", desc: "Strength workout routine, rest timers, and hydration." },
  { id: "learn", name: "🎓 Learn Mode", desc: "Senior tutor: Concept ➔ Exercise ➔ Real Project Code." },
  { id: "business", name: "💰 Business Mode", desc: "Tracks 4 revenue streams (Services, UI Kits, Micro-SaaS)." },
  { id: "review", name: "🌙 Daily Review", desc: "Review accomplishments and roll over tomorrow's top 5." },
];

const CORE_MODULES = [
  {
    icon: Video,
    title: "Screen Recording & Demo Studio",
    tag: "NEW IN v2.6.0",
    body: "Native 60fps WebRTC recording for full screens, windows, or browser tabs with teleprompter and PIP webcam.",
    highlight: "from-red-500/20 via-pink-500/10 to-transparent border-red-500/30"
  },
  {
    icon: Sparkles,
    title: "3D VRoid Companion (Lumi × Lyra)",
    tag: "60 FPS RENDER",
    body: "Interactive 3D humanoid avatar with real-time mouse eye-tracking, breathing, blinking, and viseme lip-sync.",
    highlight: "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/30"
  },
  {
    icon: HardDrive,
    title: "Laptop Health & Storage Scanner",
    tag: "SAFE CLEANUP",
    body: "Non-destructive Drive C/D analyzer, %TEMP% cleaner, exact hash duplicate finder, and Recycle Bin safety.",
    highlight: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30"
  },
  {
    icon: Briefcase,
    title: "CRM & Salesforce 7-Step Pipeline",
    tag: "AUTOMATION",
    body: "Download Razorpay CSV ➔ Clean in Excel ➔ Verify Contacts ➔ Batch Data Loader ➔ 1-Click Status Email.",
    highlight: "from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/30"
  },
  {
    icon: Award,
    title: "ATS Resume & Career Engine",
    tag: "98/100 ATS SCORE",
    body: "Instant tailored resumes for AI Engineers and Operations Specialists, plus daily 5-phrase English coach.",
    highlight: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/30"
  },
  {
    icon: TrendingUp,
    title: "YouTube Growth & 1➔5 Multiplier",
    tag: "CONTENT ENGINE",
    body: "Dual-channel strategy (VishwaJeetSrK + TinyLifeHacks) turning 1 long video into 3 Shorts + LinkedIn + Blog.",
    highlight: "from-purple-500/20 via-violet-500/10 to-transparent border-purple-500/30"
  }
];

const SURFACES = [
  { title: "Web Console", icon: Monitor, link: "/console", sub: "React 19 + TanStack Hub" },
  { title: "Voice Daemon", icon: Zap, link: "/console", sub: "Python 3.10 + Echo Guard" },
  { title: "Terminal CLI", icon: Terminal, link: "/console", sub: "npx tsx cli/index.ts" },
  { title: "Android Companion", icon: Smartphone, link: "/console", sub: "Capacitor Mobile APK" },
  { title: "Offline Local AI", icon: Brain, link: "/console", sub: "Ollama + Llama 3" },
];

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center rounded-2xl border border-border bg-card/60 p-5 shadow-sm">
      <div className="font-display text-4xl font-extrabold text-cyan-400 md:text-5xl">
        {count}{suffix}
      </div>
      <div className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function LandingPage() {
  const [selectedMode, setSelectedMode] = useState(0);

  const stats = [
    { value: 9, label: "Autonomous Agents", suffix: "" },
    { value: 53, label: "Design Systems & Themes", suffix: "" },
    { value: 7, label: "Context Switching Modes", suffix: "" },
    { value: 0, label: "Memory Lost", suffix: "%" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      <MarketingNav />

      {/* Release Announcement Bar */}
      <div className="border-b border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-purple-950/40 px-4 py-2 text-center text-xs font-mono">
        <a
          href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-300 font-semibold hover:underline"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>🚀 JARVIS AI OS v2.6.0 Released — Screen Recording Studio & Windows Boot Live!</span>
          <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] text-cyan-300">View Releases →</span>
        </a>
      </div>

      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Cyberpunk ambient lighting */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-purple-600/15 blur-[120px]" />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          {/* Holographic Arc Reactor */}
          <div className="cursor-pointer transition-transform hover:scale-105">
            <Link to="/console" title="Click to Launch JARVIS Command Console">
              <ArcReactorHud size={190} state="listening" audioLevel={0.5} statusText="JARVIS CORE // v2.6.0 ACTIVE" />
            </Link>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 shadow-sm">
            <JarvisStar size={14} className="text-cyan-400" />
            <span>v2.6.0 · Persistent-Memory Autonomous Personal AI-OS</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            One Brain. <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Many Shells.</span>
            <br />
            Every Workflow, Remembered.
          </h1>

          <p className="max-w-2xl text-base text-slate-400 md:text-lg">
            JARVIS AI OS runs directly on your Windows laptop and mobile phone. Equipped with a <strong>3D VRoid companion</strong>, <strong>Screen Recording Studio</strong>, <strong>Salesforce & Razorpay automation</strong>, and <strong>9 autonomous agents</strong>.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              to="/console"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all"
            >
              Open JARVIS Console <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all"
            >
              <GitBranch className="h-4 w-4 text-cyan-400" /> GitHub Repository
            </a>
            <a
              href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/20 px-5 py-3.5 text-sm font-medium text-purple-300 hover:bg-purple-900/30 transition-all"
            >
              <Download className="h-4 w-4 text-purple-400" /> Releases (v2.6.0)
            </a>
          </div>

          {/* Interactive 7-Context Modes Strip */}
          <div className="mt-8 w-full max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 text-left flex items-center justify-between">
              <span>⚡ 7 Dynamic Context Modes</span>
              <span className="text-cyan-400">Say "Hey Jarvis, [Mode]"</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-7 text-xs">
              {CONTEXT_MODES.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMode(idx)}
                  className={`rounded-xl border p-2.5 text-center transition-all ${
                    selectedMode === idx
                      ? "border-cyan-500 bg-cyan-500/20 text-white font-bold shadow-md shadow-cyan-500/10"
                      : "border-slate-800 bg-slate-950/50 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  <p className="truncate font-semibold">{m.name}</p>
                </button>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-cyan-500/20 bg-slate-950 p-3 text-left text-xs text-slate-300">
              <span className="font-bold text-cyan-400">{CONTEXT_MODES[selectedMode].name}:</span> {CONTEXT_MODES[selectedMode].desc}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────── */}
      <section className="border-y border-slate-800/80 bg-slate-900/40 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Feature Matrix (v2.6.0) ────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">Built-In Superpowers</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Engineered For Pure High Performance
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Everything you need across content production, software engineering, business automation, and daily focus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CORE_MODULES.map((m) => (
            <div
              key={m.title}
              className={`rounded-2xl border bg-gradient-to-b p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${m.highlight} bg-slate-900/70 backdrop-blur-md`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <m.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[9px] font-bold text-white">
                  {m.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{m.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5 Surfaces Architecture ─────────────────────────────────── */}
      <section className="border-y border-slate-800/80 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">Cross-Platform Sync</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
              5 Front Doors. One Master Brain.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {SURFACES.map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-left hover:border-slate-700 transition-all">
                <s.icon className="h-6 w-6 text-cyan-400 mb-3" />
                <div className="font-display text-base font-bold text-white">{s.title}</div>
                <div className="mt-1 font-mono text-[11px] text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Terminal Quick Launch ───────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
          <Terminal className="mx-auto h-8 w-8 text-cyan-400 mb-3" />
          <h3 className="font-display text-2xl font-bold text-white">1-Click Local Execution</h3>
          <p className="mt-2 text-xs text-slate-400">Clone and launch the full JARVIS ecosystem directly in your shell:</p>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-700 bg-black px-4 py-3 font-mono text-xs text-cyan-300">
            <code>git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git &amp;&amp; cd JARVIS-AI-OS &amp;&amp; npm install &amp;&amp; npm run dev</code>
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/console"
              className="rounded-xl bg-cyan-500 px-6 py-2.5 text-xs font-bold text-black hover:bg-cyan-400 transition-all"
            >
              Open Web Console Now →
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
