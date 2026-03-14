---
title: Rank-Biserial Correlation Coefficient
tags: Statistics, DataScience, Correlation
---

# Rank-Biserial Correlation

"The Tournament Tracker" ,a tool used when one variable is a "Yes or No" and the other is a "Ranking" (1st place, 2nd place, 3rd place).

**Rank-Biserial Correlation ($r_{rb}$)** is the "Non-Parametric" sibling of the [[point-biserial-correlation|Point-Biserial Correlation]]. It’s used when you don't have exact numbers, only the "Order" of finish. For example: *"Does taking a specialized training course (Yes/No) predict where you finish in the employee sales rankings?"*

Think of it like **A Marathon Comparison**:
*   500 people run a race. We don't have their times in seconds, we only know their **Order of Finish** (1st to 500th).
*   We want to know if **Drinking Gatorade** (Group A) helped vs **Drinking Water** (Group B).
*   Rank-Biserial looks at every person in the Gatorade group and compares them to every person in the Water group. It asks: *"What percentage of the time did the Gatorade drinker beat the Water drinker?"*
*   **The Score:** If the Gatorade drinkers beat the Water drinkers every single time, the score is `1`.

## Why use it?
1.  **No "Bell Curve" needed:** Unlike the [[point-biserial-correlation|Point-Biserial]], this test doesn't care if your data is "Normal." It’s perfect for messy, "Skewed" data (like most real-world data).
2.  **Ordinal Data:** Use this when your "Score" is just a relative rank (e.g., finishing 1st in a contest, or a company's seniority list).

## FAQs

*1. Rank-Biserial vs. Point-Biserial: Which one?*
*   **Point-Biserial:** Use if you have **Exact Numbers** (e.g., $15.5$ seconds or $\$ 1,200$).
*   **Rank-Biserial:** Use if you have **Ranks** (e.g., 1st, 2nd, 3rd).

*2. Is it related to the Mann-Whitney U test?*
**Yes.** Usually, scientists run a "Mann-Whitney U" to see **if** there is a difference between two groups (like a T-test). Then, they use the Rank-Biserial Correlation to show **how big** that difference actually is. It is the "Magnitude" of the result.

### Further Reading

*   **The Exact Version:** *[[point-biserial-correlation|Point-Biserial Correlation]]* (For continuous data).
*   **The Multi-Ranking Tool:** *[[spearman-correlation|Spearman Correlation]]* (When BOTH variables are ranks).
*   **Article:** *[Rank-Biserial Effect Size](https://en.wikipedia.org/wiki/Rank-biserial_correlation)*.
*   **Video:** *[Mann-Whitney U and Rank Biserial Correlation](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Step-by-step).
