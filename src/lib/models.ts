// Models available on free tiers — no payment required.
// Gemini: free via https://aistudio.google.com/apikey  (15 RPM / 1M tok/day)
// Groq:   free via https://console.groq.com            (very fast, multiple models)

export type ModelProvider = "gemini" | "groq" | "openrouter" | "cohere" | "ollama";
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

  // ── Google Gemini (free tier) ──────────────────────────────────────────
  { id: "gemini-flash-latest",      label: "Gemini Flash 2.0",      icon: "✦", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-3.6-flash",         label: "Gemini 3.6 Flash",      icon: "◈", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-flash-lite-latest", label: "Gemini Flash Lite",     icon: "✧", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },

  // ── Groq — General models (free tier) ─────────────────────────────────
  { id: "llama-3.3-70b-versatile",  label: "Llama 3.3 70B",        icon: "⚡", provider: "groq", reqPerDay: 1000  },
  { id: "llama-3.1-8b-instant",     label: "Llama 3.1 8B Fast",    icon: "→", provider: "groq", reqPerDay: 14400 },
  { id: "groq/compound",            label: "Compound (Web Search)", icon: "🌐", provider: "groq", supportsWebSearch: true, reqPerDay: 250 },

  // ── Cohere AI ─────────────────────────────────────────────────────────
  { id: "command-r-plus",           label: "Command R+",           icon: "🔮", provider: "cohere", reqPerDay: 1000 },

  // ── Ollama (local — needs ollama running at localhost:11434) ───────────
  { id: "ollama/llama3",            label: "Llama 3 (Local)",      icon: "🏠", provider: "ollama", reqPerDay: Infinity },
  { id: "ollama/mistral",           label: "Mistral (Local)",       icon: "🏠", provider: "ollama", reqPerDay: Infinity },
];

export const VOICE_MODELS = {
  stt: "whisper-large-v3-turbo",   // Groq — 2K req/day free
  tts: "canopylabs/orpheus-v1-english", // Groq — 100 req/day free
};

export const modelById = (id: string): ModelInfo => MODELS.find((m) => m.id === id) ?? MODELS[0];
