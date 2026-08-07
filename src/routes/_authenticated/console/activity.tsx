import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listActivityLog } from "@/lib/agents.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { ScrollText } from "lucide-react";

export const Route = createFileRoute("/_authenticated/console/activity")({
  component: ActivityPage,
  head: () => ({ meta: [{ title: "Activity — Jarvis" }] }),
});

function ActivityPage() {
  const listFn = useServerFn(listActivityLog);
  const { data: log = [], isLoading } = useQuery({
    queryKey: ["activity-log"],
    queryFn: () => listFn(),
    refetchInterval: 20000,
  });

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-4xl p-8 space-y-6">
        <PageHeader title="Activity" subtitle="Full audit trail — who did what, across your crew." />

        <div className="space-y-1.5">
          {(log as any[]).map((e) => (
            <div key={e.id} className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md" style={{ background: e.agent?.color ? `${e.agent.color}20` : "var(--color-surface)", color: e.agent?.color ?? "var(--color-muted-foreground)" }}>
                {e.agent?.icon ?? <ScrollText className="h-3.5 w-3.5" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-mono text-xs text-primary">{e.action}</span>
                  <span className="text-xs text-muted-foreground">on {e.entity_type ?? "—"}</span>
                </div>
                {Object.keys(e.details ?? {}).length > 0 && (
                  <div className="truncate text-[11px] text-muted-foreground">
                    {JSON.stringify(e.details)}
                  </div>
                )}
              </div>
              <div className="shrink-0 text-[10px] text-muted-foreground">
                {e.actor_type} · {new Date(e.created_at).toLocaleString()}
              </div>
            </div>
          ))}
          {!isLoading && log.length === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-surface/30 p-10 text-center text-sm text-muted-foreground">
              No activity yet. Actions like agent runs and issue changes will appear here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
