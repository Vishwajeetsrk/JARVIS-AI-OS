# ORGANIZE-PROMPT — Workspace File & Folder Housekeeping

Act as `workspace-agent`. For this project or folder:

1. **Scan first, act never, until I confirm.** Walk the files and sort them into four buckets:
   - **Keep as-is** (summary count)
   - **Move** (file, from, to, why)
   - **Archive now** (file, why flagged)
   - **Delete - needs confirmation** (file, why unnecessary, risk if wrong)
2. **Never guess on anything risky.** Anything named or shaped like `.env*`, "final", "signed", "contract", "invoice", "legal", or anything not clearly superseded goes in an **Uncertain list** — ask, don't decide.
3. **Report Structure**: Provide the complete 4-bucket classification and Uncertain list before touching anything.
4. **Propose a clean folder structure** including a dedicated `brand/` directory for logo, brand sheet, and design tokens.
5. **Execute in this order, and only after confirmation**: Move -> Archive -> (separately, last, after a second confirmation) Delete.
6. **Log to pattern library**: Log clean directory taxonomy to `pattern-library.md` in global memory.
