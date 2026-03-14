---
title: EternalBlue
tags: CyberSecurity, Exploit, NSA
---

# EternalBlue

"The Stolen Master Key" ,a terrifying software weapon created by the NSA that fell into the hands of criminals, leading to the most destructive cyberattacks in history.

**EternalBlue** is a sophisticated digital "exploit" created by the US National Security Agency for espionage. It was kept secret for years until a hacker group called "The Shadow Brokers" stole it and leaked it onto the internet in 2017. Suddenly, every criminal and hostile government had access to a military-grade weapon that could break into almost any Windows PC in the world ,no password required.

## How the Breaching Works
EternalBlue targets a flaw in how Windows computers "talk" to each other to share files (a system called **SMB**).
1.  **The Trick:** It sends a specially crafted, confusing message to a computer.
2.  **The Error:** This message forces the computer to make a mathematical mistake, allowing the attacker to inject their own code directly into the computer's "Brain" (the **Kernel**).
3.  **The Result:** The hacker gets "Root" access (total control). They can install **[[ransomware|Ransomware]]** or turn the machine into a spy device.

## Why it's the scariest word in Security
EternalBlue is **"Wormable."** 
If one single computer in a hospital or factory gets hit, the virus automatically scans and attacks every other computer on the network. It spreads like a biological plague, jumping from machine to machine with zero human interaction.

## The Disasters
EternalBlue was the "engine" that powered the two most destructive attacks ever:
*   **[[wanna-cry|WannaCry]]**: Paralyzed the UK's National Health Service.
*   **[[notpetya|NotPetya]]**: Caused over $10 billion in damage to global shipping and banks.

## FAQs

*1. Am I at risk?*
**If you update your Windows, you are safe.** Microsoft fixed the hole in March 2017. However, millions of old machines in factories, hospitals, and power plants still run outdated software, and EternalBlue is still "hunting" for them today.

*2. Why did the NSA make this?*
**To spy on enemies.** The controversy is that the government often chooses to **keep security holes a secret** so they can use them, rather than telling the computer company to fix them and keep everyone safe.

### Further Reading

*   **The Fallout:** *[[wanna-cry|The WannaCry Pandemic]]*.
*   **The Cost:** *[[notpetya|The $10 Billion Wiper]]*.
*   **The Story:** *[Wired: How EternalBlue Got Stolen from the NSA](https://www.wired.com/story/eternalblue-leaked-nsa-spy-tool-hacker-history/)*.
*   **Video:** *[How EternalBlue Works (Technical Breakdown)](https://www.youtube.com/watch?v=ORcvSkgdA58)*.
*   **Official:** *[Microsoft's fix for EternalBlue](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010)*.
