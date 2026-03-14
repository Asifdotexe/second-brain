---
title: Algorithmic Bias
tags: AIEthics, MachineLearning, Sociology, DataScience
---

# Algorithmic Bias

Training a robot to hire the best software engineers by only showing it resumes of men named John.

**Algorithmic Bias** happens when an AI system silently adopts the implicit prejudices of its creators, systematically discriminating against specific groups of people. 

Because [[machine-learning|Machine Learning]] models learn entirely by blindly digesting historical data, any human prejudice, historical inequality, or unbalanced sampling in that data gets mathematically baked into the AI's core logic. An AI has absolutely no concept of "fairness" or "justice"; it just ruthlessly optimizes for whatever patterns you fed it.

## How the Poison Gets In

1.  **Garbage In, Garbage Out:** If a police facial recognition system is trained on a cheap dataset containing 80% light-skinned male faces, the math will inherently struggle to identify dark-skinned or female faces accurately, leading to disastrous false arrests.
2.  **Historical Baggage:** Amazon once infamously built an AI recruiting tool to automatically filter resumes. Because the tech industry historically hired almost entirely men, the AI fundamentally learned that "female" was a negative math indicator. It aggressively penalized resumes containing words like "women's chess club captain."
3.  **Proxy Variables (The Sneaky One):** Even if you explicitly hide demographic data like "Race" from the algorithm, the AI can still discriminate using a proxy variable. For example, it might redline a loan application based solely on "Zip Code," which heavily correlates with race due to decades of historical segregation. 

## FAQs

*1. But aren't algorithms mathematically less biased than humans?*
Often, yes. A human judge might give you a harsher prison sentence just because they are hungry before lunch. Algorithms are perfectly, coldly consistent. The terrifying part is the *scale*. Human bias is localized. If a single hiring manager is sexist, it affects one department. If a centralized screening AI is sexist, it instantly applies that sexism to a million applicants globally.

*2. How do we fix it?*
It's incredibly difficult. The industry relies heavily on **Algorithmic Auditing** (paying third-party hackers to test the model for disparate impact) and spending brutal amounts of time curating perfectly balanced, representative datasets before the training even begins.

### Further Reading

*   **The Engine causing it:** *[[machine-learning|Machine Learning]]* (How the AI learns the bad habits).
*   **The Human Equivalent:** *[[cognitive-biases|Cognitive Biases]]* (Where the bad habits came from in the first place).
