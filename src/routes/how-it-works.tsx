import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import { Sparkles, Globe, Layers, ArrowLeft, ArrowRight, ExternalLink, Monitor, Smartphone, CheckCircle2, Wand2, MessageSquare, FileText, Trash2, Calendar, TrendingUp, Presentation, Bot, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "Viskey & Vida — How It Works & 100 SOTA Cases" },
      { name: "description", content: "Official Vida & Viskey interactive experience, 100 State-of-the-Art use cases, and architecture." },
    ],
  }),
});

const STEPS = [
  { n: "01", t: "Capture", d: "Your request enters through any shell — 3D VRM companion, web console, desktop app, or voice." },
  { n: "02", t: "Route", d: "The Intent Classifier analyzes risk and delegates to one of 10 specialized autonomous agents." },
  { n: "03", t: "Recall", d: "The 4-Tier Memory Vault retrieves relevant past decisions and preferences with zero context loss." },
  { n: "04", t: "Execute", d: "Invokes SOTA productivity tools, local desktop actions, or generative pipelines under safety permissions." },
  { n: "05", t: "Verify", d: "The Review and Testing agents cross-verify outputs before presenting or exporting artifacts." },
  { n: "06", t: "Remember", d: "Confirmed facts and deliverables are durably persisted to your personal knowledge graph." },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"partner" | "sota" | "elements" | "architecture">("partner");

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <MarketingNav />

      {/* Hero Header & Mode Switcher */}
      <div className="border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-md px-6 py-4 sticky top-16 z-30 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">Desktop AI Agent &amp; OS</div>
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Viskey &amp; Vida — Your Proactive AI Partner</span>
          </h1>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
          <button
            onClick={() => setActiveTab("partner")}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "partner"
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🌐 Proactive Partner Page
          </button>
          <button
            onClick={() => setActiveTab("sota")}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "sota"
                ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏆 100 SOTA Cases
          </button>
          <button
            onClick={() => setActiveTab("elements")}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "elements"
                ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ✨ 20 Web Elements
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "architecture"
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏛️ 6-Phase Pipeline
          </button>
        </div>
      </div>

      {/* Main Interactive Content */}
      <main className="flex-1 flex flex-col">
        {activeTab === "partner" && (
          <div style={{ height: "calc(100vh - 140px)" }} className="w-full overflow-hidden">
            <iframe
              src="/preset-sites/viskey-vida/index.html"
              title="Viskey & Vida Proactive AI Partner"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        )}

        {activeTab === "sota" && (
          <div style={{ height: "calc(100vh - 140px)" }} className="w-full overflow-hidden">
            <iframe
              src="/preset-sites/vida-sota-cases/index.html"
              title="Conquer 100 SOTA Use Cases"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        )}

        {activeTab === "elements" && (
          <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Interactive Web &amp; 3D Elements Sandbox</h2>
              <p className="text-xs text-slate-400 mt-1">
                20 animated components and UI experiments extracted from your Web Elements project library.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "3D Carousel", path: "/web-elements/3d-carousel/dist/index.html", tag: "3D Visual" },
                { name: "Circular Image Slider", path: "/web-elements/circular-image-slider/dist/index.html", tag: "Slider" },
                { name: "Slicebox 3D Transition", path: "/web-elements/Slicebox/index.html", tag: "3D FX" },
                { name: "Wave Circle Animation", path: "/web-elements/wave circle/index.html", tag: "Canvas FX" },
                { name: "Eye Preloader", path: "/web-elements/eye preloader/index.html", tag: "Preloader" },
                { name: "Bounce Loader", path: "/web-elements/bounce loader/index.html", tag: "Loader" },
                { name: "Flip Loader", path: "/web-elements/flip loader/index.html", tag: "Loader" },
                { name: "Path Text Hover Effect", path: "/web-elements/path text hover effect/index.html", tag: "Typography" },
                { name: "Image Zoom Animation", path: "/web-elements/image zoom animation/index.html", tag: "Hover FX" },
              ].map((elem) => (
                <div key={elem.name} className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
                  <div className="p-3 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                    <span className="text-xs font-semibold text-white">{elem.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">{elem.tag}</span>
                  </div>
                  <div className="h-56 bg-black">
                    <iframe src={elem.path} title={elem.name} className="w-full h-full border-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="mx-auto max-w-5xl px-6 py-16 space-y-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">Master Blueprint</div>
              <h2 className="font-display text-4xl font-semibold md:text-5xl text-white mt-1">How Vida &amp; Jarvis AI OS Works.</h2>
              <p className="mt-4 max-w-2xl text-base text-slate-400">
                Six trusted phases connect your 3D avatar companion, 10-agent fleet, 4-tier memory vault, and desktop automation tools.
              </p>
            </div>

            <ol className="space-y-4">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:grid-cols-[auto_1fr] md:items-center"
                >
                  <span className="font-mono text-4xl font-semibold text-cyan-400 md:text-5xl">{s.n}</span>
                  <div>
                    <div className="font-display text-xl text-white">{s.t}</div>
                    <p className="mt-1 text-sm text-slate-400">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </main>

      {/* Only show footer when not in iframe tabs */}
      {(activeTab === "elements" || activeTab === "architecture") && <MarketingFooter />}
    </div>
  );
}
