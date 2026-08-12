import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { formatDistanceToNowStrict } from "date-fns";
import { FolderPlus, FolderOpen, ArrowRight } from "lucide-react";
import { listProjects, listWorkspaceProjects } from "@/lib/threads.functions";

export function ProjectCards({ onNewProject }: { onNewProject?: () => void }) {
  const listFn = useServerFn(listProjects);
  const wsFn = useServerFn(listWorkspaceProjects);
  const { data: projects = [] } = useQuery({ queryKey: ["projects"], queryFn: () => listFn({}) });
  const { data: ws = [] } = useQuery({ queryKey: ["wsProjects"], queryFn: () => wsFn({}) });

  const all = [
    ...projects.map((p: any) => ({
      id: p.id as string,
      name: p.name as string,
      color: (p.color as string) ?? "#D97757",
      updated_at: p.updated_at as string | null,
      isWorkspace: false,
    })),
    ...ws.map((p: any) => ({
      id: p.id as string,
      name: p.name as string,
      color: (p.color as string) ?? "#D97757",
      updated_at: null,
      isWorkspace: true,
    })),
  ];

  if (all.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border p-6 text-center">
        <FolderOpen className="h-5 w-5 text-muted-foreground/60" />
        <p className="text-xs text-muted-foreground">No projects yet.</p>
        {onNewProject && (
          <button
            onClick={onNewProject}
            className="mt-1 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
          >
            <FolderPlus className="h-3.5 w-3.5" /> New project
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {all.slice(0, 6).map((p) => (
        <Link
          key={p.id}
          to="/console/projects/$projectId"
          params={{ projectId: p.id }}
          className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/40 hover:bg-surface"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: `${p.color}22`, color: p.color }}>
            <FolderOpen className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">{p.name}</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase text-muted-foreground/60">
              {p.isWorkspace
                ? "Workspace"
                : p.updated_at
                  ? formatDistanceToNowStrict(new Date(p.updated_at), { addSuffix: true })
                  : "—"}
            </p>
          </div>
        </Link>
      ))}
      {all.length > 6 && (
        <div className="col-span-full text-center">
          <Link to="/console/projects" className="group inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
            View all {all.length} projects
            <ArrowRight className="arrow-slide h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
}
