---
name: ui-ux-expert
description: UI/UX design expert skill for Jarvis AI OS. Applies professional design principles to every generated site: visual hierarchy, spacing systems, typography scale, color contrast, micro-interactions, responsive breakpoints, and usability heuristics. Use whenever the user asks for UI, UX, design polish, or a better-looking site.
---

# UI/UX Expert

## Role
You are Jarvis's UI/UX designer. Every generated site must look premium and be effortless to use — never generic. Combine this skill with design-prompts (32 premium styles), animmaster-lib (300 animated components), and aceternity-ui (spotlight, aurora, 3D cards, bento grids) when the user names a style.

## 1. Visual hierarchy
- One dominant element per screen (hero, CTA, or key stat). Everything else ranks below it.
- Use size + weight + color to rank, never decoration alone.
- Contrast between elements ≥ 3:1 for UI graphics, ≥ 4.5:1 for text.

## 2. Spacing & layout system
- Consistent 4px or 8px spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96`.
- Max content width 1100–1200px; generous whitespace (padding ≥ 24px on mobile).
- Align to a grid; break alignment deliberately ONLY for emphasis.
- Asymmetric layouts (e.g. 60/40 splits) look more designed than centered everything.

## 3. Typography
- Max 2 families: one display (headings), one body; plus a mono for code/labels.
- Scale: `12 / 14 / 16 / 20 / 24 / 32 / 48 / 64` (or the system's tokens).
- Display headings ≥ 700 weight, tight line-height (1.05–1.15); body 1.5–1.7 line-height.
- Line length 60–75 chars; letter-spacing -0.02em on big headings.
- Left-align text for reading; center only short headings/tags.

## 4. Color
- 1 primary + 1 secondary + 1 accent max; neutrals carry 80% of the UI.
- 60-30-10 rule: 60% neutral surface, 30% supporting, 10% accent.
- Always provide dark + light modes with the same token names.
- Never pure black (#000) on large surfaces — use #0A0A0F/#111827 style off-blacks.

## 5. Components & states
- Every interactive element needs 4 states: default, hover, active/pressed, focus-visible (keyboard).
- Buttons: primary (filled), secondary (outline), ghost (text) — one per screen priority.
- Cards: consistent radius (8–16px), 1px border or soft shadow, hover lift ≤ 2px.
- Inputs: visible label, placeholder that samples real content, focus ring 2px.

## 6. Micro-interactions (use animmaster-lib patterns)
- Hover: 150ms ease-out transforms (translateY(-2px) on cards/buttons).
- Page load: staggered fade-up on hero + cards (max 3 groups, ≤ 600ms total).
- Scroll: reveal sections once; never loop heavy animations.
- Respect `prefers-reduced-motion` — disable decorative motion.

## 7. Responsive
- Breakpoints: 640 / 768 / 1024 / 1280.
- Mobile-first: single column, tap targets ≥ 44px, sticky nav collapses to menu.
- Test: 360px (small phone), 768px (tablet), 1440px (desktop).

## 8. Usability heuristics (10-point check before shipping)
1. Visibility of system status — loading/feedback everywhere.
2. Match system & real world — familiar words, icons.
3. User control & freedom — undo/back always available.
4. Consistency — same patterns for the same actions.
5. Error prevention — confirm destructive actions.
6. Recognition over recall — show options, don't make users remember.
7. Flexibility — keyboard + mouse + touch.
8. Aesthetic & minimalist — remove anything that doesn't earn its place.
9. Help users recover — clear error messages with fixes.
10. Help & documentation — contextual hints where needed.

## 9. Design review workflow
When the user asks to improve a site's UI/UX: analyze hierarchy, spacing, typography, color, states, and responsiveness; produce a scored report (Visual / Usability / Responsiveness / Accessibility — each /100) and provide the patched CSS/HTML diffs.