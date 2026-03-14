---
title: Kubernetes Node
tags: DevOps, Containerization, Kubernetes
---

# Kubernetes Node

The "Worker Drones"—the actual, physical (or virtual) muscle that does the heavy lifting. A Node is a single machine where your code lives, breathes, and runs.

A **Kubernetes Node** is a "Worker" in the cluster. While the **Kubernetes Control Plane** is the "Master Brain" that makes decisions, the **Node** is the "Hand" that does the work. When you tell Kubernetes to run an app, the Brain looks at all its available Nodes, finds the one that isn't too tired (has enough CPU and RAM), and tells it: "Run this app!"

Think of a Node like a **Massive Cargo Ship**:
*   The ship provides the engine, the fuel, and the deck space.
*   It doesn't care what's inside the shipping containers (**[[kubernetes-pod|Pods]]**).
*   Its only job is to provide the power and the environment to keep those containers moving safely across the digital ocean.

## What is Inside a Node?

Every Node has a few "Secret Agents" running on it to keep things moving:
1.  **The Kubelet (The Captain):** This is a tiny agent that lives on every node. It’s always on the phone with the "Master Brain." If the Brain says "Run a new container," the Kubelet starts it. If a container dies, the Kubelet reports it to the Brain immediately.
2.  **Kube-Proxy (The Switchboard):** This agent handles the network. If someone from the internet wants to visit your app, Kube-proxy makes sure the request finds the right container on that specific machine.
3.  **The Container Runtime (The Engine):** This is the piece of software (like **[[docker-overview|Docker]]** or `containerd`) that actually does the work of pulling the code and running it.

## FAQs

*1. How many Nodes do I need?*
In a real production environment, you need **multiple Nodes**. Why? Because physical computers fail. If your app is running on only one Node and that server's power supply explodes, your website is gone. If you have 3 Nodes, Kubernetes will simply say, "Oops, Node A is dead. Let's move all the apps to Node B and C!"

*2. Where do Nodes "live"?*
They can be anywhere! They can be **Bare-Metal** (physical servers sitting in a basement) or **Virtual Machines** rented from a cloud provider like **AWS (EC2)**, **Google Cloud**, or **Azure**.

### Further Reading

*   **The Brain:** *[[kubernetes-overview|Kubernetes Overview]]* (The "Control Plane" that manages these workers).
*   **The Cargo:** *[[kubernetes-pod|What is a Kubernetes Pod?]]* (The things that sit on top of the node).
*   **The Container:** *[[docker-overview|Docker Overview]]* (The engine that runs the code).
*   **Doc:** *[Kubernetes Architecture: Nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)* (The official technical breakdown).
