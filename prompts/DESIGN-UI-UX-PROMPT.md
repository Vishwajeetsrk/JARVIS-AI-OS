# DESIGN-UI-UX-PROMPT — Jarvis AI-OS Full Website & Desktop Design System

Act as **design-agent + frontend-design** working together.
Design the complete visual identity and interactive UI/UX for **Vishwajeet's Jarvis AI Operating System** across:
1. **Public Marketing Website** (`jarvis.vishwajeet.dev`)
2. **Desktop / Web App Shell** (the command console Vishwajeet uses daily)

**Before designing, read:**
- `docs/brand/DESIGN-SYSTEM.md` — design tokens
- `docs/brand/JARVIS-CONSOLE-SPEC.md` — UI state specification
- `public/index.html` — existing live implementation
- `Projects/jarvis-shell/JarvisAppShell.tsx` — reusable React component

---

## 🎨 Design Identity & Brand Rules

**This interface has its own brand.** It wraps Learnify AI, AgencyOS, DreamSync, and SkillForge — it is the meta-tool, not a skin of any one product. Jarvis's own shell stays visually neutral (dark, technical) so it never competes with whatever it's helping build.

### Color Tokens (Claude Official Warm Terracotta)
```css
:root {
  --bg-root:        #181816; /* Page & app root background */
  --bg-surface:     #22211E; /* Sidebar, panels, header */
  --bg-card:        #282724; /* Cards, modals, inputs */
  --border:         #383632; /* Dividers, input outlines */
  --terracotta:     #D97757; /* Primary: CTAs, active, logo */
  --terracotta-dim: #C86641; /* Hover state for terracotta */
  --amber:          #E69D45; /* Warning: needs-input state */
  --sage:           #58A65C; /* Success: system ready */
  --red-alert:      #C0392B; /* Error / incident state */
  --text-primary:   #F3F1EA; /* Headings, body */
  --text-muted:     #9E9B92; /* Labels, captions */
  --light-bg:       #FAF9F5; /* Marketing pages (light mode) */
}
```

### Typography
| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | `Source Serif 4` | 600 | 56–72px |
| Headline | `Source Serif 4` | 400–600 | 28–40px |
| UI Body | `Inter` | 400–500 | 14–16px |
| Code / Agent Tags | `JetBrains Mono` | 400–600 | 12–14px |

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600&display=swap" rel="stylesheet">
```

### Logo / Icon Rules
- **Claude Star SVG** (inline only, never an image file):
```svg
<svg viewBox="0 0 24 24" width="22" height="22">
  <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" fill="#D97757"/>
</svg>
```
- **No emoji anywhere.** All icons must be inline SVG — emoji break in monospace/code environments and across OS rendering.
- Use geometric SVG shapes for all toolbar chips: `◈` `◉` `◐` as text symbols only in fallback.

---

## 🖥 Surface 1: Public Marketing Website

### Pages
1. **Landing / Hero** (`/`)
2. **How It Works** (`/how-it-works`)
3. **Agent Skills Showcase** (`/skills`)
4. **System Status** (`/status`) ← **NEW: Critical from Lovable lessons**

---

### Landing Page (`/`)

#### Hero Section
- Background: `#181816`, full-width
- **Headline** (Source Serif 4, 64px): *"One brain. Many shells. Every project, remembered."*
- **Sub-tagline** (Inter, 18px, muted): *"18 specialized AI agents. Persistent memory. $0 cloud APIs. One command console."*
- **CTA**: `Open Jarvis Console →` — terracotta fill `#D97757`, white text, 8px radius, hover lifts 2px
- **Secondary CTA**: `View Agent Skills →` — transparent border, muted text
- **Background Motion**: Slow SVG particle field (dark sage dots `#2E4A30`, low opacity 0.3, moving at 0.2px/frame)
- **App Shell Preview**: Floating dark card showing Jarvis Console screenshot, subtle 20px shadow, 8deg tilt on desktop

#### System Status Banner ← **NEW (learned from Lovable)**
- Small horizontal bar below hero, always visible
- Shows live status: `● All Systems Operational` in sage OR `● Incident in Progress` in red
- Links to `/status` page
- Font: JetBrains Mono, 13px — this is a trust signal, not decoration

#### Features Strip (3-column grid)
| SVG Icon | Title | Description |
|---|---|---|
| Memory dot | Persistent Memory | No project repeats a mistake another already made |
| Lightning bolt | 18 Specialized Agents | CEO → Builder → Test → Deploy in one verified sequence |
| Infinity loop | One Brain, Many Shells | Website, desktop, terminal — same agent team, same memory |

#### Agent Skills Carousel
- Single horizontal scrolling row, no arrows (drag/swipe)
- Each skill: pill shape, `#282724` background, `#383632` border, JetBrains Mono text
- Hover: terracotta left-border flash + tooltip with skill description
- Skills: `ceo-agent` `team-agent` `saas-builder` `mcp-builder` `research-resources` `test-agent` `seo-agent` `legal-agent` `ai-agent` `ml-agent` `design-agent` `frontend-design` `algorithmic-art` `devops-agent` `workspace-agent` `memory-agent` `morning` `skill-creator`

#### Architecture Diagram
- Animated version of `how_jarvis_works_today.svg`
- Animate flow arrows left-to-right with CSS stroke-dashoffset animation
- Labels: "Reasoning Layer", "Mastra TS Engine", "Governance Registries", "Memory Bank"

#### Footer
- `#181816` background, 1px top border `#383632`
- Left: Claude Star SVG + Jarvis wordmark + tagline
- Center: Links (Docs, Agent Skills, Prompts, GitHub)
- Right: Memory bank sync indicator — `◈ Memory: Last synced {date}` in JetBrains Mono, muted

---

### System Status Page (`/status`) ← **NEW PAGE**

**Why this matters**: Lovable had 30+ incidents in 3 months. Jarvis depends on external providers (Groq, Gemini, n8n, Razorpay). Users need visibility when something is degraded.

#### Layout
- Page background: `#181816`
- **Overall Status Banner**: Full-width header `● All Systems Operational` in sage OR `● Degraded Performance` in amber OR `● Incident Active` in red
- **Service Grid** (cards):
  | Service | What It Is |
  |---|---|
  | Mastra Engine | Core orchestration (`src/mastra/index.ts`) |
  | Groq API | Free LLM ($0 Llama 3.3 70B) |
  | Gemini API | Free LLM ($0 Flash 2.0) |
  | n8n Webhooks | Business automation bridge |
  | Razorpay | AgencyOS billing webhooks |
  | Memory Bank | `~/.agent-memory/global/` sync |
  | Jarvis Console | Web preview `localhost:3333` |

- Each card: service name + uptime bar (last 90 days, green/amber/red blocks) + current status badge
- **Incident History**: Chronological list of past incidents — `date`, `title`, `duration`, `resolution`
- Status data stored in: `registries/status.json` (new file to create)

---

## 🖳 Surface 2: Desktop / Web App Shell

### App Shell Layout
```
┌────────────────────────────────────────────────────────────────┐
│  HEADER (52px)  ★ Jarvis  [Model ▼]    ● READY  ◈ SYNCED  ⚠   │
├─────────────────────┬──────────────────────────────────────────┤
│  SIDEBAR (230px)    │  MAIN CANVAS                             │
│                     │  ┌ CHAT ┬ CODE ┬ DESIGN ┬ COWORK ┐      │
│  [+ New Chat]       │  └──────┴──────┴────────┴────────┘      │
│                     │                                          │
│  PROJECTS           │  ┌─────────────────────────────────┐    │
│  Learnify AI        │  │ USER                            │    │
│  AgencyOS  ←active  │  │ "Add Razorpay webhook..."       │    │
│  DreamSync          │  └─────────────────────────────────┘    │
│  SkillForge         │                                          │
│  Client Work        │  ┌─────────────────────────────────┐    │
│                     │  │ saas-builder          [DONE]    │    │
│  RECENT CHATS       │  │ Webhook schema in               │    │
│  Subscription Flow  │  │ agencyos-billing-webhook.ts     │    │
│  Razorpay Audit     │  └─────────────────────────────────┘    │
│  Design Tokens      │                                          │
│                     │  [Chip row: Skills / MCP / Search]       │
│  SYSTEM             │  [Mic] [Message Jarvis…      ] [Send]   │
│  ● All OK           │                                          │
└─────────────────────┴──────────────────────────────────────────┘
```

### Header (52px height)
- Background: `#22211E`, bottom-border: `1px solid #383632`
- **Left**: Claude Star SVG + `Jarvis` (Source Serif 4, 18px) + Model Selector dropdown (JetBrains Mono, 13px, `#282724` background)
- **Right**: Status badge + Memory badge + **Incident warning icon ⚠** (amber, visible when any service degraded) ← NEW
- Status dot animations: sage pulse (ready) → amber blink (needs input) → terracotta spin (processing)

### Left Sidebar (230px)
- Background: `#282724`
- `+ New Chat`: terracotta fill, white text, 100% width, rounded 8px, hover: lifts 2px
- Section headings: JetBrains Mono, 11px, uppercase, `--text-muted`
- Project items: Inter 14px, `--text-primary`, left border `2px transparent` → terracotta on active/hover
- **System Health section at bottom of sidebar** ← NEW
  - `● All OK` in sage / `● Degraded` in amber
  - Links to `/status` page
  - Shows which agent skill is currently processing

### Chat Timeline Cards
- User card: `#282724`, border `#383632`, tag `USER` in muted mono
- Agent card: same background, tag in terracotta mono — e.g. `saas-builder`, `test-agent`
- **States**:
  - Normal: `#383632` border
  - Amber clarification: `#E69D45` border + amber tint bg + `NEEDS INPUT` tag
  - Error: `#C0392B` border + `ERROR` tag ← NEW (matches status page incident color)
  - Done: faint sage left-border (2px) ← NEW
- Response body: Inter for short UI text, Source Serif 4 for longer prose, JetBrains Mono for `<code>`

### Mode Tabs
- 4 tabs: `CHAT` `CODE` `DESIGN` `COWORK`
- JetBrains Mono, 13px, uppercase
- Active: terracotta underline (2px, slides with CSS transition 200ms) + terracotta text
- Inactive: muted text, no border

### Composer Toolbar Chips ← **FIXED: SVG icons only, no emoji**
- `[skills-svg] 18 Skills Active`
- `[plug-svg] MCP Connectors`
- `[globe-svg] Web Search: ON`
- `[clip-svg] Attach File`
- `[build-svg] Build: OK` ← NEW — shows live build status like Lovable's build status
- Background: `#282724`, border `#383632`, JetBrains Mono 12px, muted color
- Scrollable row, no wrap

### Composer Input Bar
- Full-width, background `#282724`, border `1.5px solid #D97757`, radius 10px
- **Left**: Mic SVG button (amber tint background, terracotta icon) — voice input
- **Center**: `<input>` placeholder `"Message Jarvis…"`, transparent background, Inter 15px
- **Right**: Send SVG button (solid `#D97757`, 38×38px, radius 8px, arrow-right SVG icon)
- Focus state: border glow `rgba(217, 119, 87, 0.35)`, box-shadow 0 0 0 3px

---

## 📱 Mobile Adaptation (≤640px)

- Sidebar: off-canvas drawer, triggered by hamburger SVG icon (3 lines)
- Drawer: slides in from left, full-height overlay, `#282724` background, backdrop blur
- Mode tabs: icon-only (SVG icons, no labels)
- Composer chips: hidden, replace with single `+` SVG expand icon that opens a chip drawer
- Send + Mic: stay visible as icon-only pill (`#282724`, terracotta border)
- Home indicator bar: `4px` wide pill, centered, `#383632` color, margin bottom 8px
- Font size scale: all sizes ×0.85

---

## ✨ Micro-Animations (All CSS, No JS Libraries)

| Element | Animation | Duration |
|---|---|---|
| Status dot (READY) | `@keyframes pulse` ring expand + fade, sage | 2s infinite |
| Status dot (PROCESSING) | `@keyframes spin` border-top rotate, terracotta | 0.8s linear |
| Status dot (NEEDS INPUT) | `@keyframes blink` opacity 1→0.3→1, amber | 1.5s |
| Status dot (ERROR) | `@keyframes shake` translateX ±3px, red | 0.4s ease |
| Chat card enter | `opacity: 0→1` + `translateY: 8px→0` | 200ms ease |
| New Chat button hover | `translateY(-2px)` + `box-shadow 0 8px 16px rgba(0,0,0,0.3)` | 150ms |
| Project nav item hover | Left border slides in: `border-left: 2px solid #D97757` | 150ms |
| Mode tab active underline | CSS `left` position transition | 200ms ease |
| Composer focus | Border glow `rgba(217,119,87,0.35)` | 200ms |
| Send button hover | `background: #C86641` | 150ms |
| Build status chip (OK→Error) | Background flash red then back | 300ms |

---

## 🔲 Full Component Inventory

### Foundation (Token-Level)
- `<StatusDot>` — 4 states: ready, processing, needs-input, error
- `<AgentTag>` — JetBrains Mono pill with terracotta/amber/red tint
- `<ModelSelector>` — dropdown, mono text, dark background
- `<Badge>` — generic badge: sage/amber/red/terracotta variants

### Shell Components
- `<AppHeader>` — logo + model selector + status badges + incident icon
- `<Sidebar>` — project list + recent chats + system health
- `<NavItem>` — project/chat list entry with active left-border
- `<ModeTab>` — tab bar with sliding active underline

### Chat Components
- `<ChatCard>` — 4 states: user / agent / amber-clarification / error
- `<AgentLabel>` — mono tag header above card body
- `<ComposerBar>` — mic + input + send
- `<ToolChip>` — capability chip with SVG icon (no emoji)

### Marketing Components
- `<HeroSection>` — full-bleed dark landing with particle background
- `<SystemStatusBanner>` — inline status indicator bar
- `<FeatureStrip>` — 3-column card row
- `<SkillsCarousel>` — horizontal drag-scrollable pill row
- `<ArchitectureDiagram>` — animated SVG flow diagram
- `<StatusPage>` — service grid + uptime bars + incident history

---

## 📐 Design Output Requirements

For each surface, produce a **single self-contained HTML file**:
1. All CSS variables inline in `:root {}` block
2. Google Fonts CDN link in `<head>`
3. All icons as inline SVG (zero emoji, zero image files)
4. Interactive state buttons: `Desktop Normal` | `Needs Input (Amber)` | `Error State` | `Mobile Frame`
5. Responsive at `640px` breakpoint via single `@media` query
6. Preview via `npx serve public -p 3333` → `http://localhost:3333`

---

## 🚀 Run Commands

```powershell
# Live preview
npx serve public -p 3333

# TypeScript validation
npx tsc --noEmit

# Full Mastra AI-OS engine test
npx tsx src/mastra/index.ts

# Package skill archives
powershell -ExecutionPolicy Bypass -File scripts/package-skills.ps1
```

---

## 📋 What Was Learned from Lovable.dev Incident History

These 30+ incidents (April–July 2026) revealed critical patterns for building Jarvis reliably:

| Lovable Failure Pattern | Jarvis Design Fix Applied |
|---|---|
| No in-app system status visibility | Added `<SystemStatusBanner>` on landing + sidebar system health section |
| Users confused during incidents | Added `/status` page with service grid + uptime bars |
| Build failures with no feedback | Added `Build: OK` chip in composer toolbar with live state |
| Upstream provider cascading failures | `registries/ai.json` has 3 fallback free APIs (Groq, Gemini, OpenRouter) |
| Custom domain SSL failures | Documented in `global-mistakes-log.md` for `devops-agent` |
| No error state in UI cards | Added 4th card state: `Error` (red border + `ERROR` mono tag) |
| Emoji icons broke in some environments | Enforced SVG-only icon rule throughout design system |

*Paste this full prompt into any Claude session to activate the full `design-agent + frontend-design` skill stack.*
