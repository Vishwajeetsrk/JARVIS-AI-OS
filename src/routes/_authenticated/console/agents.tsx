import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  listAgents, createAgent, updateAgent, toggleAgent, deleteAgent, triggerAgentRun,
} from "@/lib/agents.functions";
import { OrgChart, type OrgAgent } from "@/components/jarvis/org-chart";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import {
  Users, Plus, Play, Pause, Trash2, X, Loader2, Zap, CircleDollarSign, Wrench,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/agents")({
  component: AgentsPage,
  head: () => ({ meta: [{ title: "Crew — Jarvis" }] }),
});

const ROLE_PRESETS = [
  "ceo", "planner", "engineer", "designer", "researcher", "writer",
  "test-engineer", "reviewer", "devops", "ops", "growth", "governance", "generalist",
];

function AgentsPage() {
  const qc = useQueryClient();
  const listFn = useServerFn(listAgents);
  const createFn = useServerFn(createAgent);
  const updateFn = useServerFn(updateAgent);
  const toggleFn = useServerFn(toggleAgent);
  const deleteFn = useServerFn(deleteAgent);
  const runFn = useServerFn(triggerAgentRun);

  const { data: agents = [] } = useQuery({ queryKey: ["agents"], queryFn: () => listFn({}) });
  const inv = () => qc.invalidateQueries({ queryKey: ["agents"] });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "", role: "generalist", title: "", color: "#D97757", description: "", reports_to: "",
  });

  const mCreate = useMutation({
    mutationFn: () =>
      createFn({
        data: {
          name: form.name.trim(),
          role: form.role,
          title: form.title.trim() || null,
          color: form.color,
          description: form.description.trim() || null,
          reports_to: form.reports_to || null,
        },
      }),
    onSuccess: () => {
      inv();
      setShowForm(false);
      setForm({ name: "", role: "generalist", title: "", color: "#D97757", description: "", reports_to: "" });
      toast.success("Crew member added.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to create agent"),
  });

  const mToggle = useMutation({
    mutationFn: (v: { id: string; paused: boolean }) => toggleFn({ data: { id: v.id, paused: v.paused } }),
    onSuccess: () => {
      inv();
      toast.success("Crew member updated.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to update agent"),
  });

  const mDelete = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      inv();
      toast.success("Crew member removed.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to remove agent"),
  });

  const mRun = useMutation({
    mutationFn: (id: string) => runFn({ data: { agent_id: id } }),
    onSuccess: () => {
      inv();
      qc.invalidateQueries({ queryKey: ["runs"] });
      toast.success("Agent heartbeat run triggered.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Run failed"),
  });

  const runningId = mRun.isPending ? (mRun.variables ?? null) : null;

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-6xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Crew" subtitle="Your autonomous agent team — the Jarvis org." />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>{agents.length} crew</span>
            </div>
            <button
              onClick={() => setShowForm((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {showForm ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              {showForm ? "Close" : "Hire agent"}
            </button>
          </div>
        </div>

        {showForm && (
          <form
            className="grid gap-3 rounded-xl border border-border bg-surface/60 p-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              mCreate.mutate();
            }}
          >
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Agent name (e.g. sherlock)"
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
              required
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
            >
              {ROLE_PRESETS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Title (e.g. Staff Engineer)"
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={form.color}
                onChange={(e) => setForm({ ...form, color: e.target.value })}
                className="h-9 w-12 cursor-pointer rounded-md border border-border bg-card"
              />
              <select
                value={form.reports_to}
                onChange={(e) => setForm({ ...form, reports_to: e.target.value })}
                className="flex-1 rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
              >
                <option value="">Reports to… (none)</option>
                {(agents as any[]).map((a) => (
                  <option key={a.id} value={a.id}>{a.name} · {a.role}</option>
                ))}
              </select>
            </div>
            <input
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="One-line profile"
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={mCreate.isPending}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {mCreate.isPending ? "Hiring…" : "Hire agent"}
              </button>
            </div>
          </form>
        )}

        <OrgChart agents={agents as OrgAgent[]} />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(agents as any[]).map((a) => {
            const paused = a.status === "paused";
            const running = a.status === "running";
            const runningNow = runningId === a.id;
            return (
              <div key={a.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg text-lg" style={{ background: `${a.color}20`, color: a.color }}>
                      {a.icon ?? "🤖"}
                    </div>
                    <div>
                      <div className="font-mono text-sm font-medium">{a.name}</div>
                      <div className="text-xs text-muted-foreground">{a.role}{a.title ? ` · ${a.title}` : ""}</div>
                    </div>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    running ? "bg-sage/10 text-sage" : paused ? "bg-amber/10 text-amber" : a.status === "error" ? "bg-destructive/10 text-destructive" : "bg-surface text-muted-foreground"
                  }`}>
                    {a.status}
                  </span>
                </div>
                {a.description && (
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{a.description}</p>
                )}
                <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Wrench className="h-3 w-3" /> {a.active_runs ?? 0} active</span>
                  <span className="flex items-center gap-1"><CircleDollarSign className="h-3 w-3" /> ${((a.total_cost_cents ?? 0) / 100).toFixed(2)}</span>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <button
                    onClick={() => mRun.mutate(a.id)}
                    disabled={runningNow || paused || mRun.isPending}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-2 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
                  >
                    {runningNow ? <Loader2 className="h-3 w-3 animate-spin" /> : <Play className="h-3 w-3" />}
                    Run
                  </button>
                  <button
                    onClick={() => mToggle.mutate({ id: a.id, paused: !paused })}
                    className="flex items-center justify-center rounded-lg border border-border bg-surface px-2.5 py-1.5 text-xs transition-colors hover:border-primary/40"
                    title={paused ? "Resume" : "Pause"}
                  >
                    {paused ? <Zap className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                  </button>
                  <button
                    onClick={() => mDelete.mutate(a.id)}
                    className="flex items-center justify-center rounded-lg border border-border bg-surface px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                    title="Remove"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
                {(a.pause_reason || a.error_reason) && (
                  <p className="mt-2 rounded-md bg-surface/60 px-2 py-1 text-[10px] text-muted-foreground">
                    {a.pause_reason ?? a.error_reason}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {agents.length === 0 && (
          <div className="rounded-xl border border-dashed border-border bg-surface/30 p-10 text-center text-sm text-muted-foreground">
            Your crew is empty. Hire your first agent to start delegating.
          </div>
        )}
      </div>
    </div>
  );
}
