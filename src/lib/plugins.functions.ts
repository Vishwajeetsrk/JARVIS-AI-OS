// Server function for the plugin registry.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const listPluginsFromDisk = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { listPlugins } = await import("@/lib/plugins");
    return await listPlugins();
  });
