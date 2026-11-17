# Sample Deliverable — Agricultural Data Readiness Assessment

**Status:** Demonstration only. All data and results in this document are synthetic and fictional. This is not a client report, field study, agronomic recommendation or evidence of measured customer outcomes.

## 1. Assessment question

Can a small agricultural dataset be used to begin a defensible exploratory analysis and a later modelling study, and what needs to be resolved first?

## 2. Synthetic dataset profile

| Attribute | Demonstration value |
|---|---:|
| Records | 120 |
| Candidate predictors | 8 |
| Candidate target | Soil organic matter (%) |
| Fields with missing values | 3 |
| Duplicate sample identifiers | 2 |
| Records with missing coordinates | 5 |
| Records with unrecognized texture labels | 4 |
| Rows flagged for unit/range review | 7 |

These numbers are illustrative only. They were selected to demonstrate the structure of a report, not to describe any real dataset.

## 3. Checks performed

### Identity and traceability
- Verify sample identifiers are present and unique.
- Confirm each row can be traced to a source, collection date and method.
- Separate measured, estimated, imputed and derived variables.
- Record coordinate reference system and location precision.

### Completeness and consistency
- Quantify missingness by field and row.
- Detect duplicate IDs and duplicate records.
- Standardize category labels and units.
- Flag impossible values and plausible-but-suspicious outliers for review rather than deleting them automatically.

### Target suitability
- Confirm target definition, units and analytical method.
- Check whether target values are measured or remotely estimated.
- Review target distribution and sample coverage.
- Identify whether repeated sites, dates or spatial clusters could cause train/test leakage.

### Modelling readiness
- Confirm that the target is available independently of candidate predictors.
- Define a baseline before selecting complex models.
- Choose a validation split that reflects intended generalization (e.g. site-held-out or time-held-out where appropriate).
- Keep an untouched test set and document all preprocessing.

## 4. Example issue register

| ID | Issue | Severity | Why it matters | Recommended action |
|---|---|---|---|---|
| DQ-01 | Duplicate sample IDs | High | Can distort counts and create leakage | Resolve against source records before analysis |
| DQ-02 | Mixed units in conductivity | High | Produces invalid comparisons and model inputs | Confirm unit per source and normalize with a traceable rule |
| DQ-03 | Estimated target mixed with lab measurements | Critical | Model may learn the estimation method rather than the intended soil property | Separate target provenance; do not train one target indiscriminately |
| DQ-04 | Missing coordinates | Medium | Limits spatial validation and mapping | Recover coordinates or exclude from spatial claims |
| DQ-05 | Unclear sampling dates | Medium | Prevents temporal interpretation | Add dates or mark temporal analysis out of scope |

## 5. Decision

**Illustrative decision: CONDITIONAL GO for exploratory analysis; NO-GO for production modelling until provenance, units, duplicate IDs and target measurement methods are resolved.**

The correct next step is not automatically to train a model. First establish what the target means, how it was measured or estimated, and whether the dataset supports the intended generalization.

## 6. Proposed next phase

A separate scope may include:
- data dictionary and provenance resolution;
- cleaned analysis-ready dataset;
- exploratory analysis and baseline;
- leakage-aware validation design;
- documented go/no-go recommendation for modelling.

## 7. Limitations

This sample demonstrates a reporting format only. It contains no actual customer data, no measured accuracy, no model result and no field validation.
