// Text embeddings for memory recall.
// Primary: Google Gemini text-embedding-004 (free, 768 dims) via REST.
// Fallback: local Ollama embeddings (nomic-embed-text) when no Gemini key.
import { OLLAMA_HOST } from "@/lib/ai-providers";

const EMBEDDING_MODEL = "text-embedding-004";
const DIMENSIONS = 768;

async function geminiEmbed(text: string): Promise<number[] | null> {
  const key = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent?key=${key}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          model: `models/${EMBEDDING_MODEL}`,
          content: { parts: [{ text }] },
          outputDimensionality: DIMENSIONS,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );
    if (!res.ok) return null;
    const body = (await res.json()) as { embedding?: { values?: number[] } };
    return body.embedding?.values ?? null;
  } catch {
    return null;
  }
}

async function ollamaEmbed(text: string): Promise<number[] | null> {
  try {
    const res = await fetch(`${OLLAMA_HOST}/api/embed`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ model: "nomic-embed-text", input: text }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as { embeddings?: number[][] };
    return body.embeddings?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function embedText(text: string): Promise<number[] | null> {
  const clean = text.trim().slice(0, 8000);
  if (!clean) return null;
  return (await geminiEmbed(clean)) ?? (await ollamaEmbed(clean));
}

/** Extract readable text from a stored AI-SDK message parts array. */
export function partsToText(parts: unknown): string {
  if (!Array.isArray(parts)) return "";
  return parts
    .map((p) => {
      if (typeof p === "string") return p;
      if (p && typeof p === "object") {
        const o = p as { type?: string; text?: string; tool?: string; state?: unknown };
        if (o.type === "text" && typeof o.text === "string") return o.text;
      }
      return "";
    })
    .join(" ")
    .trim()
    .slice(0, 4000);
}
