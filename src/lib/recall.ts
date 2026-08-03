// Cross-session memory recall (hermes-style).
// Searches the user's past messages for relevant context so Jarvis "remembers".
// Uses pgvector similarity (requires the memory_recall migration) and falls back
// to keyword (ILIKE) search when embeddings/pgvector aren't available yet.
import { embedText, partsToText } from "@/lib/embeddings";

export interface RecallHit {
  id: string;
  threadId: string;
  role: string;
  text: string;
  createdAt: string;
  score: number;
}

export async function recall(userId: string, query: string, limit = 5): Promise<RecallHit[]> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  // 1) Try vector search first.
  const embedding = await embedText(query);
  if (embedding) {
    const { data, error } = await (supabaseAdmin.rpc as any)("match_messages", {
      query_embedding: embedding,
      match_threshold: 0.18,
      match_count: limit,
      p_user_id: userId,
    });
    if (!error && Array.isArray(data) && data.length) {
      return data.map((r: any) => ({
        id: r.id,
        threadId: r.thread_id,
        role: r.role ?? "user",
        text: r.text ?? "",
        createdAt: r.created_at,
        score: r.similarity ?? 0,
      }));
    }
  }

  // 2) Fallback: keyword search across the user's messages.
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2)
    .slice(0, 4);

  let builder = supabaseAdmin.from("messages").select("id, thread_id, role, parts, created_at").eq("user_id", userId);
  if (terms.length) {
    const like = `%${terms[0]}%`;
    builder = builder.ilike("parts::text", like);
  }
  const { data, error } = await (builder as any).order("created_at", { ascending: false }).limit(limit * 4);
  if (error || !data) return [];

  const scored = data
    .map((r: any) => {
      const text = partsToText(r.parts);
      const lower = text.toLowerCase();
      let score = 0;
      for (const t of terms) if (lower.includes(t)) score += 1;
      return {
        id: r.id as string,
        threadId: r.thread_id as string,
        role: r.role as string,
        text,
        createdAt: r.created_at as string,
        score,
      };
    })
    .filter((r: any) => r.score > 0)
    .sort((a: any, b: any) => b.score - a.score || Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return scored.slice(0, limit);
}

/** Renders recall hits as a compact prompt block to inject as context. */
export function recallToPrompt(hits: RecallHit[]): string {
  if (!hits.length) return "";
  const body = hits
    .map(
      (h, i) => `[${i + 1}] (${h.role}, ${new Date(h.createdAt).toLocaleDateString()}) ${h.text}`,
    )
    .join("\n");
  return `\n\nRelevant context from your past conversations:\n${body}\n`;
}