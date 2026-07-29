import { createFileRoute } from "@tanstack/react-router";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";

const execFileAsync = promisify(execFile);

// Queries Windows system date/time/user info via python scripts/desktop-voice-bridge.py
export const Route = createFileRoute("/api/desktop/system")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const scriptPath = path.resolve(process.cwd(), "..", "scripts", "desktop-voice-bridge.py");
          const { stdout } = await execFileAsync("python", [scriptPath, "system"]);
          const result = JSON.parse(stdout.trim());
          return new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
