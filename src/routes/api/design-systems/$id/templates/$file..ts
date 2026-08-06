import { createFileRoute } from "@tanstack/react-router";
import { readDesignSystemFile } from "@/lib/design-systems";

export const Route = createFileRoute("/api/design-systems/$id/templates/$file/")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = String(params.id || "").replace(/[^a-zA-Z0-9_-]/g, "");
        const file = String(params.file || "").replace(/\\/g, "/");

        // Prevent path traversal outside the design system directory.
        if (file.includes("..")) {
          return new Response("Forbidden", { status: 403 });
        }

        const content = readDesignSystemFile(id, file);
        if (!content) {
          return new Response("File not found", { status: 404 });
        }

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
