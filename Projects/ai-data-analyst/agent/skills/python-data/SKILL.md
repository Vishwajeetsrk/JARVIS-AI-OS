---
name: python-data
description: >-
  Performs heavy numerical compute, statistical analysis, and machine learning
  inside the sandbox. Joins/aggregates tables to answer the question and (when
  warranted) builds models — saving every result table downstream skills chart
  and report.
---

# Python data skill

Run complex calculations, aggregations, statistical tests, regressions, and ML
using `pandas`, `numpy`, and `scikit-learn` in the sandbox. This is
**agent-driven**: you write Python and run it with the `code_execution` tool —
there is no fixed script. Ground every computation in
`./workspace/data/profile.json` (written by the `data-explorer` skill).

## Workflow

1. **Read the profile.** Load `./workspace/data/profile.json` to know each
   column's `inferred_type`, the measures vs dimensions, and any `join_keys`.
2. **Write a Python script** using `pandas`, `numpy`, or `sklearn` to:
   - Join, filter, and aggregate tables (use the detected join keys).
   - Compute statistics (mean, median, stddev, correlations).
   - Run statistical tests (chi-square, t-test) when appropriate.
   - Build or evaluate ML models when the question warrants it (see Modeling).
3. **Execute in the sandbox.** Run via `python3 script.py`.
4. **Handle errors.** If the code fails, read the traceback and fix it.
5. **Save result tables** to `./workspace/data/analysis/*.csv` (see Output
   contract) and print key values to the run log.

## Loading and coercing data

```python
import pandas as pd, numpy as np, os, json

WS = "./workspace"
with open(os.path.join(WS, "data/profile.json")) as f:
    profile = json.load(f)

def coerce(df, cols):
    for col in cols:
        name, t = col["name"], col["inferred_type"]
        if name not in df.columns:
            continue
        if t == "numeric" and df[name].dtype == object:
            df[name] = pd.to_numeric(
                df[name].astype(str).str.replace(r"[,$£€%\s]", "", regex=True),
                errors="coerce",
            )
        elif t == "datetime":
            try:
                # Cast to string first to prevent list/object errors from crashing to_datetime
                df[name] = pd.to_datetime(df[name].astype(str), errors="coerce")
            except Exception:
                pass
    return df

tables = {}
for t in profile.get("tables", []):
    path = os.path.join(WS, "data", t["file"])
    tables[t["name"]] = coerce(pd.read_csv(path, sep=None, engine="python"), t["columns"])
```

## Common patterns

- **Revenue (line-item)**: Northwind has no revenue column — derive it from order
  line items before aggregating:
  `od["revenue"] = od["unitPrice"] * od["quantity"] * (1 - od["discount"])`.
  This excludes freight; add `orders["freight"]` separately only if the question
  asks for total spend including shipping.
- **Aggregation**: `df.groupby("category")["revenue"].sum().sort_values(ascending=False)`
- **Top-N**: `.head(10)` after sorting.
- **Time series**: set a datetime index and `resample("ME")` / `"W"` / `"QE"`, then `.sum()` / `.mean()`.
- **Growth**: `series.pct_change()`; cumulative with `.cumsum()`.
- **Pivot**: `df.pivot_table(index="region", columns="category", values="revenue", aggfunc="sum")`.
- **Cohort / RFM**: bucket customers by Recency, Frequency, Monetary; score with `pd.qcut`.
- **Correlation**: `df[numeric_cols].corr()`.
- **Joining relational tables**: merge on `join_keys` before aggregating, e.g.
  `order_details.merge(products[["productID","categoryID"]], on="productID")`.
  Drop junk/BLOB columns (e.g. `categories.picture`) before joining.

## Modeling (only when warranted)

Use ML **only when the question calls for it** — forecasting, prediction,
segmentation, or driver analysis. For purely descriptive questions, skip it.

| Question shape | Approach | scikit-learn |
|----------------|----------|--------------|
| "Forecast next period" | Time-series regression on time features | `LinearRegression`, `RandomForestRegressor` |
| "Predict a numeric outcome" | Regression | `Ridge`, `RandomForestRegressor` |
| "Predict a category / churn" | Classification | `LogisticRegression`, `RandomForestClassifier` |
| "Group similar customers" | Clustering | `KMeans` + `StandardScaler` |
| "What drives this metric?" | Feature importance / coefficients | tree `feature_importances_`, linear `coef_` |

- Split with `train_test_split(random_state=42)`; for time series split
  chronologically (do NOT shuffle).
- Always **evaluate and report** the metric: regression → R²/MAE/RMSE;
  classification → accuracy/precision/recall/ROC-AUC; clustering → silhouette.
- Be honest about uncertainty, small samples, and leakage. Never present a
  forecast as certainty.

## Output contract — `./workspace/data/analysis/*.csv`

> [!IMPORTANT]
> The `visualization` skill (`make_chart.py --data ...`) and the `reporting`
> skill (`build_report.py`) read every CSV in `./workspace/data/analysis/`.
> Save each table you intend to chart or report there. Keep them small and tidy
> (already aggregated, typically ≤ 20 rows for display tables).

```python
out = os.path.join(WS, "data/analysis")
os.makedirs(out, exist_ok=True)

rev_by_cat = df.groupby("category")["revenue"].sum().sort_values(ascending=False).reset_index()
rev_by_cat.to_csv(os.path.join(out, "revenue_by_category.csv"), index=False)

monthly = df.set_index("order_date")["revenue"].resample("ME").sum().reset_index()
monthly.to_csv(os.path.join(out, "revenue_monthly.csv"), index=False)
```

Suggested names for model outputs (so they chart cleanly downstream):

- Forecasts → `data/analysis/forecast.csv` (date, actual, predicted)
- Segments → `data/analysis/segments.csv` (segment id + profile metrics)
- Drivers → `data/analysis/feature_importance.csv` (feature, importance)

## Notes

- Print the result of every computation so values are captured in the run log.
- Handle NaNs explicitly (`dropna`, `fillna`) and state what you did.
- Note the date range and row counts behind each aggregate.
- Use `select_dtypes(include=["object", "str"])` for categorical columns
  (avoids the pandas 4 deprecation warning).
- Install missing packages with `pip install -q <package>` before importing.
- Never invent numbers — if a needed column does not exist, say so and adjust.
