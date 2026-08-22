/**
 * Speech Input & Output Provider Architecture
 */

export interface SpeechInputOptions {
  continuous?: boolean;
  interimResults?: boolean;
  language?: string;
}

export interface SpeechInputProvider {
  isSupported(): boolean;
  startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (err: string) => void,
    options?: SpeechInputOptions
  ): Promise<void>;
  stopListening(): void;
  isListening(): boolean;
}

export interface SpeechOutputOptions {
  voice?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export interface SpeechOutputProvider {
  isSupported(): boolean;
  speak(
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    options?: SpeechOutputOptions
  ): Promise<void>;
  stop(): void;
  isSpeaking(): boolean;
  getVoices(): Promise<Array<{ name: string; lang: string }>>;
}

/** Browser Web Speech Input Provider */
export class BrowserSpeechInputProvider implements SpeechInputProvider {
  private recognition: any = null;
  private listening: boolean = false;

  isSupported(): boolean {
    if (typeof window === "undefined") return false;
    return Boolean(
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    );
  }

  async startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (err: string) => void,
    options: SpeechInputOptions = {}
  ): Promise<void> {
    if (!this.isSupported()) {
      onError("SpeechRecognition is not supported in this browser environment.");
      return;
    }

    const SpeechRec =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    this.recognition = new SpeechRec();
    this.recognition.continuous = options.continuous ?? true;
    this.recognition.interimResults = options.interimResults ?? true;
    this.recognition.lang = options.language ?? "en-US";

    this.recognition.onresult = (event: any) => {
      let interim = "";
      let final = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      if (final) {
        onResult(final.trim(), true);
      } else if (interim) {
        onResult(interim.trim(), false);
      }
    };

    this.recognition.onerror = (event: any) => {
      if (event.error !== "no-speech") {
        onError(event.error);
      }
    };

    this.recognition.onend = () => {
      this.listening = false;
    };

    try {
      this.recognition.start();
      this.listening = true;
    } catch (err: any) {
      onError(err?.message || "Failed to start speech recognition.");
    }
  }

  stopListening(): void {
    if (this.recognition && this.listening) {
      this.recognition.stop();
      this.listening = false;
    }
  }

  isListening(): boolean {
    return this.listening;
  }
}

/** Browser Speech Synthesis Provider */
export class BrowserSpeechOutputProvider implements SpeechOutputProvider {
  private synth: SpeechSynthesis | null = null;
  private speaking: boolean = false;

  constructor() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
    }
  }

  isSupported(): boolean {
    return typeof window !== "undefined" && "speechSynthesis" in window;
  }

  async speak(
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    options: SpeechOutputOptions = {}
  ): Promise<void> {
    if (!this.isSupported() || !this.synth) {
      onEnd?.();
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate ?? 1.0;
    utterance.pitch = options.pitch ?? 1.05;
    utterance.volume = options.volume ?? 1.0;

    if (options.voice) {
      const voices = this.synth.getVoices();
      const match = voices.find((v) => v.name.includes(options.voice!));
      if (match) utterance.voice = match;
    }

    utterance.onstart = () => {
      this.speaking = true;
      onStart?.();
    };

    utterance.onend = () => {
      this.speaking = false;
      onEnd?.();
    };

    utterance.onerror = () => {
      this.speaking = false;
      onEnd?.();
    };

    this.synth.speak(utterance);
  }

  stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.speaking = false;
    }
  }

  isSpeaking(): boolean {
    return this.synth ? this.synth.speaking : false;
  }

  async getVoices(): Promise<Array<{ name: string; lang: string }>> {
    if (!this.synth) return [];
    const voices = this.synth.getVoices();
    return voices.map((v) => ({ name: v.name, lang: v.lang }));
  }
}
