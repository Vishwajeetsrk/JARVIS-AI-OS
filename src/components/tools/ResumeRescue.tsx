import React, { useState } from "react";
import { Copy, Check, FileText, Award, Download } from "lucide-react";
import { generateResumeRescue, ResumeRescueOutput } from "@/server/tools/resumeRescue";

export function ResumeRescue() {
  const [name, setName] = useState("Vishwajeet");
  const [role, setRole] = useState("Lead AI Systems Architect");
  const [skillsInput, setSkillsInput] = useState("TypeScript, React, Three.js, VRM 1.0, Node.js, Web Audio API, Rust");
  const [exp, setExp] = useState("Architected autonomous 3D desktop AI companions with real-time lip-sync, memory graphs, and modular agent execution engines.");
  const [result, setResult] = useState<ResumeRescueOutput | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const skills = skillsInput.split(",").map((s) => s.trim()).filter(Boolean);
    const res = generateResumeRescue({
      fullName: name,
      targetRole: role,
      skills,
      experienceSummary: exp,
    });
    setResult(res);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!result) return;
    const blob = new Blob([result.markdownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.toLowerCase().replace(/\s+/g, "_")}_resume_rescued.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Resume Rescue</h2>
            <p className="text-xs text-slate-400">Generate structured, ATS-optimized resume sections without fabricated credentials.</p>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 font-medium">
          VIDA SOTA #3
        </span>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-500/50"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Target Role
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-500/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Key Verified Skills (Comma-separated)
          </label>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Verified Experience Facts & Metrics
          </label>
          <textarea
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            rows={3}
            className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-teal-500/50 resize-none"
            placeholder="List your real responsibilities and achievements..."
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-medium rounded-lg shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm transition-all"
        >
          <Award className="w-4 h-4" />
          Generate ATS Resume Profile
        </button>

        {result && (
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs flex items-center gap-2">
              <span className="font-semibold">Authenticity Guarantee:</span>
              <span>{result.generatedSuggestionsNotice}</span>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                ATS-Optimized Preview
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 text-xs text-teal-300 hover:text-teal-100 bg-teal-950/60 px-2.5 py-1 rounded-md border border-teal-700/50 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export .MD
                </button>
              </div>
            </div>

            <pre className="w-full bg-slate-950 border border-teal-500/30 rounded-lg p-4 text-xs font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {result.markdownContent}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
