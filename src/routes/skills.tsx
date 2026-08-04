import { createFileRoute } from "@tanstack/react-router";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import { useState } from "react";
import { Search, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/skills")({
  component: Skills,
  head: () => ({
    meta: [
      { title: "Skills — Jarvis Agents" },
      { name: "description", content: "The 32 specialized agents that make up Jarvis." },
    ],
  }),
});

const SKILLS = [
  ["ceo-agent", "Sets direction, splits scope, arbitrates trade-offs across projects.", "Core"],
  ["planner", "Turns goals into ordered tasks with clear acceptance criteria.", "Core"],
  ["saas-builder", "Ships SaaS features end-to-end — PRD, TRD, code, webhooks.", "Dev"],
  ["designer", "Owns visual identity, tokens, and component libraries.", "Design"],
  ["researcher", "Runs deep web + doc research and returns cited briefs.", "Research"],
  ["writer", "Drafts copy, PRDs, changelogs, docs, and release notes.", "Content"],
  ["test-agent", "Writes and runs unit, integration, and e2e tests.", "Dev"],
  ["reviewer", "Reviews diffs and flags regressions before merge.", "Dev"],
  ["deployer", "Ships to preview, staging, production with rollback.", "Ops"],
  ["sre", "Watches metrics, alerts, and postmortems.", "Ops"],
  ["memory-keeper", "Curates and reconciles the persistent knowledge base.", "Data"],
  ["governance", "Enforces policies, ACLs, and compliance registries.", "Core"],
  ["growth", "Drafts landing pages, experiments, and outreach.", "Marketing"],
  ["ops", "Coordinates recurring workflows and reminders.", "Ops"],
  ["billing", "Handles subscription flows, tax, invoices, dunning.", "Ops"],
  ["connector", "Wires MCPs and external APIs into the agent bus.", "Integration"],
  ["voice", "Speech I/O for hands-free control from any shell.", "Media"],
  ["coworker", "Pair-programs live with you inside the canvas.", "Dev"],
  ["morning", "Morning briefing & daily status check agent.", "Core"],
  ["open-design", "32+ design systems (Claude, Apple, Arc, Bento, Linear).", "Design"],
  ["docx-master", "Word document (.docx/.dotx) generator & parser.", "Documents"],
  ["xlsx-engine", "Excel spreadsheet (.xlsx/.csv) calculator & data cleaner.", "Documents"],
  ["pdf-pro", "PDF creation, OCR, table extraction, and splitting/merging.", "Documents"],
  ["pptx-deck", "Presentation deck architect & layout designer.", "Documents"],
  ["mcp-builder", "Custom Model Context Protocol server creator.", "Dev"],
  ["browser-agent", "Autonomous Playwright & Browser Use research agent.", "Research"],
  ["devops-agent", "Docker, Kubernetes, Vercel & CI/CD pipeline manager.", "Ops"],
  ["workspace-agent", "Windows OS desktop, app launcher, & file bridge.", "System"],
  ["security-agent", "Semgrep, Gitleaks, PII redaction & PR gate audit.", "Security"],
  ["creative-art", "Algorithmic art, flow fields, and canvas design.", "Design"],
  ["n8n-workflow", "n8n automation bridge for 400+ app integrations.", "Integration"],
  ["code-architect", "Multi-agent codebase refactoring & OpenHands runner.", "Dev"],
];

const CATEGORIES = ["All", "Core", "Dev", "Design", "Research", "Ops", "Documents", "Integration", "Security", "System"];

function Skills() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = SKILLS.filter(([name, desc, cat]) => {
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) ||
      desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || cat === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
          <div>
            <div className="text-mono-xs text-muted-foreground mb-1">Agent Roster</div>
            <h1 className="font-display text-5xl font-semibold md:text-6xl">32 skills. One crew.</h1>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-mono text-primary font-medium">
            <Sparkles className="h-3.5 w-3.5" /> 32 Active Specialists
          </div>
        </div>

        <p className="max-w-2xl text-lg text-muted-foreground">
          Each agent has its own specialized tools, guardrails, and persistent memory access. Hover or search to explore capabilities.
        </p>

        {/* Search + Categories */}
        <div className="mt-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 32 agent skills…"
              className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(([name, desc, cat]) => (
            <div
              key={name}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <code className="font-mono text-sm text-primary font-bold">{name}</code>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary font-medium border border-primary/20">
                    {cat}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] text-sage font-mono">
                <CheckCircle2 className="h-3 w-3" /> Active & ready
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm text-muted-foreground">
            No agent skills match your search.
          </div>
        )}
      </main>
      <MarketingFooter />
    </div>
  );
}
