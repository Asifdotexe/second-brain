const wikiData = {
    "overview": {
        "title": "Topics",
        "items": [
            {
                "id": "ai",
                "title": "AI",
                "icon": "fas fa-brain",
                "desc": "Artificial Intelligence & ML",
                "children": [
                    {
                        "id": "agentic-ai",
                        "title": "Agentic AI",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "AgenticAI"
                        ],
                        "content": "# Agentic AI\n\n### In a nutshell\nAgentic AI is an artificial intelligence that doesn't just answer your questions; it actively uses tools and takes steps to complete goals for you.\n\n**Agentic AI** has **Agency**. It is given a broad goal (e.g., \"Plan and book my vacation\"), and it figures out the necessary sub-tasks, executes them one by one, checks its own work, and keeps going until the job is done. It is an AI with \"hands\" (tools) and a \"brain\" (planning capabilities).\n\n### How it Works\n\nTo understand Agentic AI, we break it down into a loop of three core components:\n\n1. **Perception (The Input):** The agent observes the current state of things.\n2. **Reasoning (The Brain):** It decides what to do next based on the goal.\n3. **Action (The Tools):** It executes a command (searching the web, running code, sending an email).\n\n<img src=\"https://d3a7ykdi65m4cy.cloudfront.net/en/s3fs-public/inline-images/805x540_How-Does-Agentic-AI-Work.png\" alt=\"Agentic AI Flow\"/>\n\n### How the Agent thinks\n<details>\n<summary><strong>Click to expand</strong></summary>\n\nOne of the most popular methods for Agentic AI is called **ReAct** (Reasoning + Acting).\n\n1.  **Thought:** \"The user wants to buy a stock. First, I need to check the current price.\"\n2.  **Action:** *Trigger Tool: Stock_Market_API(Symbol='AAPL')*\n3.  **Observation:** \"The API returned $150.00.\"\n4.  **Thought:** \"That is within the user's budget. I should execute the buy order now.\"\n5.  **Action:** *Trigger Tool: Brokerage_Buy(Symbol='AAPL', Qty=1)*\n\n</details>\n\n---\n<br>\n\n\n### The Analogy: Librarian vs. Assistant\n\n| Feature | Standard AI (Generative) | Agentic AI |\n| :--- | :--- | :--- |\n| **The Persona** | Librarian | Assistant |\n| **Interaction** | You ask: *\"How do I bake a cake?\"* <br> They hand you a recipe book. | You ask: *\"I need a cake for Saturday.\"* <br> They find a bakery, order it, and pay for it. |\n| **Capability** | Knowledge Retrieval *(It knows information.)* | Task Execution *(It performs actions.)* |\n| **Autonomy** | Low. Needs a prompt for every output. | High. Can loop multiple times on one prompt. |\n\n---\n<br>\n\n### Further Reading\n\n* **Concept:** *\u201c[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/pdf/2210.03629)\u201d* (The foundational paper).\n* **Frameworks to try:** [LangChain](https://www.langchain.com/) or [AutoGPT](https://news.agpt.co/).\n* **Essay:** *\u201c[The rise of Agentic workflows](https://learn.deeplearning.ai/courses/agentic-ai/information)\u201d* by Andrew Ng.\n"
                    },
                    {
                        "id": "ai-fine-tuning",
                        "title": "Ai Fine Tuning",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [],
                        "content": ""
                    },
                    {
                        "id": "ai-hallucination",
                        "title": "AI Hallucination",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "LargeLanguageModels",
                            "Risks"
                        ],
                        "content": "# AI Hallucination\n\nWhen a smart robot confidently answers a question with a convincing lie.\n\n**AI Hallucination** is when a Large Language Model ([[llm|LLM]]) perceives patterns that aren't actually there and generates false information as if it were absolute fact. It doesn't *know* it's lying; it just thinks it's completing the pattern.\n\nIt is like seeing a face in the clouds. The face isn't real, but your brain insists on connecting the dots to make it look like one.\n\n## Why does it happen?\n\n[[llm|LLMs]] are not \"Knowledge Databases\" (like Wikipedia); they are \"Prediction Engines\" (like Autocomplete).\n*   **Autocomplete:** It guesses the next mostly likely word.\n*   **The Gap:** If it doesn't know the answer, it guesses the most *plausible-sounding* words to fill the silence, prioritizing \"sounding correct\" over \"being correct.\"\n\n## FAQs\n\n*1. Can we fix it?*\nNot entirely yet. We can reduce it (using techniques like [[rag|RAG]] - Retrieval Augmented Generation), but because [[llm|LLMs]] are probabilistic (based on chance), there is always a tiny chance they will roll the wrong dice.\n\n*2. Is it dangerous?*\nYes, because it is **Confident**.\nIf you ask an AI \"Who is the CEO of Apple?\", it might say \"Tim Cook\" (True).\nIf you ask \"Who is the King of Mars?\", it might invent a name and a backstory instead of saying \"I don't know.\"\n\n### Further Reading\n\n*   **Article:** *[IBM: What are AI Hallucinations?](https://www.ibm.com/topics/ai-hallucinations)*\n*   **Deep Dive:** *[Why LLMs Hallucinate (Zapier)](https://zapier.com/blog/ai-hallucinations/)*\n"
                    },
                    {
                        "id": "computer-vision",
                        "title": "Computer Vision",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "ComputerVision",
                            "NeuralNetworks"
                        ],
                        "content": "# Computer Vision\n\n## What is Computer Vision?\nComputer Vision is the science of teaching computers to \"see\" images and understand them just like a human brain does.\n\nIt is a field of Artificial Intelligence (AI) that enables computers to derive information from digital images, videos, and other visual inputs.\n\n<img src=\"https://images.prismic.io/turing/65981166531ac2845a272a03_How_computer_vision_works_7a55c421bf.webp?auto=format,compress\" alt=\"Agentic AI Flow\" style=\"width: 500px; height: auto;\"/>\n\n## Further Reading & Resources\n\n* **Watch:** [*How Computers See* by TED-Ed (YouTube)](https://www.youtube.com/watch?v=XS2UWYuh5u0).\n* **Learn:** \"[CS231n: Convolutional Neural Networks for Visual Recognition](https://cs231n.stanford.edu/2020/)\" (Stanford University Course Notes - highly technical but the gold standard).\n* **Try:** [Google's \"Teachable Machine\"](https://teachablemachine.withgoogle.com/) (A web tool where you can train your own computer vision model in minutes without coding).\n"
                    },
                    {
                        "id": "generative-ai",
                        "title": "Generative AI",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "Creativity",
                            "FutureTech"
                        ],
                        "content": "# Generative AI\n\nA calculator for creativity.\n\nTraditional AI was a **Classifier**: You show it a picture, and it says \"Cat.\"\n**Generative AI** is a **Creator**: You say \"Cat,\" and it *draws* a new picture of a cat that never existed before.\n\nIt is the difference between a **Librarian** (who finds existing books) and an **Author** (who writes new ones).\n\n## How it Works\n\nIt learns by looking at billions of examples.\n1.  **Training:** It looks at millions of pictures of dogs. It learns the \"concept\" of a dog (ears, fur, nose).\n2.  **Generation:** When you ask for a dog, it doesn't copy-paste an old photo. It paints a fresh image pixel-by-pixel based on its understanding of \"Dog-ness.\"\n\n## Common Types\n\n*   **Text-to-Text:** ChatGPT, Claude, Gemini (Writes essays, code, poems).\n*   **Text-to-Image:** Midjourney, DALL-E (Creates art from words).\n*   **Text-to-Audio:** Suno, Udio (Composes music).\n\n## FAQs\n\n*1. Is it stealing art?*\nThis is a hot legal debate.\n*   **The AI Argument:** \"I learned from art just like a human student learns by looking at museums.\"\n*   **The Artist Argument:** \"You trained on my copyrighted work without paying me, and now you compete with me.\"\n\n*2. Can it replace humans?*\nIt replaces *tasks*, not necessarily *jobs*. It is a tool. A writer with AI is faster than a writer without AI. But AI without a human guide often produces generic, soulless work.\n\n### Further Reading\n\n*   **Guide:** *[McKinsey: What is Generative AI?](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai)*\n*   **Video:** *[Generative AI Explained in 2 Minutes](https://www.youtube.com/watch?v=_TvP29iT1A0)*\n"
                    },
                    {
                        "id": "llm",
                        "title": "Large Language Model (LLM)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "LargeLanguageModel",
                            "Transformers"
                        ],
                        "content": "# Large Language Model\n\nThink of an LLM as \"really really really good Autocomplete\", a system that has read almost everything on the internet and learned how to predict the next word in a sentence perfectly.\n\nIt is trained on massive amounts of text data. Instead of being \"taught\" grammar rules explicitly, it learns them by observing patterns. \n\nIts primary job is simple: **Guess the next word.** By making these guesses billions of times over, it learns to write essays, code software, translate languages, and answer questions.\n\n## How It Actually Works\n\nTo understand an LLM, we break it down into three fundamental pillars:\n\n**1. Tokenization (The Puzzle Pieces)**\nComputers don't read words like we do; they read numbers. An LLM breaks text down into chunks called *Tokens*. A token can be a whole word (like \"apple\") or part of a word (like \"ing\" in \"eating\").\n\n**2. Probability (The Guessing Game)**\nThe model looks at a sequence of tokens and calculates the *probability* of what comes next.\n* *Input:* \"The cat sat on the...\"\n* *LLM Calculation:*\n    * \"Mat\" (80% likely)\n    * \"Floor\" (15% likely)\n    * \"Moon\" (0.01% likely)\n\n**3. Training (The heavy Lifting)**\nTo get good at guessing, the model reads billions of sentences (books, websites, articles). It adjusts its internal \"settings\" (parameters) every time it guesses right or wrong, eventually building a map of how human language connects.\n\n## FAQ\n\n*1. What is a \"Transformer\"?*\nThe \"Transformer\" is the engine under the hood of modern LLMs (like the 'T' in GPT). \n\nBefore Transformers, AI read sentences one word at a time, left to right. Transformers can read the **whole sentence at once**. This allows the model to understand context much better. \n\nFor example, in the sentence *\"The bank was closed because the river flooded,\"* a Transformer understands that \"bank\" refers to land, not money, because it sees the word \"river\" at the same time.\n\n*2. What are \"Parameters\"?*\n\nParameters are the \"brain cells\" of the model. They are the adjustable variables inside the model that store the knowledge. \n* **More parameters** = generally smarter, more nuanced, and capable of handling complex tasks. \n* GPT-4, for instance, has approximately 1.76 trillion parameters\n\n*3. Why do LLMs hallucinate?*\n\nSince an LLM is a **probabilistic engine**, not a fact database, it sometimes predicts a word that *sounds* plausible but is factually wrong. It prioritizes the *pattern* of language over the *truth* of the facts.\n\n## Further Reading\n\n* **\"[Attention Is All You Need](https://arxiv.org/pdf/1706.03762)\"** - The original research paper that introduced the Transformer architecture.\n* **[Wait But Why: The AI Revolution](https://futureoflife.org/ai/wait-but-why-the-ai-revolution/)** - A long-form, illustrated blog post explaining AI growth.\n* **[The Prompt Engineering Guide](https://www.promptingguide.ai/)** - The most famous community-run guide. Covers everything from basics to advanced logic.\n"
                    },
                    {
                        "id": "open-model",
                        "title": "Open Model",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "OpenSource",
                            "Transparency"
                        ],
                        "content": "# Open Model\n\nA recipe that is shared with the world, not kept in a restaurant's safe.\n\nIn the AI world, there are two camps:\n1.  **Closed Models (Proprietary):** Like ChatGPT (OpenAI) or Gemini (Google). You can *use* the model through their website, but you cannot see how it works, what it learned from, or run it on your own computer. It is a \"Black Box.\"\n2.  **Open Models ([[open-weights|Open Weights]]):** Like Llama (Meta) or Mistral. The creators publish the \"brain\" (the weights) of the AI. You can download it, inspect it, and run it on your own private server without asking for permission.\n\n## Why does it matter?\n\nIt is the difference between **Rent** vs **Own**.\n*   **Closed:** You rent intelligence. If the company shuts down or bans you, you lose everything.\n*   **Open:** You own the intelligence. It runs on your hardware. No one can take it away.\n\n## FAQs\n\n*1. Is \"[[open-source|Open-Source]]\" the same as \"Open Model\"?*\nTechnically, no (though people use them interchangeably).\n*   **True Open Source:** They share the Training Data, The Code, AND The Weights (Everything).\n*   **Open Weights:** They share the ready-to-use Brain (Weights), but keep the Training Data secret. Most \"Open\" AI today (like Llama) is actually just \"[[open-weights|Open-Weights]].\"\n\n*2. Can I run these at home?*\nYes! If you have a decent computer (especially with a [[gpu|GPU]] like NVIDIA), you can use tools like **Ollama** or **LM Studio** to run powerful AI models completely offline.\n\n### Further Reading\n\n*   **Tool:** *[Ollama](https://ollama.com/)* (The easiest way to run open models locally).\n*   **Library:** *[Hugging Face](https://huggingface.co/)* (The \"GitHub\" of Open Models).\n"
                    },
                    {
                        "id": "open-weights",
                        "title": "Open Weights",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "Models",
                            "Licensing"
                        ],
                        "content": "# Open Weights\n\nThe brain without the memory.\n\nWhen an AI company releases **Open Weights**, they are giving you the *result* of their training (the smart brain), but not the *data* (the books it read) or the *recipe* (the code) used to create it.\n\nIt's like a chef giving you a delicious cake. You can eat it, share it, and even put new icing on it, but you don't know exactly what ingredients went into baking it.\n\n## The Difference\n\n*   **Open Source AI:** You get everything. The Code + The Training Data + The Weights. (Rare).\n*   **Open Weights:** You get just the trained model. You can run it, but you can't easily rebuild it from scratch. (Common, e.g., Llama 3, Mistral).\n\n## FAQs\n\n*1. Can I use it for free?*\nUsually, yes. However, \"Open Weights\" often come with specific licenses. For example, some might say \"Free for everyone, unless you have more than 700 million users.\"\n\n*2. Why do companies do this?*\nIt allows the community to improve the model (fixing bugs, making it run faster) without the company giving away their \"secret sauce\" (their proprietary training data).\n\n### Further Reading\n\n*   **Article:** *[The History of Open Weights](https://www.wired.com/story/open-source-generative-ai-llama-2/)*\n*   **Definition:** *[OSI: What is Open Source AI?](https://opensource.org/blog/what-is-open-source-ai)*\n"
                    },
                    {
                        "id": "rag",
                        "title": "RAG (Retrieval Augmented Generation)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "ArtificialIntelligence",
                            "LLM",
                            "KnowledgeManagement"
                        ],
                        "content": "# RAG\n\nGiving the robot a textbook during the exam.\n\nStandard AI (like ChatGPT) relies on its **Training Memory** (what it learned months ago). It's like a student taking a closed-book exam; if they forgot the fact, they might guess ([[ai-hallucination|hallucinate]]).\n\n**RAG** (Retrieval Augmented Generation) connects the AI to your *live* documents. Before answering, it looks up the specific information in your files.\n\n## How it Works\n\n1.  **User Asks:** \"How much vacation time do I have?\"\n2.  **Retrieval (The Lookup):** The system searches your company's HR Handbook PDF.\n3.  **Generation (The Answer):** It sends the question *plus* the relevant page from the PDF to the AI. \"Using this page, answer how much vacation time the user has.\"\n4.  **Result:** \"According to page 12 of the handbook, you have 15 days.\"\n\n## FAQs\n\n*1. Why is this better than [[ai-fine-tuning|fine-tuning]]?*\n*   **RAG** is cheaper and instant. If you update the HR handbook, the AI knows immediately.\n*   **Fine-tuning** is expensive and slow. You have to \"re-train\" the brain every time facts change.\n\n*2. Does it stop hallucinations?*\nDrastically reduces them. Because the AI is grounded in the text you gave it, it is much less likely to make things up intact.\n\n### Further Reading\n\n*   **Guide:** *[Oracle: What is RAG?](https://www.oracle.com/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/)*\n*   **Tutorial:** *[RAG for Beginners](https://python.langchain.com/docs/use_cases/question_answering/)*\n"
                    }
                ]
            },
            {
                "id": "cybersecurity",
                "title": "Cybersecurity",
                "icon": "fas fa-shield-halved",
                "desc": "Security protocols and notes",
                "children": [
                    {
                        "id": "botnets",
                        "title": "Botnet",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberAttack",
                            "CyberSecurity",
                            "Malware"
                        ],
                        "content": "# Botnet\n\nImagine an army of computers, secretly controlled by one person to attack a specific target.\n\nA **Botnet** (short for \"Robot Network\") is a collection of internet-connected devices, like laptops, smartphones, or even smart fridges, that have been infected with malicious software.\n\nThis software runs quietly in the background without tadd he owner knowing. It connects the device to a central \"Command & Control\" server, allowing a hacker to control thousands of these devices at once to perform massive attacks.\n\n## FAQs\n\n*1. Why do hackers use Botnets?*\nHackers rarely use botnets just for fun. They are usually financially motivated:\n* **DDoS Attacks:** They threaten to crash a company's website unless the company pays a ransom.\n* **Spam:** They use the army to send millions of spam emails (so their own computer doesn't get blocked).\n* **Crypto Mining:** They use the tiny bit of electricity from thousands of computers to mine Bitcoin or Monero for themselves.\n\n*2. Am I part of a Botnet?*\nYou might be if:\n* Your computer fans are running loud when you aren't doing anything heavy.\n* Your internet is weirdly slow.\n* Friends tell you they received strange emails from you.\n\n### Further Reading\n\n* **Article:** *\"[The Morris Worm: The Internet's First Botnet](https://www.fbi.gov/news/stories/morris-worm-30-years-since-first-major-attack-on-internet-110218)\"* (Search for history of botnets)\n* **Deep Dive:** [Cloudflare's guide on *\"What is a DDoS Attack?\"](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)*\n* **Check your status:** [Have I Been Pwned?](https://haveibeenpwned.com/) (Website to check if your email has been compromised)\n"
                    },
                    {
                        "id": "command-injection",
                        "title": "Command Injection",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberAttack",
                            "WebSecurity",
                            "Vulnerability"
                        ],
                        "content": "# Command Injection\n\nTricking a computer into obeying a command it shouldn't.\n\nImagine you are ordering a coffee, and you tell the barista: \"One Latte, and also give me all the money in the register.\" If the barista is a robot that mindlessly follows every instruction in a sentence, they would give you the coffee *and* the cash.\n\n**Command Injection** is a hacking technique where an attacker sends malicious commands to a system through an input field (like a form or a URL). The system, thinking it is just normal data, executes the command.\n\n## FAQs\n\n*1. How does it happen?*\nIt happens when an application passes unsafe user data (forms, cookies, HTTP headers) directly to a system shell. For example, a website might use a tool to \"ping\" a website you enter.\n*   **Normal Input:** `google.com` -> System runs `ping google.com`\n*   **Malicious Input:** `google.com; rm -rf /` -> System runs `ping google.com` AND THEN `rm -rf /` (which deletes files).\n\n*2. Why is it dangerous?*\nIt gives the attacker **Remote Code Execution (RCE)**. This means they can:\n*   Steal data.\n*   Delete files.\n*   Take full control of the server.\n\n*3. How do we stop it?*\n*   **Validation:** Don't trust user input. Ensure it only contains what you expect (e.g., only IP addresses).\n*   **Parameterization:** Use safer programming methods that treat input as *data*, not as *executable commands*.\n\n### Further Reading\n\n*   **Article:** *[OWASP Command Injection Explained](https://owasp.org/www-community/attacks/Command_Injection)*\n*   **Deep Dive:** *[PortSwigger's Guide to OS Command Injection](https://portswigger.net/web-security/os-command-injection)*\n"
                    },
                    {
                        "id": "cryptojacking",
                        "title": "Cryptojacking",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "InformationSecurity",
                            "VulnerabilityManagement"
                        ],
                        "content": "# Cyptojacking\n\nA digital parasite that secretly steals your computer's electricity and brainpower to make money for a hacker.\n\nIt is the unauthorized use of someone else\u2019s computer to \"mine\" cryptocurrency. \n\nInstead of stealing your personal data (like passwords or photos), the hacker is stealing your **resources**. They install a hidden program on your device (or hide it in a website you visit) that forces your computer to solve complex math problems. These solutions generate digital money, which goes straight to the hacker's wallet, while you are left with a slow computer and a high electricity bill.\n\n## FAQs\n\n*1. How does it get on my computer?*\n\nThere are two main ways:\n*  **Browser-Based (Drive-by):** You visit a shady website (streaming or gambling sites). A script runs in the background of that web page. As long as the tab is open, your computer mines for them.\n*  **Malware-Based:** You download a file (like a \"free\" game crack or software). The mining program installs itself deeper in your system and runs every time you turn the computer on.\n\n*2. How do I know if I'm infected?*\n\nCryptojacking is designed to be quiet, but look for these signs:\n* **The Fan Test:** Your laptop fans are spinning at max speed even when you are just reading text.\n* **Slowness:** Your computer feels laggy or freezes during simple tasks.\n* **Battery Drain:** Your phone or laptop battery dies much faster than usual.\n* **The Task Manager:** Open your Task Manager (Windows) or Activity Monitor (Mac). If you see \"CPU Usage\" at 90-100% caused by a browser or a weirdly named file, that's a red flag.\n\n### Further Reading\n\n* **History:** *[The rise and fall of Coinhive](https://www.darkreading.com/perimeter/the-rise-of-silence-and-the-fall-of-coinhive)* (The most famous browser mining script).\n* **Protection:** *[How to use \"NoCoin\" or \"MinerBlock\" browser extensions.](https://fossbytes.com/block-cryptocurrency-mining-in-browser/)*\n* **Official Guide:** *[Malwarebytes: What is Cryptojacking?](https://www.malwarebytes.com/cryptojacking)*\n"
                    },
                    {
                        "id": "cve",
                        "title": "CVE",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "InformationSecurity",
                            "VulnerabilityManagement"
                        ],
                        "content": "# CVE: Common Vulnerabilities and Exposures\n\n### What is it?\nCVE stands for **Common Vulnerabilities and Exposures**; it is a standardized list that gives every known computer security flaw a unique \"name\" (ID number) so everyone can talk about it without confusion.\n\n<img src=\"https://www.picussecurity.com/hs-fs/hubfs/undefined-May-26-2023-01-36-17-1349-PM.png?width=593&height=411&name=undefined-May-26-2023-01-36-17-1349-PM.png\" alt=\"CVE Anatomy\"/>\n\n**A CVE ID always looks like this: `CVE-2025-12345`**\nCVE -> Standard List Marker\n2023 -> Year Assigned\n23397 -> Unique Bug ID\n\n## Further Reading\n\n* **[cve.mitre.org](https://www.cve.org/):** The official home of the CVE list. You can search for specific bugs here.\n* **[NVD (National Vulnerability Database)](https://nvd.nist.gov/):** The US government's repository that adds more details (like severity scores) to the standard CVE list.\n* **[CVSS Score](https://www.first.org/cvss/):** This is the *next* thing to learn. While CVE gives the bug a *name*, CVSS gives it a *score* (from 1 to 10) to tell you how dangerous it is.\n"
                    },
                    {
                        "id": "cvss",
                        "title": "CVSS (Common Vulnerability Scoring System)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "VulnerabilityManagement",
                            "Metrics"
                        ],
                        "content": "# CVSS\n\nA credit score for security bugs.\n\nWhen a new security hole (vulnerability) is found, security teams need to know: \"Should we panic now, or can we fix this next week?\" **CVSS** provides a number from **0.0 to 10.0** to answer that question.\n\n## The Scorecard\n\n| Score Range | Severity | Meaning |\n| :--- | :--- | :--- |\n| **0.0** | None | No risk. |\n| **0.1 - 3.9** | Low | Hard to exploit, or very little impact. |\n| **4.0 - 6.9** | Medium | Needs fixing, but requires specific conditions to work. |\n| **7.0 - 8.9** | High | Dangerous. Hackers can likely use this to harm the system. |\n| **9.0 - 10.0** | Critical | **Drop everything.** The door is wide open for attackers. |\n\n## FAQs\n\n*1. How is the score calculated?*\nIt looks at three main things (The \"CIA Triad\" impact + Exploitability):\n*   **Exploitability:** How easy is it? (Can a kid do it, or do you need a supercomputer?)\n*   **Impact:** What gets hurt? Confidentiality (secrets stolen), Integrity (data changed), or Availability (system crashes).\n*   **Privileges:** Do you need a login to do it, or can a stranger do it from the internet?\n\n*2. Is a 10.0 always worse than a 7.0?*\nTechnically, yes. But context matters. A \"Critical 10.0\" bug on a server that isn't connected to the internet might be less urgent than a \"High 8.0\" bug on your public website.\n\n### Further Reading\n\n*   **Tool:** *[CVSS Calculator](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator)* (Try creating your own score).\n*   **Reference:** *[First.org CVSS Specification](https://www.first.org/cvss/)*\n"
                    },
                    {
                        "id": "glassworm",
                        "title": "GlassWorm",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "CyberAttack",
                            "VulnerabilityManagement"
                        ],
                        "content": "# GlassWorm\n\nAn \"invisible\" computer virus that hides inside the code developers write, spreading automatically by stealing their work passwords.\n\nIt is a highly advanced piece of malware discovered on October 17, 2025 that targets software developers.\n\nIt specifically infects **Visual Studio Code (VS Code) extensions**, the little add-ons programmers use to make coding easier. What makes it terrifying is that the malicious code is written using **invisible characters**. A programmer can look directly at the infected file, and it will look like an empty line or normal whitespace, but the computer reads it as dangerous instructions.\n\nOnce inside a developer's computer, it steals their credentials (passwords for publishing code) to automatically infect *other* projects, spreading like a worm through the software supply chain.\n\n## FAQs\n\n*1. Why can't we just delete the hacker's server?*\nGlassWorm is unique because it uses **Blockchain Command & Control (C2)**.\nUsually, malware connects to a specific website (e.g., `hacker-site.com`). If the police seize that website, the malware dies.\nGlassWorm instead looks at public transactions on the **Solana Cryptocurrency Blockchain**. The hacker sends a transaction with a \"memo\" containing instructions. Since no one can delete a transaction from a blockchain, the \"server\" can never be taken down.\n\n*2. What is the \"ZOMBI\" Module?*\nOnce fully installed, GlassWorm deploys a payload often called the **ZOMBI module**. This turns the developer's high-powered computer into a proxy. Hackers can then route their own internet traffic through the developer's computer to attack *other* targets, making it look like the innocent developer did it.\n\n### Further Reading\n\n* **The Original Discovery:** Search for *[\"Koi Security GlassWorm Report October 2025\"](https://www.koi.ai/blog/glassworm-returns-new-wave-openvsx-malware-expose-attacker-infrastructure)*.\n* **The Technique:** Read about *\"[Trojan Source Attacks](https://trojansource.codes/)\"* (CVE-2021-42574) to understand how invisible characters work in code.\n* **The Defense:** Look up *\"[VS Code Restricted Mode](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace#_extension-recommendations)\"* and how to audit your extensions.\n"
                    },
                    {
                        "id": "host-guest-file-system",
                        "title": "Host-Guest File System (HGFS)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            ""
                        ],
                        "content": "# Host-Guest File System (HGFS)\n\nHost-Guest File System (HGFS) is a proprietary file system protocol developed by VMware. It is designed to allow a virtual machine (the \"Guest\") to access files and directories stored on the physical computer (the \"Host\") seamlessly, without needing complex network setups like FTP or SMB.\n\n![HGFS](../assets/images/hgfs.png)\n\n### How It Works\n- Think of HGFS as a specialized \"tunnel\" drilled through the wall that usually separates a virtual machine from the host.\n- On the Host: You verify a specific folder (e.g., `C:\\Documents`) to be \"shared.\" The virtualization software (like VMware ESXi or Workstation) acts as an HGFS server for this folder.\n- On the Guest: A driver (installed via VMware Tools) acts as the client. It mounts this shared folder so it looks like just another drive or directory inside the VM (e.g., `/mnt/hgfs/` on Linux or a Network Drive on Windows).\n- The Transfer: When you copy a file to this folder inside the VM, HGFS intercepts the request and passes the data directly to the host's hard drive.\n\n### Resources\n\n- [The Official Architecture (Technical Documentation)](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/tools/12-4-0/vmware-tools-administration-12-4-0/introduction-to-vmware-tools/vmware-tools-device-drivers.html): his is the primary source. It explains the `vmhgfs` driver role within the VMware Tools suite. It details how the file system redirector works to allow the Guest OS to communicate with the Host file system without using standard network protocols (like SMB or NFS)."
                    },
                    {
                        "id": "hypervisor",
                        "title": "Hypervisor",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Virtualization",
                            "CloudComputing",
                            "Infrastructure"
                        ],
                        "content": "# Hypervisor\n\nThe landlord of the digital apartment building.\n\nIf a physical computer is a building, the **Hypervisor** is the property manager that divides it into separate apartments (Virtual Machines).\n\nIt is a layer of software that sits between the physical hardware (metal) and the virtual operating systems. It allows one physical computer to pretend to be many different computers at once.\n\n## Types of Hypervisors\n\nThere are only two main types you need to know:\n\n### Type 1: Bare Metal (The Heavy Lifter)\nThis runs **directly** on the hardware, replacing the operating system (like Windows). It's very fast and efficient.\n*   *Analogy:* The building manager lives in the lobby and controls everything directly.\n*   *Examples:* VMware ESXi, Microsoft Hyper-V (Server), KVM.\n\n### Type 2: Hosted (The App)\nThis runs **inside** an operating system, just like a regular app (like Chrome or Spotify). It's easier to use but slower.\n*   *Analogy:* You are subletting a room inside someone's existing apartment.\n*   *Examples:* VMware Workstation, Oracle VirtualBox.\n\n## FAQs\n\n*1. Why do we use them?*\n*   **Efficiency:** Instead of buying 10 small servers that are mostly idle, you buy 1 powerful server and run 10 virtual servers on it.\n*   **Safety:** If one \"apartment\" (VM) catches fire (gets a virus), the others are safe because the walls (Hypervisor) are fireproof.\n\n*2. What is the difference between a Hypervisor and a Container (Docker)?*\n*   A **Hypervisor** virtualizes the *Hardware* (giving you a full, heavy computer).\n*   A **Container** virtualizes the *Operating System* (giving you a lightweight space to run just an app).\n\n### Further Reading\n\n*   **Comparison:** *[Hypervisor vs. Containers Explained](https://www.redhat.com/en/topics/containers/containers-vs-vms)*\n*   **Deep Dive:** *[VMware's \"What is a Hypervisor?\"](https://www.vmware.com/topics/glossary/content/hypervisor)*\n"
                    },
                    {
                        "id": "malware",
                        "title": "Malware",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [],
                        "content": "# Malware\n\nIt is a piece of malicious software, that intends to harm your system and also in cases steal or encrypt data from you.\n\n![malware-image.png](../../../assets/images/malware-image.png)\n\nThere are several different types of malwares:\n- [[ransomeware|Ransomware]]\n- Worms\n- Virus\n- Logic bombs\n- Wipers\n- Key loggers\n- Trojan\n- Spywares\n- Adware\n- [[botnets|Botnets]]\n- Rootkit\n- [[cryptojacking|Cryptojacking]]\n\n### Further resources\n- Watch: [Every Computer Virus Explained in 9 Minutes](https://www.youtube.com/watch?v=cFo5D9mFUJQ)\n\n"
                    },
                    {
                        "id": "phishing",
                        "title": "Phishing",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "SocialEngineering",
                            "Fraud"
                        ],
                        "content": "# Phishing\n\nHacking the human, not the machine.\n\n**Phishing** is a type of cyber attack where scammers pretend to be a trustworthy entity (like your bank, Netflix, or your boss) to trick you into revealing sensitive information.\n\nInstead of writing complex code to break your password, they just *ask* you for it.\n\n## The Hook\n\nPhishing works on three principles:\n1.  **Urgency:** \"Act now or your account will be deleted!\" (Makes you panic).\n2.  **Authority:** \"This is the IRS.\" (Makes you obey).\n3.  **Curiosity:** \"Look at these photos of you!\" (Makes you click).\n\n## Common Types\n\n*   **Email Phishing:** The classic \"You won the lottery\" emails.\n*   **Spear Phishing:** A highly targeted attack customized for *you* (e.g., mentioning your specific job title or friends).\n*   **Whaling:** Targeting high-profile targets like CEOs or CFOs.\n*   **Vishing:** Phishing over the phone (\"Voice Phishing\").\n*   **Smishing:** Phishing via SMS text messages.\n\n## FAQs\n\n*1. How do I spot a phishing email?*\n*   **Check the Sender:** Does the email come from `support@amazon-security-update.com` instead of `amazon.com`?\n*   **Hover over Links:** Don't click. Hover your mouse over the button. Does it go to a weird website?\n*   **Generic Greetings:** \"Dear Customer\" instead of your name.\n*   **Bad Grammar:** Legitimate companies have editors; scammers often don't.\n\n*2. What do I do if I clicked?*\n*   **Disconnect:** Turn off your internet to stop any malware from downloading.\n*   **Change Passwords:** Immediately change your passwords (from a different device if possible).\n*   **Report it:** Tell your IT team or the company being impersonated.\n\n### Further Reading\n\n*   **Quiz:** *[Google's Phishing Quiz](https://phishingquiz.withgoogle.com/)* (Test if you can spot the fakes).\n*   **Guide:** *[How to recognize phishing](https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams)*\n"
                    },
                    {
                        "id": "ransomware",
                        "title": "Ransomware",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberAttack",
                            "Malware",
                            "Crime"
                        ],
                        "content": "# Ransomware\n\nDigital kidnapping of your files.\n\n**Ransomware** is a specific type of malware that locks (encrypts) your computer or files so you cannot access them. The attacker then demands a \"ransom\" (usually in Bitcoin) to give you the key to unlock them.\n\nImagine coming home, but your key doesn't work, and there is a note on the door saying: *\"Pay $1000 to get your new key, or we burn the house down.\"*\n\n## How it Works\n\n1.  **Infection:** You download a bad file or click a bad link.\n2.  **Encryption:** The malware quietly scrambles your photos, documents, and databases.\n3.  **The Note:** A pop-up screen appears with a countdown timer and payment instructions.\n4.  **Extortion:** If you don't pay, you lose the data forever. Sometimes, they also threaten to *leak* your private data to the public (Double Extortion).\n\n## FAQs\n\n*1. Should I pay the ransom?*\n**No.** (According to the FBI and experts).\n*   There is no guarantee they will actually unlock your files.\n*   It funds their operations and encourages them to attack others.\n*   You serve as a \"paying customer\" target for future attacks.\n\n*2. How do I protect myself?*\nThe only 100% cure is **Backups**.\nIf you have a backup of your files on an external hard drive that wasn't plugged in during the attack, you can just wipe your computer and restore your files. You lose nothing but time.\n\n### Further Reading\n\n*   **Story:** *[The Colonial Pipeline Attack](https://www.technologyreview.com/2021/05/24/1025195/colonial-pipeline-ransomware-hack-explained/)* (How a password shut down a gas pipeline).\n*   **Resource:** *[No More Ransom Project](https://www.nomoreransom.org/)* (Free tools to help unlock files without paying).\n"
                    },
                    {
                        "id": "react2shell",
                        "title": "React2Shell",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "CyberAttack",
                            "VulnerabilityManagement"
                        ],
                        "content": "# React2Shell\n\nA critical security flaw in React that lets hackers trick a server into running dangerous shell commands just by sending a fake web request.\n\n**React2Shell** (technically known as *[[CVE]]-2025-55182*) is a massive security vulnerability discovered in 3rd December 2025 affecting **React Server Components**.\n\nIt happens because of a mistake in how the server processes (or \"deserializes\") data sent from a user. If a hacker sends a specially crafted message, the server doesn't just read the message, it mistakenly **executes** it as code. This gives the attacker full control over the server (Remote Code Execution), allowing them to steal data or install malware without even needing a password.\n\n## FAQs\n\n*1. Technical Details (For Developers)*\n* **CVE ID:** CVE-2025-55182\n* **Severity:** Critical (10/10)\n* **Affected Tech:** React Server Components (RSC), Next.js (versions using RSC).\n* **Mechanism:** The vulnerability exists in the `react-server-dom-webpack` (and similar) packages. It abuses the `resolve` logic in the Flight protocol deserializer. By manipulating the prototype chain (`__proto__`), an attacker can trigger the execution of arbitrary code via gadgets present in the runtime.\n\n*2. How do I fix it?*\n\nIf you are a developer, you must patch immediately:\n1.  **Update React/Next.js:** Upgrade to the latest patched versions (released Dec 2025).\n2.  **Sanitize Inputs:** Ensure your WAF (Web Application Firewall) is blocking requests with suspicious serialized payloads.\n3.  **Audit Logs:** Check server logs for strange outgoing shell commands.\n\n### Further Reading\n\n* **Official Advisory:** *[Google Cloud Blog: Multiple Threat Actors Exploit React2Shell](https://cloud.google.com/blog/topics/threat-intelligence/threat-actors-exploit-react2shell-cve-2025-55182)*\n* **Technical Breakdown:** *[Sophos Analysis on React Server Components Deserialization](https://www.sophos.com/en-us/blog/react2shell-flaw-cve-2025-55182-exploited-for-remote-code-execution)*\n* **Check your app:** Use tools like `react2shell-scanner` (from trusted sources like [Assetnote](https://github.com/assetnote/react2shell-scanner)) to see if you are vulnerable.\n"
                    },
                    {
                        "id": "remote-code-execution",
                        "title": "Remote Code Execution (RCE)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "CyberAttack",
                            "VulnerabilityManagement"
                        ],
                        "content": "# Remote Code Execution (RCE)\n\nRemote Code Execution (RCE) is a type of vulerability that the bad actors use to run arbitary code on a remote system without having to physically access it through the network.\n\nThis is often used to run malicious code on the remote system, this can lead to bad actor(s)\n- getting inside your system\n- getting access to sensitive data\n- getting access to your system's resources for malicious activities like [[botnet|Botnet-Attacks]], [[cryptojacking|Cryptojacking]]\n- can lock your system in demand to extort money from you or your organization ([[ransomware|Ransomware]]).\n  \n### These can be of few different types:\n- Injection attacks: Applications and sites that take in user input, deliberately providing arbitrary code that would be executed by the Application or the site, example: SQL Injection, Command Injection and XSS etc.\n"
                    },
                    {
                        "id": "root-access",
                        "title": "Root Access",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "OperatingSystem",
                            "AccessControl",
                            "Privileges"
                        ],
                        "content": "# Root Access\n\nGod mode for your computer.\n\nIn every operating system, there is a hierarchy of users. Normal users have limits (they can't delete system files or install big programs). **Root** (also called \"Administrator\" or \"Superuser\") is the user with **Zero Limits**.\n\nIf you have Root Access, you can do anything: read any file, delete the entire operating system, or change the rules of how the computer works.\n\n## Why is it called Root?\nThink of the file system like a tree.\n*   **Branches/Leaves:** Normal users live here. They can only affect their own little branch.\n*   **The Root:** The base of the tree. If you control the root, you control the entire tree.\n\n## The Danger\n\nRunning your computer as Root all the time is like driving a car without a seatbelt and with the doors removed.\nIf you (or a virus) make a mistake while you are Root, nothing stops you.\n*   **As a Normal User:** Malware might delete your photos.\n*   **As Root:** Malware can wipe the hard drive, install a permanent spy, and lock you out forever.\n\n## FAQs\n\n*1. How do I get Root access safely?*\nOn Linux/Mac, you use the command `sudo` (\"SuperUser DO\").\n*   `rm file` -> \"Permission Denied.\"\n*   `sudo rm file` -> \"Okay, boss. Deleted.\"\nIt asks for your password to confirm \"Are you sure you want to use your God powers for this?\"\n\n*2. Is Root different from Admin?*\nConceptually, no.\n*   **Root:** The name used in Linux/Unix/MacOS.\n*   **Administrator:** The name used in Windows.\n*   **Jailbreak/Rooting:** Gaining these rights on phones (iPhones/Androids) that normally block you from having them.\n\n### Further Reading\n\n*   **Article:** *[What is Sudo?](https://www.linux.com/training-tutorials/linux-101-introduction-sudo/)*\n*   **Definition:** *[Ubuntu's Root Sudo](https://help.ubuntu.com/community/RootSudo)*\n"
                    },
                    {
                        "id": "ssh",
                        "title": "SSH (Secure Shell)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Networking",
                            "Tools",
                            "Encryption"
                        ],
                        "content": "# SSH\n\nA secure, secret tunnel to a remote computer.\n\n**SSH** (Secure Shell) is a tool that lets you control a computer completely different from the one you are sitting at. It creates a cryptographic tunnel over the internet so that no one can spy on what commands you are sending or what passwords you are typing.\n\nIt is the standard way developers and system administrators manage servers.\n\n## How it Works\n\n1.  **The Handshake:** Your computer and the server verify each other's identity.\n2.  **The Tunnel:** They create an encrypted connection (like a lead pipe) that is transparent to you but opaque to hackers.\n3.  **The Shell:** You get a command prompt on your screen, but the commands actually run on the *remote* server.\n\n## Login Methods\n\n*   **Password:** You type a password. (Simple, but can be guessed).\n*   **SSH Keys (Better):** You have a unique digital \"Key Card\" (a file on your laptop). The server has the matching \"Lock.\" You just show up, the lock opens, and you get in without typing a password. It is much harder to steal a file than to guess a password.\n\n## FAQs\n\n*1. Is SSH only for Linux?*\nHistorically, yes. But now Windows 10/11 has it built-in too! You can open PowerShell and type `ssh user@server` right now.\n\n*2. What is the difference between SSH and VPN?*\n*   **VPN:** Connects your *entire* computer to a private network (like moving your house to a different street). Everything you do goes through it.\n*   **SSH:** connects a single *terminal window* to a specific server to run commands.\n\n### Further Reading\n\n*   **Tutorial:** *[DigitalOcean's SSH Essentials](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)*\n*   **Visual Guide:** *[How SSH Public Key Authentication Works](https://www.youtube.com/watch?v=dPAw4opzN9g)* (Video)\n"
                    },
                    {
                        "id": "supply-chain-attack",
                        "title": "Supply Chain Attack",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "CyberAttack",
                            "SupplyChainAttack"
                        ],
                        "content": "# Supply Chain Attack\n\nA **Supply Chain Attack** is a cyberattack where a hacker targets a company's *vendors* or *suppliers* rather than the company itself. \n\nInstead of trying to hack your highly secure computer, the attacker secretly infects a piece of software (like an update), hardware (like a microchip), or a service that you trust and use every day. Because you \"trust\" the supplier, your security systems let the infection in without checking it, giving the hacker a free ride into your network.\n\n## How it Works\n\nTo understand this, we must look at **Trust Transitivity**:\n\n| Principle | Explanation | The Vulnerability |\n| :--- | :--- | :--- |\n| **Interconnectedness** | No company builds everything alone. We use code, chips, and apps from others. | You inherit the security flaws of everyone you work with. |\n| **Implicit Trust** | We assume \"Official Updates\" or \"Brand New Hardware\" are safe. | Hackers abuse this trust to bypass scanning tools. |\n| **The Weakest Link** | A hacker will always attack the easiest target. | Why spend 100 days hacking Google when you can hack the small company that makes Google's office thermostats? |\n\n---\n<br>\n\n## Types of Breaches (The \"Vectors\")\n\nSupply chain attacks aren't just one thing; they come in different \"flavors\" depending on what part of the chain is broken:\n\n| Type | How it works | Famous Example |\n| :--- | :--- | :--- |\n| **Software (Upstream)** | The hacker infects the *code* or *update server* of a software vendor. Every customer who downloads the \"update\" gets infected. | **SolarWinds (2020):** Hackers hid malware in a legitimate IT management tool update. |\n| **Hardware** | The hacker tampers with physical components (chips, firmware, USBs) at the factory or during shipping before they reach you. | **Spy Chips:** Allegations of tiny spy chips added to server motherboards during manufacturing. |\n| **Open Source** | The hacker uploads a malicious package to a public code library (like npm or PyPI) with a name similar to a popular tool, hoping developers accidentally use it. | **Typosquatting:** Creating a package named `requessts` instead of `requests`. |\n\n---\n<br>\n\n## Further Reading\n\n* **Case Study:** *[The SolarWinds Orion Hack](https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know)* (The most famous example).\n* **Concept:** *[Target Data Breach (2013)](https://redriver.com/security/target-data-breach)* (Happened because of a hacked HVAC/Air Conditioning vendor).\n* **Deep Dive:** NIST's *\"[Defending Against Software Supply Chain Attacks](https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508.pdf)\".*\n"
                    },
                    {
                        "id": "vmx",
                        "title": "VMX (Virtual Machine Extension)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Virtualization",
                            "VMware",
                            "Configuration"
                        ],
                        "content": "# VMX File\n\nThe blueprint for a virtual machine.\n\nWhen you create a Virtual Machine (VM) using VMware, it isn't just one magic blob. It's a folder full of files. The **.vmx** file is the text file that describes the VM's hardware configuration.\n\nIt tells the software: \"This VM should have 4GB of RAM, 2 CPU cores, and use *this* specific hard drive file.\"\n\n## Inside the File\n\nIt is just a text file. If you open it with Notepad, it looks like this:\n\n```ini\nmemsize = \"4096\"\nnumvcpus = \"2\"\nethernet0.virtualDev = \"e1000\"\nscsi0.virtualDev = \"lsilogic\"\n```\n\n*   `memsize`: How much RAM (Memory) it gets.\n*   `numvcpus`: How many Processors it gets.\n*   `ethernet0`: What kind of Network Card it has.\n\n## FAQs\n\n*1. Can I edit this file?*\nYes, but be careful. Experts edit it to tweak settings that aren't available in the usual settings menu. If you make a typo, the VM won't start effectively \"breaking\" the machine blueprint.\n\n*2. Is VMX the hard drive?*\nNo.\n*   **.VMX:** The *Blueprint* (Text file, tiny size).\n*   **.VMDK:** The *Hard Drive* (Data file, huge size).\n\n*3. Is this used by all virtualization software?*\nNo. `.vmx` is specific to **VMware** (Fusion, Workstation, Player, ESExi).\n*   VirtualBox uses `.vbox`.\n*   Hyper-V uses `.xml` or `.vmcx`.\n\n### Further Reading\n\n*   **Documentation:** *[VMware VMX File Parameters](https://sanbarrow.com/vmx/vmx-parameters.html)* (Unofficial but excellent guide).\n*   **Official:** *[Editing the .vmx file for your VMware Fusion virtual machine](https://kb.vmware.com/s/article/1014782)*\n"
                    },
                    {
                        "id": "vpn",
                        "title": "VPN (Virtual Private Network)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Networking",
                            "Privacy",
                            "Security"
                        ],
                        "content": "# VPN\n\nA private tunnel through the public internet.\n\nThe internet is like a public highway. Everyone (hackers, your ISP, the government) can see the digital \"cars\" (data) you are driving and where you are going.\n\nA **VPN** (Virtual Private Network) builds a secure, opaque tunnel around your car. No one can see inside the tunnel to see who you are, what data you are carrying, or exactly where you are headed.\n\n## Why use it?\n\n### 1. Privacy (The Mask)\nWithout a VPN, websites see your IP address (your digital home address). With a VPN, they only see the VPN server's address. You could be in London, but the website thinks you are in New York.\n\n### 2. Security (The Armour)\nPublic WiFi (like at Starbucks) is dangerous. Hackers can easily intercept your traffic. A VPN encrypts your data, turning it into gibberish. Even if a hacker steals it, they can't read it.\n\n### 3. Access (The Teleporter)\nSome content is blocked in certain countries (Geoblocking). A VPN lets you \"tunnel out\" to a different country to access that content.\n\n## FAQs\n\n*1. Does a VPN make me anonymous?*\n**No.** It gives you *privacy*, not *anonymity*.\n*   Your ISP can't see what you do.\n*   But the **VPN Provider** CAN see what you do. You are shifting your trust from Comcast/AT&T to NordVPN/ExpressVPN. Always choose a trusted paid provider that promises \"No Logs.\"\n\n*2. Does it slow down my internet?*\nYes, slightly. Your data has to travel to the VPN server first, get encrypted, and then go to the destination. It's a detour.\n\n### Further Reading\n\n*   **Guide:** *[Wirecutter: The Best VPN Services](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/)*\n*   **Deep Dive:** *[How VPNs work (Computerphile)](https://www.youtube.com/watch?v=WVDQEoe6ZWY)* (Video)\n"
                    },
                    {
                        "id": "zero-day",
                        "title": "Zero Day",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "CyberSecurity",
                            "InformationSecurity",
                            "VulnerabilityManagement"
                        ],
                        "content": "# Zero-Day (Vulnerability & Exploit)\n\n### Formal Definition\nA \"Zero-Day\" refers to a security flaw in software that is unknown to the vendor or developer. The term implies that the developers have had **zero days** to fix or patch the issue because they were unaware of its existence before it was discovered or exploited by hackers.\n\n### The Analogy\n**The Invisible Backdoor**\nImagine a construction company builds a thousand identical houses with high-security steel doors. However, they accidentally leave a small, invisible gap under the back door that no one notices, not even the builders.\n* **Zero-Day Vulnerability:** The invisible gap.\n* **Zero-Day Exploit:** A burglar discovering they can slide a wire under that gap to unlock the door.\n* **The Risk:** Since the builders don't know the gap exists, they haven't invented a door sweep to block it. Until they do, every house is defenseless against burglars who know the trick.\n\n### Visual Aid\n<img src=\"https://upload.wikimedia.org/wikipedia/commons/5/58/Vulnerability_timeline.png\" alt=\"Zero-Day Timeline\" style=\"height: 400px; width: 750px;\" />\n\n## Further Reading\n\n* **Trend Micro:** [What is a Zero-Day Attack?](https://www.trendmicro.com/vinfo/us/security/definition/zero-day-vulnerability)\n* **Symantec (Broadcom):** [Zero-day Vulnerabilities Explained](https://us.norton.com/internet-security-emerging-threats-how-do-zero-day-vulnerabilities-work-30-seconds.html)\n* **MITRE CVE:** [Common Vulnerabilities and Exposures](https://cve.mitre.org/) (The database where vulnerabilities are eventually listed)\n"
                    }
                ]
            },
            {
                "id": "general",
                "title": "General",
                "icon": "fas fa-server",
                "desc": "General tech concepts",
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
                    },
                    {
                        "id": "gpu",
                        "title": "GPU (Graphics Processing Unit)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Hardware",
                            "Computing",
                            "Gaming"
                        ],
                        "content": "# GPU\n\nA factory with thousands of workers, instead of one genius.\n\nThe **CPU** (Central Processing Unit) in your computer is like a **Professor**: extremely smart, can do complex math (calculus), but can only do one or two things at a time.\n\nThe **GPU** (Graphics Processing Unit) is like a **Factory** full of thousands of workers: they aren't very smart (basic math only), but they can do 10,000 simple things at the exact same time.\n\n## Why is it used for AI?\n\nAI (and Video Games) require changing millions of pixels or calculating millions of numbers simultaneously.\n*   **CPU:** Solves one complex equation in 0.1 seconds.\n*   **GPU:** Solves 10,000 simple equations in 0.1 seconds.\n\n## FAQs\n\n*1. Can I use a GPU for normal work?*\nYou use it every day! It draws the windows on your screen. But for running Excel or Word, your CPU does the heavy lifting because those tasks are sequential (step-by-step), not parallel.\n\n*2. Why are they so expensive?*\nSupply and Demand. They are the shovels in the AI Gold Rush. Everyone from gamers to Google needs them to run modern software.\n\n### Further Reading\n\n*   **Video:** *[Mythbusters Demo: CPU vs GPU](https://www.youtube.com/watch?v=-P28LKWTzrI)* (The famous paintball illustration).\n*   **Explainer:** *[NVIDIA: What is a GPU?](https://www.nvidia.com/en-us/geforce/technologies/what-is-a-gpu/)*\n"
                    },
                    {
                        "id": "lidar",
                        "title": "LiDAR (Light Detection and Ranging)",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Hardware",
                            "Sensors",
                            "Robotics"
                        ],
                        "content": "# LiDAR\n\nBats using lasers instead of sound.\n\nYou know how bats use **Sonar** (Sound Navigation)? They scream, and listen for the echo to know where the wall is.\n\n**LiDAR** (Light Detection and Ranging) does the exact same thing, but with **Lasers**. It shoots millions of invisible laser beams per second and measures how long they take to bounce back.\n\n## What it sees\n\nIt creates a \"Point Cloud\"\u2014a precise 3D map of the world.\n*   **Cameras** see color (2D).\n*   **LiDAR** sees distance (3D). It knows exactly that the tree is 15.2 meters away, not 15.1.\n\n## FAQs\n\n*1. Where is it used?*\n*   **Self-Driving Cars:** The spinning bucket on top of the car. It tells the car \"There is a pedestrian 20 meters ahead.\"\n*   **iPhones:** New pros have a tiny LiDAR scanner to help with Focus and Augmented Reality (AR).\n*   **Archaeology:** Discovering lost cities hidden under thick jungle canopies by seeing \"through\" the leaves.\n\n*2. Is it safe?*\nYes. The lasers are low power and invisible. They won't hurt your eyes.\n\n### Further Reading\n\n*   **Video:** *[How LiDAR works (Velodyne)](https://www.youtube.com/watch?v=EYbhNSUnIdU)*\n*   **Article:** *[The magic of LiDAR](https://www.neonscience.org/resources/learning-hub/tutorials/lidar-basics)*\n"
                    },
                    {
                        "id": "open-source",
                        "title": "Open Source",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Software",
                            "Licensing",
                            "Community"
                        ],
                        "content": "# Open Source\n\nA recipe that everyone can cook, improve, and share.\n\nMost software (like Windows or Photoshop) is **Closed Source**. You buy the cake, but you can't see the recipe. You can't change the flavor or check if they put poison in it.\n\n**Open Source** software is when the code (the recipe) is public. Anyone can read it, change it, and distribute their own version.\n\n## Why it wins\n\n1.  **Trust:** You don't have to trust the company; you can check the code yourself.\n2.  **Innovation:** Instead of 100 employees at Microsoft working on it, you have 10,000 developers around the world fixing bugs and adding features.\n3.  **Cost:** It is usually free.\n\n## FAQs\n\n*1. How do they make money?*\nThey give the software away for free, but sell:\n*   **Support:** \"We will help you fix it if it breaks.\"\n*   **Hosting:** \"We will run it for you so you don't have to.\" (e.g., WordPress).\n*   **Features:** \"The basic version is free, but the Enterprise version costs money.\"\n\n*2. Examples?*\n*   **Linux:** Runs the entire internet and Android phones.\n*   **VLC Player:** The video player that plays everything.\n*   **Firefox:** The web browser.\n\n### Further Reading\n\n*   **Definition:** *[The Open Source Definition](https://opensource.org/osd)*\n*   **Guide:** *[Why Open Source matters](https://www.redhat.com/en/topics/open-source/what-is-open-source)*\n"
                    }
                ]
            },
            {
                "id": "iot",
                "title": "IoT",
                "icon": "fas fa-network-wired",
                "desc": "Internet of Things",
                "children": [
                    {
                        "id": "lidar",
                        "title": "LiDAR",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            ""
                        ],
                        "content": "# LiDAR (Light Detection and Ranging)\n"
                    }
                ]
            },
            {
                "id": "philosophy",
                "title": "Philosophy",
                "icon": "fas fa-brain",
                "desc": "Philosophy",
                "children": [
                    {
                        "id": "absurdism",
                        "title": "Absurdism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "Meaning",
                            "Camus"
                        ],
                        "content": "# Absurdism\n\nLaughing at the silence of the universe.\n\nHumans have an innate drive to find meaning and order. The Universe is chaotic and silent. **Absurdism** is the conflict between the two. It says: \"Life is meaningless, but we should live it anyway.\"\n\nIt doesn't say \"Give up\" ([[nihilism|Nihilism]]) or \"Create your own meaning\" ([[existentialism|Existentialism]]). It says \"Embrace the absurdity and rebel by being happy.\"\n\n## The Myth of Sisyphus\n\nAlbert Camus used the Greek myth of Sisyphus to explain this.\n*   **The Punishment:** Sisyphus pushes a boulder up a hill, only to watch it roll back down, forever.\n*   **The Absurdity:** It is pointless work.\n*   **The Victory:** If Sisyphus *accepts* his fate and finds joy in the struggle itself, he defeats the punishment. \"One must imagine Sisyphus happy.\"\n\n## FAQs\n\n*1. Is it the same as Nihilism?*\nNo.\n*   **Nihilist:** \"Nothing matters, so why bother?\" (Despair).\n*   **Absurdist:** \"Nothing matters, so let's go get ice cream!\" (Freedom).\n\n*2. How do I practice it?*\nStop looking for a \"Grand Purpose.\" Enjoy your coffee. Laugh at bad luck. Realize that because there is no cosmic scorecard, you are free to just *be*.\n\n### Further Reading\n\n*   **Book:** *[The Stranger](https://www.goodreads.com/book/show/49552.The_Stranger)* by Albert Camus.\n*   **Video:** *[Optimistic Nihilism (Kurzgesagt)](https://www.youtube.com/watch?v=MBRqu0YOH14)* (Very similar to Absurdism).\n"
                    },
                    {
                        "id": "cynicism",
                        "title": "Cynicism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "AncientGreece",
                            "Diogenes"
                        ],
                        "content": "# Cynicism\n\nLiving like a dog to be truly free.\n\nModern usage suggests a \"Cynic\" is someone who assumes people are selfish.\n**Ancient Cynicism** was a philosophy of rejecting all social conventions (money, fame, power, manners) to live in accordance with nature.\n\nThe word comes from *Kyon*, meaning \"Dog.\" The goal was to be as shameless, happy, and free as a stray dog.\n\n## The Diogenes Story\n\nDiogenes (the most famous Cynic) lived in a ceramic tub on the streets of Athens.\n*   He owned nothing but a wooden bowl (until he saw a boy drink from his hands, then smashed the bowl because it was \"unnecessary baggage\").\n*   When Alexander the Great (the most powerful man in the world) asked if he could do anything for Diogenes, he replied: *\"Yes, move. You are blocking my sunlight.\"*\n\n## FAQs\n\n*1. What is the core lesson?*\nHappiness comes from **Self-Sufficiency**. If you need nothing (no big house, no applause, no fancy clothes), nothing can be taken away from you. You are invincible.\n\n*2. Is it practical today?*\nYou don't have to live in a tub. But you can practice it by:\n*   Not caring what people think of you.\n*   Realizing you don't *need* the new iPhone to be happy.\n*   Living simply.\n\n### Further Reading\n\n*   **Article:** *[The Life of Diogenes](https://www.britannica.com/biography/Diogenes-of-Sinope)*\n*   **Video:** *[Diogenes, the Publicly-Defecating Philosopher](https://youtu.be/-A3IlRATIsI)*\n"
                    },
                    {
                        "id": "existentialism",
                        "title": "Existentialism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "Freedom",
                            "Sartre"
                        ],
                        "content": "# Existentialism\n\nYou contain the paintbrush, not just the canvas.\n\nFor objects (like a knife), **Essence precedes Existence**. (A blacksmith thinks \"I need something to cut,\" designs a knife, and then makes it). The *purpose* comes first.\n\nFor humans, **Existence precedes Essence**. You are born first (You exist), and you have NO built-in purpose. You are a blank slate. You must *create* your own essence through your choices.\n\n## The Burden of Freedom\n\nJean-Paul Sartre said we are **\"Condemned to be free.\"**\nBecause there is no God/Destiny/Nature telling you what to do, *everything* you do is your fault.\n*   You didn't \"have to\" work that job. You chose it.\n*   You didn't \"have to\" get angry. You chose it.\nThis responsibility creates \"Existential Dread\" (Anxiety).\n\n## FAQs\n\n*1. Isn't this depressing?*\nIt can be scary, but it is also empowering. It means you are not stuck. You can change your \"essence\" at any moment. You are the author of your life, not just an actor reading a script.\n\n*2. Who are the big names?*\n*   **Sartre:** Radical freedom.\n*   **Nietzsche:** Becoming the \"Ubermensch\" (Superman) by creating your own values.\n*   **Kierkegaard:** Taking the \"Leap of Faith.\"\n\n### Further Reading\n\n*   **Book:** *[Existentialism Is a Humanism](https://www.marxists.org/reference/archive/sartre/works/exist/sartre.htm)* by Jean-Paul Sartre.\n*   **Video:** *[Sartre and the Waiter](https://www.youtube.com/watch?v=xxrmEfW4on0)* (Understanding \"Bad Faith\")."
                    },
                    {
                        "id": "hedonism",
                        "title": "Hedonism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "Pleasure",
                            "Ethics"
                        ],
                        "content": "# Hedonism\n\nPleasure is the only compass.\n\n**Hedonism** is the belief that Pleasure is the supreme Good, and Pain is the supreme Evil. Therefore, the goal of life is to maximize pleasure and minimize pain.\n\nWhile often associated with partying and excess, philosophical Hedonism is often more subtle.\n\n## Types of Hedonism\n\n1.  **Cyrenaic (The Party Animal):** Instant bodily pleasure (food, drink, sex) is the best. \"Eat, drink, and be merry, for tomorrow we die.\"\n2.  **Epicurean (The Connoisseur):** Sustainable pleasure. Avoiding pain (anxiety/fear) is more important than chasing highs. A simple meal with friends is better than a banquet that gives you a hangover.\n\n## FAQs\n\n*1. Is it selfish?*\nNot necessarily. [[utilitarianism|Utilitarianism]] is a form of \"Social Hedonism\", trying to maximize the total happiness for *everyone* in society (The greatest good for the greatest number).\n\n*2. What is the \"Hedonic Treadmill\"?*\nThe problem where humans quickly return to a stable level of happiness. You buy a new car (Pleasure spike), but after a month, it's just \"your car\" (Neutral). Hedonism often fails because you need bigger and bigger doses to feel the same high.\n\n### Further Reading\n\n*   **Article:** *[Epicurus and the deeper meaning of Hedonism](https://www.dailystoic.com/epicureanism/)*\n*   **Video:** *[The Paradox of Hedonism](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)*"
                    },
                    {
                        "id": "introduction",
                        "title": "Introduction",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "Overview"
                        ],
                        "content": "# Introduction\n\nPhilosophy is the study of fundamental questions about existence, knowledge, values, reason, mind, and language. Here is a high-level overview of the major schools of thought covered in this knowledge bank.\n\n## Schools of Thought\n\n- **[[absurdism|Absurdism]]**: Laughing at the silence of the universe.\n  - *Concept*: Seeking meaning in a meaningless world is funny, not sad.\n- **[[cynicism|Cynicism]]**: Living like a dog to be truly free.\n  - *Concept*: Rejecting social norms (wealth, power, fame) to live in virtue with nature.\n- **[[existentialism|Existentialism]]**: You contain the paintbrush, not just the canvas.\n  - *Concept*: Existence precedes essence; you are not born with a purpose, you must create one.\n- **[[hedonism|Hedonism]]**: Pleasure is the only compass.\n  - *Concept*: The pursuit of pleasure and avoidance of pain is the highest good.\n- **[[law-of-attraction|Law of Attraction]]**: Like attracts like.\n  - *Concept*: The belief that positive thoughts bring positive results into a person's life.\n- **[[nihilism|Nihilism]]**: The game has no rules and no winner.\n  - *Concept*: Life is without objective meaning, purpose, or intrinsic value.\n- **[[paradox|Paradox]]**: A truth that sounds like a lie.\n  - *Concept*: A statement that contradicts itself but might still be true.\n- **[[pragmatism|Pragmatism]]**: If it works, it's true.\n  - *Concept*: Assessing theories or beliefs in terms of the success of their practical application.\n- **[[stoicism|Stoicism]]**: You cannot control the storm, only the ship.\n  - *Concept*: Happiness is found in accepting the moment as it presents itself, not in our desire to control it.\n- **[[utilitarianism|Utilitarianism]]**: The greatest good for the greatest number.\n  - *Concept*: The belief that the best action is the one that maximizes happiness and minimizes suffering. "
                    },
                    {
                        "id": "law-of-attraction",
                        "title": "Law of Attraction",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "NewAge",
                            "Psychology"
                        ],
                        "content": "# Law of Attraction\n\nLike attracts like.\n\nThe **Law of Attraction** is the belief that positive or negative thoughts bring positive or negative experiences into a person's life.\n**\"Thoughts become Things.\"**\n\nIt suggests that if you focus intensely on a goal (visualize it, feel it as if it's already true), the Universe will conspire to make it happen.\n\n## Is it Magic or Psychology?\n\n*   **The Mystical View:** Your thoughts send out energy vibrations that magnetically attract similar energy from the Universe.\n*   **The Psychological View (Confirmation Bias):** If you decide to buy a Red Tesla, you suddenly see Red Teslas everywhere. Because you are focused on \"Success,\" your brain subconsciously notices opportunities for success that you would have ignored before.\n\n## FAQs\n\n*1. Does it work?*\n*   **Scientifically:** There is no proof that thoughts change physical reality directly (telekinesis).\n*   **Practically:** Positive thinking and visualization *do* improve confidence and performance, which leads to better results.\n\n*2. What is the danger?*\n**Victim Blaming.** If you believe \"You attract what you think,\" it implies that if someone gets sick or poor, they \"attracted\" it with bad thoughts, which is cruel and untrue.\n\n### Further Reading\n\n*   **Book:** *[The Secret](https://www.thesecret.tv/)* by Rhonda Byrne (The most famous book on this).\n*   **Analysis:** *[The Psychology of the Law of Attraction](https://www.psychologytoday.com/us/blog/the-blame-game/201309/the-truth-about-the-law-attraction)*\n"
                    },
                    {
                        "id": "nihilism",
                        "title": "Nihilism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "Nietzsche",
                            "Meaning"
                        ],
                        "content": "# Nihilism\n\nThe game has no rules and no winner.\n\n**Nihilism** (from Latin *nihil*, meaning \"nothing\") is the rejection of all religious and moral principles, often in the belief that life is meaningless.\nIt suggests there is no objective Right or Wrong, no God, and no \"Grand Plan.\"\n\n## The Crisis\n\nNietzsche famously said, **\"God is dead.\"**\nHe wasn't celebrating; he was warning us. He meant that the old structure giving us meaning (Religion) was collapsing, and without it, humans would fall into despair (Nihilism).\n\n## Types\n\n*   **Existential Nihilism:** Life has no intrinsic value.\n*   **Moral Nihilism:** Nothing is truly \"Evil\" or \"Good\"; those are just human opinions.\n*   **Epistemological Nihilism:** We cannot truly \"know\" anything for sure.\n\n## FAQs\n\n*1. Is it just for edgy teenagers?*\nIt is often a phase, but it's also a serious philosophical starting point. Once you accept there are no pre-set rules, you are forced to ask: \"Okay, then what do I want to do?\"\n\n*2. How do you beat it?*\n*   **Through Art (Nietzsche):** Create beauty.\n*   **Through Absurdism (Camus):** Rebel and enjoy the ride.\n*   **Through Existentialism (Sartre):** Build your own meaning.\n\n### Further Reading\n\n*   **Video:** *[Nietzsche and Nihilism](https://www.youtube.com/watch?v=wOHH3nS0kYk)*\n*   **Article:** *[Internet Encyclopedia of Philosophy: Nihilism](https://iep.utm.edu/nihilism/)*\n"
                    },
                    {
                        "id": "paradox",
                        "title": "Paradox",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "Logic",
                            "CriticalThinking"
                        ],
                        "content": "# Paradox\n\nA truth that sounds like a lie.\n\nA **Paradox** is a statement that contradicts itself on the surface, but upon deeper reflection, reveals a truth (or exposes a flaw in our logic).\n\nIt breaks your brain's autopilot and forces you to think.\n\n## Famous Examples\n\n### 1. The Ship of Theseus (Identity)\nIf you replace one plank of a wooden ship every year, until every single part has been replaced... is it still the same ship?\n*   *If yes:* But every physical piece is different!\n*   *If no:* At what point did it become a new ship?\n\n### 2. The Liar's Paradox (Truth)\n\"This sentence is false.\"\n*   If it represents the truth -> Then it is false.\n*   If it represents a lie -> Then it is true.\nIt creates an infinite loop.\n\n### 3. The Tolerance Paradox (Society)\n\"Should a tolerant society tolerate intolerance?\"\nIf you tolerate Nazis (intolerance), they will destroy the tolerant society. Therefore, to be tolerant, you must be *intolerant* of intolerance.\n\n## FAQs\n\n*1. Why do philosophers love them?*\nThey act as \"Stress Tests\" for our definitions. We think we know what \"Same\" means, until the Ship of Theseus proves we don't.\n\n### Further Reading\n\n*   **Video:** *[The Ship of Theseus Explained](https://www.youtube.com/watch?v=d73I7aWcEIs)*\n*   **List:** *[Wikipedia: List of Paradoxes](https://en.wikipedia.org/wiki/List_of_paradoxes)*"
                    },
                    {
                        "id": "pragmatism",
                        "title": "Pragmatism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "Logic",
                            "Action"
                        ],
                        "content": "# Pragmatism\n\nIf it works, it's true.\n\nMost philosophy asks: \"Is this theory inherently true?\"\n**Pragmatism** asks: \"Does believing this theory actually help us?\"\n\nIt treats beliefs like tools. A hammer isn't \"True\" or \"False\"; it is \"Useful\" or \"Useless.\"\n\n## The Cash Value of Truth\n\nWilliam James (a father of Pragmatism) said we should look for the **\"Cash Value\"** of an idea.\n*   *Example:* \"Do we have Free Will?\"\n    *   **Metaphysics:** Let's debate for 2,000 years.\n    *   **Pragmatism:** If I believe I have free will, I act better and improve my life. If I believe I am a robot, I get lazy. Therefore, acting *as if* I have free will is the \"True\" choice.\n\n## FAQs\n\n*1. Is it just \"The ends justify the means\"?*\nNo. That is Machiavellianism.\nPragmatism is about testing Truth by its consequences. If a belief makes you miserable and passive, it is a \"bad\" belief, even if it seems logically sound.\n\n*2. Is it anti-science?*\nNo, Science *is* pragmatic! Scientists don't say \"Gravity is the absolute final truth.\" They say \"Gravity is the best model we have right now that allows us to build bridges that don't fall down.\"\n\n### Further Reading\n\n*   **Article:** *[Pragmatism: The Philosophy of Action](https://plato.stanford.edu/entries/pragmatism/)*\n*   **Video:** *[What is Pragmatism?](https://www.youtube.com/watch?v=RPlfC808EPU)*\n"
                    },
                    {
                        "id": "stoicism",
                        "title": "Stoicism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Philosophy",
                            "MarcusAurelius",
                            "Resilience"
                        ],
                        "content": "# Stoicism\n\nYou cannot control the storm, only the ship.\n\n**Stoicism** is a user's manual for the mind, written by Greek slaves and Roman Emperors. Its core goal is **Eudaimonia** (Flourishing) by focusing only on what you can control and accepting what you cannot.\n\n## The Dichotomy of Control\n\nDraw a line in the sand.\n*   **In Your Control (Internal):** Your thoughts, your actions, your character, your reactions.\n*   **Not In Your Control (External):** The weather, traffic, what people think of you, the past, the future.\n\nIf you tie your happiness to things *outside* your control (like \"I hope it doesn't rain\"), you are a slave to fortune. If you tie it to things *inside* your control (like \"I will bring an umbrella\"), you are invincible.\n\n## FAQs\n\n*1. Is it about having no emotions?*\nNo. (That is lowercase \"s\" stoicism).\nCapital \"S\" **Stoicism** is not about suppressing emotion; it's about not being *enslaved* by it. You can feel grief, but you shouldn't let it destroy your reason.\n\n*2. Who are the big three?*\n*   **Marcus Aurelius:** The Emperor. Wrote \"Meditations\" (notes to himself on how to be a good ruler).\n*   **Seneca:** The Statesman. Wrote letters on how to manage time and anger.\n*   **Epictetus:** The Slave. Taught that freedom is a mental state.\n\n### Further Reading\n\n*   **Book:** *[Meditations](https://www.goodreads.com/book/show/30659.Meditations)* by Marcus Aurelius.\n*   **Website:** *[Daily Stoic](https://dailystoic.com/)* (Great modern intro).\n"
                    },
                    {
                        "id": "utilitarianism",
                        "title": "Utilitarianism",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [],
                        "content": ""
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
                "icon": "fas fa-calendar-alt",
                "desc": "Weekly updates for 2025",
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
                        "content": "# Week 51\n\n## Cyber Security\n\n### WatchGuard Firebox Critical [[zero-day|Zero Day]] Vulnerability Exploited\n\n- Hackers are actively attacking a critical vulnerability ([[CVE]]-2025-14733) in WatchGuard Firebox firewalls\n- The flaw allows attackers to take complete control of the device remotely without needing a password.\n- CISA has added this to its \"Known Exploited Vulnerabilities\" catalog, mandating federal agencies to patch immediately; private companies are urged to do the same.\n\n*Read more about it: https://www.cisa.gov/news-events/alerts/2025/12/19/cisa-adds-one-known-exploited-vulnerability-catalog*\n\n\n---\n<br>\n\n### Coupang CEO Resigns Following Massive Data Breach\n- Following a breach exposing 34 million customers, Coupang\u2019s CEO Park Dae-jun has resigned.\n- The company was also forced by regulators to delete a controversial \"liability exemption\" clause from its terms of service.\n- This sets a major precedent in South Korea and globally that tech giants cannot use fine print to absolve themselves of responsibility for poor security.\n\n*Read more about it: https://koreajoongangdaily.joins.com/news/2025-12-19/business/industry/Coupang-removes-clause-exempting-it-from-hacking-liability-after-order-from-data-protection-agency/2482115*\n\n---\n<br>\n\n### Microsoft Teams Outage & Concurrent [[phishing|Phishing]] Wave\n- Microsoft Teams suffered a significant outage on December 19, leaving thousands of users unable to send messages.\n- Simultaneously, security researchers tracked a new wave of \"[[phishing|OAuth Phishing]]\" attacks targeting Microsoft 365 accounts.\n- Attackers are tricking users into granting malicious apps permission to access their email, rather than stealing passwords directly.\n\n*Read more about it: https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-teams-is-down-and-messages-are-delayed/*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### NVIDIA Debuts \"Nemotron 3\" [[open-model|Open Model]] Family\n\n- NVIDIA released Nemotron 3, a new family of open AI models (Nano, Super, and Ultra) designed for [[agentic-ai|Agentic AI]].\n- The models are optimized to work together in multi-step workflows (e.g., one AI plans a task, another executes it).\n- This release provides developers with powerful, efficient tools to build complex AI assistants without relying solely on closed models like GPT-4.\n\n*Read more about it: https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models*\n\n---\n<br>\n\n## General Technology\n\n### [[lidar|LiDAR]] Pioneer Luminar Technologies Files for Bankruptcy\n- Luminar, a leading company in autonomous vehicle sensors (LiDAR), filed for Chapter 11 bankruptcy on December 15.\n- The company is selling its semiconductor division to Quantum Computing Inc. to raise cash.\n- This signals a major shakeup in the self-driving car industry, as automakers face high costs and slower-than-expected adoption of autonomous tech.\n\n*Read more about it: https://investors.luminartech.com/news-events/press-releases/detail/110/luminar-technologies-inc-initiates-voluntary-chapter-11*\n\n---\n<br>\n\n### Wisk Aero Completes First Flight of Gen 6 Air Taxi ([[evtol|eVTOL]])\n- Wisk Aero (owned by Boeing) successfully flew its \"Generation 6\" air taxi for the first time on Dec 17.\n- This aircraft is fully autonomous (no pilot on board) and is designed to carry four passengers.\n- It represents a critical milestone toward certifying \"flying taxis\" for commercial use in cities.\n\n*Read more about it: https://aiaa.org/2025/12/17/wisk-completes-first-gen-6-evtol-air-taxi-flight/*\n\n---\n<br>\n\n### Rocket Lab Successful \"[[disksat|DiskSat]]\" Launch\n- Rocket Lab successfully launched its Electron rocket on Dec 19, deploying a dedicated mission for the US Space Force.\n- The payload included a unique \"DiskSat\u201c; a flat, plate-shaped satellite designed to stack efficiently inside rockets.\n- The success reinforces Rocket Lab's position as the primary competitor to SpaceX for small satellite launches.\n\n*Read more about it: https://aiaa.org/2025/12/19/rocket-lab-launches-stp-s30-disksat-mission-from-wallops-island/*\n\n---\n<br>\n"
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
                        "content": "# Week 52\n\n## Cyber Security\n\n### The \"GrinchBot\" Swarms: AI Agents Dominate Holiday Retail\n\n![GrinchBot](https://cdn.prod.website-files.com/626ff4d25aca2edf4325ff97/6746ea61913120185ec60b13_Predictions.avif)\n\n- A new wave of \"Autonomous [[agentic-ai|AI Agents]]\" (dubbed GrinchBots) decimated online inventories this week, purchasing 40% of high-demand electronics within milliseconds of restock.\n- Unlike older bots, these AI agents use \"[[computer-vision|computer vision]]\" to solve CAPTCHAs and mimic human mouse movements, making them nearly impossible to filter with standard defenses.\n- Major retailers were forced to implement \"lottery systems\" for purchases, frustrating legitimate last-minute shoppers.\n\n*Read more about it: https://www.darktrace.com/blog/ai-and-cybersecurity-predictions-for-2025*\n\n### Artemis II Mission Systems Withstand \"Red Team\" Cyber Drill\n\n![Artemis II](https://images-assets.nasa.gov/image/NHQ202512200036/NHQ202512200036~large.jpg?w=1920&h=1307&fit=crop&crop=faces%2Cfocalpoint)\n\n- Alongside the physical crew tests on December 20, NASA confirmed the successful completion of a classified \"Red Team\" cyber-defense exercise for the Orion capsule.\n- Ethical hackers attempted to jam the optical communications system (O2O) intended for the upcoming lunar flyby but failed to breach the encryption.\n- Ensuring the integrity of the data link is critical, as this will be the first crewed mission to rely heavily on laser communications from deep space.\n\n*Read more about it: https://www.nasa.gov/missions/artemis/artemis-2/artemis-ii-flight-crew-teams-conduct-demonstration-ahead-of-launch/*\n\n### \"Deepfake Family\" Voice Scams Surge Over Holidays\n- Security firms reported a 300% spike in \"Grandparent Scams\" during Christmas week, powered by high-fidelity AI voice cloning.\n- Attackers used snippets of audio from social media (TikTok/Instagram) to clone voices of younger relatives, calling older family members claiming \"emergency travel trouble.\"\n- The attacks were highly targeted, using location data to know who was actually traveling, adding terrifying credibility to the calls.\n\nFunfact: The AI just needs an ~3 second of your voice to learn your vocal pattern\n\n*Read more about it: https://investor.gendigital.com/news/news-details/2024/Gen-Reveals-Cybersecurity-Predictions-for-2025/default.aspx*\n\n## Artificial Intelligence\n\n### EU AI Act: Final Compliance Deadline Looms for \"High Risk\" Models\n- As the year ends, major US tech firms are rushing to finalize documentation for the EU AI Act's full implementation (effective Jan 2026).\n- \"High Risk\" systems (including AI used in HR, healthcare, and policing) must now prove they have human oversight and bias mitigation.\n- Several open-source projects have geo-blocked European users this week to avoid the legal liability of these strict new rules.\n\n*Read more about it: https://artificialintelligenceact.eu/high-level-summary/*\n\n### Microsoft's Copilot \"Year in Review\" Feature Criticized for Hallucinations\n- Microsoft rolled out an AI-generated \"Year in Review\" for Office 365 users, summarizing their work year.\n- Users reported bizarre [[ai-hallucination|hallucinations]], with the AI inventing meetings that never happened or congratulating users on projects they didn't work on.\n- The glitch underscores the ongoing \"grounding\" problem in Generative AI\u2014it prioritizes sounding nice over being factually accurate.\n\n**What is grounding?**\n  Grounding is making sure the AI is tethered to facts. Without it, the AI is like a creative writer who invents a fun story instead of a reporter who tells you the truth.\n\n## General Technology\n\n*Read more about it: link*\n"
                    }
                ]
            },
            {
                "id": "2026",
                "title": "2026",
                "icon": "fas fa-calendar-alt",
                "desc": "Weekly updates for 2026",
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
                        "content": "# Week 1\n\n## Cyber Security\n\n### RondoDox Botnet Exploits Next.js Servers\n\n![Rondodox](https://www.bleepstatic.com/content/hl-images/2025/11/26/bot.jpg)\n\n- The What: A new [[botnet]] campaign dubbed \"RondoDox\" has been observed actively targeting servers running the Next.js framework by exploiting a critical vulnerability known as \"[[react2shell|React2Shell]]\" ([[CVE]]-2025-55182).\n- The Detail: Attackers are using this flaw to execute remote code on vulnerable servers, subsequently deploying cryptominers and malware. The botnet specifically hunts for unpatched instances of the popular React framework used for building web applications.\n- The Impact: This poses a severe risk to web infrastructure, as Next.js is widely used by enterprise-grade applications. Successful compromise can lead to server resource theft ([[cryptojacking]]) or deeper network infiltration.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/rondodox-botnet-exploits-react2shell-flaw-to-breach-nextjs-servers/*\n\n### Fourth Wave of \"GlassWorm\" Targets macOS Developers\n\n![Glassworm](https://www.bleepstatic.com/content/hl-images/2023/10/26/apple-cpu.jpg)\n\n- The What: A persistent malware campaign known as [[glassworm|GlassWorm]] has launched its fourth wave, specifically targeting macOS developers through malicious extensions for VSCode and OpenVSX.\n- The Detail: The attackers distribute trojanized versions of cryptocurrency wallet applications and development tools. Once installed, the malware grants persistent access to the victim's machine, aiming to steal sensitive credentials and crypto assets.\n- The Impact: This highlights the growing trend of [[supply-chain-attack|Supply Chain Attack]] targeting developers. By compromising the tools developers use, attackers can potentially inject malicious code into downstream software or steal high-value intellectual property.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-glassworm-malware-wave-targets-macs-with-trojanized-crypto-wallets/*\n\n### Unleash Protocol Drained of $3.9 Million\n\n![Unleash Protocol](https://www.bleepstatic.com/content/hl-images/2025/05/16/Cryptocurrency.jpg)\n\n- The What: The decentralized finance (DeFi) platform Unleash Protocol suffered a major security breach, resulting in the theft of approximately $3.9 million in cryptocurrency.\n- The Detail: The attack was executed via an unauthorized contract upgrade. The attacker managed to hijack the platform's multisig (multi-signature) wallet controls, allowing them to approve a malicious update that drained the protocol's assets.\n- The Impact: This incident underscores the fragility of \"upgradeable\" smart contracts. If administrative keys are compromised, the immutability of the blockchain offers no protection against theft, leaving investors with significant losses.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/hackers-drain-39m-from-unleash-protocol-after-multisig-hijack/*\n\n\n## Artificial Intelligence\n\n### SoftBank Completes $40B Investment in OpenAI\n\n![SoftBank](https://www.reuters.com/resizer/v2/VHQOFULCBVKJXKTAN362B3C3MA.jpg?auth=c619e06d52a1006c896a3e677e7b86e99693c1be87eee1b6edb6ebeb4f614649&width=720&quality=80)\n\n- The What: SoftBank has officially finalized a massive $40 billion investment into OpenAI, solidifying the Japanese conglomerate's stake in the leading American AI research lab.\n- The Detail: This capital injection is expected to fund the exorbitant compute costs required for training the next generation of models (potentially GPT-6) and expanding global infrastructure.\n- The Impact: This moves OpenAI further away from its non-profit roots and deeper into the corporate mega-structure. It signals that the \"AI Arms Race\" has become too expensive for anyone but the most heavily capitalized entities to compete in.\n\n*Read more about it: https://www.reuters.com/business/media-telecom/softbank-has-fully-funded-its-40-billion-investment-openai-cnbc-reports-2025-12-30/*\n\n### OpenAI Prioritizes \"Sponsored Content\" in Answers\n\n![OpenAI](https://www.bleepstatic.com/content/hl-images/2023/03/24/ChatGPT-logo.jpg)\n\n- The What: Reports indicate that OpenAI is shifting its business model to prioritize \"sponsored content\" within its AI-generated responses, moving away from a purely subscription/API-based revenue stream.\n- The Detail: Despite initial resistance to advertising, the company is testing formats where paid partners' information appears prominently when relevant queries are asked, distinct from organic training data results.\n- The Impact: This fundamentally changes the user trust model for [[llm|Large Language Models]]. If answers are influenced by sponsorship, the perceived neutrality of AI \"reasoning\" is compromised, making it more akin to a search engine ad platform than an impartial assistant.\n\n*Read more about it: https://www.bleepingcomputer.com/news/artificial-intelligence/openais-chatgpt-ads-will-allegedly-prioritize-sponsored-content-in-answers/*\n\n### NVIDIA in Advanced Talks to Acquire AI21\n\n![NVIDIA](https://www.reuters.com/resizer/v2/GGE5ILN4FRPZHMMZ27MFAYJDGM.jpg?auth=7b2405ecd06f8278d7a0cbe09a30b8abf441451bb0389065f0daa29aec83f7e3&width=720&quality=80)\n\n- The What: Reports indicate NVIDIA is in late-stage negotiations to acquire Israeli startup AI21 Labs for approximately $2-3 billion.\n- The Detail: AI21 is known for its \"Jurassic\" large language models and specialized enterprise AI tools. The deal is described as an \"acqui-hire,\" focusing on absorbing AI21's top-tier research talent.\n- The Impact: This represents significant market consolidation. Hardware giant NVIDIA is moving vertically up the stack, owning not just the chips (H200s/Blackwell) but increasingly the models and software ecosystems that run on them.\n\n*Read more about it: https://www.reuters.com/business/nvidia-advanced-talks-buy-israels-ai21-labs-up-3-billion-report-says-2025-12-30/*\n\n### Meta Acquires \"Manus\" for Agentic AI\n\n![Manus](https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-2173579488.jpg?resize=1280,852)\n\n- The What: Meta has agreed to acquire Singapore-based startup Manus, a company specializing in [[Agentic AI|AI Agents]] for small and medium businesses (SMBs).\n- The Detail: Manus's technology focuses on autonomous agents that can execute complex multi-step workflows for businesses. Meta plans to integrate this directly into its enterprise offerings, potentially within the WhatsApp/Messenger business ecosystem.\n- The Impact: This signals a shift from \"Chatbots\" (which just talk) to \"Agents\" (which do work). Meta is betting that the future of business messaging involves AI that can autonomously handle customer service, booking, and sales tasks.\n\n*Read more about it: https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about/*\n\n## General Technology\n\n### New \"Microchip\" Enables Quantum Control\n\n![Quantum](https://www.sciencedaily.com/images/1920/quantum-computing-optical-fiber-array.webp) \n\n- The What: Researchers have developed a new microchip-sized device capable of controlling laser frequencies with extreme precision, a critical step for scalable quantum computing.\n- The Detail: Published in ScienceDaily, the research details how this chip uses a fraction of the power required by traditional bulky systems to stabilize the lasers needed to manipulate quantum bits (qubits).\n- The Impact: Reducing the size and power consumption of control hardware is one of the biggest hurdles in moving quantum computers from the lab to commercial reality. This chip could accelerate the timeline for practical quantum processors.\n\n*Read more about it: https://www.sciencedaily.com/releases/2025/12/251226045341.htm*\n\n### NYC Mayoral Inauguration Bans Flipper Zero and Raspberry Pi\n\n![Flipper Zero](https://www.bleepstatic.com/content/hl-images/2023/01/03/flipper-zero.jpg)\n\n- The What: For the 2026 inauguration of New York City Mayor Zohran Mamdani, officials have explicitly added the Flipper Zero and Raspberry Pi devices to the list of banned items.\n- The Detail: The Flipper Zero is a portable multi-tool for geeks that can interact with radio protocols (RFID, NFC, Sub-GHz). While legal, it has gained a reputation in security circles for its ability to clone badges or disrupt wireless signals.\n- The Impact: This is one of the first high-profile public events to specifically blacklist \"hacker tools\" by name, acknowledging the physical security risks posed by accessible, pocket-sized cyber-physical devices.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/nyc-mayoral-inauguration-bans-flipper-zero-raspberry-pi-devices/*\n\n### US Grants Chip Export Waivers to Samsung & SK Hynix\n\n![Samsung & SK Hynix](https://www.reuters.com/resizer/v2/43SUW2D6SZNEVE5W7LJWOZSOQU.jpg?auth=ad93f2f983b5d1fda4c41a88a4ff49b15399dfa287e30ab6f95b35175a5ded94&width=720&quality=80)\n\n- The What: The US government has granted a renewed annual license to South Korean chip giants Samsung and SK Hynix, allowing them to continue shipping advanced chip manufacturing equipment to their facilities in China through 2026.\n- The Detail: This waiver is a critical exception to the strict US export controls designed to limit China's semiconductor capabilities. It allows these companies to maintain their existing massive memory chip fabrication plants in China.\n- The Impact: This decision stabilizes the global memory chip supply chain for the coming year. Without it, global prices for RAM and Flash storage (used in everything from phones to servers) would likely have spiked due to production disruptions.\n\n*Read more about it: https://www.reuters.com/world/china/samsung-wins-us-annual-approval-chipmaking-tool-shipments-china-source-says-2025-12-30/*\n\n### SpaceX Hints at 2026 IPO\n\n![SpaceX](https://static.scientificamerican.com/dam/m/6bef183ef9b42e99/original/Falcon-9.jpg?m=1766602578.408&w=1200)\n\n- The What: Following a court victory reinstating Tesla stock options, Elon Musk has publicly hinted that SpaceX may finally initiate its Initial Public Offering (IPO) in 2026.\n- The Detail: Analysts suggest a valuation potentially exceeding $1.5 trillion. The move would transition the world's dominant private spaceflight company into the public markets, opening it to retail investors.\n- The Impact: A SpaceX IPO would be the most significant financial event in the aerospace sector in decades, likely flooding the industry with capital and forcing competitors to accelerate their own capitalization strategies to survive.\n\n*Read more about it: https://www.scientificamerican.com/article/spacex-could-go-public-in-2026-what-does-that-mean-for-space-exploration/*\n"
                    },
                    {
                        "id": "Week 2",
                        "title": "Week 2",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 3 January 2026 - 9 January 2026.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "content": "# Week 2\n\n## Cyber Security\n\n### Critical RCE Flaws Patched in Veeam Backup\n\n![Veeam](https://www.bleepstatic.com/content/hl-images/2024/11/08/Veeam.jpg)\n\nDate: 2026-01-07\n\n- Veeam released urgent patches for its Backup & Replication software to fix a critical vulnerability ([[cve|CVE]]-2025-59470) and two high-severity flaws.\n- The flaw allows low-privileged users, such as backup operators, to execute arbitrary code remotely (RCE) by manipulating backup configuration files or password parameters.\n- Given Veeam's ubiquity in enterprise disaster recovery, unpatched servers act as a prime gateway for attackers to seize control of backup data and demand extortion payments.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-veeam-vulnerabilities-expose-backup-servers-to-rce-attacks/*\n\n### China-Linked Bad Actors Exploit VMware ESXi zero-day Chain\n\n![VMware](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm8E9a8qNOO2_xOS89H3cvGDWPpRKo2WRFf41jVFbT6TGf62B4tUg2HJVFblopdAftu8NYjNO-S2MF-_VOr6mHghokD_zhl8Ybf-H8XLhw5_E4tDfkvIfjltzVwsOo-BK731rpbx2-eClOz4yN3Nw8nHXZaRo9ATkbzTLNIP9j7OaeHCdebT_S8uXri6Iu/s790-rw-e365/vmware.jpg)\n\nDate: 2026-01-09\n\n- Chinese-speaking bad actors utilized a chain of three [[zero-day|zero-day]] vulnerabilities ([[cve|CVE]]-2025-22224, 22225, 22226) to escape virtual machines and compromise host systems.\n- Successful exploitation of the issue could permit a malicious actor with admin privileges to leak memory from the Virtual Machine Executable ([[vmx|VMX]]) process or execute code as the [[vmx|VMX]] process.\n- The attack vector originated from a compromised SonicWall [[vpn|VPN]], allowing attackers to deploy a toolkit named \"MAESTRO\" and a malicious driver to execute code on the [[hypervisor|Hypervisor]] level.\n- This highlights a sophisticated escalation where attackers can bypass standard isolation protections, putting critical virtualized infrastructure at severe risk of [[ransomware|Ransomware]] deployment.\n\n*Read more about it: https://thehackernews.com/2026/01/chinese-linked-hackers-exploit-vmware.html*\n\n### Critical Flaws Expose 50k+ Coolify Instances to Root Takeover\n\n![Coolify](https://image-optimizer.cyberriskalliance.com/unsafe/1920x0/https://files.cyberriskalliance.com/wp-content/uploads/2025/09/AdobeStock_1364130870.jpg)\n\nDate: 2026-01-09\n\n- Security researchers have disclosed 11 critical vulnerabilities in Coolify, an open-source self-hosting platform, with severity scores reaching the maximum [[cvss|CVSS]] rating of 10.0.\n- The flaws include massive security gaps such as the exposure of private [[ssh|SSH]] keys (CVE-2025-64420) and [[command-injection|Command-Injection]] bugs ([[cve|CVE]]-2025-59157) that allow low-privileged users to execute arbitrary code.\n- With over 52,000 instances currently exposed online, unpatched servers are at immediate risk of total compromise, allowing attackers to escape container environments and seize full control of the host infrastructure.\n\n*Read more about it: https://www.scworld.com/brief/nearly-a-dozen-coolify-flaws-put-servers-at-risk*\n\n## Artificial Intelligence\n\n### Google Rolls Out Speed-Focused Gemini 3 Flash Model\n\n![Gemini 3 Flash](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-16.png)\n\nDate: 2026-01-03\n\n- Google has globally deployed \"Gemini 3 Flash,\" a new iteration of its model designed specifically for low-latency, real-time responses in Search and mobile ecosystems.\n- The model powers a new \"AI Mode\" in Google Search, capable of verifying its own answers to minimize [[ai-hallucination|AI-Hallucination]] before presenting them to the user.\n- This marks a shift from \"larger is better\" to \"faster and more reliable,\" directly targeting users who need instant, verified information rather than creative generation.\n\n*Read more about it: [Boston Institute of Analytics](ht tps://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*\n\n### India Launches \"Skill the Nation\" AI Initiative\n\n![Skill the Nation](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-17.png)\n\nDate: 2026-01-03\n\n- The Indian government announced the SOAR (Skilling for AI Readiness) initiative, aiming to upskill the workforce for an AI-centric economy.\n- Announced by President Murmu, the program shifts the focus of AI from a \"tech sector issue\" to a national GDP driver, with specific training mandates.\n- This represents one of the largest state-sponsored AI literacy pushes, potentially positioning India as a massive talent hub for the global [[generative-ai|Generative-AI]] supply chain.\n\n*Read more about it: [Boston Institute of Analytics](https://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*\n\n\n### Perplexity launches free AI tool for law enforcement agencies\n\n![Perplexity](https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg)\n\nDate: 2026-01-08\n\n- Perplexity has released a specialized enterprise AI platform designed for law enforcement and emergency responders, offered free to qualifying agencies for one year.\n- The tool allows officers to analyze crime scene photos, bodycam transcripts, and incident reports in real-time, though Perplexity states the data is isolated and not used for model training.\n- While aimed at reducing police paperwork, the launch has ignited immediate privacy debates regarding the reliability of AI analysis in criminal justice and the potential for automated bias in policing.\n\n*Read more about it: [Investing.com](https://in.investing.com/news/company-news/perplexity-launches-free-ai-tool-for-law-enforcement-agencies-93CH-5179360)*\n\n### OpenAI and SoftBank Invest $1B in \"Stargate\" Energy Project\n\n![Stargate](https://media.gettyimages.com/id/2243573116/photo/the-openai-logo-appears-on-a-smartphone-screen-reflecting-an-abstract-illustration-dominated.jpg?s=612x612&w=0&k=20&c=Bm-p9812p4vS8LpdeOV9X-caneeclVR3bIg-1lic_5A=)\n\nDate: 2026-01-09\n\n- OpenAI and SoftBank Group have jointly invested $1 billion into SB Energy to build massive renewable energy infrastructure for the upcoming \"Stargate\" data center project.\n- The partnership focuses on supplying 1.2 gigawatts of power, enough to light up a major city, specifically to support the immense compute requirements of OpenAI's next-generation models.\n- This move signals that power availability, not just chip supply, is now the primary bottleneck for AI scaling, forcing tech giants to become energy infrastructure developers.\n\n*Read more about it: [OpenAI Official Blog](https://openai.com/index/stargate-sb-energy-partnership/)*\n\n### Allianz Deploys Anthropic's Claude to Global Workforce\n\n![Allianz](https://www.pymnts.com/wp-content/uploads/2025/07/Allianz-.jpg?w=768)\n\nDate: 2026-01-09\n\n- Insurance giant Allianz announced a global partnership with Anthropic to integrate the Claude AI model into its daily operations across insurance, claims, and compliance.\n- Unlike standard chatbots, this integration will embed Claude directly into Allianz's core risk assessment workflows to automate complex document processing and claims analysis.\n- This represents one of the largest enterprise deployments of 2026 so far, signaling a shift where traditional industries are moving from \"AI experiments\" to full-scale production dependencies.\n\n*Read more about it: [PYMNTS](https://www.pymnts.com/artificial-intelligence-2/2026/allianz-taps-anthropic-to-help-deploy-ai-throughout-its-insurance-business/)*\n\n### Amazon\u2019s Ring rolls out controversial, AI-powered facial-recognition feature to video doorbells\n\nDate: 2026-01-09\n\n![Ring](https://techcrunch.com/wp-content/uploads/2024/08/ring_battery_doorbell_2024.jpg)\n\n- Amazon's Ring has begun deploying AI-powered facial recognition features that can identify specific individuals rather than just detecting generic motion.\n- The \"Familiar Faces\" update allows the system to tag known visitors, a feature that has sparked renewed debate regarding biometric privacy in consumer electronics.\n- While offering convenience for users to screen visitors, the mainstreaming of granular surveillance in home security raises concerns about data retention and neighborhood privacy.\n\n## General Technology\n\n### Intel Launches \"Panther Lake\" on Historic 18A Process\n\n![Intel](https://mms.businesswire.com/media/20260105738564/en/2682502/4/ntel-Core-Ultra-processor-series3-with-Arc-GPU.jpg)\n\nDate: 2026-01-08\n\n- At CES 2026, Intel officially debuted its Core Ultra Series 3 processors (codenamed \"Panther Lake\"), the first consumer chips built on its advanced 18A Node manufacturing process.\n- These chips utilize \"RibbonFET\" transistors to deliver a massive leap in efficiency, with Intel claiming up to 27 hours of battery life and a 77% boost in gaming performance over previous generations.\n- This is a \"make or break\" moment for US semiconductor manufacturing; successfully shipping 18A proves Intel can arguably match or beat TSMC\u2019s technology, potentially reshaping the global chip supply chain.\n\n*Read more about it: [Extreme Tech](https://www.extremetech.com/computing/intel-debuts-core-ultra-series-3-cpus-from-its-18a-node)*"
                    }
                ]
            }
        ]
    }
};