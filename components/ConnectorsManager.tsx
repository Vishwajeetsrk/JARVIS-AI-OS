"use client";

import { useEffect, useState } from "react";
import {
  Plug, ShieldCheck, Key, RefreshCw, X, CheckCircle2, AlertCircle,
  ExternalLink, Cpu, Database, Github, Globe, Sparkles, Layers, Zap,
  Wrench, Check, ArrowRight, Lock, Unlock, Search, Radio
} from "lucide-react";

export interface ConnectorItem {
  id: string;
  name: string;
  category: string;
  type: string;
  configured: boolean;
  model?: string;
  account?: string;
  status: "connected" | "available";
  desc: string;
  scope?: string;
  tablesCount?: number;
}

export interface ToolItem {
  id: string;
  name: string;
  category: "Research" | "Dev" | "Data" | "Media" | "System" | "Utility" | "Ops";
  desc: string;
}

export default function ConnectorsManager() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"connectors" | "tools" | "plugins">("connectors");
  const [connectors, setConnectors] = useState<ConnectorItem[]>([]);
  const [tools, setTools] = useState<ToolItem[]>([]);
  const [connectedCount, setConnectedCount] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [testingId, setTestingId] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{ id: string; message: string; success: boolean } | null>(null);

  const plugins = [
    { id: "salesforce-reconciler", name: "Salesforce Donation Reconciler", version: "v1.2", author: "Vishwajeet", status: "active", desc: "Automates 7-step Razorpay-to-Salesforce reconciliation" },
    { id: "git-ci-runner", name: "GitHub CI Automation & PR Reviewer", version: "v2.0", author: "JARVIS Core", status: "active", desc: "Autonomous branch creation, git diff analysis, and PR drafts" },
    { id: "resume-ats-engine", name: "Career OS ATS Optimizer", version: "v2.0", author: "Vishwajeet", status: "active", desc: "Multi-factor ATS scoring and Zero-Fabrication evidence matching" },
    { id: "device-bridge-plugin", name: "Windows PC Hardware & Shell Bridge", version: "v1.0", author: "JARVIS OS", status: "active", desc: "Local application launcher and PowerShell execution runtime" },
  ];

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("OPEN_CONNECTORS_MANAGER", handleOpen);
    return () => window.removeEventListener("OPEN_CONNECTORS_MANAGER", handleOpen);
  }, []);

  const loadData = () => {
    fetch("/api/connectors")
      .then((r) => r.json())
      .then((d) => {
        if (d.connectors) setConnectors(d.connectors);
        if (d.tools) setTools(d.tools);
        if (d.connectedCount) setConnectedCount(d.connectedCount);
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (open) loadData();
  }, [open]);

  const handleTestConnection = async (id: string) => {
    setTestingId(id);
    setTestResult(null);

    try {
      const res = await fetch("/api/connectors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "test_connection", connectorId: id }),
      });
      const data = await res.json();
      setTestResult({
        id,
        message: data.message || (data.success ? "Connection Verified" : "Failed"),
        success: data.success,
      });
    } catch (e: any) {
      setTestResult({ id, message: `Error: ${e.message}`, success: false });
    } finally {
      setTestingId(null);
    }
  };

  const filteredConnectors = connectors.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTools = tools.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(2, 5, 14, 0.92)",
            backdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            style={{
              width: "min(1080px, 96vw)",
              maxHeight: "90vh",
              background: "#050d1a",
              border: "1px solid rgba(0, 229, 255, 0.4)",
              borderRadius: 24,
              boxShadow: "0 0 70px rgba(0, 229, 255, 0.2), 0 24px 60px rgba(0,0,0,0.95)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid rgba(0, 229, 255, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, transparent 100%)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "rgba(0, 229, 255, 0.15)",
                    border: "1px solid #00e5ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)",
                  }}
                >
                  <Plug size={22} color="#00e5ff" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 900, color: "#ffffff", letterSpacing: "0.04em" }}>
                      Connectors & External Services
                    </h2>
                    <span
                      style={{
                        fontSize: 10,
                        padding: "2px 8px",
                        borderRadius: 10,
                        background: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid #10b981",
                        color: "#34d399",
                        fontWeight: 800,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {connectedCount} Connected
                    </span>
                  </div>
                  <p style={{ margin: "2px 0 0", fontSize: 12, color: "rgba(255, 255, 255, 0.6)" }}>
                    External services and computational tools Jarvis can read from, write to, and execute live.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#94a3b8",
                  cursor: "pointer",
                  padding: "8px 12px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                ✕ Close
              </button>
            </div>

            {/* Navigation Tabs & Search */}
            <div
              style={{
                padding: "12px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => setActiveTab("connectors")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 12,
                    background: activeTab === "connectors" ? "rgba(0, 229, 255, 0.2)" : "transparent",
                    border: activeTab === "connectors" ? "1px solid #00e5ff" : "1px solid transparent",
                    color: activeTab === "connectors" ? "#00e5ff" : "#94a3b8",
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Plug size={14} /> Connectors ({connectors.length})
                </button>

                <button
                  onClick={() => setActiveTab("tools")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 12,
                    background: activeTab === "tools" ? "rgba(168, 85, 247, 0.2)" : "transparent",
                    border: activeTab === "tools" ? "1px solid #a855f7" : "1px solid transparent",
                    color: activeTab === "tools" ? "#d8b4fe" : "#94a3b8",
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Wrench size={14} /> Tools ({tools.length})
                </button>

                <button
                  onClick={() => setActiveTab("plugins")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 12,
                    background: activeTab === "plugins" ? "rgba(16, 185, 129, 0.2)" : "transparent",
                    border: activeTab === "plugins" ? "1px solid #10b981" : "1px solid transparent",
                    color: activeTab === "plugins" ? "#34d399" : "#94a3b8",
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Layers size={14} /> Plugins ({plugins.length})
                </button>
              </div>

              {/* Search Bar */}
              <div style={{ position: "relative", width: 240 }}>
                <input
                  type="text"
                  placeholder="Search connectors & tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 12px 6px 30px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#ffffff",
                    fontSize: 11.5,
                    outline: "none",
                  }}
                />
                <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 11, color: "#64748b" }}>
                  🔍
                </span>
              </div>
            </div>

            {/* Body Content */}
            <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
              {/* Tab 1: Connectors Grid */}
              {activeTab === "connectors" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                  {filteredConnectors.map((c) => (
                    <div
                      key={c.id}
                      style={{
                        padding: 16,
                        borderRadius: 16,
                        background: c.status === "connected" ? "rgba(4, 15, 30, 0.7)" : "rgba(8, 12, 20, 0.5)",
                        border: c.status === "connected" ? "1px solid rgba(0, 229, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: "#ffffff" }}>{c.name}</div>
                          <span
                            style={{
                              fontSize: 9.5,
                              color: "#64748b",
                              fontFamily: "var(--font-mono)",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {c.category}
                          </span>
                        </div>

                        <span
                          style={{
                            fontSize: 10,
                            padding: "2px 8px",
                            borderRadius: 8,
                            fontWeight: 800,
                            fontFamily: "var(--font-mono)",
                            background: c.status === "connected" ? "rgba(16, 185, 129, 0.2)" : "rgba(100, 116, 139, 0.2)",
                            border: c.status === "connected" ? "1px solid #10b981" : "1px solid #64748b",
                            color: c.status === "connected" ? "#34d399" : "#94a3b8",
                          }}
                        >
                          {c.status === "connected" ? "Connected" : "Available"}
                        </span>
                      </div>

                      <p style={{ margin: 0, fontSize: 11.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.4, minHeight: 32 }}>
                        {c.desc}
                      </p>

                      {c.account && (
                        <div style={{ fontSize: 11, color: "#38bdf8", fontFamily: "var(--font-mono)" }}>
                          Account: <strong>{c.account}</strong>
                        </div>
                      )}

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <button
                          onClick={() => handleTestConnection(c.id)}
                          disabled={testingId === c.id}
                          style={{
                            padding: "5px 12px",
                            borderRadius: 8,
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            color: "#cbd5e1",
                            fontSize: 10.5,
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <RefreshCw size={11} className={testingId === c.id ? "animate-spin" : ""} />
                          {testingId === c.id ? "Pinging..." : "Test Ping"}
                        </button>

                        <button
                          style={{
                            padding: "5px 14px",
                            borderRadius: 8,
                            background: c.status === "connected" ? "rgba(239, 68, 68, 0.15)" : "rgba(0, 229, 255, 0.2)",
                            border: c.status === "connected" ? "1px solid rgba(239, 68, 68, 0.4)" : "1px solid #00e5ff",
                            color: c.status === "connected" ? "#fca5a5" : "#00e5ff",
                            fontSize: 10.5,
                            fontWeight: 800,
                            cursor: "pointer",
                          }}
                        >
                          {c.status === "connected" ? "Disconnect" : "Connect"}
                        </button>
                      </div>

                      {testResult && testResult.id === c.id && (
                        <div
                          style={{
                            fontSize: 10.5,
                            padding: "4px 8px",
                            borderRadius: 6,
                            background: testResult.success ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
                            color: testResult.success ? "#34d399" : "#fca5a5",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {testResult.message}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Tools Catalog */}
              {activeTab === "tools" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                  {filteredTools.map((t) => (
                    <div
                      key={t.id}
                      style={{
                        padding: 16,
                        borderRadius: 16,
                        background: "rgba(168, 85, 247, 0.06)",
                        border: "1px solid rgba(168, 85, 247, 0.25)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 13.5, fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                          {t.name}
                        </span>
                        <span
                          style={{
                            fontSize: 9.5,
                            padding: "2px 8px",
                            borderRadius: 8,
                            fontWeight: 800,
                            fontFamily: "var(--font-mono)",
                            background: "rgba(168, 85, 247, 0.2)",
                            border: "1px solid #a855f7",
                            color: "#d8b4fe",
                          }}
                        >
                          {t.category}
                        </span>
                      </div>
                      <p style={{ margin: 0, fontSize: 11.5, color: "rgba(255,255,255,0.7)" }}>{t.desc}</p>
                      <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", justifyContent: "flex-end" }}>
                        <span style={{ fontSize: 10, color: "#10b981", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                          <CheckCircle2 size={12} /> Execution Ready
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Plugins Registry */}
              {activeTab === "plugins" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {plugins.map((p) => (
                    <div
                      key={p.id}
                      style={{
                        padding: 16,
                        borderRadius: 16,
                        background: "rgba(16, 185, 129, 0.06)",
                        border: "1px solid rgba(16, 185, 129, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 12,
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 14, fontWeight: 800, color: "#ffffff" }}>{p.name}</span>
                          <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 6, background: "rgba(16, 185, 129, 0.2)", color: "#34d399", fontWeight: 700 }}>
                            {p.version}
                          </span>
                        </div>
                        <p style={{ margin: "2px 0 0", fontSize: 11.5, color: "rgba(255,255,255,0.7)" }}>{p.desc}</p>
                      </div>

                      <span style={{ fontSize: 10.5, padding: "3px 10px", borderRadius: 8, background: "rgba(16, 185, 129, 0.2)", border: "1px solid #10b981", color: "#34d399", fontWeight: 800 }}>
                        Active Plugin
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
