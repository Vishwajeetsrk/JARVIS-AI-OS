import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import heroImg from "@/assets/console-hero.jpg";
import { StatusBadge } from "@/components/jarvis/status-badge";
import { CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Smartphone, Monitor, Terminal, Radio } from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Jarvis — One brain. Many shells." },
      {
        name: "description",
        content:
          "Jarvis AI Operating System: persistent memory, 30 specialized agents, one team across web, desktop, terminal, and mobile.",
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

const FEATURES = [
  {
    icon: "◈",
    title: "Persistent Memory",
    body: "No project ever repeats a mistake another already made. Every decision, indexed forever in ~/.agent-memory/.",
  },
  {
    icon: "⚡",
    title: "30 Specialized Agents",
    body: "CEO → Builder → Test → Deploy, in sequence. Each with specialized tools, guardrails, and $0 free cloud AI.",
  },
  {
    icon: "∞",
    title: "One Brain, 5 Shells",
    body: "Website, desktop app, web console, terminal CLI, mobile — same agent team, same context, same memory.",
  },
];

type ShellState = "desktop" | "amber" | "mobile";

function LandingPage() {
  const [activeState, setActiveState] = useState<ShellState>("desktop");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />

      {/* Live System Status Banner */}
      <div className="border-b border-border bg-surface/80 px-4 py-2 text-center text-xs font-mono">
        <span className="inline-flex items-center gap-2 text-sage font-medium">
          <span className="status-dot status-ready" />
          ● All Systems & 5 Surfaces Operational · Gemini 2.5 & Groq Llama 3.3 Connected
        </span>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="bg-noise relative -z-10 h-full w-full" />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 pb-20 pt-16 text-center md:pt-24">
          <span className="chip reveal">
            <JarvisStar size={12} className="text-primary" /> v2.2 · Production Meta-Tool
          </span>
          <h1 className="reveal font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            One brain.
            <br />
            <span className="text-primary">Many shells.</span>
            <br />
            Every project, remembered.
          </h1>
          <p className="reveal max-w-2xl text-lg text-muted-foreground md:text-xl">
            Jarvis is the AI operating system that solves session amnesia. A team of 30 specialized
            agents share one persistent memory across every surface you work in.
          </p>
          
          <div className="reveal flex flex-wrap items-center justify-center gap-3">
            <Link to="/console" className="btn-hero inline-flex items-center gap-2">
              Open Jarvis Console <span aria-hidden>→</span>
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
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
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)] transition-all">
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
                    className="w-full rounded-lg border border-border"
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
                  {/* Home indicator bar */}
                  <div className="mx-auto h-1 w-24 rounded-full bg-border" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-y border-border/60 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3 reveal-stagger">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-mono text-lg text-primary">
                {f.icon}
              </div>
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Surfaces Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-mono-xs">Multi-Surface Architecture</div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">5 Front Doors. One Agent Brain.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {[
            { title: "Web Console", icon: Monitor, link: "/console", sub: "React + TanStack App Shell" },
            { title: "Voice & Speech", icon: Zap, link: "/console", sub: "Groq Whisper & Orpheus TTS" },
            { title: "Terminal CLI", icon: Terminal, link: "/console", sub: "npx tsx scripts/jarvis.ts" },
            { title: "Desktop OS Bridge", icon: Cpu, link: "/console", sub: "Python Windows Automation" },
            { title: "Web Landing", icon: Globe, link: "/", sub: "Public Marketing & Specs" },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/50">
              <s.icon className="h-6 w-6 text-primary mb-3" />
              <div className="font-display text-lg font-semibold">{s.title}</div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills carousel */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-mono-xs">Agent Roster</div>
              <h2 className="font-display text-3xl md:text-4xl">30 skills, one crew.</h2>
            </div>
            <Link to="/skills" className="text-sm text-primary hover:underline">
              Full roster →
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

      <MarketingFooter />
    </div>
  );
}
