import { createFileRoute, Link, Outlet, useParams } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Palette, Monitor, Layout, Smartphone } from "lucide-react";
import { useState } from "react";

export interface DesignSystemSummary {
  id: string;
  name: string;
  category: string;
  description: string;
  tokenCount: number;
  componentCount: number;
}

export const Route = createFileRoute("/_authenticated/console/templates")({
  component: TemplatesPage,
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

function TemplatesPage() {
  const params = useParams({ strict: false }) as { systemId?: string };
  if (params.systemId) {
    return <Outlet />;
  }

  const { systems } = Route.useLoaderData();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <PageHeader title="Templates Showcase" subtitle="Browse design system UI kits, preview pages, and template files for all 32 brand systems." />

      <div className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <Link
              key={system.id}
              to="/console/templates/$systemId"
              params={{ systemId: system.id }}
              className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2">
                <Palette className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium text-foreground">{system.name}</h3>
              </div>
              <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">
                {system.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={CATEGORY_COLORS[system.category] || ""}>
                  {system.category}
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Layout className="h-3 w-3" />{system.tokenCount} tokens
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Monitor className="h-3 w-3" />{system.componentCount} components
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
