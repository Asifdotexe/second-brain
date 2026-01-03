---
title: Large Language Model (LLM)
tags: ArtificialIntelligence, LargeLanguageModel, Transformers
icon: fas fa-robot
---

# Large Language Model

Think of an LLM as "really really really good Autocomplete", a system that has read almost everything on the internet and learned how to predict the next word in a sentence perfectly.

It is trained on massive amounts of text data. Instead of being "taught" grammar rules explicitly, it learns them by observing patterns. 

Its primary job is simple: **Guess the next word.** By making these guesses billions of times over, it learns to write essays, code software, translate languages, and answer questions.

## How It Actually Works

To understand an LLM, we break it down into three fundamental pillars:

**1. Tokenization (The Puzzle Pieces)**
Computers don't read words like we do; they read numbers. An LLM breaks text down into chunks called *Tokens*. A token can be a whole word (like "apple") or part of a word (like "ing" in "eating").

**2. Probability (The Guessing Game)**
The model looks at a sequence of tokens and calculates the *probability* of what comes next.
* *Input:* "The cat sat on the..."
* *LLM Calculation:*
    * "Mat" (80% likely)
    * "Floor" (15% likely)
    * "Moon" (0.01% likely)

**3. Training (The heavy Lifting)**
To get good at guessing, the model reads billions of sentences (books, websites, articles). It adjusts its internal "settings" (parameters) every time it guesses right or wrong, eventually building a map of how human language connects.

## FAQ

*1. What is a "Transformer"?*
The "Transformer" is the engine under the hood of modern LLMs (like the 'T' in GPT). 

Before Transformers, AI read sentences one word at a time, left to right. Transformers can read the **whole sentence at once**. This allows the model to understand context much better. 

For example, in the sentence *"The bank was closed because the river flooded,"* a Transformer understands that "bank" refers to land, not money, because it sees the word "river" at the same time.

*2. What are "Parameters"?*

Parameters are the "brain cells" of the model. They are the adjustable variables inside the model that store the knowledge. 
* **More parameters** = generally smarter, more nuanced, and capable of handling complex tasks. 
* GPT-4, for instance, has approximately 1.76 trillion parameters

*3. Why do LLMs hallucinate?*

Since an LLM is a **probabilistic engine**, not a fact database, it sometimes predicts a word that *sounds* plausible but is factually wrong. It prioritizes the *pattern* of language over the *truth* of the facts.

## Further Reading

* **"[Attention Is All You Need](https://arxiv.org/pdf/1706.03762)"** - The original research paper that introduced the Transformer architecture.
* **[Wait But Why: The AI Revolution](https://futureoflife.org/ai/wait-but-why-the-ai-revolution/)** - A long-form, illustrated blog post explaining AI growth.
* **[The Prompt Engineering Guide](https://www.promptingguide.ai/)** - The most famous community-run guide. Covers everything from basics to advanced logic.
