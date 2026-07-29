import { createFileRoute } from "@tanstack/react-router";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How it works — Jarvis" },
      { name: "description", content: "How Jarvis routes requests across 18 agents with persistent memory." },
    ],
  }),
});

const STEPS = [
  { n: "01", t: "Capture", d: "Your request enters through any shell — web console, desktop app, CLI, or voice." },
  { n: "02", t: "Route", d: "The Reasoning Layer classifies intent and hands off to the right specialist agent." },
  { n: "03", t: "Recall", d: "Persistent Memory returns every past decision that matches — no context is ever lost." },
  { n: "04", t: "Execute", d: "The Mastra engine invokes tools, MCP connectors, and sub-agents with governed access." },
  { n: "05", t: "Verify", d: "Test-agent and reviewer cross-check the artifact before it ships back to you." },
  { n: "06", t: "Remember", d: "Every artifact and decision is written back to memory, ready for the next session." },
];

function HowItWorks() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-mono-xs">Architecture</div>
        <h1 className="font-display text-5xl font-semibold md:text-6xl">How Jarvis works.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Six phases, one persistent brain. Every request follows the same trusted path — reasoning,
          recall, execution, verification, and durable memory.
        </p>

        <ol className="mt-14 space-y-4 reveal-stagger">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[auto_1fr] md:items-center"
            >
              <span className="font-mono text-4xl font-semibold text-primary md:text-5xl">{s.n}</span>
              <div>
                <div className="font-display text-xl">{s.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </main>
      <MarketingFooter />
    </div>
  );
}
