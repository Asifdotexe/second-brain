---
title: Long Short-Term Memory (LSTM)
tags: AI, DeepLearning, NeuralNetworks, NLP
---

# Long Short-Term Memory (LSTM)

An LSTM is like reading a massively long novel while constantly deciding what to write down in a notebook, what to scribble out because it's no longer relevant, and what to keep in your active memory for the very next sentence.

**Long Short-Term Memory (LSTM)** is a highly specialized type of [[recurrent-neural-networks|Recurrent Neural Network (RNN)]]. Engineers specifically designed it to fix the fatal "short-term memory loss" flaw that broke traditional RNNs when reading long blocks of text.

Standard RNNs process data in sequence (like reading a sentence left to right) and pass a "hidden state" (a mathematical memory) from one word to the next. But as the paragraph gets longer, the math doing the passing physically breaks down, a brutal math wall researchers call the **Vanishing Gradient Problem**. By the time a basic RNN reads the 100th word in a paragraph, it has completely forgotten the 1st word. 

LSTMs fixed this by gutting and redesigning the basic "memory cell" inside the network. Instead of just sloshing a single blended blob of memory forward, an LSTM creates a dedicated "cell state" (the notebook), a clean highway running straight through the entire sequence. Alongside this highway, the LSTM acts like an incredibly strict bouncer using three mathematical "gates" to control exactly what enters and exits the notebook.

## How the Gates Work

*   **Forget Gate:** This looks at the new word and the recent past, and decides what old information in the long-term notebook should be permanently erased. If the sentence subject changes from "Alice" to "Bob", the gate erases the pronoun rules for Alice.
*   **Input Gate:** This decides what new, relevant information from the current word is actually important enough to write down into the long-term notebook right now.
*   **Output Gate:** This decides what specific pieces of the long-term notebook and the current word should be pushed forward as the immediate "short-term memory" to predict the very next step.

## FAQs

*1. If LSTMs fixed the memory problem, why don't we still use them for everything?*
Because they are still fundamentally sequential (they *must* read word 1, then wait, then read word 2, wait, read word 3). Because of this bottleneck, they are obnoxiously slow to train on massive datasets. The [[transformer-architecture|Transformer]] architecture eventually slaughtered them in NLP because Transformers process the entire sequence simultaneously in parallel.

*2. Are there simpler versions of LSTMs?*
Yeah, the **Gated Recurrent Unit (GRU)** is incredibly popular. It basically smashes the "forget" and "input" gates into a single mechanism. It's slightly dumber than an LSTM, but it trains significantly faster while keeping most of the memory benefits.

### Further Reading

*   **The Classic Guide:** [Understanding LSTM Networks](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) by Christopher Olah.
*   **The Deep Dive:** [The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness/) by Andrej Karpathy.

