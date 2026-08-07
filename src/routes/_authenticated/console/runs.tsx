import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listRuns } from "@/lib/agents.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Activity, CheckCircle2, XCircle, Loader2, Clock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/console/runs")({
  component: RunsPage,
  head: () => ({ meta: [{ title: "Runs — Jarvis" }] }),
});

const STATUS_UI: Record<string, { icon: typeof Activity; cls: string; label: string }> = {
  succeeded: { icon: CheckCircle2, cls: "text-sage", label: "succeeded" },
  failed: { icon: XCircle, cls: "text-destructive", label: "failed" },
  running: { icon: Loader2, cls: "text-sage animate-spin", label: "running" },
  queued: { icon: Clock, cls: "text-amber", label: "queued" },
  cancelled: { icon: XCircle, cls: "text-muted-foreground", label: "cancelled" },
  needs_input: { icon: Clock, cls: "text-amber", label: "needs input" },
};

function RunsPage() {
  const listFn = useServerFn(listRuns);
  const { data: runs = [], isLoading } = useQuery({
    queryKey: ["runs"],
    queryFn: () => listFn({ data: {} }),
    refetchInterval: 15000,
  });

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <PageHeader title="Runs" subtitle="Heartbeat run protocol — every agent execution." />

        <div className="space-y-2">
          {(runs as any[]).map((r) => {
            const ui = STATUS_UI[r.status] ?? STATUS_UI.queued;
            const Icon = ui.icon;
            const report = r.result_json?.report as string | undefined;
            const usage = r.usage_json ?? {};
            return (
              <div key={r.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: r.agent?.color ? `${r.agent.color}20` : "var(--color-surface)", color: r.agent?.color ?? "var(--color-muted-foreground)" }}>
                      {r.agent?.icon ?? "🤖"}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm">{r.agent?.name ?? "unknown"}</span>
                        <span className={`flex items-center gap-1 text-[10px] font-medium ${ui.cls}`}>
                          <Icon className="h-3 w-3" /> {ui.label}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {r.issue?.title ?? "No issue attached"} · {new Date(r.created_at).toLocaleString()}
                        {r.invocation_source !== "manual" ? ` · ${r.invocation_source}` : ""}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-right text-[10px] text-muted-foreground">
                    <div>{usage.input_tokens ?? 0} in · {usage.output_tokens ?? 0} out</div>
                    <div className="font-mono">{r.status === "succeeded" ? "ok" : r.error_code ?? ""}</div>
                  </div>
                </div>
                {report && (
                  <pre className="mt-3 max-h-40 overflow-y-auto whitespace-pre-wrap rounded-lg bg-surface/60 p-3 text-[11px] text-muted-foreground">
                    {report}
                  </pre>
                )}
                {r.error_detail && (
                  <p className="mt-2 text-[11px] text-destructive">{r.error_detail}</p>
                )}
              </div>
            );
          })}
          {!isLoading && runs.length === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-surface/30 p-10 text-center text-sm text-muted-foreground">
              No runs yet. Trigger one from the Crew page.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
