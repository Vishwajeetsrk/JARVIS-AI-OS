import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";

interface DesignSystemSummary {
  id: string;
  name: string;
  category: string;
  description: string;
  tokenCount: number;
  componentCount: number;
}

export const Route = createFileRoute("/_authenticated/console/design")({
  component: DesignSystemsPage,
  loader: async () => {
    const res = await fetch("/api/design-systems");
    if (!res.ok) return { systems: [] as DesignSystemSummary[] };
    return { systems: (await res.json()) as DesignSystemSummary[] };
  },
});

const CATEGORY_COLORS: Record<string, string> = {
  "Professional & Corporate": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Technology": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  "Minimal & Clean": "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
  "Bold & Experimental": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "Artistic & Creative": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  "Nature & Organic": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Luxury & Premium": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Dark & Edgy": "bg-zinc-100 text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300",
  "Retro & Vintage": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "Playful & Colorful": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
};

function getCategoryClass(cat: string): string {
  return CATEGORY_COLORS[cat] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
}

function DesignSystemsPage() {
  const { systems } = Route.useLoaderData();
  const [search, setSearch] = useState("");

  const filtered = systems.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <PageHeader title="Design Systems" description="Browse 32 brand-grade design systems with tokens, components, and usage guides." />

      <div className="relative mx-4 mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search design systems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6">
        {filtered.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
            No design systems found
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((system) => (
              <Link
                key={system.id}
                to="/console/design/$systemId"
                params={{ systemId: system.id }}
                className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium text-foreground">{system.name}</h3>
                  <Badge variant="outline" className={getCategoryClass(system.category)}>
                    {system.category}
                  </Badge>
                </div>
                <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">
                  {system.description}
                </p>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span>{system.tokenCount} tokens</span>
                  <span>{system.componentCount} components</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
