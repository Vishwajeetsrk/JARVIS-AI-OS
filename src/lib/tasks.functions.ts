import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export interface DailyTasksData {
  completed_today: string[];
  pending_tasks: string[];
  personal_learning: string[];
  personal_projects: string[];
  office_work: string[];
}

async function getTasksFilePath(): Promise<string> {
  const path = await import("node:path");
  return path.resolve(process.cwd(), "data", "daily_tasks.json");
}

async function readTasks(): Promise<DailyTasksData> {
  try {
    const fs = await import("node:fs/promises");
    const filePath = await getTasksFilePath();
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return {
      completed_today: [],
      pending_tasks: [],
      personal_learning: [],
      personal_projects: [],
      office_work: [],
    };
  }
}

async function writeTasks(data: DailyTasksData): Promise<void> {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const filePath = await getTasksFilePath();
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export const getDailyTasks = createServerFn({ method: "GET" })
  .handler(async () => {
    return await readTasks();
  });

export const mutateDailyTasks = createServerFn({ method: "POST" })
  .validator((data) =>
    z.object({
      action: z.enum(["add", "delete", "update", "move"]),
      category: z.string().optional(),
      item: z.string().optional(),
      oldItem: z.string().optional(),
      newItem: z.string().optional(),
      fromCategory: z.string().optional(),
      toCategory: z.string().optional(),
    }).parse(data)
  )
  .handler(async ({ data }) => {
    const tasks = await readTasks();
    const cat = (data.category || "pending_tasks") as keyof DailyTasksData;

    if (data.action === "add" && data.item) {
      if (!tasks[cat]) tasks[cat] = [];
      tasks[cat].unshift(data.item.trim());
      await writeTasks(tasks);
      return { success: true, tasks };
    }

    if (data.action === "delete" && data.item) {
      if (tasks[cat]) {
        tasks[cat] = tasks[cat].filter((t) => t !== data.item);
        await writeTasks(tasks);
      }
      return { success: true, tasks };
    }

    if (data.action === "update" && data.oldItem && data.newItem) {
      if (tasks[cat]) {
        const idx = tasks[cat].indexOf(data.oldItem);
        if (idx !== -1) {
          tasks[cat][idx] = data.newItem.trim();
          await writeTasks(tasks);
        }
      }
      return { success: true, tasks };
    }

    if (data.action === "move" && data.item && data.fromCategory && data.toCategory) {
      const from = data.fromCategory as keyof DailyTasksData;
      const to = data.toCategory as keyof DailyTasksData;
      if (tasks[from]) {
        tasks[from] = tasks[from].filter((t) => t !== data.item);
      }
      if (!tasks[to]) tasks[to] = [];
      tasks[to].unshift(data.item);
      await writeTasks(tasks);
      return { success: true, tasks };
    }

    return { success: false, tasks };
  });
