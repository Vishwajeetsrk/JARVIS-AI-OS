import { createFileRoute } from "@tanstack/react-router";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Jarvis" },
      { name: "description", content: "Projects currently living inside Jarvis." },
    ],
  }),
});

const PROJECTS = [
  { name: "Learnify AI", tag: "edtech", status: "ready", note: "Adaptive lesson engine for K-12 tutors." },
  { name: "AgencyOS", tag: "saas", status: "processing", note: "Multi-tenant agency operating system." },
  { name: "DreamSync", tag: "consumer", status: "needs-input", note: "Cross-device dream journal + AI recall." },
  { name: "SkillForge", tag: "learning", status: "ready", note: "Personalized skill tracks with agent coaches." },
  { name: "Client Work", tag: "consulting", status: "ready", note: "Rotating scope of client engagements." },
];

const dot = (s: string) =>
  s === "ready" ? "status-dot status-ready" : s === "processing" ? "status-processing" : "status-dot status-amber";

function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-mono-xs">Dashboard preview</div>
        <h1 className="font-display text-5xl font-semibold md:text-6xl">Every project, one memory.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A live glimpse of what Vishwajeet's Jarvis is currently shepherding. Sign in to the console to
          go deeper.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border bg-surface px-6 py-3 text-mono-xs">
            <div>Project</div>
            <div>Tag</div>
            <div>Status</div>
          </div>
          <ul className="divide-y divide-border reveal-stagger">
            {PROJECTS.map((p) => (
              <li key={p.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4">
                <div>
                  <div className="font-display text-lg text-foreground">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.note}</div>
                </div>
                <code className="font-mono text-xs text-muted-foreground">{p.tag}</code>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span className={dot(p.status)} /> {p.status.replace("-", " ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
