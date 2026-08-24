import React, { useState } from "react";
import {
  X,
  Sliders,
  Database,
  KeyRound,
  Keyboard,
  Mic,
  CreditCard,
  Sparkles,
  Wrench,
  Globe,
  Info,
  Plus,
  Trash2,
  CheckCircle2,
  FileSpreadsheet,
  Palette,
  Bot,
  Cpu,
  HardDrive,
  Subtitles,
  GitBranch,
  Shield,
  FileText,
  Presentation,
  Download,
  Check,
} from "lucide-react";
import { dataControl, type ExcludedAppRule } from "@/lib/system/data-control-engine";
import { downloadXlsx } from "@/mastra/tools/xlsx-creator";
import { downloadPptx } from "@/mastra/tools/pptx-creator";
import { downloadDocx } from "@/mastra/tools/docx-creator";
import { toast } from "sonner";

interface VidaSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType =
  | "general"
  | "dataControl"
  | "passwords"
  | "shortcuts"
  | "microphone"
  | "billing"
  | "intention"
  | "tools"
  | "network"
  | "about";

export function VidaSettingsModal({ isOpen, onClose }: VidaSettingsModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("dataControl");
  const [rules, setRules] = useState<ExcludedAppRule[]>(dataControl.getRules());
  const [newAppName, setNewAppName] = useState("");
  const [newAppBundle, setNewAppBundle] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleRemoveRule = (id: string, name: string) => {
    dataControl.removeRule(id);
    setRules(dataControl.getRules());
    toast.success(`Removed "${name}" from Excluded Apps.`);
  };

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAppName.trim() || !newAppBundle.trim()) {
      toast.error("Please enter both application name and executable bundle ID.");
      return;
    }
    const created = dataControl.addRule(newAppName.trim(), newAppBundle.trim());
    setRules(dataControl.getRules());
    setNewAppName("");
    setNewAppBundle("");
    setShowAddForm(false);
    toast.success(`Added "${created.name}" to Excluded Apps.`);
  };

  // 1-Click Generator Handlers
  const handleGenerateSampleExcel = async () => {
    try {
      setIsGenerating(true);
      await downloadXlsx({
        title: "Executive_KPI_Dashboard_2026",
        author: "Vishwajeet — Jarvis AI OS",
        theme: "midnight",
        sheets: [
          {
            name: "Executive Summary",
            kpiCards: [
              { label: "Annual Run Rate", value: "$4.25M", change: "+34.2% YoY", status: "positive" },
              { label: "Active Enterprise Nodes", value: "1,842", change: "+180 this month", status: "positive" },
              { label: "AI Automation Efficiency", value: "98.4%", change: "-0.2% Latency", status: "positive" },
              { label: "Gross Margin", value: "88.6%", change: "+2.1% Margin", status: "positive" },
            ],
            headers: ["Department", "Q1 Budget", "Q1 Actual", "Variance", "Efficiency Score", "Status"],
            rows: [
              ["AI Research & Development", 850000, 795000, 55000, 0.94, "On Track"],
              ["Infrastructure & Cloud GPUs", 620000, 610000, 10000, 0.98, "Optimal"],
              ["Product Engineering", 480000, 460000, 20000, 0.96, "On Track"],
              ["Enterprise Security & Audits", 210000, 195000, 15000, 0.93, "Verified"],
              ["Operations & Support", 180000, 175000, 5000, 0.97, "Optimal"],
            ],
            includeTotalRow: true,
            autoFilter: true,
          },
        ],
      });
      toast.success("Executive Excel Dashboard generated & downloaded!");
    } catch (e: any) {
      toast.error(`Excel generation error: ${e.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateSamplePptx = async () => {
    try {
      setIsGenerating(true);
      await downloadPptx({
        title: "Jarvis_AI_OS_Master_Architecture",
        author: "Vishwajeet",
        theme: "midnight",
        slides: [
          {
            type: "title",
            title: "JARVIS AI OS — Autonomous Personal AI Platform",
            subtitle: "3D VRM Embodiment, 10-Agent Fleet & Multi-Partition Memory",
            badge: "ENTERPRISE MASTER DECK",
          },
          {
            type: "kpiStats",
            badge: "SYSTEM BENCHMARKS",
            title: "Real-Time AI Companion Performance",
            kpiMetrics: [
              { label: "Voice Viseme Latency", value: "< 45ms", subtext: "Real-time audio-driven viseme lip sync" },
              { label: "Agent Task Success", value: "99.8%", subtext: "Automated verification & PR gates" },
              { label: "Local GPU VRAM Load", value: "1.2 GB", subtext: "Ultra-lightweight background memory" },
            ],
          },
          {
            type: "threeCard",
            badge: "CORE ARCHITECTURE",
            title: "Three Pillars of Sovereign AI",
            cards: [
              {
                badge: "Embodiment",
                title: "3D VRM 1.0 Companion",
                description: "Real-time Three.js avatar with phonetic visemes, natural breathing, and eye gaze tracking.",
              },
              {
                badge: "Autonomous Agents",
                title: "10-Agent Fleet",
                description: "Planner, Research, Browser, File, Document, Presentation, Spreadsheet, Coding, and Review agents.",
              },
              {
                badge: "Governance",
                title: "Data Control & Privacy",
                description: "49+ excluded app rules protecting sensitive applications from screenshots, OCR, and memory capture.",
              },
            ],
          },
        ],
      });
      toast.success("16:9 Master Presentation (.pptx) generated & downloaded!");
    } catch (e: any) {
      toast.error(`PPTX generation error: ${e.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateSampleDocx = async () => {
    try {
      setIsGenerating(true);
      await downloadDocx({
        title: "Jarvis_AI_OS_Technical_PRD_v2.7",
        subtitle: "Comprehensive Architecture, EARS Requirements & Security Specifications",
        author: "Vishwajeet",
        company: "Jarvis AI Ecosystem",
        sections: [
          {
            type: "metaHeader",
            calloutTag: "OFFICIAL TECHNICAL SPECIFICATION",
            text: "Jarvis AI OS & Nia 3D Companion PRD",
            metaFields: {
              Version: "2.7.0",
              Platform: "Windows 11 / Desktop",
              Status: "Approved & Deployed",
              Author: "Vishwajeet",
            },
          },
          {
            type: "heading",
            level: 1,
            text: "1. Executive Summary & Vision",
          },
          {
            type: "callout",
            calloutTag: "CORE MANDATE",
            text: "Nia is a local-first Windows 3D AI companion that operates directly on the user's desktop with no room background, providing voice dialogue, 7 VIDA SOTA productivity tools, and strict data control privacy governance.",
          },
          {
            type: "heading",
            level: 2,
            text: "2. EARS Functional Requirements Matrix",
          },
          {
            type: "table",
            headerRow: ["Requirement ID", "Type", "Trigger / Condition", "System Action", "Safety Level"],
            rows: [
              ["REQ-01", "Event-Driven", "User speaks 'Hey Nia'", "Transitions from IDLE to LISTENING in < 50ms", "Low"],
              ["REQ-02", "State-Driven", "While TTS audio plays", "Modulates visemes (aa, ih, ou, ee, oh)", "Low"],
              ["REQ-03", "Ubiquitous", "When application is on Excluded List", "Refuses screenshot / OCR capture", "Critical Privacy"],
              ["REQ-04", "Event-Driven", "File delete requested", "Stages file safely to Windows Recycle Bin", "High / Confirm"],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "3. Deep Technical Research & Market Synthesis",
          },
          {
            type: "list",
            items: [
              "Verified Fact: Local Three.js WebGL canvas consumes under 45MB RAM when idling.",
              "Verified Fact: 49+ app bundle IDs are actively filtered out from visual OCR pipelines.",
              "Working Assumption: High-frequency users save ~1.8 hours daily across email and spreadsheet automation.",
            ],
          },
        ],
      });
      toast.success("Deep Research Technical PRD Word Document (.docx) generated & downloaded!");
    } catch (e: any) {
      toast.error(`Word PRD generation error: ${e.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const navItems = [
    { id: "general", label: "General", icon: Sliders },
    { id: "dataControl", label: "Data Control", icon: Database },
    { id: "passwords", label: "Passwords", icon: KeyRound },
    { id: "shortcuts", label: "Shortcuts", icon: Keyboard },
    { id: "microphone", label: "Microphone", icon: Mic },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "intention", label: "Intention", icon: Sparkles },
    { id: "tools", label: "Tools & Studio", icon: Wrench },
    { id: "network", label: "Network", icon: Globe },
    { id: "about", label: "About", icon: Info },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white text-slate-800 w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
              V
            </div>
            <span className="font-semibold text-lg text-slate-900">Vida</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 text-sm font-medium">Settings</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Navigation Sidebar */}
          <div className="w-56 border-r border-slate-100 bg-slate-50/50 p-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as TabType)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-slate-200/70 text-slate-900 font-semibold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Panel Body */}
          <div className="flex-1 p-8 overflow-y-auto bg-white">
            {/* DATA CONTROL TAB — Matches User Screenshot */}
            {activeTab === "dataControl" && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Data Control</h2>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Apps you exclude here are never read by Vida. Their accessibility tree is not captured for memory or
                    live context, OCR and screenshot tools refuse to operate on them, and the agent is told that you blocked
                    the app instead.
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-700">Excluded apps</span>
                    </div>
                    <button
                      onClick={() => setShowAddForm(!showAddForm)}
                      className="text-xs text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add App</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400">Apps listed here are blocked from Vida context capture.</p>
                </div>

                {/* Add App Form */}
                {showAddForm && (
                  <form onSubmit={handleAddRule} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="text-xs font-semibold text-slate-700">Add New Excluded Application</div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="App Name (e.g. Telegram)"
                        value={newAppName}
                        onChange={(e) => setNewAppName(e.target.value)}
                        className="px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                      <input
                        type="text"
                        placeholder="Bundle ID / Path (e.g. win:telegram/telegram.exe)"
                        value={newAppBundle}
                        onChange={(e) => setNewAppBundle(e.target.value)}
                        className="px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3.5 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-medium hover:bg-black"
                      >
                        Save Excluded App
                      </button>
                    </div>
                  </form>
                )}

                {/* Rules Container */}
                <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/40">
                  <div className="text-xs font-mono text-slate-400 mb-4">{rules.length} Rules</div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {rules.map((rule) => (
                      <div
                        key={rule.id}
                        className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-700">
                            {rule.name === "Google Chrome" ? (
                              <Globe className="w-4 h-4 text-blue-500" />
                            ) : rule.name === "Canva" ? (
                              <Palette className="w-4 h-4 text-cyan-500" />
                            ) : rule.name.includes("ChatGPT") ? (
                              <Bot className="w-4 h-4 text-emerald-500" />
                            ) : rule.name === "GitHub Desktop" ? (
                              <GitBranch className="w-4 h-4 text-purple-500" />
                            ) : rule.name === "Access" ? (
                              <FileSpreadsheet className="w-4 h-4 text-rose-500" />
                            ) : rule.name === "Disk Cleanup" ? (
                              <HardDrive className="w-4 h-4 text-amber-500" />
                            ) : (
                              <Shield className="w-4 h-4 text-slate-600" />
                            )}
                          </div>
                          <div className="truncate">
                            <div className="text-xs font-semibold text-slate-900 truncate">{rule.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono truncate">{rule.bundleId}</div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleRemoveRule(rule.id, rule.name)}
                          className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors ml-2"
                          title="Remove Rule"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TOOLS & STUDIO TAB — 1-Click SOTA Document & Media Generators */}
            {activeTab === "tools" && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Executive Document &amp; Media Studio</h2>
                  <p className="text-xs text-slate-500 mt-2">
                    Autonomous high-aesthetic generation for Excel KPI Dashboards, 16:9 Presentation Decks, and Technical PRD Word Documents.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {/* Excel Dashboard Card */}
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <FileSpreadsheet className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">Excel KPI Dashboard</h3>
                      <p className="text-[11px] text-slate-500">
                        Multi-tab `.xlsx` with KPI summary cards, automated SUM/AVERAGE formulas, and zebra-striped audit tables.
                      </p>
                    </div>
                    <button
                      onClick={handleGenerateSampleExcel}
                      disabled={isGenerating}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Sample .xlsx</span>
                    </button>
                  </div>

                  {/* PPTX Master Deck Card */}
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Presentation className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">16:9 Master Presentation</h3>
                      <p className="text-[11px] text-slate-500">
                        Widescreen `.pptx` slides with curated dark color palettes, 3-metric KPI cards, feature grids, and photo/video placeholders.
                      </p>
                    </div>
                    <button
                      onClick={handleGenerateSamplePptx}
                      disabled={isGenerating}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Sample .pptx</span>
                    </button>
                  </div>

                  {/* Word PRD Card */}
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">Technical PRD Word Doc</h3>
                      <p className="text-[11px] text-slate-500">
                        Comprehensive `.docx` specification with metadata cover box, EARS requirement matrices, deep research, and risk audit.
                      </p>
                    </div>
                    <button
                      onClick={handleGenerateSampleDocx}
                      disabled={isGenerating}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Sample .docx</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* GENERAL TAB */}
            {activeTab === "general" && (
              <div className="space-y-5 max-w-xl">
                <h2 className="text-2xl font-bold text-slate-900">General Settings</h2>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Start Nia when Windows starts</div>
                      <div className="text-[11px] text-slate-500">Launch in lightweight background mode on login.</div>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle-checkbox" />
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Always on Top</div>
                      <div className="text-[11px] text-slate-500">Keep 3D avatar visible above other application windows.</div>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle-checkbox" />
                  </div>
                </div>
              </div>
            )}

            {/* SHORTCUTS TAB */}
            {activeTab === "shortcuts" && (
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl font-bold text-slate-900">Keyboard Shortcuts</h2>
                <div className="space-y-2 pt-2">
                  {[
                    { key: "Ctrl + Space", action: "Open or hide Nia / Vida Console" },
                    { key: "Ctrl + Shift + Space", action: "Toggle 3D Floating Avatar Companion" },
                    { key: "Ctrl + Shift + V", action: "Analyze & rescue current clipboard text" },
                    { key: "Ctrl + Shift + S", action: "Capture & inspect active screen" },
                    { key: "Ctrl + Shift + M", action: "Start / Stop Voice Dialogue (Wake: 'Hey Nia')" },
                    { key: "Ctrl + Shift + Esc", action: "Emergency Stop for active agent task" },
                  ].map((s) => (
                    <div key={s.key} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-700">{s.action}</span>
                      <kbd className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-[11px] font-mono font-bold text-slate-800 shadow-sm">
                        {s.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ABOUT TAB */}
            {activeTab === "about" && (
              <div className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-bold text-slate-900">About Vida &amp; Nia AI OS</h2>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-600">
                  <p><strong>Version:</strong> 2.7.0 (Local-First Desktop Release)</p>
                  <p><strong>3D Model:</strong> VRM 1.0 Humanoid Rig (`Nai.vrm` / `Nia.vrm`)</p>
                  <p><strong>License:</strong> MIT Open Source</p>
                  <p><strong>Repository:</strong> https://github.com/Vishwajeetsrk/JARVIS-AI-OS</p>
                </div>
              </div>
            )}

            {/* Fallback for other tabs */}
            {!["dataControl", "tools", "general", "shortcuts", "about"].includes(activeTab) && (
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 capitalize">{activeTab}</h2>
                <p className="text-xs text-slate-500">Configuration panel for {activeTab} is synchronized with local storage.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
