import { createFileRoute, useParams, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listProjects, deleteProject, listThreads, createThread } from "@/lib/threads.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, FileText, Palette, Link2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/projects/$projectId")({
  component: ProjectPage,
  head: () => ({ meta: [{ title: "Project — Jarvis" }] }),
});

function ProjectPage() {
  const { projectId } = useParams({ from: "/_authenticated/console/projects/$projectId" });
  const nav = useNavigate();
  const qc = useQueryClient();
  const listP = useServerFn(listProjects);
  const delP = useServerFn(deleteProject);
  const listT = useServerFn(listThreads);
  const createT = useServerFn(createThread);

  const { data: projects = [] } = useQuery({ queryKey: ["projects"], queryFn: () => listP({}) });
  const { data: threads = [] } = useQuery({ queryKey: ["threads"], queryFn: () => listT({}) });
  const project = (projects as any[]).find((p: any) => p.id === projectId);
  const projectThreads = (threads as any[]).filter((t: any) => t.project_id === projectId);

  const mDel = useMutation({
    mutationFn: () => delP({ data: { id: projectId } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      qc.invalidateQueries({ queryKey: ["threads"] });
      toast.success("Project deleted.");
      nav({ to: "/console" });
    },
  });
  const mNew = useMutation({
    mutationFn: () => createT({ data: { project_id: projectId } }),
    onSuccess: (t) => nav({ to: "/console/$threadId", params: { threadId: t.id } }),
  });

  if (!project) return <div className="p-8 text-sm text-muted-foreground">Project not found.</div>;

  return (
    <div className="h-full overflow-y-auto p-8">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-lg" style={{ background: project.color }} />
          <div>
            <h1 className="font-display text-3xl font-semibold">{project.name}</h1>
            {project.description && <p className="text-sm text-muted-foreground">{project.description}</p>}
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => mNew.mutate()}><Plus className="mr-2 h-4 w-4" /> New chat</Button>
          <Button variant="ghost" onClick={() => mDel.mutate()}><Trash2 className="mr-2 h-4 w-4" /> Delete</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <section className="md:col-span-2">
          <h2 className="mb-3 text-mono-xs opacity-60">Chats in this project</h2>
          {projectThreads.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No chats yet. Start one.
            </div>
          ) : (
            <ul className="space-y-2">
              {projectThreads.map((t: any) => (
                <li key={t.id}>
                  <button
                    onClick={() => nav({ to: "/console/$threadId", params: { threadId: t.id } })}
                    className="w-full rounded-md border border-border bg-card px-4 py-3 text-left text-sm hover:border-primary/40"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        <aside className="space-y-4">
          <SidebarCard icon={Palette} title="Brand style" hint="Fonts, colors, tone." />
          <SidebarCard icon={FileText} title="Documents" hint="Attach knowledge Jarvis should reference." />
          <SidebarCard icon={Link2} title="References" hint="URLs, repos, Figma files." />
        </aside>
      </div>
    </div>
  );
}

function SidebarCard({ icon: Icon, title, hint }: { icon: typeof FileText; title: string; hint: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <div className="font-medium">{title}</div>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      <Button size="sm" variant="ghost" className="mt-3">Add</Button>
    </div>
  );
}
