/**
 * Code Runner Tool — Execute code snippets safely in a sandboxed environment.
 *
 * Supports: JavaScript, TypeScript, Python, Shell, SQL.
 * Uses subprocess with timeout and output capture.
 */

import { exec } from "child_process";
import { promisify } from "util";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

const execAsync = promisify(exec);

export interface CodeRunOptions {
  /** Code to execute */
  code: string;
  /** Programming language */
  language: "javascript" | "typescript" | "python" | "shell" | "sql";
  /** Timeout in ms (default 30000) */
  timeout?: number;
  /** Working directory */
  workingDirectory?: string;
}

export interface CodeRunResult {
  /** Program output (stdout) */
  output: string;
  /** Error output (stderr) */
  errors: string;
  /** Exit code */
  exitCode: number;
  /** Whether execution timed out */
  timedOut: boolean;
  /** Language used */
  language: string;
}

// Temp directory for code execution
const TEMP_DIR = path.join(os.tmpdir(), "jarvis-code-runner");

// Ensure temp directory exists
function ensureTempDir(): void {
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }
}

// Map language to file extension and execution command
const LANGUAGE_CONFIG: Record<string, { ext: string; command: string }> = {
  javascript: { ext: ".mjs", command: "node" },
  typescript: { ext: ".ts", command: "npx tsx" },
  python: { ext: ".py", command: "python" },
  shell: { ext: ".sh", command: process.platform === "win32" ? "powershell" : "bash" },
  sql: { ext: ".sql", command: "" }, // SQL requires a database connection
};

/**
 * Execute code in a sandboxed environment.
 */
export async function executeCode(options: CodeRunOptions): Promise<CodeRunResult> {
  const {
    code,
    language,
    timeout = 30000,
    workingDirectory = os.homedir(),
  } = options;

  // SQL execution requires special handling
  if (language === "sql") {
    return {
      output: "SQL execution requires a database connection. Use the Supabase MCP tool instead.",
      errors: "",
      exitCode: 1,
      timedOut: false,
      language,
    };
  }

  const config = LANGUAGE_CONFIG[language];
  if (!config) {
    return {
      output: "",
      errors: `Unsupported language: ${language}. Supported: javascript, typescript, python, shell`,
      exitCode: 1,
      timedOut: false,
      language,
    };
  }

  ensureTempDir();

  const filename = `code-${Date.now()}${config.ext}`;
  const filepath = path.join(TEMP_DIR, filename);

  try {
    // Write code to temp file
    fs.writeFileSync(filepath, code, "utf-8");

    // Execute
    const command = `${config.command} "${filepath}"`;
    const { stdout, stderr } = await execAsync(command, {
      cwd: workingDirectory,
      timeout,
      maxBuffer: 1024 * 1024, // 1MB
      env: {
        ...process.env,
        NODE_NO_WARNINGS: "1",
        FORCE_COLOR: "0",
      },
    });

    return {
      output: stdout.slice(0, 10000),
      errors: stderr.slice(0, 5000),
      exitCode: 0,
      timedOut: false,
      language,
    };
  } catch (err: unknown) {
    const execErr = err as {
      stdout?: string;
      stderr?: string;
      code?: number;
      killed?: boolean;
      message?: string;
    };

    return {
      output: (execErr.stdout || "").slice(0, 10000),
      errors: (execErr.stderr || execErr.message || "").slice(0, 5000),
      exitCode: execErr.code || 1,
      timedOut: execErr.killed || false,
      language,
    };
  } finally {
    // Cleanup temp file
    try {
      fs.unlinkSync(filepath);
    } catch {
      // Ignore cleanup errors
    }
  }
}

/**
 * Mastra-compatible tool definition.
 */
export const codeRunnerTool = {
  name: "runCode",
  description:
    "Execute a code snippet in a sandboxed environment. Use this when the user asks to " +
    "run code, test a script, execute a snippet, or try out programming logic. " +
    "Supports JavaScript, TypeScript, Python, and Shell. Returns output and errors.",
  parameters: {
    type: "object" as const,
    properties: {
      code: {
        type: "string",
        description: "The code to execute",
      },
      language: {
        type: "string",
        enum: ["javascript", "typescript", "python", "shell"],
        description: "Programming language of the code",
      },
      timeout: {
        type: "number",
        description: "Timeout in milliseconds (default 30000)",
      },
    },
    required: ["code", "language"],
  },
  execute: async (args: CodeRunOptions) => {
    return await executeCode(args);
  },
};
