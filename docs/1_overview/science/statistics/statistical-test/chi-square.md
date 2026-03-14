---
title: Chi-Square Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Chi-Square Test

"The Expectations Checker"—a tool used to determine if the "Counts" you see in the real world (like Blue vs. Red shirts sold) match what you mathematically expected to see.

The **Chi-Square ($\chi^2$)** test is different from a [[t-test|T-Test]] or an [[anova|ANOVA]] because it doesn't care about "Averages" (like height or score). It only cares about **Categories and Counts**. It asks: *"Is the frequency of these things happening purely random, or is there a pattern?"*

Think of it like **A Rigged Coin**:
*   **The Expectation:** You flip a coin 100 times. Math says you should see **50 Heads** and **50 Tails**.
*   **The Reality:** You actually get **80 Heads** and **20 Tails**.
*   **The Test:** Chi-Square calculates how far your "Observed" counts are from your "Expected" counts. 
*   **The Result:** If the "Gap" is huge, the Chi-Square score will be huge, proving that the coin is almost certainly rigged.

## Two Main Uses
1.  **Test of Independence:** Do two things depend on each other? (e.g., *"Does your Eye Color depend on your Hair Color?"*).
2.  **Goodness of Fit:** Does your data fit a specific pattern? (e.g., *"Does this bag of M&Ms actually contain the 20% blue candies that the factory promised?"*).

## FAQs

*1. Can I use percentages or averages?*
**NO.** Chi-Square only works with **Raw Counts**. You have to use whole numbers (e.g., 50 people, 10 cars, 5 apples). You cannot use "50%" or "Average height of 5.9."

*2. When is it too small to use?*
If any of your groups have fewer than **5 items** expected in them, the math starts to break down. In those cases, you should switch to **[[fishers-exact-test|Fisher's Exact Test]]**, which is like a "Brute Force" version of Chi-Square for tiny datasets.

### Further Reading

*   **The Tiny-Data Version:** *[[fishers-exact-test|Fisher's Exact Test]]* (When your counts are under 5).
*   **The Opposite:** *[[pearson-correlation|Pearson Correlation]]* (When your data is continuous numbers, not categories).
*   **Article:** *[How to use Chi-Square](https://www.simplypsychology.org/chi-square.html)*.
*   **Video:** *[Chi-Square Test Simply Explained](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Animated coin flips).
