/**
 * Automation Scheduler & Background Task Manager
 */

export type ScheduleFrequency = "once" | "hourly" | "daily" | "weekly";

export interface ScheduledAutomation {
  id: string;
  name: string;
  schedule: ScheduleFrequency;
  timeOfDay?: string;
  actionSummary: string;
  enabled: boolean;
  requiresConfirmation: boolean;
  lastRun?: string;
  nextRun?: string;
  runCount: number;
}

export class AutomationScheduler {
  private static instance: AutomationScheduler;
  private automations: ScheduledAutomation[] = [
    {
      id: "auto_1",
      name: "Daily Wrap-Up Synthesis",
      schedule: "daily",
      timeOfDay: "18:00",
      actionSummary: "Summarize completed tasks, Git commits, and tomorrow's top 5 priorities.",
      enabled: true,
      requiresConfirmation: false,
      lastRun: new Date(Date.now() - 86400000).toISOString(),
      nextRun: new Date(Date.now() + 3600000).toISOString(),
      runCount: 14,
    },
    {
      id: "auto_2",
      name: "Workspace Temp Safety Audit",
      schedule: "weekly",
      timeOfDay: "09:00",
      actionSummary: "Scan Downloads/Temp for stale installers and duplicates in dry-run mode.",
      enabled: false,
      requiresConfirmation: true,
      lastRun: new Date(Date.now() - 7 * 86400000).toISOString(),
      nextRun: new Date(Date.now() + 48 * 3600000).toISOString(),
      runCount: 3,
    },
    {
      id: "auto_3",
      name: "Focus Deep Work Reminder",
      schedule: "daily",
      timeOfDay: "10:00",
      actionSummary: "Trigger Nia posture check & 45-minute sprint focus notification.",
      enabled: true,
      requiresConfirmation: false,
      lastRun: new Date(Date.now() - 3600000).toISOString(),
      nextRun: new Date(Date.now() + 12 * 3600000).toISOString(),
      runCount: 22,
    },
  ];

  private constructor() {}

  public static getInstance(): AutomationScheduler {
    if (!AutomationScheduler.instance) {
      AutomationScheduler.instance = new AutomationScheduler();
    }
    return AutomationScheduler.instance;
  }

  public getAutomations(): ScheduledAutomation[] {
    return this.automations;
  }

  public toggleAutomation(id: string): boolean {
    const item = this.automations.find((a) => a.id === id);
    if (item) {
      item.enabled = !item.enabled;
      return true;
    }
    return false;
  }

  public createAutomation(
    name: string,
    schedule: ScheduleFrequency,
    actionSummary: string,
    requiresConfirmation: boolean = true
  ): ScheduledAutomation {
    const item: ScheduledAutomation = {
      id: `auto_${Date.now()}`,
      name,
      schedule,
      actionSummary,
      enabled: true,
      requiresConfirmation,
      nextRun: new Date(Date.now() + 3600000).toISOString(),
      runCount: 0,
    };
    this.automations.push(item);
    return item;
  }
}

export const automationScheduler = AutomationScheduler.getInstance();
