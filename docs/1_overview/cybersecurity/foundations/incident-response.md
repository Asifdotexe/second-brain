---
title: Incident Response (IR)
tags: CyberSecurity, DefensiveSecurity, SOC
---

# Incident Response (IR)

"Digital Firefighting"—the step-by-step "Battle Plan" used by security teams to stop a hack before it burns the entire company down.

In cybersecurity, it’s not a matter of *if* you will get hacked, but *when*. **Incident Response** is what happens when the alarm finally goes off. Instead of panicking, the team follows a playbook designed to save the data, preserve the evidence, and get the business back online as fast as possible.

Think of it like **A Hospital Emergency Room**:
*   When a trauma alarm rings, there is no shouting or confusion.
*   Everyone has a specific role (The "Triage," The "Surgeon," The "Nurse").
*   They follow a checklist because every second of delay costs the "patient" (the company) money and reputation.

## The 4 Stages of the "Battle Plan"
1.  **Preparation (The Fire Station):** Hiring the team and buying the tools *before* anything happens. If you are trying to find the password to your firewall while your servers are exploding, you have already lost.
2.  **Detection & Analysis (The Smoke Detector):** Investigating an alert to see if it’s a "Real Fire" or just a false alarm (like an employee legitmately working at 3 AM from a hotel).
3.  **Containment & Eradication (Putting Out the Fire):**
    *   **Containment:** Cut off the burning room! (Disconnect the infected computer from the network).
    *   **Eradication:** Delete the virus and close the hole the hacker used.
4.  **Post-Incident Activity (The Debrief):** Meeting a week later to ask: *"How did they get in? Why did our alarms fail? How do we make sure this never happens again?"*

## FAQs

*1. Who is on the "Firefighting" team?*
The team is called the **CSIRT** (Computer Security Incident Response Team). It isn't just hackers; it includes lawyers (to handle privacy laws), PR experts (to talk to the press), and management.

*2. How do we measure success?*
We use **MTTR** (Mean Time To Respond). The goal of every world-class security team is to shorten the gap between the hack happening and the hack being stopped.

### Further Reading

*   **The Hub:** *[[soc|Security Operations Center]]* (Where the team lives).
*   **The Tool:** *[[siem|SIEM]]* (The digital smoke detectors).
*   **The Recipe:** *[[playbooks|Security Playbooks]]* (Step-by-step guides for specific attacks).
*   **Official Guide:** *[NIST Computer Security Incident Handling Guide](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)*.
*   **Article:** *[The 6 Phases of Incident Response](https://www.sans.org/white-papers/33901/)* (SANS Institute).
