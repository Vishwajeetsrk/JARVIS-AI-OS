import { createFileRoute } from "@tanstack/react-router";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import os from "node:os";

const execFileAsync = promisify(execFile);

// Unified Desktop Action API: launch apps, open URLs, adjust volume, trigger system actions
export const Route = createFileRoute("/api/desktop/action")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json().catch(() => ({}))) as {
            action?: string;
            target?: string;
            value?: string | number;
          };

          const scriptPath = path.resolve(process.cwd(), "scripts", "desktop-voice-bridge.py");
          const action = body.action || "telemetry";

          if (action === "screenshot") {
            const { stdout } = await execFileAsync("python", [scriptPath, "screenshot"]);
            const result = JSON.parse(stdout.trim());
            return new Response(JSON.stringify(result), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          if (action === "launch" && body.target) {
            const { stdout } = await execFileAsync("python", [scriptPath, "launch", String(body.target)]);
            const result = JSON.parse(stdout.trim());
            return new Response(JSON.stringify(result), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          if (action === "volume" && body.value) {
            const { stdout } = await execFileAsync("python", [scriptPath, "volume", String(body.value)]);
            const result = JSON.parse(stdout.trim());
            return new Response(JSON.stringify(result), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          if (action === "telemetry" || action === "system") {
            const { stdout } = await execFileAsync("python", [scriptPath, "telemetry"]);
            const result = JSON.parse(stdout.trim());
            return new Response(JSON.stringify(result), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(JSON.stringify({ error: `Unknown action "${action}"` }), {
            status: 400,
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
