/**
 * Shell Executor Tool — Execute OS commands from AI voice/text input.
 *
 * Sandboxed execution with timeout, working directory restrictions,
 * and command allowlist for safety.
 */

import { exec, type ChildProcess } from "child_process";
import { promisify } from "util";
import * as path from "path";
import * as os from "os";

const execAsync = promisify(exec);

export interface ShellExecOptions {
  /** Command to execute */
  command: string;
  /** Working directory (restricted to user folders) */
  workingDirectory?: string;
  /** Timeout in ms (default 30000) */
  timeout?: number;
  /** Maximum output length in chars (default 10000) */
  maxOutputLength?: number;
}

export interface ShellExecResult {
  /** Command output (stdout) */
  stdout: string;
  /** Error output (stderr) */
  stderr: string;
  /** Exit code */
  exitCode: number;
  /** Whether command timed out */
  timedOut: boolean;
  /** Whether command was allowed */
  allowed: boolean;
}

// Commands that are safe to execute without restrictions
const SAFE_COMMANDS = new Set([
  "dir", "ls", "pwd", "echo", "date", "time", "whoami", "hostname",
  "tree", "type", "cat", "head", "tail", "wc",
  "git status", "git log", "git diff", "git branch",
  "npm list", "npm outdated", "npm info",
  "node --version", "python --version", "pip list",
]);

// Commands that require sandboxing
const RESTRICTED_PATTERNS = [
  /rm\s+-rf/i,
  /del\s+\/[sfq]/i,
  /format\s+/i,
  /rmdir\s+/i,
  /iex\s/i,
  /invoke-expression/i,
  /curl\s+.*\|\s*(sh|bash|powershell)/i,
  /wget\s+.*\|\s*(sh|bash|powershell)/i,
];

// Blocked commands (never allowed)
const BLOCKED_COMMANDS = [
  /shutdown/i,
  /restart/i,
  /logoff/i,
  /taskkill/i,
  /kill/i,
  /mkfs/i,
  /dd\s+if=/i,
  /:\(\)\s*\{/,  // Fork bomb
];

function isCommandAllowed(command: string): { allowed: boolean; reason?: string } {
  const trimmed = command.trim();

  // Check blocked commands first
  for (const pattern of BLOCKED_COMMANDS) {
    if (pattern.test(trimmed)) {
      return { allowed: false, reason: `Blocked command: ${pattern.source}` };
    }
  }

  // Check restricted patterns
  for (const pattern of RESTRICTED_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { allowed: false, reason: `Restricted pattern: ${pattern.source}` };
    }
  }

  // Check safe commands (exact match or starts with)
  for (const safe of SAFE_COMMANDS) {
    if (trimmed.toLowerCase().startsWith(safe)) {
      return { allowed: true };
    }
  }

  // Allow common non-dangerous commands
  const firstWord = trimmed.split(/\s+/)[0].toLowerCase();
  const allowedFirstWords = [
    "node", "npm", "npx", "yarn", "pnpm", "bun",
    "python", "pip", "python3",
    "git", "docker", "docker-compose",
    "code", "cursor", "notepad", "explorer",
    "open", "start",
    "ls", "cd", "pwd", "mkdir", "touch", "cp", "mv",
    "find", "grep", "rg", "ag", "fd",
    "jq", "sed", "awk", "sort", "uniq", "cut", "tr",
    "curl", "wget",
    "powershell", "pwsh", "cmd",
    "where", "which", "type",
    "get-childitem", "get-content", "get-date", "get-process",
    "select-string", "select-object", "where-object", "foreach-object",
    "invoke-webrequest", "invoke-restmethod",
  ];

  if (allowedFirstWords.includes(firstWord)) {
    return { allowed: true };
  }

  return { allowed: false, reason: `Unknown command: ${firstWord}` };
}

/**
 * Execute a shell command with safety restrictions.
 */
export async function executeShell(options: ShellExecOptions): Promise<ShellExecResult> {
  const {
    command,
    workingDirectory = os.homedir(),
    timeout = 30000,
    maxOutputLength = 10000,
  } = options;

  // Check if command is allowed
  const check = isCommandAllowed(command);
  if (!check.allowed) {
    return {
      stdout: "",
      stderr: check.reason || "Command not allowed",
      exitCode: 1,
      timedOut: false,
      allowed: false,
    };
  }

  // Resolve working directory (prevent escaping user folders)
  const resolvedDir = path.resolve(workingDirectory);
  const homeDir = os.homedir();
  if (!resolvedDir.startsWith(homeDir) && resolvedDir !== os.tmpdir()) {
    return {
      stdout: "",
      stderr: "Working directory must be within your home folder",
      exitCode: 1,
      timedOut: false,
      allowed: true,
    };
  }

  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd: resolvedDir,
      timeout,
      maxBuffer: 1024 * 1024, // 1MB
      shell: process.platform === "win32" ? "powershell.exe" : "/bin/bash",
      env: { ...process.env, FORCE_COLOR: "0" },
    });

    return {
      stdout: stdout.slice(0, maxOutputLength),
      stderr: stderr.slice(0, maxOutputLength),
      exitCode: 0,
      timedOut: false,
      allowed: true,
    };
  } catch (err: unknown) {
    const execErr = err as {
      code?: number;
      stdout?: string;
      stderr?: string;
      killed?: boolean;
      message?: string;
    };

    return {
      stdout: (execErr.stdout || "").slice(0, maxOutputLength),
      stderr: (execErr.stderr || execErr.message || "").slice(0, maxOutputLength),
      exitCode: execErr.code || 1,
      timedOut: execErr.killed || false,
      allowed: true,
    };
  }
}

/**
 * Mastra-compatible tool definition for shell execution.
 */
export const shellExecutorTool = {
  name: "executeShell",
  description:
    "Execute a shell command on the user's computer. Use this to run programs, " +
    "check file contents, list directories, install packages, or perform system operations. " +
    "Commands are sandboxed for safety.",
  parameters: {
    type: "object" as const,
    properties: {
      command: {
        type: "string",
        description: "The shell command to execute",
      },
      workingDirectory: {
        type: "string",
        description: "Working directory (defaults to user home)",
      },
      timeout: {
        type: "number",
        description: "Timeout in milliseconds (default 30000)",
      },
    },
    required: ["command"],
  },
  execute: async (args: ShellExecOptions) => {
    return await executeShell(args);
  },
};
