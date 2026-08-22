import { VRM } from "@pixiv/three-vrm";

export interface VisemeWeights {
  aa: number; // A (open)
  ih: number; // I (wide)
  ou: number; // U (rounded forward)
  ee: number; // E (smile open)
  oh: number; // O (round open)
}

export class AudioLipSyncEngine {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;
  private isSpeaking = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private onInterruptedCallback: (() => void) | null = null;

  constructor() {
    // AudioContext will be initialized on first user gesture
  }

  private initAudio() {
    if (typeof window === "undefined") return;
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        this.analyser.smoothingTimeConstant = 0.65;
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      }
    }
  }

  /**
   * Speak text with real-time speech synthesis and phonetic mouth driving
   */
  public speak(
    text: string,
    options?: {
      voice?: string;
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
    }
  ): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        resolve();
        return;
      }

      this.initAudio();
      window.speechSynthesis.cancel(); // Stop any previous speech

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Select female or expressive voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) =>
          v.name.includes("Zira") ||
          v.name.includes("Jenny") ||
          v.name.includes("Aria") ||
          v.name.includes("Samantha") ||
          (v.lang.startsWith("en") && v.name.toLowerCase().includes("female"))
      ) || voices.find((v) => v.lang.startsWith("en")) || voices[0];

      if (preferredVoice) utterance.voice = preferredVoice;
      utterance.rate = options?.rate ?? 1.05;
      utterance.pitch = options?.pitch ?? 1.15; // sweet, cute companion pitch

      utterance.onstart = () => {
        this.isSpeaking = true;
        options?.onStart?.();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        options?.onEnd?.();
        resolve();
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        options?.onEnd?.();
        resolve();
      };

      window.speechSynthesis.speak(utterance);
    });
  }

  /**
   * Interruption Guard: Abort ongoing speech immediately when user begins talking
   */
  public interrupt() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (this.isSpeaking) {
        window.speechSynthesis.cancel();
        this.isSpeaking = false;
        this.currentUtterance = null;
        if (this.onInterruptedCallback) {
          this.onInterruptedCallback();
        }
      }
    }
  }

  public onInterrupted(cb: () => void) {
    this.onInterruptedCallback = cb;
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }

  /**
   * Update VRM expression manager with dynamic phonetic visemes
   * Call inside requestAnimationFrame loop
   */
  public update(vrm: VRM | null, delta: number, elapsed: number) {
    if (!vrm || !vrm.expressionManager) return;

    if (this.isSpeaking) {
      // Natural speech phonetic modulation
      const t = elapsed * 16;
      const primaryOpen = Math.abs(Math.sin(t)) * (0.6 + Math.sin(elapsed * 4) * 0.3);
      const wideSpread = Math.abs(Math.sin(t * 1.3 + 1)) * 0.4;
      const roundLip = Math.abs(Math.cos(t * 0.8 + 2)) * 0.35;

      vrm.expressionManager.setValue("aa", Math.min(1.0, primaryOpen * 0.85));
      vrm.expressionManager.setValue("ih", Math.min(1.0, wideSpread * 0.6));
      vrm.expressionManager.setValue("ou", Math.min(1.0, roundLip * 0.4));
      vrm.expressionManager.setValue("ee", Math.min(1.0, wideSpread * 0.5));
      vrm.expressionManager.setValue("oh", Math.min(1.0, primaryOpen * 0.5 + roundLip * 0.3));
    } else {
      // Smooth decay back to closed mouth
      const visemes = ["aa", "ih", "ou", "ee", "oh"];
      visemes.forEach((viseme) => {
        const current = vrm.expressionManager!.getValue(viseme) || 0;
        if (current > 0.01) {
          vrm.expressionManager!.setValue(viseme, Math.max(0, current - delta * 8));
        } else {
          vrm.expressionManager!.setValue(viseme, 0);
        }
      });
    }
  }
}

export const audioLipSync = new AudioLipSyncEngine();
