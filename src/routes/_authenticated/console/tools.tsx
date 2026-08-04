import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { TOOLS } from "@/lib/catalog";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { Search, CheckCircle2, Circle } from "lucide-react";
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
              <button
                key={tool.id}
                onClick={() => toggle(tool.id, !isEnabled)}
                className={`group relative flex items-start gap-3 rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                  isEnabled
                    ? "border-primary/40 bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <div className={`shrink-0 rounded-lg p-2 ${isEnabled ? "bg-primary/10" : "bg-surface"}`}>
                  <tool.icon className={`h-4 w-4 ${isEnabled ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{tool.name}</span>
                    {isEnabled ? (
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                    ) : (
                      <Circle className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30" />
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                  {tool.category && (
                    <span className="mt-2 inline-block rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-foreground border border-border/60">
                      {tool.category}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No tools match your search.
          </div>
        )}
      </div>
    </div>
  );
}
