import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getBudgetSummary, listCostEvents, createBudgetPolicy, resolveBudgetIncident, listAgents } from "@/lib/agents.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { CircleDollarSign, Plus, ShieldAlert, CheckCircle2, X, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/costs")({
  component: CostsPage,
  head: () => ({ meta: [{ title: "Costs & Budgets — Jarvis" }] }),
});

function fmt(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

function CostsPage() {
  const qc = useQueryClient();
  const summaryFn = useServerFn(getBudgetSummary);
  const costsFn = useServerFn(listCostEvents);
  const createPolicyFn = useServerFn(createBudgetPolicy);
  const resolveFn = useServerFn(resolveBudgetIncident);
  const agentsFn = useServerFn(listAgents);

  const { data: summary } = useQuery({ queryKey: ["budget-summary"], queryFn: () => summaryFn() });
  const { data: events = [] } = useQuery({
    queryKey: ["cost-events"],
    queryFn: () => costsFn(),
    refetchInterval: 20000,
  });
  const { data: agents = [] } = useQuery({ queryKey: ["agents-for-policy"], queryFn: () => agentsFn() });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ scope: "user", amount: "1000", warn: "80", agentId: "" });

  const mPolicy = useMutation({
    mutationFn: () =>
      createPolicyFn({
        data: {
          scope_type: form.scope as "user" | "agent",
          amount: parseInt(form.amount, 10) || 1000,
          warn_percent: parseInt(form.warn, 10) || 80,
          scope_agent_id: form.scope === "agent" && form.agentId ? form.agentId : null,
        },
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["budget-summary"] });
      setShowForm(false);
      toast.success("Budget policy created.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to create policy"),
  });

  const mResolve = useMutation({
    mutationFn: (v: { id: string; status: "resolved" | "dismissed" }) =>
      resolveFn({ data: { incident_id: v.id, status: v.status } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["budget-summary"] });
      toast.success("Incident updated.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to update incident"),
  });

  const total = summary?.total_cost_cents ?? 0;
  const policies = summary?.policies ?? [];
  const incidents = summary?.open_incidents ?? [];
  const perAgent = summary?.per_agent_cost_cents ?? {};

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Costs & Budgets" subtitle="Model spend, budget policies, and hard-stop incidents." />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <CircleDollarSign className="h-3.5 w-3.5 text-primary" />
            <span>{fmt(total)} this month</span>
          </div>
        </div>

        {/* Incidents */}
        {incidents.length > 0 && (
          <div className="space-y-2">
            {incidents.map((inc: any) => (
              <div key={inc.id} className="flex items-center justify-between gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-3">
                <div className="flex items-center gap-2 text-sm">
                  <ShieldAlert className="h-4 w-4 text-destructive" />
                  <span className="font-medium">
                    {inc.threshold_type === "hard_stop" ? "Hard stop" : "Warning"} — {fmt(inc.amount_observed)} / {fmt(inc.amount_limit)} limit
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => mResolve.mutate({ id: inc.id, status: "resolved" })}
                    className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
                  >
                    Resolve
                  </button>
                  <button
                    onClick={() => mResolve.mutate({ id: inc.id, status: "dismissed" })}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs hover:border-primary/40"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Month total" value={fmt(total)} accent="text-foreground" />
          <Stat label="Policies active" value={String(policies.length)} accent="text-primary" />
          <Stat label="Open incidents" value={String(incidents.length)} accent={incidents.length ? "text-destructive" : "text-sage"} />
        </div>

        {/* Per-agent spend */}
        <div>
          <h2 className="mb-2 text-sm font-semibold">Spend by agent</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {Object.entries(perAgent).map(([agentId, cents]) => (
              <div key={agentId} className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm">
                <span className="font-mono text-xs text-muted-foreground">{agentId === "none" ? "unattributed" : agentId.slice(0, 8)}</span>
                <span>{fmt(cents as number)}</span>
              </div>
            ))}
            {Object.keys(perAgent).length === 0 && (
              <div className="rounded-lg border border-dashed border-border bg-surface/30 p-4 text-center text-xs text-muted-foreground sm:col-span-2">
                No cost events recorded yet.
              </div>
            )}
          </div>
        </div>

        {/* Policies */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Budget policies</h2>
            <button
              onClick={() => setShowForm((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-xs font-medium hover:border-primary/40"
            >
              {showForm ? <X className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
              {showForm ? "Close" : "New policy"}
            </button>
          </div>

          {showForm && (
            <div className="mt-2 flex flex-wrap items-end gap-3 rounded-xl border border-border bg-surface/60 p-4">
              <label className="text-xs text-muted-foreground">
                Scope
                <select
                  value={form.scope}
                  onChange={(e) => setForm({ ...form, scope: e.target.value })}
                  className="mt-1 block rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                >
                  <option value="user">Whole account</option>
                  <option value="agent">Per agent</option>
                </select>
              </label>
              {form.scope === "agent" && (
                <label className="text-xs text-muted-foreground">
                  Agent
                  <select
                    value={form.agentId}
                    onChange={(e) => setForm({ ...form, agentId: e.target.value })}
                    className="mt-1 block max-w-[200px] rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                  >
                    <option value="">Select agent…</option>
                    {(agents as any[]).map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <label className="text-xs text-muted-foreground">
                Monthly limit (¢)
                <input
                  type="number"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  className="mt-1 block w-32 rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="text-xs text-muted-foreground">
                Warn at %
                <input
                  type="number"
                  value={form.warn}
                  onChange={(e) => setForm({ ...form, warn: e.target.value })}
                  className="mt-1 block w-20 rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <button
                onClick={() => mPolicy.mutate()}
                disabled={mPolicy.isPending}
                className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
              >
                {mPolicy.isPending ? "Creating…" : "Create"}
              </button>
            </div>
          )}

          <div className="mt-2 space-y-2">
            {policies.map((p: any) => (
              <div key={p.id} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 py-2 text-sm">
                <div className="flex items-center gap-2">
                  {p.hard_stop_enabled ? <ShieldAlert className="h-4 w-4 text-primary" /> : <AlertTriangle className="h-4 w-4 text-amber" />}
                  <span className="font-mono text-xs">{p.scope_type === "agent" ? "agent-scoped" : "account"}</span>
                  <span className="text-xs text-muted-foreground">
                    {fmt(p.amount)} / mo · warn {p.warn_percent}%{p.hard_stop_enabled ? " · hard stop" : ""}
                  </span>
                </div>
                <CheckCircle2 className="h-4 w-4 text-sage" />
              </div>
            ))}
            {policies.length === 0 && (
              <div className="rounded-lg border border-dashed border-border bg-surface/30 p-4 text-center text-xs text-muted-foreground">
                No policies. Add one to cap agent spend.
              </div>
            )}
          </div>
        </div>

        {/* Recent cost events */}
        <div>
          <h2 className="mb-2 text-sm font-semibold">Recent spend</h2>
          <div className="space-y-1.5">
            {(events as any[]).slice(0, 20).map((e) => (
              <div key={e.id} className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: e.agent?.color ?? "var(--color-muted-foreground)" }} />
                  <span className="font-mono">{e.model}</span>
                  <span className="text-muted-foreground">{e.agent?.name ?? "unattributed"}</span>
                </div>
                <div className="text-muted-foreground">
                  {e.input_tokens}in/{e.output_tokens}out · {new Date(e.occurred_at).toLocaleString()}
                </div>
                <span className="font-medium">{fmt(e.cost_cents)}</span>
              </div>
            ))}
            {events.length === 0 && (
              <div className="rounded-lg border border-dashed border-border bg-surface/30 p-6 text-center text-xs text-muted-foreground">
                No cost events yet. They appear when agents run.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className={`mt-1 text-2xl font-semibold ${accent}`}>{value}</div>
    </div>
  );
}
