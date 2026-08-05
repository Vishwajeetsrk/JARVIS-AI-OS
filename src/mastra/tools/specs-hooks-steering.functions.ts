import {
  createSpec,
  listSpecs,
  showSpec,
  updateTask,
  deleteSpec,
  type SpecType,
  type SpecStatus,
} from "../../lib/specs.js";
import {
  createSteeringFile,
  listSteeringFiles,
  getSteeringForContext,
  type SteeringInclusion,
} from "../../lib/steering.js";
import {
  registerHook,
  listHooks,
  getHook,
  toggleHook,
  deleteHook,
  type HookTrigger,
} from "../../lib/hooks.js";

export const specsTools = [
  {
    description: "Create a new spec. Returns the created spec with ID.",
    parameters: {
      type: "object" as const,
      properties: {
        name: { type: "string" as const, description: "Spec name" },
        type: { type: "string" as const, description: "feature | bugfix | quick" },
        description: { type: "string" as const, description: "Description" },
      },
      required: ["name", "type"],
    },
    execute: async (args: { name: string; type: string; description?: string }) => {
      const result = createSpec(
        args.name,
        args.type as SpecType,
        args.description || `New ${args.type} spec`,
      );
      return JSON.stringify(result);
    },
  },
  {
    description: "List all specs with progress stats.",
    parameters: {
      type: "object" as const,
      properties: {
        status: { type: "string" as const, description: "Filter by status" },
      },
    },
    execute: async (args: { status?: string }) => {
      const specs = listSpecs();
      const filtered = args.status
        ? specs.filter((s: { status: string }) => s.status === args.status)
        : specs;
      return JSON.stringify(filtered);
    },
  },
  {
    description: "Show full spec details (requirements, design, tasks).",
    parameters: {
      type: "object" as const,
      properties: {
        name: { type: "string" as const, description: "Spec name" },
      },
      required: ["name"],
    },
    execute: async (args: { name: string }) => {
      const result = showSpec(args.name);
      return JSON.stringify(result);
    },
  },
  {
    description: "Update task status in a spec.",
    parameters: {
      type: "object" as const,
      properties: {
        specName: { type: "string" as const, description: "Spec name" },
        taskId: { type: "string" as const, description: "Task ID (e.g., TASK-001)" },
        status: { type: "string" as const, description: "pending | in-progress | done" },
      },
      required: ["specName", "taskId", "status"],
    },
    execute: async (args: { specName: string; taskId: string; status: string }) => {
      const result = updateTask(args.specName, args.taskId, args.status as any);
      return JSON.stringify(result);
    },
  },
  {
    description: "Delete a spec and its files.",
    parameters: {
      type: "object" as const,
      properties: {
        name: { type: "string" as const, description: "Spec name" },
      },
      required: ["name"],
    },
    execute: async (args: { name: string }) => {
      const result = deleteSpec(args.name);
      return JSON.stringify(result);
    },
  },
];

export const steeringTools = [
  {
    description: "List all steering files.",
    parameters: {
      type: "object" as const,
      properties: {},
    },
    execute: async () => {
      const files = listSteeringFiles();
      return JSON.stringify(files);
    },
  },
  {
    description: "Create a steering file for project guidance.",
    parameters: {
      type: "object" as const,
      properties: {
        name: { type: "string" as const, description: "File name" },
        inclusion: { type: "string" as const, description: "always | fileMatch | manual | auto" },
        content: { type: "string" as const, description: "Markdown content" },
      },
      required: ["name", "inclusion"],
    },
    execute: async (args: { name: string; inclusion: string; content?: string }) => {
      const result = createSteeringFile(args.name, args.inclusion as SteeringInclusion, args.content);
      return JSON.stringify(result);
    },
  },
  {
    description: "Get steering context for a file path.",
    parameters: {
      type: "object" as const,
      properties: {
        filePath: { type: "string" as const, description: "File path to match" },
      },
    },
    execute: async (args: { filePath?: string }) => {
      const context = getSteeringForContext(args.filePath);
      return JSON.stringify({ context });
    },
  },
];

export const hooksTools = [
  {
    description: "Register a hook that triggers on file changes, commands, or timers.",
    parameters: {
      type: "object" as const,
      properties: {
        name: { type: "string" as const, description: "Hook name" },
        trigger: { type: "string" as const, description: "onFileChange | onCommit | onSave | onCommand | onTimer" },
        command: { type: "string" as const, description: "Shell command to run" },
        patterns: {
          type: "array" as const,
          items: { type: "string" as const },
          description: "File patterns to match",
        },
      },
      required: ["name", "trigger", "command"],
    },
    execute: async (args: { name: string; trigger: string; command: string; patterns?: string[] }) => {
      const result = registerHook(args.name, args.trigger as HookTrigger, args.command, args.patterns);
      return JSON.stringify(result);
    },
  },
  {
    description: "List all registered hooks.",
    parameters: {
      type: "object" as const,
      properties: {},
    },
    execute: async () => {
      const hooks = listHooks();
      return JSON.stringify(hooks);
    },
  },
  {
    description: "Toggle a hook on or off.",
    parameters: {
      type: "object" as const,
      properties: {
        name: { type: "string" as const, description: "Hook name" },
        enabled: { type: "boolean" as const, description: "Enable or disable" },
      },
      required: ["name", "enabled"],
    },
    execute: async (args: { name: string; enabled: boolean }) => {
      const result = toggleHook(args.name, args.enabled);
      return JSON.stringify(result);
    },
  },
  {
    description: "Delete a hook.",
    parameters: {
      type: "object" as const,
      properties: {
        name: { type: "string" as const, description: "Hook name" },
      },
      required: ["name"],
    },
    execute: async (args: { name: string }) => {
      const result = deleteHook(args.name);
      return JSON.stringify(result);
    },
  },
];
