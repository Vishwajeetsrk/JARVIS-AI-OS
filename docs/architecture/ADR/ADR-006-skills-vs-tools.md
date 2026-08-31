# ADR-006: Distinction Between Skills and Tools

## Status
**Adopted** (2026-08-31)

## Context
The repository contains 40+ skills (e.g. `skills/claude-api/`, `.agents/skills/`) alongside executable tool wrappers. Mixing knowledge instructions with executable operations created confusion about what an agent *knows* versus what an agent *can execute*.

## Decision
1. **Skills** are classified strictly as **reusable knowledge, prompt guidelines, and domain procedures**. They teach an agent how to reason, format, and structure tasks (e.g., React architecture, Tailwind styling, writing PRDs).
2. **Tools** are classified strictly as **executable software functions** with formal JSON schemas, input validation, permission checks, and execution sandboxes (e.g., `fs.readFile`, `git.push`, `http.fetch`).
3. Agents are composed of:
   ```text
   Agent = Persona + Instructions + Bound Skills + Permitted Tools
   ```
4. Agents do not execute skills; agents read skills to reason before invoking tools.

## Consequences
- **Positive**: Clear architectural separation prevents tool registry bloat.
- **Positive**: Skills can be edited in Markdown without changing runtime code.
