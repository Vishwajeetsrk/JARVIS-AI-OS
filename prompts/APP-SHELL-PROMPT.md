# APP-SHELL-PROMPT — Full Jarvis Navigation & App Shell Design

Act as `design-agent`, working from `INTERFACE-DESIGN-PROMPT.md` and `MANAGE-JARVIS-PROMPT.md`. Design the full app shell — navigation, projects, settings, tools, and mode tabs around the composer.

## Reality Check
Claude's real products already provide stock features (chat history, projects, model switching, connectors, upload, web search). Choose knowingly between:
- **(a) Use Jarvis inside existing Claude products** (Zero-build default: claude.ai / Claude Desktop as-is).
- **(b) Custom-branded shell** wrapping or mirroring the feature set when a genuine reason exists (custom branding, portfolio signal, specialized workflow).

---

## Information Architecture (IA)

### 1. Top Bar
- Jarvis wordmark & Claude star symbol
- Model selector dropdown (Claude 3.5 Sonnet, Gemini 2.0 Flash Free, Groq Llama 3.3 Free)
- Settings gear icon

### 2. Left Sidebar Navigation
- New Chat (Primary action)
- Search (Chat history search)
- Recent Chats list
- Projects (Learnify AI, AgencyOS, DreamSync, SkillForge, Client Folders)
- Folders (`workspace-agent` folder discipline)

### 3. Mode Tabs (Routing into MANAGE-JARVIS-PROMPT surfaces)
- Chat (default) · Code · Design · Cowork

### 4. Composer Toolbar
- Tools (13 active skills picker)
- Connectors (MCP servers: Figma, GitHub, Postman, Firebase, Chrome DevTools)
- Web Search toggle
- File / Image upload
- Add plugins

### 5. Three Shell Reference States
- **Desktop/Web View**: Full navigation, sidebar, top bar, mode tabs, composer toolbar.
- **Amber Clarification ("Needs Input")**: Amber status dot (`#E69D45`) & card so clarification requests stand out at a glance.
- **Mobile Phone View**: Condensed phone frame, icon-only mic/send, rounded pill composer, home-indicator bar.
