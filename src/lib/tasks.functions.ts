import { createServerFn } from "@tanstack/react-start";
import * as fs from "node:fs";
import * as path from "node:path";
import { z } from "zod";

const TASKS_FILE = path.resolve(process.cwd(), "data", "daily_tasks.json");

export interface DailyTasksData {
  completed_today: string[];
  pending_tasks: string[];
  personal_learning: string[];
  personal_projects: string[];
  office_work: string[];
}

function readTasks(): DailyTasksData {
  if (fs.existsSync(TASKS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(TASKS_FILE, "utf-8"));
    } catch {}
  }
  return {
    completed_today: [],
    pending_tasks: [],
    personal_learning: [],
    personal_projects: [],
    office_work: [],
  };
}

function writeTasks(data: DailyTasksData) {
  const dir = path.dirname(TASKS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(TASKS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export const getDailyTasks = createServerFn({ method: "GET" })
  .handler(async () => {
    return readTasks();
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
    const tasks = readTasks();
    const cat = (data.category || "pending_tasks") as keyof DailyTasksData;

    if (data.action === "add" && data.item) {
      if (!tasks[cat]) tasks[cat] = [];
      tasks[cat].unshift(data.item.trim());
      writeTasks(tasks);
      return { success: true, tasks };
    }

    if (data.action === "delete" && data.item) {
      if (tasks[cat]) {
        tasks[cat] = tasks[cat].filter((t) => t !== data.item);
        writeTasks(tasks);
      }
      return { success: true, tasks };
    }

    if (data.action === "update" && data.oldItem && data.newItem) {
      if (tasks[cat]) {
        const idx = tasks[cat].indexOf(data.oldItem);
        if (idx !== -1) {
          tasks[cat][idx] = data.newItem.trim();
          writeTasks(tasks);
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
      writeTasks(tasks);
      return { success: true, tasks };
    }

    return { success: false, tasks };
  });
