import { createFileRoute, Link, Outlet, useParams } from "@tanstack/react-router";
import { Search, Palette, LayoutDashboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";

import { listDesignSystems, getDesignSystem, type DesignSystemSummary } from "@/lib/design-systems";

export const Route = createFileRoute("/_authenticated/console/design")({
  component: DesignSystemsPage,
  head: () => ({ meta: [{ title: "Design Systems — Jarvis" }] }),
  loader: async () => {
    try {
      const res = await fetch("/api/design-systems");
      if (!res.ok) return { systems: FALLBACK_SYSTEMS };
      const systems = await res.json() as DesignSystemSummary[];
      return { systems: systems.length > 0 ? systems : FALLBACK_SYSTEMS };
    } catch {
      return { systems: FALLBACK_SYSTEMS };
    }
  },
});

// Fallback data in case the API isn't running
const FALLBACK_SYSTEMS: DesignSystemSummary[] = [
  { id: "apple", name: "Apple HIG", category: "Technology", description: "Apple Human Interface Guidelines — SF Pro, spatial design, and native patterns.", tokenCount: 84, componentCount: 28 },
  { id: "arc", name: "Arc Browser", category: "Technology", description: "Arc's signature space sidebar, boosts, and floating panels.", tokenCount: 72, componentCount: 24 },
  { id: "claude", name: "Claude / Anthropic", category: "Minimal & Clean", description: "Anthropic's warm, thoughtful AI interface — Claude Orange and clean typefaces.", tokenCount: 68, componentCount: 22 },
  { id: "bento", name: "Bento Grid", category: "Bold & Experimental", description: "Bento-box modular grid layouts — popular in 2024 SaaS landing pages.", tokenCount: 56, componentCount: 18 },
  { id: "linear", name: "Linear", category: "Technology", description: "Issue tracking precision — tight spacing, cool grays, keyboard-first UX.", tokenCount: 91, componentCount: 32 },
  { id: "vercel", name: "Vercel", category: "Minimal & Clean", description: "Deployment-grade dark mode — geist mono, sharp borders, system UI.", tokenCount: 78, componentCount: 26 },
  { id: "stripe", name: "Stripe", category: "Professional & Corporate", description: "Payment-grade trust design — blues, whites, and pixel-perfect forms.", tokenCount: 103, componentCount: 38 },
  { id: "notion", name: "Notion", category: "Minimal & Clean", description: "Block-editor simplicity — sans-serif, generous whitespace, soft borders.", tokenCount: 64, componentCount: 21 },
  { id: "github", name: "GitHub Primer", category: "Technology", description: "GitHub's design system — accessible, monospace-forward, octicons.", tokenCount: 118, componentCount: 44 },
  { id: "airbnb", name: "Airbnb DLS", category: "Professional & Corporate", description: "Hospitality warmth — Cereal typeface, coral accents, trust-first.", tokenCount: 89, componentCount: 31 },
  { id: "ant", name: "Ant Design", category: "Professional & Corporate", description: "Enterprise React components — Alibaba's comprehensive design language.", tokenCount: 142, componentCount: 52 },
  { id: "airtable", name: "Airtable", category: "Bold & Experimental", description: "Database-as-canvas — pastel blocks, grid views, and colorful bases.", tokenCount: 74, componentCount: 27 },
];

const CATEGORY_GRADIENTS: Record<string, string> = {
  "Technology": "from-cyan-950 to-blue-950",
  "Minimal & Clean": "from-slate-900 to-zinc-900",
  "Bold & Experimental": "from-purple-950 to-violet-950",
  "Professional & Corporate": "from-blue-950 to-indigo-950",
  "Artistic & Creative": "from-pink-950 to-rose-950",
  "Nature & Organic": "from-green-950 to-emerald-950",
  "Luxury & Premium": "from-amber-950 to-yellow-950",
  "Dark & Edgy": "from-zinc-950 to-slate-950",
  "Retro & Vintage": "from-orange-950 to-amber-950",
  "Playful & Colorful": "from-rose-950 to-pink-950",
};

const CATEGORY_ACCENT: Record<string, string> = {
  "Technology": "#22d3ee",
  "Minimal & Clean": "#94a3b8",
  "Bold & Experimental": "#a855f7",
  "Professional & Corporate": "#60a5fa",
  "Artistic & Creative": "#ec4899",
  "Nature & Organic": "#4ade80",
  "Luxury & Premium": "#fbbf24",
  "Dark & Edgy": "#71717a",
  "Retro & Vintage": "#fb923c",
  "Playful & Colorful": "#f43f5e",
};

function DesignSystemsPage() {
  const params = useParams({ strict: false }) as { systemId?: string };
  if (params.systemId) {
    return <Outlet />;
  }

  const { systems } = Route.useLoaderData();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(systems.map((s) => s.category))).sort()];

  const filtered = systems.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || s.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="border-b border-border px-6 py-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <PageHeader
            title="Design Systems"
            subtitle={`Browse ${systems.length} brand-grade design systems with tokens, components, and usage guides.`}
          />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium shrink-0">
            <Palette className="h-3.5 w-3.5 text-primary" />
            <span>{systems.length} systems</span>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search design systems…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
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
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {filtered.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
            No design systems match your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((system) => {
              const gradientClass = CATEGORY_GRADIENTS[system.category] || "from-zinc-900 to-slate-900";
              const accent = CATEGORY_ACCENT[system.category] || "#D97757";
              return (
                <Link
                  key={system.id}
                  to="/console/design/$systemId"
                  params={{ systemId: system.id }}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {/* Color preview strip */}
                  <div className={`h-16 bg-gradient-to-br ${gradientClass} relative overflow-hidden flex items-center justify-center`}>
                    <LayoutDashboard
                      className="h-6 w-6 opacity-20"
                      style={{ color: accent }}
                    />
                    <div
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-tl-full opacity-30"
                      style={{ background: accent }}
                    />
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-medium text-sm text-foreground leading-tight">{system.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                      {system.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{ background: `${accent}15`, color: accent }}
                      >
                        {system.category}
                      </span>
                      <div className="flex gap-2 text-[10px] text-muted-foreground/60 font-mono">
                        <span>{system.tokenCount}t</span>
                        <span>{system.componentCount}c</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
