import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/_authenticated/console/apps")({
  component: UniversalAppsPage,
});

interface AppTemplate {
  id: string;
  category: "fullstack" | "mobile" | "website" | "extension" | "agent";
  title: string;
  tagline: string;
  description: string;
  icon: string;
  techStack: string[];
  features: string[];
  sampleFiles: string[];
}

const TEMPLATES: AppTemplate[] = [
  {
    id: "fullstack-saas",
    category: "fullstack",
    title: "Full-Stack Enterprise SaaS Platform",
    tagline: "TanStack Start + PostgreSQL + Supabase Auth + Stripe Billing",
    description: "Complete modern SaaS boilerplate with authenticated server functions, multi-tenant organization support, and automated Stripe billing webhooks.",
    icon: "⚡",
    techStack: ["TanStack Start", "React 19", "PostgreSQL", "Supabase", "Tailwind CSS"],
    features: ["Auth & RBAC Sessions", "Stripe Billing & Invoicing", "Server-Side Data Loaders", "Type-safe Database Schema"],
    sampleFiles: ["src/routes/index.tsx", "src/lib/auth.ts", "src/lib/stripe.ts", "schema.sql"],
  },
  {
    id: "mobile-expo",
    category: "mobile",
    title: "Cross-Platform Mobile App (iOS & Android)",
    tagline: "React Native 0.74 + Expo Router + Native Sensors & Camera",
    description: "Production-ready mobile app scaffolding with bottom navigation tabs, biometric authentication, offline SQLite caching, and push notifications.",
    icon: "📱",
    techStack: ["React Native", "Expo Router", "TypeScript", "AsyncStorage", "Reanimated"],
    features: ["Smooth 60FPS Gestures", "Offline Data Sync", "Camera & Image Uploads", "Cross-Platform Native Modules"],
    sampleFiles: ["app/(tabs)/index.tsx", "app/_layout.tsx", "components/ThemedView.tsx", "package.json"],
  },
  {
    id: "website-3d-agency",
    category: "website",
    title: "High-Converting 3D Agency Website",
    tagline: "Aceternity UI + 3D Earth Globe + Book Flip Animation",
    description: "Immersive landing page built with custom Framer Motion transitions, responsive interactive canvas globe, pricing calculator, and testimonial sliders.",
    icon: "🌐",
    techStack: ["Vite", "React", "Framer Motion", "Three.js / Canvas", "Tailwind CSS"],
    features: ["Interactive 3D Globe", "3D Book Page-Flip", "Glassmorphism Dark Theme", "SEO Meta & Lighthouse 100"],
    sampleFiles: ["src/App.tsx", "src/components/EarthGlobe.tsx", "src/components/BookFlip.tsx", "index.html"],
  },
  {
    id: "chrome-extension-v3",
    category: "extension",
    title: "AI Chrome Extension (Manifest V3)",
    tagline: "Side-Panel Assistant + DOM Context Scraper + Background Worker",
    description: "Automated Chrome extension that reads the current active webpage DOM, provides 1-click summarization in a side-panel, and triggers background agents.",
    icon: "🧩",
    techStack: ["Manifest V3", "Chrome Extension API", "TypeScript", "Tailwind CSS"],
    features: ["Side-Panel UI", "DOM Scraping Content Script", "Persistent Storage", "Keyboard Shortcuts"],
    sampleFiles: ["manifest.json", "src/background.ts", "src/content.ts", "src/sidepanel.html"],
  },
  {
    id: "autonomous-workflow-agent",
    category: "agent",
    title: "Autonomous Mastra Workflow & Agent Graph",
    tagline: "Mastra Agent + 4-Tier Memory + Cron Automation Daemon",
    description: "Autonomous reasoning loop with custom MCP tool calling, long-term memory retrieval, human-in-the-loop approvals, and background cron schedules.",
    icon: "🤖",
    techStack: ["Mastra", "LangGraph", "Node.js", "Zod", "PostgreSQL Vector"],
    features: ["4-Tier Neural Memory", "Self-Healing Tool Execution", "Cron Schedules", "Structured JSON Outputs"],
    sampleFiles: ["src/mastra/agents/index.ts", "src/mastra/tools/index.ts", "src/mastra/workflows/index.ts"],
  },
];

function UniversalAppsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTemplate, setSelectedTemplate] = useState<AppTemplate>(TEMPLATES[0]);

  const filteredTemplates =
    selectedCategory === "all"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === selectedCategory);

  const handleCreateProject = (template: AppTemplate) => {
    navigate({
      to: "/console/projects",
    });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Universal Creator Forge
              </span>
              <span className="text-xs text-slate-400">
                Full-Stack Apps • Mobile Apps • Websites • Extensions • Agents
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Universal App & Extension Builder
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Select any architecture to autonomously generate, live preview in sandbox, edit with Monaco, and deploy with 1 click.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto">
            {["all", "fullstack", "mobile", "website", "extension", "agent"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Templates List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                selectedTemplate.id === template.id
                  ? "bg-indigo-500/10 border-indigo-500/50 shadow-xl shadow-indigo-500/10"
                  : "bg-white/[0.02] hover:bg-white/[0.04] border-white/10"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{template.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{template.title}</h3>
                    <p className="text-xs text-indigo-400 font-medium">{template.tagline}</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/5">
                  {template.category}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {template.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-black/40 text-[11px] text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Template Inspector */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{selectedTemplate.icon}</span>
              <div>
                <h3 className="text-base font-bold text-white">{selectedTemplate.title}</h3>
                <p className="text-xs text-slate-400 capitalize">{selectedTemplate.category} Architecture</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Included Features:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedTemplate.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Pre-Configured Files:
              </h4>
              <div className="space-y-1 bg-black/40 p-3 rounded-xl border border-white/5 font-mono text-[11px] text-slate-400">
                {selectedTemplate.sampleFiles.map((file) => (
                  <div key={file} className="flex items-center gap-2">
                    <span>📄</span>
                    <span className="text-indigo-300">{file}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => handleCreateProject(selectedTemplate)}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
          >
            <span>🚀</span>
            <span>Scaffold {selectedTemplate.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
