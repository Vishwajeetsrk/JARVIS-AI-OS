import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          status: "ok",
          timestamp: new Date().toISOString(),
          service: "Nia AI Operating System",
          vrmModel: "Nai.vrm / nia-v1.vrm",
          version: "1.0.0",
          uptime: process.uptime(),
        });
      },
    },
  },
});
