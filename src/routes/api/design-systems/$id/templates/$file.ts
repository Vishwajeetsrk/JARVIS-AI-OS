import { createFileRoute } from "@tanstack/react-router";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "data");

export const Route = createFileRoute("/api/design-systems/$id/templates/$file")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const filePath = join(DATA_DIR, params.id, params.file);
        if (!existsSync(filePath)) {
          return new Response("File not found", { status: 404 });
        }
        const content = readFileSync(filePath, "utf-8");
        const ext = params.file.split(".").pop()?.toLowerCase();
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
