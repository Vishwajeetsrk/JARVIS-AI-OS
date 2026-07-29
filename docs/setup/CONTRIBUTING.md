# Contributing to Agent Team Skills

We welcome contributions! Here's how to help.

## Before You Start

Read [`AGENTS.md`](AGENTS.md) and [`ARCHITECTURE.md`](ARCHITECTURE.md) to understand the system.

## How to Contribute

### Adding a Design System
1. Create a new directory under `design-systems/<brand>/`
2. Include: `DESIGN.md`, `tokens.css`, `design-tokens.json`
3. Add the entry to the dashboard's `ds` array in `dashboard/index.html`
4. Update the design system listing in `AGENTS.md` and `README.md`

### Improving an Agent Skill
1. Edit `.claude/skills/<agent>/SKILL.md`
2. Follow the existing markdown conventions and structure
3. Keep the memory protocol (read before, write after)
4. Test by pasting `CONNECT-PROMPT.md` in a fresh AI session

### Adding a Template
1. Build with Vite + React
2. Place in `projects/templates-built/<name>/`
3. Ensure `index.html` uses relative asset paths (`./assets/`)
4. Add the template name to the `templates` array in `dashboard/index.html`

### Code Changes
1. Fork the repo
2. Create a feature branch
3. Make changes following existing code style
4. Test thoroughly
5. Open a PR against `main`

## Guidelines

- Keep skill files focused and domain-specific
- Never skip the memory protocol
- Don't commit secrets, API keys, or credentials
- Match the existing file structure and naming conventions
- Run through the Golden Flow before submitting

## Questions?

Open a discussion on GitHub or check `AGENTS.md` for the full system overview.
