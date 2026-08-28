---
name: visualization
description: Render clean, presentation-ready charts (bar, line, scatter, pie, heatmap) as PNG files from result tables produced during analysis.
---

# Visualization

Turn the aggregated tables in `data/analysis/*.csv` into charts saved to `charts/*.png`. Every key finding in the report should be backed by a chart.

## Script

```bash
python3 /.agents/skills/visualization/scripts/make_chart.py \
  --workspace ./workspace \
  --data data/analysis/revenue_by_category.csv \
  --type bar \
  --x category --y revenue \
  --title "Revenue by Category" \
  --output charts/revenue_by_category.png
```

| Argument | Required | Description |
|----------|----------|-------------|
| `--workspace` | yes | Root workspace directory |
| `--data` | yes | CSV (relative to workspace) to plot — usually a `data/analysis/*.csv` |
| `--type` | yes | `bar`, `barh`, `line`, `scatter`, `pie`, or `heatmap` |
| `--x` | for bar/line/scatter | Column for the x-axis (or labels for pie) |
| `--y` | for bar/line/scatter/pie | Column(s) for the y-axis; comma-separated for multi-series line |
| `--title` | recommended | Chart title |
| `--output` | yes | Output PNG path (relative to workspace), under `charts/` |
| `--top` | no | Keep only the top N rows by `--y` (useful for bar charts) |
| `--xlabel` / `--ylabel` | no | Axis labels |

## Chart-type guidance

- **bar / barh** — compare a measure across categories (revenue by category, count by region). Use `barh` when there are many categories or long labels.
- **line** — trends over time. `--x` is the date column; pass multiple `--y` columns for several series.
- **scatter** — relationship between two numeric measures (price vs quantity).
- **pie** — share/composition when there are few categories (≤ 6). Prefer bar otherwise.
- **heatmap** — a pivot table or correlation matrix (the CSV is read as a matrix; first column is the row index).

## Conventions

- Save all charts under `charts/` with descriptive snake_case names that match what you reference in `report.json`.
- One idea per chart. Keep titles short and business-oriented.
- For heatmaps, pass a CSV whose first column is the row label and remaining columns are the matrix values (e.g. a `pivot_table(...).reset_index()` output).

## Notes

- The script uses a non-interactive matplotlib backend (`Agg`) so it works headless.
- If a chart fails, log the error and continue — never let a chart block the final report.
