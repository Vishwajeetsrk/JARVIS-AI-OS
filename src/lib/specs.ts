import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, statSync, rmSync } from "node:fs";
import { join } from "node:path";

const JARVIS_DIR = join(process.cwd(), ".jarvis");
const SPECS_DIR = join(JARVIS_DIR, "specs");

export type SpecStatus = "draft" | "active" | "completed" | "archived";
export type SpecType = "feature" | "bugfix" | "quick";

export interface SpecRequirement {
  id: string;
  title: string;
  description: string;
  acceptanceCriteria: string[];
  priority: "must" | "should" | "could" | "wont";
  status: "pending" | "in-progress" | "done";
}

export interface SpecTask {
  id: string;
  title: string;
  requirementIds: string[];
  status: "pending" | "in-progress" | "done" | "blocked";
}

export interface Spec {
  name: string;
  type: SpecType;
  status: SpecStatus;
  version: string;
  createdAt: string;
  updatedAt: string;
  requirements: SpecRequirement[];
  tasks: SpecTask[];
}

export interface SpecSummary {
  name: string;
  type: SpecType;
  status: SpecStatus;
  version: string;
  completedTasks: number;
  totalTasks: number;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

function ensureDirs(): void {
  if (!existsSync(JARVIS_DIR)) mkdirSync(JARVIS_DIR, { recursive: true });
  if (!existsSync(SPECS_DIR)) mkdirSync(SPECS_DIR, { recursive: true });
}

export function createSpec(
  name: string,
  type: SpecType,
  description: string,
): { success: boolean; spec?: Spec; error?: string } {
  ensureDirs();
  const specDir = join(SPECS_DIR, name);

  if (existsSync(specDir)) {
    return { success: false, error: `Spec "${name}" already exists` };
  }

  mkdirSync(specDir, { recursive: true });

  const now = new Date().toISOString();

  const requirements = `# Requirements: ${name}

${description}

## User Stories

### REQ-001: Core Functionality
**As a** user, **I want** [feature], **so that** [benefit].

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2

**Priority:** Must Have
**Status:** Pending
`;

  const design = `# Design: ${name}

## Architecture

\`\`\`mermaid
graph TD
    A[User] --> B[API]
    B --> C[Service]
    C --> D[Database]
\`\`\`

## Components

- Component 1
- Component 2

## Data Flow

Description of data flow...

## Error Handling

Error handling strategy...

## Testing Strategy

Testing approach...
`;

  const tasks = `# Tasks: ${name}

## Implementation Tasks

- [ ] **TASK-001**: Set up project structure
  - **Requirements:** REQ-001
  - **Status:** Pending

- [ ] **TASK-002**: Implement core logic
  - **Requirements:** REQ-001, REQ-002
  - **Status:** Pending

- [ ] **TASK-003**: Add tests
  - **Requirements:** REQ-001
  - **Status:** Pending
`;

  writeFileSync(join(specDir, "requirements.md"), requirements);
  writeFileSync(join(specDir, "design.md"), design);
  writeFileSync(join(specDir, "tasks.md"), tasks);

  const spec: Spec = {
    name,
    type,
    status: "draft",
    version: "1.0.0",
    createdAt: now,
    updatedAt: now,
    requirements: [
      {
        id: "REQ-001",
        title: "Core Functionality",
        description: "",
        acceptanceCriteria: ["Criterion 1", "Criterion 2"],
        priority: "must",
        status: "pending",
      },
    ],
    tasks: [
      { id: "TASK-001", title: "Set up project structure", requirementIds: ["REQ-001"], status: "pending" },
      { id: "TASK-002", title: "Implement core logic", requirementIds: ["REQ-001", "REQ-002"], status: "pending" },
      { id: "TASK-003", title: "Add tests", requirementIds: ["REQ-001"], status: "pending" },
    ],
  };

  return { success: true, spec };
}

export function listSpecs(): SpecSummary[] {
  ensureDirs();
  const entries = readdirSync(SPECS_DIR, { withFileTypes: true });

  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
    .map((e) => {
      const specDir = join(SPECS_DIR, e.name);
      const tasksFile = join(specDir, "tasks.md");
      let completedTasks = 0;
      let totalTasks = 0;

      if (existsSync(tasksFile)) {
        const content = readFileSync(tasksFile, "utf-8");
        const matches = content.match(/- \[[ x\-]\]/g) || [];
        totalTasks = matches.length;
        completedTasks = matches.filter((m) => m === "- [x]").length;
      }

      const requirementsFile = join(specDir, "requirements.md");
      let type: SpecType = "feature";
      let status: SpecStatus = "draft";
      let version = "1.0.0";
      let createdAt = "";
      let updatedAt = "";

      if (existsSync(requirementsFile)) {
        const content = readFileSync(requirementsFile, "utf-8");
        const typeMatch = content.match(/Type:\s*(feature|bugfix|quick)/i);
        if (typeMatch) type = typeMatch[1].toLowerCase() as SpecType;
        const statusMatch = content.match(/Status:\s*(draft|active|completed|archived)/i);
        if (statusMatch) status = statusMatch[1].toLowerCase() as SpecStatus;
      }

      try {
        const stat = statSync(specDir);
        createdAt = stat.birthtime.toISOString();
        updatedAt = stat.mtime.toISOString();
      } catch {
        createdAt = new Date().toISOString();
        updatedAt = new Date().toISOString();
      }

      return {
        name: e.name,
        type,
        status,
        version,
        completedTasks,
        totalTasks,
        progress: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
        createdAt,
        updatedAt,
      };
    });
}

export function showSpec(name: string): { success: boolean; content?: string; error?: string } {
  const specDir = join(SPECS_DIR, name);
  if (!existsSync(specDir)) {
    return { success: false, error: `Spec "${name}" not found` };
  }

  const files = ["requirements.md", "design.md", "tasks.md"];
  const sections: string[] = [];

  for (const file of files) {
    const filePath = join(specDir, file);
    if (existsSync(filePath)) {
      sections.push(readFileSync(filePath, "utf-8"));
    }
  }

  return { success: true, content: sections.join("\n\n---\n\n") };
}

export function updateTask(
  specName: string,
  taskId: string,
  status: "pending" | "in-progress" | "done",
): { success: boolean; error?: string } {
  const tasksFile = join(SPECS_DIR, specName, "tasks.md");
  if (!existsSync(tasksFile)) {
    return { success: false, error: `Spec "${specName}" not found` };
  }

  let content = readFileSync(tasksFile, "utf-8");
  const checkbox = status === "done" ? "[x]" : status === "in-progress" ? "[-]" : "[ ]";

  const taskRegex = new RegExp(`(\\- \\[[ x\\-]\\] \\*\\*${taskId}\\*\\*:.+\\n)`, "g");
  content = content.replace(taskRegex, (match) => {
    return match.replace(/- \[[ x\-]\]/, `- ${checkbox}`);
  });

  writeFileSync(tasksFile, content);
  return { success: true };
}

export function deleteSpec(name: string): { success: boolean; error?: string } {
  const specDir = join(SPECS_DIR, name);
  if (!existsSync(specDir)) {
    return { success: false, error: `Spec "${name}" not found` };
  }

  rmSync(specDir, { recursive: true, force: true });
  return { success: true };
}
