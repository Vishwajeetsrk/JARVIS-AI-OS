---
name: reporting
description: Synthesize the profile, analysis tables, charts, and any model outputs into a single structured report.json — the final deliverable consumed by the web app.
---

# Reporting

The final step. It gathers everything you produced (`data/profile.json`, `data/analysis/*.csv`, the PNGs in `charts/`, and any model outputs) and uses Gemini to synthesize a decision-ready business report at `data/report.json`.

## Prerequisites

Before running, make sure you have:
- Run the `data-explorer` skill (`data/profile.json` exists).
- Saved your answer tables to `data/analysis/*.csv`.
- Rendered the supporting charts to `charts/*.png`.

## Script

```bash
python3 /.agents/skills/reporting/scripts/build_report.py \
  --workspace ./workspace \
  --question "Which categories and customers drive the most revenue?" \
  --dataset-name "Northwind Orders"
```

| Argument | Required | Description |
|----------|----------|-------------|
| `--workspace` | yes | Root workspace directory |
| `--question` | yes | The user's original business question |
| `--dataset-name` | no | Friendly dataset name (defaults to "Dataset") |
| `--charts` | no | Comma-separated `file:title` pairs to force chart order/captions; otherwise all PNGs in `charts/` are auto-included |

## What it does

1. Reads `data/profile.json` and every CSV in `data/analysis/`.
2. Lists the PNGs in `charts/` (these become the `charts[]` entries).
3. Sends the question + profile summary + analysis tables to Gemini via the **Interactions API** and asks for a structured business report.
4. Validates the JSON against the output contract and writes `data/report.json`. If the model output is unusable, it writes a deterministic fallback report built directly from the analysis tables — so a `report.json` is ALWAYS produced.

## Output — `data/report.json`

See the **Output Contract** in `AGENTS.md`. Key points:
- `executive_summary` must answer the question directly in 2-4 sentences.
- `insights[]` are ranked, each with a concrete `metric`/`value` pulled from the analysis tables.
- `charts[].file` must point to a real PNG under `charts/`.
- `tables[]` are small (≤ 20 rows) display tables drawn from `data/analysis/*.csv`.
- `recommendations[]` are concrete and actionable.

## Rules

- Never fabricate numbers — every figure must trace back to the profile or an analysis table.
- If a needed input is missing, still emit a valid `report.json` describing what could and could not be answered.
