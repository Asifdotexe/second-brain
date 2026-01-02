const wikiData = {
    "overview": {
        "title": "Topics",
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
                        "id": "ai-hallucination",
                        "title": "AI Hallucination",
                        "icon": "fas fa-eye",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "LargeLanguageModels",
                            "AIHallucination"
                        ],
                        "content": ""
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
                        "id": "llm",
                        "title": "Large Language Model (LLM)",
                        "icon": "fas fa-robot",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "LargeLanguageModel",
                            "Transformers"
                        ],
                        "content": "# Large Language Model\n"
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
                        "id": "supply-chain-attack",
                        "title": "Supply Chain Attack",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [],
                        "content": ""
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
        "title": "Weekly Updates",
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
                        "content": "# Week 52\n\n## Cyber Security\n\n### The \"GrinchBot\" Swarms: AI Agents Dominate Holiday Retail\n- A new wave of \"Autonomous [[agentic-ai|AI Agents]]\" (dubbed GrinchBots) decimated online inventories this week, purchasing 40% of high-demand electronics within milliseconds of restock.\n- Unlike older bots, these AI agents use \"[[computer vision]]\" to solve CAPTCHAs and mimic human mouse movements, making them nearly impossible to filter with standard defenses.\n- Major retailers were forced to implement \"lottery systems\" for purchases, frustrating legitimate last-minute shoppers.\n\n*Read more about it: https://www.darktrace.com/blog/ai-and-cybersecurity-predictions-for-2025*\n\n### Artemis II Mission Systems Withstand \"Red Team\" Cyber Drill\n- Alongside the physical crew tests on December 20, NASA confirmed the successful completion of a classified \"Red Team\" cyber-defense exercise for the Orion capsule.\n- Ethical hackers attempted to jam the optical communications system (O2O) intended for the upcoming lunar flyby but failed to breach the encryption.\n- Ensuring the integrity of the data link is critical, as this will be the first crewed mission to rely heavily on laser communications from deep space.\n\n*Read more about it: https://www.nasa.gov/missions/artemis/artemis-2/artemis-ii-flight-crew-teams-conduct-demonstration-ahead-of-launch/*\n\n### \"Deepfake Family\" Voice Scams Surge Over Holidays\n- Security firms reported a 300% spike in \"Grandparent Scams\" during Christmas week, powered by high-fidelity AI voice cloning.\n- Attackers used snippets of audio from social media (TikTok/Instagram) to clone voices of younger relatives, calling older family members claiming \"emergency travel trouble.\"\n- The attacks were highly targeted, using location data to know who was actually traveling, adding terrifying credibility to the calls.\n\nFunfact: The AI just needs an ~3 second of your voice to learn your vocal pattern\n\n*Read more about it: https://investor.gendigital.com/news/news-details/2024/Gen-Reveals-Cybersecurity-Predictions-for-2025/default.aspx*\n\n## Artificial Intelligence\n\n### EU AI Act: Final Compliance Deadline Looms for \"High Risk\" Models\n- As the year ends, major US tech firms are rushing to finalize documentation for the EU AI Act's full implementation (effective Jan 2026).\n- \"High Risk\" systems (including AI used in HR, healthcare, and policing) must now prove they have human oversight and bias mitigation.\n- Several open-source projects have geo-blocked European users this week to avoid the legal liability of these strict new rules.\n\n*Read more about it: https://artificialintelligenceact.eu/high-level-summary/*\n\n### Microsoft's Copilot \"Year in Review\" Feature Criticized for Hallucinations\n- Microsoft rolled out an AI-generated \"Year in Review\" for Office 365 users, summarizing their work year.\n- Users reported bizarre [[ai-hallucination|hallucinations]], with the AI inventing meetings that never happened or congratulating users on projects they didn't work on.\n- The glitch underscores the ongoing \"grounding\" problem in Generative AI\u2014it prioritizes sounding nice over being factually accurate.\n\n**What is grounding?**\n  Grounding is making sure the AI is tethered to facts. Without it, the AI is like a creative writer who invents a fun story instead of a reporter who tells you the truth.\n\n## General Technology\n\n*Read more about it: link*\n"
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
                        "content": "# Week 52\n\n## Cyber Security\n\n### RondoDox Botnet Exploits [[Next.js|Next.js]] Servers\n- The What: A new botnet campaign dubbed \"RondoDox\" has been observed actively targeting servers running the Next.js framework by exploiting a critical vulnerability known as \"React2Shell\" (CVE-2025-55182).\n- The Detail: Attackers are using this flaw to execute remote code on vulnerable servers, subsequently deploying cryptominers and malware. The botnet specifically hunts for unpatched instances of the popular React framework used for building web applications.\n- The Impact: This poses a severe risk to web infrastructure, as Next.js is widely used by enterprise-grade applications. Successful compromise can lead to server resource theft (cryptojacking) or deeper network infiltration.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/rondodox-botnet-exploits-react2shell-flaw-to-breach-nextjs-servers/*\n\n### Fourth Wave of \"GlassWorm\" Targets macOS Developers\n\n- The What: A persistent malware campaign known as GlassWorm has launched its fourth wave, specifically targeting macOS developers through malicious extensions for VSCode and OpenVSX.\n- The Detail: The attackers distribute trojanized versions of cryptocurrency wallet applications and development tools. Once installed, the malware grants persistent access to the victim's machine, aiming to steal sensitive credentials and crypto assets.\n- The Impact: This highlights the growing trend of [[supply-chain-attack|Supply Chain Attack]] targeting developers. By compromising the tools developers use, attackers can potentially inject malicious code into downstream software or steal high-value intellectual property.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-glassworm-malware-wave-targets-macs-with-trojanized-crypto-wallets/*\n\n### Unleash Protocol Drained of $3.9 Million\n\n- The What: The decentralized finance (DeFi) platform Unleash Protocol suffered a major security breach, resulting in the theft of approximately $3.9 million in cryptocurrency.\n- The Detail: The attack was executed via an unauthorized contract upgrade. The attacker managed to hijack the platform's multisig (multi-signature) wallet controls, allowing them to approve a malicious update that drained the protocol's assets.\n- The Impact: This incident underscores the fragility of \"upgradeable\" smart contracts. If administrative keys are compromised, the immutability of the blockchain offers no protection against theft, leaving investors with significant losses.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/hackers-drain-39m-from-unleash-protocol-after-multisig-hijack/*\n\n\n## Artificial Intelligence\n\n### SoftBank Completes $40B Investment in OpenAI\n- The What: SoftBank has officially finalized a massive $40 billion investment into OpenAI, solidifying the Japanese conglomerate's stake in the leading American AI research lab.\n- The Detail: This capital injection is expected to fund the exorbitant compute costs required for training the next generation of models (potentially GPT-6) and expanding global infrastructure.\n- The Impact: This moves OpenAI further away from its non-profit roots and deeper into the corporate mega-structure. It signals that the \"AI Arms Race\" has become too expensive for anyone but the most heavily capitalized entities to compete in.\n\n*Read more about it: https://www.reuters.com/business/media-telecom/softbank-has-fully-funded-its-40-billion-investment-openai-cnbc-reports-2025-12-30/*\n\n### OpenAI Prioritizes \"Sponsored Content\" in Answers\n- The What: Reports indicate that OpenAI is shifting its business model to prioritize \"sponsored content\" within its AI-generated responses, moving away from a purely subscription/API-based revenue stream.\n- The Detail: Despite initial resistance to advertising, the company is testing formats where paid partners' information appears prominently when relevant queries are asked, distinct from organic training data results.\n- The Impact: This fundamentally changes the user trust model for [[LLM|Large Language Models]]. If answers are influenced by sponsorship, the perceived neutrality of AI \"reasoning\" is compromised, making it more akin to a search engine ad platform than an impartial assistant.\n\n*Read more about it: https://www.bleepingcomputer.com/news/artificial-intelligence/openais-chatgpt-ads-will-allegedly-prioritize-sponsored-content-in-answers/*\n\n### NVIDIA in Advanced Talks to Acquire AI21\n- The What: Reports indicate NVIDIA is in late-stage negotiations to acquire Israeli startup AI21 Labs for approximately $2-3 billion.\n- The Detail: AI21 is known for its \"Jurassic\" large language models and specialized enterprise AI tools. The deal is described as an \"acqui-hire,\" focusing on absorbing AI21's top-tier research talent.\n- The Impact: This represents significant market consolidation. Hardware giant NVIDIA is moving vertically up the stack, owning not just the chips (H200s/Blackwell) but increasingly the models and software ecosystems that run on them.\n\n*Read more about it: https://www.reuters.com/business/nvidia-advanced-talks-buy-israels-ai21-labs-up-3-billion-report-says-2025-12-30/*\n\n### Meta Acquires \"Manus\" for Agentic AI\n- The What: Meta has agreed to acquire Singapore-based startup Manus, a company specializing in [[Agentic AI|AI Agents]] for small and medium businesses (SMBs).\n- The Detail: Manus's technology focuses on autonomous agents that can execute complex multi-step workflows for businesses. Meta plans to integrate this directly into its enterprise offerings, potentially within the WhatsApp/Messenger business ecosystem.\n- The Impact: This signals a shift from \"Chatbots\" (which just talk) to \"Agents\" (which do work). Meta is betting that the future of business messaging involves AI that can autonomously handle customer service, booking, and sales tasks.\n\n*Read more about it: https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about/*\n\n## General Technology\n\n### New \"Microchip\" Enables Quantum Control\n- The What: Researchers have developed a new microchip-sized device capable of controlling laser frequencies with extreme precision, a critical step for scalable quantum computing.\n- The Detail: Published in ScienceDaily, the research details how this chip uses a fraction of the power required by traditional bulky systems to stabilize the lasers needed to manipulate quantum bits (qubits).\n- The Impact: Reducing the size and power consumption of control hardware is one of the biggest hurdles in moving quantum computers from the lab to commercial reality. This chip could accelerate the timeline for practical quantum processors.\n\n*Read more about it: https://www.sciencedaily.com/releases/2025/12/251226045341.htm*\n\n### NYC Mayoral Inauguration Bans Flipper Zero\n- The What: For the 2026 inauguration of New York City Mayor Zohran Mamdani, officials have explicitly added the Flipper Zero and Raspberry Pi devices to the list of banned items.\n- The Detail: The Flipper Zero is a portable multi-tool for geeks that can interact with radio protocols (RFID, NFC, Sub-GHz). While legal, it has gained a reputation in security circles for its ability to clone badges or disrupt wireless signals.\n- The Impact: This is one of the first high-profile public events to specifically blacklist \"hacker tools\" by name, acknowledging the physical security risks posed by accessible, pocket-sized cyber-physical devices.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/nyc-mayoral-inauguration-bans-flipper-zero-raspberry-pi-devices/*\n\n### US Grants Chip Export Waivers to Samsung & SK Hynix\n- The What: The US government has granted a renewed annual license to South Korean chip giants Samsung and SK Hynix, allowing them to continue shipping advanced chip manufacturing equipment to their facilities in China through 2026.\n- The Detail: This waiver is a critical exception to the strict US export controls designed to limit China's semiconductor capabilities. It allows these companies to maintain their existing massive memory chip fabrication plants in China.\n- The Impact: This decision stabilizes the global memory chip supply chain for the coming year. Without it, global prices for RAM and Flash storage (used in everything from phones to servers) would likely have spiked due to production disruptions.\n\n*Read more about it: https://www.reuters.com/world/china/samsung-wins-us-annual-approval-chipmaking-tool-shipments-china-source-says-2025-12-30/*\n\n### SpaceX Hints at 2026 IPO\n- The What: Following a court victory reinstating Tesla stock options, Elon Musk has publicly hinted that SpaceX may finally initiate its Initial Public Offering (IPO) in 2026.\n- The Detail: Analysts suggest a valuation potentially exceeding $1.5 trillion. The move would transition the world's dominant private spaceflight company into the public markets, opening it to retail investors.\n- The Impact: A SpaceX IPO would be the most significant financial event in the aerospace sector in decades, likely flooding the industry with capital and forcing competitors to accelerate their own capitalization strategies to survive.\n\n*Read more about it: https://www.scientificamerican.com/article/spacex-could-go-public-in-2026-what-does-that-mean-for-space-exploration/*\n"
                    }
                ]
            }
        ]
    }
};