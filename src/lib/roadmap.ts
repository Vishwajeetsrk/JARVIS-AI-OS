// Curated developer learning paths (inspired by roadmap.sh/developer-roadmap-master).
// Served to the AI as a structured knowledge tool via the `roadmap` chat tool.
export interface RoadmapStage {
  id: string;
  title: string;
  what: string;
  learn: string[];
  projects: string[];
}

export interface RoadmapPath {
  id: string;
  title: string;
  description: string;
  stages: RoadmapStage[];
}

export const ROADMAPS: RoadmapPath[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    description: "Build and ship LLM-powered products.",
    stages: [
      {
        id: "foundations",
        title: "Foundations",
        what: "How LLMs and agents work under the hood.",
        learn: ["Transformers & tokenization", "Prompting & context windows", "Tokens, temperature, sampling", "Embeddings & vectors"],
        projects: ["Build a CLI chatbot", "A retrieval tool over a codebase"],
      },
      {
        id: "rag",
        title: "Retrieval & RAG",
        what: "Ground models on your own data.",
        learn: ["Chunking strategies", "Vector databases (pgvector, Qdrant)", "Hybrid search", "Evaluation of retrieval quality"],
        projects: ["Document Q&A bot with sources", "A memory/recall tool like this one"],
      },
      {
        id: "agents",
        title: "Agents & Tools",
        what: "Give models the ability to act.",
        learn: ["Tool/function calling", "Multi-agent orchestration (Mastra)", "Memory loops & skill systems", "Streaming & observability"],
        projects: ["A coding agent", "A self-improving skill system"],
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Build modern web UIs.",
    stages: [
      {
        id: "basics",
        title: "Basics",
        what: "The web platform essentials.",
        learn: ["HTML, CSS, JavaScript", "Semantic layout & accessibility", "Git basics", "HTTP & the DOM"],
        projects: ["A personal portfolio", "A static landing page"],
      },
      {
        id: "framework",
        title: "Framework & tooling",
        what: "React and the modern build chain.",
        learn: ["React (components, hooks, state)", "TypeScript", "Vite bundling", "Tailwind / component libraries"],
        projects: ["A dashboard app", "A themeable component kit"],
      },
      {
        id: "production",
        title: "Production",
        what: "Shipping and maintaining web apps.",
        learn: ["SSR/SSG (TanStack Start, Next)", "Data fetching & caching", "Testing & debugging", "Bundle performance & Core Web Vitals"],
        projects: ["A real-time dashboard", "A server-rendered site"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Design APIs and data systems.",
    stages: [
      {
        id: "core",
        title: "Core",
        what: "Servers, databases, and protocols.",
        learn: ["HTTP & REST basics", "Relational databases & SQL", "Authentication & sessions", "Node.js runtime"],
        projects: ["A REST API with auth", "A small notes app"],
      },
      {
        id: "scale",
        title: "Scale & harden",
        what: "Robust, production-grade services.",
        learn: ["Caching & queues", "Row-level security & RBAC", "Observability & logging", "Background/scheduled jobs"],
        projects: ["A rate-limited API", "A cron-driven report service"],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Ship and run infrastructure reliably.",
    stages: [
      {
        id: "delivery",
        title: "Delivery",
        what: "Get code to production safely.",
        learn: ["Git workflows & code review", "CI/CD pipelines", "Containerization (Docker)", "Deployment platforms (Vercel/Supabase)"],
        projects: ["A full CI/CD pipeline", "A containerized service"],
      },
      {
        id: "reliability",
        title: "Reliability",
        what: "Keep systems healthy.",
        learn: ["Monitoring & alerting", "Backups & migrations", "Secrets management", "Incident response basics"],
        projects: ["A health-check + alert bot", "A backup automation"],
      },
    ],
  },
];

export const roadmapById = (id: string): RoadmapPath | undefined => ROADMAPS.find((r) => r.id === id);