import { createFileRoute, Link, Outlet, useNavigate, useParams, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import {
  listThreads, createThread, deleteThread, renameThread, updateThread,
  listProjects, createProject, listWorkspaceProjects, deleteProject, renameProject,
} from "@/lib/threads.functions";
import { JarvisWordmark } from "@/components/jarvis/logo";
import { StatusBadge } from "@/components/jarvis/status-badge";
import {
  Plus, Trash2, LogOut, MessageSquare, Star, MoreHorizontal, Pencil,
  FolderPlus, Folder, Settings, Puzzle, Cable, Sparkles, GitBranch, Wrench, Menu, Palette, LayoutDashboard,
  Clock, BookOpen, Users, KanbanSquare, Activity, CircleDollarSign, ShieldCheck, ScrollText, Lock,
} from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const Route = createFileRoute("/_authenticated/console")({
  component: ConsoleShell,
  head: () => ({
    meta: [
      { title: "Console — Jarvis" },
      { name: "description", content: "The Jarvis command console." },
    ],
  }),
});

function ConsoleShell() {
  const navigate = useNavigate();
  const router = useRouter();
  const params = useParams({ strict: false }) as { threadId?: string; projectId?: string };
  const qc = useQueryClient();
  const listFn = useServerFn(listThreads);
  const createFn = useServerFn(createThread);
  const deleteFn = useServerFn(deleteThread);
  const renameFn = useServerFn(renameThread);
  const updateFn = useServerFn(updateThread);
  const listProjFn = useServerFn(listProjects);
  const createProjFn = useServerFn(createProject);
  const deleteProjFn = useServerFn(deleteProject);
  const renameProjFn = useServerFn(renameProject);
  const { data: threads = [] } = useQuery({ queryKey: ["threads"], queryFn: () => listFn({}) });
  const { data: projects = [] } = useQuery({ queryKey: ["projects"], queryFn: () => listProjFn({}) });
  const listWorkspaceFn = useServerFn(listWorkspaceProjects);
  const { data: wsProjects = [] } = useQuery({ queryKey: ["wsProjects"], queryFn: () => listWorkspaceFn({}) });

  const allProjects = [...projects, ...wsProjects];

  const inv = () => qc.invalidateQueries({ queryKey: ["threads"] });
  const invP = () => qc.invalidateQueries({ queryKey: ["projects"] });

  // Realtime: keep the thread list and project list fresh as work happens.
  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | null = null;
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      const filter = `user_id=eq.${data.user.id}`;
      channel = supabase
        .channel("console-shell")
        .on("postgres_changes", { event: "*", schema: "public", table: "threads", filter }, () => {
          if (mounted) inv();
        })
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter }, () => {
          if (mounted) qc.invalidateQueries({ queryKey: ["messages"] });
        })
        .on("postgres_changes", { event: "*", schema: "public", table: "projects", filter }, () => {
          if (mounted) invP();
        })
        .subscribe();
    })();
    return () => {
      mounted = false;
      channel?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mCreate = useMutation({
    mutationFn: (project_id?: string) => createFn({ data: { project_id: project_id ?? null } }),
    onSuccess: (t) => { inv(); navigate({ to: "/console/$threadId", params: { threadId: t.id } }); },
  });
  const mDelete = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => { inv(); if (params.threadId) navigate({ to: "/console" }); toast.success("Chat deleted."); },
  });
  const mUpdate = useMutation({
    mutationFn: (v: { id: string; starred?: boolean; project_id?: string | null }) => updateFn({ data: v }),
    onSuccess: () => inv(),
  });
  const mRename = useMutation({
    mutationFn: (v: { id: string; title: string }) => renameFn({ data: v }),
    onSuccess: () => { inv(); toast.success("Renamed."); },
  });
  const mCreateProject = useMutation({
    mutationFn: (name: string) => createProjFn({ data: { name } }),
    onSuccess: () => { invP(); toast.success("Project created."); },
  });
  const mDeleteProject = useMutation({
    mutationFn: (id: string) => deleteProjFn({ data: { id } }),
    onSuccess: () => {
      invP();
      toast.success("Project deleted.");
      if (params.projectId?.startsWith("local-") === false && params.projectId) navigate({ to: "/console" });
    },
  });
  const mRenameProject = useMutation({
    mutationFn: (v: { id: string; name: string }) => renameProjFn({ data: v }),
    onSuccess: () => { invP(); toast.success("Project renamed."); },
  });

  const [renameId, setRenameId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [newProjOpen, setNewProjOpen] = useState(false);
  const [newProjName, setNewProjName] = useState("");
  const [renameProjectId, setRenameProjectId] = useState<string | null>(null);
  const [renameProjectValue, setRenameProjectValue] = useState("");
  const [deleteProjectId, setDeleteProjectId] = useState<string | null>(null);

  const signOut = async () => {
    localStorage.removeItem("jarvis-guest-mode");
    await supabase.auth.signOut();
    router.invalidate();
    navigate({ to: "/" });
    toast.success("Signed out.");
  };

  const starred = (threads as any[]).filter((t: any) => t.starred);
  const unstarred = (threads as any[]).filter((t: any) => !t.starred);

  const NavLink = ({ to, icon: Icon, label }: { to: string; icon: typeof Wrench; label: string }) => (
    <Link
      to={to}
      className="side-item flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
      activeProps={{ className: "bg-primary/10 text-foreground" }}
    >
      <Icon className="h-3.5 w-3.5" /> {label}
    </Link>
  );

  const renderThread = (t: typeof threads[number]) => {
    const active = params.threadId === t.id;
    return (
      <li key={t.id}>
        <div
          className={`group flex items-center gap-1 rounded-md px-2 py-1.5 text-sm ${
            active ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-background hover:text-foreground"
          }`}
        >
          <button
            onClick={() => navigate({ to: "/console/$threadId", params: { threadId: t.id } })}
            className="flex flex-1 items-center gap-2 overflow-hidden text-left"
          >
            <MessageSquare className="h-3.5 w-3.5 shrink-0 opacity-60" />
            <span className="truncate">{t.title}</span>
          </button>
          <button
            onClick={() => mUpdate.mutate({ id: t.id, starred: !t.starred })}
            className={`rounded p-1 ${t.starred ? "text-amber-500" : "opacity-0 hover:text-amber-500 group-hover:opacity-100"}`}
            aria-label="Star"
          >
            <Star className={`h-3.5 w-3.5 ${t.starred ? "fill-current" : ""}`} />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded p-1 opacity-0 hover:bg-background group-hover:opacity-100" aria-label="More">
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => { setRenameId(t.id); setRenameValue(t.title); }}>
                <Pencil className="mr-2 h-3.5 w-3.5" /> Rename
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => mUpdate.mutate({ id: t.id, starred: !t.starred })}>
                <Star className="mr-2 h-3.5 w-3.5" /> {t.starred ? "Unstar" : "Star"}
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Folder className="mr-2 h-3.5 w-3.5" /> Move to project
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => mUpdate.mutate({ id: t.id, project_id: null })}>
                    (No project)
                  </DropdownMenuItem>
                  {(projects as any[]).map((p: any) => (
                    <DropdownMenuItem key={p.id} onClick={() => mUpdate.mutate({ id: t.id, project_id: p.id })}>
                      <span className="mr-2 h-2 w-2 rounded-full" style={{ background: p.color }} />
                      {p.name}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setNewProjOpen(true)}>
                    <FolderPlus className="mr-2 h-3.5 w-3.5" /> New project…
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => mDelete.mutate(t.id)} className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-3.5 w-3.5" /> Delete chat
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </li>
    );
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { setMobileOpen(false); }, [params.threadId]);

  const sidebarBody = (
    <>
      <div className="flex items-center justify-between border-b border-border p-4">
        <Link to="/"><JarvisWordmark /></Link>
        <StatusBadge status="ready" />
      </div>
      <button
        onClick={() => mCreate.mutate(undefined)}
        className="shine m-3 flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 active:scale-[0.98]"
      >
        <Plus className="h-4 w-4" /> New chat
        <kbd className="ml-auto hidden rounded bg-primary-foreground/20 px-1.5 text-[10px] font-mono sm:block">⌘N</kbd>
      </button>

      <nav className="flex-1 space-y-4 overflow-y-auto px-2 pb-3">
        <div className="space-y-0.5">
          <NavLink to="/console" icon={LayoutDashboard} label="Dashboard" />
          <NavLink to="/console/agents" icon={Users} label="Crew" />
          <NavLink to="/console/issues" icon={KanbanSquare} label="Issues" />
          <NavLink to="/console/runs" icon={Activity} label="Runs" />
          <NavLink to="/console/costs" icon={CircleDollarSign} label="Costs & Budgets" />
          <NavLink to="/console/approvals" icon={ShieldCheck} label="Approvals" />
          <NavLink to="/console/activity" icon={ScrollText} label="Activity" />
          <NavLink to="/console/tools" icon={Wrench} label="Tools" />
          <NavLink to="/console/connectors" icon={Cable} label="Connectors" />
          <NavLink to="/console/plugins" icon={Puzzle} label="Plugins" />
          <NavLink to="/console/skills" icon={Sparkles} label="Skills" />
          <NavLink to="/console/roadmaps" icon={BookOpen} label="Roadmaps & Learnify" />
          <NavLink to="/console/automations" icon={Clock} label="Automations" />
          <NavLink to="/console/design" icon={Palette} label="Design Systems" />
          <NavLink to="/console/github" icon={GitBranch} label="GitHub" />
          <NavLink to="/console/settings" icon={Settings} label="Settings" />
        </div>

        <div>
          <div className="flex items-center justify-between px-2 pb-1">
            <span className="text-mono-xs opacity-60">Projects</span>
            <button
              onClick={() => setNewProjOpen(true)}
              className="rounded p-1 text-muted-foreground hover:bg-background hover:text-foreground"
              aria-label="New project"
            >
              <FolderPlus className="h-3.5 w-3.5" />
            </button>
          </div>
          <ul className="space-y-0.5 max-h-48 overflow-y-auto">
            {allProjects.length === 0 && (
              <li className="px-3 py-1 text-xs text-muted-foreground/70">No projects yet</li>
            )}
            {allProjects.map((p) => {
              const ws = (p as any).isWorkspace === true;
              const active = params.projectId === p.id;
              return (
                <li key={p.id} className="group flex items-center gap-1">
                  <Link
                    to="/console/projects/$projectId"
                    params={{ projectId: p.id }}
                    title={ws ? "Bundled workspace template — read-only" : p.name}
                    className={`flex flex-1 items-center gap-2 overflow-hidden rounded-md px-2 py-1.5 text-sm transition-colors ${
                      active ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-background hover:text-foreground"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full shrink-0" style={{ background: (p as any).color }} />
                    <span className="truncate">{p.name}</span>
                    {ws && <Lock className="h-3 w-3 shrink-0 opacity-40" aria-label="Read-only workspace template" />}
                  </Link>
                  {!ws && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className="rounded p-1 opacity-0 hover:bg-background group-hover:opacity-100"
                          aria-label={`Actions for ${p.name}`}
                        >
                          <MoreHorizontal className="h-3.5 w-3.5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => { setRenameProjectId(p.id); setRenameProjectValue((p as any).name); }}>
                          <Pencil className="mr-2 h-3.5 w-3.5" /> Rename
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDeleteProjectId(p.id)} className="text-destructive focus:text-destructive">
                          <Trash2 className="mr-2 h-3.5 w-3.5" /> Delete project
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {starred.length > 0 && (
          <div>
            <div className="px-2 pb-1 text-mono-xs opacity-60">Pinned</div>
            <ul className="space-y-0.5">{starred.map(renderThread)}</ul>
          </div>
        )}

        <div>
          <div className="px-2 pb-1 text-mono-xs opacity-60">Recent</div>
          {unstarred.length === 0 && (
            <div className="px-3 py-2 text-xs text-muted-foreground">No threads yet.</div>
          )}
          <ul className="space-y-0.5">{unstarred.map(renderThread)}</ul>
        </div>
      </nav>

      <div className="border-t border-border p-3 space-y-2">
        {typeof localStorage !== "undefined" && localStorage.getItem("jarvis-guest-mode") === "true" ? (
          <div className="rounded-md border border-amber/30 bg-amber/10 p-2.5 text-xs text-amber flex items-center justify-between">
            <span className="font-medium">Guest Demo Mode</span>
            <button
              onClick={signOut}
              className="text-[11px] underline font-mono hover:text-foreground"
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 rounded-md px-3 py-2 text-xs text-muted-foreground/60">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            <span className="font-mono">Gemini + Groq · Free tier</span>
          </div>
        )}
        <button
          onClick={signOut}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-background hover:text-foreground"
        >
          <LogOut className="h-4 w-4" /> {typeof localStorage !== "undefined" && localStorage.getItem("jarvis-guest-mode") === "true" ? "Exit Guest Mode" : "Sign out"}
        </button>
      </div>
    </>
  );

  return (
    <div className="grid h-screen grid-cols-1 bg-background text-foreground md:grid-cols-[280px_1fr]">
      <aside className="hidden flex-col border-r border-border bg-surface md:flex">
        {sidebarBody}
      </aside>

      <main className="flex min-h-0 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between border-b border-border bg-surface/60 px-3 py-2 md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="rounded-md p-2 hover:bg-background" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-[280px] flex-col bg-surface p-0">
              <VisuallyHidden><SheetTitle>Navigation</SheetTitle></VisuallyHidden>
              {sidebarBody}
            </SheetContent>
          </Sheet>
          <Link to="/"><JarvisWordmark /></Link>
          <button
            onClick={() => mCreate.mutate(undefined)}
            className="rounded-md p-2 hover:bg-background"
            aria-label="New chat"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          <Outlet />
        </div>
      </main>


      {/* Rename dialog */}
      <Dialog open={!!renameId} onOpenChange={(o) => !o && setRenameId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Rename chat</DialogTitle></DialogHeader>
          <Input value={renameValue} onChange={(e) => setRenameValue(e.target.value)} autoFocus />
          <DialogFooter>
            <Button variant="ghost" onClick={() => setRenameId(null)}>Cancel</Button>
            <Button onClick={() => {
              if (!renameId || !renameValue.trim()) return;
              mRename.mutate({ id: renameId, title: renameValue.trim() });
              setRenameId(null);
            }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New project dialog */}
      <Dialog open={newProjOpen} onOpenChange={setNewProjOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>New project</DialogTitle></DialogHeader>
          <Input value={newProjName} onChange={(e) => setNewProjName(e.target.value)} placeholder="Project name" autoFocus />
          <DialogFooter>
            <Button variant="ghost" onClick={() => setNewProjOpen(false)}>Cancel</Button>
            <Button onClick={() => {
              if (!newProjName.trim()) return;
              mCreateProject.mutate(newProjName.trim());
              setNewProjName(""); setNewProjOpen(false);
            }}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rename project dialog */}
      <Dialog open={!!renameProjectId} onOpenChange={(o) => !o && setRenameProjectId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Rename project</DialogTitle></DialogHeader>
          <Input
            value={renameProjectValue}
            onChange={(e) => setRenameProjectValue(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && renameProjectValue.trim()) {
                mRenameProject.mutate({ id: renameProjectId!, name: renameProjectValue.trim() });
                setRenameProjectId(null);
              }
            }}
          />
          <DialogFooter>
            <Button variant="ghost" onClick={() => setRenameProjectId(null)}>Cancel</Button>
            <Button onClick={() => {
              if (!renameProjectId || !renameProjectValue.trim()) return;
              mRenameProject.mutate({ id: renameProjectId, name: renameProjectValue.trim() });
              setRenameProjectId(null);
            }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete project confirm */}
      <Dialog open={!!deleteProjectId} onOpenChange={(o) => !o && setDeleteProjectId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Delete project?</DialogTitle></DialogHeader>
          <p className="text-sm text-muted-foreground">
            This removes the project from the sidebar. Its chats are kept.
          </p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDeleteProjectId(null)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (deleteProjectId) mDeleteProject.mutate(deleteProjectId);
                setDeleteProjectId(null);
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
