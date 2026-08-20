/**
 * Deep Research & Autonomous Skill Creator for JARVIS AI OS
 * Performs multi-source research, design system matching, and generates
 * persistent skills (.skill / SKILL.md) and memory entries.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { writeGlobalMemory, type MemoryEntry } from "./memory-tool.js";
import { listDesignSystems, getDesignSystem } from "../../lib/design-systems.js";

const WORKSPACE_ROOT = process.cwd();
const SKILLS_DIR = path.join(WORKSPACE_ROOT, "skills");

export interface ResearchTopicInput {
  topic: string;
  category?: "web-design" | "poster" | "architecture" | "ai-agent" | "security" | "general";
  targetFormat?: "website" | "poster" | "app" | "document" | "code";
  extraContext?: string;
}

export interface ResearchFindings {
  topic: string;
  category: string;
  recommendedDesignSystem?: {
    id: string;
    name: string;
    category: string;
    description?: string;
  };
  designTokens?: {
    primaryColor: string;
    accentColor: string;
    fontFamily: string;
    aestheticStyle: string;
  };
  keyRequirements: string[];
  bestPractices: string[];
  suggestedSkillName: string;
  skillContent: string;
}

/**
 * Searches DuckDuckGo for live web knowledge
 */
async function searchWeb(query: string, limit = 5): Promise<Array<{ title: string; url: string; snippet: string }>> {
  try {
    const res = await fetch(
      `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`,
      { headers: { "user-agent": "Mozilla/5.0 (JarvisAIOs/2.0)" } }
    );
    if (!res.ok) return [];
    const html = await res.text();
    const results: Array<{ title: string; url: string; snippet: string }> = [];
    const linkRe = /<a[^>]*class="result__a"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
    const snippetRe = /<a[^>]*class="result__snippet"[^>]*>([\s\S]*?)<\/a>/g;

    let m: RegExpExecArray | null;
    while ((m = linkRe.exec(html)) && results.length < limit) {
      const title = m[2].replace(/<[^>]+>/g, "").trim();
      let url = m[1].replace(/&amp;/g, "&");
      try {
        const u = new URL(url, "https://duckduckgo.com");
        if (u.searchParams.get("uddg")) url = decodeURIComponent(u.searchParams.get("uddg")!);
      } catch {}
      results.push({ title, url, snippet: "" });
    }

    const snippets: string[] = [];
    while ((m = snippetRe.exec(html)) && snippets.length < limit) {
      snippets.push(m[1].replace(/<[^>]+>/g, "").trim());
    }
    results.forEach((r, i) => {
      r.snippet = snippets[i] ?? "";
    });

    return results.filter((r) => r.title);
  } catch {
    return [];
  }
}

/**
 * Execute deep research on a topic, discover design systems, and author a persistent skill
 */
export async function executeDeepResearch(input: ResearchTopicInput): Promise<ResearchFindings> {
  const { topic, category = "general", targetFormat = "website", extraContext = "" } = input;

  // 1. Search web for design best practices & real-time patterns
  const searchQuery = `${topic} best design patterns UI UX architecture modern 2026`;
  const webResults = await searchWeb(searchQuery, 4);

  // 2. Discover best matched design system from the 53 available systems
  const allSystems = listDesignSystems();
  let matchedSystem = allSystems.find((s) =>
    s.name.toLowerCase().includes(topic.toLowerCase()) ||
    s.category.toLowerCase().includes(category.toLowerCase())
  );

  if (!matchedSystem && allSystems.length > 0) {
    // Default to modern high-tech system
    matchedSystem = allSystems.find((s) => s.id === "arc-reactor" || s.id === "dark-matter" || s.id === "cyberpunk") || allSystems[0];
  }

  // 3. Assemble Design Tokens & Aesthetics
  const designTokens = {
    primaryColor: category === "poster" ? "#06B6D4" : "#3B82F6",
    accentColor: "#F59E0B",
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    aestheticStyle: "Cyberpunk HUD, Glassmorphism, 3D Canvas Accents, High Contrast Dark Mode",
  };

  const keyRequirements = [
    "High visual polish with 3D or micro-animations",
    "Full responsiveness across mobile, tablet, and ultra-wide screens",
    "Strict accessibility compliance (WCAG AA, semantic HTML)",
    "Built-in SEO metadata and JSON-LD schema",
    "Safe modular code structure with error boundaries",
  ];

  const bestPractices = [
    `Use curated tokens from ${matchedSystem ? matchedSystem.name : 'Jarvis High-Tech Design System'}`,
    "Implement rich interactive hover states, shimmer loaders, and active waveforms",
    "Persist all lessons learned and architecture decisions to memory",
    ...webResults.map((r) => `${r.title}: ${r.snippet.slice(0, 100)}...`),
  ];

  // 4. Generate persistent skill format
  const skillSlug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 30);
  const suggestedSkillName = `${skillSlug}-skill`;

  const skillContent = `---
name: ${suggestedSkillName}
description: Autonomous design and implementation workflow for ${topic}.
category: ${category}
version: 1.0.0
---

# ${topic} Design & Engineering Protocol

## Architectural Directives
- **Category**: ${category}
- **Target Format**: ${targetFormat}
- **Recommended Design System**: ${matchedSystem ? matchedSystem.name : "Custom Cyberpunk Token System"}
- **Primary Aesthetic**: ${designTokens.aestheticStyle}

## Key Requirements
${keyRequirements.map((r) => `- ${r}`).join("\n")}

## Research Findings & Citations
${webResults.map((r) => `- [${r.title}](${r.url}): ${r.snippet}`).join("\n")}

## Implementation Guidelines
1. Research design tokens and apply typography '${designTokens.fontFamily}'.
2. Construct modular components with semantic markup.
3. Integrate real-time state feedback and audio-reactive 3D visualizers when appropriate.
4. Double check security, input sanitization, and responsiveness.
`;

  // 5. Automatically write the skill to disk in skills/ directory
  try {
    const skillFolder = path.join(SKILLS_DIR, suggestedSkillName);
    if (!fs.existsSync(skillFolder)) {
      fs.mkdirSync(skillFolder, { recursive: true });
    }
    fs.writeFileSync(path.join(skillFolder, "SKILL.md"), skillContent, "utf-8");

    // Also write .skill file for legacy compatibility
    fs.writeFileSync(path.join(SKILLS_DIR, `${suggestedSkillName}.skill`), skillContent, "utf-8");

    // Write to persistent memory bank
    writeGlobalMemory({
      category: "pattern",
      title: `Research Protocol: ${topic}`,
      details: `Discovered patterns for ${topic} (${category}). Recommended design system: ${matchedSystem?.name || 'Default'}.`,
      preventionRule: `Follow guidelines in skills/${suggestedSkillName}/SKILL.md`,
      project: "JARVIS-AI-OS",
    });
  } catch (err) {
    console.error("[research-engine] Failed to persist skill to disk:", err);
  }

  return {
    topic,
    category,
    recommendedDesignSystem: matchedSystem
      ? { id: matchedSystem.id, name: matchedSystem.name, category: matchedSystem.category }
      : undefined,
    designTokens,
    keyRequirements,
    bestPractices,
    suggestedSkillName,
    skillContent,
  };
}
