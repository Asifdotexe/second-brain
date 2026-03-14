---
title: T-Test (Independent & Paired)
tags: Statistics, HypothesisTesting, Parametric
---

# T-Test

"The Difference Checker"—a tool used to determine if the difference between two groups is "Real" or just due to random chance.

A **T-Test** is what you use when you have two groups (like "Coffee Drinkers" and "Tea Drinkers") and you want to know if one group is actually better at something (like a memory test). Because of nature's randomness, the averages of the two groups will almost **never** be exactly the same. The T-Test calculates the probability that the difference you found was just "Dumb Luck."

Think of it like **Testing a New Fertilizer**:
*   **Group A (The Control):** Tomatoes grown with plain water. (Average height: 5.0 inches).
*   **Group B (The Test):** Tomatoes grown with the "Super-Grow" formula. (Average height: 5.2 inches).
*   **The Question:** Did the "Super-Grow" actually work, or did Group B just happen to get slightly better seeds or more sunlight by accident?
*   **The Verdict:** The T-Test looks at the averages AND the "Messiness" (spread) of the data. If the p-value is low (under 0.05), it means there is a 95% chance the fertilizer actually worked.

## The 3 Types of T-Tests
1.  **Independent T-Test:** You are comparing two completely different groups of people. (e.g., Men vs. Women).
2.  **Paired T-Test:** You are comparing the **same** people at different times. (e.g., Blood pressure *before* a pill vs. *after* the pill).
3.  **One-Sample T-Test:** You are comparing your group against a known standard. (e.g., "Is my class average higher than the national average?").

## FAQs

*1. What are the limits?*
**Outliers and Clean Data.** T-Tests rely on "Averages," so if you have one person in your survey who is a billionaire (a massive outlier), it will ruin the whole test. Also, a T-Test assumes your data follows a **[[normal-distribution|Normal Distribution]]** (The Bell Curve).

*2. What if my data is messy or doesn't follow a curve?*
**Switch Tools.** Use the [[mann-whitney-u|Mann-Whitney U Test]] instead. It’s the "Non-Parametric" version that doesn't care about curves or outliers.

### Further Reading

*   **The High-Level Rival:** *[[anova|ANOVA]]* (When you have 3+ groups instead of just 2).
*   **The Messy Data Version:** *[[mann-whitney-u|Mann-Whitney U]]* (For non-bell curve data).
*   **Article:** *[A Simple Guide to T-Tests](https://www.scribbr.com/statistics/t-test/)*.
*   **Video:** *[T-Tests Explained Simply](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Visual examples).
