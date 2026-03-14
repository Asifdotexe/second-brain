---
title: Value at Risk (VaR)
tags: [RiskMetric, FinancialRisk, Statistics]
---

# Value at Risk (VaR)

"The Fence Around Reality"—a statistical "Wall" that gives you a single dollar number representing your maximum expected loss on a "Normal Bad Day."

**Value at Risk (VaR)** is the world’s most famous risk metric. It answers the question: *"On a really bad day, how much money could I lose?"* 
It doesn't tell you the "Absolute Worst" that could happen; it tells you the worst that is **likely** to happen within a certain comfort zone (like 95% or 99%).

Think of it like **Planning for a Rainstorm**:
*   You live in a city where it rains about 5 days a month.
*   **VaR (95%)** tells you: *"We are 95% sure that the most rain we will get in one day is 2 inches."*
*   You can then build your gutters to handle **2 inches** and you will be safe 19 days out of 20.
*   VaR doesn't prepare you for a **Hurricane** (that’s the 5% chance), but it helps you survive the "Normal Bad Weather."

## The 3 Ingredients of a VaR Number
1.  **Possibility (Confidence Level):** Usually **95%** or **99%**.
2.  **Time:** Over a **Day**, a **Month**, or a **Year**? 
3.  **The Dollar Amount:** The result of the math.
*   *Example:* "Our 95% 1-Year VaR is **$2 Million**."
*   *Translation:* "We are 95% sure that over the next year, our total losses will be $2 Million or less."

## The "VaR Trap" (Warning!)
The biggest mistake in finance history (and the cause of many market crashes) is believing that VaR is the "Maximum Possible Loss." 
**VaR is NOT the maximum.** 
If your VaR is $2 Million, it means there is a **5% chance** that your loss will be **more** than $2 Million. That 5% could be $2.1 Million, or it could be **$2 Billion**. To see what happens *outside* the VaR wall, you must look at **[[tail-value-at-risk|Tail Value at Risk (TVaR)]]**.

## FAQs

*1. Why use 99% instead of 95%?*
Banks and massive corporations use 99% because they have to prepare for the "Once-in-a-Lifetime" disasters. A small startup might use 95% because they only care about surviving the "Normal" bad stuff.

*2. Is VaR used in Cyber Risk?*
**Yes.** CISOs use "Cyber VaR" to tell the Board of Directors: *"We are 95% sure that our data breaches this year won't cost more than $5 Million."* This helps the board budget for security tools.

### Further Reading

*   **Beyond the Wall:** *[[tail-value-at-risk|Tail Value at Risk (TVaR)]]* (What happens when VaR fails?).
*   **The Visualization:** *[[exceedance-probability-curve|The EP Curve]]* (The graph that contains the VaR point).
*   **Case Study:** *[VaR and the 2008 Financial Crisis](https://www.investopedia.com/articles/04/092904.asp)* (How relying too much on VaR destroyed banks).
*   **Video:** *[VaR Explained in 5 Minutes](https://www.youtube.com/watch?v=Xh0Y-3L1Kk8)* (A visual guide to the statistical fence).
