---
title: Physical World Models
tags: ArtificialIntelligence, MachineIntelligence, Robotics, AIConcepts
---

# Physical world models

Think about a robot that doesn't just talk about water but actually understands that tipping a glass causes a spill. That’s a physical world model.

Most AI today is just looking for patterns in text or pixels. Physical world models are different, they’re trying to actually learn the laws of physics. 

I think of current LLMs as people who’ve read every book about the ocean but have never actually touched water. They know all the words, but they don't know what a wave feels like. A world model is the sailor who knows how to stay upright in a storm.

Yann LeCun’s new company, AMI, is basically betting the future on this. They think for AI to be useful for more than just chatbots, it has to understand physical consequences. It needs to know that if it pushes something, that thing moves. It's about moving from predicting the next word to predicting the next state of the world.

## How it works

The big change here is moving away from the "static" nature of generative AI. 

Instead of starting fresh with every prompt, the AI maintains a constant understanding of where things are. It can run internal simulations to see what might happen before it actually makes a move. This makes things much safer, if an AI can "see" that a specific move will break a glass, it can choose not to do it. It’s less about guessing and more about reasoning through the environment.

## FAQs

*Is this just what self-driving cars do?*
Not really. Self-driving cars are mostly reactive. They see a stop sign, they stop. A physical world model is trying for a deeper understanding that works everywhere, whether you're folding laundry or walking through a forest.

*Why do we need this if LLMs are already smart?*
LLMs "hallucinate" because they have no concept of reality. They're basically just very good at guessing the next word. A physical world model gives them a "ground truth", an actual understanding of the world that makes them reliable for things like robotics or manufacturing.

### Further Reading

*   **Concept:** [The World Model](https://worldmodels.github.io/) (A look at agents learning through simulations).
