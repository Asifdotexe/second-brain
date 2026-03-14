---
title: Point-Biserial Correlation Coefficient
tags: Statistics, DataScience, Correlation
---

# Point-Biserial Correlation

"The Hybrid Measure"—a tool used when one variable is a continuous number (like Height) and the other is a strict "Yes or No" (like owning a car).

**Point-Biserial Correlation ($r_{pb}$)** is a specialized version of the [[pearson-correlation|Pearson Correlation]]. It's designed for the specific situation where you want to know if a "Category" predicts a "Score." For example: *"Does owning a dog (Yes/No) predict how many hours you spend outside (0 to 24)?"* 

Think of it like **Comparing Two Groups**:
*   Imagine you have two buckets of people: **Bucket A (Yes)** and **Bucket B (No)**.
*   You look at the "Average Score" in each bucket.
*   If the "Yes" bucket has a way higher average than the "No" bucket, the Point-Biserial score will be high. 
*   It is essentially a way to turn a "Difference between groups" into a single "Relationship score" between -1 and 1.

## Rules of the Game
1.  **Natural Binary:** One variable must be a "Natural" binary (Pass/Fail, Alive/Dead, Heads/Tails). 
2.  **Continuous Numbers:** The other variable must be a real, continuous number (Price, Time, Temperature). 
3.  **The Formula:** Under the hood, it’s the exact same math as [[pearson-correlation|Pearson]]. We just use a different name to warn people that half our data is "Tied" to `0` and `1`.

## FAQs

*1. How is it different from a T-Test?*
**Goals.** A T-Test tells you **if** the difference between the groups is "Statistically Significant" (could it have happened by chance?). Point-Biserial tells you **how strong** the relationship is. (e.g., A T-test says the coffee works; Point-Biserial tells you *exactly* how much the coffee is responsible for the test score).

*2. What if my binary isn't "Natural"?*
If you manually split a continuous scale (e.g., you 1-100 test scores and grouped them into "High" and "Low"), you should use **Biserial Correlation** instead. Point-Biserial is only for things that are born as a binary (like Yes/No).

### Further Reading

*   **The Foundation:** *[[pearson-correlation|Pearson Correlation]]* (The math engine).
*   **The Ranked Version:** *[[rank-biserial-correlation|Rank-Biserial Correlation]]* (When your scores are only ranks).
*   **Article:** *[Point-Biserial Correlation Guide](https://statistics.laerd.com/spss-tutorials/point-biserial-correlation-using-spss-statistics.php)*.
*   **Video:** *[Point Biserial vs. T-Test](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (When to use which).
