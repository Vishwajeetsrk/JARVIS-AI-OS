import { createFileRoute } from "@tanstack/react-router";
import { listDesignSystems, getDesignSystem, listProjectSites, getProjectSite } from "@/lib/design-systems";

export const Route = createFileRoute("/api/design-systems")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        if (id) {
          const site = getProjectSite(id);
          if (site) {
            return new Response(JSON.stringify(site), {
              headers: { "content-type": "application/json" },
            });
          }
          const system = getDesignSystem(id);
          if (!system) {
            return new Response("Design system not found", { status: 404 });
          }
          return new Response(JSON.stringify(system), {
            headers: { "content-type": "application/json" },
          });
        }

        const systems = [...listDesignSystems(), ...listProjectSites()];
        return new Response(JSON.stringify(systems), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
