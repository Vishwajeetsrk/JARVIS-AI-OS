/**
 * Avatar State Model & Types
 */

export type AvatarState =
  | "idle"
  | "listening"
  | "thinking"
  | "speaking"
  | "happy"
  | "concerned"
  | "excited"
  | "calm"
  | "working"
  | "error";

export type LipSyncVowel = "A" | "I" | "U" | "E" | "O";

export interface LipSyncFrame {
  vowel?: LipSyncVowel;
  intensity: number;
}

export interface AvatarStateEvent {
  state: AvatarState;
  previousState?: AvatarState;
  timestamp: number;
  reason?: string;
}
