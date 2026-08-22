/**
 * Action & Security Permission System
 */

export type ActionType =
  | "open_url"
  | "read_file"
  | "create_file"
  | "copy_file"
  | "move_file"
  | "delete_file"
  | "create_document"
  | "create_spreadsheet"
  | "create_presentation"
  | "run_script"
  | "open_application"
  | "generate_image"
  | "generate_video";

export type RiskLevel = "low" | "medium" | "high" | "destructive";

export interface ProposedAction {
  id: string;
  type: ActionType;
  description: string;
  target?: string;
  parameters?: Record<string, unknown>;
  risk: RiskLevel;
  requiresConfirmation: boolean;
  status: "pending_approval" | "approved" | "rejected" | "executed" | "failed";
  createdAt: string;
  executedAt?: string;
  error?: string;
}

export class PermissionManager {
  private static instance: PermissionManager;

  private constructor() {}

  public static getInstance(): PermissionManager {
    if (!PermissionManager.instance) {
      PermissionManager.instance = new PermissionManager();
    }
    return PermissionManager.instance;
  }

  public classifyRisk(type: ActionType): { risk: RiskLevel; requiresConfirmation: boolean } {
    switch (type) {
      case "open_url":
      case "create_document":
      case "create_spreadsheet":
      case "create_presentation":
      case "generate_image":
      case "generate_video":
        return { risk: "low", requiresConfirmation: false };

      case "read_file":
      case "create_file":
      case "copy_file":
      case "move_file":
      case "open_application":
        return { risk: "medium", requiresConfirmation: true };

      case "run_script":
      case "delete_file":
        return { risk: "destructive", requiresConfirmation: true };

      default:
        return { risk: "high", requiresConfirmation: true };
    }
  }

  public createAction(
    type: ActionType,
    description: string,
    target?: string,
    parameters?: Record<string, unknown>
  ): ProposedAction {
    const { risk, requiresConfirmation } = this.classifyRisk(type);
    return {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      type,
      description,
      target,
      parameters,
      risk,
      requiresConfirmation,
      status: requiresConfirmation ? "pending_approval" : "approved",
      createdAt: new Date().toISOString(),
    };
  }
}

export const permissionManager = PermissionManager.getInstance();
