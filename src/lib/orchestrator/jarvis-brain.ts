import { unifiedMemory } from "./unified-memory";
import { avatarController, type AvatarEmotion } from "../avatar/avatar-controller";
import { ProblemSolverEngine } from "./problem-solver";
import { ProjectBrain } from "./project-brain";
import { ProactiveEngine, type ProactiveCheckIn } from "../proactive/proactive-engine";

export interface OrchestratorInput {
  text: string;
  source: "voice" | "text" | "vision";
  projectId?: string;
}

export interface OrchestratorResponse {
  intent: "direct_answer" | "problem_solving" | "project_query" | "learning_guide" | "salesforce_workflow" | "code_generation";
  responseText: string;
  suggestedNextSteps: string[];
  avatarEmotion: AvatarEmotion;
  proactiveCheckIn?: ProactiveCheckIn | null;
}

export class JarvisBrainOrchestrator {
  private static instance: JarvisBrainOrchestrator;

  private constructor() {}

  public static getInstance(): JarvisBrainOrchestrator {
    if (!JarvisBrainOrchestrator.instance) {
      JarvisBrainOrchestrator.instance = new JarvisBrainOrchestrator();
    }
    return JarvisBrainOrchestrator.instance;
  }

  public async process(input: OrchestratorInput): Promise<OrchestratorResponse> {
    const q = input.text.trim();
    const lower = q.toLowerCase();

    avatarController.setState("THINKING", "curious");

    // 1. Problem Solving Mode
    if (lower.startsWith("i have a problem") || lower.includes("solve this problem") || lower.includes("troubleshoot")) {
      const solution = ProblemSolverEngine.solve(q);
      avatarController.setState("SPEAKING", "focused");

      return {
        intent: "problem_solving",
        responseText: `I understand, Vishwajeet. Let's solve this systematically.\n\n### Root Cause Analysis:\n${solution.rootCauseAnalysis}\n\n### Strategic Options:\n${solution.options.map(o => `• **${o.optionName}** [${o.complexity} Complexity]:\n  - Pros: ${o.pros.join(", ")}\n  - Cons: ${o.cons.join(", ")}`).join("\n")}\n\n### Recommended Next Step:\n${solution.recommendedAction}`,
        suggestedNextSteps: [
          "Execute recommended architectural upgrade",
          "Run automated test verification suite",
          "Review alternative minimal approach"
        ],
        avatarEmotion: "focused",
      };
    }

    // 2. Project Brain Query
    if (lower.includes("what was i working on") || lower.includes("wardelio") || lower.includes("blockers") || lower.includes("what should i build next") || lower.includes("explain the architecture")) {
      const answer = ProjectBrain.answerProjectQuery(q);
      avatarController.setState("SPEAKING", "attentive");

      return {
        intent: "project_query",
        responseText: answer,
        suggestedNextSteps: [
          "Open project in VS Code",
          "Review pending tasks for this project",
          "Generate code components"
        ],
        avatarEmotion: "attentive",
      };
    }

    // 3. Salesforce Office Workflow Query
    if (lower.includes("salesforce") || lower.includes("razorpay") || lower.includes("bharathi") || lower.includes("donation")) {
      avatarController.setState("SPEAKING", "focused");

      return {
        intent: "salesforce_workflow",
        responseText: `Your Salesforce daily reconciliation workflow consists of 7 steps:\n1. Download yesterday's Razorpay donation report (CSV)\n2. Clean and format phone numbers, emails, and PAN in Excel\n3. Verify donor existence in Salesforce; create and convert Leads if new\n4. Match Account ID / Donor ID and update PAN records\n5. Format Opportunities and upload via Salesforce Data Loader\n6. Send confirmation status email to Bharathi Ma'am\n7. Verify exception donation queries from Bharathi Ma'am or Aswath Ma'am and reply.`,
        suggestedNextSteps: [
          "Generate daily update email for Bharathi Ma'am",
          "Run Data Loader reconciliation format script",
          "Mark Salesforce workflow as completed today"
        ],
        avatarEmotion: "focused",
      };
    }

    // Default Conversational Intelligence
    const proactive = ProactiveEngine.generateCheckIn(false);
    avatarController.setState("SPEAKING", "happy");

    return {
      intent: "direct_answer",
      responseText: `Understood, Vishwajeet. I am processing your request with full memory context and active project matrices.`,
      suggestedNextSteps: [
        "View active project progress",
        "Practice Full Stack learning exercises",
        "Inspect persistent memory"
      ],
      avatarEmotion: "happy",
      proactiveCheckIn: proactive,
    };
  }
}

export const jarvisBrain = JarvisBrainOrchestrator.getInstance();
