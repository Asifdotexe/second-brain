---
title: PCI DSS (Payment Card Industry Data Security Standard)
tags: CyberSecurity, Governance, Compliance, Finance
---

# PCI DSS

"The Security of the Swipe"—strict rules created by the world’s biggest credit card brands to ensure that your card number doesn't end up on a hacker's "shopping list."

**PCI DSS** is unique because it isn't a government law. It is a private "contract" created by Visa, Mastercard, AMEX, and Discover. If a business wants to accept cards, they **must** follow these rules. If they don't, the banks can ban them from taking payments entirely.

Think of it as **A Safety Inspector for a Restaurant**:
*   The inspector ensures the kitchen is clean and the food is safe.
*   PCI DSS ensures the "Digital Kitchen" where card numbers are handled is secure and "un-hackable."

## The 5 Golden Rules of the Swipe
1.  **Build a Fortress:** You must use a **[[firewalls|Firewall]]** and **change default passwords**. (Many hacks happen simply because people left the password as *"admin"*).
2.  **Scramble the Data:** Whenever a credit card number is "sitting" on a server or "traveling" the internet, it must be **[[cryptography|Encrypted]]**.
3.  **Antivirus Alarms:** Every computer that touches a card must run updated **[[antivirus|Antivirus]]** to catch spyware before it can "see" your card number.
4.  **"Need-to-Know":** A janitor or a marketing person doesn't need to see your card number. Only a few specific people should have the "Key."
5.  **Regular Testing:** You can't set it and forget it. Businesses must run **[[pen-testing|Pen-Tests]]** every few months to ensure no new holes have appeared.

## FAQs

*1. What if a company fails?*
**They get fined.** They don't go to prison, but they get hit with "Non-Compliance Fees" (often up to $100,000 *per month*). If they still don't fix it, they lose the ability to take credit cards forever.

*2. Is it only for websites?*
**No.** It applies to **everything** that touches a card: the physical swiping machines at the store, paper receipts in the office, and the phone lines in a call center.

### Further Reading

*   **The Tech:** *[[cryptography|How Encryption keeps cards safe]]*.
*   **The Test:** *[[pen-testing|How to test your pay systems]]*.
*   **Official:** *[PCI Security Standards Council Official Site](https://www.pcisecuritystandards.org/)*.
*   **Career:** *[What is a QSA? (The people who check the security)](https://www.itgovernanceusa.com/what-is-a-qsa)*.
*   **Video:** [PCI DSS for Beginners](https://www.youtube.com/watch?v=ORcvSkgdA58).
