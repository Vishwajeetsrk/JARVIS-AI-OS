# Jarvis Command Console Interface — UI Specification

## Overview
The **Jarvis Command Console** is the central meta-interface used to communicate with Vishwajeet's entire agent team across Learnify AI, AgencyOS, DreamSync, SkillForge, and client engineering work.

---

## 1. Visual Identity & Brand System

- **Default Theme**: Dark-Mode-First DevTools UI Aesthetic (`#090c10` root background, `#131924` surface panels, `#161b22` response bubbles).
- **Quiet Neutral Shell**: Designed to stay visually neutral so it doesn't compete with whatever project UI (Learnify AI glassmorphism, AgencyOS fintech) it is actively building.
- **Typography Tokens**:
  - Headings: `Outfit`
  - Body & Messages: `Inter`
  - Agent Tags & Badges: `JetBrains Mono`
- **Icon Protocol**: 100% SVG vector icons only (zero emoji). Micro-animations are strictly functional (listening waveform pulse, quiet dot-indicator, streaming text reveal).

---

## 2. Dual Input, One Composer Model

- **Text Command Input**: Standard text composer field (`--jarvis-text-primary`), focusable, keyboard accessible.
- **Voice Command Microphone**: Mic toggle button adjacent to composer. Clicking activates Web Speech API / Whisper STT and triggers a live SVG cyan audio waveform.
- **Transcript-First Trust Rule**: Voice input populates directly into the main editable text field. Voice **never auto-submits silently** — the user always sees and can edit what was heard before submitting.
- **Single Submit Action**: One composer, one send button regardless of input method.

---

## 3. Response Area & Agent Visibility

- **Agent Badges**: Every response is tagged with its producing agent (`ceo-agent`, `saas-builder`, `test-agent`, `devops-agent`) with distinct accent border colors.
- **Golden Flow Progress Indicator**: Multi-agent sequential requests display a horizontal step-progress bar showing current active agent and completed steps.
- **Memory Pre-Flight Callout**: Pre-flight memory findings get a distinct, calm muted card (`rgba(59, 130, 246, 0.08)`), drawing attention to past mistake prevention rules without false alarms.

---

## 4. 6 Core UI Interaction States

1. **Idle**: Composer waiting, mic toggle inactive.
2. **Listening**: Mic cyan highlight active, SVG audio waveform animating, real-time transcript filling composer.
3. **Sent**: Composer clears, user message appears in timeline.
4. **Thinking**: Quiet monospace indicator `[ceo-agent analyzing...]` with subtle dot animation (no loud spinners).
5. **Responding**: Streamed text response tagged with active agent badge.
6. **Needs Input**: Clarifying question surfaced with composer refocus & amber glow.

---

## Technical Hand-Off Notes
Voice recognition requires binding Web Speech API (`webkitSpeechRecognition`) or local Whisper STT (`Tier-7-Voice`) when transitioning from design to code implementation.
