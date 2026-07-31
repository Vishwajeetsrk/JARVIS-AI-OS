import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState, type ReactNode } from "react";
import { format } from "date-fns";
import {
  Activity, FolderOpen, Newspaper, Wrench, Cable, Puzzle, Sparkles,
  GitBranch, Settings, LayoutDashboard,
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

function ConsoleDashboard() {
  const statsFn = useServerFn(getDashboardStats);
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
