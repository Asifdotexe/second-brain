---
title: ATM Jackpotting
tags: CyberSecurity, Malware, PhysicalSecurity, Finance
---

# ATM Jackpotting

"The Digital Bank Robbery"—the violent collision of hacking and crime, where a criminal tricks an ATM into literally "vomiting" its entire cash reserve onto the floor in seconds.

**ATM Jackpotting** is a "cyber-physical" attack. Instead of trying to hack the bank’s secure network from across the world, the attacker walks right up to the machine in person. They use a drill or a crowbar to reach the machine's hidden USB ports, plug in a rogue laptop, and inject malicious code directly into the ATM's brain.

Think of it like **A "Bypassed" Cashier**:
*   The hacker doesn't use a stolen card or a PIN.
*   They talk directly to the hardware that moves the gears.
*   The code sends a "Manual Override" command, causing the machine to enter "Jackpot Mode"—spitting out every $20 bill it has until it's empty.

## Key Characteristics
*   **Physical Compromise:** Usually involves drilling into the machine or picking the lock on the top "service" panel to reach the internal cables.
*   **Network Bypass:** The attack doesn't care about your bank balance because it isn't talking to the bank; it’s talking directly to the gears that move the money.
*   **Speed:** A coordinated crew can empty a fully loaded ATM—potentially $100,000—in less than five minutes.

## FAQs

*1. Is my personal bank account at risk?*
**Not directly.** In a jackpotting attack, the hacker is "robbing" the physical cash box inside the machine, not stealing individual customer balances. However, if these attacks become common, banks will shut down ATMs in your area to protect their cash.

*2. Why don't banks just glue the USB ports shut?*
Because service technicians need those ports to update the software and fix bugs. Instead, modern banks use **Firmware [[encryption|Encryption]]**, which ensures the cash dispenser will only listen to commands that have a secret "handshake" (code) from the bank’s official software.

### Further Reading

*   **The Fuel:** *[[malware|Malware Overview]]*.
*   **The Warning:** *[FBI Alert on Nationwide ATM Jackpotting](https://www.fbi.gov/news/press-releases/fbi-warns-of-nationwide-atm-jackpotting-campaign)*.
*   **The Anatomy:** *[How Jackpotting Malware Works](https://www.kaspersky.com/blog/atm-jackpotting/21151/)*.
*   **The Hub:** *[[physical-security|Security of the Physical World]]*.
