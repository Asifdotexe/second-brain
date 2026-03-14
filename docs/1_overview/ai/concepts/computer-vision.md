---
title: Computer Vision
tags: ArtificialIntelligence, ComputerVision, NeuralNetworks
---

# Computer Vision

Computer Vision is exactly what it sounds like: the agonizingly difficult math required to teach a camera attached to a silicon chip how to "see" and understand a photograph exactly like a human brain does.

It is a massive sub-field of Artificial Intelligence (AI) dedicated solely to enabling computers to extract actual information and context from raw digital images, video feeds, and other visual inputs. 

For decades, computers could only store images as giant grids of dumb color numbers. They didn't know *what* was in the picture. Computer Vision changed that. Now, if you show a model a picture of a street, it doesn't just see a grid of gray and red pixels; it can draw a perfect square around the stop sign and aggressively hit the brakes on your self-driving car.

<img src="https://images.prismic.io/turing/65981166531ac2845a272a03_How_computer_vision_works_7a55c421bf.webp?auto=format,compress" alt="[[agentic-ai|Agentic AI]] Flow" style="width: 500px; height: auto;"/>

## How it Actually Works

Modern Computer Vision is almost entirely powered by incredibly deep [[artificial-neural-networks|neural networks]]. 

Specifically, the industry relies heavily on **[[convolutional-neural-networks|Convolutional Neural Networks (CNNs)]]**. These networks act like a magnifying glass, scanning an image pixel by pixel to find raw edges, then combining those edges into simple shapes, and finally combining those shapes into recognizable objects. 

Recently, massive tech companies have started using text-based [[transformer-architecture|Transformer architectures]] (the same tech behind ChatGPT) to chop images into tiny puzzle pieces and process them like words in a sentence, which is proving to be insanely powerful but requires mind-boggling amounts of computing power.

## FAQs

*1. Is it just for self-driving cars and facial recognition?*
Not at all. It's used aggressively in medicine to spot microscopic tumors on MRI scans that human doctors miss, in agriculture to build drones that laser-zap specific weeds without touching the crops, and in manufacturing to spot millimeter-sized defects on assembly lines moving at 60 mph.

### Further Reading

* **Watch:** [*How Computers See* by TED-Ed (YouTube)](https://www.youtube.com/watch?v=XS2UWYuh5u0) (A fantastic, easy-to-understand visual explainer).
* **Learn:** "[CS231n: [[convolutional-neural-networks|Convolutional Neural Networks]] for Visual Recognition](https://cs231n.stanford.edu/2020/)" (Stanford University Course Notes - highly technical but the absolute gold standard).
* **Try it yourself:** [Google's "Teachable Machine"](https://teachablemachine.withgoogle.com/) (A brilliant web tool where you can use your webcam to train your own computer vision model in three minutes without typing a single line of code).
