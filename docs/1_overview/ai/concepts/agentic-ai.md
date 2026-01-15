---
title: Agentic AI
tags: ArtificialIntelligence, AgenticAI
---

# Agentic AI

### In a nutshell
Agentic AI is an artificial intelligence that doesn't just answer your questions; it actively uses tools and takes steps to complete goals for you.

**Agentic AI** has **Agency**. It is given a broad goal (e.g., "Plan and book my vacation"), and it figures out the necessary sub-tasks, executes them one by one, checks its own work, and keeps going until the job is done. It is an AI with "hands" (tools) and a "brain" (planning capabilities).

### How it Works

To understand Agentic AI, we break it down into a loop of three core components:

1. **Perception (The Input):** The agent observes the current state of things.
2. **Reasoning (The Brain):** It decides what to do next based on the goal.
3. **Action (The Tools):** It executes a command (searching the web, running code, sending an email).

<img src="https://d3a7ykdi65m4cy.cloudfront.net/en/s3fs-public/inline-images/805x540_How-Does-Agentic-AI-Work.png" alt="Agentic AI Flow"/>

### How the Agent thinks
<details>
<summary><strong>Click to expand</strong></summary>

One of the most popular methods for Agentic AI is called **ReAct** (Reasoning + Acting).

1.  **Thought:** "The user wants to buy a stock. First, I need to check the current price."
2.  **Action:** *Trigger Tool: Stock_Market_API(Symbol='AAPL')*
3.  **Observation:** "The API returned $150.00."
4.  **Thought:** "That is within the user's budget. I should execute the buy order now."
5.  **Action:** *Trigger Tool: Brokerage_Buy(Symbol='AAPL', Qty=1)*

</details>

---
<br>


### The Analogy: Librarian vs. Assistant

| Feature | Standard AI (Generative) | Agentic AI |
| :--- | :--- | :--- |
| **The Persona** | Librarian | Assistant |
| **Interaction** | You ask: *"How do I bake a cake?"* <br> They hand you a recipe book. | You ask: *"I need a cake for Saturday."* <br> They find a bakery, order it, and pay for it. |
| **Capability** | Knowledge Retrieval *(It knows information.)* | Task Execution *(It performs actions.)* |
| **Autonomy** | Low. Needs a prompt for every output. | High. Can loop multiple times on one prompt. |

---
<br>

### Further Reading

* **Concept:** *“[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/pdf/2210.03629)”* (The foundational paper).
* **Frameworks to try:** [LangChain](https://www.langchain.com/) or [AutoGPT](https://news.agpt.co/).

