import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import {
  CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Smartphone, Monitor, Terminal,
  Radio, TrendingUp, Users, MemoryStick, Sparkles, ArrowRight, GitBranch,
  Database, Brain, Infinity, Download, ExternalLink, AppWindow, Apple,
  Laptop, Video, Briefcase, Award, HardDrive, Play, Flame, Layers, Star,
  MessageSquare, Wand2, FileText, Trash2, Calendar, Presentation, FileSpreadsheet,
  Mic, Volume2, Code2, Bot, PlayCircle, BarChart3, ChevronRight, Activity,
  Check, Copy, BookOpen, Tablet, Eye
} from "lucide-react";
import { Earth3DGlobe } from "@/components/ui/earth-3d-globe";
import { BookFlipAnimation } from "@/components/ui/book-flip-animation";
import { InteractivePricing } from "@/components/ui/interactive-pricing";
import { InteractiveTestimonials } from "@/components/ui/interactive-testimonials";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "JARVIS AI OS — Autonomous Personal Intelligence Operating System" },
      {
        name: "description",
        content:
          "Aceternity-style Autonomous AI OS. 8-bot fleet, 2-minute custom voice cloning, universal app builder, 3D VRM companion, and persistent memory.",
      },
    ],
  }),
});

const BOT_ROLES = [
  { id: "chief_of_staff", name: "Chief of Staff", icon: "👔", role: "Executive Priorities & Inbox Triage", desc: "Scans Slack, Gmail, and Google Calendar. Surfaces morning briefings and prevents dropped threads.", path: "/console/fleet" },
  { id: "sales_outbound", name: "Sales Outbound", icon: "🎯", role: "ICP Lead Discovery & Sequences", desc: "Automated prospect enrichment with Apollo/Clearbit and personalized email sequences.", path: "/console/fleet" },
  { id: "talent_scout", name: "Talent Scout", icon: "🕵️", role: "Candidate Sourcing & Screening", desc: "Filters top 1% engineering portfolios, schedules interview rounds, and drafts offer letters.", path: "/console/fleet" },
  { id: "paid_media", name: "Paid Media", icon: "📈", role: "Ad Spend & ROAS Optimizer", desc: "Real-time automated budget reallocation across Meta, Google Ads, and TikTok.", path: "/console/fleet" },
  { id: "expense_manager", name: "Expense Manager", icon: "💳", role: "Invoice OCR & SaaS Audits", desc: "Automatic receipt reconciliation with Stripe & QuickBooks to stop software waste.", path: "/console/fleet" },
  { id: "product_health", name: "Product Performance", icon: "📊", role: "Funnel Analysis & Churn Alerts", desc: "PostHog & Sentry event clustering to identify onboarding blockers before users churn.", path: "/console/fleet" },
  { id: "bug_repro", name: "Bug Reproduction", icon: "🐛", role: "Sentry Ingestion & Playwright Repro", desc: "Reads stack traces, writes automated Playwright repro test scripts, and proposes AST code fixes.", path: "/console/fleet" },
  { id: "account_health", name: "Account Health", icon: "🛡️", role: "Client Retention & QBR Decks", desc: "Monitors health scores, flags retention risks, and automatically scaffolds 10-slide QBR decks.", path: "/console/fleet" },
];

const SOTA_CASES = [
  { id: "reply", title: "Reply Rescue", desc: "Contextual message responder with 6 calibrated tones.", icon: MessageSquare, tag: "Communication" },
  { id: "prompt", title: "Prompt Rescue", desc: "Transforms rough thoughts into production-ready prompts.", icon: Wand2, tag: "AI Engineering" },
  { id: "resume", title: "Resume Rescue", desc: "ATS-optimized career highlights with authentic verified facts.", icon: FileText, tag: "Career" },
  { id: "cleanup", title: "Workspace Cleanup", desc: "Safe file scanning with Windows Recycle Bin staging.", icon: Trash2, tag: "System" },
  { id: "wrap", title: "Daily Wrap", desc: "End-of-day accomplishment audit and tomorrow's top 5 priorities.", icon: Calendar, tag: "Productivity" },
  { id: "research", title: "Market Research", desc: "Intelligence briefs separating verified facts from assumptions.", icon: TrendingUp, tag: "Intelligence" },
  { id: "presentation", title: "Presentation Studio", desc: "16:9 widescreen master decks with KPI callouts.", icon: Presentation, tag: "Studio" },
  { id: "sheet", title: "Spreadsheet Studio", desc: "Multi-sheet workbooks with KPI dashboard cards & formulas.", icon: FileSpreadsheet, tag: "Finance" },
];

const CODE_EXAMPLES = [
  {
    title: "Chief of Staff Routine",
    prompt: "@chief_of_staff scan morning priorities across Slack & Gmail",
    code: `// Autonomous Chief of Staff Priority Triage
const digest = await chiefOfStaff.runMorningScan({
  sources: ["slack", "gmail", "calendar"],
  threshold: "action_required"
});
// 3 Dropped threads flagged • 2 Approvals scheduled`,
  },
  {
    title: "2-Min Custom Voice Clone",
    prompt: "Clone reference audio into custom voice slot 'vx_jarvis'",
    code: `// Real-Time Voice Synthesis (<400ms latency)
const voice = await voiceCloner.createVoice({
  sampleUrl: "reference_120s.wav",
  prosody: "warm",
  languages: ["en", "hi", "fr", "es", "ja"]
});`,
  },
  {
    title: "Universal App Forge",
    prompt: "Scaffold Full-Stack SaaS with Supabase Auth & Stripe",
    code: `// Universal App Generator (TanStack Start + PostgreSQL)
const app = await appForge.scaffold({
  stack: "tanstack-start-supabase",
  routes: ["/auth", "/dashboard", "/billing"],
  exportTarget: "zip"
});`,
  },
];

export function LandingPage() {
  const [activeTab, setActiveTab] = useState<"fleet" | "voice" | "apps" | "motion">("fleet");
  const [codeIdx, setCodeIdx] = useState(0);
  const [voicePlaying, setVoicePlaying] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [codeModalSite, setCodeModalSite] = useState<string | null>(null);
  const [codeModalContent, setCodeModalContent] = useState("");
  const [copiedModal, setCopiedModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeIdx((prev) => (prev + 1) % CODE_EXAMPLES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleShowCode = async (slug: string) => {
    setCodeModalSite(slug);
    setCodeModalContent("Loading source code…");
    try {
      const res = await fetch(`/preset-sites/${slug}/index.html`);
      const html = await res.text();
      setCodeModalContent(html.slice(0, 12000));
    } catch {
      setCodeModalContent("Failed to load code.");
    }
  };

  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <MarketingNav />

      {/* ── Aceternity Vibrant Hero Section ─────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32 border-b border-purple-500/20 bg-gradient-to-b from-[#060814] via-[#04060C] to-[#04060C]">
        {/* Aceternity Radial Mesh Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-cyan-500/25 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-cyan-500/15 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#312e8115_1px,transparent_1px),linear-gradient(to_bottom,#312e8115_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/50 px-4 py-1.5 text-xs text-purple-300 backdrop-blur-xl shadow-lg shadow-purple-950/60"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-purple-400" />
            <span className="font-semibold uppercase tracking-wider font-mono">Autonomous AI OS • Version 3.0 Master Release</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-6xl leading-[1.05]"
          >
            The Operating System for <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              Autonomous Intelligence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed font-sans"
          >
            Orchestrate an 8-bot autonomous workforce, clone custom human voices in 2 minutes, generate full-stack web and mobile applications with live Monaco code editing, and store infinite context with 4-tier neural memory on Supabase Cloud.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/console"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              <Zap className="w-4 h-4 text-cyan-300 fill-current" />
              <span>Launch Command Console</span>
            </Link>
            <Link
              to="/console/fleet"
              className="inline-flex items-center gap-2 rounded-2xl border border-purple-500/30 bg-purple-950/30 px-6 py-4 text-sm font-semibold text-purple-200 hover:bg-purple-900/40 transition-all hover:border-purple-400/60 shadow-lg backdrop-blur-md"
            >
              <Users className="w-4 h-4 text-purple-400" />
              <span>8-Bot Autonomous Fleet</span>
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-950/30 px-6 py-4 text-sm font-semibold text-cyan-300 hover:bg-cyan-900/40 transition-all hover:border-cyan-400/60 shadow-lg backdrop-blur-md"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Interactive Blog &amp; Docs</span>
            </Link>
          </motion.div>

          {/* ── ALL-IN-ONE HERO CENTERPIECE ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="w-full max-w-6xl pt-8"
          >
            <div className="rounded-3xl border border-purple-500/30 bg-[#080B18]/90 p-4 sm:p-8 shadow-2xl shadow-purple-950/50 backdrop-blur-2xl text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Centerpiece Column 1: Live Autonomous Terminal Simulator */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-xs text-slate-400">jarvis-terminal ~ live-autonomous-agent</span>
                    </div>
                    <span className="font-mono text-[11px] text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                      Gemini 2.0 Flash
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-slate-400 font-mono">
                      <span className="text-cyan-400 font-bold">$ jarvis</span> {CODE_EXAMPLES[codeIdx].prompt}
                    </div>
                    <pre className="p-4 rounded-2xl bg-black/80 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
                      <code>{CODE_EXAMPLES[codeIdx].code}</code>
                    </pre>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-2 font-mono text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Execution Status: Optimal (200 OK)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {CODE_EXAMPLES.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCodeIdx(i)}
                          className={`h-2 rounded-full transition-all ${codeIdx === i ? "w-6 bg-purple-500" : "w-2 bg-slate-700"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Centerpiece Column 2: 3D Holographic Orbit & Voice Waveform */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="rounded-2xl border border-slate-800 bg-black/60 p-3 h-[240px] flex items-center justify-center overflow-hidden relative">
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30 z-10">
                      3D Holographic Orbit Matrix
                    </div>
                    <Earth3DGlobe />
                  </div>

                  <div className="p-4 rounded-2xl border border-purple-500/20 bg-purple-950/20 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <Mic className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Sub-Second Real-Time Voice</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">395ms average latency • 30 Cloned Voice Slots</div>
                    </div>
                    <Link
                      to="/console/voice"
                      className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs hover:bg-emerald-500/30 transition-all"
                    >
                      Open Studio
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bento Telemetry Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Autonomous Fleet</div>
                  <div className="text-base font-bold text-white mt-0.5">8 Bots Active</div>
                  <div className="text-[11px] text-purple-400 font-medium">Chief of Staff • Sales</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Voice Engine</div>
                  <div className="text-base font-bold text-white mt-0.5">&lt; 400ms</div>
                  <div className="text-[11px] text-emerald-400 font-medium">25+ Languages Timbre</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Universal Forge</div>
                  <div className="text-base font-bold text-white mt-0.5">Web • Mobile • Ext</div>
                  <div className="text-[11px] text-cyan-400 font-medium">React Native &amp; Expo</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Supabase Cloud</div>
                  <div className="text-base font-bold text-white mt-0.5">15 Tables Online</div>
                  <div className="text-[11px] text-pink-400 font-medium">4-Tier Vector Memory</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Interactive Core Engines Matrix ─────────────────────────────── */}
      <section className="py-24 border-b border-purple-500/20 bg-[#060812]">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">Interactive Laboratories</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Experience All 4 Operating Layers</h2>
            <p className="text-sm text-slate-400">Switch between interactive previews to explore how JARVIS coordinates autonomous workflows, voice cloning, universal app scaffolding, and 3D visual motion.</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-purple-500/30 bg-purple-950/40 max-w-2xl mx-auto backdrop-blur-xl">
            {[
              { id: "fleet", label: "🤖 8-Bot Fleet", color: "text-purple-400" },
              { id: "voice", label: "🎙️ Voice Studio", color: "text-emerald-400" },
              { id: "apps", label: "🏗️ App Builder", color: "text-cyan-400" },
              { id: "motion", label: "🎨 3D Motion Lab", color: "text-amber-400" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === t.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="rounded-3xl border border-purple-500/30 bg-[#080B18]/90 p-6 md:p-10 shadow-2xl backdrop-blur-2xl">
            <AnimatePresence mode="wait">
              {activeTab === "fleet" && (
                <motion.div
                  key="fleet"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>👔 Chief of Staff &amp; 8 Autonomous Bot Personas</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Autonomous roles execute background tasks on schedule routines with tool access and priority escalation.</p>
                    </div>
                    <Link
                      to="/console/fleet"
                      className="px-4 py-2 rounded-xl bg-purple-500 text-white font-bold text-xs hover:bg-purple-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Fleet Dashboard</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {BOT_ROLES.map((bot) => (
                      <div key={bot.id} className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-purple-500/50 transition-all group flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl p-2 rounded-xl bg-slate-800">{bot.icon}</span>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">Always-On</span>
                          </div>
                          <h4 className="text-sm font-bold text-white mt-2 group-hover:text-purple-300 transition-colors">{bot.name}</h4>
                          <p className="text-[11px] text-purple-400/90 font-medium">{bot.role}</p>
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{bot.desc}</p>
                        </div>
                        <Link
                          to={bot.path}
                          className="text-[11px] font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 pt-2 border-t border-slate-800/60"
                        >
                          <span>Trigger bot</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "voice" && (
                <motion.div
                  key="voice"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>🎙️ Real-Time Voice Studio &amp; 2-Minute Voice Cloner</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Sub-400ms speech-to-speech with prosody emotion tags and 30 free custom cloned voice slots.</p>
                    </div>
                    <Link
                      to="/console/voice"
                      className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Voice Studio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                      <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">Live Cloner Preview</div>
                      <h4 className="text-base font-bold text-white">Clone in 120 Seconds</h4>
                      <p className="text-xs text-slate-400">Speak or upload a 90–120s reference audio sample. JARVIS extracts pitch, timbre, and cadence for realistic multilingual playback.</p>
                      <button
                        onClick={() => setVoicePlaying(!voicePlaying)}
                        className="px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 hover:bg-emerald-500/30 transition-all shadow-md"
                      >
                        <Volume2 className={`w-4 h-4 ${voicePlaying ? "animate-bounce" : ""}`} />
                        <span>{voicePlaying ? "Playing Synthesis..." : "Play Sample Voice"}</span>
                      </button>
                    </div>

                    <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-mono uppercase text-slate-400">Emotional Prosody &amp; Speed</div>
                        <span className="text-xs text-emerald-400 font-mono">Latency: 395ms</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["Warm", "Friendly", "Authoritative", "Energetic"].map((tone) => (
                          <div key={tone} className="p-3 rounded-xl border border-slate-800 bg-slate-950/80 text-center">
                            <div className="text-xs font-bold text-slate-200">{tone}</div>
                            <div className="text-[10px] text-slate-500 mt-1">Tone Modifier</div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">&lt;emotion=warm&gt;</span> Good morning Vishwajeet. I've prepared today's morning briefing across your 8 bots. All systems are fully operational.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "apps" && (
                <motion.div
                  key="apps"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>🏗️ Universal Multi-Platform App Builder</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Generate Full-Stack SaaS, React Native Mobile Apps, 3D Websites, and Chrome Extensions with 1-click Monaco editing.</p>
                    </div>
                    <Link
                      to="/console/apps"
                      className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>Open App Builder</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Full-Stack SaaS Platform", stack: "TanStack Start + PostgreSQL + Supabase", icon: Globe, tag: "Web App" },
                      { title: "Cross-Platform Mobile App", stack: "React Native 0.74 + Expo Router + SQLite", icon: Smartphone, tag: "Mobile" },
                      { title: "AI Chrome Extension", stack: "Manifest V3 + Content Script + Side Panel", icon: AppWindow, tag: "Extension" },
                    ].map((app) => {
                      const Icon = app.icon;
                      return (
                        <div key={app.title} className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
                          <div className="flex items-center justify-between">
                            <Icon className="w-6 h-6 text-cyan-400" />
                            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">{app.tag}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{app.title}</h4>
                          <p className="text-xs text-slate-400 font-mono">{app.stack}</p>
                          <Link
                            to="/console/apps"
                            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 pt-2"
                          >
                            <span>Scaffold in Builder</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === "motion" && (
                <motion.div
                  key="motion"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>🎨 3D Motion &amp; Premium UI Components Hub</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Interactive 3D Earth Globe, Book Page Flip animations, pricing cards, and 67+ preset template sites.</p>
                    </div>
                    <Link
                      to="/console/components"
                      className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore 3D Motion Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                      <div className="text-xs font-mono uppercase text-amber-400 font-semibold mb-2">Interactive 3D Earth Globe</div>
                      <Earth3DGlobe />
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                      <div className="text-xs font-mono uppercase text-amber-400 font-semibold mb-2">3D Book Page Flip Animation</div>
                      <BookFlipAnimation />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 67+ Preset Template Sites Gallery ───────────────────────────── */}
      <section className="py-24 border-b border-purple-500/20 bg-[#04060E]">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Template Showcase</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">67+ Live Preset Sites &amp; Code Studio</h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Explore full client-rendered applications with live interactive iframe previews and 1-click source code inspection.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <button onClick={() => setPreviewDevice("desktop")} className={`p-1.5 rounded-lg text-xs flex items-center gap-1 ${previewDevice === "desktop" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-white"}`}><Monitor className="w-3.5 h-3.5" /> Desktop</button>
              <button onClick={() => setPreviewDevice("tablet")} className={`p-1.5 rounded-lg text-xs flex items-center gap-1 ${previewDevice === "tablet" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-white"}`}><Tablet className="w-3.5 h-3.5" /> Tablet</button>
              <button onClick={() => setPreviewDevice("mobile")} className={`p-1.5 rounded-lg text-xs flex items-center gap-1 ${previewDevice === "mobile" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-white"}`}><Smartphone className="w-3.5 h-3.5" /> Mobile</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PresetGalleryCard
              p={{ slug: "crm-lead-management-panel-staffu-admin-template", title: "CRM Lead Pipeline & Analytics Panel", accent: "from-blue-950/40 to-slate-950" }}
              previewDevice={previewDevice}
              onShowCode={handleShowCode}
            />
            <PresetGalleryCard
              p={{ slug: "clucky-the-rooster-alarm-that-gets-you-up", title: "Clucky Rooster Interactive Audio Alarm", accent: "from-amber-950/40 to-slate-950" }}
              previewDevice={previewDevice}
              onShowCode={handleShowCode}
            />
          </div>

          <Dialog open={!!codeModalSite} onOpenChange={(o) => !o && setCodeModalSite(null)}>
            <DialogContent className="max-w-3xl bg-[#0f0f14] border-purple-500/30">
              <DialogHeader><DialogTitle className="text-white font-mono text-sm">Source Code — {codeModalSite}</DialogTitle></DialogHeader>
              <div className="relative">
                <button onClick={() => { navigator.clipboard.writeText(codeModalContent); setCopiedModal(true); setTimeout(() => setCopiedModal(false), 1500); }} className="absolute right-2 top-2 inline-flex items-center gap-1 rounded bg-slate-800 px-2.5 py-1 text-xs text-slate-200 hover:bg-slate-700">
                  {copiedModal ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />} {copiedModal ? "Copied" : "Copy Source"}
                </button>
                <pre className="max-h-[60vh] overflow-auto rounded-xl bg-black p-4 font-mono text-xs text-slate-200 scrollbar-thin">{codeModalContent}</pre>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ── 100 SOTA Use Cases Showcase ─────────────────────────────────── */}
      <section className="py-24 border-b border-purple-500/20 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Autonomous Capabilities</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Conquer 100 SOTA Use Cases.</h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Every tool is calibrated for desktop work: non-destructive file staging, verified citations, and executive document generation.
              </p>
            </div>
            <Link
              to="/how-it-works"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-semibold"
            >
              <span>Explore all 100 cases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOTA_CASES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-purple-500/50 transition-all hover:-translate-y-1 shadow-lg group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 text-purple-400 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">{c.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                  <Link
                    to="/console"
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <span>Run in Console</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Interactive Pricing Showcase ────────────────────────────────── */}
      <section className="py-24 border-b border-purple-500/20">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">Zero-Cost Tier</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Simple, 100% Free &amp; Open Architecture</h2>
            <p className="text-xs text-slate-400">Run locally on your machine or deploy to Supabase Cloud &amp; Vercel without credit cards.</p>
          </div>
          <InteractivePricing />
        </div>
      </section>

      {/* ── Interactive Testimonials ────────────────────────────────────── */}
      <section className="py-24 border-b border-purple-500/20 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">Developer Community</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Trusted by Autonomous AI Builders</h2>
          </div>
          <InteractiveTestimonials />
        </div>
      </section>

      {/* ── Privacy & Data Control ──────────────────────────────────────── */}
      <section className="py-20 border-b border-purple-500/20 bg-[#060814]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="p-8 md:p-12 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-slate-950 via-[#0a0d20] to-slate-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Privacy is always a top priority</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Data Control with 49+ Excluded App Rules
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Applications you exclude (Chrome, ChatGPT, Access, Canva, Eigent, Password Managers) are never read by Nia or any bot.
                Accessibility trees are not captured for memory, and OCR tools strictly refuse to operate on them.
              </p>
            </div>
            <Link
              to="/console"
              className="px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold border border-purple-400 shadow-xl shadow-purple-600/30 transition-all whitespace-nowrap"
            >
              Open Data Control Settings
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function PresetGalleryCard({
  p,
  previewDevice,
  onShowCode,
}: {
  p: { slug: string; title: string; accent: string };
  previewDevice: "desktop" | "tablet" | "mobile";
  onShowCode: (slug: string) => void;
}) {
  const [active, setActive] = useState(false);
  const h = previewDevice === "mobile" ? 320 : previewDevice === "tablet" ? 280 : 240;
  return (
    <div
      className={`flex flex-col rounded-2xl border border-purple-500/20 bg-gradient-to-b p-4 ${p.accent} hover:border-purple-500/50 transition-all shadow-xl`}
      onMouseEnter={() => setActive(true)}
    >
      <div className="text-sm font-bold text-white truncate">{p.title}</div>
      <div className="mt-0.5 text-[11px] text-purple-300/80 font-mono">/preset-sites/{p.slug}/</div>
      <div
        className={`mt-3 overflow-hidden rounded-xl border border-slate-800 bg-black shadow-inner ${
          previewDevice === "mobile" ? "mx-auto max-w-[320px]" : previewDevice === "tablet" ? "mx-auto max-w-[500px]" : "w-full"
        }`}
        style={{ height: h }}
      >
        {active ? (
          <iframe src={`/preset-sites/${p.slug}/`} title={p.title} className="h-full w-full border-0" />
        ) : (
          <div className="flex h-full items-center justify-center gap-2 text-xs text-slate-500">
            <Play className="h-3.5 w-3.5 text-purple-400" /> Hover to preview live demo
          </div>
        )}
      </div>
      <div className="mt-3.5 flex flex-wrap items-center gap-2">
        <a href={`/preset-sites/${p.slug}/`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-slate-200 shadow-sm"><Eye className="h-3.5 w-3.5" /> Live Demo</a>
        <button onClick={() => onShowCode(p.slug)} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700"><Code2 className="h-3.5 w-3.5" /> Source Code</button>
        <Link to="/console/apps" className="inline-flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-xs font-medium text-purple-300 hover:bg-purple-900/50"><Sparkles className="h-3.5 w-3.5" /> Fork in Builder</Link>
      </div>
    </div>
  );
}
