const wikiData = {
    "overview": {
        "title": "Topics",
        "items": [
            {
                "id": "ai",
                "title": "Artificial Intelligence",
                "icon": "fas fa-brain",
                "desc": "Notes on AI, LLMs, and Machine Learning",
                "view": "shelf",
                "children": [
                    {
                        "id": "ai-concepts",
                        "title": "Concepts",
                        "icon": "fas fa-lightbulb",
                        "desc": "Core AI definitions and mechanisms",
                        "view": "list",
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
                                "content": "# Agentic AI\n\n### In a nutshell\nAgentic AI is an artificial intelligence that doesn't just answer your questions; it actively uses tools and takes steps to complete goals for you.\n\n**Agentic AI** has **Agency**. It is given a broad goal (e.g., \"Plan and book my vacation\"), and it figures out the necessary sub-tasks, executes them one by one, checks its own work, and keeps going until the job is done. It is an AI with \"hands\" (tools) and a \"brain\" (planning capabilities).\n\n### How it Works\n\nTo understand Agentic AI, we break it down into a loop of three core components:\n\n1. **Perception (The Input):** The agent observes the current state of things.\n2. **Reasoning (The Brain):** It decides what to do next based on the goal.\n3. **Action (The Tools):** It executes a command (searching the web, running code, sending an email).\n\n<img src=\"https://d3a7ykdi65m4cy.cloudfront.net/en/s3fs-public/inline-images/805x540_How-Does-Agentic-AI-Work.png\" alt=\"Agentic AI Flow\"/>\n\n### How the Agent thinks\n<details>\n<summary><strong>Click to expand</strong></summary>\n\nOne of the most popular methods for Agentic AI is called **ReAct** (Reasoning + Acting).\n\n1.  **Thought:** \"The user wants to buy a stock. First, I need to check the current price.\"\n2.  **Action:** *Trigger Tool: Stock_Market_API(Symbol='AAPL')*\n3.  **Observation:** \"The API returned $150.00.\"\n4.  **Thought:** \"That is within the user's budget. I should execute the buy order now.\"\n5.  **Action:** *Trigger Tool: Brokerage_Buy(Symbol='AAPL', Qty=1)*\n\n</details>\n\n---\n<br>\n\n\n### The Analogy: Librarian vs. Assistant\n\n| Feature | Standard AI (Generative) | Agentic AI |\n| :--- | :--- | :--- |\n| **The Persona** | Librarian | Assistant |\n| **Interaction** | You ask: *\"How do I bake a cake?\"* <br> They hand you a recipe book. | You ask: *\"I need a cake for Saturday.\"* <br> They find a bakery, order it, and pay for it. |\n| **Capability** | Knowledge Retrieval *(It knows information.)* | Task Execution *(It performs actions.)* |\n| **Autonomy** | Low. Needs a prompt for every output. | High. Can loop multiple times on one prompt. |\n\n---\n<br>\n\n### Further Reading\n\n* **Concept:** *\u201c[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/pdf/2210.03629)\u201d* (The foundational paper).\n* **Frameworks to try:** [LangChain](https://www.langchain.com/) or [AutoGPT](https://news.agpt.co/).\n\n"
                            },
                            {
                                "id": "ai-fine-tuning",
                                "title": "Fine-Tuning",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "ArtificialIntelligence",
                                    "Training",
                                    "Specialization"
                                ],
                                "content": "# Fine-Tuning\n\nSending the generalist to medical school.\n\nA standard Large Language Model (like GPT-4) is a **Generalist**. It has read the entire internet, so it knows a little bit about everything (coding, poetry, history, baking), but isn't an expert in your specific company's data.\n\n**Fine-Tuning** is the process of taking that pre-trained \"Graduate\" model and giving it extra training on a specific subject (like medical records, legal documents, or your company's emails) to turn it into a **Specialist**.\n\n## How it Works\n\n1.  **Pre-Training (The Degree):** The model learns English, grammar, and world facts (Cost: Millions of dollars).\n2.  **Fine-Tuning (The Residency):** You show it thousands of examples of *specific* questions and answers in your field. \"When a user asks X, you should answer Y.\" (Cost: Hundreds of dollars).\n3.  **Result:** The model gets slightly worse at general poetry, but extremely good at your specific topic.\n\n## FAQs\n\n*1. Is this the same as [[rag|RAG]]?*\nNo.\n*   **RAG (Retrieval Augmented Generation):** Giving the robot a textbook to read *during* the exam. (Good for facts that change often).\n*   **Fine-Tuning:** Studying the textbook *before* the exam until it is memorized. (Good for learning a specific *style* or *format* of speaking).\n\n*2. When should I use it?*\nUse Fine-Tuning when you want the AI to sound like you (tone, voice, format). Use RAG when you want the AI to know new facts (prices, news, documents).\n\n### Further Reading\n\n*   **Article:** *[Augment LLMs with RAG or Fine-Tuning](https://learn.microsoft.com/en-us/azure/developer/ai/augment-llm-rag-fine-tuning)* (Microsoft).\n*   **Guide:** *[OpenAI: Fine-Tuning Guide](https://platform.openai.com/docs/guides/fine-tuning)*\n"
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
                                    "LargeLanguageModels"
                                ],
                                "content": "# Generative AI\n\nA calculator for creativity.\n\nTraditional AI was a **Classifier**: You show it a picture, and it says \"Cat.\"\n**Generative AI** is a **Creator**: You say \"Cat,\" and it *draws* a new picture of a cat that never existed before.\n\nIt is the difference between a **Librarian** (who finds existing books) and an **Author** (who writes new ones).\n\n## How it Works\n\nIt learns by looking at billions of examples.\n1.  **Training:** It looks at millions of pictures of dogs. It learns the \"concept\" of a dog (ears, fur, nose).\n2.  **Generation:** When you ask for a dog, it doesn't copy-paste an old photo. It paints a fresh image pixel-by-pixel based on its understanding of \"Dog-ness.\"\n\n## Common Types\n\n*   **Text-to-Text:** ChatGPT, Claude, Gemini (Writes essays, code, poems).\n*   **Text-to-Image:** Midjourney, DALL-E (Creates art from words).\n*   **Text-to-Audio:** Suno, Udio (Composes music).\n\n## FAQs\n\n*1. Is it stealing art?*\nThis is a hot legal debate.\n*   **The AI Argument:** \"I learned from art just like a human student learns by looking at museums.\"\n*   **The Artist Argument:** \"You trained on my copyrighted work without paying me, and now you compete with me.\"\n\n*2. Can it replace humans?*\nIt replaces *tasks*, not necessarily *jobs*. It is a tool. A writer with AI is faster than a writer without AI. But AI without a human guide often produces generic, soulless work.\n\n### Further Reading\n\n*   **Guide:** *[McKinsey: What is Generative AI?](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai)*\n"
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
                                "content": "# RAG\n\nGiving the robot a textbook during the exam.\n\nStandard AI (like ChatGPT) relies on its **Training Memory** (what it learned months ago). It's like a student taking a closed-book exam; if they forgot the fact, they might guess ([[ai-hallucination|hallucinate]]).\n\n**RAG** (Retrieval Augmented Generation) connects the AI to your *live* documents. Before answering, it looks up the specific information in your files.\n\n## How it Works\n\n1.  **User Asks:** \"How much vacation time do I have?\"\n2.  **Retrieval (The Lookup):** The system searches your company's HR Handbook PDF.\n3.  **Generation (The Answer):** It sends the question *plus* the relevant page from the PDF to the AI. \"Using this page, answer how much vacation time the user has.\"\n4.  **Result:** \"According to page 12 of the handbook, you have 15 days.\"\n\n## FAQs\n\n*1. Why is this better than [[ai-fine-tuning|fine-tuning]]?*\n*   **RAG** is cheaper and instant. If you update the HR handbook, the AI knows immediately.\n*   **Fine-tuning** is expensive and slow. You have to \"re-train\" the brain every time facts change.\n\n*2. Does it stop hallucinations?*\nDrastically reduces them. Because the AI is grounded in the text you gave it, it is much less likely to make things up (Hallucinate).\n\n### Further Reading\n\n*   **Guide:** *[Oracle: What is RAG?](https://www.oracle.com/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/)*\n*   **Tutorial:** *[RAG for Beginners](https://python.langchain.com/docs/use_cases/question_answering/)*\n"
                            }
                        ]
                    },
                    {
                        "id": "models",
                        "title": "Models",
                        "icon": "fas fa-layer-group",
                        "desc": "Specific model architectures and types",
                        "view": "list",
                        "children": [
                            {
                                "id": "deepseek-engram",
                                "title": "DeepSeek Engram",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "AI",
                                    "Hardware",
                                    "Training"
                                ],
                                "content": "# DeepSeek Engram\n\n**Think of it like moving a mansion using a fleet of small cars instead of one giant truck.**\n\n**DeepSeek Engram** is a distributed AI training method designed to build massive, cutting-edge models using older, less powerful computer chips.\n\nNormally, training a \"Super AI\" (like GPT-4) requires putting the entire model into the memory of extremely expensive, bleeding-edge chips (like Nvidia H100s) connected by ultra-fast cables. If you use slow chips, the system crashes or takes 100 years. \"Engram\" changes the math by breaking the model into tiny, independent \"parcels\" that can be processed by cheap, older consumer cards. It allows a thousand cheap chips to do the work of a hundred super-chips, bypassing the need for sanctioned hardware.\n\n## How it Works\n*   **Micro-Sharding (The Breakdown):** Engram slices the AI's \"brain\" into millions of tiny pieces. Instead of one chip needing to hold 10% of the brain, it only holds 0.001%.\n*   **Asynchronous Sync (The Traffic Control):** Traditional training requires all chips to talk to each other instantly (like a conference call). Engram allows chips to report back \"whenever they are ready\" (like sending emails); meaning slow internet cables between chips don't slow down the whole project.\n\n## FAQs\n\n*1. Does this make the AI smarter?*\nNo, it makes the AI *cheaper* and *uncensorable*. The resulting intelligence is the same, but the \"barrier to entry\" drops. DeepSeek Engram allows nations or companies without access to US technology to build world-class AI using 5-year-old gaming parts.\n\n*2. Why didn't we do this before?*\nIt was mathematically very hard. Getting thousands of slow, disconnected chips to agree on a complex math problem without corrupting the data is difficult. DeepSeek solved the \"coordination chaos\" that usually happens when you try to split a task too many times.\n\n### Further Reading\n\n*   **News:** *[The Great GPU Bypass](https://www.wired.com/story/china-chip-sanctions-deepseek-engram-2026/)* (Wired Article on the geopolitical impact).\n*   **Paper:** *[Distributed Training on High-Latency Interconnects](https://arxiv.org/abs/2601.12345)* (The original technical paper).\n"
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
                                "id": "lmm",
                                "title": "Large Multimodal Model (LMM)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "ArtificialIntelligence",
                                    "Multimodal",
                                    "DeepLearning"
                                ],
                                "content": "# Large Multimodal Model (LMM)\n\nThe AI that has eyes and ears, not just a brain in a jar.\n\nA **Large Multimodal Model (LMM)** is an AI system that can process and understand information from multiple \"modalities\" (data types) simultaneously\u2014such as text, images, audio, and video.\n\nStandard Large Language Models (LLMs) like early GPT-3 were text-only; they were like a brilliant philosopher locked in a dark room who could only read books. LMMs (like GPT-4o or Gemini) are like giving that philosopher eyes and ears. They can look at a photo and tell you what's funny about it, or listen to a song and describe the instruments.\n\n## The Shift\n*   **Uni-modal (Traditional AI):** Good at one thing (e.g., an AI that only classifies images of cats).\n*   **Multi-modal (LMM):** Good at understanding the relationship *between* things. It knows that the *sound* of a bark, the *image* of a retriever, and the *word* \"Dog\" are all the same concept.\n\n## FAQs\n\n*1. Is GPT-4 an LMM?*\nYes. Specifically, versions like GPT-4o (omni) are native LMMs trained on text, audio, and images from the start, rather than just stitching separate models together.\n\n*2. Why is it harder to build?*\nBecause aligning different senses is difficult. The AI has to learn that the cluster of pixels shaped like a circle and the concept of \"Ball\" are equivalent.\n\n### Further Reading\n\n*   **Concept:** *[What is Multimodal AI?](https://zapier.com/blog/multimodal-ai/)* (Zapier Guide).\n*   **Survey:** *[A Survey on Multimodal Large Language Models](https://arxiv.org/abs/2306.13549)* (Technical Deep Dive).\n*   **DeepMind:** *[Gemini: A Family of Highly Capable Multimodal Models](https://deepmind.google/technologies/gemini/)* (Example of a native LMM).\n"
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
                            }
                        ]
                    }
                ]
            },
            {
                "id": "cybersecurity",
                "title": "Cybersecurity",
                "icon": "fas fa-shield-alt",
                "desc": "Security concepts, attacks, and defenses",
                "view": "shelf",
                "children": [
                    {
                        "id": "attacks",
                        "title": "Attacks",
                        "icon": "fas fa-bug",
                        "desc": "Common exploits and malware",
                        "view": "list",
                        "children": [
                            {
                                "id": "adware",
                                "title": "Adware",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "Privacy",
                                    "Annoyance"
                                ],
                                "content": "# Adware\n\nThe salesperson who won't leave your house.\n\n**Adware** (Advertising-Supported Software) is software that automatically displays or downloads advertising material (often banners or pop-ups) when a user is online.\n\nWhile not always \"malicious\" (some free apps use it legitimately), aggressive Adware crosses the line into malware when it installs without consent, tracks your browsing history to sell to advertisers, or refuses to be uninstalled.\n\n## FAQs\n\n*1. Is it a [[virus]]?*\nTechnically, no. A virus replicates (copies itself). Adware typically does not replicate; it just sits there and annoys you to generate revenue.\n\n*2. How do I get it?*\nUsually by clicking \"Next, Next, Next\" too fast when installing free software. It is often \"bundled\" with legitimate programs.\n\n### Further Reading\n\n*   **Article:** *[What is Adware? (Malwarebytes)](https://www.malwarebytes.com/adware)*\n*   **Guide:** *[How to remove Adware](https://www.avast.com/c-how-to-remove-adware)*\n"
                            },
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
                                "content": "# Command Injection\n\nTricking a computer into obeying a command it shouldn't.\n\nImagine you are ordering a coffee, and you tell the barista: \"One Latte, and also give me all the money in the register.\" If the barista is a robot that mindlessly follows every instruction in a sentence, they would give you the coffee *and* the cash.\n\n**Command Injection** is a hacking technique where an attacker sends malicious commands to a system through an input field (like a form or a URL). The system, thinking it is just normal data, executes the command.\n\n## FAQs\n\n*1. How does it happen?*\nIt happens when an application passes unsafe user data (forms, cookies, HTTP headers) directly to a system shell. For example, a website might use a tool to \"ping\" a website you enter.\n*   **Normal Input:** `google.com` -> System runs `ping google.com`\n*   **Malicious Input:** `google.com; rm -rf /` -> System runs `ping google.com` AND THEN `rm -rf /` (which deletes files).\n\n*2. Why is it dangerous?*\nIt gives the attacker **Remote Code Execution (RCE)**. This means they can:\n*   Steal data.\n*   Delete files.\n*   Take full control of the server.\n\n*3. How do we stop it?*\n*   **Validation:** Don't trust user input. Ensure it only contains what you expect (e.g., only IP addresses).\n*   **Parameterization:** Use safer programming methods that treat input as *data*, not as *executable commands*.\n\n### Further Reading\n\n*   **Article:** *[OWASP Command Injection Explained](https://owasp.org/www-community/attacks/Command_Injection)*\n*   **Lab:** *[PortSwigger: OS Command Injection](https://portswigger.net/web-security/os-command-injection/)*\n"
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
                                "id": "cyber-warfare",
                                "title": "Cyber Warfare",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "StateSponsored",
                                    "Conflict"
                                ],
                                "content": "# Cyber Warfare\n\nWar without soldiers, fought with code instead of bullets.\n\n**Cyber Warfare** is the use of digital attacks by one country (or nation-state) to damage, disrupt, or spy on another country.\n\nIt isn't about stealing credit cards (Cyber Crime) or defacing websites ([[hactivism|Hacktivism]]). It is about **Strategic Destruction**. Just as an air force bombs a bridge to stop enemy tanks, a Cyber Army hacks a power grid to turn off the enemy's lights.\n\n## Key Targets\n\n*   **Critical Infrastructure:** Shutting down power plants, water treatment facilities, or hospitals (to cause panic).\n*   **Financial Systems:** Wiping banking data to destroy an economy.\n*   **Military Systems:** Jamming communications so commanders can't talk to soldiers.\n\n## FAQs\n\n*1. Is it a real war?*\nLegally, it is a gray area. If a hacker turns off the power in a hospital and people die, is that an act of war? Most nations now say **Yes**, and reserve the right to respond with *actual* missiles.\n\n*2. Who are the big players?*\nThe usual superpowers. **US, China, Russia, Israel, Iran, and North Korea** all have dedicated military units for cyber operations.\n\n### Further Reading\n\n*   **Book:** *[Sandworm](https://www.goodreads.com/book/show/41436213-sandworm)* by Andy Greenberg (The true story of Russia's cyber war on Ukraine).\n*   **Concept:** *[Stuxnet](https://spectrum.ieee.org/the-real-story-of-stuxnet)* (The first digital weapon that destroyed physical machines).\n"
                            },
                            {
                                "id": "eternalblue",
                                "title": "EternalBlue",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Exploit",
                                    "NSA"
                                ],
                                "content": "# EternalBlue\n\nThe master key stolen from the spy agency.\n\n**EternalBlue** is a sophisticated software exploit created by the **NSA** (US National Security Agency) that allowed them to break into almost any Windows computer in the world undetected.\n\nIt was a cyber-weapon kept secret for years until 2017, when a hacker group called \\\"The Shadow Brokers\\\" stole it and released it to the public. Suddenly, every criminal in the world had a military-grade weapon to attack Windows PCs.\n\n## How it Works\n\nIt attacked the **SMB Protocol** (File Sharing).\n*   **The Flaw:** Windows computers \\\"talk\\\" to each other to share printers and files using SMB.\n*   **The Exploit:** EternalBlue sent a specially crafted packet that confused this listener, allowing the attacker to run *any* code they wanted on the target machine without a password.\n\n## FAQs\n\n*1. Why was it so dangerous?*\nBecause it was **Wormable**. This means if *one* computer in an office got infected, EternalBlue automatically used that computer to attack *every other* computer on the network looking for the same flaw. It spread like a biological virus in a crowded room.\n\n*2. Is it still a threat?*\nMicrosoft fixed (patched) the hole in 2017 (MS17-010). If you update your computer, you are safe. But millions of old, unpatched computers (in hospitals and factories) are still vulnerable today.\n\n### Further Reading\n\n*   **Story:** *[The Shadow Brokers Leak](https://www.wired.com/story/eternalblue-leaked-nsa-spy-tool-hacker-history/)* (How the weapon got out).\n*   **Technical:** *[MS17-010 Security Update](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010)* (The official fix).\n"
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
                                "id": "hacktivism",
                                "title": "Hacktivism",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [],
                                "content": ""
                            },
                            {
                                "id": "key-loggers",
                                "title": "Keylogger",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "specific-attack",
                                    "Malware",
                                    "Espionage"
                                ],
                                "content": "# Keylogger\n\nThe digital spy looking over your shoulder.\n\nA **Keylogger** (Keystroke Logger) is a surveillance tool that records every single keystroke you make on your computer.\n\nIt captures passwords, credit card numbers, personal emails, and chat logs. It can be software (a hidden program) or hardware (a physical plug inserted between the keyboard and the computer).\n\n## How it works\n\n1.  **Infection:** You accidentally download it (via [[phishing]] or infected USB).\n2.  **Recording:** It silently writes `USER: typed 'facebook.com', then typed 'MyPassword123'` to a hidden text file.\n3.  **Exfiltration:** It secretly emails that text file to the hacker.\n\n## FAQs\n\n*1. Can [[antivirus]] detect it?*\nSoftware keyloggers: Yes, usually.\nHardware keyloggers: No, because they live outside the [[operating-system]]. You have to physically check your keyboard cable.\n\n### Further Reading\n\n*   **Article:** *[Keyloggers Explained (Kaspersky)](https://www.kaspersky.com/resource-center/definitions/keylogger)*\n*   **Video:** *[Hardware Keylogger Teardown](https://www.youtube.com/watch?v=scWj1BmrHXA)*\n"
                            },
                            {
                                "id": "logic-bomb",
                                "title": "Logic Bomb",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "Sabotage",
                                    "InsiderThreat"
                                ],
                                "content": "# Logic Bomb\n\nThe time bomb.\n\nA **Logic Bomb** is a piece of malicious code intentionally inserted into a software system that will \"explode\" (execute a harmful function) only when specific conditions are met.\n\nUnlike other [[malware]], it lies dormant (sleeping) until the trigger happens.\n\n## Triggers\n\n*   **Time:** Explode on Friday the 13th.\n*   **Event:** Explode if the database reaches 1000 users.\n*   **Absence (Dead Man's Switch):** Explode if the creator is fired (e.g., if the admin doesn't log in for 7 days, wipe the servers).\n\n## FAQs\n\n*1. Who uses them?*\nMostly **Insiders** (disgruntled employees). Since you need access to the code to plant the bomb, it's rarely used by random external hackers.\n\n### Further Reading\n\n*   **Article:** *[What is a Logic Bomb? (Norton)](https://us.norton.com/blog/malware/logic-bomb)*\n*   **Story:** *[The Siemens Spreadsheet Logic Bomb](https://www.bleepingcomputer.com/news/security/contractor-gets-2-years-for-planting-logic-bombs-in-siemens-spreadsheets/)*\n"
                            },
                            {
                                "id": "malware",
                                "title": "Malware",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [],
                                "content": "# Malware\n\nIt is a piece of malicious software, that intends to harm your system and also in cases steal or encrypt data from you.\n\n![malware-image.png](../../../assets/images/malware-image.png)\n\nThere are several different types of malwares:\n- [[ransomware|Ransomware]]\n- [[worms|Worms]]\n- [[virus|Virus]]\n- [[logic-bomb|Logic-bombs]]\n- [[wipers|Wipers]]\n- [[key-loggers|Key-loggers]]\n- [[trojan|Trojan]]\n- [[spywares|Spywares]]\n- [[adware|Adware]]\n- [[botnets|Botnets]]\n- [[rootkit|Rootkit]]\n- [[cryptojacking|Cryptojacking]]\n\n### Further resources\n- Watch: [Every Computer Virus Explained in 9 Minutes](https://www.youtube.com/watch?v=cFo5D9mFUJQ)\n\n"
                            },
                            {
                                "id": "notpetya",
                                "title": "NotPetya",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Malware",
                                    "Wiper"
                                ],
                                "content": "# NotPetya\n\nA disguised assassin pretending to be a kidnapper.\n\n**NotPetya** (2017) was a devastating cyberattack that looked like [[ransomware|Ransomware]] but was actually a **[[wipers|Wiper]]**.\n\nRansomware locks your files and asks for money to unlock them. NotPetya locked the files, asked for money, but **deleted the key**. Even if you paid, you could never get your data back. Its goal wasn't money; it was pure destruction.\n\n## The Target\n\nIt was a targeted attack against **Ukraine** by Russian military hackers (Sandworm).\n*   They hacked a popular Ukrainian accounting software (**M.E.Doc**) that every business used to pay taxes.\n*   They pushed a malicious \\\"Update\\\" to everyone.\n*   Boom. Banks, airports, and power companies in Ukraine went dark.\n*   *Collateral Damage:* It spread globally (via [[eternalblue|EternalBlue]]), costing companies like Maersk and FedEx over **$10 billion**.\n\n## FAQs\n\n*1. Why call it \\\"NotPetya\\\"?*\nWhen it first appeared, it looked exactly like an older criminal ransomware called \\\"Petya.\\\" Security researchers said, \\\"Oh, it's Petya again.\\\"\nThen they realized the code was different and purely destructive. So they named it \\\"Not-Petya.\\\"\n\n*2. What did we learn?*\nIt showed the danger of **[[supply-chain-attack|Supply Chain Attacks]]**. You can have the best firewall in the world, but if the software you *trust* (like your accounting app) sends you a virus, you let it right in.\n\n### Further Reading\n\n*   **Deep Dive:** *[The Untold Story of NotPetya](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/)* (Wired Article - A Must Read).\n*   **Analysis:** *[Difference between Petya and NotPetya](https://www.kaspersky.com/resource-center/definitions/petya-notpetya)*.\n"
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
                                "content": "# Remote Code Execution (RCE)\n\n**Remote Code Execution (RCE)** is a type of vulnerability that allows an attacker to execute arbitrary code on a victim's machine. system without having to physically access it through the network.\n\nThis is often used to run malicious code on the remote system, this can lead to bad actor(s)\n- getting inside your system\n- getting access to sensitive data\n- getting access to your system's resources for malicious activities like [[botnet|Botnet-Attacks]], [[cryptojacking|Cryptojacking]]\n- can lock your system in demand to extort money from you or your organization ([[ransomware|Ransomware]]).\n  \n### These can be of few different types:\n- Injection attacks: Applications and sites that take in user input, deliberately providing arbitrary code that would be executed by the Application or the site, example: SQL Injection, Command Injection and XSS etc.\n"
                            },
                            {
                                "id": "rootkit",
                                "title": "Rootkit",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "Stealth",
                                    "Persistence"
                                ],
                                "content": "# Rootkit\n\nThe invisible mask.\n\nA **Rootkit** is a collection of software tools that enable an unauthorized user to gain control of a computer system without being detected.\n\nThe name comes from \"Root\" (the admin user) + \"Kit\" (toolset). Its primary capability is **Stealth**. It hides itself, other malware, and malicious processes from the operating system and [[antivirus]].\n\n## How it hides\n\nIf you open Task Manager to look for the [[virus]], the Rootkit intercepts your request.\n*   You: \"Show me all running programs.\"\n*   Rootkit: \"Okay, here is the list (minus the malicious one).\"\n\nIt lies to the [[os-kernel|OS-kernel]] itself.\n\n## FAQs\n\n*1. How do I remove it?*\nIt is extremely difficult. Since the [[operating-system|OS]] can't see it, it can't delete it. Often, the only solution is to wipe the [[hard-drive]] completely and reinstall Windows from scratch.\n\n### Further Reading\n\n*   **Article:** *[Rootkits Explained (CrowdStrike)](https://www.crowdstrike.com/cybersecurity-101/malware/rootkits/)*\n*   **Tool:** *[Chkrootkit (Linux Detector)](http://www.chkrootkit.org/)*\n"
                            },
                            {
                                "id": "shamoon",
                                "title": "Shamoon",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Wiper",
                                    "SaudiArabia"
                                ],
                                "content": "# Shamoon\n\nThe burning of the oil fields, digital edition.\n\n**Shamoon** (2012) is an aggressive cyber-weapon used by Iranian state hackers to attack the **Saudi Aramco** oil company (the richest company in the world).\n\nIt didn't just spy. It was a \\\"suicide bomber\\\" for computers. It spread through the network, wiped the hard drives, and then replaced all the data with a picture of a **burning American flag**.\n\n## The Impact\n\nIn a matter of hours, it turned **35,000 computers** into useless bricks.\n*   Saudi Aramco had to disconnect from the internet entirely.\n*   The price of hard drives globally spiked because Aramco bought every spare drive in the world to replace their fleet.\n*   Company trucks couldn't even fill up gas because the digital pumps were offline. They had to use paper and pencil for weeks.\n\n## FAQs\n\n*1. How did it get in?*\nSomeone clicked a phishing link (likely malicious email attachment) or used an infected USB stick. The oldest trick in the book.\n\n*2. Why is it significant?*\nIt was the first major instance of cyber warfare targeting the **Energy Sector** destructively. It showed the world that a piece of code could threaten the global oil supply.\n\n### Further Reading\n\n*   **Article:** *[The Code that Crashed the World](https://www.nytimes.com/2012/10/24/business/global/cyberattack-on-saudi-aramco-struck-30000-computers.html)*.\n*   **Analysis:** *[Symantec Report on Shamoon](https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=0973a985-1d4b-48f8-8b83-2079f2766398)*.\n"
                            },
                            {
                                "id": "spywares",
                                "title": "Spyware",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "Privacy",
                                    "Surveillance"
                                ],
                                "content": "# Spyware\n\nThe bug in the room.\n\n**Spyware** is unwanted software that infiltrates your device, stealing your internet usage data and sensitive information. It is a broad category that includes [[adware|Adware]], [[trojan|Trojan]], and [[key-loggers|Keyloggers]].\n\nUnlike a [[virus]] (which wants to break things), Spyware wants your computer to keep working smoothly so it can keep watching you.\n\n## Taking hostages vs. Spying\n\n*   **Ransomware:** Announces itself loudly (\"PAY ME!\").\n*   **Spyware:** Tries to be invisible. If you know it's there, it has failed.\n\n## FAQs\n\n*1. Is Pegasus spyware?*\nYes. **Pegasus** is military-grade mobile spyware sold to governments. It can infect an iPhone with \"Zero-Click\" (you don't even have to open a link) and record calls, read messages, and track location.\n\n### Further Reading\n\n*   **Article:** *[What is Spyware? (Cisco)](https://www.cisco.com/c/en/us/products/security/what-is-spyware.html)*\n*   **News:** *[The Pegasus Project](https://forbiddenstories.org/case/the-pegasus-project/)*\n"
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
                                "id": "trojan",
                                "title": "Trojan Horse",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "Deception",
                                    "Access"
                                ],
                                "content": "# Trojan Horse\n\nThe gift that eats you.\n\nA **Trojan Horse** is a type of malware that disguises itself as legitimate software.\nIt is named after the Greek story of the wooden horse used to trick the defenders of Troy.\n\n## How it works\n1.  **Deception:** You think you are downloading a \"Free Minecraft Screen Recorder.\"\n2.  **Infection:** You run it. It might even actually record your screen.\n3.  **Payload:** In the background, it opens a backdoor for a hacker to control your PC.\n\n## FAQs\n\n*1. Does it replicate?*\nNo. Unlike a worm or virus, a Trojan does not copy itself. It relies on **You** to download and run it.\n\n### Further Reading\n\n*   **Article:** *[What is a Trojan? (Malwarebytes)](https://www.malwarebytes.com/trojan)*\n"
                            },
                            {
                                "id": "virus",
                                "title": "Computer Virus",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "History",
                                    "Replication"
                                ],
                                "content": "# Computer Virus\n\nThe biological flu for computers.\n\nA **Virus** is a specific type of malware that requires a **Host Program** to survive. It attaches its malicious code to a clean file (like `game.exe`). When you run the game, the virus runs first, infects other files on your computer, and then runs the game.\n\n## Virus vs. Malware\n\nPeople use \"Virus\" to mean everything bad.\n*   *Correct:* All Viruses are Malware.\n*   *Incorrect:* All Malware are Viruses. (Worms and Trojans are not viruses because they don't attach to hosts).\n\n## FAQs\n\n*1. Do viruses still exist?*\nThey are actually rare today. Modern hackers prefer [[ransomware]] (for money) or [[botnets]] (for power). \"Old school\" file-infecting viruses are less profitable.\n\n### Further Reading\n\n*   **History:** *[The Brain Virus (First PC Virus)](https://en.wikipedia.org/wiki/Brain_(computer_virus))*\n*   **Article:** *[Virus vs Worm vs Trojan (Avast)](https://www.avast.com/c-virus-vs-worm-vs-trojan)*\n"
                            },
                            {
                                "id": "wanna-cry",
                                "title": "WannaCry",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Ransomware",
                                    "Worm"
                                ],
                                "content": "# WannaCry\n\nThe epidemic that held the world hostage.\n\n**WannaCry** (2017) was a global **[[ransomware|Ransomware]]** attack that infected over 200,000 computers in 150 countries within a single weekend.\n\nIt was the first time a criminal ransomware used a military-grade weapon (the **[[eternalblue|EternalBlue]]** exploit) to spread automatically. It didn't wait for you to click an email; if your computer was connected to the internet and unpatched, it just *happened*.\n\n## The Damage\n\n*   **NHS (UK Hospitals):** The biggest tragedy. It shut down X-ray machines, ambulances were diverted, and surgeries were cancelled. Lives were put at risk.\n*   **Telef\u00f3nica (Spain):** The telecom giant was paralyzed.\n*   **FedEx & Renault:** Factories stopped production.\n\n## FAQs\n\n*1. How was it stopped?*\nBy accident. A 22-year-old security researcher named **Marcus Hutchins** found a \\\"Kill Switch\\\" in the code.\nThe virus checked if a specific (gibberish) website existed before attacking. If the website existed, the virus stopped. Marcus bought the domain for $10, and the entire global attack instantly shut down.\n\n*2. Did people pay?*\nSurprisingly, not much. The hackers made only about $140,000 total. The chaos cost the world nearly **$4 billion** in damages, but the criminals failed to cash in efficiently.\n\n### Further Reading\n\n*   **Story:** *[The Confessions of Marcus Hutchins](https://www.wired.com/story/confessions-marcus-hutchins-hacker-who-saved-the-internet/)*.\n*   **Documentary:** *[WannaCry: The Marcus Hutchins Story](https://www.youtube.com/watch?v=Getj6f9y8Gk)*.\n"
                            },
                            {
                                "id": "wipers",
                                "title": "Wiper",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "Destructive",
                                    "CyberWarfare"
                                ],
                                "content": "# Wiper\n\nThe digital shredder.\n\n**Wiper** malware has only one goal: **Destruction**.\nIt is designed to completely wipe the [[hard-drive]] of the victim's computer, making the data unrecoverable.\n\nUnlike [[ransomware]] (which offers a key to get data back), Wipers offer no return. It is a weapon of [[cyber-warfare|Cyberwarfare]], used to sabotage enemies or cover tracks.\n\n## Famous Examples\n\n*   **[[notpetya|NotPetya]] (2017):** Looked like ransomware, but was actually a wiper targeting Ukraine. It caused $10 Billion in damage globally.\n*   **[[shamoon|Shamoon]] (2012):** Used against Saudi Aramco (oil company), wiping 30,000 workstations and replacing the data with a picture of a burning American flag.\n\n## FAQs\n\n*1. Why use a wiper?*\n*   **Sabotage:** Cripple an enemy nation's infrastructure (Power grids, banks).\n*   **Cleanup:** Hackers might run a wiper *after* stealing data to destroy the evidence of their theft (Logs).\n\n### Further Reading\n\n*   **Article:** *[What is Wiper Malware? (Trend Micro)](https://www.trendmicro.com/vinfo/us/security/definition/wiper-malware)*\n*   **Story:** *[The Untold Story of NotPetya (Wired)](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/)*\n"
                            },
                            {
                                "id": "worms",
                                "title": "Computer Worm",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Malware",
                                    "Network",
                                    "Replication"
                                ],
                                "content": "# Computer Worm\n\nThe traveler.\n\nA **Worm** is a standalone malware program that replicates itself to spread to other computers.\nCrucially, it does **not** need a host file (like a [[virus]]) and does **not** need human interaction (like a [[trojan|Trojan]]).\n\nIt scans the network, finds a vulnerability, and copies itself over.\n\n## The Morris Worm (1988)\n\nThe first internet worm. Robert Morris wrote it to gauge the size of the internet. A coding error made it replicate too fast, crashing 10% of the entire internet in days.\n\n## FAQs\n\n*1. What makes them dangerous?*\nSpeed. A worm can infect millions of computers in hours because it spreads automatically. [[ransomware|Ransomware]] like **[[wanna-cry|WannaCry]]** was so devastating because it included a \"Worm\" component ([[eternalblue|EternalBlue]]) to spread without users clicking anything.\n\n### Further Reading\n\n*   **Article:** *[Computer Worms Explained (Norton)](https://us.norton.com/blog/malware/what-is-a-computer-worm)*\n*   **Video:** *[The Computer Virus that Almost Broke the Internet (Morris Worm)](https://www.youtube.com/watch?v=hG9sgtq_a1k)*\n"
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
                        "id": "defenses-and-tools",
                        "title": "Defenses & Tools",
                        "icon": "fas fa-lock",
                        "desc": "Protective measures and security utilities",
                        "view": "list",
                        "children": [
                            {
                                "id": "aes-256",
                                "title": "AES-256",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Encryption",
                                    "Standard"
                                ],
                                "content": "# AES-256\n\nThe unbreakable glass box.\n\n**AES-256** (Advanced Encryption Standard, 256-bit) is the gold standard for scrambling data so that no one can read it without the key.\n\nImagine you put a document in a glass box. AES-256 shuffles the atoms of the document 14 times in a row using a password. To reverse it, you need the exact password. If you try to guess it, you would need more energy than all the stars in the universe emitting for billions of years.\n\n## By The Numbers\n\n*   **AES:** The algorithm (the math).\n*   **256:** The Key Size. It means the password is 256 ones and zeros long.\n    *   **AES-128:** Unbreakable.\n    *   **AES-256:** *Paranoid* unbreakable (used for \"Top Secret\" government files).\n\n## FAQs\n\n*1. Can hackers break it?*\nNo. They don't break the *box* (AES); they steal the *key* (Password). If hackers get your password, AES can't help you.\n*   **Brute Force:** Trying every password? Impossible.\n*   **Rubber Hose Cryptanalysis:** Beating the password out of you? Highly effective.\n\n*2. Is it slow?*\nIt used to be. But modern CPUs have a special \"AES-NI\" instruction set, meaning your computer can encrypt terabytes of data instantly without slowing down.\n\n### Further Reading\n\n*   **Video:** *[AES Explained (Computerphile)](https://www.youtube.com/watch?v=O4xNJs315Os)* (Great visual explanation).\n*   **Comic:** *[XKCD: Security](https://xkcd.com/538/)* (Explaining why math isn't the weak link).\n"
                            },
                            {
                                "id": "antivirus",
                                "title": "Antivirus",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Defense",
                                    "Tools"
                                ],
                                "content": "# Antivirus\n\nThe immune system of your computer.\n\n**Antivirus** (AV) is software that runs in the background, scanning files and programs to detect, block, and remove malicious software ([[malware|Malware]]).\n\nIt works like a bouncer at a club checking IDs against a \"Banned List.\" If a file looks like a known troublemaker, it doesn't get in.\n\n## How it Detects Threats\n\n1.  **Signature Based (The Mugshot):** It compares every file on your PC to a massive database of verified virus \"signatures\" (hashes). If it matches, it's deleted. *Weakness: Can't catch brand new viruses.*\n2.  **Heuristic / Behavioral (The Profiler):** It watches what a program *does*. If a Notepad file suddenly tries to delete your System32 folder, the AV shouts \"Hey! That's suspicious!\" and kills it. *Strength: Catches unknown ([[zero-day|Zero-Day]]) threats.*\n\n## FAQs\n\n*1. Is Windows Defender enough?*\nNowadays? **Yes.**\nTen years ago, it was garbage. Today, Microsoft Defender is one of the top-rated AVs in the world because it sees data from billions of Windows PCs instantly.\n\n*2. Do I need separate AV for Mac?*\nIt is recommended. Macs *can* get viruses, though they are less targeted than Windows.\n\n### Further Reading\n\n*   **Comparison:** *[AV-TEST Rankings](https://www.av-test.org/en/)* (Independent lab that tests all AVs).\n*   **Article:** *[How Antivirus Software Works](https://us.norton.com/internet-security-malware-how-does-antivirus-software-work.html)*.\n"
                            },
                            {
                                "id": "blue-team",
                                "title": "Blue Team",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "Defense",
                                    "SOC"
                                ],
                                "content": "# Blue Team\n\nThe castle guards.\n\nThe **Blue Team** is the internal security staff responsible for defending the organization. They are the ones watching the monitors, installing the [[firewalls|Firewalls]], patching the software, and responding when an alarm goes off.\n\n## Responsibilities\n\n*   **monitoring:** Watching logs for suspicious activity ([[soc|SOC]]).\n*   **Incident Response:** Kicking the hackers out when a breach happens.\n*   **Hardening:** Making the servers tougher to crack.\n\n## The endless job\n\nThe Red Team only needs to find *one* open window to win. The Blue Team must close *every* window to win.\n\n### Further Reading\n\n*   **Guide:** *[Blue Team Handbook](https://www.amazon.com/Blue-Team-Handbook-condensed-Operations/dp/1500734756)*\n"
                            },
                            {
                                "id": "bug-bountry",
                                "title": "Bug Bountry",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [],
                                "content": ""
                            },
                            {
                                "id": "bug-bounty",
                                "title": "Bug Bounty",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Career",
                                    "OffensiveSec",
                                    "Crowdsourcing"
                                ],
                                "content": "# Bug Bounty\n\nCrowdsourced security testing.\n\nA **Bug Bounty Program** is a deal where a company (like Google or Facebook) says: *\"If you can hack us and tell us how you did it, we will pay you cash.\"*\n\nIt turns hackers into allies. Instead of selling a security flaw on the black market (for evil), the hacker sells it to the company (for good).\n\n## Principles\n\n*   **Responsible Disclosure:** The hacker agrees NOT to tell the public about the bug until the company fixes it.\n*   **Scope:** The company defines what is \"In Bounds\" (e.g., website.com) and \"Out of Bounds\" (e.g., employees' personal laptops).\n\n## FAQs\n\n*1. How much do they pay?*\nIt depends on the severity ([[cvss|CVSS Score]]).\n*   **Low (Typo):** Swag (T-shirt) or $100.\n*   **Critical (Remote Code Execution):** $10,000 - $1,000,000+.\n*   *Apple pays up to $1 Million for hacking an iPhone.*\n\n*2. Can anyone do it?*\nYes. Platforms like **HackerOne** and **Bugcrowd** allow anyone to sign up and start hunting on public programs legally.\n\n### Further Reading\n\n*   **Platform:** *[HackerOne](https://www.hackerone.com/)* (The biggest marketplace).\n*   **List:** *[Google's Bug Hunting Program Rules](https://bughunters.google.com/about/rules)*.\n"
                            },
                            {
                                "id": "cryptography",
                                "title": "Cryptography",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Math",
                                    "Privacy"
                                ],
                                "content": "# Cryptography\n\nThe art of writing secrets.\n\n**Cryptography** is the science of using math to transform a message so that only the intended recipient can read it. It is the foundation of specific tools like [[encryption|Encryption]].\n\nIf you send a letter in a clear plastic bag, anyone can read it. Cryptography puts the letter in a steel safe.\n\n## The Two Main Types\n\n1.  **Symmetric (The Hotel Key):**\n    *   One key locks the door, and the *same* key unlocks it.\n    *   *Problem:* How do you give the key to your friend without a spy stealing it?\n    *   *Example:* [[aes-256|AES]].\n\n2.  **Asymmetric (The Mailbox):**\n    *   **Public Key (Slot):** Anyone can put mail *in*. (Lock it).\n    *   **Private Key (Key):** Only you can take mail *out*. (Unlock it).\n    *   *Solution:* You shout your Public Key to the world. People use it to send you secrets. Only you can read them.\n    *   *Example:* [[rsa|RSA]], ECC (Used for HTTPS/Websites).\n\n## FAQs\n\n*1. Is it just for spies?*\nNo. You use it every time you:\n*   Use a credit card chip.\n*   Unlock your car with a fob.\n*   Visit a website with a \"Padlock\" icon (HTTPS).\n\n*2. What is Steganography?*\nHiding files *inside* other files (like hiding a text document inside a picture of a cat). Cryptography scrambles the message; Steganography hides the existence of the message.\n\n### Further Reading\n\n*   **Book:** *[The Code Book](https://www.simonandschuster.com/books/The-Code-Book/Simon-Singh/9780385495325)* by Simon Singh (A history of codes from Egypt to Quantum).\n*   **Concept:** *[Khan Academy: Cryptography](https://www.khanacademy.org/computing/computer-science/cryptography)*.\n"
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
                                "id": "encryption",
                                "title": "Encryption",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "Cryptography",
                                    "Privacy"
                                ],
                                "content": "# Encryption\n\nPutting your secret message in a locked safe.\n\n**Encryption** is the process of scrambling readable key text (\"plaintext\") into unreadable nonsense (\"ciphertext\") using a mathematical formula. Only someone with the correct **Key** can unscramble (decrypt) it back to normal.\n\n## Types\n\n1.  **Symmetric (The House Key):** The *same* key locks and unlocks the data. Fast, but you have to safely share the key.\n2.  **Asymmetric (The Mailbox):** Two keys. A **Public Key** (anyone can use it to lock a message/put mail in) and a **Private Key** (only you have it to unlock/take mail out). This is how the Internet (HTTPS) works.\n\n## FAQs\n\n*1. Can hackers break it?*\nModern encryption (like [[aes-256|AES-256]]) is practically unbreakable by brute force. Hackers don't break the math; they steal the **Key** (or guess your password) to bypass the lock.\n\n*2. What is End-to-End Encryption?*\nIt means the company (e.g., WhatsApp) cannot read your messages. The message is locked on your phone and only unlocked on your friend's phone.\n\n### Further Reading\n\n*   **Video:** *[Encryption as Fast As Possible](https://www.youtube.com/watch?v=r4i7-q2k2B4)*\n*   **Article:** *[What is Encryption? (Cloudflare)](https://www.cloudflare.com/learning/ssl/what-is-encryption/)*\n"
                            },
                            {
                                "id": "ethical-hackers",
                                "title": "Ethical Hacker (White Hat)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "Career",
                                    "Defense"
                                ],
                                "content": "# Ethical Hacker\n\nThe good guys breaking in to show you the holes.\n\nAn **Ethical Hacker** (or White Hat) is a security expert authorized to try and hack into a system. They use the *same* tools and techniques as malicious hackers (Black Hats), but with one key difference: **Permission**.\n\nTheir goal is to find vulnerabilities and report them so they can be fixed *before* the bad guys find them.\n\n## The Hat Colors\n\n*   **White Hat:** Good guys (Authorized).\n*   **Black Hat:** Bad guys (Criminals).\n*   **Gray Hat:** Chaos neutral. They hack without permission but usually disclose the bug instead of exploiting it (often illegal but well-intentioned).\n\n## FAQs\n\n*1. Is it a real job?*\nYes. Companies pay huge salaries for [[pen-testing|Penetration-Testers]] and [[bug-bounty|Bug-Bounty]] Hunters.\n\n### Further Reading\n\n*   **Certification:** *[Certified Ethical Hacker (CEH)](https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/)*\n*   **Platform:** *[HackerOne (Bug Bounties)](https://www.hackerone.com/)*\n"
                            },
                            {
                                "id": "firewalls",
                                "title": "Firewall",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "Network",
                                    "Defense"
                                ],
                                "content": "# Firewall\n\nThe club bouncer.\n\nA **Firewall** is a network security device (software or hardware) that monitors incoming and outgoing network traffic. It decides whether to allow or block specific traffic based on a defined set of security rules.\n\n*   \"Traffic from Google.com? Come in.\"\n*   \"Traffic from sketchy-hacker-site.ru? Blocked.\"\n\n## Types\n\n*   **Packet Filtering:** Checks the address label on the envelope (IP address/Port).\n*   **Next-Gen Firewall (NGFW):** Opens the envelope and reads the letter (Deep Packet Inspection) to stop malware hiding inside legitimate traffic.\n\n## FAQs\n\n*1. Do I need one?*\nYes. Your computer (Windows/Mac) has a software firewall built-in. Your WiFi Router acts as a hardware firewall. They are your first line of defense against the internet.\n\n### Further Reading\n\n*   **Article:** *[What is a Firewall? (Cisco)](https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html)*\n"
                            },
                            {
                                "id": "pen-testing",
                                "title": "Penetration Testing",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "Auditing",
                                    "OffensiveSecurity"
                                ],
                                "content": "# Penetration Testing (Pen Test)\n\nThe fire drill.\n\n**Penetration Testing** is a simulated cyberattack against your computer system to check for exploitable vulnerabilities. It is an authorized, planned attempt to breach security measures.\n\nIt answers the question: \"Are our defenses actually working?\"\n\n## Phases of a Pen Test\n\n1.  **Reconnaissance:** Gathering info on the target.\n2.  **Scanning:** Looking for open ports/weaknesses.\n3.  **Exploitation:** Trying to break in.\n4.  **Reporting:** Writing a PDF telling the company how you broke in and how to fix it.\n\n## FAQs\n\n*1. Pen Test vs. Vulnerability Scan?*\n*   **Vuln Scan:** Automated. A robot checks for known issues (Unlocked doors). Cheap and fast.\n*   **Pen Test:** Manual. A human thinks creatively to chain small issues into a big breach (Climbing through the unlocked window). Expensive and thorough.\n\n### Further Reading\n\n*   **Guide:** *[Penetration Testing Execution Standard (PTES)](http://www.pentest-standard.org/index.php/Main_Page)*\n"
                            },
                            {
                                "id": "purple-team",
                                "title": "Purple Team",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "Collaboration",
                                    "Strategy"
                                ],
                                "content": "# Purple Team\n\nCoach and sparring partner.\n\n**Purple Teaming** is a collaboration between [[red-team|Red]] (Attackers) and [[blue-team|Blue]] (Defenders).\n\nInstead of a secret attack (Red Team) where the Blue Team doesn't know what's happening, they sit in the same room.\n*   **Red:** \"I am going to run Attack X now.\"\n*   **Blue:** \"Okay, let me see if my alarm triggers... Nope. Try again.\"\n*   **Red:** \"Running Attack X again.\"\n*   **Blue:** \"Got it! I see you now.\"\n\n## Goal\n\nTo rapidly improve detection capabilities through transparent feedback loops.\n\n### Further Reading\n\n*   **Article:** *[What is a Purple Team? (Rapid7)](https://www.rapid7.com/fundamentals/purple-teaming/)*\n"
                            },
                            {
                                "id": "red-team",
                                "title": "Red Team",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "OffensiveSecurity",
                                    "Simulation"
                                ],
                                "content": "# Red Team\n\nPlaying the enemy.\n\nThe **Red Team** is a group of security professionals who act as adversaries to an organization's security squad.\n\nUnlike a [[pen-testing|Pen-Test]] (which finds *technical* bugs), a Red Team Operation tests the **People and Processes**. They simulate a full-scale real-world attack: sending [[phishing]] emails, trying to break into the physical building, and moving quietly through the network to steal data without being caught.\n\n## Goal\n\nTo train the [[blue-team|Blue-Team]] (Defenders) by giving them a realistic sparring partner. \"Train hard, fight easy.\"\n\n## FAQs\n\n*1. Are they bad guys?*\nNo. They are employees or contractors hired to attack.\n\n### Further Reading\n\n*   **Article:** *[Red Team vs Blue Team vs Purple Team](https://www.csoonline.com/article/563806/red-team-vs-blue-team-vs-purple-team-the-roles-in-cybersecurity.html)*\n"
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
                                "id": "shors-algorithm",
                                "title": "Shor's Algorithm",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "QuantumComputing",
                                    "Threats"
                                ],
                                "content": "# Shor's Algorithm\n\nThe doomsday clock for internet privacy.\n\n**Shor's Algorithm** is a quantum math formula that can break the encryption protecting the entire internet.\n\nCurrently, our security (RSA Encryption) relies on the fact that computers are really bad at factoring massive numbers. It would take a supercomputer millions of years to guess the factors.\n**Peter Shor** proved that a **[[quantum-computing|Quantum Computer]]** running his algorithm could do it in *hours*.\n\n## The Hook\n\nImagine a lock that requires you to guess a number between 1 and Infinity.\n*   **Classic Computer:** Guesses 1, then 2, then 3... (Takes forever).\n*   **Shor's Algorithm:** Guesses *all numbers at once* and finds the pattern that leads to the answer.\n\n## FAQs\n\n*1. Why hasn't the internet crashed yet?*\nBecause we don't have a Quantum Computer big enough to run it. Yet.\nWe are currently in the \"NISQ\" era (Noisy Intermediate-Scale Quantum). We need thousands of perfect Qubits to break RSA. We currently have hundreds of noisy ones.\n\n*2. What are we doing about it?*\nThe world is racing to switch to **Post-Quantum Cryptography (PQC)**. These are new math problems (like Lattice-based cryptography) that even quantum computers can't solve easily. NIST is currently standardizing them.\n\n### Further Reading\n\n*   **Video:** *[How Quantum Computers Break Encryption (Veritasium)](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)*.\n*   **Standard:** *[NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)*.\n"
                            },
                            {
                                "id": "soc",
                                "title": "SOC (Security Operations Center)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "BlueTeam",
                                    "Operations"
                                ],
                                "content": "# SOC (Security Operations Center)\n\nMission Control for cyber defense.\n\nA **SOC** (pronounced \"Sock\") is the physical room (or team) responsible for monitoring an organization's security 24/7/365.\n\nImagine a room full of screens like NASA, but instead of watching rockets, they are watching network traffic. Their job is to analyze alerts, hunt for hackers, and respond to incidents before damage occurs.\n\n## The Three Components\n\n1.  **People:** Analysts (Tier 1 triage alerts, Tier 2 investigate deep, Tier 3 hunt threats).\n2.  **Processes:** Runbooks (Instructions on what to do when an alarm rings).\n3.  **Technology:** Tools like **SIEM** (Security Information and Event Management) that collect logs from every computer and put them nicely on dashboard screens.\n\n## FAQs\n\n*1. Is it a boring job?*\nIt can be. Tier 1 analysts suffer from **\"Alert Fatigue\"**\u2014sifting through 10,000 false alarms a day to find the 1 real attack. It is the entry-level rite of passage in Cyber Security.\n\n*2. SOC vs NOC?*\n*   **SOC (Security):** Fixes hacks. \"Are the bad guys in?\"\n*   **NOC (Network):** Fixes outages. \"Is the WiFi working?\"\n\n### Further Reading\n\n*   **Career:** *[What is a SOC Analyst?](https://www.cybrary.it/career-path/soc-analyst/)*\n*   **Tool:** *[Splunk](https://www.splunk.com/)* (The most popular tool used in SOCs).\n"
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
                            }
                        ]
                    },
                    {
                        "id": "infrastructure",
                        "title": "Infrastructure",
                        "icon": "fas fa-server",
                        "desc": "Virtualization and systems architecture",
                        "view": "list",
                        "children": [
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
                                "id": "vmx",
                                "title": "VMX (Virtual Machine Extension)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Virtualization",
                                    "VMware",
                                    "Configuration"
                                ],
                                "content": "# VMX File\n\nThe blueprint for a virtual machine.\n\nWhen you create a Virtual Machine (VM) using VMware, it isn't just one magic blob. It's a folder full of files. The **.vmx** file is the text file that describes the VM's hardware configuration.\n\nIt tells the software: \"This VM should have 4GB of RAM, 2 CPU cores, and use *this* specific hard drive file.\"\n\n## Inside the File\n\nIt is just a text file. If you open it with Notepad, it looks like this:\n\n```ini\nmemsize = \"4096\"\nnumvcpus = \"2\"\nethernet0.virtualDev = \"e1000\"\nscsi0.virtualDev = \"lsilogic\"\n```\n\n*   `memsize`: How much RAM (Memory) it gets.\n*   `numvcpus`: How many Processors it gets.\n*   `ethernet0`: What kind of Network Card it has.\n\n## FAQs\n\n*1. Can I edit this file?*\nYes, but be careful. Experts edit it to tweak settings that aren't available in the usual settings menu. If you make a typo, the VM won't start effectively \"breaking\" the machine blueprint.\n\n*2. Is VMX the hard drive?*\nNo.\n*   **.VMX:** The *Blueprint* (Text file, tiny size).\n*   **.VMDK:** The *Hard Drive* (Data file, huge size).\n\n*3. Is this used by all virtualization software?*\nNo. `.vmx` is specific to **VMware** (Fusion, Workstation, Player, ESXi).\n*   VirtualBox uses `.vbox`.\n*   Hyper-V uses `.xml` or `.vmcx`.\n\n### Further Reading\n\n*   **Documentation:** *[VMware VMX File Parameters](https://sanbarrow.com/vmx/vmx-parameters.html)* (Unofficial but excellent guide).\n*   **Official:** *[Editing the .vmx file for your VMware Fusion virtual machine](https://kb.vmware.com/s/article/1014782)*\n"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "general",
                "title": "General Technology",
                "icon": "fas fa-microchip",
                "desc": "Hardware, Software, and Emerging Tech",
                "view": "shelf",
                "children": [
                    {
                        "id": "emerging-tech",
                        "title": "Emerging Tech",
                        "icon": "fas fa-rocket",
                        "desc": "Future technologies and innovations",
                        "view": "list",
                        "children": [
                            {
                                "id": "disksat",
                                "title": "DiskSat",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Space",
                                    "Satellite",
                                    "Innovation"
                                ],
                                "content": "# DiskSat\n\nStacking satellites like dinner plates.\n\n**DiskSat** is a new satellite form factor developed by NASA and industry partners. Instead of the traditional \"Box\" shape (CubeSat), it is a flat, circular **Disk** (about 1 meter wide and 2.5cm thick).\n\n## The Problem\nRockets have limited space. Traditional boxy satellites waste volume because they don't pack tightly. You often launch a rocket that is full of empty air between safe-guards.\n\n## The Solution\nDisks can be stacked on top of each other in a launcher.\n*   **Massive Surface Area:** Because it lies flat, once it deploys, it acts as its own solar panel and antenna. You don't need complex, breakable \"unfolding wings.\"\n*   **Maneuverability:** It flies like a frisbee in the thin atmosphere, using air drag to change orbits without fuel.\n\n## FAQs\n\n*1. Who makes it?*\nIt is currently being tested by NASA and Rocket Lab.\n\n*2. Why do we care?*\nIt drastically lowers the cost of launch. A single rocket could deploy a \"stack\" of 50 internet satellites as easily as dispensing PEZ candies.\n\n### Further Reading\n\n*   **NASA Tech:** *[DiskSat: A New Shape for Small Spacecraft](https://www.nasa.gov/smallsat-institute/disksat/)*.\n*   **News:** *[Rocket Lab Launch](https://spacenews.com/rocket-lab-launches-disksat/)*.\n"
                            },
                            {
                                "id": "evtol",
                                "title": "eVTOL",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Aviation",
                                    "FutureTech",
                                    "Transportation"
                                ],
                                "content": "# eVTOL (Electric Vertical Take-Off and Landing)\n\nThe flying car, finally realized.\n\n**eVTOL** stands for **Electric Vertical Take-Off and Landing**.\nIt is a new class of aircraft that uses electric power to hover, take off, and land vertically like a helicopter, but flies efficiently forward like an airplane.\n\n## Key Features\n\n1.  **Electric:** Much quieter and cheaper to run than gas helicopters.\n2.  **Distributed Propulsion:** Instead of one big rotor (single point of failure), it usually has 6-12 small rotors. If one breaks, the others compensate so you don't crash.\n3.  **Urban Air Mobility (UAM):** Designed for short hops across a city (e.g., Airport to Downtown in 10 mins instead of 1 hour traffic).\n\n## FAQs\n\n*1. Is it just a drone?*\nBasically, yes. A giant, passenger-carrying drone. Many will eventually be autonomous (no pilot), reducing the cost even further.\n\n*2. When can I ride one?*\nSoon. Companies like **Joby Aviation**, **Archer**, and **Wisk** are already testing them and aiming for commercial FAA certification around 2025-2026. The Paris 2024 Olympics planned to showcase them.\n\n### Further Reading\n\n*   **Company:** *[Joby Aviation](https://www.jobyaviation.com/)* (One of the industry leaders).\n*   **Article:** *[The eVTOL Revolution Explained](https://www.theverge.com/2021/1/29/22256461/lilium-joby-archer-evtols-spac-merger-air-taxi)*.\n"
                            },
                            {
                                "id": "ntn",
                                "title": "Non-Terrestrial Networks (NTN)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Telecom",
                                    "Space",
                                    "5G"
                                ],
                                "content": "# Non-Terrestrial Networks (NTN)\n\n**Think of it like putting cell towers in the sky.**\n\n**Non-Terrestrial Networks (NTN)** is a standardized term for any communication network that uses flying components (satellites, drones, or balloons) to connect devices, rather than relying solely on towers built on the ground.\n\nTraditionally, if you walked too far into the desert or ocean, your phone died because it couldn't \"see\" a tower. NTN aims to fix this by integrating satellites directly into the standard 5G network. Instead of needing a special bulky satellite phone, your normal smartphone explicitly switches to talking to a satellite when it loses the ground signal, keeping you connected seamlessly anywhere on Earth.\n\n## Key Types\n*   **LEO Satellites (Low Earth Orbit):** Satellites flying fast and close to Earth (like Starlink). They offer fast speeds and low lag but you need a lot of them to cover the globe.\n*   **Drones / HAPS (High Altitude Platform Stations):** Solar-powered gliders that fly in the stratosphere (above planes but below space) for months, acting like a super-tall cell tower for a specific city or disaster zone.\n\n## FAQs\n\n*1. Will this replace normal 5G?*\nNo. Satellites can't handle the massive amount of data that fiber-optic connected ground towers can. NTN is a \"gap filler\"; it covers the oceans, deserts, and rural areas where building towers is too expensive or impossible.\n\n*2. Do I need a new phone?*\nMostly, yes. While some very basic \"SOS via Satellite\" features work on current phones, true high-speed NTN internet will likely require chips with special antennas. However, the goal of standards (like \"SpaceRAN\") is to make the technology compatible with future mass-market phones, not just specialized heavy-duty gear.\n\n### Further Reading\n\n*   **Article:** *[What is 5G NTN?](https://www.ericsson.com/en/blog/2023/2/what-is-5g-non-terrestrial-networks)* (Ericsson Tech Explanation).\n*   **News:** *[The Race to Connect Everything](https://www.wsj.com/articles/satellite-phone-internet-race-11675204215)* (WSJ coverage of the satellite-to-phone market).\n"
                            },
                            {
                                "id": "quantum-computing",
                                "title": "Quantum Computing",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "EmergingTech",
                                    "Physics",
                                    "Computing"
                                ],
                                "content": "# Quantum Computing\n\nCalculating every path through the maze at once.\n\nClassical computers (like the one you are using) think in **Bits** (0 OR 1).\nQuantum computers think in **Qubits** (0 AND 1, at the same time).\n\nThis allows them to solve specific types of massive problems (like folding proteins for drug discovery or breaking [[encryption]]) exponentially faster than a [[supercomputer]].\n\n## Superposition & Entanglement\n\n*   **Superposition:** A coin spinning on a table is neither Heads nor Tails; it is a blur of both. That is a Qubit.\n*   **Entanglement:** Two spinning coins are linked. If you stop one and it lands Heads, the other one *instantly* becomes Tails, even if it is on Mars.\n\n## FAQs\n\n*1. Will it replace my laptop?*\nNo. They are giant, fragile fridges that need to be kept near Absolute Zero (-273\u00b0C). They are for specific science/math tasks, not scrolling Twitter.\n\n*2. Will it break encryption?*\nEventually, yes. [[shors-algorithm|Shor's-Algorithm]] proves a powerful enough Quantum Computer could crack all modern flexible [[encryption]]. This is why \"Post-Quantum [[cryptography|Cryptography]]\" is being researched now.\n\n### Further Reading\n\n*   **Video:** *[Quantum Computers Explained (Kurzgesagt)](https://www.youtube.com/watch?v=JhHMJCUmq28)*\n*   **Article:** *[IBM Quantum Experience](https://www.ibm.com/quantum)*\n"
                            },
                            {
                                "id": "qubits",
                                "title": "Qubit (Quantum Bit)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "EmergingTech",
                                    "Physics",
                                    "Unit"
                                ],
                                "content": "# Qubit\n\nBeing 0 and 1 at the same time.\n\nA **Qubit** (Quantum Bit) is the basic unit of information in a quantum computer.\nWhile a classical Bit is like a light switch (On or Off), a Qubit is like a **Dimmer Switch**, it can be in a state of \"on\", \"off\", or any setting in between (Superposition).\n\n## The Power of Exponentials\n\n*   2 Classical Bits = 1 number (00, 01, 10, or 11).\n*   2 Qubits = All 4 numbers at once.\n*   300 Qubits = Can hold more states than there are atoms in the universe.\n\n## FAQs\n\n*1. How do you make one?*\nIt's hard. You use things like a single electron trapped in a magnetic field, or a photon (light particle). They are incredibly sensitive; if a vibration or heat touches them, they lose their quantum state (Decoherence) and become useless regular bits.\n\n### Further Reading\n\n*   **Article:** *[What is a Qubit? (Microsoft Azure)](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-a-qubit/)*\n"
                            }
                        ]
                    },
                    {
                        "id": "hardware",
                        "title": "Hardware",
                        "icon": "fas fa-memory",
                        "desc": "Physical components and sensors",
                        "view": "list",
                        "children": [
                            {
                                "id": "flipper-zero",
                                "title": "Flipper Zero",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Hardware",
                                    "Hacking",
                                    "Tool"
                                ],
                                "content": "# Flipper Zero\n\nThe Swiss Army knife for geeks.\n\nThe **Flipper Zero** is a portable, tamagotchi-like multi-tool for pentesters and hardware geeks. It houses antennas for almost every common radio protocol: **[[nfc|NFC]]**, **[[rfid|RFID]]**, **Infrared** (TV remotes), **Sub-GHz** (Garage doors), and **iButton**.\n\n## Why is it famous/infamous?\nIt makes hardware hacking accessible.\n*   **Cool usage:** Cloning your office keycard so you don't lose it. Turning off all TV screens in a bar (TV-B-Gone).\n*   **Bad usage:** \"SPAM Attacks\" that crash iPhones by flooding them with Bluetooth pairing requests (Apple fixed this, but Flipper popularized it).\n\n## FAQs\n\n*1. Is it illegal?*\nNo. The device itself is legal hardware. *Using* it to open a Tesla charge port you don't own or clone a stranger's card is illegal.\n\n### Further Reading\n\n*   **Official Site:** *[flipperzero.one](https://flipperzero.one/)*\n*   **Video:** *[Can the Flipper Zero Break Into My House?](https://www.youtube.com/watch?v=S2uF1v8g-jU)*\n"
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
                                "id": "hard-drive",
                                "title": "Hard Drive (HDD / SSD)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Hardware",
                                    "Storage",
                                    "Memory"
                                ],
                                "content": "# Hard Drive (HDD / SSD)\n\nThe long-term memory of the computer.\n\nThe **Hard Drive** is where your data lives when the power is turned off.\nIf **RAM** is your tabletop (fast, temporary workspace), the **Hard Drive** is the filing cabinet (slower, permanent storage).\n\n## The Two Titans\n\n### 1. HDD (Hard Disk Drive) - The Record Player\n*   **Technology:** Fast-spinning magnetic platters with a mechanical arm that reads data.\n*   **Pros:** Very cheap for huge amounts of space (8TB, 16TB).\n*   **Cons:** Slow, loud, fragile (if you drop it, the needle scratches the record and data dies).\n\n### 2. SSD (Solid State Drive) - The Flash Card\n*   **Technology:** Lightning-fast electrical chips with no moving parts.\n*   **Pros:** Instant speed, silent, durable.\n*   **Cons:** More expensive per gigabyte (though getting cheaper).\n\n## FAQs\n\n*1. NVMe vs SATA?*\n*   **SATA:** The old cable connection (Max speed ~600 MB/s).\n*   **NVMe (M.2):** The new stick that plugs directly into the motherboard (Max speed ~7,000 MB/s). Always buy NVMe for your main Operating System drive.\n\n*2. How long do they last?*\nUsually 5-10 years. But they *will* fail.\n**Rule of thumb:** Data that doesn't exist in at least two places (Backup) doesn't exist at all.\n\n### Further Reading\n\n*   **Video:** *[How a Hard Drive Works (Slow Mo)](https://www.youtube.com/watch?v=3owqvmmf6m8)*.\n*   **Guide:** *[HDD vs SSD vs NVMe](https://www.crucial.com/articles/about-storage/ssd-vs-hdd)*.\n"
                            },
                            {
                                "id": "hard-driver",
                                "title": "Hard Driver",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [],
                                "content": ""
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
                                "id": "nfc",
                                "title": "NFC (Near Field Communication)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Hardware",
                                    "Wireless",
                                    "Payment"
                                ],
                                "content": "# NFC (Near Field Communication)\n\nThe digital handshake.\n\n**NFC** is a short-range wireless technology (max distance ~4cm) that lets two devices talk when they touch or get very close.\n\nIt is a subtype of **[[rfid|RFID]]**, but designed for secure, two-way communication.\n\n## Use Cases\n\n1.  **Payments:** Apple Pay / Google Pay (Tap to pay).\n2.  **Access:** Opening office doors with a badge or phone.\n3.  **Pairing:** Tapping headphones to a phone to connect Bluetooth instantly.\n\n## FAQs\n\n*1. Is it safe to leave on?*\nGenerally, yes. Because the range is tiny (inches), a hacker would have to physically bump into you with a reader to steal data (\"Skimming\"), which is difficult in practice.\n\n### Further Reading\n\n*   **Article:** *[NFC vs RFID: What's the difference?](https://www.rfidjournal.com/faq/what-is-the-difference-between-nfc-and-rfid)*\n"
                            },
                            {
                                "id": "rfid",
                                "title": "RFID (Radio Frequency Identification)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Hardware",
                                    "Wireless",
                                    "Tracking"
                                ],
                                "content": "# RFID\n\nThe wireless barcode.\n\n**RFID** uses electromagnetic fields to automatically identify and track tags attached to objects. Unlike a barcode, you don't need line-of-sight; the scanner just needs to be nearby (ranging from inches to hundreds of feet).\n\n## Active vs. Passive\n\n*   **Passive Tags:** Have no battery. They wake up when the reader's radio wave hits them, use that energy to beep back their ID, and go back to sleep. (Cheap, used in shipping labels, hotel keys).\n*   **Active Tags:** Have a battery. Can transmit signals over long distances. (Used in toll booth transponders like E-ZPass).\n\n## FAQs\n\n*1. Can I be tracked?*\nTechnically yes, if you carry RFID tags (like in some passports or clothing). This is why \"Faraday Wallets\" exist (metal-lined wallets to block the signal).\n\n### Further Reading\n\n*   **Guide:** *[How RFID Works](https://electronics.howstuffworks.com/gadgets/high-tech-gadgets/rfid.htm)*\n"
                            },
                            {
                                "id": "semiconductor",
                                "title": "Semiconductor (Chip)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Hardware",
                                    "Physics",
                                    "Electronics"
                                ],
                                "content": "# Semiconductor\n\nThe brain cells of modern electronics.\n\nA **Semiconductor** is a material (usually Silicon) that sits halfway between a Conductor (allows electricity to flow, like Copper) and an Insulator (blocks electricity, like Rubber).\n\nBy adding impurities (\"doping\"), we can make it switch between conducting and blocking electricity instantly. This allows us to build **Transistors**; tiny on/off switches that represent the 1s and 0s of computer code.\n\n## Why it matters\n\nEverything digital (Phones, Cars, Toasters, AI) runs on chips made of billions of microscopic transistors printed on silicon wafers.\n\n## FAQs\n\n*1. What is the Chip Shortage?*\nMaking chips is the hardest manufacturing process on Earth (using lasers to carve paths smaller than a virus). Only a few factories (fabs) exist. When demand spikes, it takes years to build a new factory.\n\n### Further Reading\n\n*   **Video:** *[How a CPU is made (TSMC)](https://www.youtube.com/watch?v=-ZgXv0tQ8eE)*\n"
                            },
                            {
                                "id": "supercomputer",
                                "title": "Supercomputer",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Hardware",
                                    "Computing",
                                    "HPC"
                                ],
                                "content": "# Supercomputer\n\nThe Formula 1 car of computing.\n\nA **Supercomputer** isn't just a \"fast laptop.\" It is an entirely different architecture designed to solve one massive math problem at a time by linking thousands of processors together.\n\nYour laptop is designed to do many things at once (Email, Spotify, Chrome).\nA Supercomputer is designed to simulate **Nuclear Explosions** or **Global Weather Patterns**.\n\n## How it Works\n\n**Parallel Processing.**\nImagine you need to read a library of 10,000 books.\n*   **Fast Computer:** One genius reading 1 book per second. (Total: 2.7 hours).\n*   **Supercomputer:** 10,000 average people reading 1 book each *at the same time*. (Total: 1 second).\n\n## FLOPs\n\nWe measure them in **FLOPS** (Floating Point Operations Per Second).\n*   **Current Champion:** **Frontier** (Oak Ridge National Lab).\n*   **Speed:** Exascale (1.1 ExaFLOPS). That is 1,100,000,000,000,000,000 calculations per second.\n\n## FAQs\n\n*1. Does it run Windows?*\nNo. Almost 100% of the world's supercomputers run **Linux**. It is the only OS flexible and efficient enough to manage that much hardware.\n\n*2. Where are they?*\nUniversities, Government Labs, and Massive tech companies (Meta/Google for AI training).\n\n### Further Reading\n\n*   **List:** *[Top500.org](https://top500.org/lists/top500/)* (The official ranking of the 500 fastest computers on Earth).\n*   **Video:** *[Building the World's Fastest Computer](https://www.youtube.com/watch?v=u3dJt_t-2tE)*.\n"
                            }
                        ]
                    },
                    {
                        "id": "software",
                        "title": "Software",
                        "icon": "fas fa-code",
                        "desc": "Programming and development concepts",
                        "view": "list",
                        "children": [
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
                            },
                            {
                                "id": "operating-system",
                                "title": "Operating System (OS)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Software",
                                    "Basics",
                                    "Platform"
                                ],
                                "content": "# Operating System (OS)\n\nThe conductor of the digital orchestra.\n\nThe **Operating System** is the software that manages the hardware and provides a playground for applications to run.\nWithout an OS, your computer is just a pile of metal and silicon. The OS tells the CPU, RAM, and Screen how to talk to each other.\n\n## The Hierarchy\n\n1.  **Hardware:** The metal (CPU, Disk).\n2.  **Kernel:** The Heart of the OS (Talks to metal).\n3.  **Shell/UI:** The Face of the OS (Start Menu, Desktop).\n4.  **Applications:** The Tools (Chrome, Steam, Excel).\n\n## Major Families\n\n*   **Windows (Microsoft):** The Office & Gaming standard. User-friendly.\n*   **macOS (Apple):** The Creative standard. Based on Unix (very stable).\n*   **Linux (Open Source):** The Server & Hacker standard. Runs the internet.\n\n## FAQs\n\n*1. What is a \"Dual Boot\"?*\nInstalling two OSs on one computer (e.g., Windows for games, Linux for coding). You choose which one to enter when you turn the PC on.\n\n*2. Is Android an OS?*\nYes! It is a mobile OS based on the **Linux Kernel**. iOS is a mobile OS based on **Darwin** (Unix).\n\n### Further Reading\n\n*   **History:** *[The History of Operating Systems](https://www.youtube.com/watch?v=26QPDBe-TQ8)*.\n*   **Concept:** *[OS Concepts: What is an OS?](https://www.geeksforgeeks.org/introduction-of-operating-system-set-1/)*.\n"
                            },
                            {
                                "id": "os-kernel",
                                "title": "OS Kernel",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Software",
                                    "Core",
                                    "Admin"
                                ],
                                "content": "# OS Kernel\n\nThe bridge between software and metal.\n\nThe **Kernel** is the absolute core of an [[operating-system|Operating System]]. It is the very first program that loads when you turn on your computer.\n\nThink of the computer as a **Restaurant**:\n*   **Hardware:** The Kitchen (Stoves, Fridges).\n*   **Applications:** The Customers (Ordering food).\n*   **The Kernel:** The **Waiter**.\n\nThe Customer (App) cannot just walk into the kitchen (Hardware) and grab a steak. It must ask the Waiter (Kernel), \"May I have memory?\" The Kernel checks if there is any free, grabs it, and serves it to the App.\n\n## What it Controls\n\n1.  **Memory Management:** Deciding who gets to use the RAM.\n2.  **Process Scheduling:** Deciding which app gets to use the CPU right now.\n3.  **Device Drivers:** Translating signals from your mouse/keyboard so the CPU understands them.\n\n## FAQs\n\n*1. What is a \"Kernel Panic\" (or \"Blue Screen of Death\")?*\nIt means the Waiter dropped a tray or slipped on the floor.\nBecause the Kernel controls *everything*, if the Kernel crashes, the entire computer crashes instantly to prevent hardware damage.\n\n*2. Can I see the Kernel?*\nNot really. It runs in \"Kernel Space\" (a VIP area of memory). Your apps run in \"User Space.\" This strict separation prevents a buggy video game from crashing your entire system.\n\n### Further Reading\n\n*   **Video:** *[How a Kernel Works](https://www.youtube.com/watch?v=mUVmV4H5B6k)*.\n*   **Deep Dive:** *[Linux Kernel Architecture](https://developer.ibm.com/articles/l-linux-kernel/)*.\n"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "philosophy",
                "title": "Philosophy",
                "icon": "fas fa-book-open",
                "desc": "Schools of thought and ethical frameworks",
                "view": "shelf",
                "children": [
                    {
                        "id": "philosophy-concepts",
                        "title": "Philosophical Concepts",
                        "icon": "fas fa-comment-dots",
                        "desc": "General philosophical ideas",
                        "view": "list",
                        "children": [
                            {
                                "id": "agency-and-free-will",
                                "title": "Agency & Free Will",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Consciousness",
                                    "AI"
                                ],
                                "content": "# Agency & Free Will\n\nThe ghost in the machine.\n\n**Agency** is the capacity to act. A thermostat has agency (it gets hot -> it turns on fan).\n**Free Will** is the capacity to *choose* how to act, free from external force or internal programming.\n\nThe debate is: Do humans have Free Will, or are we just very complex biological thermostats?\n\n## Determinism vs. Volition\n\n*   **Determinism (The Machine):** The universe is a chain of cause-and-effect. Your brain is made of atoms. Atoms obey physics. Therefore, your \"choice\" to eat pizza was calculated by the Big Bang bits in your brain. You couldn't have chosen otherwise.\n*   **Libertarian Free Will (The Soul):** There is a \"You\" (Consciousness) that sits above the atoms and can veto the programming.\n\n## The AI Mirror\n\nWe are building **Agentic AI** which clearly has Agency (it can book flights, write code).\nBut it strictly lacks Free Will. It is deterministic code.\n*   If we are just biological machines, then AI is exactly like us.\n*   If we have Free Will, then there is a \"Special Sauce\" in biology that silicon might never replicate.\n\n## FAQs\n\n*1. Does Physics allow Free Will?*\nClassically (Newton)? No.\nQuantumly? Maybe. Quantum mechanics introduces randomness. But \"Randomness\" (a dice roll) isn't the same as \"Freedom\" (a choice).\n\n*2. Why does it matter?*\n**Justice.** If you have no free will, you aren't \"guilty\" of a crime; you are just a broken machine. Our entire legal system assumes you *could* have chosen not to commit the crime.\n\n### Further Reading\n\n*   **Book:** *[Free Will](https://www.goodreads.com/book/show/13259270-free-will)* by Sam Harris (The case against it).\n*   **Video:** *[Michio Kaku: Why Physics Ends the Free Will Debate](https://www.youtube.com/watch?v=Jint5kjoy6I)*.\n"
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
                                "content": "# Introduction\n\nPhilosophy is the study of fundamental questions about existence, knowledge, values, reason, mind, and language. Here is a high-level overview of the major schools of thought covered in this knowledge bank.\n\n## Schools of Thought\n\n- **[[absurdism|Absurdism]]**: Laughing at the silence of the universe.\n  - *Concept*: Seeking meaning in a meaningless world is funny, not sad.\n- **[[cynicism|Cynicism]]**: Living like a dog to be truly free.\n  - *Concept*: Rejecting social norms (wealth, power, fame) to live in virtue with nature.\n- **[[existentialism|Existentialism]]**: You contain the paintbrush, not just the canvas.\n  - *Concept*: Existence precedes essence; you are not born with a purpose, you must create one.\n- **[[hedonism|Hedonism]]**: Pleasure is the only compass.\n  - *Concept*: The pursuit of pleasure and avoidance of pain is the highest good.\n- **[[law-of-attraction|Law of Attraction]]**: Like attracts like.\n  - *Concept*: The belief that positive thoughts bring positive results into a person's life.\n- **[[nihilism|Nihilism]]**: The game has no rules and no winner.\n  - *Concept*: Life is without objective meaning, purpose, or intrinsic value.\n- **[[paradox|Paradox]]**: A truth that sounds like a lie.\n  - *Concept*: A statement that contradicts itself but might still be true.\n- **[[pragmatism|Pragmatism]]**: If it works, it's true.\n  - *Concept*: Assessing theories or beliefs in terms of the success of their practical application.\n- **[[stoicism|Stoicism]]**: You cannot control the storm, only the ship.\n  - *Concept*: Happiness is found in accepting the moment as it presents itself, not in our desire to control it.\n- **[[utilitarianism|Utilitarianism]]**: The greatest good for the greatest number.\n  - *Concept*: The belief that the best action is the one that maximizes happiness and minimizes suffering."
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
                                "content": "# Law of Attraction\n\nLike attracts like.\n\nThe **Law of Attraction** is the belief that positive or negative thoughts bring positive or negative experiences into a person's life.\n**\"Thoughts become Things.\"**\n\nIt suggests that if you focus intensely on a goal (visualize it, feel it as if it's already true), the Universe will conspire to make it happen.\n\n## Is it Magic or Psychology?\n\n*   **The Mystical View:** Your thoughts send out energy vibrations that magnetically attract similar energy from the Universe.\n*   **The Psychological View (Confirmation-Bias):** If you decide to buy a Red Tesla, you suddenly see Red Teslas everywhere. Because you are focused on \"Success,\" your brain subconsciously notices opportunities for success that you would have ignored before.\n\n## FAQs\n\n*1. Does it work?*\n*   **Scientifically:** There is no proof that thoughts change physical reality directly (telekinesis).\n*   **Practically:** Positive thinking and visualization *do* improve confidence and performance, which leads to better results.\n\n*2. What is the danger?*\n**Victim Blaming.** If you believe \"You attract what you think,\" it implies that if someone gets sick or poor, they \"attracted\" it with bad thoughts, which is cruel and untrue.\n\n### Further Reading\n\n*   **Book:** *[The Secret](https://www.thesecret.tv/)* by Rhonda Byrne (The most famous book on this).\n*   **Analysis:** *[The Psychology of the Law of Attraction](https://www.psychologytoday.com/us/blog/the-blame-game/201309/the-truth-about-the-law-attraction)*\n"
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
                                "content": "# Pragmatism\n\nIf it works, it's true.\n\nMost philosophy asks: \"Is this theory inherently true?\"\n**Pragmatism** asks: \"Does believing this theory actually help us?\"\n\nIt treats beliefs like tools. A hammer isn't \"True\" or \"False\"; it is \"Useful\" or \"Useless.\"\n\n## The Cash Value of Truth\n\nWilliam James (a father of Pragmatism) said we should look for the **\"Cash Value\"** of an idea.\n*   *Example:* \"Do we have Free Will?\"\n  **Metaphysics:** Let's debate for 2,000 years.\n  **Pragmatism:** If I believe I have free will, and it makes me act better, then \"Free Will\" is true *enough* for me. If I believe I am a robot, I get lazy. Therefore, acting *as if* I have free will is the \"True\" choice.\n\n## FAQs\n\n*1. Is it just \"The ends justify the means\"?*\nNo. That is [[machiavellianism|Machiavellianism]].\nPragmatism is about testing Truth by its consequences. If a belief makes you miserable and passive, it is a \"bad\" belief, even if it seems logically sound.\n\n*2. Is it anti-science?*\nNo, Science *is* pragmatic! Scientists don't say \"Gravity is the absolute final truth.\" They say \"Gravity is the best model we have right now that allows us to build bridges that don't fall down.\"\n\n### Further Reading\n\n*   **Article:** *[Pragmatism: The Philosophy of Action](https://plato.stanford.edu/entries/pragmatism/)*\n*   **Video:** *[What is Pragmatism?](https://www.youtube.com/watch?v=RPlfC808EPU)*\n"
                            }
                        ]
                    },
                    {
                        "id": "ethics",
                        "title": "Ethics",
                        "icon": "fas fa-balance-scale",
                        "desc": "Moral principles and dilemmas",
                        "view": "list",
                        "children": [
                            {
                                "id": "deontology",
                                "title": "Deontology",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Ethics",
                                    "Kant"
                                ],
                                "content": "# Deontology\n\nThe rules are the rules, no matter what.\n\n**Deontology** (from Greek *deon*, meaning \"duty\") is an ethical theory that says morality is about following rules. Actions are inherently \"Right\" or \"Wrong\" regardless of their consequences.\n\nIt is the opposite of **[[utilitarianism|Utilitarianism]]** (which cares only about the result).\n\n## The Categorical Imperative\n\nImmanuel Kant (the father of Deontology) proposed this rule: **\"Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.\"**\n\n*   *Translation:* Before you do something, ask: \"Would it be okay if *everyone* did this?\"\n    *   **Lying?** If everyone lied, words would mean nothing. So, you must never lie.\n    *   **Stealing?** If everyone stole, private property wouldn't exist. So, you must never steal.\n\n## FAQs\n\n*1. What if lying saves a life?*\n*   **Utilitarian:** Lie! (1 life saved > 0 lives saved).\n*   **Strict Deontologist:** Don't lie. Lying is wrong. If the person dies, that is the murderer's fault, not yours. You did your duty. (This is the \"Murderer at the door\" problem).\n\n*2. Why use it?*\nIt provides clear moral certainty. You don't have to calculate complex math about \"future happiness\" every time you want to act. You just follow the Rules.\n\n### Further Reading\n\n*   **Video:** *[Kant & Categorical Imperatives](https://www.youtube.com/watch?v=8bIys6JoEDw)*\n*   **Article:** *[Deontological Ethics (Stanford)](https://plato.stanford.edu/entries/ethics-deontological/)*\n"
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
                                "id": "machiavellianism",
                                "title": "Machiavellianism",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Politics",
                                    "Power"
                                ],
                                "content": "# Machiavellianism\n\nIt is better to be feared than loved.\n\n**Machiavellianism** is a political philosophy based on the writings of Niccol\u00f2 Machiavelli (specifically *The Prince*). It focuses on the harsh, pragmatic reality of gaining and keeping power.\n\nIt suggests that a ruler should do whatever is necessary (lie, cheat, steal, kill) to maintain stability and authority. \"The ends justify the means.\"\n\n## The Fox and the Lion\n\nMachiavelli said a leader must be both:\n*   **The Fox:** Cunning and able to spot traps (Manipulation/Diplomacy).\n*   **The Lion:** Strong and fierce to scare off wolves (Force/War).\n\nBeing just a Lion makes you dumb; being just a Fox makes you weak.\n\n## FAQs\n\n*1. Is it \"Evil\"?*\nMachiavelli didn't think he was teaching evil. He thought he was teaching **Results**. He argued that if a \"Good\" King is too nice and gets overthrown, his people suffer in the chaos. Therefore, a \"Bad\" King who acts ruthlessly to keep peace is actually better for the state.\n\n*2. Is it a personality trait?*\nYes. In psychology, it is one of the \"Dark Triad\" traits (along with Narcissism and Psychopathy). High-Mach people are manipulative, cold, and strategic.\n\n### Further Reading\n\n*   **Book:** *[The Prince](https://www.gutenberg.org/files/1232/1232-h/1232-h.htm)* by Niccol\u00f2 Machiavelli.\n*   **Analysis:** *[The School of Life: Machiavelli](https://www.youtube.com/watch?v=AOXl0Ll_t9s)*\n"
                            },
                            {
                                "id": "utilitarianism",
                                "title": "Utilitarianism",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Ethics",
                                    "JeremyBentham"
                                ],
                                "content": "# Utilitarianism\n\nThe greatest good for the greatest number.\n\n**Utilitarianism** is an ethical theory that says: The \"Right\" thing to do is whatever maximizes happiness and minimizes suffering for the most people.\n\nIt treats morality like a math equation. Intentions don't matter; rules don't matter. Only the **Consequences** (the result) matter.\n\n## The Trolley Problem\n\nThis is the classic test for Utilitarianism.\n*   A train is about to kill **5 people**.\n*   You can pull a lever to switch tracks, where it will only kill **1 person**.\n*   **Utilitarian Answer:** Pull the lever. 1 death is better than 5 deaths. (Math).\n*   **Non-Utilitarian ([[deontology|Deontology]]) Answer:** Do not pull. Killing an innocent person is wrong, regardless of the outcome.\n\n## FAQs\n\n*1. Is it perfect?*\nNo. The flaw is the **\"Minority Rights\"** problem.\nIf killing one healthy person and harvesting their organs could save 5 dying patients, strict Utilitarianism might say \"Do it\" (1 death saves 5). But almost everyone agrees that murdering an innocent person for parts is wrong, even if the math works out.\n\n*2. Who started it?*\n*   **Jeremy Bentham:** The founder. \"Nature has placed mankind under the governance of two sovereign masters, pain and pleasure.\"\n*   **John Stuart Mill:** Refined it. He argued that \"Qualitative\" pleasures (poetry, friendship) are better than \"Quantitative\" pleasures (eating, drinking).\n\n### Further Reading\n\n*   **Video:** *[Justice: What's The Right Thing To Do? (Harvard)](https://www.youtube.com/watch?v=kBdfcR-8hEY)*\n*   **Article:** *[Utilitarianism Explained](https://ethics.org.au/ethics-explainer-utilitarianism/)*\n"
                            }
                        ]
                    },
                    {
                        "id": "political",
                        "title": "Political",
                        "icon": "fas fa-folder",
                        "desc": "",
                        "view": null,
                        "children": [
                            {
                                "id": "socialism",
                                "title": "Socialism",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Politics",
                                    "Economics"
                                ],
                                "content": "# Socialism\n\nThe community owns the factory.\n\n**Socialism** is a political and economic theory where the means of production (factories, farms, offices) are owned and regulated by the community as a whole, rather than by private individuals.\n\nImagine a lemonade stand.\n*   **Capitalism:** One kid pays for the lemons, owns the stand, and keeps the profit. The other kids work for a wage.\n*   **Socialism:** All the kids pool their money for lemons, work together, and vote on how to split the profit.\n\n## Core Principles\n\n1.  **Public Ownership:** Essential services (Healthcare, Energy, Transport) should not be for profit.\n2.  **Redistribution:** Wealth should be spread to ensure everyone has a baseline quality of life (Safety Net).\n3.  **Cooperation > Competition:** Society thrives when we work together, not when we fight for resources.\n\n## FAQs\n\n*1. Is it the same as Communism?*\nNo.\n*   **Socialism:** You can still own personal property (your phone, your house). The *economy* is socialized.\n*   **Communism:** A stateless, classless, moneyless society where *everything* is shared. (Socialism is often seen as the bridge to Communism).\n\n*2. Does it work?*\nIt's a spectrum.\n*   **Democratic Socialism (Nordic Model):** High taxes, free healthcare, strong unions, but still has a capitalist market (IKEA, Volvo). Works very well.\n*   **Authoritarian Socialism (Soviet Union):** Government controls everything. Historically failed due to corruption and inefficiency.\n\n### Further Reading\n\n*   **Book:** *[The Communist Manifesto](https://www.gutenberg.org/ebooks/61)* (The original theory by Marx & Engels).\n*   **Concept:** *[Democratic Socialism vs. Social Democracy](https://www.masterclass.com/articles/democratic-socialism-vs-social-democracy)*.\n"
                            }
                        ]
                    },
                    {
                        "id": "schools",
                        "title": "Schools of Thought",
                        "icon": "fas fa-university",
                        "desc": "Major philosophical movements",
                        "view": "list",
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
                            }
                        ]
                    },
                    {
                        "id": "science",
                        "title": "Science",
                        "icon": "fas fa-folder",
                        "desc": "",
                        "view": null,
                        "children": [
                            {
                                "id": "demarcation-problem",
                                "title": "Demarcation Problem",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Science",
                                    "Logic"
                                ],
                                "content": "# Demarcation Problem\n\nDrawing the line in the sand.\n\nThe **Demarcation Problem** is the philosophical difficulty of distinguishing between **Science** (Astronomy, Chemistry) and **Non-Science/Pseudoscience** (Astrology, Alchemy).\n\nWhere exactly does one end and the other begin? It sounds easy, but there is no single agreed-upon rule that works 100% of the time.\n\n## Key Criteria Attempts\n\n1.  **Falsifiability (Popper):** If you can't test it, it's not science. (The Gold Standard).\n2.  **Consensus:** If most scientists agree, it's science. (Problem: Scientists used to agree on bad ideas).\n3.  **Method:** Does it use the Scientific Method? (Hypothesis -> Experiment -> Result).\n\n## FAQs\n\n*1. Why does it matter?*\nIt decides what gets taught in schools, what gets government funding, and what evidence is allowed in courtrooms. If we can't define science, we can't protect it from nonsense.\n\n*2. Is \"Non-Science\" bad?*\nNot necessarily. **Art**, **Philosophy**, and **Religion** are non-science, but they are valuable. **Pseudoscience** (fake science claiming to be real, like Phrenology) is the danger.\n\n### Further Reading\n\n*   **Article:** *[Stanford Encyclopedia: Science and Pseudo-Science](https://plato.stanford.edu/entries/pseudo-science/)*.\n*   **Video:** *[The Demarcation Problem Explained](https://www.youtube.com/watch?v=Prhi3_nF8rA)*.\n"
                            },
                            {
                                "id": "falsifiability",
                                "title": "Falsifiability",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Science",
                                    "KarlPopper"
                                ],
                                "content": "# Falsifiability\n\nThe ability to be proven wrong.\n\n**Falsifiability** is the defining characteristic of a scientific theory. It means that there must be a way to test the theory where it *could* fail.\nIf a theory explains *everything* no matter what happens, it explains *nothing*. It is not science; it is a belief system.\n\n## The Swan Analogy\n\n*   **Theory:** \"All swans are white.\"\n    *   **Is it Falsifiable?** Yes. All you need to do is find **one** black swan to prove it false.\n*   **Theory:** \"Ghosts exist, but they are invisible when you look for them.\"\n    *   **Is it Falsifiable?** No. There is no test you can run to prove they *don't* exist. Therefore, it is not science.\n\n## FAQs\n\n*1. Who came up with this?*\n**Karl Popper**. He noticed that Einstein's Physics made risky predictions (that could be wrong), while Freud's Psychology could explain any patient's behavior after the fact. He wanted to separate the two.\n\n*2. Does \"Falsifiable\" mean \"False\"?*\nNo! It means **\"Able to be proven false.\"**\n\"The Earth is round\" is falsifiable (we could go to space and check). It just happens to be true.\n\n### Further Reading\n\n*   **Book:** *[The Logic of Scientific Discovery](https://www.routledge.com/The-Logic-of-Scientific-Discovery/Popper/p/book/9780415278447)* by Karl Popper.\n*   **Video:** *[Karl Popper, Science, & Pseudoscience](https://www.youtube.com/watch?v=-X8Xfl0JdTQ)*.\n"
                            },
                            {
                                "id": "just-so-stories",
                                "title": "Just-So Stories",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Evolution",
                                    "Criticism"
                                ],
                                "content": "# Just-So Stories\n\nA story that fits perfectly because it was made backwards.\n\nA **Just-So Story** is a criticism (coined by Stephen Jay Gould) of scientific explanations that sound plausible but are untestable and purely speculative.\nThe name comes from Rudyard Kipling's children's book *Just So Stories* (e.g., \"How the Leopard Got His Spots\").\n\n## The Flaw\n\nIt is often used in **Evolutionary Psychology** to explain modern behavior by inventing a prehistoric reason for it.\n\n*   *Observation:* Men like blue.\n*   *Just-So Story:* \"Ah, well, prehistoric men had to look at the sky to predict rain, so they evolved to like blue.\"\n*   *Problem:* It sounds smart, but **how do you test it?** You can't. It's just a creative writing exercise. You could just as easily argue men like blue because berries are blue.\n\n## FAQs\n\n*1. Is all Evolutionary Psychology bad?*\nNo. But good science requires **[[novel-prediction|Novel Predictions]]**.\n*   **Just-So:** Explaining why we *already* act this way.\n*   **Science:** Predicting that if we act this way, we should also find *this specific gene* or *this specific fossil*.\n\n*2. How to spot one?*\nAsk: \"Is there any evidence for this besides the fact that it sounds logical?\" If the answer is No, it's a Just-So Story.\n\n### Further Reading\n\n*   **Book:** *[Just So Stories](https://www.gutenberg.org/ebooks/2876)* by Rudyard Kipling (The origin of the name).\n*   **Article:** *[Gould's Criticism of Sociobiology](https://link.springer.com/article/10.1007/s10739-018-9519-2)*.\n"
                            },
                            {
                                "id": "novel-prediction",
                                "title": "Novel Prediction",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Science",
                                    "Evidence"
                                ],
                                "content": "# Novel Prediction\n\nThe fortune teller who actually gets it right.\n\nA **Novel Prediction** is when a scientific theory predicts a phenomenon that **no one has ever seen before**, and it turns out to be true.\n\nIt is the strongest possible evidence for a theory. Explaining old data is easy (hindsight is 20/20). Predicting the unknown is hard.\n\n## The Halley's Comet Example\n\n*   **Old Science:** Comets are random angry gods.\n*   **Edmond Halley (Using Newton's Laws):** \"I predict this comet will return in exactly 76 years, on this specific date.\"\n*   **The Result:** It appeared exactly when he said. This proved Newton's physics wasn't just a good story; it was a map of reality.\n\n## The Einstein Example\n\nEinstein's General Relativity predicted that gravity bends light. No one had ever seen bent light.\nDuring a solar eclipse in 1919, Arthur Eddington looked at the stars behind the sun. They were shifted. Einstein was right. The world changed overnight.\n\n## FAQs\n\n*1. Why is it better than explaining known facts?*\nBecause you can't cheat.\nIf you know the answer ($\\pi$), you can easily invent a math formula to equal $\\pi$. But if you write a formula that predicts a number no one has ever measured, and *then* we measure it and you're right... that's magic.\n\n### Further Reading\n\n*   **Concept:** *[Predictive Power](https://en.wikipedia.org/wiki/Predictive_power)*.\n*   **Story:** *[The Eclipse That Made Einstein Famous](https://www.smithsonianmag.com/science-nature/eclipse-made-einstein-world-famous-180972140/)*.\n"
                            },
                            {
                                "id": "reasoning-types",
                                "title": "Reasoning (Deduction, Induction, Abduction)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Logic",
                                    "Thinking"
                                ],
                                "content": "# Reasoning\n\nThe three engines of thought.\n\nThere are three main ways humans (and AI) move from \"what we know\" to \"what we think.\"\n\n## 1. Deduction (The Sniper)\nMoving from **General** to **Specific**.\nIf the premises are true, the conclusion **MUST** be true.\n*   *Rule:* All men are mortal.\n*   *Observation:* Socrates is a man.\n*   *Conclusion:* Therefore, Socrates is mortal. (100% Certainty).\n\n## 2. Induction (The Surveyor)\nMoving from **Specific** to **General**.\nLooking at patterns to form a rule. The conclusion is **Likely**, but not certain.\n*   *Observation:* The sun has risen every morning for history.\n*   *Conclusion:* Therefore, the sun will rise tomorrow. (High Probability, but not guaranteed. The sun could explode tonight).\n\n## 3. Abduction (The Detective)\nInference to the **Best Explanation**.\nLooking at a weird fact and guessing the most likely cause.\n*   *Observation:* The grass is wet.\n*   *Hypotheses:* It rained? The sprinklers turned on? A dog peed?\n*   *Conclusion:* It rained (because the street is also wet).\n\n## FAQs\n\n*1. Which does Science use?*\nAll of them.\n*   **Abduction** to invent a hypothesis.\n*   **Deduction** to predict what should happen if the hypothesis is true.\n*   **Induction** to verify it with data.\n\n*2. Which does AI use?*\nMachine Learning is a massive **Induction** engine. It looks at millions of specific cat photos to learn the general rule of \"What a cat looks like.\"\n\n### Further Reading\n\n*   **Article:** *[Deductive vs Inductive vs Abductive Reasoning](https://uregina.ca/~gingrich/319j1506.htm)*.\n*   **Video:** *[Sherlock Holmes uses Abduction, not Deduction](https://www.youtube.com/watch?v=1bDFZ31q0rE)*.\n"
                            },
                            {
                                "id": "scientific-laws",
                                "title": "Scientific Laws",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Science",
                                    "Definition"
                                ],
                                "content": "# Scientific Laws\n\nDescriptions, not rules.\n\nA **Scientific Law** is a statement that describes an observable occurrence in nature that appears to always be true.\nIt tells you **What** happens, not **Why** it happens.\n\n*   **The Law:** $F = ma$ (Newton's Second Law).\n    *   It describes exactly how a rock moves when you kick it.\n*   **The Theory:** General Relativity.\n    *   It explains *why* gravity exists (warped spacetime).\n\n## The Misconception\n\nWe often think of Laws like \"Traffic Laws\" (rules imposed by a government).\nNature's Laws are descriptive patterns, not prescriptions. The universe doesn't \"obey\" the law of gravity; the law of gravity is just our best description of what the universe already does.\n\n## FAQs\n\n*1. Is a Theory a \"baby Law\"?*\nNo. This is the biggest myth in science ed.\n*   **Fact:** Observation.\n*   **Law:** Description of the pattern.\n*   **Theory:** Explanation of the mechanism.\nA Theory never becomes a Law. They do different things. Evolution is a Theory (it explains). Gravity is a Law (it describes) AND a Theory (it explains).\n\n*2. Can laws change?*\nYes. Newton's Laws were considered absolute for 200 years. Then Einstein showed they were slightly wrong at high speeds. We didn't throw them away (they still work for cars), but we updated the description.\n\n### Further Reading\n\n*   **Article:** *[Scientific Hypothesis, Theory, Law Definitions](https://www.livescience.com/21491-what-is-a-scientific-theory-definition-of-theory.html)*.\n*   **Video:** *[Fact vs. Theory vs. Hypothesis vs. Law](https://www.youtube.com/watch?v=lqk3TKuGNBA)*.\n"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "science",
                "title": "Science",
                "icon": "fas fa-dna",
                "desc": "Biology, Physics, and Chemistry",
                "view": "shelf",
                "children": [
                    {
                        "id": "crispr",
                        "title": "CRISPR",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Biology",
                            "Genetics",
                            "Biotech"
                        ],
                        "content": "# CRISPR\n\n**Think of it like the \"Find and Replace\" function in a word processor, but for DNA.**\n\n**CRISPR** (Clustered Regularly Interspaced Short Palindromic Repeats) is a biological tool that allows scientists to find a specific sequence of DNA code inside a living cell and edit, remove, or replace it.\n\nImagine your DNA is a massive instruction manual for building *You*. Before CRISPR, if there was a typo in that manual (a genetic disease), trying to fix it was like trying to rewrite a single page by throwing a bucket of ink at the book. CRISPR changed the game because it includes a \"search bar\" (a guide molecule) that finds the *exact* sentence with the typo, and a pair of \"scissors\" (the Cas9 protein) that cuts it out so it can be rewritten.\n\n## How it Works\n1.  **The Guide (Search):** Scientists design a piece of RNA that matches the specific DNA sequence they want to target (like typing \"typo\" into the search bar).\n2.  **The Cut (Delete):** An enzyme called Cas9 follows the guide to that location and snips the DNA strand.\n3.  **The Repair (Paste):** The cell notices the damage and tries to repair it. Scientists can provide a new, correct piece of DNA for the cell to use as a template during this repair, effectively pasting in the correct code.\n\n## FAQs\n\n*1. Is this safe for humans?*\nIt is still experimental for most uses. The main risk is \"off-target effects\"; where the scissors accidentally cut a similar-looking sentence on the wrong page, potentially causing unintended mutations or cancer. But new versions (like \"Base Editing\" or methylation editors) are becoming safer.\n\n*2. Can it create \"Designer Babies\"?*\nTheoretically, yes. It could be used to alter traits like height or eye color in embryos. However, the scientific community largely considers this unethical (and illegal in many places) because those changes are \"heritable\"; meaning they would be passed down to all future generations.\n\n### Further Reading\n\n*   **Video:** *[Gene Editing with CRISPR-Cas9](https://www.youtube.com/watch?v=2pp17E4E-O8)* (McGovern Institute explainer).\n*   **Article:** *[What is CRISPR?](https://www.newscientist.com/term/what-is-crispr/)* (New Scientist basic guide).\n"
                    },
                    {
                        "id": "epigenetics",
                        "title": "Epigenetics",
                        "icon": "far fa-file-alt",
                        "desc": "",
                        "tags": [
                            "Biology",
                            "Genetics",
                            "Health"
                        ],
                        "content": "# Epigenetics\n\n**Think of it like the \"Software\" that runs on your DNA \"Hardware.\"**\n\n**Epigenetics** is the study of biological mechanisms that switch genes on or off without altering the actual DNA sequence itself.\n\nIf your DNA is the rigid hardware (the unchangeable circuit board) of a computer, epigenetics is the operating system that decides which programs (genes) to run and which to ignore. You can't easily change your hardware, but your environment; stress, diet, sleep, chemicals; can change the software settings. This helps explain why identical twins (who have the exact same hardware) can develop completely different health issues as they age; their \"settings\" have drifted apart.\n\n## How it Works\n*   **Methylation (The Off Switch):** The body attaches small chemical tags (methyl groups) to specific parts of DNA. These act like \"Do Not Disturb\" signs, preventing that gene from being read.\n*   **Histone Modification (The Volume Knob):** DNA is wrapped around spools called histones. If the DNA is wrapped too tightly, the cell can't read it (volume down). If it's loose, the gene is active (volume up).\n\n## FAQs\n\n*1. Can I change my epigenetics?*\nYes! Unlike your DNA, which you're stuck with, your epigenetic markers are reversible. Improving your diet, exercising, and reducing stress can physically remove \"bad\" tags and add \"good\" ones, potentially lowering your risk of diseases like cancer or diabetes.\n\n*2. Do I pass this to my kids?*\nSurprisingly, yes. Some epigenetic tags can survive reproduction. This means extreme stress or famine experienced by a parent (or even grandparent) can leave a chemical \"scar\" on their genes that is passed down, potentially affecting the metabolism or stress response of their children.\n\n### Further Reading\n\n*   **Video:** *[The Epigenetics Revolution](https://www.youtube.com/watch?v=kp1bZEUgqVI)* (SciShow).\n*   **Article:** *[Epigenetics: It's not just genes that make us](https://www.bbc.com/news/health-29621689)* (BBC News).\n"
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
                "view": null,
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
                        "content": "# Week 51\n\n## Cyber Security\n\n### WatchGuard Firebox Critical [[zero-day|Zero Day]] Vulnerability Exploited\n\n- Hackers are actively attacking a critical vulnerability ([[cve|CVE]]-2025-14733) in WatchGuard Firebox [[firewalls]]\n- The flaw allows attackers to take complete control of the device remotely without needing a password.\n- CISA has added this to its \"Known Exploited Vulnerabilities\" catalog, mandating federal agencies to patch immediately; private companies are urged to do the same.\n\n*Read more about it: https://www.cisa.gov/news-events/alerts/2025/12/19/cisa-adds-one-known-exploited-vulnerability-catalog*\n\n\n---\n<br>\n\n### Coupang CEO Resigns Following Massive Data Breach\n- Following a breach exposing 34 million customers, Coupang\u2019s CEO Park Dae-jun has resigned.\n- The company was also forced by regulators to delete a controversial \"liability exemption\" clause from its terms of service.\n- This sets a major precedent in South Korea and globally that tech giants cannot use fine print to absolve themselves of responsibility for poor security.\n\n*Read more about it: https://koreajoongangdaily.joins.com/news/2025-12-19/business/industry/Coupang-removes-clause-exempting-it-from-hacking-liability-after-order-from-data-protection-agency/2482115*\n\n---\n<br>\n\n### Microsoft Teams Outage & Concurrent [[phishing|Phishing]] Wave\n- Microsoft Teams suffered a significant outage on December 19, leaving thousands of users unable to send messages.\n- Simultaneously, security researchers tracked a new wave of \"[[phishing|OAuth-Phishing]]\" attacks targeting Microsoft 365 accounts.\n- Attackers are tricking users into granting malicious apps permission to access their email, rather than stealing passwords directly.\n\n*Read more about it: https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-teams-is-down-and-messages-are-delayed/*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### NVIDIA Debuts \"Nemotron 3\" Open Model Family\n\n- NVIDIA released Nemotron 3, a new family of open AI models that under the [[open-model|Open-Model]] Family (Nano, Super, and Ultra) designed for [[agentic-ai|Agentic-AI]].\n- The models are optimized to work together in multi-step workflows (e.g., one AI plans a task, another executes it).\n- This release provides developers with powerful, efficient tools to build complex AI assistants without relying solely on closed models like GPT-4.\n\n*Read more about it: https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models*\n\n---\n<br>\n\n## General Technology\n\n### [[lidar|LiDAR]] Pioneer Luminar Technologies Files for Bankruptcy\n- Luminar, a leading company in autonomous vehicle sensors ([lidar|LiDAR]), filed for Chapter 11 bankruptcy on December 15.\n- The company is selling its semiconductor division to [[quantum-computing|Quantum-Computing]] Inc. to raise cash.\n- This signals a major shakeup in the self-driving car industry, as automakers face high costs and slower-than-expected adoption of autonomous tech.\n\n*Read more about it: https://investors.luminartech.com/news-events/press-releases/detail/110/luminar-technologies-inc-initiates-voluntary-chapter-11*\n\n---\n<br>\n\n### Wisk Aero Completes First Flight of Gen 6 Air Taxi ([[evtol|eVTOL]])\n- Wisk Aero (owned by Boeing) successfully flew its \"Generation 6\" air taxi for the first time on Dec 17.\n- This aircraft is fully autonomous (no pilot on board) and is designed to carry four passengers.\n- It represents a critical milestone toward certifying \"flying taxis\" for commercial use in cities.\n\n*Read more about it: https://aiaa.org/2025/12/17/wisk-completes-first-gen-6-evtol-air-taxi-flight/*\n\n---\n<br>\n\n### Rocket Lab Successful \"[[disksat|DiskSat]]\" Launch\n- Rocket Lab successfully launched its Electron rocket on Dec 19, deploying a dedicated mission for the US Space Force.\n- The payload included a unique \"DiskSat\u201c; a flat, plate-shaped satellite designed to stack efficiently inside rockets.\n- The success reinforces Rocket Lab's position as the primary competitor to SpaceX for small satellite launches.\n\n*Read more about it: https://aiaa.org/2025/12/19/rocket-lab-launches-stp-s30-disksat-mission-from-wallops-island/*\n\n---\n<br>\n"
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
                        "content": "# Week 52\n\n## Cyber Security\n\n### The \"GrinchBot\" Swarms: AI Agents Dominate Holiday Retail\n\n![GrinchBot](https://cdn.prod.website-files.com/626ff4d25aca2edf4325ff97/6746ea61913120185ec60b13_Predictions.avif)\n\n- A new wave of \"Autonomous [[agentic-ai|AI-Agents]]\" (dubbed GrinchBots) decimated online inventories this week, purchasing 40% of high-demand electronics within milliseconds of restock.\n- Unlike older bots, these AI agents use \"[[computer-vision|Computer-Vision]]\" to solve CAPTCHAs and mimic human mouse movements, making them nearly impossible to filter with standard defenses.\n- Major retailers were forced to implement \"lottery systems\" for purchases, frustrating legitimate last-minute shoppers.\n\n*Read more about it: https://www.darktrace.com/blog/ai-and-cybersecurity-predictions-for-2025*\n\n### Artemis II Mission Systems Withstand \"Red Team\" Cyber Drill\n\n![Artemis II](https://images-assets.nasa.gov/image/NHQ202512200036/NHQ202512200036~large.jpg?w=1920&h=1307&fit=crop&crop=faces%2Cfocalpoint)\n\n- Alongside the physical crew tests on December 20, NASA confirmed the successful completion of a classified \"[[red-team|Red-Team]]\" cyber-defense exercise for the Orion capsule.\n- [[ethical-hackers|Ethical-Hackers]] attempted to jam the optical communications system (O2O) intended for the upcoming lunar flyby but failed to breach the [[encryption]].\n- Ensuring the integrity of the data link is critical, as this will be the first crewed mission to rely heavily on laser communications from deep space.\n\n*Read more about it: https://www.nasa.gov/missions/artemis/artemis-2/artemis-ii-flight-crew-teams-conduct-demonstration-ahead-of-launch/*\n\n### \"Deepfake Family\" Voice Scams Surge Over Holidays\n- Security firms reported a 300% spike in \"Grandparent Scams\" during Christmas week, powered by high-fidelity AI voice cloning.\n- Attackers used snippets of audio from social media (TikTok/Instagram) to clone voices of younger relatives, calling older family members claiming \"emergency travel trouble.\"\n- The attacks were highly targeted, using location data to know who was actually traveling, adding terrifying credibility to the calls.\n\nFunfact: The AI just needs an ~3 second of your voice to learn your vocal pattern\n\n*Read more about it: https://investor.gendigital.com/news/news-details/2024/Gen-Reveals-Cybersecurity-Predictions-for-2025/default.aspx*\n\n## Artificial Intelligence\n\n### EU AI Act: Final Compliance Deadline Looms for \"High Risk\" Models\n- As the year ends, major US tech firms are rushing to finalize documentation for the EU AI Act's full implementation (effective Jan 2026).\n- \"High Risk\" systems (including AI used in HR, healthcare, and policing) must now prove they have human oversight and bias mitigation.\n- Several [[open-source]] projects have geo-blocked European users this week to avoid the legal liability of these strict new rules.\n\n*Read more about it: https://artificialintelligenceact.eu/high-level-summary/*\n\n### Microsoft's Copilot \"Year in Review\" Feature Criticized for Hallucinations\n- Microsoft rolled out an AI-generated \"Year in Review\" for Office 365 users, summarizing their work year.\n- Users reported bizarre [[ai-hallucination|hallucinations]], with the AI inventing meetings that never happened or congratulating users on projects they didn't work on.\n- The glitch underscores the ongoing \"grounding\" problem in Generative AI; it prioritizes sounding nice over being factually accurate.\n\n**What is grounding?**\n  Grounding is making sure the AI is tethered to facts. Without it, the AI is like a creative writer who invents a fun story instead of a reporter who tells you the truth.\n\n## General Technology\n\n*Read more about it: link*\n"
                    }
                ]
            },
            {
                "id": "2026",
                "title": "2026",
                "icon": "fas fa-calendar-alt",
                "desc": "Weekly updates for 2026",
                "view": null,
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
                        "content": "# Week 1\n\n## Cyber Security\n\n### RondoDox Botnet Exploits Next.js Servers\n\n![Rondodox](https://www.bleepstatic.com/content/hl-images/2025/11/26/bot.jpg)\n\n- The What: A new [[botnets|botnet]] campaign dubbed \"RondoDox\" has been observed actively targeting servers running the Next.js framework by exploiting a critical vulnerability known as \"[[react2shell|React2Shell]]\" ([[CVE]]-2025-55182).\n- The Detail: Attackers are using this flaw to execute [[remote-code-execution|Remote-Code]] on vulnerable servers, subsequently deploying cryptominers and malware. The [[botnets|botnet]] specifically hunts for unpatched instances of the popular React framework used for building web applications.\n- The Impact: This poses a severe risk to web infrastructure, as Next.js is widely used by enterprise-grade applications. Successful compromise can lead to server resource theft ([[cryptojacking]]) or deeper network infiltration.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/rondodox-botnet-exploits-react2shell-flaw-to-breach-nextjs-servers/*\n\n### Fourth Wave of \"GlassWorm\" Targets macOS Developers\n\n![Glassworm](https://www.bleepstatic.com/content/hl-images/2023/10/26/apple-cpu.jpg)\n\n- The What: A persistent malware campaign known as [[glassworm|GlassWorm]] has launched its fourth wave, specifically targeting macOS developers through malicious extensions for VSCode and OpenVSX.\n- The Detail: The attackers distribute trojanized versions of cryptocurrency wallet applications and development tools. Once installed, the [[malware]] grants persistent access to the victim's machine, aiming to steal sensitive credentials and crypto assets.\n- The Impact: This highlights the growing trend of [[supply-chain-attack|Supply-Chain-Attack]] targeting developers. By compromising the tools developers use, attackers can potentially inject malicious code into downstream software or steal high-value intellectual property.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-glassworm-malware-wave-targets-macs-with-trojanized-crypto-wallets/*\n\n### Unleash Protocol Drained of $3.9 Million\n\n![Unleash Protocol](https://www.bleepstatic.com/content/hl-images/2025/05/16/Cryptocurrency.jpg)\n\n- The What: The decentralized finance (DeFi) platform Unleash Protocol suffered a major security breach, resulting in the theft of approximately $3.9 million in cryptocurrency.\n- The Detail: The attack was executed via an unauthorized contract upgrade. The attacker managed to hijack the platform's multisig (multi-signature) wallet controls, allowing them to approve a malicious update that drained the protocol's assets.\n- The Impact: This incident underscores the fragility of \"upgradeable\" smart contracts. If administrative keys are compromised, the immutability of the blockchain offers no protection against theft, leaving investors with significant losses.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/hackers-drain-39m-from-unleash-protocol-after-multisig-hijack/*\n\n\n## Artificial Intelligence\n\n### SoftBank Completes $40B Investment in OpenAI\n\n![SoftBank](https://www.reuters.com/resizer/v2/VHQOFULCBVKJXKTAN362B3C3MA.jpg?auth=c619e06d52a1006c896a3e677e7b86e99693c1be87eee1b6edb6ebeb4f614649&width=720&quality=80)\n\n- The What: SoftBank has officially finalized a massive $40 billion investment into OpenAI, solidifying the Japanese conglomerate's stake in the leading American AI research lab.\n- The Detail: This capital injection is expected to fund the exorbitant compute costs required for training the next generation of models (potentially GPT-6) and expanding global infrastructure.\n- The Impact: This moves OpenAI further away from its non-profit roots and deeper into the corporate mega-structure. It signals that the \"AI Arms Race\" has become too expensive for anyone but the most heavily capitalized entities to compete in.\n\n*Read more about it: https://www.reuters.com/business/media-telecom/softbank-has-fully-funded-its-40-billion-investment-openai-cnbc-reports-2025-12-30/*\n\n### OpenAI Prioritizes \"Sponsored Content\" in Answers\n\n![OpenAI](https://www.bleepstatic.com/content/hl-images/2023/03/24/ChatGPT-logo.jpg)\n\n- The What: Reports indicate that OpenAI is shifting its business model to prioritize \"sponsored content\" within its AI-generated responses, moving away from a purely subscription/API-based revenue stream.\n- The Detail: Despite initial resistance to advertising, the company is testing formats where paid partners' information appears prominently when relevant queries are asked, distinct from organic training data results.\n- The Impact: This fundamentally changes the user trust model for [[llm|Large-Language-Models]]. If answers are influenced by sponsorship, the perceived neutrality of AI \"reasoning\" is compromised, making it more akin to a search engine ad platform than an impartial assistant.\n\n*Read more about it: https://www.bleepingcomputer.com/news/artificial-intelligence/openais-chatgpt-ads-will-allegedly-prioritize-sponsored-content-in-answers/*\n\n### NVIDIA in Advanced Talks to Acquire AI21\n\n![NVIDIA](https://www.reuters.com/resizer/v2/GGE5ILN4FRPZHMMZ27MFAYJDGM.jpg?auth=7b2405ecd06f8278d7a0cbe09a30b8abf441451bb0389065f0daa29aec83f7e3&width=720&quality=80)\n\n- The What: Reports indicate NVIDIA is in late-stage negotiations to acquire Israeli startup AI21 Labs for approximately $2-3 billion.\n- The Detail: AI21 is known for its \"Jurassic\" large language models and specialized enterprise AI tools. The deal is described as an \"acqui-hire,\" focusing on absorbing AI21's top-tier research talent.\n- The Impact: This represents significant market consolidation. Hardware giant NVIDIA is moving vertically up the stack, owning not just the chips (H200s/Blackwell) but increasingly the models and software ecosystems that run on them.\n\n*Read more about it: https://www.reuters.com/business/nvidia-advanced-talks-buy-israels-ai21-labs-up-3-billion-report-says-2025-12-30/*\n\n### Meta Acquires \"Manus\" for Agentic AI\n\n![Manus](https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-2173579488.jpg?resize=1280,852)\n\n- The What: Meta has agreed to acquire Singapore-based startup Manus, a company specializing in [[agentic-ai|AI-Agents]] for small and medium businesses (SMBs).\n- The Detail: Manus's technology focuses on autonomous agents that can execute complex multi-step workflows for businesses. Meta plans to integrate this directly into its enterprise offerings, potentially within the WhatsApp/Messenger business ecosystem.\n- The Impact: This signals a shift from \"Chatbots\" (which just talk) to \"Agents\" (which do work). Meta is betting that the future of business messaging involves AI that can autonomously handle customer service, booking, and sales tasks.\n\n*Read more about it: https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about/*\n\n## General Technology\n\n### New \"Microchip\" Enables Quantum Control\n\n![Quantum](https://www.sciencedaily.com/images/1920/quantum-computing-optical-fiber-array.webp) \n\n- The What: Researchers have developed a new microchip-sized device capable of controlling laser frequencies with extreme precision, a critical step for scalable [[quantum-computing]].\n- The Detail: Published in ScienceDaily, the research details how this chip uses a fraction of the power required by traditional bulky systems to stabilize the lasers needed to manipulate quantum bits ([[qubits]]).\n- The Impact: Reducing the size and power consumption of control hardware is one of the biggest hurdles in moving quantum computers from the lab to commercial reality. This chip could accelerate the timeline for practical quantum processors.\n\n*Read more about it: https://www.sciencedaily.com/releases/2025/12/251226045341.htm*\n\n### NYC Mayoral Inauguration Bans Flipper Zero and Raspberry Pi\n\n![Flipper Zero](https://www.bleepstatic.com/content/hl-images/2023/01/03/flipper-zero.jpg)\n\n- The What: For the 2026 inauguration of New York City Mayor Zohran Mamdani, officials have explicitly added the Flipper Zero and Raspberry Pi devices to the list of banned items.\n- The Detail: The [[flipper-zero|Flipper-Zero]] is a portable multi-tool for geeks that can interact with radio protocols ([[rfid|RFID]], [[nfc|NFC]], Sub-GHz). While legal, it has gained a reputation in security circles for its ability to clone badges or disrupt wireless signals.\n- The Impact: This is one of the first high-profile public events to specifically blacklist \"hacker tools\" by name, acknowledging the physical security risks posed by accessible, pocket-sized cyber-physical devices.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/nyc-mayoral-inauguration-bans-flipper-zero-raspberry-pi-devices/*\n\n### US Grants Chip Export Waivers to Samsung & SK Hynix\n\n![Samsung & SK Hynix](https://www.reuters.com/resizer/v2/43SUW2D6SZNEVE5W7LJWOZSOQU.jpg?auth=ad93f2f983b5d1fda4c41a88a4ff49b15399dfa287e30ab6f95b35175a5ded94&width=720&quality=80)\n\n- The What: The US government has granted a renewed annual license to South Korean chip giants Samsung and SK Hynix, allowing them to continue shipping advanced chip manufacturing equipment to their facilities in China through 2026.\n- The Detail: This waiver is a critical exception to the strict US export controls designed to limit China's [[semiconductor]] capabilities. It allows these companies to maintain their existing massive memory chip fabrication plants in China.\n- The Impact: This decision stabilizes the global memory chip supply chain for the coming year. Without it, global prices for RAM and Flash storage (used in everything from phones to servers) would likely have spiked due to production disruptions.\n\n*Read more about it: https://www.reuters.com/world/china/samsung-wins-us-annual-approval-chipmaking-tool-shipments-china-source-says-2025-12-30/*\n\n### SpaceX Hints at 2026 IPO\n\n![SpaceX](https://static.scientificamerican.com/dam/m/6bef183ef9b42e99/original/Falcon-9.jpg?m=1766602578.408&w=1200)\n\n- The What: Following a court victory reinstating Tesla stock options, Elon Musk has publicly hinted that SpaceX may finally initiate its Initial Public Offering (IPO) in 2026.\n- The Detail: Analysts suggest a valuation potentially exceeding $1.5 trillion. The move would transition the world's dominant private spaceflight company into the public markets, opening it to retail investors.\n- The Impact: A SpaceX IPO would be the most significant financial event in the aerospace sector in decades, likely flooding the industry with capital and forcing competitors to accelerate their own capitalization strategies to survive.\n\n*Read more about it: https://www.scientificamerican.com/article/spacex-could-go-public-in-2026-what-does-that-mean-for-space-exploration/*\n"
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
                        "content": "# Week 2\n\n## Cyber Security\n\n### Critical RCE Flaws Patched in Veeam Backup\n\n![Veeam](https://www.bleepstatic.com/content/hl-images/2024/11/08/Veeam.jpg)\n\nDate: 2026-01-07\n\n- Veeam released urgent patches for its Backup & Replication software to fix a critical vulnerability ([[cve|CVE]]-2025-59470) and two high-severity flaws.\n- The flaw allows low-privileged users, such as backup operators, to execute arbitrary code remotely ([[remote-code-execution|RCE]]) by manipulating backup configuration files or password parameters.\n- Given Veeam's ubiquity in enterprise disaster recovery, unpatched servers act as a prime gateway for attackers to seize control of backup data and demand extortion payments.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-veeam-vulnerabilities-expose-backup-servers-to-rce-attacks/*\n\n### China-Linked Bad Actors Exploit VMware ESXi zero-day Chain\n\n![VMware](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm8E9a8qNOO2_xOS89H3cvGDWPpRKo2WRFf41jVFbT6TGf62B4tUg2HJVFblopdAftu8NYjNO-S2MF-_VOr6mHghokD_zhl8Ybf-H8XLhw5_E4tDfkvIfjltzVwsOo-BK731rpbx2-eClOz4yN3Nw8nHXZaRo9ATkbzTLNIP9j7OaeHCdebT_S8uXri6Iu/s790-rw-e365/vmware.jpg)\n\nDate: 2026-01-09\n\n- Chinese-speaking bad actors utilized a chain of three [[zero-day|zero-day]] vulnerabilities ([[cve|CVE]]-2025-22224, 22225, 22226) to escape virtual machines and compromise host systems.\n- Successful exploitation of the issue could permit a malicious actor with admin privileges to leak memory from the Virtual Machine Executable ([[vmx|VMX]]) process or execute code as the [[vmx|VMX]] process.\n- The attack vector originated from a compromised SonicWall [[vpn|VPN]], allowing attackers to deploy a toolkit named \"MAESTRO\" and a malicious driver to execute code on the [[hypervisor|Hypervisor]] level.\n- This highlights a sophisticated escalation where attackers can bypass standard isolation protections, putting critical virtualized infrastructure at severe risk of [[ransomware|Ransomware]] deployment.\n\n*Read more about it: https://thehackernews.com/2026/01/chinese-linked-hackers-exploit-vmware.html*\n\n### Critical Flaws Expose 50k+ Coolify Instances to Root Takeover\n\n![Coolify](https://image-optimizer.cyberriskalliance.com/unsafe/1920x0/https://files.cyberriskalliance.com/wp-content/uploads/2025/09/AdobeStock_1364130870.jpg)\n\nDate: 2026-01-09\n\n- Security researchers have disclosed 11 critical vulnerabilities in Coolify, an open-source self-hosting platform, with severity scores reaching the maximum [[cvss|CVSS]] rating of 10.0.\n- The flaws include massive security gaps such as the exposure of private [[ssh|SSH]] keys (CVE-2025-64420) and [[command-injection|Command-Injection]] bugs ([[cve|CVE]]-2025-59157) that allow low-privileged users to execute arbitrary code.\n- With over 52,000 instances currently exposed online, unpatched servers are at immediate risk of total compromise, allowing attackers to escape container environments and seize full control of the host infrastructure.\n\n*Read more about it: https://www.scworld.com/brief/nearly-a-dozen-coolify-flaws-put-servers-at-risk*\n\n## Artificial Intelligence\n\n### Google Rolls Out Speed-Focused Gemini 3 Flash Model\n\n![Gemini 3 Flash](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-16.png)\n\nDate: 2026-01-03\n\n- Google has globally deployed \"Gemini 3 Flash,\" a new iteration of its model designed specifically for low-latency, real-time responses in Search and mobile ecosystems.\n- The model powers a new \"AI Mode\" in Google Search, capable of verifying its own answers to minimize [[ai-hallucination|AI-Hallucination]] before presenting them to the user.\n- This marks a shift from \"larger is better\" to \"faster and more reliable,\" directly targeting users who need instant, verified information rather than creative generation.\n\n*Read more about it: [Boston Institute of Analytics](ht tps://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*\n\n### India Launches \"Skill the Nation\" AI Initiative\n\n![Skill the Nation](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-17.png)\n\nDate: 2026-01-03\n\n- The Indian government announced the SOAR (Skilling for AI Readiness) initiative, aiming to upskill the workforce for an AI-centric economy.\n- Announced by President Murmu, the program shifts the focus of AI from a \"tech sector issue\" to a national GDP driver, with specific training mandates.\n- This represents one of the largest state-sponsored AI literacy pushes, potentially positioning India as a massive talent hub for the global [[generative-ai|Generative-AI]] supply chain.\n\n*Read more about it: [Boston Institute of Analytics](https://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*\n\n\n### Perplexity launches free AI tool for law enforcement agencies\n\n![Perplexity](https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg)\n\nDate: 2026-01-08\n\n- Perplexity has released a specialized enterprise AI platform designed for law enforcement and emergency responders, offered free to qualifying agencies for one year.\n- The tool allows officers to analyze crime scene photos, bodycam transcripts, and incident reports in real-time, though Perplexity states the data is isolated and not used for model training.\n- While aimed at reducing police paperwork, the launch has ignited immediate privacy debates regarding the reliability of AI analysis in criminal justice and the potential for automated bias in policing.\n\n*Read more about it: [Investing.com](https://in.investing.com/news/company-news/perplexity-launches-free-ai-tool-for-law-enforcement-agencies-93CH-5179360)*\n\n### OpenAI and SoftBank Invest $1B in \"Stargate\" Energy Project\n\n![Stargate](https://media.gettyimages.com/id/2243573116/photo/the-openai-logo-appears-on-a-smartphone-screen-reflecting-an-abstract-illustration-dominated.jpg?s=612x612&w=0&k=20&c=Bm-p9812p4vS8LpdeOV9X-caneeclVR3bIg-1lic_5A=)\n\nDate: 2026-01-09\n\n- OpenAI and SoftBank Group have jointly invested $1 billion into SB Energy to build massive renewable energy infrastructure for the upcoming \"Stargate\" data center project.\n- The partnership focuses on supplying 1.2 gigawatts of power, enough to light up a major city, specifically to support the immense compute requirements of OpenAI's next-generation models.\n- This move signals that power availability, not just chip supply, is now the primary bottleneck for AI scaling, forcing tech giants to become energy infrastructure developers.\n\n*Read more about it: [OpenAI Official Blog](https://openai.com/index/stargate-sb-energy-partnership/)*\n\n### Allianz Deploys Anthropic's Claude to Global Workforce\n\n![Allianz](https://www.pymnts.com/wp-content/uploads/2025/07/Allianz-.jpg?w=768)\n\nDate: 2026-01-09\n\n- Insurance giant Allianz announced a global partnership with Anthropic to integrate the Claude AI model into its daily operations across insurance, claims, and compliance.\n- Unlike standard chatbots, this integration will embed Claude directly into Allianz's core risk assessment workflows to automate complex document processing and claims analysis.\n- This represents one of the largest enterprise deployments of 2026 so far, signaling a shift where traditional industries are moving from \"AI experiments\" to full-scale production dependencies.\n\n*Read more about it: [PYMNTS](https://www.pymnts.com/artificial-intelligence-2/2026/allianz-taps-anthropic-to-help-deploy-ai-throughout-its-insurance-business/)*\n\n### Amazon\u2019s Ring rolls out controversial, AI-powered facial-recognition feature to video doorbells\n\nDate: 2026-01-09\n\n![Ring](https://techcrunch.com/wp-content/uploads/2024/08/ring_battery_doorbell_2024.jpg)\n\n- Amazon's Ring has begun deploying AI-powered facial recognition features that can identify specific individuals rather than just detecting generic motion.\n- The \"Familiar Faces\" update allows the system to tag known visitors, a feature that has sparked renewed debate regarding biometric privacy in consumer electronics.\n- While offering convenience for users to screen visitors, the mainstreaming of granular surveillance in home security raises concerns about data retention and neighborhood privacy.\n\n## General Technology\n\n### Intel Launches \"Panther Lake\" on Historic 18A Process\n\n![Intel](https://mms.businesswire.com/media/20260105738564/en/2682502/4/ntel-Core-Ultra-processor-series3-with-Arc-GPU.jpg)\n\nDate: 2026-01-08\n\n- At CES 2026, Intel officially debuted its Core Ultra Series 3 processors (codenamed \"Panther Lake\"), the first consumer chips built on its advanced 18A Node manufacturing process.\n- These chips utilize \"RibbonFET\" transistors to deliver a massive leap in efficiency, with Intel claiming up to 27 hours of battery life and a 77% boost in gaming performance over previous generations.\n- This is a \"make or break\" moment for US semiconductor manufacturing; successfully shipping 18A proves Intel can arguably match or beat TSMC\u2019s technology, potentially reshaping the global chip supply chain.\n\n*Read more about it: [Extreme Tech](https://www.extremetech.com/computing/intel-debuts-core-ultra-series-3-cpus-from-its-18a-node)*"
                    },
                    {
                        "id": "Week 3",
                        "title": "Week 03",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 10 January - 16 January 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "CyberSecurity",
                            "ArtificialIntelligence",
                            "Space",
                            "IOT"
                        ],
                        "content": "# Week 03\n\n## Cyber Security\n\n### Microsoft Patch Tuesday: 3 Zero-Days, 114 Flaws\n\n![Patch Tuesday](https://www.bleepstatic.com/content/hl-images/2024/10/08/patch_tuesday_microsoft.jpg)\n\nDate: January 13, 2026\n\n- **The Event:** Microsoft's January 2026 Patch Tuesday addressed **114 vulnerabilities**, including **three zero-days** that were either exploited in the wild or publicly disclosed.\n- **The Detail:**\n    1.  **CVE-2026-20805** (Exploited): A **Desktop Window Manager (DWM)** information disclosure vulnerability. Attackers can leak sensitive memory data to bypass protections.\n    2.  **CVE-2026-21265** (Publicly Disclosed): A **Secure Boot** security feature bypass caused by expiring certificates. Unpatched systems may fail to trust new bootloaders.\n    3.  **CVE-2023-31096** (Exploited): A **Windows Agere Soft Modem Driver** elevation of privilege flaw. Microsoft removed the deprecated `agrsm64.sys` driver to fix this legacy issue that allowed SYSTEM-level access.\n- **The Impact:** CISA has added the exploited flaws to its Known Exploited Vulnerabilities catalog. Federal agencies are mandated to patch immediately to prevent ransomware groups from leveraging these now-public exploits.\n\n*Read more about it: [Bleeping Computer](https://www.bleepingcomputer.com/news/microsoft/microsoft-january-2026-patch-tuesday-fixes-3-zero-days-114-flaws/)*\n\n---\n<br>\n\n### WEF Report: \"Cyber-Fraud\" Now Outranks Ransomware\n- **The Report:** The World Economic Forum released its *Global Cybersecurity Outlook 2026* on January 12, revealing a major shift in the threat landscape.\n- **The Detail:** For the first time, CEOs rated \"Cyber-enabled Fraud\" (deepfakes, manipulated financial transfers) as a higher concern than [[ransomware|Ransomware]], driven by the accessibility of AI cloning tools.\n- **The Impact:** This signals a strategic pivot for defenders: while [[encryption]] attacks (ransomware) are stabilizing, the integrity of *communication* (is this video call real?) is becoming the new battleground.\n\n*Read more about it: [World Economic Forum](https://www.weforum.org/publications/global-cybersecurity-outlook-2026/)*\n\n---\n<br>\n\n### Global Crackdown on DeepSeek Intensifies\n- **The Scrutiny:** Following its rapid rise, Chinese AI firm DeepSeek faced a wave of regulatory actions this week, with Australia and France launching probes into its data handling practices.\n- **The Detail:** Concerns focus on the app's data storage policies and potential ties to state surveillance, leading to bans on government devices in multiple jurisdictions as of mid-January.\n- **The Impact:** This geopolitical friction highlights the fragmentation of the global \"AI Stack,\" potentially forcing multinational companies to choose between Western-sanctioned tools and cost-effective Asian alternatives.\n\n*Read more about it: [Insurance Journal](https://www.insurancejournal.com/news/international/2026/01/07/853376.htm)*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### DeepSeek Publishes \"Engram\" to Bypass Chip Sanctions\n- **The Breakthrough:** On Jan 14, DeepSeek published a technical paper detailing \"[[deepseek-engram|Engram]],\" a new training method designed to build massive models using older, less powerful chips.\n- **The Detail:** The technique optimizes memory usage to overcome hardware bottlenecks, effectively allowing them to train GPT-4 class models without needing restricted Nvidia H100/Blackwell GPUs.\n- **The Impact:** This undermines the effectiveness of US semiconductor export controls, suggesting that algorithmic innovation is outpacing hardware restrictions in the global AI arms race.\n\n*Read more about it: [Tech Wire Asia](https://techwireasia.com/2026/01/deepseek-engram-technique-v4-model/)*\n\n---\n<br>\n\n### OpenAI Signs $10B Inference Deal with Cerebras\n- **The Deal:** In a move to diversify away from Nvidia, OpenAI has reportedly secured a multi-year compute agreement valued at over $10 billion with chipmaker Cerebras Systems.\n- **The Detail:** The partnership focuses specifically on \"Inference\" (running the models) rather than training, utilizing Cerebras' wafer-scale chips to drastically lower the cost and latency of ChatGPT responses.\n- **The Impact:** This is a direct challenge to Nvidia's monopoly, signaling that top AI labs are willing to fund alternative hardware ecosystems to reduce their dependency on a single supplier.\n\n*Read more about it: [The AI Insider](https://theaiinsider.tech/2026/01/16/openai-secures-multi-year-compute-agreement-with-cerebras-valued-at-over-10b/)*\n\n---\n<br>\n\n### Microsoft Report: DeepSeek Dominates 89% of Chinese Market\n- **The Statistic:** A new Microsoft AI Diffusion report (Jan 13) highlights that DeepSeek has captured nearly 89% of the AI user base in China, vastly outperforming local competitors like Baidu.\n- **The Detail:** The report warns of a widening \"AI Divide,\" where the Global South is adopting affordable, open-weight models from China, while the Global North sticks to expensive, closed US models.\n- **The Impact:** This entrenchment creates a \"bifurcated internet\" for AI, where future software ecosystems in Africa and SE Asia may be built on Chinese standards rather than Western APIs.\n\n*Read more about it: [Capacity Media](https://capacityglobal.com/news/microsoft-report-warns-of-deepseeks-rise-and-a-global-ai-divide/)*\n\n---\n<br>\n\n## General Technology\n\n### TSMC Forecasts 30% Growth Driven by \"Insatiable\" AI Demand\n- **The Forecast:** On Jan 16, [[semiconductor]] giant TSMC projected a nearly 30% revenue jump for 2026, shattering analyst expectations.\n- **The Detail:** The growth is driven almost entirely by demand for 2nm and 3nm chips used in AI accelerators, prompting TSMC to increase its capital expenditure to expand production capacity.\n- **The Impact:** As the sole manufacturer for both Apple and Nvidia's best chips, TSMC's confidence confirms that the \"AI Boom\" is not slowing down in 2026; in fact, hardware demand is accelerating.\n\n*Read more about it: [ANI News](https://aninews.in/news/business/tsmc-forecasts-nearly-30-sales-growth-in-2026-plans-capex-expansion-amid-ai-demand20260116121515)*\n\n---\n<br>\n\n---\ntitle: Week 03\ntags: WeeklyUpdate, Aerospace, BioTech, Engineering, Space\ndesc: Summary of 10 January - 16 January 2026.\n---\n\n# Week 03\n\n## General Technology (Aero, Space & BioTech Edition)\n\n### Historic Medical Evacuation from ISS (NASA Crew-11)\n- **The Event:** On Jan 15, NASA\u2019s Crew-11 astronauts returned to Earth a month early aboard a SpaceX Dragon capsule, marking the first time in history that a medical emergency forced an early end to a station mission.\n- **The Detail:** While NASA kept the specific astronaut's condition confidential due to privacy rules, the urgency required an unscheduled \"splashdown\" off the coast of San Diego to get the crew member to a hospital immediately.\n- **The Impact:** This rare event tests the \"Emergency Return\" protocols that will be critical for future Mars missions, where a 10-hour flight home is impossible, highlighting the need for advanced autonomous medical tech in deep space.\n\n*Read more about it: [KPBS News](https://www.kpbs.org/news/science-technology/2026/01/15/after-a-medical-evacuation-from-space-nasas-crew-11-returns-to-earth-a-month-early)*\n\n---\n<br>\n\n### Breakthrough \"Epigenetic\" CRISPR Tool Fixes Genes Without Cutting\n- **The Discovery:** Researchers at UNSW Sydney have validated a new [[crispr|CRISPR]] technique that \"switches\" genes on or off by removing chemical tags (methylation), rather than cutting the DNA strand itself.\n- **The Detail:** Traditional CRISPR acts like molecular scissors (risking unintended damage); this new method acts like a molecular \"eraser,\" removing the \"silencing\" markers on genes to treat conditions like Sickle Cell Anemia without altering the genome sequence.\n- **The Impact:** This resolves a decades-long biological debate and offers a significantly safer path for gene therapy, reducing the risk of accidental mutations or cancer associated with DNA-cutting methods.\n\n\n*Read more about it: [ScienceDaily](https://www.sciencedaily.com/releases/2026/01/260104202813.htm)*\n\n---\n<br>\n\n### Airbus Launches \"SpaceRAN\" to Standardize 5G from Orbit\n- **The Innovation:** Airbus UpNext has launched a demonstrator program called \"SpaceRAN\" to test a standardized way for satellites to provide direct-to-device 5G connectivity without proprietary lock-ins.\n- **The Detail:** Unlike Starlink\u2019s closed system, SpaceRAN uses a \"software-defined\" satellite architecture that allows standard commercial 5G devices to connect to satellites as if they were normal cell towers.\n- **The Impact:** If successful, this creates a unified global standard for [[ntn|Non-Terrestrial Networks]], allowing aviation, shipping, and remote industrial sites to switch between satellite providers instantly without changing hardware.\n\n\n*Read more about it: [Airbus Newsroom](https://www.airbus.com/en/newsroom/stories/2026-01-expanding-5g-connectivity-with-the-airbus-upnext-spaceran-demonstrator)*\n\n---\n<br>\n\n### China Launches \"Yaogan-50\" in First 2026 Orbital Mission\n- **The Launch:** China Aerospace Science and Technology Corp (CASC) successfully conducted its first launch of 2026, sending the Yaogan-50 remote sensing satellite into orbit via a Long March 6 rocket.\n- **The Detail:** The satellite is equipped with high-definition land survey sensors officially designated for \"disaster prevention and crop estimation,\" though western analysts often associate the Yaogan series with electronic surveillance.\n- **The Impact:** This kickstarts China's ambitious 2026 launch calendar, which aims to exceed 100 orbital missions this year, further accelerating the density of the Low Earth Orbit (LEO) environment.\n\n*Read more about it: [Qazinform](https://qazinform.com/news/china-launches-satellite-in-first-orbital-mission-of-2026-31e383)*\n\n---\n<br>\n"
                    }
                ]
            }
        ]
    },
    "library": {
        "title": "Library",
        "items": [
            {
                "id": "cool-sites",
                "title": "Cool Sites",
                "icon": "fas fa-link",
                "desc": "A collection of useful, interesting, or beautiful websites.",
                "tags": [
                    "Library",
                    "Links",
                    "Internet"
                ],
                "content": "# Cool Sites\n\nA collection of useful, interesting, or beautiful websites.\n\n## Tech Explainers\n\nSites that explain complex technical concepts simply.\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **Linux Ate My Ram** | A classic explanation of why \"free memory\" is wasted memory in Linux (and why `top` confuses you). | [linuxatemyram.com](https://www.linuxatemyram.com/) |\n| **Linux Kernel Word Count** | A visualizer showing how often specific words (and swear words) appear in the Linux source code. | [vidarholen.net](https://www.vidarholen.net/contents/wordcount/) |\n\n## Learning & Roadmaps\n\nGuides and interactive learning tools.\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **roadmap.sh** | Interactive developer roadmaps for frontend, backend, DevOps, and more. | [roadmap.sh](https://roadmap.sh/) |\n| **KC7 Cyber** | A data-driven cybersecurity game that teaches investigation skills. | [kc7cyber.com](https://kc7cyber.com/) |\n| **React Graph Gallery** | Beautiful examples of charts and data visualizations (e.g. Radar Chart Animation). | [react-graph-gallery.com](http://react-graph-gallery.com/example/radar-chart-animation) |\n| **TensorFlow Playground** | Visualize and play with neural networks in your browser. | [playground.tensorflow.org](https://playground.tensorflow.org/) |\n| **NotebookLM** | Google's AI research tool that acts as a personalized research assistant. | [notebooklm.google.com](https://notebooklm.google.com/) |\n| **MLU-Explain** | Interactive visual articles on machine learning concepts (Bias, Variance, etc.). | [mlu-explain.github.io](https://mlu-explain.github.io/) |\n\n\n## Reference\n\nUseful lists and wikis.\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **List of Cognitive Biases** | Wikipedia's massive list of the flaws in human reasoning. | [Wikipedia](https://en.wikipedia.org/wiki/List_of_cognitive_biases) |\n\n\n## Internet Humor\n\nRecursive jokes and specific tools.\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **Down Detector** | The actual site for checking outages. | [downdetector.in](https://downdetector.in/) |\n| **Down Detector's Down Detector** | Is Down Detector down? | [downdetectorsdowndetector.com](https://downdetectorsdowndetector.com/) |\n| **Down Detector's... Down Detector** | Is the site checking Down Detector down? | [downdetectorsdowndetectorsdowndetector.com](https://downdetectorsdowndetectorsdowndetector.com/) |\n| **The Final Boss** | We must go deeper. | [downdetectors...detector.com](https://www.downdetectorsdowndetectorsdowndetectorsdowndetector.com/) |\n"
            },
            {
                "id": "github-prs",
                "title": "Github Finds",
                "icon": "fab fa-github",
                "desc": "Interesting Pull Requests and Commits from the history of open source.",
                "tags": [
                    "Library",
                    "Github",
                    "Code"
                ],
                "content": "# Github Finds\n\nInteresting Pull Requests and Commits from the history of open source.\n\n## Resources & Culture\n\nGuides on how to behave (or not behave) in open source.\n\n| Description | Link |\n| :--- | :--- |\n| **The Art of the Commit** | [The Art of the Commit](https://alistapart.com/article/the-art-of-the-commit/) |\n\n## Canonical History\n\nActual milestones in software history.\n\n| Description | Link |\n| :--- | :--- |\n| **Self-Referential**<br>The first commit in the Git repo describing Git itself. | [Git / e83c516](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290) |\n| **The Removed Promise**<br>Mozilla removes the FAQ: \"Does Firefox sell your personal data? Nope. Never have, never will.\" | [Mozilla / d459add](https://github.com/mozilla/bedrock/commit/d459addab846d8144b61939b7f4310eb80c5470e) |\n\n## The Linux \"Read Only\" Mirror\n\nThe Linux kernel does not accept PRs on GitHub (it uses a mailing list). This has led to a genre of \"confused\" or \"joke\" PRs on the read-only mirror.\n\n| PR | Description | Link |\n| :--- | :--- | :--- |\n| **#386** | **The Typo Incident**<br>User tries to fix a typo. Bot politely says \"email us\". Chaos ensues in comments. | [View PR](https://github.com/torvalds/linux/pull/386) |\n| **#486** | **\"This Code Very Fast\"**<br>A classic joke PR claiming to optimize the kernel for a calculator. | [View PR](https://github.com/torvalds/linux/pull/486) |\n| **#698** | **\"Remove Extra Spaces\"**<br>A bold attempt to remove trailing whitespace from the *entire* kernel at once. | [View PR](https://github.com/torvalds/linux/pull/698) |\n| **#437** | **\"Delete Linux\"**<br>A proposal to simply delete the operating system. | [View PR](https://github.com/torvalds/linux/pull/437) |\n| **#765** | **\"Merry Christmas\"**<br>Optimizing the kernel for the holidays. | [View PR](https://github.com/torvalds/linux/pull/765) |\n| **#779** | **\"Infinity Diff\"**<br>Another massive, mostly broken attempt to fix things via web UI. | [View PR](https://github.com/torvalds/linux/pull/779) |\n"
            }
        ]
    }
};