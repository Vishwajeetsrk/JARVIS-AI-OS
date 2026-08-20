import { useState, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getDailyTasks, mutateDailyTasks, type DailyTasksData } from "@/lib/tasks.functions";
import {
  CheckCircle2, Circle, Clock, Plus, Trash2, Edit2, Check, X,
  FolderGit2, Sparkles, BookOpen, Briefcase, Zap, Shield, Globe,
  Cpu, Wrench, ChevronRight, Play, ArrowUpRight, Filter
} from "lucide-react";
import { toast } from "sonner";

interface ProjectProcess {
  id: string;
  name: string;
  category: "personal" | "office";
  progress: number;
  status: "In Progress" | "Testing" | "Shipped" | "Researching";
  phase: string;
  color: string;
}

const DEFAULT_PROJECT_PROCESSES: ProjectProcess[] = [
  {
    id: "jarvis-os",
    name: "JARVIS AI OS — Core Autonomous Brain",
    category: "personal",
    progress: 96,
    status: "In Progress",
    phase: "Phase 2: Native Voice & 3D HUD Active",
    color: "#06b6d4",
  },
  {
    id: "learnify-ai",
    name: "Learnify AI — Adaptive Learning Engine",
    category: "personal",
    progress: 84,
    status: "In Progress",
    phase: "Interactive Question Gen & Analytics",
    color: "#8b5cf6",
  },
  {
    id: "agency-os",
    name: "AgencyOS — Automated Client Invoicing & CRM",
    category: "office",
    progress: 90,
    status: "Testing",
    phase: "n8n Webhook Invoicing Pipeline",
    color: "#10b981",
  },
  {
    id: "dreamsync",
    name: "DreamSync — Multi-Device Context Sync",
    category: "personal",
    progress: 72,
    status: "In Progress",
    phase: "WebSocket Realtime Stream Bridge",
    color: "#f59e0b",
  },
  {
    id: "skillforge",
    name: "SkillForge — Autonomous Skill Compiler",
    category: "personal",
    progress: 88,
    status: "In Progress",
    phase: "53 Design Systems Token Matcher",
    color: "#ec4899",
  },
];

interface AdvanceTool {
  id: string;
  name: string;
  description: string;
  category: "research" | "dev" | "vision" | "system";
  enabled: boolean;
  actionCommand?: string;
  icon: string;
}

const DEFAULT_ADVANCE_TOOLS: AdvanceTool[] = [
  {
    id: "deep-research",
    name: "Autonomous Web & Architecture Researcher",
    description: "Multi-source web search + design token extraction from 53 systems",
    category: "research",
    enabled: true,
    actionCommand: "research UI design and animation",
    icon: "Globe",
  },
  {
    id: "code-writer",
    name: "Autonomous Source Code Writer & Test Runner",
    description: "Direct read/write/edit/test across project files with Vitest execution",
    category: "dev",
    enabled: true,
    actionCommand: "scan files and run automated test",
    icon: "Cpu",
  },
  {
    id: "desktop-vision",
    name: "Screen Vision & Desktop Inspector",
    description: "Captures screen buffer and inspects active Windows apps with Gemini Vision",
    category: "vision",
    enabled: true,
    actionCommand: "take screenshot",
    icon: "Shield",
  },
  {
    id: "whisper-streamer",
    name: "Groq Whisper Turbo Ambient Voice Streamer",
    description: "Under 500ms voice transcription directly through laptop microphone",
    category: "system",
    enabled: true,
    actionCommand: "daily briefing",
    icon: "Zap",
  },
  {
    id: "n8n-automation",
    name: "n8n Workflow Automation Bridge",
    category: "system",
    description: "Trigger billing, deploy notifications, and webhook automations",
    enabled: true,
    actionCommand: "trigger invoicing workflow",
    icon: "Wrench",
  },
  {
    id: "seo-sitemap",
    name: "Technical SEO & Schema.org Generator",
    description: "Automates sitemap.xml, JSON-LD schemas, and OpenGraph tags",
    category: "dev",
    enabled: true,
    actionCommand: "generate seo metadata",
    icon: "Globe",
  },
];

export function TaskProcessCenter() {
  const getTasksFn = useServerFn(getDailyTasks);
  const mutateTasksFn = useServerFn(mutateDailyTasks);

  const [tasks, setTasks] = useState<DailyTasksData>({
    completed_today: [],
    pending_tasks: [],
    personal_learning: [],
    personal_projects: [],
    office_work: [],
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "done" | "learning" | "projects" | "office">("all");
  const [projectProcesses, setProjectProcesses] = useState<ProjectProcess[]>(DEFAULT_PROJECT_PROCESSES);
  const [advanceTools, setAdvanceTools] = useState<AdvanceTool[]>(DEFAULT_ADVANCE_TOOLS);

  // New Task State
  const [newItemText, setNewItemText] = useState("");
  const [newCategory, setNewCategory] = useState<keyof DailyTasksData>("pending_tasks");

  // Editing Task State
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editingOldItem, setEditingOldItem] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasksFn();
      if (data) setTasks(data);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    const interval = setInterval(fetchTasks, 8000);
    return () => clearInterval(interval);
  }, []);

  // Add Task Handler
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;

    try {
      const res = await mutateTasksFn({
        data: {
          action: "add",
          category: newCategory,
          item: newItemText.trim(),
        },
      });

      if (res?.success && res.tasks) {
        setTasks(res.tasks);
        setNewItemText("");
        toast.success("Task added to " + newCategory.replace("_", " "));
      }
    } catch (err: any) {
      toast.error("Failed to add task: " + err.message);
    }
  };

  // Delete Task Handler
  const handleDeleteTask = async (category: string, item: string) => {
    try {
      const res = await mutateTasksFn({
        data: {
          action: "delete",
          category,
          item,
        },
      });

      if (res?.success && res.tasks) {
        setTasks(res.tasks);
        toast.success("Task deleted");
      }
    } catch (err: any) {
      toast.error("Failed to delete task: " + err.message);
    }
  };

  // Toggle Task Completion (Move between pending and done)
  const handleToggleDone = async (item: string, isDone: boolean) => {
    try {
      const res = await mutateTasksFn({
        data: {
          action: "move",
          item,
          fromCategory: isDone ? "completed_today" : "pending_tasks",
          toCategory: isDone ? "pending_tasks" : "completed_today",
        },
      });

      if (res?.success && res.tasks) {
        setTasks(res.tasks);
        toast.success(isDone ? "Moved to pending" : "Marked as completed!");
      }
    } catch (err: any) {
      toast.error("Failed to update task: " + err.message);
    }
  };

  // Save Edit Handler
  const handleSaveEdit = async () => {
    if (!editingCategory || !editingOldItem || !editingText.trim()) return;

    try {
      const res = await mutateTasksFn({
        data: {
          action: "update",
          category: editingCategory,
          oldItem: editingOldItem,
          newItem: editingText.trim(),
        },
      });

      if (res?.success && res.tasks) {
        setTasks(res.tasks);
        setEditingCategory(null);
        setEditingOldItem(null);
        setEditingText("");
        toast.success("Task updated");
      }
    } catch (err: any) {
      toast.error("Failed to edit task: " + err.message);
    }
  };

  // Toggle Advance Tool
  const toggleAdvanceTool = (toolId: string) => {
    setAdvanceTools((prev) =>
      prev.map((t) => (t.id === toolId ? { ...t, enabled: !t.enabled } : t))
    );
    toast.success("Advance tool state updated");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Project Process & Milestone Overview */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Active Project Processes & Live Milestones
              </h3>
              <p className="text-xs text-muted-foreground">
                Real-time execution status across Personal Projects & Office Work
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Autonomous Engine Active
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {projectProcesses.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className="inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: `${p.color}20`, color: p.color }}
                >
                  {p.category}
                </span>
                <span className="rounded-md border border-border bg-card px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {p.status}
                </span>
              </div>

              <h4 className="mt-2.5 truncate font-medium text-foreground">{p.name}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{p.phase}</p>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-mono font-semibold" style={{ color: p.color }}>
                    {p.progress}%
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${p.progress}%`, background: p.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interactive Daily Tasks Manager (CRUD) */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Daily Task & Learning Command Center
              </h3>
              <p className="text-xs text-muted-foreground">
                Synced with your Native Desktop Voice Assistant (`data/daily_tasks.json`)
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-surface p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === "all" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === "pending" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pending ({tasks.pending_tasks?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab("done")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === "done" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Done ({tasks.completed_today?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab("learning")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === "learning" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Learning ({tasks.personal_learning?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === "projects" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects ({tasks.personal_projects?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab("office")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeTab === "office" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Office ({tasks.office_work?.length || 0})
            </button>
          </div>
        </div>

        {/* Add Task Input Form */}
        <form onSubmit={handleAddTask} className="mt-4 flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Add new task or learning topic..."
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            className="min-w-[240px] flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value as keyof DailyTasksData)}
            className="rounded-xl border border-border bg-surface px-3 py-2.5 text-xs font-medium text-foreground focus:border-primary focus:outline-none"
          >
            <option value="pending_tasks">Pending Daily Task</option>
            <option value="completed_today">Completed Today (Done)</option>
            <option value="personal_learning">Personal Learning</option>
            <option value="personal_projects">Personal Project</option>
            <option value="office_work">Office Work</option>
          </select>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Plus className="h-4 w-4" /> Add Task
          </button>
        </form>

        {/* Tasks List */}
        <div className="mt-5 space-y-4">
          {/* Pending Tasks */}
          {(activeTab === "all" || activeTab === "pending") && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Clock className="h-3.5 w-3.5" /> Pending Daily Tasks
              </h4>
              <div className="mt-2 space-y-2">
                {(tasks.pending_tasks || []).map((t, idx) => (
                  <TaskItemRow
                    key={`pending-${idx}`}
                    item={t}
                    category="pending_tasks"
                    isDone={false}
                    isEditing={editingCategory === "pending_tasks" && editingOldItem === t}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    onStartEdit={() => {
                      setEditingCategory("pending_tasks");
                      setEditingOldItem(t);
                      setEditingText(t);
                    }}
                    onCancelEdit={() => {
                      setEditingCategory(null);
                      setEditingOldItem(null);
                    }}
                    onSaveEdit={handleSaveEdit}
                    onToggleDone={() => handleToggleDone(t, false)}
                    onDelete={() => handleDeleteTask("pending_tasks", t)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed Accomplishments */}
          {(activeTab === "all" || activeTab === "done") && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> Completed Accomplishments Today
              </h4>
              <div className="mt-2 space-y-2">
                {(tasks.completed_today || []).map((t, idx) => (
                  <TaskItemRow
                    key={`done-${idx}`}
                    item={t}
                    category="completed_today"
                    isDone={true}
                    isEditing={editingCategory === "completed_today" && editingOldItem === t}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    onStartEdit={() => {
                      setEditingCategory("completed_today");
                      setEditingOldItem(t);
                      setEditingText(t);
                    }}
                    onCancelEdit={() => {
                      setEditingCategory(null);
                      setEditingOldItem(null);
                    }}
                    onSaveEdit={handleSaveEdit}
                    onToggleDone={() => handleToggleDone(t, true)}
                    onDelete={() => handleDeleteTask("completed_today", t)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Personal Learning */}
          {(activeTab === "all" || activeTab === "learning") && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <BookOpen className="h-3.5 w-3.5" /> Personal Learning
              </h4>
              <div className="mt-2 space-y-2">
                {(tasks.personal_learning || []).map((t, idx) => (
                  <TaskItemRow
                    key={`learning-${idx}`}
                    item={t}
                    category="personal_learning"
                    isDone={false}
                    isEditing={editingCategory === "personal_learning" && editingOldItem === t}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    onStartEdit={() => {
                      setEditingCategory("personal_learning");
                      setEditingOldItem(t);
                      setEditingText(t);
                    }}
                    onCancelEdit={() => {
                      setEditingCategory(null);
                      setEditingOldItem(null);
                    }}
                    onSaveEdit={handleSaveEdit}
                    onToggleDone={() => {}}
                    onDelete={() => handleDeleteTask("personal_learning", t)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Personal Projects */}
          {(activeTab === "all" || activeTab === "projects") && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                <Sparkles className="h-3.5 w-3.5" /> Personal Projects
              </h4>
              <div className="mt-2 space-y-2">
                {(tasks.personal_projects || []).map((t, idx) => (
                  <TaskItemRow
                    key={`projects-${idx}`}
                    item={t}
                    category="personal_projects"
                    isDone={false}
                    isEditing={editingCategory === "personal_projects" && editingOldItem === t}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    onStartEdit={() => {
                      setEditingCategory("personal_projects");
                      setEditingOldItem(t);
                      setEditingText(t);
                    }}
                    onCancelEdit={() => {
                      setEditingCategory(null);
                      setEditingOldItem(null);
                    }}
                    onSaveEdit={handleSaveEdit}
                    onToggleDone={() => {}}
                    onDelete={() => handleDeleteTask("personal_projects", t)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Office Work */}
          {(activeTab === "all" || activeTab === "office") && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Briefcase className="h-3.5 w-3.5" /> Office Work Commitments
              </h4>
              <div className="mt-2 space-y-2">
                {(tasks.office_work || []).map((t, idx) => (
                  <TaskItemRow
                    key={`office-${idx}`}
                    item={t}
                    category="office_work"
                    isDone={false}
                    isEditing={editingCategory === "office_work" && editingOldItem === t}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    onStartEdit={() => {
                      setEditingCategory("office_work");
                      setEditingOldItem(t);
                      setEditingText(t);
                    }}
                    onCancelEdit={() => {
                      setEditingCategory(null);
                      setEditingOldItem(null);
                    }}
                    onSaveEdit={handleSaveEdit}
                    onToggleDone={() => {}}
                    onDelete={() => handleDeleteTask("office_work", t)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Advance Tools Add-On System */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Advance Tools Add-On Matrix
              </h3>
              <p className="text-xs text-muted-foreground">
                Enable, configure, and execute specialized agent tool extensions
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {advanceTools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{tool.name}</span>
                  <button
                    onClick={() => toggleAdvanceTool(tool.id)}
                    className={`h-5 w-9 rounded-full transition-colors ${
                      tool.enabled ? "bg-primary" : "bg-border"
                    } relative p-0.5`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-white transition-transform ${
                        tool.enabled ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{tool.description}</p>
              </div>

              {tool.actionCommand && (
                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                  <span className="truncate font-mono text-[10px] text-muted-foreground">
                    `{tool.actionCommand}`
                  </span>
                  <span className="text-xs font-semibold text-primary">
                    Active
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TaskItemRow({
  item,
  category,
  isDone,
  isEditing,
  editingText,
  setEditingText,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
  onToggleDone,
  onDelete,
}: {
  item: string;
  category: string;
  isDone: boolean;
  isEditing: boolean;
  editingText: string;
  setEditingText: (s: string) => void;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;
  onToggleDone: () => void;
  onDelete: () => void;
}) {
  if (isEditing) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-primary/50 bg-surface p-2.5">
        <input
          type="text"
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
          autoFocus
        />
        <button
          onClick={onSaveEdit}
          className="rounded-lg bg-emerald-500 p-1.5 text-white hover:bg-emerald-600"
          title="Save"
        >
          <Check className="h-4 w-4" />
        </button>
        <button
          onClick={onCancelEdit}
          className="rounded-lg bg-card p-1.5 text-muted-foreground hover:bg-border"
          title="Cancel"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-surface/60 px-3.5 py-2.5 transition-colors hover:border-primary/30 hover:bg-surface">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {category === "pending_tasks" || category === "completed_today" ? (
          <button
            onClick={onToggleDone}
            className="shrink-0 text-muted-foreground hover:text-primary"
          >
            {isDone ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            ) : (
              <Circle className="h-4 w-4" />
            )}
          </button>
        ) : null}
        <span
          className={`truncate text-xs ${
            isDone ? "text-muted-foreground line-through" : "text-foreground font-medium"
          }`}
        >
          {item}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          onClick={onStartEdit}
          className="rounded-md p-1 text-muted-foreground hover:bg-border hover:text-foreground"
          title="Edit"
        >
          <Edit2 className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={onDelete}
          className="rounded-md p-1 text-muted-foreground hover:bg-rose-500/20 hover:text-rose-400"
          title="Delete"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
