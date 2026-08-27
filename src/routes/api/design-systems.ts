import { createFileRoute } from "@tanstack/react-router";
import { listUnifiedDesignProjects, getUnifiedProjectDetail } from "@/lib/design-systems";

export const Route = createFileRoute("/api/design-systems")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        if (id) {
          const project = getUnifiedProjectDetail(id);
          if (!project) {
            return new Response("Design system or project site not found", { status: 404 });
          }
          return new Response(JSON.stringify(project), {
            headers: { "content-type": "application/json" },
          });
        }

        const systems = listUnifiedDesignProjects();
        return new Response(JSON.stringify(systems), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});

