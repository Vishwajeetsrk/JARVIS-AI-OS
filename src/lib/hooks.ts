import { readFileSync, readdirSync, existsSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const HOOKS_DIR = join(process.cwd(), ".jarvis", "hooks");

export type HookTrigger = "onFileChange" | "onCommit" | "onSave" | "onCommand" | "onTimer";

export interface Hook {
  name: string;
  trigger: HookTrigger;
  enabled: boolean;
  command?: string;
  script?: string;
  patterns?: string[];
  debounceMs?: number;
  lastRun?: string;
  runCount: number;
}

export type HookStatus = "success" | "error" | "skipped";

export interface HookExecution {
  hookName: string;
  status: HookStatus;
  output?: string;
  error?: string;
  duration: number;
  timestamp: string;
}

function ensureHooksDir(): void {
  if (!existsSync(HOOKS_DIR)) mkdirSync(HOOKS_DIR, { recursive: true });
}

export function registerHook(
  name: string,
  trigger: HookTrigger,
  command: string,
  patterns?: string[],
): { success: boolean; hook?: Hook; error?: string } {
  ensureHooksDir();
  const hookFile = join(HOOKS_DIR, `${name}.json`);

  if (existsSync(hookFile)) {
    return { success: false, error: `Hook "${name}" already exists` };
  }

  const hook: Hook = {
    name,
    trigger,
    enabled: true,
    command,
    patterns: patterns || ["*"],
    debounceMs: 300,
    lastRun: undefined,
    runCount: 0,
  };

  writeFileSync(hookFile, JSON.stringify(hook, null, 2));
  return { success: true, hook };
}

export function listHooks(): Hook[] {
  ensureHooksDir();
  const entries = readdirSync(HOOKS_DIR).filter((f) => f.endsWith(".json"));

  return entries.map((entry) => {
    const content = readFileSync(join(HOOKS_DIR, entry), "utf-8");
    return JSON.parse(content) as Hook;
  });
}

export function getHook(name: string): { success: boolean; hook?: Hook; error?: string } {
  const hookFile = join(HOOKS_DIR, `${name}.json`);
  if (!existsSync(hookFile)) {
    return { success: false, error: `Hook "${name}" not found` };
  }

  const content = readFileSync(hookFile, "utf-8");
  return { success: true, hook: JSON.parse(content) as Hook };
}

export function toggleHook(name: string, enabled: boolean): { success: boolean; error?: string } {
  const hookFile = join(HOOKS_DIR, `${name}.json`);
  if (!existsSync(hookFile)) {
    return { success: false, error: `Hook "${name}" not found` };
  }

  const content = readFileSync(hookFile, "utf-8");
  const hook = JSON.parse(content) as Hook;
  hook.enabled = enabled;
  writeFileSync(hookFile, JSON.stringify(hook, null, 2));
  return { success: true };
}

export function deleteHook(name: string): { success: boolean; error?: string } {
  const hookFile = join(HOOKS_DIR, `${name}.json`);
  if (!existsSync(hookFile)) {
    return { success: false, error: `Hook "${name}" not found` };
  }

  const { rmSync } = require("node:fs");
  rmSync(hookFile);
  return { success: true };
}

export function matchPatterns(filePath: string, patterns: string[]): boolean {
  if (patterns.includes("*")) return true;
  return patterns.some((pattern) => {
    const regex = new RegExp(
      pattern
        .replace(/\./g, "\\.")
        .replace(/\*/g, ".*")
        .replace(/\?/g, "."),
      "i",
    );
    return regex.test(filePath);
  });
}

export function getHooksForTrigger(trigger: HookTrigger, filePath?: string): Hook[] {
  const allHooks = listHooks().filter((h) => h.enabled && h.trigger === trigger);

  if (filePath) {
    return allHooks.filter(
      (h) => !h.patterns || h.patterns.length === 0 || matchPatterns(filePath, h.patterns),
    );
  }

  return allHooks;
}
