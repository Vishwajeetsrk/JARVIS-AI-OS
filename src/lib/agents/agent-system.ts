/**
 * 10 Specialized Autonomous Agents Architecture
 */

export interface AgentTask {
  id: string;
  agentRole:
    | "Planner"
    | "Research"
    | "Browser"
    | "File"
    | "Document"
    | "Presentation"
    | "Spreadsheet"
    | "Coding"
    | "Testing"
    | "Review";
  title: string;
  description: string;
  status: "idle" | "running" | "completed" | "cancelled" | "failed";
  progress: number;
  currentStep: string;
  maxSteps: number;
  stepsCompleted: number;
  logs: string[];
  createdAt: string;
}

export class AgentSystem {
  private static instance: AgentSystem;
  private tasks: Map<string, AgentTask> = new Map();

  private constructor() {}

  public static getInstance(): AgentSystem {
    if (!AgentSystem.instance) {
      AgentSystem.instance = new AgentSystem();
    }
    return AgentSystem.instance;
  }

  public getAgentRoster(): Array<{ role: AgentTask["agentRole"]; description: string; capabilities: string[] }> {
    return [
      {
        role: "Planner",
        description: "Decomposes complex requests, estimates risk, and orchestrates multi-agent tasks.",
        capabilities: ["Task breakdown", "Risk evaluation", "Step sequencing"],
      },
      {
        role: "Research",
        description: "Performs multi-source web intelligence with labeled facts, assumptions, and citations.",
        capabilities: ["Web search", "Fact verification", "Market synthesis"],
      },
      {
        role: "Browser",
        description: "Navigates web pages, searches YouTube, extracts content, and assists workflows safely.",
        capabilities: ["YouTube search", "Article reader", "Form assist"],
      },
      {
        role: "File",
        description: "Handles workspace scanning, duplicate detection, and safe Recycle Bin staging.",
        capabilities: ["Safe scan", "Dry-run analysis", "Recycle bin staging"],
      },
      {
        role: "Document",
        description: "Generates structured .docx, .md, and PDF reports without hallucinated claims.",
        capabilities: [".docx generation", "Markdown reports", "ATS Resumes"],
      },
      {
        role: "Presentation",
        description: "Designs executive 16:9 .pptx slide decks with structured outlines.",
        capabilities: [".pptx generation", "Slide outlines", "Speaker notes"],
      },
      {
        role: "Spreadsheet",
        description: "Builds multi-column .xlsx workbooks and audit datasets with ExcelJS.",
        capabilities: [".xlsx generation", "Formulas", "Dataset audits"],
      },
      {
        role: "Coding",
        description: "Writes idiomatic, type-safe TypeScript, React, and Three.js components.",
        capabilities: ["TypeScript", "Full-stack code", "Refactoring"],
      },
      {
        role: "Testing",
        description: "Executes Vitest unit tests, typechecks, and verifies system integrity.",
        capabilities: ["Vitest execution", "Type checking", "Regression checks"],
      },
      {
        role: "Review",
        description: "Performs pre-commit code reviews, safety audits, and quality scorecards.",
        capabilities: ["Security review", "Code quality", "Daily wraps"],
      },
    ];
  }

  public createTask(role: AgentTask["agentRole"], title: string, description: string): AgentTask {
    const task: AgentTask = {
      id: `task_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      agentRole: role,
      title,
      description,
      status: "running",
      progress: 10,
      currentStep: "Initializing task environment...",
      maxSteps: 5,
      stepsCompleted: 1,
      logs: [`[${new Date().toLocaleTimeString()}] Task assigned to ${role} Agent`],
      createdAt: new Date().toISOString(),
    };
    this.tasks.set(task.id, task);
    return task;
  }

  public cancelTask(taskId: string): boolean {
    const task = this.tasks.get(taskId);
    if (task && task.status === "running") {
      task.status = "cancelled";
      task.logs.push(`[${new Date().toLocaleTimeString()}] Task cancelled by user`);
      return true;
    }
    return false;
  }

  public getTasks(): AgentTask[] {
    return Array.from(this.tasks.values());
  }
}

export const agentSystem = AgentSystem.getInstance();
