"use client";

import { useState } from "react";
import { CheckSquare, Circle, CheckCircle2, Target, Calendar, ListTodo, X, Plus, Play, Trash2, Edit2, Check } from "lucide-react";

export default function MissionLog({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<"daily" | "goals">("daily");

  const [tasks, setTasks] = useState([
    { id: 1, text: "Review PRs for JARVIS Agent Framework", completed: true },
    { id: 2, text: "Deploy APEX-UI platform updates to Vercel", completed: true },
    { id: 3, text: "Implement Personal Portfolio HUD", completed: false },
    { id: 4, text: "Record demo video of real-time voice pipeline", completed: false },
    { id: 5, text: "Publish v4.0.0 release notes", completed: false }
  ]);

  const [goals, setGoals] = useState([
    { id: 1, text: "Achieve 10,000 GitHub Stars on JARVIS AI OS", progress: 65, color: "#f5a623" },
    { id: 2, text: "Launch Supabase memory sync across all devices", progress: 90, color: "#00e5ff" },
    { id: 3, text: "Scale APEX-UI rendering to 60fps on mobile", progress: 40, color: "#10b981" }
  ]);

  const [newTaskText, setNewTaskText] = useState("");
  const [newGoalText, setNewGoalText] = useState("");
  const [newGoalProgress, setNewGoalProgress] = useState(0);
  
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingGoalId, setEditingGoalId] = useState<number | null>(null);

  // --- Task CRUD ---
  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };
  const addTask = () => {
    if (!newTaskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
    setNewTaskText("");
  };
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };
  const saveTask = (id: number, newText: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
    setEditingTaskId(null);
  };

  // --- Goal CRUD ---
  const addGoal = () => {
    if (!newGoalText.trim()) return;
    const colors = ["#f5a623", "#00e5ff", "#10b981", "#ff4081", "#ab47bc"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    setGoals([...goals, { id: Date.now(), text: newGoalText, progress: newGoalProgress, color }]);
    setNewGoalText("");
    setNewGoalProgress(0);
  };
  const deleteGoal = (id: number) => {
    setGoals(goals.filter(g => g.id !== id));
  };
  const saveGoal = (id: number, newText: string, newProgress: number) => {
    setGoals(goals.map(g => g.id === id ? { ...g, text: newText, progress: newProgress } : g));
    setEditingGoalId(null);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "15%",
        right: "5%",
        width: "clamp(300px, 25vw, 400px)",
        background: "rgba(4, 10, 20, 0.85)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(16, 185, 129, 0.3)",
        borderRadius: 24,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(16, 185, 129, 0.1)",
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        color: "#f0ede8"
      }}
    >
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid rgba(16, 185, 129, 0.15)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, rgba(16, 185, 129, 0.05), transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Target size={20} color="#10b981" />
          <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>Mission Log</h2>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(240,237,232,0.5)",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <button
          onClick={() => setActiveTab("daily")}
          style={{
            flex: 1,
            padding: "12px",
            background: activeTab === "daily" ? "rgba(16, 185, 129, 0.1)" : "transparent",
            border: "none",
            color: activeTab === "daily" ? "#10b981" : "rgba(240,237,232,0.6)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            cursor: "pointer",
            borderBottom: activeTab === "daily" ? "2px solid #10b981" : "2px solid transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }}
        >
          <Calendar size={16} /> Daily Tasks
        </button>
        <button
          onClick={() => setActiveTab("goals")}
          style={{
            flex: 1,
            padding: "12px",
            background: activeTab === "goals" ? "rgba(0, 229, 255, 0.1)" : "transparent",
            border: "none",
            color: activeTab === "goals" ? "#00e5ff" : "rgba(240,237,232,0.6)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            cursor: "pointer",
            borderBottom: activeTab === "goals" ? "2px solid #00e5ff" : "2px solid transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }}
        >
          <Play size={16} /> Active Goals
        </button>
      </div>

      <div style={{ padding: 20, flex: 1, overflowY: "auto", minHeight: 300, maxHeight: "50vh" }}>
        {activeTab === "daily" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, animation: "fadeIn 0.2s ease-out" }}>
            {tasks.map(task => (
              <div
                key={task.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "12px",
                  background: task.completed ? "rgba(16, 185, 129, 0.05)" : "rgba(0,0,0,0.3)",
                  border: task.completed ? "1px solid rgba(16, 185, 129, 0.2)" : "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  transition: "all 0.2s"
                }}
              >
                <div 
                  onClick={() => toggleTask(task.id)}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1, cursor: "pointer" }}
                >
                  <div style={{ marginTop: 2 }}>
                    {task.completed ? <CheckCircle2 size={18} color="#10b981" /> : <Circle size={18} color="rgba(240,237,232,0.4)" />}
                  </div>
                  {editingTaskId === task.id ? (
                    <input 
                      type="text" 
                      autoFocus
                      defaultValue={task.text}
                      onBlur={(e) => saveTask(task.id, e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && saveTask(task.id, e.currentTarget.value)}
                      style={{ flex: 1, background: "transparent", border: "none", color: "#fff", outline: "none", borderBottom: "1px solid #10b981" }} 
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <span style={{ 
                      fontSize: "0.95rem", 
                      color: task.completed ? "rgba(240,237,232,0.5)" : "rgba(240,237,232,0.9)",
                      textDecoration: task.completed ? "line-through" : "none",
                      lineHeight: 1.4,
                      wordBreak: "break-word"
                    }}>
                      {task.text}
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", gap: 8, opacity: 0.6 }}>
                  <button onClick={() => setEditingTaskId(task.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}><Edit2 size={14} /></button>
                  <button onClick={() => deleteTask(task.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#ff4444" }}><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <input
                type="text"
                placeholder="New daily task..."
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: "8px 12px",
                  color: "#fff",
                  outline: "none"
                }}
              />
              <button 
                onClick={addTask}
                disabled={!newTaskText.trim()}
                style={{
                  background: newTaskText.trim() ? "#10b981" : "rgba(16, 185, 129, 0.2)",
                  color: newTaskText.trim() ? "#000" : "rgba(255,255,255,0.4)",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 12px",
                  cursor: newTaskText.trim() ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
        )}

        {activeTab === "goals" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, animation: "fadeIn 0.2s ease-out" }}>
            {goals.map(goal => (
              <div key={goal.id} style={{ position: "relative", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, gap: 12 }}>
                  {editingGoalId === goal.id ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                      <input 
                        type="text" 
                        defaultValue={goal.text}
                        id={`edit-text-${goal.id}`}
                        style={{ flex: 1, background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", padding: "4px 8px", borderRadius: 4 }} 
                      />
                      <input 
                        type="number" 
                        defaultValue={goal.progress}
                        id={`edit-prog-${goal.id}`}
                        min="0" max="100"
                        style={{ width: 60, background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", padding: "4px 8px", borderRadius: 4 }} 
                      />
                      <button 
                        onClick={() => {
                          const newText = (document.getElementById(`edit-text-${goal.id}`) as HTMLInputElement).value;
                          const newProg = parseInt((document.getElementById(`edit-prog-${goal.id}`) as HTMLInputElement).value) || 0;
                          saveGoal(goal.id, newText, newProg);
                        }}
                        style={{ background: "#00e5ff", color: "#000", border: "none", padding: "4px 8px", borderRadius: 4, cursor: "pointer", fontSize: 12 }}
                      >Save</button>
                    </div>
                  ) : (
                    <>
                      <span style={{ fontSize: "0.95rem", color: "rgba(240,237,232,0.9)", flex: 1 }}>{goal.text}</span>
                      <span style={{ fontSize: "0.85rem", color: goal.color, fontFamily: "var(--font-mono)" }}>{goal.progress}%</span>
                    </>
                  )}
                </div>
                {!editingGoalId && (
                  <>
                    <div style={{ width: "100%", height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
                      <div style={{ width: `${goal.progress}%`, height: "100%", background: goal.color, boxShadow: `0 0 10px ${goal.color}` }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, opacity: 0.7 }}>
                      <button onClick={() => setEditingGoalId(goal.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}><Edit2 size={12} /></button>
                      <button onClick={() => deleteGoal(goal.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#ff4444" }}><Trash2 size={12} /></button>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8, padding: 12, background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px dashed rgba(0, 229, 255, 0.3)" }}>
              <input
                type="text"
                placeholder="New active goal..."
                value={newGoalText}
                onChange={(e) => setNewGoalText(e.target.value)}
                style={{ background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 8, padding: "8px 12px", color: "#fff", outline: "none" }}
              />
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="number"
                  placeholder="Progress %"
                  value={newGoalProgress || ""}
                  onChange={(e) => setNewGoalProgress(parseInt(e.target.value) || 0)}
                  min="0" max="100"
                  style={{ width: 100, background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 8, padding: "8px 12px", color: "#fff", outline: "none" }}
                />
                <button 
                  onClick={addGoal}
                  disabled={!newGoalText.trim()}
                  style={{
                    flex: 1, background: newGoalText.trim() ? "#00e5ff" : "rgba(0, 229, 255, 0.2)",
                    color: newGoalText.trim() ? "#000" : "rgba(255,255,255,0.4)", border: "none", borderRadius: 8, padding: "8px 12px", cursor: newGoalText.trim() ? "pointer" : "default", fontWeight: 600
                  }}
                >
                  ADD GOAL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
