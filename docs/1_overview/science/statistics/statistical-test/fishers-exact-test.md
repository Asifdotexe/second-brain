---
title: Fisher's Exact Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Fisher's Exact Test

"The Brute-Force Accuracy Test" ,a tool used to calculate the **exact** probability of an outcome, mainly used when your sample size is so tiny that normal statistical estimations would fail.

**Fisher's Exact Test** is what you use when you want the "Perfect Answer" for a small group. While the [[chi-square|Chi-Square Test]] is an "Estimation" that works best with hundreds of people, Fisher's Exact Test uses raw math to literally calculate every possible combination of results to see how lucky you got. 

Think of it like **A Small Medical Trial**:
*   You are testing a new medicine on only **10 people**.
*   Group A (Medicine): 4 get well, 1 stays sick.
*   Group B (Placebo): 1 gets well, 4 stay sick.
*   **The Problem:** If you run a regular Chi-Square test, the math will "Break" because your groups are too small (under 5 people).
*   **The Solution:** Fisher's Exact Test doesn't "Guess" based on a curve. It calculates the exact odds of getting that 4-to-1 result purely by chance. 

## Why not use it for everything?
**Computing Power.** Historically, by-hand math for Fisher's test was impossible for large groups (the numbers get too big too fast). Even today, if you have 10,000 data points, a computer might struggle to calculate the "Exact" probability across all combinations. In those cases, we switch back to the [[chi-square|Chi-Square]] estimation because it gives practically the same answer for much less effort.

## FAQs

*1. When IS it required?*
Use it whenever any of your "Expected Categories" in a 2x2 table has a value **lower than 5**. If you have a category with only 2 or 3 people in it, Chi-Square will lie to you. Fisher is the only one you can trust.

*2. Is it only for 2x2 tables?*
**Usually.** While it can be expanded to larger grids, it is most famous and most powerful for "Binary" choices (e.g., Treatment/Placebo vs. Success/Failure). 

### Further Reading

*   **The Estimation Rival:** *[[chi-square|The Chi-Square Test]]* (For large datasets).
*   **The Legend:** *[The Lady Tasting Tea](https://en.wikipedia.org/wiki/Lady_tasting_tea)* (The famous experiment that led to this test).
*   **Article:** *[When to use Fisher's Exact Test](https://www.statisticshowto.com/fishers-exact-test/)*.
*   **Video:** *[Fisher's Exact Test Explained Visually](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (The card game logic).
