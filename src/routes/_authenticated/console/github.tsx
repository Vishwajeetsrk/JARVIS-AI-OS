import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { GitBranch, CheckCircle2, ExternalLink, Star, CircleDot, GitPullRequest, ShieldCheck, KeyRound, RefreshCw, LogOut, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { githubOverview, disconnectProvider } from "@/lib/connections.functions";
import { githubSignInStart, githubSignInPoll, githubCreateRepo, githubPushProject } from "@/lib/github-actions.functions";

export const Route = createFileRoute("/_authenticated/console/github")({
  component: GithubPage,
  head: () => ({ meta: [{ title: "GitHub — Jarvis" }] }),
});

function GithubPage() {
  const qc = useQueryClient();
  const fn = useServerFn(githubOverview);
  const { data, isLoading, refetch } = useQuery({ queryKey: ["githubOverview"], queryFn: () => fn({}) });

  // Device-flow sign in
  const [signIn, setSignIn] = useState<{ userCode: string; verificationUri: string; deviceCode: string } | null>(null);
  const [polling, setPolling] = useState(false);
  const startFn = useServerFn(githubSignInStart);
  const pollFn = useServerFn(githubSignInPoll);
  const disconnectFn = useServerFn(disconnectProvider);

  const mSignIn = useMutation({
    mutationFn: () => startFn({}),
    onSuccess: async (r: any) => {
      if (!r?.ok) {
        toast.error(r?.error ?? "Sign-in unavailable");
        return;
      }
      setSignIn({ userCode: r.userCode, verificationUri: r.verificationUri, deviceCode: r.deviceCode });
      setPolling(true);
      window.open(r.verificationUri, "_blank", "noopener");
      const interval = Math.max(r.interval ?? 5, 5);
      const deadline = Date.now() + (r.expiresIn ?? 900) * 1000;
      const timer = setInterval(async () => {
        if (Date.now() > deadline) {
          clearInterval(timer);
          setPolling(false);
          setSignIn(null);
          toast.error("Sign-in code expired. Try again.");
          return;
        }
        const res: any = await pollFn({ data: { deviceCode: r.deviceCode } }).catch(() => null);
        if (!res) return;
        if (res.ok === true) {
          clearInterval(timer);
          setPolling(false);
          setSignIn(null);
          toast.success(`GitHub connected · ${res.login ?? ""}`);
          qc.invalidateQueries({ queryKey: ["githubOverview"] });
        } else if (res.ok === false) {
          clearInterval(timer);
          setPolling(false);
          setSignIn(null);
          toast.error(res.error ?? "Sign-in failed");
        }
      }, interval * 1000);
    },
  });

  const mDisconnect = useMutation({
    mutationFn: () => disconnectFn({ data: { provider: "github" } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["githubOverview"] });
      toast.success("GitHub disconnected.");
    },
  });

  // Create repo dialog
  const [createOpen, setCreateOpen] = useState(false);
  const [repoName, setRepoName] = useState("");
  const [repoDesc, setRepoDesc] = useState("");
  const [repoPrivate, setRepoPrivate] = useState(false);
  const createFn = useServerFn(githubCreateRepo);
  const mCreate = useMutation({
    mutationFn: (v: { name: string; description: string; private: boolean }) => createFn({ data: v }),
    onSuccess: (r: any) => {
      if (r?.ok) {
        toast.success(`Repo created: ${r.fullName}`);
        setCreateOpen(false);
        setRepoName("");
        setRepoDesc("");
        qc.invalidateQueries({ queryKey: ["githubOverview"] });
        window.open(r.url, "_blank", "noopener");
      } else toast.error(r?.error ?? "Create failed");
    },
  });

  // Push project dialog
  const [pushOpen, setPushOpen] = useState(false);
  const [pushRepo, setPushRepo] = useState("");
  const [pushMsg, setPushMsg] = useState("Ship site via Jarvis AI OS");
  const pushFn = useServerFn(githubPushProject);
  const mPush = useMutation({
    mutationFn: (v: { repoName: string; commitMessage: string }) => pushFn({ data: { repoName: v.repoName, commitMessage: v.commitMessage, private: false } }),
    onSuccess: (r: any) => {
      if (r?.ok) {
        toast.success(r.created ? `Repo created + pushed (${r.fileCount} files)` : `Pushed ${r.fileCount} files to ${r.repo}`);
        setPushOpen(false);
        setPushRepo("");
        window.open(r.url, "_blank", "noopener");
      } else toast.error(r?.error ?? "Push failed");
    },
  });

  if (isLoading) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="mx-auto max-w-5xl p-8 space-y-6">
          <PageHeader title="GitHub" subtitle="Repos, direct push, and one-click sign-in." />
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
          subtitle="Sign in, create repos, and push projects directly."
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
                ? `${repos.length} repos synced · create repos · direct push projects`
                : "Sign in with GitHub, or add a personal access token in Connectors."}
            </div>
          </div>
          {connected ? (
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-sage">
                <CheckCircle2 className="h-4 w-4" /> Active
              </span>
              <Button variant="ghost" size="sm" onClick={() => mDisconnect.mutate()}>
                <LogOut className="mr-1.5 h-3.5 w-3.5" /> Disconnect
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button onClick={() => mSignIn.mutate()} disabled={mSignIn.isPending || polling}>
                {polling ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GitBranch className="mr-2 h-4 w-4" />}
                {polling ? "Waiting for approval…" : "Sign in with GitHub"}
              </Button>
              <RouterLink
                to="/console/connectors"
                className="shrink-0 inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              >
                <KeyRound className="mr-2 h-3.5 w-3.5" /> Use token
              </RouterLink>
            </div>
          )}
        </div>

        {/* Quick actions */}
        {connected && (
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={() => setCreateOpen(true)}>
              <GitBranch className="mr-1.5 h-3.5 w-3.5" /> New repository
            </Button>
            <Button size="sm" variant="outline" onClick={() => setPushOpen(true)}>
              <GitPullRequest className="mr-1.5 h-3.5 w-3.5" /> Push project (latest build)
            </Button>
            <Button size="sm" variant="ghost" onClick={() => void refetch()}>
              <RefreshCw className="mr-1.5 h-3.5 w-3.5" /> Refresh
            </Button>
          </div>
        )}

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
              No GitHub connection yet. Sign in with GitHub above, or add a token in{" "}
              <RouterLink to="/console/connectors" className="text-primary hover:underline">Connectors</RouterLink>.
            </p>
          </div>
        )}
      </div>

      {/* Sign-in code dialog */}
      <Dialog open={signIn !== null} onOpenChange={(o) => !o && (setSignIn(null), setPolling(false))}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Sign in with GitHub</DialogTitle></DialogHeader>
          {signIn && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                I opened <a href={signIn.verificationUri} target="_blank" rel="noreferrer" className="text-primary hover:underline">{signIn.verificationUri}</a>. Enter this code to authorize Jarvis:
              </p>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
                <code className="font-mono text-4xl font-bold tracking-[0.3em] text-primary">{signIn.userCode}</code>
              </div>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
                Waiting for you to approve… (this dialog closes automatically)
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Create repo dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>New repository</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input value={repoName} onChange={(e) => setRepoName(e.target.value)} placeholder="Repo name (e.g. my-awesome-site)" autoFocus />
            <Input value={repoDesc} onChange={(e) => setRepoDesc(e.target.value)} placeholder="Description (optional)" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={repoPrivate} onChange={(e) => setRepoPrivate(e.target.checked)} className="h-4 w-4" />
              Private repository
            </label>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setCreateOpen(false)}>Cancel</Button>
            <Button disabled={!repoName.trim() || mCreate.isPending} onClick={() => mCreate.mutate({ name: repoName.trim(), description: repoDesc.trim(), private: repoPrivate })}>
              {mCreate.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Create repo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Push project dialog */}
      <Dialog open={pushOpen} onOpenChange={setPushOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Push project to GitHub</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input value={pushRepo} onChange={(e) => setPushRepo(e.target.value)} placeholder="Repo name (new) or owner/existing-repo" autoFocus />
            <Input value={pushMsg} onChange={(e) => setPushMsg(e.target.value)} placeholder="Commit message" />
            <p className="text-xs text-muted-foreground">
              Pushes the latest saved build (index.html, vercel.json, netlify.toml, README, brand assets, legal pages) as a real commit. Creates the repo if it doesn't exist.
            </p>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setPushOpen(false)}>Cancel</Button>
            <Button disabled={!pushRepo.trim() || mPush.isPending} onClick={() => mPush.mutate({ repoName: pushRepo.trim(), commitMessage: pushMsg.trim() })}>
              {mPush.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GitPullRequest className="mr-2 h-4 w-4" />}
              Push project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}