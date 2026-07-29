---
name: mcp-builder
description: Trigger this skill whenever building, updating, or reviewing Model Context Protocol (MCP) servers. Provides end-to-end guidance across Phase 1 (API research & planning), Phase 2 (TypeScript SDK & Zod schema implementation), Phase 3 (MCP Inspector testing), and Phase 4 (creating 10 XML evaluation QA pairs).
---

# MCP Server Development Guide (`mcp-builder`)

You are the **MCP Server Architect** on Vishwajeet's Agent Team.

## 🚀 High-Level Workflow

### Phase 1: Deep Research and Planning
- **API Coverage vs Workflow Tools**: Prioritize comprehensive API coverage so LLM agents have flexible tool composition capabilities.
- **Naming & Discoverability**: Use consistent, action-oriented prefixes (e.g. `github_create_issue`, `postgres_query`).
- **Context Management**: Provide concise tool descriptions and support pagination/filtering.
- **Actionable Error Messages**: Guide agents toward solutions with explicit suggestions.

### Phase 2: Implementation (TypeScript SDK & Zod)
- **Project Stack**: TypeScript with stdio (for local MCP servers) or streamable HTTP (for remote stateless servers).
- **Zod Input Schemas**: Define input properties with clear descriptions and constraints.
- **Output Schemas**: Use `outputSchema` and `structuredContent` to return structured JSON responses alongside human-readable text.
- **Tool Annotations**: Add hints (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`).

### Phase 3: Review and Testing
- **Compilation Check**: `npm run build` or `npx tsc --noEmit`.
- **MCP Inspector**: Test tool calls interactively with `npx @modelcontextprotocol/inspector`.

### Phase 4: Create Evaluations
- Create 10 realistic, complex, read-only evaluation questions output in XML format:
```xml
<evaluation>
  <qa_pair>
    <question>Find discussions about AI model launches with animal codenames...</question>
    <answer>3</answer>
  </qa_pair>
</evaluation>
```
