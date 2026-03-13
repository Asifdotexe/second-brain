---
title: Open Weights
tags: ArtificialIntelligence, Models, Licensing
---

# Open Weights

Giving away the brain, but permanently deleting the memory of how the brain was actually built.

When a massive tech company releases an AI model as **Open Weights**, they are legally giving you the *final mathematical result* of their month-long, $100M training run (the smart brain itself), but they are aggressively hiding the *training data* (what books the AI actually read) and the *architecture code* (how they built the neural network).

It's exactly like a Michelin-star chef handing you a perfectly baked, delicious cake. You can eat it, you can share it with friends, you can even scrape off their vanilla icing and put on your own chocolate icing (a process called [[ai-fine-tuning|Fine-Tuning]]). But you have absolutely no idea what exact ingredients went into baking the cake in the first place.

## The Semantic Difference

Tech CEOS loudly claim their models are "[[open-source|Open Source]]" when they are actually just "Open Weights". 

*   **Open Source AI:** You get the keys to the entire kingdom. The Source Code + The Raw Training Data + The Final Weights. (This is incredibly rare because sharing the training data usually exposes the company to massive copyright lawsuits from authors).
*   **Open Weights:** You get just the final, compiled brain. You can run it on your laptop, but you cannot easily rebuild it from scratch or prove what copyrighted material it memorized. (This is the industry standard for "open" AI right now, heavily popularized by Meta's Llama 3 and Mistral).

## FAQs

*1. Can I use an Open Weights model to start a company for free?*
Usually, yes. However, "Open Weights" often come attached to highly specific corporate licenses, not traditional open-source licenses. For example, Meta's Llama license essentially says: *"This is totally free for everyone to use commercially... unless your app somehow gets more than 700 million active monthly users, in which case you have to pay us."*

*2. Why do billion-dollar companies give this billion-dollar tech away for free?*
To commoditize their competitors. By giving away a world-class model for free, Meta destroys the business models of smaller startups trying to sell access to models. It also allows an army of free, open-source developers to aggressively improve the model (fixing bugs, making it run faster on weak hardware) without Meta ever having to reveal their "secret sauce" (their proprietary, likely legally-grey training data).

### Further Reading

*   **The Corporate Playbook:** *[WIRED: The History of Open Weights](https://www.wired.com/story/open-source-generative-ai-llama-2/)* (Why Meta decided to give away the farm).
*   **The Legal Definition:** *[OSI: What is [[open-source|Open Source]] AI?](https://opensource.org/blog/what-is-open-source-ai)* (The [[open-source|Open Source]] Initiative getting mad at tech companies for misusing the term).
