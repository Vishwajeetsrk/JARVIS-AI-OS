import { unifiedMemory } from "./unified-memory";

export interface PillarPlanItem {
  pillar: "Work" | "Learning" | "Project" | "Gym" | "Side Income";
  title: string;
  durationMinutes?: number;
  status: "pending" | "in_progress" | "completed";
  priority: "High" | "Medium";
}

export interface DailySchedulePlan {
  dateStr: string;
  timeSlot: string;
  targetEnergy: "High" | "Balanced" | "Rest";
  pillars: PillarPlanItem[];
  focusRule: string;
}

export class DailyPlannerEngine {
  public static generate12PMPlan(): DailySchedulePlan {
    const memory = unifiedMemory.getSnapshot();
    const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

    return {
      dateStr: today,
      timeSlot: "12:00 PM - 10:00 PM",
      targetEnergy: "Balanced",
      focusRule: "Maximum 5 core tasks today. Zero multitasking — complete each block sequentially.",
      pillars: [
        {
          pillar: "Work",
          title: "Complete 7-Step Salesforce & Razorpay donation reconciliation & email Bharathi Ma'am",
          durationMinutes: 45,
          status: "pending",
          priority: "High",
        },
        {
          pillar: "Learning",
          title: "Practice PostgreSQL Vector embeddings & indexing for JARVIS memory",
          durationMinutes: 45,
          status: "pending",
          priority: "Medium",
        },
        {
          pillar: "Project",
          title: "Wardelio App: Polish 3D interactive buttons, card animations & settings screen",
          durationMinutes: 60,
          status: "pending",
          priority: "High",
        },
        {
          pillar: "Gym",
          title: "Strength Workout (Upper Body / Core) + Hydration Routine",
          durationMinutes: 60,
          status: "pending",
          priority: "Medium",
        },
        {
          pillar: "Side Income",
          title: "AgencyOS: Package Razorpay to Salesforce automated sync workflow demo",
          durationMinutes: 30,
          status: "pending",
          priority: "Medium",
        },
      ],
    };
  }
}
