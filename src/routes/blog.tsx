import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import {
  BookOpen, Search, Sparkles, Users, Mic, Layers, BarChart3, Database,
  ArrowRight, Copy, Check, Terminal, Code2, Play, ExternalLink, Tag,
  Clock, Calendar, ChevronRight, Zap, Globe, Smartphone, ShieldCheck
} from "lucide-react";
import { Earth3DGlobe } from "@/components/ui/earth-3d-globe";
import { BookFlipAnimation } from "@/components/ui/book-flip-animation";

export const Route = createFileRoute("/blog")({
  component: BlogDocsPortal,
  head: () => ({
    meta: [
      { title: "Blog & Interactive Documentation — JARVIS AI OS" },
      {
        name: "description",
        content: "Interactive guides, technical documentation, live component sandboxes, and architectural deep-dives for JARVIS AI OS.",
      },
    ],
  }),
});

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: "Bot Fleet" | "Voice Cloning" | "App Builder" | "3D Motion" | "Architecture";
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  demoType?: "earth" | "book" | "voice" | "fleet" | "app";
  content: string[];
}

const ARTICLES: Article[] = [
  {
    id: "bot-fleet-architecture",
    title: "Orchestrating an 8-Bot Autonomous Workforce: The Chief of Staff Pattern",
    subtitle: "How autonomous agent roles execute scheduled routines, triage priorities, and prevent dropped threads.",
    category: "Bot Fleet",
    readTime: "6 min read",
    date: "Aug 27, 2026",
    author: "Vishwajeet & JARVIS AI Team",
    tags: ["Chief of Staff", "Sales Outbound", "Multi-Agent", "Routines"],
    summary: "Traditional AI assistants wait for user prompts. JARVIS Bot Fleet operates autonomously across 8 specialized roles with background cron routines and tool integration.",
    demoType: "fleet",
    codeSnippet: {
      language: "typescript",
      code: `// Trigger autonomous Chief of Staff daily priority scan
import { triggerChiefOfStaffRoutine } from "@/lib/bot-fleet.functions";

const briefing = await triggerChiefOfStaffRoutine({
  sources: ["slack", "gmail", "calendar", "notion"],
  priorityThreshold: "high",
  autoFollowUp: true,
});

console.log("Morning Briefing Generated:", briefing.digest);
console.log("Active Bottlenecks Resolved:", briefing.resolvedCount);`,
    },
    content: [
      "In enterprise workflows, context switching between email, Slack, calendar, and task managers consumes up to 40% of productive hours. JARVIS solves this with the Chief of Staff orchestrator.",
      "The Chief of Staff runs continuous background scans across connected tools, extracts actionable priorities using Gemini 2.0 Flash, and delegates specialized workloads to 7 sibling bot personas (Sales Outbound, Talent Scout, Paid Media, Expense Manager, Product Performance, Bug Repro, and Account Health).",
      "Each bot maintains its own system prompt, tool constraints, and execution logs, ensuring strict security guardrails with zero hallucinated actions.",
    ],
  },
  {
    id: "voice-cloning-sub-second",
    title: "Sub-Second Speech Synthesis & 2-Minute Custom Voice Cloning",
    subtitle: "Cloning timbre, pitch, and prosody across 25+ languages from a 120s reference audio sample.",
    category: "Voice Cloning",
    readTime: "8 min read",
    date: "Aug 27, 2026",
    author: "Vishwajeet",
    tags: ["Real-Time Voice", "Voice Cloning", "TTS", "SIP Telephony"],
    summary: "Explore how JARVIS achieves <400ms time-to-first-audio latency and manages up to 30 custom voice profiles with emotional prosody tags.",
    demoType: "voice",
    codeSnippet: {
      language: "typescript",
      code: `// Clone a custom voice profile from 120s reference audio
import { cloneCustomVoice, synthesizeClonedSpeech } from "@/lib/voice-cloning.functions";

const voiceProfile = await cloneCustomVoice({
  name: "Vishwajeet Custom",
  language: "en-US",
  referenceAudioUrl: "https://storage.supabase.co/custom-voices/sample.wav",
  prosodyTag: "warm",
});

// Synthesize with <400ms latency
const audioBuffer = await synthesizeClonedSpeech({
  voiceId: voiceProfile.voiceId,
  text: "<emotion=warm> Good morning! All systems are ready.",
});`,
    },
    content: [
      "Real-time voice AI requires sub-second latency to prevent awkward conversational pauses. JARVIS achieves <400ms response time using streaming WebSockets directly to the audio engine.",
      "With the 2-Minute Custom Voice Cloner, users can record or upload a 90–120s audio clip. JARVIS extracts vocal acoustic embeddings and provisions an 8-character voice ID (`vx_jarvis`) supporting 25+ languages with emotional prosody modifiers (`warm`, `friendly`, `authoritative`, `energetic`).",
      "Direct SIP telephony bridges incoming phone calls with automated transcriptions and HIPAA/SOC-2 privacy redaction.",
    ],
  },
  {
    id: "universal-app-builder-guide",
    title: "Universal App Builder: Full-Stack SaaS, Mobile Apps & Chrome Extensions in 60s",
    subtitle: "Autonomous code generation, live Monaco editing, and 1-click ZIP export.",
    category: "App Builder",
    readTime: "10 min read",
    date: "Aug 27, 2026",
    author: "JARVIS AI OS Engineering",
    tags: ["SaaS Forge", "React Native", "Expo", "Chrome Extension"],
    summary: "A comprehensive guide on scaffolding modern applications with TanStack Start, Expo Router, and Manifest V3 extensions directly from natural language prompts.",
    demoType: "app",
    codeSnippet: {
      language: "typescript",
      code: `// Universal App Forge Scaffolding Definition
export interface GeneratedAppSpec {
  templateId: "saas-starter" | "mobile-expo" | "chrome-ext";
  framework: "TanStack Start" | "React Native 0.74" | "Manifest V3";
  database: "Supabase PostgreSQL";
  styling: "Tailwind CSS + Glassmorphism";
  offlineSync: boolean;
  exportedFiles: { path: string; content: string }[];
}`,
    },
    content: [
      "Building a production SaaS or mobile app typically requires hours of boilerplate configuration: authentication, database tables, routing, and styling tokens.",
      "The Universal App Builder generates full multi-file directory structures in real time, opens them in a side-by-side Monaco Code Studio with multi-tab support, and simulates live client rendering.",
      "Exports are packaged into clean ZIP files with complete `package.json`, TypeScript definitions, and deployment scripts for Vercel, Supabase, and App Stores.",
    ],
  },
  {
    id: "3d-motion-ui-components",
    title: "3D Motion UI Laboratory: Interactive Earth Globes & Book Flip Animations",
    subtitle: "Leveraging Three.js, CSS 3D Transforms, and Framer Motion for high-impact web design.",
    category: "3D Motion",
    readTime: "5 min read",
    date: "Aug 27, 2026",
    author: "Frontend Design Studio",
    tags: ["Three.js", "WebGL", "Book Flip", "Aceternity UI"],
    summary: "Interactive preview and implementation breakdown for WebGL Earth 3D Globes, 3D Book Page Flip components, and dynamic pricing calculators.",
    demoType: "earth",
    codeSnippet: {
      language: "tsx",
      code: `// 3D Earth Globe component with Three.js & orbital rotation
import { Earth3DGlobe } from "@/components/ui/earth-3d-globe";

export function HeroGlobeShowcase() {
  return (
    <div className="h-[360px] w-full rounded-2xl bg-black/60 p-4">
      <Earth3DGlobe interactive={true} autoRotate={true} />
    </div>
  );
}`,
    },
    content: [
      "Static web applications no longer capture user engagement. Modern interfaces require dynamic 3D depth, fluid micro-interactions, and visual storytelling.",
      "JARVIS AI OS provides a dedicated 3D Motion Components Hub featuring WebGL Three.js Earth Globes with live location pins and realistic orbital velocity.",
      "The 3D Book Flip Animation utilizes pure CSS 3D perspective transforms with realistic shadows and page curvature, making documentation interactive and intuitive.",
    ],
  },
  {
    id: "supabase-vector-memory-engine",
    title: "4-Tier Neural Memory: Vector Recall on Supabase PostgreSQL Cloud",
    subtitle: "Persistent memory across Working, Episodic, Semantic, and Procedural memory tiers.",
    category: "Architecture",
    readTime: "7 min read",
    date: "Aug 27, 2026",
    author: "Architecture & Data Team",
    tags: ["Supabase", "pgvector", "PostgreSQL", "RLS"],
    summary: "How JARVIS maintains persistent memory across chat sessions, desktop companions, and autonomous bot routines without context limits.",
    demoType: "fleet",
    codeSnippet: {
      language: "sql",
      code: `-- Semantic Vector Memory Recall Table
CREATE TABLE memory_recall (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    memory_type TEXT NOT NULL, -- 'episodic', 'semantic', 'procedural'
    content TEXT NOT NULL,
    embedding VECTOR(1536),
    relevance_score FLOAT DEFAULT 1.0,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX ON memory_recall USING ivfflat (embedding vector_cosine_ops);`,
    },
    content: [
      "Standard chatbots lose context the moment a session expires. JARVIS AI OS stores user preferences, project knowledge, and execution logs in a 4-tier neural memory vault.",
      "Using Supabase Cloud PostgreSQL with pgvector embeddings, JARVIS performs semantic similarity search with cosine distance queries in under 20ms.",
      "Row Level Security (RLS) guarantees that user memories, API keys, and sensitive documents remain isolated with zero cross-tenant leakage.",
    ],
  },
];

export function BlogDocsPortal() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Article>(ARTICLES[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ["All", "Bot Fleet", "Voice Cloning", "App Builder", "3D Motion", "Architecture"];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <MarketingNav />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-16 pb-12 border-b border-slate-800/80 bg-gradient-to-b from-[#090C18] via-[#06080F] to-[#06080F]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(168,85,247,0.18),rgba(0,0,0,0))]" />
        
        <div className="relative mx-auto max-w-7xl px-6 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 text-xs text-purple-300 backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold uppercase tracking-wider font-mono">Interactive Documentation &amp; Technical Blog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Knowledge Base &amp; <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Live Component Sandboxes
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            Deep-dive tutorials, system architectures, interactive 3D UI labs, and ready-to-use production code snippets for JARVIS AI OS.
          </p>

          {/* Search Bar & Category Filters */}
          <div className="max-w-3xl mx-auto space-y-4 pt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, guides, bot roles, tools, and code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-800 bg-slate-950/80 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 backdrop-blur-xl shadow-lg"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400"
                      : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Reader Grid */}
      <section className="py-12 flex-1">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Article List */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Articles ({filteredArticles.length})
                </span>
                <span className="text-[11px] text-purple-400 font-medium">Click to read</span>
              </div>

              <div className="space-y-3 max-h-[85vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                {filteredArticles.map((article) => {
                  const isSelected = activeArticle.id === article.id;
                  return (
                    <div
                      key={article.id}
                      onClick={() => setActiveArticle(article)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? "border-purple-500/60 bg-purple-950/20 shadow-lg shadow-purple-950/50"
                          : "border-slate-800/80 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/40"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 text-purple-300 font-semibold border border-purple-500/20">
                          {article.category}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className={`text-sm font-bold leading-snug ${isSelected ? "text-white" : "text-slate-200"}`}>
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {article.tags.map((t) => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900/80 text-slate-400 font-mono">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Article View */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
                {/* Article Header */}
                <div className="space-y-4 border-b border-slate-800/80 pb-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono font-bold">
                      {activeArticle.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" /> {activeArticle.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-500" /> {activeArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {activeArticle.title}
                  </h2>

                  <p className="text-sm text-purple-300 font-medium leading-relaxed">
                    {activeArticle.subtitle}
                  </p>
                </div>

                {/* Live Embedded Component Sandbox (If Applicable) */}
                {activeArticle.demoType && (
                  <div className="rounded-2xl border border-purple-500/30 bg-purple-950/10 p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono uppercase text-purple-300 font-bold">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                        Live Interactive Sandbox
                      </span>
                      <span className="text-[10px] text-slate-400">Real-Time Component Demo</span>
                    </div>

                    {activeArticle.demoType === "earth" && (
                      <div className="rounded-xl border border-slate-800 bg-black/60 p-2 overflow-hidden">
                        <Earth3DGlobe />
                      </div>
                    )}

                    {activeArticle.demoType === "book" && (
                      <div className="rounded-xl border border-slate-800 bg-black/60 p-2 overflow-hidden">
                        <BookFlipAnimation />
                      </div>
                    )}

                    {activeArticle.demoType === "voice" && (
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-3">
                        <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                          <span>Realtime Voice Waveform</span>
                          <span>Latency: 395ms</span>
                        </div>
                        <div className="flex items-center gap-2 h-10 px-4 rounded-lg bg-black/80">
                          {[12, 28, 45, 70, 35, 90, 55, 30, 60, 80, 40, 65, 25, 50, 85, 30, 20].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-emerald-400 rounded-full animate-pulse"
                              style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
                            />
                          ))}
                        </div>
                        <Link
                          to="/console/voice"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                        >
                          <span>Open Voice Studio to record 120s reference audio</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}

                    {activeArticle.demoType === "fleet" && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { role: "Chief of Staff", icon: "👔", status: "Active" },
                          { role: "Sales Outbound", icon: "🎯", status: "Idle" },
                          { role: "Bug Repro", icon: "🐛", status: "Testing" },
                          { role: "Paid Media", icon: "📈", status: "Optimizing" },
                        ].map((b) => (
                          <div key={b.role} className="p-3 rounded-xl border border-slate-800 bg-slate-900/90 text-center space-y-1">
                            <span className="text-xl">{b.icon}</span>
                            <div className="text-xs font-bold text-white truncate">{b.role}</div>
                            <span className="text-[10px] text-cyan-400 font-mono">{b.status}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeArticle.demoType === "app" && (
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-white">Full-Stack SaaS Starter Scaffolded</div>
                          <div className="text-[11px] text-slate-400 font-mono">TanStack Start + PostgreSQL + Supabase</div>
                        </div>
                        <Link
                          to="/console/apps"
                          className="px-3 py-1.5 rounded-lg bg-purple-500 text-white font-bold text-xs hover:bg-purple-400 transition-colors"
                        >
                          Launch in Monaco
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* Article Prose Content */}
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-sans">
                  {activeArticle.content.map((p, idx) => (
                    <p key={idx} className="text-slate-300">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Production Code Snippet */}
                {activeArticle.codeSnippet && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-purple-400" />
                        Production Implementation ({activeArticle.codeSnippet.language})
                      </span>
                      <button
                        onClick={() => handleCopyCode(activeArticle.codeSnippet!.code)}
                        className="inline-flex items-center gap-1 rounded bg-slate-800 px-2.5 py-1 text-xs text-slate-200 hover:bg-slate-700 transition-colors"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                      </button>
                    </div>
                    <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-black/90 p-4 font-mono text-xs text-slate-200 scrollbar-thin">
                      <code>{activeArticle.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                {/* 1-Click Action Card */}
                <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-sm font-bold text-white">Ready to test this capability live?</div>
                    <div className="text-xs text-slate-400">Launch the autonomous command console or open the studio directly.</div>
                  </div>
                  <Link
                    to="/console"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all whitespace-nowrap"
                  >
                    <span>Open in Console</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
