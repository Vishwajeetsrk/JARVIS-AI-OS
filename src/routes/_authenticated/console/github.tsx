import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { GitBranch, CheckCircle2, ExternalLink, Star, CircleDot, GitPullRequest, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Button } from "@/components/ui/button";
import { githubOverview } from "@/lib/connections.functions";
import { Link as RouterLink } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/console/github")({
  component: GithubPage,
  head: () => ({ meta: [{ title: "GitHub — Jarvis" }] }),
});

function GithubPage() {
  const fn = useServerFn(githubOverview);
  const { data, isLoading } = useQuery({ queryKey: ["githubOverview"], queryFn: () => fn({}) });

  if (isLoading) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="mx-auto max-w-5xl p-8 space-y-6">
          <PageHeader title="GitHub" subtitle="Repos Jarvis can read, review, and ship." />
          <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Loading GitHub data…
          </div>
        </div>
      </div>
    );
  }

  const connected = data?.connected ?? false;
  const repos = (data?.repos ?? []).map((r) => ({
    name: r.full_name,
    branch: r.default_branch,
    prs: 0,
    issues: r.open_issues_count,
    stars: r.stargazers_count,
    watchers: 0,
    lastActivity: new Date(r.updated_at).toLocaleString(),
    language: "",
    langColor: "",
    isPrivate: r.private,
    html_url: r.html_url,
  }));

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
              {connected ? `GitHub Connected${data?.login ? ` · ${data.login}` : ""}` : "Connect GitHub"}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {connected
                ? `${repos.length} repos synced · PRs, issues, and commits indexed`
                : "Connect GitHub to sync repos, PRs, issues, and run automated checks."}
            </div>
          </div>
          {connected ? (
            <div className="flex items-center gap-1.5 text-xs font-medium text-sage">
              <CheckCircle2 className="h-4 w-4" /> Active
            </div>
          ) : (
            <RouterLink
              to="/console/connectors"
              className="shrink-0 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Connect GitHub
            </RouterLink>
          )}
        </div>

        {/* Repos Grid */}
        {repos.length > 0 && (
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <GitBranch className="h-3.5 w-3.5 text-primary" /> Repositories
            </h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((r) => (
                <a
                  key={r.name}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-colors group block"
                >
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
                </a>
              ))}
            </div>
          </div>
        )}

        {!connected && (
          <div className="rounded-xl border border-dashed border-border bg-card/50 p-8 text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-muted-foreground/40" />
            <p className="mt-3 text-sm text-muted-foreground">
              No GitHub connection yet. Add a GitHub token in{" "}
              <RouterLink to="/console/connectors" className="text-primary hover:underline">Connectors</RouterLink>{" "}
              to see your repositories here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
