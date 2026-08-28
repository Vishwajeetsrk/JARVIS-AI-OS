import { NextResponse } from "next/server";

interface ProjectItem {
  id: string;
  name: string;
  category: "core" | "saas" | "ai" | "template" | "mobile";
  description: string;
  status: "active" | "production" | "ready" | "in-development";
  stars?: number;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  stats?: {
    components: number;
    files: number;
    linesOfCode: string;
  };
}

const USER_PROJECTS: ProjectItem[] = [
  {
    id: "jarvis-ai-os",
    name: "JARVIS AI OS",
    category: "core",
    description: "Intelligent Autonomous Operating System with multi-agent orchestration, live voice pipeline, and universal project workspaces.",
    status: "production",
    tags: ["Next.js", "TanStack", "AI Agents", "Supabase", "Three.js"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:8080/console",
    stats: { components: 142, files: 420, linesOfCode: "48.2k" },
  },
  {
    id: "learnify-platform",
    name: "Learnify — Adaptive Learning Platform",
    category: "saas",
    description: "Next-gen AI education suite with interactive simulations, progress heatmaps, and personalized knowledge graphs.",
    status: "production",
    tags: ["React 19", "Tailwind CSS", "EdTech", "Analytics"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:8080/console/projects/local-learnify",
    stats: { components: 68, files: 120, linesOfCode: "18.5k" },
  },
  {
    id: "staffu-crm-admin",
    name: "StaffU CRM & Lead Management",
    category: "template",
    description: "Enterprise CRM and lead tracking dashboard with Kanban deal stages, pipeline analytics, and agent assignment.",
    status: "ready",
    tags: ["Next.js 15", "Lucide", "Charts", "Enterprise"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:8080/preset-sites/crm-lead-management-panel-staffu-admin-template/",
    stats: { components: 84, files: 145, linesOfCode: "22.1k" },
  },
  {
    id: "voice-cloner-studio",
    name: "Voice Cloner & Synthesis Studio",
    category: "ai",
    description: "Sub-second real-time neural voice cloning, multi-accent calibration, and bidirectional audio streaming.",
    status: "active",
    tags: ["Web Audio API", "ElevenLabs", "Whisper", "Orpheus"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:8080/console/voice",
    stats: { components: 32, files: 64, linesOfCode: "8.4k" },
  },
  {
    id: "algorithmic-art-engine",
    name: "Algorithmic Art & Generative Studio",
    category: "ai",
    description: "Procedural shader visuals, mathematical flow fields, and autonomous design generation using p5.js and Three.js.",
    status: "active",
    tags: ["Three.js", "GLSL Shaders", "p5.js", "Generative Art"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:8080/console/design",
    stats: { components: 45, files: 89, linesOfCode: "14.2k" },
  },
  {
    id: "mcp-protocol-hub",
    name: "MCP Protocol & Tool Hub",
    category: "core",
    description: "Model Context Protocol servers & clients powering bidirectional tooling with GitHub, Postgres, and Brave.",
    status: "ready",
    tags: ["TypeScript", "JSON-RPC", "MCP Standard", "DevTools"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:8080/console/connectors",
    stats: { components: 28, files: 72, linesOfCode: "11.6k" },
  },
];

export async function GET() {
  return NextResponse.json({
    owner: "Vishwajeet (Vishwajeetsrk)",
    projects: USER_PROJECTS,
    totalProjects: USER_PROJECTS.length,
    activeEnvironments: 4,
    timestamp: new Date().toISOString(),
  });
}
