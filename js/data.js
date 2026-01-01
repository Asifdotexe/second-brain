const wikiData = {
    "overview": {
        "title": "Overview",
        "items": [
            {
                "id": "ai",
                "title": "AI",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "agentic-ai",
                        "title": "Agentic AI",
                        "icon": "fas fa-brain",
                        "desc": "",
                        "tags": [
                            ""
                        ],
                        "content": "# Agentic AI\n"
                    },
                    {
                        "id": "open-model",
                        "title": "Open Model",
                        "icon": "fas fa-brain",
                        "desc": "",
                        "tags": [
                            ""
                        ],
                        "content": "# Open Model\n"
                    }
                ]
            },
            {
                "id": "cybersecurity",
                "title": "Cybersecurity",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "cve",
                        "title": "CVE",
                        "icon": "fas fa-lock",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "InformationSecurity",
                            "VulnerabilityManagement"
                        ],
                        "content": "# CVE: Common Vulnerabilities and Exposures\n\n### What is it?\nCVE stands for **Common Vulnerabilities and Exposures**; it is a standardized list that gives every known computer security flaw a unique \"name\" (ID number) so everyone can talk about it without confusion.\n\n<img src=\"https://www.picussecurity.com/hs-fs/hubfs/undefined-May-26-2023-01-36-17-1349-PM.png?width=593&height=411&name=undefined-May-26-2023-01-36-17-1349-PM.png\" alt=\"CVE Anatomy\"/>\n\n**A CVE ID always looks like this: `CVE-2025-12345`**\nCVE -> Standard List Marker\n2023 -> Year Assigned\n23397 -> Unique Bug ID\n\n## Further Reading\n\n* **[cve.mitre.org](https://www.cve.org/):** The official home of the CVE list. You can search for specific bugs here.\n* **[NVD (National Vulnerability Database)](https://nvd.nist.gov/):** The US government's repository that adds more details (like severity scores) to the standard CVE list.\n* **[CVSS Score](https://www.first.org/cvss/):** This is the *next* thing to learn. While CVE gives the bug a *name*, CVSS gives it a *score* (from 1 to 10) to tell you how dangerous it is.\n"
                    },
                    {
                        "id": "phishing",
                        "title": "Phishing",
                        "icon": "fas fa-lock",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "InformationSecurity",
                            "VulnerabilityManagement"
                        ],
                        "content": "# Phishing\n"
                    },
                    {
                        "id": "zero-day",
                        "title": "Zero Day",
                        "icon": "fas fa-lock",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "InformationSecurity",
                            "VulnerabilityManagement"
                        ],
                        "content": "# Zero-Day (Vulnerability & Exploit)\n\n### Formal Definition\nA \"Zero-Day\" refers to a security flaw in software that is unknown to the vendor or developer. The term implies that the developers have had **zero days** to fix or patch the issue because they were unaware of its existence before it was discovered or exploited by hackers.\n\n### The Analogy\n**The Invisible Backdoor**\nImagine a construction company builds a thousand identical houses with high-security steel doors. However, they accidentally leave a small, invisible gap under the back door that no one notices\u2014not even the builders.\n* **Zero-Day Vulnerability:** The invisible gap.\n* **Zero-Day Exploit:** A burglar discovering they can slide a wire under that gap to unlock the door.\n* **The Risk:** Since the builders don't know the gap exists, they haven't invented a door sweep to block it. Until they do, every house is defenseless against burglars who know the trick.\n\n### Visual Aid\n<img src=\"https://upload.wikimedia.org/wikipedia/commons/5/58/Vulnerability_timeline.png\" alt=\"Zero-Day Timeline\" style=\"height: 400px; width: 750px;\" />\n\n## Further Reading\n\n* **Trend Micro:** [What is a Zero-Day Attack?](https://www.trendmicro.com/vinfo/us/security/definition/zero-day-vulnerability)\n* **Symantec (Broadcom):** [Zero-day Vulnerabilities Explained](https://us.norton.com/internet-security-emerging-threats-how-do-zero-day-vulnerabilities-work-30-seconds.html)\n* **MITRE CVE:** [Common Vulnerabilities and Exposures](https://cve.mitre.org/) (The database where vulnerabilities are eventually listed)\n"
                    }
                ]
            },
            {
                "id": "iot",
                "title": "IOT",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "lidar",
                        "title": "LiDAR",
                        "icon": "fas fa-microchip",
                        "desc": "",
                        "tags": [
                            ""
                        ],
                        "content": ""
                    }
                ]
            }
        ]
    },
    "logs": {
        "title": "Logs",
        "items": [
            {
                "id": "2025",
                "title": "2025",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "Week 51",
                        "title": "Week 51",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 12 December - 19 December 2025.",
                        "tags": [
                            ""
                        ],
                        "content": "# Week 51\n\n## Cyber Security\n\n### WatchGuard Firebox Critical [[zero-day|Zero Day]] Vulnerability Exploited\n\n- Hackers are actively attacking a critical vulnerability ([[CVE]]-2025-14733) in WatchGuard Firebox firewalls\n- The flaw allows attackers to take complete control of the device remotely without needing a password.\n- CISA has added this to its \"Known Exploited Vulnerabilities\" catalog, mandating federal agencies to patch immediately; private companies are urged to do the same.\n\n*Read more about it: <link>*\n\n### Coupang CEO Resigns Following Massive Data Breach\n- Following a breach exposing 34 million customers, Coupang\u2019s CEO Park Dae-jun has resigned.\n- The company was also forced by regulators to delete a controversial \"liability exemption\" clause from its terms of service.\n- This sets a major precedent in South Korea and globally that tech giants cannot use fine print to absolve themselves of responsibility for poor security.\n\n*Read more about it: <link>*\n\n### Microsoft Teams Outage & Concurrent [[phishing|Phishing]] Wave\n- Microsoft Teams suffered a significant outage on December 19, leaving thousands of users unable to send messages.\n- Simultaneously, security researchers tracked a new wave of \"[[phishing|OAuth Phishing]]\" attacks targeting Microsoft 365 accounts.\n- Attackers are tricking users into granting malicious apps permission to access their email, rather than stealing passwords directly.\n\n*Read more about it: <link>*\n\n## Artificial Intelligence\n\n### NVIDIA Debuts \"Nemotron 3\" [[Open Model]] Family\n\n- NVIDIA released Nemotron 3, a new family of open AI models (Nano, Super, and Ultra) designed for [[agentic-ai|Agentic AI]].\n- The models are optimized to work together in multi-step workflows (e.g., one AI plans a task, another executes it).\n- This release provides developers with powerful, efficient tools to build complex AI assistants without relying solely on closed models like GPT-4.\n\n*Read more about it: <link>*\n\n## General Technology\n\n### [[LiDAR]] Pioneer Luminar Technologies Files for Bankruptcy\n- Luminar, a leading company in autonomous vehicle sensors (LiDAR), filed for Chapter 11 bankruptcy on December 15.\n- The company is selling its semiconductor division to Quantum Computing Inc. to raise cash.\n- This signals a major shakeup in the self-driving car industry, as automakers face high costs and slower-than-expected adoption of autonomous tech.\n"
                    },
                    {
                        "id": "Week 52",
                        "title": "Week 52",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 20 December - 26 December 2025.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "content": "# Week 52\n\n### CyberSecurity\n\n### Artificial Intelligence\n\n### General Technology\n"
                    }
                ]
            },
            {
                "id": "2026",
                "title": "2026",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "Week 1",
                        "title": "Week 1",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 27 December 2025 - 3 December 2026.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "content": "# Week 52\n\n### CyberSecurity\n\n### Artificial Intelligence\n\n### General Technology\n"
                    }
                ]
            }
        ]
    }
};