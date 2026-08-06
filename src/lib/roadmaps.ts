import fs from "node:fs";
import path from "node:path";
import ROADMAP_INDEX from "./roadmap-index.json";

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

// Content lives on disk when running locally (desktop daemon); on serverless
// the index of all roadmaps is bundled so the catalog is always real data.
const ROADMAPS_DIR = "C:\\Users\\vishw\\Music\\developer-roadmap-master\\developer-roadmap-master\\roadmaps";

const INDEX: RoadmapSummary[] = ROADMAP_INDEX as RoadmapSummary[];

function capitalize(s: string): string {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function listRoadmaps(): RoadmapSummary[] {
  return INDEX;
}

export function getRoadmap(id: string): RoadmapDetail | null {
  const summary = INDEX.find((r) => r.id === id);
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
