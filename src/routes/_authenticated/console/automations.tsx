import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listCronJobs, createCronJob, setCronJobEnabled, deleteCronJob } from "@/lib/scheduler.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { Clock, Plus, Trash2, Play, Pause, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/automations")({
  component: AutomationsPage,
  head: () => ({ meta: [{ title: "Automations — Jarvis" }] }),
});

const PRESETS: Array<{ key: string; label: string }> = [
  { key: "morning", label: "Morning briefing · 8:00" },
  { key: "daily", label: "Daily · 9:00" },
  { key: "hourly", label: "Every hour" },
  { key: "weekly", label: "Weekly · Mon 9:00" },
];

function AutomationsPage() {
  const qc = useQueryClient();
  const listFn = useServerFn(listCronJobs);
  const createFn = useServerFn(createCronJob);
  const toggleFn = useServerFn(setCronJobEnabled);
  const deleteFn = useServerFn(deleteCronJob);

  const jobs = useQuery({ queryKey: ["cron-jobs"], queryFn: () => listFn() });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", prompt: "", schedule: "morning" });

  const create = useMutation({
    mutationFn: () => createFn({ data: form }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cron-jobs"] });
      setShowForm(false);
      setForm({ name: "", prompt: "", schedule: "morning" });
      toast.success("Automation scheduled.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to create automation"),
  });

  const toggle = useMutation({
    mutationFn: (v: { id: string; enabled: boolean }) => toggleFn({ data: v }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cron-jobs"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Update failed"),
  });

  const remove = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cron-jobs"] });
      toast.success("Automation deleted.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Delete failed"),
  });

  const runs = jobs.data ?? [];

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader
            title="Automations"
            subtitle="Scheduled Jarvis tasks — briefings, reports, audits. Runs from the daemon (npm run daemon)."
          />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>{runs.length} scheduled</span>
          </div>
        </div>

        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40"
        >
          {showForm ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
          {showForm ? "Close" : "New automation"}
        </button>

        {showForm && (
          <form
            className="mt-1 space-y-2.5 rounded-xl border border-border bg-surface/60 p-4"
            onSubmit={(e) => {
              e.preventDefault();
              create.mutate();
            }}
          >
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name (e.g. Morning briefing)"
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
              required
            />
            <textarea
              value={form.prompt}
              onChange={(e) => setForm({ ...form, prompt: e.target.value })}
              placeholder="What should Jarvis do? (e.g. Summarise yesterday's activity and today's priorities)"
              rows={3}
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary resize-y"
              required
            />
            <div className="flex flex-wrap items-center gap-2">
              {PRESETS.map((p) => (
                <button
                  type="button"
                  key={p.key}
                  onClick={() => setForm({ ...form, schedule: p.key })}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                    form.schedule === p.key
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border bg-card text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {p.label}
                </button>
              ))}
              <input
                value={form.schedule}
                onChange={(e) => setForm({ ...form, schedule: e.target.value })}
                placeholder="or cron: 0 9 * * 1"
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-mono outline-none focus:border-primary w-36"
              />
            </div>
            <button
              type="submit"
              disabled={create.isPending}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {create.isPending ? "Scheduling…" : "Schedule automation"}
            </button>
          </form>
        )}

        <div className="space-y-2">
          {runs.map((job) => (
            <div key={job.id} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-sm text-foreground">{job.name}</code>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${job.enabled ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {job.enabled ? "active" : "paused"}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{job.prompt}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="font-mono">{job.schedule}</span>
                  {job.next_run_at && <span>next: {new Date(job.next_run_at).toLocaleString()}</span>}
                  {job.last_run_at && <span>last: {new Date(job.last_run_at).toLocaleString()}</span>}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  onClick={() => toggle.mutate({ id: job.id, enabled: !job.enabled })}
                  className="rounded p-2 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  aria-label={job.enabled ? "Pause" : "Resume"}
                >
                  {job.enabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => remove.mutate(job.id)}
                  className="rounded p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          {runs.length === 0 && !jobs.isLoading && (
            <div className="rounded-xl border border-dashed border-border bg-surface/30 p-8 text-center text-xs text-muted-foreground">
              No automations yet. Create a morning briefing or a recurring report.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
