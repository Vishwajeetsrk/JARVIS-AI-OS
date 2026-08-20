import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

export interface InstalledSkill {
  id: string;
  name: string;
  description: string;
  source: string;
  path: string;
  category: "coding" | "design" | "productivity" | "tools" | "ai" | "automation";
  version: string;
  installedAt: string;
  hasSkillMd: boolean;
}

const SKILLS_DIR = path.resolve(process.cwd(), ".agents", "skills");

export class SkillInstallerEngine {
  private static instance: SkillInstallerEngine;

  public static getInstance(): SkillInstallerEngine {
    if (!SkillInstallerEngine.instance) {
      SkillInstallerEngine.instance = new SkillInstallerEngine();
    }
    return SkillInstallerEngine.instance;
  }

  public getInstalledSkills(): InstalledSkill[] {
    const list: InstalledSkill[] = [];
    try {
      if (!fs.existsSync(SKILLS_DIR)) {
        fs.mkdirSync(SKILLS_DIR, { recursive: true });
      }

      const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const skillFolder = path.join(SKILLS_DIR, entry.name);
          const skillMd = path.join(skillFolder, "SKILL.md");
          let desc = "Custom JARVIS operational skill";
          let version = "1.0.0";

          if (fs.existsSync(skillMd)) {
            const content = fs.readFileSync(skillMd, "utf-8");
            const descMatch = content.match(/description:\s*(.+)/i);
            if (descMatch) desc = descMatch[1].trim();
          }

          list.push({
            id: entry.name,
            name: entry.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            description: desc,
            source: "Local / .agents/skills",
            path: skillFolder,
            category: "tools",
            version,
            installedAt: "Installed",
            hasSkillMd: fs.existsSync(skillMd),
          });
        }
      }
    } catch (err) {
      console.error("[SkillInstallerEngine] Error listing skills:", err);
    }
    return list;
  }

  public installSkillFromGit(repoUrl: string, skillName?: string): { success: boolean; message: string; skillPath?: string } {
    try {
      if (!fs.existsSync(SKILLS_DIR)) {
        fs.mkdirSync(SKILLS_DIR, { recursive: true });
      }

      const inferredName = skillName || repoUrl.split("/").pop()?.replace(".git", "") || `skill-${Date.now()}`;
      const targetFolder = path.join(SKILLS_DIR, inferredName);

      if (fs.existsSync(targetFolder)) {
        return {
          success: true,
          message: `Skill '${inferredName}' is already installed at ${targetFolder}`,
          skillPath: targetFolder,
        };
      }

      // Clone repository into temporary dir or directly into skills directory
      const tempDir = path.join(process.cwd(), "data", "temp_skills", inferredName);
      if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
      fs.mkdirSync(path.dirname(tempDir), { recursive: true });

      execSync(`git clone --depth 1 ${repoUrl} "${tempDir}"`, { stdio: "pipe" });

      // If tempDir has a skills/ subfolder, copy contents, otherwise copy repository root
      const subSkills = path.join(tempDir, "skills");
      if (fs.existsSync(subSkills)) {
        fs.cpSync(subSkills, SKILLS_DIR, { recursive: true });
      } else {
        fs.cpSync(tempDir, targetFolder, { recursive: true });
      }

      // Clean up temp
      try {
        fs.rmSync(tempDir, { recursive: true, force: true });
      } catch {}

      return {
        success: true,
        message: `Successfully installed skill '${inferredName}' from ${repoUrl}!`,
        skillPath: targetFolder,
      };
    } catch (err: any) {
      return {
        success: false,
        message: `Failed to install skill from ${repoUrl}: ${err.message}`,
      };
    }
  }

  public createCustomSkill(name: string, description: string, instructions: string): { success: boolean; skillPath: string } {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const targetFolder = path.join(SKILLS_DIR, slug);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }

    const skillContent = `---
name: ${name}
description: ${description}
---

# ${name}

${instructions}
`;
    fs.writeFileSync(path.join(targetFolder, "SKILL.md"), skillContent, "utf-8");
    return { success: true, skillPath: targetFolder };
  }
}

export const skillInstallerEngine = SkillInstallerEngine.getInstance();
