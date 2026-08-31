import { NextResponse } from "next/server";

export interface ProjectItem {
  id: string;
  name: string;
  category: "core" | "saas" | "ai" | "mobile" | "job_experience";
  type: "software_product" | "professional_job_responsibility";
  description: string;
  status: "production" | "active" | "ready";
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  path?: string;
  stats?: {
    components: number;
    files: number;
    linesOfCode: string;
  };
}

const REAL_USER_SYSTEMS: ProjectItem[] = [
  {
    id: "jarvis-ai-os",
    name: "JARVIS AI OS (This System)",
    category: "core",
    type: "software_product",
    description: "Autonomous Personal Operating System with 18 specialist agents, 3D WebGL particle constellation, multi-tier task runtime, and voice pipeline.",
    status: "production",
    tags: ["React 19", "Next.js 15", "TypeScript", "Three.js", "Supabase", "Groq", "Gemini"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:3000",
    path: "D:\\Team of Vishwajeet",
    stats: { components: 142, files: 420, linesOfCode: "48.2k" },
  },
  {
    id: "learnify-platform",
    name: "Learnify AI — Adaptive Learning Platform",
    category: "saas",
    type: "software_product",
    description: "Full-stack intelligent education platform combining AI tutoring, creator toolkits, gamification engine, and automated career roadmaps.",
    status: "production",
    tags: ["React 19", "Next.js", "TypeScript", "Supabase", "OpenRouter", "Cashfree", "Tailwind"],
    repoUrl: "https://github.com/Vishwajeetsrk",
    demoUrl: "https://learnifyai.in",
    stats: { components: 68, files: 120, linesOfCode: "18.5k" },
  },
  {
    id: "wardelio-mobile-app",
    name: "Wardelio Mobile App",
    category: "mobile",
    type: "software_product",
    description: "Personal wardrobe styling and outfit coordination mobile app featuring 150+ interactive screens, 3D controls, and smooth animations for Android & iOS.",
    status: "active",
    tags: ["React", "Vite", "Capacitor", "Tailwind CSS", "Android", "iOS", "Mobile UX"],
    repoUrl: "https://github.com/Vishwajeetsrk",
    demoUrl: "https://vishwajeetsrk.github.io",
    path: "C:\\Users\\vishw\\OneDrive\\Desktop\\Wardelio",
    stats: { components: 154, files: 210, linesOfCode: "32.4k" },
  },
  {
    id: "dreamsync-career-platform",
    name: "DreamSync — AI Career Intelligence Platform",
    category: "ai",
    type: "software_product",
    description: "AI-powered career engine featuring AI Resume Builder, ATS Checker, LinkedIn Profile Optimizer, and Portfolio Generator.",
    status: "production",
    tags: ["Next.js", "React", "Firebase", "OpenRouter", "Gemini", "Upstash Redis"],
    repoUrl: "https://github.com/Vishwajeetsrk",
    demoUrl: "https://vishwajeetsrk.github.io",
    stats: { components: 52, files: 96, linesOfCode: "16.8k" },
  },
  {
    id: "luxury-laundry-saas",
    name: "Luxury Laundry — SaaS Platform",
    category: "saas",
    type: "software_product",
    description: "Full-stack laundry management SaaS with customer booking portals, admin analytics dashboards, and real-time order tracking via WebSockets.",
    status: "ready",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Socket.io", "Tailwind"],
    repoUrl: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    demoUrl: "http://localhost:3000",
    stats: { components: 48, files: 85, linesOfCode: "14.6k" },
  },
  {
    id: "salesforce-rootbridge-role",
    name: "Salesforce & Razorpay Donation Reconciliation",
    category: "job_experience",
    type: "professional_job_responsibility",
    description: "Professional job responsibilities at Rootbridge Academy: 7-step daily reconciliation matching 200,000+ CRM records with Razorpay, boosting accuracy by 30%.",
    status: "production",
    tags: ["Rootbridge Academy", "Salesforce CRM", "Data Loader", "Razorpay API", "Python ETL", "Office Work"],
    demoUrl: "http://localhost:3000",
    path: "D:\\Team of Vishwajeet",
    stats: { components: 18, files: 34, linesOfCode: "6.2k" },
  },
];

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json({
    owner: "Vishwajeet (Vishwajeetsrk)",
    projects: REAL_USER_SYSTEMS,
    totalProjects: REAL_USER_SYSTEMS.length,
    timestamp: new Date().toISOString(),
  });
}
