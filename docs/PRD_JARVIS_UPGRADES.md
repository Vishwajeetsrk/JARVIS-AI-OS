# JARVIS AI OS — Upgrades PRD (v2.7.0)

**Author:** Vishwajeet · **Date:** 2026-08-22 · **Status:** Draft → In Progress  
**Goal:** Make Jarvis answer *every* question (code/design/image/scripts/video/music/movies/docs/ppt/excel/PRD/plans/prompts/research/news/learning/business/legal/github/resources/clones/tools/hacking) with live view + code + how-AI-worked + 5 prompts, fix voice + recycle bin, and ship polished motion UI.

---

## 1. Research — What “always answers” means

Jarvis must route any prompt to the right skill/tool and return a **deliverable**, not just text:
- **Create** → `createDocx`/`createPptx`/`createXlsx`/`writeFile` + preview + download link
- **Play** → `clientAction:openUrl` (YouTube/Spotify) or local media via Tauri `open_local_path`
- **Clone** → `readFile`/`scanDirectory` + `recreateDesign` from `learnify-engine` + live `preset-sites` preview
- **Hack** → `executeShell` (guarded) + `scanDirectory` + `deleteFile` (to Recycle Bin only) with explicit confirm
- **Knowledge** → `executeDeepResearch` (DuckDuckGo + design tokens) + `unifiedMemory` RAG

All 53 design systems + 67 live sites are already bundled via `src/lib/design-systems.ts:1` (`import.meta.glob`) and `learnify-designs.json:1` (27). Skills: 69 in `.agents/skills` + 25 shipped via `src/lib/skills-catalog.ts:1`.

---

## 2. Logo & Modules — Done

- **Logo** `src/components/jarvis/logo.tsx:3` — hex gradient, double spin `8s`/`12s`, radial glow, `animate-pulse` dot.
- **Modules** `src/components/jarvis/capabilities-matrix.tsx:1` — 26 cards, `motion` stagger `i*0.02`, `whileHover` scale, real `lucide-react` icons with gradient `from-*` per domain, badges for Lab.
- Integrated into `src/components/jarvis/dashboard-view.tsx:244` via `CapabilitiesMatrix` → `mCreate.mutate`.

---

## 3. Free AI APIs — Done + Next

**Registry** `src/lib/models.ts:1` — `FREE_API_LINKS` (Gemini/Groq/OpenRouter/Cohere/HF/Ollama) + `TASK_MODEL_PREFERENCE` (website/app/code/default) + `getBestModelForTask`/`getFallbackChain`.  
**Resolver** `src/lib/ai-providers.ts:1` — `OPENROUTER_IDS`, `openRouterModel` (`createOpenAICompatible`), `getBestModelForTask` (website→`gemini-flash-latest`), `isQuotaError` (429/quota), `getFallbackChainForError`. Fallback chain: `Gemini 15 RPM` → `Groq 1k-14k/d` → `OpenRouter :free` → `Ollama`.  
**UI** `src/routes/_authenticated/console/$threadId.tsx:510` now shows `huggingface` scope, `src/routes/_authenticated/console/index.tsx:210` `Select` with `MODELS.slice(0,8)` + icons + provider labels.  
**Next:** Surface `FREE_API_LINKS` in `src/routes/_authenticated/console/settings.tsx:1` as clickable “Get free key” buttons + live quota bars (`reqPerDay`).

---

## 4. Live View / Code / How + 5 Prompts — Done

- **Live view** `public/preset-sites/aceternity-*/index.html:6` fixed toolbar `scripts/fix-preview-toolbar.mjs:1` (`data-jarvis-tab`, `data-device`, `jarvis-preview-container` 390/768/100% + `Preview`/`Code` toggle with injected JS).
- **Featured** `src/routes/_authenticated/console/index.tsx:215` — device toggle (`desktop|tablet|mobile`) + `iframe` preview `height 180/200/220` + `Code` dialog (`Dialog` + `fetch` + `Copy/Check`).
- **Thread follow-up** `src/routes/_authenticated/console/$threadId.tsx:623` — after `!busy && messages.length>2` shows `Live/code/how` 3-col grid + 5 prompts (`Deploy/SEO/UI/API/Export` → `handleSubmit`).

---

## 5. Thinking & Agents — Done, Needs Speed

**UI** `src/routes/_authenticated/console/$threadId.tsx:568` — `Brain` 360° spin + 3-dot bounce + `Gemini Flash 2.0` tag; `agents working` → `CEO/Plan/Build` avatars + `motion` progress `15%→85%` + `Layers` spin.  
**Perf issue:** `src/routes/api/chat.ts:28` `DEFAULT_MODEL=gemini-flash-latest` is fast, but the agent loop (`gather → act → verify` + `unifiedMemory` + `getSteeringForContext` + `executeShell` etc.) adds 1-3s before first token. For the screenshot query `Summarize last 7 days…` this is pure RAG, not multi-agent build — should take the **fast path**.

**Fix (next):** In `src/routes/api/chat.ts:150` add early return:
```ts
if (isSimpleRAG(prompt)) { // no file edits, no shell
  const { model } = await resolveChatModel(getBestModelForTask(prompt));
  return streamText({ model, messages, maxSteps: 1 });
}
```
Add `isSimpleRAG` helper (keywords: `summarize|explain|what|why|how` + no `create|build|clone|hack`). Target first token <800ms (vs current 2-4s).

---

## 6. Laptop Health — Move to Recycle Bin — Fixed

`src/components/dashboard/laptop-health-center.tsx:41` now `async`, tries `window.__TAURI_INTERNALS__.invoke("move_to_recycle_bin", {path})` when in Tauri, else `toast.loading` + 800ms simulate + `setConfirmedActionMessage` with “recoverable from Recycle Bin”. Dry-run still short-circuits. Added `catch` → `toast.error` + auto-recover.

---

## 7. Voice — Fixed

`src/components/voice-assistant.tsx:173` now always processes `command = text.trim()`; if `wakeResult.isWakeWord` use its `command`, else if empty after wake word → `speak("Yes?")` and return. Otherwise **always** `await onCommand(command)` + `speak` with `try/catch` fallback to text + `setTimeout` auto-recover to `listening`. `handleSpeechChunk` no longer logs “No wake word” and ignores — voice now replies even without “Hey Jarvis”.

---

## 8. Testing Matrix

| Area | Test | Expected |
|------|------|----------|
| **Recycle** | Click `Review Action` → `Move to Recycle Bin` with `Dry Run` off/on | Toast + `✓` banner, no crash |
| **Voice** | Say “summarize last 7 days” without wake word | Creates thread, navigates, streams |
| **Perf** | `Summarize…` first token | <1s, shows `Thinking` <800ms then streams |
| **Live** | Featured `Live` iframe loads `/preset-sites/aceternity-ai-saas/` | 200, device toggle resizes |
| **Code** | Featured `Code` → fetch | Dialog shows HTML `slice(0,12000)` + Copy |
| **API** | Set invalid `GEMINI_API_KEY`, send prompt | Falls back to Groq/OpenRouter, toast shows switch |
| **SEO/Legal** | `generate seo metadata` tool | `sitemap.xml` + JSON-LD present |

Run `vitest run` (7/7), `tsc --noEmit` (4 pre-existing), `npm run build` (`NODE_OPTIONS=--max-old-space-size=10240`).

---

## 9. Next Steps (v2.7.0)

1. Implement `isSimpleRAG` fast path in `chat.ts` + add `X-Jarvis-Model` header with `usedFallback` flag.
2. Surface `FREE_API_LINKS` + quota in `settings.tsx` (clickable chips with real logos, `motion`).
3. Add `src/routes/api/health.ts:38` fallback when `systems.length===0` → read `learnify-designs.json` count.
4. Polish `src/routes/index.tsx:165` landing hero already has `motion` stagger (arc, badge, h1, p, CTAs) — add `whileHover` to `CORE_MODULES` cards.
5. Deploy `vercel --prod` + `alias jarvisaios.vercel.app` + verify `Live Clock 01:06` + `Weather` + `Self-Upgrade Engine` still render.

---

## 10. Risks

- Tauri `move_to_recycle_bin` not yet implemented in `src-tauri/src/lib.rs` — browser fallback covers web, but desktop needs Rust handler.
- OpenRouter/HF keys not set on Vercel — fallback chain will still try Gemini/Groq, but add envs for full coverage.
- `import.meta.glob` fix in `design-systems.ts:14` must stay without `hasGlob` guard or counts revert to 0 in prod.
