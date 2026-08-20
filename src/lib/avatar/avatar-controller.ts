export type AvatarState =
  | "IDLE"
  | "LISTENING"
  | "THINKING"
  | "SPEAKING"
  | "HAPPY"
  | "CURIOUS"
  | "CARING"
  | "FOCUSED"
  | "PLAYFUL"
  | "RESTING"
  | "CELEBRATING";

export type AvatarEmotion =
  | "neutral"
  | "attentive"
  | "thinking"
  | "speaking"
  | "happy"
  | "curious"
  | "caring"
  | "focused"
  | "playful"
  | "resting"
  | "celebrating";

export type Viseme =
  | "viseme_sil"
  | "viseme_aa"
  | "viseme_E"
  | "viseme_I"
  | "viseme_O"
  | "viseme_U"
  | "viseme_PP"
  | "viseme_FF"
  | "viseme_TH"
  | "viseme_DD"
  | "viseme_kk"
  | "viseme_CH"
  | "viseme_SS"
  | "viseme_nn"
  | "viseme_RR";

export interface AvatarTransform {
  headRotation: { x: number; y: number; z: number };
  eyeLookAt: { x: number; y: number };
  breathingRate: number;
  blinkFrequency: number;
}

export interface AvatarStateEvent {
  state: AvatarState;
  emotion: AvatarEmotion;
  viseme: Viseme;
  isSpeaking: boolean;
  isListening: boolean;
  message?: string;
  timestamp: number;
}

export type AvatarListener = (event: AvatarStateEvent) => void;

export class AvatarController {
  private static instance: AvatarController;
  private currentState: AvatarState = "IDLE";
  private currentEmotion: AvatarEmotion = "neutral";
  private currentViseme: Viseme = "viseme_sil";
  private isSpeaking: boolean = false;
  private isListening: boolean = false;
  private listeners: Set<AvatarListener> = new Set();
  private eyeTarget: { x: number; y: number } = { x: 0, y: 0 };

  private constructor() {}

  public static getInstance(): AvatarController {
    if (!AvatarController.instance) {
      AvatarController.instance = new AvatarController();
    }
    return AvatarController.instance;
  }

  public subscribe(listener: AvatarListener): () => void {
    this.listeners.add(listener);
    listener(this.getEvent());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private emit(): void {
    const ev = this.getEvent();
    this.listeners.forEach((l) => l(ev));
  }

  public getEvent(): AvatarStateEvent {
    return {
      state: this.currentState,
      emotion: this.currentEmotion,
      viseme: this.currentViseme,
      isSpeaking: this.isSpeaking,
      isListening: this.isListening,
      timestamp: Date.now(),
    };
  }

  public setState(state: AvatarState, emotion?: AvatarEmotion): void {
    this.currentState = state;
    if (emotion) {
      this.currentEmotion = emotion;
    } else {
      switch (state) {
        case "LISTENING":
          this.currentEmotion = "attentive";
          this.isListening = true;
          this.isSpeaking = false;
          break;
        case "THINKING":
          this.currentEmotion = "curious";
          this.isListening = false;
          this.isSpeaking = false;
          break;
        case "SPEAKING":
          this.currentEmotion = "speaking";
          this.isListening = false;
          this.isSpeaking = true;
          break;
        case "HAPPY":
        case "CELEBRATING":
          this.currentEmotion = "happy";
          break;
        case "CARING":
          this.currentEmotion = "caring";
          break;
        case "FOCUSED":
          this.currentEmotion = "focused";
          break;
        case "PLAYFUL":
          this.currentEmotion = "playful";
          break;
        case "RESTING":
          this.currentEmotion = "resting";
          break;
        case "IDLE":
        default:
          this.currentEmotion = "neutral";
          this.isListening = false;
          this.isSpeaking = false;
          this.currentViseme = "viseme_sil";
          break;
      }
    }
    this.emit();
  }

  public setEmotion(emotion: AvatarEmotion): void {
    this.currentEmotion = emotion;
    this.emit();
  }

  public setViseme(viseme: Viseme): void {
    this.currentViseme = viseme;
    this.emit();
  }

  public setSpeaking(isSpeaking: boolean): void {
    this.isSpeaking = isSpeaking;
    if (isSpeaking) {
      this.currentState = "SPEAKING";
      this.currentEmotion = "speaking";
    } else if (this.currentState === "SPEAKING") {
      this.currentState = "IDLE";
      this.currentEmotion = "neutral";
      this.currentViseme = "viseme_sil";
    }
    this.emit();
  }

  public lookAt(target: { x: number; y: number }): void {
    this.eyeTarget = target;
  }

  public getEyeTarget(): { x: number; y: number } {
    return this.eyeTarget;
  }
}

export const avatarController = AvatarController.getInstance();
