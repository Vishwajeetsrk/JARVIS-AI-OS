import React, { useState } from "react";
import { Copy, Check, Sparkles, MessageSquare } from "lucide-react";
import { generateReplyRescue, ReplyTone } from "@/lib/vida-tools/replyRescue";

export function ReplyRescue() {
  const [incoming, setIncoming] = useState("Can you please send me an update on the Nia 3D avatar integration and when we will have it ready for review?");
  const [context, setContext] = useState("Nia VRM 1.0 integration is complete and tested with Three.js");
  const [tone, setTone] = useState<ReplyTone>("professional");
  const [editedReply, setEditedReply] = useState("");
  const [points, setPoints] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const tones: { id: ReplyTone; label: string; desc: string }[] = [
    { id: "professional", label: "Professional", desc: "Polite, structured, and clear" },
    { id: "friendly", label: "Friendly", desc: "Warm, enthusiastic, and collaborative" },
    { id: "concise", label: "Concise", desc: "Brief, high-impact, zero fluff" },
    { id: "persuasive", label: "Persuasive", desc: "Compelling, value-oriented" },
    { id: "apologetic", label: "Apologetic", desc: "Courteous, accountable, solutions-first" },
    { id: "direct", label: "Direct", desc: "Straightforward and boundary-setting" },
  ];

  const handleGenerate = () => {
    const res = generateReplyRescue({ incomingMessage: incoming, contextNote: context, tone });
    setEditedReply(res.generatedReply);
    setPoints(res.keyPointsCovered);
    setIsGenerated(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Reply Rescue</h2>
            <p className="text-xs text-slate-400">Craft context-aware, calibrated replies across 6 distinct communication tones.</p>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20 font-medium">
          VIDA SOTA #1
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Incoming Message / Email
          </label>
          <textarea
            value={incoming}
            onChange={(e) => setIncoming(e.target.value)}
            rows={3}
            className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-pink-500/50 resize-none"
            placeholder="Paste incoming message here..."
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Key Context / Facts to Include
          </label>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-pink-500/50"
            placeholder="e.g. Completed today, ready for deployment"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Select Desired Tone
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {tones.map((t) => (
              <button
                key={t.id}
                onClick={() => setTone(t.id)}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  tone === t.id
                    ? "bg-pink-500/20 border-pink-500/60 text-white shadow-sm shadow-pink-500/10"
                    : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className="text-xs font-medium">{t.label}</div>
                <div className="text-[10px] text-slate-500 truncate">{t.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-medium rounded-lg shadow-lg shadow-pink-600/20 flex items-center justify-center gap-2 text-sm transition-all"
        >
          <Sparkles className="w-4 h-4" />
          Generate Rescued Reply
        </button>

        {isGenerated && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                Generated Reply (Editable)
              </label>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>

            <textarea
              value={editedReply}
              onChange={(e) => setEditedReply(e.target.value)}
              rows={4}
              className="w-full bg-slate-950 border border-pink-500/30 rounded-lg p-3 text-sm text-slate-100 focus:outline-none focus:border-pink-500/60 resize-none font-sans"
            />

            {points.length > 0 && (
              <div className="bg-slate-950/40 border border-slate-800 rounded-lg p-3">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Points Covered:
                </div>
                <ul className="text-xs text-slate-400 space-y-1">
                  {points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
