import { SearchIndex } from "../src/state/search-index.js";
import { VectorIndex } from "../src/state/vector-index.js";
import { HybridSearch } from "../src/state/hybrid-search.js";
import type {
  CompressedObservation,
  EmbeddingProvider,
} from "../src/types.js";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

interface LongMemEvalEntry {
  question_id: string;
  question_type: string;
  question: string;
  question_date: string;
  answer: string;
  answer_session_ids: string[];
  haystack_dates: string[];
  haystack_session_ids: string[];
  haystack_sessions: Array<Array<{ role: string; content: string; has_answer?: boolean }>>;
}

interface SessionChunk {
  sessionId: string;
  text: string;
  turnCount: number;
}

interface BenchResult {
  question_id: string;
  question_type: string;
  recall_any_at_5: number;
  recall_any_at_10: number;
  recall_any_at_20: number;
  ndcg_at_10: number;
  mrr: number;
  retrieved_session_ids: string[];
  gold_session_ids: string[];
}

function chunkSessionToText(
  turns: Array<{ role: string; content: string }>,
): string {
  return turns
    .map((t) => `${t.role}: ${t.content}`)
    .join("\n");
}

function recallAny(
  retrievedSessionIds: string[],
  goldSessionIds: string[],
  k: number,
): number {
  const topK = new Set(retrievedSessionIds.slice(0, k));
  return goldSessionIds.some((gid) => topK.has(gid)) ? 1.0 : 0.0;
}

function dcg(relevances: boolean[], k: number): number {
  let sum = 0;
  for (let i = 0; i < Math.min(k, relevances.length); i++) {
    sum += (relevances[i] ? 1 : 0) / Math.log2(i + 2);
  }
  return sum;
}

function ndcg(
  retrievedSessionIds: string[],
  goldSessionIds: Set<string>,
  k: number,
): number {
  const rels = retrievedSessionIds
    .slice(0, k)
    .map((id) => goldSessionIds.has(id));
  const idealRels = Array.from(
    { length: Math.min(k, goldSessionIds.size) },
    () => true,
  );
  const idealDCG = dcg(idealRels, k);
  if (idealDCG === 0) return 0;
  return dcg(rels, k) / idealDCG;
}

function mrr(
  retrievedSessionIds: string[],
  goldSessionIds: Set<string>,
): number {
  for (let i = 0; i < retrievedSessionIds.length; i++) {
    if (goldSessionIds.has(retrievedSessionIds[i])) return 1 / (i + 1);
  }
  return 0;
}

class MockKV {
  private store = new Map<string, Map<string, unknown>>();
  async get<T>(scope: string, key: string): Promise<T> {
    const m = this.store.get(scope);
    if (!m || !m.has(key)) throw new Error(`Not found: ${scope}/${key}`);
    return m.get(key) as T;
  }
  async set(scope: string, key: string, value: unknown): Promise<void> {
    if (!this.store.has(scope)) this.store.set(scope, new Map());
    this.store.get(scope)!.set(key, value);
  }
  async list<T>(scope: string): Promise<T[]> {
    const m = this.store.get(scope);
    if (!m) return [];
    return Array.from(m.values()) as T[];
  }
  async delete(scope: string, key: string): Promise<void> {
    this.store.get(scope)?.delete(key);
  }
}

async function runBenchmark(
  mode: "bm25" | "vector" | "hybrid",
  embeddingProvider?: EmbeddingProvider,
) {
  const dataPath = new URL("./data/longmemeval_s_cleaned.json", import.meta.url).pathname;
  if (!existsSync(dataPath)) {
    console.error(`Dataset not found at ${dataPath}`);
    console.error("Download from: https://huggingface.co/datasets/xiaowu0162/longmemeval-cleaned");
    process.exit(1);
  }

  console.log(`Loading LongMemEval-S dataset...`);
  const raw = JSON.parse(readFileSync(dataPath, "utf-8")) as LongMemEvalEntry[];

  const abstentionTypes = new Set([
    "single-session-user_abs",
    "multi-session_abs",
    "knowledge-update_abs",
    "temporal-reasoning_abs",
  ]);
  const entries = raw.filter((e) => !abstentionTypes.has(e.question_type));
  console.log(
    `Loaded ${entries.length} questions (${raw.length - entries.length} abstention excluded)`,
  );

  const results: BenchResult[] = [];
  let processed = 0;

  for (const entry of entries) {
    const sessionChunks: SessionChunk[] = [];
    for (let i = 0; i < entry.haystack_sessions.length; i++) {
      const sessionId = entry.haystack_session_ids[i];
      const turns = entry.haystack_sessions[i];
      const text = chunkSessionToText(turns);
      sessionChunks.push({ sessionId, text, turnCount: turns.length });
    }

    const bm25 = new SearchIndex();
    const vector = mode !== "bm25" ? new VectorIndex() : null;
    const kv = new MockKV();

    const observations: CompressedObservation[] = [];
    for (const chunk of sessionChunks) {
      const obs: CompressedObservation = {
        id: `obs_${chunk.sessionId}`,
        sessionId: chunk.sessionId,
        timestamp: new Date().toISOString(),
        type: "conversation",
        title: chunk.text.slice(0, 80),
        facts: [],
        narrative: chunk.text,
        concepts: [],
        files: [],
        importance: 5,
      };
      observations.push(obs);
      bm25.add(obs);

      if (vector && embeddingProvider) {
        try {
          const embedding = await embeddingProvider.embed(
            chunk.text.slice(0, 512),
          );
          vector.add(obs.id, chunk.sessionId, embedding);
        } catch {}
      }

      await kv.set(`mem:obs:${chunk.sessionId}`, obs.id, obs);
    }

    let retrievedObsIds: string[];

    if (mode === "bm25") {
      const bm25Results = bm25.search(entry.question, 20);
      retrievedObsIds = bm25Results.map((r) => r.obsId);
    } else {
      const hybridSearch = new HybridSearch(
        bm25,
        vector,
        embeddingProvider || null,
        kv as any,
        0.4,
        0.6,
        0.0,
        false,
      );
      const hybridResults = await hybridSearch.search(entry.question, 20);
      retrievedObsIds = hybridResults.map((r) => r.observation.id);
    }

    const retrievedSessionIds = retrievedObsIds.map((oid) =>
      oid.replace(/^obs_/, ""),
    );
    const goldSet = new Set(entry.answer_session_ids);

    const result: BenchResult = {
      question_id: entry.question_id,
      question_type: entry.question_type,
      recall_any_at_5: recallAny(retrievedSessionIds, entry.answer_session_ids, 5),
      recall_any_at_10: recallAny(retrievedSessionIds, entry.answer_session_ids, 10),
      recall_any_at_20: recallAny(retrievedSessionIds, entry.answer_session_ids, 20),
      ndcg_at_10: ndcg(retrievedSessionIds, goldSet, 10),
      mrr: mrr(retrievedSessionIds, goldSet),
      retrieved_session_ids: retrievedSessionIds.slice(0, 10),
      gold_session_ids: entry.answer_session_ids,
    };
    results.push(result);
    processed++;

    if (processed % 50 === 0) {
      const avgRecall5 =
        results.reduce((s, r) => s + r.recall_any_at_5, 0) / results.length;
      console.log(
        `  [${processed}/${entries.length}] running recall_any@5: ${(avgRecall5 * 100).toFixed(1)}%`,
      );
    }
  }

  const avgRecallAny5 =
    results.reduce((s, r) => s + r.recall_any_at_5, 0) / results.length;
  const avgRecallAny10 =
    results.reduce((s, r) => s + r.recall_any_at_10, 0) / results.length;
  const avgRecallAny20 =
    results.reduce((s, r) => s + r.recall_any_at_20, 0) / results.length;
  const avgNdcg10 =
    results.reduce((s, r) => s + r.ndcg_at_10, 0) / results.length;
  const avgMrr =
    results.reduce((s, r) => s + r.mrr, 0) / results.length;

  const byType = new Map<string, BenchResult[]>();
  for (const r of results) {
    if (!byType.has(r.question_type)) byType.set(r.question_type, []);
    byType.get(r.question_type)!.push(r);
  }

  console.log(`\n=== LongMemEval-S Results (${mode}) ===`);
  console.log(`Questions: ${results.length} (excl. abstention)`);
  console.log(`recall_any@5:  ${(avgRecallAny5 * 100).toFixed(1)}%`);
  console.log(`recall_any@10: ${(avgRecallAny10 * 100).toFixed(1)}%`);
  console.log(`recall_any@20: ${(avgRecallAny20 * 100).toFixed(1)}%`);
  console.log(`NDCG@10:       ${(avgNdcg10 * 100).toFixed(1)}%`);
  console.log(`MRR:           ${(avgMrr * 100).toFixed(1)}%`);

  console.log(`\nBy question type:`);
  for (const [type, typeResults] of byType) {
    const r5 =
      typeResults.reduce((s, r) => s + r.recall_any_at_5, 0) /
      typeResults.length;
    const r10 =
      typeResults.reduce((s, r) => s + r.recall_any_at_10, 0) /
      typeResults.length;
    console.log(
      `  ${type.padEnd(30)} R@5: ${(r5 * 100).toFixed(1)}%  R@10: ${(r10 * 100).toFixed(1)}%  (n=${typeResults.length})`,
    );
  }

  const outPath = new URL(
    `./data/longmemeval_results_${mode}.json`,
    import.meta.url,
  ).pathname;
  writeFileSync(
    outPath,
    JSON.stringify(
      {
        mode,
        questions: results.length,
        recall_any_at_5: avgRecallAny5,
        recall_any_at_10: avgRecallAny10,
        recall_any_at_20: avgRecallAny20,
        ndcg_at_10: avgNdcg10,
        mrr: avgMrr,
        per_type: Object.fromEntries(
          Array.from(byType).map(([type, tr]) => [
            type,
            {
              count: tr.length,
              recall_any_at_5:
                tr.reduce((s, r) => s + r.recall_any_at_5, 0) / tr.length,
              recall_any_at_10:
                tr.reduce((s, r) => s + r.recall_any_at_10, 0) / tr.length,
            },
          ]),
        ),
        per_question: results,
      },
      null,
      2,
    ),
  );
  console.log(`\nResults saved to ${outPath}`);
}

const mode = (process.argv[2] || "bm25") as "bm25" | "vector" | "hybrid";
console.log(`Running LongMemEval-S benchmark in ${mode} mode...`);

if (mode === "bm25") {
  runBenchmark("bm25").catch(console.error);
} else {
  import("../src/providers/embedding/local.js")
    .then(({ LocalEmbeddingProvider }) => {
      const provider = new LocalEmbeddingProvider();
      return runBenchmark(mode, provider);
    })
    .catch(console.error);
}
