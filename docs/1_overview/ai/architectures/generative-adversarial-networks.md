---
title: Generative Adversarial Networks (GANs)
tags: AI, Architectures, DeepLearning, GenerativeAI
---

# Generative Adversarial Networks (GANs)

A counterfeiter trying to print fake money, and a detective trying to spot the fakes. They fight each other until the counterfeiter's money is so good the detective can't tell the difference anymore.

**Generative Adversarial Networks (GANs)** are a wildly popular machine learning setup designed by Ian Goodfellow in 2014. They pit two separate neural networks against each other in a zero-sum game to generate highly realistic synthetic data (usually images, video, or audio).

## The Setup

1.  **The Generator (The Counterfeiter):** This network takes in random math noise and tries to spit out data that looks like the real training data (e.g., trying to generate a photo of a human face from scratch).
2.  **The Discriminator (The Detective):** This network gets fed both *real* photos from the training set and the *fake* photos from the Generator. Its only job is to look at the photo and guess: "Is this real or fake?"

As training runs, the Generator gets incredibly good at creating realistic textures to fool the Discriminator, while the Discriminator gets intensely paranoid and excellent at detecting subtle digital flaws. 

Eventually, the Generator produces synthetic data so perfect that the Discriminator’s accuracy drops to exactly 50%. The fake data is so good that the "detective" is basically just flipping a coin. At that point, the Generator has successfully learned how to create hyper-realistic images that don't actually exist in the real world.

## What Are They Used For?

*   **Synthesis:** Creating photorealistic people for ads, upscaling old video game textures (like Nvidia's DLSS), or generating smooth transition frames in clunky video streams.
*   **The Ethics Nightmare:** GANs are the primary engine behind **[[deepfakes|Deepfakes]]**. Because you can train the Discriminator to perfectly match one specific person's exact likeness, GANs make it dangerously easy to create malicious identity spoofing, non-consensual fake porn, and political disinformation videos.

## FAQs

*1. Are GANs the things powering Midjourney and DALI-E?*
Mostly no. While GANs are incredibly fast and sharp, training them is notoriously annoying. They constantly suffer from "mode collapse", where the Generator realizes that outputting one *exact specific image* always fools the Discriminator perfectly, so it just stops trying and outputs that same image forever. Modern image generators rely heavily on [[diffusion-models|Diffusion models]] instead, though GANs still totally rule the roost for real-time video manipulation.

### Further Reading

*   **External Resource:** [Generative Adversarial Networks (GANs) - Google Developers](https://developers.google.com/machine-learning/gan)
