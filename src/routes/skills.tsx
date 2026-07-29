import { createFileRoute } from "@tanstack/react-router";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";

export const Route = createFileRoute("/skills")({
  component: Skills,
  head: () => ({
    meta: [
      { title: "Skills — Jarvis Agents" },
      { name: "description", content: "The 18 specialized agents that make up Jarvis." },
    ],
  }),
});

const SKILLS = [
  ["ceo-agent", "Sets direction, splits scope, arbitrates trade-offs across projects."],
  ["planner", "Turns goals into ordered tasks with clear acceptance criteria."],
  ["saas-builder", "Ships SaaS features end-to-end — PRD, TRD, code, webhooks."],
  ["designer", "Owns visual identity, tokens, and component libraries."],
  ["researcher", "Runs deep web + doc research and returns cited briefs."],
  ["writer", "Drafts copy, PRDs, changelogs, docs, and release notes."],
  ["test-agent", "Writes and runs unit, integration, and e2e tests."],
  ["reviewer", "Reviews diffs and flags regressions before merge."],
  ["deployer", "Ships to preview, staging, production with rollback."],
  ["sre", "Watches metrics, alerts, and postmortems."],
  ["memory-keeper", "Curates and reconciles the persistent knowledge base."],
  ["governance", "Enforces policies, ACLs, and compliance registries."],
  ["growth", "Drafts landing pages, experiments, and outreach."],
  ["ops", "Coordinates recurring workflows and reminders."],
  ["billing", "Handles subscription flows, tax, invoices, dunning."],
  ["connector", "Wires MCPs and external APIs into the agent bus."],
  ["voice", "Speech I/O for hands-free control from any shell."],
  ["coworker", "Pair-programs live with you inside the canvas."],
];

function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-mono-xs">Agent Roster</div>
        <h1 className="font-display text-5xl font-semibold md:text-6xl">18 skills. One crew.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Each agent has its own tools, guardrails, and memory access. Hover to see what they do.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(([name, desc]) => (
            <div
              key={name}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <code className="font-mono text-sm text-primary">{name}</code>
                <span className="chip text-[10px]">active</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
