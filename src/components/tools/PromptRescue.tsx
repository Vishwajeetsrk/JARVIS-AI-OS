import React, { useState } from "react";
import { Copy, Check, Wand2, Terminal } from "lucide-react";
import { generatePromptRescue, PromptRescueOutput } from "@/lib/vida-tools/promptRescue";

export function PromptRescue() {
  const [rawPrompt, setRawPrompt] = useState("Make me an AI assistant with 3D avatar and voice");
  const [category, setCategory] = useState<"coding" | "architecture" | "writing" | "general">("coding");
  const [result, setResult] = useState<PromptRescueOutput | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRescue = () => {
    const res = generatePromptRescue({ rawPrompt, category });
    setResult(res);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.improvedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
            <Wand2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Prompt Rescue</h2>
            <p className="text-xs text-slate-400">Upgrade vague queries into rigorous, structured, production-grade prompts.</p>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
          VIDA SOTA #2
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Rough / Initial Prompt
          </label>
          <textarea
            value={rawPrompt}
            onChange={(e) => setRawPrompt(e.target.value)}
            rows={3}
            className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 resize-none"
            placeholder="Type your rough idea or draft prompt..."
          />
        </div>

        <div className="flex gap-2">
          {(["coding", "architecture", "writing", "general"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-lg border text-xs capitalize transition-all ${
                category === cat
                  ? "bg-indigo-500/20 border-indigo-500/60 text-white font-medium shadow-sm shadow-indigo-500/10"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={handleRescue}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-medium rounded-lg shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 text-sm transition-all"
        >
          <Terminal className="w-4 h-4" />
          Rescue & Optimize Prompt
        </button>

        {result && (
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-lg">
                <span className="font-semibold text-indigo-400 block mb-1">Objective:</span>
                <p className="text-slate-300">{result.objective}</p>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-lg">
                <span className="font-semibold text-indigo-400 block mb-1">Context:</span>
                <p className="text-slate-300">{result.context}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Rescued Master Prompt
                </label>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Full Prompt"}
                </button>
              </div>

              <pre className="w-full bg-slate-950 border border-indigo-500/30 rounded-lg p-4 text-xs font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {result.improvedPrompt}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
