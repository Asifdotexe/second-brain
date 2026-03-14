---
title: WannaCry
tags: CyberSecurity, Ransomware, Worm
---

# WannaCry

"The Digital Pandemic"—a global ransomware crisis that held the world hostage in a single weekend. It proved that code could shut down national hospitals and paralyze global trade.

**WannaCry** (May 2017) was a world-changing **[[ransomware|Ransomware]]** attack. Within 48 hours, it infected 200,000 computers in 150 countries. It hit the UK's National Health Service, Telefónica, and even FedEx. It wasn't just scary because it locked files, but because it was **"Wormable"**—using a stolen NSA weapon called **[[eternalblue|EternalBlue]]** to jump from computer to computer automatically. If your PC was on the internet and unpatched, you were next.

## The Human Impact
This wasn't just about "broken computers":
*   **UK Hospitals (NHS):** The most famous victim. WannaCry locked patient records and operating schedules. Doctors had to cancel surgeries, ambulances were diverted, and hospitals were forced to use paper and pencil. It literally put lives at risk.
*   **Global Gridlock:** Factories in France stopped. Trains in Germany showed the ransom note on arrival boards. Banks in India were shut down.

## The Accidental Hero: Marcus Hutchins
The outbreak was stopped by a 22-year-old researcher in his bedroom. 
*   **The "Kill Switch":** Marcus noticed the virus checked a specific gibberish website before attacking. If the site didn't exist, it attacked.
*   **The $10 Fix:** Marcus bought the domain for **$10**, effectively telling the virus "Stop." The global attack shut down instantly. The hackers had likely included the switch as a "Panic Button" in case they lost control.

## FAQs

*1. Am I at risk today?*
**No, as long as you update.** Microsoft released the "vaccine" (patch MS17-010) before the attack even started. WannaCry only succeeded because so many companies were lazy about updating their software.

*2. Who did it?*
The US government and Microsoft have officially blamed the **Lazarus Group** (North Korean state-sponsored hackers).

### Further Reading

*   **The Engine:** *[[eternalblue|EternalBlue (The stolen NSA weapon)]]*.
*   **The Category:** *[[ransomware|Ransomware Overview]]*.
*   **Technical:** *[Microsoft's MS17-010 Security Update](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010)*.
*   **Story:** *[The Hacker Who Saved the Internet](https://www.wired.com/story/confessions-marcus-hutchins-hacker-who-saved-the-internet/)*.
*   **Video:** *[WannaCry: The Ransomware that Paralyzed the World](https://www.youtube.com/watch?v=n7pTz1S7Ppw)*.
