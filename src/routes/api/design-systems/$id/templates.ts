import { createFileRoute } from "@tanstack/react-router";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "data");

interface TemplateFile {
  path: string;
  label: string;
  type: "kit" | "preview" | "asset";
}

export const Route = createFileRoute("/api/design-systems/$id/templates")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const systemDir = join(DATA_DIR, params.id);
        if (!existsSync(systemDir)) {
          return new Response("Not found", { status: 404 });
        }

        const templates: TemplateFile[] = [];

        const systemDir2 = join(systemDir, "system");
        if (existsSync(systemDir2)) {
          if (existsSync(join(systemDir2, "index.html"))) templates.push({ path: `system/index.html`, label: "Full UI Kit", type: "kit" });
          if (existsSync(join(systemDir2, "kit.html"))) templates.push({ path: `system/kit.html`, label: "Design Kit", type: "kit" });
          if (existsSync(join(systemDir2, "kit.dark.html"))) templates.push({ path: `system/kit.dark.html`, label: "Design Kit (Dark)", type: "kit" });
        }

        const previewDir = join(systemDir, "preview");
        if (existsSync(previewDir)) {
          for (const name of ["colors", "typography", "spacing"]) {
            const file = `${name}.html`;
            if (existsSync(join(previewDir, file))) {
              templates.push({ path: `preview/${file}`, label: name.charAt(0).toUpperCase() + name.slice(1), type: "preview" });
            }
          }
        }

        return new Response(JSON.stringify(templates), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
