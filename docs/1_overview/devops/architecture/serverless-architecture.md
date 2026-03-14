---
title: Serverless Architecture
tags: DevOps, Architecture, CloudComputing, Backend
---

# Serverless Architecture

"The Digital Taxi Service"—a high-tech model where you stop worrying about servers entirely. You throw your code into the cloud, it only "wakes up" when needed, and you pay absolutely nothing the rest of the time.

**Serverless** (or **FaaS - Functions as a Service**) is the ultimate evolution of cloud computing. Historically, you rented a server every month for a flat fee, even if nobody used it at 3:00 AM. In **Serverless**, you don't manage anything. You upload tiny snippets of code ("Functions"), and the cloud provider handles the rest.

Think of it as **Owning a Car vs. Using Uber**:
*   **Traditional Servers:** Like owning a car. You pay for insurance, maintenance, and parking whether you are driving or not.
*   **Serverless:** Like calling an Uber. You only call it the second you need to go somewhere. You pay for the exact mileage. Once you arrive, the taxi disappears and you stop paying.

## How it works: The "Event-Driven" World
In a serverless model (like **AWS Lambda**), your code is in a "deep sleep" until an **Event** wakes it up:
1.  **The Trigger:** A user uploads a profile picture.
2.  **The Flash-Build:** The cloud instantly sees the upload, finds an available server, loads your "Resizer" code, and runs it.
3.  **The Flash-Destroy:** The moment it's done (usually in milliseconds), the cloud kills that server instance.
4.  **The Bill:** You are billed ONLY for those 500 milliseconds. If nobody uploads a photo for a week, your bill is **$0.00**.

## Why it's "Magic" (and why it's hard)
*   **The Superpowers:** Zero Operations (no OS to patch), Infinite Scaling (it handles 10,000 requests as easily as one), and Extreme Savings.
*   **The Catch:** **The Cold Start.** If a function hasn't been used in a while, it takes a second or two to "wake up," which can feel like lag. Also, **Vendor Lock-In**—moving from AWS to Google is a massive headache once you're integrated.

## FAQs

*1. Are there actually "no servers"?*
**Of course there are servers.** They are just someone else's problem. "Serverless" means you—the developer—don't have to care about them anymore.

*2. Is this just Microservices?*
**It's "Microservices on Steroids."** Instead of a "Payment" service running 24/7 in a **[[docker-overview|Docker container]]**, you break it into 50 tiny "Functions" that only exist for the seconds a customer is clicking "Pay."

### Further Reading

*   **The Engine:** *[AWS Lambda (The tool that started it all)](https://aws.amazon.com/lambda/)*.
*   **The Rival:** *[[microservices-architecture|Microservices Architecture]]*.
*   **The Weakness:** *[What is a Cold Start?](https://www.cloudflare.com/learning/serverless/what-is-a-cold-start/)*.
*   **Deep Dive:** *[Serverless Architectures (Martin Fowler)](https://martinfowler.com/articles/serverless.html)*.
*   **Video:** [Serverless vs. Containers: Which one to choose?](https://www.youtube.com/watch?v=Fj-yV6O6uLo).
