import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import { Search, LayoutDashboard, ArrowRight, ArrowUpRight, Palette, X } from "lucide-react";

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

function hueFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
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

  const results = items ? filtered.length : 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingNav />
      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="reveal">
          <div className="text-mono-xs text-muted-foreground mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary breathe" />
            Design Language Library
          </div>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {items ? `${items.length} design systems, one memory.` : "Design Systems"}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {systems.length} brand-grade design systems with tokens, components, and usage guides — plus{" "}
            {sites.length} live project sites you can preview and remix. Open the console to copy, download,
            and remix any of them.
          </p>
        </div>

        {/* Search + filters */}
        <div className="reveal-stagger mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setSearch("")}
              placeholder="Search design systems…"
              className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-8 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          {items && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60">
              {results} {results === 1 ? "result" : "results"}
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-90 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_2px_12px_-2px_var(--primary)]"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:-translate-y-px"
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
            {filtered.map((item, idx) => {
              const hue = hueFor(item.name);
              const delay = Math.min(idx, 11) * 35;
              return (
                <Link
                  key={item.id}
                  to="/console/design/$systemId"
                  params={{ systemId: item.id }}
                  className="reveal group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {item.kind === "site" && item.previewUrl ? (
                    <div className="relative h-32 overflow-hidden border-b border-border bg-background">
                      <iframe
                        src={item.previewUrl}
                        title={`${item.name} live preview`}
                        loading="lazy"
                        className="pointer-events-none absolute left-0 top-0 h-full w-full origin-top-left scale-[0.55] border-0 transition-transform duration-500 ease-out group-hover:scale-[0.58]"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/95 px-2 py-0.5 text-[10px] font-semibold text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-white breathe" /> Live
                      </span>
                    </div>
                  ) : (
                    <div
                      className="relative h-16 overflow-hidden grayscale-[35%] transition-all duration-300 group-hover:grayscale-0"
                      style={{ background: `linear-gradient(135deg, hsl(${hue} 55% 14%), hsl(${hue} 35% 7%))` }}
                    >
                      <LayoutDashboard
                        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 opacity-25 transition-transform duration-300 group-hover:scale-125 group-hover:opacity-40"
                        style={{ color: `hsl(${hue} 85% 65%)` }}
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-sm font-medium leading-tight text-foreground">{item.name}</h3>
                    <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{ background: `hsl(${hue} 70% 55% / 0.12)`, color: `hsl(${hue} 75% 62%)` }}
                      >
                        {item.category}
                      </span>
                      {item.kind === "site" ? (
                        <span className="font-mono text-[10px] text-muted-foreground/60">Live site</span>
                      ) : (
                        <div className="flex gap-2 font-mono text-[10px] text-muted-foreground/60">
                          <span>{item.tokenCount}t</span>
                          <span>{item.componentCount}c</span>
                        </div>
                      )}
                      <ArrowUpRight className="arrow-slide h-3.5 w-3.5 text-muted-foreground/40 transition-colors group-hover:text-primary" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="reveal mt-12 rounded-2xl border border-border bg-surface/60 p-6 text-center">
          <Palette className="mx-auto mb-3 h-8 w-8 text-primary opacity-80 breathe" />
          <h2 className="font-display text-2xl font-semibold">Want to reuse these?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Sign in to the console to browse every design system, copy its tokens, download its HTML kit,
            and remix any live project site.
          </p>
          <Link to="/console/design" className="btn-hero shine mt-5 inline-flex items-center gap-2">
            Open Design Systems <ArrowRight className="arrow-slide h-4 w-4" />
          </Link>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}