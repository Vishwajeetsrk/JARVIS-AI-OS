import type { ComponentType } from "react";
import {
  SiGithub, SiFigma, SiGooglecalendar, SiGmail, SiNotion,
  SiSupabase, SiCloudflare, SiBrave, SiZapier, SiWolfram, SiElevenlabs,
} from "react-icons/si";
import { FaSlack } from "react-icons/fa6";
import { Shield, Brain } from "lucide-react";

export type IconComponent = ComponentType<{ className?: string }>;

export type AuthKind = "token" | "webhook" | "local";

export type ProviderDef = {
  id: string;
  name: string;
  description: string;
  icon: IconComponent;
  kind: "connector" | "plugin";
  auth: AuthKind;
  /** Label of the credential field shown in the connect dialog. */
  credentialLabel: string;
  /** Where the user gets the credential. */
  helpUrl?: string;
  helpText?: string;
};

export const PROVIDERS: ProviderDef[] = [
  // ── Connectors ────────────────────────────────────────────────────────
  {
    id: "github", name: "GitHub", description: "Sign in, create repos, direct push.",
    icon: SiGithub, kind: "connector", auth: "token",
    credentialLabel: "Personal access token (classic or fine-grained)",
    helpUrl: "https://github.com/settings/tokens",
    helpText: "Needs at least the repo and read:user scopes. You can also sign in with GitHub on the GitHub page.",
  },
  {
    id: "slack", name: "Slack", description: "Channels, DMs, workflows.",
    icon: FaSlack, kind: "connector", auth: "token",
    credentialLabel: "Bot or user OAuth token (xoxb-… / xoxp-…)",
    helpUrl: "https://api.slack.com/apps",
  },
  {
    id: "figma", name: "Figma", description: "Read designs and comments.",
    icon: SiFigma, kind: "connector", auth: "token",
    credentialLabel: "Personal access token",
    helpUrl: "https://www.figma.com/developers/api#access-tokens",
  },
  {
    id: "gcal", name: "Google Calendar", description: "Events + free/busy.",
    icon: SiGooglecalendar, kind: "connector", auth: "token",
    credentialLabel: "Google OAuth access token",
    helpUrl: "https://developers.google.com/oauthplayground",
    helpText: "Scope: https://www.googleapis.com/auth/calendar.readonly",
  },
  {
    id: "gmail", name: "Gmail", description: "Read and send email.",
    icon: SiGmail, kind: "connector", auth: "token",
    credentialLabel: "Google OAuth access token",
    helpUrl: "https://developers.google.com/oauthplayground",
    helpText: "Scope: https://www.googleapis.com/auth/gmail.readonly",
  },
  {
    id: "notion", name: "Notion", description: "Pages, databases, blocks.",
    icon: SiNotion, kind: "connector", auth: "token",
    credentialLabel: "Internal integration secret (ntn_…)",
    helpUrl: "https://www.notion.so/my-integrations",
  },
  {
    id: "supabase", name: "Supabase DB & Realtime", description: "PostgreSQL, Auth, Realtime Broadcast, Storage.",
    icon: SiSupabase, kind: "connector", auth: "token",
    credentialLabel: "Management API personal access token / Service Role Key",
    helpUrl: "https://supabase.com/dashboard/project/tupgfxqkefgntrpgakxk",
  },
  {
    id: "openrouter", name: "OpenRouter AI Gateway", description: "Free Tier Models: Nemotron 3.5, Liquid LFM, GLM 5.2.",
    icon: Brain, kind: "connector", auth: "token",
    credentialLabel: "OpenRouter API Key (sk-or-v1-...)",
    helpUrl: "https://openrouter.ai/keys",
  },
  {
    id: "gemini", name: "Google Gemini 2.0 AI Studio", description: "Multimodal Vision, Flash Reasoning & Code Synthesis.",
    icon: SiCloudflare, kind: "connector", auth: "token",
    credentialLabel: "Google AI Studio API Key (AIzaSy...)",
    helpUrl: "https://aistudio.google.com/app/apikey",
  },
  {
    id: "groq", name: "Groq Cloud LLaMA 3.3", description: "High-speed token streaming (~300 tok/sec) & Whisper STT.",
    icon: SiWolfram, kind: "connector", auth: "token",
    credentialLabel: "Groq Cloud API Key (gsk_...)",
    helpUrl: "https://console.groq.com/keys",
  },
  {
    id: "salesforce", name: "Salesforce CRM", description: "Donor leads, 80G tax exemptions, data loader batch uploads.",
    icon: Shield, kind: "connector", auth: "token",
    credentialLabel: "Salesforce Connected App OAuth / Security Token",
    helpUrl: "https://login.salesforce.com",
  },
  {
    id: "razorpay", name: "Razorpay Payments", description: "Donations reconciliation, payment orders & settlement extracts.",
    icon: SiZapier, kind: "connector", auth: "token",
    credentialLabel: "Razorpay Key ID & Key Secret",
    helpUrl: "https://dashboard.razorpay.com",
  },
  {
    id: "cloudflare", name: "Cloudflare", description: "Workers, DNS, R2.",
    icon: SiCloudflare, kind: "connector", auth: "token",
    credentialLabel: "API token",
    helpUrl: "https://dash.cloudflare.com/profile/api-tokens",
  },

  // ── Plugins ───────────────────────────────────────────────────────────
  {
    id: "brave-search", name: "Brave Search", description: "Independent web index.",
    icon: SiBrave, kind: "plugin", auth: "token",
    credentialLabel: "Brave Search API subscription token",
    helpUrl: "https://api-dashboard.search.brave.com/app/keys",
    helpText: "Powers the in-thread Web Search tool.",
  },
  {
    id: "zapier", name: "Zapier", description: "6k+ app automations.",
    icon: SiZapier, kind: "plugin", auth: "webhook",
    credentialLabel: "Catch Hook webhook URL",
    helpUrl: "https://zapier.com/apps/webhook/integrations",
  },
  {
    id: "wolfram", name: "Wolfram Alpha", description: "Computational knowledge.",
    icon: SiWolfram, kind: "plugin", auth: "token",
    credentialLabel: "App ID",
    helpUrl: "https://developer.wolframalpha.com/access",
  },
  {
    id: "elevenlabs", name: "ElevenLabs", description: "High-fidelity voices.",
    icon: SiElevenlabs, kind: "plugin", auth: "token",
    credentialLabel: "API key",
    helpUrl: "https://elevenlabs.io/app/settings/api-keys",
  },
  {
    id: "guardrails", name: "Guardrails", description: "PII + policy filters.",
    icon: Shield, kind: "plugin", auth: "local",
    credentialLabel: "",
    helpText: "Runs locally in the Jarvis server — no credential needed.",
  },
  {
    id: "vector", name: "Vector Store", description: "Embeddings + semantic search.",
    icon: Brain, kind: "plugin", auth: "local",
    credentialLabel: "",
    helpText: "Backed by your Jarvis database — no credential needed.",
  },
];

export const CONNECTOR_PROVIDERS = PROVIDERS.filter((p) => p.kind === "connector");
export const PLUGIN_PROVIDERS = PROVIDERS.filter((p) => p.kind === "plugin");
export const providerById = (id: string) => PROVIDERS.find((p) => p.id === id);
