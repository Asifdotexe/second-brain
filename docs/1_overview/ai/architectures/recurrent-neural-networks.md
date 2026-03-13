---
title: Recurrent Neural Networks (RNN)
tags: AI, DeepLearning, NeuralNetworks, NLP
---

# Recurrent Neural Networks (RNN)

A Recurrent Neural Network is like reading a book while consciously keeping the previous page in your head; it explicitly remembers what it just read a second ago so it can properly understand the current word in context.

**Recurrent Neural Networks (RNNs)** are a class of [[artificial-neural-networks|Artificial Neural Networks]] built specifically to handle sequential data, things that only make sense if you read them in order, like time-series data (stock prices), audio (speech recognition), or natural language (text).

Standard neural networks assume every single piece of data is totally independent. If you feed a standard network a picture of a dog, and then a picture of a cat, it immediately dumps the dog from memory when looking at the cat. 

But think about processing a sentence: *"I grew up in France, so I speak fluent ____."* If an AI processes that word by word, by the time it gets to the blank space, it *has* to remember the word "France" from earlier or it will just blindly guess. 

RNNs solve this by adding an internal math loop (a **hidden state**). When an RNN reads word #2, it doesn't just look at word #2 alone; it looks at word #2 *plus* whatever memory it carried over from word #1. This looping memory allows it to drag an ongoing context along with it as it steps through time.

## Key Flaws and Features

*   **Sequential Bottleneck:** Because they process data step-by-step from beginning to end, they are incredibly slow to train. You can't just throw 10,000 GPUs at an RNN because GPU #2 has to wait for GPU #1 to finish reading the first word.
*   **The Vanishing Gradient Problem:** As basic RNNs chew through really long paragraphs, their "memory" of the early words gets mathematically diluted until it fades away completely. If there were 50 words between "France" and the blank space, a basic RNN simply forgets about France.
*   **The Fixes (LSTMs):** To stop the network from forgetting everything, engineers invented advanced heavy-duty RNN variations like [[lstm|Long Short-Term Memory (LSTM)]] networks. These use complex internal gates to boldly decide what information to shove into long-term storage and what to trash.

## FAQs

*1. Are RNNs still the king of text processing?*
Not anymore. While they completely dominated language AI for years, practically the entire industry aggressively abandoned them for the [[transformer-architecture|Transformer]] architecture around 2018.

*2. Why did Transformers kill them?*
Because Transformers skipped the sequential reading entirely. They use the [[self-attention-mechanism|Self-Attention Mechanism]] to look at the *entire paragraph simultaneously in parallel*. This let OpenAI and Google train models infinitely faster and track much longer context windows without the "vanishing memory" completely breaking the math.

### Further Reading

*   **The Unreasonable Effectiveness of Recurrent Neural Networks:** [Andrej Karpathy's Blog](https://karpathy.github.io/2015/05/21/rnn-effectiveness/) (A classic deep dive into how RNNs work and what they can generate).
*   **Understanding [[lstm|LSTM]] Networks:** [Colah's Blog](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) (The industry-standard visual explanation of how [[lstm|LSTM]] gates actually function).
*   **Recurrent Neural Networks (RNN) with Keras:** [TensorFlow Documentation](https://www.tensorflow.org/guide/keras/rnn) (A practical guide to implementing RNNs, LSTMs, and GRUs in code).
