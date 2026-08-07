import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listIssues, createIssue, updateIssue, deleteIssue, listAgents } from "@/lib/agents.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { Plus, Trash2, CheckCircle2, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/issues")({
  component: IssuesPage,
  head: () => ({ meta: [{ title: "Issues — Jarvis" }] }),
});

const COLUMNS: { id: string; label: string }[] = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "To Do" },
  { id: "in_progress", label: "In Progress" },
  { id: "needs_review", label: "Needs Review" },
  { id: "done", label: "Done" },
];

const PRIORITY: Record<string, { label: string; cls: string }> = {
  low: { label: "low", cls: "text-muted-foreground" },
  medium: { label: "med", cls: "text-amber" },
  high: { label: "high", cls: "text-orange" },
  urgent: { label: "urgent", cls: "text-destructive" },
};

function IssuesPage() {
  const qc = useQueryClient();
  const listFn = useServerFn(listIssues);
  const createFn = useServerFn(createIssue);
  const updateFn = useServerFn(updateIssue);
  const deleteFn = useServerFn(deleteIssue);
  const agentsFn = useServerFn(listAgents);

  const { data: issues = [] } = useQuery({ queryKey: ["issues"], queryFn: () => listFn({}) });
  const { data: agents = [] } = useQuery({ queryKey: ["agents"], queryFn: () => agentsFn({}) });
  const inv = () => qc.invalidateQueries({ queryKey: ["issues"] });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "", description: "", priority: "medium", work_mode: "chat", assignee: "",
  });

  const mCreate = useMutation({
    mutationFn: () =>
      createFn({
        data: {
          title: form.title.trim(),
          description: form.description.trim() || null,
          priority: form.priority as any,
          work_mode: form.work_mode as any,
          assignee_agent_id: form.assignee || null,
        },
      }),
    onSuccess: () => {
      inv();
      setShowForm(false);
      setForm({ title: "", description: "", priority: "medium", work_mode: "chat", assignee: "" });
      toast.success("Issue created.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to create issue"),
  });

  const mUpdate = useMutation({
    mutationFn: (v: { id: string; status: string }) => updateFn({ data: { id: v.id, status: v.status as any } }),
    onSuccess: () => inv(),
  });

  const mDelete = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      inv();
      toast.success("Issue deleted.");
    },
  });

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-6xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Issues" subtitle="Single-assignee tasks for your crew." />
          <button
            onClick={() => setShowForm((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {showForm ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            {showForm ? "Close" : "New issue"}
          </button>
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
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Issue title"
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary sm:col-span-2"
              required
            />
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value })}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
            >
              {Object.keys(PRIORITY).map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <select
              value={form.work_mode}
              onChange={(e) => setForm({ ...form, work_mode: e.target.value })}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
            >
              {["chat", "code", "research", "design", "ops"].map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
            <select
              value={form.assignee}
              onChange={(e) => setForm({ ...form, assignee: e.target.value })}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary sm:col-span-2"
            >
              <option value="">Assign to… (unassigned)</option>
              {(agents as any[]).map((a) => (
                <option key={a.id} value={a.id}>{a.name} · {a.role}</option>
              ))}
            </select>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Description / acceptance criteria"
              rows={3}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary resize-y sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={mCreate.isPending}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {mCreate.isPending ? "Creating…" : "Create issue"}
              </button>
            </div>
          </form>
        )}

        <div className="grid gap-3 md:grid-cols-5">
          {COLUMNS.map((col) => {
            const colIssues = (issues as any[]).filter((i) => i.status === col.id);
            return (
              <div key={col.id} className="rounded-xl border border-border bg-surface/30 p-2.5">
                <div className="flex items-center justify-between px-1 pb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{col.label}</span>
                  <span className="rounded-full bg-surface px-1.5 py-0.5 text-[10px] text-muted-foreground">{colIssues.length}</span>
                </div>
                <div className="space-y-2">
                  {colIssues.map((i) => {
                    const prio = PRIORITY[i.priority] ?? PRIORITY.medium;
                    const agent = (agents as any[]).find((a) => a.id === i.assignee_agent_id);
                    return (
                      <div key={i.id} className="rounded-lg border border-border bg-card p-3">
                        <p className="text-xs font-medium leading-snug">{i.title}</p>
                        {i.description && (
                          <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">{i.description}</p>
                        )}
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-medium uppercase ${prio.cls}`}>{prio.label}</span>
                          {agent && (
                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                              <span className="h-2 w-2 rounded-full" style={{ background: agent.color }} />
                              {agent.name}
                            </span>
                          )}
                        </div>
                        {col.id !== "done" && (
                          <div className="mt-2 flex items-center gap-1">
                            {col.id === "needs_review" ? (
                              <button
                                onClick={() => mUpdate.mutate({ id: i.id, status: "done" })}
                                className="flex flex-1 items-center justify-center gap-1 rounded-md bg-sage/15 px-2 py-1 text-[10px] font-medium text-sage transition-colors hover:bg-sage/25"
                              >
                                <CheckCircle2 className="h-3 w-3" /> Mark done
                              </button>
                            ) : (
                              <button
                                onClick={() => mUpdate.mutate({ id: i.id, status: nextStatus(col.id) })}
                                className="flex-1 rounded-md border border-border bg-surface px-2 py-1 text-[10px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                              >
                                Advance →
                              </button>
                            )}
                            <button
                              onClick={() => mDelete.mutate(i.id)}
                              className="rounded-md border border-border bg-surface px-1.5 py-1 text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {colIssues.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border/60 p-4 text-center text-[10px] text-muted-foreground/60">
                      Empty
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function nextStatus(s: string): string {
  const order = ["backlog", "todo", "in_progress", "needs_review", "done"];
  const i = order.indexOf(s);
  return order[Math.min(i + 1, order.length - 1)]!;
}
