import { createFileRoute } from "@tanstack/react-router";
import { listRoadmaps, getRoadmap } from "@/lib/roadmaps";

export const Route = createFileRoute("/api/roadmaps")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        if (id) {
          const detail = getRoadmap(id);
          if (!detail) return new Response("Roadmap not found", { status: 404 });
          return Response.json(detail);
        }

        const roadmaps = listRoadmaps();
        return Response.json(roadmaps);
      },
    },
  },
});
