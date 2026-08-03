// Server functions for the self-improving skills system.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export const listLearnedSkills = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { listSkills } = await import("@/lib/skills");
    return await listSkills();
  });

export const createLearnedSkill = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z
      .object({
        name: z.string().min(1).max(64),
        category: z.string().min(1).max(40).default("learned"),
        description: z.string().min(1).max(1024),
        content: z.string().min(10).max(100_000),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { createSkill } = await import("@/lib/skills");
    return await createSkill(data);
  });

export const deleteLearnedSkill = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({ name: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => {
    const { deleteSkill } = await import("@/lib/skills");
    return await deleteSkill(data.name);
  });
