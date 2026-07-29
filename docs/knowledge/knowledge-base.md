# Project Knowledge Base & Coding Standards

## 1. Architectural Patterns
- **Modular Monorepo Structure**: Keep products independent via submodules or microservice boundaries while sharing design tokens and global memory.
- **Typed Multi-Agent Tools**: All agent tools defined with strict Zod schemas for input parameter validation.
- **Background Async Operations**: Long-running builds or network tasks execute via background tasks with passive status logging.

---

## 2. Skill Frontmatter Trigger Protocol & Golden Flow Execution
- **Frontmatter Description Density**: Every skill's `SKILL.md` must have an explicit, dense `description` frontmatter field loaded with trigger language.
- **Semantic Matching**: Claude evaluates user prompts against all skill descriptions simultaneously.
- **Explicit Invocation**: To guarantee 100% deterministic triggering, name the agent directly (e.g., *"use design-agent for this"*).
- **Golden Flow Ordering**: Multi-skill matches follow `ceo-agent`'s strict handoff sequence: `ceo-agent` -> `team-agent` -> `saas-builder` -> `design-agent` -> `test-agent` -> `devops-agent` -> `memory-agent`.
- **Memory Discipline**: Every skill MUST read `~/.agent-memory/global/` before starting work and write lessons learned back after finishing.

---

## 3. Security Standards
- **Zero Hardcoded Secrets**: Secrets validated via Zod environment schemas.
- **Mandatory Hard-Stop QA**: `test-agent` review is required before merging code into `main`.
- **Database Access Control**: Supabase Row Level Security (RLS) policies enforced on all user tables.

---

## 4. UI/UX & Design Token Rules
- **Color Palettes**: Tailored HSL color variables (`--accent-cyan`, `--accent-indigo`).
- **Typography**: Google Fonts `Outfit` (Display) & `Inter` (Body).
- **Responsive Layouts**: Calculated container bounds without hardcoded static pixel offsets.
