import { createFileRoute } from "@tanstack/react-router";
import { listDesignSystemFiles } from "@/lib/design-systems";

interface TemplateFile {
  path: string;
  label: string;
  type: "kit" | "preview" | "asset";
}

export const Route = createFileRoute("/api/design-systems/$id/templates")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const files = listDesignSystemFiles(String(params.id || ""));
        if (files.length === 0) {
          return new Response("Not found", { status: 404 });
        }

        const templates: TemplateFile[] = [];

        for (const name of ["system/index.html", "system/kit.html", "system/kit.dark.html"]) {
          if (files.includes(name)) {
            templates.push({ path: name, label: name === "system/index.html" ? "Full UI Kit" : name === "system/kit.html" ? "Design Kit" : "Design Kit (Dark)", type: "kit" });
          }
        }

        for (const name of ["colors", "typography", "spacing"]) {
          const file = `preview/${name}.html`;
          if (files.includes(file)) {
            templates.push({ path: file, label: name.charAt(0).toUpperCase() + name.slice(1), type: "preview" });
          }
        }

        return new Response(JSON.stringify(templates), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
