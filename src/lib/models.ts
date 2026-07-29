// Models available on free tiers — no payment required.
// Gemini: free via https://aistudio.google.com/apikey  (15 RPM / 1M tok/day)
// Groq:   free via https://console.groq.com            (very fast, multiple models)

export type ModelProvider = "gemini" | "groq" | "ollama";
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
  // ── Google Gemini (free tier) ──────────────────────────────────────────
  { id: "gemini-2.5-flash",      label: "Gemini 2.5 Flash",      icon: "✦", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-2.5-pro",        label: "Gemini 2.5 Pro",        icon: "◈", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-2.0-flash",      label: "Gemini 2.0 Flash",      icon: "✧", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-1.5-flash",      label: "Gemini 1.5 Flash",      icon: "•", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },
  { id: "gemini-1.5-pro",        label: "Gemini 1.5 Pro",        icon: "◆", provider: "gemini", supportsVision: true,  reqPerDay: Infinity },

  // ── Groq — General models (free tier) ─────────────────────────────────
  { id: "llama-3.3-70b-versatile",  label: "Llama 3.3 70B",        icon: "⚡", provider: "groq", reqPerDay: 1000  },
  { id: "llama-3.1-8b-instant",     label: "Llama 3.1 8B Fast",    icon: "→", provider: "groq", reqPerDay: 14400 },
  { id: "openai/gpt-oss-120b",      label: "GPT-OSS 120B",         icon: "◉", provider: "groq", reqPerDay: 1000  },
  { id: "openai/gpt-oss-20b",       label: "GPT-OSS 20B",          icon: "◎", provider: "groq", reqPerDay: 1000  },
  { id: "qwen/qwen3.6-27b",         label: "Qwen 3.6 27B",         icon: "◇", provider: "groq", reqPerDay: 1000  },

  // ── Groq — Web search (built-in real-time search) ─────────────────────
  { id: "groq/compound",            label: "Compound (Web Search)", icon: "🌐", provider: "groq", supportsWebSearch: true, reqPerDay: 250 },
  { id: "groq/compound-mini",       label: "Compound Mini (Fast)",  icon: "⊕", provider: "groq", supportsWebSearch: true, reqPerDay: 250 },

  // ── Ollama (local — needs ollama running at localhost:11434) ───────────
  { id: "ollama/llama3.3",          label: "Llama 3.3 (Local)",    icon: "🏠", provider: "ollama", reqPerDay: Infinity },
  { id: "ollama/mistral",           label: "Mistral (Local)",       icon: "🏠", provider: "ollama", reqPerDay: Infinity },
];

export const VOICE_MODELS = {
  stt: "whisper-large-v3-turbo",   // Groq — 2K req/day free
  tts: "canopylabs/orpheus-v1-english", // Groq — 100 req/day free
};

export const modelById = (id: string): ModelInfo => MODELS.find((m) => m.id === id) ?? MODELS[0];
