---
title: Spearman Rank Correlation Coefficient (ρ)
tags: Statistics, DataScience, Correlation
---

# Spearman Rank Correlation Coefficient (ρ)

"The Ranking Rule"—a measure that focuses on the **Order** of things (1st, 2nd, 3rd) rather than the exact distance between them.

**Spearman's Correlation ($\rho$)** is the more "Chill" cousin of [[pearson-correlation|Pearson's Correlation]]. While Pearson demands a perfect straight line, Spearman only cares that when one thing goes up, the other thing **also** goes up (or down). It doesn't care if the line curves. It does this by ignoring the raw numbers and only looking at the **Ranks**.

Think of it like **Judging a Race**:
*   **Pearson Logic:** Cares that the winner finished in 10 seconds, and the runner-up in 11 seconds. It measures the "Speed" and "Distance."
*   **Spearman Logic:** Only cares that Runner A was 1st and Runner B was 2nd. If the winner was 1 hour ahead of everyone else, Spearman doesn't care—they are still just "#1."
*   **The Advantage:** Because it only looks at ranks, it isn't "Distorted" by one crazy outlier (like a billionaire walk-in during a survey of normal people).

## The "Checklist" for Spearman
1.  **Ordinal Data:** Use this when your data is already ranked (e.g., "Customer Satisfaction" from 1 to 5).
2.  **Curvy Trends:** Use this when a relationship is "Monotonic" (it always goes in one direction, but maybe with a curve like a mountain slope).
3.  **Outliers:** Use this when you have messy data that would break a normal straight-line test.

## FAQs

*1. When is it better than Pearson?*
Use Spearman when your data doesn't follow a "Normal" bell curve, or when you aren't sure if the relationship is a straight line. It is much more "Robust" (it doesn't break as easily).

*2. What are its limits?*
**The Zig-Zag.** Spearman only works if the trend is always going in **one direction**. If the data goes up, then down, then up again (like a rollercoaster), Spearman will get confused and give you a low score. For that, you need [[chatterjees-correlation|Chatterjee's Correlation]].

### Further Reading

*   **The Classic:** *[[pearson-correlation|Pearson Correlation]]* (For straight lines).
*   **The Small-Sample Alternative:** *[[kendall-tau-correlation|Kendall Tau]]* (Better for tiny groups).
*   **Article:** *[When to use Spearman over Pearson](https://statistics.laerd.com/statistical-guides/spearmans-rank-order-correlation-statistical-guide.php)*.
*   **Video:** *[Spearman Correlation in 3 Minutes](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Visual guide).
