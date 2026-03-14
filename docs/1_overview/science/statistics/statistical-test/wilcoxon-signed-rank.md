---
title: Wilcoxon Signed-Rank Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Wilcoxon Signed-Rank Test

"The Before-and-After Tracker"—a tool used to compare the **same people** measured twice (like "Before a diet" and "After a diet") when the data is messy or non-normal.

The **Wilcoxon Signed-Rank Test** is the "Non-Parametric" sibling of the **Paired [[t-test|T-Test]]**. It focuses on the **Sign** (was the change positive or negative?) and the **Rank** (was the change big or small?). It doesn't care about the exact, raw numbers, which makes it safe from outliers.

Think of it like **Testing a Memory Pill**:
*   You give 10 people a memory test. Then you give them a pill. Then you test them again.
*   **The Logic:** You look at the "Difference" in their score.
    *   Person 1: +5 points
    *   Person 2: +12 points
    *   Person 3: -2 points (they got worse!)
*   **The Wilcoxon Trick:** It ranks these changes. A +12 is a "Big Rank." A -2 is a "Small Rank." It then adds up all the "Positive Ranks" vs the "Negative Ranks." 
*   **The Result:** If the drug works, the positive ranks will be massive compared to the few negative ones.

## Why use it?
1.  **Paired Data:** Use this when you are measuring the same subjects twice.
2.  **Ordinal/Non-Normal:** Use this when your test scores aren't a perfect "Bell Curve" or are just rankings (like "Feeling: 1 to 10").
3.  **Outlier Resistant:** If one person has a miraculous +10,000 point improvement (an outlier), it doesn't break the test. They are just ranked "#1 biggest change," and the math moves on.

## FAQs

*1. Wilcoxon Signed-Rank vs. Rank-Sum: What’s the difference?*
**Naming Confusion Alert!** 
*   **Signed-Rank:** (This test). Used for **Paired** groups (the same people measured twice).
*   **Rank-Sum:** Another name for the **[[mann-whitney-u|Mann-Whitney U Test]]**. Used for **Independent** groups (two different sets of people).

*2. When is a Paired T-test better?*
If your data is clean, numerical, and follows a beautiful Bell Curve, use the **Paired [[t-test|T-Test]]**. It is more powerful because it "Squeezes" more information out of every single point.

### Further Reading

*   **The Independent Version:** *[[mann-whitney-u|Mann-Whitney U]]* (For different groups).
*   **The Clean Alternative:** *[[t-test|Paired T-Test]]* (For normal data).
*   **Article:** *[The Wilcoxon Signed-Rank Test Guide](https://statistics.laerd.com/spss-tutorials/wilcoxon-signed-rank-test-using-spss-statistics.php)*.
*   **Video:** *[Signed-Rank vs Rank-Sum Explained](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Visual comparison).
