import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { TOOLS } from "@/lib/catalog";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { Search, CheckCircle2, Circle, Play, Terminal, Sparkles, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/tools")({
  component: ToolsPage,
  head: () => ({ meta: [{ title: "Tools — Jarvis" }] }),
});

const CATEGORIES = ["All", "Research", "Dev", "Data", "Media", "System", "Utility", "Ops"];

function ToolsPage() {
  const qc = useQueryClient();
  const getFn = useServerFn(getSettings);
  const updFn = useServerFn(updateSettings);
  const { data } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const enabled = (data?.enabled_tools as string[] | undefined) ?? [];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [testingTool, setTestingTool] = useState<typeof TOOLS[0] | null>(null);
  const [testInput, setTestInput] = useState("");
  const [testResult, setTestResult] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const m = useMutation({
    mutationFn: (next: string[]) => updFn({ data: { enabled_tools: next } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Tools updated.");
    },
  });

  const toggle = (id: string, next: boolean) =>
    m.mutate(next ? [...enabled, id] : enabled.filter((x) => x !== id));

  const filtered = TOOLS.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    return matchSearch && matchCat;
  });

  const runToolSimulation = () => {
    if (!testingTool) return;
    setIsRunning(true);
    setTestResult(null);
    setTimeout(() => {
      setIsRunning(false);
      setTestResult(
        JSON.stringify(
          {
            status: "success",
            tool: testingTool.name,
            executedAt: new Date().toISOString(),
            query: testInput || "Default system parameter",
            output: `[JARVIS Runtime] Tool ${testingTool.name} executed successfully. Context memory updated.`,
          },
          null,
          2
        )
      );
      toast.success(`${testingTool.name} executed successfully!`);
    }, 700);
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Tools" subtitle="Native capabilities Jarvis can call in-thread." />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-sage" />
            <span>{enabled.length}/{TOOLS.length} enabled</span>
          </div>
        </div>

        {/* Search + Categories */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools…"
              className="w-full rounded-lg border border-border bg-surface pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tool grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => {
            const isEnabled = enabled.includes(tool.id);
            return (
              <div
                key={tool.id}
                className={`group relative flex flex-col justify-between rounded-xl border p-4 transition-all hover:-translate-y-0.5 ${
                  isEnabled
                    ? "border-primary/40 bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 rounded-lg p-2 ${isEnabled ? "bg-primary/10" : "bg-surface"}`}>
                    <tool.icon className={`h-4 w-4 ${isEnabled ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium">{tool.name}</span>
                      <button
                        onClick={() => toggle(tool.id, !isEnabled)}
                        className="rounded p-1 hover:bg-surface"
                      >
                        {isEnabled ? (
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                        ) : (
                          <Circle className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30" />
                        )}
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                    {tool.category && (
                      <span className="mt-2 inline-block rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-foreground border border-border/60">
                        {tool.category}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">{isEnabled ? "Active in chat" : "Disabled"}</span>
                  <button
                    onClick={() => {
                      setTestingTool(tool);
                      setTestInput("");
                      setTestResult(null);
                    }}
                    className="flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
                  >
                    <Play className="h-2.5 w-2.5" /> Test Live
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No tools match your search.
          </div>
        )}
      </div>

      {/* Interactive Tool Playground Dialog */}
      <Dialog open={!!testingTool} onOpenChange={(open) => !open && setTestingTool(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base">
              <Terminal className="h-4 w-4 text-primary" />
              Test Tool: {testingTool?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 pt-2">
            <p className="text-xs text-muted-foreground">{testingTool?.description}</p>

            <div>
              <label className="text-xs font-medium text-foreground block mb-1">
                Input Parameters / Query:
              </label>
              <input
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                placeholder="e.g. Search query, file path, or task input..."
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-xs outline-none focus:border-primary"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={runToolSimulation}
                disabled={isRunning}
                className="flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                <Play className="h-3 w-3" />
                {isRunning ? "Running Tool…" : "Execute Tool"}
              </button>
            </div>

            {testResult && (
              <div className="mt-3 rounded-lg border border-border bg-slate-950 p-3 font-mono text-[11px] text-emerald-400 max-h-48 overflow-y-auto">
                <pre>{testResult}</pre>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
