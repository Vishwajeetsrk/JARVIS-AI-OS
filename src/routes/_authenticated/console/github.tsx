import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GitBranch, GitPullRequest, CircleDot, GitCommit, Star, Eye, CheckCircle2, XCircle, Clock, ExternalLink, Zap, ShieldCheck, GitMerge } from "lucide-react";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/github")({
  component: GithubPage,
  head: () => ({ meta: [{ title: "GitHub — Jarvis" }] }),
});

const REPOS = [
  {
    name: "Vishwajeetsrk/jarvis-console",
    branch: "main",
    prs: 3,
    issues: 12,
    stars: 47,
    watchers: 8,
    lastActivity: "2 min ago",
    language: "TypeScript",
    langColor: "#3178c6",
    isPrivate: false,
  },
  {
    name: "Vishwajeetsrk/jarvis-agents",
    branch: "dev",
    prs: 5,
    issues: 8,
    stars: 23,
    watchers: 4,
    lastActivity: "1 hr ago",
    language: "TypeScript",
    langColor: "#3178c6",
    isPrivate: true,
  },
  {
    name: "Vishwajeetsrk/agency-os",
    branch: "main",
    prs: 1,
    issues: 4,
    stars: 19,
    watchers: 3,
    lastActivity: "3 hr ago",
    language: "Python",
    langColor: "#3572A5",
    isPrivate: false,
  },
];

const RECENT_COMMITS = [
  { sha: "a3f8c2d", message: "fix: resolve Mastra TS compilation errors in tools", author: "Vishwajeet", time: "12 min ago", repo: "jarvis-console", status: "passing" },
  { sha: "9e1b7f4", message: "feat: add vitest.config.ts for isolated testing", author: "Vishwajeet", time: "1 hr ago", repo: "jarvis-console", status: "passing" },
  { sha: "c5d3a1e", message: "chore: bump @ai-sdk/react to 1.5.0", author: "Vishwajeet", time: "3 hr ago", repo: "jarvis-agents", status: "pending" },
  { sha: "f2b8e9a", message: "feat: add golden-flow CEO pipeline test", author: "Vishwajeet", time: "6 hr ago", repo: "jarvis-console", status: "passing" },
];

const PR_GATE_CHECKS = [
  { name: "TypeScript Check", status: "passing", duration: "14s" },
  { name: "Vitest Unit Tests", status: "passing", duration: "22s" },
  { name: "ESLint", status: "passing", duration: "8s" },
  { name: "Build (vite)", status: "passing", duration: "45s" },
  { name: "Security Audit", status: "passing", duration: "12s" },
];

function GithubPage() {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const connect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnected(true);
      setConnecting(false);
      toast.success("GitHub connected! Syncing repos…");
    }, 1500);
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-8">
        <PageHeader
          title="GitHub"
          subtitle="Repos Jarvis can read, review, and ship."
        />

        {/* Connection Banner */}
        <div className={`flex items-center gap-4 rounded-2xl border p-5 transition-colors ${connected ? "border-sage/40 bg-sage/5" : "border-border bg-card"}`}>
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${connected ? "bg-sage/10" : "bg-surface"}`}>
            <GitBranch className={`h-5 w-5 ${connected ? "text-sage" : "text-primary"}`} />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">
              {connected ? "GitHub Connected" : "Connect GitHub"}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {connected
                ? "3 repos synced · PRs, issues, and commits indexed"
                : "Connect GitHub to sync repos, PRs, issues, and run automated checks."}
            </div>
          </div>
          {connected ? (
            <div className="flex items-center gap-1.5 text-xs font-medium text-sage">
              <CheckCircle2 className="h-4 w-4" /> Active
            </div>
          ) : (
            <Button onClick={connect} disabled={connecting} className="shrink-0">
              {connecting ? "Connecting…" : "Connect GitHub"}
            </Button>
          )}
        </div>

        {/* Repos Grid */}
        <div>
          <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <GitBranch className="h-3.5 w-3.5 text-primary" /> Repositories
          </h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {REPOS.map((r) => (
              <div key={r.name} className="rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-colors group">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      {r.isPrivate && (
                        <span className="rounded px-1.5 py-0.5 text-[10px] font-medium border border-border text-muted-foreground">Private</span>
                      )}
                    </div>
                    <code className="font-mono text-sm font-medium text-foreground truncate block">{r.name}</code>
                    <span className="text-xs text-muted-foreground">{r.branch} branch</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                  <span className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: r.langColor }} />
                    {r.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitPullRequest className="h-3 w-3" /> {r.prs}
                  </span>
                  <span className="flex items-center gap-1">
                    <CircleDot className="h-3 w-3" /> {r.issues}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {r.stars}
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground/60">
                  Updated {r.lastActivity}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Commits */}
        <div>
          <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <GitCommit className="h-3.5 w-3.5 text-primary" /> Recent Commits
          </h2>
          <div className="rounded-xl border border-border bg-card divide-y divide-border overflow-hidden">
            {RECENT_COMMITS.map((c) => (
              <div key={c.sha} className="flex items-center gap-4 px-4 py-3 hover:bg-surface/50 transition-colors">
                {c.status === "passing" ? (
                  <CheckCircle2 className="h-4 w-4 text-sage shrink-0" />
                ) : c.status === "pending" ? (
                  <Clock className="h-4 w-4 text-amber animate-pulse shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive shrink-0" />
                )}
                <code className="font-mono text-xs text-muted-foreground shrink-0 w-16">{c.sha}</code>
                <span className="flex-1 text-sm text-foreground truncate">{c.message}</span>
                <span className="text-xs text-muted-foreground shrink-0 hidden sm:block">{c.repo}</span>
                <span className="text-xs text-muted-foreground shrink-0">{c.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PR Gate Status */}
        <div>
          <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Automated PR Gate — TASK-108
          </h2>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-sage/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sage" />
                <span className="text-sm font-medium">All checks passing</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">PR #47 · jarvis-console</span>
            </div>
            <div className="divide-y divide-border">
              {PR_GATE_CHECKS.map((check) => (
                <div key={check.name} className="flex items-center gap-3 px-4 py-2.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sage shrink-0" />
                  <span className="text-sm flex-1">{check.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{check.duration}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border px-4 py-3 bg-card/50 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Auto-merge enabled on 100% pass</span>
              <div className="flex items-center gap-1.5 text-xs font-medium text-sage">
                <GitMerge className="h-3.5 w-3.5" /> Ready to merge
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
