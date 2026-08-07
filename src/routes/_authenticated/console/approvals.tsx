import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listApprovals, decideApproval } from "@/lib/agents.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { ShieldCheck, ShieldX, Clock, CheckCheck } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/approvals")({
  component: ApprovalsPage,
  head: () => ({ meta: [{ title: "Approvals — Jarvis" }] }),
});

function ApprovalsPage() {
  const qc = useQueryClient();
  const listFn = useServerFn(listApprovals);
  const decideFn = useServerFn(decideApproval);

  const { data: approvals = [] } = useQuery({
    queryKey: ["approvals"],
    queryFn: () => listFn(),
    refetchInterval: 15000,
  });

  const mDecide = useMutation({
    mutationFn: (v: { id: string; approve: boolean }) => decideFn({ data: { approval_id: v.id, approve: v.approve } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["approvals"] });
      toast.success("Approval decision recorded.");
    },
  });

  const pending = (approvals as any[]).filter((a) => a.status === "pending");
  const decided = (approvals as any[]).filter((a) => a.status !== "pending");

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Approvals" subtitle="Governance gates for governed agent actions." />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>{pending.length} pending</span>
          </div>
        </div>

        <div className="space-y-2">
          {pending.length === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-surface/30 p-10 text-center text-sm text-muted-foreground">
              Nothing waiting on you. 🎉
            </div>
          )}
          {pending.map((a: any) => (
            <div key={a.id} className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: a.agent?.color ? `${a.agent.color}20` : "var(--color-surface)", color: a.agent?.color ?? "var(--color-muted-foreground)" }}>
                    {a.agent?.icon ?? "🤖"}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium">{a.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {a.type} · {a.agent?.name ?? "system"} · {new Date(a.created_at).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    onClick={() => mDecide.mutate({ id: a.id, approve: true })}
                    className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" /> Approve
                  </button>
                  <button
                    onClick={() => mDecide.mutate({ id: a.id, approve: false })}
                    className="flex items-center gap-1 rounded-lg border border-destructive/40 px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10"
                  >
                    <ShieldX className="h-3.5 w-3.5" /> Reject
                  </button>
                </div>
              </div>
              {Object.keys(a.payload ?? {}).length > 0 && (
                <pre className="mt-3 max-h-32 overflow-y-auto rounded-lg bg-surface/60 p-3 text-[11px] text-muted-foreground">
                  {JSON.stringify(a.payload, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </div>

        {decided.length > 0 && (
          <div>
            <h2 className="mb-2 text-sm font-semibold">History</h2>
            <div className="space-y-1.5">
              {decided.map((a: any) => (
                <div key={a.id} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 py-2 text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={a.status === "approved" ? "text-sage" : "text-destructive"}>
                      {a.status === "approved" ? <CheckCheck className="h-3.5 w-3.5" /> : <ShieldX className="h-3.5 w-3.5" />}
                    </span>
                    <span className="truncate">{a.title}</span>
                  </div>
                  <span className="shrink-0 text-muted-foreground">
                    {a.status} · {a.decided_at ? new Date(a.decided_at).toLocaleString() : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
