import React, { useState } from "react";
import { Copy, Check, TrendingUp, ShieldAlert, BookOpen, Layers } from "lucide-react";
import { generateMarketResearch, MarketResearchOutput } from "@/lib/vida-tools/marketResearch";

export function MarketResearch() {
  const [topic, setTopic] = useState("Embodied 3D AI Companions on Edge Desktops");
  const [focusArea, setFocusArea] = useState<"competitors" | "financials" | "technology_trends" | "swot">("technology_trends");
  const [result, setResult] = useState<MarketResearchOutput | null>(null);
  const [copied, setCopied] = useState(false);

  const handleResearch = () => {
    const res = generateMarketResearch({ topic, focusArea });
    setResult(res);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.markdownBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Investment & Market Research</h2>
            <p className="text-xs text-slate-400">Structured intelligence separating facts, estimates, assumptions, and risks.</p>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
          VIDA SOTA #6
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Research Subject / Technology
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div className="flex gap-2">
          {(["technology_trends", "financials", "competitors", "swot"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFocusArea(cat)}
              className={`px-3 py-1.5 rounded-lg border text-xs capitalize transition-all ${
                focusArea === cat
                  ? "bg-cyan-500/20 border-cyan-500/60 text-white font-medium shadow-sm shadow-cyan-500/10"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {cat.replace("_", " ")}
            </button>
          ))}
        </div>

        <button
          onClick={handleResearch}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-lg shadow-lg shadow-cyan-600/20 flex items-center justify-center gap-2 text-sm transition-all"
        >
          <BookOpen className="w-4 h-4" />
          Execute Research Synthesis
        </button>

        {result && (
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{result.disclaimer}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/60 border border-cyan-500/30 rounded-lg p-3.5 space-y-2">
                <span className="font-semibold text-cyan-400 block">{result.verifiedFacts.title}</span>
                <ul className="space-y-1 text-slate-300">
                  {result.verifiedFacts.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/60 border border-purple-500/30 rounded-lg p-3.5 space-y-2">
                <span className="font-semibold text-purple-400 block">{result.marketEstimates.title}</span>
                <ul className="space-y-1 text-slate-300">
                  {result.marketEstimates.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-purple-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3.5 space-y-2">
                <span className="font-semibold text-slate-300 block">{result.workingAssumptions.title}</span>
                <ul className="space-y-1 text-slate-400">
                  {result.workingAssumptions.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/60 border border-rose-500/30 rounded-lg p-3.5 space-y-2">
                <span className="font-semibold text-rose-400 block">{result.identifiedRisks.title}</span>
                <ul className="space-y-1 text-slate-300">
                  {result.identifiedRisks.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>{result.labeledSources.length} Verified Citations Attached</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied Report!" : "Copy Research Brief"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
