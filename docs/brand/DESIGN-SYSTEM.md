# Vishwajeet AI Operating System — Master Design System Tokens

## 1. Claude Official Color Palette Tokens

```css
:root {
  /* Surface Baseline */
  --claude-bg-root: #181816;
  --claude-bg-surface: #22211E;
  --claude-bg-card: #282724;
  --claude-border: #383632;
  --claude-border-subtle: rgba(255, 255, 255, 0.07);

  /* Signature Claude Terracotta */
  --claude-terracotta: #D97757;
  --claude-terracotta-hover: #e28566;
  --claude-terracotta-bg: rgba(217, 119, 87, 0.12);

  /* Status & Agent Accents */
  --claude-amber: #E69D45;        /* Clarification / Needs Input */
  --claude-sage: #58A65C;         /* System OK / Ready */
  --claude-blue: #60A5FA;         /* Memory Check / Team Agent */
  --claude-purple: #B388FF;       /* CEO Agent */

  /* Text Tones */
  --text-primary: #F3F1EA;
  --text-muted: #9E9B92;
  --text-subtle: #75726A;

  /* Typography Families */
  --font-serif: 'Source Serif 4', Georgia, serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 2. Micro-Animations & SVG Keyframes

```css
@keyframes claudePulse {
  0%, 100% { transform: scaleY(0.5); opacity: 0.7; }
  50% { transform: scaleY(1.3); opacity: 1; }
}

.wave-bar {
  animation: claudePulse 1.2s infinite ease-in-out;
}
```

---

## 3. Three Reference Shell States

1. **Desktop/Web View**: Full navigation, left sidebar, top bar, mode tabs (`Chat`, `Code`, `Design`, `Cowork`), composer toolbar (`Tools`, `Connectors`, `Web Search`, `Upload`).
2. **Amber Clarification ("Needs Input")**: Status dot & callout switch to Amber (`#E69D45`) so clarification requests stand out at a glance.
3. **Mobile Phone View**: Condensed phone frame, icon-only mic/send, rounded pill composer, home-indicator bar.
