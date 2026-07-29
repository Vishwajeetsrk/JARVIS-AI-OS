import type { CatalogItem } from "@/lib/catalog";
import { Switch } from "@/components/ui/switch";

export function CatalogGrid({
  items,
  enabled,
  onToggle,
}: {
  items: CatalogItem[];
  enabled?: string[];
  onToggle?: (id: string, next: boolean) => void;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => {
        const Icon = it.icon;
        const on = enabled?.includes(it.id) ?? false;
        return (
          <div key={it.id} className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="truncate font-medium">{it.name}</div>
                  {onToggle && (
                    <Switch checked={on} onCheckedChange={(v) => onToggle(it.id, v)} />
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{it.description}</p>
                {it.category && (
                  <div className="mt-2 inline-flex items-center rounded-full border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                    {it.category}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-3xl font-semibold">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
