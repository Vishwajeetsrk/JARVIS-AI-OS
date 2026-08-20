import { useState } from "react";
import {
  YouTubeEngine,
  CHANNELS,
  SAMPLE_IDEAS,
  type YouTubeChannelConfig,
  type VideoIdea,
  type ThumbnailConcept,
  type VideoScript,
} from "@/lib/youtube/youtube-engine";
import {
  Video, Sparkles, TrendingUp, Layers, Copy, Check,
  Clock, Target, Compass, Film, Image, Share2, DollarSign,
  PlusCircle, RefreshCw, ChevronRight, PlayCircle, FileText
} from "lucide-react";
import { toast } from "sonner";

export function YouTubeGrowthHub() {
  const [selectedChannelId, setSelectedChannelId] = useState<"vishwajeetsrk" | "tinylifehacks">("vishwajeetsrk");
  const [activeSubTab, setActiveSubTab] = useState<"ideas" | "titles" | "script" | "multiply" | "roadmap">("ideas");
  const [videoTopic, setVideoTopic] = useState("I Built My Own JARVIS AI Assistant with a 3D Avatar");
  const [selectedIdea, setSelectedIdea] = useState<VideoIdea>(SAMPLE_IDEAS[0]);
  const [script, setScript] = useState<VideoScript>(YouTubeEngine.generateShortsScript("Stop Doing This Manually in Excel!"));
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const channel = YouTubeEngine.getChannelConfig(selectedChannelId);
  const titles = YouTubeEngine.generateTitleOptions(videoTopic);
  const thumbnails = YouTubeEngine.generateThumbnailConcepts(videoTopic);
  const multiplied = YouTubeEngine.multiplyContent(videoTopic);

  const handleCopy = (text: string, sectionName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    toast.success(`Copied ${sectionName} to clipboard!`);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg lg:p-6">
      {/* 1. Header & Channel Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500 shadow-sm">
            <PlayCircle className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-bold text-foreground">
                YouTube Growth, Content & Income Engine
              </h3>
              <span className="rounded-full bg-red-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-red-400">
                PRO ACTIVE
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Scriptwriting, Title & Thumbnail Research, Content Multiplication & 30-Day Strategy
            </p>
          </div>
        </div>

        {/* Channel Switcher Pills */}
        <div className="flex items-center gap-1.5 rounded-xl border border-border bg-surface p-1 text-xs">
          <button
            onClick={() => setSelectedChannelId("vishwajeetsrk")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-semibold transition-all ${
              selectedChannelId === "vishwajeetsrk"
                ? "bg-red-500 text-white shadow-md shadow-red-500/20 scale-105"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Video className="h-3.5 w-3.5" /> VishwaJeetSrK ({CHANNELS.vishwajeetsrk.subscribers} subs)
          </button>
          <button
            onClick={() => setSelectedChannelId("tinylifehacks")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-semibold transition-all ${
              selectedChannelId === "tinylifehacks"
                ? "bg-red-500 text-white shadow-md shadow-red-500/20 scale-105"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" /> TinyLifeHacks ({CHANNELS.tinylifehacks.subscribers} subs)
          </button>
        </div>
      </div>

      {/* Channel Strategy Banner */}
      <div className="mt-4 rounded-xl border border-red-500/20 bg-red-950/10 p-3.5 text-xs text-slate-300">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold text-red-400">🎯 Channel Positioning:</span>
          <span className="font-mono text-[10px] text-muted-foreground">Cadence: {channel.cadence}</span>
        </div>
        <p className="mt-1 text-slate-300">{channel.positioning}</p>
        <p className="mt-0.5 text-[11px] text-slate-400">👥 <strong>Target Audience:</strong> {channel.targetAudience}</p>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="mt-4 flex flex-wrap items-center gap-1 border-b border-border pb-2 text-xs">
        <button
          onClick={() => setActiveSubTab("ideas")}
          className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
            activeSubTab === "ideas" ? "bg-primary text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          💡 Weekly Ideas (10 Shorts + 5 Long)
        </button>
        <button
          onClick={() => setActiveSubTab("titles")}
          className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
            activeSubTab === "titles" ? "bg-cyan-500 text-slate-950 font-bold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          🏷️ Titles & 3 Thumbnails
        </button>
        <button
          onClick={() => setActiveSubTab("script")}
          className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
            activeSubTab === "script" ? "bg-amber-500 text-slate-950 font-bold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          📜 Scene Script Studio
        </button>
        <button
          onClick={() => setActiveSubTab("multiply")}
          className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
            activeSubTab === "multiply" ? "bg-purple-500 text-white font-bold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          🔄 Multiply 1 Idea ➔ 5 Formats
        </button>
        <button
          onClick={() => setActiveSubTab("roadmap")}
          className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
            activeSubTab === "roadmap" ? "bg-emerald-500 text-slate-950 font-bold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          📈 30-Day Growth & Revenue Plan
        </button>
      </div>

      {/* TAB 1: Weekly Video Ideas */}
      {activeSubTab === "ideas" && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Curated Video Pipeline for {channel.name}
            </h4>
            <span className="font-mono text-[10px] text-muted-foreground">Ranked by Priority & Audience Fit</span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {SAMPLE_IDEAS.filter((i) => i.channelId === selectedChannelId).map((idea) => (
              <div
                key={idea.id}
                onClick={() => {
                  setSelectedIdea(idea);
                  setVideoTopic(idea.title);
                  toast.success(`Selected topic: ${idea.title}`);
                }}
                className="group relative flex cursor-pointer flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-red-500/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-red-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-red-400">
                      {idea.format} • {idea.pillar}
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.2 font-mono text-[10px] text-emerald-400">
                      {idea.priority} Priority
                    </span>
                  </div>

                  <h5 className="mt-2.5 font-display text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {idea.title}
                  </h5>

                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    💡 <strong className="text-slate-300">Problem Solved:</strong> {idea.problemSolved}
                  </p>

                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    🎯 <strong className="text-slate-300">Why Someone Clicks:</strong> {idea.clickTrigger}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-2 text-[10px] text-muted-foreground">
                  <span>⏱️ Production: {idea.estimatedProductionTime}</span>
                  <span className="text-emerald-400 font-medium">💰 {idea.monetizationAngle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Titles & Thumbnail Concepts */}
      {activeSubTab === "titles" && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="text-xs font-semibold text-foreground">Active Video Topic:</label>
            <input
              type="text"
              value={videoTopic}
              onChange={(e) => setVideoTopic(e.target.value)}
              className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-xs text-foreground focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Title Options */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <h5 className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5 border-b border-border pb-2">
                🏷️ 4 Categorized Title Strategies
              </h5>
              <div className="mt-3 space-y-2.5">
                {titles.map((t, idx) => (
                  <div key={idx} className="rounded-lg border border-border/60 bg-card p-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-primary">{t.type}</span>
                      <button
                        onClick={() => handleCopy(t.title, `Title ${idx + 1}`)}
                        className="text-[10px] text-muted-foreground hover:text-foreground"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="mt-1 font-semibold text-white">{t.title}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400">💡 {t.reasoning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Thumbnail Concepts */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <h5 className="font-mono text-xs font-bold text-amber-400 flex items-center gap-1.5 border-b border-border pb-2">
                🖼️ 3 Mobile-Optimized Thumbnail Concepts
              </h5>
              <div className="mt-3 space-y-2.5">
                {thumbnails.map((thumb) => (
                  <div key={thumb.id} className="rounded-lg border border-border/60 bg-card p-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-amber-400">Concept #{thumb.id}</span>
                      <span className="rounded bg-amber-500/10 px-1.5 py-0.5 font-mono text-[9px] text-amber-300">
                        TEXT: "{thumb.thumbnailText}"
                      </span>
                    </div>
                    <p className="mt-1 text-slate-300"><strong>Visual:</strong> {thumb.mainVisual}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400"><strong>Subject:</strong> {thumb.subjectExpression}</p>
                    <p className="mt-0.5 text-[10px] text-cyan-400"><strong>Contrast:</strong> {thumb.contrastColor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Scene Script Studio */}
      {activeSubTab === "script" && (
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2">
            <div>
              <span className="font-mono text-xs font-bold text-amber-400">{script.format} Production Script ({script.targetDuration})</span>
              <h4 className="text-sm font-bold text-white">{script.videoTitle}</h4>
            </div>
            <button
              onClick={() => handleCopy(JSON.stringify(script, null, 2), "Full Script JSON")}
              className="flex items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <Copy className="h-3 w-3" /> Copy Script
            </button>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs">
              <span className="font-mono font-bold text-amber-400">⚡ 0-2s Hook:</span>
              <p className="mt-1 text-white font-medium">"{script.hook}"</p>
            </div>

            <div className="space-y-2">
              <h5 className="font-mono text-xs font-bold text-muted-foreground">Scene Timeline Breakdown:</h5>
              {script.scenes.map((sc) => (
                <div key={sc.sceneNumber} className="rounded-lg border border-border bg-card p-3 text-xs">
                  <div className="flex items-center justify-between font-mono text-[10px] text-cyan-400">
                    <span>Scene {sc.sceneNumber}</span>
                    <span>⏱️ {sc.timeSlot}</span>
                  </div>
                  <p className="mt-1 text-slate-200">🗣️ <strong>Voiceover:</strong> "{sc.voiceover}"</p>
                  <p className="mt-1 text-slate-400">🎬 <strong>Visual / Screen:</strong> {sc.visualAction}</p>
                  {sc.onScreenText && (
                    <p className="mt-1 text-amber-300 font-mono text-[10px]">🔤 <strong>On-Screen Text:</strong> {sc.onScreenText}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-card p-3 text-xs">
              <span className="font-mono font-bold text-emerald-400">📝 SEO Description Snippet:</span>
              <p className="mt-1 text-slate-300 font-mono text-[11px] leading-relaxed">{script.descriptionSnippet}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Content Multiplication Tool */}
      {activeSubTab === "multiply" && (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 p-3.5 text-xs text-slate-300">
            <h4 className="font-display text-sm font-bold text-purple-300 flex items-center gap-1.5">
              <Share2 className="h-4 w-4" /> The 1 ➔ 5 Content Multiplication Strategy
            </h4>
            <p className="mt-1 text-slate-400">
              Record 1 long-form YouTube video, and Jarvis automatically generates 3 Shorts, 1 LinkedIn post, and 1 Technical Tutorial Blog!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Derived Shorts */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <h5 className="font-mono text-xs font-bold text-purple-400 border-b border-border pb-2">
                🎬 3 High-Retention Derived Shorts
              </h5>
              <div className="mt-3 space-y-2">
                {multiplied.shorts.map((s, idx) => (
                  <div key={idx} className="rounded-lg border border-border bg-card p-2.5 text-xs font-medium text-slate-200">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* LinkedIn Post & Blog */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-mono text-xs font-bold text-purple-400">💼 LinkedIn & Tech Blog Post</span>
                <button
                  onClick={() => handleCopy(multiplied.linkedInPost, "LinkedIn Post")}
                  className="text-[10px] text-muted-foreground hover:text-foreground"
                >
                  Copy LinkedIn
                </button>
              </div>
              <pre className="mt-3 max-h-60 overflow-y-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-300">
                {multiplied.linkedInPost}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: 30-Day Growth & Revenue Plan */}
      {activeSubTab === "roadmap" && (
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface p-3.5">
              <span className="font-mono text-[10px] uppercase text-muted-foreground">Month 1 Goal (VishwaJeetSrK)</span>
              <h4 className="mt-1 text-lg font-bold text-foreground">500 Subscribers</h4>
              <p className="mt-1 text-[10px] text-slate-400">4 Long-form + 12 Shorts on JARVIS AI & Full-Stack</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3.5">
              <span className="font-mono text-[10px] uppercase text-muted-foreground">Month 1 Goal (TinyLifeHacks)</span>
              <h4 className="mt-1 text-lg font-bold text-foreground">250 Subscribers</h4>
              <p className="mt-1 text-[10px] text-slate-400">16 High-Impact Excel & Tech Shorts</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3.5">
              <span className="font-mono text-[10px] uppercase text-muted-foreground">Income Stream 1</span>
              <h4 className="mt-1 text-lg font-bold text-emerald-400">Digital Product Packs</h4>
              <p className="mt-1 text-[10px] text-slate-400">Excel shortcuts template + UI component packs</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3.5">
              <span className="font-mono text-[10px] uppercase text-muted-foreground">Income Stream 2</span>
              <h4 className="mt-1 text-lg font-bold text-cyan-400">Client Automations</h4>
              <p className="mt-1 text-[10px] text-slate-400">Salesforce & Razorpay pipeline service leads</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
