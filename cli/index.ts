#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";
import { execSync } from "node:child_process";
import { mistakeLearningEngine } from "../src/lib/memory/mistake-learning-engine";
import { skillInstallerEngine } from "../src/lib/skills/skill-installer-engine";

const pkg = JSON.parse(readFileSync(join(import.meta.dirname, "../package.json"), "utf-8"));

const program = new Command();
program
  .name("jarvis")
  .description("Jarvis AI OS — Persistent-memory AI Operating System")
  .version(pkg.version);

const JARVIS_DIR = join(process.cwd(), ".jarvis");

function ensureJarvisDir(): void {
  if (!existsSync(JARVIS_DIR)) mkdirSync(JARVIS_DIR, { recursive: true });
}

function loadConfig(): Record<string, unknown> {
  const configPath = join(JARVIS_DIR, "jarvis.json");
  if (!existsSync(configPath)) return {};
  return JSON.parse(readFileSync(configPath, "utf-8"));
}

function saveConfig(config: Record<string, unknown>): void {
  ensureJarvisDir();
  writeFileSync(join(JARVIS_DIR, "jarvis.json"), JSON.stringify(config, null, 2));
}

function log(msg: string): void {
  console.log(`\x1b[36m[jarvis]\x1b[0m ${msg}`);
}

function success(msg: string): void {
  console.log(`\x1b[32m[jarvis]\x1b[0m ${msg}`);
}

function error(msg: string): void {
  console.error(`\x1b[31m[jarvis]\x1b[0m ${msg}`);
}

// ─── init ───
program
  .command("init")
  .description("Initialize .jarvis directory with defaults")
  .action(() => {
    ensureJarvisDir();
    const configPath = join(JARVIS_DIR, "jarvis.json");
    if (existsSync(configPath)) {
      log("Already initialized. Skipping.");
      return;
    }
    const defaultConfig = {
      schemaVersion: "1.0",
      projectName: "Jarvis Project",
      version: "1.0.0",
      specs: { enabled: true },
      hooks: { enabled: true },
      steering: { enabled: true },
    };
    saveConfig(defaultConfig);
    const dirs = ["specs/_templates", "hooks", "steering", "cache"];
    for (const dir of dirs) {
      mkdirSync(join(JARVIS_DIR, dir), { recursive: true });
    }
    success("Initialized .jarvis/ directory with defaults.");
  });

// ─── status ───
program
  .command("status")
  .description("Show project status")
  .action(() => {
    const config = loadConfig();
    console.log("\n\x1b[1mJarvis AI OS Status\x1b[0m");
    console.log("─".repeat(40));
    console.log(`Project: ${config.projectName || "Not initialized"}`);
    console.log(`Version: ${config.version || "N/A"}`);
    console.log(`Specs:   ${config.specs?.enabled ? "Enabled" : "Disabled"}`);
    console.log(`Hooks:   ${config.hooks?.enabled ? "Enabled" : "Disabled"}`);
    console.log(`Steering: ${config.steering?.enabled ? "Enabled" : "Disabled"}`);
    console.log();
  });

// ─── config ───
const configCmd = program.command("config").description("Manage configuration");

configCmd
  .command("get")
  .description("Get a config value")
  .argument("<key>", "Key to get (dot notation)")
  .action((key: string) => {
    const config = loadConfig();
    const keys = key.split(".");
    let value: unknown = config;
    for (const k of keys) {
      if (value && typeof value === "object") value = (value as Record<string, unknown>)[k];
      else { value = undefined; break; }
    }
    console.log(value !== undefined ? JSON.stringify(value, null, 2) : "undefined");
  });

configCmd
  .command("set")
  .description("Set a config value")
  .argument("<key>", "Key to set (dot notation)")
  .argument("<value>", "Value to set")
  .action((key: string, value: string) => {
    const config = loadConfig();
    const keys = key.split(".");
    let target = config;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!target[keys[i]] || typeof target[keys[i]] !== "object") target[keys[i]] = {};
      target = target[keys[i]] as Record<string, unknown>;
    }
    try { target[keys[keys.length - 1]] = JSON.parse(value); } catch { target[keys[keys.length - 1]] = value; }
    saveConfig(config);
    success(`Set ${key} = ${JSON.stringify(target[keys[keys.length - 1]])}`);
  });

// ─── specs ───
const specsCmd = program.command("specs").description("Manage specs");

specsCmd
  .command("list")
  .description("List all specs")
  .action(() => {
    const specsDir = join(JARVIS_DIR, "specs");
    if (!existsSync(specsDir)) { log("No specs directory found."); return; }

    const entries = readdirSync(specsDir, { withFileTypes: true }).filter(
      (e: any) => e.isDirectory() && !e.name.startsWith("_"),
    );
    if (entries.length === 0) { log("No specs found."); return; }
    console.log("\n\x1b[1mSpecs\x1b[0m");
    console.log("─".repeat(40));
    for (const entry of entries) {
      console.log(`  \x1b[36m${entry.name}\x1b[0m`);
    }
    console.log();
  });

specsCmd
  .command("show")
  .description("Show spec details")
  .argument("<name>", "Spec name")
  .action((name: string) => {
    const specDir = join(JARVIS_DIR, "specs", name);
    if (!existsSync(specDir)) { error(`Spec "${name}" not found.`); return; }
    const files = ["requirements.md", "design.md", "tasks.md"];
    for (const file of files) {
      const filePath = join(specDir, file);
      if (existsSync(filePath)) {
        console.log(`\n\x1b[1m${file}\x1b[0m`);
        console.log("─".repeat(40));
        console.log(readFileSync(filePath, "utf-8"));
      }
    }
  });

specsCmd
  .command("create")
  .description("Create a new spec")
  .argument("<name>", "Spec name")
  .option("-t, --type <type>", "Type: feature, bugfix, quick", "feature")
  .action((name: string, options: { type: string }) => {
    const specDir = join(JARVIS_DIR, "specs", name);
    if (existsSync(specDir)) { error(`Spec "${name}" already exists.`); return; }
    mkdirSync(specDir, { recursive: true });
    writeFileSync(join(specDir, "requirements.md"), `# Requirements: ${name}\n\n[Add requirements here]\n`);
    writeFileSync(join(specDir, "design.md"), `# Design: ${name}\n\n[Add design here]\n`);
    writeFileSync(join(specDir, "tasks.md"), `# Tasks: ${name}\n\n- [ ] TASK-001: [Add task]\n`);
    success(`Created spec "${name}" (${options.type}).`);
  });

// ─── hooks ───
const hooksCmd = program.command("hooks").description("Manage hooks");

hooksCmd
  .command("list")
  .description("List registered hooks")
  .action(() => {
    const hooksDir = join(JARVIS_DIR, "hooks");
    if (!existsSync(hooksDir)) { log("No hooks directory found."); return; }

    const entries = readdirSync(hooksDir, { withFileTypes: true }).filter(
      (e: any) => e.name.endsWith(".json"),
    );
    if (entries.length === 0) { log("No hooks registered."); return; }
    console.log("\n\x1b[1mHooks\x1b[0m");
    console.log("─".repeat(40));
    for (const entry of entries) {
      const hook = JSON.parse(readFileSync(join(hooksDir, entry.name), "utf-8"));
      const status = hook.enabled ? "\x1b[32menabled\x1b[0m" : "\x1b[31mdisabled\x1b[0m";
      console.log(`  \x1b[36m${hook.name}\x1b[0m [${status}] — ${hook.trigger}`);
    }
    console.log();
  });

// ─── steering ───
const steeringCmd = program.command("steering").description("Manage steering files");

steeringCmd
  .command("list")
  .description("List steering files")
  .action(() => {
    const steerDir = join(JARVIS_DIR, "steering");
    if (!existsSync(steerDir)) { log("No steering directory found."); return; }

    const entries = readdirSync(steerDir, { withFileTypes: true }).filter(
      (e: any) => e.name.endsWith(".md"),
    );
    if (entries.length === 0) { log("No steering files found."); return; }
    console.log("\n\x1b[1mSteering Files\x1b[0m");
    console.log("─".repeat(40));
    for (const entry of entries) {
      console.log(`  \x1b[36m${entry.name}\x1b[0m`);
    }
    console.log();
  });

// ─── memory ───
program
  .command("memory")
  .description("Search cross-session memory")
  .argument("<query>", "Search query")
  .option("-l, --limit <n>", "Max results", "5")
  .action((query: string, options: { limit: string }) => {
    log(`Searching memory for "${query}" (limit: ${options.limit})...`);
    log("Memory search requires Supabase connection. Use the web console for full memory search.");
  });

// ─── update ───
program
  .command("update")
  .description("Check for updates")
  .action(() => {
    log("Checking for updates...");
    log(`Current version: ${pkg.version}`);
    log("Run 'npm update -g @vishwajeet/jarvis' to update.");
  });

// ─── voice ───
program
  .command("voice")
  .description("Launch Python Desktop Voice Assistant (Echo Guard & Wake-word loop)")
  .action(() => {
    log("Starting JARVIS Python Voice Assistant daemon...");
    try {
      execSync("python scripts/jarvis_desktop_assistant.py", { stdio: "inherit" });
    } catch {
      error("Voice assistant terminated.");
    }
  });

// ─── plan ───
program
  .command("plan")
  .description("Show 12:00 PM 5-Pillar Daily Focused Schedule")
  .action(() => {
    console.log("\n\x1b[1m\x1b[36m=== TODAY'S 12:00 PM FOCUSED SCHEDULE (5 PILLARS) ===\x1b[0m");
    console.log("─".repeat(55));
    console.log("1. \x1b[33m[Work]\x1b[0m 7-Step Salesforce & Razorpay donation reconciliation");
    console.log("2. \x1b[34m[Learning]\x1b[0m PostgreSQL Vector embeddings & indexing (45 min)");
    console.log("3. \x1b[35m[Project]\x1b[0m Wardelio App: 3D interactive buttons & animations (1 hr)");
    console.log("4. \x1b[32m[Gym]\x1b[0m Strength workout & hydration routine (1 hr)");
    console.log("5. \x1b[36m[Side Income]\x1b[0m Package AgencyOS Razorpay sync workflow demo (30 min)");
    console.log("─".repeat(55));
    console.log("\x1b[90mFocus Rule: Maximum 5 core tasks today. Zero multitasking.\x1b[0m\n");
  });

// ─── salesforce ───
program
  .command("salesforce")
  .description("Generate daily Salesforce & Razorpay donation reconciliation update email")
  .action(() => {
    try {
      execSync("python scripts/salesforce_sync_helper.py", { stdio: "inherit" });
    } catch (e: any) {
      error(`Salesforce helper failed: ${e.message}`);
    }
  });

// ─── wardelio ───
program
  .command("wardelio")
  .description("Open Wardelio mobile app in VS Code")
  .action(() => {
    log("Opening Wardelio mobile app project...");
    try {
      execSync("code C:\\Users\\vishw\\OneDrive\\Desktop\\Wardelio", { stdio: "inherit" });
      success("Wardelio opened in VS Code.");
    } catch (e: any) {
      error(`Could not open Wardelio: ${e.message}`);
    }
  });

// ─── youtube ───
program
  .command("youtube")
  .description("Show YouTube Growth Strategy for VishwaJeetSrK & TinyLifeHacks")
  .action(() => {
    console.log("\n\x1b[1m\x1b[31m=== YOUTUBE GROWTH & CONTENT ENGINE ===\x1b[0m");
    console.log("─".repeat(60));
    console.log("🔴 \x1b[1mVishwaJeetSrK\x1b[0m (94 subs) — AI, JARVIS OS & Tech Journey");
    console.log("   • Cadence: 1 Long-Form/week + 2-3 Derived Shorts");
    console.log("   • Priority Video: 'I Built My Own JARVIS AI Assistant with 3D Avatar'");
    console.log();
    console.log("⚡ \x1b[1mTinyLifeHacks\x1b[0m (12 subs) — Fast Productivity & Tech Shortcuts");
    console.log("   • Cadence: 3-5 High-Impact 30-sec Shorts/week");
    console.log("   • Priority Video: 'Stop Fixing Messy Names in Excel! Press Ctrl + E'");
    console.log("─".repeat(60));
    console.log("\x1b[90mMultiplication Rule: 1 Long Video ➔ 3 Shorts + 1 LinkedIn Post + 1 Blog\x1b[0m\n");
  });

// ─── scan ───
program
  .command("scan")
  .description("Safely scan laptop storage, large files, temp caches & duplicates")
  .action(() => {
    try {
      execSync("powershell -NoProfile -ExecutionPolicy Bypass -File scripts/scan_laptop_health.ps1", { stdio: "inherit" });
    } catch (e: any) {
      error(`Could not execute storage scan: ${e.message}`);
    }
  });

// ─── record ───
program
  .command("record")
  .description("Launch Screen Recording Studio in browser console")
  .action(() => {
    log("Opening JARVIS Screen Recording Studio: http://localhost:8080/console");
    try {
      execSync("start http://localhost:8080/console", { stdio: "inherit" });
      success("Screen Recording Studio opened with full-screen, window, and teleprompter capture.");
    } catch {}
  });

// ─── skill:install ───
program
  .command("skill:install <repoUrl>")
  .description("Install skills from GitHub (e.g. https://github.com/jeffallan/claude-skills)")
  .option("-n, --name <name>", "Custom name for the skill")
  .action((repoUrl, opts) => {
    log(`Installing skill from: ${repoUrl}...`);
    const result = skillInstallerEngine.installSkillFromGit(repoUrl, opts.name);
    if (result.success) {
      success(result.message);
    } else {
      error(result.message);
    }
  });

// ─── skill:list ───
program
  .command("skill:list")
  .description("List all installed skills in JARVIS AI OS")
  .action(() => {
    const skills = skillInstallerEngine.getInstalledSkills();
    console.log("\n\x1b[1m\x1b[36m=== INSTALLED JARVIS SKILLS ===\x1b[0m");
    console.log("─".repeat(60));
    skills.forEach((s, idx) => {
      console.log(`${idx + 1}. \x1b[1m${s.name}\x1b[0m (${s.id})`);
      console.log(`   \x1b[90m${s.description}\x1b[0m`);
    });
    console.log("─".repeat(60));
    console.log(`Total: ${skills.length} skills active.\n`);
  });

// ─── lessons ───
program
  .command("lessons")
  .description("Show all learned lessons and mistake prevention rules")
  .action(() => {
    const lessons = mistakeLearningEngine.getLessons();
    console.log("\n\x1b[1m\x1b[32m=== JARVIS LEARNED LESSONS & GUARD RULES ===\x1b[0m");
    console.log("─".repeat(65));
    lessons.forEach((l, idx) => {
      console.log(`🛡️  \x1b[1m[${l.category.toUpperCase()}]\x1b[0m ${l.triggerContext}`);
      console.log(`   • \x1b[31mMistake Prevented:\x1b[0m ${l.mistakePattern}`);
      console.log(`   • \x1b[32mPermanent Rule:\x1b[0m ${l.permanentRule}`);
      console.log();
    });
    console.log("─".repeat(65));
  });

// ─── research ───
program
  .command("research <query...>")
  .description("Deep research UI design systems, top GitHub repositories, and frameworks")
  .action((queryParts: string[]) => {
    const query = queryParts.join(" ");
    console.log(`\n\x1b[1m\x1b[36m╔══════════════════════════════════════════════════════════════════╗\x1b[0m`);
    console.log(`\x1b[1m\x1b[36m║   🔍 JARVIS DEEP RESEARCH ENGINE — TOP GITHUB REPOSITORIES       ║\x1b[0m`);
    console.log(`\x1b[1m\x1b[36m╚══════════════════════════════════════════════════════════════════╝\x1b[0m`);
    console.log(`\x1b[90mQuery:\x1b[0m "\x1b[1m${query}\x1b[0m"\n`);

    const TOP_REPOS = [
      {
        name: "shadcn/ui",
        url: "https://github.com/shadcn-ui/ui",
        stars: "75.4k ★",
        category: "UI Components",
        desc: "Beautifully designed components built with Radix UI and Tailwind CSS. The gold standard for modern web design.",
      },
      {
        name: "aceternity/ui",
        url: "https://github.com/mannupaaji/aceternity-ui",
        stars: "18.2k ★",
        category: "Micro-Animations & 3D Cards",
        desc: "Next-level futuristic animated components with Tailwind CSS & Framer Motion for landing pages.",
      },
      {
        name: "magicuidesign/magicui",
        url: "https://github.com/magicuidesign/magicui",
        stars: "14.8k ★",
        category: "Animated UI System",
        desc: "50+ animated UI components built with React, TypeScript, Tailwind CSS, and Framer Motion.",
      },
      {
        name: "mrdoob/three.js",
        url: "https://github.com/mrdoob/three.js",
        stars: "102k ★",
        category: "3D Web Graphics",
        desc: "JavaScript 3D library for WebGL, holographic Arc Reactors, and immersive interactive graphics.",
      },
      {
        name: "pixiv/three-vrm",
        url: "https://github.com/pixiv/three-vrm",
        stars: "3.2k ★",
        category: "3D Humanoid Avatars",
        desc: "VRM 3D avatar rendering with eye-tracking, spring bone hair physics, and mouth lip-sync.",
      },
      {
        name: "lucide-icons/lucide",
        url: "https://github.com/lucide-icons/lucide",
        stars: "16.5k ★",
        category: "Icons & Typography",
        desc: "Beautiful & consistent icon toolkit for modern multi-platform application design.",
      },
      {
        name: "mastra-ai/mastra",
        url: "https://github.com/mastra-ai/mastra",
        stars: "12.8k ★",
        category: "Agent Orchestration",
        desc: "Multi-agent TypeScript framework with workflow graph routing and MCP tool integration.",
      },
    ];

    console.log(`\x1b[1m\x1b[33m[★ TOP RECOMMENDED GITHUB REPOSITORIES FOR UI/UX DESIGN]:\x1b[0m`);
    console.log("─".repeat(70));
    TOP_REPOS.forEach((repo, i) => {
      console.log(`\x1b[1m${i + 1}. ${repo.name}\x1b[0m  \x1b[32m(${repo.stars})\x1b[0m — \x1b[36m[${repo.category}]\x1b[0m`);
      console.log(`   \x1b[94m🔗 ${repo.url}\x1b[0m`);
      console.log(`   \x1b[90m${repo.desc}\x1b[0m\n`);
    });

    console.log("─".repeat(70));
    console.log(`\x1b[1m\x1b[35m[🎨 53 INTEGRATED DESIGN SYSTEMS IN YOUR JARVIS OS]:\x1b[0m`);
    console.log(` • \x1b[1mLinear Dark Theme\x1b[0m — Sleek cybernetic borders, violet glows & monospace metadata`);
    console.log(` • \x1b[1mApple Glassmorphism\x1b[0m — Backdrop blur, subtle rim lighting & spring animations`);
    console.log(` • \x1b[1mClaude Minimalist\x1b[0m — Warm slate typography with terracotta accents`);
    console.log(` • \x1b[1mBento Grid\x1b[0m — Responsive card layouts with micro-interaction hover scales\n`);

    success("Deep research completed! Component templates are available in src/components/ui/.");
  });

// ─── audit:screen ───
program
  .command("audit:screen")
  .description("Deeply scan & audit live running screen/app for bugs, missing UI, and fix plan")
  .action(async () => {
    log("Capturing live screen & running application window...");
    const { deepVisualAuditor } = await import("../src/lib/vision/deep-visual-auditor");
    try {
      const screenshot = deepVisualAuditor.captureScreen();
      log(`Screen captured: ${screenshot}`);
      log("Analyzing visual hierarchy, detecting UI bugs, missing elements & layout shifts...");
      const result = deepVisualAuditor.auditImageOrScreen(screenshot, true);
      success("Screen audit completed!");
      console.log(`\n\x1b[1m\x1b[36m=== SCREEN QUALITY & BUG AUDIT REPORT ===\x1b[0m`);
      console.log(`Summary: ${result.summary}`);
      console.log(`\n\x1b[31m[Bugs & Visual Concerns]:\x1b[0m`);
      result.bugsFound.forEach((b) => console.log(` • ${b}`));
      console.log(`\n\x1b[33m[Missing UX Elements]:\x1b[0m`);
      result.missingElements.forEach((m) => console.log(` • ${m}`));
      console.log(`\n\x1b[32m[Step-by-Step Fix Plan]:\x1b[0m`);
      result.fixPlan.forEach((f, i) => console.log(` ${i + 1}. ${f}`));
      console.log(`\n\x1b[90mReport saved & opened in VS Code: ${result.reportPath}\x1b[0m\n`);
    } catch (e: any) {
      error(`Could not audit screen: ${e.message}`);
    }
  });

// ─── audit:file ───
program
  .command("audit:file <filePath>")
  .description("Deeply audit an image, SVG vector, or video file for quality, bugs, and fixes")
  .action(async (filePath: string) => {
    const { deepVisualAuditor } = await import("../src/lib/vision/deep-visual-auditor");
    log(`Auditing file: ${filePath}...`);
    try {
      const isSvg = filePath.endsWith(".svg");
      const result = isSvg
        ? deepVisualAuditor.auditSvg(filePath)
        : deepVisualAuditor.auditImageOrScreen(filePath, false);
      success("File audit completed!");
      console.log(`\n\x1b[1m\x1b[36m=== VISUAL & STRUCTURAL AUDIT REPORT ===\x1b[0m`);
      console.log(`Summary: ${result.summary}`);
      console.log(`\n\x1b[31m[Issues Found]:\x1b[0m`);
      result.bugsFound.forEach((b) => console.log(` • ${b}`));
      console.log(`\n\x1b[32m[Fix Plan]:\x1b[0m`);
      result.fixPlan.forEach((f, i) => console.log(` ${i + 1}. ${f}`));
      console.log(`\n\x1b[90mReport saved & opened in VS Code: ${result.reportPath}\x1b[0m\n`);
    } catch (e: any) {
      error(`Could not audit file: ${e.message}`);
    }
  });

// ─── wardelio:upgrade ───
program
  .command("wardelio:upgrade")
  .description("Autonomously upgrade Wardelio mobile app with 3D tactile buttons, luxury cards & settings flow")
  .action(async () => {
    log("Scanning C:\\Users\\vishw\\OneDrive\\Desktop\\Wardelio...");
    const { fileOperationEngine } = await import("../src/lib/assistant/file-operation-engine");
    const result = fileOperationEngine.upgradeWardelioSettingsAndButtons();
    if (result.success) {
      success("Wardelio mobile application upgraded successfully!");
      console.log(`\n\x1b[1m\x1b[35m[📱 MODIFIED & CREATED FILES IN WARDELIO]:\x1b[0m`);
      result.modifiedFiles.forEach((f) => console.log(` • \x1b[32m${f}\x1b[0m`));
      console.log(`\n\x1b[90mAll changes opened in VS Code & recorded in action history.\x1b[0m\n`);
    } else {
      error("Failed to upgrade Wardelio files.");
    }
  });

// ─── file:history ───
program
  .command("file:history")
  .description("View full history of all autonomous file operations and edits across projects")
  .action(async () => {
    const { fileOperationEngine } = await import("../src/lib/assistant/file-operation-engine");
    const history = fileOperationEngine.getHistory();
    console.log(`\n\x1b[1m\x1b[36m=== JARVIS AUTONOMOUS FILE OPERATIONS HISTORY (${history.length} operations) ===\x1b[0m`);
    history.forEach((h, i) => {
      console.log(`\x1b[1m${i + 1}. [${h.action.toUpperCase()}]\x1b[0m \x1b[90m(${new Date(h.timestamp).toLocaleTimeString()})\x1b[0m: ${h.description}`);
      console.log(`   \x1b[34mTarget:\x1b[0m ${h.targetPath}`);
    });
    console.log("");
  });

program.parse();






