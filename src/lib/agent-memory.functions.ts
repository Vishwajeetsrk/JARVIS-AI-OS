import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  storeAgentMemory,
  recallAgentMemories,
  getAgentMemoryStats,
  type AgentMemoryRecord,
} from "@/mastra/tools/agent-memory";

export const getAgentMemoriesFn = createServerFn({ method: "GET" })
  .validator((d: { type?: "working" | "episodic" | "semantic" | "procedural"; query?: string; tag?: string; limit?: number }) => d)
  .handler(async ({ data }) => {
    return recallAgentMemories(data);
  });

export const storeAgentMemoryFn = createServerFn({ method: "POST" })
  .validator((d: {
    type: "working" | "episodic" | "semantic" | "procedural";
    title: string;
    content: string;
    tags?: string[];
    metadata?: Record<string, string | number | boolean | null>;
  }) => d)
  .handler(async ({ data }) => {
    return storeAgentMemory(data);
  });

export const getAgentMemoryStatsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    return getAgentMemoryStats();
  });
