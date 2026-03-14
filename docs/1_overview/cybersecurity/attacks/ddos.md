---
title: DDoS (Distributed Denial of Service)
tags: Cybersecurity, Networking, Attacks
---

# DDoS

"The Digital Crowd"—the act of hiring a thousand people to stand in the doorway of a coffee shop—not to buy anything, but simply to block real customers from getting inside.

A **DDoS Attack** is purely about **Obstruction**. Unlike a "hack" where someone steals your data, the goal of a DDoS is to crash a website by overwhelming it with a massive flood of fake traffic. It’s the "Distributed" part that makes it lethal—the attack isn't coming from one place; it’s coming from millions of compromised devices (a **[[botnets|Botnet]]**) spread across the entire globe.

Think of it like **A Traffic Jam on Purpose**:
*   **Normal Traffic:** You and other customers driving to a store.
*   **DoS (Denial of Service):** One person parking their truck across the road. (Easy for the police to tow).
*   **DDoS (Distributed):** The attacker pays 5,000 random people to drive their cars to that same street and just stop. They aren't doing anything illegal; they are just "taking up space." The police can't arrest everyone, and the real customers eventually give up and go home.

## Key Characteristics
1.  **Strength in Numbers:** By using a **[[botnets|Botnet]]** (which can include smart fridges and webcams), the attacker hides their identity and makes it nearly impossible to stop the attack by just "blocking one person."
2.  **Resource Exhaustion:** The attack chokes the website's "lungs" (its network bandwidth) or its "brain" (its processing power) until it freezes and dies.
3.  **The Smokescreen:** Often, hackers use a loud, noisy DDoS attack to distract the security team while they quietly sneak in through the back door to steal secrets.

## FAQs

*1. Is my computer part of a DDoS right now?*
**Possibly.** Thousands of people are part of a botnet without ever knowing it. Your laptop might be running fine, but in the background, it’s using 2% of its power to "ping" a target for a hacker. If your fan is always on or your internet feels slow, you might be a "Zombie soldier."

*2. How do websites survive?*
They use a "Digital Bouncer" like **Cloudflare**. These services stand in front of the website and check the "ID" of every visitor. They can instantly tell the difference between a bored botnet car and a real customer, letting the customer in while dumping the bot's request into the trash.

### Further Reading

*   **The Army:** *[[botnets|Botnets Overview]]*.
*   **The Tool:** *[[loic|LOIC (The Ion Cannon)]]* (A famous DDoS tool).
*   **Live Map:** [Watch actual DDoS attacks happen right now](https://horizon.netscout.com/).
*   **Article:** *[How Cloudflare Filter DDoS Attacks](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)*.
