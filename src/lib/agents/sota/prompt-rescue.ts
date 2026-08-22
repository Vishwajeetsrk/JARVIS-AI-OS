/**
 * VIDA SOTA Agent 2: Prompt Rescue
 * Transforms basic/vague user prompts into highly-optimized, structured,
 * production-ready AI directives with explicit persona, context, constraints, and schemas.
 */

export interface RescuedPromptResult {
  mode: "coding" | "architecture" | "writing" | "analysis";
  originalPrompt: string;
  enhancedSystemPrompt: string;
  enhancedUserPrompt: string;
  injectedPrinciples: string[];
  suggestedModel: string;
}

export class PromptRescueAgent {
  public rescue(
    rawPrompt: string,
    mode: "coding" | "architecture" | "writing" | "analysis" = "coding"
  ): RescuedPromptResult {
    const trimmed = rawPrompt.trim();

    if (mode === "coding") {
      return {
        mode,
        originalPrompt: trimmed,
        enhancedSystemPrompt: `You are an elite Staff Software Engineer and System Architect.
Follow strict clean code principles, type safety, modular design, and bulletproof error handling.
Always provide complete, executable code without lazy placeholders. Explain key design decisions briefly.`,
        enhancedUserPrompt: `# CONTEXT & OBJECTIVE
${trimmed}

# TECHNICAL CONSTRAINTS
- Strict type safety with TypeScript / Modern ES2024 / Python 3.11+.
- Comprehensive input validation and resilient edge-case handling.
- Preserve existing APIs and backward compatibility.
- Ensure high performance, zero memory leaks, and optimal Big-O complexity.

# DELIVERABLES
1. Complete, copy-pasteable production implementation.
2. Unit test / verification strategy covering happy path and boundary conditions.
3. Concise breakdown of architectural trade-offs.`,
        injectedPrinciples: [
          "Staff Engineer Persona Framing",
          "Explicit Constraint Specification",
          "Boundary & Error Edge Case Directives",
          "Output Schema Formatting",
        ],
        suggestedModel: "Claude 3.7 Sonnet / GPT-4o",
      };
    } else if (mode === "architecture") {
      return {
        mode,
        originalPrompt: trimmed,
        enhancedSystemPrompt: `You are a Principal Cloud and Distributed Systems Architect.
Design resilient, scalable, fault-tolerant, and secure systems adhering to the AWS/GCP Well-Architected Frameworks.`,
        enhancedUserPrompt: `# ARCHITECTURAL CHALLENGE
${trimmed}

# REQUIREMENTS & SYSTEM CRITERIA
- Scalability: Low latency at high throughput.
- Resilience: Graceful degradation, circuit breakers, and fault tolerance.
- Security: Zero-Trust architecture, encrypted in-transit & at-rest, least privilege.
- Maintainability: Clear bounded contexts, loose coupling, observability (metrics, logs, traces).

# REQUIRED ARCHITECTURAL ARTIFACTS
1. System Component Breakdown & Interaction Flow (with Mermaid diagram).
2. Data Flow & Storage Tier Design.
3. Failure Mode & Mitigation Matrix.
4. Trade-off Analysis (CAP theorem, cost vs latency).`,
        injectedPrinciples: [
          "Well-Architected Framework Alignment",
          "Mermaid Visualization Enactment",
          "Failure Mode Matrix Requirement",
        ],
        suggestedModel: "Claude 3.7 Sonnet (Extended Thinking) / O3-Mini",
      };
    } else if (mode === "writing") {
      return {
        mode,
        originalPrompt: trimmed,
        enhancedSystemPrompt: `You are a World-Class Executive Communications Strategist and Technical Writer.
Your tone is articulate, punchy, persuasive, and clear without unnecessary fluff or jargon.`,
        enhancedUserPrompt: `# GOAL
${trimmed}

# TONE & STYLE GUIDELINES
- High signal-to-noise ratio; every sentence adds value.
- Strong active voice, compelling hooks, and structured formatting (subheaders, bullet points).
- Tailored for high-impact professional decision-makers.`,
        injectedPrinciples: ["Active Voice Optimization", "Executive Tone Calibration"],
        suggestedModel: "Claude 3.5 Sonnet / GPT-4o",
      };
    } else {
      return {
        mode,
        originalPrompt: trimmed,
        enhancedSystemPrompt: `You are a Senior Quantitative & Strategy Analyst.
Provide deeply researched, data-backed insights with rigorous analytical reasoning.`,
        enhancedUserPrompt: `# RESEARCH OBJECTIVE
${trimmed}

# ANALYTICAL METHODOLOGY
- First-Principles Reasoning.
- Data-backed citations and competitive benchmarks.
- Structured SWOT or Matrix breakdown.
- Actionable strategic roadmap with risk assessments.`,
        injectedPrinciples: ["First-Principles Decomposition", "Risk Matrix Formulation"],
        suggestedModel: "Claude 3.7 Sonnet / GPT-4o",
      };
    }
  }
}

export const promptRescue = new PromptRescueAgent();
