import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { SKILLS } from "@/lib/catalog";
import { CatalogGrid, PageHeader } from "@/components/jarvis/catalog-grid";

export const Route = createFileRoute("/_authenticated/console/skills")({
  component: SkillsPage,
  head: () => ({ meta: [{ title: "Skills — Jarvis" }] }),
});

function SkillsPage() {
  const qc = useQueryClient();
  const getFn = useServerFn(getSettings);
  const updFn = useServerFn(updateSettings);
  const { data } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const enabled = (data?.enabled_skills as string[] | undefined) ?? [];
  const m = useMutation({
    mutationFn: (next: string[]) => updFn({ data: { enabled_skills: next } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["settings"] }),
  });
  return (
    <div className="h-full overflow-y-auto p-8">
      <PageHeader title="Skills" subtitle="The 18 specialized agents in the crew." />
      <CatalogGrid
        items={SKILLS}
        enabled={enabled}
        onToggle={(id, next) =>
          m.mutate(next ? [...enabled, id] : enabled.filter((x) => x !== id))
        }
      />
    </div>
  );
}
