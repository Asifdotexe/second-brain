---
title: Context Window
tags: ArtificialIntelligence, LLMs, Concepts
---

# Context Window

A context window is like having an incredibly brilliant friend with severe short-term memory loss. They can give you a genius answer to your immediate question right now, but they will completely forget what your actual name is five minutes later.

The **Context Window** of a [[llm|Large Language Model (LLM)]] is the hard mathematical limit on how much text the model can process, "remember," and consider at any single exact moment when generating a response.

Everything outside of this window simply does not exist to the AI. If you paste a 100-page book into a model with a 10-page context window, it will vividly remember page 100, but it will have completely and permanently forgotten everything that happened in chapters 1 through 9.

## Tokens vs. Words

A context window isn't measured in words; it's measured in **tokens**. 

A token is the raw building block an AI uses to read. It can be a single letter, a chunk of a word ("ham", "bur", "ger"), or a whole short word depending on the language. As a rough rule of thumb for English, 1 token roughly equals $\frac{3}{4}$ of a word (so 100 tokens is about 75 words).

## Why Size is Everything

The size of the context window radically defines what an AI is actually useful for in the real world.

*   **Small Window (e.g., 4k tokens):** Great for simple chat Q&A, translating a few paragraphs, or writing a quick email. But if you try to have a long, looping conversation, the model will suddenly "forget" the instructions you gave it at the very beginning.
*   **Medium Window (e.g., 32k - 128k tokens):** The current industry sweet spot. Capable of analyzing an entire research paper, a massive podcast transcript, or a medium-sized codebase all at once without losing the plot.
*   **Massive Window (e.g., 1M - 2M+ tokens):** The bleeding edge. Google's Gemini can process multiple full-length books or an entire corporate codebase simultaneously. This allows the AI to draw weird, hyper-niche connections across vast amounts of data that a human could literally never hold in their working memory.

## The Trillion-Dollar Bottleneck

*Why not just make every context window infinitely large?*

Because the math gets catastrophically expensive. Computing costs scale quadratically with the size of the window because the underlying [[self-attention-mechanism|Self-Attention Mechanism]] forces the model to mathematically compare *every single token against every other token* in the window. 

If you double the size of the context window, the compute power and RAM required to process it basically quadruples. This makes exceptionally large context windows incredibly expensive for tech companies to run and agonizingly slow for users waiting for a response.

### Further Reading

*   **The Brain:** *[[llm|Large Language Models]]* (The actual engines that rely on these windows).
*   **The Math causing the bottleneck:** *[[self-attention-mechanism|Self-Attention Mechanism]]* (Why long windows cost so much damn money).
