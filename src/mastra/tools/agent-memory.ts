import fs from "node:fs";
import path from "node:path";
import os from "node:os";

export type JsonValue = string | number | boolean | null | { [key: string]: JsonValue } | JsonValue[];

export interface AgentMemoryRecord {
  id: string;
  type: "working" | "episodic" | "semantic" | "procedural";
  title: string;
  content: string;
  tags?: string[];
  metadata?: Record<string, string | number | boolean | null>;
  createdAt: string;
}

const MEMORY_BASE_DIR = path.join(process.cwd(), "data", ".agent-memory");

function ensureMemoryStorage(): void {
  if (!fs.existsSync(MEMORY_BASE_DIR)) {
    fs.mkdirSync(MEMORY_BASE_DIR, { recursive: true });
  }
}

function getMemoryFilePath(type: AgentMemoryRecord["type"]): string {
  ensureMemoryStorage();
  return path.join(MEMORY_BASE_DIR, `${type}-memory.json`);
}

function loadMemories(type: AgentMemoryRecord["type"]): AgentMemoryRecord[] {
  const file = getMemoryFilePath(type);
  if (!fs.existsSync(file)) return [];
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8")) as AgentMemoryRecord[];
  } catch {
    return [];
  }
}

function saveMemories(type: AgentMemoryRecord["type"], records: AgentMemoryRecord[]): void {
  const file = getMemoryFilePath(type);
  fs.writeFileSync(file, JSON.stringify(records, null, 2), "utf-8");
}

/** Store a memory into persistent agent storage */
export function storeAgentMemory(
  params: Omit<AgentMemoryRecord, "id" | "createdAt"> & { id?: string }
): AgentMemoryRecord {
  const records = loadMemories(params.type);
  const newRecord: AgentMemoryRecord = {
    id: params.id || `mem-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type: params.type,
    title: params.title,
    content: params.content,
    tags: params.tags || [],
    metadata: params.metadata || {},
    createdAt: new Date().toISOString(),
  };

  records.unshift(newRecord);
  saveMemories(params.type, records.slice(0, 1000)); // retain latest 1000 records per type
  return newRecord;
}

/** Recall memories based on search query, type, or tags */
export function recallAgentMemories(options?: {
  type?: AgentMemoryRecord["type"];
  query?: string;
  tag?: string;
  limit?: number;
}): AgentMemoryRecord[] {
  const types: AgentMemoryRecord["type"][] = options?.type
    ? [options.type]
    : ["working", "episodic", "semantic", "procedural"];

  let all: AgentMemoryRecord[] = [];
  for (const t of types) {
    all.push(...loadMemories(t));
  }

  if (options?.tag) {
    const targetTag = options.tag.toLowerCase();
    all = all.filter((r) => r.tags?.some((t) => t.toLowerCase() === targetTag));
  }

  if (options?.query) {
    const q = options.query.toLowerCase();
    all = all.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.content.toLowerCase().includes(q) ||
        r.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }

  all.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return all.slice(0, options?.limit || 20);
}

/** Get stats on agent memory store */
export function getAgentMemoryStats(): Record<string, number> {
  const types: AgentMemoryRecord["type"][] = ["working", "episodic", "semantic", "procedural"];
  const stats: Record<string, number> = {};
  let total = 0;
  for (const t of types) {
    const count = loadMemories(t).length;
    stats[t] = count;
    total += count;
  }
  stats.total = total;
  return stats;
}
