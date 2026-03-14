---
title: Multi-Head Attention
tags: AI, DeepLearning, NeuralNetworks, NLP
---

# Multi-Head Attention

Multi-Head Attention is like having eight different frantic literary critics read the exact same poem at the exact same time; one focuses entirely on the rhyming, another obsessively tracks the emotional subtext, and a third maps the grammatical structure. Then they all smash their notes together to truly understand the text.

**Multi-Head Attention** is a vital architectural trick built inside the [[self-attention-mechanism|Self-Attention Mechanism]] of the [[transformer-architecture|Transformer Architecture]]. 

Instead of forcing the neural network to calculate one single, massive, overwhelming math equation to find the relationships between all the words in a sentence, it slices the math up into multiple parallel tracks (or "heads").

Imagine the sentence *"The boy sprinted to the bank because he needed cash quickly."*

If the AI only had a single "Attention Head," it would have to juggle every single relationship at once. It might successfully realize the word "bank" is heavily related to "cash", but by spending all its math power figuring that out, it might completely fail to notice the grammatical relationship connecting "bank" to the action "sprinted."

By slicing the data up and running it through multiple "heads" in parallel, the model basically assigns jobs to itself. Head 1 might unknowingly specialize in tracking noun-verb relationships. Head 2 might become obsessed with tying pronouns to their actors. Head 8 might just track emotional tone. After all eight heads do their separate math, the Transformer concatenates (smushes) all their findings back together before passing it up the chain, resulting in an insanely rich, multi-dimensional understanding of the sentence.

## Why Did They Build It This Way?

*   **Parallel Subspaces:** By projecting the original math vectors into smaller dimensions multiple times, the model can hyper-focus on completely separated aspects of the sentence simultaneously without the math bleeding together.
*   **It's Actually Free:** Because the engineers split the data into smaller chunks (e.g., slicing one massive 512-dimension vector into eight tiny 64-dimension heads), the actual computational processing time remains identical to what it would be if they just ran a single massive attention head. You get eight times the semantic depth for zero extra GPU cost.
*   **Ensemble Redundancy:** Having multiple heads provides a beautiful failsafe. If one attention head completely glitches out and latches onto irrelevant noise in a paragraph, the other seven heads are still functioning healthily on different tasks, keeping the final output sane.

## FAQs

*1. Are the "Heads" genuinely doing different tasks on purpose?*
Not explicitly, which is the weirdest part of AI. The Google programmers don't manually assign "Grammar" to Head 1 and "Emotion" to Head 2. The network organically discovers these specializations purely through math over billions of rounds of training. When researchers "look under the hood," they find these distinct patterns naturally emerging on their own.

*2. How does this connect to older AI models?*
In older language models, the network only had a single "hidden state" that violently squeezed all the information through a tight bottleneck. Multi-Head Attention essentially shatters that bottleneck by replacing it with an eight-lane parallel processing highway.

### Further Reading

*   **The Core Math Engine:** *[[self-attention-mechanism|Self-Attention Mechanism]]* (The fundamental math that every single head is running).
*   **The Tech:** *[[transformer-architecture|Transformer Architecture]]* (The neural network that houses this entire system).
