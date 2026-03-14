---
title: Agentic AI
tags: ArtificialIntelligence, AgenticAI
---

# Agentic AI

Standard AI gives you a recipe when you ask how to bake a cake; Agentic AI finds a local bakery, orders your favorite flavor, and pays for it with your credit card without you asking twice.

**Agentic AI** is artificial intelligence that actually has *agency*. Instead of just sitting there answering chat prompts, it's given a broad goal ("Plan my vacation") and left alone to figure out the steps, use software tools to execute them, check its own mistakes, and grind away until the job is done. 

It is essentially an AI with "hands" (the ability to trigger external tools) and a "brain" (the ability to plan a multi-step timeline).

### The Feedback Loop

Agentic AI doesn't just generate text; it runs in a loop of three steps:

1. **Perception:** The agent looks at the current state of the world or its assigned task.
2. **Reasoning:** It decides what its next immediate move should be to get closer to the final goal.
3. **Action:** It actually does the thing (runs a Python script, searches Google, clicks a button). Then it goes back to step 1 to see if the action worked.

<img src="https://d3a7ykdi65m4cy.cloudfront.net/en/s3fs-public/inline-images/805x540_How-Does-Agentic-AI-Work.png" alt="Agentic AI Flow"/>

### ReAct: How the Agent Thinks
<details>
<summary><strong>Click to see the internal thought process</strong></summary>

Most agents run on a logic loop called **ReAct** (Reasoning + Acting). If you ask an agent to buy a stock, its internal logs look something like this:

1.  **Thought:** The user wants to buy AAPL. First, I need to check the current price to ensure they have enough funds.
2.  **Action:** *Trigger Tool: Stock_Market_API(Symbol='AAPL')*
3.  **Observation:** The API returned $150.00.
4.  **Thought:** That is within the user's $200 budget. I should execute the buy order now.
5.  **Action:** *Trigger Tool: Brokerage_Buy(Symbol='AAPL', Qty=1)*

</details>

---
<br>

## The 7 Types of AI Agents

As these systems evolve, AI researchers generally categorize them from dumbest to smartest:

1. **Simple Reflex Agents:** Absolutely no memory. They just instantly react to standard triggers (e.g., a smart thermostat turning on when the room hits 68 degrees).
2. **Model-Based Reflex Agents:** They have a basic "world model" to keep track of things they currently can't see (e.g., a self-driving car remembering a pedestrian walking behind a parked truck).
3. **Goal-Based Agents:** They plan multiple steps ahead to reach a specific finish line (e.g., a warehouse robot mapping the fastest path through shelves).
4. **Learning Agents:** They actually learn from their mistakes using a "critic" feedback system to slowly improve over time (e.g., the Netflix algorithm figuring out you hate romantic comedies).
5. **Utility-Based Agents:** They balance complex tradeoffs by calculating which choice provides the highest math "score" of happiness or success (e.g., trading bots balancing extreme stock risk against potential payout).
6. **Hierarchical Agents:** A corporate ladder of AI. A high-level manager agent breaks a huge goal down and delegates the boring sub-tasks to smaller worker agents. 
7. **Multi-Agent Systems (MAS):** Swarms of completely independent agents that either collaborate or fiercely compete with each other to solve massive problems.

---
<br>

### Further Reading

* **The Heavy Math:** *“[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/pdf/2210.03629)”* (The original paper that made Agentic AI popular).
* **Frameworks to try:** [LangChain](https://www.langchain.com/) or [AutoGPT](https://news.agpt.co/) if you want to actually build one yourself.
