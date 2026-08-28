---
name: data-explorer
description: >-
  General-purpose data profiling and exploration. Use when first encountering
  any dataset to understand its structure, quality, and analysis potential.
  ALWAYS run this first — it writes the profile every downstream skill reads.
---

# Data explorer skill

Profile any tabular dataset (CSV, JSON, Parquet) and produce a structured
profile the other skills consume. This is **agent-driven**: write and run
Python (`pandas`) with the `code_execution` tool — there is no fixed script.

## Workflow

1. **Scan workspace**: list all data files in `./workspace/data/`.
2. **Load and profile each file**:
   - Row count, column count
   - Column names, inferred types, null counts, unique counts
   - Basic statistics (min, max, mean, median, std for numerics)
   - Value counts for categorical columns (top 10)
   - Min/max dates for datetime columns
3. **Assess data quality**:
   - Missing value percentage per column
   - Potential data type issues (e.g., numbers stored as strings)
   - Duplicate row detection
   - Outlier detection (IQR method)
4. **Detect relational keys** (multi-table datasets): identify columns that
   look like join keys (e.g. `orderID`, `productID`, `categoryID`) — typically
   ID-like columns shared across tables, or high-cardinality columns that match
   another table's primary key. Note which tables they link.
5. **Write the profile** to `./workspace/data/profile.json` (see Output
   contract). Also print a short human-readable summary to the run log.
6. **Recommend analysis directions** based on what you found.

## Output contract — `./workspace/data/profile.json`

> [!IMPORTANT]
> The `reporting` skill (`build_report.py`) reads this file. It MUST be written
> to `./workspace/data/profile.json` with the schema below. The top-level
> `row_count` / `column_count` / `columns` mirror the largest table for
> single-CSV convenience; for multi-table datasets, populate `tables[]`.

```json
{
  "table_count": 1,
  "table_names": ["customers"],
  "row_count": 91,
  "column_count": 7,
  "columns": [
    {"name": "CustomerID", "inferred_type": "categorical", "dtype": "object", "missing": 0, "missing_pct": 0.0, "distinct": 91, "stats": {}}
  ],
  "tables": [
    {
      "name": "customers",
      "file": "customers.csv",
      "row_count": 91,
      "column_count": 7,
      "duplicate_rows": 0,
      "columns": [
        {
          "name": "CustomerID",
          "inferred_type": "categorical",
          "dtype": "object",
          "missing": 0,
          "missing_pct": 0.0,
          "distinct": 91,
          "stats": {}
        }
      ],
      "join_keys": ["CustomerID"],
      "head": [{"CustomerID": "ALFKI", "CompanyName": "Alfreds Futterkiste"}],
      "recommendations": [
        "CustomerID is a unique string identifier",
        "Region has a high missing percentage (60%)",
        "Joins to orders.csv on CustomerID to analyze customer behavior"
      ]
    }
  ]
}
```

### Field rules

- `inferred_type` is one of `numeric`, `datetime`, `boolean`, `categorical`, or
  `text`. Coerce numeric-looking and date-looking columns before classifying.
- `missing_pct` is a fraction in `[0, 1]` (e.g. `0.60` for 60%).
- `stats` is type-dependent: min/max/mean/median/std for `numeric`, top values
  for `categorical`, min/max dates for `datetime`. Use `{}` when not applicable.
- `join_keys` lists the relational keys detected for that table (omit or use
  `[]` for single-table datasets).

## Key rules

- Never assume a specific dataset. Profile whatever is present in `data/`.
- If no data files are found, inform the user and stop (do NOT ask for an upload
  — the data is staged by the platform).
- Use `pandas` for profiling. It is pre-installed in the sandbox.
- Use `select_dtypes(include=["object", "str"])` for categorical columns
  (avoids the pandas 4 deprecation warning).
- For large files (>100K rows), profile a sample first and note the sampling.
- Drop junk/binary columns (e.g. BLOB image fields like Northwind's
  `categories.picture`) from stats — they add noise and bloat the profile.
