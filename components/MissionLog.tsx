"use client";

import { useState } from "react";
import { CheckSquare, Circle, CheckCircle2, Target, Calendar, ListTodo, X, Plus, Play } from "lucide-react";

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

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
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

      <div style={{ padding: 20, flex: 1, overflowY: "auto", minHeight: 300, maxHeight: 400 }}>
        {activeTab === "daily" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, animation: "fadeIn 0.2s ease-out" }}>
            {tasks.map(task => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px",
                  background: task.completed ? "rgba(16, 185, 129, 0.05)" : "rgba(0,0,0,0.3)",
                  border: task.completed ? "1px solid rgba(16, 185, 129, 0.2)" : "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ marginTop: 2 }}>
                  {task.completed ? <CheckCircle2 size={18} color="#10b981" /> : <Circle size={18} color="rgba(240,237,232,0.4)" />}
                </div>
                <span style={{ 
                  fontSize: "0.95rem", 
                  color: task.completed ? "rgba(240,237,232,0.5)" : "rgba(240,237,232,0.9)",
                  textDecoration: task.completed ? "line-through" : "none",
                  lineHeight: 1.4
                }}>
                  {task.text}
                </span>
              </div>
            ))}
            <button style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: 12,
              background: "transparent",
              border: "1px dashed rgba(16, 185, 129, 0.3)",
              borderRadius: 12,
              color: "#10b981",
              cursor: "pointer",
              marginTop: 8,
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem"
            }}>
              <Plus size={16} /> ADD TASK
            </button>
          </div>
        )}

        {activeTab === "goals" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, animation: "fadeIn 0.2s ease-out" }}>
            {goals.map(goal => (
              <div key={goal.id}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: "0.95rem", color: "rgba(240,237,232,0.9)" }}>{goal.text}</span>
                  <span style={{ fontSize: "0.85rem", color: goal.color, fontFamily: "var(--font-mono)" }}>{goal.progress}%</span>
                </div>
                <div style={{ width: "100%", height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${goal.progress}%`, height: "100%", background: goal.color, boxShadow: `0 0 10px ${goal.color}` }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
