import { JobItem } from "./types";

/**
 * PRE-SEEDED DISCOVERED JOB OPPORTUNITIES
 *
 * Real-world matched roles aligned with Vishwajeet's portfolio (AI Engineer, Full Stack, Salesforce).
 */

export const INITIAL_JOB_OPPORTUNITIES: JobItem[] = [
  {
    id: "job_01",
    company: "NeuralPulse AI",
    title: "AI Application Developer / Agentic Systems",
    location: "Bengaluru (Hybrid)",
    workMode: "Hybrid",
    description: "Looking for an AI Software Developer to build autonomous agent workflows, integrate multi-model LLM APIs (Gemini, Claude), and develop reactive React/Next.js dashboards with vector search backend.",
    requiredSkills: ["React", "Next.js", "TypeScript", "LLM APIs", "Supabase", "Vector RAG"],
    preferredSkills: ["Three.js", "Docker", "Python"],
    salary: { min: 800000, max: 1400000, currency: "INR" },
    sources: [
      { name: "LinkedIn", url: "https://linkedin.com/jobs/view/neuralpulse-ai-app-dev" },
      { name: "Wellfound", url: "https://wellfound.com/jobs/neuralpulse-ai-dev" },
    ],
    dedupHash: "neuralpulse_ai_app_dev_blr",
    applicationUrl: "https://neuralpulse.ai/careers/ai-dev",
    opportunityScore: 94,
    postedAt: "4 hours ago",
    status: "discovered",
  },
  {
    id: "job_02",
    company: "AetherScale Technologies",
    title: "Full Stack Engineer (React 19 / Node.js)",
    location: "Remote",
    workMode: "Remote",
    description: "Building scalable customer-facing SaaS applications. Requires solid experience with TypeScript, Next.js, modern CSS/Tailwind, REST APIs, and PostgreSQL database modeling.",
    requiredSkills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    preferredSkills: ["Redis", "AWS", "Capacitor"],
    salary: { min: 900000, max: 1500000, currency: "INR" },
    sources: [
      { name: "Indeed", url: "https://indeed.com/viewjob?jk=aetherscale-fullstack" },
    ],
    dedupHash: "aetherscale_fullstack_remote",
    applicationUrl: "https://aetherscale.io/careers/fullstack",
    opportunityScore: 91,
    postedAt: "1 day ago",
    status: "saved",
  },
  {
    id: "job_03",
    company: "Synthetix Labs",
    title: "Generative AI Developer / Prompt & Tool Engineer",
    location: "Bengaluru (Onsite)",
    workMode: "Onsite",
    description: "Join our core AI research team to construct autonomous agent pipelines, tool-calling frameworks, and custom LLM reasoning interfaces.",
    requiredSkills: ["Prompt Engineering", "Tool Calling", "TypeScript", "Python", "REST APIs"],
    preferredSkills: ["DSPy", "LangChain", "FastAPI"],
    salary: { min: 1000000, max: 1600000, currency: "INR" },
    sources: [
      { name: "Company Career Page", url: "https://synthetixlabs.ai/jobs/genai" },
    ],
    dedupHash: "synthetix_genai_blr",
    applicationUrl: "https://synthetixlabs.ai/apply",
    opportunityScore: 89,
    postedAt: "2 days ago",
    status: "analyzed",
  },
  {
    id: "job_04",
    company: "Rootbridge Global Solutions",
    title: "Salesforce CRM & Data Operations Associate",
    location: "Bengaluru",
    workMode: "Hybrid",
    description: "Managing enterprise Salesforce CRM data, executing Data Loader bulk updates, reconciling Razorpay payment feeds, and maintaining donor records with strict accuracy standards.",
    requiredSkills: ["Salesforce CRM", "Data Loader", "Excel", "Data Integrity", "Reconciliation"],
    preferredSkills: ["Python ETL", "Apex basics"],
    salary: { min: 600000, max: 950000, currency: "INR" },
    sources: [
      { name: "Naukri", url: "https://naukri.com/job-listings-salesforce-rootbridge" },
    ],
    dedupHash: "rootbridge_salesforce_crm_blr",
    applicationUrl: "https://rootbridge.org/careers",
    opportunityScore: 95,
    postedAt: "3 days ago",
    status: "applied",
  },
];

/**
 * Deduplication Engine: Generates canonical hash to merge duplicate job listings
 */
export function generateJobDedupHash(company: string, title: string, location: string): string {
  return `${company}_${title}_${location}`.toLowerCase().replace(/[^a-z0-9]/g, "_");
}
