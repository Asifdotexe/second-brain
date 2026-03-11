---
title: Convolutional Neural Networks (CNN)
tags: AI, DeepLearning, NeuralNetworks, ComputerVision
---

# Convolutional Neural Networks (CNN)

A Convolutional Neural Network is like looking at a massive painting through a tiny magnifying glass, scanning it row by row to find edges, moving backward to find shapes, and finally zooming all the way out to realize you're looking at a picture of a dog.

**Convolutional Neural Networks (CNNs)** are a highly specialized type of [[artificial-neural-networks|Artificial Neural Network]] built specifically to process grid-like data. They ruled the [[computer-vision|Computer Vision]] world for a solid decade and are still everywhere today.

If you feed a standard neural network a 1000x1000 pixel image, you have to flatten that image out into a single line of 1,000,000 pixels. A standard network would try to connect every single one of those pixels to every single neuron in the next layer. That creates trillions of math calculations, which instantly overloads your computer. Worse, flattening the grid destroys the spatial relationship (the fact that pixel A is right next to pixel B), which ruins the actual shape of the image.

CNNs solve this with **Convolutional Layers**. Instead of looking at the whole image at once, a CNN passes a tiny digital "filter" (like a 3x3 pixel magnifying glass window) over the image, sliding it left to right, top to bottom. 

## How It Works

*   **Filters (Kernels):** These tiny sliding windows scan the image looking for incredibly specific features. The first layer might have a filter that *only* lights up when it sees a vertical edge. Another filter only cares about horizontal edges.
*   **Spatial Hierarchies:** As the data moves deeper into the network, the layers effectively "zoom out." Layer 1 finds raw edges. Layer 2 takes those tiny edges and combines them to spot simple shapes like circles or corners. Layer 3 combines the shapes into textures or features like a physical eye or a car wheel. The final layer takes all those features and guesses what the entire image is.
*   **Pooling (Downsampling):** To stop your RAM from exploding, CNNs aggressively shrink the image as it moves through the network. A "Max Pooling" layer might look at a 2x2 chunk of pixels, throw away three of them, and keep only the brightest pixel. This violently reduces the data size while keeping the most important visual features intact.

## FAQs

*1. Are CNNs only used for pictures?*
Mostly, but not exclusively. Because they look for localized patterns in grids, engineers use them for 1D sequences (like audio waves or ECG heartbeats) or even 3D structures like medical MRI scans.

*2. Are CNNs losing their crown to Transformers?*
Yeah, sort of. In recent years, Vision Transformers (ViTs) hacked the image space by chopping images into tiny squares and treating each square like a text "word," applying the [[transformer-architecture|Transformer]] logic to them. ViTs regularly beat CNNs at massive corporate scales, but CNNs are still insanely popular because you can train a decent one on a laptop without needing a $10 million server farm.

### Further Reading


*   **Deep Dive:** [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](https://cs231n.github.io/convolutional-networks/)
*   **Interactive Visualizer:** [CNN Explainer](https://poloclub.github.io/cnn-explainer/)
