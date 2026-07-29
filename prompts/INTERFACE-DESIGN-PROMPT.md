# INTERFACE-DESIGN-PROMPT — Jarvis Command Console Design

Act as `design-agent`. Design the look and interaction model for Vishwajeet's "Jarvis" command interface — the single surface used to talk to the whole agent team by text or voice.

## Design Rules
1. **Visual Identity**: Dark-mode-first DevTools aesthetic (`#090c10` root background, `#131924` surface panels, monospace accents for agent labels). SVG-based icons ONLY (never emoji). Functional micro-animations only.
2. **Dual Input, One Composer**: Text field + mic toggle button. Voice input streams real-time text directly into the main editable text composer. Voice **never auto-submits silently**. Single send action.
3. **Response Area**: Tagged specialist badges (`ceo-agent`, `saas-builder`, `test-agent`), Golden Flow progress stepper (`ceo ──> team ──> saas-builder ──> test ──> devops`), and memory pre-flight callout card.
4. **6 Interaction States**: `Idle`, `Listening`, `Sent`, `Thinking`, `Responding`, `Needs Input`.
5. **Deliverable Protocol**: Produce Design Brief & Direction first; generate visual SVG/HTML mockups once direction is confirmed.
