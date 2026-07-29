import {
  Search, Code, Terminal, Globe, Database, FileText, Image as ImageIcon,
  Mic, Video, Calculator, Calendar, Mail, GitBranch, Layout,
  Zap, Cloud, Shield, Bot, Puzzle, Sparkles,
  Palette, PenTool, TestTube, Rocket, Activity, Brain, Scale,
  TrendingUp, Cog, CreditCard, Cable, AudioLines, Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CatalogItem = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category?: string;
};

export const TOOLS: CatalogItem[] = [
  { id: "web-search", name: "Web Search", description: "Real-time web queries with citations.", icon: Search, category: "Research" },
  { id: "code-exec", name: "Code Runner", description: "Execute Python/JS in a sandbox.", icon: Terminal, category: "Dev" },
  { id: "code-write", name: "Code Writer", description: "Generate and edit files across the repo.", icon: Code, category: "Dev" },
  { id: "browser", name: "Browser", description: "Drive a headless browser.", icon: Globe, category: "Research" },
  { id: "sql", name: "SQL Console", description: "Run queries against your database.", icon: Database, category: "Data" },
  { id: "docs", name: "Docs Reader", description: "Extract text from PDF/DOCX/HTML.", icon: FileText, category: "Data" },
  { id: "image-gen", name: "Image Generator", description: "Create images from prompts.", icon: ImageIcon, category: "Media" },
  { id: "voice", name: "Voice I/O", description: "Speech-to-text and text-to-speech.", icon: Mic, category: "Media" },
  { id: "desktop-screenshot", name: "Screen Capture", description: "Take screenshots of Windows display.", icon: ImageIcon, category: "System" },
  { id: "desktop-launcher", name: "App Launcher", description: "Launch browser, YouTube, GitHub, apps.", icon: Rocket, category: "System" },
  { id: "video", name: "Video Gen", description: "Generate short clips.", icon: Video, category: "Media" },
  { id: "math", name: "Calculator", description: "Precise numeric evaluation.", icon: Calculator, category: "Utility" },
  { id: "calendar", name: "Calendar", description: "Schedule and reminders.", icon: Calendar, category: "Ops" },
  { id: "email", name: "Email", description: "Draft and send messages.", icon: Mail, category: "Ops" },
];

export const CONNECTORS: CatalogItem[] = [
  { id: "github", name: "GitHub", description: "Repos, issues, PRs, actions.", icon: GitBranch },
  { id: "slack", name: "Slack", description: "Channels, DMs, workflows.", icon: Globe },
  { id: "figma", name: "Figma", description: "Read designs and comments.", icon: Layout },
  { id: "gcal", name: "Google Calendar", description: "Events + free/busy.", icon: Calendar },
  { id: "gmail", name: "Gmail", description: "Read and send email.", icon: Mail },
  { id: "notion", name: "Notion", description: "Pages, databases, blocks.", icon: FileText },
  { id: "supabase", name: "Supabase", description: "DB, auth, storage.", icon: Database },
  { id: "cloudflare", name: "Cloudflare", description: "Workers, DNS, R2.", icon: Cloud },
];

export const PLUGINS: CatalogItem[] = [
  { id: "brave-search", name: "Brave Search", description: "Independent web index.", icon: Globe },
  { id: "zapier", name: "Zapier", description: "6k+ app automations.", icon: Zap },
  { id: "wolfram", name: "Wolfram Alpha", description: "Computational knowledge.", icon: Calculator },
  { id: "elevenlabs", name: "ElevenLabs", description: "High-fidelity voices.", icon: AudioLines },
  { id: "guardrails", name: "Guardrails", description: "PII + policy filters.", icon: Shield },
  { id: "vector", name: "Vector Store", description: "Embeddings + semantic search.", icon: Brain },
];

export const SKILLS: CatalogItem[] = [
  { id: "ceo-agent", name: "ceo-agent", description: "Sets direction and splits scope.", icon: Users },
  { id: "planner", name: "planner", description: "Ordered tasks with acceptance criteria.", icon: Cog },
  { id: "saas-builder", name: "saas-builder", description: "Ships SaaS features end-to-end.", icon: Rocket },
  { id: "designer", name: "designer", description: "Visual identity + tokens.", icon: Palette },
  { id: "researcher", name: "researcher", description: "Deep research briefs.", icon: Search },
  { id: "writer", name: "writer", description: "Copy, PRDs, docs.", icon: PenTool },
  { id: "test-agent", name: "test-agent", description: "Unit / integration / e2e.", icon: TestTube },
  { id: "reviewer", name: "reviewer", description: "Diff review + regression flags.", icon: GitBranch },
  { id: "deployer", name: "deployer", description: "Preview / staging / prod.", icon: Rocket },
  { id: "sre", name: "sre", description: "Metrics, alerts, postmortems.", icon: Activity },
  { id: "memory-keeper", name: "memory-keeper", description: "Curates the knowledge base.", icon: Brain },
  { id: "governance", name: "governance", description: "Policies + ACLs.", icon: Scale },
  { id: "growth", name: "growth", description: "Landing, experiments, outreach.", icon: TrendingUp },
  { id: "ops", name: "ops", description: "Recurring workflows.", icon: Cog },
  { id: "billing", name: "billing", description: "Subscriptions + invoices.", icon: CreditCard },
  { id: "connector", name: "connector", description: "MCPs and external APIs.", icon: Cable },
  { id: "voice", name: "voice", description: "Speech I/O.", icon: AudioLines },
  { id: "coworker", name: "coworker", description: "Pair-programs live.", icon: Bot },
  { id: "open-design", name: "open-design", description: "32+ design systems (Claude, Apple, Arc, Bento).", icon: Palette },
];

export const CATALOG_ICONS = { Puzzle, Sparkles };
