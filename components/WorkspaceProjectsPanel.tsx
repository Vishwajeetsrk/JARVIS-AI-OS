"use client";

import { useState } from "react";
import { X, FolderGit2, CheckCircle2, Circle, Plus, Trash2, Edit3, Save, Layers, Briefcase, Award, ArrowUpRight, Search, ArrowLeft } from "lucide-react";

type ProjectItem = {
  id: string;
  name: string;
  category: "personal" | "office" | "core";
  description: string;
  progress: number;
  status: "Active" | "Completed" | "In Review";
  path?: string;
};

type TaskItem = {
  id: string;
  title: string;
  category: "office" | "learning" | "core";
  completed: boolean;
};

const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    name: "JARVIS AI OS",
    category: "core",
    description: "Autonomous Personal Operating System with 18 specialist agents, 3D WebGL particle constellation, multi-tier task runtime, and voice pipeline.",
    progress: 95,
    status: "Active",
    path: "D:\\Team of Vishwajeet",
  },
  {
    id: "p2",
    name: "Learnify AI Platform",
    category: "personal",
    description: "Adaptive intelligent learning platform combining AI tutoring, creator toolkits, and automated career roadmaps (live at learnifyai.in).",
    progress: 90,
    status: "Active",
  },
  {
    id: "p3",
    name: "Wardelio Mobile App",
    category: "personal",
    description: "Personal wardrobe styling and outfit coordination mobile app featuring 150+ interactive screens, 3D controls, and Capacitor runtime.",
    progress: 85,
    status: "Active",
    path: "C:\\Users\\vishw\\OneDrive\\Desktop\\Wardelio",
  },
  {
    id: "p4",
    name: "DreamSync AI Career Platform",
    category: "personal",
    description: "AI-powered career engine featuring AI Resume Builder, ATS Checker, LinkedIn Profile Optimizer, and Portfolio Generator.",
    progress: 92,
    status: "Completed",
  },
  {
    id: "p5",
    name: "Luxury Laundry SaaS Platform",
    category: "personal",
    description: "Full-stack laundry management SaaS with customer booking portals, admin analytics dashboards, and real-time order tracking via WebSockets.",
    progress: 88,
    status: "Active",
  },
  {
    id: "p6",
    name: "Salesforce & Razorpay Reconciliation",
    category: "office",
    description: "Rootbridge Academy daily responsibility: 7-step automated reconciliation workflow matching 200,000+ CRM records with Razorpay feeds.",
    progress: 100,
    status: "Completed",
  },
];

const INITIAL_TASKS: TaskItem[] = [
  { id: "t1", title: "Step 1: Download yesterday's donation payment data from Razorpay", category: "office", completed: false },
  { id: "t2", title: "Step 2: Clean up & format data in Excel for Salesforce Data Loader compatibility", category: "office", completed: false },
  { id: "t3", title: "Step 3: Check donor existence via Email/Phone; create new Leads from Razorpay data and convert to Donor / Account", category: "office", completed: false },
  { id: "t4", title: "Step 4: Match Donor ID / Account ID using Email/Phone and update PAN records in Salesforce", category: "office", completed: false },
  { id: "t5", title: "Step 5: Format Opportunities dataset with donation amounts and execute Data Loader Insert", category: "office", completed: false },
  { id: "t6", title: "Step 6: Send confirmation email to Bharathi Ma'am ('Salesforce update completed till Date')", category: "office", completed: false },
  { id: "t7", title: "Step 7: Check & resolve pending donation/query emails from Bharathi Ma'am or Aswath Ma'am", category: "office", completed: false },
  { id: "t8", title: "Advanced Agentic DSPy prompt optimization techniques", category: "learning", completed: true },
  { id: "t9", title: "Next-gen Vector RAG embeddings with Supabase pgvector", category: "learning", completed: true },
  { id: "t10", title: "Capacitor iOS & Android performance optimization and 60fps micro-animations", category: "learning", completed: false },
];

export default function WorkspaceProjectsPanel({ onClose }: { onClose: () => void }) {
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [tab, setTab] = useState<"projects" | "office" | "learning">("projects");
  const [searchQuery, setSearchQuery] = useState("");

  // New item form
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPath, setNewPath] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Edit item state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editProgress, setEditProgress] = useState(0);

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const bumpProgress = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, progress: Math.min(100, p.progress + 10) } : p))
    );
  };

  const startEditProject = (p: ProjectItem) => {
    setEditingId(p.id);
    setEditName(p.name);
    setEditDesc(p.description);
    setEditProgress(p.progress);
  };

  const saveEditProject = (id: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              name: editName || p.name,
              description: editDesc || p.description,
              progress: editProgress,
              status: editProgress >= 100 ? "Completed" : "Active",
            }
          : p
      )
    );
    setEditingId(null);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const item: ProjectItem = {
      id: "p_" + Date.now(),
      name: newTitle,
      category: "personal",
      description: newDesc || "Workspace Project",
      progress: 15,
      status: "Active",
      path: newPath || undefined,
    };
    setProjects([item, ...projects]);
    setNewTitle("");
    setNewDesc("");
    setNewPath("");
    setShowAddForm(false);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const item: TaskItem = {
      id: "t_" + Date.now(),
      title: newTitle,
      category: tab === "office" ? "office" : "learning",
      completed: false,
    };
    setTasks([item, ...tasks]);
    setNewTitle("");
    setShowAddForm(false);
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTasks = tasks.filter(
    (t) =>
      t.category === tab &&
      t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(2, 5, 11, 0.88)",
        backdropFilter: "blur(24px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: "min(920px, 94vw)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          border: "1px solid rgba(0, 229, 255, 0.35)",
          boxShadow: "0 0 60px rgba(0, 229, 255, 0.25)",
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: "18px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(0, 229, 255, 0.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={onClose}
              style={{
                background: "rgba(0, 229, 255, 0.12)",
                border: "1px solid rgba(0, 229, 255, 0.4)",
                borderRadius: 12,
                padding: "6px 14px",
                color: "#00e5ff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
              }}
            >
              <ArrowLeft size={14} /> Back
            </button>
            <FolderGit2 size={24} style={{ color: "#00e5ff" }} />
            <div>
              <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                Vishwajeet Workspace Management
              </h2>
              <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
                Manage, Edit, Delete & Track Projects & Daily Workflows
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Tab Navigation & Search */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "12px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={() => { setTab("projects"); setShowAddForm(false); setEditingId(null); }}
              className="neon-pill"
              style={{
                background: tab === "projects" ? "rgba(0, 229, 255, 0.2)" : "transparent",
                borderColor: tab === "projects" ? "#00e5ff" : "rgba(255,255,255,0.15)",
                color: tab === "projects" ? "#00e5ff" : "rgba(255,255,255,0.75)",
                cursor: "pointer",
              }}
            >
              <Briefcase size={14} /> Projects ({projects.length})
            </button>

            <button
              onClick={() => { setTab("office"); setShowAddForm(false); setEditingId(null); }}
              className="neon-pill"
              style={{
                background: tab === "office" ? "rgba(16, 185, 129, 0.2)" : "transparent",
                borderColor: tab === "office" ? "#10b981" : "rgba(255,255,255,0.15)",
                color: tab === "office" ? "#10b981" : "rgba(255,255,255,0.75)",
                cursor: "pointer",
              }}
            >
              <Layers size={14} /> Salesforce Office Workflow ({tasks.filter((t) => t.category === "office").length})
            </button>

            <button
              onClick={() => { setTab("learning"); setShowAddForm(false); setEditingId(null); }}
              className="neon-pill"
              style={{
                background: tab === "learning" ? "rgba(168, 85, 247, 0.2)" : "transparent",
                borderColor: tab === "learning" ? "#a855f7" : "rgba(255,255,255,0.15)",
                color: tab === "learning" ? "#a855f7" : "rgba(255,255,255,0.75)",
                cursor: "pointer",
              }}
            >
              <Award size={14} /> Learning Tasks ({tasks.filter((t) => t.category === "learning").length})
            </button>
          </div>

          {/* Search bar */}
          <div style={{ position: "relative", minWidth: 200 }}>
            <Search size={14} style={{ position: "absolute", left: 10, top: 10, color: "rgba(255,255,255,0.4)" }} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 20,
                padding: "6px 12px 6px 30px",
                color: "#ffffff",
                fontSize: 12,
                outline: "none",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Add Item Button */}
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
                borderRadius: 12,
                background: "rgba(0, 229, 255, 0.12)",
                border: "1px solid rgba(0, 229, 255, 0.4)",
                color: "#00e5ff",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              <Plus size={15} /> Add New {tab === "projects" ? "Project" : "Task"}
            </button>
          ) : (
            <form
              onSubmit={tab === "projects" ? handleAddProject : handleAddTask}
              style={{
                background: "rgba(6, 16, 32, 0.9)",
                border: "1px solid rgba(0,229,255,0.4)",
                borderRadius: 16,
                padding: 18,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <h4 style={{ margin: 0, fontSize: 14, color: "#00e5ff", fontWeight: 700 }}>
                Create New {tab === "projects" ? "Workspace Project" : "Task"}
              </h4>
              <input
                type="text"
                placeholder={tab === "projects" ? "Project Title..." : "Task Description..."}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  padding: "10px 14px",
                  color: "#ffffff",
                  fontSize: 13,
                }}
              />
              {tab === "projects" && (
                <>
                  <input
                    type="text"
                    placeholder="Project Summary & Key Features..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 8,
                      padding: "10px 14px",
                      color: "#ffffff",
                      fontSize: 12,
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Local Folder Path (e.g. D:\Team of Vishwajeet)..."
                    value={newPath}
                    onChange={(e) => setNewPath(e.target.value)}
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 8,
                      padding: "10px 14px",
                      color: "#ffffff",
                      fontSize: 12,
                    }}
                  />
                </>
              )}
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  type="submit"
                  style={{
                    padding: "8px 18px",
                    borderRadius: 8,
                    background: "#00e5ff",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: 12,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Save Item
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 8,
                    background: "transparent",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                    border: "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Projects View */}
          {tab === "projects" &&
            filteredProjects.map((p) => (
              <div
                key={p.id}
                style={{
                  background: "rgba(6, 16, 32, 0.8)",
                  border: `1px solid ${editingId === p.id ? "#00e5ff" : "rgba(0, 229, 255, 0.2)"}`,
                  borderRadius: 16,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: editingId === p.id ? "0 0 24px rgba(0,229,255,0.2)" : "none",
                }}
              >
                {editingId === p.id ? (
                  /* Edit Mode */
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        border: "1px solid #00e5ff",
                        borderRadius: 8,
                        padding: "8px 12px",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    />
                    <textarea
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                      rows={2}
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: 8,
                        padding: "8px 12px",
                        color: "#ffffff",
                        fontSize: 12,
                      }}
                    />
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <label style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-mono)" }}>
                        Progress: {editProgress}%
                      </label>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={editProgress}
                        onChange={(e) => setEditProgress(Number(e.target.value))}
                        style={{ flex: 1 }}
                      />
                    </div>
                    <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                      <button
                        onClick={() => saveEditProject(p.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "6px 14px",
                          borderRadius: 8,
                          background: "#10b981",
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: 12,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Save size={14} /> Save Changes
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: 8,
                          background: "transparent",
                          color: "rgba(255,255,255,0.6)",
                          fontSize: 12,
                          border: "1px solid rgba(255,255,255,0.2)",
                          cursor: "pointer",
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Display Mode */
                  <>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <h3 style={{ margin: 0, fontSize: 16, color: "#ffffff", fontWeight: 700 }}>{p.name}</h3>
                          <span
                            style={{
                              fontSize: 9.5,
                              padding: "2px 8px",
                              borderRadius: 6,
                              background: p.status === "Completed" ? "rgba(16,185,129,0.2)" : "rgba(0,229,255,0.15)",
                              border: `1px solid ${p.status === "Completed" ? "#10b981" : "#00e5ff"}`,
                              color: p.status === "Completed" ? "#10b981" : "#00e5ff",
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                            }}
                          >
                            {p.status}
                          </span>
                        </div>
                        <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "rgba(255,255,255,0.65)" }}>{p.description}</p>
                        {p.path && (
                          <span style={{ fontSize: 10, color: "#00e5ff", fontFamily: "var(--font-mono)", marginTop: 6, display: "block" }}>
                            📁 {p.path}
                          </span>
                        )}
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button
                          onClick={() => startEditProject(p)}
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: 8,
                            padding: "5px 10px",
                            color: "rgba(255,255,255,0.8)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 11,
                          }}
                        >
                          <Edit3 size={13} /> Edit
                        </button>
                        <button
                          onClick={() => deleteProject(p.id)}
                          style={{
                            background: "rgba(244,63,94,0.1)",
                            border: "1px solid rgba(244,63,94,0.3)",
                            borderRadius: 8,
                            padding: "5px 10px",
                            color: "#f43f5e",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 11,
                          }}
                        >
                          <Trash2 size={13} /> Delete
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar & Bump Progress Button */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>
                        <span>PROGRESS STATUS</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span>{p.progress}%</span>
                          {p.progress < 100 && (
                            <button
                              onClick={() => bumpProgress(p.id)}
                              style={{
                                background: "rgba(16,185,129,0.15)",
                                border: "1px solid #10b981",
                                color: "#10b981",
                                borderRadius: 6,
                                padding: "2px 8px",
                                cursor: "pointer",
                                fontSize: 9.5,
                                fontWeight: 700,
                              }}
                            >
                              +10% Progress
                            </button>
                          )}
                        </div>
                      </div>
                      <div style={{ height: 7, borderRadius: 4, background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${p.progress}%`, background: "linear-gradient(90deg, #00e5ff 0%, #10b981 100%)", transition: "width 0.3s ease" }} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

          {/* Tasks & Learning View */}
          {(tab === "office" || tab === "learning") &&
            filteredTasks.map((t) => (
              <div
                key={t.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 18px",
                  background: "rgba(6, 16, 32, 0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                }}
              >
                <button
                  onClick={() => toggleTask(t.id)}
                  style={{ background: "transparent", border: "none", color: t.completed ? "#10b981" : "rgba(255,255,255,0.4)", cursor: "pointer", display: "flex" }}
                >
                  {t.completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                </button>

                <span
                  style={{
                    flex: 1,
                    fontSize: 13,
                    color: t.completed ? "rgba(255,255,255,0.45)" : "#ffffff",
                    textDecoration: t.completed ? "line-through" : "none",
                  }}
                >
                  {t.title}
                </span>

                <button
                  onClick={() => deleteTask(t.id)}
                  style={{ background: "transparent", border: "none", color: "rgba(244,63,94,0.6)", cursor: "pointer", padding: 4 }}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
