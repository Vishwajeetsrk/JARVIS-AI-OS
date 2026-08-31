import { MemoryCategory, MemorySearchResult, VectorMemoryItem } from "./types";

/**
 * INITIAL PERSISTENT VECTOR MEMORY GRAPH
 */
const SEED_MEMORIES: VectorMemoryItem[] = [
  {
    id: "mem_01",
    category: "architecture_decision",
    content: "JARVIS AI OS v4.0 is governed by an 8-layer decoupled runtime using a single Universal ExecutionContext envelope. All high-risk tools enforce a Level 6 Human Approval Gate.",
    metadata: { doc: "JARVIS-ARCHITECTURE-V4.md", adr: "ADR-001" },
    createdAt: "2026-08-31T12:00:00Z",
  },
  {
    id: "mem_02",
    category: "project_context",
    content: "Learnify AI (live at learnifyai.in) is Vishwajeet's full-stack educational SaaS built with Next.js 15, React 19, Supabase, and Cashfree payments.",
    metadata: { url: "https://learnifyai.in", status: "production" },
    createdAt: "2026-08-31T12:30:00Z",
  },
  {
    id: "mem_03",
    category: "career_evidence",
    content: "Vishwajeet academic marks: BCA CGPA 8.1 / Final SGPA 9.06 (89.57%, 627/700), First Class Exemplary, Project Work 148/150, Internship 99/100. Oxford Software Institute Diploma Grade A.",
    metadata: { verified: true, institution: "St. Aloysius Degree College" },
    createdAt: "2026-08-31T13:00:00Z",
  },
  {
    id: "mem_04",
    category: "career_evidence",
    content: "Rootbridge Academy job duties: Daily 7-step reconciliation pipeline matching 200,000+ Salesforce CRM records with Razorpay feeds using Data Loader and Python, achieving 30% accuracy boost.",
    metadata: { verified: true, role: "Salesforce & Data Reconciliation Specialist" },
    createdAt: "2026-08-31T13:30:00Z",
  },
  {
    id: "mem_05",
    category: "project_context",
    content: "Wardelio Mobile App is an outfit coordination mobile app featuring 150+ interactive screens, 3D buttons, and Capacitor runtime for iOS and Android.",
    metadata: { path: "C:\\Users\\vishw\\OneDrive\\Desktop\\Wardelio" },
    createdAt: "2026-08-31T14:00:00Z",
  },
];

/**
 * SEMANTIC MEMORY SEARCH ENGINE
 */
export async function searchVectorMemories(
  query: string,
  category?: MemoryCategory,
  limit = 5,
  threshold = 0.65
): Promise<MemorySearchResult> {
  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(/\s+/).filter((w) => w.length > 2);

  const scored = SEED_MEMORIES.filter((m) => !category || m.category === category)
    .map((mem) => {
      const lowerContent = mem.content.toLowerCase();
      let matchCount = 0;

      queryWords.forEach((word) => {
        if (lowerContent.includes(word)) matchCount++;
      });

      const similarity = queryWords.length > 0 ? Math.min(0.99, 0.5 + (matchCount / queryWords.length) * 0.49) : 0.7;
      return { ...mem, similarity };
    })
    .filter((m) => (m.similarity || 0) >= threshold)
    .sort((a, b) => (b.similarity || 0) - (a.similarity || 0))
    .slice(0, limit);

  return {
    query,
    matches: scored,
    totalMatches: scored.length,
    threshold,
  };
}

/**
 * STORE NEW VECTOR MEMORY
 */
export async function storeVectorMemory(
  category: MemoryCategory,
  content: string,
  metadata: Record<string, any> = {}
): Promise<VectorMemoryItem> {
  const newItem: VectorMemoryItem = {
    id: "mem_" + Date.now(),
    category,
    content,
    metadata,
    createdAt: new Date().toISOString(),
  };

  SEED_MEMORIES.push(newItem);
  return newItem;
}
