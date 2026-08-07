export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      activity_log: {
        Row: {
          action: string
          actor_id: string | null
          actor_type: string
          agent_id: string | null
          created_at: string
          details: Json
          entity_id: string | null
          entity_type: string | null
          id: string
          run_id: string | null
          user_id: string
        }
        Insert: {
          action: string
          actor_id?: string | null
          actor_type?: string
          agent_id?: string | null
          created_at?: string
          details?: Json
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          run_id?: string | null
          user_id: string
        }
        Update: {
          action?: string
          actor_id?: string | null
          actor_type?: string
          agent_id?: string | null
          created_at?: string
          details?: Json
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          run_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_log_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_log_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "heartbeat_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_activity: {
        Row: {
          created_at: string
          detail: string | null
          id: string
          kind: string
          meta: Json
          thread_id: string | null
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          detail?: string | null
          id?: string
          kind?: string
          meta?: Json
          thread_id?: string | null
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          detail?: string | null
          id?: string
          kind?: string
          meta?: Json
          thread_id?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_activity_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_api_keys: {
        Row: {
          agent_id: string
          created_at: string
          id: string
          key_hash: string
          last_used_at: string | null
          name: string
          revoked_at: string | null
          user_id: string
        }
        Insert: {
          agent_id: string
          created_at?: string
          id?: string
          key_hash: string
          last_used_at?: string | null
          name?: string
          revoked_at?: string | null
          user_id: string
        }
        Update: {
          agent_id?: string
          created_at?: string
          id?: string
          key_hash?: string
          last_used_at?: string | null
          name?: string
          revoked_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_api_keys_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_runtime_state: {
        Row: {
          agent_id: string
          id: string
          last_error: string | null
          last_run_id: string | null
          last_run_status: string | null
          session_id: string | null
          state_json: Json
          total_cost_cents: number
          total_input_tokens: number
          total_output_tokens: number
          updated_at: string
          user_id: string
        }
        Insert: {
          agent_id: string
          id?: string
          last_error?: string | null
          last_run_id?: string | null
          last_run_status?: string | null
          session_id?: string | null
          state_json?: Json
          total_cost_cents?: number
          total_input_tokens?: number
          total_output_tokens?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          agent_id?: string
          id?: string
          last_error?: string | null
          last_run_id?: string | null
          last_run_status?: string | null
          session_id?: string | null
          state_json?: Json
          total_cost_cents?: number
          total_input_tokens?: number
          total_output_tokens?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_runtime_state_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: true
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_runtime_state_last_run_id_fkey"
            columns: ["last_run_id"]
            isOneToOne: false
            referencedRelation: "heartbeat_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      agents: {
        Row: {
          adapter_config: Json
          adapter_type: string
          budget_monthly_cents: number
          capabilities: Json
          color: string
          created_at: string
          description: string | null
          error_reason: string | null
          icon: string | null
          id: string
          last_heartbeat_at: string | null
          name: string
          pause_reason: string | null
          paused_at: string | null
          permissions: Json
          reports_to: string | null
          role: string
          runtime_config: Json
          spent_monthly_cents: number
          status: string
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          adapter_config?: Json
          adapter_type?: string
          budget_monthly_cents?: number
          capabilities?: Json
          color?: string
          created_at?: string
          description?: string | null
          error_reason?: string | null
          icon?: string | null
          id?: string
          last_heartbeat_at?: string | null
          name: string
          pause_reason?: string | null
          paused_at?: string | null
          permissions?: Json
          reports_to?: string | null
          role?: string
          runtime_config?: Json
          spent_monthly_cents?: number
          status?: string
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          adapter_config?: Json
          adapter_type?: string
          budget_monthly_cents?: number
          capabilities?: Json
          color?: string
          created_at?: string
          description?: string | null
          error_reason?: string | null
          icon?: string | null
          id?: string
          last_heartbeat_at?: string | null
          name?: string
          pause_reason?: string | null
          paused_at?: string | null
          permissions?: Json
          reports_to?: string | null
          role?: string
          runtime_config?: Json
          spent_monthly_cents?: number
          status?: string
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agents_reports_to_fkey"
            columns: ["reports_to"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      approvals: {
        Row: {
          agent_id: string | null
          created_at: string
          decided_at: string | null
          decision_note: string | null
          id: string
          payload: Json
          status: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          decided_at?: string | null
          decision_note?: string | null
          id?: string
          payload?: Json
          status?: string
          title: string
          type?: string
          user_id: string
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          decided_at?: string | null
          decision_note?: string | null
          id?: string
          payload?: Json
          status?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "approvals_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_incidents: {
        Row: {
          amount_limit: number
          amount_observed: number
          created_at: string
          id: string
          policy_id: string
          status: string
          threshold_type: string
          user_id: string
          window_end: string
          window_start: string
        }
        Insert: {
          amount_limit: number
          amount_observed: number
          created_at?: string
          id?: string
          policy_id: string
          status?: string
          threshold_type: string
          user_id: string
          window_end: string
          window_start: string
        }
        Update: {
          amount_limit?: number
          amount_observed?: number
          created_at?: string
          id?: string
          policy_id?: string
          status?: string
          threshold_type?: string
          user_id?: string
          window_end?: string
          window_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "budget_incidents_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "budget_policies"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_policies: {
        Row: {
          amount: number
          created_at: string
          hard_stop_enabled: boolean
          id: string
          is_active: boolean
          metric: string
          notify_enabled: boolean
          scope_agent_id: string | null
          scope_type: string
          user_id: string
          warn_percent: number
        }
        Insert: {
          amount?: number
          created_at?: string
          hard_stop_enabled?: boolean
          id?: string
          is_active?: boolean
          metric?: string
          notify_enabled?: boolean
          scope_agent_id?: string | null
          scope_type: string
          user_id: string
          warn_percent?: number
        }
        Update: {
          amount?: number
          created_at?: string
          hard_stop_enabled?: boolean
          id?: string
          is_active?: boolean
          metric?: string
          notify_enabled?: boolean
          scope_agent_id?: string | null
          scope_type?: string
          user_id?: string
          warn_percent?: number
        }
        Relationships: [
          {
            foreignKeyName: "budget_policies_scope_agent_id_fkey"
            columns: ["scope_agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      connections: {
        Row: {
          account_label: string | null
          access_token: string | null
          created_at: string
          id: string
          kind: string
          provider: string
          status: string
          user_id: string
        }
        Insert: {
          account_label?: string | null
          access_token?: string | null
          created_at?: string
          id?: string
          kind: string
          provider: string
          status?: string
          user_id: string
        }
        Update: {
          account_label?: string | null
          access_token?: string | null
          created_at?: string
          id?: string
          kind?: string
          provider?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      cost_events: {
        Row: {
          agent_id: string | null
          cached_input_tokens: number
          cost_cents: number
          id: string
          input_tokens: number
          issue_id: string | null
          model: string
          occurred_at: string
          output_tokens: number
          provider: string | null
          run_id: string | null
          user_id: string
        }
        Insert: {
          agent_id?: string | null
          cached_input_tokens?: number
          cost_cents?: number
          id?: string
          input_tokens?: number
          issue_id?: string | null
          model: string
          occurred_at?: string
          output_tokens?: number
          provider?: string | null
          run_id?: string | null
          user_id: string
        }
        Update: {
          agent_id?: string | null
          cached_input_tokens?: number
          cost_cents?: number
          id?: string
          input_tokens?: number
          issue_id?: string | null
          model?: string
          occurred_at?: string
          output_tokens?: number
          provider?: string | null
          run_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cost_events_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cost_events_issue_id_fkey"
            columns: ["issue_id"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cost_events_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "heartbeat_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      cron_jobs: {
        Row: {
          created_at: string
          enabled: boolean
          id: string
          last_run_at: string | null
          name: string
          next_run_at: string | null
          prompt: string
          schedule: string
          user_id: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          id?: string
          last_run_at?: string | null
          name: string
          next_run_at?: string | null
          prompt: string
          schedule: string
          user_id: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          id?: string
          last_run_at?: string | null
          name?: string
          next_run_at?: string | null
          prompt?: string
          schedule?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cron_jobs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      heartbeat_runs: {
        Row: {
          agent_id: string
          created_at: string
          error_code: string | null
          error_detail: string | null
          exit_code: number | null
          finished_at: string | null
          id: string
          invocation_source: string
          issue_id: string | null
          log_text: string | null
          result_json: Json
          started_at: string | null
          status: string
          usage_json: Json
          user_id: string
        }
        Insert: {
          agent_id: string
          created_at?: string
          error_code?: string | null
          error_detail?: string | null
          exit_code?: number | null
          finished_at?: string | null
          id?: string
          invocation_source?: string
          issue_id?: string | null
          log_text?: string | null
          result_json?: Json
          started_at?: string | null
          status?: string
          usage_json?: Json
          user_id: string
        }
        Update: {
          agent_id?: string
          created_at?: string
          error_code?: string | null
          error_detail?: string | null
          exit_code?: number | null
          finished_at?: string | null
          id?: string
          invocation_source?: string
          issue_id?: string | null
          log_text?: string | null
          result_json?: Json
          started_at?: string | null
          status?: string
          usage_json?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "heartbeat_runs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "heartbeat_runs_issue_id_fkey"
            columns: ["issue_id"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
        ]
      }
      issue_comments: {
        Row: {
          agent_id: string | null
          body: string
          created_at: string
          id: string
          issue_id: string
          user_id: string
        }
        Insert: {
          agent_id?: string | null
          body: string
          created_at?: string
          id?: string
          issue_id: string
          user_id: string
        }
        Update: {
          agent_id?: string | null
          body?: string
          created_at?: string
          id?: string
          issue_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "issue_comments_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "issue_comments_issue_id_fkey"
            columns: ["issue_id"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
        ]
      }
      issues: {
        Row: {
          assignee_agent_id: string | null
          checkout_run_id: string | null
          created_at: string
          description: string | null
          goal_ancestry: Json
          id: string
          labels: string[]
          parent_id: string | null
          priority: string
          project_id: string | null
          status: string
          title: string
          updated_at: string
          user_id: string
          work_mode: string
        }
        Insert: {
          assignee_agent_id?: string | null
          checkout_run_id?: string | null
          created_at?: string
          description?: string | null
          goal_ancestry?: Json
          id?: string
          labels?: string[]
          parent_id?: string | null
          priority?: string
          project_id?: string | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
          work_mode?: string
        }
        Update: {
          assignee_agent_id?: string | null
          checkout_run_id?: string | null
          created_at?: string
          description?: string | null
          goal_ancestry?: Json
          id?: string
          labels?: string[]
          parent_id?: string | null
          priority?: string
          project_id?: string | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
          work_mode?: string
        }
        Relationships: [
          {
            foreignKeyName: "issues_assignee_agent_id_fkey"
            columns: ["assignee_agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "issues_checkout_fk"
            columns: ["checkout_run_id"]
            isOneToOne: false
            referencedRelation: "heartbeat_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "issues_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          created_at: string
          embedding: number[] | null
          id: string
          parts: Json
          role: string
          thread_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          embedding?: number[] | null
          id?: string
          parts: Json
          role: string
          thread_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          embedding?: number[] | null
          id?: string
          parts?: Json
          role?: string
          thread_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          brand_style: Json
          color: string
          created_at: string
          description: string | null
          documents: Json
          id: string
          name: string
          refs: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          brand_style?: Json
          color?: string
          created_at?: string
          description?: string | null
          documents?: Json
          id?: string
          name: string
          refs?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          brand_style?: Json
          color?: string
          created_at?: string
          description?: string | null
          documents?: Json
          id?: string
          name?: string
          refs?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      threads: {
        Row: {
          created_at: string
          id: string
          project: string | null
          project_id: string | null
          starred: boolean
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          project?: string | null
          project_id?: string | null
          starred?: boolean
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          project?: string | null
          project_id?: string | null
          starred?: boolean
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "threads_project_fk"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      user_settings: {
        Row: {
          created_at: string
          default_model: string
          enabled_connectors: Json
          enabled_plugins: Json
          enabled_skills: Json
          enabled_tools: Json
          notifications_enabled: boolean
          preferences: Json
          sync_enabled: boolean
          theme: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          default_model?: string
          enabled_connectors?: Json
          enabled_plugins?: Json
          enabled_skills?: Json
          enabled_tools?: Json
          notifications_enabled?: boolean
          preferences?: Json
          sync_enabled?: boolean
          theme?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          default_model?: string
          enabled_connectors?: Json
          enabled_plugins?: Json
          enabled_skills?: Json
          enabled_tools?: Json
          notifications_enabled?: boolean
          preferences?: Json
          sync_enabled?: boolean
          theme?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
