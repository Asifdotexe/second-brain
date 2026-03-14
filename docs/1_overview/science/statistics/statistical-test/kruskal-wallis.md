---
title: Kruskal-Wallis Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Kruskal-Wallis Test

"The Multi-Group Ranker"—the tool you use to see if **three or more** groups are different, when your data is too messy or "Extreme" for a normal [[anova|ANOVA]].

The **Kruskal-Wallis Test** is the "Safe Backup" for **[[anova|ANOVA]]**. If you have three different types of tires and you want to see which one is best, but your data is full of crazy outliers or isn't a "Normal" bell curve, the Kruskal-Wallis test saves the day. It does this by throwing away the raw numbers and replacing them with **Ranks** (1st to last).

Think of it like **A Giant Marathon Line**:
*   Imagine students from three different gym classes (Classes A, B, and C) all finish a race.
*   We put every single student into one long line from 1st place to 500th place.
*   **The Question:** Is there a pattern in the line? Is everyone from Class A huddled at the "Winner" end of the line? Is Class C huddled at the "Loser" end?
*   **The Result:** If the "Average Rank" for Class A is way higher than the others, Kruskal-Wallis flags that at least one class is mathematically dominating the others.

## Why use it?
1.  **Messy Data:** Unlike [[anova|ANOVA]], it doesn't care about your data's shape or distribution. 
2.  **Ordinal Data:** Perfect for when you are comparing things like "Star Ratings" (1 to 5 stars) or "Pain Levels" where the "Average" might not make sense.
3.  **Outlier Proof:** A single billionaire in one group won't "Steal" the result for that group. They are just ranked "#1" and that's it.

## FAQs

*1. What happens after it says "Yes"?*
**Post-Hoc Hunt.** Like [[anova|ANOVA]], Kruskal-Wallis only tells you that **at least one** group is different. It doesn't say which one. To find the specific winner, you have to run a series of **[[mann-whitney-u|Mann-Whitney U Tests]]** to compare the groups two-at-a-time.

*2. Is it as powerful as [[anova|ANOVA]]?*
**Almost.** If your data is perfect and "Normal," [[anova|ANOVA]] is slightly better because it uses more "Nuance" from the raw numbers. Kruskal-Wallis is slightly less "sensitive," but much more "Universal."

### Further Reading

*   **The Clean Alternative:** *[[anova|ANOVA Overview]]* (For normal data).
*   **The 2-Group Version:** *[[mann-whitney-u|Mann-Whitney U]]* (For only 2 groups).
*   **Article:** *[Kruskal-Wallis: The ANOVA Backup](https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/kruskal-wallis-test/)*.
*   **Video:** *[Kruskal-Wallis Test in 3 Minutes](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Visualizing the marathon line).
