---
inclusion: always
---

# Code Conventions

## Naming

- **Files**: kebab-case for utilities (`memory-tool.ts`), PascalCase for components
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Types/Interfaces**: PascalCase with descriptive names
- **Functions**: camelCase, verb-first (`readGlobalMemory`, `executeShell`)

## File Organization

- One component per file
- Maximum file size: 500 lines
- Group by feature, not by type
- Server functions in `*.functions.ts` files

## Imports

- Use `@/*` path alias (maps to `./src/*`)
- Group order: external libs, internal modules, relative imports
- One blank line between import groups

## Error Handling

- Always use typed errors
- Log errors with `[module-name]` prefix
- Never swallow errors silently
- Return error objects instead of throwing when possible

## Comments

- NO comments unless explicitly requested
- Code should be self-documenting
- Use descriptive variable/function names instead
