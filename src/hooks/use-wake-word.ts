/**
 * useWakeWord — Detect "Hey Jarvis" or "Jarvis" from transcribed text.
 *
 * Returns whether a wake word was detected and the cleaned command text.
 *
 * Usage:
 *   const { isWakeWord, command } = useWakeWord(transcribedText);
 *   if (isWakeWord) { /* send command to AI * / }
 */

import { useMemo } from "react";

export interface WakeWordResult {
  /** Whether a wake word was detected */
  isWakeWord: boolean;
  /** The command text after removing the wake word */
  command: string;
  /** The wake word that was matched */
  matchedWord: string;
}

const WAKE_WORDS = [
  "hey jarvis",
  "ok jarvis",
  "okay jarvis",
  "hello jarvis",
  "jarvis",
];

/**
 * Check if text contains a wake word and extract the command.
 */
export function checkWakeWord(text: string): WakeWordResult {
  const normalized = text.toLowerCase().trim();

  for (const word of WAKE_WORDS) {
    if (normalized.startsWith(word)) {
      const command = text.slice(word.length).trim();
      return {
        isWakeWord: true,
        command,
        matchedWord: word,
      };
    }
  }

  return {
    isWakeWord: false,
    command: text,
    matchedWord: "",
  };
}

/**
 * React hook that memoizes wake word detection.
 */
export function useWakeWord(text: string): WakeWordResult {
  return useMemo(() => checkWakeWord(text), [text]);
}
