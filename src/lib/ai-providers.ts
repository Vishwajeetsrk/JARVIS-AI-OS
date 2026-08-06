// AI provider resolution with a local-first strategy (inspired by OpenJarvis):
// - `ollama/*` model ids are LOCAL and never silently re-routed to the cloud.
// - If Ollama is down, we explicitly fall back to cloud with `usedFallback: true`
//   so the client can tell the user "running on cloud fallback".
// - Cloud models resolve to the requested provider, then fall back down a chain
//   (Gemini -> Groq -> Ollama) when the preferred provider has no key.
import { google } from "@ai-sdk/google";
import { createGroq } from "@ai-sdk/groq";
import { createOllama } from "ollama-ai-provider";
import { streamText } from "ai";

export const OLLAMA_HOST = process.env.OLLAMA_HOST || "http://localhost:11434";
const OLLAMA_TIMEOUT_MS = 2500;

type ChatModel = NonNullable<Parameters<typeof streamText>[0]["model"]>;

export interface ResolvedModel {
  model: ChatModel;
  provider: "gemini" | "groq" | "ollama";
  modelId: string;
  usedFallback: boolean;
}

// Legacy ids are remapped (see remapGemini) to currently-serving models.
const GEMINI_IDS = new Set([
  "gemini-flash-latest",
  "gemini-flash-lite-latest",
  "gemini-3.6-flash",
  "gemini-3-flash-preview",
  "gemini-3.1-flash-lite-preview",
  "gemini-2.5-flash",
  "gemini-2.5-pro",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-1.5-pro",
]);

const GROQ_IDS = new Set([
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b",
  "qwen/qwen3.6-27b",
  "groq/compound",
  "groq/compound-mini",
]);

const isOllamaId = (id: string) => id.startsWith("ollama/");
const stripOllamaPrefix = (id: string) => id.replace(/^ollama\//, "");

export async function ollamaHealthy(): Promise<boolean> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), OLLAMA_TIMEOUT_MS);
    try {
      const res = await fetch(`${OLLAMA_HOST}/api/tags`, { signal: ctrl.signal });
      return res.ok;
    } finally {
      clearTimeout(t);
    }
  } catch {
    return false;
  }
}

export async function ollamaModels(): Promise<string[]> {
  try {
    const res = await fetch(`${OLLAMA_HOST}/api/tags`);
    if (!res.ok) return [];
    const body = (await res.json()) as { models?: Array<{ name: string }> };
    return (body.models ?? []).map((m) => m.name);
  } catch {
    return [];
  }
}

function geminiModel(modelId: string): ChatModel {
  const key = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY not set");
  process.env.GOOGLE_GENERATIVE_AI_API_KEY = key;
  return google(modelId);
}

function groqModel(modelId: string): ChatModel {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("GROQ_API_KEY not set");
  return createGroq({ apiKey: key })(modelId) as unknown as ChatModel;
}

function ollamaModel(modelId: string): ChatModel {
  return createOllama({ baseURL: OLLAMA_HOST })(stripOllamaPrefix(modelId)) as unknown as ChatModel;
}

/**
 * Resolve a chat model id to a concrete AI-SDK model.
 * Returns { usedFallback: true } when the requested model could not be used
 * (Ollama down, key missing) and a lower-priority provider served instead.
 */
export async function resolveChatModel(requestedId: string): Promise<ResolvedModel> {
  // Local-first: ollama/* never silently routes to the cloud while Ollama is up.
  if (isOllamaId(requestedId)) {
    if (await ollamaHealthy()) {
      return { model: ollamaModel(requestedId), provider: "ollama", modelId: requestedId, usedFallback: false };
    }
    // Ollama is down: explicit cloud fallback so chat still works.
    return fallbackCloud(requestedId);
  }

  if (GROQ_IDS.has(requestedId)) {
    if (process.env.GROQ_API_KEY) {
      return { model: groqModel(requestedId), provider: "groq", modelId: requestedId, usedFallback: false };
    }
    return fallbackCloud(requestedId);
  }

  if (GEMINI_IDS.has(requestedId) || requestedId.startsWith("gemini")) {
    const id = remapGemini(requestedId);
    if (process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return { model: geminiModel(id), provider: "gemini", modelId: requestedId, usedFallback: false };
    }
    return fallbackCloud(requestedId);
  }

  // Unknown id: fall back to the default chain.
  return fallbackCloud(requestedId);
}

function remapGemini(id: string): string {
  // Gemini 1.5/2.x are retired; route to the currently-serving models.
  const PRO = "gemini-3.6-flash";
  const FAST = "gemini-flash-latest";
  if (id === "gemini-2.5-pro" || id === "gemini-1.5-pro") return PRO;
  if (id === "gemini-2.5-flash" || id === "gemini-2.0-flash" || id === "gemini-1.5-flash") return FAST;
  return id;
}

/** Cloud fallback chain: preferred provider -> other cloud provider -> Ollama. */
async function fallbackCloud(originalId: string): Promise<ResolvedModel> {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  const groqKey = process.env.GROQ_API_KEY;

  // Prefer the requested provider's sibling cloud model first, then any other cloud.
  const chain: Array<() => ResolvedModel | Promise<ResolvedModel>> = [];
  if (isOllamaId(originalId)) {
    if (geminiKey) chain.push(() => ({ model: geminiModel("gemini-flash-latest"), provider: "gemini", modelId: "gemini-flash-latest", usedFallback: true }));
    if (groqKey) chain.push(() => ({ model: groqModel("llama-3.3-70b-versatile"), provider: "groq", modelId: "llama-3.3-70b-versatile", usedFallback: true }));
  } else if (GROQ_IDS.has(originalId)) {
    if (geminiKey) chain.push(() => ({ model: geminiModel("gemini-flash-latest"), provider: "gemini", modelId: "gemini-flash-latest", usedFallback: true }));
  } else {
    if (groqKey) chain.push(() => ({ model: groqModel("llama-3.3-70b-versatile"), provider: "groq", modelId: "llama-3.3-70b-versatile", usedFallback: true }));
  }

  for (const step of chain) {
    try {
      return await step();
    } catch {
      // continue down the chain
    }
  }

  // Last resort: local Ollama.
  if (await ollamaHealthy()) {
    return { model: ollamaModel("llama3.3"), provider: "ollama", modelId: "ollama/llama3.3", usedFallback: true };
  }

  throw new Error(
    "No AI provider available: set GEMINI_API_KEY or GROQ_API_KEY, or start Ollama at " + OLLAMA_HOST,
  );
}

