import { createFileRoute, useParams, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState, lazy, Suspense } from "react";
import { listProjects, deleteProject, renameProject, listThreads, createThread, listWorkspaceProjects } from "@/lib/threads.functions";
import {
  listProjectBuilds, getProjectBuild, deleteProjectBuild,
  listProjectDeployments,
  listProjectDatabases, deleteProjectDatabase,
  listProjectPlugins,
  listProjectApiKeys, createProjectApiKey, revokeProjectApiKey,
} from "@/lib/project-lifecycle.functions";
import { listProjectFiles, readProjectFile, writeProjectFile, createProjectFile, deleteProjectFile } from "@/lib/file-editor.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import {
  Plus, Trash2, FileText, Palette, Link2, ExternalLink, Play, Pencil,
  Download, Rocket, Database, Plug, KeyRound, BarChart3, Eye, Copy, Check, Code2,
  GitBranch, GitPullRequest, RefreshCw, Loader2, ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { githubOverview } from "@/lib/connections.functions";
import { githubCreateRepo, githubPushProject } from "@/lib/github-actions.functions";

// Lazy-load Monaco so it doesn't bloat the main bundle
const CodeEditor = lazy(() =>
  import("@/components/jarvis/code-editor").then((m) => ({ default: m.CodeEditor }))
);

const COLORS = ["#D97757", "#E69D45", "#58A65C", "#6A9BCC", "#A855F7", "#EC4899"];

export const Route = createFileRoute("/_authenticated/console/projects/$projectId")({
  component: ProjectPage,
  head: () => ({ meta: [{ title: "Project — Jarvis" }] }),
});

type Tab = "overview" | "preview" | "code" | "builds" | "analysis" | "deploy" | "github" | "database" | "plugins" | "keys";

function ProjectPage() {
  const { projectId } = useParams({ from: "/_authenticated/console/projects/$projectId" });
  const nav = useNavigate();
  const qc = useQueryClient();
  const listP = useServerFn(listProjects);
  const delP = useServerFn(deleteProject);
  const renameP = useServerFn(renameProject);
  const listT = useServerFn(listThreads);
  const createT = useServerFn(createThread);
  const listW = useServerFn(listWorkspaceProjects);

  const { data: projects = [] } = useQuery({ queryKey: ["projects"], queryFn: () => listP({}) });
  const { data: threads = [] } = useQuery({ queryKey: ["threads"], queryFn: () => listT({}) });
  const { data: wsProjects = [] } = useQuery({ queryKey: ["wsProjects"], queryFn: () => listW({}) });

  const isWorkspace = projectId.startsWith("local-");
  const project = (projects as any[]).find((p: any) => p.id === projectId);
  const wsProject = (wsProjects as any[]).find((p: any) => p.id === projectId);
  const previewUrl = wsProject?.previewUrl;

  const projectThreads = (threads as any[]).filter((t: any) => t.project_id === projectId);

  const [tab, setTab] = useState<Tab>("overview");
  const [previewBuild, setPreviewBuild] = useState<{ id: string; html: string } | null>(null);

  const mDel = useMutation({
    mutationFn: () => delP({ data: { id: projectId } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      qc.invalidateQueries({ queryKey: ["threads"] });
      toast.success("Project deleted.");
      nav({ to: "/console/projects" });
    },
  });
  const mRename = useMutation({
    mutationFn: (v: { name: string; description?: string; color?: string }) =>
      renameP({ data: { id: projectId, ...v } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project updated.");
    },
  });
  const mNew = useMutation({
    mutationFn: () => createT({ data: { project_id: projectId } }),
    onSuccess: (t) => nav({ to: "/console/$threadId", params: { threadId: t.id } }),
  });

  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editColor, setEditColor] = useState(COLORS[0]);

  const display = project ?? wsProject;

  const canLifecycle = !isWorkspace;

  const listBuilds = useServerFn(listProjectBuilds);
  const getBuild = useServerFn(getProjectBuild);
  const delBuild = useServerFn(deleteProjectBuild);
  const listDeploys = useServerFn(listProjectDeployments);
  const listDbs = useServerFn(listProjectDatabases);
  const delDb = useServerFn(deleteProjectDatabase);
  const listPlugins = useServerFn(listProjectPlugins);
  const listKeys = useServerFn(listProjectApiKeys);
  const createKey = useServerFn(createProjectApiKey);
  const revokeKey = useServerFn(revokeProjectApiKey);

  // Lifecycle queries (only for DB projects)
  const buildsQ = useQuery({
    queryKey: ["builds", projectId],
    queryFn: () => listBuilds({ data: { projectId } }),
    enabled: canLifecycle,
  });
  const deploysQ = useQuery({
    queryKey: ["deployments", projectId],
    queryFn: () => listDeploys({ data: { projectId } }),
    enabled: canLifecycle,
  });
  const dbsQ = useQuery({
    queryKey: ["dbs", projectId],
    queryFn: () => listDbs({ data: { projectId } }),
    enabled: canLifecycle,
  });
  const pluginsQ = useQuery({
    queryKey: ["plugins", projectId],
    queryFn: () => listPlugins({ data: { projectId } }),
    enabled: canLifecycle,
  });
  const keysQ = useQuery({
    queryKey: ["keys", projectId],
    queryFn: () => listKeys({ data: { projectId } }),
    enabled: canLifecycle,
  });

  const mDelBuild = useMutation({
    mutationFn: (id: string) => delBuild({ data: { buildId: id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["builds", projectId] });
      toast.success("Build deleted.");
    },
  });
  const mDelDb = useMutation({
    mutationFn: (id: string) => delDb({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["dbs", projectId] });
      toast.success("Database removed.");
    },
  });
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeySecret, setNewKeySecret] = useState<string | null>(null);
  const [keyCopied, setKeyCopied] = useState(false);
  const mCreateKey = useMutation({
    mutationFn: (name: string) => createKey({ data: { projectId, name, scopes: ["read", "write", "deploy"] } }),
    onSuccess: (k: any) => {
      qc.invalidateQueries({ queryKey: ["keys", projectId] });
      setNewKeySecret(k.secret ?? null);
      setNewKeyName("");
    },
  });
  const mRevokeKey = useMutation({
    mutationFn: (id: string) => revokeKey({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["keys", projectId] });
      toast.success("API key revoked.");
    },
  });

  const fnGithubOverview = useServerFn(githubOverview);
  const githubQ = useQuery({
    queryKey: ["githubOverview"],
    queryFn: () => fnGithubOverview({}),
  });
  const fnGithubCreate = useServerFn(githubCreateRepo);
  const fnGithubPush = useServerFn(githubPushProject);

  const [pushRepoName, setPushRepoName] = useState("");
  const [pushCommitMsg, setPushCommitMsg] = useState("Update from JARVIS Workspace");
  const [createRepoOpen, setCreateRepoOpen] = useState(false);
  const [newRepoName, setNewRepoName] = useState("");
  const [newRepoDesc, setNewRepoDesc] = useState("");

  const mCreateRepo = useMutation({
    mutationFn: () => fnGithubCreate({ data: { name: newRepoName || projectSlug, description: newRepoDesc || `Repository for ${display?.name}`, private: false } }),
    onSuccess: (r: any) => {
      if (r?.ok) {
        toast.success(`Repository created: ${r.fullName}`);
        setCreateRepoOpen(false);
        qc.invalidateQueries({ queryKey: ["githubOverview"] });
      } else {
        toast.error(r?.error ?? "Create failed");
      }
    },
  });

  const mPushRepo = useMutation({
    mutationFn: () => fnGithubPush({ data: { repoFullName: pushRepoName, commitMessage: pushCommitMsg, slug: projectSlug } }),
    onSuccess: (r: any) => {
      if (r?.ok) {
        toast.success(`Pushed to GitHub: ${pushRepoName}`);
        qc.invalidateQueries({ queryKey: ["githubOverview"] });
      } else {
        toast.error(r?.error ?? "Push failed");
      }
    },
  });

  const openBuild = async (buildId: string) => {
    const b = await getBuild({ data: { buildId } });
    if (b?.html) setPreviewBuild({ id: b.id, html: b.html });
  };

  if (!display) return <div className="p-8 text-sm text-muted-foreground">Project not found.</div>;

  const openEdit = () => {
    setEditName(display.name);
    setEditDesc(display.description ?? "");
    setEditColor(display.color || COLORS[0]);
    setEditOpen(true);
  };

  const builds = buildsQ.data as any[] | undefined;
  const deploys = deploysQ.data as any[] | undefined;
  const dbs = dbsQ.data as any[] | undefined;
  const plugins = pluginsQ.data as any[] | undefined;
  const keys = keysQ.data as any[] | undefined;

  // ── File-editor server fn wrappers ────────────────────────────────────────
  const fnListFiles = useServerFn(listProjectFiles);
  const fnReadFile = useServerFn(readProjectFile);
  const fnWriteFile = useServerFn(writeProjectFile);
  const fnCreateFile = useServerFn(createProjectFile);
  const fnDeleteFile = useServerFn(deleteProjectFile);

  // Derive slug from project name or id
  const projectSlug = (display?.name ?? projectId)
    .toLowerCase().replace(/[^a-z0-9_\-]/g, "-").replace(/-+/g, "-");

  const TABS: Array<{ id: Tab; label: string; icon: typeof Eye }> = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "preview", label: "Live preview", icon: Play },
    { id: "code", label: "Code editor", icon: Code2 },
    { id: "builds", label: "Builds", icon: Download },
    { id: "analysis", label: "Analysis", icon: BarChart3 },
    { id: "deploy", label: "Deploy", icon: Rocket },
    { id: "github", label: "GitHub", icon: GitBranch },
    { id: "database", label: "Database", icon: Database },
    { id: "plugins", label: "Plugins", icon: Plug },
    { id: "keys", label: "API keys", icon: KeyRound },
  ];

  return (
    <div className="h-full overflow-y-auto p-8">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-lg" style={{ background: display.color }} />
          <div>
            <h1 className="font-display text-3xl font-semibold">{display.name}</h1>
            {display.description && <p className="text-sm text-muted-foreground">{display.description}</p>}
          </div>
        </div>
        <div className="flex gap-2">
          {previewUrl && (
            <Button onClick={() => window.open(previewUrl, "_blank", "noopener,noreferrer")}>
              <ExternalLink className="mr-2 h-4 w-4" /> Open preview
            </Button>
          )}
          {!isWorkspace && (
            <>
              <Button onClick={() => mNew.mutate()}><Plus className="mr-2 h-4 w-4" /> New chat</Button>
              <Button variant="outline" onClick={openEdit}><Pencil className="mr-2 h-4 w-4" /> Edit</Button>
              <Button variant="ghost" onClick={() => mDel.mutate()}><Trash2 className="mr-2 h-4 w-4" /> Delete</Button>
            </>
          )}
        </div>
      </div>

      {/* Lifecycle tabs */}
      {canLifecycle && (
        <div className="mb-6 flex flex-wrap gap-1.5 border-b border-border pb-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                tab === t.id ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-surface hover:text-foreground"
              }`}
            >
              <t.icon className="h-3.5 w-3.5" />
              {t.label}
              {t.id === "builds" && (builds?.length ?? 0) > 0 && (
                <span className="rounded-full bg-primary/20 px-1.5 text-[10px]">{builds?.length}</span>
              )}
            </button>
          ))}
        </div>
      )}

      {tab === "overview" && (
        <>
          {previewUrl && (
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-mono-xs opacity-60 flex items-center gap-2">
                  <Play className="h-3 w-3" /> Live preview
                </h2>
                <span className="text-mono-xs opacity-40">{previewUrl}</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-background">
                <div className="flex items-center gap-1.5 border-b border-border bg-card px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 flex-1 truncate rounded-md bg-background px-2 py-0.5 text-mono-xs text-muted-foreground">
                    {previewUrl}
                  </span>
                </div>
                <iframe
                  src={previewUrl}
                  title={display.name}
                  className="h-[68vh] w-full bg-white"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-3">
            <section className="md:col-span-2">
              <h2 className="mb-3 text-mono-xs opacity-60">Chats in this project</h2>
              {projectThreads.length === 0 ? (
                <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                  No chats yet. Start one.
                </div>
              ) : (
                <ul className="space-y-2">
                  {projectThreads.map((t: any) => (
                    <li key={t.id}>
                      <button
                        onClick={() => nav({ to: "/console/$threadId", params: { threadId: t.id } })}
                        className="w-full rounded-md border border-border bg-card px-4 py-3 text-left text-sm hover:border-primary/40"
                      >
                        {t.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
            <aside className="space-y-4">
              <SidebarCard icon={Palette} title="Brand style" hint="Fonts, colors, tone." />
              <SidebarCard icon={FileText} title="Documents" hint="Attach knowledge Jarvis should reference." />
              <SidebarCard icon={Link2} title="References" hint="URLs, repos, Figma files." />
            </aside>
          </div>
        </>
      )}

      {tab === "builds" && (
        <section>
          <h2 className="mb-3 text-mono-xs opacity-60">Saved builds (generated sites & apps)</h2>
          {(!builds || builds.length === 0) ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <Download className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No builds yet. Ask Jarvis in a chat to create a website or app for this project — it will be saved here automatically.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {builds.map((b: any) => (
                <li key={b.id} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{b.name}</p>
                    <p className="text-mono-xs opacity-50">
                      {b.framework} · {b.build_type} · {new Date(b.created_at).toLocaleString()}
                    </p>
                  </div>
                  {b.status && (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">{b.status}</span>
                  )}
                  <Button size="sm" variant="outline" onClick={() => void openBuild(b.id)}>
                    <Eye className="mr-1.5 h-3.5 w-3.5" /> Preview
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => mDelBuild.mutate(b.id)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {tab === "code" && (
        <div className="-mx-8 -mt-2" style={{ height: "calc(100vh - 200px)" }}>
          <Suspense fallback={
            <div className="flex h-full items-center justify-center text-sm text-zinc-500">
              Loading editor…
            </div>
          }>
            <CodeEditor
              projectSlug={projectSlug}
              previewUrl={previewUrl}
              onLoadFiles={async () => {
                const result = await fnListFiles({ data: { slug: projectSlug } });
                return (result as any).files ?? [];
              }}
              onReadFile={async (filePath) => {
                const result = await fnReadFile({ data: { slug: projectSlug, filePath } });
                return result as { content: string; language: string };
              }}
              onWriteFile={async (filePath, content) => {
                await fnWriteFile({ data: { slug: projectSlug, filePath, content } });
              }}
              onCreateFile={async (filePath, type) => {
                await fnCreateFile({ data: { slug: projectSlug, filePath, type } });
              }}
              onDeleteFile={async (filePath) => {
                await fnDeleteFile({ data: { slug: projectSlug, filePath } });
              }}
            />
          </Suspense>
        </div>
      )}

      {tab === "analysis" && (
        <section>
          <h2 className="mb-3 text-mono-xs opacity-60">Project analysis</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Chats" value={projectThreads.length} />
            <StatCard label="Builds" value={builds?.length ?? 0} />
            <StatCard label="Deployments" value={deploys?.length ?? 0} />
            <StatCard label="API keys" value={(keys?.filter((k: any) => !k.revoked_at) ?? []).length} />
          </div>
          <div className="mt-6">
            <p className="mb-3 text-sm text-muted-foreground">
              Ask Jarvis in a chat: <em>"analyze this project"</em> — it produces a full report (threads, messages, builds, deployments, next steps) and saves it to history.
            </p>
            <Button variant="outline" onClick={() => nav({ to: "/console/$threadId", params: { threadId: "new" }, search: { seed: `Analyze my project "${display.name}"` } })}>
              <BarChart3 className="mr-2 h-4 w-4" /> Run analysis in chat
            </Button>
          </div>
        </section>
      )}

      {tab === "deploy" && (
        <section>
          <h2 className="mb-3 text-mono-xs opacity-60">Deployments</h2>
          {(!deploys || deploys.length === 0) ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <Rocket className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No deployments yet. Ask Jarvis: <em>"deploy my project"</em> — it records the deployment and opens Vercel with the export bundle ready to import.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {deploys.map((d: any) => (
                <li key={d.id} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <Rocket className="h-4 w-4 text-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{d.url ?? `${d.provider} deployment`}</p>
                    <p className="text-mono-xs opacity-50">{d.provider} · {d.environment} · {new Date(d.created_at).toLocaleString()}</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    d.status === "live" ? "bg-green-500/15 text-green-600" : d.status === "failed" ? "bg-red-500/15 text-red-500" : "bg-primary/15 text-primary"
                  }`}>{d.status}</span>
                  {d.url && <Button size="sm" variant="outline" onClick={() => window.open(d.url, "_blank", "noopener")}>Open</Button>}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {tab === "github" && (
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-mono-xs opacity-60">GitHub Repository Sync</h2>
            {githubQ.data?.connected && (
              <Button size="sm" onClick={() => { setNewRepoName(projectSlug); setCreateRepoOpen(true); }}>
                <GitBranch className="mr-1.5 h-3.5 w-3.5" /> Create repository
              </Button>
            )}
          </div>

          {!githubQ.data?.connected ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <GitBranch className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground mb-3">
                GitHub is not connected yet. Connect your GitHub account to sync this project with repositories.
              </p>
              <Button variant="outline" onClick={() => nav({ to: "/console/github" })}>
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Go to GitHub Settings
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Connected as @{githubQ.data.login}</p>
                    <p className="text-mono-xs opacity-60">{githubQ.data.repos?.length ?? 0} repositories available</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => qc.invalidateQueries({ queryKey: ["githubOverview"] })}>
                  <RefreshCw className="mr-1.5 h-3 w-3" /> Refresh
                </Button>
              </div>

              {/* Push current project build */}
              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4 text-primary" /> Push project code to repository
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Commit and push files or generated builds for <strong>{display.name}</strong> directly to GitHub.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-[11px] font-mono opacity-70 mb-1 block">Target Repository (owner/repo)</label>
                    <Input
                      value={pushRepoName}
                      onChange={(e) => setPushRepoName(e.target.value)}
                      placeholder={`${githubQ.data.login ?? "owner"}/${projectSlug}`}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono opacity-70 mb-1 block">Commit Message</label>
                    <Input
                      value={pushCommitMsg}
                      onChange={(e) => setPushCommitMsg(e.target.value)}
                      placeholder="Commit message"
                      className="h-8 text-xs"
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button
                    size="sm"
                    disabled={!pushRepoName.trim() || mPushRepo.isPending}
                    onClick={() => mPushRepo.mutate()}
                  >
                    {mPushRepo.isPending ? <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" /> : <GitBranch className="mr-1.5 h-3.5 w-3.5" />}
                    {mPushRepo.isPending ? "Pushing…" : "Push to GitHub"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {tab === "database" && (
        <section>
          <h2 className="mb-3 text-mono-xs opacity-60">Connected databases</h2>
          {(!dbs || dbs.length === 0) ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <Database className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No database attached. Ask Jarvis: <em>"connect a database to my project"</em> — it attaches one and generates starter schema SQL.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {dbs.map((d: any) => (
                <li key={d.id} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <Database className="h-4 w-4 text-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{d.name}</p>
                    <p className="text-mono-xs opacity-50">{d.provider}</p>
                  </div>
                  <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-medium text-green-600">{d.status}</span>
                  <Button size="sm" variant="ghost" onClick={() => mDelDb.mutate(d.id)}><Trash2 className="h-3.5 w-3.5" /></Button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {tab === "plugins" && (
        <section>
          <h2 className="mb-3 text-mono-xs opacity-60">Plugins</h2>
          {(!plugins || plugins.length === 0) ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <Plug className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No plugins yet. Ask Jarvis: <em>"enable seo and analytics plugins"</em> — available: seo, analytics, forms, payments, comments, auth, cms, chat, storage, email.
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {plugins.map((p: any) => (
                <span key={p.plugin_id} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm">
                  <Plug className="h-3.5 w-3.5 text-primary" />
                  {p.plugin_id}
                  {p.enabled && <span className="rounded-full bg-green-500/15 px-1.5 text-[10px] text-green-600">on</span>}
                </span>
              ))}
            </div>
          )}
        </section>
      )}

      {tab === "keys" && (
        <section>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-mono-xs opacity-60">API keys for this project</h2>
            <div className="flex gap-2">
              <Input
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="Key name (e.g. production)"
                className="h-8 w-56 text-xs"
              />
              <Button size="sm" disabled={!newKeyName.trim() || mCreateKey.isPending} onClick={() => mCreateKey.mutate(newKeyName.trim())}>
                <KeyRound className="mr-1.5 h-3.5 w-3.5" /> Create key
              </Button>
            </div>
          </div>

          {newKeySecret && (
            <div className="mb-4 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
              <p className="mb-2 text-xs font-semibold">Key created — copy it now, it's shown only once:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 truncate rounded-md bg-background px-2 py-1.5 text-xs">{newKeySecret}</code>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8"
                  onClick={() => {
                    void navigator.clipboard.writeText(newKeySecret);
                    setKeyCopied(true);
                    setTimeout(() => setKeyCopied(false), 1500);
                  }}
                >
                  {keyCopied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                  {keyCopied ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          )}

          {(!keys || keys.length === 0) ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <KeyRound className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">No API keys yet. Create one to integrate this project with your tools.</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {keys.map((k: any) => (
                <li key={k.id} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <KeyRound className="h-4 w-4 text-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{k.name}</p>
                    <p className="font-mono text-mono-xs opacity-60">{k.key_prefix}*** · {k.scopes?.join(", ")}</p>
                  </div>
                  {k.revoked_at ? (
                    <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-medium text-red-500">revoked</span>
                  ) : (
                    <>
                      <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-medium text-green-600">active</span>
                      <Button size="sm" variant="ghost" onClick={() => mRevokeKey.mutate(k.id)}>Revoke</Button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {tab === "preview" && (
        <section>
          <h2 className="mb-3 text-mono-xs opacity-60">Live preview</h2>
          {builds && builds.length > 0 ? (
            <>
              <div className="mb-3 flex flex-wrap gap-2">
                {builds.map((b: any) => (
                  <Button key={b.id} size="sm" variant="outline" onClick={() => void openBuild(b.id)}>
                    <Play className="mr-1.5 h-3.5 w-3.5" /> {b.name}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Pick a build to preview it below.</p>
            </>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <Play className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                Generate a site first: ask Jarvis to create a website or app for this project, and it will be live-previewable here.
              </p>
            </div>
          )}
        </section>
      )}

      {/* Build preview modal */}
      <Dialog open={previewBuild !== null} onOpenChange={(o) => !o && setPreviewBuild(null)}>
        <DialogContent className="max-w-5xl p-0">
          <DialogHeader className="border-b border-border px-4 py-3">
            <DialogTitle className="text-sm">Live preview</DialogTitle>
          </DialogHeader>
          <iframe
            srcDoc={previewBuild?.html ?? ""}
            title="Live preview"
            className="h-[72vh] w-full bg-white"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
          />
        </DialogContent>
      </Dialog>

      {/* Edit dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Edit project</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Project name" autoFocus />
            <Input value={editDesc} onChange={(e) => setEditDesc(e.target.value)} placeholder="Description (optional)" />
            <div className="flex items-center gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setEditColor(c)}
                  aria-label={`Color ${c}`}
                  className={`h-7 w-7 rounded-full transition-transform hover:scale-110 ${editColor === c ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditOpen(false)}>Cancel</Button>
            <Button onClick={() => {
              if (!editName.trim()) return;
              mRename.mutate({ name: editName.trim(), description: editDesc.trim(), color: editColor });
              setEditOpen(false);
            }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create repository dialog */}
      <Dialog open={createRepoOpen} onOpenChange={setCreateRepoOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Create GitHub repository</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-foreground mb-1 block">Repository name</label>
              <Input
                value={newRepoName}
                onChange={(e) => setNewRepoName(e.target.value)}
                placeholder="Repository name"
                autoFocus
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1 block">Description</label>
              <Input
                value={newRepoDesc}
                onChange={(e) => setNewRepoDesc(e.target.value)}
                placeholder="Repository description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setCreateRepoOpen(false)}>Cancel</Button>
            <Button
              disabled={!newRepoName.trim() || mCreateRepo.isPending}
              onClick={() => mCreateRepo.mutate()}
            >
              {mCreateRepo.isPending ? <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" /> : <GitBranch className="mr-1.5 h-3.5 w-3.5" />}
              {mCreateRepo.isPending ? "Creating…" : "Create repository"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-mono-xs opacity-50">{label}</p>
      <p className="mt-1 text-3xl font-semibold">{value}</p>
    </div>
  );
}

function SidebarCard({ icon: Icon, title, hint }: { icon: typeof FileText; title: string; hint: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <div className="font-medium">{title}</div>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      <Button size="sm" variant="ghost" className="mt-3">Add</Button>
    </div>
  );
}