# Jarvis Claude Restoration Plan — Research, Diagnosis & Fix

**Date:** 2026-08-21  
**Goal:** Restore old dashboard + projects live view/code/recreation, fix new-vs-old chat, align with Claude Chat / Cowork / Code / Design mental model, improve animations & missing pages.

---

## 1) Research — How Claude family works (2026)

| Product | Interface | What it does | File/Tool access | Best for |
|---------|-----------|--------------|------------------|----------|
| **Chat** | `claude.ai` browser | Conversational Q&A, brain, thinking & drafting | Uploads only, no local FS | Questions, brainstorm, quick drafts |
| **Artifacts** | Inside Chat (right canvas) | Live sandboxed mini-apps (charts, prototypes) | No FS, no APIs | Prototypes, viz |
| **Cowork** | Desktop app (Mac/Win) | Agentic — reads/writes chosen folders, multi-step tasks, delivers `docx/xlsx/pptx`, scheduled, sub-agents, long-running, cloud sessions | Yes (chosen folders) limited shell | Office work, docs, organizing |
| **Code** | Terminal CLI / Desktop Code tab / IDE | Full FS, shell (`git/npm/docker`), 110+ prompt strings, 18 built-in tools + MCP, permissions, checkpoints, agentic loop `gather → act → verify`, compaction at 83.5% | Full | Building software |
| **Design** | `claude.ai/design` canvas + `/design` in Code | Chat left + canvas right, `/design-sync` imports design system, exports PDF/PPTX/HTML, syncs with Code | Via design-sync | Visual work |

**Key pattern:** Chat = brain, Cowork = hands, Code = hands+power tools, Design = sketchpad. Cowork & Code share Cowork engine, Chat/Cowork share one home (toggle Chat/Cowork in same box). All share skills (auto-activated, 5 max).

---

## 2) Mapping to Jarvis

| Claude | Jarvis equivalent | Current route | Status |
|--------|-------------------|---------------|--------|
| Chat | Threads (`/console/$threadId`) conversational | `src/routes/_authenticated/console/$threadId.tsx` | OK |
| Cowork | Projects + Automations + TaskProcessCenter (multi-step, file deliverables) | `/console/projects`, `/console/automations`, `/console/tasks` | OK but hidden |
| Code | Skills / Tools / Plugins / GitHub + Tauri CLI | `/console/skills`, `/tools`, `/plugins`, `/github`, `cli/index.ts` | OK |
| Design | Design Systems + live preset-sites + recreation | `/design`, `/console/design`, `public/preset-sites/*`, `src/lib/learnify-designs.json` | 27 systems, 67 sites OK, but nav buried |
| Artifacts | AIThinkingPresentation + live preview | `/console` dashboard artifact | OK |

**Chat toggle in screenshot:** `Chat` (quick Q&A) vs `Cowork` (agentic deliverable). Jarvis `Chat/Cowork` pill currently switches local state only — should map to: Chat → create normal thread, Cowork → create thread with `project_id` + scheduled/automation hint.

---

## 3) Diagnosis — What broke / missing

- **Dashboard gone:** `src/routes/_authenticated/console/index.tsx` overwritten with Claude empty state (`Evening thoughts`). Old dashboard (340 lines: welcome `Welcome back, Vishwajeet`, `Lumi/Lyra/VRM/ArcHUD`, `QuickCommand`, `StatCards`, `QuickActions` 4, `AIThinking`, `Live Activity`, `Recent Projects`, `Engine Status`, `News`, `Controls`, `WeatherLearningHub`, `DailyContextHub`, `SystemHealthMonitor`, etc.) lost. Expected at `GET /console`.
- **Projects live view/code/recreation still works** (`listProjectSites()` / `getProjectSite()` via `src/lib/design-systems.ts:181/203`, `public/preset-sites/*/index.html` 67 sites) but discovery is via sidebar `Projects` → not obvious. No showcase tab on new home.
- **New vs old chat:** `New` button + input both call `createThread` → new thread, sidebar `threads` list allows continue old chat — works, but UX unclear (no “continue” label, no empty-state hint).
- **Missing animations:** Central input has `motion` fade, sidebar stagger exists, but dashboard widgets had no enter animation, `StatCards` count-up only, no page transitions.
- **Missing pages:** Landing still shows v2.6.0 hero + 7 context modes etc., but `/how-it-works`, `/skills`, `/design` exist yet not linked from new top bar. Mobile sheet uses old `bg-surface` not dark.

---

## 4) Fix Plan

### 4.1 Restore dashboard without losing Claude home
- Keep `src/routes/_authenticated/console/index.tsx` as **tabbed home**: `Chat` (current Evening thoughts + input + pills) ↔ `Dashboard` (restored old dashboard). Store `activeTab` in `localStorage("jarvis-console-tab")`, default `chat`. Header toggle `Chat | Dashboard` (pill, like Chat/Cowork) below greeting. Dashboard content is the full old component (imported as `DashboardView` from `src/components/jarvis/dashboard-view.tsx` extracted from `4793bbd`).
- Mobile: same tabs.

### 4.2 Fix Projects live view + code + recreation
- Ensure `src/routes/_authenticated/console/design.tsx` and `/console/projects/$projectId` correctly list `listProjectSites()` and link `previewUrl` + `source` code view + `Recreate` button (`getDesignSystem`).
- Add **Showcase** shortcut on Chat home: below pills, a `Featured live sites` carousel (3 aceternity previews) linking to `/preset-sites/aceternity-ai-saas/` etc., with `View code` + `Recreate` actions.
- Verify `src/lib/preset-sites.desc.ts` (67) and `src/lib/learnify-designs.json` (27) stay in sync via `scripts/regen-preset-desc.mjs`.

### 4.3 New vs old chat clarity
- `New` + central input → `mCreate` new thread (Chat vs Cowork mode hint in seed: Cowork adds “Task: …” prefix).
- Sidebar `Chats and tasks` + `Pinned`/`Recent` → continue old chat (existing `renderThread`).
- Add empty-state hint when `unstarred===0`: “Start a new chat or continue a pinned one”.

### 4.4 Design & animation polish + missing pages
- Sidebar: keep dark `#0f0f10`, add `motion` stagger for dashboard widgets (`reveal-stagger`).
- Input: keep `rounded-[28px]` + focus ring, add `aurora`/`shimmer` subtle border on focus (re-use aceternity tokens).
- Dashboard widgets: wrap each `SectionCard` in `motion.div` with `initial {opacity:0,y:8}`.
- Add missing pages nav: ensure `MarketingNav` already links `How it works / Skills / Design Systems` — keep, and add `/console` top bar `Design` link.
- Ensure PWA `dist/sw.js` warning is non-blocking.

### 4.5 Order of execution
1. Extract old dashboard to `src/components/jarvis/dashboard-view.tsx`.
2. Rewrite `src/routes/_authenticated/console/index.tsx` to tabbed `Chat|Dashboard` (this task).
3. Add Showcase carousel to Chat tab.
4. Wire Cowork mode to include task hint.
5. Verify `src/routes/_authenticated/console/design.tsx` + `src/lib/design-systems.ts` live view.
6. `npm run build` + `tsc --noEmit` + commit.

---

## 5) Verification
- `npx tsc --noEmit` → 4 pre-existing `learnify-engine.ts` errors only.
- `npm run build` with `NODE_OPTIONS=--max-old-space-size=10240` → `EXIT 0`.
- Manual: `/console` shows Chat greeting + pills + Dashboard tab; Dashboard tab shows old widgets; sidebar threads continue; `/console/design` lists 27 systems + 67 sites with preview + code + recreate.
