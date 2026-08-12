import { createFileRoute, useParams, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { listProjects, deleteProject, renameProject, listThreads, createThread, listWorkspaceProjects } from "@/lib/threads.functions";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Plus, Trash2, FileText, Palette, Link2, ExternalLink, Play, Pencil } from "lucide-react";
import { toast } from "sonner";

const COLORS = ["#D97757", "#E69D45", "#58A65C", "#6A9BCC", "#A855F7", "#EC4899"];

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
  const renameP = useServerFn(renameProject);
  const listT = useServerFn(listThreads);
  const createT = useServerFn(createThread);
  const listW = useServerFn(listWorkspaceProjects);

  const { data: projects = [] } = useQuery({ queryKey: ["projects"], queryFn: () => listP({}) });
  const { data: threads = [] } = useQuery({ queryKey: ["threads"], queryFn: () => listT({}) });
  const { data: wsProjects = [] } = useQuery({ queryKey: ["wsProjects"], queryFn: () => listW({}) });

  const isWorkspace = projectId.startsWith("local-");
  const project = (projects as any[]).find((p: any) => p.id === projectId);
  const wsProject = (wsProjects as any[]).find((p: any) => p.id === projectId);
  const previewUrl = wsProject?.previewUrl;

  const projectThreads = (threads as any[]).filter((t: any) => t.project_id === projectId);

const mDel = useMutation({
    mutationFn: () => delP({ data: { id: projectId } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      qc.invalidateQueries({ queryKey: ["threads"] });
      toast.success("Project deleted.");
      nav({ to: "/console/projects" });
    },
  });
  const mRename = useMutation({
    mutationFn: (v: { name: string; description?: string; color?: string }) =>
      renameP({ data: { id: projectId, ...v } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project updated.");
    },
  });
  const mNew = useMutation({
    mutationFn: () => createT({ data: { project_id: projectId } }),
    onSuccess: (t) => nav({ to: "/console/$threadId", params: { threadId: t.id } }),
  });

  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editColor, setEditColor] = useState(COLORS[0]);

  const display = project ?? wsProject;

  if (!display) return <div className="p-8 text-sm text-muted-foreground">Project not found.</div>;

  const openEdit = () => {
    setEditName(display.name);
    setEditDesc(display.description ?? "");
    setEditColor(display.color || COLORS[0]);
    setEditOpen(true);
  };

  return (
    <div className="h-full overflow-y-auto p-8">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-lg" style={{ background: display.color }} />
          <div>
            <h1 className="font-display text-3xl font-semibold">{display.name}</h1>
            {display.description && <p className="text-sm text-muted-foreground">{display.description}</p>}
          </div>
        </div>
        <div className="flex gap-2">
          {previewUrl && (
            <Button onClick={() => window.open(previewUrl, "_blank", "noopener,noreferrer")}>
              <ExternalLink className="mr-2 h-4 w-4" /> Open preview
            </Button>
          )}
          {!isWorkspace && (
            <>
              <Button onClick={() => mNew.mutate()}><Plus className="mr-2 h-4 w-4" /> New chat</Button>
              <Button variant="outline" onClick={openEdit}><Pencil className="mr-2 h-4 w-4" /> Edit</Button>
              <Button variant="ghost" onClick={() => mDel.mutate()}><Trash2 className="mr-2 h-4 w-4" /> Delete</Button>
            </>
          )}
        </div>
      </div>

      {previewUrl && (
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-mono-xs opacity-60 flex items-center gap-2">
              <Play className="h-3 w-3" /> Live preview
            </h2>
            <span className="text-mono-xs opacity-40">{previewUrl}</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <div className="flex items-center gap-1.5 border-b border-border bg-card px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 flex-1 truncate rounded-md bg-background px-2 py-0.5 text-mono-xs text-muted-foreground">
                {previewUrl}
              </span>
            </div>
            <iframe
              src={previewUrl}
              title={display.name}
              className="h-[68vh] w-full bg-white"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
              loading="lazy"
            />
          </div>
        </div>
      )}

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

      {/* Edit dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Edit project</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Project name" autoFocus />
            <Input value={editDesc} onChange={(e) => setEditDesc(e.target.value)} placeholder="Description (optional)" />
            <div className="flex items-center gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setEditColor(c)}
                  aria-label={`Color ${c}`}
                  className={`h-7 w-7 rounded-full transition-transform hover:scale-110 ${editColor === c ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditOpen(false)}>Cancel</Button>
            <Button onClick={() => {
              if (!editName.trim()) return;
              mRename.mutate({ name: editName.trim(), description: editDesc.trim(), color: editColor });
              setEditOpen(false);
            }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
