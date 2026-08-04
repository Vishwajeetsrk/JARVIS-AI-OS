import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState, type ReactNode } from "react";
import { format } from "date-fns";
import {
  Activity, FolderOpen, Newspaper, Wrench, Cable, Puzzle, Sparkles,
  GitBranch, Settings, LayoutDashboard, Zap, Brain, Plus, ArrowRight,
  Coffee, Rocket, TestTube, Bot,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { StatusBadge } from "@/components/jarvis/status-badge";
import { JarvisStar } from "@/components/jarvis/logo";
import { QuickCommand } from "@/components/dashboard/quick-command";
import { StatCards, type DashboardStats } from "@/components/dashboard/stat-cards";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { NewsPanel } from "@/components/dashboard/news-panel";
import { ProjectCards } from "@/components/dashboard/project-cards";
import { getDashboardStats } from "@/lib/dashboard.functions";
import { createThread } from "@/lib/threads.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/")({
  component: ConsoleDashboard,
  head: () => ({
    meta: [
      { title: "Dashboard — Jarvis" },
      { name: "description", content: "Real-time Jarvis command dashboard." },
    ],
  }),
});

function SectionCard({
  title,
  icon: Icon,
  action,
  children,
}: {
  title: string;
  icon: typeof Activity;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="flex min-h-0 flex-col rounded-2xl border border-border bg-card p-4">
      <header className="mb-2 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <Icon className="h-3.5 w-3.5 text-primary" /> {title}
        </h2>
        {action}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
    </section>
  );
}

const CONTROLS = [
  { to: "/console/tools", icon: Wrench, label: "Tools" },
  { to: "/console/connectors", icon: Cable, label: "MCP Connectors" },
  { to: "/console/plugins", icon: Puzzle, label: "Plugins" },
  { to: "/console/skills", icon: Sparkles, label: "Skills" },
  { to: "/console/design", icon: LayoutDashboard, label: "Design Systems" },
  { to: "/console/github", icon: GitBranch, label: "GitHub" },
  { to: "/console/settings", icon: Settings, label: "Settings" },
];

const QUICK_ACTIONS = [
  {
    icon: Coffee,
    label: "Morning Briefing",
    description: "Run the morning-agent daily summary",
    seed: "Run my morning briefing — summarize active projects, list today's priorities, and flag any blockers.",
    accent: "#E69D45",
  },
  {
    icon: Rocket,
    label: "Golden Flow",
    description: "CEO → Build → Test → Deploy pipeline",
    seed: "Start the CEO golden flow for the current top project: plan → build → test → deploy.",
    accent: "#D97757",
  },
  {
    icon: TestTube,
    label: "Run Test Suite",
    description: "Execute all Vitest + Playwright tests",
    seed: "Run the full test suite: npm test. Report pass/fail with failure details.",
    accent: "#58A65C",
  },
  {
    icon: Brain,
    label: "Memory Digest",
    description: "Summarize recent decisions + knowledge",
    seed: "Summarize the last 7 days of decision logs from memory. Highlight key choices and open questions.",
    accent: "#A855F7",
  },
];

// Jarvis engine status (static mock — daemon integration)
const ENGINE_STATUS = [
  { label: "Mastra TS Engine", status: "online", value: "v1.0.0" },
  { label: "Gemini 2.5 Flash", status: "online", value: "15 RPM free" },
  { label: "Groq Llama 3.3", status: "online", value: "1K/day free" },
  { label: "Memory Store", status: "online", value: "~/.agent-memory/" },
  { label: "Supabase DB", status: "online", value: "tupgfxqkefgntrpgakxk" },
];

function ConsoleDashboard() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const statsFn = useServerFn(getDashboardStats);
  const createFn = useServerFn(createThread);

  const { data: stats } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: () => statsFn({}),
    staleTime: 15_000,
    refetchInterval: 30_000,
  });
  const [userLabel, setUserLabel] = useState("Vishwajeet");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const meta = data.user?.user_metadata as Record<string, unknown> | undefined;
      const name = meta?.full_name ?? meta?.name ?? data.user?.email;
      if (typeof name === "string" && name) setUserLabel(name.split("@")[0]);
    });
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const mCreate = useMutation({
    mutationFn: (seed?: string) => createFn({ data: { project_id: null } }),
    onSuccess: (t, seed) => {
      qc.invalidateQueries({ queryKey: ["threads"] });
      if (seed) {
        navigate({ to: "/console/$threadId", params: { threadId: t.id }, search: { seed } });
      } else {
        navigate({ to: "/console/$threadId", params: { threadId: t.id } });
      }
    },
  });

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-noise">
      <div className="mx-auto w-full max-w-6xl flex-1 space-y-4 p-4 lg:p-6">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl tracking-tight">Welcome back, {userLabel}.</h1>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {format(now, "EEEE, MMMM d · h:mm a")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:flex">
              <JarvisStar className="h-3.5 w-3.5 text-primary" />
              System ready
            </div>
            <StatusBadge status="ready" />
          </div>
        </header>

        {/* Quick command */}
        <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
          <QuickCommand />
        </div>

        {/* Stats */}
        <StatCards stats={(stats ?? {
          threads: 0, messages: 0, projects: 0, activityToday: 0,
          skills: 0, connectors: 0, plugins: 0, tools: 0,
        }) as DashboardStats} />

        {/* Quick Actions */}
        <section>
          <h2 className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-primary" /> Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                onClick={() => mCreate.mutate(action.seed)}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md active:scale-[0.98]"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${action.accent}15`, color: action.accent }}
                >
                  <action.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">{action.label}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{action.description}</div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors self-end" />
              </button>
            ))}
          </div>
        </section>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <SectionCard title="Live Activity" icon={Activity}>
              <ActivityFeed />
            </SectionCard>
            <SectionCard title="Recent Projects" icon={FolderOpen}>
              <ProjectCards />
            </SectionCard>
          </div>

          <div className="space-y-4">
            {/* Engine Status */}
            <section className="rounded-2xl border border-border bg-card p-4">
              <h2 className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Bot className="h-3.5 w-3.5 text-primary" /> Engine Status
              </h2>
              <div className="space-y-2">
                {ENGINE_STATUS.map((e) => (
                  <div key={e.label} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                      <span className="text-muted-foreground">{e.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/60">{e.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <SectionCard title="News & Updates" icon={Newspaper}>
              <NewsPanel />
            </SectionCard>
            <SectionCard title="Controls" icon={Wrench}>
              <div className="grid grid-cols-2 gap-2">
                {CONTROLS.map(({ to, icon: Icon, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" /> {label}
                  </Link>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
