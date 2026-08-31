/**
 * Canonical Types for JARVIS Vector Memory & Semantic Recall Engine
 */

export type MemoryCategory =
  | "conversation"
  | "project_context"
  | "architecture_decision"
  | "user_preference"
  | "career_evidence";

export interface VectorMemoryItem {
  id: string;
  category: MemoryCategory;
  content: string;
  metadata?: Record<string, any>;
  similarity?: number;
  createdAt: string;
}

export interface MemorySearchResult {
  query: string;
  matches: VectorMemoryItem[];
  totalMatches: number;
  threshold: number;
}
