import { NextRequest, NextResponse } from "next/server";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import path from "node:path";

const execAsync = promisify(exec);

// Allowed safe applications for instant launcher
const APP_SHORTCUTS: Record<string, { cmd: string; name: string }> = {
  vscode: { cmd: "code .", name: "Visual Studio Code" },
  terminal: { cmd: "start wt || start powershell", name: "Windows Terminal" },
  chrome: { cmd: "start chrome", name: "Google Chrome" },
  explorer: { cmd: "explorer .", name: "File Explorer" },
  notepad: { cmd: "notepad", name: "Notepad" },
  calculator: { cmd: "calc", name: "Calculator" },
  slack: { cmd: "start slack || start chrome https://app.slack.com", name: "Slack" },
  discord: { cmd: "start discord || start chrome https://discord.com/app", name: "Discord" },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, appName, command, cwd = "d:\\Team of Vishwajeet", filePath, fileContent } = body;

    // 1. Launch local PC/Laptop application
    if (action === "launch_app") {
      const app = APP_SHORTCUTS[appName?.toLowerCase()];
      if (!app) {
        // Fallback to direct app launch if safe
        if (/^[a-zA-Z0-9_\-\.\s]+$/.test(appName)) {
          await execAsync(`start "" "${appName}"`);
          return NextResponse.json({ success: true, message: `Launched ${appName}` });
        }
        return NextResponse.json({ error: "Invalid application name" }, { status: 400 });
      }

      try {
        exec(app.cmd, { cwd: cwd || process.cwd() });
        return NextResponse.json({ success: true, message: `Launched ${app.name}` });
      } catch (err: any) {
        return NextResponse.json({ error: `Failed to launch ${app.name}: ${err.message}` }, { status: 500 });
      }
    }

    // 2. Execute local CLI/PowerShell command
    if (action === "execute_command") {
      if (!command) {
        return NextResponse.json({ error: "Command string is required" }, { status: 400 });
      }

      // Security check: reject destructive full-disk operations
      const lower = command.toLowerCase();
      if (lower.includes("format ") || lower.includes("rmdir /s /q c:\\") || lower.includes("del /f /s /q c:\\")) {
        return NextResponse.json({ error: "Destructive root commands are restricted." }, { status: 403 });
      }

      const { stdout, stderr } = await execAsync(command, { cwd: cwd || process.cwd(), timeout: 15000 });
      return NextResponse.json({
        success: true,
        stdout: stdout || "",
        stderr: stderr || "",
        command,
      });
    }

    // 3. File System: Read file
    if (action === "read_file") {
      if (!filePath) return NextResponse.json({ error: "filePath required" }, { status: 400 });
      const content = await fs.readFile(filePath, "utf-8");
      return NextResponse.json({ success: true, filePath, content });
    }

    // 4. File System: Write file
    if (action === "write_file") {
      if (!filePath || fileContent === undefined) {
        return NextResponse.json({ error: "filePath and fileContent required" }, { status: 400 });
      }
      await fs.writeFile(filePath, fileContent, "utf-8");
      return NextResponse.json({ success: true, filePath, message: "File written successfully" });
    }

    // 5. System Status Check
    if (action === "status") {
      return NextResponse.json({
        success: true,
        platform: process.platform,
        arch: process.arch,
        nodeVersion: process.version,
        uptime: process.uptime(),
        availableShortcuts: Object.keys(APP_SHORTCUTS),
      });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "OS Operation Failed" }, { status: 500 });
  }
}
