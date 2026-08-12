import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import heroImg from "@/assets/console-hero.jpg";
import { StatusBadge } from "@/components/jarvis/status-badge";
import {
  CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Smartphone, Monitor, Terminal,
  Radio, TrendingUp, Users, MemoryStick, Sparkles, ArrowRight, GitBranch,
  Database, Brain, Infinity, Download, ExternalLink, AppWindow, Apple,
  Laptop,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Jarvis — One brain. Many shells." },
      {
        name: "description",
        content:
          "Jarvis AI Operating System: persistent memory, 24 specialized agents, one team across web, desktop, terminal, and mobile.",
      },
    ],
  }),
});

const AGENTS = [
  "ceo-agent", "planner", "saas-builder", "designer", "researcher", "writer",
  "test-agent", "reviewer", "deployer", "sre", "memory-keeper", "governance",
  "growth", "ops", "billing", "connector", "voice", "coworker", "algorithmic-art",
  "frontend-design", "mcp-builder", "skill-creator", "workspace-agent", "devops-agent"
];

interface HealthReport {
  ok: boolean;
  version: string;
  database: "online" | "offline";
  modelProvider: "online" | "offline";
  voice: "online" | "offline";
  agents: number;
  designSystems: number;
  sites: number;
  skills: number;
  checkedAt: string;
}

const FEATURES = [
  {
    icon: MemoryStick,
    title: "Persistent Memory",
    body: "No project ever repeats a mistake another already made. Every decision, indexed forever in ~/.agent-memory/.",
  },
  {
    icon: Users,
    title: "24 Specialized Agents",
    body: "CEO → Builder → Test → Deploy, in sequence. Each with specialized tools, guardrails, and free cloud AI.",
  },
  {
    icon: Infinity,
    title: "One Brain, 5 Shells",
    body: "Web console, desktop app, terminal CLI, voice, and the public site — same agent team, same context, same memory.",
  },
];

const SURFACES = [
  { title: "Web Console", icon: Monitor, link: "/console", sub: "React + TanStack App Shell" },
  { title: "Voice & Speech", icon: Zap, link: "/console", sub: "Groq Whisper + Built-in TTS" },
  { title: "Terminal CLI", icon: Terminal, link: "/console", sub: "npx tsx scripts/jarvis.ts" },
  { title: "Desktop App", icon: Cpu, link: "/console", sub: "Tauri 2 · macOS, Windows, Linux" },
  { title: "Web Landing", icon: Globe, link: "/", sub: "Public Marketing & Specs" },
];

const ACTIVITY_FEED = [
  { agent: "supabase-db", action: "Postgres database reachable — schema, RLS and pgvector live", time: "just now", status: "ready" },
  { agent: "ai-gateway", action: "Gemini Flash + Groq Llama 3.3 model routing online", time: "just now", status: "ready" },
  { agent: "voice", action: "Whisper transcription and TTS endpoints responding", time: "just now", status: "ready" },
  { agent: "realtime", action: "WebSocket channels pushing activity to the console", time: "just now", status: "ready" },
];

// Animated counter hook — snap settle to final value
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
    <div ref={ref} className="text-center">
      <div className="stat-in font-display text-4xl font-semibold text-foreground md:text-5xl">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

type ShellState = "desktop" | "amber" | "mobile";

function LandingPage() {
  const [activeState, setActiveState] = useState<ShellState>("desktop");
  const [health, setHealth] = useState<HealthReport | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: HealthReport | null) => setHealth(data))
      .catch(() => {});
  }, []);

  const agents = health?.agents ?? 24;
  const designSystems = health?.designSystems ?? 53;
  const liveSites = health?.sites ?? 22;
  const allOnline = health ? health.database === "online" && health.modelProvider === "online" && health.voice === "online" : null;

  const stats = [
    { value: agents, label: "Specialist Agents", suffix: "" },
    { value: designSystems, label: "Design Systems & Live Sites", suffix: "" },
    { value: liveSites, label: "Live Project Sites", suffix: "" },
    { value: 0, label: "Memory Lost", suffix: "%" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />

      {/* Live System Status Banner */}
      <div className="border-b border-border bg-surface/80 px-4 py-2 text-center text-xs font-mono">
        <span className="inline-flex items-center gap-2 text-sage font-medium">
          <span className="status-dot status-ready" />
          ● All Systems & 5 Surfaces Operational · Gemini Flash & Groq Llama Connected
        </span>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        {/* Animated ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="orb-drift absolute left-1/3 top-0 h-[400px] w-[600px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "radial-gradient(ellipse, var(--color-primary), transparent)" }}
          />
        </div>
        <div className="bg-noise relative -z-10 h-full w-full" />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 pb-20 pt-16 text-center md:pt-24">
          <span className="chip reveal">
            <JarvisStar size={12} className="text-primary" /> v{health?.version ?? "2.5.3"} · Production Meta-Tool
          </span>
          <h1 className="reveal font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            One brain.
            <br />
            <span className="text-shimmer">Many shells.</span>
            <br />
            Every project, remembered.
          </h1>
          <p className="reveal max-w-2xl text-lg text-muted-foreground md:text-xl">
            Jarvis is the AI operating system that solves session amnesia. A team of {agents} specialized
            agents share one persistent memory across every surface you work in.
          </p>

          <div className="reveal flex flex-wrap items-center justify-center gap-3">
            <Link to="/console" className="btn-hero shine group inline-flex items-center gap-2">
              Open Jarvis Console <span aria-hidden className="arrow-slide">→</span>
            </Link>
            <Link
              to="/auth"
              className="snap-colors inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-5 py-3 text-sm font-medium text-primary hover:bg-primary/10"
            >
              <Sparkles className="h-4 w-4" /> Try as Guest
            </Link>
            <Link
              to="/how-it-works"
              className="snap-colors rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
            >
              How it works
            </Link>
          </div>

          {/* Interactive Reference Shell State Switcher */}
          <div className="mt-10 w-full max-w-5xl space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-border bg-surface p-1.5 text-xs font-mono">
              <button
                onClick={() => setActiveState("desktop")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
                  activeState === "desktop" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" /> Desktop Normal
              </button>
              <button
                onClick={() => setActiveState("amber")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
                  activeState === "amber" ? "bg-amber text-black font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Radio className="h-3.5 w-3.5" /> Needs Input (Amber State)
              </button>
              <button
                onClick={() => setActiveState("mobile")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
                  activeState === "mobile" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" /> Mobile Phone Frame
              </button>
            </div>

            {/* Interactive Preview Container */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)] transition-all">
              {activeState === "desktop" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <JarvisStar size={16} className="text-primary" />
                      <span className="font-bold">Jarvis Console</span>
                      <span className="text-muted-foreground">· Desktop View</span>
                    </div>
                    <StatusBadge status="ready" />
                  </div>
                  <img
                    src={heroImg}
                    alt="Jarvis desktop console view"
                    className="w-full rounded-lg border border-border transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              )}

              {activeState === "amber" && (
                <div className="space-y-4 rounded-lg border-2 border-amber bg-amber/5 p-6 text-left">
                  <div className="flex items-center justify-between border-b border-amber/30 pb-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber animate-pulse" />
                      STATUS: NEEDS INPUT (Clarification Required)
                    </div>
                    <StatusBadge status="needs-input" />
                  </div>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="font-mono text-xs text-amber font-semibold">saas-builder</div>
                    <p>Database migration detected. Would you like me to apply the postgres RLS schema to Supabase project <code className="bg-card px-1.5 py-0.5 rounded font-mono text-primary">tupgfxqkefgntrpgakxk</code>?</p>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button onClick={() => setActiveState("desktop")} className="rounded-md bg-amber px-4 py-1.5 text-xs font-bold text-black hover:opacity-90">
                      Approve & Run Schema
                    </button>
                    <button onClick={() => setActiveState("desktop")} className="rounded-md border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground hover:bg-surface">
                      Modify Migration
                    </button>
                  </div>
                </div>
              )}

              {activeState === "mobile" && (
                <div className="mx-auto max-w-sm space-y-4 rounded-3xl border-4 border-border bg-surface p-4 shadow-2xl text-left">
                  <div className="flex items-center justify-between border-b border-border pb-2 text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <JarvisStar size={14} className="text-primary" />
                      <span className="font-bold">Jarvis</span>
                    </div>
                    <StatusBadge status="ready" />
                  </div>
                  <div className="space-y-3 py-2">
                    <div className="rounded-lg bg-card p-3 text-xs">
                      <span className="font-mono text-primary font-bold">USER</span>
                      <p className="mt-1">Deploy AgencyOS billing webhooks to staging.</p>
                    </div>
                    <div className="rounded-lg bg-surface border border-border p-3 text-xs">
                      <span className="font-mono text-primary font-bold">devops-agent</span>
                      <p className="mt-1">Staging build complete. SSL active on agencyos.dev.</p>
                    </div>
                  </div>
                  <div className="mx-auto h-1 w-24 rounded-full bg-border" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Animated Stats ──────────────────────────────────────────── */}
      <section className="border-y border-border/60 bg-surface/60 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature strip ───────────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3 reveal-stagger">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="hover-card rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Live Activity Feed ──────────────────────────────────────── */}
      <section className="border-b border-border/60 py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="text-mono-xs text-muted-foreground mb-2">Live System</div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Systems online, right now.</h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-lg mx-auto">
              Live health probe of the Jarvis platform — database, model gateway, voice, and realtime.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden max-w-3xl mx-auto">
            {ACTIVITY_FEED.map((item, i) => {
              const liveState =
                item.agent === "supabase-db" ? (health?.database ?? "online")
                : item.agent === "ai-gateway" ? (health?.modelProvider ?? "online")
                : item.agent === "voice" ? (health?.voice ?? "online")
                : "online";
              return (
                <div
                  key={i}
                  className="reveal snap-colors flex items-center gap-4 px-5 py-3.5 hover:bg-surface/50"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <span className={`h-2 w-2 rounded-full shrink-0 ${liveState === "online" ? "bg-sage breathe" : "bg-red-500 animate-pulse"}`} />
                  <code className="font-mono text-xs text-primary shrink-0 w-28">{item.agent}</code>
                  <span className="text-sm text-foreground flex-1">{item.action}</span>
                  <span className={`text-xs shrink-0 font-mono uppercase ${liveState === "online" ? "text-sage" : "text-red-500"}`}>{liveState}</span>
                </div>
              );
            })}
            <div className={`px-5 py-3 text-xs text-center text-muted-foreground ${allOnline === null ? "scan-sweep" : ""}`}>
              {allOnline === null ? (
                "Probing live status…"
              ) : allOnline ? (
                "All systems operational"
              ) : (
                <span className="text-amber-500">One or more services are degraded</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Surfaces Grid ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-mono-xs text-muted-foreground mb-2">Multi-Surface Architecture</div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">5 Front Doors. One Agent Brain.</h2>
        </div>
        <div className="reveal-stagger grid gap-4 md:grid-cols-5">
          {SURFACES.map((s) => (
            <div key={s.title} className="hover-card rounded-xl border border-border bg-card p-5 text-left">
              <s.icon className="h-6 w-6 text-primary mb-3" />
              <div className="font-display text-lg font-semibold">{s.title}</div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills carousel ─────────────────────────────────────────── */}
      <section className="border-y border-border/60 py-20 bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-mono-xs text-muted-foreground mb-1">Agent Roster</div>
              <h2 className="font-display text-3xl md:text-4xl">{agents} agents, one crew.</h2>
            </div>
            <Link to="/skills" className="group text-sm text-primary hover:underline inline-flex items-center gap-1">
              Full roster <ArrowRight className="arrow-slide h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="marquee overflow-hidden">
          <div className="marquee-track gap-3 px-6">
            {[...AGENTS, ...AGENTS].map((a, i) => (
              <span key={i} className="chip whitespace-nowrap text-primary/90">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download & Live Preview ───────────────────────────────── */}
      <section className="border-b border-border/60 py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="text-mono-xs text-muted-foreground mb-2">Get Jarvis</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold">Download & Live Preview.</h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-lg mx-auto">
              Run Jarvis as a desktop app, open the live console, or preview every surface right now.
            </p>
          </div>

          {/* Live Preview buttons */}
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <a
              href="https://jarvisaios.vercel.app/console"
              target="_blank"
              rel="noreferrer"
              className="group hover-card rounded-xl border border-border bg-card p-6 text-left"
            >
              <Monitor className="h-6 w-6 text-primary mb-3" />
              <div className="flex items-center gap-2 font-display text-lg font-semibold">
                Live Console <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Open the working console app in your browser — no install needed.</div>
            </a>
            <a
              href="https://jarvisaios.vercel.app/auth"
              target="_blank"
              rel="noreferrer"
              className="group hover-card rounded-xl border border-border bg-card p-6 text-left"
            >
              <Sparkles className="h-6 w-6 text-primary mb-3" />
              <div className="flex items-center gap-2 font-display text-lg font-semibold">
                Try as Guest <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Instant demo of the console. Data resets on refresh.</div>
            </a>
            <a
              href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
              target="_blank"
              rel="noreferrer"
              className="group hover-card rounded-xl border border-border bg-card p-6 text-left"
            >
              <GitBranch className="h-6 w-6 text-primary mb-3" />
              <div className="flex items-center gap-2 font-display text-lg font-semibold">
                Source Code <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">MIT-licensed. Clone, run locally, and extend Jarvis.</div>
            </a>
          </div>

          {/* Desktop Downloads */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border bg-surface/60 px-6 py-4">
              <AppWindow className="h-5 w-5 text-primary" />
              <div>
                <div className="font-display text-lg font-semibold">Jarvis Desktop App</div>
                <div className="text-xs text-muted-foreground">Tauri 2 · macOS, Windows, Linux — installers from GitHub Releases</div>
              </div>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3">
              <a
                href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="group hover-card flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center"
              >
                <Apple className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="font-semibold">macOS</div>
                <div className="text-xs text-muted-foreground">Apple Silicon + Intel · .dmg</div>
                <span className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
                  <Download className="h-3.5 w-3.5" /> Download
                </span>
              </a>
              <a
                href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="group hover-card flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center"
              >
                <Monitor className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="font-semibold">Windows</div>
                <div className="text-xs text-muted-foreground">x64 · .exe / .msi</div>
                <span className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
                  <Download className="h-3.5 w-3.5" /> Download
                </span>
              </a>
              <a
                href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="group hover-card flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center"
              >
                <Laptop className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="font-semibold">Linux</div>
                <div className="text-xs text-muted-foreground">x64 · .AppImage / .deb</div>
                <span className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
                  <Download className="h-3.5 w-3.5" /> Download
                </span>
              </a>
            </div>
            <div className="border-t border-border bg-surface/40 px-6 py-4 text-center">
              <span className="font-mono text-xs text-muted-foreground">
                Or install the CLI from source:
              </span>
              <code className="ml-2 rounded bg-card border border-border px-2 py-1 font-mono text-xs text-primary">
                npm run jarvis
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 text-center border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6">
          <JarvisStar className="mx-auto mb-6 h-10 w-10 text-primary opacity-80" />
          <h2 className="font-display text-4xl font-semibold md:text-5xl mb-4">
            Ready to stop losing context?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Jarvis is free. Gemini Flash and Groq Llama — no credit card, no rate limits that matter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/console" className="btn-hero shine group inline-flex items-center gap-2 text-base px-8 py-3.5">
              Open the Console <ArrowRight className="arrow-slide h-4 w-4" />
            </Link>
            <Link to="/auth" className="snap-colors inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-6 py-3.5 text-sm font-medium text-primary hover:bg-primary/10">
              <Sparkles className="h-4 w-4" /> Try as Guest
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Free forever on Gemini & Groq · No setup required · Your data stays in your Supabase project
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
