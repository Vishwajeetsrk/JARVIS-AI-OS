import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import {
  FolderOpen, Plus, Trash2, Pencil, MoreHorizontal, MessageSquare,
} from "lucide-react";
import {
  listProjects, createProject, deleteProject, renameProject, listThreads,
} from "@/lib/threads.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/projects")({
  component: ProjectsIndex,
  head: () => ({ meta: [{ title: "Projects — Jarvis" }] }),
});

const COLORS = ["#D97757", "#E69D45", "#58A65C", "#6A9BCC", "#A855F7", "#EC4899"];

interface Pd {
  id: string;
  name: string;
  description?: string | null;
  color: string;
  updated_at?: string | null;
  threads?: number;
}

function ProjectsIndex() {
  const nav = useNavigate();
  const qc = useQueryClient();
  const listP = useServerFn(listProjects);
  const listT = useServerFn(listThreads);
  const createP = useServerFn(createProject);
  const renameP = useServerFn(renameProject);
  const delP = useServerFn(deleteProject);

  const { data: db = [] } = useQuery({ queryKey: ["projects"], queryFn: () => listP({}) });
  const { data: threads = [] } = useQuery({ queryKey: ["threads"], queryFn: () => listT({}) });

  const threadCounts = (threads as any[]).reduce<Record<string, number>>((acc, t) => {
    if (t.project_id) acc[t.project_id] = (acc[t.project_id] ?? 0) + 1;
    return acc;
  }, {});

  const all: Pd[] = (db as any[]).map((p) => ({
    id: p.id, name: p.name, description: p.description, color: p.color,
    updated_at: p.updated_at, threads: threadCounts[p.id] ?? 0,
  }));

  const [newOpen, setNewOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [edit, setEdit] = useState<Pd | null>(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editColor, setEditColor] = useState(COLORS[0]);
  const [del, setDel] = useState<Pd | null>(null);

  const inv = () => {
    qc.invalidateQueries({ queryKey: ["projects"] });
    qc.invalidateQueries({ queryKey: ["threads"] });
  };

  const mCreate = useMutation({
    mutationFn: (name: string) => createP({ data: { name } }),
    onSuccess: () => { inv(); toast.success("Project created."); },
  });
  const mRename = useMutation({
    mutationFn: (v: { id: string; name: string; description?: string; color?: string }) => renameP({ data: v }),
    onSuccess: () => { inv(); toast.success("Project updated."); },
  });
  const mDel = useMutation({
    mutationFn: (id: string) => delP({ data: { id } }),
    onSuccess: () => { inv(); toast.success("Project deleted."); },
  });

  const openEdit = (p: Pd) => {
    setEdit(p); setEditName(p.name); setEditDesc(p.description ?? ""); setEditColor(p.color || COLORS[0]);
  };

  return (
    <div className="h-full overflow-y-auto p-6 lg:p-8">
      <header className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-mono-xs text-muted-foreground mb-1">Projects</div>
          <h1 className="font-display text-3xl font-semibold">{all.length} {all.length === 1 ? "project" : "projects"}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Create your own, rename and restyle them, and group chats by project.
          </p>
        </div>
        <Button onClick={() => setNewOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> New project
        </Button>
      </header>

      {all.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          No projects yet. Create one to group your chats.
        </div>
      ) : (
        <div className="reveal-stagger grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {all.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <button onClick={() => nav({ to: "/console/projects/$projectId", params: { projectId: p.id } })} className="flex min-w-0 items-center gap-3 text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: `${p.color}22`, color: p.color }}>
                    <FolderOpen className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">{p.name}</span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                      {p.updated_at ? `Updated ${formatDistanceToNowStrict(new Date(p.updated_at!), { addSuffix: true })}` : "—"}
                    </span>
                  </span>
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="rounded p-1 text-muted-foreground opacity-0 transition-opacity hover:bg-background hover:text-foreground group-hover:opacity-100" aria-label={`Actions for ${p.name}`}>
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => openEdit(p)}>
                      <Pencil className="mr-2 h-3.5 w-3.5" /> Rename / restyle
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDel(p)} className="text-destructive focus:text-destructive">
                      <Trash2 className="mr-2 h-3.5 w-3.5" /> Delete project
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                {p.description ?? "No description yet."}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                  <MessageSquare className="h-3 w-3" /> {p.threads} chats
                </span>
                <Link
                  to="/console/projects/$projectId"
                  params={{ projectId: p.id }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New project */}
      <Dialog open={newOpen} onOpenChange={setNewOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>New project</DialogTitle></DialogHeader>
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Project name" autoFocus />
          <DialogFooter>
            <Button variant="ghost" onClick={() => setNewOpen(false)}>Cancel</Button>
            <Button onClick={() => {
              if (!newName.trim()) return;
              mCreate.mutate(newName.trim());
              setNewName(""); setNewOpen(false);
            }}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit project */}
      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
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
            <Button variant="ghost" onClick={() => setEdit(null)}>Cancel</Button>
            <Button onClick={() => {
              if (!edit || !editName.trim()) return;
              mRename.mutate({ id: edit.id, name: editName.trim(), description: editDesc.trim(), color: editColor });
              setEdit(null);
            }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirm */}
      <Dialog open={!!del} onOpenChange={(o) => !o && setDel(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Delete project?</DialogTitle></DialogHeader>
          <p className="text-sm text-muted-foreground">This removes the project from the sidebar. Its chats are kept.</p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDel(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => { if (del) mDel.mutate(del.id); setDel(null); }}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}