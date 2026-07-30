/**
 * Auto-Learner Tool — Automatically extract patterns from conversations
 * and write to the persistent memory bank.
 *
 * Analyzes conversation history to identify:
 * - Mistakes made or nearly made
 * - Non-obvious decisions and rationale
 * - Reusable patterns and best practices
 * - Stack-specific notes and preferences
 */

import { readGlobalMemory, writeGlobalMemory, type MemoryEntry } from "./memory-tool";

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

export interface LearningExtraction {
  /** Extracted mistakes */
  mistakes: MemoryEntry[];
  /** Extracted decisions */
  decisions: MemoryEntry[];
  /** Extracted patterns */
  patterns: MemoryEntry[];
  /** Stack notes */
  stackNotes: MemoryEntry[];
}

/**
 * Analyze a conversation and extract learning entries.
 */
export function extractLearnings(
  messages: ConversationMessage[],
  projectName?: string
): LearningExtraction {
  const result: LearningExtraction = {
    mistakes: [],
    decisions: [],
    patterns: [],
    stackNotes: [],
  };

  // Combine conversation into searchable text
  const conversationText = messages
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n\n")
    .toLowerCase();

  // Extract mistakes
  const mistakeKeywords = [
    "error", "bug", "issue", "problem", "failed", "broken",
    "wrong", "mistake", "fix", "resolved", "workaround",
    "shouldn't have", "turns out", "actually",
  ];

  const mistakePatterns = [
    /(?:the )?(?:error|bug|issue) (?:was|is|that) (.+?)(?:\.|$)/gi,
    /(?:i |we |you )?(?:fixed|resolved|patched|solved) (.+?)(?:\.|$)/gi,
    /(?:shouldn't|should not) (?:have|do) (.+?)(?:\.|$)/gi,
    /turns out (.+?)(?:\.|$)/gi,
    /actually,? (.+?)(?:\.|$)/gi,
  ];

  for (const pattern of mistakePatterns) {
    let match;
    while ((match = pattern.exec(conversationText)) !== null) {
      const details = match[1]?.trim();
      if (details && details.length > 10) {
        result.mistakes.push({
          category: "mistake",
          title: `Auto-detected: ${details.slice(0, 60)}`,
          details: details,
          preventionRule: "Review this pattern before similar tasks",
          project: projectName,
        });
      }
    }
  }

  // Extract decisions
  const decisionKeywords = [
    "decided to", "chose", "selected", "went with", "using",
    "approach", "strategy", "instead of", "rather than",
  ];

  const decisionPatterns = [
    /(?:we |i )?(?:decided|chose|selected|went with) (?:to )?(.+?)(?:\.|$)/gi,
    /(?:using|approach) (.+?) (?:because|since|as) (.+?)(?:\.|$)/gi,
    /(?:instead|rather) (?:of|than) (.+?),? (?:we |i )?(?:used|chose|went with) (.+?)(?:\.|$)/gi,
  ];

  for (const pattern of decisionPatterns) {
    let match;
    while ((match = pattern.exec(conversationText)) !== null) {
      const chosen = match[1]?.trim() || match[2]?.trim();
      const reason = match[2]?.trim() || "";
      if (chosen && chosen.length > 5) {
        result.decisions.push({
          category: "decision",
          title: `Auto-detected: ${chosen.slice(0, 60)}`,
          details: reason ? `Chose: ${chosen}. Reason: ${reason}` : chosen,
          project: projectName,
        });
      }
    }
  }

  // Extract patterns
  const patternKeywords = [
    "best practice", "pattern", "convention", "standard",
    "always", "never", "prefer", "recommend",
  ];

  const patternPatterns = [
    /(?:always|best practice) (.+?)(?:\.|$)/gi,
    /(?:never|don't) (?:use|do|apply) (.+?)(?:\.|$)/gi,
    /(?:prefer|recommend|use) (.+?) (?:over|instead of|rather than) (.+?)(?:\.|$)/gi,
  ];

  for (const pattern of patternPatterns) {
    let match;
    while ((match = pattern.exec(conversationText)) !== null) {
      const details = match[1]?.trim();
      if (details && details.length > 10) {
        result.patterns.push({
          category: "pattern",
          title: `Auto-detected: ${details.slice(0, 60)}`,
          details: details,
          project: projectName,
        });
      }
    }
  }

  // Extract stack notes
  const stackKeywords = [
    "version", "compatible", "requires", "needs",
    "config", "setup", "install", "environment",
  ];

  const stackPatterns = [
    /(?:requires?|needs?|uses?) (.+?) version (\d+[\d.]*)/gi,
    /(?:config|configuration) (?:for|of) (.+?) (?:is|should be|must be) (.+?)(?:\.|$)/gi,
    /(?:install|setup|set up) (.+?) (?:using|with|by) (.+?)(?:\.|$)/gi,
  ];

  for (const pattern of stackPatterns) {
    let match;
    while ((match = pattern.exec(conversationText)) !== null) {
      const details = match[0]?.trim();
      if (details && details.length > 10) {
        result.stackNotes.push({
          category: "stack_note",
          title: `Auto-detected: ${details.slice(0, 60)}`,
          details: details,
          project: projectName,
        });
      }
    }
  }

  return result;
}

/**
 * Save extracted learnings to the memory bank.
 */
export async function saveLearnings(
  learnings: LearningExtraction
): Promise<{ saved: number; skipped: number }> {
  let saved = 0;
  let skipped = 0;

  // Deduplicate against existing memory
  const existingMemory = await readGlobalMemory("mistake");
  const existingMemory2 = await readGlobalMemory("decision");
  const existingMemory3 = await readGlobalMemory("pattern");
  const existingMemory4 = await readGlobalMemory("stack_note");

  const allExisting = [existingMemory, existingMemory2, existingMemory3, existingMemory4]
    .join("\n")
    .toLowerCase();

  const entries = [
    ...learnings.mistakes,
    ...learnings.decisions,
    ...learnings.patterns,
    ...learnings.stackNotes,
  ];

  for (const entry of entries) {
    // Simple deduplication: check if title already exists
    const titleLower = entry.title.toLowerCase();
    if (allExisting.includes(titleLower)) {
      skipped++;
      continue;
    }

    try {
      await writeGlobalMemory(entry);
      saved++;
    } catch {
      skipped++;
    }
  }

  return { saved, skipped };
}

/**
 * Auto-learn from a conversation.
 */
export async function autoLearn(
  messages: ConversationMessage[],
  projectName?: string
): Promise<{
  extracted: LearningExtraction;
  saved: { saved: number; skipped: number };
}> {
  const extracted = extractLearnings(messages, projectName);
  const saved = await saveLearnings(extracted);
  return { extracted, saved };
}

/**
 * Mastra-compatible tool definition.
 */
export const autoLearnerTool = {
  name: "autoLearn",
  description:
    "Automatically analyze a conversation and extract learnings (mistakes, decisions, " +
    "patterns, stack notes) to the persistent memory bank. Use this after completing " +
    "a task or at the end of a significant conversation.",
  parameters: {
    type: "object" as const,
    properties: {
      messages: {
        type: "array",
        description: "Conversation messages to analyze",
        items: {
          type: "object",
          properties: {
            role: { type: "string", enum: ["user", "assistant"] },
            content: { type: "string" },
          },
          required: ["role", "content"],
        },
      },
      projectName: {
        type: "string",
        description: "Project name for context",
      },
    },
    required: ["messages"],
  },
  execute: async (args: { messages: ConversationMessage[]; projectName?: string }) => {
    return await autoLearn(args.messages, args.projectName);
  },
};
