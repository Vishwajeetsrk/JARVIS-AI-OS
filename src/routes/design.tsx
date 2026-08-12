import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import { Search, LayoutDashboard, ArrowRight, Palette } from "lucide-react";

export const Route = createFileRoute("/design")({
  component: DesignGallery,
  head: () => ({
    meta: [
      { title: "Design Systems — Jarvis" },
      { name: "description", content: "Browse brand-grade design systems and live project sites with tokens, components, and usage guides." },
    ],
  }),
});

interface DesignItem {
  id: string;
  name: string;
  category: string;
  description: string;
  tokenCount: number;
  componentCount: number;
  kind?: "site";
  previewUrl?: string;
}

export function DesignGallery() {
  const [items, setItems] = useState<DesignItem[] | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/api/design-systems")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: DesignItem[] | null) => setItems(data ?? []))
      .catch(() => setItems([]));
  }, []);

  const systems = items?.filter((i) => i.kind !== "site") ?? [];
  const sites = items?.filter((i) => i.kind === "site") ?? [];
  const categories = ["All", ...Array.from(new Set((items ?? []).map((i) => i.category))).sort()];

  const filtered = (items ?? []).filter((i) => {
    const matchSearch =
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.category.toLowerCase().includes(search.toLowerCase()) ||
      i.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || i.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-mono-xs text-muted-foreground mb-2">Design Language Library</div>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          {items ? `${items.length} design systems, one memory.` : "Design Systems"}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {systems.length} brand-grade design systems with tokens, components, and usage guides — plus{" "}
          {sites.length} live project sites you can preview and remix. Open the console to copy, download,
          and remix any of them.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search design systems…"
              className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
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

        {!items ? (
          <div className="mt-12 text-sm text-muted-foreground">Loading design systems…</div>
        ) : filtered.length === 0 ? (
          <div className="mt-12 text-sm text-muted-foreground">No design systems match your search.</div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
              <Link
                key={item.id}
                to="/console/design/$systemId"
                params={{ systemId: item.id }}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {item.kind === "site" && item.previewUrl ? (
                  <div className="h-32 overflow-hidden relative bg-background border-b border-border">
                    <iframe
                      src={item.previewUrl}
                      title={`${item.name} live preview`}
                      loading="lazy"
                      className="pointer-events-none w-full h-full scale-[0.55] origin-top-left border-0"
                      sandbox="allow-scripts allow-same-origin"
                    />
                    <span className="absolute top-2 right-2 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-semibold text-white">
                      ● Live
                    </span>
                  </div>
                ) : (
                  <div className="h-16 bg-gradient-to-br from-slate-900 to-zinc-900 relative overflow-hidden flex items-center justify-center">
                    <LayoutDashboard className="h-6 w-6 opacity-20 text-primary" />
                  </div>
                )}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-medium text-sm text-foreground leading-tight">{item.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      {item.category}
                    </span>
                    {item.kind === "site" ? (
                      <span className="text-[10px] text-muted-foreground/60 font-mono">Live site</span>
                    ) : (
                      <div className="flex gap-2 text-[10px] text-muted-foreground/60 font-mono">
                        <span>{item.tokenCount}t</span>
                        <span>{item.componentCount}c</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-border bg-surface/60 p-6 text-center">
          <Palette className="mx-auto mb-3 h-8 w-8 text-primary opacity-80" />
          <h2 className="font-display text-2xl font-semibold">Want to reuse these?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Sign in to the console to browse every design system, copy its tokens, download its HTML kit,
            and remix any live project site.
          </p>
          <Link
            to="/console/design"
            className="btn-hero mt-5 inline-flex items-center gap-2"
          >
            Open Design Systems <ArrowRight className="arrow-slide h-4 w-4" />
          </Link>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
