import { createFileRoute } from "@tanstack/react-router";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CustomVoice,
  TelephonyConfig,
  getVoiceStudioDataFn,
  createCustomVoiceFn,
  deleteCustomVoiceFn,
  synthesizeSpeechFn,
} from "@/lib/voice-cloning.functions";

export const Route = createFileRoute("/_authenticated/console/voice")({
  loader: async () => {
    return await getVoiceStudioDataFn();
  },
  component: VoiceStudioPage,
});

const SUPPORTED_LANGUAGES = [
  "English (US)",
  "English (UK)",
  "English (Global)",
  "Spanish (Latin America)",
  "Spanish (Spain)",
  "French",
  "German",
  "Hindi",
  "Japanese",
  "Mandarin",
  "Portuguese (Brazil)",
  "Italian",
  "Arabic",
  "Korean",
  "Russian",
  "Dutch",
  "Polish",
  "Turkish",
  "Vietnamese",
  "Swedish",
  "Indonesian",
  "Multilingual (25+ Languages)",
];

function VoiceStudioPage() {
  const data = Route.useLoaderData();
  const [voices, setVoices] = useState<CustomVoice[]>(data.voices);
  const [telephony, setTelephony] = useState<TelephonyConfig>(data.telephony);
  const [selectedVoice, setSelectedVoice] = useState<CustomVoice>(data.voices[0]);
  const [activeTab, setActiveTab] = useState<"library" | "clone" | "sandbox" | "telephony">("library");

  // Voice Cloning Form State
  const [cloneName, setCloneName] = useState("");
  const [cloneLanguage, setCloneLanguage] = useState("English (US)");
  const [cloneGender, setCloneGender] = useState<"neutral" | "female" | "male">("neutral");
  const [cloneTone, setCloneTone] = useState<"warm" | "authoritative" | "friendly" | "casual" | "energetic">("warm");
  const [cloneDescription, setCloneDescription] = useState("");
  const [audioDuration, setAudioDuration] = useState(115);
  const [isRecording, setIsRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);

  // Speech Sandbox State
  const [sandboxText, setSandboxText] = useState(
    "Good morning. All overnight telemetry streams are healthy. 3 high-priority emails have been drafted for your review."
  );
  const [sandboxEmotion, setSandboxEmotion] = useState("warm");
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisResult, setSynthesisResult] = useState<{
    latencyMs: number;
    durationSeconds: number;
    text: string;
  } | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Handle clone voice submission
  const handleCreateClone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cloneName.trim()) {
      alert("Please enter a name for your custom voice.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await createCustomVoiceFn({
          data: {
            name: cloneName,
            language: cloneLanguage,
            gender: cloneGender,
            tone: cloneTone,
            description: cloneDescription,
            referenceAudioDurationSec: audioDuration,
          },
        });
        setVoices((prev) => [res.voice, ...prev]);
        setSelectedVoice(res.voice);
        setStatusMessage(res.message);
        setActiveTab("library");
        setCloneName("");
        setCloneDescription("");
        setTimeout(() => setStatusMessage(null), 4000);
      } catch (err: any) {
        alert(err.message || "Failed to clone voice");
      }
    });
  };

  // Handle Delete Voice
  const handleDeleteVoice = (voiceId: string) => {
    if (!confirm("Are you sure you want to delete this cloned voice?")) return;
    startTransition(async () => {
      try {
        await deleteCustomVoiceFn({ data: { voiceId } });
        setVoices((prev) => prev.filter((v) => v.id !== voiceId && v.voiceId !== voiceId));
        if (selectedVoice.id === voiceId && voices.length > 1) {
          setSelectedVoice(voices.find((v) => v.id !== voiceId)!);
        }
      } catch (err: any) {
        alert(err.message || "Failed to delete voice");
      }
    });
  };

  // Handle Synthesize Speech
  const handleSynthesize = () => {
    if (!sandboxText.trim()) return;
    setIsSynthesizing(true);
    startTransition(async () => {
      try {
        const res = await synthesizeSpeechFn({
          data: {
            voiceId: selectedVoice.voiceId,
            text: sandboxText,
            emotion: sandboxEmotion,
          },
        });
        setSynthesisResult(res);
        setIsPlayingAudio(true);
        // Play simulated audio speech using Web Speech API if supported
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(sandboxText);
          utterance.pitch = selectedVoice.gender === "female" ? 1.1 : selectedVoice.gender === "male" ? 0.9 : 1.0;
          utterance.rate = 1.05;
          utterance.onend = () => setIsPlayingAudio(false);
          utterance.onerror = () => setIsPlayingAudio(false);
          window.speechSynthesis.speak(utterance);
        } else {
          setTimeout(() => setIsPlayingAudio(false), res.durationSeconds * 1000);
        }
      } catch (err: any) {
        alert(err.message || "Synthesis failed");
      } finally {
        setIsSynthesizing(false);
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Speech-to-Speech Engine
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Sub-Second Latency (&lt;400ms)
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Real-Time Voice Studio & 2-Min Voice Cloner
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Clone up to 30 custom voices for free using 2 minutes of reference audio. Multilingual across 25+ languages with natural prosody.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveTab("library")}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "library"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🎙️ Voice Library ({voices.length}/30)
            </button>
            <button
              onClick={() => setActiveTab("clone")}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "clone"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ✨ Clone New Voice
            </button>
            <button
              onClick={() => setActiveTab("sandbox")}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "sandbox"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ⚡ Live Synthesis Sandbox
            </button>
            <button
              onClick={() => setActiveTab("telephony")}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "telephony"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📞 SIP Telephony
            </button>
          </div>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm flex items-center justify-between"
            >
              <span>🎉 {statusMessage}</span>
              <span className="text-xs text-violet-400/80">Ready for instant synthesis</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Tab 1: Voice Library */}
        {activeTab === "library" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {voices.map((voice) => (
              <div
                key={voice.id}
                onClick={() => setSelectedVoice(voice)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  selectedVoice.id === voice.id
                    ? "bg-violet-500/10 border-violet-500/50 shadow-xl shadow-violet-500/10"
                    : "bg-white/[0.02] hover:bg-white/[0.04] border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {voice.gender === "female" ? "👩" : voice.gender === "male" ? "👨" : "🎙️"}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white">{voice.name}</h3>
                        <span className="font-mono text-[10px] text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded border border-violet-500/20">
                          {voice.voiceId}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                      ⚡ {voice.latencyMs}ms
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 mb-3 leading-relaxed">
                    {voice.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 text-slate-300 border border-white/5">
                      🌐 {voice.language}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 text-slate-300 border border-white/5 capitalize">
                      🎭 {voice.tone}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 text-slate-300 border border-white/5">
                      ⏱️ {voice.referenceAudioDurationSec}s sample
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVoice(voice);
                      setActiveTab("sandbox");
                    }}
                    className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow transition-all"
                  >
                    Test Voice →
                  </button>
                  {voice.id !== "voice-1" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteVoice(voice.id);
                      }}
                      className="text-xs text-red-400/80 hover:text-red-400 transition-colors"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Clone New Voice Form */}
        {activeTab === "clone" && (
          <div className="max-w-2xl mx-auto rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-2xl">
                ✨
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Clone a Custom Voice (2 Minutes)</h3>
                <p className="text-xs text-slate-400">
                  Upload or record 90–120s of clear reference audio to replicate vocal timbre and prosody.
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateClone} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Voice Name *
                </label>
                <input
                  type="text"
                  required
                  value={cloneName}
                  onChange={(e) => setCloneName(e.target.value)}
                  placeholder="e.g., Executive Morgan, Jarvis Hybrid, Sales Rachel"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-violet-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Language
                  </label>
                  <select
                    value={cloneLanguage}
                    onChange={(e) => setCloneLanguage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-violet-500 focus:outline-none"
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang} value={lang} className="bg-slate-900">
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Base Tone / Emotion
                  </label>
                  <select
                    value={cloneTone}
                    onChange={(e) => setCloneTone(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-violet-500 focus:outline-none"
                  >
                    <option value="warm" className="bg-slate-900">Warm & Empathetic</option>
                    <option value="authoritative" className="bg-slate-900">Authoritative & Confident</option>
                    <option value="friendly" className="bg-slate-900">Friendly & Conversational</option>
                    <option value="energetic" className="bg-slate-900">Energetic & Fast-Paced</option>
                    <option value="casual" className="bg-slate-900">Casual & Relaxed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Reference Audio Duration (Seconds)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="30"
                    max="120"
                    value={audioDuration}
                    onChange={(e) => setAudioDuration(Number(e.target.value))}
                    className="flex-1 accent-violet-500"
                  />
                  <span className="font-mono text-sm text-violet-400 font-bold w-12 text-right">
                    {audioDuration}s
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Optimal quality achieved with 90s - 120s of continuous natural speech.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Voice Persona Description
                </label>
                <textarea
                  rows={2}
                  value={cloneDescription}
                  onChange={(e) => setCloneDescription(e.target.value)}
                  placeholder="Describe where and how this voice should be used..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-violet-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>🚀</span>
                <span>{isPending ? "Cloning Voice Model..." : "Synthesize & Save Cloned Voice"}</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Live Synthesis Sandbox */}
        {activeTab === "sandbox" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>🎙️</span> Active Voice Model
              </h3>
              <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{selectedVoice.name}</span>
                  <span className="text-xs text-emerald-400 font-bold">⚡ {selectedVoice.latencyMs}ms</span>
                </div>
                <div className="font-mono text-xs text-violet-300">{selectedVoice.voiceId}</div>
                <p className="text-xs text-slate-300">{selectedVoice.description}</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Select Emotion / Prosody
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["warm", "authoritative", "friendly", "energetic"].map((em) => (
                    <button
                      key={em}
                      onClick={() => setSandboxEmotion(em)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium capitalize border transition-all ${
                        sandboxEmotion === em
                          ? "bg-violet-600 text-white border-violet-500"
                          : "bg-white/5 text-slate-400 border-white/5 hover:text-white"
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Input Script for Real-Time Speech Synthesis
                </label>
                <textarea
                  rows={4}
                  value={sandboxText}
                  onChange={(e) => setSandboxText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-violet-500 focus:outline-none"
                  placeholder="Type anything for the cloned voice to say..."
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSynthesize}
                  disabled={isSynthesizing || !sandboxText.trim()}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>{isPlayingAudio ? "🔊 Playing Audio..." : "▶️ Synthesize & Play"}</span>
                </button>
              </div>

              {synthesisResult && (
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Time to First Audio (TTFA):</span>
                    <span className="text-emerald-400 font-bold">{synthesisResult.latencyMs}ms (Sub-second)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Audio Duration:</span>
                    <span className="text-white font-semibold">{synthesisResult.durationSeconds}s</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Speech-to-Speech Protocol:</span>
                    <span className="text-violet-400 font-mono">wss://api.x.ai/v1/realtime (PCM 24kHz)</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: SIP Telephony */}
        {activeTab === "telephony" && (
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Direct SIP & Phone Number Gateway</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Route inbound customer phone calls directly into autonomous sub-second voice agents.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                ● Live & Connected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-xs text-slate-400">Assigned Inbound Phone</span>
                <div className="text-lg font-mono font-bold text-white">{telephony.assignedPhoneNumber}</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-xs text-slate-400">SIP Endpoint</span>
                <div className="text-sm font-mono text-violet-400 truncate">{telephony.sipEndpoint}</div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Compliance & Security Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white flex items-center gap-2">
                  <span>🛡️</span> SOC 2 Type II Certified
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white flex items-center gap-2">
                  <span>🔒</span> HIPAA Compliant Call Redaction
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white flex items-center gap-2">
                  <span>🇪🇺</span> GDPR Data Residency (EU-West / US-East)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
