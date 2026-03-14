---
title: Tail Value at Risk (TVaR)
tags: [RiskMetric, FinanicalRisk, DisasterPlanning]
---

# Tail Value at Risk (TVaR)

"The Deep End"—the terrifying question that asks: *"If our safety systems (VaR) fail and the water floods over the wall, how deep will it actually get?"*

**Tail Value at Risk (TVaR)** (also called "Expected Shortfall") is the average of the absolute worst-case scenarios. While **[[value-at-risk|VaR]]** tells you where the "Danger Zone" begins, TVaR tells you just how bad it is once you are inside that zone. It focuses entirely on the "Tail" of a graph—the rare, catastrophic disasters.

Think of it like a **Storm Forecast**:
*   **VaR (The Threshold):** "We are 99% sure the storm won't cause more than $1 Million in damage."
*   **TVaR (The Reality):** "Okay, but in that 1% chance the storm **does** exceed $1 Million... what is the average bill? Is it $1.1 Million? Or is it $100 Million and the whole building is gone?"

## Why TVaR is "Honest" where VaR is "Optimistic"
**[[value-at-risk|VaR]]** can be very misleading. It is possible to have a "low" VaR but a massive **Cliff** right behind it. 
For example:
*   **Bank A** has a 99% VaR of $10,000. In the 1% disaster, they lose **$11,000**.
*   **Bank B** has a 99% VaR of $10,000. In the 1% disaster, they lose **$10,000,000**.
If you only look at **VaR**, these two banks look identical. If you look at **TVaR**, you see that Bank B is actually a ticking time bomb.

## FAQs

*1. Who uses TVaR?*
Regulators and **Reinsurers** (the companies that provide insurance to insurance companies). They are the ones who have to pay for the catastrophes, so they care more about the "Deep End" (TVaR) than the "Normal Bad Day" (VaR).

*2. Why is it called "Expected Shortfall"?*
Because it represents the "Shortfall" (the loss) you can "Expect" once you have crossed the line into a disaster.

### Further Reading

*   **The Threshold:** *[[value-at-risk|Value at Risk (VaR)]]* (The starting point for TVaR).
*   **The Probability:** *[[exceedance-probability-curve|The EP Curve]]* (Visualizing the whole tail of risk).
*   **Deep Dive:** *[VaR vs. Expected Shortfall](https://www.investopedia.com/terms/e/expected-shortfall.asp)* (A comparison for financial analysts).
*   **Video:** *[Understanding Tail Risk](https://www.youtube.com/watch?v=Xh0Y-3L1Kk8)* (Why we must prepare for the rare events).
