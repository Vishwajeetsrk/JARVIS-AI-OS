import { createFileRoute } from "@tanstack/react-router";
import { listDesignSystems, listProjectSites } from "@/lib/design-systems";
import { listShippedSkills } from "@/lib/skills-catalog";

export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: async () => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        let database = "offline";
        let agents = 24;
        try {
          const [{ error }, count] = await Promise.all([
            supabaseAdmin.from("agent_activity").select("id", { count: "exact", head: true }).limit(1),
            supabaseAdmin.from("agents").select("id", { count: "exact", head: true }).limit(1),
          ]);
          if (!error) database = "online";
          agents = count.count && count.count > 0 ? count.count : agents;
        } catch {
          database = "offline";
        }

        const modelProvider = Boolean(
          process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GROQ_API_KEY,
        );
        const voice = Boolean(process.env.GROQ_API_KEY);

        const systems = listDesignSystems();
        const sites = listProjectSites();

        return new Response(
          JSON.stringify({
            ok: database === "online" && modelProvider,
            version: "2.5.2",
            database,
            modelProvider: modelProvider ? "online" : "offline",
            voice: voice ? "online" : "offline",
            agents,
            designSystems: systems.length + sites.length,
            sites: sites.length,
            skills: listShippedSkills().length,
            checkedAt: new Date().toISOString(),
          }),
          {
            headers: {
              "content-type": "application/json",
              "cache-control": "no-store",
            },
          },
        );
      },
    },
  },
});
