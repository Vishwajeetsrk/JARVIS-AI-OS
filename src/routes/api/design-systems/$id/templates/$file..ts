import { createFileRoute } from "@tanstack/react-router";
import { readFileSync, existsSync } from "fs";
import { join, normalize, relative } from "path";

const DATA_DIR = join(process.cwd(), "data");

export const Route = createFileRoute("/api/design-systems/$id/templates/$file/")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = String(params.id || "").replace(/[^a-zA-Z0-9_-]/g, "");
        const file = String(params.file || "").replace(/\\/g, "/");

        const baseDir = join(DATA_DIR, id);
        const filePath = normalize(join(baseDir, file));

        // Prevent path traversal outside the design system directory.
        const rel = relative(baseDir, filePath);
        if (rel.startsWith("..") || rel.startsWith("../") || rel === "..") {
          return new Response("Forbidden", { status: 403 });
        }

        if (!existsSync(filePath)) {
          return new Response("File not found", { status: 404 });
        }
        const content = readFileSync(filePath, "utf-8");
        const ext = file.split(".").pop()?.toLowerCase();
        const mime: Record<string, string> = {
          html: "text/html;charset=utf-8",
          css: "text/css;charset=utf-8",
          js: "application/javascript;charset=utf-8",
          json: "application/json",
          md: "text/markdown;charset=utf-8",
        };
        return new Response(content, {
          headers: { "content-type": mime[ext || ""] || "text/plain;charset=utf-8" },
        });
      },
    },
  },
});
