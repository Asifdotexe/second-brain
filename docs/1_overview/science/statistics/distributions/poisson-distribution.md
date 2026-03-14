---
title: Poisson Distribution
tags: Statistics, Math, Time
---

# Poisson Distribution

"The Waiting Game"—the math of "Rare Events." It calculates the probability of how many things will happen in a specific window of time or space.

While the **[[binomial-distribution|Binomial Distribution]]** counts "Successes in X tries," the **Poisson Distribution** just counts "Events in an Hour." It doesn't care how many times you "Try." It only cares about the average flow. For example: *"If an ambulance station averages 3 calls an hour, what are the odds they get 10 in the next hour?"*

Think of it like **A Call Center**:
*   **The Average:** Your data says you typicaly get **5 calls per minute**. (This is called "Lambda").
*   **The Surprise:** Sometimes you get 0 calls. Sometimes you get 15.
*   **The Curve:** Poisson tells you the probability of those surprises. It shows that getting 0 calls is rare, and getting 15 is very rare, but getting 4, 5, or 6 is very common.

## Why use it?
1.  **Independence:** It assumes that one phone call doesn't "cause" the next one. They are random and separate events.
2.  **Rare but Possible:** It’s used for "Low Probability" events that have many "Opportunities" to happen. (e.g., How many typos in a 500-page book? How many meteors hit the Earth today?).
3.  **Capacity Planning:** It is the #1 tool for businesses to decide how many staff to hire. If you know there is a 5% chance of getting 20 calls at once, you can decide if it’s worth hiring an extra 5 people to handle that rare spike.

## FAQs

*1. What is the difference between Poisson and Binomial?*
*   **Binomial:** You have **Fixed Opportunities**. (e.g., 10 coin flips).
*   **Poisson:** You have **Infinite Opportunities**. (e.g., A whole day where anyone on Earth *could* call you).

*2. Where did the name come from?*
It was named after **Siméon Denis Poisson**, but it became famous when a researcher used it to calculate how many Prussian soldiers were killed by **horse-kicks** each year. Because horse-kicks are rare and random, they followed the Poisson curve perfectly.

### Further Reading

*   **The Rival:** *[[binomial-distribution|Binomial Distribution]]* (The coin flip version).
*   **The Math:** *[Poisson Distribution Formula](https://en.wikipedia.org/wiki/Poisson_distribution)*.
*   **Article:** *[The Poisson Distribution in Business](https://hbr.org/2014/11/a-predictive-analytics-primer)* (HBR).
*   **Video:** *[The Poisson Distribution Explained](https://www.youtube.com/watch?v=jmqZH6koqGQ)* (Animated examples).
