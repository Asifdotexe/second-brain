---
title: AI Hallucination
tags: ArtificialIntelligence, LargeLanguageModels, Risks
---

# AI Hallucination

When a [[supercomputer|supercomputer]] confidently looks you dead in the eye and tells a wildly convincing lie.

An **AI Hallucination** happens when a Large Language Model ([[llm|LLM]]) sees patterns that aren't actually there and invents entirely false information, presenting it as absolute, indisputable fact. 

The AI isn't *trying* to lie to you. It actually has no concept of "truth" or "lying." It just thinks it's doing a really good job of completing the word puzzle you started. It's like staring at the clouds and seeing a face; the face absolutely isn't real, but your brain insists on connecting the dots to make it look like one.

## Why Does It Happen?

We like to think of [[llm|LLMs]] as giant encyclopedias, but they aren't. They are basically just extremely powerful versions of iPhone Autocomplete on steroids. 
*   **The Prediction Engine:** They don't look up facts; they guess the mathematically most likely *next word* in a sentence.
*   **The Gap Trap:** If you ask an AI a question it doesn't know the answer to, it won't just sit there in silence. It will guess the most *plausible-sounding* sequence of words to fill the gap, massively prioritizing "sounding correct" over actually "being correct."

## FAQs

*1. Can we just program them to stop hallucinating?*
Not totally. We can aggressively reduce how often they lie by bolting external databases onto them (using techniques like [[rag|Retrieval-Augmented Generation (RAG)]]). But because the core LLM engine is probabilistic ,meaning it's literally just rolling loaded dice to pick the next word ,there is always a tiny, non-zero chance it will roll snake eyes and output nonsense.

*2. Why is this actually dangerous?*
Because the AI is unbelievably **confident**. If you ask an AI "Who is the CEO of Apple?", it says "Tim Cook." If you ask it "Who is the elected King of Mars?", it won't tell you Mars doesn't have a king. It will invent a name, a fake political party, and a rich 200-year fictional history of Martian royalty without ever changing its factual, authoritative tone of voice.

### Further Reading

*   **Corporate View:** *[IBM: What are AI Hallucinations?](https://www.ibm.com/topics/ai-hallucinations)* (How big businesses are terrified of their enterprise bots lying to customers).
*   **Deep Dive:** *[Why LLMs Hallucinate (Zapier)](https://zapier.com/blog/ai-hallucinations/)* (A great breakdown of the exact mechanics of why the math forces them to lie).
