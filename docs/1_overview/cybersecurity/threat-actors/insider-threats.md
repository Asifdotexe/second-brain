---
title: Insider Threats
tags: CyberSecurity, ThreatActors, RiskManagement
---

# Insider Threats

"The Enemy Within"—a security risk that comes from the people a company trusts the most: its own employees, contractors, and partners who already have the "Keys to the Kingdom."

In movies, the "Hacker" is always a stranger in a distant land. In reality, the most destructive breaches are often caused by someone sitting right inside the office. An **Insider Threat** is dangerous because they don't have to "Break In"—they are already inside the house.

Think of it like **A Home Security System**:
*   You have locked the doors and set the alarm for burglars.
*   But none of that matters if your own roommate decides to steal your jewelry or set the house on fire.
*   They already have the door code and the Wi-Fi password.

## The 3 Faces of the Insider
1.  **The Malicious Insider (The Villain):** This person is angry (maybe they were fired) or they are being paid by a competitor. They intentionally use their **[[root-access|Admin Powers]]** to steal secrets or sabotage the company.
2.  **The Negligent Insider (The Mistake-Maker):** The most common type. This is someone who accidentally clicks a **[[phishing|Phishing]]** link or loses their unencrypted laptop at an airport. They didn't *mean* to hurt the company, but the damage is the same.
3.  **The Compromised Insider (The Pawn):** This is someone whose password was stolen by a hacker. The hacker is now "driving" the employee's account like a puppet. The employee has no idea they are being used to rob their own company.

## How do we stop them?
Since we can't just "fire everyone," we use a strategy of **[[zero-trust|Zero Trust]]**:
*   **[[least-privilege|Least Privilege]]:** If you work in Marketing, you shouldn't have the password to the Payroll system. You only get the "Keys" you absolutely need to do your job.
*   **Behavioral Monitoring:** We use **[[siem|SIEM tools]]** to watch for weird behavior. If a quiet employee suddenly downloads 50,000 files at 3:00 AM on a Sunday, the system sounds an alarm.

## FAQs

*1. Are "Whistleblowers" insider threats?*
**Technically, yes.** From the company's perspective, anyone who bypasses security to move documents without permission is a threat. However, the public might see them as heroes (like Edward Snowden).

*2. How do I protect my small business?*
**Offboarding.** As soon as someone quits or is fired, their keycard must be deactivated and their digital accounts must be "killed" instantly. Never let a disgruntled former employee keep their "Keys."

### Further Reading

*   **The Defense:** *[[least-privilege|The Principle of Least Privilege]]*.
*   **The Vault:** *[[beyondtrust|BeyondTrust (Managing Admin rights)]]*.
*   **The Monitor:** *[[siem|SIEM Overview]]*.
*   **Official:** *[CISA's Guide to Insider Threat Mitigation](https://www.cisa.gov/insider-threat-mitigation)*.
*   **Article:** *[Real World Insider Threat Examples](https://www.strongdm.com/blog/insider-threat-examples)*.
