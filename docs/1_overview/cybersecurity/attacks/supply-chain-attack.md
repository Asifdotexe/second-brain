---
title: Supply Chain Attack
tags: CyberSecurity, CyberAttack, SupplyChainAttack
---

# Supply Chain Attack

"The Poisoned Well" ,instead of trying to kick down the front door of a high-security building, a hacker simply poisons the coffee being delivered to the office. Every employee who drinks it gets sick, and the "front door" becomes irrelevant.

A **Supply Chain Attack** targets a company’s **trusted vendors** instead of targeting the company itself. Because large companies (like banks or tech giants) have billion-dollar security teams, they are very hard to hack directly. So, hackers target the smaller, less-secure company that provides them with a service. Once they infect the "supplier," they can hitch a ride into the big company’s network through an official software update or a trusted piece of hardware.

Think of it like **A Home Security System**:
*   You have the best alarm, the strongest locks, and a guard dog.
*   But you order a pizza.
*   The hacker doesn't break into your house; they "hack" the pizza place and put a sleep-inducing chemical in your pizza.
*   You eat the pizza, you fall asleep, and the hacker walks in through the front door using your own keys.

## The 3 Most Dangerous Flavors
1.  **Software Upstream:** The attacker breaks into a software company (like Microsoft or SolarWinds) and hides [[malware|Malware]] inside their "official" update. Every customer who clicks "Update Now" is automatically infected.
2.  **Hardware Tampering:** Malicious chips or "backdoors" are hidden inside server parts or network routers at the factory before they are even shipped to the customer.
3.  **Typosquatting:** A hacker creates a code library with a name nearly identical to a popular one (e.g., `requessts` instead of `requests`). Busy developers accidentally download the "poison" version and build it into their apps.

## FAQs

*1. Why are these so hard to stop?*
**Authorized Trust.** In a supply chain attack, the malware is coming from an **official** server. It’s like a border agent letting a smuggler through because the smuggler is driving an official police car.

*2. What is an "SBOM"?*
Companies now require a **Software Bill of Materials (SBOM)** ,essentially a list of "ingredients" for software ,so they know exactly where every single line of code came from and who wrote it.

### Further Reading

*   **The Blueprint:** *[The SolarWinds Orion Hack Explained](https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know)*.
*   **The Backdoor:** *[How a simple HVAC vendor led to the Target data breach](https://redriver.com/security/target-data-breach)*.
*   **Technical Defense:** *[CISA Guidelines for Supply Chain Security](https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508.pdf)*.
*   **The Hub:** *[[cybersecurity-foundations|Risk Management Strategy]]*.
