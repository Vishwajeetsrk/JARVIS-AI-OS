import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { CONNECTORS } from "@/lib/catalog";
import { CatalogGrid, PageHeader } from "@/components/jarvis/catalog-grid";

export const Route = createFileRoute("/_authenticated/console/connectors")({
  component: ConnectorsPage,
  head: () => ({ meta: [{ title: "Connectors — Jarvis" }] }),
});

function ConnectorsPage() {
  const qc = useQueryClient();
  const getFn = useServerFn(getSettings);
  const updFn = useServerFn(updateSettings);
  const { data } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const enabled = (data?.enabled_connectors as string[] | undefined) ?? [];
  const m = useMutation({
    mutationFn: (next: string[]) => updFn({ data: { enabled_connectors: next } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["settings"] }),
  });
  return (
    <div className="h-full overflow-y-auto p-8">
      <PageHeader title="Connectors" subtitle="External services Jarvis can read from and write to." />
      <CatalogGrid
        items={CONNECTORS}
        enabled={enabled}
        onToggle={(id, next) =>
          m.mutate(next ? [...enabled, id] : enabled.filter((x) => x !== id))
        }
      />
    </div>
  );
}
