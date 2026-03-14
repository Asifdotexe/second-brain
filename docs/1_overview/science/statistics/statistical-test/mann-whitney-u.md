---
title: Mann-Whitney U Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Mann-Whitney U Test

"The Resistance Test"—a tool used to compare two groups when your data is messy, contains huge outliers, or doesn't follow a perfect "Bell Curve."

The **Mann-Whitney U Test** is the "Non-Parametric" sibling of the [[t-test|Independent T-Test]]. While a T-Test uses **Averages**, the Mann-Whitney U test uses **Ranks**. This is a massive advantage because it means one single billionaire walk-in won't ruin your survey of "Average Salaries." 

Think of it like **School A vs. School B**:
*   You want to know which school has faster runners.
*   **The Problem:** School A has one Olympic sprinter who runs 10x faster than everyone else. This one person makes School A's **Average** look amazing, even though most of their students are actually very slow. 
*   **The Mann-Whitney Solution:** It ignores the raw times and just looks at the **Order of Finish**. If the top 10 finishers are all from School B, the test concludes that School B is faster. It doesn't matter how fast that one Olympic runner was; they only get the "#1" rank, and then they are done. 

## When to Use It?
1.  **Ordinal Data:** Use this when your data is already ranked (e.g., "Rate your pain from 1 to 10").
2.  **Messy Data:** Use this when your graph looks "Skewed" or has a weird shape that isn't a Bell Curve.
3.  **Small Samples:** It is often safer than a T-Test for very small groups.

## FAQs

*1. Mann-Whitney vs. T-Test: Who wins?*
*   **T-Test:** Wins if your data is clean and "Normal." It is more precise because it uses the raw, nuanced numbers.
*   **Mann-Whitney:** Wins if your data is "Dirty" or has outliers. It is the safer, more robust choice. 

*2. How do I measure the effect size?*
After the Mann-Whitney U test tells you there is a difference, you use the **[[rank-biserial-correlation|Rank-Biserial Correlation]]** to tell the world how big that difference actually is. 

### Further Reading

*   **The Clean Alternative:** *[[t-test|The T-Test]]* (For normal data).
*   **The Sibling:** *[[wilcoxon-signed-rank|Wilcoxon Signed-Rank]]* (For the same people measured twice).
*   **Article:** *[How Mann-Whitney U Works](https://statistics.laerd.com/spss-tutorials/mann-whitney-u-test-using-spss-statistics.php)*.
*   **Video:** *[Mann-Whitney U Simply Explained](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Visualizing the ranks).
