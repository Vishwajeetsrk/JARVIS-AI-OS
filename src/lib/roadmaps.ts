import fs from "node:fs";
import path from "node:path";

export interface RoadmapSummary {
  id: string;
  name: string;
  category: string;
  description: string;
  topicCount: number;
}

export interface RoadmapTopic {
  id: string;
  title: string;
  content: string;
}

export interface RoadmapDetail extends RoadmapSummary {
  topics: RoadmapTopic[];
}

const ROADMAPS_DIR = "C:\\Users\\vishw\\Music\\developer-roadmap-master\\developer-roadmap-master\\roadmaps";

function capitalize(s: string): string {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function categoryFor(id: string): string {
  if (id.startsWith("ai-") || id === "machine-learning" || id === "mlops" || id === "prompt-engineering" || id === "claude-code" || id === "openclaw") {
    return "AI & Data Science";
  }
  if (id.includes("frontend") || id === "react" || id === "vue" || id === "angular" || id === "nextjs" || id === "css" || id === "html" || id === "ux-design" || id === "product-design") {
    return "Frontend & Web";
  }
  if (id.includes("backend") || id === "nodejs" || id === "python" || id === "golang" || id === "java" || id === "cpp" || id === "c" || id === "rust" || id === "ruby" || id === "php" || id === "laravel" || id === "django" || id === "aspnet-core" || id === "spring-boot") {
    return "Backend & Systems";
  }
  if (id.includes("devops") || id === "docker" || id === "kubernetes" || id === "aws" || id === "cloudflare" || id === "terraform" || id === "linux" || id === "shell-bash" || id === "devsecops") {
    return "DevOps & Cloud";
  }
  if (id === "cyber-security" || id === "ai-red-teaming" || id === "code-review") {
    return "Security";
  }
  if (id === "system-design" || id === "software-architect" || id === "datastructures-and-algorithms" || id === "computer-science" || id === "api-design" || id === "software-design-architecture") {
    return "Architecture & CS";
  }
  return "Specialized Skill";
}

export function listRoadmaps(): RoadmapSummary[] {
  if (!fs.existsSync(ROADMAPS_DIR)) {
    return FALLBACK_ROADMAPS;
  }

  try {
    const entries = fs.readdirSync(ROADMAPS_DIR, { withFileTypes: true });
    const roadmaps: RoadmapSummary[] = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const id = entry.name;
      const contentDir = path.join(ROADMAPS_DIR, id, "content");
      let topicCount = 0;

      if (fs.existsSync(contentDir)) {
        topicCount = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md")).length;
      }

      const name = capitalize(id);
      roadmaps.push({
        id,
        name,
        category: categoryFor(id),
        description: `Comprehensive developer roadmap for ${name} with ${topicCount} structured learning modules.`,
        topicCount,
      });
    }

    return roadmaps.sort((a, b) => a.name.localeCompare(b.name));
  } catch {
    return FALLBACK_ROADMAPS;
  }
}

export function getRoadmap(id: string): RoadmapDetail | null {
  const all = listRoadmaps();
  const summary = all.find((r) => r.id === id);
  if (!summary) return null;

  const contentDir = path.join(ROADMAPS_DIR, id, "content");
  const topics: RoadmapTopic[] = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const filePath = path.join(contentDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      // Clean title from filename before @ symbol
      const baseName = file.replace(/\.md$/, "");
      const titleRaw = baseName.split("@")[0] || baseName;
      const title = capitalize(titleRaw);

      topics.push({
        id: baseName,
        title,
        content: raw,
      });
    }
  }

  return {
    ...summary,
    topics,
  };
}

const FALLBACK_ROADMAPS: RoadmapSummary[] = [
  { id: "ai-agents", name: "AI Agents", category: "AI & Data Science", description: "Learn how to build autonomous AI agents, tool invocation, memory & MCP.", topicCount: 101 },
  { id: "ai-engineer", name: "AI Engineer", category: "AI & Data Science", description: "Master LLMs, fine-tuning, RAG, prompt engineering & vector databases.", topicCount: 84 },
  { id: "frontend", name: "Frontend", category: "Frontend & Web", description: "Step by step guide to becoming a modern frontend developer.", topicCount: 92 },
  { id: "backend", name: "Backend", category: "Backend & Systems", description: "Step by step guide to becoming a modern backend developer.", topicCount: 110 },
  { id: "full-stack", name: "Full Stack", category: "Backend & Systems", description: "Complete roadmap for full-stack web and cloud applications.", topicCount: 125 },
  { id: "system-design", name: "System Design", category: "Architecture & CS", description: "Learn scalable architecture, microservices, databases & high availability.", topicCount: 76 },
  { id: "devops", name: "DevOps", category: "DevOps & Cloud", description: "CI/CD, Docker, Kubernetes, infrastructure as code & monitoring.", topicCount: 88 },
];
