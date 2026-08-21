// Models available on free tiers — no payment required.
export type ModelProvider = "gemini" | "groq" | "openrouter" | "cohere" | "ollama" | "huggingface";

export const FREE_API_LINKS: Record<string, string> = {
  gemini: "https://aistudio.google.com/apikey",
  groq: "https://console.groq.com",
  openrouter: "https://openrouter.ai/settings/keys",
  cohere: "https://dashboard.cohere.com/api-keys",
  huggingface: "https://huggingface.co/settings/tokens",
  ollama: "https://ollama.com/download",
};

// Task → best model mapping (auto-switch tries these in order)
export const TASK_MODEL_PREFERENCE: Record<string, string[]> = {
  "website": ["gemini-flash-latest", "gemini-3.6-flash", "llama-3.3-70b-versatile", "nvidia/nemotron-3.5-lightning:free"],
  "app": ["gemini-flash-latest", "llama-3.3-70b-versatile", "z-ai/glm-5.2:free"],
  "code": ["gemini-flash-latest", "llama-3.3-70b-versatile", "command-r-plus"],
  "default": ["gemini-flash-latest", "llama-3.3-70b-versatile", "llama-3.1-8b-instant", "nvidia/nemotron-3.5-lightning:free"],
};
export type ModelInfo = {
  id: string;
  label: string;
  icon: string;
  provider: ModelProvider;
  supportsVision?: boolean;
  supportsWebSearch?: boolean;
  reqPerDay?: number;
};

export const MODELS: ModelInfo[] = [
  // ── OpenRouter Free Tier Models ─────────────────────────────────────────
  { id: "nvidia/nemotron-3.5-lightning:free", label: "Nemotron 3.5 (Free)", icon: "🚀", provider: "openrouter", reqPerDay: Infinity },
  { id: "liquid/lfm-2.5-2.6b:free",          label: "Liquid LFM 2.5 (Free)", icon: "💧", provider: "openrouter", reqPerDay: Infinity },
  { id: "z-ai/glm-5.2:free",                 label: "GLM 5.2 (Free)",       icon: "🧠", provider: "openrouter", reqPerDay: Infinity },
  { id: "meta-llama/llama-3.3-70b-instruct:free", label: "Llama 3.3 70B (OR Free)", icon: "🦙", provider: "openrouter", reqPerDay: Infinity },
  { id: "google/gemini-2.0-flash-exp:free", label: "Gemini 2.0 Flash (OR Free)", icon: "✦", provider: "openrouter", supportsVision: true, reqPerDay: Infinity },

  // ── Google Gemini (free tier) ──────────────────────────────────────────
  { id: "gemini-flash-latest",      label: "Gemini Flash 2.0",      icon: "✦", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-3.6-flash",         label: "Gemini 3.6 Flash",      icon: "◈", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-flash-lite-latest", label: "Gemini Flash Lite",     icon: "✧", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-2.0-flash",         label: "Gemini 2.0 Flash",      icon: "⚡", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },

  // ── Groq — General models (free tier) ─────────────────────────────────
  { id: "llama-3.3-70b-versatile",  label: "Llama 3.3 70B",        icon: "⚡", provider: "groq", reqPerDay: 1000  },
  { id: "llama-3.1-8b-instant",     label: "Llama 3.1 8B Fast",    icon: "→", provider: "groq", reqPerDay: 14400 },
  { id: "groq/compound",            label: "Compound (Web Search)", icon: "🌐", provider: "groq", supportsWebSearch: true, reqPerDay: 250 },
  { id: "groq/compound-mini",       label: "Compound Mini",        icon: "🔍", provider: "groq", supportsWebSearch: true, reqPerDay: 250 },

  // ── Cohere AI ─────────────────────────────────────────────────────────
  { id: "command-r-plus",           label: "Command R+",           icon: "🔮", provider: "cohere", reqPerDay: 1000 },

  // ── HuggingFace Free ──────────────────────────────────────────────────
  { id: "huggingface/mistral-7b",   label: "Mistral 7B (HF Free)", icon: "🤗", provider: "huggingface", reqPerDay: Infinity },

  // ── Ollama (local — needs ollama running at localhost:11434) ───────────
  { id: "ollama/llama3",            label: "Llama 3 (Local)",      icon: "🏠", provider: "ollama", reqPerDay: Infinity },
  { id: "ollama/mistral",           label: "Mistral (Local)",       icon: "🏠", provider: "ollama", reqPerDay: Infinity },
];

export const VOICE_MODELS = {
  stt: "whisper-large-v3-turbo",   // Groq — 2K req/day free
  tts: "canopylabs/orpheus-v1-english", // Groq — 100 req/day free
};

export const modelById = (id: string): ModelInfo => MODELS.find((m) => m.id === id) ?? MODELS[0];

export function getBestModelForTask(task: string): string {
  const t = task.toLowerCase();
  if (t.includes("website") || t.includes("landing") || t.includes("portfolio")) return TASK_MODEL_PREFERENCE["website"][0];
  if (t.includes("app") || t.includes("mobile") || t.includes("android") || t.includes("ios")) return TASK_MODEL_PREFERENCE["app"][0];
  if (t.includes("code") || t.includes("function") || t.includes("bug") || t.includes("api")) return TASK_MODEL_PREFERENCE["code"][0];
  return TASK_MODEL_PREFERENCE["default"][0];
}

export function getFallbackChain(failedId: string): string[] {
  const tried = new Set([failedId]);
  const chain: string[] = [];
  // Add task-agnostic fallback chain
  for (const id of TASK_MODEL_PREFERENCE["default"]) {
    if (!tried.has(id)) { chain.push(id); tried.add(id); }
  }
  // Add any remaining not tried
  for (const m of MODELS) if (!tried.has(m.id)) chain.push(m.id);
  return chain;
}
