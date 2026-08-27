import React, { useState } from "react";
import { Copy, Check, Calendar, CheckSquare, Clock, AlertOctagon, Target } from "lucide-react";
import { generateDailyWrap, DailyWrapOutput } from "@/lib/vida-tools/dailyWrap";

export function DailyWrap() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [output, setOutput] = useState<DailyWrapOutput | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const res = generateDailyWrap({ date });
    setOutput(res);
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output.markdownReport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Daily Wrap-Up</h2>
            <p className="text-xs text-slate-400">Summarize accomplishments, open items, blockers, and tomorrow's priorities.</p>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
          VIDA SOTA #5
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3 items-center">
          <div className="flex-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Wrap Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50"
            />
          </div>
          <button
            onClick={handleGenerate}
            className="mt-6 py-2 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium rounded-lg shadow-lg shadow-emerald-600/20 flex items-center gap-2 text-sm transition-all whitespace-nowrap"
          >
            Generate Wrap Report
          </button>
        </div>

        {output && (
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/60 border border-emerald-500/30 rounded-lg p-3.5 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-emerald-400">
                  <CheckSquare className="w-4 h-4" />
                  <span>Accomplishments ({output.accomplishments.length})</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {output.accomplishments.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/60 border border-amber-500/30 rounded-lg p-3.5 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span>In-Progress Items ({output.unfinishedItems.length})</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {output.unfinishedItems.map((u, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/60 border border-rose-500/30 rounded-lg p-3.5 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-rose-400">
                  <AlertOctagon className="w-4 h-4" />
                  <span>Active Blockers</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {output.blockers.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/60 border border-blue-500/30 rounded-lg p-3.5 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-blue-400">
                  <Target className="w-4 h-4" />
                  <span>Tomorrow's Priorities</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {output.tomorrowPriorities.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">Markdown Format Ready for Standup / Notion / Slack</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied Wrap!" : "Copy Markdown"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
