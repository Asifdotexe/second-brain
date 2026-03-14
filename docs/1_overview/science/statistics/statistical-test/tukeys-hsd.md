---
title: Tukey's HSD (Honest Significant Difference)
tags: Statistics, HypothesisTesting, PostHoc
---

# Tukey's HSD

"The Detective"—the second step you take only **after** your [[anova|ANOVA]] alarm goes off. It interrogates every group one-by-one to find exactly **who** is the winner and **who** is the loser.

The **Tukey HSD** test is a "Post-Hoc" (after-the-fact) test. An **[[anova|ANOVA]]** is like a security alarm that only tells you *"Someone is in the building!"* It doesn't tell you who. Tukey HSD is the detective who comes in and scans every single pair of groups to find the "Honest Significant Difference."

Think of it like **A Three-Way Race**:
*   You test three types of tire: Brand A, Brand B, and Brand C.
*   The **[[anova|ANOVA]]** says: *"Yes! There is a difference between these tires!"*
*   **The Question:** Is A better than B? Is B the same as C? Is C secretly the best?
*   **The Solution:** Tukey HSD compares every possible pair:
    *   Test 1: A vs. B
    *   Test 2: B vs. C
    *   Test 3: A vs. C
*   **The Winner:** It gives you a clean list of which specific pairs are actually different.

## Why not just run 3 T-Tests?
Every time you run a statistical test, there is a risk of a "False Positive" (Type 1 Error). If you run multiple tests, your risk of being wrong "Accumulates" like a snowball rolling down a hill.
**The "Honest" Part:** Tukey HSD uses special math to keep your total error rate at 5%, no matter how many pairs you compare. It is the gold standard for "Honest" comparisons.

## FAQs

*1. When should I run this?*
**ONLY if your [[anova|ANOVA]] was significant.** If your first test says "The groups are all the same," you stop there. You don't call the detective if the alarm didn't go off. 

*2. Is it better than "Bonferroni"?*
**Usually.** A Bonferroni correction is another way of stopping false positives, but it is extremely strict and often hides real discoveries by accident. Tukey is perfectly balanced for comparing group averages after an ANOVA. 

### Further Reading

*   **The First Step:** *[[anova|ANOVA Overview]]* (The prerequisite).
*   **The Basic Tool:** *[[t-test|The T-Test]]* (What Tukey replaces for multiple groups).
*   **Article:** *[Manual Guide to Tukey's HSD](https://www.statisticshowto.com/post-hoc/tukeys-test/)*.
*   **Video:** *[ANOVA and Post-Hoc Tests](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Seeing the detective at work).
