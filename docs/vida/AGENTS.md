# 🤖 Vida AI OS — 10 Specialized Autonomous Agents

Vida coordinates a dedicated fleet of 10 specialized AI agents:

| Agent | Core Responsibilities | Key Capabilities |
| :--- | :--- | :--- |
| **1. Planner Agent** | High-level goal decomposition, risk estimation, and step budgeting. | Task sequencing, sub-agent delegation, progress auditing. |
| **2. Research Agent** | Multi-source web search, fact verification, and intelligence briefs. | Citation labeling, fact vs assumption separation, market research. |
| **3. Browser Agent** | Web navigation, YouTube search, and dashboard automation. | Form assist, article extraction, safe web actions. |
| **4. File Agent** | Approved folder inspection, duplicate detection, and file staging. | Workspace Janitor, dry-run scanning, Recycle Bin safety. |
| **5. Document Agent** | Structured document authoring across `.docx`, `.md`, and `.pdf`. | Resume Savior, specification drafting, meeting summaries. |
| **6. Presentation Agent** | 16:9 executive presentation creation using `pptxgenjs`. | Slide outlines, topic structuring, bullet point synthesis. |
| **7. Spreadsheet Agent** | Multi-column `.xlsx` workbook generation with `exceljs`. | Financial models, audit datasets, formula generation. |
| **8. Coding Agent** | Full-stack software engineering in TypeScript, React, and Python. | Component generation, type safety, bug refactoring. |
| **9. Testing Agent** | Automated test suite execution, verification, and regression audits. | Vitest runner, typecheck validation, error isolation. |
| **10. Review Agent** | Pre-commit code reviews, safety audits, and daily summaries. | Daily Wrap, security scorecards, blocker identification. |

---

## Agent Lifecycle

1. **Intake & Intent:** Planner agent evaluates user query and determines risk.
2. **Execution:** Assigns task to specialized agent with a maximum 5-step limit.
3. **Approval:** If action has side effects (Level 2 or 3), execution pauses for user confirmation.
4. **Verification:** Validates output artifact (checks file existence, status codes).
5. **Memory Commit:** Persists confirmed facts and results into the 4-tier memory vault.
