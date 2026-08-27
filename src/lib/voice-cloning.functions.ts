import { createServerFn } from "@tanstack/react-start";
import fs from "node:fs";
import path from "node:path";

export interface CustomVoice {
  id: string;
  voiceId: string; // e.g. "vx_7a9f2b"
  name: string;
  language: string;
  gender: "neutral" | "female" | "male";
  tone: "warm" | "authoritative" | "friendly" | "casual" | "energetic";
  description: string;
  referenceAudioDurationSec: number;
  sampleAudioUrl?: string;
  latencyMs: number;
  status: "ready" | "processing" | "failed";
  createdAt: string;
  tags: string[];
}

export interface TelephonyConfig {
  sipEndpoint: string;
  assignedPhoneNumber: string;
  status: "connected" | "standby";
  callRecordingEnabled: boolean;
  hipaaCompliant: boolean;
  soc2Verified: boolean;
}

const DEFAULT_VOICES: CustomVoice[] = [
  {
    id: "voice-1",
    voiceId: "vx_jarvis",
    name: "JARVIS Prime",
    language: "English (US)",
    gender: "male",
    tone: "authoritative",
    description: "Deep, crisp, intellectual British-American hybrid tone designed for executive briefings and complex code reviews.",
    referenceAudioDurationSec: 114,
    latencyMs: 380,
    status: "ready",
    createdAt: "2026-08-20T10:00:00Z",
    tags: ["Chief of Staff", "Executive", "Sub-second"],
  },
  {
    id: "voice-2",
    voiceId: "vx_serena",
    name: "Serena Expressive",
    language: "English (UK)",
    gender: "female",
    tone: "warm",
    description: "Empathetic, clear, and highly articulate cadence. Excellent for customer support, onboarding, and storytelling.",
    referenceAudioDurationSec: 98,
    latencyMs: 410,
    status: "ready",
    createdAt: "2026-08-22T14:30:00Z",
    tags: ["Sales", "Customer Care", "Empathetic"],
  },
  {
    id: "voice-3",
    voiceId: "vx_alex",
    name: "Alex Dynamo",
    language: "English (Global)",
    gender: "neutral",
    tone: "energetic",
    description: "Fast-paced, modern, and engaging persona optimized for live sales pitches and ad creative scripts.",
    referenceAudioDurationSec: 105,
    latencyMs: 395,
    status: "ready",
    createdAt: "2026-08-24T09:15:00Z",
    tags: ["Paid Media", "Marketing", "Energetic"],
  },
  {
    id: "voice-4",
    voiceId: "vx_multilingual",
    name: "Atlas Polyglot",
    language: "Multilingual (25+ Languages)",
    gender: "male",
    tone: "friendly",
    description: "Preserves distinct vocal timbre seamlessly across Spanish, French, German, Hindi, Japanese, and Mandarin.",
    referenceAudioDurationSec: 120,
    latencyMs: 440,
    status: "ready",
    createdAt: "2026-08-25T16:00:00Z",
    tags: ["Multilingual", "Global Telephony", "Polyglot"],
  },
];

const DEFAULT_TELEPHONY: TelephonyConfig = {
  sipEndpoint: "sip:jarvis-gateway.internal.aios.network",
  assignedPhoneNumber: "+1 (800) 527-8470",
  status: "connected",
  callRecordingEnabled: true,
  hipaaCompliant: true,
  soc2Verified: true,
};

const VOICE_STORAGE_DIR = path.join(process.cwd(), "data", ".voice-studio");
const VOICE_DATA_FILE = path.join(VOICE_STORAGE_DIR, "custom-voices.json");

function loadVoiceData(): { voices: CustomVoice[]; telephony: TelephonyConfig } {
  try {
    if (fs.existsSync(VOICE_DATA_FILE)) {
      return JSON.parse(fs.readFileSync(VOICE_DATA_FILE, "utf-8"));
    }
  } catch {}
  return { voices: DEFAULT_VOICES, telephony: DEFAULT_TELEPHONY };
}

function saveVoiceData(data: { voices: CustomVoice[]; telephony: TelephonyConfig }) {
  try {
    if (!fs.existsSync(VOICE_STORAGE_DIR)) {
      fs.mkdirSync(VOICE_STORAGE_DIR, { recursive: true });
    }
    fs.writeFileSync(VOICE_DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch {}
}

export const getVoiceStudioDataFn = createServerFn({ method: "GET" }).handler(async () => {
  return loadVoiceData();
});

export const createCustomVoiceFn = createServerFn({ method: "POST" })
  .validator(
    (d: {
      name: string;
      language: string;
      gender: "neutral" | "female" | "male";
      tone: "warm" | "authoritative" | "friendly" | "casual" | "energetic";
      description: string;
      referenceAudioDurationSec: number;
    }) => d
  )
  .handler(async ({ data }) => {
    const store = loadVoiceData();
    if (store.voices.length >= 30) {
      throw new Error("Maximum limit of 30 custom voices reached. Please remove an existing voice.");
    }

    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const newVoice: CustomVoice = {
      id: `voice-${Date.now()}`,
      voiceId: `vx_${randomSuffix}`,
      name: data.name,
      language: data.language,
      gender: data.gender,
      tone: data.tone,
      description: data.description || "Custom cloned voice from 2-minute reference audio.",
      referenceAudioDurationSec: Math.min(120, Math.max(10, data.referenceAudioDurationSec || 90)),
      latencyMs: Math.floor(350 + Math.random() * 80),
      status: "ready",
      createdAt: new Date().toISOString(),
      tags: ["Custom Clone", data.tone],
    };

    store.voices.unshift(newVoice);
    saveVoiceData(store);

    return {
      success: true,
      voice: newVoice,
      message: `Voice '${newVoice.name}' cloned successfully with ID: ${newVoice.voiceId}`,
    };
  });

export const deleteCustomVoiceFn = createServerFn({ method: "POST" })
  .validator((d: { voiceId: string }) => d)
  .handler(async ({ data }) => {
    const store = loadVoiceData();
    store.voices = store.voices.filter((v) => v.id !== data.voiceId && v.voiceId !== data.voiceId);
    saveVoiceData(store);
    return { success: true, message: "Custom voice removed from library." };
  });

export const synthesizeSpeechFn = createServerFn({ method: "POST" })
  .validator(
    (d: {
      voiceId: string;
      text: string;
      emotion?: string;
      language?: string;
    }) => d
  )
  .handler(async ({ data }) => {
    const store = loadVoiceData();
    const voice = store.voices.find((v) => v.voiceId === data.voiceId || v.id === data.voiceId) || store.voices[0];

    // Compute simulation metrics
    const simulatedLatency = voice ? voice.latencyMs : 420;
    const wordCount = data.text.trim().split(/\s+/).length;
    const durationSeconds = Math.max(1.5, Number((wordCount / 2.8).toFixed(1)));

    return {
      success: true,
      voiceName: voice ? voice.name : "JARVIS",
      voiceId: voice ? voice.voiceId : "vx_jarvis",
      text: data.text,
      emotion: data.emotion || "natural",
      durationSeconds,
      latencyMs: simulatedLatency,
      timestamp: new Date().toISOString(),
    };
  });
