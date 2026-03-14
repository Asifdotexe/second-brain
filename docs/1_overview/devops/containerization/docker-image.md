---
title: Docker Image
tags: DevOps, Containerization, Docker
---

# Docker Image

The "Master Blueprint"—an unchangeable, indestructible file that contains the exact "DNA" of your application, ensuring that every time you "spawn" it, it looks and acts exactly the same.

A **Docker Image** is the starting point for every container. It is a read-only template that includes everything your app needs to live: the source code, the libraries, the tools, and the settings. Because an image is **Immutable** (meaning it can never be changed), it is the ultimate "Single Source of Truth" in the DevOps world.

Think of it like a **Frozen Pizza**:
*   The **Image** is the frozen pizza in the box. It’s a snapshot of a pizza that has everything on it already. You can't change the toppings once it's frozen.
*   The **[[docker-container|Container]]** is the pizza after you put it in the oven. It is now a "living" thing you can eat.
*   No matter how many boxes of that same "Image" you buy, every single pizza will come out tasting exactly the same.

## The Secret Power: Layers

Docker images aren't just one big file. They are built in **Layers**, like a cake.
1.  **Level 1 (The Base):** A tiny **[[operating-system|Linux]]** system.
2.  **Level 2 (The Runtime):** Your language, like Python or Node.js.
3.  **Level 3 (The Code):** Your actual app code.
4.  **Level 4 (The Instructions):** "Run this app on Port 80."

**Why this is genius:** If you change your app's code (Level 3), Docker doesn't rebuild the entire image. It just replaces that one layer. This makes building and sharing images incredibly fast and efficient.

## FAQs

*1. Where do I keep my images?*
You store them in a **Registry**. The most famous one is **Docker Hub**. It’s like "GitHub for Images." You can "Push" your image up to the cloud and "Pull" it down onto any server in the world.

*2. How do I "make" an image?*
You write a **Dockerfile**. It is a simple text file that works like a shopping list: *"Start with Ubuntu. Install Python. Copy my files. Go!"* You run one command (`docker build`), and Docker turns that shopping list into a beautiful, ready-to-use Image.

### Further Reading

*   **The Result:** *[[docker-container|Docker Container Overview]]* (What happens when you run an image).
*   **The Boss:** *[[docker-overview|Docker Overview]]* (The big picture of container technology).
*   **The Hub:** *[Explore Docker Hub](https://hub.docker.com/)* (Find pre-made images for almost any app).
*   **Guide:** *[How to write a Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)* (Master the art of the "Recipe").
