import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { listPluginsFromDisk } from "@/lib/plugins.functions";
import { PLUGINS } from "@/lib/catalog";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { CheckCircle2, Circle, Puzzle, Download, Boxes } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/plugins")({
  component: PluginsPage,
  head: () => ({ meta: [{ title: "Plugins — Jarvis" }] }),
});

// Which plugins are "installed" by default (community curated)
const INSTALLED_BY_DEFAULT = ["guardrails", "vector"];

function PluginsPage() {
  const qc = useQueryClient();
  const getFn = useServerFn(getSettings);
  const updFn = useServerFn(updateSettings);
  const { data } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const enabled = (data?.enabled_plugins as string[] | undefined) ?? [];

  const diskFn = useServerFn(listPluginsFromDisk);
  const diskPlugins = useQuery({ queryKey: ["plugins-disk"], queryFn: () => diskFn() });
  const marketplace = (diskPlugins.data ?? []).filter((p) => !PLUGINS.some((x) => x.id === p.name));

  const m = useMutation({
    mutationFn: (next: string[]) => updFn({ data: { enabled_plugins: next } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Plugins updated.");
    },
  });

  const toggle = (id: string, next: boolean) =>
    m.mutate(next ? [...enabled, id] : enabled.filter((x) => x !== id));

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Plugins" subtitle="Community and 3rd-party capabilities." />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <Puzzle className="h-3.5 w-3.5 text-primary" />
            <span>{enabled.length} active</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {PLUGINS.map((plugin) => {
            const isEnabled = enabled.includes(plugin.id);
            const isInstalled = INSTALLED_BY_DEFAULT.includes(plugin.id);
            return (
              <button
                key={plugin.id}
                onClick={() => toggle(plugin.id, !isEnabled)}
                className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                  isEnabled
                    ? "border-primary/40 bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <div className={`shrink-0 rounded-lg p-2.5 ${isEnabled ? "bg-primary/10" : "bg-surface"}`}>
                  <plugin.icon className={`h-5 w-5 ${isEnabled ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-medium">{plugin.name}</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {isInstalled && (
                        <span className="rounded-full border border-sage/30 bg-sage/10 px-2 py-0.5 text-[10px] font-medium text-sage flex items-center gap-1">
                          <Download className="h-2.5 w-2.5" /> Installed
                        </span>
                      )}
                      {isEnabled ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 text-muted-foreground/30" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{plugin.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Marketplace — plugin manifests discovered from plugins/ */}
        <div className="pt-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold">
            <Boxes className="h-4 w-4 text-primary" />
            Plugin Registry
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Manifests discovered from <code className="text-[11px]">plugins/*/.claude-plugin/plugin.json</code> (claude-code format).
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {marketplace.map((p) => {
              const isEnabled = enabled.includes(p.name);
              return (
                <button
                  key={p.name}
                  onClick={() => toggle(p.name, !isEnabled)}
                  className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                    isEnabled ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <div className="shrink-0 rounded-lg bg-surface p-2.5">
                    <Download className={`h-4 w-4 ${isEnabled ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <code className="font-mono text-sm">{p.name}</code>
                      {isEnabled ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30" />
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                    <div className="mt-1.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="rounded-full border border-border/60 bg-surface/60 px-2 py-0.5">v{p.version}</span>
                      {p.license && <span>{p.license}</span>}
                    </div>
                  </div>
                </button>
              );
            })}
            {marketplace.length === 0 && !diskPlugins.isLoading && (
              <div className="rounded-xl border border-dashed border-border bg-surface/30 p-6 text-center text-xs text-muted-foreground sm:col-span-2">
                No plugin manifests found. Drop a <code className="text-[11px]">.claude-plugin/plugin.json</code> into <code className="text-[11px]">plugins/</code>.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
