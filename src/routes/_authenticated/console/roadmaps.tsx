import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Search, BookOpen, Sparkles, CheckCircle, ArrowRight, Layers, Bot, Cpu, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { RoadmapSummary } from "@/lib/roadmaps";

export const Route = createFileRoute("/_authenticated/console/roadmaps")({
  component: RoadmapsPage,
  head: () => ({ meta: [{ title: "Learnify Developer Roadmaps — Jarvis AI OS" }] }),
  loader: async () => {
    try {
      const res = await fetch("/api/roadmaps");
      if (!res.ok) return { roadmaps: [] as RoadmapSummary[] };
      return { roadmaps: (await res.json()) as RoadmapSummary[] };
    } catch {
      return { roadmaps: [] as RoadmapSummary[] };
    }
  },
});

export function RoadmapsPage() {
  const { roadmaps } = Route.useLoaderData();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(roadmaps.map((r) => r.category))).sort()];

  const filtered = roadmaps.filter((r) => {
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || r.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
      <div className="border-b border-border bg-card/60 px-6 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-4 w-4" />
              </span>
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Learnify Developer Roadmaps
              </h1>
              <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                {roadmaps.length} Tracks
              </Badge>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Interactive learning paths, technical modules, and AI agent tutoring powered by roadmap.sh.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative min-w-[240px]">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search roadmaps…"
                className="w-full rounded-lg border border-border bg-surface pl-8 pr-3 py-1.5 text-xs outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-lg bg-surface p-2 text-primary group-hover:bg-primary/10">
                    <Cpu className="h-4 w-4" />
                  </span>
                  <Badge variant="secondary" className="font-mono text-[10px]">
                    {item.topicCount} modules
                  </Badge>
                </div>
                <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                <span className="text-[10px] font-medium text-muted-foreground/70 uppercase tracking-wider">
                  {item.category}
                </span>
                <Link
                  to="/console/$threadId"
                  params={{ threadId: "new" }}
                  search={{ seed: `Tutorial on ${item.name} roadmap and key learning steps.` }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  Study track <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-muted-foreground/40" />
            <p className="mt-2 text-sm text-muted-foreground">No roadmaps matched your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
