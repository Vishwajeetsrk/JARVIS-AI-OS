import { createFileRoute } from "@tanstack/react-router";
import { GitBranch, GitPullRequest, CircleDot } from "lucide-react";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/console/github")({
  component: GithubPage,
  head: () => ({ meta: [{ title: "GitHub — Jarvis" }] }),
});

const REPOS = [
  { name: "jarvis/os", branch: "main", prs: 3, issues: 12 },
  { name: "jarvis/website", branch: "main", prs: 1, issues: 4 },
  { name: "jarvis/agents", branch: "dev", prs: 5, issues: 8 },
];

function GithubPage() {
  return (
    <div className="h-full overflow-y-auto p-8">
      <PageHeader title="GitHub" subtitle="Repos Jarvis can read, review, and ship." />
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
        <GitBranch className="h-5 w-5 text-primary" />
        <div className="flex-1">
          <div className="font-medium">Not connected</div>
          <div className="text-xs text-muted-foreground">Connect GitHub to sync repos, PRs, and issues.</div>
        </div>
        <Button>Connect GitHub</Button>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {REPOS.map((r) => (
          <div key={r.name} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-primary" />
              <code className="font-mono text-sm">{r.name}</code>
            </div>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><GitBranch className="h-3.5 w-3.5" /> {r.branch}</span>
              <span className="flex items-center gap-1"><GitPullRequest className="h-3.5 w-3.5" /> {r.prs}</span>
              <span className="flex items-center gap-1"><CircleDot className="h-3.5 w-3.5" /> {r.issues}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
