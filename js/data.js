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
                        "icon": "fas fa-robot",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "AgenticAI"
                        ],
                        "content": "# Agentic AI\n\n### In a nutshell\nAgentic AI is an artificial intelligence that doesn't just answer your questions; it actively uses tools and takes steps to complete goals for you.\n\n**Agentic AI** has **Agency**. It is given a broad goal (e.g., \"Plan and book my vacation\"), and it figures out the necessary sub-tasks, executes them one by one, checks its own work, and keeps going until the job is done. It is an AI with \"hands\" (tools) and a \"brain\" (planning capabilities).\n\n### How it Works\n\nTo understand Agentic AI, we break it down into a loop of three core components:\n\n1. **Perception (The Input):** The agent observes the current state of things.\n2. **Reasoning (The Brain):** It decides what to do next based on the goal.\n3. **Action (The Tools):** It executes a command (searching the web, running code, sending an email).\n\n<img src=\"https://d3a7ykdi65m4cy.cloudfront.net/en/s3fs-public/inline-images/805x540_How-Does-Agentic-AI-Work.png\" alt=\"Agentic AI Flow\"/>\n\n### How the Agent thinks\n<details>\n<summary><strong>Click to expand</strong></summary>\n\nOne of the most popular methods for Agentic AI is called **ReAct** (Reasoning + Acting).\n\n1.  **Thought:** \"The user wants to buy a stock. First, I need to check the current price.\"\n2.  **Action:** *Trigger Tool: Stock_Market_API(Symbol='AAPL')*\n3.  **Observation:** \"The API returned $150.00.\"\n4.  **Thought:** \"That is within the user's budget. I should execute the buy order now.\"\n5.  **Action:** *Trigger Tool: Brokerage_Buy(Symbol='AAPL', Qty=1)*\n\n</details>\n\n---\n<br>\n\n\n### The Analogy: Librarian vs. Assistant\n\n| Feature | Standard AI (Generative) | Agentic AI |\n| :--- | :--- | :--- |\n| **The Persona** | Librarian | Assistant |\n| **Interaction** | You ask: *\"How do I bake a cake?\"* <br> They hand you a recipe book. | You ask: *\"I need a cake for Saturday.\"* <br> They find a bakery, order it, and pay for it. |\n| **Capability** | Knowledge Retrieval *(It knows information.)* | Task Execution *(It performs actions.)* |\n| **Autonomy** | Low. Needs a prompt for every output. | High. Can loop multiple times on one prompt. |\n\n---\n<br>\n\n### Further Reading\n\n* **Concept:** *\u201c[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/pdf/2210.03629)\u201d* (The foundational paper).\n* **Frameworks to try:** [LangChain](https://www.langchain.com/) or [AutoGPT](https://news.agpt.co/).\n* **Essay:** *\u201c[The rise of Agentic workflows](https://learn.deeplearning.ai/courses/agentic-ai/information)\u201d* by Andrew Ng.\n"
                    },
                    {
                        "id": "computer-vision",
                        "title": "Computer Vision",
                        "icon": "fas fa-eye",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "ComputerVision",
                            "NeuralNetworks"
                        ],
                        "content": "# Computer Vision\n\n## What is Computer Vision?\nComputer Vision is the science of teaching computers to \"see\" images and understand them just like a human brain does.\n\nIt is a field of Artificial Intelligence (AI) that enables computers to derive information from digital images, videos, and other visual inputs.\n\n<img src=\"https://images.prismic.io/turing/65981166531ac2845a272a03_How_computer_vision_works_7a55c421bf.webp?auto=format,compress\" alt=\"Agentic AI Flow\" style=\"width: 500px; height: auto;\"/>\n\n## Further Reading & Resources\n\n* **Watch:** [*How Computers See* by TED-Ed (YouTube)](https://www.youtube.com/watch?v=XS2UWYuh5u0).\n* **Learn:** \"[CS231n: Convolutional Neural Networks for Visual Recognition](https://cs231n.stanford.edu/2020/)\" (Stanford University Course Notes - highly technical but the gold standard).\n* **Try:** [Google's \"Teachable Machine\"](https://teachablemachine.withgoogle.com/) (A web tool where you can train your own computer vision model in minutes without coding).\n"
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
                "id": "general",
                "title": "General",
                "icon": "fas fa-folder",
                "desc": "",
                "children": [
                    {
                        "id": "disksat",
                        "title": "DiskSat (Disk Satellite)",
                        "icon": "fas fa-satellite",
                        "desc": "",
                        "tags": [
                            "Space",
                            "Satellite"
                        ],
                        "content": "# DiskSat (Disk Satellite)\n"
                    },
                    {
                        "id": "evtol",
                        "title": "eVTOL (Electric Vertical Take-Off and Landing)",
                        "icon": "fas fa-helicopter",
                        "desc": "",
                        "tags": [
                            "Aviation",
                            "SelfDriving",
                            "Electric"
                        ],
                        "content": "# eVTOL (Electric Vertical Take-Off and Landing)\n"
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
                        "content": "# LiDAR (Light Detection and Ranging)\n"
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
                            "WeeklyUpdate",
                            "CyberSecurity",
                            "ArtificialIntelligence",
                            "Space",
                            "IOT"
                        ],
                        "content": "# Week 51\n\n## Cyber Security\n\n### WatchGuard Firebox Critical [[zero-day|Zero Day]] Vulnerability Exploited\n\n- Hackers are actively attacking a critical vulnerability ([[CVE]]-2025-14733) in WatchGuard Firebox firewalls\n- The flaw allows attackers to take complete control of the device remotely without needing a password.\n- CISA has added this to its \"Known Exploited Vulnerabilities\" catalog, mandating federal agencies to patch immediately; private companies are urged to do the same.\n\n*Read more about it: https://www.cisa.gov/news-events/alerts/2025/12/19/cisa-adds-one-known-exploited-vulnerability-catalog*\n\n\n---\n<br>\n\n### Coupang CEO Resigns Following Massive Data Breach\n- Following a breach exposing 34 million customers, Coupang\u2019s CEO Park Dae-jun has resigned.\n- The company was also forced by regulators to delete a controversial \"liability exemption\" clause from its terms of service.\n- This sets a major precedent in South Korea and globally that tech giants cannot use fine print to absolve themselves of responsibility for poor security.\n\n*Read more about it: https://koreajoongangdaily.joins.com/news/2025-12-19/business/industry/Coupang-removes-clause-exempting-it-from-hacking-liability-after-order-from-data-protection-agency/2482115*\n\n---\n<br>\n\n### Microsoft Teams Outage & Concurrent [[phishing|Phishing]] Wave\n- Microsoft Teams suffered a significant outage on December 19, leaving thousands of users unable to send messages.\n- Simultaneously, security researchers tracked a new wave of \"[[phishing|OAuth Phishing]]\" attacks targeting Microsoft 365 accounts.\n- Attackers are tricking users into granting malicious apps permission to access their email, rather than stealing passwords directly.\n\n*Read more about it: https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-teams-is-down-and-messages-are-delayed/*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### NVIDIA Debuts \"Nemotron 3\" [[Open Model]] Family\n\n- NVIDIA released Nemotron 3, a new family of open AI models (Nano, Super, and Ultra) designed for [[agentic-ai|Agentic AI]].\n- The models are optimized to work together in multi-step workflows (e.g., one AI plans a task, another executes it).\n- This release provides developers with powerful, efficient tools to build complex AI assistants without relying solely on closed models like GPT-4.\n\n*Read more about it: https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models*\n\n---\n<br>\n\n## General Technology\n\n### [[LiDAR]] Pioneer Luminar Technologies Files for Bankruptcy\n- Luminar, a leading company in autonomous vehicle sensors (LiDAR), filed for Chapter 11 bankruptcy on December 15.\n- The company is selling its semiconductor division to Quantum Computing Inc. to raise cash.\n- This signals a major shakeup in the self-driving car industry, as automakers face high costs and slower-than-expected adoption of autonomous tech.\n\n*Read more about it: https://investors.luminartech.com/news-events/press-releases/detail/110/luminar-technologies-inc-initiates-voluntary-chapter-11*\n\n---\n<br>\n\n### Wisk Aero Completes First Flight of Gen 6 Air Taxi ([[evtol|eVTOL]])\n- Wisk Aero (owned by Boeing) successfully flew its \"Generation 6\" air taxi for the first time on Dec 17.\n- This aircraft is fully autonomous (no pilot on board) and is designed to carry four passengers.\n- It represents a critical milestone toward certifying \"flying taxis\" for commercial use in cities.\n\n*Read more about it: https://aiaa.org/2025/12/17/wisk-completes-first-gen-6-evtol-air-taxi-flight/*\n\n---\n<br>\n\n### Rocket Lab Successful \"[[disksat|DiskSat]]\" Launch\n- Rocket Lab successfully launched its Electron rocket on Dec 19, deploying a dedicated mission for the US Space Force.\n- The payload included a unique \"DiskSat\u201c; a flat, plate-shaped satellite designed to stack efficiently inside rockets.\n- The success reinforces Rocket Lab's position as the primary competitor to SpaceX for small satellite launches.\n\n*Read more about it: https://aiaa.org/2025/12/19/rocket-lab-launches-stp-s30-disksat-mission-from-wallops-island/*\n\n---\n<br>\n"
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
                        "content": "# Week 52\n\n## Cyber Security\n\n### The \"GrinchBot\" Swarms: AI Agents Dominate Holiday Retail\n- A new wave of \"Autonomous [[agentic-ai|AI Agents]]\" (dubbed GrinchBots) decimated online inventories this week, purchasing 40% of high-demand electronics within milliseconds of restock.\n- Unlike older bots, these AI agents use \"[[computer vision]]\" to solve CAPTCHAs and mimic human mouse movements, making them nearly impossible to filter with standard defenses.\n\n*Read more about it: https://www.darktrace.com/blog/ai-and-cybersecurity-predictions-for-2025*\n\n## Artificial Intelligence\n\n*Read more about it: link*\n\n## General Technology\n\n*Read more about it: link*\n"
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
                        "content": "# Week 52\n\n## Cyber Security\n\n## Artificial Intelligence\n\n## General Technology\n"
                    }
                ]
            }
        ]
    }
};