import { MessageSquare, MessagesSquare, Folder, Activity, Sparkles, Cable, Puzzle, Wrench } from "lucide-react";

export interface DashboardStats {
  threads: number;
  messages: number;
  projects: number;
  activityToday: number;
  skills: number;
  connectors: number;
  plugins: number;
  tools: number;
}

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: number | string;
  icon: typeof MessageSquare;
  accent?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background"
        style={{ color: accent ?? "var(--color-primary, #D97757)" }}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-2xl leading-none tracking-tight text-foreground">{value}</p>
        <p className="mt-1 truncate text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function StatCards({ stats }: { stats: DashboardStats }) {
  const primary = "var(--color-primary, #D97757)";
  const cards = [
    { label: "Chats", value: stats.threads, icon: MessageSquare, accent: primary },
    { label: "Messages", value: stats.messages, icon: MessagesSquare, accent: "#6A9BCC" },
    { label: "Projects", value: stats.projects, icon: Folder, accent: "#58A65C" },
    { label: "Activity today", value: stats.activityToday, icon: Activity, accent: "#E69D45" },
    { label: "Skills", value: stats.skills, icon: Sparkles, accent: "#A855F7" },
    { label: "Connectors", value: stats.connectors, icon: Cable, accent: "#EC4899" },
    { label: "Plugins", value: stats.plugins, icon: Puzzle, accent: "#14B8A6" },
    { label: "Tools", value: stats.tools, icon: Wrench, accent: "#64748B" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8">
      {cards.map((c) => (
        <StatCard key={c.label} {...c} />
      ))}
    </div>
  );
}
