---
title: CVSS (Common Vulnerability Scoring System)
tags: CyberSecurity, VulnerabilityManagement, Metrics
---

# CVSS (Common Vulnerability Scoring System)

"The Richter Scale for Cyberattacks" ,a universal scoring system from 0 to 10 that tells every security team exactly how much they should panic when a new bug is discovered.

If the **[[cve|CVE ID]]** is a bug's "Name," then **CVSS** is its "Fever Temperature." It tells security managers what to prioritize. When you have 10,000 potential security holes, you can’t fix them all at once. You use CVSS to find the "Tens" and fix them before lunch, leaving the "Ones" for later.

## The Severity Scoreboard
| Score Range | Severity | What it means |
| :--- | :--- | :--- |
| **0.0** | None | A bug that can't hurt anyone. |
| **0.1 - 3.9** | **Low** | Requires a lot of work for very little reward. Hackers usually won't bother. |
| **4.0 - 6.9** | **Medium** | A real threat, but difficult to pull off (requires luck or physical access). |
| **7.0 - 8.9** | **High** | **Danger Zone.** Hackers can easily steal data or crash your app. |
| **9.0 - 10.0** | **Critical** | **The Apocalypse.** Anyone on the internet can take over your company. **Patch immediately.** |

## How the Math works
A score is calculated based on three factors:
1.  **Exploitability:** Is it "Easy"? Can a 10-year-old do it by clicking a button?
2.  **Attack Vector:** Where is the hacker? Do they need to be at the desk (Low Score), or can they do it from a different country via the internet (High Score)?
3.  **The Impact (CIA):** Does the hacker just "see" a secret (**Confidentiality**), can they change your bank balance (**Integrity**), or can they turn the computer off (**Availability**)?

## FAQs

*1. Is a 10.0 selalu paling penting?*
**Usually, but context is King.** A "Critical 10.0" bug on a laptop that isn't even turned on is less dangerous than a "Medium 5.0" bug on your main bank server. Pros use "Environmental Scores" to adjust the math.

*2. Who "gives" the score?*
Usually the software company (like Microsoft) gives an initial score. Then, the **National Vulnerability Database (NVD)** reviews it and gives it an "Official" score that the rest of the world follows.

### Further Reading

*   **The Name:** *[[cve|CVE (The IDs attached to these scores)]]*.
*   **The Advisor:** *[[cisa|CISA (Tracking the most dangerous bugs)]]*.
*   **Try it:** [NVD CVSS Calculator (Create your own bug's score)](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator).
*   **Video:** [How to read and understand CVSS scores](https://www.youtube.com/watch?v=ORcvSkgdA58).
*   **Official Spec:** [First.org CVSS Standards](https://www.first.org/cvss/).
