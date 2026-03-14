---
title: Terraform Overview
tags: DevOps, Infrastructure, Cloud, Terraform
---

# Terraform Overview

The "Universal Architect" ,a powerful tool that speaks the language of every cloud provider on Earth. You hand it one single plan, and it builds your world for you, whether you’re using Amazon, Google, Microsoft, or all three at once.

**Terraform** is the world’s most popular **[[infrastructure-as-code|Infrastructure as Code (IaC)]]** tool. Before Terraform, if you used Amazon Web Services (AWS) and Google Cloud, you had to learn two completely different languages and click two completely different sets of buttons to build your servers.

Terraform gives you a **Single Language** (called HCL) to rule them all. You write your desire in a `.tf` file, and Terraform does the hard work of talking to the different cloud companies to make it happen.

Think of Terraform like a **Universal Remote Control**:
*   Instead of having 10 different remotes for your TV, your soundbar, your lights, and your AC, you have one remote that controls everything.
*   You press "Movie Mode," and the remote knows exactly how to talk to each device to dim the lights and start the movie.

## The 3-Step Terraform Workflow

1.  **Write:** You write a simple text file defining what you want. *"I want an AWS server named 'WebServer' with a 50GB drive."*
2.  **Plan:** You run `terraform plan`. This is the **"Dry Run."** Terraform shows you exactly what it intends to do. It might say, *"I'm going to create 1 server and 1 database, are you sure?"* This prevents you from making expensive mistakes.
3.  **Apply:** You run `terraform apply`. Terraform reaches out into the world and builds your infrastructure. After it's done, it creates a **[[terraform-state|State File]]** to remember everything it did.

## FAQs

*1. Is it only for servers?*
Not even close! Terraform can manage **Anything** that has an API. People have used Terraform to manage their Spotify playlists, order Domino's Pizza, and even manage their home's smart lightbulbs. If it’s on the internet, Terraform can probably control it.

*2. What makes it better than other tools?*
It is **"Cloud-Agnostic."** Most other tools (like AWS CloudFormation) only work for one company. Terraform is the "Swiss Army Knife" ,it works everywhere, from massive giants like Microsoft to small providers like DigitalOcean.

### Further Reading

*   **The Engine:** *[[terraform-providers|Terraform Providers]]* (The "translators" that allow Terraform to talk to different clouds).
*   **The Memory:** *[[terraform-state|Terraform State]]* (How Terraform remembers what it built).
*   **The Foundation:** *[[infrastructure-as-code|Infrastructure as Code Overview]]* (The philosophy behind Terraform).
*   **Video:** *[Terraform in 100 Seconds](https://www.youtube.com/watch?v=tomUWcQ0P3k)* (The fastest way to understand the workflow).
*   **Official Docs:** *[HashiCorp Developer Portal](https://developer.hashicorp.com/terraform/intro)* (The source of all Terraform knowledge).
