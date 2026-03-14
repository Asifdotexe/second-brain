---
title: Morris Worm
tags: Malware, Worm, CyberSecurityHistory
---

# Morris Worm

"The First Warning Shot" ,an intellectual experiment that accidentally broke the internet. It turned a student's curiosity into a global crisis that proved how fragile our new digital world really was.

Released on November 2, 1988, the **Morris Worm** was the world's first major internet-scale "outbreak." Created by 23-year-old student Robert Tappan Morris, it wasn't designed to steal data. He just wanted to "gauge the size of the internet" by counting how many computers were connected. However, a tiny mathematical error transformed his "census taker" into a digital plague.

Think of it like **A Census Taker who forgot to stop knocking**:
*   **The Plan:** The worm would ask a computer: *"Are you already infected?"* If the answer was yes, the worm was supposed to move on.
*   **The Bug:** Morris was afraid admins would trick the worm into leaving, so he told the worm to ignore the "Yes" answer 1 out of 7 times and infect it anyway.
*   **The Crash:** This created an infinite loop. A single computer would end up with thousands of copies of the worm running at once, using up 100% of its power. Within hours, 10% of the entire internet (about 6,000 computers) was paralyzed.

## Why it changed the world
*   **The First Conviction:** Robert Morris became the first person convicted under the new "Computer Fraud and Abuse Act."
*   **Created the CERT:** The chaos led directly to the creation of the first **Computer Emergency Response Team (CERT)** ,the "firefighters" of the internet.
*   **The End of Innocence:** In 1988, the internet was a small community of scientists who all trusted each other. The Morris Worm ended that era of trust forever.

## FAQs

*1. Was he a criminal?*
**More like a reckless scientist.** He didn't include any code to delete files. He even tried to send anonymous instructions on how to stop the worm, but the internet was so clogged that his email couldn't get through!

*2. How do we stop worms today?*
**Firewalls and Passwords.** Back then, many computers didn't even have passwords. Today, we use **[[firewalls|Firewalls]]** and **[[antivirus|Antivirus]]** to keep these "auto-spreading" bugs away.

### Further Reading

*   **The Category:** *[[worms|Computer Worms Overview]]*.
*   **The History:** *[The FBI: The Morris Worm 30 Years Later](https://www.fbi.gov/news/stories/morris-worm-30-years-since-first-major-attack-on-internet-110218)*.
*   **Technical:** *[How the 1-out-of-7 bug worked (Computerphile)](https://www.youtube.com/watch?v=Getj6f9y8Gk)*.
*   **Article:** *[The Original Sin of the Internet](https://www.newyorker.com/magazine/2018/11/05/the-man-who-brought-the-internet-to-its-knees)*.
