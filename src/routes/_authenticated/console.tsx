import { createFileRoute, Link, Outlet, useNavigate, useParams, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import {
  listThreads, createThread, deleteThread, renameThread, updateThread,
  listProjects, createProject, deleteProject, renameProject,
} from "@/lib/threads.functions";
import { JarvisWordmark } from "@/components/jarvis/logo";
import { StatusBadge } from "@/components/jarvis/status-badge";
import { CommandBar } from "@/components/jarvis/command-bar";
import {
  Plus, Trash2, LogOut, MessageSquare, Star, MoreHorizontal, Pencil,
  FolderPlus, Folder, Settings, Puzzle, Cable, Sparkles, GitBranch, Wrench, Menu, Palette, LayoutDashboard,
  Clock, BookOpen, Users, KanbanSquare, Activity, CircleDollarSign, ShieldCheck, ScrollText, ChevronDown,
  Layers, Code2, SlidersHorizontal, Compass, Ghost, Mic, AudioLines, GraduationCap, Brain, Zap,
  BarChart3, Map,
} from "lucide-react";
import { motion } from "framer-motion";
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

  const DEFAULT_PROJECTS = [
    { id: "wardelio", name: "Wardelio (Android & iOS)", color: "#E69D45", description: "150+ screens luxury mobile wardrobe styling app with 3D Try-On" },
    { id: "jarvis-core", name: "JARVIS AI OS Core", color: "#06B6D4", description: "24-Agent Autonomous AI Operating System & Voice Bridge" },
    { id: "learnify-ai", name: "Learnify AI Platform", color: "#A855F7", description: "Adaptive Learning, Career Tracks & Daily Mastery Pillars" },
    { id: "crm-automation", name: "Salesforce & Razorpay Ops", color: "#10B981", description: "Automated Donor Lead Conversion & 80G Tax Reconciliation" },
  ];

  const allProjects = projects.length > 0 ? projects : DEFAULT_PROJECTS;

  const inv = () => qc.invalidateQueries({ queryKey: ["threads"] });
  const invP = () => qc.invalidateQueries({ queryKey: ["projects"] });

  // Global Keyboard Shortcut: ⌘N / Ctrl+N for New Chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "n") {
        e.preventDefault();
        mCreate.mutate(undefined);
        toast.info("Starting new conversation…");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  const NavLink = ({ to, icon: Icon, label, badge }: { to: string; icon: typeof Wrench; label: string; badge?: string }) => (
    <Link
      to={to}
      className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-400 hover:bg-[#1a1a1d] hover:text-zinc-100 transition-colors"
      activeProps={{ className: "!bg-[#232326] !text-zinc-100" }}
    >
      <Icon className="h-[16px] w-[16px] shrink-0 opacity-80" /> <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${badge === "Free" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-sky-500/30 bg-sky-500/10 text-sky-400"}`}>{badge}</span>
      )}
    </Link>
  );

  const renderThread = (t: typeof threads[number]) => {
    const active = params.threadId === t.id;
    return (
      <li key={t.id}>
        <div
          className={`group flex items-center gap-1 rounded-lg px-2 py-1.5 text-[13px] transition-colors ${
            active ? "bg-[#232326] text-zinc-100" : "text-zinc-400 hover:bg-[#1a1a1d] hover:text-zinc-200"
          }`}
        >
          <button
            onClick={() => navigate({ to: "/console/$threadId", params: { threadId: t.id } })}
            className="flex flex-1 items-center gap-2 overflow-hidden text-left"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-zinc-500 opacity-60" />
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
  const [moreOpen, setMoreOpen] = useState(
    () => typeof localStorage !== "undefined" && localStorage.getItem("jarvis-nav-more") === "1",
  );
  const toggleMore = () => {
    setMoreOpen((v) => {
      const next = !v;
      try { localStorage.setItem("jarvis-nav-more", next ? "1" : "0"); } catch {}
      return next;
    });
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredThreads = (unstarred as any[]).filter((t: any) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sidebarBody = (
    <div className="flex h-full flex-col bg-[#0b0d14] text-zinc-300 border-r border-slate-800/80">
      <div className="px-4 pt-5 pb-3 space-y-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <JarvisWordmark size={20} showBadge={false} />
          </Link>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-[10px] font-mono text-cyan-300 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>v3.0</span>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => mCreate.mutate(undefined)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 px-3 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 active:scale-[0.98] transition-all"
        >
          <Plus className="h-4 w-4" /> New AI Session (⌘N)
        </motion.button>

        {/* Instant Search Bar */}
        <div className="relative">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chats & tools..."
            className="h-8 bg-slate-900/80 border-slate-800 text-xs pl-8 placeholder:text-slate-500 rounded-lg focus-visible:ring-cyan-500/50"
          />
          <Compass className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500 pointer-events-none" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 space-y-5 py-2 scrollbar-thin scrollbar-thumb-zinc-800">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
          <div className="px-2 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">Core Engines</div>
          <nav className="space-y-0.5">
            <NavLink to="/console/fleet" icon={Users} label="8-Bot Autonomous Fleet" badge="Fleet" />
            <NavLink to="/console/voice" icon={Mic} label="Real-Time Voice Studio" badge="Clone" />
            <NavLink to="/console/apps" icon={Layers} label="Universal App Builder" badge="Forge" />
            <NavLink to="/console/components" icon={Sparkles} label="3D Motion UI Hub" badge="3D" />
            <NavLink to="/blog" icon={BookOpen} label="Interactive Blog & Docs" badge="New" />
            <NavLink to="/console/analytics" icon={BarChart3} label="Shared Analytics" badge="Live" />
          </nav>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="px-2 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">Workspace & Dev</div>
          <nav className="space-y-0.5">
            <NavLink to="/console/projects" icon={Folder} label="Projects & Scaffolds" />
            <NavLink to="/console/design" icon={Palette} label="Design Systems" />
            <NavLink to="/console/skills" icon={Code2} label="Code Skills" />
            <NavLink to="/console/agents" icon={Brain} label="Agent Crew" />
            <NavLink to="/console/tools" icon={Wrench} label="VIDA Tools" />
            <NavLink to="/console/connectors" icon={Cable} label="Connectors & MCP" />
            <NavLink to="/console/github" icon={GitBranch} label="GitHub Sync" />
            <NavLink to="/console/settings" icon={SlidersHorizontal} label="Settings" />
          </nav>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
          <div className="flex items-center justify-between px-2 pb-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Recent Sessions</span>
            <button onClick={() => setNewProjOpen(true)} className="rounded p-1 text-zinc-500 hover:bg-zinc-800" title="New Project"><Plus className="h-3 w-3" /></button>
          </div>
          {filteredThreads.length === 0 ? (
            <div className="px-2 py-2 text-xs text-slate-500 italic">No matching chats found</div>
          ) : (
            <ul className="space-y-0.5">{filteredThreads.slice(0, 6).map(renderThread)}</ul>
          )}
        </motion.div>
      </div>

      <div className="border-t border-slate-800/80 bg-slate-950/80 p-3 space-y-2">
        <div className="flex items-center justify-between px-2 py-1 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Supabase Cloud 15/15 OK</span>
          </div>
          <Link to="/companion" className="text-[11px] font-medium text-purple-300 hover:text-purple-200">
            🌸 3D Nia
          </Link>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 border border-slate-800 px-2.5 py-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-[11px] font-extrabold text-white">V</div>
          <div className="flex-1 overflow-hidden">
            <div className="truncate text-xs font-semibold text-white">Vishwajeet · Pro Admin</div>
          </div>
          <button onClick={signOut} title="Sign Out" className="p-1 rounded text-slate-400 hover:text-red-400 transition-colors">
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid h-screen grid-cols-1 bg-[#09090b] text-zinc-100 md:grid-cols-[280px_1fr]">
      <aside className="hidden flex-col border-r border-zinc-800/60 bg-[#0f0f10] md:flex">
        {sidebarBody}
      </aside>

      <main className="flex min-h-0 flex-col overflow-hidden bg-[#09090b]">
        {/* Claude top bar — desktop */}
        <div className="hidden h-11 items-center justify-between border-b border-zinc-800/40 bg-[#09090b] px-6 md:flex">
          <div className="flex-1" />
          <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs">
            <span className="text-zinc-400">Free plan</span>
            <span className="text-zinc-600">·</span>
            <span className="font-medium text-emerald-400">All free</span>
          </div>
          <div className="flex flex-1 justify-end">
            <button className="rounded-full p-2 text-emerald-400 hover:bg-zinc-800 hover:text-emerald-300 transition-colors" aria-label="Ghost — Free" title="Ghost — Free">
              <Ghost className="h-5 w-5" />
            </button>
          </div>
        </div>
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
        <div className="min-h-0 flex-1 overflow-auto">
          <Outlet />
        </div>

        {/* ── Always-Visible Command Bar ─────────────────────────────── */}
        <div className="shrink-0 border-t border-white/[0.06] bg-[#09090b] px-4 py-3">
          <CommandBar
            onSubmit={async (text) => {
              const t = await createFn({ data: { project_id: null } });
              inv();
              // Navigate with seed so ThreadView auto-sends the message
              navigate({
                to: "/console/$threadId",
                params: { threadId: t.id },
                search: { seed: text },
              });
            }}
          />
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
