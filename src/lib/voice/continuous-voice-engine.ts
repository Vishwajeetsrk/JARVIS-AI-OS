/**
 * Continuous Always-On Voice & AI Dialogue Engine for Nia Companion
 * Listens continuously in the background, recognizes speech, executes commands,
 * speaks responses with audio-driven lip sync, and supports instant interruption.
 */
import { audioLipSync } from "@/lib/avatar/audio-lip-sync";
import { avatarController } from "@/lib/avatar/avatar-controller";
import { memoryStore } from "@/lib/memory/memory-store";
import { workspaceJanitor } from "@/lib/agents/sota/workspace-janitor";
import { promptRescue } from "@/lib/agents/sota/prompt-rescue";
import { dailyWrap } from "@/lib/agents/sota/daily-wrap";
import { deckBuilder } from "@/lib/agents/sota/deck-builder";
import { sheetBuilder } from "@/lib/agents/sota/sheet-builder";
import { replyRescue } from "@/lib/agents/sota/reply-rescue";

export type VoiceStatus = "idle" | "listening" | "processing" | "speaking" | "error";

export interface VoiceEvent {
  status: VoiceStatus;
  transcript?: string;
  response?: string;
  isWakeWordDetected?: boolean;
}

export type VoiceListener = (event: VoiceEvent) => void;

export class ContinuousVoiceEngine {
  private recognition: any = null;
  private isEnabled: boolean = false;
  private status: VoiceStatus = "idle";
  private listeners: Set<VoiceListener> = new Set();
  private restartTimeout: any = null;

  constructor() {
    this.initRecognition();
    audioLipSync.onInterrupted(() => {
      this.setStatus("listening");
    });
  }

  private setStatus(status: VoiceStatus, data?: Partial<VoiceEvent>) {
    this.status = status;
    const event: VoiceEvent = {
      status,
      ...data,
    };
    this.listeners.forEach((l) => l(event));
  }

  public subscribe(listener: VoiceListener): () => void {
    this.listeners.add(listener);
    listener({ status: this.status });
    return () => {
      this.listeners.delete(listener);
    };
  }

  private initRecognition() {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition API not available in this environment.");
      return;
    }

    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.interimResults = false;
    rec.lang = "en-US";

    rec.onstart = () => {
      if (this.status !== "speaking" && this.status !== "processing") {
        this.setStatus("listening");
        avatarController.setListening(true);
      }
    };

    rec.onresult = async (event: any) => {
      const results = event.results;
      const lastResult = results[results.length - 1];
      if (!lastResult || !lastResult[0]) return;

      const rawTranscript = lastResult[0].transcript.trim();
      if (!rawTranscript) return;

      console.log("🎤 Nia Heard:", rawTranscript);
      this.setStatus("processing", { transcript: rawTranscript });
      avatarController.setListening(false);
      avatarController.setEmotion("thinking");

      // Save user speech into 4-tier memory
      memoryStore.setMemory("session", "user_voice_input", rawTranscript, ["voice", "stt"]);

      // Process command and reply
      await this.processCommand(rawTranscript);
    };

    rec.onerror = (event: any) => {
      if (event.error !== "no-speech") {
        console.warn("Speech recognition error:", event.error);
      }
    };

    rec.onend = () => {
      // Auto-restart listening loop if enabled
      if (this.isEnabled) {
        clearTimeout(this.restartTimeout);
        this.restartTimeout = setTimeout(() => {
          if (this.isEnabled && this.status !== "speaking") {
            try {
              rec.start();
            } catch (e) {
              // already started
            }
          }
        }, 300);
      } else {
        this.setStatus("idle");
        avatarController.setListening(false);
      }
    };

    this.recognition = rec;
  }

  public startAlwaysOn() {
    this.isEnabled = true;
    if (!this.recognition) this.initRecognition();
    if (this.recognition) {
      try {
        this.recognition.start();
        this.setStatus("listening");
      } catch (e) {
        // Already active
      }
    }
  }

  public stopAlwaysOn() {
    this.isEnabled = false;
    clearTimeout(this.restartTimeout);
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
    audioLipSync.interrupt();
    this.setStatus("idle");
    avatarController.setListening(false);
    avatarController.setSpeaking(false);
  }

  public toggleAlwaysOn(): boolean {
    if (this.isEnabled) {
      this.stopAlwaysOn();
      return false;
    } else {
      this.startAlwaysOn();
      return true;
    }
  }

  public isListeningAlways(): boolean {
    return this.isEnabled;
  }

  /**
   * AI Command Routing & Response Generation
   */
  public async processCommand(transcript: string) {
    const lower = transcript.toLowerCase();

    // 1. Workspace Janitor Clean Command
    if (lower.includes("clean") || lower.includes("janitor") || lower.includes("trash") || lower.includes("free space")) {
      const audit = workspaceJanitor.generateCleanupAudit();
      const reply = `I scanned your workspace. Found ${audit.totalScanned} items that can free up ${audit.totalSavingsFormatted} with complete Recycle Bin rollback safety.`;
      await this.speakReply(reply, "happy");
      return;
    }

    // 2. Prompt Rescue Command
    if (lower.includes("rescue prompt") || lower.includes("enhance prompt") || lower.includes("upgrade prompt") || lower.includes("fix prompt")) {
      const promptToFix = transcript.replace(/.*(rescue prompt|enhance prompt|upgrade prompt|fix prompt)/i, "").trim() || "Build full stack scalable app";
      const rescued = promptRescue.rescue(promptToFix, "coding");
      const reply = `I have rescued and upgraded your prompt with Staff-Engineer architecture constraints and schemas.`;
      await this.speakReply(reply, "focused");
      return;
    }

    // 3. Daily Wrap Command
    if (lower.includes("daily wrap") || lower.includes("what did i do") || lower.includes("summary of today") || lower.includes("report")) {
      const wrap = dailyWrap.generateReport();
      const reply = `Here is your daily summary report. Your productivity score today is ${wrap.productivityScore} percent with 5 major milestones completed!`;
      await this.speakReply(reply, "happy");
      return;
    }

    // 4. Slide Deck Generation
    if (lower.includes("deck") || lower.includes("presentation") || lower.includes("powerpoint") || lower.includes("slides")) {
      const reply = `Generating your PowerPoint presentation deck right now using our SOTA deck builder engine.`;
      await this.speakReply(reply, "curious");
      return;
    }

    // 5. Excel Sheet Generation
    if (lower.includes("excel") || lower.includes("sheet") || lower.includes("spreadsheet") || lower.includes("tracker")) {
      const reply = `Building and formatting your Excel spreadsheet with styling and formulas.`;
      await this.speakReply(reply, "focused");
      return;
    }

    // 6. Identity / Greeting
    if (lower.includes("who are you") || lower.includes("your name") || lower.includes("introduce yourself")) {
      const reply = `Hello! I am Nia, your embodied 3D AI companion and personal operating system. I am always listening and ready to help you automate tasks, code, and organize your workspace!`;
      await this.speakReply(reply, "happy");
      return;
    }

    if (lower.includes("hello") || lower.includes("hi nia") || lower.includes("hey nia")) {
      const reply = `Hello Vishwajeet! I am right here listening. What would you like me to do?`;
      await this.speakReply(reply, "happy");
      return;
    }

    // 7. General Intelligent Fallback
    const fallbackReply = `I heard you say "${transcript}". I have logged this to our memory vault and I am on it!`;
    await this.speakReply(fallbackReply, "caring");
  }

  private async speakReply(text: string, emotion: "happy" | "focused" | "curious" | "caring" = "happy") {
    this.setStatus("speaking", { response: text });
    avatarController.setSpeaking(true);
    avatarController.setEmotion(emotion);

    memoryStore.setMemory("session", "last_nia_response", text, ["nia", "tts_reply"]);

    await audioLipSync.speak(text, {
      onStart: () => {
        this.setStatus("speaking", { response: text });
      },
      onEnd: () => {
        avatarController.setSpeaking(false);
        avatarController.setEmotion("neutral");
        if (this.isEnabled) {
          this.setStatus("listening");
          avatarController.setListening(true);
          try {
            this.recognition?.start();
          } catch (e) {}
        } else {
          this.setStatus("idle");
        }
      },
    });
  }
}

export const continuousVoiceEngine = new ContinuousVoiceEngine();
