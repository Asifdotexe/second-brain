---
title: Pearson Correlation Coefficient (r)
tags: Statistics, DataScience, Correlation
---

# Pearson Correlation Coefficient (r)

"The Straight-Line Test" ,a measure of how perfectly two things move together in a steady, consistent, straight line.

**Pearson's Correlation ($r$)** is the most common way to measure a relationship. It asks: *"If I draw a straight line through these data points, how close do they stay to that line?"* If the dots are perfectly on the line, the score is `1`. If they are scattered like a cloud, the score is `0`.

Think of it like **Synchronized Diving**:
*   **The Perfect 1.0:** Two divers jump at the exact same time, hit the same height, and enter the water together. They are in perfect, linear lockstep.
*   **The Negative -1.0:** As Diver A goes UP, Diver B goes DOWN at the exact same speed. They are perfectly related, but in opposite directions.
*   **The Zero 0.0:** Diver A jumps, and Diver B just wanders off to get a sandwich. There is no relationship at all.

## The "Blind Spot"
Pearson is famously **blind to curves**. 
*   Imagine a relationship that looks like a "Smile" (e.g., your energy level: it’s high in the morning, drops at lunch, and goes up again at night). 
*   Because that isn't a straight line, Pearson will give it a score of **Zero**. 
*   **The Lesson:** Just because Pearson says `0` doesn't mean the variables aren't related; it just means they aren't related in a straight line.

## FAQs

*1. When should I use this?*
Use it for **Continuous Data** (like Height, Temperature, or Dollars) where you expect a steady increase or decrease. If you have "Ranks" (1st place, 2nd place) or lots of "Outliers," use [[spearman-correlation|Spearman Correlation]] instead.

*2. Can a high score prove "Causation"?*
**No.** This is the #1 trap in statistics. Just because "Ice Cream Sales" and "Drowning Accidents" have a high Pearson score doesn't mean ice cream causes drowning. (They are both caused by a third variable: **Summer Heat**).

### Further Reading

*   **The Next Step:** *[[spearman-correlation|Spearman Correlation]]* (When things curve but don't zig-zag).
*   **The Extreme:** *[[chatterjees-correlation|Chatterjee's Xi]]* (Catching the 
*   **Article:** *[Pearson Correlation Explained](https://www.scribbr.com/statistics/pearson-correlation-coefficient/)* (Simple math guide).
*   **Video:** *[Correlation vs. Causation](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Why a high score isn't everything).
