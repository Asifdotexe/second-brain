---
title: ANOVA (Analysis of Variance)
tags: Statistics, HypothesisTesting, Parametric
---

# ANOVA (Analysis of Variance)

"The Table Scanner" ,a tool used to determine if there is a significant difference between **three or more** groups. 

**ANOVA** is like a more powerful version of the [[t-test|T-Test]]. While a T-Test can only compare two things at a time (A vs. B), ANOVA can look at a whole room of groups (A, B, C, D...) and tell you if any of them are performing differently. It does this by comparing the "Variance" (the noise) inside each group against the "Variance" (the signal) between the group averages.

Think of it like **A Bouncer Scanning a Club**:
*   The bouncer is looking for a group that is being "extra loud."
*   If every table is equally loud, there is no signal.
*   But if one table is screaming while the rest are whispering, the bouncer spots the "Significant Difference" immediately. 
*   **The Outcome:** ANOVA tells you that **at least one** table is being loud ,but it doesn't specify which one yet. You need a "Post-Hoc" test to figure that out.

## Why not just run 10 T-Tests?
If you have 5 different types of tires and you want to see which is best, you *could* run a T-Test for A vs B, A vs C, B vs C, etc.
**The Danger:** Every time you run a statistical test, there is a 5% chance of getting a "False Positive" (noise that looks like a result). If you run 20 T-Tests, you are almost **guaranteed** to find a fake result purely by accident. ANOVA runs one single math calculation that covers everyone, keeping your error rate safe.

## FAQs

*1. What happens after the ANOVA says "Yes"?*
**Post-Hoc Tests.** ANOVA only gives you a "Yes/No" on whether a difference exists. To find out exactly **which** group is the winner, you run a secondary test like **[[tukeys-hsd|Tukey's HSD]]**. 

*2. Does it work for non-bell curve data?*
**No.** Like the T-Test, ANOVA assumes your data is "Normal" and "Consistent." If your data is messy, ranked, or full of outliers, you should use the **[[kruskal-wallis|Kruskal-Wallis Test]]** instead.

### Further Reading

*   **The Foundation:** *[[t-test|The T-Test]]* (Comparing only 2 groups).
*   **The Next Step:** *[[tukeys-hsd|Tukey's HSD]]* (Finding the specific winner).
*   **The Non-Parametric Version:** *[[kruskal-wallis|Kruskal-Wallis]]* (For messy data).
*   **Article:** *[ANOVA for Beginners](https://www.scribbr.com/statistics/one-way-anova/)*.
*   **Video:** *[One-Way ANOVA Explained](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Visualizing the variance).
