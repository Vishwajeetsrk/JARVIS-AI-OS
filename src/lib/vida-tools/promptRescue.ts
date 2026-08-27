/**
 * VIDA SOTA Tool 2: Prompt Rescue
 * Transforms fuzzy or underspecified questions into structured, production-grade prompts.
 */

export interface PromptRescueInput {
  rawPrompt: string;
  category?: "coding" | "architecture" | "writing" | "general";
}

export interface PromptRescueOutput {
  objective: string;
  context: string;
  constraints: string[];
  outputFormat: string;
  assumptions: string[];
  improvedPrompt: string;
}

export function generatePromptRescue(input: PromptRescueInput): PromptRescueOutput {
  const raw = input.rawPrompt.trim() || "Create a scalable responsive web application";
  const cat = input.category || "coding";

  const objective = `Engineer a robust, production-grade solution for: "${raw}"`;
  const context = `Targeting modern Windows / Web environments with high reliability, type safety, and clean modular boundaries.`;
  const constraints = [
    "Strict type annotations and zero implicit 'any'",
    "Comprehensive error handling with graceful fallbacks",
    "Optimized render cycles with zero memory leaks",
    "No hardcoded secrets or exposed credentials",
  ];
  const assumptions = [
    "Target runtime is modern Node.js / Browser ES2024",
    "Dependencies are installed locally in workspace",
  ];
  const outputFormat = "Structured Markdown containing production-ready code, architectural rationale, and validation steps.";

  const improvedPrompt = `# OBJECTIVE
${objective}

# CONTEXT & ENVIRONMENT
${context}

# CONSTRAINTS & REQUIREMENTS
${constraints.map((c) => `- ${c}`).join("\n")}

# ASSUMPTIONS
${assumptions.map((a) => `- ${a}`).join("\n")}

# DELIVERABLES
1. Complete, copy-pasteable implementation.
2. Step-by-step unit testing / verification plan.
3. Architectural trade-off analysis.`;

  return {
    objective,
    context,
    constraints,
    outputFormat,
    assumptions,
    improvedPrompt,
  };
}
