import { createFileRoute, Link, Outlet, useNavigate, useParams, useRouter } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import {
  listThreads, createThread, deleteThread, renameThread, updateThread,
  listProjects, createProject, deleteProject, renameProject,
} from "@/lib/threads.functions";
import { JarvisWordmark } from "@/components/jarvis/logo";
import { CommandBar } from "@/components/jarvis/command-bar";
import {
  Plus, Trash2, LogOut, MessageSquare, Star, MoreHorizontal, Pencil,
  FolderPlus, Folder, Settings, Puzzle, Cable, Sparkles, GitBranch, Wrench, Menu,
  Palette, LayoutDashboard, Clock, BookOpen, Users, Activity, CircleDollarSign,
  Layers, Code2, SlidersHorizontal, Compass, Mic, AudioLines, GraduationCap,
  Brain, Zap, BarChart3, Search, ChevronDown, ChevronRight, Home, Bot,
  Workflow, Database, Shield, Globe, Cpu, Terminal, FileCode2, X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
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
      { title: "Console — JARVIS AI OS" },
      { name: "description", content: "JARVIS AI OS — intelligent command console." },
    ],
  }),
});

// ── Canonical V4 Nav sections ──────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    id: "core",
    label: "Core",
    items: [
      { to: "/console", label: "Home", icon: Home, exact: true },
      { to: "/console/projects", label: "Projects", icon: Folder },
      { to: "/console/agents", label: "Agents & Fleet", icon: Bot, badge: "live" as const },
    ],
  },
  {
    id: "create",
    label: "Create",
    items: [
      { to: "/console/apps", label: "App Builder", icon: Layers, badge: "forge" as const },
      { to: "/console/design", label: "Design Systems", icon: Palette },
      { to: "/console/voice", label: "Voice Studio", icon: Mic },
    ],
  },
  {
    id: "knowledge",
    label: "Knowledge & Skills",
    items: [
      { to: "/console/skills", label: "Skills Catalog", icon: Code2 },
      { to: "/console/components", label: "UI Components", icon: Sparkles },
    ],
  },
  {
    id: "automate",
    label: "Integrations & Sync",
    items: [
      { to: "/console/connectors", label: "Connectors & MCP", icon: Cable },
      { to: "/console/github", label: "GitHub Workspace", icon: GitBranch },
      { to: "/console/analytics", label: "Telemetry & Logs", icon: BarChart3 },
    ],
  },
  {
    id: "system",
    label: "System",
    items: [
      { to: "/blog", label: "Documentation", icon: BookOpen },
      { to: "/console/settings", label: "Settings", icon: SlidersHorizontal },
    ],
  },
] as const;

type Badge = "new" | "live" | "beta" | "forge" | undefined;

function BadgePill({ badge }: { badge: Badge }) {
  if (!badge) return null;
  const map: Record<string, string> = {
    new: "badge-new",
    live: "badge-live",
    beta: "badge-beta",
    forge: "badge-pro",
  };
  return (
    <span className={`badge-pill ${map[badge] ?? ""}`}>
      {badge === "forge" ? "Forge" : badge}
    </span>
  );
}

// ── Main shell ─────────────────────────────────────────────────────────────
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

  const inv  = () => qc.invalidateQueries({ queryKey: ["threads"] });
  const invP = () => qc.invalidateQueries({ queryKey: ["projects"] });

  // Keyboard shortcut Ctrl/Cmd+N → new chat
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "n") {
        e.preventDefault();
        mCreate.mutate(undefined);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Realtime updates
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
    return () => { mounted = false; channel?.unsubscribe(); };
  }, []);

  // Mutations
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

  // Dialog state
  const [renameId, setRenameId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [newProjOpen, setNewProjOpen] = useState(false);
  const [newProjName, setNewProjName] = useState("");
  const [renameProjectId, setRenameProjectId] = useState<string | null>(null);
  const [renameProjectValue, setRenameProjectValue] = useState("");
  const [deleteProjectId, setDeleteProjectId] = useState<string | null>(null);

  // Mobile/search state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setMobileOpen(false); }, [params.threadId]);

  const signOut = async () => {
    localStorage.removeItem("jarvis-guest-mode");
    await supabase.auth.signOut();
    router.invalidate();
    navigate({ to: "/" });
    toast.success("Signed out.");
  };

  const starred   = (threads as any[]).filter((t: any) => t.starred);
  const unstarred = (threads as any[]).filter((t: any) => !t.starred);
  const filteredThreads = unstarred.filter((t: any) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ── Thread item ──────────────────────────────────────────────────────────
  const ThreadItem = ({ t }: { t: any }) => {
    const active = params.threadId === t.id;
    return (
      <li>
        <div
          className="thread-item group"
          data-active={active ? "true" : undefined}
        >
          <button
            onClick={() => navigate({ to: "/console/$threadId", params: { threadId: t.id } })}
            className="flex flex-1 items-center gap-2 overflow-hidden text-left"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-current opacity-40" />
            <span className="flex-1 truncate">{t.title}</span>
          </button>
          {/* Star + context menu on hover */}
          <div className="hidden items-center gap-0.5 group-hover:flex">
            <button
              onClick={() => mUpdate.mutate({ id: t.id, starred: !t.starred })}
              className={`rounded p-1 transition-colors ${t.starred ? "text-amber-500" : "text-muted-foreground hover:text-amber-400"}`}
              aria-label="Star"
            >
              <Star className={`h-3 w-3 ${t.starred ? "fill-current" : ""}`} />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded p-1 text-muted-foreground hover:bg-surface hover:text-foreground" aria-label="More">
                  <MoreHorizontal className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
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
          {/* Show star indicator if starred + not hovered */}
          {t.starred && <Star className="h-3 w-3 text-amber-500 fill-current flex-shrink-0 group-hover:hidden" />}
        </div>
      </li>
    );
  };

  // ── NavLink using the .nav-item CSS class ────────────────────────────────
  const NavLink = ({
    to,
    label,
    icon: Icon,
    exact,
    badge,
  }: {
    to: string;
    label: string;
    icon: typeof Home;
    exact?: boolean;
    badge?: Badge;
  }) => {
    const isActive = exact
      ? location.pathname === to
      : location.pathname.startsWith(to) && to !== "/console" ? true
        : location.pathname === to;

    return (
      <Link
        to={to}
        className="nav-item"
        data-active={isActive ? "true" : undefined}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon className="h-[15px] w-[15px] shrink-0 opacity-75" />
        <span className="flex-1 truncate">{label}</span>
        <BadgePill badge={badge} />
      </Link>
    );
  };

  // ── The sidebar JSX ──────────────────────────────────────────────────────
  const sidebarBody = (
    <div className="flex h-full flex-col bg-[var(--surface-base)] border-r border-[var(--border)]">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-4">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <JarvisWordmark size={18} showBadge={false} />
        </Link>
        <div className="flex items-center gap-1">
          {/* Search toggle */}
          <button
            onClick={() => { setSearchOpen((v) => !v); setTimeout(() => searchRef.current?.focus(), 50); }}
            className="nav-item !p-1.5 !gap-0"
            aria-label="Search"
          >
            <Search className="h-[14px] w-[14px]" />
          </button>
          {/* New chat */}
          <button
            onClick={() => mCreate.mutate(undefined)}
            className="nav-item !p-1.5 !gap-0"
            aria-label="New chat (⌘N)"
            title="New chat (⌘N)"
          >
            <Plus className="h-[14px] w-[14px]" />
          </button>
        </div>
      </div>

      {/* ── Search bar (inline, toggleable) ─────────────────────────── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden px-3 pb-2"
          >
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <Input
                ref={searchRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                placeholder="Search chats…"
                className="h-8 pl-8 text-xs bg-[var(--surface-1)] border-[var(--border)] focus-visible:ring-primary/30"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main new chat button ─────────────────────────────────────── */}
      <div className="px-3 pb-3">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => mCreate.mutate(undefined)}
          className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--primary)] px-3 py-2 text-[13px] font-semibold text-[var(--primary-foreground)] transition-colors hover:bg-[var(--primary-hover)]"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>New conversation</span>
          <span className="ml-auto text-[10px] font-normal opacity-60">⌘N</span>
        </motion.button>
      </div>

      {/* ── Scrollable nav body ──────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto scrollbar-jarvis px-2 pb-4 space-y-4 sidebar-stagger">
        {/* Navigation sections */}
        {NAV_SECTIONS.map((section) => (
          <div key={section.id}>
            <div className="nav-section-label">{section.label}</div>
            <nav className="space-y-0.5">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                  exact={"exact" in item ? item.exact : undefined}
                  badge={"badge" in item ? item.badge as Badge : undefined}
                />
              ))}
            </nav>
          </div>
        ))}

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="nav-divider" />

        {/* ── Starred chats ────────────────────────────────────────── */}
        {starred.length > 0 && (
          <div>
            <div className="nav-section-label flex items-center gap-1.5">
              <Star className="h-2.5 w-2.5" /> Starred
            </div>
            <ul className="space-y-0.5 mt-0.5">
              {starred.slice(0, 5).map((t: any) => <ThreadItem key={t.id} t={t} />)}
            </ul>
          </div>
        )}

        {/* ── Recent chats ─────────────────────────────────────────── */}
        <div>
          <div className="nav-section-label flex items-center justify-between">
            <span className="flex items-center gap-1.5"><MessageSquare className="h-2.5 w-2.5" /> Recent</span>
          </div>
          {filteredThreads.length === 0 ? (
            <div className="px-2 py-3 text-[12px] text-muted-foreground italic">
              {searchQuery ? "No results found" : "Start a new conversation ↑"}
            </div>
          ) : (
            <ul className="space-y-0.5 mt-0.5">
              {filteredThreads.slice(0, 8).map((t: any) => <ThreadItem key={t.id} t={t} />)}
            </ul>
          )}
        </div>

        {/* ── Projects ─────────────────────────────────────────────── */}
        {(projects as any[]).length > 0 && (
          <div>
            <div className="nav-section-label flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Folder className="h-2.5 w-2.5" /> Projects</span>
              <button
                onClick={() => setNewProjOpen(true)}
                className="rounded p-0.5 text-muted-foreground hover:text-foreground transition-colors"
                title="New project"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
            <ul className="space-y-0.5 mt-0.5">
              {(projects as any[]).slice(0, 5).map((p: any) => (
                <li key={p.id}>
                  <Link
                    to="/console/projects"
                    className="thread-item"
                    data-active={params.projectId === p.id ? "true" : undefined}
                  >
                    <span className="h-2 w-2 rounded-full shrink-0" style={{ background: p.color ?? "#6366f1" }} />
                    <span className="flex-1 truncate">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <div className="border-t border-[var(--border)] p-3 space-y-2">
        {/* System status */}
        <div className="flex items-center gap-2 px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)] animate-pulse shrink-0" />
          <span className="text-[11px] font-mono text-muted-foreground">Supabase Cloud · 15/15 OK</span>
          <Link to="/companion" className="ml-auto text-[11px] text-[var(--color-creative,#a855f7)] hover:opacity-80 transition-opacity">
            🌸 NIA
          </Link>
        </div>
        {/* User */}
        <div className="flex items-center gap-2.5 rounded-lg bg-[var(--surface-1)] px-2.5 py-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-[var(--primary)] to-[var(--amber)] text-[12px] font-extrabold text-white shrink-0">
            V
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="truncate text-[13px] font-medium text-foreground">Vishwajeet</div>
            <div className="text-[11px] text-muted-foreground">Pro Admin</div>
          </div>
          <button
            onClick={signOut}
            title="Sign out"
            className="rounded p-1.5 text-muted-foreground hover:text-destructive transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );

  // ── Layout ───────────────────────────────────────────────────────────────
  return (
    <div className="grid h-screen grid-cols-1 bg-[var(--background)] text-foreground md:grid-cols-[260px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col">
        {sidebarBody}
      </aside>

      {/* Main content area */}
      <main className="flex min-h-0 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-base)] px-3 py-2 md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="rounded-md p-2 hover:bg-[var(--surface-1)]" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-[260px] flex-col p-0 bg-[var(--surface-base)]">
              <VisuallyHidden><SheetTitle>Navigation</SheetTitle></VisuallyHidden>
              {sidebarBody}
            </SheetContent>
          </Sheet>
          <Link to="/"><JarvisWordmark size={16} showBadge={false} /></Link>
          <button
            onClick={() => mCreate.mutate(undefined)}
            className="rounded-md p-2 hover:bg-[var(--surface-1)]"
            aria-label="New chat"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        {/* Outlet (page content) */}
        <div className="min-h-0 flex-1 overflow-auto">
          <Outlet />
        </div>

        {/* ── Global Command Bar (Hidden inside active thread conversation to avoid dual input) ── */}
        {!params.threadId && (
          <div className="shrink-0 border-t border-[var(--border)] bg-[var(--surface-base)] px-4 py-3">
            <CommandBar
              onSubmit={async (text) => {
                const t = await createFn({ data: { project_id: null } });
                inv();
                navigate({
                  to: "/console/$threadId",
                  params: { threadId: t.id },
                  search: { seed: text },
                });
              }}
            />
          </div>
        )}
      </main>

      {/* ── Dialogs ──────────────────────────────────────────────────── */}
      {/* Rename chat */}
      <Dialog open={!!renameId} onOpenChange={(o) => !o && setRenameId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Rename chat</DialogTitle></DialogHeader>
          <Input
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && renameId && renameValue.trim()) {
                mRename.mutate({ id: renameId, title: renameValue.trim() });
                setRenameId(null);
              }
            }}
            autoFocus
          />
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

      {/* New project */}
      <Dialog open={newProjOpen} onOpenChange={setNewProjOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>New project</DialogTitle></DialogHeader>
          <Input
            value={newProjName}
            onChange={(e) => setNewProjName(e.target.value)}
            placeholder="Project name"
            onKeyDown={(e) => {
              if (e.key === "Enter" && newProjName.trim()) {
                mCreateProject.mutate(newProjName.trim());
                setNewProjName(""); setNewProjOpen(false);
              }
            }}
            autoFocus
          />
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

      {/* Rename project */}
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
