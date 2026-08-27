import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import {
  CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Smartphone, Monitor, Terminal,
  Radio, TrendingUp, Users, MemoryStick, Sparkles, ArrowRight, GitBranch,
  Database, Brain, Infinity, Download, ExternalLink, AppWindow, Apple,
  Laptop, Video, Briefcase, Award, HardDrive, Play, Flame, Layers, Star,
  MessageSquare, Wand2, FileText, Trash2, Calendar, Presentation, FileSpreadsheet,
  Mic, Volume2, Code2, Bot, PlayCircle, BarChart3, ChevronRight, Activity
} from "lucide-react";
import { Earth3DGlobe } from "@/components/ui/earth-3d-globe";
import { BookFlipAnimation } from "@/components/ui/book-flip-animation";
import { InteractivePricing } from "@/components/ui/interactive-pricing";
import { InteractiveTestimonials } from "@/components/ui/interactive-testimonials";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "JARVIS AI OS — Autonomous Personal Intelligence Operating System" },
      {
        name: "description",
        content:
          "Autonomous 8-bot fleet, 2-minute custom voice cloning, universal app builder, 3D VRM companion, and persistent memory operating system.",
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

export function LandingPage() {
  const [activeTab, setActiveTab] = useState<"fleet" | "voice" | "apps" | "motion">("fleet");
  const [voicePlaying, setVoicePlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <MarketingNav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-28 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.18),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-1.5 text-xs text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/50">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span className="font-semibold uppercase tracking-wider font-mono">Autonomous AI OS • Version 3.0 Master Release</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1]">
            Your Autonomous AI Operating System. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              One Brain. Infinite Execution.
            </span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-slate-400 leading-relaxed">
            JARVIS AI OS runs 8 specialized autonomous bot personas, clones custom human voices in 2 minutes, generates full-stack web and mobile apps with live Monaco editing, and remembers everything via 4-tier neural memory on Supabase Cloud.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/console"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Zap className="w-4 h-4 text-slate-950 fill-current" />
              <span>Launch Autonomous Console</span>
            </Link>
            <Link
              to="/console/fleet"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/30 px-6 py-3.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-900/40 transition-all hover:border-cyan-400/60 shadow-md"
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Explore 8-Bot Fleet</span>
            </Link>
            <Link
              to="/console/voice"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-6 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-900/40 transition-all hover:border-emerald-400/60 shadow-md"
            >
              <Mic className="w-4 h-4 text-emerald-400" />
              <span>Voice Studio (30 Clones)</span>
            </Link>
            <Link
              to="/companion"
              className="inline-flex items-center gap-2 rounded-xl border border-pink-500/30 bg-pink-950/30 px-6 py-3.5 text-sm font-semibold text-pink-300 hover:bg-pink-900/40 transition-all hover:border-pink-400/60 shadow-md"
            >
              <span>🌸 3D Nia Companion</span>
            </Link>
          </div>

          {/* Quick Realtime Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl pt-10">
            {[
              { label: "Autonomous Fleet", value: "8 Bot Roles", sub: "Chief of Staff & Sales" },
              { label: "Voice Latency", value: "< 400ms", sub: "30 Free Cloned Voices" },
              { label: "Universal Forge", value: "SaaS • Mobile • Web", sub: "React Native + Expo" },
              { label: "Supabase Cloud", value: "15 Tables Active", sub: "4-Tier Vector Memory" },
            ].map((m) => (
              <div key={m.label} className="p-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl text-left hover:border-cyan-500/40 transition-colors shadow-lg">
                <div className="text-[11px] text-slate-500 uppercase font-mono tracking-wider">{m.label}</div>
                <div className="text-xl font-extrabold text-white mt-0.5">{m.value}</div>
                <div className="text-xs text-cyan-400/90 font-medium">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Core Engines Switcher */}
      <section className="py-20 border-b border-slate-800/60 bg-[#070A12]">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">Core Engines Matrix</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Experience All 4 Operating Layers</h2>
            <p className="text-sm text-slate-400">Switch between interactive previews to explore how JARVIS coordinates intelligence, voice synthesis, code generation, and 3D visual motion.</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-slate-800 bg-slate-950/80 max-w-2xl mx-auto backdrop-blur-lg">
            {[
              { id: "fleet", label: "🤖 Bot Fleet", color: "text-cyan-400" },
              { id: "voice", label: "🎙️ Voice Studio", color: "text-emerald-400" },
              { id: "apps", label: "🏗️ App Builder", color: "text-purple-400" },
              { id: "motion", label: "🎨 3D Motion Hub", color: "text-amber-400" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === t.id
                    ? "bg-slate-800 text-white shadow-md border border-slate-700"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Interactive Tab Content */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {activeTab === "fleet" && (
                <motion.div
                  key="fleet"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>👔 Chief of Staff &amp; 8-Bot Autonomous Workforce</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Autonomous roles execute background tasks on schedule routines with tool access and priority escalation.</p>
                    </div>
                    <Link
                      to="/console/fleet"
                      className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Fleet Dashboard</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {BOT_ROLES.map((bot) => (
                      <div key={bot.id} className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/40 transition-all group flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl p-2 rounded-xl bg-slate-800">{bot.icon}</span>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">Always-On</span>
                          </div>
                          <h4 className="text-sm font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">{bot.name}</h4>
                          <p className="text-[11px] text-cyan-400/90 font-medium">{bot.role}</p>
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{bot.desc}</p>
                        </div>
                        <Link
                          to={bot.path}
                          className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 pt-2 border-t border-slate-800/60"
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
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
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
                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={() => setVoicePlaying(!voicePlaying)}
                          className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 hover:bg-emerald-500/30 transition-all"
                        >
                          <Volume2 className={`w-4 h-4 ${voicePlaying ? "animate-bounce" : ""}`} />
                          <span>{voicePlaying ? "Playing Synthesis..." : "Play Sample Voice"}</span>
                        </button>
                      </div>
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
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>🏗️ Universal Multi-Platform App Builder</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Generate Full-Stack SaaS, React Native Mobile Apps, 3D Websites, and Chrome Extensions with 1-click Monaco editing.</p>
                    </div>
                    <Link
                      to="/console/apps"
                      className="px-4 py-2 rounded-xl bg-purple-500 text-white font-bold text-xs hover:bg-purple-400 transition-colors flex items-center gap-1.5"
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
                            <Icon className="w-6 h-6 text-purple-400" />
                            <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded-full">{app.tag}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{app.title}</h4>
                          <p className="text-xs text-slate-400 font-mono">{app.stack}</p>
                          <Link
                            to="/console/apps"
                            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 pt-2"
                          >
                            <span>Scaffold now</span>
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
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
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

      {/* 100 SOTA Use Cases Showcase */}
      <section className="py-20 border-b border-slate-800/60 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">Autonomous Capabilities</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Conquer 100 SOTA Use Cases.</h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Every tool is calibrated for desktop work: non-destructive file staging, verified citations, and executive document generation.
              </p>
            </div>
            <Link
              to="/how-it-works"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-semibold"
            >
              <span>Explore full interactive cases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOTA_CASES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition-all hover:-translate-y-1 shadow-lg group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{c.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                  <Link
                    to="/console"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>Run tool</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Showcase */}
      <section className="py-20 border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">Zero-Cost Tier</div>
            <h2 className="text-3xl font-extrabold text-white">Simple, 100% Free &amp; Open Architecture</h2>
            <p className="text-xs text-slate-400">Run locally on your machine or deploy to Supabase Cloud &amp; Vercel without credit cards.</p>
          </div>
          <InteractivePricing />
        </div>
      </section>

      {/* Interactive Testimonials */}
      <section className="py-20 border-b border-slate-800/60 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">Developer Reviews</div>
            <h2 className="text-3xl font-extrabold text-white">Trusted by Autonomous AI Builders</h2>
          </div>
          <InteractiveTestimonials />
        </div>
      </section>

      {/* Privacy & Data Control Section */}
      <section className="py-16 border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="p-8 md:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Privacy is always a top priority</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Data Control with 49+ Excluded App Rules
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Applications you exclude (Chrome, ChatGPT, Access, Canva, Eigent, Password Managers) are never read by Nia or any bot.
                Accessibility trees are not captured for memory, and OCR tools strictly refuse to operate on them.
              </p>
            </div>
            <Link
              to="/console"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-600 transition-all whitespace-nowrap shadow-md"
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
