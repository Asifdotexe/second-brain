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
                "group": "ai",
                "children": [
                    {
                        "id": "ai-concepts",
                        "title": "Concepts",
                        "icon": "fas fa-lightbulb",
                        "desc": "Core AI definitions and mechanisms",
                        "view": "list",
                        "group": "ai",
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
                                "links": [],
                                "group": "ai",
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
                                "links": [
                                    "rag"
                                ],
                                "group": "ai",
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
                                "links": [
                                    "llm",
                                    "rag"
                                ],
                                "group": "ai",
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
                                "links": [],
                                "group": "ai",
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
                                "links": [],
                                "group": "ai",
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
                                "links": [
                                    "ai-hallucination",
                                    "ai-fine-tuning"
                                ],
                                "group": "ai",
                                "content": "# RAG\n\nGiving the robot a textbook during the exam.\n\nStandard AI (like ChatGPT) relies on its **Training Memory** (what it learned months ago). It's like a student taking a closed-book exam; if they forgot the fact, they might guess ([[ai-hallucination|hallucinate]]).\n\n**RAG** (Retrieval Augmented Generation) connects the AI to your *live* documents. Before answering, it looks up the specific information in your files.\n\n## How it Works\n\n1.  **User Asks:** \"How much vacation time do I have?\"\n2.  **Retrieval (The Lookup):** The system searches your company's HR Handbook PDF.\n3.  **Generation (The Answer):** It sends the question *plus* the relevant page from the PDF to the AI. \"Using this page, answer how much vacation time the user has.\"\n4.  **Result:** \"According to page 12 of the handbook, you have 15 days.\"\n\n## FAQs\n\n*1. Why is this better than [[ai-fine-tuning|fine-tuning]]?*\n*   **RAG** is cheaper and instant. If you update the HR handbook, the AI knows immediately.\n*   **Fine-tuning** is expensive and slow. You have to \"re-train\" the brain every time facts change.\n\n*2. Does it stop hallucinations?*\nDrastically reduces them. Because the AI is grounded in the text you gave it, it is much less likely to make things up (Hallucinate).\n\n### Further Reading\n\n*   **Guide:** *[Oracle: What is RAG?](https://www.oracle.com/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/)*\n*   **Tutorial:** *[RAG for Beginners](https://python.langchain.com/docs/use_cases/question_answering/)*\n"
                            }
                        ]
                    },
                    {
                        "id": "ethics",
                        "title": "Ethics & Safety",
                        "icon": "fas fa-balance-scale",
                        "desc": "The Philosophy and Impact of Artificial Intelligence",
                        "view": "list",
                        "group": "ai",
                        "children": [
                            {
                                "id": "water-usage",
                                "title": "AI Water Usage",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "AI",
                                    "Ethics",
                                    "Environment",
                                    "Debunking"
                                ],
                                "links": [],
                                "group": "ai",
                                "content": "# AI Water Usage\n\nThe Drop in the Bucket.\n\n**The \"AI Water Crisis\"** is a counter-intuitive narrative that AI data centers are draining local water supplies. The data suggests this is largely a **Context Error**.\n\nThink of it like **Worrying about a Dripping Faucet during a Flood**.\n*   **The Flood (Agriculture):** 93% of humanity's water footprint goes to growing food and industrial processes.\n*   **The Faucet (Households/Data Centers):** Domestic use is ~1%. Data Centers are a fraction of that (0.13% of US potable water).\nHeadlines claiming \"ChatGPT uses a bottle of water per email\" are factually true but contextually misleading, similar to saying \"Your cat drinks 10,000 drops of water a day.\"\n\n## Key Definitions\n\nTo understand the numbers, we need to separate different *types* of water use.\n\n### 1. Consumptive vs. Non-Consumptive\n*   **Consumptive Use (evaporation):** Taking water and removing it from the local ecosystem (usually by evaporating it).\n    *   *Example:* Boiling a pot of pasta until dry, or growing an almond (the water becomes the almond).\n    *   *Data Centers:* Evaporative cooling towers dissolve water into the air. It\u2019s gone from the local watershed.\n*   **Non-Consumptive Use (borrowing):** Taking water, using it, and putting it back.\n    *   *Example:* A hydroelectric dam or a water wheel. The water flows through and keeps going.\n    *   *Relevance:* Most water \"used\" by power plants is non-consumptive (cooling), yet critics often count this huge number as \"lost\" water.\n\n### 2. Direct vs. Indirect\n*   **Direct Use:** Water used *at* the data center (onsite) to cool the servers.\n*   **Indirect Use:** Water used *at the power plant* to generate the electricity the data center burns.\n    *   *The Trap:* Critics often combine these numbers to make AI look worse. However, 80% of this \"indirect\" water is non-consumptive (just flowing through the power plant).\n\n### 3. Potable vs. Non-Potable\n*   **Potable:** Drinkable, treated water.\n*   **Non-Potable:** Raw freshwater or \"grey water\" (wastewater).\n    *   *Context:* Data centers often use potable water because it's cleaner for the pipes (no sediment). However, in 2023, data centers used only **0.13%** of the US public water supply.\n\n![AI Water Usage](https://substackcdn.com/image/fetch/$s_!08rF!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa6f9ca94-41c4-4951-adbe-6f3b18ead783_1518x708.png)\n\n## The Core Argument\n\n1.  **Scale Mismatch:** Critics often compare AI water usage to \"millions of homes.\" This sounds huge because we assume homes use a lot of water. They don't (compared to farms).\n2.  **Trade-offs:** Data centers use water for *cooling*. The alternative is air conditioning (using massive electricity). Water cooling is often the \"greener\" choice for the planet, even if it uses local water.\n3.  **Potability:** Ideally, data centers shouldn't use drinkable (potable) water. Many are switching to \"grey water\" (recycled wastewater), rendering the argument moot.\n\n## Key Stats\n\n*   **0.13%:** The percentage of US potable water used by data centers in 2023.\n*   **Growth:** Even with 10x AI growth, it would reach ~0.3% of supply.\n*   **Perspective:** An electric car factory often uses as much water as a data center, yet rarely faces the same \"moral\" scrutiny.\n\n![AI Water Usage](https://substackcdn.com/image/fetch/$s_!3XLI!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fda86b8b3-7c28-48c2-83fa-6df503f252f2_2274x850.png)\n[Sources](https://docs.google.com/spreadsheets/d/1VbKtaw9uHPIPoyYxlB06KFesBwxzGC4OwweV5SjvUos/edit?gid=0#gid=0)\n\n### Further  Reading\n\n*   **Article:** *[The AI water issue is fake](https://andymasley.substack.com/p/the-ai-water-issue-is-fake)* (Andy Masley).\n*   **Context:** *[Water Footprint of Food vs Tech](https://ourworldindata.org/water-use-stress)*.\n"
                            }
                        ]
                    },
                    {
                        "id": "models",
                        "title": "Models",
                        "icon": "fas fa-layer-group",
                        "desc": "Specific model architectures and types",
                        "view": "list",
                        "group": "ai",
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
                                "links": [],
                                "group": "ai",
                                "content": "# DeepSeek Engram\n\n**Think of it like moving a mansion using a fleet of small cars instead of one giant truck.**\n\n**DeepSeek Engram** is a distributed AI training method designed to build massive, cutting-edge models using older, less powerful computer chips.\n\nNormally, training a \"Super AI\" (like GPT-4) requires putting the entire model into the memory of extremely expensive, bleeding-edge chips (like Nvidia H100s) connected by ultra-fast cables. If you use slow chips, the system crashes or takes 100 years. \"Engram\" changes the math by breaking the model into tiny, independent \"parcels\" that can be processed by cheap, older consumer cards. It allows a thousand cheap chips to do the work of a hundred super-chips, bypassing the need for sanctioned hardware.\n\n## How it Works\n*   **Micro-Sharding (The Breakdown):** Engram slices the AI's \"brain\" into millions of tiny pieces. Instead of one chip needing to hold 10% of the brain, it only holds 0.001%.\n*   **Asynchronous Sync (The Traffic Control):** Traditional training requires all chips to talk to each other instantly (like a conference call). Engram allows chips to report back \"whenever they are ready\" (like sending emails); meaning slow internet cables between chips don't slow down the whole project.\n\n## FAQs\n\n*1. Does this make the AI smarter?*\nNo, it makes the AI *cheaper* and *uncensorable*. The resulting intelligence is the same, but the \"barrier to entry\" drops. DeepSeek Engram allows nations or companies without access to US technology to build world-class AI using 5-year-old gaming parts.\n\n*2. Why didn't we do this before?*\nIt was mathematically very hard. Getting thousands of slow, disconnected chips to agree on a complex math problem without corrupting the data is difficult. DeepSeek solved the \"coordination chaos\" that usually happens when you try to split a task too many times.\n\n### Further Reading\n\n*   **Paper:** [Engram Paper](https://github.com/deepseek-ai/Engram/blob/main/Engram_paper.pdf)\n*   **Github Repository:** [Engram Repo](https://github.com/deepseek-ai/Engram)\n"
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
                                "links": [
                                    "transformers"
                                ],
                                "group": "ai",
                                "content": "# Large Language Model\n\nThink of an LLM as \"really really really good Autocomplete\", a system that has read almost everything on the internet and learned how to predict the next word in a sentence perfectly.\n\nIt is trained on massive amounts of text data. Instead of being \"taught\" grammar rules explicitly, it learns them by observing patterns. \n\nIts primary job is simple: **Guess the next word.** By making these guesses billions of times over, it learns to write essays, code software, translate languages, and answer questions.\n\n## How It Actually Works\n\nTo understand an LLM, we break it down into three fundamental pillars:\n\n**1. Tokenization (The Puzzle Pieces)**\nComputers don't read words like we do; they read numbers. An LLM breaks text down into chunks called *Tokens*. A token can be a whole word (like \"apple\") or part of a word (like \"ing\" in \"eating\").\n\n**2. Probability (The Guessing Game)**\nThe model looks at a sequence of tokens and calculates the *probability* of what comes next.\n* *Input:* \"The cat sat on the...\"\n* *LLM Calculation:*\n    * \"Mat\" (80% likely)\n    * \"Floor\" (15% likely)\n    * \"Moon\" (0.01% likely)\n\n**3. Training (The heavy Lifting)**\nTo get good at guessing, the model reads billions of sentences (books, websites, articles). It adjusts its internal \"settings\" (parameters) every time it guesses right or wrong, eventually building a map of how human language connects.\n\n## FAQ\n\n*1. What is a \"[[transformers|Transformer]]\"?*\nThe \"Transformer\" is the engine under the hood of modern [[llm|LLMs]] (like the 'T' in GPT). \n\nBefore Transformers, AI read sentences one word at a time, left to right. Transformers can read the **whole sentence at once**. This allows the model to understand context much better. \n\nFor example, in the sentence *\"The bank was closed because the river flooded,\"* a Transformer understands that \"bank\" refers to land, not money, because it sees the word \"river\" at the same time.\n\n*2. What are \"Parameters\"?*\n\nParameters are the \"brain cells\" of the model. They are the adjustable variables inside the model that store the knowledge. \n* **More parameters** = generally smarter, more nuanced, and capable of handling complex tasks. \n* GPT-4, for instance, has approximately 1.76 trillion parameters\n\n*3. Why do LLMs hallucinate?*\n\nSince an LLM is a **probabilistic engine**, not a fact database, it sometimes predicts a word that *sounds* plausible but is factually wrong. It prioritizes the *pattern* of language over the *truth* of the facts.\n\n## Further Reading\n\n* **\"[Attention Is All You Need](https://arxiv.org/pdf/1706.03762)\"** - The original research paper that introduced the Transformer architecture.\n* **[Wait But Why: The AI Revolution](https://futureoflife.org/ai/wait-but-why-the-ai-revolution/)** - A long-form, illustrated blog post explaining AI growth.\n* **[The Prompt Engineering Guide](https://www.promptingguide.ai/)** - The most famous community-run guide. Covers everything from basics to advanced logic.\n"
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
                                "links": [],
                                "group": "ai",
                                "content": "# Large Multimodal Model (LMM)\n\nThe AI that has eyes and ears, not just a brain in a jar.\n\nA **Large Multimodal Model (LMM)** is an AI system that can process and understand information from multiple \"modalities\" (data types) simultaneously; such as text, images, audio, and video.\n\nStandard Large Language Models (LLMs) like early GPT-3 were text-only; they were like a brilliant philosopher locked in a dark room who could only read books. LMMs (like GPT-4o or Gemini) are like giving that philosopher eyes and ears. They can look at a photo and tell you what's funny about it, or listen to a song and describe the instruments.\n\n## The Shift\n*   **Uni-modal (Traditional AI):** Good at one thing (e.g., an AI that only classifies images of cats).\n*   **Multi-modal (LMM):** Good at understanding the relationship *between* things. It knows that the *sound* of a bark, the *image* of a retriever, and the *word* \"Dog\" are all the same concept.\n\n## FAQs\n\n*1. Is GPT-4 an LMM?*\nYes. Specifically, versions like GPT-4o (omni) are native LMMs trained on text, audio, and images from the start, rather than just stitching separate models together.\n\n*2. Why is it harder to build?*\nBecause aligning different senses is difficult. The AI has to learn that the cluster of pixels shaped like a circle and the concept of \"Ball\" are equivalent.\n\n### Further Reading\n\n*   **Concept:** *[What is Multimodal AI?](https://zapier.com/blog/multimodal-ai/)* (Zapier Guide).\n*   **Survey:** *[A Survey on Multimodal Large Language Models](https://arxiv.org/abs/2306.13549)* (Technical Deep Dive).\n*   **DeepMind:** *[Gemini: A Family of Highly Capable Multimodal Models](https://deepmind.google/technologies/gemini/)* (Example of a native LMM).\n"
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
                                "links": [
                                    "gpu",
                                    "open-source",
                                    "open-weights"
                                ],
                                "group": "ai",
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
                                "links": [],
                                "group": "ai",
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
                "group": "cybersecurity",
                "children": [
                    {
                        "id": "attacks",
                        "title": "Attacks",
                        "icon": "fas fa-bug",
                        "desc": "Common exploits and malware",
                        "view": "list",
                        "group": "cybersecurity",
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
                                "links": [
                                    "virus"
                                ],
                                "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Botnet\n\nImagine an army of computers, secretly controlled by one person to attack a specific target.\n\nA **Botnet** (short for \"Robot Network\") is a collection of internet-connected devices, like laptops, smartphones, or even smart fridges, that have been infected with malicious software.\n\nThis software runs quietly in the background without the owner knowing. It connects the device to a central \"Command & Control\" server, allowing a hacker to control thousands of these devices at once to perform massive attacks.\n\n## FAQs\n\n*1. Why do hackers use Botnets?*\nHackers rarely use botnets just for fun. They are usually financially motivated:\n* **DDoS Attacks:** They threaten to crash a company's website unless the company pays a ransom.\n* **Spam:** They use the army to send millions of spam emails (so their own computer doesn't get blocked).\n* **Crypto Mining:** They use the tiny bit of electricity from thousands of computers to mine Bitcoin or Monero for themselves.\n\n*2. Am I part of a Botnet?*\nYou might be if:\n* Your computer fans are running loud when you aren't doing anything heavy.\n* Your internet is weirdly slow.\n* Friends tell you they received strange emails from you.\n\n### Further Reading\n\n* **Article:** *\"[The Morris Worm: The Internet's First Botnet](https://www.fbi.gov/news/stories/morris-worm-30-years-since-first-major-attack-on-internet-110218)\"* (Search for history of botnets)\n* **Deep Dive:** [Cloudflare's guide on *\"What is a DDoS Attack?\"](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)*\n* **Check your status:** [Have I Been Pwned?](https://haveibeenpwned.com/) (Website to check if your email has been compromised)\n"
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
                                "links": [],
                                "group": "cybersecurity",
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
                                "links": [
                                    "cryptomining-software"
                                ],
                                "group": "cybersecurity",
                                "content": "# Cyptojacking\n\nA digital parasite that secretly steals your computer's electricity and brainpower to make money for a hacker.\n\nIt is the unauthorized use of someone else\u2019s computer to \"mine\" cryptocurrency. \n\nInstead of stealing your personal data (like passwords or photos), the hacker is stealing your **resources**. They install a hidden program on your device (or hide it in a website you visit) that forces your computer to solve complex math problems. These solutions generate digital money, which goes straight to the hacker's wallet, while you are left with a slow computer and a high electricity bill.\n\n## FAQs\n\n*1. How does it get on my computer?*\n\nThere are two main ways:\n*  **Browser-Based (Drive-by):** You visit a shady website (streaming or gambling sites). A script runs in the background of that web page. As long as the tab is open, your computer mines for them.\n*  **Malware-Based:** You download a file (like a \"free\" game crack or software). The [[cryptomining-software|mining program]] installs itself deeper in your system and runs every time you turn the computer on.\n\n*2. How do I know if I'm infected?*\n\nCryptojacking is designed to be quiet, but look for these signs:\n* **The Fan Test:** Your laptop fans are spinning at max speed even when you are just reading text.\n* **Slowness:** Your computer feels laggy or freezes during simple tasks.\n* **Battery Drain:** Your phone or laptop battery dies much faster than usual.\n* **The Task Manager:** Open your Task Manager (Windows) or Activity Monitor (Mac). If you see \"CPU Usage\" at 90-100% caused by a browser or a weirdly named file, that's a red flag.\n\n### Further Reading\n\n* **History:** *[The rise and fall of Coinhive](https://www.darkreading.com/perimeter/the-rise-of-silence-and-the-fall-of-coinhive)* (The most famous browser mining script).\n* **Protection:** *[How to use \"NoCoin\" or \"MinerBlock\" browser extensions.](https://fossbytes.com/block-cryptocurrency-mining-in-browser/)*\n* **Official Guide:** *[Malwarebytes: What is Cryptojacking?](https://www.malwarebytes.com/cryptojacking)*\n"
                            },
                            {
                                "id": "cyber-attacks",
                                "title": "Cybersecurity Attacks",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Security",
                                    "Malware",
                                    "CyberAttack",
                                    "Awareness"
                                ],
                                "links": [
                                    "adware",
                                    "vishing",
                                    "wipers",
                                    "worms",
                                    "cryptojacking",
                                    "react2shell",
                                    "doxing",
                                    "supply-chain-attack",
                                    "phishing",
                                    "remote-code-execution",
                                    "key-loggers",
                                    "command-injection",
                                    "ddos",
                                    "logic-bomb",
                                    "trojan",
                                    "spywares",
                                    "botnets",
                                    "malware",
                                    "zero-day",
                                    "rootkit",
                                    "virus",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Cybersecurity Attacks\n\nThe arsenal of the digital adversary.\n\nCybersecurity attacks range from simple social engineering tricks to complex, automated malware that can paralyze global infrastructure. This catalogue provides a summary of the various attack vectors, malicious software, and vulnerabilities documented in this knowledge bank.\n\n## The Catalog of Attacks\n\n### 1. [[malware|Malware (Overview)]]\nA broad category of malicious software; including viruses, worms, and ransomware; designed specifically to harm systems, steal data, or gain unauthorized access.\n\n### 2. [[phishing|Phishing]]\nSocial engineering that uses deceptive emails or messages to trick users into revealing passwords, credit card numbers, or other sensitive information.\n\n### 3. [[vishing|Vishing]]\n\"Voice Phishing\": Scammers use phone calls to create a sense of urgency and trick victims into granting remote access or transferring money.\n\n### 4. [[ransomware|Ransomware]]\nDigital kidnapping: Malware that encrypts your files and demands a ransom (usually in Bitcoin) in exchange for the decryption key.\n\n### 5. [[wipers|Wipers]]\nThe \"digital shredder\": Destructive malware used in cyber warfare to permanently erase data from hard drives with no intention of recovery.\n\n### 6. [[worms|Worms]]\nStandalone malware that spreads automatically across networks without needing a host program or any human action.\n\n### 7. [[virus|Computer Virus]]\nA classic infection that attaches itself to a host program or file and replicates by infecting other files when the host is executed.\n\n### 8. [[trojan|Trojan Horse]]\nMalicious software that disguises itself as something useful (like a free game or tool) to trick you into inviting it into your system.\n\n### 9. [[botnets|Botnets]]\nAn army of \"zombie\" computers (infected devices) secretly controlled by a hacker to launch massive attacks like DDoS or crypto mining.\n\n### 10. [[ddos|DDoS (Distributed Denial of Service)]]\nA \"digital traffic jam\": Overwhelming a website or server with a flood of traffic from a botnet to make it crash or become unreachable.\n\n### 11. [[cryptojacking|Cryptojacking]]\nA digital parasite that secretly uses your computer's processing power and electricity to mine cryptocurrency for a hacker.\n\n### 12. [[key-loggers|Keyloggers]]\nSurveillance tools (hardware or software) that secretly record everything you type to steal passwords and personal messages.\n\n### 13. [[spywares|Spyware]]\nBroad category of surveillance malware that quietly tracks your activities and steals information while remaining as invisible as possible.\n\n### 14. [[rootkit|Rootkit]]\nStealthy toolsets that give a hacker deep administrative control over a computer while hiding their presence from the operating system.\n\n### 15. [[logic-bomb|Logic Bomb]]\nMalicious code that sits dormant and \"explodes\" (triggers) only when a specific condition is met, such as a date or a specific event.\n\n### 16. [[supply-chain-attack|Supply Chain Attack]]\nAttacking a large organization by first compromising the smaller, less-secure vendors or suppliers that they trust.\n\n### 17. [[zero-day|Zero-Day]]\nAn attack that exploits a previously unknown software flaw before the developers have had \"zero days\" to create a fix or patch.\n\n### 18. [[remote-code-execution|Remote Code Execution (RCE)]]\nThe \"Holy Grail\" for hackers: A vulnerability that allows them to run their own code on a remote server from anywhere in the world.\n\n### 19. [[command-injection|Command Injection]]\nTricking a system into obeying unauthorized commands by hiding them in legitimate-looking input fields (like a search bar).\n\n### 20. [[react2shell|React2Shell]]\nA critical vulnerability (CVE-2025-55182) that allows hackers to take control of servers running specific versions of React Server Components.\n\n### 21. [[doxing|Doxing]]\nA real-world threat: Publicly revealing someone's private identifying information online to enable harassment or physical threats.\n\n### 22. [[adware|Adware]]\nUnwanted software that bombards you with advertisements, often tracking your browsing habits to sell your data to advertisers.\n"
                            },
                            {
                                "id": "ddos",
                                "title": "DDoS",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cybersecurity",
                                    "Networking",
                                    "Attacks"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# DDoS (Distributed Denial of Service)\n\nThe Digital Traffic Jam.\n\n**A DDoS Attack** is a malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target with a flood of Internet traffic.\n\nThink of a **Shop Door**.\n*   **Normal Traffic:** Customers enter and exit one by one. The shop runs smoothly.\n*   **DoS (Denial of Service):** One big guy stands in the doorway, blocking anyone else from entering.\n*   **DDoS (Distributed):** The bad guy pays 1,000 random people (a Botnet) to crowd the doorway at the exact same time. Real customers physically cannot get in because the crowd is too dense.\nThe shop isn't \"broken\" or \"robbed\"; it just can't serve anyone.\n\n## How it Works\n\n1.  **The Mastermind:** The attacker wants to shut down a site (e.g., a bank or game server).\n2.  **The Army (Botnet):** The attacker secretly infects thousands of computers (IoT devices, laptops) with malware, turning them into \"zombie\" soldiers.\n3.  **The Attack:** On command, all 50,000 zombie computers try to visit the victim's website simultaneously.\n4.  **The Crash:** The website's server gets overloaded (CPU maxes out, bandwidth runs dry) and stops responding to *everyone*, including real users.\n\n## FAQs\n\n*1. Is my computer part of a DDoS?*\nPossibly. If your computer is infected with malware (part of a Botnet), it could be attacking a website right now without you knowing, running silently in the background.\n\n*2. How do you stop it?*\nIt's hard. You can't just \"block the bad guy\" because the traffic is coming from 50,000 different real IP addresses. You usually need a \"Traffic Filter\" (like Cloudflare) that stands in front of your shop and checks IDs, letting vast crowds be filtered out.\n\n### Further Reading\n\n*   **Article:** *[What is a DDoS Attack?](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)* (Cloudflare's definition).\n*   **Video:** *[DDoS Attacks Explained in 2 minutes](https://youtu.be/Rt4rna2LBZE)*.\n"
                            },
                            {
                                "id": "doxing",
                                "title": "Doxing",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cybersecurity",
                                    "Privacy",
                                    "SocialEngineering"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Doxing\n\nThe Weaponized Resume.\n\n**Doxing** (dropping \"docs\" or documents) is the act of publicly revealing previously private personal information about an individual or organization, usually through the internet.\n\nThink of it like **Unmasking a Superhero**.\n*   **Anonymity:** You interact with \"Batman\" (an anonymous username). You judge them by their actions.\n*   **Doxing:** Someone finds out Batman is Bruce Wayne, lives at 1007 Mountain Drive, and works at Wayne Enterprises. They print this on flyers and drop them all over Gotham.\nNow, the mob knows where he lives, where he works, and who his family is. The digital fight becomes a real-life threat.\n\n## How it Works\n\n1.  **Reconnaissance:** Hackers (or just patient stalkers) search for breadcrumbs.\n    *   Old forum posts using the same username.\n    *   Whois records for websites you own.\n    *   Metadata in photos posted to social media.\n2.  **Aggregation:** They piece together the puzzle: \"UsernameX\" -> \"Real Name\" -> \"Home Address\".\n3.  **The Drop:** They publish the dossier on a public forum (Twitter, 4chan, etc.).\n4.  **Harassment:** The mob uses this info to harass the victim IRL (swatting, pizza bombs, employment threats).\n\n## FAQs\n\n*1. Is it illegal?*\nTechnically, often no. If the information was found in \"publicly available\" sources (like phone books or public social profiles), compiling it isn't always a crime. However, used for harassment or stalking, it *becomes* illegal.\n\n*2. How can I protect myself?*\nPractice \"Data Hygiene.\" Use different usernames for different sites. Don't post photos of your house or workplace. Scrub your data from \"People Search\" sites.\n\n### Further Reading\n\n*   **Article:** *[What is Doxing?](https://www.kaspersky.com/resource-center/definitions/what-is-doxing)* (Kaspersky).\n*   **Video:** *[The Dangers of Doxing](https://youtu.be/lNW5-d0GVNM)*.\n"
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
                                "links": [
                                    "operating-system",
                                    "antivirus",
                                    "phishing"
                                ],
                                "group": "cybersecurity",
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
                                "links": [
                                    "malware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Logic Bomb\n\nThe time bomb.\n\nA **Logic Bomb** is a piece of malicious code intentionally inserted into a software system that will \"explode\" (execute a harmful function) only when specific conditions are met.\n\nUnlike other [[malware]], it lies dormant (sleeping) until the trigger happens.\n\n## Triggers\n\n*   **Time:** Explode on Friday the 13th.\n*   **Event:** Explode if the database reaches 1000 users.\n*   **Absence (Dead Man's Switch):** Explode if the creator is fired (e.g., if the admin doesn't log in for 7 days, wipe the servers).\n\n## FAQs\n\n*1. Who uses them?*\nMostly **Insiders** (disgruntled employees). Since you need access to the code to plant the bomb, it's rarely used by random external hackers.\n\n### Further Reading\n\n*   **Article:** *[What is a Logic Bomb? (Norton)](https://us.norton.com/blog/malware/logic-bomb)*\n*   **Story:** *[The Siemens Spreadsheet Logic Bomb](https://www.bleepingcomputer.com/news/security/contractor-gets-2-years-for-planting-logic-bombs-in-siemens-spreadsheets/)*\n"
                            },
                            {
                                "id": "loic",
                                "title": "LOIC (Low Orbit Ion Cannon)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "AttackTool",
                                    "DDoS",
                                    "Hacktivism",
                                    "ScriptKiddie"
                                ],
                                "links": [
                                    "firewalls",
                                    "script-kiddies",
                                    "ddos"
                                ],
                                "group": "cybersecurity",
                                "content": "# LOIC (Low Orbit Ion Cannon)\n\nThe digital battering ram.\n\n**LOIC (Low Orbit Ion Cannon)** is an open-source network stress testing and [[ddos|DDoS (Distributed Denial of Service)]] attack tool. It is famous for its extreme simplicity: it features a big \"Fire\" button that floods a target website with so much junk traffic that the site crashes and becomes unavailable to everyone else.\n\nIt is the weapon of choice for [[script-kiddies|Script Kiddies]] and amateur hacktivist groups (like Anonymous) because it requires almost zero technical knowledge to use.\n\n## How it Works\n\nLOIC doesn't use any fancy exploits or \"magic\" code. It uses brute force:\n\n*   **TCP/UDP Flooding:** It sends thousands of requests per second to a target IP address.\n*   **The \"Hive Mind\":** A single person running LOIC is annoying but rarely crashes a major site. However, LOIC has a \"IRC\" mode where a central leader can control thousands of \"volunteer\" computers at once. When thousands of people press \"Fire\" at the same moment, it creates a massive digital tidal wave that can knock almost any server offline.\n\n## The Risks of Using It\n\nLOIC is notoriously \"noisy\" and dangerous for the attacker:\n\n1.  **No Anonymity:** Unlike advanced tools, LOIC does nothing to hide your IP address. It's like throwing a brick through a window while holding up your ID card. It is very easy for ISPs and law enforcement to trace the attack back to the user's home.\n2.  **Illegal Activity:** Engaging in a DDoS attack, even for \"protest\" reasons, is a felony in most countries (like the Computer Fraud and Abuse Act in the US).\n\n## FAQs\n\n*1. Is there a \"High Orbit\" version?*\nYes, there is a successor called **HOIC (High Orbit Ion Cannon)**. It is much more powerful and designed to bypass some basic DDoS protections that caught the original LOIC.\n\n*2. Can simple firewalls stop it?*\nStandard [[firewalls|firewalls]] struggle with LOIC because the traffic looks like \"normal\" (but extremely fast) requests. Most modern websites use specialized services like Cloudflare to filter out this flood before it hits their servers.\n\n### Further Reading\n\n*   **History:** *[The Story of Anonymous and LOIC](https://web.archive.org/web/20101211115852/https://www.theguardian.com/technology/2010/dec/08/anonymous-low-orbit-ion-cannon)* - How a tool was used for global digital protest.\n*   **Technical:** *[How DDoS Protection Works](https://www.cloudflare.com/learning/ddos/ddos-mitigation/)* - How modern sites survive LOIC attacks.\n"
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
                                "links": [],
                                "group": "cybersecurity",
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
                                "links": [
                                    "malware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Ransomware\n\nDigital kidnapping of your files.\n\n**Ransomware** is a specific type of [[malware]] that locks (encrypts) your computer or files so you cannot access them. The attacker then demands a \"ransom\" (usually in Bitcoin) to give you the key to unlock them.\n\nImagine coming home, but your key doesn't work, and there is a note on the door saying: *\"Pay $1000 to get your new key, or we burn the house down.\"*\n\n## How it Works\n\n1.  **Infection:** You download a bad file or click a bad link.\n2.  **Encryption:** The malware quietly scrambles your photos, documents, and databases.\n3.  **The Note:** A pop-up screen appears with a countdown timer and payment instructions.\n4.  **Extortion:** If you don't pay, you lose the data forever. Sometimes, they also threaten to *leak* your private data to the public (Double Extortion).\n\n## FAQs\n\n*1. Should I pay the ransom?*\n**No.** (According to the FBI and experts).\n*   There is no guarantee they will actually unlock your files.\n*   It funds their operations and encourages them to attack others.\n*   You serve as a \"paying customer\" target for future attacks.\n\n*2. How do I protect myself?*\nThe only 100% cure is **Backups**.\nIf you have a backup of your files on an external hard drive that wasn't plugged in during the attack, you can just wipe your computer and restore your files. You lose nothing but time.\n\n### Further Reading\n\n*   **Story:** *[The Colonial Pipeline Attack](https://www.technologyreview.com/2021/05/24/1025195/colonial-pipeline-ransomware-hack-explained/)* (How a password shut down a gas pipeline).\n*   **Resource:** *[No More Ransom Project](https://www.nomoreransom.org/)* (Free tools to help unlock files without paying).\n"
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
                                "links": [
                                    "cve"
                                ],
                                "group": "cybersecurity",
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
                                "links": [
                                    "cryptojacking",
                                    "botnet",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Remote Code Execution (RCE)\n\n**Remote Code Execution (RCE)** is a type of vulnerability that allows an attacker to execute arbitrary code on a victim's machine without having to physically access it through the network.\n\nThis is often used to run malicious code on the remote system, this can lead to bad actor(s)\n- getting inside your system\n- getting access to sensitive data\n- getting access to your system's resources for malicious activities like [[botnet|Botnet-Attacks]], [[cryptojacking|Cryptojacking]]\n- can lock your system in demand to extort money from you or your organization ([[ransomware|Ransomware]]).\n  \n### These can be of few different types:\n- Injection attacks: Applications and sites that take in user input, deliberately providing arbitrary code that would be executed by the Application or the site, example: SQL Injection, Command Injection and XSS etc.\n"
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
                                "links": [
                                    "os-kernel",
                                    "operating-system",
                                    "antivirus",
                                    "hard-drive",
                                    "virus"
                                ],
                                "group": "cybersecurity",
                                "content": "# Rootkit\n\nThe invisible mask.\n\nA **Rootkit** is a collection of software tools that enable an unauthorized user to gain control of a computer system without being detected.\n\nThe name comes from \"Root\" (the admin user) + \"Kit\" (toolset). Its primary capability is **Stealth**. It hides itself, other malware, and malicious processes from the operating system and [[antivirus]].\n\n## How it hides\n\nIf you open Task Manager to look for the [[virus]], the Rootkit intercepts your request.\n*   You: \"Show me all running programs.\"\n*   Rootkit: \"Okay, here is the list (minus the malicious one).\"\n\nIt lies to the [[os-kernel|OS-kernel]] itself.\n\n## FAQs\n\n*1. How do I remove it?*\nIt is extremely difficult. Since the [[operating-system|OS]] can't see it, it can't delete it. Often, the only solution is to wipe the [[hard-drive]] completely and reinstall Windows from scratch.\n\n### Further Reading\n\n*   **Article:** *[Rootkits Explained (CrowdStrike)](https://www.crowdstrike.com/cybersecurity-101/malware/rootkits/)*\n*   **Tool:** *[Chkrootkit (Linux Detector)](http://www.chkrootkit.org/)*\n"
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
                                "links": [
                                    "adware",
                                    "virus",
                                    "key-loggers",
                                    "trojan"
                                ],
                                "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
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
                                "links": [
                                    "botnets",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Computer Virus\n\nThe biological flu for computers.\n\nA **Virus** is a specific type of malware that requires a **Host Program** to survive. It attaches its malicious code to a clean file (like `game.exe`). When you run the game, the virus runs first, infects other files on your computer, and then runs the game.\n\n## Virus vs. Malware\n\nPeople use \"Virus\" to mean everything bad.\n*   *Correct:* All Viruses are Malware.\n*   *Incorrect:* All Malware are Viruses. (Worms and Trojans are not viruses because they don't attach to hosts).\n\n## FAQs\n\n*1. Do viruses still exist?*\nThey are actually rare today. Modern hackers prefer [[ransomware]] (for money) or [[botnets]] (for power). \"Old school\" file-infecting viruses are less profitable.\n\n### Further Reading\n\n*   **History:** *[The Brain Virus (First PC Virus)](https://en.wikipedia.org/wiki/Brain_(computer_virus))*\n*   **Article:** *[Virus vs Worm vs Trojan (Avast)](https://www.avast.com/c-virus-vs-worm-vs-trojan)*\n"
                            },
                            {
                                "id": "vishing",
                                "title": "Vishing",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "SocialEngineering",
                                    "Fraud"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Vishing\n\nThe scammer who talks you into unlocking the door.\n\n**Vishing** (Voice Phishing) is a social engineering attack where fraudsters use phone calls; often with fake caller IDs; to trick you into revealing sensitive information or transferring money.\n\nThink of it like a con artist wearing a fake uniform. In email phishing, they send a fake letter. In vishing, they actually call you, pretending to be someone you trust (like your bank or Amazon support) to create a false sense of urgency or authority. Because you hear a human voice, it can feel more \"real\" and harder to ignore than an email.\n\n## How it Works\n\n*   **Spoofing:** Scammers use software to make their phone number look like it's coming from a legitimate organization (e.g., \"Chase Bank\" or a local area code).\n*   **The Script:** They follow a prepared script designed to trigger emotion; fear (\"Your account is compromised!\") or excitement (\"You won a cruise!\").\n*   **The Ask:** The goal is always the same: get you to verify your identity (give up your SSN), fix a \"virus\" (grant remote access), or stop a \"fraudulent charge\" (send them money).\n\n## FAQs\n\n*1. How can I tell if a call is fake?*\nLegitimate organizations will **never** call you and ask for your password, PIN, or 2FA code. If they pressure you to act *immediately*, it\u2019s a scam. Hang up and call the official number on the back of your card.\n\n*2. Why did the caller ID say \"IRS\"?*\nCaller ID is easily faked (spoofed). Do not trust the name or number on your screen.\n\n### Further Reading\n\n*   **Article:** *[What is Vishing?](https://www.kaspersky.com/resource-center/definitions/vishing)* (In-depth explanation of voice phishing).\n"
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
                                "links": [
                                    "shamoon",
                                    "hard-drive",
                                    "notpetya",
                                    "cyber-warfare",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
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
                                "links": [
                                    "wanna-cry",
                                    "trojan",
                                    "eternalblue",
                                    "virus",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Zero-Day (Vulnerability & Exploit)\n\n### Formal Definition\nA \"Zero-Day\" refers to a security flaw in software that is unknown to the vendor or developer. The term implies that the developers have had **zero days** to fix or patch the issue because they were unaware of its existence before it was discovered or exploited by hackers.\n\n### The Analogy\n**The Invisible Backdoor**\nImagine a construction company builds a thousand identical houses with high-security steel doors. However, they accidentally leave a small, invisible gap under the back door that no one notices, not even the builders.\n* **Zero-Day Vulnerability:** The invisible gap.\n* **Zero-Day Exploit:** A burglar discovering they can slide a wire under that gap to unlock the door.\n* **The Risk:** Since the builders don't know the gap exists, they haven't invented a door sweep to block it. Until they do, every house is defenseless against burglars who know the trick.\n\n### Visual Aid\n<img src=\"https://upload.wikimedia.org/wikipedia/commons/5/58/Vulnerability_timeline.png\" alt=\"Zero-Day Timeline\" style=\"height: 400px; width: 750px;\" />\n\n## Further Reading\n\n* **Trend Micro:** [What is a Zero-Day Attack?](https://www.trendmicro.com/vinfo/us/security/definition/zero-day-vulnerability)\n* **Symantec (Broadcom):** [Zero-day Vulnerabilities Explained](https://us.norton.com/internet-security-emerging-threats-how-do-zero-day-vulnerabilities-work-30-seconds.html)\n* **MITRE CVE:** [Common Vulnerabilities and Exposures](https://cve.mitre.org/) (The database where vulnerabilities are eventually listed)\n"
                            }
                        ]
                    },
                    {
                        "id": "cryptography",
                        "title": "Cryptography",
                        "icon": "fas fa-key",
                        "desc": "Encryption, algorithms, and mathematical foundations",
                        "view": "list",
                        "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# AES-256\n\nThe unbreakable glass box.\n\n**AES-256** (Advanced Encryption Standard, 256-bit) is the gold standard for scrambling data so that no one can read it without the key.\n\nImagine you put a document in a glass box. AES-256 shuffles the atoms of the document 14 times in a row using a password. To reverse it, you need the exact password. If you try to guess it, you would need more energy than all the stars in the universe emitting for billions of years.\n\n## By The Numbers\n\n*   **AES:** The algorithm (the math).\n*   **256:** The Key Size. It means the password is 256 ones and zeros long.\n    *   **AES-128:** Unbreakable.\n    *   **AES-256:** *Paranoid* unbreakable (used for \"Top Secret\" government files).\n\n## FAQs\n\n*1. Can hackers break it?*\nNo. They don't break the *box* (AES); they steal the *key* (Password). If hackers get your password, AES can't help you.\n*   **Brute Force:** Trying every password? Impossible.\n*   **Rubber Hose Cryptanalysis:** Beating the password out of you? Highly effective.\n\n*2. Is it slow?*\nIt used to be. But modern CPUs have a special \"AES-NI\" instruction set, meaning your computer can encrypt terabytes of data instantly without slowing down.\n\n### Further Reading\n\n*   **Video:** *[AES Explained (Computerphile)](https://www.youtube.com/watch?v=O4xNJs315Os)* (Great visual explanation).\n*   **Comic:** *[XKCD: Security](https://xkcd.com/538/)* (Explaining why math isn't the weak link).\n"
                            },
                            {
                                "id": "asymmetric-encryption",
                                "title": "Asymmetric Encryption (Public Key Cryptography)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cryptography",
                                    "Security",
                                    "Web",
                                    "TLS"
                                ],
                                "links": [
                                    "ecc",
                                    "symmetric-encryption",
                                    "rsa"
                                ],
                                "group": "cybersecurity",
                                "content": "# Asymmetric Encryption\n\nThe mailbox of the digital world.\n\n**Asymmetric Encryption** (also called Public Key Cryptography) uses a pair of mathematically related keys: a **Public Key** and a **Private Key**. \n\nThink of it like a **Mailbox**.\n*   **Public Key (The Slot):** Anyone can walk up to your mailbox and drop a letter in the slot. Everyone knows where the slot is.\n*   **Private Key (The Key):** Only the owner of the mailbox has the physical key to open the back and read the letters.\n*   Even if the person who dropped the letter in the slot changes their mind, they cannot get it back out. Only the holder of the Private Key can access the contents.\n\n## How it Works\n\n1.  **You generate two keys:** One you keep secret (Private), and one you give to everyone (Public).\n2.  **Sender:** Someone wants to send you a secret. They look up your Public Key and use it to scramble their message.\n3.  **Receiver:** You receive the scrambled mess. You use your Private Key to unscramble it.\n4.  **The Magic:** Even though the Public Key *locked* the message, it cannot *unlock* it. Only the Private Key can.\n\n## Why it's Important\nIt solves the **Key Exchange Problem**. You don't have to meet someone in a dark alley to share a secret password. You can post your Public Key on your website, and anyone can safely send you data.\n\n## Famous Examples\n*   **[[rsa|RSA]]:** The oldest and most famous asymmetric algorithm.\n*   **[[ecc|ECC (Elliptic Curve Cryptography)]]:** A newer, more efficient method used for SSL/TLS (HTTPS) on almost every website.\n\n## FAQs\n\n*1. Is it slower than Symmetric?*\nYes, much slower. The math is much more complex. This is why it is rarely used to encrypt large files. Instead, it is used to encrypt a small \"Session Key\" which is then used for [[symmetric-encryption|Symmetric Encryption]].\n\n*2. What is a Digital Signature?*\nIt's Asymmetric encryption in reverse. You \"lock\" a message with your *Private* key. If someone can unlock it with your *Public* key, they know for 100% certainty that it came from you and hasn't been changed.\n\n### Further Reading\n\n*   **Video:** *[Public Key Cryptography: RSA Encryption](https://www.youtube.com/watch?v=vgTtMqs66_A)*\n*   **Article:** *[How SSL/TLS works](https://www.cloudflare.com/learning/ssl/what-is-ssl/)*\n"
                            },
                            {
                                "id": "ecc",
                                "title": "ECC (Elliptic Curve Cryptography)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cryptography",
                                    "AsymmetricEncryption",
                                    "Efficiency"
                                ],
                                "links": [
                                    "shors-algorithm",
                                    "post-quantum-cryptography",
                                    "asymmetric-encryption",
                                    "rsa"
                                ],
                                "group": "cybersecurity",
                                "content": "# ECC (Elliptic Curve Cryptography)\n\nSmaller keys, bigger security.\n\n**ECC** is a modern form of [[asymmetric-encryption|Asymmetric Encryption]] that is faster and more efficient than older methods like [[rsa|RSA]]. It is the primary way your smartphone and web browser stay secure today.\n\n## How it Works: Bouncing a ball on a curve\nInstead of using massive prime numbers (like RSA), ECC uses the complex math of geographic curves.\n\nImagine a specific \"Elliptic Curve\" on a graph.\n1.  **The Trapdoor:** You pick a starting point on the curve and \"bounce\" a digital ball around the curve a specific number of times (this number is your **Private Key**).\n2.  **The Result:** The final landing spot of the ball is your **Public Key**.\n3.  **The Problem:** For an observer, it is impossible to look at the final landing spot and figure out exactly how many \"bounces\" it took to get there. They would have to guess every possibility, which takes trillions of years.\n\n## The Advantage: Size Matters\nThe biggest benefit of ECC is that it provides the same level of security as RSA but with **much smaller keys**.\n\n| Security Level | RSA Key Size | ECC Key Size |\n| :--- | :--- | :--- |\n| Standard | 3072 bits | 256 bits |\n| Maximum | 15360 bits | 512 bits |\n\nBecause the keys are smaller, they require less battery life, less storage, and less internet bandwidth. This is why ECC is the standard for mobile devices and the \"Padlock\" icon in your browser (HTTPS).\n\n## FAQs\n\n*1. Is ECC secure against Quantum Computers?*\nNo. Just like [[rsa|RSA]], ECC can be broken by **[[shors-algorithm|Shor's Algorithm]]**. While ECC is more efficient for today, the future will require **[[post-quantum-cryptography|Post-Quantum Cryptography]]**.\n\n*2. Where else is ECC used?*\n**Bitcoin** and other cryptocurrencies use ECC (specifically a curve called `secp256k1`) to generate wallet addresses and sign transactions.\n\n### Further Reading\n\n*   **Video:** *[Elliptic Curve Cryptography (Computerphile)](https://www.youtube.com/watch?v=NF1pwjL9-DE)*\n*   **Article:** *[A Relatively Easy-to-Understand Guide to ECC](https://blog.cloudflare.com/ecc-quic-tls/)*\n"
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
                                "links": [
                                    "aes-256"
                                ],
                                "group": "cybersecurity",
                                "content": "# Encryption\n\nPutting your secret message in a locked safe.\n\n**Encryption** is the process of scrambling readable key text (\"plaintext\") into unreadable nonsense (\"ciphertext\") using a mathematical formula. Only someone with the correct **Key** can unscramble (decrypt) it back to normal.\n\n## Types\n\n1.  **Symmetric (The House Key):** The *same* key locks and unlocks the data. Fast, but you have to safely share the key.\n2.  **Asymmetric (The Mailbox):** Two keys. A **Public Key** (anyone can use it to lock a message/put mail in) and a **Private Key** (only you have it to unlock/take mail out). This is how the Internet (HTTPS) works.\n\n## FAQs\n\n*1. Can hackers break it?*\nModern encryption (like [[aes-256|AES-256]]) is practically unbreakable by brute force. Hackers don't break the math; they steal the **Key** (or guess your password) to bypass the lock.\n\n*2. What is End-to-End Encryption?*\nIt means the company (e.g., WhatsApp) cannot read your messages. The message is locked on your phone and only unlocked on your friend's phone.\n\n### Further Reading\n\n*   **Video:** *[Encryption as Fast As Possible](https://www.youtube.com/watch?v=r4i7-q2k2B4)*\n*   **Article:** *[What is Encryption? (Cloudflare)](https://www.cloudflare.com/learning/ssl/what-is-encryption/)*\n"
                            },
                            {
                                "id": "post-quantum-cryptography",
                                "title": "Post-Quantum Cryptography (PQC)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cryptography",
                                    "QuantumComputing",
                                    "FutureProofing"
                                ],
                                "links": [
                                    "shors-algorithm",
                                    "asymmetric-encryption",
                                    "ecc",
                                    "rsa"
                                ],
                                "group": "cybersecurity",
                                "content": "# Post-Quantum Cryptography\n\nFixing the locks before the master key is built.\n\n**Post-Quantum Cryptography (PQC)** refers to the development of new mathematical encryption methods that are secure against both classical computers and the future threat of **[[shors-algorithm|Quantum Computers]]**.\n\nCurrently, almost all internet security (RSA and ECC) can be broken by a large-scale quantum computer. PQC is the \"patch\" for the entire internet's plumbing.\n\n## The Quantum Threat\nQuantum computers use \"Qubits\" to perform calculations that are impossible for normal computers. **[[shors-algorithm|Shor's Algorithm]]** is a specific quantum recipe that can break the math behind our current [[asymmetric-encryption|Asymmetric Encryption]].\n\nIf a powerful quantum computer is built tomorrow, every bank account, government secret, and private message sent over the last 30 years could be unlocked.\n\n## PQC Strategies (The New Math)\nSince quantum computers are great at factoring numbers ([[rsa|RSA]]) and solving \"discrete logs\" ([[ecc|ECC]]), we need math problems that *don't* involve those. \n\n1.  **Lattice-based Cryptography:** Hiding data inside a massive, multi-dimensional grid of points. This is currently the most promising candidate.\n2.  **Hash-based Signatures:** Using one-way mathematical \"hashes\" (like fingerprints) to verify identity.\n3.  **Code-based Cryptography:** Based on error-correcting codes.\n\n## The Race: NIST Standardization\nThe US National Institute of Standards and Technology (NIST) has been running a global competition since 2016 to pick the winners of the \"Quantum-Safe\" era.\n*   **Current Winners:** Algorithms like **CRYSTALS-Kyber** (for encryption) and **CRYSTALS-Dilithium** (for signatures) are being rolled out globally (e.g., in Google Chrome and Cloudflare).\n\n## FAQs\n\n*1. Is this the same as \"Quantum Cryptography\"?*\nNo. \n*   **Quantum Cryptography (QKD):** Uses actual quantum physics (lasers and photons) to send secrets. Requires expensive hardware.\n*   **Post-Quantum Cryptography:** Uses normal math that runs on your current phone/laptop, but is *designed* to be too hard for quantum computers to solve.\n\n*2. Why do we need it now if quantum computers aren't ready?*\nBecause of **\"Store Now, Decrypt Later\"**. Attackers are currently stealing and storing encrypted government and corporate data today, hoping to use a quantum computer to unlock it 10 years from now. We need safe encryption *today* to protect the future.\n\n### Further Reading\n\n*   **Website:** *[NIST Post-Quantum Cryptography Project](https://csrc.nist.gov/projects/post-quantum-cryptography)*\n*   **Video:** *[The Quantum Apocalypse (Post-Quantum Cryptography)](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)*\n"
                            },
                            {
                                "id": "rsa",
                                "title": "RSA (Rivest-Shamir-Adleman)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cryptography",
                                    "AsymmetricEncryption",
                                    "Math"
                                ],
                                "links": [
                                    "shors-algorithm",
                                    "asymmetric-encryption",
                                    "post-quantum-cryptography"
                                ],
                                "group": "cybersecurity",
                                "content": "# RSA\n\nThe math of very large prime numbers.\n\n**RSA** is the world's first and most famous [[asymmetric-encryption|Asymmetric Encryption]] algorithm. Created in 1977, it remains the foundation for much of the internet's security, including digital signatures and email encryption.\n\n## How it Works: The Prime number trapdoor\nThe security of RSA relies on one simple mathematical fact: **it is very easy to multiply two large prime numbers together, but extremely hard for a computer to do the reverse (factoring).**\n\nImagine you have two massive prime numbers, `P` and `Q`.\n*   **The Easy Direction:** Multiply `P * Q` to get `N`. (A calculator does this in a millisecond).\n*   **The Hard Direction (The Trapdoor):** Give a computer the number `N` and ask it to find `P` and `Q`. If `N` is huge (e.g., 2048 bits long), even a supercomputer would take billions of years to guess the answer.\n\n## The Keys\n*   **Public Key:** Shared with the world. It contains the number `N`. Anyone can use this to encrypt a message for you.\n*   **Private Key:** Kept secret by you. It contains the original prime numbers `P` and `Q`. Because only you know the \"ingredients,\" only you can undo the math to read the message.\n\n## FAQs\n\n*1. Is it secure?*\nYes, but only if the keys are long enough. Today, 1024-bit RSA is considered weak. The industry standard is **2048-bit** or **4096-bit**.\n\n*2. What is the \"Quantum Threat\" to RSA?*\nRSA is the primary target of **[[shors-algorithm|Shor's Algorithm]]**. A large-scale quantum computer could factor the prime numbers in hours, rendering all RSA encryption useless. This is why the world is moving toward **[[post-quantum-cryptography|Post-Quantum Cryptography]]**.\n\n### Further Reading\n\n*   **Video:** *[RSA Encryption (Computerphile)](https://www.youtube.com/watch?v=M7kEpw1tn50)*\n*   **Article:** *[How RSA works](https://en.wikipedia.org/wiki/RSA_(cryptosystem))*\n"
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
                                "links": [
                                    "quantum-computing"
                                ],
                                "group": "cybersecurity",
                                "content": "# Shor's Algorithm\n\nThe doomsday clock for internet privacy.\n\n**Shor's Algorithm** is a quantum math formula that can break the encryption protecting the entire internet.\n\nCurrently, our security (RSA Encryption) relies on the fact that computers are really bad at factoring massive numbers. It would take a supercomputer millions of years to guess the factors.\n**Peter Shor** proved that a **[[quantum-computing|Quantum Computer]]** running his algorithm could do it in *hours*.\n\n## The Hook\n\nImagine a lock that requires you to guess a number between 1 and Infinity.\n*   **Classic Computer:** Guesses 1, then 2, then 3... (Takes forever).\n*   **Shor's Algorithm:** Guesses *all numbers at once* and finds the pattern that leads to the answer.\n\n## FAQs\n\n*1. Why hasn't the internet crashed yet?*\nBecause we don't have a Quantum Computer big enough to run it. Yet.\nWe are currently in the \"NISQ\" era (Noisy Intermediate-Scale Quantum). We need thousands of perfect Qubits to break RSA. We currently have hundreds of noisy ones.\n\n*2. What are we doing about it?*\nThe world is racing to switch to **Post-Quantum Cryptography (PQC)**. These are new math problems (like Lattice-based cryptography) that even quantum computers can't solve easily. NIST is currently standardizing them.\n\n### Further Reading\n\n*   **Video:** *[How Quantum Computers Break Encryption (Veritasium)](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)*.\n*   **Standard:** *[NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)*.\n"
                            },
                            {
                                "id": "symmetric-encryption",
                                "title": "Symmetric Encryption",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cryptography",
                                    "Security",
                                    "AES"
                                ],
                                "links": [
                                    "aes-256",
                                    "asymmetric-encryption"
                                ],
                                "group": "cybersecurity",
                                "content": "# Symmetric Encryption\n\nOne key to rule them all.\n\n**Symmetric Encryption** is a method of encryption where the *same* secret key is used both to encrypt (lock) the data and decrypt (unlock) it. It is the oldest and simplest form of cryptography.\n\nThink of it like a **House Key**.\n*   You use the key to lock the front door when you leave.\n*   You use the same key to unlock the front door when you return.\n*   If you want a friend to get in, you have to give them a copy of that exact same key.\n\n## The Pros and Cons\n\n| Feature | Description |\n| :--- | :--- |\n| **Speed** | Extremely fast. Modern computers can encrypt gigabytes of data in seconds. |\n| **Efficiency** | Requires very little computing power. |\n| **The Key Problem** | If you need to send a secret to someone far away, you must first find a way to get the key to them without a spy stealing it. |\n\n## Famous Examples\n*   **[[aes-256|AES (Advanced Encryption Standard)]]**: The world standard for securing data at rest (hard drives, databases).\n*   **Caesar Cipher**: The ancient (and very weak) method of shifting letters by a certain number.\n\n## FAQs\n\n*1. When should I use it?*\nUse it for \"Storage.\" If you are encrypting your own hard drive or phone, you are the only one who needs the key, so there is no \"sharing\" problem.\n\n*2. How is the key sharing problem solved?*\nOn the internet, we usually use **[[asymmetric-encryption|Asymmetric Encryption]]** just to safely send a symmetric key to the other person. Once both sides have the key, they switch to Symmetric encryption for the rest of the conversation because it is faster.\n\n### Further Reading\n\n*   **Video:** *[Symmetric vs Asymmetric Encryption](https://www.youtube.com/watch?v=ERp842ooXls)*\n*   **Concept:** *[Diffie-Hellman Key Exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)* (The math trick used to share keys).\n"
                            }
                        ]
                    },
                    {
                        "id": "cyber-events",
                        "title": "Events",
                        "icon": "fas fa-user-secret",
                        "desc": "Significant cyber incidents and historical attacks",
                        "view": "list",
                        "group": "cybersecurity",
                        "children": [
                            {
                                "id": "cyber-warfare",
                                "title": "WannaCry",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Ransomware",
                                    "Worm"
                                ],
                                "links": [
                                    "eternalblue",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# WannaCry\n\nThe epidemic that held the world hostage.\n\n**WannaCry** (2017) was a global **[[ransomware|Ransomware]]** attack that infected over 200,000 computers in 150 countries within a single weekend.\n\nIt was the first time a criminal ransomware used a military-grade weapon (the **[[eternalblue|EternalBlue]]** exploit) to spread automatically. It didn't wait for you to click an email; if your computer was connected to the internet and unpatched, it just *happened*.\n\n## The Damage\n\n*   **NHS (UK Hospitals):** The biggest tragedy. It shut down X-ray machines, ambulances were diverted, and surgeries were cancelled. Lives were put at risk.\n*   **Telef\u00f3nica (Spain):** The telecom giant was paralyzed.\n*   **FedEx & Renault:** Factories stopped production.\n\n## FAQs\n\n*1. How was it stopped?*\nBy accident. A 22-year-old security researcher named **Marcus Hutchins** found a \\\"Kill Switch\\\" in the code.\nThe virus checked if a specific (gibberish) website existed before attacking. If the website existed, the virus stopped. Marcus bought the domain for $10, and the entire global attack instantly shut down.\n\n*2. Did people pay?*\nSurprisingly, not much. The hackers made only about $140,000 total. The chaos cost the world nearly **$4 billion** in damages, but the criminals failed to cash in efficiently.\n\n### Further Reading\n\n*   **Story:** *[The Confessions of Marcus Hutchins](https://www.wired.com/story/confessions-marcus-hutchins-hacker-who-saved-the-internet/)*.\n*   **Documentary:** *[WannaCry: The Marcus Hutchins Story](https://www.youtube.com/watch?v=Getj6f9y8Gk)*.\n"
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
                                "links": [],
                                "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# GlassWorm\n\nAn \"invisible\" computer virus that hides inside the code developers write, spreading automatically by stealing their work passwords.\n\nIt is a highly advanced piece of malware discovered on October 17, 2025 that targets software developers.\n\nIt specifically infects **Visual Studio Code (VS Code) extensions**, the little add-ons programmers use to make coding easier. What makes it terrifying is that the malicious code is written using **invisible characters**. A programmer can look directly at the infected file, and it will look like an empty line or normal whitespace, but the computer reads it as dangerous instructions.\n\nOnce inside a developer's computer, it steals their credentials (passwords for publishing code) to automatically infect *other* projects, spreading like a worm through the software supply chain.\n\n## FAQs\n\n*1. Why can't we just delete the hacker's server?*\nGlassWorm is unique because it uses **Blockchain Command & Control (C2)**.\nUsually, malware connects to a specific website (e.g., `hacker-site.com`). If the police seize that website, the malware dies.\nGlassWorm instead looks at public transactions on the **Solana Cryptocurrency Blockchain**. The hacker sends a transaction with a \"memo\" containing instructions. Since no one can delete a transaction from a blockchain, the \"server\" can never be taken down.\n\n*2. What is the \"ZOMBI\" Module?*\nOnce fully installed, GlassWorm deploys a payload often called the **ZOMBI module**. This turns the developer's high-powered computer into a proxy. Hackers can then route their own internet traffic through the developer's computer to attack *other* targets, making it look like the innocent developer did it.\n\n### Further Reading\n\n* **The Original Discovery:** Search for *[\"Koi Security GlassWorm Report October 2025\"](https://www.koi.ai/blog/glassworm-returns-new-wave-openvsx-malware-expose-attacker-infrastructure)*.\n* **The Technique:** Read about *\"[Trojan Source Attacks](https://trojansource.codes/)\"* (CVE-2021-42574) to understand how invisible characters work in code.\n* **The Defense:** Look up *\"[VS Code Restricted Mode](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace#_extension-recommendations)\"* and how to audit your extensions.\n"
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
                                "links": [
                                    "wipers",
                                    "supply-chain-attack",
                                    "eternalblue",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# NotPetya\n\nA disguised assassin pretending to be a kidnapper.\n\n**NotPetya** (2017) was a devastating cyberattack that looked like [[ransomware|Ransomware]] but was actually a **[[wipers|Wiper]]**.\n\nRansomware locks your files and asks for money to unlock them. NotPetya locked the files, asked for money, but **deleted the key**. Even if you paid, you could never get your data back. Its goal wasn't money; it was pure destruction.\n\n## The Target\n\nIt was a targeted attack against **Ukraine** by Russian military hackers (Sandworm).\n*   They hacked a popular Ukrainian accounting software (**M.E.Doc**) that every business used to pay taxes.\n*   They pushed a malicious \\\"Update\\\" to everyone.\n*   Boom. Banks, airports, and power companies in Ukraine went dark.\n*   *Collateral Damage:* It spread globally (via [[eternalblue|EternalBlue]]), costing companies like Maersk and FedEx over **$10 billion**.\n\n## FAQs\n\n*1. Why call it \\\"NotPetya\\\"?*\nWhen it first appeared, it looked exactly like an older criminal ransomware called \\\"Petya.\\\" Security researchers said, \\\"Oh, it's Petya again.\\\"\nThen they realized the code was different and purely destructive. So they named it \\\"Not-Petya.\\\"\n\n*2. What did we learn?*\nIt showed the danger of **[[supply-chain-attack|Supply Chain Attacks]]**. You can have the best firewall in the world, but if the software you *trust* (like your accounting app) sends you a virus, you let it right in.\n\n### Further Reading\n\n*   **Deep Dive:** *[The Untold Story of NotPetya](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/)* (Wired Article - A Must Read).\n*   **Analysis:** *[Difference between Petya and NotPetya](https://www.kaspersky.com/resource-center/definitions/petya-notpetya)*.\n"
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Shamoon\n\nThe burning of the oil fields, digital edition.\n\n**Shamoon** (2012) is an aggressive cyber-weapon used by Iranian state hackers to attack the **Saudi Aramco** oil company (the richest company in the world).\n\nIt didn't just spy. It was a \\\"suicide bomber\\\" for computers. It spread through the network, wiped the hard drives, and then replaced all the data with a picture of a **burning American flag**.\n\n## The Impact\n\nIn a matter of hours, it turned **35,000 computers** into useless bricks.\n*   Saudi Aramco had to disconnect from the internet entirely.\n*   The price of hard drives globally spiked because Aramco bought every spare drive in the world to replace their fleet.\n*   Company trucks couldn't even fill up gas because the digital pumps were offline. They had to use paper and pencil for weeks.\n\n## FAQs\n\n*1. How did it get in?*\nSomeone clicked a phishing link (likely malicious email attachment) or used an infected USB stick. The oldest trick in the book.\n\n*2. Why is it significant?*\nIt was the first major instance of cyber warfare targeting the **Energy Sector** destructively. It showed the world that a piece of code could threaten the global oil supply.\n\n### Further Reading\n\n*   **Article:** *[The Code that Crashed the World](https://www.nytimes.com/2012/10/24/business/global/cyberattack-on-saudi-aramco-struck-30000-computers.html)*.\n*   **Analysis:** *[Symantec Report on Shamoon](https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=0973a985-1d4b-48f8-8b83-2079f2766398)*.\n"
                            },
                            {
                                "id": "stuxnet",
                                "title": "Stuxnet",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "CyberEvent",
                                    "Malware",
                                    "ICS",
                                    "Air-Gap"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Stuxnet\n\nThe digital spark that caused a physical fire.\n\n**Stuxnet** is a extremely sophisticated malicious computer worm, first uncovered in 2010, that was specifically designed to sabotage Iran's nuclear program. It is widely considered the world's first \"cyber-physical weapon\"; a piece of code designed not just to steal data, but to reach out and physically destroy machinery.\n\nUnlike most malware that steals credit cards or locks files for ransom, Stuxnet was a precision-guided missile made of 1s and 0s.\n\n## How it Works\n\nStuxnet was designed with a very specific \"kill chain\" to target the Natanz uranium enrichment facility:\n\n1.  **Jumping the Air-Gap:** The facility was not connected to the internet (an \"air-gap\"). Stuxnet spread via infected USB sticks. When a worker plugged a stick into a target computer inside the facility, the worm jumped the gap.\n2.  **The Hunt:** Once inside, it didn't do anything to normal PCs. It looked for a specific type of **PLC (Programmable Logic Controller)** made by Siemens that controlled the speed of uranium-enrichment centrifuges.\n3.  **The Sabotage:** It took control of the centrifuges and forced them to spin at wildly fluctuating speeds; first dangerously fast, then dangerously slow. This physical stress caused the centrifuges to vibrate until they literally shattered.\n4.  **The Camouflage:** While destroying the machines, Stuxnet \"replayed\" normal sensor data to the control room monitors. The operators saw everything as \"perfectly normal\" while their machines were actually tearing themselves apart.\n\n## FAQs\n\n*1. Who made it?*\nWhile no one has officially claimed credit, the complexity of the code (utilizing four \"Zero-Day\" exploits) suggests a nation-state. Analysts generally point to a joint operation between the **US and Israel** (Operation Olympic Games).\n\n*2. Why is it a \"turning point\" in history?*\nBefore Stuxnet, cyber-attacks were mostly about virtual damage (deleted files, downtime). Stuxnet proved that a hacker in one country could physically destroy a factory in another without ever firing a bullet or crossing a border.\n\n### Further Reading\n\n*   **Documentary:** *[Zero Days (2016)](https://www.imdb.com/title/tt5446124/)* - A comprehensive look at the discovery and impact of Stuxnet.\n*   **Book:** *[Countdown to Zero Day](https://www.kimzetter.com/countdown-to-zero-day)* by Kim Zetter - The definitive investigative account of the worm.\n*   **Technical:** *[Symantec's W32.Stuxnet Dossier](https://www.broadcom.com/support/security-center/publications/archive/whitepapers-reports/stuxnet-dossier)* (The original deep dive into the code).\n"
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
                                "links": [
                                    "eternalblue",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# WannaCry\n\nThe epidemic that held the world hostage.\n\n**WannaCry** (2017) was a global **[[ransomware|Ransomware]]** attack that infected over 200,000 computers in 150 countries within a single weekend.\n\nIt was the first time a criminal ransomware used a military-grade weapon (the **[[eternalblue|EternalBlue]]** exploit) to spread automatically. It didn't wait for you to click an email; if your computer was connected to the internet and unpatched, it just *happened*.\n\n## The Damage\n\n*   **NHS (UK Hospitals):** The biggest tragedy. It shut down X-ray machines, ambulances were diverted, and surgeries were cancelled. Lives were put at risk.\n*   **Telef\u00f3nica (Spain):** The telecom giant was paralyzed.\n*   **FedEx & Renault:** Factories stopped production.\n\n## FAQs\n\n*1. How was it stopped?*\nBy accident. A 22-year-old security researcher named **Marcus Hutchins** found a \\\"Kill Switch\\\" in the code.\nThe virus checked if a specific (gibberish) website existed before attacking. If the website existed, the virus stopped. Marcus bought the domain for $10, and the entire global attack instantly shut down.\n\n*2. Did people pay?*\nSurprisingly, not much. The hackers made only about $140,000 total. The chaos cost the world nearly **$4 billion** in damages, but the criminals failed to cash in efficiently.\n\n### Further Reading\n\n*   **Story:** *[The Confessions of Marcus Hutchins](https://www.wired.com/story/confessions-marcus-hutchins-hacker-who-saved-the-internet/)*.\n*   **Documentary:** *[WannaCry: The Marcus Hutchins Story](https://www.youtube.com/watch?v=Getj6f9y8Gk)*.\n"
                            }
                        ]
                    },
                    {
                        "id": "cybersecurity-frameworks",
                        "title": "Frameworks",
                        "icon": "fas fa-clipboard-list",
                        "desc": "Security standards, governance, and team structures",
                        "view": "list",
                        "group": "cybersecurity",
                        "children": [
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
                                "links": [
                                    "firewalls",
                                    "soc"
                                ],
                                "group": "cybersecurity",
                                "content": "# Blue Team\n\nThe castle guards.\n\nThe **Blue Team** is the internal security staff responsible for defending the organization. They are the ones watching the monitors, installing the [[firewalls|Firewalls]], patching the software, and responding when an alarm goes off.\n\n## Responsibilities\n\n*   **monitoring:** Watching logs for suspicious activity ([[soc|SOC]]).\n*   **Incident Response:** Kicking the hackers out when a breach happens.\n*   **Hardening:** Making the servers tougher to crack.\n\n## The endless job\n\nThe Red Team only needs to find *one* open window to win. The Blue Team must close *every* window to win.\n\n### Further Reading\n\n*   **Guide:** *[Blue Team Handbook](https://www.amazon.com/Blue-Team-Handbook-condensed-Operations/dp/1500734756)*\n"
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
                                "links": [
                                    "blue-team",
                                    "red-team"
                                ],
                                "group": "cybersecurity",
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
                                "links": [
                                    "blue-team",
                                    "phishing",
                                    "pen-testing"
                                ],
                                "group": "cybersecurity",
                                "content": "# Red Team\n\nPlaying the enemy.\n\nThe **Red Team** is a group of security professionals who act as adversaries to an organization's security squad.\n\nUnlike a [[pen-testing|Pen-Test]] (which finds *technical* bugs), a Red Team Operation tests the **People and Processes**. They simulate a full-scale real-world attack: sending [[phishing]] emails, trying to break into the physical building, and moving quietly through the network to steal data without being caught.\n\n## Goal\n\nTo train the [[blue-team|Blue-Team]] (Defenders) by giving them a realistic sparring partner. \"Train hard, fight easy.\"\n\n## FAQs\n\n*1. Are they bad guys?*\nNo. They are employees or contractors hired to attack.\n\n### Further Reading\n\n*   **Article:** *[Red Team vs Blue Team vs Purple Team](https://www.csoonline.com/article/563806/red-team-vs-blue-team-vs-purple-team-the-roles-in-cybersecurity.html)*\n"
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
                                "links": [
                                    "incident-response"
                                ],
                                "group": "cybersecurity",
                                "content": "# SOC (Security Operations Center)\n\nMission Control for cyber defense.\n\nA **SOC** (pronounced \"Sock\") is the physical room (or team) responsible for monitoring an organization's security 24/7/365.\n\nImagine a room full of screens like NASA, but instead of watching rockets, they are watching network traffic. Their job is to analyze alerts, hunt for hackers, and respond to incidents before damage occurs.\n\n## The Three Components\n\n1.  **People:** Analysts (Tier 1 triage alerts, Tier 2 investigate deep, Tier 3 hunt threats).\n2.  **Processes:** Runbooks (Instructions on what to do when an alarm rings).\n3.  **Technology:** Tools like **SIEM** (Security Information and Event Management) that collect logs from every computer and put them nicely on dashboard screens.\n\n## FAQs\n\n*1. Is it a boring job?*\nIt can be. Tier 1 analysts suffer from **\"Alert Fatigue\"**; sifting through 10,000 false alarms a day to find the 1 real attack. It is the entry-level rite of passage in Cyber Security.\n\n*2. SOC vs NOC?*\n*   **SOC (Security):** Fixes hacks. \"Are the bad guys in?\" (Related to [[incident-response|Incident Response]])\n*   **NOC (Network):** Fixes outages. \"Is the WiFi working?\"\n\n### Further Reading\n\n*   **Career:** *[What is a SOC Analyst?](https://www.cybrary.it/career-path/soc-analyst/)*\n*   **Tool:** *[Splunk](https://www.splunk.com/)* (The most popular tool used in SOCs).\n"
                            }
                        ]
                    },
                    {
                        "id": "foundations",
                        "title": "Foundations",
                        "icon": "fas fa-book",
                        "desc": "Core concepts, professional domains, and security strategy",
                        "view": "list",
                        "group": "cybersecurity",
                        "children": [
                            {
                                "id": "cissp-domains",
                                "title": "CISSP Security Domains",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Strategy",
                                    "Governance",
                                    "CISSP"
                                ],
                                "links": [
                                    "zero-trust",
                                    "siem",
                                    "defense-in-depth",
                                    "privacy-protection",
                                    "playbooks",
                                    "pen-testing"
                                ],
                                "group": "cybersecurity",
                                "content": "# CISSP Security Domains\n\nThe high-level architecture of professional cybersecurity.\n\nThe (ISC)\u00b2 **CISSP** (Certified Information Systems Security Professional) certification is built on eight \"domains\" that cover every aspect of an organization's security posture.\n\n## The Eight Domains\n\n### 1. Security and Risk Management\nFocused on defining security goals, identifying risks, and ensuring compliance with laws and ethics.\n*   **Risk Mitigation**: Developing procedures to reduce the impact of a breach.\n*   **Business Continuity**: Establishing disaster recovery plans so an organization survives a catastrophe.\n\n### 2. Asset Security\nManaging the lifecycle of digital and physical assets, including storage, retention, and secure destruction. It emphasizes protecting **[[privacy-protection|PII and SPII]]**.\n\n### 3. Security Architecture and Engineering\nOptimizing security by designing effective tools and systems. It follows principles like **Shared Responsibility**, **[[defense-in-depth|Defense in Depth]]**, and **[[zero-trust|Zero Trust]]**.\n\n### 4. Communication and Network Security\nSecuring the physical and wireless networks, whether they are on-site, remote, or in the cloud.\n\n### 5. Identity and Access Management (IAM)\nControlling who has access to what. It relies on the four pillars: **Identification**, **Authentication**, **Authorization**, and **Accountability**.\n\n### 6. Security Assessment and Testing\nIdentifying vulnerabilities before attackers do. This involves **[[pen-testing|Penetration Testing]]** and regular security audits.\n\n### 7. Security Operations\nThe \"front lines\" of defense. It focuses on incident investigation, log management (using **[[siem|SIEM tools]]**), and following **[[playbooks|Playbooks]]** to mitigate active attacks.\n\n### 8. Software Development Security\nEmbedding security into every phase of the software development lifecycle (SDLC), from design to release.\n\n---\n\n## Key Concepts\n*   **Security Posture**: An organization's overall ability to manage its defense and react to changes in the threat landscape.\n*   **Information Security (InfoSec)**: The broader set of processes designed to secure data across all these domains.\n"
                            },
                            {
                                "id": "incident-response",
                                "title": "Incident Response",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "DefensiveSecurity",
                                    "SOC"
                                ],
                                "links": [
                                    "soc",
                                    "malware",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Incident Response (IR)\n\nThe structured process an organization follows to identify, manage, and mitigate the impact of a cybersecurity breach or cyberattack.\n\nThe goal of incident response is to handle the situation in a way that limits damage and reduces recovery time and costs.\n\n## The IR Lifecycle (NIST Framework)\n\n1.  **Preparation**: Establishing a team (CSIRT), tools, and processes before an incident occurs.\n2.  **Detection & Analysis**: Identifying suspicious activity and determining if it\u2019s a real threat.\n3.  **Containment, Eradication, & Recovery**:\n    *   **Containment**: Stopping the threat from spreading (e.g., isolating a server).\n    *   **Eradication**: Removing the root cause of the incident (e.g., deleting [[malware]]).\n    *   **Recovery**: Restoring systems to normal operation.\n4.  **Post-Incident Activity**: \"Lessons Learned\" to improve future response.\n\n## Key Concepts\n- **CSIRT**: Computer Security Incident Response Team.\n- **Playbook**: A step-by-step guide for responding to specific types of attacks (e.g., [[ransomware]] playbook).\n- **[[soc|SOC]]**: The Security Operations Center often houses the IR function.\n\n### Further Reading\n- [NIST Computer Security Incident Handling Guide (SP 800-61)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)\n- [SANS Incident Handler's Handbook](https://www.sans.org/white-papers/33901/)\n"
                            },
                            {
                                "id": "malware",
                                "title": "Malware",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [],
                                "links": [
                                    "adware",
                                    "trojan",
                                    "spywares",
                                    "wipers",
                                    "key-loggers",
                                    "worms",
                                    "botnets",
                                    "rootkit",
                                    "cryptojacking",
                                    "logic-bomb",
                                    "virus",
                                    "ransomware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Malware\n\nIt is a piece of malicious software, that intends to harm your system and also in cases steal or encrypt data from you.\n\n![malware-image.png](../../../assets/images/malware-image.png)\n\nThere are several different types of malwares:\n- [[ransomware|Ransomware]]\n- [[worms|Worms]]\n- [[virus|Virus]]\n- [[logic-bomb|Logic-bombs]]\n- [[wipers|Wipers]]\n- [[key-loggers|Key-loggers]]\n- [[trojan|Trojan]]\n- [[spywares|Spywares]]\n- [[adware|Adware]]\n- [[botnets|Botnets]]\n- [[rootkit|Rootkit]]\n- [[cryptojacking|Cryptojacking]]\n\n### Further resources\n- Watch: [Every Computer Virus Explained in 9 Minutes](https://www.youtube.com/watch?v=cFo5D9mFUJQ)\n\n"
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Penetration Testing (Pen Test)\n\nThe fire drill.\n\n**Penetration Testing** is a simulated cyberattack against your computer system to check for exploitable vulnerabilities. It is an authorized, planned attempt to breach security measures.\n\nIt answers the question: \"Are our defenses actually working?\"\n\n## Phases of a Pen Test\n\n1.  **Reconnaissance:** Gathering info on the target.\n2.  **Scanning:** Looking for open ports/weaknesses.\n3.  **Exploitation:** Trying to break in.\n4.  **Reporting:** Writing a PDF telling the company how you broke in and how to fix it.\n\n## FAQs\n\n*1. Pen Test vs. Vulnerability Scan?*\n*   **Vuln Scan:** Automated. A robot checks for known issues (Unlocked doors). Cheap and fast.\n*   **Pen Test:** Manual. A human thinks creatively to chain small issues into a big breach (Climbing through the unlocked window). Expensive and thorough.\n\n### Further Reading\n\n*   **Guide:** *[Penetration Testing Execution Standard (PTES)](http://www.pentest-standard.org/index.php/Main_Page)*\n"
                            },
                            {
                                "id": "risk-management",
                                "title": "Risk Management Strategies",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Strategy",
                                    "Governance",
                                    "Risk"
                                ],
                                "links": [
                                    "apt",
                                    "insider-threats"
                                ],
                                "group": "cybersecurity",
                                "content": "# Risk Management Strategies\n\nHow organizations decide which battles to fight.\n\n**Risk Management** is the process of identifying, assessing, and controlling threats to an organization's capital and earnings. In cybersecurity, we focus on protecting assets (digital and physical) from threats and vulnerabilities.\n\n## The Four Core Strategies\nWhen faced with a risk, organizations typically choose one of these four paths:\n\n1.  **Acceptance**: Acknowledging the risk exists but choosing not to take any action because the cost of fixing it is higher than the possible damage.\n2.  **Avoidance**: Completely eliminating the risk by stopping the activity that causes it (e.g., shutting down a vulnerable server).\n3.  **Transference**: Shifting the risk to a third party (e.g., buying **Cyber Insurance**).\n4.  **Mitigation**: Taking active steps to reduce the likelihood or impact of the risk (e.g., installing a firewall).\n\n## Assets, Threats, and Vulnerabilities\nTo manage risk, you must understand the relationship between these three:\n\n*   **Assets**: Anything of value (SSNs, bank accounts, servers).\n*   **Threats**: Potential events that can negatively impact an asset (e.g., an [[apt|APT]] or an [[insider-threats|Insider Threat]]).\n*   **Vulnerabilities**: Weaknesses that can be exploited (e.g., a missing security patch).\n\n**Risk = Likelihood of a Threat * Impact on an Asset.**\n\n## Common Vulnerabilities\nHigh-profile examples of weaknesses that require active management:\n*   **Log4Shell**: A critical flaw in a common logging tool.\n*   **ZeroLogon**: A flaw that allowed attackers to take over a Windows domain controller.\n\n---\n\n## Frameworks\nCybersecurity professionals use standardized frameworks to guide their risk management:\n*   **NIST RMF**: The Risk Management Framework created by the U.S. government.\n*   **HITRUST**: A framework specifically designed for the healthcare industry.\n"
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Root Access\n\nGod mode for your computer.\n\nIn every operating system, there is a hierarchy of users. Normal users have limits (they can't delete system files or install big programs). **Root** (also called \"Administrator\" or \"Superuser\") is the user with **Zero Limits**.\n\nIf you have Root Access, you can do anything: read any file, delete the entire operating system, or change the rules of how the computer works.\n\n## Why is it called Root?\nThink of the file system like a tree.\n*   **Branches/Leaves:** Normal users live here. They can only affect their own little branch.\n*   **The Root:** The base of the tree. If you control the root, you control the entire tree.\n\n## The Danger\n\nRunning your computer as Root all the time is like driving a car without a seatbelt and with the doors removed.\nIf you (or a virus) make a mistake while you are Root, nothing stops you.\n*   **As a Normal User:** Malware might delete your photos.\n*   **As Root:** Malware can wipe the hard drive, install a permanent spy, and lock you out forever.\n\n## FAQs\n\n*1. How do I get Root access safely?*\nOn Linux/Mac, you use the command `sudo` (\"SuperUser DO\").\n*   `rm file` -> \"Permission Denied.\"\n*   `sudo rm file` -> \"Okay, boss. Deleted.\"\nIt asks for your password to confirm \"Are you sure you want to use your God powers for this?\"\n\n*2. Is Root different from Admin?*\nConceptually, no.\n*   **Root:** The name used in Linux/Unix/MacOS.\n*   **Administrator:** The name used in Windows.\n*   **Jailbreak/Rooting:** Gaining these rights on phones (iPhones/Androids) that normally block you from having them.\n\n### Further Reading\n\n*   **Article:** *[What is Sudo?](https://www.linux.com/training-tutorials/linux-101-introduction-sudo/)*\n*   **Definition:** *[Ubuntu's Root Sudo](https://help.ubuntu.com/community/RootSudo)*\n"
                            }
                        ]
                    },
                    {
                        "id": "governance",
                        "title": "Governance & Compliance",
                        "icon": "fas fa-balance-scale",
                        "desc": "Laws, regulations, frameworks, and ethical standards",
                        "view": "list",
                        "group": "cybersecurity",
                        "children": [
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
                                "links": [
                                    "cvss"
                                ],
                                "group": "cybersecurity",
                                "content": "# Bug Bounty\n\nCrowdsourced security testing.\n\nA **Bug Bounty Program** is a deal where a company (like Google or Facebook) says: *\"If you can hack us and tell us how you did it, we will pay you cash.\"*\n\nIt turns hackers into allies. Instead of selling a security flaw on the black market (for evil), the hacker sells it to the company (for good).\n\n## Principles\n\n*   **Responsible Disclosure:** The hacker agrees NOT to tell the public about the bug until the company fixes it.\n*   **Scope:** The company defines what is \"In Bounds\" (e.g., website.com) and \"Out of Bounds\" (e.g., employees' personal laptops).\n\n## FAQs\n\n*1. How much do they pay?*\nIt depends on the severity ([[cvss|CVSS Score]]).\n*   **Low (Typo):** Swag (T-shirt) or $100.\n*   **Critical (Remote Code Execution):** $10,000 - $1,000,000+.\n*   *Apple pays up to $1 Million for hacking an iPhone.*\n\n*2. Can anyone do it?*\nYes. Platforms like **HackerOne** and **Bugcrowd** allow anyone to sign up and start hunting on public programs legally.\n\n### Further Reading\n\n*   **Platform:** *[HackerOne](https://www.hackerone.com/)* (The biggest marketplace).\n*   **List:** *[Google's Bug Hunting Program Rules](https://bughunters.google.com/about/rules)*.\n"
                            },
                            {
                                "id": "cisa",
                                "title": "CISA",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Government",
                                    "Infrastructure"
                                ],
                                "links": [
                                    "zero-day",
                                    "cve"
                                ],
                                "group": "cybersecurity",
                                "content": "# Cybersecurity and Infrastructure Security Agency (CISA)\n\nThe United States federal agency responsible for protecting the nation's critical infrastructure from physical and cyber threats.\n\nThink of CISA as the \"nation's risk advisor,\" working with both government and private industry to defend against hackers, particularly state-sponsored actors.\n\n## Key Responsibilities\n\n- **Critical Infrastructure Protection**: Securing power grids, water systems, and financial networks.\n- **Vulnerability Management**: Issuing alerts about actively exploited flaws (via the **Known Exploited Vulnerabilities (KEV) Catalog**).\n- **Incident Coordination**: Leading the national response to major cyber incidents.\n- **Directives**: Issuing Binding Operational Directives (BODs) that order federal agencies to patch critical security holes (e.g., [[zero-day]] exploits).\n\n## Important Standards & Catalogues\n- **[[cve|CVE]] Monitoring**: Tracking common vulnerabilities and exposures.\n- **KEV Catalog**: A list of vulnerabilities that have been confirmed as being used in real-world attacks.\n\n### Further Reading\n- [Official CISA Website](https://www.cisa.gov/)\n- [CISA KEV Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)\n"
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
                                "links": [],
                                "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# CVSS\n\nA credit score for security bugs.\n\nWhen a new security hole (vulnerability) is found, security teams need to know: \"Should we panic now, or can we fix this next week?\" **CVSS** provides a number from **0.0 to 10.0** to answer that question.\n\n## The Scorecard\n\n| Score Range | Severity | Meaning |\n| :--- | :--- | :--- |\n| **0.0** | None | No risk. |\n| **0.1 - 3.9** | Low | Hard to exploit, or very little impact. |\n| **4.0 - 6.9** | Medium | Needs fixing, but requires specific conditions to work. |\n| **7.0 - 8.9** | High | Dangerous. Hackers can likely use this to harm the system. |\n| **9.0 - 10.0** | Critical | **Drop everything.** The door is wide open for attackers. |\n\n## FAQs\n\n*1. How is the score calculated?*\nIt looks at three main things (The \"CIA Triad\" impact + Exploitability):\n*   **Exploitability:** How easy is it? (Can a kid do it, or do you need a supercomputer?)\n*   **Impact:** What gets hurt? Confidentiality (secrets stolen), Integrity (data changed), or Availability (system crashes).\n*   **Privileges:** Do you need a login to do it, or can a stranger do it from the internet?\n\n*2. Is a 10.0 always worse than a 7.0?*\nTechnically, yes. But context matters. A \"Critical 10.0\" bug on a server that isn't connected to the internet might be less urgent than a \"High 8.0\" bug on your public website.\n\n### Further Reading\n\n*   **Tool:** *[CVSS Calculator](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator)* (Try creating your own score).\n*   **Reference:** *[First.org CVSS Specification](https://www.first.org/cvss/)*\n"
                            },
                            {
                                "id": "gdpr",
                                "title": "GDPR (General Data Protection Regulation)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Governance",
                                    "Compliance",
                                    "Privacy",
                                    "EU"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# GDPR\n\nThe global standard for privacy.\n\nThe **GDPR** is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area. Since it took effect in 2018, it has become the \"Gold Standard\" for privacy laws worldwide.\n\n## Key Tenets\n1.  **Scope**: It protects the personal data of all EU residents. Even if a company is based in the U.S. or Asia, if they have an EU customer, they must follow GDPR.\n2.  **Consent**: Companies must get clear, affirmative consent before collecting data. They can't hide it in 50 pages of legal text.\n3.  **Right to Access/Erasure**: Users have the right to ask a company \"What data do you have on me?\" and the right to be \"forgotten\" (asking the company to delete their data).\n4.  **Breach Notification**: If a company is hacked, they MUST notify the authorities within **72 hours** of becoming aware of the breach.\n\n## Consequences\n*   **Heavy Fines**: Non-compliance can lead to massive fines; up to 4% of a company's total global turnover or \u20ac20 million (whichever is higher).\n\n---\n\n### What is \"Personal Data\"?\nUnder GDPR, this includes anything that can identify a specific person:\n*   Names and addresses.\n*   Email addresses.\n*   IP addresses.\n*   Biometric data (fingerprints, facial recognition).\n"
                            },
                            {
                                "id": "hipaa",
                                "title": "HIPAA (Health Insurance Portability and Accountability Act)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Governance",
                                    "Compliance",
                                    "Healthcare",
                                    "US"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# HIPAA\n\nProtecting the most sensitive data: your health.\n\n**HIPAA** is a U.S. federal law that created national standards to protect sensitive patient health information from being disclosed without the patient's consent or knowledge.\n\n## The Three Main Rules\nTo be HIPAA compliant, organizations must follow three specific sets of rules:\n\n1.  **The Privacy Rule**: Sets standards for when **Protected Health Information (PHI)** can be used or shared.\n2.  **The Security Rule**: Sets standards for the technical safeguards (like encryption and firewalls) that must be in place to protect *digital* PHI.\n3.  **The Breach Notification Rule**: Requires organizations to notify patients and the government if their health data is breached.\n\n## Protected Health Information (PHI)\nThis includes any information that identifies an individual and relates to:\n*   The individual\u2019s past, present, or future physical or mental health.\n*   The provision of healthcare to the individual.\n*   The past, present, or future payment for the provision of healthcare.\n\n---\n\n### HITRUST\nBecause HIPAA is a law (high-level) and not a technical checklist, many organizations use the **HITRUST (Health Information Trust Alliance)** framework to help them prove they are actually meeting HIPAA requirements.\n"
                            },
                            {
                                "id": "pci-dss",
                                "title": "PCI DSS (Payment Card Industry Data Security Standard)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Governance",
                                    "Compliance",
                                    "Finance"
                                ],
                                "links": [
                                    "hipaa",
                                    "gdpr"
                                ],
                                "group": "cybersecurity",
                                "content": "# PCI DSS\n\nSecuring the swipe.\n\n**PCI DSS** is a set of security standards designed to ensure that ALL companies that accept, process, store, or transmit credit card information maintain a secure environment.\n\n## Why it Exists\nThe goal is simple: **Reduce payment card fraud.** Unlike [[gdpr|GDPR]] or [[hipaa|HIPAA]], PCI DSS is NOT a government law. It is a private standard created by major credit card companies (Visa, Mastercard, Amex, etc.). However, if you want to accept credit cards, you *must* follow it.\n\n## Key Requirements\n1.  **Build and Maintain a Secure Network**: Using firewalls and not using vendor-supplied default passwords.\n2.  **Protect Cardholder Data**: Encrypting card data when it is stored and when it is sent across networks.\n3.  **Maintain a Vulnerability Management Program**: Using and regularly updating antivirus software.\n4.  **Implement Strong Access Control Measures**: Restricting access to cardholder data on a \"need to know\" basis.\n5.  **Regularly Monitor and Test Networks**: Tracking and monitoring all access to network resources and cardholder data.\n\n## Scope\nPCI DSS applies to both the physical hardware (card readers) and the software (POS systems, websites) involved in a transaction.\n"
                            },
                            {
                                "id": "security-ethics",
                                "title": "Security Ethics and Privacy",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Ethics",
                                    "Privacy",
                                    "Law"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Security Ethics and Privacy\n\nThe moral compass of digital defense.\n\n**Security Ethics** are guidelines for making appropriate decisions as a security professional. Being ethical requires remaining unbiased and maintaining the confidentiality of the private data you are trusted to protect.\n\n## Core Ethical Obligations\nAs a security professional, you hold an ethical obligation to:\n1.  **Protect the Organization**: Secure the infrastructure and the people involved.\n2.  **Remain Unbiased**: Conduct work honestly and rely on evidence, not assumptions.\n3.  **Respect the Law**: Conduct work with the highest respect for legal boundaries.\n4.  **Continuous Learning**: Stay informed about evolving threats to better protect the digital landscape.\n\n## Privacy Protection (PII and SPII)\nSafeguarding personal information is a primary ethical duty.\n*   **PII (Personally Identifiable Information)**: Any data that can identify an individual (e.g., name, phone number).\n*   **SPII (Sensitive PII)**: A specific type of PII that falls under stricter handling guidelines because it can cause significant harm if stolen (e.g., Social Security Numbers, credit card numbers).\n\n## International Rules for Counterattacks\nDigital warfare has rules. According to the **International Court of Justice (ICJ)**, a person or group can only counterattack if:\n1.  **Targeting**: The counterattack only affects the party that attacked first.\n2.  **Communication**: It is part of a direct communication asking the attacker to stop.\n3.  **Proportionality**: It does not escalate the situation.\n4.  **Reversibility**: The effects of the counterattack can be reversed.\n\n---\n\n### Key Reminder\nEthics and laws are the foundation that prevents a security professional from becoming a threat actor. Transparency, honesty, and a commitment to the \"betterment of the cyber landscape\" are essential traits.\n"
                            }
                        ]
                    },
                    {
                        "id": "security-tools",
                        "title": "Security Tools",
                        "icon": "fas fa-tools",
                        "desc": "Technical tools and defense software",
                        "view": "list",
                        "group": "cybersecurity",
                        "children": [
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
                                "links": [
                                    "zero-day",
                                    "malware"
                                ],
                                "group": "cybersecurity",
                                "content": "# Antivirus\n\nThe immune system of your computer.\n\n**Antivirus** (AV) is software that runs in the background, scanning files and programs to detect, block, and remove malicious software ([[malware|Malware]]).\n\nIt works like a bouncer at a club checking IDs against a \"Banned List.\" If a file looks like a known troublemaker, it doesn't get in.\n\n## How it Detects Threats\n\n1.  **Signature Based (The Mugshot):** It compares every file on your PC to a massive database of verified virus \"signatures\" (hashes). If it matches, it's deleted. *Weakness: Can't catch brand new viruses.*\n2.  **Heuristic / Behavioral (The Profiler):** It watches what a program *does*. If a Notepad file suddenly tries to delete your System32 folder, the AV shouts \"Hey! That's suspicious!\" and kills it. *Strength: Catches unknown ([[zero-day|Zero-Day]]) threats.*\n\n## FAQs\n\n*1. Is Windows Defender enough?*\nNowadays? **Yes.**\nTen years ago, it was garbage. Today, Microsoft Defender is one of the top-rated AVs in the world because it sees data from billions of Windows PCs instantly.\n\n*2. Do I need separate AV for Mac?*\nIt is recommended. Macs *can* get viruses, though they are less targeted than Windows.\n\n### Further Reading\n\n*   **Comparison:** *[AV-TEST Rankings](https://www.av-test.org/en/)* (Independent lab that tests all AVs).\n*   **Article:** *[How Antivirus Software Works](https://us.norton.com/internet-security-malware-how-does-antivirus-software-work.html)*.\n"
                            },
                            {
                                "id": "beyondtrust",
                                "title": "BeyondTrust",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "IdentityManagement",
                                    "PrivilegedAccess"
                                ],
                                "links": [
                                    "remote-code-execution"
                                ],
                                "group": "cybersecurity",
                                "content": "# BeyondTrust\n\nA cybersecurity company specializing in **Privileged Access Management (PAM)** and secure remote access solutions.\n\nBeyondTrust tools are designed to prevent hackers from moving sideways through a network by tightly controlling who has \"admin\" rights and what they can do with them.\n\n## Core Solutions\n\n- **Privileged Access Management (PAM)**: Managing and auditing administrative credentials to prevent credential theft.\n- **Remote Support**: Allowing IT teams to securely access and fix devices across the internet (this tool is sometimes targeted for [[remote-code-execution|RCE]] attacks).\n- **Privilege Management for Desktops**: Removing local admin rights from users while still allowing them to run approved applications.\n\n## Why it Matters\nMany modern attacks involve stealing a low-level worker's password and then \"escalating privileges\" to become a domain admin. BeyondTrust helps stop this chain of events.\n\n### Further Reading\n- [BeyondTrust Official Documentation](https://www.beyondtrust.com/docs/)\n- [Understanding PAM](https://www.beyondtrust.com/resources/glossary/privileged-access-management-pam)\n"
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Firewall\n\nThe club bouncer.\n\nA **Firewall** is a network security device (software or hardware) that monitors incoming and outgoing network traffic. It decides whether to allow or block specific traffic based on a defined set of security rules.\n\n*   \"Traffic from Google.com? Come in.\"\n*   \"Traffic from sketchy-hacker-site.ru? Blocked.\"\n\n## Types\n\n*   **Packet Filtering:** Checks the address label on the envelope (IP address/Port).\n*   **Next-Gen Firewall (NGFW):** Opens the envelope and reads the letter (Deep Packet Inspection) to stop malware hiding inside legitimate traffic.\n\n## FAQs\n\n*1. Do I need one?*\nYes. Your computer (Windows/Mac) has a software firewall built-in. Your WiFi Router acts as a hardware firewall. They are your first line of defense against the internet.\n\n### Further Reading\n\n*   **Article:** *[What is a Firewall? (Cisco)](https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html)*\n"
                            },
                            {
                                "id": "metasploit",
                                "title": "Metasploit",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "SecurityTool",
                                    "Pentesting",
                                    "Exploit",
                                    "Framework"
                                ],
                                "links": [
                                    "zero-day",
                                    "key-loggers",
                                    "script-kiddies"
                                ],
                                "group": "cybersecurity",
                                "content": "# Metasploit\n\nThe Swiss Army Knife of the hacker's toolkit.\n\n**Metasploit** is the world's most widely used penetration testing framework. It is a powerful, modular system that allows security professionals (and threat actors) to find, exploit, and validate vulnerabilities in computer systems.\n\nThink of it as a massive library of pre-made digital keys. Instead of writing a custom program for every lock, you just pick the right \"key\" (exploit) from the Metasploit database and tell it which door to open.\n\n## Key Concepts\n\n*   **Exploit:** The actual code that takes advantage of a vulnerability to get inside a system.\n*   **Payload:** What happens *after* the exploit works. This could be opening a remote command shell, installing a [[key-loggers|keylogger]], or stealing passwords.\n*   **Module:** Metasploit is modular. You can mix and match different exploits with different payloads depending on your goal.\n*   **Meterpreter:** A highly advanced payload that stays in the target's memory (making it hard to detect) and gives the attacker total control over the machine.\n\n## Dual-Use Nature\n\nMetasploit is a perfect example of a \"dual-use\" tool:\n\n1.  **For the Good Guys:** Ethical hackers use it to test their own company's defenses. If Metasploit can get in, they know they need to patch the hole before a criminal does.\n2.  **For the Bad Guys:** [[script-kiddies|Script Kiddies]] and professional criminals use it to launch fast, automated attacks against unpatched systems. It lowers the \"barrier to entry\" for hacking significantly.\n\n## FAQs\n\n*1. Is Metasploit illegal?*\nNo. It is a legitimate tool used by security professionals globally. However, using it to access a system you don't have explicit, written permission to test is a serious crime.\n\n*2. How do I stop Metasploit attacks?*\nMost Metasploit modules target *known* vulnerabilities. If you keep your software updated and systems patched (especially after a [[zero-day|Zero-Day]] is found), most \"out of the box\" Metasploit attacks will fail.\n\n### Further Reading\n\n*   **Official:** *[Metasploit Project Home](https://www.metasploit.com/)* - The gateway to the framework.\n*   **Training:** *[Metasploit Unleashed](https://www.offsec.com/metasploit-unleashed/)* - A free ethical hacking course by Offensive Security.\n*   **Database:** *[Rapid7 Vulnerability Database](https://www.rapid7.com/db/)* - Browse the exploits available in the framework.\n"
                            },
                            {
                                "id": "playbooks",
                                "title": "Security Playbooks",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "SecurityOperations",
                                    "IncidentResponse"
                                ],
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# Security Playbooks\n\nThe manual for digital defense.\n\nA **Playbook** is a manual that provides step-by-step details for an operational action. It guides analysts on how to handle a security incident before, during, and after it occurs.\n\n## Why Playbooks Matter\nIn the heat of a breach, emotions run high and mistakes are easy to make. Playbooks ensure that every analyst follows a **standardized, repeatable process**, reducing human error and ensuring that no critical steps are missed.\n\n## Common Operational Playbooks\n\n### 1. Chain of Custody Playbook\n**Chain of Custody** is the process of documenting who had possession and control of digital evidence at every moment of an investigation.\n*   **Requirement**: You must document **Who, What, Where, and Why** for every piece of collected evidence.\n*   **Responsibility**: Evidence is your responsibility while it is in your possession. Every movement must be reported. This ensures the evidence remains valid in a court of law.\n\n### 2. Protecting and Preserving Evidence Playbook\nThis playbook focuses on handling **Fragile and Volatile** digital evidence.\n*   **Order of Volatility**: This is the prioritize sequence of what to save first:\n    1.  **Memory (RAM)**: If the device turns off, this data is gone forever.\n    2.  **Network State**: Connections that might be closed.\n    3.  **Hard Drives**: More stable, but can still be wiped.\n*   **The Golden Rule**: Never conduct an investigation on the *original* evidence. **Make a copy** (image) and investigate the copy. If you mess up the copy, the original is still safe.\n\n---\n\n### Other Uses\nPlaybooks aren't just for hacks. They are used for **Compliance Reviews**, **Access Management**, and any task that requires a documented, end-to-end process.\n"
                            },
                            {
                                "id": "siem",
                                "title": "SIEM (Security Information and Event Management)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "SecurityTools",
                                    "SIEM",
                                    "Monitoring"
                                ],
                                "links": [
                                    "firewalls"
                                ],
                                "group": "cybersecurity",
                                "content": "# SIEM (Security Information and Event Management)\n\nThe brain of the Security Operations Center.\n\nA **SIEM tool** is an application that collects and analyzes log data from across an organization\u2019s entire network (servers, [[firewalls]], user devices) to monitor for suspicious activity and security threats.\n\n## Why Use a SIEM?\n*   **Log Management**: Modern organizations generate millions of events per day. It would be impossible for an analyst to read them all manually.\n*   **Centralization**: It brings all data into a single dashboard.\n*   **Alerting**: It uses \"rules\" to automatically flag specific threats, risks, or vulnerabilities.\n\n## Major SIEM Platforms\n\n### 1. Splunk\nA powerful data analysis platform used to retain, search, and analyze log data.\n*   **Hosting**: Can be self-hosted (on-premise) or cloud-hosted.\n*   **Strengths**: Extremely flexible, deep search capability, and used by many of the world's largest companies.\n\n### 2. Chronicle\nA cloud-native SIEM tool developed by Google.\n*   **Hosting**: Cloud-only.\n*   **Strengths**: Built for massive scale. Because it is cloud-native, it can search petabytes of data instantly and deliver new features very quickly.\n\n## SIEM Hosting: On-Premise vs. Cloud\n*   **Cloud-Hosted**: Generally easier to set up, use, and maintain. Ideal for teams that want to focus on security rather than managing server hardware.\n*   **On-Premise**: Gives an organization complete control over their data locality, but requires expert staff to maintain the physical infrastructure.\n\n---\n\n### Dashboarding\nSIEM tools provide visual dashboards that organize data into categories. This allows analysts to quickly see trends, such as a sudden spike in login failures or a large data transfer to an unknown IP address.\n"
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
                                "links": [],
                                "group": "cybersecurity",
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
                                "links": [],
                                "group": "cybersecurity",
                                "content": "# VPN\n\nA private tunnel through the public internet.\n\nThe internet is like a public highway. Everyone (hackers, your ISP, the government) can see the digital \"cars\" (data) you are driving and where you are going.\n\nA **VPN** (Virtual Private Network) builds a secure, opaque tunnel around your car. No one can see inside the tunnel to see who you are, what data you are carrying, or exactly where you are headed.\n\n## Why use it?\n\n### 1. Privacy (The Mask)\nWithout a VPN, websites see your IP address (your digital home address). With a VPN, they only see the VPN server's address. You could be in London, but the website thinks you are in New York.\n\n### 2. Security (The Armour)\nPublic WiFi (like at Starbucks) is dangerous. Hackers can easily intercept your traffic. A VPN encrypts your data, turning it into gibberish. Even if a hacker steals it, they can't read it.\n\n### 3. Access (The Teleporter)\nSome content is blocked in certain countries (Geoblocking). A VPN lets you \"tunnel out\" to a different country to access that content.\n\n## FAQs\n\n*1. Does a VPN make me anonymous?*\n**No.** It gives you *privacy*, not *anonymity*.\n*   Your ISP can't see what you do.\n*   But the **VPN Provider** CAN see what you do. You are shifting your trust from Comcast/AT&T to NordVPN/ExpressVPN. Always choose a trusted paid provider that promises \"No Logs.\"\n\n*2. Does it slow down my internet?*\nYes, slightly. Your data has to travel to the VPN server first, get encrypted, and then go to the destination. It's a detour.\n\n### Further Reading\n\n*   **Guide:** *[Wirecutter: The Best VPN Services](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/)*\n*   **Deep Dive:** *[How VPNs work (Computerphile)](https://www.youtube.com/watch?v=WVDQEoe6ZWY)* (Video)\n"
                            }
                        ]
                    },
                    {
                        "id": "threat-actors",
                        "title": "Threat Actors",
                        "icon": "fas fa-user-ninja",
                        "desc": "Profiles and motivations of digital adversaries",
                        "view": "list",
                        "group": "cybersecurity",
                        "children": [
                            {
                                "id": "apt",
                                "title": "Advanced Persistent Threats (APTs)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "ThreatActors",
                                    "Espionage",
                                    "StateSponsors"
                                ],
                                "links": [
                                    "stuxnet",
                                    "notpetya",
                                    "social-engineering"
                                ],
                                "group": "cybersecurity",
                                "content": "# Advanced Persistent Threats (APTs)\n\nThe ghosts in the machine.\n\nAn **Advanced Persistent Threat (APT)** is a sophisticated, long-term cyberattack where an intruder gains access to a network and remains undetected for an extended period.\n\n## Key Characteristics\n*   **Advanced**: They have significant expertise and resources. They often use custom malware and \"zero-day\" exploits.\n*   **Persistent**: Their goal is not a quick \"smash and grab.\" They want to stay inside the network as long as possible to slowly leak data.\n*   **Threat**: They are highly motivated and targeted. They don't attack random people; they research their targets (large corporations or government agencies) in advance.\n\n## Intentions and Motivation\n*   **Espionage**: Stealing political or military information.\n*   **Intellectual Property**: Gaining access to trade secrets, patents, or research.\n*   **Critical Infrastructure**: Damaging or gaining control over power grids, water systems, or financial institutions.\n\n## How They Work\nAPTs often start with **[[social-engineering|Social Engineering]]** or a targeted phishing attack to gain an initial foothold. Once inside, they move laterally through the network, escalating their privileges until they reach their ultimate goal.\n\n---\n\n### Examples in History\n*   **[[stuxnet|Stuxnet]]**: Designed to disrupt Iran's nuclear program.\n*   **[[notpetya|NotPetya]]**: While disguised as ransomware, it was likely a state-sponsored attack aimed at destruction.\n"
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
                                "links": [
                                    "bug-bounty",
                                    "pen-testing"
                                ],
                                "group": "cybersecurity",
                                "content": "# Ethical Hacker\n\nThe good guys breaking in to show you the holes.\n\nAn **Ethical Hacker** (or White Hat) is a security expert authorized to try and hack into a system. They use the *same* tools and techniques as malicious hackers (Black Hats), but with one key difference: **Permission**.\n\nTheir goal is to find vulnerabilities and report them so they can be fixed *before* the bad guys find them.\n\n## The Hat Colors\n\n*   **White Hat:** Good guys (Authorized).\n*   **Black Hat:** Bad guys (Criminals).\n*   **Gray Hat:** Chaos neutral. They hack without permission but usually disclose the bug instead of exploiting it (often illegal but well-intentioned).\n\n## FAQs\n\n*1. Is it a real job?*\nYes. Companies pay huge salaries for [[pen-testing|Penetration-Testers]] and [[bug-bounty|Bug-Bounty]] Hunters.\n\n### Further Reading\n\n*   **Certification:** *[Certified Ethical Hacker (CEH)](https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/)*\n*   **Platform:** *[HackerOne (Bug Bounties)](https://www.hackerone.com/)*\n"
                            },
                            {
                                "id": "hacker-types",
                                "title": "Types of Hackers",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "Ethics",
                                    "Professionalism"
                                ],
                                "links": [
                                    "script-kiddies",
                                    "hactivists",
                                    "bug-bounty",
                                    "pen-testing"
                                ],
                                "group": "cybersecurity",
                                "content": "# Types of Hackers\n\nNot all hats are black.\n\nA **Hacker** is simply a person who uses computers to gain access to systems, networks, or data. In the professional world, we categorize them based on their legality, ethics, and motivation.\n\n## The Three Main Categories\n\n### 1. Authorized Hackers (Ethical Hackers)\nCommonly known as **\"White Hat\"** hackers.\n*   **Motivation**: To safeguard people and organizations from malicious actors.\n*   **Methods**: They follow a strict code of ethics and always have legal permission (and a contract) before they begin their work.\n*   **Tools**: **[[pen-testing|Penetration Testing]]**, vulnerability assessments.\n\n### 2. Semi-Authorized Hackers (Researchers)\nCommonly known as **\"Grey Hat\"** hackers.\n*   **Motivation**: Typically curiosity or the desire to improve security.\n*   **Methods**: They might scan systems for vulnerabilities *without* permission, but they don't take advantage of them for harm. They often report the bugs to the owner (sometimes for a **[[bug-bounty|Bug Bounty]]**).\n*   **Legality**: Their actions are often in a legal \"grey area.\"\n\n### 3. Unauthorized Hackers (Unethical Hackers)\nCommonly known as **\"Black Hat\"** hackers or **Malicious Threat Actors**.\n*   **Motivation**: Financial gain, fame, or political agendas.\n*   **Methods**: They do not follow the law or respect boundaries. They steal data, plant malware, and disrupt systems.\n\n---\n\n## Other Terms\n*   **[[hactivists|hactivists]]**: Groups (like Anonymous) who use hacking for political agendas, protests, or social change rather than financial gain.\n*   **[[script-kiddies|script kiddies]]**: Inexperienced hackers who use pre-made tools and scripts created by others because they don't have the skills to write their own.\n"
                            },
                            {
                                "id": "hacktivism",
                                "title": "Hacktivism",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Cybersecurity",
                                    "SocialChange",
                                    "Politics"
                                ],
                                "links": [
                                    "doxing",
                                    "ddos"
                                ],
                                "group": "cybersecurity",
                                "content": "# Hacktivism\n\nThe Digital Sit-In.\n\n**Hacktivism** is the non-violent use of illegal or legally ambiguous digital tools to pursue political ends.\n\nThink of the internet like a giant, busy city.\n*   **Cybercriminals** are like pickpockets or bank robbers; they want your money.\n*   **Hacktivists** are like protesters blocking the main highway; they don't want to steal the cars; they want to stop traffic so everyone looks at their sign. They use code as digital graffiti or digital barricades to force a conversation about topics like free speech, human rights, or information freedom.\n\n## Key Tactics\n\n*   **[[ddos|DDoS]] (Distributed Denial of Service):** The Digital Sit-In. Thousands of computers flood a website with traffic until it crashes, effectively \"blocking the entrance\" to a government agency or corporation.\n*   **[[doxing|Doxing]]:** The Digital Outing. Finding and publishing private information (documents, emails, names) of public figures to expose corruption or hypocrisy.\n*   **Defacement:** The Digital Graffiti. Taking over a website to replace its homepage with a political message or manifesto.\n\n## FAQs\n\n*1. Is Hacktivism legal?*\nGenerally, no. Techniques like DDoS attacks and unauthorized system access (hacking) are illegal in most countries, regardless of the moral intent.\n\n*2. Are they the \"good guys\"?*\nIt depends on who you ask. To their supporters, they are modern-day freedom fighters and whistleblowers holding the powerful accountable. To governments and targeted corporations, they are cyber-terrorists causing chaos and financial damage.\n\n### Further Reading\n\n*   **Book:** *[Hacker, Hoaxer, Whistleblower, Spy](https://www.amazon.com/Hacker-Hoaxer-Whistleblower-Spy-Anonymous/dp/1781685835)* (The definitive story of Anonymous).\n*   **Article:** *[The History of Hacktivism](https://www.imperva.com/learn/application-security/hacktivism/)*\n"
                            },
                            {
                                "id": "insider-threats",
                                "title": "Insider Threats",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "CyberSecurity",
                                    "ThreatActors",
                                    "RiskManagement"
                                ],
                                "links": [
                                    "siem",
                                    "least-privilege"
                                ],
                                "group": "cybersecurity",
                                "content": "# Insider Threats\n\nThe enemy within.\n\nAn **Insider Threat** is a security risk that originates from within the organization. This could be a current or former employee, contractor, or business partner who has authorized access to the network and exploits it for harm.\n\n## Types of Insiders\n*   **The Malicious Insider**: A person who intentionally uses their access to harm the organization (e.g., for revenge or financial gain).\n*   **The Negligent Insider**: A person who makes a mistake, like clicking a phishing link or leaving a server exposed, that allows an external attacker in.\n*   **The Compromised Insider**: A person whose credentials have been stolen by an external threat actor without their knowledge.\n\n## Intentions and Motivation\n1.  **Sabotage**: Disrupting operations or destroying data.\n2.  **Corruption**: Modifying data for personal gain.\n3.  **Espionage**: Stealing information to sell to a competitor or foreign government.\n4.  **Unauthorized Access or Leaks**: Sharing sensitive data with the public or unauthorized parties.\n\n## Prevention\nProtecting against insider threats requires a combination of technical controls and culture:\n*   **[[least-privilege|Principle of Least Privilege]]**: Only giving people the access they absolutely need for their job.\n*   **Monitoring**: Using **[[siem|SIEM tools]]** to flag unusual behavior (e.g., someone downloading 10,000 files at 2:00 AM).\n*   **Offboarding**: Ensuring all access is immediately revoked when an employee leaves the company.\n"
                            },
                            {
                                "id": "script-kiddies",
                                "title": "Script Kiddies",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    ""
                                ],
                                "links": [
                                    "firewalls",
                                    "metasploit",
                                    "eternalblue",
                                    "loic"
                                ],
                                "group": "cybersecurity",
                                "content": "# Script Kiddies\n\nThe copy-paste armies of the internet.\n\n**Script Kiddies** (often shortened to \"skiddies\") are low-skilled individuals who use pre-written hacking scripts and automated tools to attack computer systems. Unlike professional hackers or nation-state actors, script kiddies usually don't understand *how* the code they are running actually works; they just know how to press \"Enter.\"\n\n## The \"Kiddie\" Mentality\n\nThe term is disparaging, used by the security community to describe a specific type of threat actor:\n\n*   **Reliance on Others:** They download tools made by others (like [[metasploit|Metasploit]], [[loic|LOIC]], or various ransomware kits) and let the software do the heavy lifting.\n*   **Motivation:** They are rarely motivated by complex ideology or precise theft. Most script kiddies are out for \"bragging rights,\" digital vandalism, or \"the lulz.\"\n*   **Lack of Trace Removal:** Because they don't understand the underlying protocols, they are often noisy and leave obvious trails for security investigators to find.\n\n## Why They Are Still Dangerous\n\nIt is a mistake to ignore them just because they are amateurs. They are dangerous for two main reasons:\n\n1.  **Volume:** There are millions of them. Even if a single person isn't a genius, a million people running automated scanners against your server 24/7 will eventually find a hole.\n2.  **Military-Grade Tools:** Advanced hacker groups sometimes release their tools (like [[eternalblue|EternalBlue]]). This puts military-grade weapons in the hands of untrained people who might use them recklessly without understanding the consequences.\n\n## FAQs\n\n*1. Are all young hackers script kiddies?*\nNo. Age has nothing to do with it. A \"Script Kiddie\" is defined by their **lack of skill and original contribution**. A 14-year-old who writes their own original exploits is a hacker; a 40-year-old who just downloads \"Wifi Hacker Pro\" is a script kiddie.\n\n*2. How do I defend against them?*\nMost script kiddies can be stopped by \"Basic Hygiene.\" They look for the easiest targets. If you keep your software updated (patched), use strong passwords, and have a basic [[firewalls|firewall]], they will usually move on to an easier victim.\n\n## Further Reading\n\n*   **Article:** *[What is a Script Kiddie?](https://www.kaspersky.com/resource-center/definitions/script-kiddies)* - A modern breakdown of amateur threat actors and their risks.\n*   **Community:** *[OWASP Top 10](https://owasp.org/www-project-top-10/)* - The vulnerabilities script kiddies most often look for.\n"
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
                "group": "general",
                "children": [
                    {
                        "id": "emerging-tech",
                        "title": "Emerging Tech",
                        "icon": "fas fa-rocket",
                        "desc": "Future technologies and innovations",
                        "view": "list",
                        "group": "general",
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
                                "links": [],
                                "group": "general",
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
                                "links": [],
                                "group": "general",
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
                                "links": [],
                                "group": "general",
                                "content": "# Non-Terrestrial Networks (NTN)\n\n**Think of it like putting cell towers in the sky.**\n\n**Non-Terrestrial Networks (NTN)** is a standardized term for any communication network that uses flying components (satellites, drones, or balloons) to connect devices, rather than relying solely on towers built on the ground.\n\nTraditionally, if you walked too far into the desert or ocean, your phone died because it couldn't \"see\" a tower. NTN aims to fix this by integrating satellites directly into the standard 5G network. Instead of needing a special bulky satellite phone, your normal smartphone explicitly switches to talking to a satellite when it loses the ground signal, keeping you connected seamlessly anywhere on Earth.\n\n## Key Types\n*   **LEO Satellites (Low Earth Orbit):** Satellites flying fast and close to Earth (like Starlink). They offer fast speeds and low lag but you need a lot of them to cover the globe.\n*   **Drones / HAPS (High Altitude Platform Stations):** Solar-powered gliders that fly in the stratosphere (above planes but below space) for months, acting like a super-tall cell tower for a specific city or disaster zone.\n\n## FAQs\n\n*1. Will this replace normal 5G?*\nNo. Satellites can't handle the massive amount of data that fiber-optic connected ground towers can. NTN is a \"gap filler\"; it covers the oceans, deserts, and rural areas where building towers is too expensive or impossible.\n\n*2. Do I need a new phone?*\nMostly, yes. While some very basic \"SOS via Satellite\" features work on current phones, true high-speed NTN internet will likely require chips with special antennas. However, the goal of standards (like \"SpaceRAN\") is to make the technology compatible with future mass-market phones, not just specialized heavy-duty gear.\n\n### Further Reading\n\n*   **Article:** *[What is 5G NTN?](https://www.ericsson.com/en/blog/2023/2/what-is-5g-non-terrestrial-networks)* (Ericsson Tech Explanation).\n*   **News:** *[The Race to Connect Everything](https://www.wsj.com/articles/satellite-phone-internet-race-11675204215)* (WSJ coverage of the satellite-to-phone market).\n"
                            },
                            {
                                "id": "qiskit",
                                "title": "IBM Qiskit",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Quantum",
                                    "Python",
                                    "Coding",
                                    "IBM"
                                ],
                                "links": [
                                    "quantum-computing"
                                ],
                                "group": "general",
                                "content": "# IBM Qiskit\n\nThe Sheet Music for Quantum Orchestras.\n\n**Qiskit** is an open-source Python SDK that allows you to write code for **[[quantum-computing|Quantum Computers]]**.\n\nThink of it like **Composing vs. Playing**.\n*   **The Instrument (Quantum Computer):** A complex machine of lasers and supercooled chips.\n*   **The Sheet Music (Qiskit):** You write a \"score\" (Python code) that tells the instrument what notes to play.\n*   **The Musician (Qiskit Runtime):** The system that takes your score and actually performs it on the real hardware.\n\nYou don't need to know how to build a violin to write a symphony. Qiskit lets you write quantum algorithms without needing to know how to calibrate a microwave pulse generator.\n\n## Key Concepts\n\n1.  **Quantum Circuit:** The \"Canvas\". You draw wires (qubits) and place gates (operations) on them.\n    *   *Analogy:* Like a musical staff where you place notes.\n2.  **Transpilation:** The \"Translation\". Real quantum chips are messy and specific. Qiskit translates your perfect \"C-Major Chord\" into the specific, messy instructions needed for a specific distinct chip (e.g., \"Eagle\" vs. \"Heron\").\n3.  **Primitives:** The \"Performance\". These are the commands to run the job.\n    *   *Sampler:* Returns probabilities (quasi-probabilities). \"What are the odds this lands on Heads?\"\n    *   *Estimator:* Calculates physical properties (energy).\n\n## Why Python?\n\nQuantum computers are **Co-Processors**. You use a classical computer (CPU) to control them. Python is the language of the Controller. You write the logic in Python, Qiskit compiles it, and sends the job to the QPU (Quantum Processing Unit) to execute the hard math.\n\n### Further Reading\n\n*   **Official Guide:** *[Qiskit Quickstart](https://quantum.cloud.ibm.com/docs/en/guides/quick-start)*.\n*   **Concept:** *[[quantum-computing|Quantum Computing]]* (The hardware).\n"
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
                                "links": [
                                    "supercomputer",
                                    "qiskit",
                                    "encryption",
                                    "cryptography",
                                    "shors-algorithm"
                                ],
                                "group": "general",
                                "content": "# Quantum Computing\n\nCalculating every path through the maze at once.\n\nClassical computers (like the one you are using) think in **Bits** (0 OR 1).\nQuantum computers think in **Qubits** (0 AND 1, at the same time).\n\nThis allows them to solve specific types of massive problems (like folding proteins for drug discovery or breaking [[encryption]]) exponentially faster than a [[supercomputer]].\n\n## Superposition & Entanglement\n\n*   **Superposition:** A coin spinning on a table is neither Heads nor Tails; it is a blur of both. That is a Qubit.\n*   **Entanglement:** Two spinning coins are linked. If you stop one and it lands Heads, the other one *instantly* becomes Tails, even if it is on Mars.\n\n## FAQs\n\n*1. Will it replace my laptop?*\nNo. They are giant, fragile fridges that need to be kept near Absolute Zero (-273\u00b0C). They are for specific science/math tasks, not scrolling Twitter.\n\n*2. Will it break encryption?*\nEventually, yes. [[shors-algorithm|Shor's-Algorithm]] proves a powerful enough Quantum Computer could crack all modern flexible [[encryption]]. This is why \"Post-Quantum [[cryptography|Cryptography]]\" is being researched now.\n\n## How do we use them?\n\nWe use software like **[[qiskit|IBM Qiskit]]**. It's a Python library that lets you write code (circuits) on your laptop, which is then sent to a real Quantum Computer (via the cloud) to be executed.\n\n\n### Further Reading\n\n*   **Video:** *[Quantum Computers Explained (Kurzgesagt)](https://www.youtube.com/watch?v=JhHMJCUmq28)*\n*   **Article:** *[IBM Quantum Experience](https://www.ibm.com/quantum)*\n"
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
                                "links": [],
                                "group": "general",
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
                        "group": "general",
                        "children": [
                            {
                                "id": "cpu",
                                "title": "CPU (Central Processing Unit)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Hardware",
                                    "Computing",
                                    "Basics"
                                ],
                                "links": [
                                    "npu",
                                    "tpu",
                                    "gpu"
                                ],
                                "group": "general",
                                "content": "# CPU (Central Processing Unit)\n\nThe Professor.\n\n**The CPU** is the primary brain of a computer. It is designed to interpret and execute generalized commands from software.\n\nThink of it like **A Professor**.\n*   **The Professor (CPU):** Extremely smart and versatile. Can solve complex calculus, write poetry, or organize a schedule. But can only do *one thing at a time*.\n*   **The Factory ([[gpu|GPU]]):** Not smart, but has 1,000 workers who can all stack boxes at once.\n*   **The Specialist ([[tpu|TPU]]):** A savant who can only do matrix multiplication, but does it faster than anyone else.\n\n## How it Works\n\n1.  **Sequential Processing:** The CPU reads instruction 1, does it. Reads instruction 2, does it. It is optimized for \"Latency\" (finishing one task fast) rather than \"Throughput\" (finishing many tasks at once).\n2.  **General Purpose:** It can run *any* code; Operating Systems, Games, Excel, Browsers. It is the conductor that tells the other chips (GPU, Disk, Network) what to do.\n\n## FAQs\n\n*1. Why do I need a GPU if I have a CPU?*\nBecause the Professor is too slow at painting. If you ask a Professor to modify 2 million pixels on a screen 60 times a second (gaming), they will fail. You need the Factory (GPU) for that.\n\n*2. Does AI use the CPU?*\nYes, for logic and data preparation. But for the heavy \"training\" (math), it offloads the work to [[npu|NPUs]] (on phones) or [[tpu|TPUs]] (in the cloud).\n\n### Further Reading\n\n*   **Article:** *[How Microprocessors Work](https://computer.howstuffworks.com/microprocessor.htm)*.\n*   **Comparison:** *[CPU vs GPU vs TPU](https://cloud.google.com/tpu/docs/intro-to-tpu#cpu-vs-gpu-vs-tpu)*.\n"
                            },
                            {
                                "id": "extropic",
                                "title": "Extropic",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "AI",
                                    "Hardware",
                                    "Thermodynamics",
                                    "Physics"
                                ],
                                "links": [
                                    "quantum-computing",
                                    "gpu"
                                ],
                                "group": "general",
                                "content": "# Extropic\n\nNature doesn't fight noise; it rides it.\n\n**Extropic** is a computing company building \"Thermodynamic Computers\" that use the natural thermal noise of the universe to power AI, rather than spending energy to suppress it.\n\nThink of it like **A Ball on a Table**.\n*   **Traditional Computing (Digital):** You want the ball to stay perfectly still (0) or move perfectly to the right (1). But the table is constantly vibrating (thermal noise/heat). You have to spend massive amounts of energy (cooling, error correction) to force the table to be flat and the ball to be still.\n*   **Thermodynamic Computing (Extropic):** You *tilt* the vibrating table. You let the natural vibrations (heat) shake the ball around, and you just guide it generally downhill. You use the \"noise\" as the engine that moves the ball.\nInstead of fighting physics to create order, they use the chaos of physics to perform calculations (specifically, probability sampling).\n\n## Key Concepts\n\n*   **Thermodynamic Computing:** A new paradigm where the hardware is designed to relax into a lower energy state, which mathematically corresponds to finding the answer to a problem (like how a ball naturally finds the bottom of a hill).\n*   **p-bits (Probabilistic Bits):** Unlike a bit that is definitely 0 or 1, a p-bit is *probabilistically* 0 or 1. It flickers like a coin flipping in the air. This is perfect for AI, which is all about probability (\"Is this image 80% likely to be a cat?\").\n*   **Jellium:** A state of matter (electron gas) used as an analogy for their chip's substrate. They treat the electrons in their chip like a fluid that can inherently perform complex math just by flowing.\n\n## FAQs\n\n*1. Why do we need this?*\nThe \"Energy Wall.\" We are running out of electricity to power bigger AI Models. Traditional chips ([[gpu|GPUs]]) are becoming heaters that occasionally do math. Extropic claims their chips can be orders of magnitude more efficient because they don't fight heat; they run *on* it.\n\n*2. Is this Quantum Computing?*\nNo, but it's related. [[quantum-computing|Quantum Computers]] use quantum mechanics (entanglement). Extropic uses *Thermodynamics* (statistical mechanics). It fits in the gap between classical chips (too rigid) and quantum chips (too fragile). It works at room temperature.\n\n### Further Reading\n\n*   **Video:** *[Extropic: Thermodynamic Computing](https://www.youtube.com/watch?v=Y28JQzS6TlE)* (The \"Litepaper\" video).\n*   **Concept:** *[Brownian Motion](https://en.wikipedia.org/wiki/Brownian_motion)* (The physics of random fluctuations).\n"
                            },
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
                                "links": [
                                    "nfc",
                                    "rfid"
                                ],
                                "group": "general",
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
                                "links": [
                                    "npu",
                                    "tpu",
                                    "cpu"
                                ],
                                "group": "general",
                                "content": "# GPU\n\nA factory with thousands of workers, instead of one genius.\n\nThe **[[cpu|CPU]]** (Central Processing Unit) in your computer is like a **Professor**: extremely smart, can do complex math (calculus), but can only do one or two things at a time.\n\nThe **GPU** (Graphics Processing Unit) is like a **Factory** full of thousands of workers: they aren't very smart (basic math only), but they can do 10,000 simple things at the exact same time.\n\n## Why is it used for AI?\n\nAI (and Video Games) require changing millions of pixels or calculating millions of numbers simultaneously.\n*   **[[cpu|CPU]]:** Solves one complex equation in 0.1 seconds.\n*   **GPU:** Solves 10,000 simple equations in 0.1 seconds.\n*   *(See also: [[tpu|TPUs]] for specialized AI/Cloud training and [[npu|NPUs]] for mobile AI).*\n\n## FAQs\n\n*1. Can I use a GPU for normal work?*\nYou use it every day! It draws the windows on your screen. But for running Excel or Word, your CPU does the heavy lifting because those tasks are sequential (step-by-step), not parallel.\n\n*2. Why are they so expensive?*\nSupply and Demand. They are the shovels in the AI Gold Rush. Everyone from gamers to Google needs them to run modern software.\n\n### Further Reading\n\n*   **Video:** *[Mythbusters Demo: CPU vs GPU](https://www.youtube.com/watch?v=-P28LKWTzrI)* (The famous paintball illustration).\n*   **Explainer:** *[NVIDIA: What is a GPU?](https://www.nvidia.com/en-us/geforce/technologies/what-is-a-gpu/)*\n"
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
                                "links": [],
                                "group": "general",
                                "content": "# Hard Drive (HDD / SSD)\n\nThe long-term memory of the computer.\n\nThe **Hard Drive** is where your data lives when the power is turned off.\nIf **RAM** is your tabletop (fast, temporary workspace), the **Hard Drive** is the filing cabinet (slower, permanent storage).\n\n## The Two Titans\n\n### 1. HDD (Hard Disk Drive) - The Record Player\n*   **Technology:** Fast-spinning magnetic platters with a mechanical arm that reads data.\n*   **Pros:** Very cheap for huge amounts of space (8TB, 16TB).\n*   **Cons:** Slow, loud, fragile (if you drop it, the needle scratches the record and data dies).\n\n### 2. SSD (Solid State Drive) - The Flash Card\n*   **Technology:** Lightning-fast electrical chips with no moving parts.\n*   **Pros:** Instant speed, silent, durable.\n*   **Cons:** More expensive per gigabyte (though getting cheaper).\n\n## FAQs\n\n*1. NVMe vs SATA?*\n*   **SATA:** The old cable connection (Max speed ~600 MB/s).\n*   **NVMe (M.2):** The new stick that plugs directly into the motherboard (Max speed ~7,000 MB/s). Always buy NVMe for your main Operating System drive.\n\n*2. How long do they last?*\nUsually 5-10 years. But they *will* fail.\n**Rule of thumb:** Data that doesn't exist in at least two places (Backup) doesn't exist at all.\n\n### Further Reading\n\n*   **Video:** *[How a Hard Drive Works (Slow Mo)](https://www.youtube.com/watch?v=3owqvmmf6m8)*.\n*   **Guide:** *[HDD vs SSD vs NVMe](https://www.crucial.com/articles/about-storage/ssd-vs-hdd)*.\n"
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
                                "links": [],
                                "group": "general",
                                "content": "# LiDAR\n\nBats using lasers instead of sound.\n\nYou know how bats use **Sonar** (Sound Navigation)? They scream, and listen for the echo to know where the wall is.\n\n**LiDAR** (Light Detection and Ranging) does the exact same thing, but with **Lasers**. It shoots millions of invisible laser beams per second and measures how long they take to bounce back.\n\n## What it sees\n\nIt creates a \"Point Cloud\"; a precise 3D map of the world.\n*   **Cameras** see color (2D).\n*   **LiDAR** sees distance (3D). It knows exactly that the tree is 15.2 meters away, not 15.1.\n\n## FAQs\n\n*1. Where is it used?*\n*   **Self-Driving Cars:** The spinning bucket on top of the car. It tells the car \"There is a pedestrian 20 meters ahead.\"\n*   **iPhones:** New pros have a tiny LiDAR scanner to help with Focus and Augmented Reality (AR).\n*   **Archaeology:** Discovering lost cities hidden under thick jungle canopies by seeing \"through\" the leaves.\n\n*2. Is it safe?*\nYes. The lasers are low power and invisible. They won't hurt your eyes.\n\n### Further Reading\n\n*   **Video:** *[How LiDAR works (Velodyne)](https://www.youtube.com/watch?v=EYbhNSUnIdU)*\n*   **Article:** *[The magic of LiDAR](https://www.neonscience.org/resources/learning-hub/tutorials/lidar-basics)*\n"
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
                                "links": [
                                    "rfid"
                                ],
                                "group": "general",
                                "content": "# NFC (Near Field Communication)\n\nThe digital handshake.\n\n**NFC** is a short-range wireless technology (max distance ~4cm) that lets two devices talk when they touch or get very close.\n\nIt is a subtype of **[[rfid|RFID]]**, but designed for secure, two-way communication.\n\n## Use Cases\n\n1.  **Payments:** Apple Pay / Google Pay (Tap to pay).\n2.  **Access:** Opening office doors with a badge or phone.\n3.  **Pairing:** Tapping headphones to a phone to connect Bluetooth instantly.\n\n## FAQs\n\n*1. Is it safe to leave on?*\nGenerally, yes. Because the range is tiny (inches), a hacker would have to physically bump into you with a reader to steal data (\"Skimming\"), which is difficult in practice.\n\n### Further Reading\n\n*   **Article:** *[NFC vs RFID: What's the difference?](https://www.rfidjournal.com/faq/what-is-the-difference-between-nfc-and-rfid)*\n"
                            },
                            {
                                "id": "npu",
                                "title": "NPU (Neural Processing Unit)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "AI",
                                    "Hardware",
                                    "Mobile",
                                    "EdgeComputing"
                                ],
                                "links": [
                                    "tpu",
                                    "gpu"
                                ],
                                "group": "general",
                                "content": "# NPU (Neural Processing Unit)\n\nThe Brain in Your Pocket.\n\n**An NPU** is a specialized processor found in smartphones and laptops designed to run AI tasks efficiently locally (\"on the edge\"), rather than sending data to the cloud.\n\nThink of it like **Reflexes vs. Thinking**.\n*   **[[tpu|TPU]] (Cloud):** Like a supercomputer solving a complex math problem. It takes huge power and time.\n*   **NPU (Edge):** Like your hand pulling away from a hot stove. It\u2019s not \"smart\" in a general sense, but it is instant and happens right where the action is.\nWhen your phone unlocks with FaceID or blurs the background in a Zoom call, that's the NPU. It does the heavy AI lifting so your battery doesn't die.\n\n## How it Works\n\n1.  **Inference Only:** Unlike huge GPUs that *train* models (teach them), NPUs mostly *run* models (inference). They take a pre-trained brain and just use it.\n2.  **Low Power:** They are physically designed to sip battery. Doing the same FaceID calculation on your main CPU would drain your phone in an hour.\n\n## FAQs\n\n*1. Do I have one?*\nYes. If you have a modern iPhone (Apple Neural Engine) or Android (Hexagon), you use it every day for photos, voice-to-text, and battery management.\n\n*2. What's the difference from a GPU?*\nEfficiency. A [[gpu|GPU]] *can* do what an NPU does, but it's overkill. It\u2019s like using a flamethrower to light a candle. The NPU is the lighter, purpose-built and safe for your pocket.\n\n### Further Reading\n\n*   **Article:** *[What is an NPU?](https://semiconductor.samsung.com/support/tools-resources/dictionary/the-neural-processing-unit-npu-a-brainy-next-generation-semiconductor/)* (Samsung Explainer).\n*   **Comparison:** *[CPU vs GPU vs TPU vs NPU](https://youtu.be/d3SqH0UBLEY)*.\n"
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
                                "links": [],
                                "group": "general",
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
                                "links": [],
                                "group": "general",
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
                                "links": [],
                                "group": "general",
                                "content": "# Supercomputer\n\nThe Formula 1 car of computing.\n\nA **Supercomputer** isn't just a \"fast laptop.\" It is an entirely different architecture designed to solve one massive math problem at a time by linking thousands of processors together.\n\nYour laptop is designed to do many things at once (Email, Spotify, Chrome).\nA Supercomputer is designed to simulate **Nuclear Explosions** or **Global Weather Patterns**.\n\n## How it Works\n\n**Parallel Processing.**\nImagine you need to read a library of 10,000 books.\n*   **Fast Computer:** One genius reading 1 book per second. (Total: 2.7 hours).\n*   **Supercomputer:** 10,000 average people reading 1 book each *at the same time*. (Total: 1 second).\n\n## FLOPs\n\nWe measure them in **FLOPS** (Floating Point Operations Per Second).\n*   **Current Champion:** **Frontier** (Oak Ridge National Lab).\n*   **Speed:** Exascale (1.1 ExaFLOPS). That is 1,100,000,000,000,000,000 calculations per second.\n\n## FAQs\n\n*1. Does it run Windows?*\nNo. Almost 100% of the world's supercomputers run **Linux**. It is the only OS flexible and efficient enough to manage that much hardware.\n\n*2. Where are they?*\nUniversities, Government Labs, and Massive tech companies (Meta/Google for AI training).\n\n### Further Reading\n\n*   **List:** *[Top500.org](https://top500.org/lists/top500/)* (The official ranking of the 500 fastest computers on Earth).\n*   **Video:** *[Building the World's Fastest Computer](https://www.youtube.com/watch?v=u3dJt_t-2tE)*.\n"
                            },
                            {
                                "id": "tpu",
                                "title": "TPU (Tensor Processing Unit)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "AI",
                                    "Hardware",
                                    "Google"
                                ],
                                "links": [
                                    "gpu",
                                    "cpu"
                                ],
                                "group": "general",
                                "content": "# TPU (Tensor Processing Unit)\n\nThe Specialist.\n\n**A TPU** is a custom microchip designed by OpenAI/Google specifically to do *one thing* extremely fast: Matrix Multiplication (the math that powers Neural Networks).\n\nThink of it like a **Dragster vs. a Sediment**.\n*   **[[cpu|CPU]] (Sedan):** Can drive anywhere (grocery store, off-road, highway). Versatile, but slow max speed.\n*   **[[gpu|GPU]] (Sports Car):** Faster. Good for racing (gaming) and carrying moderate loads (parallel tasks).\n*   **TPU (Dragster):** Useless for going to the grocery store (can't run Windows). But on a straight line (Tensor math), it is unimaginably fast.\nIt strips away everything a general computer needs (cache, branch prediction) to make room for pure \"number crunching\" muscle.\n\n## How it Works\n\n1.  **Systolic Array:** Instead of moving data in and out of memory for every calculation (like a CPU), a TPU pumps data through a massive grid of calculator units like a heart pumps blood.\n2.  **Low Precision:** It often uses \"fuzzy\" numbers (8-bit or bfloat16) because AI doesn't need perfect accuracy (3.14159...), it just needs to be close enough (3.14). This saves massive energy.\n\n## FAQs\n\n*1. Can I buy one?*\nNot really. TPUs are mostly available only through Google Cloud. You rent them for a few dollars an hour.\n\n*2. Is it better than a GPU?*\nFor specific AI tasks (like training Transformers), yes/faster. For general tasks or smaller models, GPUs are often more flexible and easier to use.\n\n### Further Reading\n\n*   **Article:** *[Cloud TPU](https://cloud.google.com/tpu/docs/intro-to-tpu)* (Official Google Docs).\n*   **Video:** *[How Google's TPU works](https://www.youtube.com/watch?v=MXxN4fv01c8)*.\n"
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
                                "links": [],
                                "group": "general",
                                "content": "# VMX File\n\nThe blueprint for a virtual machine.\n\nWhen you create a Virtual Machine (VM) using VMware, it isn't just one magic blob. It's a folder full of files. The **.vmx** file is the text file that describes the VM's hardware configuration.\n\nIt tells the software: \"This VM should have 4GB of RAM, 2 CPU cores, and use *this* specific hard drive file.\"\n\n## Inside the File\n\nIt is just a text file. If you open it with Notepad, it looks like this:\n\n```ini\nmemsize = \"4096\"\nnumvcpus = \"2\"\nethernet0.virtualDev = \"e1000\"\nscsi0.virtualDev = \"lsilogic\"\n```\n\n*   `memsize`: How much RAM (Memory) it gets.\n*   `numvcpus`: How many Processors it gets.\n*   `ethernet0`: What kind of Network Card it has.\n\n## FAQs\n\n*1. Can I edit this file?*\nYes, but be careful. Experts edit it to tweak settings that aren't available in the usual settings menu. If you make a typo, the VM won't start effectively \"breaking\" the machine blueprint.\n\n*2. Is VMX the hard drive?*\nNo.\n*   **.VMX:** The *Blueprint* (Text file, tiny size).\n*   **.VMDK:** The *Hard Drive* (Data file, huge size).\n\n*3. Is this used by all virtualization software?*\nNo. `.vmx` is specific to **VMware** (Fusion, Workstation, Player, ESXi).\n*   VirtualBox uses `.vbox`.\n*   Hyper-V uses `.xml` or `.vmcx`.\n\n### Further Reading\n\n*   **Documentation:** *[VMware VMX File Parameters](https://sanbarrow.com/vmx/vmx-parameters.html)* (Unofficial but excellent guide).\n*   **Official:** *[Editing the .vmx file for your VMware Fusion virtual machine](https://kb.vmware.com/s/article/1014782)*\n"
                            }
                        ]
                    },
                    {
                        "id": "software",
                        "title": "Software",
                        "icon": "fas fa-code",
                        "desc": "Programming and development concepts",
                        "view": "list",
                        "group": "general",
                        "children": [
                            {
                                "id": "cryptomining-software",
                                "title": "Cryptomining Software",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Software",
                                    "Crypto",
                                    "Resources"
                                ],
                                "links": [
                                    "edr",
                                    "[cryptojacking",
                                    "cryptojacking"
                                ],
                                "group": "general",
                                "content": "# Cryptomining Software\n\nComputer programs designed to solve complex mathematical problems (\"hashes\") in order to secure a blockchain and earn cryptocurrency rewards.\n\nWhile cryptomining software has legitimate uses, it is frequently used by hackers in unauthorized ways to steal processing power.\n\n## Legitimate vs. Malicious Use\n\n- **Legitimate Miner**: A user intentionally installs software (like NiceHash or PhoenixMiner) on their own hardware to earn crypto. They pay for their own electricity and hardware wear-and-tear.\n- **Malicious Miner**: A hacker secretly installs a mining script or program on a victim's device without their knowledge. This is known as **[[cryptojacking]]**.\n\n## How it Impacts Systems\n- **CPU/GPU Saturation**: The software tries to use 100% of available processing power, making the computer laggy.\n- **Heat & Wear**: Running hardware at max capacity for long periods can cause permanent damage or shortened lifespan.\n- **Energy Cost**: Cryptomining is extremely power-hungry; unauthorized mining can cause massive spikes in electricity bills.\n\n## Detection\nAdvanced antivirus and [[EDR]] systems often flag legitimate cryptomining software as \"Potentially Unwanted Programs\" (PUPs) because they are so commonly associated with malware infections.\n\n### Further Reading\n- [What is Cryptocurrency Mining?](https://www.investopedia.com/terms/c/cryptocurrency-mining.asp)\n- [[[cryptojacking|Learn more about Cryptojacking attacks]]].\n"
                            },
                            {
                                "id": "host-guest-file-system",
                                "title": "Host-Guest File System (HGFS)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    ""
                                ],
                                "links": [],
                                "group": "general",
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
                                "links": [],
                                "group": "general",
                                "content": "# Hypervisor\n\nThe landlord of the digital apartment building.\n\nIf a physical computer is a building, the **Hypervisor** is the property manager that divides it into separate apartments (Virtual Machines).\n\nIt is a layer of software that sits between the physical hardware (metal) and the virtual operating systems. It allows one physical computer to pretend to be many different computers at once.\n\n## Types of Hypervisors\n\nThere are only two main types you need to know:\n\n### Type 1: Bare Metal (The Heavy Lifter)\nThis runs **directly** on the hardware, replacing the operating system (like Windows). It's very fast and efficient.\n*   *Analogy:* The building manager lives in the lobby and controls everything directly.\n*   *Examples:* VMware ESXi, Microsoft Hyper-V (Server), KVM.\n\n### Type 2: Hosted (The App)\nThis runs **inside** an operating system, just like a regular app (like Chrome or Spotify). It's easier to use but slower.\n*   *Analogy:* You are subletting a room inside someone's existing apartment.\n*   *Examples:* VMware Workstation, Oracle VirtualBox.\n\n## FAQs\n\n*1. Why do we use them?*\n*   **Efficiency:** Instead of buying 10 small servers that are mostly idle, you buy 1 powerful server and run 10 virtual servers on it.\n*   **Safety:** If one \"apartment\" (VM) catches fire (gets a virus), the others are safe because the walls (Hypervisor) are fireproof.\n\n*2. What is the difference between a Hypervisor and a Container (Docker)?*\n*   A **Hypervisor** virtualizes the *Hardware* (giving you a full, heavy computer).\n*   A **Container** virtualizes the *Operating System* (giving you a lightweight space to run just an app).\n\n### Further Reading\n\n*   **Comparison:** *[Hypervisor vs. Containers Explained](https://www.redhat.com/en/topics/containers/containers-vs-vms)*\n*   **Deep Dive:** *[VMware's \"What is a Hypervisor?\"](https://www.vmware.com/topics/glossary/content/hypervisor)*\n"
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
                                "links": [],
                                "group": "general",
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
                                "links": [],
                                "group": "general",
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
                                "links": [
                                    "operating-system"
                                ],
                                "group": "general",
                                "content": "# OS Kernel\n\nThe bridge between software and metal.\n\nThe **Kernel** is the absolute core of an [[operating-system|Operating System]]. It is the very first program that loads when you turn on your computer.\n\nThink of the computer as a **Restaurant**:\n*   **Hardware:** The Kitchen (Stoves, Fridges).\n*   **Applications:** The Customers (Ordering food).\n*   **The Kernel:** The **Waiter**.\n\nThe Customer (App) cannot just walk into the kitchen (Hardware) and grab a steak. It must ask the Waiter (Kernel), \"May I have memory?\" The Kernel checks if there is any free, grabs it, and serves it to the App.\n\n## What it Controls\n\n1.  **Memory Management:** Deciding who gets to use the RAM.\n2.  **Process Scheduling:** Deciding which app gets to use the CPU right now.\n3.  **Device Drivers:** Translating signals from your mouse/keyboard so the CPU understands them.\n\n## FAQs\n\n*1. What is a \"Kernel Panic\" (or \"Blue Screen of Death\")?*\nIt means the Waiter dropped a tray or slipped on the floor.\nBecause the Kernel controls *everything*, if the Kernel crashes, the entire computer crashes instantly to prevent hardware damage.\n\n*2. Can I see the Kernel?*\nNot really. It runs in \"Kernel Space\" (a VIP area of memory). Your apps run in \"User Space.\" This strict separation prevents a buggy video game from crashing your entire system.\n\n### Further Reading\n\n*   **Video:** *[How a Kernel Works](https://www.youtube.com/watch?v=mUVmV4H5B6k)*.\n*   **Deep Dive:** *[Linux Kernel Architecture](https://developer.ibm.com/articles/l-linux-kernel/)*.\n"
                            },
                            {
                                "id": "tbps",
                                "title": "Tbps",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [],
                                "links": [],
                                "group": "general",
                                "content": "\n\nTbps stands for Terabits per second, a unit of data transfer rate equal to 1 trillion bits per second (10\u00b9\u00b2 bits/s).\n\nTerabit per second (Tbps): 1 Tbps = 1,000 gigabits per second (Gbps) = 1 trillion bits per second. \nTerabyte per second (TBps): Often confused with Tbps, 1 TBps equals 8 Tbps, as 1 byte = 8 bits. "
                            }
                        ]
                    }
                ]
            },
            {
                "id": "insurance",
                "title": "Insurance",
                "icon": "fas fa-shield-alt",
                "desc": "First Principles of Insurance & Cyber Risk",
                "view": "shelf",
                "group": "insurance",
                "children": [
                    {
                        "id": "insurance-concepts",
                        "title": "Insurance-Concepts",
                        "icon": "fas fa-folder",
                        "desc": "",
                        "view": null,
                        "group": "insurance",
                        "children": [
                            {
                                "id": "average-annual-loss",
                                "title": "Average Annual Loss",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "RiskMetric",
                                    "CyberEconomics"
                                ],
                                "links": [],
                                "group": "insurance",
                                "content": "# Average Annual Loss\n\n**Average Annual Loss (AAL)** is like the yearly budget you set aside for car maintenance; you know you'll pay for oil changes and minor repairs every year, even if you don't crash.\n\nIn cyber risk, **Average Annual Loss (AAL)** is the expected average financial loss a company will incur from risks over a specific period (usually a year) when averaged over a very long timeline.\n\nIt works by smoothing out the jagged peaks of disaster costs into a predictable annual expense. Instead of panicking when a small incident happens, you treat it as a \"pre-paid\" operating cost.\n\n## How it Works\n\n*   **The Baseline:** It calculates the \"cost of doing business\" regarding risk.\n*   **High Frequency, Low Severity:** AAL is mostly driven by small, frequent events (like fender benders or minor malware infections) rather than the massive, rare catastrophes.\n*   **Budgeting Tool:** Companies use AAL to decide how much premium they should realistically pay for insurance. If the premium is lower than their AAL, it might be a bad deal for the insurer!\n\n## Real-World Analogies\n\n| Context | Analogy |\n| :--- | :--- |\n| **General** | **Home Maintenance:** You might budget roughly $2,000/year for fixing leaks, painting, and lawn care. Some years you spend $500, others $5,000, but the *average* over 10 years is your AAL. |\n| **Cyber Risk** | **The \"Cost of Glitches\":** A company expects to lose $50,000/year dealing with phishing remediation, reimaging infected laptops, and minor downtime. This is their \"Cyber AAL\"; the routine cost of digital friction. |\n\n## FAQs\n\n*1. Why should I care about AAL if I have insurance?*\nBecause AAL represents the losses you are *expected* to eat. Insurers often set your **deductible** near your AAL so they don't have to handle paperwork for routine, small claims.\n\n*2. Is AAL the worst-case scenario?*\nNo! That\u2019s **Probable Maximum Loss (PML)** or **VaR**. AAL is just the average. If you only prepare for the AAL, you will be bankrupt when the \"Big One\" hits.\n\n### Further Reading\n\n*   **[Risk Scoring]:** *[CVSS Scores](../../cybersecurity/defenses-and-tools/cvss.md)* (Understanding how individual technical vulnerabilities contribute to the overall risk calculation).\n"
                            },
                            {
                                "id": "exceedance-probability-curve",
                                "title": "Exceedance Probability Curve",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "RiskModeling",
                                    "ProbabilityAnalysis"
                                ],
                                "links": [],
                                "group": "insurance",
                                "content": "# Exceedance Probability Curve\n\n**Exceedance Probability (EP) Curve** is like a flood map that tells you your house has a 1% chance of flooding every year (the \"100-year flood\").\n\n**Exceedance Probability (EP) Curve** is a graph that shows the probability that an annual loss will exceed a specific dollar amount. It answers the question: \"What are the odds of losing more than $X this year?\"\n\nYou use it to visualize the entire range of potential disasters, from the common $10k losses (high probability) to the catastrophic $100M losses (low probability).\n\n## How it Works\n\n*   **The X-Axis:** Represents the loss amount in dollars.\n*   **The Y-Axis:** Represents the probability (percentage) of exceeding that loss.\n*   **The Curve:** It usually drastically slopes down; small losses are very likely, but massive losses are very unlikely.\n\n## Real-World Analogies\n\n| Context | Analogy |\n| :--- | :--- |\n| **General** | **Flood Maps:** A map showing zones: Zone A floods every 10 years (10% EP), Zone B floods every 100 years (1% EP), Zone C floods every 500 years (0.2% EP). The curve just plots these points on a graph. |\n| **Cyber Risk** | **The \"Breach Lottery\":** There is a 90% chance you'll lose >$10k this year (minor incident), but only a 2% chance you'll lose >$10M (massive data exfiltration). The EP curve visualizes this \"risk tail.\" |\n\n## FAQs\n\n*1. What is a \"1-in-100 year\" even?*\nIt doesn't mean it happens heavily once every 100 years. It means there is a **1% probability** of it happening *in any given year*. You could hit the jackpot two years in a row (unlikely, but possible).\n\n*2. How do I use this curve?*\nYou pick a comfort level. If you can survive a $1M loss, you look at the curve to see how likely that is. If it's 50%, you better improve security. If it's 0.01%, maybe you can live with the risk.\n\n### Further Reading\n\n*   **[Risk Assessment]:** *[VaR (Value at Risk)](value-at-risk.md)* (A specific point on this curve).\n"
                            },
                            {
                                "id": "probable-maximum-loss",
                                "title": "Probable Maximum Loss (PML)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "RiskModeling",
                                    "InsuranceTerms"
                                ],
                                "links": [],
                                "group": "insurance",
                                "content": "# Probable Maximum Loss (PML)\n\n**Probable Maximum Loss (PML)** is the \"realistic worst-case scenario\"; it\u2019s the fire that burns down the building, but assumes the fire department eventually shows up.\n\n**Probable Maximum Loss (PML)** is the maximum loss that an insurer or risk manager would expect to incur on a policy, assuming that normal protective measures function as intended.\n\nIt contrasts with *Maximum Possible Loss* (MPL), which assumes everything fails (creating a total wipeout). PML is a \"bad but plausible\" number used to set insurance limits.\n\n## How it Works\n\n*   **Plausibility Filter:** It discards the \"meteor strike\" scenarios. It focuses on severe but reasonably expected disasters.\n*   **The \"Functioning\" Assumption:** It assumes your sprinklers work (mostly), your firewalls hold (somewhat), and your backups exist (eventually).\n*   **Setting Limits:** Companies buy insurance limits equal to their PML. Buying more (MPL) is usually too expensive and unnecessary.\n\n## Real-World Analogies\n\n| Context | Analogy |\n| :--- | :--- |\n| **General** | **House Fire:**\n*   **MPL (Possible):** Fire burns house to ash + destroys garage + kills expensive trees. (Total Loss).\n*   **PML (Probable):** Fire starts in kitchen, burns 60% of house before fire trucks arrive. (Realistic Disaster). |\n| **Cyber Risk** | **Ransomware Attack:**\n*   **MPL:** Hackers encrypt every single server and backup worldwide. Company bankrupt.\n*   **PML:** Hackers encrypt the main data center, but offline backups survive. Downtime is 2 weeks, not forever. |\n\n## FAQs\n\n*1. Who decides what is \"Probable\"?*\nIdeally, data. Underwriters use historical data and modeling software. However, it is subjective. One person's PML is another person's optimism.\n\n*2. Should I buy insurance for PML or MPL?*\nUsually PML. Insuring for MPL (total annihilation) is often cost-prohibitive. You accept the tiny risk that the \"meteor\" hits.\n\n### Further Reading\n\n*   **[Concepts]:** *[VaR (Value at Risk)](value-at-risk.md)* (Another way to defining \"probable\" loss).\n"
                            },
                            {
                                "id": "risk-transfer",
                                "title": "Risk Transfer",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "RiskManagement",
                                    "InsuranceBasics"
                                ],
                                "links": [],
                                "group": "insurance",
                                "content": "# Risk Transfer\n\n**Risk Transfer** is the business equivalent of paying someone else to worry for you so you can sleep at night.\n\n**Risk Transfer** is a risk management strategy where the burden of a potential loss is shifted from one party to another, typically through insurance policies or contractual indemnification.\n\nInstead of keeping the risk (Retention) or avoiding it (Avoidance), you pay a fee (premium) to make it someone else's problem.\n\n## How it Works\n\n*   **The Contract:** You sign a deal. \"If X happens, YOU pay for it, not me.\"\n*   **The Price:** You pay a known cost (Premium) to avoid an unknown, potentially unlimited cost (The Loss).\n*   **Not Just Insurance:** You can transfer risk via contracts (e.g., forcing a vendor to be responsible if their software hacks you).\n\n## Real-World Analogies\n\n| Context | Analogy |\n| :--- | :--- |\n| **General** | **Extended Warranty:** You buy a TV. You worry it often breaks. You pay Best Buy $50. Now, if it breaks, *Best Buy* loses money fixing it, not you. You transferred the risk of defects to them. |\n| **Cyber Risk** | **Cloud Providers (Shared Responsibility):** When you move to AWS, you *transfer* the risk of physical server failure to Amazon. You don't worry about the hard drives melting; that's their problem. (Note: You still keep the risk of configuring it securely!). |\n\n## FAQs\n\n*1. Does Risk Transfer eliminate the risk?*\nNo! The risk still exists; it just lands in someone else's wallet. If the other party goes bankrupt (e.g., your insurer fails), the risk bounces back to you (**Counterparty Risk**).\n\n*2. Can I transfer all risks?*\nNo. You cannot transfer reputation risk. If you get hacked, customers blame *you*, not your insurance company. You can transfer the *cost* of the fines, but not the *shame*.\n\n### Further Reading\n\n*   **[Orchestration]:** *[Total Cost of Risk (TCoR)](total-cost-of-risk.md)* (Calculating if the transfer is worth the price).\n"
                            },
                            {
                                "id": "tail-value-at-risk",
                                "title": "Tail Value at Risk (TVaR)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "RiskMetric",
                                    "TailRisk"
                                ],
                                "links": [],
                                "group": "insurance",
                                "content": "# Tail Value at Risk (TVaR)\n\n**Tail Value at Risk (TVaR)** asks the terrifying question: \"If the dam *does* break (which VaR ignores), how deep will the water get?\"\n\n**Tail Value at Risk (TVaR)** (also known as Conditional VaR or Expected Shortfall) is the average of all losses that exceed the VaR threshold.\n\nWhile VaR tells you the \"best of the worst\" outcomes, TVaR tells you the average of the *absolute worst* outcomes. It focuses entirely on the \"tail\" of the risk distribution; the disasters.\n\n## How it Works\n\n*   **The Condition:** It only looks at scenarios where losses are *greater* than the VaR cutoff (e.g., the worst 1% or 5%).\n*   **The Average:** It calculates the average dollar amount of those specific worst-case scenarios.\n*   **The \"Fat Tail\":** It captures the severity of extreme events that VaR might miss or underestimate.\n\n## Real-World Analogies\n\n| Context | Analogy |\n| :--- | :--- |\n| **General** | **The Storm Aftermath:** VaR says, \"We are 99% sure the storm won't cause >$1M damage.\" TVaR asks, \"Okay, but in the 1% chance it *does* cause >$1M damage, what\u2019s the average bill? Is it $1.1M or $100M?\" |\n| **Cyber Risk** | **The \"Big One\":** If a catastrophic cloud outage *does* happen (exceeding your 99% VaR), TVaR estimates the financial bleeding. It accounts for the cascading failures; lawsuits, regulatory fines, and stock drops; that happen in the worst 1% of scenarios. |\n\n## FAQs\n\n*1. Why is TVaR better than VaR?*\nVaR can be misleading. You might have a \"low\" VaR ($50k) but a massive cliff right after it where losses jump to $50M. TVaR sees that cliff; VaR doesn't.\n\n*2. Is this used for pricing insurance?*\nYes. Reinsurers (who ensure insurance companies) care deeply about TVaR because they are the ones paying for the catastrophes.\n\n### Further Reading\n\n*   **[Comparison]:** *[VaR vs TVaR](value-at-risk.md)* (Compare the \"threshold\" to the \"average tail\").\n"
                            },
                            {
                                "id": "total-cost-of-risk",
                                "title": "Total Cost of Risk (TCoR)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "RiskEconomics",
                                    "Management"
                                ],
                                "links": [],
                                "group": "insurance",
                                "content": "# Total Cost of Risk (TCoR)\n\n**Total Cost of Risk (TCoR)** is the realization that the sticker price of your insurance premium is just the tip of the iceberg; you also pay for the deductible, the safety team, and the time spent managing it all.\n\n**Total Cost of Risk (TCoR)** is the sum of all costs related to an organization's risk, including insurance premiums, retained losses (deductibles), risk management administrative costs, and taxes/fees.\n\nIt proves that buying cheap insurance doesn't always lower your total cost. If you buy cheap insurance (low premium) but have a high deductible and weak security (high losses), your TCoR might skyrocket.\n\n## How it Works\n\n*   **Equation:** TCoR = Insurance Premiums + Retained Losses (Deductibles/Uninsured) + Risk Control Costs (Security tools/staff) + Administrative Costs.\n*   **Optimization:** The goal isn't to minimize premiums; it's to minimize TCoR. Sometimes spending *more* on security (Control Costs) lowers your Premiums and Retained Losses enough to reduce the total TCoR.\n\n## Real-World Analogies\n\n| Context | Analogy |\n| :--- | :--- |\n| **General** | **Car Ownership:** The cost of a car isn't just the monthly loan payment (Premium). It's the Loan + Gas + Repairs + Insurance + Registration. If you buy a \"cheap\" unreliable car, your Repair costs might make your Total Cost higher than a reliable, expensive car. |\n| **Cyber Risk** | **The Security Budget:** `TCoR = Cyber Ins. Premium ($100k) + Deductibles Paid ($50k) + Security Team Salaries ($500k) + Endpoint Protection Software ($20k).` A CISO uses TCoR to justify buying better security tools: \"This $20k tool will lower our likely deductible payouts by $100k.\" |\n\n## FAQs\n\n*1. What are \"Retained Losses\"?*\nThe parts of the loss you pay yourself. This includes your **deductible** (the first $X amount of a claim) and any losses that are **excluded** from your policy.\n\n*2. How does risk management lower TCoR?*\nBy preventing accidents! If you invest in fire sprinklers (or MFA for cyber), you reduce the frequency of claims. This lowers your Retained Losses and eventually convinces insurers to lower your Premiums.\n\n### Further Reading\n\n*   **[Risk Scoring]:** *[Risk Scoring (CVSS)](../../cybersecurity/defenses-and-tools/cvss.md)* (Using technical scores to argue for lower premiums).\n"
                            },
                            {
                                "id": "value-at-risk",
                                "title": "Value at Risk (VaR)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "RiskMetric",
                                    "FinancialRisk"
                                ],
                                "links": [],
                                "group": "insurance",
                                "content": "# Value at Risk (VaR)\n\n**Value at Risk (VaR)** is like asking, \"On a really bad day, how much money could I lose?\" and being 95% sure it won't be worse than that.\n\n**Value at Risk (VaR)** is a statistical technique used to measure the level of financial risk within a firm or investment portfolio over a specific time frame.\n\nIt gives you a single dollar number that represents your maximum expected loss at a specific confidence level (e.g., 95% or 99%). It puts a fence around your \"normal\" bad days.\n\n## How it Works\n\n*   **Confidence Level:** Usually 95% or 99%. A 95% VaR means \"We are 95% confident our losses won't exceed this amount.\"\n*   **Time Horizon:** Over what period? Analysis for one day is different than for one year.\n*   **The Cutoff:** VaR ignores the absolute worst-case scenarios (the furthest 1% or 5% of the tail). It focuses on the boundary between \"normal\" risk and \"extreme\" risk.\n\n## Real-World Analogies\n\n| Context | Analogy |\n| :--- | :--- |\n| **General** | **Stock Portfolio:** \"I am 95% confident that my portfolio won't lose more than $5,000 in a single day.\" If it loses $6,000, that was a \"tail event\" (the other 5%). |\n| **Cyber Risk** | **The \"Bad Quarter\":** A CISO might say, \"Our Cyber VaR (95%) is $2M.\" This means in 19 out of 20 years, cyber incidents will cost less than $2M. If costs hit $10M, you're in the 5% \"outlier\" zone. |\n\n## FAQs\n\n*1. Does VaR tell me my maximum possible loss?*\n**No!** This is the most dangerous misconception. VaR only tells you the maximum loss *within the confidence interval*. It tells you nothing about how bad things get if you breach that threshold (for that, see **TVaR**).\n\n*2. Why use 95% vs 99%?*\n95% is standard for general risk management. 99% is essentially saying \"Prepare for the really, really rare stuff.\" Banks often required to use 99% by regulators.\n\n### Further Reading\n\n*   **[Tail Risk]:** *[TVaR (Tail Value at Risk)](tail-value-at-risk.md)* (What happens when you exceed the VaR limit?).\n"
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
                "group": "philosophy",
                "children": [
                    {
                        "id": "philosophy-concepts",
                        "title": "Philosophical Concepts",
                        "icon": "fas fa-comment-dots",
                        "desc": "General philosophical ideas",
                        "view": "list",
                        "group": "philosophy",
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
                                "links": [],
                                "group": "philosophy",
                                "content": "# Agency & Free Will\n\nThe ghost in the machine.\n\n**Agency** is the capacity to act. A thermostat has agency (it gets hot -> it turns on fan).\n**Free Will** is the capacity to *choose* how to act, free from external force or internal programming.\n\nThe debate is: Do humans have Free Will, or are we just very complex biological thermostats?\n\n## Determinism vs. Volition\n\n*   **Determinism (The Machine):** The universe is a chain of cause-and-effect. Your brain is made of atoms. Atoms obey physics. Therefore, your \"choice\" to eat pizza was calculated by the Big Bang bits in your brain. You couldn't have chosen otherwise.\n*   **Libertarian Free Will (The Soul):** There is a \"You\" (Consciousness) that sits above the atoms and can veto the programming.\n\n## The AI Mirror\n\nWe are building **Agentic AI** which clearly has Agency (it can book flights, write code).\nBut it strictly lacks Free Will. It is deterministic code.\n*   If we are just biological machines, then AI is exactly like us.\n*   If we have Free Will, then there is a \"Special Sauce\" in biology that silicon might never replicate.\n\n## FAQs\n\n*1. Does Physics allow Free Will?*\nClassically (Newton)? No.\nQuantumly? Maybe. Quantum mechanics introduces randomness. But \"Randomness\" (a dice roll) isn't the same as \"Freedom\" (a choice).\n\n*2. Why does it matter?*\n**Justice.** If you have no free will, you aren't \"guilty\" of a crime; you are just a broken machine. Our entire legal system assumes you *could* have chosen not to commit the crime.\n\n### Further Reading\n\n*   **Book:** *[Free Will](https://www.goodreads.com/book/show/13259270-free-will)* by Sam Harris (The case against it).\n*   **Video:** *[Michio Kaku: Why Physics Ends the Free Will Debate](https://www.youtube.com/watch?v=Jint5kjoy6I)*.\n"
                            },
                            {
                                "id": "body-theory",
                                "title": "Body Theory",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "PersonalIdentity",
                                    "PhilosophyOfMind",
                                    "ThoughtExperiments"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Body Theory\n\nThe Body Theory is like identifying a car purely by its physical chassis, regardless of what engine, seats, or stereo it has inside.\n\n**Body Theory** is the philosophical position that a person's identity is defined entirely by their physical body.\n\n![bodytheory](https://waitbutwhy.com/wp-content/uploads/2014/12/CH1-549x600.png)\n\nThink of it like owning a classic vintage car. If you keep the original metal frame and body of the car, you might feel it's the \"same\" car even if you slowly replace the spark plugs, the tires, or the battery. The Body Theory argues that human identity works the same way: you are your body. If your body is alive, you are alive. If your body is fundamentally changed or modified over time, it's still you because the physical substrate remains intact. \n\nHowever, this idea starts breaking down when we push the car analogy to the extreme. What if you replace the entire engine? What if you replace every single part of the car one by one? At what point does it stop being the original car? In human terms, if someone received a total brain transplant with another person, the Body Theory says they are still the original person, just with someone else's thoughts and memories; a conclusion that makes most people feel deeply uncomfortable.\n\n## Key Challenges to the Theory\n*   **Organ Transplants:** If you get a liver transplant, you're still you. But what if you transplant the brain?\n*   **Cellular Replacement:** Every few years, almost all the cells in your body are replaced by new ones. If you are just a physical body, but the physical materials of the body change completely, how are you still the same person?\n*   **The Teletransporter:** If a machine destroys your current body and builds an exact physical replica on Mars, the Body Theory implies the \"real you\" was destroyed and the Mars version is just a copy.\n\n## FAQs\n\n*1. Does DNA prove the Body Theory?*\nNo. Identical twins share the exact same DNA, but they are clearly two different people with independent identities. DNA is a blueprint, not the identity itself.\n\n*2. If I lose a limb, am I less \"me\"?*\nAccording to a strict interpretation of the Body Theory, your physical body has changed, so you are altered. But intuitively, most people feel that losing a fingernail, a kidney, or an arm doesn't reduce your core \"self.\" That intuition is what often leads people to look for alternative theories of identity.\n\n### Further Reading\n\n*   **Article:** *[What Makes You You?](https://waitbutwhy.com/2014/12/what-makes-you-you.html)* (An excellent and accessible breakdown of the thought experiments that poke holes in the Body Theory).\n"
                            },
                            {
                                "id": "brain-theory",
                                "title": "Brain Theory",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "PersonalIdentity",
                                    "PhilosophyOfMind",
                                    "ThoughtExperiments"
                                ],
                                "links": [
                                    "body-theory"
                                ],
                                "group": "philosophy",
                                "content": "# Brain Theory\n\nThe Brain Theory is like saying a computer is defined by its hard drive and CPU, no matter what shiny new monitor or keyboard you plug it into.\n\n**Brain Theory** is the philosophical view that what makes you \"you\" is your physical brain, and your identity goes wherever your physical brain goes.\n\nImagine taking the hard drive out of your old, beat-up laptop and plugging it into a brand new desktop computer. When you turn it on, all your files, your wallpaper, and your saved passwords are there. You'd probably say you kept your \"computer,\" you just gave it a new shell. The Brain Theory applies this to humans: your physical brain is the hard drive. If a mad scientist were to pull your brain out of your skull and plop it into the skull of a stranger, the resulting person would wake up with your memories, your personality, and your fears. \n\nAccording to the Brain Theory, that person *is* you. The old body you left behind isn't you anymore; it was just the monitor and keyboard you used to interact with the world. Wherever the physical tissue of the brain goes, your identity follows.\n\n## The split-brain dilemma\nWhile the Brain Theory feels more intuitive than the [[body-theory|Body Theory]], it creates a massive paradox when we look at brain separation:\n*   **Hemisphere Independence:** The human brain has a left and right hemisphere that can function semi-independently. In rare medical cases, people can survive with only half a brain.\n*   **The Twin Experiment:** If you gave half of your brain to save your dying identical twin, your twin would theoretically wake up with your exact personality, memories, and thoughts. \n*   **The Paradox:** Both people would claim to be \"you,\" but they occupy two different bodies. If identity lives purely in the physical brain, dividing the brain effectively duplicates the identity, completely breaking the concept of a singular \"self.\"\n\n## FAQs\n\n*1. Is a brain transplant just a body transplant?*\nYes! If the Brain Theory is correct, if you receive someone else's brain, you didn't get a new brain. *They* got a new body.\n\n*2. Why doesn't the Brain Theory explain everything?*\nBecause it can't handle duplication or data transfer. If we scan your brain and copy all the data onto a synthetic brain without moving the physical tissue, the new synthetic brain would act exactly like you. The Brain Theory fails to explain whether that exact copy is also \"you.\"\n\n### Further Reading\n\n*   **Article:** *[What Makes You You?](https://waitbutwhy.com/2014/12/what-makes-you-you.html)* (A deep dive into how changing your brain changes your identity).\n"
                            },
                            {
                                "id": "continuity-theory",
                                "title": "Continuity Theory",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "PersonalIdentity",
                                    "PhilosophyOfMind",
                                    "ShipOfTheseus"
                                ],
                                "links": [
                                    "body-theory",
                                    "ship-of-theseus"
                                ],
                                "group": "philosophy",
                                "content": "# Continuity Theory\n\nThe Continuity Theory says your identity is like an old wooden boat that has had every single plank replaced over the years; what makes it the \"same\" boat is the continuous story of its repairs, not the original wood.\n\n**Psychological Continuity Theory** proposes that personal identity is not tied strictly to a specific physical body or a static set of memories, but rather to an unbroken, continuous chain of consciousness and overlapping states of existence over time.\n\nImagine looking at a picture of yourself when you were six years old. You might point and say, \"That's me!\" But think about it: physically, you share almost no body cells with that six-year-old. You don't have the same personality, you don't care about the same things, and you remember almost nothing of what they were thinking. In almost every metric; body, brain, and data; you are a completely different person. The Continuity Theory states that the only reason you are the \"same\" person is because you are connected by a slow, continuous chain of overlapping memories and physical characteristics. \n\nAt age 30, you remember being 25. At 25, you remembered being 15. At 15, you remembered being six. You are merely the newest version in a single, unbroken timeline of updates. Under this theory, identity isn't a physical object you can locate; it's a progression, a story, or a specific theme.\n\n## The [[ship-of-theseus|Ship of Theseus]] Analogy\n*   **Constant Change:** If you replace every single cell in your body slowly over a decade (like replacing a boat's wooden planks one at a time), your continuity remains unbroken. You survive the process. \n*   **Sudden Disruption:** However, if a teletransporter destroys your body and reassembles it instantly on Mars (like instantly swapping all the boat's planks at once), the continuity is completely shattered. Even if the data and atoms are perfect, the unbroken string of existence was snapped. Thus, the original you died.\n*   **The \"Soul\":** Continuity Theory begins to sound a lot like what many people loosely define as the \"soul\"; the intangible thread tying a person's existence together as the physical vessel constantly degrades and rebuilds itself.\n\n## FAQs\n\n*1. Does going to sleep break continuity?*\nPhilosophically, this is a fun (and terrifying) debate. Most agree continuity isn't broken by sleep because the physical brain maintains its background systemic functions and neurological states, keeping the timeline intact. \n\n*2. Why is continuity better than the [[body-theory|Body Theory]]?*\nBecause the Body Theory falls apart during gradual cell replacement. Continuity Theory admits that your physical body completely changes over the course of decades, yet still elegantly explains why you retain the same identity through an unbroken narrative.\n\n### Further Reading\n\n*   **Article:** *[What Makes You You?](https://waitbutwhy.com/2014/12/what-makes-you-you.html)* (An accessible philosophical breakdown of Derek Parfit and continuity).\n*   **Concept:** *The [[ship-of-theseus|Ship of Theseus]]* (The classic Greek paradox that inspired the modern continuity theory of identity).\n"
                            },
                            {
                                "id": "data-theory",
                                "title": "Data Theory",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "PersonalIdentity",
                                    "MemoryTheory",
                                    "JohnLocke"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Data Theory\n\nThe Data Theory is like saying that your identity is a software program, and it doesn't matter if it's running on a Mac, a PC, or the cloud; it's the exact same software.\n\n**Data Theory** (also known as the Memory Theory) suggests that your personal identity is entirely defined by the data inside your brain; your memories, personality traits, beliefs, and experiences; regardless of the physical hardware holding it.\n\nThink about playing a video game. It doesn't matter if you drop your console in a lake, as long as your save files were backed up to the cloud. You can buy a brand new console, download the data, and resume playing exactly where you left off. The Data Theory says human identity works the same way. Proposed in early forms by philosopher John Locke, it suggests that you are your memories. \n\nIf a mad scientist hooked a computer up to your brain, copied all your mental data, wiped your brain completely clean, and uploaded all your data into the brain of a complete stranger, that stranger would wake up feeling exactly like you. According to the Data Theory, the stranger's body is now *you*, because wherever your data goes, your identity goes. Your original physical body, now wiped clean, would effectively be an empty vessel.\n\n## Breaking the Data Theory\n*   **The Torture Test:** If your brain data is moved to a new body, and the mad scientist asks which body you want him to randomly torture, which do you pick? If you still feel instinctual fear for your original physical body, you secretly don't believe your identity fully transferred with the data.\n*   **The Duplication Problem:** The cloud backup analogy creates a nightmare for identity. If data can be transferred, it can be copied. If a machine beams your brain data into 50 different synthetic bodies, are there now 50 versions of \"you\"? \n*   **The Original's Fate:** If your data is copied to endless recipients, but your original physical body is destroyed in the process, most people intuitively feel that the original person died, and the others are merely clones holding their memories.\n\n## FAQs\n\n*1. Are \"I\" and \"my memories\" the exact same thing?*\nUnder the Data Theory, yes. Locke argued that personal identity extends only as far back as your own consciousness and memory can reach.\n\n*2. If I get amnesia, do I become a different person?*\nStrictly speaking under this theory, yes. If your memories are permanently wiped out, the original \"you\" has been deleted, and whoever wakes up in that body is a blank slate starting a new identity.\n\n### Further Reading\n\n*   **Article:** *[What Makes You You?](https://waitbutwhy.com/2014/12/what-makes-you-you.html)* (Discusses the flaws in thinking of yourself purely as downloadable information).\n*   **Paper:** *[An Essay Concerning Human Understanding](https://en.wikipedia.org/wiki/An_Essay_Concerning_Human_Understanding#Content)* by John Locke (The foundational text introducing the memory theory of personal identity).\n"
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
                                "links": [],
                                "group": "philosophy",
                                "content": "# Law of Attraction\n\nLike attracts like.\n\nThe **Law of Attraction** is the belief that positive or negative thoughts bring positive or negative experiences into a person's life.\n**\"Thoughts become Things.\"**\n\nIt suggests that if you focus intensely on a goal (visualize it, feel it as if it's already true), the Universe will conspire to make it happen.\n\n## Is it Magic or Psychology?\n\n*   **The Mystical View:** Your thoughts send out energy vibrations that magnetically attract similar energy from the Universe.\n*   **The Psychological View (Confirmation-Bias):** If you decide to buy a Red Tesla, you suddenly see Red Teslas everywhere. Because you are focused on \"Success,\" your brain subconsciously notices opportunities for success that you would have ignored before.\n\n## FAQs\n\n*1. Does it work?*\n*   **Scientifically:** There is no proof that thoughts change physical reality directly (telekinesis).\n*   **Practically:** Positive thinking and visualization *do* improve confidence and performance, which leads to better results.\n\n*2. What is the danger?*\n**Victim Blaming.** If you believe \"You attract what you think,\" it implies that if someone gets sick or poor, they \"attracted\" it with bad thoughts, which is cruel and untrue.\n\n### Further Reading\n\n*   **Book:** *[The Secret](https://www.thesecret.tv/)* by Rhonda Byrne (The most famous book on this).\n*   **Analysis:** *[The Psychology of the Law of Attraction](https://www.psychologytoday.com/us/blog/the-blame-game/201309/the-truth-about-the-law-attraction)*\n"
                            },
                            {
                                "id": "split-brain-identity",
                                "title": "Split-Brain Experiment",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "PersonalIdentity",
                                    "PhilosophyOfMind",
                                    "ThoughtExperiments"
                                ],
                                "links": [
                                    "body-theory",
                                    "brain-theory",
                                    "data-theory"
                                ],
                                "group": "philosophy",
                                "content": "# Split-Brain Experiment\n\nThe Split-Brain Identity problem is like asking what happens to a computer program if you suddenly split its CPU and hard drive in half and start running both halves on two separate, independent machines simultaneously.\n\n**The Split-Brain Experiment** in philosophy is a thought experiment challenging personal identity by asking what happens to the \"self\" if the two hemispheres of a human brain are separated and placed into two different bodies.\n\nWe know from medical science that the left and right hemispheres of the human brain can function somewhat independently. In extreme medical treatments for severe epilepsy, patients have had the connection between their hemispheres severed, or even had half of their brain completely removed, yet they still survive and maintain their consciousness. The philosophical experiment pushes this reality further: what if you had an identical twin with a fatal brain defect, and you decided to save them by giving them half of your brain?\n\nWhen the surgery is done, both you and your twin's body contain half of your original brain. DNA is identical, and since the brain data is duplicated, your twin wakes up with your exact personality, thoughts, and memories. The paradox is this: *why did you wake up in your own body?* Since both bodies contain your brain, why isn't your consciousness split between the two? If the standard [[brain-theory|Brain Theory]] says your identity follows your brain, how can it exist in two physical locations, behaving as two completely disconnected people?\n\n## Breaking Identity Frameworks\n*   **Fails the [[brain-theory|Brain Theory]]:** If identity lives in the physical brain, splitting the brain creates a paradox where two independent people have equal claim to being the original identity.\n*   **Fails the [[data-theory|Data Theory]]:** Because the \"data\" of your personality now exists in two places, the original unified \"self\" ceases to exist as a single entity.\n*   **Supports the [[body-theory|Body Theory]]:** The reason you likely feel you would wake up in your own body and view the other half as a clone is because *your original body* remains intact. This gives a massive philosophical boost to the idea that your physical body grounds your identity.\n\n## FAQs\n\n*1. Can a person really survive with half a brain?*\nYes. A procedure called a hemispherectomy removes or disables one half of the brain. The remaining half is highly adaptable (neuroplasticity) and can often learn to take over the missing half's functions, allowing the person to live a relatively normal life.\n\n*2. If both twins have my memories, do they share a mind?*\nNo. Even though they start from the exact same save point, the split creates two separate streams of consciousness. The moment they wake up, they start forming different memories and become two distinct people who just happen to share the exact same past.\n\n### Further Reading\n\n*   **Article:** *[What Makes You You?](https://waitbutwhy.com/2014/12/what-makes-you-you.html)* (Discusses the existential nightmare of the twin brain-split experiment).\n"
                            },
                            {
                                "id": "teletransportation-paradox",
                                "title": "Teletransportation Paradox",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "PersonalIdentity",
                                    "ThoughtExperiments",
                                    "DerekParfit"
                                ],
                                "links": [
                                    "data-theory"
                                ],
                                "group": "philosophy",
                                "content": "# Teletransportation Paradox\n\nThe Teletransportation Paradox asks if a perfect 3D copy of you stepping out of a teleporter is actually traveling, or if you died and a clone just took over your life.\n\n![teleport1](https://waitbutwhy.com/wp-content/uploads/2014/12/cube-stand-555x600.png)\n![teleport2](https://waitbutwhy.com/wp-content/uploads/2014/12/cube-beam-555x600.png)\n![teleport3](https://waitbutwhy.com/wp-content/uploads/2014/12/cubicle-broken.png)\n\n**The Teletransportation Paradox** is a philosophical thought experiment conceived by Derek Parfit that tests whether consciousness and identity survive the destruction and perfect reconstruction of a physical body.\n\nImagine it's the year 2700, and you commute from Boston to London using a teletransporter. You step inside, the machine perfectly scans your molecular structure to capture your data, safely disintegrates your bodily cells, and beams the data to London. A machine in London instantly reconstructs an exact physical replica of you from scratch using the blueprint. The \"you\" in London walks out with the same memories, the same personality, and even a paper cut on your thumb from the morning. \n\nAccording to the experiment, everyone treats the teleporter as a safe way to travel. But what happens if the machine breaks? The scanner reads your data and beams it to London, creating the exact replica, but the *destroyer* in Boston malfunctions. You're still standing in Boston, completely fine. Suddenly, you wouldn't let the company kill you just to \"complete the process.\" But if you refuse to die, you've admitted that the person in London isn't really you; it's a replica. And if it's a replica when the machine is broken, hasn't it always been a replica? Have you simply been dying and being replaced by clones every single day?\n\n## Key Questions Unlocked\n*   **The Problem of the Replicas:** If your exact data can be replicated once in London, it can be replicated 50 times in 50 different cities. They can't all be \"you.\"\n*   **The Illusion of Survival:** The paradox highlights that there is a massive difference between \"your replica surviving\" and \"you surviving.\" If your replica takes over your job, talks to your friends, and pays your bills, the rest of the world thinks you survived. But your original consciousness is still dead. \n*   **A Strike against Data Theory:** This experiment is a major problem for the [[data-theory|Data Theory]] (or Memory Theory). It proves that even if your data is perfectly preserved, if your continuity is broken, you intuitively feel that your actual self has ended.\n\n## FAQs\n\n*1. Would the teletransported clone know they were a clone?*\nNo. The replica would wake up with a perfect, unbroken memory of stepping into the teleporter in Boston and appearing in London. They would confidently believe they were the original you.\n\n*2. Does this mean teleportation is impossible?*\nIn sci-fi, teleportation is often treated as simple travel. But in real-world physics and philosophy, any technology that involves destroying the original structure to make a copy creates a massive paradox about the \"soul\" or continuous consciousness of the traveler.\n\n### Further Reading\n\n*   **Article:** *[What Makes You You?](https://waitbutwhy.com/2014/12/what-makes-you-you.html)* (A fun, clear exploration of this paradox).\n*   **Book:** *[Reasons and Persons](https://www.stafforini.com/docs/Parfit%20-%20Reasons%20and%20persons.pdf)* by Derek Parfit (The original philosophical text that introduces the teletransporter experiment).\n"
                            }
                        ]
                    },
                    {
                        "id": "logical-fallacies",
                        "title": "Logical Fallacies",
                        "icon": "fas fa-shapes",
                        "desc": "Flaws in reasoning that invalidate arguments",
                        "view": "list",
                        "group": "philosophy",
                        "children": [
                            {
                                "id": "ad-hominem",
                                "title": "Ad Hominem",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Latin"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Ad Hominem\n\nShooting the Messenger.\n\n**Ad Hominem** (Latin for \"To the Person\") is a fallacy where you attack the *character* or *circumstances* of the person making the argument, rather than the argument itself.\n\nThink of it like **A Broken Clock**.\n*   **The Reality:** Even a broken clock is right twice a day. Even a rude, hypocritical, or unlikable person can make a mathematically correct statement.\n*   **The Fallacy:** \"You can't believe the clock is showing 12:00 because the clock is ugly and rusty.\" The rust has nothing to do with the time.\n\n## How it Works\n\n1.  **Avoidance:** You can't think of a logical counter-argument.\n2.  **Deflection:** You shift focus to the opponent's traits (appearance, past actions, intelligence). \"You're wrong about the tax code because you cheated on your wife.\"\n3.  **Invalidation:** The audience assumes bad person = bad idea.\n\n## FAQs\n\n*1. Is an insult always an Ad Hominem?*\nNo.\n*   **Insult:** \"You are an idiot.\" (Rude, but not a fallacy if it's just an exclamation).\n*   **Ad Hominem:** \"You are wrong *because* you are an idiot.\" (Fallacy: linking the claim's validity to the insult).\n\n*2. When is character relevant?*\nIf the argument *is* about their character. In a trial for fraud, the defendant's honesty *is* the topic. But in a debate about climate change, the scientist's tax returns are usually irrelevant to the data.\n\n### Further Reading\n\n*   **Article:** *[Tu Quoque](https://en.wikipedia.org/wiki/Tu_quoque)* (The \"You too!\" variant).\n"
                            },
                            {
                                "id": "appeal-to-authority",
                                "title": "Appeal to Authority",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Status"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Appeal to Authority\n\nBecause Dad Said So.\n\n**The Appeal to Authority** (*Argumentum ad Verecundiam*) is a fallacy where you claim something is true *solely* because an \"expert\" or famous person said it, without offering any actual evidence.\n\nThink of it like **A White Lab Coat**.\n*   **The Reality:** Wearing a lab coat doesn't make you right. Even Einstein made math errors. Truth comes from data, not costume.\n*   **The Fallacy:** \"This toothpaste is the best because Dr. Oz says so.\" (Is Dr. Oz a dentist? Does he have data? Or is he just famous?)\n\n## How it Works\n\n1.  **Status over Facts:** \"Professor X says the earth is flat.\"\n2.  **Irrelevant Expertise:** \"My mechanic says vaccines are dangerous.\" (Mechanics are experts on cars, not immunology).\n3.  **Blind Trust:** It shortcuts the need for proof.\n\n## FAQs\n\n*1. Is citing experts bad?*\nNo! It is *good* to listen to experts. The fallacy is assuming they are *infallible*.\n*   **Valid:** \"99% of climate scientists agree the earth is warming based on this data.\" (Consensus + Data).\n*   **Fallacy:** \"It's true *because* Newton said it.\" (Newton also believed in Alchemy).\n\n*2. Why do we do it?*\nIt's a cognitive shortcut. We evolved to trust tribal elders (Heuristics). Verifying everything ourselves is exhausting.\n\n### Further Reading\n\n*   **Concept:** *[halo-effect|The Halo Effect]* (Trusting pretty/famous people more than we should).\n"
                            },
                            {
                                "id": "circular-reasoning",
                                "title": "Circular Reasoning",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Tautology"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Circular Reasoning\n\nThe Snake Eating Its Tail.\n\n**Circular Reasoning** (Begging the Question) is a fallacy where the conclusion is hidden in the premise. You aren't actually proving anything; you are just repeating your assumption in different words.\n\nThink of it like **A Dictionary Loop**.\n*   **The Definition:** \"A Law is something that is legal.\"\n*   **The Fallacy:** \"Why is it illegal? Because it's against the Law.\"\n*   **The Problem:** You haven't explained *why*. You've just run in a circle.\n\n## How it Works\n\n1.  **Premise = Conclusion:** \"The Bible is the word of God.\"\n2.  **Proof:** \"Because it says so in the Bible.\"\n3.  **Result:** To believe the proof, you must already believe the conclusion. No new information is added.\n\n## FAQs\n\n*1. Is it obvious?*\nRarely. It's usually hidden in complex language. \"We must cut spending (Conclusion) because fiscal austerity is necessary (Premise).\" Fiscal austerity *means* cutting spending. It sounds smart, but it's a loop.\n\n*2. What is 'Begging the Question'?*\nIt's the formal name for this. It doesn't mean \"Raising the question.\" It means \"Assuming the answer.\"\n\n### Further Reading\n\n*   **Concept:** *[Tautology](https://en.wikipedia.org/wiki/Tautology_(logic))* (Existing just to be true).\n"
                            },
                            {
                                "id": "false-dilemma",
                                "title": "False Dilemma",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "BlackAndWhite"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# False Dilemma\n\nBlack and White.\n\n**The False Dilemma** (or False Dichotomy) is a fallacy where a complex situation is presented as having only two options; usually \"My Way\" or \"The Apocalypse\"; when in reality there are many middle grounds.\n\nThink of it like **A Light Switch vs. A Dimmer**.\n*   **The Fallacy:** \"The room is either completely dark or blindingly bright!\" (A Switch).\n*   **The Reality:** Most rooms have dimmer switches. You can have 50% brightness, 20% brightness, or candle light.\n\n## How it Works\n\n1.  **Over-Simplification:** \"You are either with us, or against us.\"\n2.  **Forced Choice:** This trap forces the opponent to defend an extreme position they don't actually hold, or accept your extreme position.\n3.  **Ignoring Nuance:** It erases compromise, context, and third options.\n\n## FAQs\n\n*1. Is it always a fallacy?*\nNo. Sometimes there *are* only two options. \"You are either pregnant or you are not.\" There is no \"kind of\" pregnant. But in politics and ethics, binary choices are rare.\n\n*2. Why is it used?*\nIt creates urgency and fear. Salespeople use it (\"Buy now or lose this deal forever!\") to bypass critical thinking.\n\n"
                            },
                            {
                                "id": "middle-ground",
                                "title": "Middle Ground Fallacy",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate"
                                ],
                                "links": [
                                    "false-dilemma"
                                ],
                                "group": "philosophy",
                                "content": "# Middle Ground Fallacy\n\nThe Truth is in the Middle.\n\n**The Middle Ground Fallacy** (Argumentum ad Temperantiam) is the massive assumption that because two opposing views exist, the correct or honest position *must* be the compromise between them.\n\nThink of it like **Drinking Poison**.\n*   **Person A:** \"You should drink a gallon of cyanide.\"\n*   **Person B:** \"You should drink zero cyanide.\"\n*   **The Fallacy:** \"We should compromise and drink half a gallon of cyanide.\"\n*   **The Reality:** Sometimes one side is 100% right and the other is 100% wrong.\n\n## How it Works\n\n1.  **Extremes:** Position A (Sky is Blue) vs Position B (Sky is Yellow).\n2.  **Compromise:** Position C (Sky is Green).\n3.  **Error:** The sky is actually Blue. The presence of a \"Yellow\" movement doesn't make the sky Green.\n\n## FAQs\n\n*1. Isn't compromise good?*\nSocially, yes. Stick to your guns on *facts*, but compromise on *actions*. \"We agree the house is on fire (Fact), but we compromise on using a hose vs a bucket (Action).\"\n\n### Further Reading\n\n*   **Opposite:** *[[false-dilemma|False Dilemma]]* (Assuming there is *no* middle ground).\n"
                            },
                            {
                                "id": "post-hoc",
                                "title": "Post Hoc Fallacy",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Statistics",
                                    "Latin"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Post Hoc Fallacy\n\nThe Rain Dance.\n\n**Post Hoc Ergo Propter Hoc** (Latin for \"After this, therefore because of this\") is the assumption that because Event B followed Event A, Event A *caused* Event B.\n\nThink of it like **The Rain Dance**.\n*   **The Event:** I did a dance. Then it rained.\n*   **The Fallacy:** \"My dance caused the rain.\"\n*   **The Reality:** Correlation is not Causation. The rain was coming anyway.\n\n## How it Works\n\n1.  **Observation:** \"I wore my lucky socks.\" -> \"My team won the game.\"\n2.  **Assumption:** \"My socks made them win.\"\n3.  **Error:** Ignoring coincidence or other factors (the team practiced hard).\n\n## FAQs\n\n*1. Correlation vs. Causation?*\nThis is the core of the fallacy.\n*   **Correlation:** Ice cream sales and murder rates go up at the same time (Summer).\n*   **Causation:** Ice cream does not cause murder. Heat causes both.\n\n*2. Why do we believe it?*\nOur brains are pattern-matching machines. We evolved to survive by finding causes (\"I ate berry -> I got sick\"). We are prone to \"False Positives\" (Superstitions).\n\n### Further Reading\n\n*   **Concept:** *[Spurious Correlations](https://www.tylervigen.com/spurious-correlations)* (Funny graphs showing things like \"Cheese consumption correlates with strangulation by bedsheets\").\n"
                            },
                            {
                                "id": "red-herring",
                                "title": "Red Herring",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Distraction"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Red Herring\n\nLook, a Squirrel!\n\n**A Red Herring** is a fallacy where someone introduces an irrelevant topic to divert attention from the original issue.\n\nThink of it like **Training Dogs**.\n*   **The Origin:** Escaped prisoners would supposedly drag a strong-smelling fish (Red Herring) across their trail to confuse the tracking dogs.\n*   **The Tactic:** \"You asked me about the budget deficit? Let me tell you about how much I love the flag.\" The flag is the fish. It smells strong (emotional), but it leads nowhere.\n\n## How it Works\n\n1.  **Topic A:** \"Did you steal the money?\"\n2.  **Topic B:** \"I have worked at this company for 20 years and I love my coworkers!\" (Irrelevant).\n3.  **Confusion:** The accuser starts arguing about the coworker love instead of the theft.\n\n## FAQs\n\n*1. Is it the same as Straw Man?*\nNo.\n*   **Straw Man:** Twists your *actual* argument.\n*   **Red Herring:** Changes the subject entirely.\n\n### Further Reading\n\n*   **Concept:** *[Whataboutism](https://en.wikipedia.org/wiki/Whataboutism)* (A specific type of Red Herring: \"But what about *them*?\").\n"
                            },
                            {
                                "id": "slippery-slope",
                                "title": "Slippery Slope",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Fear"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Slippery Slope\n\nThe Snowball Effect.\n\n**The Slippery Slope** is a fallacy where you argue that a relatively small first step will inevitably lead to a chain of related events culminating in some significant (usually negative) effect.\n\nThink of it like **A Slide**.\n*   **The Fallacy:** \"If I let you have a cookie today, you'll eat cookies every day, get fat, lose your job, and die alone.\"\n*   **The Reality:** Eating one cookie rarely leads to dying alone. There are many stops on the slide where you can get off.\n\n## How it Works\n\n1.  **Step A:** \"We should ban automatic assault rifles.\"\n2.  **The Leap:** \"If we do that, next they'll ban handguns, then kitchen knives, and soon we'll be living in a tyranny!\"\n3.  **The Fear:** Focuses on the terrifying *End Result* rather than the actual merit of *Step A*.\n\n## FAQs\n\n*1. Are slopes never slippery?*\nSometimes they are. \"If I take heroin once, I might get addicted.\" That is a valid risk.\n*   **Valid Argument:** Proves the causal link between A and B roughly exists.\n*   **Fallacy:** Assumes the link is *inevitable* without evidence, usually to fearmonger.\n\n### Further Reading\n\n*   **Concept:** *[Gateway Drug Theory](https://en.wikipedia.org/wiki/Gateway_drug_effect)* (A classic real-world application of this logic, widely debated).\n"
                            },
                            {
                                "id": "steel-manning",
                                "title": "Steel-Manning",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Philosophy",
                                    "MentalModels"
                                ],
                                "links": [
                                    "straw-man"
                                ],
                                "group": "philosophy",
                                "content": "# Steel-Manning\n\nIroning out the Truth.\n\n**Steel-Manning** is the opposite of the [[straw-man|Straw Man Fallacy]]. It is the practice of addressing the *strongest possible version* of your opponent's argument, even if they didn't articulate it well themselves.\n\nThink of it like **Training with a Heavy Weight**.\n*   **Straw Man:** You fight a weak opponent (a scarecrow) to look strong. You gain nothing.\n*   **Steel Man:** You fight the strongest opponent (a steel robot). If you win, you *know* you are right. If you lose, you learn something.\n\n## How it Works\n\n1.  **Listen:** Hear their argument.\n2.  **Improve:** \"If I understand you correctly, you're saying X. And to make that even stronger, you could also argue Y.\"\n3.  **Engage:** \"Now that we have the best version of this idea, here is why I still disagree.\"\n\n## Why do it?\n\n*   **Truth-Seeking:** It removes ego. You aren't trying to \"win\" a debate; you are trying to find the best answer.\n*   **Persuasion:** People are more likely to listen to you if they feel you truly understand them.\n\n### Further Reading\n\n*   **Contra:** *[[straw-man|Straw Man Fallacy]]* (The common, lazy alternative).\n"
                            },
                            {
                                "id": "straw-man",
                                "title": "Straw Man Fallacy",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Philosophy"
                                ],
                                "links": [
                                    "steel-manning"
                                ],
                                "group": "philosophy",
                                "content": "# Straw Man Fallacy\n\nFighting a Scarecrow.\n\n**The Straw Man Fallacy** prevents honest debate by replacing your opponent's actual (strong) argument with a distorted, exaggerated, or weak version (the \"Straw Man\") that is easier to defeat.\n\nThink of it like **Fighting a Scarecrow**.\n*   **The Reality:** Your opponent is a skilled knight (their actual argument).\n*   **The Fallacy:** Instead of fighting the knight, you build a scarecrow out of hay, dress it in the knight's armor, and easily knock it over. You claim victory, but you haven't actually touched the knight.\n\n## How it Works\n\n1.  **Distort:** Take \"I think we should fund schools more\" and twist it into \"My opponent wants to bankrupt the country by throwing money at broken systems!\"\n2.  **Attack:** Viciously attack the idea of \"bankrupting the country.\"\n3.  **Claim Victory:** Pretend you have defeated the original argument about funding schools.\n\n## FAQs\n\n*1. Is it lying?*\nNot always intentional. Sometimes people genuinely misunderstand an argument and attack their *misconception* of it. However, in politics, it is usually a deliberate tactic.\n\n*2. How do I counter it?*\n\"[[steel-manning|Steel-Manning]].\" Ignore the scarecrow. Calmly restate your *actual* argument, or correct their distortion explicitly: \"I didn't say we should bankrupt the country; I said we should reallocate 1% of the budget.\"\n\n### Further Reading\n\n*   **Concept:** *[Steel-Manning](https://en.wikipedia.org/wiki/Steel_manning)* (The opposite: attacking the *strongest* version of an argument).\n"
                            },
                            {
                                "id": "tautology",
                                "title": "Tautology",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Rhetoric"
                                ],
                                "links": [
                                    "circular-reasoning"
                                ],
                                "group": "philosophy",
                                "content": "# Tautology\n\nThe ATM Machine.\n\n**A Tautology** is a statement that is true by necessity or by virtue of its logical form. In rhetoric, it often appears as a redundant statement that adds no new information, similar to [[circular-reasoning|Circular Reasoning]].\n\nThink of it like **The ATM Machine**.\n*   **The Phrase:** \"ATM Machine\" (Automated Teller Machine Machine). The word \"Machine\" is already in \"ATM\".\n*   **The Logic:** \"It is what it is.\" \"The unwashed are those who generally remain unclean.\"\n\n## How it Works\n\n1.  **The Loop:** A = A.\n2.  **The Filler:** It sounds profound (\"Boys will be boys\") but essentially says \"Boys will be [what boys are].\" It defines a thing by itself.\n3.  **The Trap:** In logic, a tautology is *always true* (A or not A), but in debate, it is *useless* because it proves nothing about the real world.\n\n## FAQs\n\n*1. Is it a fallacy?*\nNot strictu sensu. A tautology is logically *valid* (true). But using it as an *argument* is fallacious because it is empty. \"We will win because we are the winners.\"\n\n### Further Reading\n\n*   **Related:** *[[circular-reasoning|Circular Reasoning]]* (Using the conclusion as the premise).\n"
                            },
                            {
                                "id": "tu-quoque",
                                "title": "Tu Quoque",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Latin"
                                ],
                                "links": [
                                    "whataboutism",
                                    "ad-hominem"
                                ],
                                "group": "philosophy",
                                "content": "# Tu Quoque\n\nYou Too!\n\n**Tu Quoque** (Latin for \"You also\") is a fallacy where you reject an argument because the person making it is a hypocrite, rather than addressing the argument itself. It is a specific type of [[ad-hominem|Ad Hominem]].\n\nThink of it like **The Smoking Doctor**.\n*   **The Scenario:** A doctor smokes a pack a day. He tells you: \"Smoking is bad for your lungs, here is the data.\"\n*   **The Fallacy:** \"You smoke! So your data must be fake.\"\n*   **The Reality:** The doctor is a hypocrite, but his data is still correct.\n\n## How it Works\n\n1.  **Accusation:** \"You cheated on your taxes!\"\n2.  **Reflection:** \"Well, you cheated on yours last year!\" (Tu Quoque).\n3.  **Result:** Now we are arguing about you, not me. The original accusation is ignored.\n\n## FAQs\n\n*1. Does hypocrisy matter?*\nFor *trust*, yes. For *logic*, no. A thief can correctly say \"Stealing is illegal.\"\n\n### Further Reading\n\n*   **Parent:** *[[ad-hominem|Ad Hominem]]* (Attacking the person).\n*   **Variant:** *[[whataboutism|Whataboutism]]* (Distracting with other people's faults).\n"
                            },
                            {
                                "id": "whataboutism",
                                "title": "Whataboutism",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Logic",
                                    "Debate",
                                    "Propaganda"
                                ],
                                "links": [
                                    "red-herring",
                                    "tu-quoque"
                                ],
                                "group": "philosophy",
                                "content": "# Whataboutism\n\nBut What About Them?\n\n**Whataboutism** is a tactic used to deflect criticism by accusing the critic of the same thing (or something worse), without addressing the original criticism. It is a specific, weaponized version of *[[tu-quoque|Tu Quoque]]*.\n\nThink of it like **The Speeding Ticket**.\n*   **The Cop:** \"I pulled you over for speeding.\"\n*   **The Driver:** \"But what about that guy? He was driving faster than me!\"\n*   **The Reality:** That guy's speed doesn't make your speed legal. You still broke the law.\n\n## How it Works\n\n1.  **Attack:** \"Country A violates human rights.\"\n2.  **Deflection:** \"What about Country B? They do it too!\"\n3.  **Effect:** The conversation shifts to Country B. Country A's crimes are forgotten/normalized.\n\n## FAQs\n\n*1. Is it a fallacy?*\nYes, because it is a *Red Herring*. It changes the subject. It doesn't prove innocence; it just proves shared guilt.\n\n*2. Why is it effective?*\nIt appeals to our sense of fairness. We hate hypocrisy. But hypocrisy doesn't change facts.\n\n### Further Reading\n\n*   **Parent:** *[[red-herring|Red Herring]]* (The broad category of distraction).\n"
                            }
                        ]
                    },
                    {
                        "id": "paradoxes",
                        "title": "Paradoxes",
                        "icon": "fas fa-question-circle",
                        "desc": "Logical contradictions and thought experiments",
                        "view": "list",
                        "group": "philosophy",
                        "children": [
                            {
                                "id": "bootstrap-paradox",
                                "title": "Bootstrap Paradox",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "TimeTravel",
                                    "Causality"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Bootstrap Paradox\n\nWho wrote the book?\n\n**The Bootstrap Paradox** (or Causal Loop) is a theoretical paradox in time travel where an object or piece of information exists without ever having been created.\n\nImagine you adore Beethoven. You build a time machine and travel back to meet him, but you find he doesn't exist. Desperate to preserve the music, you write down all his symphonies (which you memorized) and publish them under his name.\n**The Conflict:** You copied the music from him (in the future). He copied the music from you (in the past). *Who actually wrote the music?* It has no origin. It just exists in an infinite loop.\n\n## The Problem with \"Origin\"\nIn our linear understanding of time, everything must have a **cause**. A painting needs a painter; a book needs an author.\nIn a bootstrap loop, the object is \"self-created\" (it pulls itself up by its own bootstraps). It violates the Law of Causality (Cause $\\rightarrow$ Effect).\n\n## FAQs\n\n*1. Is this the same as the Grandfather Paradox?*\nNo. The Grandfather Paradox is a **destructive** loop (you stop yourself from existing). The Bootstrap Paradox is a **constructive** loop (the loop is stable and self-reinforcing).\n\n*2. Where did the name come from?*\nFrom the phrase \"pulling yourself up by your bootstraps\" and popularized by the Robert Heinlein story *By His Bootstraps*.\n\n### Further Reading\n\n*   **Video:** *[The Bootstrap Paradox Explained](https://www.youtube.com/watch?v=d3zTmWw9FCw)* (Doctor Who example).\n"
                            },
                            {
                                "id": "chinese-room",
                                "title": "The Chinese Room",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "AI",
                                    "Consciousness"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# The Chinese Room\n\nSimulation is not understanding.\n\n**The Chinese Room** is a thought experiment that argues a computer executing a program cannot be shown to have a \"mind\" or \"understanding,\" regardless of how intelligently it behaves.\n\nImagine a man taking a test. He is locked in a room with a giant book of rules. People slide questions written in Chinese under the door. He doesn't speak a word of Chinese. However, the rulebook says: *\"If you see shape X, write shape Y.\"*\nHe follows the rules and slides the answers back out. To the people outside, he speaks fluent Chinese. To him, he is just drawing meaningless squiggles.\n\n## The Connection to AI\n*   **The Man** = The CPU.\n*   **The Rulebook** = The Code/Algorithm.\n*   **The Argument:** Just like the man, a computer manipulates symbols (0s and 1s) based on syntax (grammar/rules) but has zero grasp of semantics (meaning). It simulates thinking, but it isn't thinking.\n\n## FAQs\n\n*1. Does this mean AI can never be conscious?*\nIt suggests that *current* digital computers (Turing Machines) cannot be conscious just by running software. To have consciousness, a machine might need something more than just symbol manipulation; perhaps a biological or physical ground for experience.\n\n*2. But if the output is perfect, does it matter?*\nFor **utility** (using ChatGPT to write email), no. For **ethics** (does ChatGPT have rights?), yes. If it's just a rulebook, you can delete it. If it understands, deleting it might be murder.\n\n### Further Reading\n\n*   **Article:** *[Minds, Brains, and Programs](https://Behavioral-and-Brain-Sciences.org)* by John Searle (The original 1980 paper).\n"
                            },
                            {
                                "id": "fermi-paradox",
                                "title": "Fermi Paradox",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Science",
                                    "Space",
                                    "Probability"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Fermi Paradox\n\nThe silence is deafening.\n\n**The Fermi Paradox** is the contradiction between the high statistical probability that extraterrestrial civilizations exist and the complete lack of evidence for them.\n\nThe universe is old (13.8 billion years) and huge ($10^{22}$ stars). Even if life is one-in-a-billion rare, there should be millions of civilizations. Some should be millions of years older than us, capable of colonizing the galaxy.\nSo, as physicist Enrico Fermi famously asked: **\"Where is everybody?\"**\n\n## The Great Filter\nOne proposed solution is that there is a barrier to life's development that is extremely hard to cross.\n*   **Scenario A (Optimistic):** We are special. The filter is *behind* us (e.g., jump from single-cell to multi-cell life is rare). We made it!\n*   **Scenario B (Pessimistic):** We are doomed. The filter is *ahead* of us. Advanced civilizations inevitably destroy themselves (nukes, AI, climate) before they can spread.\n\n## FAQs\n\n*1. Maybe they are hiding?*\nThis is the \"Dark Forest\" theory. It suggests the universe is like a dark forest full of hunters. If you shout (send radio signals), you get eaten. Therefore, every smart civilization stays quiet. We are the only idiots shouting \"Hello!\"\n\n*2. Are we just too early?*\nPossibly. The universe was too hot/chaotic for life for billions of years. We might be the \"Elder Race\"; the first ones to wake up.\n\n### Further Reading\n\n*   **Video:** *[The Fermi Paradox: Where Are All The Aliens?](https://www.youtube.com/watch?v=sNhhvQGsMEc)* (Kurzgesagt).\n"
                            },
                            {
                                "id": "grandfather-paradox",
                                "title": "Grandfather Paradox",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "TimeTravel",
                                    "Causality"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Grandfather Paradox\n\nThe error message of the universe.\n\n**The Grandfather Paradox** is a logical contradiction in time travel: if you travel back in time and change the past, you might eliminate the cause of your own travel.\n\nThe classic scenario: You build a time machine, go back to 1920, and kill your grandfather before he meets your grandmother.\n*   **Result A:** You are never born.\n*   **Result B:** If you are never born, you never built the time machine.\n*   **Result C:** If you never built the machine, you didn't kill him.\n*   **Result D:** So you *are* born, and you kill him. (Loop).\n\n## Proposed Solutions\nPhysicists and Philosophers have tried to \"patch\" this bug:\n\n1.  **Multiverse Theory:** You didn't kill *your* grandfather; you created a branched timeline where a version of him died. You can never return to your original future.\n2.  **Novikov Self-Consistency Principle:** The universe effectively \"autocorrects.\" The gun will jam, you'll miss, or you'll accidentally *cause* them to meet. You cannot change what has already happened.\n\n## FAQs\n\n*1. Is time travel actually possible?*\nForward? Yes (Relativity says go fast, time slows down). Backward? Maybe not. Some physicists argue that this paradox proves backward time travel is impossible because the universe cannot process a logic error.\n\n### Further Reading\n\n*   **Video:** *[The Grandfather Paradox Explained](https://www.youtube.com/watch?v=XayNKY944lY)*.\n"
                            },
                            {
                                "id": "paradox-of-tolerance",
                                "title": "Paradox of Tolerance",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Society",
                                    "KarlPopper"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Paradox of Tolerance\n\nShould a tolerant society tolerate intolerance?\n\n**The Paradox of Tolerance** states that if a society is tolerant without limit, its ability to be tolerant will eventually be seized or destroyed by the intolerant.\n\nImagine a garden where you allow *everything* to grow because you are a \"tolerant\" gardener. Eventually, aggressive weeds (intolerance) will eagerly choke out the flowers (tolerance). To keep the garden tolerant of flowers, you must be *intolerant* of the weeds.\nPopper argued that to maintain a tolerant society, the society must be intolerant of intolerance.\n\n## The Fine Print\nPopper didn't say \"ban all ideas you dislike.\"\nHe specified: *Do not suppress intolerant philosophies as long as we can counter them by rational argument and keep them in check by public opinion.*\nSuppression is the last resort, used only when a group refuses to debate and answers arguments with fists or guns.\n\n## FAQs\n\n*1. Is this a license to be mean?*\nNo. It is a preservation instinct for democracy. It distinguishes between \"disagreement\" (I think your tax plan is wrong) and \"existential threat\" (I think you shouldn't exist).\n\n*2. Who decides what is \"intolerant\"?*\nThat is the hard part. The paradox warns us of the danger, but it doesn't give us a clear ruler to measure it. It's a constant balancing act for free speech.\n\n### Further Reading\n\n*   **Book:** *[The Open Society and Its Enemies](https://en.wikipedia.org/wiki/The_Open_Society_and_Its_Enemies)* by Karl Popper (Where this concept originated).\n"
                            },
                            {
                                "id": "ship-of-theseus",
                                "title": "Ship of Theseus",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Philosophy",
                                    "Paradox",
                                    "Identity"
                                ],
                                "links": [],
                                "group": "philosophy",
                                "content": "# Ship of Theseus\n\nThe grandfather's axe problem: same handle, new head.\n\n**The Ship of Theseus** is a thought experiment that asks: if an object has had all of its components replaced, does it remain the same object?\n\nImagine a famous wooden ship docked in a museum. Over 100 years, every rotting plank, mast, and nail is replaced with a new one. Is it still the \"Ship of Theseus\"?\nNow, imagine someone took all the *old* rotting planks and built a second ship in the backyard. Which one is the \"real\" ship? The one with the history (the new parts), or the one with the original matter (the rotting parts)?\n\n## The Core Conflict\nIt challenges our definition of **Identity**:\n*   **Materialism:** You are your atoms. (Verdict: Rotting ship is real).\n*   **Functionalism/Continuity:** You are your pattern/history. (Verdict: Museum ship is real).\n\n## FAQs\n\n*1. Does this apply to humans?*\nYes. Your cells regenerate constantly. You are not made of the same \"stuff\" you were 10 years ago. Are you the same person? Using the \"Continuity\" theory, yes, because the *pattern* of you survived the transition.\n\n*2. Why does it matter?*\nIt affects **Teletransportation** theory (Star Trek). If a transporter disassembles your atoms and reassembles them on Mars with new atoms, did you move, or did you die and a clone take your place?\n\n### Further Reading\n\n*   **Article:** *[Identity Over Time](https://plato.stanford.edu/entries/identity-time/)* (Stanford Encyclopedia of Philosophy).\n"
                            }
                        ]
                    },
                    {
                        "id": "philosophical-frameworks",
                        "title": "Frameworks & Schools",
                        "icon": "fas fa-university",
                        "desc": "Philosophical schools, ethical systems, and political frameworks",
                        "view": "list",
                        "group": "philosophy",
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
                                "links": [
                                    "nihilism",
                                    "existentialism"
                                ],
                                "group": "philosophy",
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
                                "links": [],
                                "group": "philosophy",
                                "content": "# Cynicism\n\nLiving like a dog to be truly free.\n\nModern usage suggests a \"Cynic\" is someone who assumes people are selfish.\n**Ancient Cynicism** was a philosophy of rejecting all social conventions (money, fame, power, manners) to live in accordance with nature.\n\nThe word comes from *Kyon*, meaning \"Dog.\" The goal was to be as shameless, happy, and free as a stray dog.\n\n## The Diogenes Story\n\nDiogenes (the most famous Cynic) lived in a ceramic tub on the streets of Athens.\n*   He owned nothing but a wooden bowl (until he saw a boy drink from his hands, then smashed the bowl because it was \"unnecessary baggage\").\n*   When Alexander the Great (the most powerful man in the world) asked if he could do anything for Diogenes, he replied: *\"Yes, move. You are blocking my sunlight.\"*\n\n## FAQs\n\n*1. What is the core lesson?*\nHappiness comes from **Self-Sufficiency**. If you need nothing (no big house, no applause, no fancy clothes), nothing can be taken away from you. You are invincible.\n\n*2. Is it practical today?*\nYou don't have to live in a tub. But you can practice it by:\n*   Not caring what people think of you.\n*   Realizing you don't *need* the new iPhone to be happy.\n*   Living simply.\n\n### Further Reading\n\n*   **Article:** *[The Life of Diogenes](https://www.britannica.com/biography/Diogenes-of-Sinope)*\n*   **Video:** *[Diogenes, the Publicly-Defecating Philosopher](https://youtu.be/-A3IlRATIsI)*\n"
                            },
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
                                "links": [
                                    "utilitarianism"
                                ],
                                "group": "philosophy",
                                "content": "# Deontology\n\nThe rules are the rules, no matter what.\n\n**Deontology** (from Greek *deon*, meaning \"duty\") is an ethical theory that says morality is about following rules. Actions are inherently \"Right\" or \"Wrong\" regardless of their consequences.\n\nIt is the opposite of **[[utilitarianism|Utilitarianism]]** (which cares only about the result).\n\n## The Categorical Imperative\n\nImmanuel Kant (the father of Deontology) proposed this rule: **\"Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.\"**\n\n*   *Translation:* Before you do something, ask: \"Would it be okay if *everyone* did this?\"\n    *   **Lying?** If everyone lied, words would mean nothing. So, you must never lie.\n    *   **Stealing?** If everyone stole, private property wouldn't exist. So, you must never steal.\n\n## FAQs\n\n*1. What if lying saves a life?*\n*   **Utilitarian:** Lie! (1 life saved > 0 lives saved).\n*   **Strict Deontologist:** Don't lie. Lying is wrong. If the person dies, that is the murderer's fault, not yours. You did your duty. (This is the \"Murderer at the door\" problem).\n\n*2. Why use it?*\nIt provides clear moral certainty. You don't have to calculate complex math about \"future happiness\" every time you want to act. You just follow the Rules.\n\n### Further Reading\n\n*   **Video:** *[Kant & Categorical Imperatives](https://www.youtube.com/watch?v=8bIys6JoEDw)*\n*   **Article:** *[Deontological Ethics (Stanford)](https://plato.stanford.edu/entries/ethics-deontological/)*\n"
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
                                "links": [],
                                "group": "philosophy",
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
                                "links": [
                                    "utilitarianism"
                                ],
                                "group": "philosophy",
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
                                "links": [],
                                "group": "philosophy",
                                "content": "# Machiavellianism\n\nIt is better to be feared than loved.\n\n**Machiavellianism** is a political philosophy based on the writings of Niccol\u00f2 Machiavelli (specifically *The Prince*). It focuses on the harsh, pragmatic reality of gaining and keeping power.\n\nIt suggests that a ruler should do whatever is necessary (lie, cheat, steal, kill) to maintain stability and authority. \"The ends justify the means.\"\n\n## The Fox and the Lion\n\nMachiavelli said a leader must be both:\n*   **The Fox:** Cunning and able to spot traps (Manipulation/Diplomacy).\n*   **The Lion:** Strong and fierce to scare off wolves (Force/War).\n\nBeing just a Lion makes you dumb; being just a Fox makes you weak.\n\n## FAQs\n\n*1. Is it \"Evil\"?*\nMachiavelli didn't think he was teaching evil. He thought he was teaching **Results**. He argued that if a \"Good\" King is too nice and gets overthrown, his people suffer in the chaos. Therefore, a \"Bad\" King who acts ruthlessly to keep peace is actually better for the state.\n\n*2. Is it a personality trait?*\nYes. In psychology, it is one of the \"Dark Triad\" traits (along with Narcissism and Psychopathy). High-Mach people are manipulative, cold, and strategic.\n\n### Further Reading\n\n*   **Book:** *[The Prince](https://www.gutenberg.org/files/1232/1232-h/1232-h.htm)* by Niccol\u00f2 Machiavelli.\n*   **Analysis:** *[The School of Life: Machiavelli](https://www.youtube.com/watch?v=AOXl0Ll_t9s)*\n"
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
                                "links": [],
                                "group": "philosophy",
                                "content": "# Nihilism\n\nThe game has no rules and no winner.\n\n**Nihilism** (from Latin *nihil*, meaning \"nothing\") is the rejection of all religious and moral principles, often in the belief that life is meaningless.\nIt suggests there is no objective Right or Wrong, no God, and no \"Grand Plan.\"\n\n## The Crisis\n\nNietzsche famously said, **\"God is dead.\"**\nHe wasn't celebrating; he was warning us. He meant that the old structure giving us meaning (Religion) was collapsing, and without it, humans would fall into despair (Nihilism).\n\n## Types\n\n*   **Existential Nihilism:** Life has no intrinsic value.\n*   **Moral Nihilism:** Nothing is truly \"Evil\" or \"Good\"; those are just human opinions.\n*   **Epistemological Nihilism:** We cannot truly \"know\" anything for sure.\n\n## FAQs\n\n*1. Is it just for edgy teenagers?*\nIt is often a phase, but it's also a serious philosophical starting point. Once you accept there are no pre-set rules, you are forced to ask: \"Okay, then what do I want to do?\"\n\n*2. How do you beat it?*\n*   **Through Art (Nietzsche):** Create beauty.\n*   **Through Absurdism (Camus):** Rebel and enjoy the ride.\n*   **Through Existentialism (Sartre):** Build your own meaning.\n\n### Further Reading\n\n*   **Video:** *[Nietzsche and Nihilism](https://www.youtube.com/watch?v=wOHH3nS0kYk)*\n*   **Article:** *[Internet Encyclopedia of Philosophy: Nihilism](https://iep.utm.edu/nihilism/)*\n"
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
                                "links": [
                                    "machiavellianism"
                                ],
                                "group": "philosophy",
                                "content": "# Pragmatism\n\nIf it works, it's true.\n\nMost philosophy asks: \"Is this theory inherently true?\"\n**Pragmatism** asks: \"Does believing this theory actually help us?\"\n\nIt treats beliefs like tools. A hammer isn't \"True\" or \"False\"; it is \"Useful\" or \"Useless.\"\n\n## The Cash Value of Truth\n\nWilliam James (a father of Pragmatism) said we should look for the **\"Cash Value\"** of an idea.\n*   *Example:* \"Do we have Free Will?\"\n  **Metaphysics:** Let's debate for 2,000 years.\n  **Pragmatism:** If I believe I have free will, and it makes me act better, then \"Free Will\" is true *enough* for me. If I believe I am a robot, I get lazy. Therefore, acting *as if* I have free will is the \"True\" choice.\n\n## FAQs\n\n*1. Is it just \"The ends justify the means\"?*\nNo. That is [[machiavellianism|Machiavellianism]].\nPragmatism is about testing Truth by its consequences. If a belief makes you miserable and passive, it is a \"bad\" belief, even if it seems logically sound.\n\n*2. Is it anti-science?*\nNo, Science *is* pragmatic! Scientists don't say \"Gravity is the absolute final truth.\" They say \"Gravity is the best model we have right now that allows us to build bridges that don't fall down.\"\n\n### Further Reading\n\n*   **Article:** *[Pragmatism: The Philosophy of Action](https://plato.stanford.edu/entries/pragmatism/)*\n*   **Video:** *[What is Pragmatism?](https://www.youtube.com/watch?v=RPlfC808EPU)*\n"
                            },
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
                                "links": [],
                                "group": "philosophy",
                                "content": "# Socialism\n\nThe community owns the factory.\n\n**Socialism** is a political and economic theory where the means of production (factories, farms, offices) are owned and regulated by the community as a whole, rather than by private individuals.\n\nImagine a lemonade stand.\n*   **Capitalism:** One kid pays for the lemons, owns the stand, and keeps the profit. The other kids work for a wage.\n*   **Socialism:** All the kids pool their money for lemons, work together, and vote on how to split the profit.\n\n## Core Principles\n\n1.  **Public Ownership:** Essential services (Healthcare, Energy, Transport) should not be for profit.\n2.  **Redistribution:** Wealth should be spread to ensure everyone has a baseline quality of life (Safety Net).\n3.  **Cooperation > Competition:** Society thrives when we work together, not when we fight for resources.\n\n## FAQs\n\n*1. Is it the same as Communism?*\nNo.\n*   **Socialism:** You can still own personal property (your phone, your house). The *economy* is socialized.\n*   **Communism:** A stateless, classless, moneyless society where *everything* is shared. (Socialism is often seen as the bridge to Communism).\n\n*2. Does it work?*\nIt's a spectrum.\n*   **Democratic Socialism (Nordic Model):** High taxes, free healthcare, strong unions, but still has a capitalist market (IKEA, Volvo). Works very well.\n*   **Authoritarian Socialism (Soviet Union):** Government controls everything. Historically failed due to corruption and inefficiency.\n\n### Further Reading\n\n*   **Book:** *[The Communist Manifesto](https://www.gutenberg.org/ebooks/61)* (The original theory by Marx & Engels).\n*   **Concept:** *[Democratic Socialism vs. Social Democracy](https://www.masterclass.com/articles/democratic-socialism-vs-social-democracy)*.\n"
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
                                "links": [],
                                "group": "philosophy",
                                "content": "# Stoicism\n\nYou cannot control the storm, only the ship.\n\n**Stoicism** is a user's manual for the mind, written by Greek slaves and Roman Emperors. Its core goal is **Eudaimonia** (Flourishing) by focusing only on what you can control and accepting what you cannot.\n\n## The Dichotomy of Control\n\nDraw a line in the sand.\n*   **In Your Control (Internal):** Your thoughts, your actions, your character, your reactions.\n*   **Not In Your Control (External):** The weather, traffic, what people think of you, the past, the future.\n\nIf you tie your happiness to things *outside* your control (like \"I hope it doesn't rain\"), you are a slave to fortune. If you tie it to things *inside* your control (like \"I will bring an umbrella\"), you are invincible.\n\n## FAQs\n\n*1. Is it about having no emotions?*\nNo. (That is lowercase \"s\" stoicism).\nCapital \"S\" **Stoicism** is not about suppressing emotion; it's about not being *enslaved* by it. You can feel grief, but you shouldn't let it destroy your reason.\n\n*2. Who are the big three?*\n*   **Marcus Aurelius:** The Emperor. Wrote \"Meditations\" (notes to himself on how to be a good ruler).\n*   **Seneca:** The Statesman. Wrote letters on how to manage time and anger.\n*   **Epictetus:** The Slave. Taught that freedom is a mental state.\n\n### Further Reading\n\n*   **Book:** *[Meditations](https://www.goodreads.com/book/show/30659.Meditations)* by Marcus Aurelius.\n*   **Website:** *[Daily Stoic](https://dailystoic.com/)* (Great modern intro).\n"
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
                                "links": [
                                    "deontology"
                                ],
                                "group": "philosophy",
                                "content": "# Utilitarianism\n\nThe greatest good for the greatest number.\n\n**Utilitarianism** is an ethical theory that says: The \"Right\" thing to do is whatever maximizes happiness and minimizes suffering for the most people.\n\nIt treats morality like a math equation. Intentions don't matter; rules don't matter. Only the **Consequences** (the result) matter.\n\n## The Trolley Problem\n\nThis is the classic test for Utilitarianism.\n*   A train is about to kill **5 people**.\n*   You can pull a lever to switch tracks, where it will only kill **1 person**.\n*   **Utilitarian Answer:** Pull the lever. 1 death is better than 5 deaths. (Math).\n*   **Non-Utilitarian ([[deontology|Deontology]]) Answer:** Do not pull. Killing an innocent person is wrong, regardless of the outcome.\n\n## FAQs\n\n*1. Is it perfect?*\nNo. The flaw is the **\"Minority Rights\"** problem.\nIf killing one healthy person and harvesting their organs could save 5 dying patients, strict Utilitarianism might say \"Do it\" (1 death saves 5). But almost everyone agrees that murdering an innocent person for parts is wrong, even if the math works out.\n\n*2. Who started it?*\n*   **Jeremy Bentham:** The founder. \"Nature has placed mankind under the governance of two sovereign masters, pain and pleasure.\"\n*   **John Stuart Mill:** Refined it. He argued that \"Qualitative\" pleasures (poetry, friendship) are better than \"Quantitative\" pleasures (eating, drinking).\n\n### Further Reading\n\n*   **Video:** *[Justice: What's The Right Thing To Do? (Harvard)](https://www.youtube.com/watch?v=kBdfcR-8hEY)*\n*   **Article:** *[Utilitarianism Explained](https://ethics.org.au/ethics-explainer-utilitarianism/)*\n"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "psychology",
                "title": "Psychology",
                "icon": "fas fa-brain",
                "desc": "Cognitive biases and mental models",
                "view": "shelf",
                "group": "psychology",
                "children": [
                    {
                        "id": "cognitive-biases",
                        "title": "Cognitive Biases",
                        "icon": "fas fa-glasses",
                        "desc": "Systematic patterns of deviation from norm or rationality in judgment.",
                        "view": "list",
                        "group": "psychology",
                        "children": [
                            {
                                "id": "1-too-much-info",
                                "title": "Problem 1: Too Much Info",
                                "icon": "fas fa-filter",
                                "desc": "We can't see everything, so we filter aggressively.",
                                "view": "list",
                                "group": "psychology",
                                "children": [
                                    {
                                        "id": "anchoring-bias",
                                        "title": "Anchoring Bias",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Negotiation",
                                            "Marketing"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Anchoring Bias\n\nThe Sticky Price Tag.\n\n![Anchoring Bias](https://images.prismic.io/thedecisionlab/ac7d00b4-1c09-4c47-97f3-72d7bf8c922d_anchoring-effect-bias.jpeg?auto=compress,format&rect=0,1,2387,1667&w=2388&h=1668)\n\n**Anchoring Bias** is the cognitive tendency to rely too heavily on the first piece of information offered (the \"anchor\") when making decisions.\n\nImagine walking into a luxury store. You see a bag for $5,000. \"Insane!\" you think. Then you see a smaller bag for $1,200. \"Ooh, that's a steal!\"\nIs $1,200 a good price for a bag? Probably not. But because your brain was \"anchored\" to the $5,000 price, the $1,200 feels cheap by comparison. The first number you see sets the stage for everything that follows.\n\n## Key Examples\n\n*   **Salary Negotiation:** The first number spoken usually dictates the final range. If you ask for $100k, the negotiation happens around $100k. If you ask for $60k, you'll never get to $100k.\n*   **Sales:** \"Was $100, Now $50!\" The $100 is a fake anchor designed to make the $50 feel like a win.\n\n## FAQs\n\n*1. Does it work even if the number is random?*\nYes. Studies show that if you ask people to write down the last two digits of their social security number, and then bid on a bottle of wine, people with higher SSN numbers bid higher. The brain clings to *any* available number when it's unsure.\n\n*2. How do I avoid it?*\nDo your research *before* you enter the room. If you know the car is worth $20k, the dealer's $30k sticker price won't anchor you because you brought your own anchor.\n\n### Further Reading\n\n*   **Concept:** *[Anchoring and Adjustment](https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/anchoring-heuristic/)*.\n*   **Study:** *[The Effect of Anchoring in Negotiation](https://www.pon.harvard.edu/daily/negotiation-skills-daily/what-is-anchoring-in-negotiation/)* (Harvard Law School).\n"
                                    },
                                    {
                                        "id": "availability-heuristic",
                                        "title": "Availability Heuristic",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Media",
                                            "RiskAssessment"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Availability Heuristic\n\nThe \"Shark Attack\" Syndrome.\n\n![Availability Heuristic](https://images.prismic.io/thedecisionlab/cce9c879-5faa-46cb-a685-4542362fc572_availability-heuristic-the-decision-lab.png?auto=compress,format)\n\n**The Availability Heuristic** is a mental shortcut where we judge the likelihood of an event based on how easily we can recall similar examples.\n\nIf you ask someone, \"What is more likely to kill you: A shark or a falling coconut?\" most people intuitively scream \"SHARK!\" Why? because you've seen the movie *Jaws*. You recall catchy news headlines about shark attacks. You have *zero* vivid memories of coconut deaths.\nYour brain assumes: **\"If I can remember it easily, it must happen often.\"**\n\n![Availability Heuristic](https://images.prismic.io/thedecisionlab/Z3163JbqstJ99JWC_AvailabilityHeuristic.png?auto=format%2Ccompress&rect=1%2C0%2C510%2C268&w=2000&h=1050)\n\n## How it Works\n\nYour brain uses \"Ease of Recall\" as a proxy for \"Frequency.\"\n*   **Vivid events** (plane crashes, kidnapping, winning the lottery) stick in memory.\n*   **Boring events** (car crashes, heart disease, losing the lottery) fade away.\nResult: We are terrified of planes but text while driving.\n\n## FAQs\n\n*1. Is this why the news feels so scary?*\nYes. The news reports *anomalies* (rare, scary things). If you watch the news every day, your availability heuristic is hacked to believe the world is far more dangerous than it statistically is.\n\n*2. How does it affect business?*\nPerformance reviews. A manager might judge an employee's entire year based on a mistake they made *yesterday*, because that memory is the most \"available.\"\n\n### Further Reading\n\n*   **Article:** *[The Availability Heuristic](https://thedecisionlab.com/biases/availability-heuristic)* (The Decision Lab).\n*   **Book:** *[Thinking, Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)* by Daniel Kahneman.\n"
                                    },
                                    {
                                        "id": "confirmation-bias",
                                        "title": "Confirmation Bias",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "CriticalThinking",
                                            "DecisionMaking"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Confirmation Bias\n\nThe \"Yes Man\" inside your head.\n\n![Confirmation Bias](https://images.prismic.io/thedecisionlab/ZkdQKiol0Zci9Pcq_Untitled_Artwork35.png?auto=format,compress)\n\n**Confirmation Bias** is the tendency to search for, interpret, favor, and recall information in a way that confirms your pre-existing beliefs or hypotheses.\n\nImagine you are looking for a new car. You decide you want a red Toyota. Suddenly, you see red Toyotas *everywhere*. Did the factory just make more? No. Your brain is filtering out the blue Hondas and white Fords because they don't match your current \"mission.\" Confirmation Bias works the same way with ideas. If you believe \"Left-handed people are creative,\" you will notice every creative lefty and ignore every uncreative one.\n\n![Confirmation Bias](https://images.prismic.io/thedecisionlab/b2f27a87-b3da-487f-8359-adf46d4bd96a_Confirmation_Bias_TDL-1024x715.png?auto=compress,format)\n\n## How it Works\n\n1.  **Filtering:** You subconsciously ignore evidence that contradicts your view (Disconfirmation Bias).\n2.  **Interpretation:** You twist ambiguous evidence to support your view. (e.g., \"He didn't text back because he's busy,\" not \"He's not interested,\" because you *want* to believe he likes you).\n3.  **Memory:** You remember the times you were right and forget the times you were wrong.\n\n## FAQs\n\n*1. Is it lying?*\nNo, it's not intentional deception. It's an efficiency mechanism. Your brain wants to save energy. Changing your mind requires re-wiring neural pathways (hard work). Keeping your current opinion requires doing nothing (easy).\n\n*2. How do I beat it?*\nActively look for the **disconfirming evidence**. Ask yourself: \"If I were wrong, what would I expect to see?\" Then look for *that*.\n\n### Further Reading\n\n*   **Book:** *[Thinking, Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)* by Daniel Kahneman.\n*   **Article:** *[The Mother of All Biases](https://fs.blog/confirmation-bias/)* (Farnam Street).\n"
                                    }
                                ]
                            },
                            {
                                "id": "2-not-enough-meaning",
                                "title": "Problem 2: Not Enough Meaning",
                                "icon": "fas fa-puzzle-piece",
                                "desc": "The world is confusing, so we fill in the gaps.",
                                "view": "list",
                                "group": "psychology",
                                "children": [
                                    {
                                        "id": "gamblers-fallacy",
                                        "title": "Gamblers Fallacy",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Investing",
                                            "Probability"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Gambler's Fallacy\n\nThe Coin Has No Memory.\n\n![Gambler's Fallacy](https://images.prismic.io/thedecisionlab/60997d5f-3a48-4c5a-bd63-a92178e122d0_Untitled_Artwork.jpeg?auto=compress,format)\n\n**The Gambler's Fallacy** is the mistaken belief that if something generally happens more frequently than normal during a given period, it will happen *less* frequently in the future (or vice versa).\n\nYou flip a coin. Heads. Heads. Heads. Heads. Heads.\nWhat's next? You scream \"Tails! It *has* to be Tails! It's due!\"\n**Wrong.** The probability is still 50/50. The coin doesn't know it just landed on Heads 5 times. It has no memory. You are inventing a \"balancing force\" in the universe that doesn't exist.\n\n![Gambler's Fallacy](https://images.prismic.io/thedecisionlab/Z1CGlZbqstJ98CUm_GamblersFallacy_Whyithappens.png?auto=format,compress)\n\n## Why it Happens\n\nHumans are obsessed with patterns. We expect small samples (10 coin flips) to look like the global average (50/50 distribution). When they don't, we assume the universe will \"correct\" itself immediately.\n\n## FAQs\n\n*1. Does this apply to the Stock Market?*\nBig time. Investors often sell a stock because \"it's gone up for 10 days straight, it *must* come down.\" While markets do correct, they don't do it just because they \"owe\" you a drop.\n\n*2. Is \"Regression to the Mean\" the same thing?*\nNo. Regression to the mean is a statistical fact: over time, extreme scores average out. Gambler's Fallacy is the *belief* that the next specific turn will be the correction.\n\n### Further Reading\n\n*   **Story:** *[The Monte Carlo Fallacy](https://www.investopedia.com/terms/g/gamblersfallacy.asp)* (In 1913, a roulette wheel hit black 26 times in a row. Gamblers lost millions betting on red).\n*   **Article:** *[Why We Think We're Due for a Win](https://thedecisionlab.com/biases/gamblers-fallacy)*.\n"
                                    },
                                    {
                                        "id": "halo-effect",
                                        "title": "Halo Effect",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Perception",
                                            "Leadership"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Halo Effect\n\nThe \"Angel Script.\"\n\n![Halo Effect](https://images.prismic.io/thedecisionlab/a42484a0-b8c7-461d-b822-39c356338142_HaloEffect.png?auto=compress,format)\n\n**The Halo Effect** is a cognitive bias where the impression of one positive trait influences your opinion of a person's other (unrelated) traits.\n\nIf you meet someone who is tall, good-looking, and well-dressed, your brain instantly assumes they are also smart, funny, and successful. You assume because they have *one* \"good\" quality (beauty), they must have *all* good qualities (a \"halo\"). Just like in a movie script: the Hero is beautiful *and* kind *and* brave.\n\n![Halo Effect](https://images.prismic.io/thedecisionlab/ZkdfWCol0Zci9PnX_Untitled_Artwork39.png?auto=format%2Ccompress&rect=80%2C585%2C598%2C837&w=500&h=700)\n\n## Why it Happens\n\nYour brain acts like a lazy autocomplete function.\n*   **Input:** \"He is attractive.\"\n*   **Autocomplete:** \"...therefore he is a good leader and a nice person.\"\nIt creates a consistent narrative because \"Beautiful but Evil\" is harder for the brain to process quickly than \"Beautiful and Good.\"\n\n## FAQs\n\n*1. Is the reverse true?*\nYes. That is the **Horn Effect**. If someone is messy or unattractive, you subconsciously assume they are also lazy or incompetent, even if they are a genius.\n\n*2. Where is this most dangerous?*\n**Hiring and Politics.** We often vote for or hire the person who \"looks the part\" (tall, deep voice) rather than the person with the best skills. Apple's Steve Jobs famously used his \"Reality Distortion Field\" (charisma) to make people believe impossible deadlines were possible.\n\n### Further Reading\n\n*   **Article:** *[The Halo Effect in Psychology](https://www.verywellmind.com/what-is-the-halo-effect-2795906)*.\n*   **Article:** *[The Halo Effect](https://thedecisionlab.com/biases/halo-effect)*."
                                    }
                                ]
                            },
                            {
                                "id": "3-need-to-act-fast",
                                "title": "Problem 3: Need To Act Fast",
                                "icon": "fas fa-running",
                                "desc": "We can't wait for certainty, so we jump to conclusions.",
                                "view": "list",
                                "group": "psychology",
                                "children": [
                                    {
                                        "id": "dunning-kruger",
                                        "title": "Dunning Kruger Effect",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Learning",
                                            "Competence"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Dunning-Kruger Effect\n\nMount Stupid.\n\n![Dunning-Kruger Effect](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dunning%E2%80%93Kruger_Effect_01.svg/1280px-Dunning%E2%80%93Kruger_Effect_01.svg.png?20250428155053)\n\n**The Dunning-Kruger Effect** is a cognitive bias where people with low ability at a task overestimate their ability.\n\nBasically: **Incompetent people are too incompetent to realize they are incompetent.**\nTo know you are bad at grammar, you need to know the rules of grammar. If you don't know the rules, you assume your emails are perfect.\n\n## The Curve (The Analogy)\n\n1.  **Mount Stupid:** You learn a little bit and think, \"I'm a genius! This is easy!\" (High Confidence, Low Competence).\n2.  **Valley of Despair:** You learn more and realize, \"Oh god, this is actually incredibly hard.\" (Low Confidence, Med Competence).\n3.  **Slope of Enlightenment:** You actually get good and your confidence slowly returns. (High Confidence, High Competence).\n\n## FAQs\n\n*1. Is it just for \"Stupid\" people?*\nNo! It hits smart people too. A brilliant programmer might think they can easily run a marketing campaign (\"How hard can writing ads be?\"). We are all Dunning-Kruger victims in fields we don't know.\n\n*2. How do I fix it?*\nAssume you know nothing. Seek feedback early. The only cure for the Dunning-Kruger effect is **Metacognition** (thinking about your own thinking).\n\n### Further Reading\n\n*   **Study:** *[Unskilled and Unaware of It](https://www.ncbi.nlm.nih.gov/pubmed/10626367)* (The original 1999 paper).\n*   **Video:** *[Why Incompetent People Think They Are Amazing](https://www.youtube.com/watch?v=pOLmD_WVY-E)* (TED-Ed).\n"
                                    },
                                    {
                                        "id": "fundamental-attribution-error",
                                        "title": "Fundamental Attribution Error",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Relationships",
                                            "Empathy"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Fundamental Attribution Error\n\nThe Bad Driver Analogy.\n\n![Fundamental Attribution Error](https://images.prismic.io/thedecisionlab/1d414500-fd4a-401c-a85b-00b6bb86081a_Untitled_Artwork-2.jpeg?auto=compress,format)\n\n**The Fundamental Attribution Error** is the tendency to believe that what people *do* reflects who they keeping *are*, while ignoring the situation they are in.\n\n*   **When someone cuts you off in traffic:** You scream, \"What a jerk!\" (You blame their **Personality**).\n*   **When YOU cut someone off:** You think, \"I'm sorry, I'm just late for a flight!\" (You blame the **Situation**).\nWe judge others by their character, but we judge ourselves by our circumstances.\n\n## The Equation\n\n*   **Their Behavior** = **Their Flaw** (Internal Attribution).\n*   **My Behavior** = **My Environment** (External Attribution).\n\n![Fundamental Attribution Error](https://images.prismic.io/thedecisionlab/Zxv4t4F3NbkBYDEQ_FundamentalAttributionError.png?auto=format,compress)\n\n## FAQs\n\n*1. Why do we do this?*\nBecause we can see *them*, but we can't see the *pressure* they are under. When you watch an actor trip, you see a clumsy person. You don't see the slippery floor because your eyes are focused on the person.\n\n*2. How does this help me?*\nIt is the secret to **Empathy**. Next time a coworker is rude, instead of thinking \"They are mean,\" try thinking \"They might be having a terrible day.\" It stops you from taking things personally and escalating conflicts.\n\n### Further Reading\n\n*   **Video:** *[Fundamental Attribution Error Explained](https://youtu.be/AdrDAik86rc)* (\nMcCombs School of Business).\n*   **Article:** *[Why We Judge Others Severely](https://fs.blog/fundamental-attribution-error/)* (Farnam Street).\n"
                                    },
                                    {
                                        "id": "sunk-cost-fallacy",
                                        "title": "Sunk Cost Fallacy",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Economics",
                                            "DecisionMaking"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Sunk Cost Fallacy\n\nThrowing Good Money After Bad.\n\n![Sunk Cost Fallacy](https://images.prismic.io/thedecisionlab/09b9c938-6bee-416b-8d91-f0c22560c5c9_Sunk-Cost-Fallacy-TDL-1024x715.jpeg?auto=compress,format)\n\n**The Sunk Cost Fallacy** is the tendency to continue an endeavor just because we have already invested money, effort, or time into it, even if the current costs outweigh the benefits.\n\n*   **The Movie Theater:** You paid $20 for a ticket. The movie is terrible. 30 minutes in, you are bored.\n    *   *Rational Choice:* Leave. The $20 is gone regardless. Why lose $20 AND 2 hours of time?\n    *   *Sunk Cost Choice:* \"I paid for it, so I have to get my money's worth.\" (So you suffer for 2 more hours).\n\n![Sunk Cost Fallacy](https://images.prismic.io/thedecisionlab/Zjj2wUMTzAJOCkvf_Untitled_Artwork323.jpg?auto=format,compress)\n\n## The Logic\n\nYour brain hates \"Loss.\" Admitting the money is gone feels like a loss. Continuing feels like you are \"saving\" the investment.\n**Rule:** Past costs (Sunk Costs) should *never* factor into future decisions. Only future costs and benefits matter.\n\n## FAQs\n\n*1. Does this apply to relationships?*\nYes. \"We've been together for 5 years, I can't break up now.\" If the relationship is bad, the 5 years are \"sunk.\" Staying another 5 years just means wasting 10 years total.\n\n*2. Why is it hard to quit?*\nBecause quitting looks like failure. Our egos are tied to our past decisions. We want to prove to ourselves (and others) that we made the right choice, even if the ship is sinking.\n\n### Further Reading\n\n*   **Article:** *[The Sunk Cost Fallacy](https://thedecisionlab.com/biases/the-sunk-cost-fallacy)* (The Decision Lab).\n*   **Video:** *[The Sunk Cost Fallacy: What is it and why does it happen?](https://youtu.be/AFPgxIJHxsE)*.\n"
                                    }
                                ]
                            },
                            {
                                "id": "4-what-should-we-remember",
                                "title": "Problem 4: What Should We Remember",
                                "icon": "fas fa-save",
                                "desc": "We space is limited, so we save only the highlights.",
                                "view": "list",
                                "group": "psychology",
                                "children": [
                                    {
                                        "id": "google-effect",
                                        "title": "Google Effect",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Memory",
                                            "Technology"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Google Effect\n\nDigital Amnesia.\n\n![Google Effect](https://images.prismic.io/thedecisionlab/Zk4wGCol0Zci9XYW_TheGoogleEffect.jpg?auto=format,compress)\n\n**The Google Effect** (or Digital Amnesia) is the tendency to forget information that can be found readily online by using Internet search engines.\n\nYour brain is an efficient hard drive manager. If it knows a file is backed up to the Cloud (Google), it deletes the local copy to save space.\n*   **Old Days:** You memorized phone numbers because you had to.\n*   **Now:** You don't know your best friend's number because your phone \"knows\" it for you.\n\n## The Trade-Off\n\nWe are becoming better at knowing **Where** to find information (Index Memory) and worse at knowing **What** the information is (Content Memory).\n*   *Pros:* We can access infinite knowledge.\n*   *Cons:* We are helpless without connection.\n\n## FAQs\n\n*1. Is it making us stupid?*\nDebatable. Some argue it frees up brain power for \"higher-level\" thinking (creativity, analysis) instead of rote memorization. Others argue that you can't think deeply about a subject if you don't have the facts stored in your head.\n\n*2. How do I fight it?*\nIf you want to remember something, **write it down by hand**. The physical act of writing signals to your brain: \"This is important, keep a local copy.\"\n\n### Further Reading\n\n*   **Study:** *[Google Effects on Memory](https://science.sciencemag.org/content/333/6043/776)* (The original Science paper).\n*   **Article:** *[The Google Effect](https://thedecisionlab.com/biases/google-effect)*.\n"
                                    },
                                    {
                                        "id": "peak-end-rule",
                                        "title": "Peak End Rule",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Psychology",
                                            "Memory",
                                            "UXDesign"
                                        ],
                                        "links": [],
                                        "group": "psychology",
                                        "content": "# Peak-End Rule\n\nThe Highlight Reel.\n\n**The Peak-End Rule** is the psychological heuristic where we judge an experience strictly by how it felt at its most intense point (the \"Peak\") and at its end (the \"End\"), rather than the average of the whole experience.\n\nImagine a 10-day vacation.\n*   **Scenario A:** 9 amazing days, but on Day 10 you lose your luggage.\n*   **Scenario B:** 3 good days, 6 okay days, and on Day 10 you get a free upgrade.\nYou will remember **Scenario B** as the \"better\" trip, even though Scenario A had more total happiness. Your brain ignores the duration; it only saves the snapshots of the Climax and the Finale.\n\n## Why it Happens\n\nMemory is expensive. Your brain doesn't record a video of your life; it keeps a scrapbook. It only has room for the emotional spikes and the most recent moment.\n\n## FAQs\n\n*1. How is this used against me?*\n**Disney World.** You wait in line for 2 hours (pain), spend 5 minutes on the ride (Peak), and buy a souvenir on the way out (End). You forget the 2 hours of sweating and remember it as \"Magical.\"\n\n*2. How can I use this?*\nIf you have a bad meeting or a bad date, try to crack a joke or give a compliment right at the **end**. The other person will remember the whole interaction much more fondly.\n\n### Further Reading\n\n*   **Concept:** *[Thinking, Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)* (Kahneman introduced this).\n*   **Article:** *[How the Peak-End Rule rules your life](https://www.nngroup.com/articles/peak-end-rule/)* (Nielsen Norman Group - UX Perspective).\n"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "science-overview",
                "title": "Science",
                "icon": "fas fa-dna",
                "desc": "Biology, Physics, and Chemistry",
                "view": "shelf",
                "group": "science",
                "children": [
                    {
                        "id": "biology",
                        "title": "Biology",
                        "icon": "fas fa-brain",
                        "desc": "The science of life",
                        "view": "list",
                        "group": "science",
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
                                "links": [],
                                "group": "science",
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
                                "links": [],
                                "group": "science",
                                "content": "# Epigenetics\n\n**Think of it like the \"Software\" that runs on your DNA \"Hardware.\"**\n\n**Epigenetics** is the study of biological mechanisms that switch genes on or off without altering the actual DNA sequence itself.\n\nIf your DNA is the rigid hardware (the unchangeable circuit board) of a computer, epigenetics is the operating system that decides which programs (genes) to run and which to ignore. You can't easily change your hardware, but your environment; stress, diet, sleep, chemicals; can change the software settings. This helps explain why identical twins (who have the exact same hardware) can develop completely different health issues as they age; their \"settings\" have drifted apart.\n\n## How it Works\n*   **Methylation (The Off Switch):** The body attaches small chemical tags (methyl groups) to specific parts of DNA. These act like \"Do Not Disturb\" signs, preventing that gene from being read.\n*   **Histone Modification (The Volume Knob):** DNA is wrapped around spools called histones. If the DNA is wrapped too tightly, the cell can't read it (volume down). If it's loose, the gene is active (volume up).\n\n## FAQs\n\n*1. Can I change my epigenetics?*\nYes! Unlike your DNA, which you're stuck with, your epigenetic markers are reversible. Improving your diet, exercising, and reducing stress can physically remove \"bad\" tags and add \"good\" ones, potentially lowering your risk of diseases like cancer or diabetes.\n\n*2. Do I pass this to my kids?*\nSurprisingly, yes. Some epigenetic tags can survive reproduction. This means extreme stress or famine experienced by a parent (or even grandparent) can leave a chemical \"scar\" on their genes that is passed down, potentially affecting the metabolism or stress response of their children.\n\n### Further Reading\n\n*   **Video:** *[The Epigenetics Revolution](https://www.youtube.com/watch?v=kp1bZEUgqVI)* (SciShow).\n*   **Article:** *[Epigenetics: It's not just genes that make us](https://www.bbc.com/news/health-29621689)* (BBC News).\n"
                            }
                        ]
                    },
                    {
                        "id": "methodology",
                        "title": "Methodology",
                        "icon": "fas fa-microscope",
                        "desc": "The scientific method and foundations",
                        "view": "list",
                        "group": "science",
                        "children": [
                            {
                                "id": "demarcation-problem",
                                "title": "Demarcation Problem",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "Logic"
                                ],
                                "links": [
                                    "scientific-consensus",
                                    "scientific-method",
                                    "falsifiability"
                                ],
                                "group": "science",
                                "content": "# Demarcation Problem\n\nDrawing the line in the sand.\n\nThe **Demarcation Problem** is the philosophical difficulty of distinguishing between **Science** (Astronomy, Chemistry) and **Non-Science/Pseudoscience** (Astrology, Alchemy).\n\nWhere exactly does one end and the other begin? It sounds easy, but there is no single agreed-upon rule that works 100% of the time.\n\n## Key Criteria Attempts\n\n1.  **[[falsifiability|Falsifiability]] (Popper):** If you can't test it, it's not science. (The Gold Standard).\n2.  **[[scientific-consensus|Consensus]]:** If most scientists agree, it's science. (Problem: Scientists used to agree on bad ideas).\n3.  **[[scientific-method|Method]]:** Does it use the Scientific Method? (Hypothesis -> Experiment -> Result).\n\n## FAQs\n\n*1. Why does it matter?*\nIt decides what gets taught in schools, what gets government funding, and what evidence is allowed in courtrooms. If we can't define science, we can't protect it from nonsense.\n\n*2. Is \"Non-Science\" bad?*\nNot necessarily. **Art**, **Philosophy**, and **Religion** are non-science, but they are valuable. **Pseudoscience** (fake science claiming to be real, like Phrenology) is the danger.\n\n### Further Reading\n\n*   **Article:** *[Stanford Encyclopedia: Science and Pseudo-Science](https://plato.stanford.edu/entries/pseudo-science/)*.\n*   **Video:** *[The Demarcation Problem Explained](https://www.youtube.com/watch?v=Prhi3_nF8rA)*.\n"
                            },
                            {
                                "id": "falsifiability",
                                "title": "Falsifiability",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "KarlPopper"
                                ],
                                "links": [],
                                "group": "science",
                                "content": "# Falsifiability\n\nThe ability to be proven wrong.\n\n**Falsifiability** is the defining characteristic of a scientific theory. It means that there must be a way to test the theory where it *could* fail.\nIf a theory explains *everything* no matter what happens, it explains *nothing*. It is not science; it is a belief system.\n\n## The Swan Analogy\n\n*   **Theory:** \"All swans are white.\"\n    *   **Is it Falsifiable?** Yes. All you need to do is find **one** black swan to prove it false.\n*   **Theory:** \"Ghosts exist, but they are invisible when you look for them.\"\n    *   **Is it Falsifiable?** No. There is no test you can run to prove they *don't* exist. Therefore, it is not science.\n\n## FAQs\n\n*1. Who came up with this?*\n**Karl Popper**. He noticed that Einstein's Physics made risky predictions (that could be wrong), while Freud's Psychology could explain any patient's behavior after the fact. He wanted to separate the two.\n\n*2. Does \"Falsifiable\" mean \"False\"?*\nNo! It means **\"Able to be proven false.\"**\n\"The Earth is round\" is falsifiable (we could go to space and check). It just happens to be true.\n\n### Further Reading\n\n*   **Book:** *[The Logic of Scientific Discovery](https://www.routledge.com/The-Logic-of-Scientific-Discovery/Popper/p/book/9780415278447)* by Karl Popper.\n*   **Video:** *[Karl Popper, Science, & Pseudoscience](https://www.youtube.com/watch?v=-X8Xfl0JdTQ)*.\n"
                            },
                            {
                                "id": "just-so-stories",
                                "title": "Just-So Stories",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "Evolution",
                                    "Criticism"
                                ],
                                "links": [
                                    "novel-prediction"
                                ],
                                "group": "science",
                                "content": "# Just-So Stories\n\nA story that fits perfectly because it was made backwards.\n\nA **Just-So Story** is a criticism (coined by Stephen Jay Gould) of scientific explanations that sound plausible but are untestable and purely speculative.\nThe name comes from Rudyard Kipling's children's book *Just So Stories* (e.g., \"How the Leopard Got His Spots\").\n\n## The Flaw\n\nIt is often used in **Evolutionary Psychology** to explain modern behavior by inventing a prehistoric reason for it.\n\n*   *Observation:* Men like blue.\n*   *Just-So Story:* \"Ah, well, prehistoric men had to look at the sky to predict rain, so they evolved to like blue.\"\n*   *Problem:* It sounds smart, but **how do you test it?** You can't. It's just a creative writing exercise. You could just as easily argue men like blue because berries are blue.\n\n## FAQs\n\n*1. Is all Evolutionary Psychology bad?*\nNo. But good science requires **[[novel-prediction|Novel Predictions]]**.\n*   **Just-So:** Explaining why we *already* act this way.\n*   **Science:** Predicting that if we act this way, we should also find *this specific gene* or *this specific fossil*.\n\n*2. How to spot one?*\nAsk: \"Is there any evidence for this besides the fact that it sounds logical?\" If the answer is No, it's a Just-So Story.\n\n### Further Reading\n\n*   **Book:** *[Just So Stories](https://www.gutenberg.org/ebooks/2876)* by Rudyard Kipling (The origin of the name).\n*   **Article:** *[Gould's Criticism of Sociobiology](https://link.springer.com/article/10.1007/s10739-018-9519-2)*.\n"
                            },
                            {
                                "id": "novel-prediction",
                                "title": "Novel Prediction",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "Evidence"
                                ],
                                "links": [],
                                "group": "science",
                                "content": "# Novel Prediction\n\nThe fortune teller who actually gets it right.\n\nA **Novel Prediction** is when a scientific theory predicts a phenomenon that **no one has ever seen before**, and it turns out to be true.\n\nIt is the strongest possible evidence for a theory. Explaining old data is easy (hindsight is 20/20). Predicting the unknown is hard.\n\n## The Halley's Comet Example\n\n*   **Old Science:** Comets are random angry gods.\n*   **Edmond Halley (Using Newton's Laws):** \"I predict this comet will return in exactly 76 years, on this specific date.\"\n*   **The Result:** It appeared exactly when he said. This proved Newton's physics wasn't just a good story; it was a map of reality.\n\n## The Einstein Example\n\nEinstein's General Relativity predicted that gravity bends light. No one had ever seen bent light.\nDuring a solar eclipse in 1919, Arthur Eddington looked at the stars behind the sun. They were shifted. Einstein was right. The world changed overnight.\n\n## FAQs\n\n*1. Why is it better than explaining known facts?*\nBecause you can't cheat.\nIf you know the answer ($\\pi$), you can easily invent a math formula to equal $\\pi$. But if you write a formula that predicts a number no one has ever measured, and *then* we measure it and you're right... that's magic.\n\n### Further Reading\n\n*   **Concept:** *[Predictive Power](https://en.wikipedia.org/wiki/Predictive_power)*.\n*   **Story:** *[The Eclipse That Made Einstein Famous](https://www.smithsonianmag.com/science-nature/eclipse-made-einstein-world-famous-180972140/)*.\n"
                            },
                            {
                                "id": "reasoning-types",
                                "title": "Reasoning (Deduction, Induction, Abduction)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Logic",
                                    "Thinking"
                                ],
                                "links": [],
                                "group": "science",
                                "content": "# Reasoning\n\nThe three engines of thought.\n\nThere are three main ways humans (and AI) move from \"what we know\" to \"what we think.\"\n\n## 1. Deduction (The Sniper)\nMoving from **General** to **Specific**.\nIf the premises are true, the conclusion **MUST** be true.\n*   *Rule:* All men are mortal.\n*   *Observation:* Socrates is a man.\n*   *Conclusion:* Therefore, Socrates is mortal. (100% Certainty).\n\n## 2. Induction (The Surveyor)\nMoving from **Specific** to **General**.\nLooking at patterns to form a rule. The conclusion is **Likely**, but not certain.\n*   *Observation:* The sun has risen every morning for history.\n*   *Conclusion:* Therefore, the sun will rise tomorrow. (High Probability, but not guaranteed. The sun could explode tonight).\n\n## 3. Abduction (The Detective)\nInference to the **Best Explanation**.\nLooking at a weird fact and guessing the most likely cause.\n*   *Observation:* The grass is wet.\n*   *Hypotheses:* It rained? The sprinklers turned on? A dog peed?\n*   *Conclusion:* It rained (because the street is also wet).\n\n## FAQs\n\n*1. Which does Science use?*\nAll of them.\n*   **Abduction** to invent a hypothesis.\n*   **Deduction** to predict what should happen if the hypothesis is true.\n*   **Induction** to verify it with data.\n\n*2. Which does AI use?*\nMachine Learning is a massive **Induction** engine. It looks at millions of specific cat photos to learn the general rule of \"What a cat looks like.\"\n\n### Further Reading\n\n*   **Article:** *[Deductive vs Inductive vs Abductive Reasoning](https://uregina.ca/~gingrich/319j1506.htm)*.\n*   **Video:** *[Sherlock Holmes uses Abduction, not Deduction](https://www.youtube.com/watch?v=1bDFZ31q0rE)*.\n"
                            },
                            {
                                "id": "scientific-consensus",
                                "title": "Scientific Consensus",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "PeerReview"
                                ],
                                "links": [],
                                "group": "science",
                                "content": "# Scientific Consensus\n\nThe Jury Verdict, not a Popularity Contest.\n\n**Scientific Consensus** is the collective judgment, position, and opinion of the community of scientists in a particular field of study.\n\nIt works like a massive, global jury in a courtroom that never closes. One scientist presenting a new idea is like a lawyer making an opening statement. It's interesting, but it's not a verdict. The \"verdict\" (consensus) only happens after thousands of other scientists (the jury) have examined the evidence, tried to tear it apart, repeated the experiments, and failed to prove it wrong. It represents the best available explanation we have right now, based on strict scrutiny, not just what people \"feel\" is true.\n\n## How It Forms\nConsensus is built on a pyramid of evidence, not just raising hands.\n\n*   **Hypothesis:** An idea is proposed.\n*   **Peer Review:** Other experts check the work for errors.\n*   **Replication:** Other labs do the same experiment to see if they get the same result.\n*   **Meta-Analysis:** Combining results from hundreds of studies to see the big picture.\n*   **Consensus:** When the evidence is so overwhelming that the community stops arguing *if* it's happening and starts studying *how* it works.\n\n## FAQs\n\n*1. Is the consensus always right?*\nNo. The scientific consensus has been wrong before (e.g., we used to think Earth was the center of the universe). However, it is the **most reliable** guide we have at any given moment because it requires the most amount of evidence to overturn. To beat the consensus, you don't need a YouTube video; you need better data.\n\n*2. Why do scientists disagree if there is a consensus?*\nConsensus usually exists on the \"Big Picture\" (e.g., \"The climate is warming\"), but scientists still argue about the details (e.g., \"Exactly how fast is it warming?\"). Disagreement on details makes the core consensus stronger, not weaker, because it shows the system of scrutiny is working.\n\n### Further Reading\n\n*   **Article:** *[Scientific Consensus: What It Is and Why It Matters](https://www.unionofconcernedscientists.org)* (Explains the weight of collective agreement).\n"
                            },
                            {
                                "id": "scientific-definitions",
                                "title": "Scientific Definitions (Fact, Theory, Hypothesis, Law)",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "Definition"
                                ],
                                "links": [
                                    "scientific-laws",
                                    "scientific-method",
                                    "falsifiability"
                                ],
                                "group": "science",
                                "content": "# Scientific Definitions\n\nLanguage matters, especially when debugging reality.\n\n**Scientific Definitions** are precise labels for different levels of knowledge, often misused in daily conversation.\n\nIn everyday life, \"theory\" means a hunch (\"I have a theory about who stole my lunch\"). In science, that's an insult. In the **[[scientific-method|Scientific Method]]**, a **Fact** is a single data point (The screen is black). A **Hypothesis** is a [[falsifiability|testable]] guess (The battery is dead). A **Theory** is the comprehensive explanation of how batteries and electricity work. A **[[scientific-laws|Law]]** is the mathematical formula calculating how long the battery will last. Mixing these up is like confusing a single brick (Fact) with the blueprint for the whole building (Theory).\n\n## The Heirarchy of Knowledge\n\n*   **Fact:** An observation.\n    *   *Example:* \"The apple fell.\"\n*   **Hypothesis:** A testable explanation for an observation.\n    *   *Example:* \"Apples fall because an invisible force pulls them.\"\n*   **[[scientific-laws|Law]]:** A description (often mathematical) of *how* it happens.\n    *   *Example:* $F = G \\frac{m_1 m_2}{r^2}$ (Calculates the force exactly).\n    *   *Note:* Laws tell you *what* will happen, but not *why*.\n*   **Theory:** The highest level of understanding. An explanation of *why* it happens, supported by facts, laws, and tested hypotheses.\n    *   *Example:* The Theory of General Relativity (Explains gravity is warping of space-time).\n\n## FAQs\n\n*1. Is a Theory less than a Fact?*\nNo. A Theory is the *explanation* for facts. You can have facts without a theory (we knew gravity existed before we knew why), but a Theory is the gold standard because it explains *why* the facts are there.\n\n*2. Does a Hypothesis become a Theory, which becomes a Law?*\nNo! This is the video game model of science, and it's wrong.\n*   **Hypothesis** $\\rightarrow$ Tested $\\rightarrow$ Supported/Rejected.\n*   **[[scientific-laws|Laws]]** describe patterns.\n*   **Theories** explain mechanisms.\nA Theory never becomes a Law, just like a map (explanation) never becomes the road (description).\n\n### Further Reading\n\n*   **Video:** *[Fact vs. Theory vs. Hypothesis vs. Law... EXPLAINED!](https://www.youtube.com/watch?v=yi0hwFDQTSQ)* (The source for this breakdown).\n"
                            },
                            {
                                "id": "scientific-laws",
                                "title": "Scientific Laws",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "Definition"
                                ],
                                "links": [],
                                "group": "science",
                                "content": "# Scientific Laws\n\nDescriptions, not rules.\n\nA **Scientific Law** is a statement that describes an observable occurrence in nature that appears to always be true.\nIt tells you **What** happens, not **Why** it happens.\n\n*   **The Law:** $F = ma$ (Newton's Second Law).\n    *   It describes exactly how a rock moves when you kick it.\n*   **The Theory:** General Relativity.\n    *   It explains *why* gravity exists (warped spacetime).\n\n## The Misconception\n\nWe often think of Laws like \"Traffic Laws\" (rules imposed by a government).\nNature's Laws are descriptive patterns, not prescriptions. The universe doesn't \"obey\" the law of gravity; the law of gravity is just our best description of what the universe already does.\n\n## FAQs\n\n*1. Is a Theory a \"baby Law\"?*\nNo. This is the biggest myth in science ed.\n*   **Fact:** Observation.\n*   **Law:** Description of the pattern.\n*   **Theory:** Explanation of the mechanism.\nA Theory never becomes a Law. They do different things. Evolution is a Theory (it explains). Gravity is a Law (it describes) AND a Theory (it explains).\n\n*2. Can laws change?*\nYes. Newton's Laws were considered absolute for 200 years. Then Einstein showed they were slightly wrong at high speeds. We didn't throw them away (they still work for cars), but we updated the description.\n\n### Further Reading\n\n*   **Article:** *[Scientific Hypothesis, Theory, Law Definitions](https://www.livescience.com/21491-what-is-a-scientific-theory-definition-of-theory.html)*.\n*   **Video:** *[Fact vs. Theory vs. Hypothesis vs. Law](https://www.youtube.com/watch?v=lqk3TKuGNBA)*.\n"
                            },
                            {
                                "id": "scientific-method",
                                "title": "Scientific Method",
                                "icon": "far fa-file-alt",
                                "desc": "",
                                "tags": [
                                    "Methodology",
                                    "Science",
                                    "Logic"
                                ],
                                "links": [
                                    "falsifiability"
                                ],
                                "group": "science",
                                "content": "# Scientific Method\n\nThe algorithm for debugging the universe.\n\n**The Scientific Method** is a systematic process for gathering data and testing ideas to minimize bias and error.\n\nImagine your lamp doesn't turn on. You don't just guess \"ghosts did it.\" You inherently use the scientific method:\n1.  **Observation:** \"The lamp is off.\"\n2.  **Hypothesis:** \"Maybe the bulb is burnt out.\"\n3.  **Experiment:** You screw in a new bulb.\n4.  **Result:** It lights up.\n5.  **Conclusion:** \"The old bulb was dead.\"\nScience is just this process, but rigorous, documented, and peer-reviewed so that we can trust the results even if we didn't do the experiment ourselves.\n\n## The Cycle\nThe method is circular, not a straight line. Every answer leads to new questions.\n\n1.  **Ask a Question:** What are you trying to solve?\n2.  **Do Background Research:** Has someone else already solved this?\n3.  **Construct a Hypothesis:** An educated guess you can test (must be [[falsifiability|falsifiable]]).\n4.  **Test with an Experiment:** A fair test that isolates variables.\n5.  **Analyze Data:** What happened?\n6.  **Communicate Results:** Tell others so they can check your work.\n\n## FAQs\n\n*1. Do scientists actually follow these steps 1-2-3-4?*\nIn the real world, it's messy. Scientists often jump back and forth, refining their hypothesis while designing the experiment, or finding accidental discoveries (like Penicillin) that change the original question entirely. The \"steps\" are more of a checklist for logic than a strict recipe.\n\n*2. What if my experiment fails?*\nThen you did good science! Proving a hypothesis *wrong* is just as valuable as proving it right. It tells us what the truth *isn't*, which gets us closer to what the truth *is*.\n\n### Further Reading\n\n*   **Video:** *[The Scientific Method: Steps, Terms and Examples](https://www.youtube.com/watch?v=yi0hwFDQTSQ)* (A clear animated breakdown).\n"
                            }
                        ]
                    },
                    {
                        "id": "statistics",
                        "title": "Statistics",
                        "icon": "fas fa-chart-bar",
                        "desc": "The science of data and probability",
                        "view": "shelf",
                        "group": "science",
                        "children": [
                            {
                                "id": "concepts",
                                "title": "Concepts",
                                "icon": "fas fa-lightbulb",
                                "desc": "Key specific jargon",
                                "view": "list",
                                "group": "science",
                                "children": [
                                    {
                                        "id": "black-swan",
                                        "title": "Black Swan",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Risk",
                                            "Taleb"
                                        ],
                                        "links": [
                                            "power-law"
                                        ],
                                        "group": "science",
                                        "content": "# Black Swan\n\nThe Impossible Event.\n\n**A Black Swan** is an event that is:\n1.  **Rare:** Outside regular expectations.\n2.  **Impactful:** Carries extreme consequences.\n3.  **Retrospectively Predictable:** Creating an explanation *after* the fact (\"We should have seen it coming\").\n\nThink of it like **The Turkey Problem**.\n*   **The Data:** For 1,000 days, the farmer feeds the turkey. The turkey's data says \"Farmer = Friend.\" Confirming evidence increases every day.\n*   **The Event:** Day 1,001 is Thanksgiving.\n*   **The Lesson:** Past data did not predict the future. The most important event in the turkey's life was a Black Swan that no chart could foresee.\n\n## Why it Matters\n\nIn **[[power-law|Power Law]]** environments (finance, pandemics, internet), Black Swans drive history. Standard models (like the Bell Curve) ignore them as \"outliers,\" which is why banks crash.\n"
                                    },
                                    {
                                        "id": "central-limit-theorem",
                                        "title": "Central Limit Theorem",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Math",
                                            "Jargon"
                                        ],
                                        "links": [
                                            "normal-distribution"
                                        ],
                                        "group": "science",
                                        "content": "# Central Limit Theorem\n\nThe Magnet.\n\n**The Central Limit Theorem (CLT)** states that if you take enough random samples from *any* population (even a weird one), the *averages* of those samples will inherently form a **[[normal-distribution|Normal Distribution]]** (Bell Curve).\n\nThink of it like **Rolling Dice**.\n*   **One Die:** Rolling a 1 is just as likely as a 6. (Flat distribution).\n*   **Ten Dice:** The *average* of 10 dice will almost always be around 3.5. Rolling all 1s (Average 1) is nearly impossible.\n*   **The Magnet:** The more dice you roll, the harder the average is pulled toward the center.\n\n## Why it Matters\n\nThis is why we can use Statistics on almost anything. We don't need to know the shape of the original data; if we survey enough people, their *averages* will behave like a nice, predictable Bell Curve.\n"
                                    },
                                    {
                                        "id": "long-tail",
                                        "title": "The Long Tail",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Marketing",
                                            "Anderson"
                                        ],
                                        "links": [
                                            "power-law"
                                        ],
                                        "group": "science",
                                        "content": "# The Long Tail\n\nThe Niche.\n\n**The Long Tail** refers to the strategy of selling a large number of unique items with relatively small quantities sold of each, usually in addition to selling fewer popular items in large quantities.\n\nThink of it like **Amazon vs. Bookstore**.\n*   **Bookstore:** Limited shelf space. They only stock the \"Hits\" (top 1,000 books) that guarantee sales.\n*   **Amazon:** Unlimited database space. They stock the \"Long Tail\" (millions of obscure books).\n*   **The Math:** Selling 1 copy of 1 million obscure books = Selling 1 million copies of Harry Potter.\n\n## Why it Matters\n\nIn a **[[power-law|Power Law]]** distribution, the \"Tail\" is infinitely long. The internet makes it profitable to mine the tail, whereas physical stores can only afford the \"Head.\"\n"
                                    },
                                    {
                                        "id": "pareto-principle",
                                        "title": "Pareto Principle",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Efficiency",
                                            "80/20"
                                        ],
                                        "links": [
                                            "power-law"
                                        ],
                                        "group": "science",
                                        "content": "# Pareto Principle\n\nThe 80/20 Rule.\n\n**The Pareto Principle** states that for many outcomes, roughly 80% of consequences come from 20% of the causes. It is a specific application of the **[[power-law|Power Law]]**.\n\nThink of it like **Your Carpet**.\n*   **The Rule:** 20% of your carpet gets 80% of the foot traffic.\n*   **The Business:** 20% of customers provide 80% of revenue.\n*   **The Code:** 20% of the bugs cause 80% of the crashes.\n\n## Why it Matters\n\nIt is the ultimate tool for **Efficiency**. You don't need to fix *everything*. You just need to find the vital 20% that drives the result and fix that.\n"
                                    },
                                    {
                                        "id": "standard-deviation",
                                        "title": "Standard Deviation",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Math",
                                            "Jargon"
                                        ],
                                        "links": [
                                            "normal-distribution"
                                        ],
                                        "group": "science",
                                        "content": "# Standard Deviation\n\nThe Spread.\n\n**Standard Deviation (SD)** is a measure of how spread out numbers are.\n*   **Low SD:** Data is bunched up near the average (Reliable).\n*   **High SD:** Data is all over the place (Chaotic).\n\nThink of it like **Pizza Delivery**.\n*   **Pizza A:** Always arrives in exactly 30 mins. (Average = 30, SD = 0).\n*   **Pizza B:** Arrives in 10 mins or 50 mins. (Average = 30, SD = High).\n*   **The Lesson:** Even if the *average* is the same, Pizza B is risky. SD measures that risk.\n\n## Why it Matters\n\nIn a **[[normal-distribution|Normal Distribution]]**, SD is the ruler we use to measure weirdness.\n*   **1 Sigma (SD):** Normal stuff (68% of people).\n*   **3 Sigmas:** Rare stuff (Top 1% genius).\n*   **6 Sigmas:** Miracle/Disaster (Winning the lottery).\n"
                                    }
                                ]
                            },
                            {
                                "id": "distributions",
                                "title": "Distributions",
                                "icon": "fas fa-wave-square",
                                "desc": "Common shapes of data in the real world",
                                "view": "list",
                                "group": "science",
                                "children": [
                                    {
                                        "id": "binomial-distribution",
                                        "title": "Binomial Distribution",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Math",
                                            "CoinFlip"
                                        ],
                                        "links": [
                                            "poisson-distribution"
                                        ],
                                        "group": "science",
                                        "content": "# Binomial Distribution\n\nThe Coin Flip.\n\n**The Binomial Distribution** models the number of \"Successes\" in a fixed number of independent \"Trials\", where each trial has the same probability of success.\n\nThink of it like **Free Throws**.\n*   **The Trial:** You shoot the ball.\n*   **The Result:** You make it (Success) or miss it (Failure). No \"half-points\".\n*   **The Question:** If you shoot 10 times, and you are a 50% shooter, what are the odds you make exactly 7?\n\n![Binomial Distribution Chart](https://media.geeksforgeeks.org/wp-content/uploads/20250723182638251176/frame_3051.webp)\n\n## How it Works\n\n1.  **Binary Outcome:** Yes/No, Pass/Fail, Heads/Tails.\n2.  **Fixed N:** You decide beforehand \"I will flip 10 times.\" (If you flip until you stop, that's different).\n3.  **Fixed P:** The probability of success (e.g., 0.5) is the same for every flip.\n\n## Real World Use Cases\n\n*   **Quality Control:** Testing 1000 chips. How many are defective?\n*   **Elections:** Surveying 100 voters. How many vote Yes?\n*   **Medical:** Treating 50 patients. How many recover?\n\n## Analysis\n\nThe Binomial converges into the **Normal Distribution** if you do enough trials. (If you flip 1,000,000 coins, the graph looks like a Bell Curve).\n\n### Further Reading\n\n*   **Sibling:** *[[poisson-distribution|Poisson Distribution]]* (Counting events over time, not trials).\n"
                                    },
                                    {
                                        "id": "normal-distribution",
                                        "title": "Normal Distribution",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Math",
                                            "BellCurve"
                                        ],
                                        "links": [
                                            "standard-deviation",
                                            "central-limit-theorem"
                                        ],
                                        "group": "science",
                                        "content": "# Normal Distribution\n\nMediocristan.\n\n**The Normal Distribution** (Bell Curve) is the most common pattern in nature. Most things are average, and extreme deviations are rare and symmetric.\n\nThink of it like **Adult Male Height**.\n*   **The Average:** Most men are around 5'9\".\n*   **The Deviations:** A few are 6'5\", a few are 5'2\".\n*   **The Impossible:** No one is 500 feet tall.\n\n![Normal Distribution Chart](https://www.w3schools.com/statistics/img_normal_distribution.svg)\n\n## How it Works\n\n1.  **[[central-limit-theorem|Central Limit Theorem]]:** When you add up many independent random variables, they tend to form a Bell Curve.\n2.  **Symmetry:** 50% are above average, 50% are below.\n3.  **The 68-95-99.7 Rule:**\n    *   68% of data falls within 1 **[[standard-deviation|Standard Deviation (SD)]]**.\n    *   95% falls within 2 SDs.\n    *   99.7% falls within 3 SDs.\n\n## Real World Use Cases\n\n*   **IQ Tests:** Designed to be a Bell Curve with 100 as the mean.\n*   **Manufacturing:** Checking bolt sizes. If too many are \"outliers\" (outside 3 SDs), the machine is broken.\n*   **height/Weight:** Biology usually follows this.\n\n## Analysis\n\nIn a Normal world, prediction is easy. Historical data (last 100 years of flood data) accurately predicts the future. You are safe from \"Black Swans\" (mostly).\n\n### Further Reading\n\n*   **Contrast:** *[power-law|Power Law]* (Where averages don't exist).\n"
                                    },
                                    {
                                        "id": "poisson-distribution",
                                        "title": "Poisson Distribution",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Math",
                                            "Time"
                                        ],
                                        "links": [
                                            "binomial-distribution"
                                        ],
                                        "group": "science",
                                        "content": "# Poisson Distribution\n\nThe Waiting Game.\n\n**The Poisson Distribution** models the probability of a specific number of events happening in a fixed interval of time or space, assuming these events happen with a known constant mean rate and independently of the time since the last event.\n\nThink of it like **The Call Center**.\n*   **The Average:** We get 5 calls per minute.\n*   **The Question:** What are the odds we get exactly 8 calls in the next minute? Or 0 calls?\n*   **The Shape:** It is skewed. You can't have fewer than 0 calls, but you could theoretically have 100.\n\n## How it Works\n\n1.  **Rare Events:** It works best for things that don't happen often but *could* happen at any moment.\n2.  **Independence:** One call doesn't cause the next call.\n3.  **Lambda ($\\lambda$):** The valid rate (e.g., 5 calls/min). If you know Lambda, you know the whole curve.\n\n## Real World Use Cases\n\n*   **Bus Arrivals:** How many buses arrive in an hour?\n*   **Decay:** Radioactive atoms decaying per second.\n*   **IT:** How many 404 errors will the server log in the next hour?\n\n## Analysis\n\nThis is used for **Capacity Planning**. \"If we average 5 calls, but there's a 10% chance of 12 calls, do we have enough staff for 12?\"\n\n### Further Reading\n\n*   **Contrast:** *[[binomial-distribution|Binomial Distribution]]* (Yes/No trials vs. Counting events).\n"
                                    },
                                    {
                                        "id": "power-law",
                                        "title": "Power Law",
                                        "icon": "far fa-file-alt",
                                        "desc": "",
                                        "tags": [
                                            "Statistics",
                                            "Math",
                                            "Pareto"
                                        ],
                                        "links": [
                                            "black-swan",
                                            "long-tail",
                                            "pareto-principle"
                                        ],
                                        "group": "science",
                                        "content": "# Power Law\n\nExtremistan.\n\n**A Power Law** (Pareto Distribution) is a pattern where a small number of items account for the vast majority of the impact. The average is meaningless because one \"Black Swan\" can skew the whole dataset.\n\nThink of it like **Book Sales**.\n*   **The Long Tail:** Millions of authors sell 10 copies.\n*   **The Head:** J.K. Rowling sells 500 million copies.\n*   **The Skew:** If you average J.K. Rowling with me, we are both best-selling authors *on average*. But the average is a lie.\n\n## How it Works\n\n1.  **Preferential Attachment:** \"The rich get richer.\" If you have 1 million followers, gaining the next follower is easier than if you have 0.\n2.  **Scale Invariance:** The pattern looks the same at any scale (fractal).\n3.  **No Tyical Member:** In a Bell Curve, a variance of 10-sigma is impossible. In a Power Law, it's expected.\n\n## Real World Use Cases\n\n*   **Wealth:** The 80/20 Rule (80% of wealth is owned by 20% of people).\n*   **City Sizes:** A few mega-cities, thousands of small towns.\n*   **Web Traffic:** Google gets billions of hits; this page i.e., second brain gets three.\n\n## Analysis\n\n## Analysis\n\nIn a Power Law world, risk management is hard. The past does not predict the future. One single event (an earthquake, a market crash, a viral post) can change everything. See **[[black-swan|Black Swan]]**.\n\n### Further Reading\n\n*   **Concept:** *[[long-tail|The Long Tail]]* (The business strategy).\n*   **Concept:** *[[pareto-principle|Pareto Principle]]* (The 80/20 Rule).\n*   **Book:** *[The Black Swan](https://en.wikipedia.org/wiki/The_Black_Swan_(Taleb_book))* (Nassim Taleb).\n"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "logs": {
        "title": "Weekly Updates",
        "items": [
            {
                "id": "2026",
                "title": "2026",
                "icon": "fas fa-calendar-alt",
                "desc": "Weekly updates for 2026",
                "view": null,
                "group": "2026",
                "children": [
                    {
                        "id": "2026-01-03",
                        "title": "Week 2",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 3 January 2026 - 9 January 2026.",
                        "tags": [
                            "security",
                            "network",
                            "architecture"
                        ],
                        "links": [
                            "zero-day",
                            "vmx",
                            "hypervisor",
                            "ssh",
                            "generative-ai",
                            "remote-code-execution",
                            "vpn",
                            "cve",
                            "command-injection",
                            "ai-hallucination",
                            "cvss",
                            "ransomware"
                        ],
                        "group": "2026",
                        "content": "# Week 2\n\n## Cyber Security\n\n### Critical RCE Flaws Patched in Veeam Backup\n\n![Veeam](https://www.bleepstatic.com/content/hl-images/2024/11/08/Veeam.jpg)\n\nDate: 2026-01-07\n\n- Veeam released urgent patches for its Backup & Replication software to fix a critical vulnerability ([[cve|CVE]]-2025-59470) and two high-severity flaws.\n- The flaw allows low-privileged users, such as backup operators, to execute arbitrary code remotely ([[remote-code-execution|RCE]]) by manipulating backup configuration files or password parameters.\n- Given Veeam's ubiquity in enterprise disaster recovery, unpatched servers act as a prime gateway for attackers to seize control of backup data and demand extortion payments.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-veeam-vulnerabilities-expose-backup-servers-to-rce-attacks/*\n\n### China-Linked Bad Actors Exploit VMware ESXi zero-day Chain\n\n![VMware](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm8E9a8qNOO2_xOS89H3cvGDWPpRKo2WRFf41jVFbT6TGf62B4tUg2HJVFblopdAftu8NYjNO-S2MF-_VOr6mHghokD_zhl8Ybf-H8XLhw5_E4tDfkvIfjltzVwsOo-BK731rpbx2-eClOz4yN3Nw8nHXZaRo9ATkbzTLNIP9j7OaeHCdebT_S8uXri6Iu/s790-rw-e365/vmware.jpg)\n\nDate: 2026-01-09\n\n- Chinese-speaking bad actors utilized a chain of three [[zero-day|zero-day]] vulnerabilities ([[cve|CVE]]-2025-22224, 22225, 22226) to escape virtual machines and compromise host systems.\n- Successful exploitation of the issue could permit a malicious actor with admin privileges to leak memory from the Virtual Machine Executable ([[vmx|VMX]]) process or execute code as the [[vmx|VMX]] process.\n- The attack vector originated from a compromised SonicWall [[vpn|VPN]], allowing attackers to deploy a toolkit named \"MAESTRO\" and a malicious driver to execute code on the [[hypervisor|Hypervisor]] level.\n- This highlights a sophisticated escalation where attackers can bypass standard isolation protections, putting critical virtualized infrastructure at severe risk of [[ransomware|Ransomware]] deployment.\n\n*Read more about it: https://thehackernews.com/2026/01/chinese-linked-hackers-exploit-vmware.html*\n\n### Critical Flaws Expose 50k+ Coolify Instances to Root Takeover\n\n![Coolify](https://image-optimizer.cyberriskalliance.com/unsafe/1920x0/https://files.cyberriskalliance.com/wp-content/uploads/2025/09/AdobeStock_1364130870.jpg)\n\nDate: 2026-01-09\n\n- Security researchers have disclosed 11 critical vulnerabilities in Coolify, an open-source self-hosting platform, with severity scores reaching the maximum [[cvss|CVSS]] rating of 10.0.\n- The flaws include massive security gaps such as the exposure of private [[ssh|SSH]] keys (CVE-2025-64420) and [[command-injection|Command-Injection]] bugs ([[cve|CVE]]-2025-59157) that allow low-privileged users to execute arbitrary code.\n- With over 52,000 instances currently exposed online, unpatched servers are at immediate risk of total compromise, allowing attackers to escape container environments and seize full control of the host infrastructure.\n\n*Read more about it: https://www.scworld.com/brief/nearly-a-dozen-coolify-flaws-put-servers-at-risk*\n\n## Artificial Intelligence\n\n### Google Rolls Out Speed-Focused Gemini 3 Flash Model\n\n![Gemini 3 Flash](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-16.png)\n\nDate: 2026-01-03\n\n- Google has globally deployed \"Gemini 3 Flash,\" a new iteration of its model designed specifically for low-latency, real-time responses in Search and mobile ecosystems.\n- The model powers a new \"AI Mode\" in Google Search, capable of verifying its own answers to minimize [[ai-hallucination|AI-Hallucination]] before presenting them to the user.\n- This marks a shift from \"larger is better\" to \"faster and more reliable,\" directly targeting users who need instant, verified information rather than creative generation.\n\n*Read more about it: [Boston Institute of Analytics](ht tps://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*\n\n### India Launches \"Skill the Nation\" AI Initiative\n\n![Skill the Nation](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-17.png)\n\nDate: 2026-01-03\n\n- The Indian government announced the SOAR (Skilling for AI Readiness) initiative, aiming to upskill the workforce for an AI-centric economy.\n- Announced by President Murmu, the program shifts the focus of AI from a \"tech sector issue\" to a national GDP driver, with specific training mandates.\n- This represents one of the largest state-sponsored AI literacy pushes, potentially positioning India as a massive talent hub for the global [[generative-ai|Generative-AI]] supply chain.\n\n*Read more about it: [Boston Institute of Analytics](https://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*\n\n\n### Perplexity launches free AI tool for law enforcement agencies\n\n![Perplexity](https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg)\n\nDate: 2026-01-08\n\n- Perplexity has released a specialized enterprise AI platform designed for law enforcement and emergency responders, offered free to qualifying agencies for one year.\n- The tool allows officers to analyze crime scene photos, bodycam transcripts, and incident reports in real-time, though Perplexity states the data is isolated and not used for model training.\n- While aimed at reducing police paperwork, the launch has ignited immediate privacy debates regarding the reliability of AI analysis in criminal justice and the potential for automated bias in policing.\n\n*Read more about it: [Investing.com](https://in.investing.com/news/company-news/perplexity-launches-free-ai-tool-for-law-enforcement-agencies-93CH-5179360)*\n\n### OpenAI and SoftBank Invest $1B in \"Stargate\" Energy Project\n\n![Stargate](https://media.gettyimages.com/id/2243573116/photo/the-openai-logo-appears-on-a-smartphone-screen-reflecting-an-abstract-illustration-dominated.jpg?s=612x612&w=0&k=20&c=Bm-p9812p4vS8LpdeOV9X-caneeclVR3bIg-1lic_5A=)\n\nDate: 2026-01-09\n\n- OpenAI and SoftBank Group have jointly invested $1 billion into SB Energy to build massive renewable energy infrastructure for the upcoming \"Stargate\" data center project.\n- The partnership focuses on supplying 1.2 gigawatts of power, enough to light up a major city, specifically to support the immense compute requirements of OpenAI's next-generation models.\n- This move signals that power availability, not just chip supply, is now the primary bottleneck for AI scaling, forcing tech giants to become energy infrastructure developers.\n\n*Read more about it: [OpenAI Official Blog](https://openai.com/index/stargate-sb-energy-partnership/)*\n\n### Allianz Deploys Anthropic's Claude to Global Workforce\n\n![Allianz](https://www.pymnts.com/wp-content/uploads/2025/07/Allianz-.jpg?w=768)\n\nDate: 2026-01-09\n\n- Insurance giant Allianz announced a global partnership with Anthropic to integrate the Claude AI model into its daily operations across insurance, claims, and compliance.\n- Unlike standard chatbots, this integration will embed Claude directly into Allianz's core risk assessment workflows to automate complex document processing and claims analysis.\n- This represents one of the largest enterprise deployments of 2026 so far, signaling a shift where traditional industries are moving from \"AI experiments\" to full-scale production dependencies.\n\n*Read more about it: [PYMNTS](https://www.pymnts.com/artificial-intelligence-2/2026/allianz-taps-anthropic-to-help-deploy-ai-throughout-its-insurance-business/)*\n\n### Amazon\u2019s Ring rolls out controversial, AI-powered facial-recognition feature to video doorbells\n\nDate: 2026-01-09\n\n![Ring](https://techcrunch.com/wp-content/uploads/2024/08/ring_battery_doorbell_2024.jpg)\n\n- Amazon's Ring has begun deploying AI-powered facial recognition features that can identify specific individuals rather than just detecting generic motion.\n- The \"Familiar Faces\" update allows the system to tag known visitors, a feature that has sparked renewed debate regarding biometric privacy in consumer electronics.\n- While offering convenience for users to screen visitors, the mainstreaming of granular surveillance in home security raises concerns about data retention and neighborhood privacy.\n\n## General Technology\n\n### Intel Launches \"Panther Lake\" on Historic 18A Process\n\n![Intel](https://mms.businesswire.com/media/20260105738564/en/2682502/4/ntel-Core-Ultra-processor-series3-with-Arc-GPU.jpg)\n\nDate: 2026-01-08\n\n- At CES 2026, Intel officially debuted its Core Ultra Series 3 processors (codenamed \"Panther Lake\"), the first consumer chips built on its advanced 18A Node manufacturing process.\n- These chips utilize \"RibbonFET\" transistors to deliver a massive leap in efficiency, with Intel claiming up to 27 hours of battery life and a 77% boost in gaming performance over previous generations.\n- This is a \"make or break\" moment for US semiconductor manufacturing; successfully shipping 18A proves Intel can arguably match or beat TSMC\u2019s technology, potentially reshaping the global chip supply chain.\n\n*Read more about it: [Extreme Tech](https://www.extremetech.com/computing/intel-debuts-core-ultra-series-3-cpus-from-its-18a-node)*"
                    },
                    {
                        "id": "2026-01-10",
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
                        "links": [
                            "encryption",
                            "deepseek-engram",
                            "semiconductor",
                            "ntn",
                            "crispr",
                            "ransomware"
                        ],
                        "group": "2026",
                        "content": "# Week 03\n\n## Cyber Security\n\n### Microsoft Patch Tuesday: 3 Zero-Days, 114 Flaws\n\n![Patch Tuesday](https://www.bleepstatic.com/content/hl-images/2024/10/08/patch_tuesday_microsoft.jpg)\n\nDate: January 13, 2026\n\n- **The Event:** Microsoft's January 2026 Patch Tuesday addressed **114 vulnerabilities**, including **three zero-days** that were either exploited in the wild or publicly disclosed.\n- **The Detail:**\n    1.  **CVE-2026-20805** (Exploited): A **Desktop Window Manager (DWM)** information disclosure vulnerability. Attackers can leak sensitive memory data to bypass protections.\n    2.  **CVE-2026-21265** (Publicly Disclosed): A **Secure Boot** security feature bypass caused by expiring certificates. Unpatched systems may fail to trust new bootloaders.\n    3.  **CVE-2023-31096** (Exploited): A **Windows Agere Soft Modem Driver** elevation of privilege flaw. Microsoft removed the deprecated `agrsm64.sys` driver to fix this legacy issue that allowed SYSTEM-level access.\n- **The Impact:** CISA has added the exploited flaws to its Known Exploited Vulnerabilities catalog. Federal agencies are mandated to patch immediately to prevent ransomware groups from leveraging these now-public exploits.\n\n*Read more about it: [Bleeping Computer](https://www.bleepingcomputer.com/news/microsoft/microsoft-january-2026-patch-tuesday-fixes-3-zero-days-114-flaws/)*\n\n---\n<br>\n\n### WEF Report: \"Cyber-Fraud\" Now Outranks Ransomware\n\n![WEF Report](https://assets.weforum.org/report/cover_image/responsive_thumbnail_webp_QCV9PYtw81K_YOp7U7Ic_Ht3IoEIEgPRnmWIYonSGZY.webp)\n\nDate: January 12, 2026\n\n- **The Report:** The World Economic Forum released its *Global Cybersecurity Outlook 2026* on January 12, revealing a major shift in the threat landscape.\n- **The Detail:** For the first time, CEOs rated \"Cyber-enabled Fraud\" (deepfakes, manipulated financial transfers) as a higher concern than [[ransomware|Ransomware]], driven by the accessibility of AI cloning tools.\n- **The Impact:** This signals a strategic pivot for defenders: while [[encryption]] attacks (ransomware) are stabilizing, the integrity of *communication* (is this video call real?) is becoming the new battleground.\n\n*Read more about it: [World Economic Forum](https://www.weforum.org/publications/global-cybersecurity-outlook-2026/)*\n\n---\n<br>\n\n### Global Crackdown on DeepSeek Intensifies\n\n![DeepSeek App](https://www.insurancejournal.com/app/uploads/2025/02/deepseek-app-on-smartphone-25028119378678-AP-768x512.jpg)\n\nDate: January 7, 2026\n\n- **The Scrutiny:** Following its rapid rise, Chinese AI firm DeepSeek faced a wave of regulatory actions this week, with Australia and France launching probes into its data handling practices.\n- **The Detail:** Concerns focus on the app's data storage policies and potential ties to state surveillance, leading to bans on government devices in multiple jurisdictions as of mid-January.\n- **The Impact:** This geopolitical friction highlights the fragmentation of the global \"AI Stack,\" potentially forcing multinational companies to choose between Western-sanctioned tools and cost-effective Asian alternatives.\n\n*Read more about it: [Insurance Journal](https://www.insurancejournal.com/news/international/2026/01/07/853376.htm)*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### DeepSeek Publishes \"Engram\" to Bypass Chip Sanctions\n\n![Engram](https://techwireasia.com/wp-content/uploads/2026/01/solen-feyissa-MHgLD0-9VvM-unsplash-2048x1366.jpg)\n\nDate: January 14, 2026\n\n- **The Breakthrough:** On Jan 14, DeepSeek published a technical paper detailing \"[[deepseek-engram|Engram]],\" a new training method designed to build massive models using older, less powerful chips.\n- **The Detail:** The technique optimizes memory usage to overcome hardware bottlenecks, effectively allowing them to train GPT-4 class models without needing restricted Nvidia H100/Blackwell GPUs.\n- **The Impact:** This undermines the effectiveness of US semiconductor export controls, suggesting that algorithmic innovation is outpacing hardware restrictions in the global AI arms race.\n\n*Read more about it: [Tech Wire Asia](https://techwireasia.com/2026/01/deepseek-engram-technique-v4-model/)*\n\n---\n<br>\n\n### OpenAI Signs $10B Inference Deal with Cerebras\n\n![Cerebras](https://theaiinsider.tech/wp-content/uploads/2026/01/Screenshot-2025-09-26-at-11.46.06-3.png)\n\nDate: January 16, 2026\n\n- **The Deal:** In a move to diversify away from Nvidia, OpenAI has reportedly secured a multi-year compute agreement valued at over $10 billion with chipmaker Cerebras Systems.\n- **The Detail:** The partnership focuses specifically on \"Inference\" (running the models) rather than training, utilizing Cerebras' wafer-scale chips to drastically lower the cost and latency of ChatGPT responses.\n- **The Impact:** This is a direct challenge to Nvidia's monopoly, signaling that top AI labs are willing to fund alternative hardware ecosystems to reduce their dependency on a single supplier.\n\n*Read more about it: [The AI Insider](https://theaiinsider.tech/2026/01/16/openai-secures-multi-year-compute-agreement-with-cerebras-valued-at-over-10b/)*\n\n---\n<br>\n\n### Microsoft Report: DeepSeek Dominates 89% of Chinese Market\n\n![DeepSeek Market Share](https://capacityglobal.com/wp-content/uploads/2025/09/urlhttp3A2F2Feuromoney-brightspot.s3.amazonaws.com2F862Fa62F1eb8334f407f9c61b28e788f8b862Fcm-microsoft1-12.png)\n\nDate: January 13, 2026\n\n- **The Statistic:** A new Microsoft AI Diffusion report (Jan 13) highlights that DeepSeek has captured nearly 89% of the AI user base in China, vastly outperforming local competitors like Baidu.\n- **The Detail:** The report warns of a widening \"AI Divide,\" where the Global South is adopting affordable, open-weight models from China, while the Global North sticks to expensive, closed US models.\n- **The Impact:** This entrenchment creates a \"bifurcated internet\" for AI, where future software ecosystems in Africa and SE Asia may be built on Chinese standards rather than Western APIs.\n\n*Read more about it: [Capacity Media](https://capacityglobal.com/news/microsoft-report-warns-of-deepseeks-rise-and-a-global-ai-divide/)*\n\n---\n<br>\n\n## General Technology\n\n### TSMC Forecasts 30% Growth Driven by \"Insatiable\" AI Demand\n\n![TSMC Forecast](https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20260116064457.jpg)\n\nDate: January 16, 2026\n\n- **The Forecast:** On Jan 16, [[semiconductor]] giant TSMC projected a nearly 30% revenue jump for 2026, shattering analyst expectations.\n- **The Detail:** The growth is driven almost entirely by demand for 2nm and 3nm chips used in AI accelerators, prompting TSMC to increase its capital expenditure to expand production capacity.\n- **The Impact:** As the sole manufacturer for both Apple and Nvidia's best chips, TSMC's confidence confirms that the \"AI Boom\" is not slowing down in 2026; in fact, hardware demand is accelerating.\n\n*Read more about it: [ANI News](https://aninews.in/news/business/tsmc-forecasts-nearly-30-sales-growth-in-2026-plans-capex-expansion-amid-ai-demand20260116121515)*\n\n---\n<br>\n\n### Historic Medical Evacuation from ISS (NASA Crew-11)\n\n![Crew-11](https://cdn.kpbs.org/dims4/default/8cf7169/2147483647/strip/true/crop/1253x772+0+84/resize/1760x1084!/format/webp/quality/90/?url=https%3A%2F%2Fnpr.brightspotcdn.com%2Fdims3%2Fdefault%2Fstrip%2Ffalse%2Fcrop%2F1253x940%2043%200%2Fresize%2F1253x940%21%2F%3Furl%3Dhttp%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F85%2F06%2F2af7dc874dea8039c7c243a3b4f6%2Fap26014814815837.jpg)\n\nDate: January 15, 2026\n\n- **The Event:** On Jan 15, NASA\u2019s Crew-11 astronauts returned to Earth a month early aboard a SpaceX Dragon capsule, marking the first time in history that a medical emergency forced an early end to a station mission.\n- **The Detail:** While NASA kept the specific astronaut's condition confidential due to privacy rules, the urgency required an unscheduled \"splashdown\" off the coast of San Diego to get the crew member to a hospital immediately.\n- **The Impact:** This rare event tests the \"Emergency Return\" protocols that will be critical for future Mars missions, where a 10-hour flight home is impossible, highlighting the need for advanced autonomous medical tech in deep space.\n\n*Read more about it: [KPBS News](https://www.kpbs.org/news/science-technology/2026/01/15/after-a-medical-evacuation-from-space-nasas-crew-11-returns-to-earth-a-month-early)*\n\n---\n<br>\n\n### Breakthrough \"Epigenetic\" CRISPR Tool Fixes Genes Without Cutting\n\n![CRISPR](https://www.sciencedaily.com/images/1920/dna-repair-genetic-mutation-damage.webp)\n\nDate: January 5, 2026\n\n- **The Discovery:** Researchers at UNSW Sydney have validated a new [[crispr|CRISPR]] technique that \"switches\" genes on or off by removing chemical tags (methylation), rather than cutting the DNA strand itself.\n- **The Detail:** Traditional CRISPR acts like molecular scissors (risking unintended damage); this new method acts like a molecular \"eraser,\" removing the \"silencing\" markers on genes to treat conditions like Sickle Cell Anemia without altering the genome sequence.\n- **The Impact:** This resolves a decades-long biological debate and offers a significantly safer path for gene therapy, reducing the risk of accidental mutations or cancer associated with DNA-cutting methods.\n\n\n*Read more about it: [ScienceDaily](https://www.sciencedaily.com/releases/2026/01/260104202813.htm)*\n\n---\n<br>\n\n### Airbus Launches \"SpaceRAN\" to Standardize 5G from Orbit\n\n![SpaceRAN](https://mediarenditions.airbus.com/YxF8zRxCB6Xwb4_lGaCzXLd243twMw2ao3GX2bqRyf0/resize?src=kpkp%3A%2F%2Fairbus%2F38%2F676%2F676942-ttukbtg06j.jpg&w=2560&h=1200&poiX=50&poiY=50&el=true&t=fill-down)\n\nDate: January 14, 2026\n\n- **The Innovation:** Airbus UpNext has launched a demonstrator program called \"SpaceRAN\" to test a standardized way for satellites to provide direct-to-device 5G connectivity without proprietary lock-ins.\n- **The Detail:** Unlike Starlink\u2019s closed system, SpaceRAN uses a \"software-defined\" satellite architecture that allows standard commercial 5G devices to connect to satellites as if they were normal cell towers.\n- **The Impact:** If successful, this creates a unified global standard for [[ntn|Non-Terrestrial Networks]], allowing aviation, shipping, and remote industrial sites to switch between satellite providers instantly without changing hardware.\n\n\n*Read more about it: [Airbus Newsroom](https://www.airbus.com/en/newsroom/stories/2026-01-expanding-5g-connectivity-with-the-airbus-upnext-spaceran-demonstrator)*\n\n---\n<br>\n\n### China Launches \"Yaogan-50\" in First 2026 Orbital Mission\n\n![Yaogan-50](https://img.inform.kz/kazinform-photobank/media/2026-01-13/a26d1af9-17de-4c42-81e0-3adf4f799e79.webp)\n\nDate: January 13, 2026\n\n- **The Launch:** China Aerospace Science and Technology Corp (CASC) successfully conducted its first launch of 2026, sending the Yaogan-50 remote sensing satellite into orbit via a Long March 6 rocket.\n- **The Detail:** The satellite is equipped with high-definition land survey sensors officially designated for \"disaster prevention and crop estimation,\" though western analysts often associate the Yaogan series with electronic surveillance.\n- **The Impact:** This kickstarts China's ambitious 2026 launch calendar, which aims to exceed 100 orbital missions this year, further accelerating the density of the Low Earth Orbit (LEO) environment.\n\n*Read more about it: [Qazinform](https://qazinform.com/news/china-launches-satellite-in-first-orbital-mission-of-2026-31e383)*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-01-17",
                        "title": "Week 04",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 17 January - 23 January 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "CyberSecurity",
                            "ArtificialIntelligence",
                            "Space",
                            "IOT"
                        ],
                        "links": [
                            "cve",
                            "http",
                            "vulnerability",
                            "vishing"
                        ],
                        "group": "2026",
                        "content": "# Week 04\n\n## Cyber Security\n\n### Zero-Day Payouts Reach $1M at Pwn2Own Automotive 2026\n\n![Pwn2Own](https://www.bleepstatic.com/content/hl-images/2024/01/24/Pwn2Own_Tokyo.jpg)\n\nDate: 23 January 2026\n\n- Security researchers earned a combined total of $1,047,000 for discovering 76 unique [[vulnerability|Vulnerabilities]] over a three-day event.\n- The competition focused on automotive technologies, including electric vehicle (EV) chargers, infotainment systems, and operating systems like Tesla's.\n- These findings allow vendors to patch critical flaws before they can be exploited by malicious actors to hijack vehicle systems or charging infrastructure.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/hackers-get-1-047-000-for-76-zero-days-at-pwn2own-automotive-2026/*\n\n---\n<br>\n\n### Critical Remote Code Execution Flaw in Cisco Enterprise Tools\n\n![Cisco](https://imgs.search.brave.com/_EJ-NRiq-aaT23gGmbI7Ox8f39NQnPmcIFpYvR7Sc6s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA4L0Np/c2NvX2xvZ29fYmx1/ZV8yMDE2LnN2Zy8y/NTBweC1DaXNjb19s/b2dvX2JsdWVfMjAx/Ni5zdmcucG5n)\n\nDate: 21 January 2026\n\n- Cisco warned of a high-severity code injection flaw ([[cve|CVE]]-2026-20045) affecting its Unified Communications Manager and Unity Connection products.\n- The bug allows unauthenticated attackers to send crafted [[http|HTTP]] requests to gain root-level access to the underlying operating system.\n- CISA has already added this flaw to its Known Exploited Vulnerabilities catalog, signaling that active attacks are occurring in the wild.\n\n*Read more about it: https://www.helpnetsecurity.com/2026/01/21/cisco-enterprise-communications-cve-2026-20045/*\n\n---\n<br>\n\n### ShinyHunters Gang Targets Single Sign-On Accounts via Vishing\n\n![ShinyHunters](https://www.bleepstatic.com/content/hl-images/2023/11/17/Hacker_phones.jpg)\n\nDate: 17 November 2023\n\n- The ShinyHunters extortion group claimed responsibility for a wave of [[vishing|Voice Phishing]] attacks targeting corporate employees.\n- By impersonating IT staff over the phone, the attackers trick victims into handing over credentials for Microsoft, Google, and Okta platforms.\n- This campaign has bypassed standard protections to breach corporate SaaS environments and steal internal data for ransom.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/shinyhunters-claim-to-be-behind-sso-account-data-theft-attacks/*\n\n---\n<br>\n\n### Under Armour Investigates Massive 72 Million Record Breach\n\n![Under Armour](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/250px-Under_armour_logo.svg.png)\n\nDate: 23 January 2026\n\n- A massive 343GB database containing the personal details and email addresses of 72 million individuals was reportedly leaked on a hacking forum.\n- According to Have I Been Pwned, the compromised data includes names, dates of birth, genders, geographic locations, and purchase history, though payment information was reportedly not included.\n- The company is working with external forensic experts to verify the scope of the unauthorized access.\n\n*Read more about it: https://www.infosecurity-magazine.com/news/under-armour-investigates-data/*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### Nvidia Closes $20 Billion Acquisition of Groq IP\n\n![Groq Acquisition](https://etcjournal.com/wp-content/uploads/2026/01/chatgpt-image-jan-18-2026-12_13_42-pm.png)\n\nDate: 18 January 2026\n\n- Nvidia has finalized its massive deal to acquire the intellectual property of Groq, a startup known for its high-speed Language Processing Units (LPUs).\n- The acquisition focuses on Groq's breakthrough \"real-time inference\" capabilities, which allow LLMs to run significantly faster than on standard GPUs.\n- This move consolidates Nvidia's power in the AI hardware market, transitioning from a focus on training models to dominating the deployment (inference) phase.\n\n*Read more about it: https://etcjournal.com/2026/01/18/three-biggest-ai-stories-in-jan-2026-real-time-ai-inference/*\n\n---\n<br>\n\n### Global Focus Shifts to AI Data Center Power Constraints\n\n![Power Wall](https://yt3.googleusercontent.com/12DXqfZQBwvHFBp31Teww9briF_9d45RTmGp6fiYScdvI4LZ3xPEfmw54EXV4o6tQMuG1I2t4Q=s160-c-k-c0x00ffffff-no-rj)\n\nDate: 23 January 2026\n\n- Reports from Bloomberg Tech: Asia highlighted that power demand for AI data centers is projected to quadruple over the next decade.\n- Tech giants like Microsoft are aggressively investing in energy innovations to prevent the \"power wall\" from stalling AI model scaling.\n- The shift highlights that the future of AI is now as much about electrical engineering and grid stability as it is about software algorithms.\n\n*Read more about it: https://www.youtube.com/watch?v=7HGp1ZuJqaI*\n\n---\n<br>\n\n## General Technology\n\n### Post-Quantum Cryptography Standards Framework Released\n\n![Post-Quantum Cryptography](https://www.cisa.gov/sites/default/files/images/SVG/header_logo_tagline_update.svg)\n\nDate: 23 January 2026\n\n- CISA and NIST published a new list of product categories that must begin incorporating \"Quantum-Resistant\" algorithms.\n- The guidelines are designed to protect critical infrastructure against future quantum computers capable of breaking current encryption.\n- This marks the beginning of a mandatory transition for federal agencies and tech vendors to update their security protocols.\n\n*Read more about it: https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards*\n\n---\n<br>"
                    },
                    {
                        "id": "2026-01-24",
                        "title": "Week 05",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 24th January - 30th January 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "CyberSecurity",
                            "ArtificialIntelligence",
                            "Space",
                            "IOT"
                        ],
                        "links": [
                            "zero-day",
                            "pii",
                            "credential_stuffing",
                            "supply-chain-attack",
                            "digital_infrastructure",
                            "remote-code-execution",
                            "scada",
                            "tbps",
                            "botnets",
                            "neural_networks",
                            "cisa",
                            "ddos",
                            "bgp",
                            "llm",
                            "environment_variables",
                            "telnet",
                            "social_engineering"
                        ],
                        "group": "2026",
                        "content": "# Week 05\n\n## Cyber Security\n\n### Infrastructure Fragility\n- **Polish Energy Grid Target**: A coordinated cyberattack hit approximately 30 energy facilities in Poland, disrupting operational monitoring. [Read more](https://www.bleepingcomputer.com/news/security/cyberattack-on-polish-energy-grid-impacted-around-30-facilities/)\n- **The [[zero-day|Zero-Day]] Surge**: Ivanti and Fortinet issued emergency warnings for actively exploited flaws in EPMM and FortiCloud SSO, while [[cisa|CISA]] added a critical VMware [[remote-code-execution|RCE]] flaw to its \"Must Patch\" list. [Read more](https://www.bleepingcomputer.com/news/security/ivanti-warns-of-two-epmm-flaws-exploited-in-zero-day-attacks/)\n- **Supply Chain Poisoning**: Security vendor eScan confirmed its update servers were breached to distribute malicious payloads to clients, echoing the Kaseya/SolarWinds methodology. [Read more](https://www.bleepingcomputer.com/news/security/escan-confirms-update-server-breached-to-push-malicious-update/)\n- **The Night Before Christmas**: A new record was set by the Aisuru [[botnets|botnet]] with a massive 31.4 [[tbps|Tbps]] [[ddos|Distributed Denial of Service]] attack, signaling a terrifying scale of botnet mobilization. [Read more](https://www.bleepingcomputer.com/news/security/aisuru-botnet-sets-new-record-with-314-tbps-ddos-attack/)\n- **The Impact**: We are entering an era of [[remote-code-execution|remote code execution]] saturation where the delay between discovery and weaponization is nearly zero. The targeting of [[scada|industrial control systems]] in Poland suggests that state-sponsored actors are testing the resilience of European power grids ahead of wider geopolitical shifts.\n\n---\n\n### The Industrialization of Data Theft\n- **SoundCloud Breach**: A legacy data breach was confirmed to impact 29.8 million accounts, now surfacing on dark web forums. [Read more](https://www.bleepingcomputer.com/news/security/have-i-been-pwned-soundcloud-data-breach-impacts-298-million-accounts/)\n- **Match Group Leak**: User data from Hinge, Tinder, OkCupid, and Match was exposed in a massive breach, highlighting the vulnerability of dating platforms. [Read more](https://www.bleepingcomputer.com/news/security/match-group-breach-exposes-data-from-hinge-tinder-okcupid-and-match/)\n- **Nike Extortion**: Nike is currently investigating a breach after an extortion gang leaked internal files to pressure the company. [Read more](https://www.bleepingcomputer.com/news/security/nike-investigates-data-breach-after-extortion-gang-leaks-files/)\n- **The Impact**: The commodification of [[PII|Personally Identifiable Information]] has moved beyond simple identity theft; it is now fuel for [[social_engineering|targeted social engineering]]. These datasets allow attackers to build high-fidelity profiles for [[credential_stuffing|credential stuffing]] and spear-phishing at an industrial scale.\n\n---\n\n## Artificial Intelligence\n\n### The AI Supply Chain: A New Vector for Malware\n- **Hugging Face Poisoning**: Over 3,000 variants of Android malware were found hosted on Hugging Face, abusing the platform's trust to bypass mobile security. [Read more](https://www.bleepingcomputer.com/news/security/hugging-face-abused-to-spread-thousands-of-android-malware-variants/)\n- **VSCode & AI Extensions**: Malicious AI-themed extensions on the VSCode Marketplace were caught stealing developer data and [[environment_variables|API keys]]. [Read more](https://www.bleepingcomputer.com/news/security/malicious-ai-extensions-on-vscode-marketplace-steal-developer-data/)\n- **Bizarre Bazaar Operation**: Hackers have begun hijacking exposed [[LLM|Large Language Model]] endpoints to perform unauthorized computations and data scraping. [Read more](https://www.bleepingcomputer.com/news/security/hackers-hijack-exposed-llm-endpoints-in-bizarre-bazaar-operation/)\n- **Moltbot Security Risks**: The viral open-source AI assistant Moltbot (formerly Clawdbot) has been flagged for insecure deployments, exposing admin interfaces and sensitive corporate data. [Read more](https://www.bleepingcomputer.com/news/security/viral-moltbot-ai-assistant-raises-concerns-over-data-security/)\n- **The Impact**: Developers are currently the highest-value targets. By compromising the [[supply-chain-attack|AI supply chain]], attackers gain access to the source code and production environments where proprietary [[neural_networks|AI models]] are built, effectively owning the \"brain\" of the corporation.\n\n---\n\n## General Technology & Infrastructure\n\n### Protocol Failures and Patch Cycles\n- **Cloudflare BGP Route Leak**: A misconfiguration at Cloudflare caused a significant BGP route leak, briefly disrupting global traffic flow. [Read more](https://www.bleepingcomputer.com/news/security/cloudflare-misconfiguration-behind-recent-bgp-route-leak/)\n- **Telnet Zombie Infrastructure**: Nearly 800,000 Telnet servers remain exposed to the public internet, providing a massive, insecure pool of resources for botnet recruitment. [Read more](https://www.bleepingcomputer.com/news/security/nearly-800-000-telnet-servers-exposed-to-remote-attacks/)\n- **Windows 11 Fixes**: Microsoft released KB5074105 to address critical boot, sign-in, and activation issues that had been plaguing enterprise deployments. [Read more](https://www.bleepingcomputer.com/news/microsoft/windows-11-kb5074105-update-fixes-boot-sign-in-and-activation-issues/)\n- **The Impact**: Despite the focus on \"Modern Tech,\" the internet's foundation relies on legacy protocols like [[BGP|Border Gateway Protocol]] and [[Telnet|Telnet]] that lack inherent security. A single misconfiguration can still cascade into a global outage, proving that our [[digital_infrastructure|digital infrastructure]] is only as strong as its oldest, weakest link."
                    },
                    {
                        "id": "2026-02-12",
                        "title": "Week 08",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 12 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "CyberSecurity",
                            "ArtificialIntelligence"
                        ],
                        "links": [],
                        "group": "2026",
                        "content": "# Week 08\n\n## Cyber Security\n\n### A Wave of Unexplained Bot Traffic Is Sweeping the Web\n\n![bot-traffic](https://media.wired.com/photos/698d1920a750bbdd23fc5ccb/master/w_1920,c_limit/Made-In-China-Niche-Websites-Seeing-Surge-of-Mysterious-Traffic-From-China-Business-1247521554.jpg)\n\nDate: 12 February 2026\n\n- Bots are bombarding website owners with traffic from China and Singapore.\n- The bots stay on the page for an average of 0 seconds and don\u2019t scroll or click.\n- The traffic is being routed through servers belonging to several major Chinese cloud companies.\n\n*Read more about it: https://www.wired.com/story/made-in-china-niche-websites-are-seeing-a-surge-of-mysterious-traffic-from-china/*\n\n---\n<br>\n\n### Elon Musk\u2019s X Appears to Be Violating US Sanctions by Selling Premium Accounts to Iranian Leaders\n\n![elon-musk](https://www.wired.com/wp-content/uploads/2025/08/Business_Elon-Musk-1200x630.jpg)\n\nDate: 12 February 2026\n\n- Elon Musk's company X appears to be profiting from the very government officials he railed against.\n- A new report from the Tech Transparency Project identified more than two dozen X accounts allegedly run by Iranian government officials, state agencies, and state-run news outlets.\n- The accounts were sharing state-sponsored propaganda at a time when ordinary Iranians had no access to the internet.\n\n*Read more about it: https://www.wired.com/story/elon-musk-x-premium-accounts-iran/*\n\n---\n<br>\n\n### Crypto-Funded Human Trafficking Is Exploding\n\n![crypto-trafficking](https://www.wired.com/wp-content/uploads/2025/08/Business_Human-Trafficking-1200x630.jpg)\n\nDate: 12 February 2026\n\n- Cryptocurrency transactions for human trafficking grew at least 85 percent year over year, researchers say.\n- Chainalysis says it identified Chinese-speaking criminal groups posting advertisements for their offerings to the messaging service Telegram.\n- Many of the posts were found on \u201cguarantee\u201d black markets that run on Telegram channels, such as Xinbi Guarantee.\n\n*Read more about it: https://www.wired.com/story/crypto-funded-human-trafficking-is-exploding/*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### I Tried RentAHuman, Where AI Agents Hired Me to Hype Their AI Startups\n\n![rentahuman](https://media.wired.com/photos/698bed164557fa6856c445dc/1:1/w_1920,c_limit/AI%20taskrabbit%20copy.jpg)\n\nDate: 12 February 2026\n\n- RentAHuman is a new site where AI agents hire humans to perform physical work in the real world.\n- The site looks like a bare-bones version of other well-known freelance sites like Fiverr and UpWork.\n\n*Read more about it: https://www.wired.com/story/i-tried-rentahuman-ai-agents-hired-me-to-hype-their-ai-startups/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-13",
                        "title": "Week 08",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 13 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "ArtificialIntelligence",
                            "CyberSecurity"
                        ],
                        "links": [],
                        "group": "2026",
                        "content": "# Week 08\n\n## Artificial Intelligence\n\n### OpenAI Is Nuking Its 4o Model. China\u2019s ChatGPT Fans Aren\u2019t OK\n\n![openai](https://media.wired.com/photos/698e1b134e0cc71b0d6dee95/master/w_1920,c_limit/OpenAI-Nuking-4o-Model-Business.jpg)\n\nDate: 13 February 2026\n\n- ChatGPT users are fighting to keep the chatbot that powers their romantic partners in the app.\n- OpenAI has sunsetted GPT-4o for app users, and it will cut off access to developers using its API on Monday.\n- Many of the most vocal opponents to 4o\u2019s demise are people who treat their chatbot as an emotional or romantic companion.\n\n*Read more about it: https://www.wired.com/story/openai-nuking-4o-model-china-chatgpt-fans-arent-ok/*\n\n---\n<br>\n\n### Zillow Has Gone Wild for AI\n\n![zillow](https://media.wired.com/photos/698e6de5fb604500de64de72/master/w_1920,c_limit/Backchannel-How-AI-Changed-Zillow-Business-85654719.jpg)\n\nDate: 13 February 2026\n\n- Zillow CEO Jeremy Wacksman says the real estate market is \"bouncing along the bottom\" He expects things to improve only marginally in 2026.\n- Zillow is integrating AI into every aspect of its business, from the way it showcases houses.\n- Wacksman says a handful of people were not meeting a performance bar. Wacksman: \u201cA handful of folks that were not Meeting a Performance Bar\u2019\u2019\n\n*Read more about it: https://www.wired.com/story/backchannel-how-artificial-intelligence-changed-zillow/*\n\n---\n<br>\n\n### Why top talent is walking away from OpenAI and xAI\n\n![top-talent](https://media.wired.com/photos/6983b56827e294ea7eb1b76d/master/w_1920,c_limit/Companies-Wont-Admit-to-Replacing-Workers-with-AI-Business.jpg)\n\nDate: 13 February 2026\n\n- AI companies have been hemorrhaging talent the past few weeks.\n- Half of xAI\u2019s founding team has left the company.\n- OpenAI is facing its own shakeups.\n\n*Read more about it: https://techcrunch.com/video/why-top-talent-is-walking-away-from-openai-and-xai/*\n\n---\n<br>\n\n### Anthropic\u2019s Super Bowl ads mocking AI with ads helped push Claude\u2019s app into the top 10\n\n![anthropic](https://techcrunch.com/wp-content/uploads/2026/02/Claude-app-gettyImages-2216579136.jpg)\n\nDate: 13 February 2026\n\n- Anthropic\u2019s AI chatbot Claude has climbed from No. 41 on the U.S. App Store to become a top 10 app.\n- As of Friday, Claude sits at No. 7; its highest rank to date.\n- The consumer-focused AI app arrived on iOS in May 2024 to a fairly tepid reception.\n\n*Read more about it: https://techcrunch.com/2026/02/13/anthropics-super-bowl-ads-mocking-ai-with-ads-helped-push-claudes-app-into-the-top-10/*\n\n---\n<br>\n\n### OpenAI removes access to sycophancy-prone GPT-4o model\n\n![openai-gpt-4o](https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2195918462.jpg)\n\nDate: 13 February 2026\n\n- OpenAI is retiring five ChatGPT models, including the controversial GPT-4o model.\n- The 4o model has been at the center of a number of lawsuits concerning user self-harm, delusional behavior, and AI psychosis.\n- Thousands of users have rallied against the retirement of 4o.\n\n*Read more about it: https://techcrunch.com/2026/02/13/openai-removes-access-to-sycophancy-prone-gpt-4o-model/*\n\n---\n<br>\n\n### Airbnb says a third of its customer support is now handled by AI in the US and Canada\n\n![airbnb](https://techcrunch.com/wp-content/uploads/2025/05/Airbnb-Summer-feat.jpg?resize=1280,720)\n\nDate: 13 February 2026\n\n- Airbnb says its custom-built AI agent is now handling roughly a third of its customer support issues in North America.\n- If successful, more than 30% of its total customer support tickets will be handled by AI voice and chat in all the languages where it also employs a human customer service agent.\n- The company also touted its recent hire of CTO Ahmad Al-Dahle for his AI expertise.\n\n*Read more about it: https://techcrunch.com/2026/02/13/airbnb-says-a-third-of-its-customer-support-is-now-handled-by-ai-in-the-u-s-and-canada/*\n\n---\n<br>\n\n## Cyber Security\n\n### Fintech lending giant Figure confirms data breach\n\n![fintech](https://techcrunch.com/wp-content/uploads/2026/02/figure-technology-logo-times-squware.jpg?resize=1280,854)\n\nDate: 13 February 2026\n\n- Figure Technology, a blockchain-based lending company, confirmed it experienced a data breach.\n- A spokesperson said the breach originated when an employee was tricked with a social engineering attack.\n- The hacking group ShinyHunters took responsibility for the hack on its official dark web leak website.\n\n*Read more about it: https://techcrunch.com/2026/02/13/fintech-lending-giant-figure-confirms-data-breach/*\n\n---\n<br>\n\n### Indian pharmacy chain giant exposed customer data and internal systems\n\n![indian-pharmacy](https://techcrunch.com/wp-content/uploads/2026/02/medications-drugs-2237708773.jpg?resize=1280,848)\n\nDate: 13 February 2026\n\n- A security lapse allowed outsiders to gain full administrative control of DavaIndia Pharmacy's website.\n- The issue affected the pharmacy arm of Zota Healthcare, which operates a large network of retail outlets across India.\n- The vulnerability was fixed within weeks, though confirmation from the company took longer.\n\n*Read more about it: https://techcrunch.com/2026/02/13/indias-major-pharmacy-chain-exposed-customer-data-and-internal-systems/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-14",
                        "title": "Week 08",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 14 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "ArtificialIntelligence",
                            "GeneralTechnology"
                        ],
                        "links": [],
                        "group": "2026",
                        "content": "# Week 08\n\n## Artificial Intelligence\n\n### Is safety \u2018dead\u2019 at xAI?\n\n![xai](https://techcrunch.com/wp-content/uploads/2025/07/GettyImages-2207699717.jpg?resize=1280,853)\n\nDate: 14 February 2026\n\n- At least 11 engineers and two co-founders have said they\u2019re leaving xAI.\n- Employees have become disillusioned by the company\u2019s disregard for safety.\n- One source said, \u201cSafety is a dead org at xAI,\u201d while the other said Musk is \u201cactively is trying to make the model more unhinged.\u201d\n\n*Read more about it: https://techcrunch.com/2026/02/14/is-safety-is-dead-at-xai/*\n\n---\n<br>\n\n### India doubles down on state-backed venture capital, approving $1.1B fund\n\n![india](https://techcrunch.com/wp-content/uploads/2025/09/india-flag.jpg?resize=1280,853)\n\nDate: 14 February 2026\n\n- India has cleared a $1.1 billion state-backed venture capital program.\n- The fund will channel government money into startups through private investors.\n- The program is structured as a fund of funds, a common venture capital model.\n\n*Read more about it: https://techcrunch.com/2026/02/14/india-doubles-down-on-state-backed-venture-capital-approving-1-1b-fund/*\n\n---\n<br>\n\n## General Technology\n\n### Robot Dogs Are on Going on Patrol at the 2026 World Cup in Mexico\n\n![robot-dogs](https://media.wired.com/photos/698f7d2569fc972689ff804e/3:2/w_1920,c_limit/whatsapp-image-2026-02-12-at-12.45.29.jpeg)\n\nDate: 14 February 2026\n\n- Authorities in Mexico\u2019s Guadalupe, Nuevo Le\u00f3n, this week unveiled four robot dogs that will be part of the security devices at BBVA Stadium.\n- The \u201cK9-X\u201d unit functions as a kind of first responder only.\n- The robot dogs are not armed, but each unit incorporates video cameras, night vision, and communication systems.\n\n*Read more about it: https://www.wired.com/story/robot-dogs-are-on-going-on-patrol-at-the-2026-world-cup-in-mexico/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-15",
                        "title": "Week 08",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 15 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "CyberSecurity",
                            "ArtificialIntelligence"
                        ],
                        "links": [],
                        "group": "2026",
                        "content": "# Week 08\n\n## Cyber Security\n\n### Odido data breach exposes personal info of 6.2 million customers\n\n![odido](https://www.bleepstatic.com/content/hl-images/2026/02/12/odido.jpg)\n\nDate: 15 February 2026\n\n- Dutch telecommunications provider Odido is warning that it suffered a cyberattack that reportedly exposed the personal data of 6.2 million customers.\n- Odido says that the attackers breached their customer contact system.\n- The company is now emailing all impacted customers who should receive the notification within 48 hours.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/odido-data-breach-exposes-personal-info-of-62-million-customers/*\n\n---\n<br>\n\n### Romania's oil pipeline operator Conpet confirms data stolen in attack\n\n![conpet](https://www.bleepstatic.com/content/hl-images/2026/02/05/Conpet.jpg)\n\nDate: 15 February 2026\n\n- Romania's national oil pipeline operator, Conpet S.A., confirmed that the Qilin ransomware gang stole company data in an attack last week.\n- In a press release the day following the incident, the company said that the threat actor breached its corporate IT infrastructure, but operations remained unaffected.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/romanias-oil-pipeline-operator-conpet-confirms-data-stolen-in-attack/*\n\n---\n<br>\n\n### Critical BeyondTrust RCE flaw now exploited in attacks, patch now\n\n![beyondtrust](https://www.bleepstatic.com/content/hl-images/2026/02/09/BeyondTrust.jpg)\n\nDate: 15 February 2026\n\n- Vulnerability in BeyondTrust Remote Support and Privileged Remote Access appliances is now being exploited in attacks after a PoC was published online.\n- Tracked as CVE-2026-1731 and assigned a near-maximum CVSS score of 9.9.\n- Hacktron discovered the vulnerability and responsibly disclosed it to BeyondTrust on January 31.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/critical-beyondtrust-rce-flaw-now-exploited-in-attacks-patch-now/*\n\n---\n<br>\n\n### Russia tries to block WhatsApp, Telegram in communication blockade\n\n![whatsapp](https://www.bleepstatic.com/content/hl-images/2025/09/23/WhatsApp.jpg)\n\nDate: 15 February 2026\n\n- The Russian government is trying to block WhatsApp in the country.\n- The instant messenger's parent company, Meta, has been designated as an \u201cextremist\u201d entity in Russia since 2022.\n- WhatsApp announced the action against it on X, calling it \u201ca backwards step\u201d that \u201ccan only lead to less safety for people in Russia\u201d\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/russia-tries-to-block-whatsapp-telegram-in-communication-blockade/*\n\n---\n<br>\n\n### Louis Vuitton, Dior, and Tiffany fined $25 million over data breaches\n\n![lvmh](https://www.bleepstatic.com/content/hl-images/2026/02/13/0_LVMH.jpg)\n\nDate: 15 February 2026\n\n- Luxury fashion brands Louis Vuitton, Christian Dior Couture, and Tiffany fined $25 million.\n- All three suffered data breaches after hackers gained access to their cloud-based customer management service.\n- The breaches at the three regional brands last year exposed sensitive customer data.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/louis-vuitton-dior-and-tiffany-fined-25-million-over-data-breaches/*\n\n---\n<br>\n\n### Claude LLM artifacts abused to push Mac infostealers in ClickFix attack\n\n![claude](https://www.bleepstatic.com/content/hl-images/2026/02/13/Claude_chats.jpg)\n\nDate: 15 February 2026\n\n- More than 10,000 users have accessed the content with dangerous instructions.\n- Malicious results promoted on Google Search lead to either a public Claude artifact or a Medium article impersonating Apple Support.\n- Running the command in Terminal fetches a malware loader for the MacSync infostealer, which exfiltrates sensitive information.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/claude-llm-artifacts-abused-to-push-mac-infostealers-in-clickfix-attack/*\n\n---\n<br>\n\n### Fake job recruiters hide malware in developer coding challenges\n\n![north](https://www.bleepstatic.com/content/hl-images/2024/08/12/north-korean-hackers.jpg)\n\nDate: 15 February 2026\n\n- A new fake recruiter campaign from North Korean threat actors is targeting JavaScript and Python developers with cryptocurrency-related tasks.\n- The activity has been ongoing since at least May 2025 and is characterized by modularity, which allows the threat actor to quickly resume it in case of partial compromise.\n- In total, researchers found 192 malicious packages related to this campaign.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/fake-job-recruiters-hide-malware-in-developer-coding-challenges/*\n\n---\n<br>\n\n### Snail mail letters target Trezor and Ledger users in crypto-theft attacks\n\n![ledger](https://www.bleepstatic.com/content/hl-images/2026/02/13/ledger-zoom.jpg)\n\nDate: 15 February 2026\n\n- Threat actors are sending physical letters pretending to be from Trezor and Ledger.\n- Letters claim recipients must complete a mandatory \"Authentication Check\" or \"Transaction Check\" to avoid losing access to wallet functionality.\n- Threat actors are also sending QR codes that lead to malicious websites.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/snail-mail-letters-target-trezor-and-ledger-users-in-crypto-theft-attacks/*\n\n---\n<br>\n\n### One threat actor responsible for 83% of recent Ivanti RCE attacks\n\n![ivanti](https://www.bleepstatic.com/content/hl-images/2023/07/24/Ivanti_headpic.jpg)\n\nDate: 15 February 2026\n\n- A single IP address hosted on bulletproof infrastructure is responsible for over 83% of exploitation activity related to the two vulnerabilities.\n- Between February 1st and 9th, the monitoring platform observed 417 exploitation sessions originating from 8 unique source IP addresses.\n- A sharp spike occurred on February 8, with 269 recorded sessions in a single day.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/one-threat-actor-responsible-for-83-percent-of-recent-ivanti-rce-attacks/*\n\n---\n<br>\n\n### Pastebin comments push ClickFix JavaScript attack to hijack crypto swaps\n\n![crypto](https://www.bleepstatic.com/content/hl-images/2024/12/05/Cryptocurrency.jpg)\n\nDate: 15 February 2026\n\n- A new ClickFix-style attack tricks cryptocurrency users into executing malicious JavaScript in their browser.\n- The campaign relies on social engineering that promises large profits from a supposed Swapzone.io arbitrage exploit.\n- It could be the first known ClickFix attack to use JavaScript to alter a webpage's functionality for a malicious purpose.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/pastebin-comments-push-clickfix-javascript-attack-to-hijack-crypto-swaps/*\n\n---\n<br>\n\n### Google\u2019s AI Overviews Can Scam You. Here\u2019s How to Stay Safe\n\n![google](https://media.wired.com/photos/698d20ce616dca42b2e62f59/1:1/w_1920,c_limit/gear-google-ai-2250469163.jpg)\n\nDate: 15 February 2026\n\n- Google's AI answers are being injected with fraudulent phone numbers.\n- Scammers are using these numbers to trick people into handing over payment details.\n- Credit unions and banks are also warning their customers about these scams.\n\n*Read more about it: https://www.wired.com/story/googles-ai-overviews-can-scam-you-heres-how-to-stay-safe/*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### OpenClaw founder Peter Steinberger is joining OpenAI\n\n![openclaw](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/STKB382_OPEN_CLAW_D.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1080)\n\nDate: 15 February 2026\n\n- Peter Steinberger, the man behind the trendy AI agent OpenClaw, is joining OpenAI.\n- Sam Altman announced on X that Steinberger has \u201ca lot of amazing ideas\u201d about getting AI agents to interact with each other.\n- Steinberger says he wants to change the world, not build a large company.\n\n*Read more about it: https://www.theverge.com/ai-artificial-intelligence/879623/openclaw-founder-peter-steinberger-joins-openai*\n\n---\n<br>\n\n### Anthropic and the Pentagon are reportedly arguing over Claude usage\n\n![anthropic](https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1252170580.jpg?resize=1280,854)\n\nDate: 15 February 2026\n\n- The Pentagon is reportedly pushing AI companies to allow the U.S. military to use their technology for \u201call lawful purposes,\u201d but Anthropic is pushing back.\n- The government is reportedly making the same demand to OpenAI, Google, and xAI.\n- Anthropic has reportedly been the most resistant.\n\n*Read more about it: https://techcrunch.com/2026/02/15/anthropic-and-the-pentagon-are-reportedly-arguing-over-claude-usage/*\n\n---\n<br>\n\n### Longtime NPR host David Greene sues Google over NotebookLM voice\n\n![npr](https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-837551280.jpg?resize=1280,720)\n\nDate: 15 February 2026\n\n- David Greene, the longtime host of NPR\u2019s \u201cMorning Edition,\u201d is suing Google.\n- He alleges that the male podcast voice in the company\u201ds NotebookLM tool is based on Greene.\n- Greene said that after friends, family members, and coworkers began emailing him about the resemblance, he became convinced that the voice was replicating his cadence and intonation.\n\n*Read more about it: https://techcrunch.com/2026/02/15/longtime-npr-host-david-greene-sues-google-over-notebooklm-voice/*\n\n---\n<br>\n\n### Blackstone backs Neysa in up to $1.2B financing as India pushes to build domestic AI infrastructure\n\n![ney](https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1156074432.jpg?resize=1280,853)\n\nDate: 15 February 2026\n\n- Neysa, an Indian AI infrastructure startup, has secured backing from U.S. private equity firm Blackstone.\n- The deal comes as demand for AI computing surges globally, creating supply constraints for specialized chips and data center capacity.\n- Neysa operates in this emerging segment, positioning itself as a provider of customized, GPU-first infrastructure.\n- The startup employs 110 people across offices in Mumbai, Bengaluru, and Chennai. Founded in 2023, the startup is expected to be profitable by 2023.\n\n*Read more about it: https://techcrunch.com/2026/02/15/blackstone-backs-neysa-in-up-to-1-2b-financing-as-india-pushes-to-build-domestic-ai-compute/*\n\n---\n<br>\n\n### As AI data centers hit power limits, Peak XV backs Indian startup C2i to fix the bottleneck\n\n![c2i](https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1195233690.jpg?resize=1280,827)\n\nDate: 15 February 2026\n\n- C2i Semiconductors has raised $15 million in a Series A round led by Peak XV Partners.\n- The investment comes as data-center energy demand accelerates worldwide.\n- C2i is redesigning power delivery as a single, plug-and-play \u2018grid-to-GPU\u2019 system.\n- C2i's bet reflects how India\u2019s semiconductor design ecosystem has matured in recent years. \u201cThe way you should look at semiconductors in India is, this is like 2008 e-commerce,\u201d said Anandan.\n\n*Read more about it: https://techcrunch.com/2026/02/15/as-ai-data-centers-hit-power-limits-peak-xv-backs-indian-startup-c2i-to-fix-the-bottleneck/*\n\n---\n<br>\n\n### Hollywood isn\u2019t happy about the new Seedance 2.0 video generator\n\n![seedance](https://techcrunch.com/wp-content/uploads/2020/08/GettyImages-1263876301.jpeg)\n\nDate: 15 February 2026\n\n- Chinese company ByteDance launched a new AI video model called Seedance 2.0 earlier this week.\n- It allows users to create videos (currently limited to 15 seconds in length) by just entering a text prompt.\n- Seedance quickly drew criticism for an apparent lack of guardrails around the ability to use the likeness of real people.\n\n*Read more about it: https://techcrunch.com/2026/02/15/hollywood-isnt-happy-about-the-new-seedance-2-0-video-generator/*\n\n---\n<br>\n\n### The great computer science exodus (and where students are going instead)\n\n![seedance](https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-827810708.jpg?resize=1280,854)\n\nDate: 15 February 2026\n\n- For the first time since the dot-com crash, computer science enrollment dropped.\n- In China, fluency with AI isn\u2019t optional anymore; it\u2019s table stakes. U.S. universities are scrambling to catch up.\n- The ban on ChatGPT is ancient history at this point. The question now is whether American universities can move fast enough or whether they\u2019ll keep arguing about what to do.\n\n*Read more about it: https://techcrunch.com/2026/02/15/the-great-computer-science-exodus-and-where-students-are-going-instead/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-16",
                        "title": "Week 09",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 16 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "CyberSecurity",
                            "ArtificialIntelligence"
                        ],
                        "links": [],
                        "group": "2026",
                        "content": "# Week 09\n\n## Cyber Security\n\n### Apple starts testing end-to-end encrypted RCS messages on iPhone\n\nDate: 16 February 2026\n\n- Apple is starting to test end-to-end encrypted (E2EE) RCS messages with the developer beta of iOS 26.4 released Monday.\n- Apple announced plans last year to support the feature, and once fully available, it will let iPhone and Android users send encrypted messages to each other across platforms.\n\n*Read more about it: https://www.theverge.com/tech/879792/apple-iphone-android-rcs-messages-end-to-end-encrypted*\n\n---\n<br>\n\n### Passwords to passkeys: Staying ISO 27001 compliant in a passwordless era\n\nDate: 16 February 2026\n\n- Passwords have powered digital authentication for decades. Passkeys, built on FIDO2 and WebAuthn standards, are like the latest GPS technology.\n- More than 15 billion online accounts now support passkeys ;  double the figure from 2023.\n- Password-related issues account for 20-40% of all help desk calls, says Gartner. Microsoft's shift to passkeys as the default sign-in method represents a significant industry move away from this support burden.\n- Passkeys naturally align with multiple compliance requirements. Passkeys represent a fundamental shift in authentication security.\n- Success requires risk-based prioritization, comprehensive documentation, and thoughtful management of the transition period. Passwork as a password manager provides enterprise-grade passkey support.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/passwords-to-passkeys-staying-iso-27001-compliant-in-a-passwordless-era/*\n\n---\n<br>\n\n### Infostealer malware found stealing OpenClaw secrets for first time\n\nDate: 16 February 2026\n\n- OpenClaw is a local-running AI agent framework that maintains a persistent configuration and memory environment on the user's machine.\n- The tool can access local files, log in to email and communication apps on the host, and interact with online services.\n- HudsonRock had predicted this development since late last month, calling OpenClaw \"the new primary target for infostealers\".\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/infostealer-malware-found-stealing-openclaw-secrets-for-first-time/*\n\n---\n<br>\n\n### CTM360: Lumma Stealer and Ninja Browser malware campaign abusing Google Groups\n\nDate: 16 February 2026\n\n- CTM360 reports that more than 4,000 malicious Google Groups and 3,500 Google-hosted URLs are being used in an active malware campaign targeting global organizations.\n- The attackers abuse Google\u2019s trusted ecosystem to distribute credential-stealing malware and establish persistent access on compromised devices.\n- The campaign highlights a broader trend: attackers are increasingly weaponizing trusted SaaS platforms as delivery infrastructure to evade detection.\n- The findings were published in CTM360\u2019s February 2026 threat intelligence report.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/ctm360-lumma-stealer-and-ninja-browser-malware-campaign-abusing-google-groups/*\n\n---\n<br>\n\n### New ClickFix attack abuses nslookup to retrieve PowerShell payload via DNS\n\nDate: 16 February 2026\n\n- DNS queries are being used as part of ClickFix social engineering attacks to deliver malware.\n- ClickFix attacks typically trick users into manually executing malicious commands.\n- This new variant uses a novel technique in which an attacker-controlled DNS server delivers the second-stage payload.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-clickfix-attack-abuses-nslookup-to-retrieve-powershell-payload-via-dns/*\n\n---\n<br>\n\n## Artificial Intelligence\n\n### Let\u2019s talk about Ring, lost dogs, and the surveillance state\n\nDate: 16 February 2026\n\n- The CEO of Ring talks about how AI can help reduce crime in neighborhoods.\n- He says the idea of all-knowing private security guards in a neighborhood is a dystopia.\n- AI can also help make cameras more intelligent, he says.\n- CNN.com will feature iReporter photos in a weekly Travel Snapshots gallery. Visit CNN.com/Travel each week for a new gallery of snapshots from around the world.\n\n*Read more about it: https://www.theverge.com/podcast/879203/ring-search-party-super-bowl-ai-surveillance-privacy-security*\n\n---\n<br>\n\n### After spooking Hollywood, ByteDance will tweak safeguards on new AI model\n\nDate: 16 February 2026\n\n- TikTok creator ByteDance says it is working to improve safeguards on its new AI video generator.\n- Disney, Paramount, and Hollywood trade groups accused the tool of violating copyright protections.\n- Concerns were raised after hyperrealistic videos generated by the Seedance 2.0 model went viral last week.\n\n*Read more about it: https://www.theverge.com/ai-artificial-intelligence/879644/bytedance-seedance-safeguards-ai-video-copyright-infringement*\n\n---\n<br>\n\n### After all the hype, some AI experts don\u2019t think OpenClaw is all that exciting\n\nDate: 16 February 2026\n\n- Moltbook, a Reddit clone where AI agents could communicate with one another, was hacked. The incident is a microcosm of OpenClaw and its underwhelming promise.\n- It is technology that seems novel and exciting, but some AI experts think that its inherent cybersecurity flaws are rendering the technology unusable.\n- OpenClaw allows AI agents to post, comment, and browse on the website. The problem is that AI agents may never be able to overcome the thing that makes them so powerful: they can\u2019t think critically like humans can.\n- For now, the industry is stuck: for agentic AI to unlock the productivity that tech evangelists think is possible, it can't be so vulnerable. \u201cSpeaking frankly, I would realistically tell any normal layman, don\u2019t use it right now,\u201d Hammond said.\n\n*Read more about it: https://techcrunch.com/2026/02/16/after-all-the-hype-some-ai-experts-dont-think-openclaw-is-all-that-exciting/*\n\n---\n<br>\n\n### Flapping Airplanes on the future of AI: \u2018We want to try really radically different things\u2019\n\nDate: 16 February 2026\n\n- Flapping Airplanes is a new AI lab focused on finding less data-hungry ways to train AI. With $180 million in seed funding, they\u2019ll have plenty of runway to figure it out.\n- Flapping Airplanes is the name of the company behind a new generation of AI. The company's founder, Aidan Asher, says the company is not trying to recreate the human brain. Instead, it's trying to create a more abstract intelligence that takes a different path.\n- Asher: We find it really, really perplexing that you need all the Internet to really get this human intelligence.\n- Ben: One of the advantages of doing deep, fundamental research is that, somewhat paradoxically, it is much cheaper to do really crazy, radical ideas.\n- Asher: Being able to scale up our ideas is certainly relevant to our company.\n- Aidan: I think the current models live somewhere on that spectrum. I don\u2019t think we\u2019re very close to God-in-a-box, in my opinion. It\u2019s possible that as you train models on less data, you really force the model to have incredibly deep understandings.\n- Aidan: We\u2019re not trying to be better, per se, we\u2019ve got to be different. All of these systems will almost certainly have different trade offs of them. You\u2019ll get an advantage somewhere, and it\u2019s a big world out there.\n- Asher: We are looking for exceptional people who are trying to change the field and change the world. We\u2019ve actually had some really cool conversations where people, like, send us very long essays about why they think it\u2019s impossible to do.\n\n*Read more about it: https://techcrunch.com/2026/02/16/flapping-airplanes-on-the-future-of-ai-we-want-to-try-really-radically-different-things/*\n\n---\n<br>\n\n### How Ricursive Intelligence raised $335M at a $4B valuation in 4 months\n\nDate: 16 February 2026\n\n- Anna Goldie, CEO, and Azalia Mirhoseini, CTO, are co-founders of Ricursive Intelligence.\n- They earned acclaim at Google by creating the Alpha Chip, an AI tool that could generate solid chip layouts in hours. The tool helped design three generations of Google's Tensor Processing Units.\n- Ricursive is building a platform that lets AI agents design their own chips. The AI agent will be able to learn and improve as it learns from each new chip.\n- The founders say they have heard from every big chip maker you can imagine.\n\n*Read more about it: https://techcrunch.com/2026/02/16/how-ricursive-intelligence-raised-335m-at-a-4b-valuation-in-4-months/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-17",
                        "title": "Week 09",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 17 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "ArtificialIntelligence",
                            "CyberSecurity",
                            "GeneralTechnology"
                        ],
                        "links": [],
                        "group": "2026",
                        "content": "# Week 09\n\n## Artificial Intelligence\n\n### Google\u2019s AI search results will make links more obvious\n\nDate: 17 February 2026\n\n- Google says it will now display links more prominently inside its AI-powered features in Search.\n- A list of links will now appear inside a pop-up when you hover over the sources in AI Overviews and AI Mode on desktop.\n- The European Commission also began investigating the company\u2019s AI search features.\n\n*Read more about it: https://www.theverge.com/tech/880475/google-ai-overviews-ai-mode-links-update*\n\n---\n<br>\n\n### India bids to attract over $200B in AI infrastructure investment by 2028\n\nDate: 17 February 2026\n\n- India has set out an aggressive push to attract more than $200 billion in artificial-intelligence infrastructure investment over the next two years.\n- To attract investment, the government is rolling out a mix of tax incentives, state-backed venture capital, and policy support.\n- The push also faces structural challenges, including access to reliable power and water for energy-intensive data centers.\n\n*Read more about it: https://techcrunch.com/2026/02/17/india-bids-to-attract-over-200b-in-ai-infrastructure-investment-by-2028/*\n\n---\n<br>\n\n### European Parliament blocks AI on lawmakers\u2019 devices, citing security risks\n\nDate: 17 February 2026\n\n- The European Parliament has reportedly blocked lawmakers from using the baked-in AI tools on their work devices.\n- The move comes as several EU member countries reevaluate their relationships with U.S. tech giants.\n- The EU has some of the strongest data protection rules in the world.\n\n*Read more about it: https://techcrunch.com/2026/02/17/european-parliament-blocks-ai-on-lawmakers-devices-citing-security-risks/*\n\n---\n<br>\n\n### Running AI models is turning into a memory game\n\nDate: 17 February 2026\n\n- The price for DRAM chips has jumped roughly 7x in the last year.\n- There\u2019s a growing discipline in orchestrating all that memory.\n- Companies that master it will be able to make the same queries with fewer tokens.\n\n*Read more about it: https://techcrunch.com/2026/02/17/running-ai-models-is-turning-into-a-memory-game/*\n\n---\n<br>\n\n### Mistral AI buys Koyeb in first acquisition to back its cloud ambitions\n\nDate: 17 February 2026\n\n- Koyeb was founded in 2020 by three former employees of French cloud provider Scaleway. It helps developers process data without worrying about server infrastructure.\n- Koyeb expects its platform to transition into a \u2018core component\u2019 of Mistral Compute.\n\n*Read more about it: https://techcrunch.com/2026/02/17/mistral-ai-buys-koyeb-in-first-acquisition-to-back-its-cloud-ambitions/*\n\n---\n<br>\n\n### Anthropic releases Sonnet 4.6\n\nDate: 17 February 2026\n\n- Anthropic has released a new version of its midsized Sonnet model.\n- Sonnet 4.6 will be the default model for Free and Pro plan users.\n- The beta release of the new model includes a context window of 1 million tokens.\n\n*Read more about it: https://techcrunch.com/2026/02/17/anthropic-releases-sonnet-4-6/*\n\n---\n<br>\n\n## Cyber Security\n\n### Meta and Other Tech Firms Put Restrictions on Use of OpenClaw Over Security Fears\n\nDate: 17 February 2026\n\n- OpenClaw is a free, open source AI tool that can take control of a user\u2019s computer.\n- A Meta executive says he recently told his team to keep OpenClaw off their regular work laptops or risk losing their jobs.\n- At another tech company, Valere, which works on software for organizations including Johns Hopkins University, an employee posted about the tool on internal Slack.\n\n*Read more about it: https://www.wired.com/story/openclaw-banned-by-tech-companies-as-security-concerns-mount/*\n\n---\n<br>\n\n### Man arrested for demanding reward after accidental police data leak\n\nDate: 17 February 2026\n\n- Dutch authorities arrest a 40-year-old man after he downloaded confidential documents.\n- The man allegedly refused to delete them unless he received \"something in return\"\n- Police detained the suspect at his Prinses Beatrixstraat residence in Ridderkerk.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/man-arrested-for-demanding-reward-after-accidental-police-data-leak/*\n\n---\n<br>\n\n### Eurail says stolen traveler data now up for sale on dark web\n\nDate: 17 February 2026\n\n- Eurail B.V. is a Netherlands-based firm that manages and sells passes for train travel across Europe.\n- Last month, the company disclosed that it suffered a data breach when threat actors gained unauthorized access to its customer database.\n- Customers who may have had their information exposed in this incident should be vigilant to potential phishing and scam attempts.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/eurail-says-stolen-traveler-data-now-up-for-sale-on-dark-web/*\n\n---\n<br>\n\n### Washington Hotel in Japan discloses ransomware infection incident\n\nDate: 17 February 2026\n\n- The Washington Hotel brand in Japan has announced that that its servers were compromised in a ransomware attack, exposing various business data.\n- The hospitality group has established an internal task force and engaged external cybersecurity experts to assess the impact of the intrusion.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/washington-hotel-in-japan-discloses-ransomware-infection-incident/Washington Hotel in Japan discloses ransomware infection incident*\n\n---\n<br>\n\n## General Technology\n\n### Now Pixel 9 phones can transfer files with AirDrop, too\n\nDate: 17 February 2026\n\n- Google has expanded AirDrop support to the Pixel 9 series.\n- Owners of (almost all) Pixel 9 phones will be able to send and receive files a little more easily with Apple devices.\n- Files sent from a Pixel to an iPhone, Mac, or iPad will appear as AirDrop transfers.\n\n*Read more about it: https://www.theverge.com/tech/880210/google-pixel-9-airdrop-quick-share*\n\n---\n<br>\n\n### These are the countries moving to ban social media for children\n\nDate: 17 February 2026\n\n- Australia became the world\u2019s first country to ban social media for children under 16 in December 2025.\n- The ban blocks children from using Facebook, Instagram, Snapchat, Threads, TikTok, X, YouTube, Reddit, Twitch, and Kick.\n- Critics, including Amnesty Tech, have said such bans are ineffective.\n\n*Read more about it: https://techcrunch.com/2026/02/17/social-media-ban-children-countries-list/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-18",
                        "title": "Week 09",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 18 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "ArtificialIntelligence",
                            "CyberSecurity",
                            "GeneralTechnology"
                        ],
                        "links": [
                            "vpn",
                            "malware",
                            "agentic-ai",
                            "ransomware"
                        ],
                        "group": "2026",
                        "content": "# Week 09\n\n## Artificial Intelligence\n\n### Meta\u2019s new deal with Nvidia buys up millions of AI chips\n\nDate: 18 February 2026\n\n- Meta has struck a multiyear deal to expand its data centers with millions of Nvidia\u2019s Grace and Vera CPUs and Blackwell and Rubin GPUs.\n- Meta is also working on its own in-house chips for running AI models, but has run into \u201ctechnical challenges and rollout delays\u201d with its chip strategy.\n\n*Read more about it: https://www.theverge.com/ai-artificial-intelligence/880513/nvidia-meta-ai-grace-vera-chips*\n\n---\n<br>\n\n### Scout AI is training large AI models and agents to automate chores\n\nDate: 18 February 2026\n\n- Scout AI is training large AI models and [[agentic-ai|agents]] to automate chores.\n- The big difference is that instead of writing code, the [[agentic-ai|agents]] are designed to seek and destroy things in the physical world with exploding drones.\n- Many policymakers believe that harnessing AI will be the key to future military dominance.\n\n*Read more about it: https://www.wired.com/story/ai-lab-scout-ai-is-using-ai-agents-to-blow-things-up/*\n\n---\n<br>\n\n### The Rise of RentAHuman, the Marketplace Where Bots Put People to Work\n\nDate: 18 February 2026\n\n- RentAHuman allows users to connect AI [[agentic-ai|agents]] to its Model Context Protocol server.\n- Users can search, book, and pay for humans to carry out tasks in \u201cmeatspace\u201d\n- Think of it like Fiverr, but doing away with the human recruiter and letting autonomous bots do the hiring.\n\n*Read more about it: https://www.wired.com/story/ai-agent-rentahuman-bots-hire-humans/*\n\n---\n<br>\n\n## Cyber Security\n\n### Spain orders NordVPN, ProtonVPN to block LaLiga piracy sites\n\nDate: 18 February 2026\n\n- A Spanish court has granted precautionary measures against NordVPN and ProtonVPN.\n- The two popular [[vpn|VPN]] providers have been ordered to block 16 websites that facilitate piracy of football matches.\n- The measures were taken 'inaudita parte', meaning that the defendants weren\u2019t called to participate in a hearing.\n\n*Read more about it: https://www.bleepingcomputer.com/news/legal/spain-orders-nordvpn-protonvpn-to-block-laliga-piracy-sites/*\n\n---\n<br>\n\n### Flaws in popular VSCode extensions expose developers to attacks\n\nDate: 18 February 2026\n\n- Vulnerabilities with high to critical severity ratings affecting popular Visual Studio Code (VSCode) extensions collectively downloaded more than 128 million times.\n- Researchers at application security company Ox Security discovered the flaws and tried to disclose them since June 2025.\n- VSCode extensions are add-ons that expand the functionality of Microsoft's integrated development environment (IDE)\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/flaws-in-popular-vscode-extensions-expose-developers-to-attacks/*\n\n---\n<br>\n\n### Chinese hackers exploiting Dell zero-day flaw since mid-2024\n\nDate: 18 February 2026\n\n- UNC6201 group exploited a maximum-severity hardcoded-credential vulnerability (tracked as CVE-2026-22769)\n- Once inside a victim's network, UNC6201 deployed several [[malware]] payloads.\n- Attackers also used novel techniques to move stealthily across victims' networks.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/chinese-hackers-exploiting-dell-zero-day-flaw-since-mid-2024/*\n\n---\n<br>\n\n### Notepad++ boosts update security with \u2018double-lock\u2019 mechanism\n\nDate: 18 February 2026\n\n- Notepad++ has adopted a \"double-lock\" design for its update mechanism to address recently exploited security gaps.\n- The new mechanism landed in Notepad++ version 8.9.2, announced yesterday.\n- The combination of the two verification mechanisms adds to a more robust \"and effectively unexploitable\" update process.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/notepad-plus-plus-boosts-update-security-with-double-lock-mechanism/*\n\n---\n<br>\n\n### What 5 Million Apps Revealed About Secrets in JavaScript\n\nDate: 18 February 2026\n\n- Intruder\u2019s research team built a new secrets detection method and scanned 5 million applications specifically looking for secrets hidden in JavaScript bundles.\n- The results of applying our new detection method at scale were staggering. The output file alone was over 100MB of plain text, containing more than 42,000 exposed tokens across 334 different secret types.\n- DAST is more expensive, requires in-depth configuration, and in reality is usually reserved for a small number of high-value applications. SAST, repository scanning, and IDE guardrails catch real issues and prevent entire classes of exposure. But as this research shows, they do not cover every path a secret can take into production.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/what-5-million-apps-revealed-about-secrets-in-javascript/*\n\n---\n<br>\n\n### New Keenadu backdoor found in Android firmware, Google Play apps\n\nDate: 18 February 2026\n\n- Keenadu has been found embedded in firmware from multiple device brands.\n- Malware can compromise all installed applications and gain unrestricted control over infected devices.\n- As of February 2026, Kaspersky has confirmed 13,000 infected devices, many in Russia, Japan, Germany, Brazil, and the Netherlands.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-keenadu-backdoor-found-in-android-firmware-google-play-apps/*\n\n---\n<br>\n\n### Poland arrests suspect linked to Phobos ransomware operation\n\nDate: 18 February 2026\n\n- Polish police have detained a 47-year-old man suspected of ties to the Phobos [[ransomware]] group.\n- Police seized computers and mobile phones containing stolen credentials, credit card numbers, and server access data.\n- The action is part of \"Operation Aether,\" a broader international effort coordinated by Europol.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/poland-arrests-suspect-linked-to-phobos-ransomware-operation/*\n\n---\n<br>\n\n### Ireland now also investigating X over Grok-made sexual images\n\nDate: 18 February 2026\n\n- Ireland's Data Protection Commission (DPC) has opened a formal investigation into X.\n- DPC also serves as lead European Union privacy regulator for X due to company's Irish headquarters.\n- Inquiry will examine whether X Internet Unlimited Company (X's EU subsidiary) complied with core GDPR obligations.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/ireland-now-also-investigating-x-over-grok-made-sexual-images/*\n\n---\n<br>\n\n### A Vast Trove of Exposed Social Security Numbers May Put Millions at Risk of Identity Theft\n\nDate: 18 February 2026\n\n- Researchers found an exposed, publicly accessible database online in January that appeared to contain a trove of Americans\u2019 sensitive personal data.\n- The raw totals included roughly 3 billion email addresses and passwords as well as about 2.7 billion records that included Social Security numbers.\n\n*Read more about it: https://www.wired.com/story/a-mega-trove-of-exposed-social-security-numbers-underscores-critical-identity-theft-risks/*\n\n---\n<br>\n\n## General Technology\n\n### Microsoft Teams outage affects users in United States, Europe\n\nDate: 18 February 2026\n\n- Microsoft Teams users are experiencing delays and access issues.\n- The ongoing incident is causing problems joining meetings and signing in.\n- Microsoft has not disclosed how many users are affected.\n\n*Read more about it: https://www.bleepingcomputer.com/news/microsoft/microsoft-teams-outage-affects-users-in-united-states-europe/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-19",
                        "title": "Week 09",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 19 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "ArtificialIntelligence",
                            "CyberSecurity",
                            "GeneralTechnology"
                        ],
                        "links": [
                            "generative-ai",
                            "supply-chain-attack",
                            "lmm",
                            "agentic-ai"
                        ],
                        "group": "2026",
                        "content": "# Week 09\n\n## Artificial Intelligence\n\n### Google\u2019s new Gemini Pro model has record benchmark scores ;  again\n\nDate: 19 February 2026\n\n- Gemini 3.1 Pro appears to be a big step up from its predecessor, Gemini 3.\n- Google also shared statistics from independent benchmarks that showed it performing significantly better than its previous version. [[lmm|Gemini]] is a Multimodal model.\n\n*Read more about it: https://techcrunch.com/2026/02/19/googles-new-gemini-pro-model-has-record-benchmark-scores-again/*\n\n---\n<br>\n\n### Nvidia deepens early-stage push into India\u2019s AI startup ecosystem\n\nDate: 19 February 2026\n\n- N Nvidia is stepping up efforts to court India\u2019s artificial intelligence startups earlier in their lifecycle.\n- The push is intended to help the AI chipmaker cultivate relationships with future customers.\n- The latest move comes through a partnership with early-stage venture firm Activate.\n- U.S. lacks technical talent outside of the U.S., according to a new study. The study found that the majority of the world's technical talent comes from outside the United States. It also found that many of America's top engineers are from other countries.\n\n*Read more about it: https://techcrunch.com/2026/02/19/nvidia-deepens-early-stage-push-into-indias-ai-startup-ecosystem/*\n\n---\n<br>\n\n### An AI data center boom is fueling Redwood\u2019s energy storage business\n\nDate: 19 February 2026\n\n- Redwood Materials is the fastest-growing unit within the battery recycling and materials startup.\n- Its R&D lab in San Francisco has expanded four-fold into a 55,000-square-foot facility and now employs nearly 100 people.\n- The company\u2019s recent $425 million Series E raise will provide the capital needed to scale the business.\n\n*Read more about it: https://techcrunch.com/2026/02/19/an-ai-data-center-boom-is-fueling-redwoods-energy-storage-business/*\n\n---\n<br>\n\n### Why these startup CEOs don\u2019t think AI will replace human roles\n\nDate: 19 February 2026\n\n- There is a constant debate about how AI is replacing humans in various jobs.\n- Studies suggest that roles where AI can automate most tasks will be impacted. Some analysts believe that AI may also create jobs, with the displacement effect only transitional.\n- Asiri said that Lucidya discloses to users when it\u2019s using a voice AI to communicate. He said that for users, issue resolution is more important than the fact that an AI bot is handling their calls.\n\n*Read more about it: https://techcrunch.com/2026/02/19/web-summit-qatar-read-ai-lucidya-notetakers-customer-support/*\n\n---\n<br>\n\n### YouTube\u2019s latest experiment brings its conversational AI tool to TVs\n\nDate: 19 February 2026\n\n- YouTube is expanding its conversational AI tool to smart TVs, gaming consoles, and streaming devices.\n- Users can click the \u201cAsk\u201d button on their TV screen to summon the AI assistant.\n- The feature offers suggested questions based on the video, or users can use their remote\u2019s microphone button.\n\n*Read more about it: https://techcrunch.com/2026/02/19/youtubes-latest-experiment-brings-its-conversational-ai-tool-to-tvs/*\n\n---\n<br>\n\n### Reddit is testing a new AI search feature for shopping\n\nDate: 19 February 2026\n\n- Reddit is testing a new AI search tool that takes community recommendations and matches them with products from some of the company's shopping and advertising partners.\n- A small group of users in the U.S. will start to see search results that include interactive product carousels with pricing, images, and direct where-to-buy links.\n\n*Read more about it: https://techcrunch.com/2026/02/19/reddit-is-testing-a-new-ai-search-feature-for-shopping/*\n\n---\n<br>\n\n### OpenAI reportedly finalizing $100B deal at more than $850B valuation\n\nDate: 19 February 2026\n\n- OpenAI is nearing a deal to raise more than $100 billion at a valuation that could exceed $850 billion, Bloomberg reports.\n- The deal comes as the [[generative-ai|ChatGPT]]-maker burns through cash as it inches toward profitability.\n\n*Read more about it: https://techcrunch.com/2026/02/19/openai-reportedly-finalizing-100b-deal-at-more-than-850b-valuation/*\n\n---\n<br>\n\n### Perplexity\u2019s Retreat From Ads Signals a Bigger Strategic Shift\n\nDate: 19 February 2026\n\n- Perplexity is abandoning plans to put ads in its AI search product.\n- The company will focus on becoming the most accurate AI service for developers, enterprises, and consumers willing to pay a monthly fee.\n- The move marks a major change for the company, which was one of the first AI firms to start experimenting with ads in 2024.\n\n*Read more about it: https://www.wired.com/story/perplexity-ads-shift-search-google/*\n\n---\n<br>\n\n### Code Metal Raises $125 Million to Rewrite the Defense Industry\u2019s Code With AI\n\nDate: 19 February 2026\n\n- Code Metal, a Boston-based startup that uses AI to write code and translate it into other programming languages, just closed a $125 million Series B funding round.\n- The startup is part of a new wave of startups aiming to modernize the tech industry by using AI to generate code.\n\n*Read more about it: https://www.wired.com/story/vibe-coding-startup-code-metal-raises-series-b-fundraising/*\n\n---\n<br>\n\n## Cyber Security\n\n### FBI says ATM \u2018jackpotting\u2019 attacks are on the rise, and netting hackers millions in stolen cash\n\nDate: 19 February 2026\n\n- Hackers have ramped up their attacks on ATMs in recent years, the FBI says.\n- More than 700 attacks on cash dispensers during 2025 alone netted hackers at least $20 million in stolen cash.\n\n*Read more about it: https://techcrunch.com/2026/02/19/fbi-says-atm-jackpotting-attacks-are-on-the-rise-and-netting-hackers-millions-in-stolen-cash/*\n\n---\n<br>\n\n### Cellebrite cut off Serbia citing abuse of its phone unlocking tools. Why not others?\n\nDate: 19 February 2026\n\n- Phone hacking tool maker Cellebrite has been accused of using its tools to hack into the phones of human rights activists in Jordan and Kenya.\n- The company has dismissed the allegations and declined to commit to investigating them.\n- It's unclear why the company has changed its approach, which appears contrary to its previous actions.\n\n*Read more about it: https://techcrunch.com/2026/02/19/cellebrite-cut-off-serbia-citing-abuse-of-its-phone-unlocking-tools-why-not-others/*\n\n---\n<br>\n\n### The AI security nightmare is here and it looks suspiciously like lobster\n\nDate: 19 February 2026\n\n- A hacker tricked a popular AI coding tool into installing OpenClaw.\n- The hacker took advantage of a vulnerability in Cline, an open-source AI coding [[agentic-ai|agent]].\n- It's a sign of how quickly things can unravel when AI agents are given control over our computers.\n\n*Read more about it: https://www.theverge.com/ai-artificial-intelligence/881574/cline-openclaw-prompt-injection-hack*\n\n---\n<br>\n\n### Texas is suing TP-Link over its ties to China\n\nDate: 19 February 2026\n\n- Texas Attorney General Ken Paxton is suing TP-Link over claims that the router-maker is misleading customers about its ties to China.\n- In a lawsuit filed this week, Paxton claims TP-link is \u201cmasking its Chinese connections,\u201d while serving as \u201can open window for Chinese-sponsored threat actors and Chinese intelligence agencies\u201d - a clear [[supply-chain-attack|Supply Chain Risk]].\n\n*Read more about it: https://www.theverge.com/tech/881500/texas-tp-link-china-lawsuit-anzu-robotics*\n\n---\n<br>\n\n### An FBI \u2018Asset\u2019 Helped Run a Dark Web Site That Sold Fentanyl-Laced Drugs for Years\n\nDate: 19 February 2026\n\n- The father of a tennis player killed by a fatal dose of fentanyl spoke in court earlier this month. He was speaking at the sentencing hearing for Lin Rui-Siang, a convicted administrator of the dark web drug market Incognito.\n- Lin's defense has pointed to an FBI informant who helped run the site for almost two years.\n- The informant allegedly approved the sale of products flagged as potentially tainted with that lethally powerful opioid.\n\n*Read more about it: https://www.wired.com/story/an-fbi-asset-helped-run-a-dark-web-site-that-sold-fentanyl-laced-drugs-for-years/*\n\n---\n<br>\n\n### How to Organize Safely in the Age of Surveillance\n\nDate: 19 February 2026\n\n- Americans are seeking a bottom-up approach to resistance: grassroots organizing.\n- Organizing safely in an age of surveillance increasingly requires technical security know-how.\n- There\u2019s no simple set of tech tips that can help organizers safely build a movement.\n\n*Read more about it: https://www.wired.com/story/how-to-organize-safely-in-the-age-of-surveillance/*\n\n---\n<br>\n\n## General Technology\n\n### The executive that helped build Meta\u2019s ad machine is trying to expose it\n\nDate: 19 February 2026\n\n- Brian Boland served as Meta\u2019s VP of partnerships before leaving in 2020. He testified that Mark Zuckerberg fostered a culture that prioritized growth and profit over users\u2019 wellbeing from the top down.\n- Boland testified that there was never a lockdown around user safety.\n- Boland said he left upwards of $10 million worth of unvested Meta stock on the table when he departed. He said he still finds it \u201cnerve-wracking\u201d every time he speaks out about the company. Boland agreed that advertising business models are not inherently bad.\n\n*Read more about it: https://www.theverge.com/policy/881706/meta-executive-brian-boland-testimony-social-media-addiction-trial*\n\n---\n<br>\n\n### A $10K+ bounty is waiting for anyone who can unplug Ring doorbells from Amazon\u2019s cloud\n\nDate: 19 February 2026\n\n- Ring users currently have to pay a subscription fee to store recordings in Amazon\u2019s cloud.\n- The Fulu Foundation, the consumer advocacy group cofounded by YouTuber Louis Rossmann, is offering an initial bounty of $10,000 to anyone who can integrate Ring doorbells with a local PC or server.\n\n*Read more about it: https://www.theverge.com/tech/881678/ring-doorbell-bounty-amazon-servers-fulu*\n\n---\n<br>\n\n### Meta\u2019s VR metaverse is ditching VR\n\nDate: 19 February 2026\n\n- The company is shifting its focus from VR to mobile games. CEO Mark Zuckerberg says he sees AI as the new social media.\n- The new approach sets Meta up to better compete with platforms like Roblox and Fortnite.\n\n*Read more about it: https://www.theverge.com/tech/881647/meta-vr-mobile-metaverse-horizon-worlds*\n\n---\n<br>\n\n### After Search Party backlash, Ring is still avoiding the bigger questions\n\nDate: 19 February 2026\n\n- Ring founder Jamie Siminoff has been on an \u201cexplanation tour,\u201d following the fallout from its Super Bowl ad and the introduction of its Search Party feature.\n- The problem is the potential for Ring\u2019s vast network of AI-powered camera technology to be turned into a surveillance tool, one accessible to law enforcement.\n\n*Read more about it: https://www.theverge.com/news/881339/after-search-party-backlash-ring-is-still-avoiding-the-bigger-questions*\n\n---\n<br>\n\n### \u2018Pew Pew\u2019: The Chinese Companies Marketing Anti-Drone Weapons on TikTok\n\nDate: 19 February 2026\n\n- Nearly any product imaginable is available for purchase on TikTok straight from Chinese factories.\n- The app\u2019s offerings, it appears, now also extend to drone jammers and other drone-related hardware.\n- TikTok has become an improbable showroom for a drone economy that powers conflicts like Russia's war in Ukraine.\n\n*Read more about it: https://www.wired.com/story/pew-pew-the-chinese-sellers-marketing-military-drones-on-tiktok/*\n\n---\n<br>\n\n### Inside the Rolling Layoffs at Jack Dorsey\u2019s Block\n\nDate: 19 February 2026\n\n- Hundreds of workers were laid off in early February from Jack Dorsey\u2019s Block. Block is the parent company behind the merchant payment processor Square and the payment app Cash App.\n- \u201cMorale is probably the worst I\u2019ve felt in four years,\u201d reads an employee complaint.\n\n*Read more about it: https://www.wired.com/story/inside-rolling-layoffs-jack-dorsey-block/*\n\n---\n<br>\n\n### DHS Opens a Billion-Dollar Tab With Palantir\n\nDate: 19 February 2026\n\n- The Department of Homeland Security struck a $1 billion purchasing agreement with Palantir last week.\n- The agreement simplifies how DHS buys software from the software company.\n- It comes as the company is struggling to address growing tensions over its relationship with DHS and ICE.\n\n*Read more about it: https://www.wired.com/story/department-homeland-security-ice-billion-dollar-agreement-palantir/*\n\n---\n<br>\n\n### Mark Zuckerberg Tries to Play It Safe in Social Media Addiction Trial Testimony\n\nDate: 19 February 2026\n\n- Mark Zuckerberg appeared before a jury in Los Angeles on Wednesday. He was testifying in a lawsuit brought by a now 20-year-old Californian identified as K.G.M.\n- She and her mother are suing Meta, YouTube, Snap, and TikTok. They allege their children fell victim to depression, dysmorphia, and suicide.\n\n*Read more about it: https://www.wired.com/story/mark-zuckerberg-testifies-social-media-addiction-trial-meta/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-20",
                        "title": "Week 09",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 20 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "ArtificialIntelligence",
                            "CyberSecurity",
                            "GeneralTechnology"
                        ],
                        "links": [
                            "zero-day",
                            "vishing",
                            "generative-ai",
                            "cve",
                            "malware",
                            "llm",
                            "phishing"
                        ],
                        "group": "2026",
                        "content": "# Week 09\n\n## Artificial Intelligence\n\n### India\u2019s Sarvam launches Indus AI chat app as competition heats up\n\nDate: 20 February 2026\n\n- Sarvam, an Indian AI startup focused on building models for local languages and users, on Friday launched its Indus chat app for web and mobile users.\n- Indus serves as a chat interface for its newly announced Sarvam 105B model, the company\u2019s 105-billion-parameter large language model.\n\n*Read more about it: https://techcrunch.com/2026/02/20/indias-sarvam-launches-indus-ai-chat-app-as-competition-heats-up/*\n\n---\n<br>\n\n### The creator economy\u2019s ad revenue problem and India\u2019s AI ambitions\n\nDate: 20 February 2026\n\n- The creator economy is evolving fast, and ad revenue alone isn\u2019t cutting it anymore. YouTubers are launching product lines, acquiring startups, and building actual business empires.\n- For many, it\u2019s the new playbook.\n\n*Read more about it: https://techcrunch.com/video/the-creator-economys-ad-revenue-problem-and-indias-ai-ambitions/*\n\n---\n<br>\n\n### Anthropic-funded group backs candidate attacked by rival AI super PAC\n\nDate: 20 February 2026\n\n- New York Assembly member Alex Bores was the target of a campaign by a pro-AI super PAC to thwart his congressional bid.\n- Public First Action, a PAC backed by a $20 million donation from Anthropic, is spending $450,000 to boost Bores in the race for New York\u2019s 12th congressional district.\n\n*Read more about it: https://techcrunch.com/2026/02/20/anthropic-funded-group-backs-candidate-attacked-by-rival-ai-super-pac/*\n\n---\n<br>\n\n### InScope nabs $14.5M to solve the pain of financial reporting\n\nDate: 20 February 2026\n\n- InScope is an AI-powered financial reporting platform. It helps companies and accounting firms automate many aspects of the financial statement preparation process.\n- The startup just raised $14.5 million in Series A funding led by Norwest.\n\n*Read more about it: https://techcrunch.com/2026/02/20/inscope-nabs-14-5m-to-solve-the-pain-of-financial-reporting/*\n\n---\n<br>\n\n### Great news for xAI: Grok is now pretty good at answering questions about Baldur\u2019s Gate\n\nDate: 20 February 2026\n\n- Elon Musk\u2019s xAI has been placing particular emphasis on video-game walkthroughs.\n- High-level engineers were pulled from other projects to improve the responses before launch.\n\n*Read more about it: https://techcrunch.com/2026/02/20/great-news-for-xai-grok-is-now-pretty-good-at-answering-questions-about-baldurs-gate/*\n\n---\n<br>\n\n### \u2018Toy Story 5\u2019 takes aim at creepy AI toys: \u2018I\u2019m always listening\u2019\n\nDate: 20 February 2026\n\n- \u201cToy Story 5\u201d confronts old-school toys like Mrs. Potato Head, Rex, and Slinky Dog against the sinister threat of technology.\n- The trailer shows Bonnie, the young girl who inherited Andy\u2019s toys when he left for college in \u2018Toy Story 2,\u2019 playing outside with her toys.\n\n*Read more about it: https://techcrunch.com/2026/02/20/toy-story-5-takes-aim-at-creepy-ai-toys-im-always-listening/*\n\n---\n<br>\n\n### AI\u2019s promise to indie filmmakers: Faster, cheaper, lonelier\n\nDate: 20 February 2026\n\n- The [[generative-ai|AI video]] industry, with billions in venture capital dollars in tow, is now moving from prototype to post-production.\n- This era of AI abundance threatens to erase jobs and creativity, under an avalanche of low-effort slop.\n- Guillermo del Toro said he would rather die than use [[generative-ai|generative AI]] to make a film. Werner Herzog said the films he\u2019s seen created by AI \u201chave no soul\u201d\n\n*Read more about it: https://techcrunch.com/2026/02/20/ais-promise-to-indie-filmmakers-faster-cheaper-lonelier/*\n\n---\n<br>\n\n### Peak XV raises $1.3B, doubles down on AI as global VC rivalry in India heats up\n\nDate: 20 February 2026\n\n- Peak XV announced on Friday that it has raised $1.3 billion across new India and Asia-focused funds.\n- The firm, which manages more than $10 billion in assets, is sharpening its focus on artificial intelligence and cross-border bets.\n\n*Read more about it: https://techcrunch.com/2026/02/20/peak-xv-raises-1-3b-doubles-down-on-ai-as-global-vc-rivalry-in-india-heats-up/*\n\n---\n<br>\n\n### OpenAI says 18- to 24-year-olds account for nearly 50% of ChatGPT usage in India\n\nDate: 20 February 2026\n\n- OpenAI says its ChatGPT bot is popular with young Indians. Users between 18 and 24 years of age account for nearly 50% of messages.\n- Users under 30 accounted for 80%. Indians use Codex three times more than the global median.\n\n*Read more about it: https://techcrunch.com/2026/02/20/openai-says-18-to-24-year-olds-account-for-nearly-50-of-chatgpt-usage-in-india/*\n\n---\n<br>\n\n### The OpenAI mafia: 18 startups founded by alumni\n\nDate: 20 February 2026\n\n- OpenAI is reportedly in talks to finalize a $100 billion deal, valuing the company at more than $850 billion.\n- Many employees have come and gone since the company first launched a decade ago, and some have launched startups of their own.\n- OpenAI\u2019s CTO, Mira Murati, left OpenAI to found her own company, Thinking Machines Lab, in February 2025.\n\n*Read more about it: https://techcrunch.com/2026/02/20/the-openai-mafia-15-of-the-most-notable-startups-founded-by-alumni/*\n\n---\n<br>\n\n### Trump is making coal plants even dirtier as AI demands more energy\n\nDate: 20 February 2026\n\n- The EPA finalized its repeal of Mercury and Air Toxics Standards that the Biden administration strengthened in 2024.\n- This move comes as the massive power requirements for [[generative-ai|AI data centers]] are putting more load on the energy grid and old power plants.\n\n*Read more about it: https://www.theverge.com/science/882288/trump-ai-data-center-power-plant-pollution-mercury-mats*\n\n---\n<br>\n\n### AI Safety Meets the War Machine\n\nDate: 20 February 2026\n\n- Anthropic was the first major AI company cleared by the US government for classified use.\n- The Pentagon is reconsidering its relationship with the company, including a $200 million contract, as the safety-conscious AI firm objects to participating in certain deadly operations.\n\n*Read more about it: https://www.wired.com/story/backchannel-anthropic-dispute-with-the-pentagon/*\n\n---\n<br>\n\n### Could AI Data Centers Be Moved to Outer Space?\n\nDate: 20 February 2026\n\n- By 2028, AI servers alone may use as much energy as 22 percent of US households.\n- Some folks are saying we should build [[generative-ai|data centers]] in space to handle the heat and energy demands.\n\n*Read more about it: https://www.wired.com/story/could-we-put-ai-data-centers-in-space/*\n\n---\n<br>\n\n### The Search Engine for OnlyFans Models Who Look Like Your Crush\n\nDate: 20 February 2026\n\n- Doppelg\u00e4nger is the newest addition to Presearch\u2019s Spicy Mode, a NSFW feature for searching adult content using [[generative-ai|generative AI]] to match look-alikes.\n- The tool highlights the proliferation of AI-driven facial search technology.\n\n*Read more about it: https://www.wired.com/story/the-search-engine-for-onlyfans-models-who-look-like-your-crush/*\n\n---\n<br>\n\n## Cyber Security\n\n### PromptSpy is the first known Android malware to use generative AI at runtime\n\nDate: 20 February 2026\n\n- ESET researchers have discovered the first known Android [[malware]] to use [[generative-ai|generative AI]] in its execution flow.\n- \"PromptSpy\" is abusing the Google Gemini AI [[llm|model]] to help it achieve persistence on infected devices.\n- PromptSpy sends Google's Gemini model a chat prompt along with an XML dump of the current screen. Their attacks, from reconnaissance to post-compromise actions.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/promptspy-is-the-first-known-android-malware-to-use-generative-ai-at-runtime/*\n\n---\n<br>\n\n### Flaw in Grandstream VoIP phones allows stealthy eavesdropping\n\nDate: 20 February 2026\n\n- A critical vulnerability in Grandstream GXP1600 series VoIP phones allows a remote, unauthenticated attacker to gain root privileges and silently eavesdrop on communications.\n- The vulnerability is tracked as CVE-2026-2329 and received a critical severity score of 9.3. The problem is in the device\u2019s web-based API service.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/flaw-in-grandstream-voip-phones-allows-stealthy-eavesdropping/*\n\n---\n<br>\n\n### Google blocked over 1.75 million Play Store app submissions in 2025\n\nDate: 20 February 2026\n\n- Google says through 2025, it blocked more than 255,000 Android apps from obtaining excessive access to sensitive user data.\n- The tech giant's annual review of Android and Google Play security reveals how effective the implemented protection measures were.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/google-blocked-over-175-million-play-store-app-submissions-in-2025/*\n\n---\n<br>\n\n### CISA orders feds to patch actively exploited Dell flaw within 3 days\n\nDate: 20 February 2026\n\n- U.S. government agencies ordered to patch a maximum-severity Dell vulnerability.\n- The hardcoded-credential vulnerability ([[cve|CVE]]-2026-22769) is being exploited by a suspected Chinese hacking group. The group is also known for exploiting Ivanti [[zero-day|zero-days]] to target government agencies.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/cisa-orders-feds-to-patch-actively-exploited-dell-flaw-within-3-days/*\n\n---\n<br>\n\n### How infostealers turn stolen credentials into real identities\n\nDate: 20 February 2026\n\n- Modern infostealers have expanded credential theft far beyond usernames and passwords. These infections routinely harvest credentials alongside broader session data and user activity.\n- The resulting datasets are aggregated and sold by initial access brokers. Credentials harvested from personal devices are routinely tested against corporate environments, cloud services, and remote access systems.\n- Disrupting reuse directly reduces the operational value of infostealer datasets and shortens their window of exploitation.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/how-infostealers-turn-stolen-credentials-into-real-identities/*\n\n---\n<br>\n\n### Nigerian man gets eight years in prison for hacking tax firms\n\nDate: 20 February 2026\n\n- Matthew Abiodun Akande, 37, sentenced to eight years in prison for hacking tax preparation firms in Massachusetts.\n- Akande stole clients' personal information and used it to file over 1,000 fraudulent tax returns and collect more than $1.3 million in fraudulent refunds.\n- He was indicted by a federal grand jury in July 2022 before his arrest, while he was still living in Mexico.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/nigerian-man-gets-eight-years-in-prison-for-hacking-tax-firms/*\n\n---\n<br>\n\n### Texas sues TP-Link over Chinese hacking risks, user deception\n\nDate: 20 February 2026\n\n- Texas sues TP-Link Systems, accusing company of deceptively marketing its routers as secure while allowing Chinese state-backed hackers to access users' devices.\n- The lawsuit follows an investigation launched in October and claims that TP- Link misled buyers by labeling its products \"Made in Vietnam\" while sourcing nearly all components from China.\n- A TP-link spokesperson told BleepingComputer that the allegations are \"without merit and will be proven false\"\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/texas-sues-tp-link-over-chinese-hacking-risks-user-deception/*\n\n---\n<br>\n\n### Hackers target Microsoft Entra accounts in device code vishing attacks\n\nDate: 20 February 2026\n\n- Threat actors are targeting technology, manufacturing, and financial organizations in campaigns that combine device code [[phishing]] and voice phishing ([[vishing]])\n- These campaigns leverage legitimate Microsoft OAuth client IDs and the device authorization flow to trick victims into authenticating.\n- Microsoft warned in February that Russian hackers were targeting Microsoft 365 accounts using device code [[phishing]].\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/hackers-target-microsoft-entra-accounts-in-device-code-vishing-attacks/*\n\n---\n<br>\n\n### Police arrests 651 suspects in African cybercrime crackdown\n\nDate: 20 February 2026\n\n- African law enforcement arrested 651 suspects and recovered over $4.3 million in a joint operation targeting investment fraud, mobile money scams, and fake loan applications.\n- Authorities across 16 countries also seized 2,341 devices and took down 1,442 malicious websites, domains, and servers.\n- This is the latest INTERPOL operation targeting African cybercrime, with thousands of arrests and multiple multimillion-dollar operations disrupted or dismantled.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/police-arrests-651-suspects-in-african-cybercrime-crackdown/*\n\n---\n<br>\n\n### New 'Massiv' Android banking malware poses as an IPTV app\n\nDate: 20 February 2026\n\n- A new Android banking [[malware]], which researchers named Massiv, is posing as an IPTV app to steal digital identities and access online banking accounts.\n- The malware relies on screen overlays and keylogging to obtain sensitive data.\n- An interesting trend identified by ThreatFabric through the discovery of Massiv is the increasing use of IPTV apps as lures for Android malware infections.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/new-massiv-android-banking-malware-poses-as-an-iptv-app/*\n\n---\n<br>\n\n### Critical infra Honeywell CCTVs vulnerable to auth bypass flaw\n\nDate: 20 February 2026\n\n- The U.S. Cybersecurity and Infrastructure Security Agency (CISA) is warning of a critical vulnerability in multiple Honeywell CCTV products.\n- The flaw allows an unauthenticated attacker to change the recovery email address associated with a device account.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/critical-infra-honeywell-cctvs-vulnerable-to-auth-bypass-flaw/*\n\n---\n<br>\n\n### AI platforms can be abused for stealthy malware communication\n\nDate: 20 February 2026\n\n- AI assistants like Grok and Microsoft Copilot can be abused to intermediate command-and-control activity.\n- Researchers at cybersecurity company Check Point discovered that threat actors can use AI services to relay communication between the C2 server and the target machine.\n- Attackers can exploit this mechanism to deliver commands and retrieve stolen data from victim systems.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/ai-platforms-can-be-abused-for-stealthy-malware-communication/*\n\n---\n<br>\n\n### Telegram channels expose rapid weaponization of SmarterMail flaws\n\nDate: 20 February 2026\n\n- Flare researchers observed threat actors rapidly sharing proof-of-concept exploits, offensive tools, and stolen administrator credentials related to recently disclosed SmarterMail vulnerabilities.\n- The activity occurred within days of the vulnerabilities being disclosed, with threat actors sharing and selling exploit code and compromised access.\n- Vulnerabilities were published around the beginning of January, and on the same day, there were mentions and references to these vulnerabilities. This confirms that attackers are quick to exploit newly discovered critical RCE- related vulnerabilities.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/telegram-channels-expose-rapid-weaponization-of-smartermail-flaws/*\n\n---\n<br>\n\n### Data breach at fintech firm Figure affects nearly 1 million accounts\n\nDate: 20 February 2026\n\n- Figure Technology Solutions was hacked in a social engineering attack. The company uses the Provenance blockchain for lending, borrowing, and securities trading.\n- Have I Been Pwned reported that data from 967,200 accounts was stolen in the attack.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/data-breach-at-fintech-firm-figure-affects-nearly-1-million-accounts/*\n\n---\n<br>\n\n### Ukrainian man jailed for identity theft that helped North Koreans get jobs at US companies\n\nDate: 20 February 2026\n\n- Oleksandr Didenko, 29, a resident of Kyiv, was sentenced to five years in prison for his part in a long-running identity theft operation.\n- Prosecutors said Didenko ran a website called Upworksell, which allowed people working overseas, including North Koreans, to buy or rent stolen identities for gaining employment with U.S. firms.\n\n*Read more about it: https://techcrunch.com/2026/02/20/ukrainian-man-jailed-for-identity-theft-that-helped-north-koreans-get-jobs-at-us-companies/*\n\n---\n<br>\n\n### DHS Wants a Single Search Engine to Flag Faces and Fingerprints Across Agencies\n\nDate: 20 February 2026\n\n- The Department of Homeland Security is moving to consolidate its face recognition and other biometric technologies across agencies like CBP, ICE, and TSA.\n- The system would support watch-listing, detention, or removal operations, raising significant privacy concerns.\n\n*Read more about it: https://www.wired.com/story/dhs-wants-a-single-search-engine-to-flag-faces-and-fingerprints-across-agencies/*\n\n---\n<br>\n\n### Metadata Exposes Authors of ICE\u2019s \u2018Mega\u2019 Detention Center Plans\n\nDate: 20 February 2026\n\n- A PDF sent to New Hampshire governor contains embedded comments and metadata identifying the people who worked on ICE\u2019s expansion plans for detention centers.\n- The accidental exposure lands amid widespread public pushback against the expansion of ICE facilities.\n\n*Read more about it: https://www.wired.com/story/metadata-exposes-authors-of-ices-mega-detention-center-plans/*\n\n---\n<br>\n\n## General Technology\n\n### Microsoft: Anti-phishing rules mistakenly blocked emails, Teams messages\n\nDate: 20 February 2026\n\n- Microsoft says an Exchange Online issue that mistakenly quarantined legitimate emails last week was triggered by faulty heuristic detection rules.\n- The root cause was a logic error in a detection system designed to identify new credential phishing attacks.\n- The incident, tracked by Microsoft under EX1227432, began on February 5 and was not fully resolved until February 12.\n\n*Read more about it: https://www.bleepingcomputer.com/news/microsoft/microsoft-anti-phishing-rules-mistakenly-blocked-emails-teams-messages/*\n\n---\n<br>\n"
                    },
                    {
                        "id": "2026-02-21",
                        "title": "Week 09",
                        "icon": "far fa-file-alt",
                        "desc": "Summary of 21 February 2026.",
                        "tags": [
                            "WeeklyUpdate",
                            "ArtificialIntelligence",
                            "CyberSecurity",
                            "GeneralTechnology"
                        ],
                        "links": [
                            "cryptomining-software",
                            "remote-code-execution",
                            "cve",
                            "semiconductor",
                            "malware",
                            "incident-response",
                            "cisa",
                            "beyondtrust",
                            "ransomware"
                        ],
                        "group": "2026",
                        "content": "# Week 09\n\n## Cyber Security\n\n### Japanese tech giant Advantest hit by ransomware attack\n\nDate: 21 February 2026\n\n- Tokyo-based Advantest, a global leader in [[semiconductor]] testing equipment, detected unusual activity in its IT environment and isolated affected systems.\n- The company is responding according to [[incident-response|incident response protocols]] following a [[ransomware]] attack.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/japanese-tech-giant-advantest-hit-by-ransomware-attack/*\n\n---\n<br>\n\n### CISA: BeyondTrust RCE flaw now exploited in ransomware attacks\n\nDate: 21 February 2026\n\n- [[cisa|CISA]] warns that hackers are exploiting the [[cve|CVE]]-2026-1731 vulnerability in [[beyondtrust|BeyondTrust]] Remote Support.\n- Federal agencies have been given a tight deadline to apply the patch for this actively exploited [[remote-code-execution|RCE]] flaw.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/cisa-beyondtrust-rce-flaw-now-exploited-in-ransomware-attacks/*\n\n---\n<br>\n\n### Data breach at French bank registry impacts 1.2 million accounts\n\nDate: 21 February 2026\n\n- The French Ministry of Finance disclosed a cybersecurity incident affecting 1.2 million user accounts in the national bank account registry (FICOBA).\n- The cyberattack has disrupted operations, and work is underway to restore the system with enhanced security.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/data-breach-at-french-bank-registry-impacts-12-million-accounts/*\n\n---\n<br>\n\n### Why the shift left dream has become a nightmare for security and developers\n\nDate: 21 February 2026\n\n- The \"shift left\" approach was intended to make security collaborative but has instead moved the burden into every developer's IDE.\n- Business demands for \"Fast, Good, Cheap, and Secure\" often result in \"Fast\" winning over security.\n- Researchers found that 70 percent of malicious images in some registries contained [[cryptomining-software|cryptomining software]].\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/why-the-shift-left-dream-has-become-a-nightmare-for-security-and-developers/*\n\n---\n<br>\n\n### PayPal discloses data breach that exposed user info for 6 months\n\nDate: 21 February 2026\n\n- A software error in a loan application exposed sensitive personal information, including SSNs and dates of birth, for thousands of customers.\n- The incident affected the PayPal Working Capital (PPWC) loan app.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/paypal-discloses-data-breach-exposing-users-personal-information/*\n\n---\n<br>\n\n### Mississippi medical center closes all clinics after ransomware attack\n\nDate: 21 February 2026\n\n- University of Mississippi Medical Center closed all clinic locations statewide following a [[ransomware]] attack that blocked access to electronic medical records.\n- Hospital officials are communicating with the ransomware operation behind the attack.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/university-of-mississippi-medical-center-closes-clinics-after-ransomware-attack/*\n\n---\n<br>\n\n### FBI: Over $20 million stolen in surge of ATM malware attacks in 2025\n\nDate: 21 February 2026\n\n- Criminals are using [[malware]] to force cash machines to dispense money, a technique known as \"jackpotting.\"\n- The FBI reported more than 700 ATM jackpotting incidents in 2025, netting hackers at least $20 million.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/fbi-over-20-million-stolen-in-surge-of-atm-malware-attacks-in-2025/*\n\n---\n<br>\n\n### Ukrainian gets 5 years for helping North Koreans infiltrate US firms\n\nDate: 21 February 2026\n\n- Oleksandr Didenko was sentenced to 60 months in prison for identity theft that helped North Korean IT workers gain employment with U.S. firms.\n- Didenko also agreed to forfeit more than $1.4 million in cash and cryptocurrency.\n\n*Read more about it: https://www.bleepingcomputer.com/news/security/ukrainian-gets-5-years-for-helping-north-koreans-infiltrate-us-firms/*\n\n---\n<br>\n"
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
                "links": [],
                "group": null,
                "content": "# Cool Sites\n\nA collection of useful, interesting, or beautiful websites.\n\n## Interactive Learning & Games\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **KC7 Cyber** | A data-driven cybersecurity game that teaches investigation skills. | [kc7cyber.com](https://kc7cyber.com/) |\n| **TensorFlow Playground** | Visualize and play with neural networks in your browser. | [playground.tensorflow.org](https://playground.tensorflow.org/) |\n| **Seeing Theory** | A visual introduction to probability and statistics. | [seeing-theory.brown.edu](https://seeing-theory.brown.edu) |\n| **The Farmer Was Replaced** | A programming game where you code a farmer drone in Python. | [thefarmerwasreplaced.com](https://thefarmerwasreplaced.com) |\n| **SQL Island** | A text adventure game that teaches you SQL. | [sql-island.informatik.uni-kl.de](https://sql-island.informatik.uni-kl.de/) |\n| **SQL Murder Mystery** | Solve a murder mystery using SQL queries. | [mystery.knightlab.com](https://mystery.knightlab.com/) |\n\n## Visualizations & Explainers\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **Linux Ate My Ram** | A classic explanation of why \"free memory\" is wasted memory in Linux (and why `top` confuses you). | [linuxatemyram.com](https://www.linuxatemyram.com/) |\n| **Linux Kernel Word Count** | A visualizer showing how often specific words (and swear words) appear in the Linux source code. | [vidarholen.net](https://www.vidarholen.net/contents/wordcount/) |\n| **React Graph Gallery** | Beautiful examples of charts and data visualizations (e.g. Radar Chart Animation). | [react-graph-gallery.com](https://react-graph-gallery.com/example/radar-chart-animation) |\n| **MLU-Explain** | Interactive visual articles on machine learning concepts (Bias, Variance, etc.). | [mlu-explain.github.io](https://mlu-explain.github.io/) |\n| **VisuAlgo** | Visualizing data structures and algorithms through animation. | [visualgo.net](https://visualgo.net/en) |\n\n## Tools & Utilities\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **roadmap.sh** | Interactive developer roadmaps for frontend, backend, DevOps, and more. | [roadmap.sh](https://roadmap.sh/) |\n| **NotebookLM** | Google's AI research tool that acts as a personalized research assistant. | [notebooklm.google.com](https://notebooklm.google.com/) |\n| **CSV Plot** | Online tool to visualize CSV data instantly. | [csvistool.com](https://csvistool.com) |\n\n## Reference\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **List of Cognitive Biases** | Wikipedia's massive list of the flaws in human reasoning. | [Wikipedia](https://en.wikipedia.org/wiki/List_of_cognitive_biases) |\n| **OpSec Failures** | OpSec examples: 6 spectacular operational security failures. | [csoonline.com](https://www.csoonline.com/article/571107/opsec-examples-6-spectacular-operational-security-failures.html) |\n\n## Internet Humor\n\n| Site | Description | Link |\n| :--- | :--- | :--- |\n| **Down Detector** | The actual site for checking outages. | [downdetector.in](https://downdetector.in/) |\n| **Down Detector's Down Detector** | Is Down Detector down? | [downdetectorsdowndetector.com](https://downdetectorsdowndetector.com/) |\n| **Down Detector's... Down Detector** | Is the site checking Down Detector down? | [downdetectorsdowndetectorsdowndetector.com](https://downdetectorsdowndetectorsdowndetector.com/) |\n| **The Final Boss** | We must go deeper. | [downdetectors...detector.com](https://www.downdetectorsdowndetectorsdowndetectorsdowndetector.com/) |\n| **Spurious Correlations** | Funny graphs showing unrelated things correlating (e.g., \"Cheese consumption correlates with strangulation by bedsheets\"). | [tylervigen.com](https://www.tylervigen.com/spurious-correlations) |\n"
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
                "links": [],
                "group": null,
                "content": "# Github Finds\n\nInteresting Pull Requests and Commits from the history of open source.\n\n## Resources & Culture\n\nGuides on how to behave (or not behave) in open source.\n\n| Description | Link |\n| :--- | :--- |\n| **The Art of the Commit** | [The Art of the Commit](https://alistapart.com/article/the-art-of-the-commit/) |\n\n## Canonical History\n\nActual milestones in software history.\n\n| Description | Link |\n| :--- | :--- |\n| **Self-Referential**<br>The first commit in the Git repo describing Git itself. | [Git / e83c516](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290) |\n| **The Removed Promise**<br>Mozilla removes the FAQ: \"Does Firefox sell your personal data? Nope. Never have, never will.\" | [Mozilla / d459add](https://github.com/mozilla/bedrock/commit/d459addab846d8144b61939b7f4310eb80c5470e) |\n\n## The Linux \"Read Only\" Mirror\n\nThe Linux kernel does not accept PRs on GitHub (it uses a mailing list). This has led to a genre of \"confused\" or \"joke\" PRs on the read-only mirror.\n\n| PR | Description | Link |\n| :--- | :--- | :--- |\n| **#386** | **The Typo Incident**<br>User tries to fix a typo. Bot politely says \"email us\". Chaos ensues in comments. | [View PR](https://github.com/torvalds/linux/pull/386) |\n| **#486** | **\"This Code Very Fast\"**<br>A classic joke PR claiming to optimize the kernel for a calculator. | [View PR](https://github.com/torvalds/linux/pull/486) |\n| **#698** | **\"Remove Extra Spaces\"**<br>A bold attempt to remove trailing whitespace from the *entire* kernel at once. | [View PR](https://github.com/torvalds/linux/pull/698) |\n| **#437** | **\"Delete Linux\"**<br>A proposal to simply delete the operating system. | [View PR](https://github.com/torvalds/linux/pull/437) |\n| **#765** | **\"Merry Christmas\"**<br>Optimizing the kernel for the holidays. | [View PR](https://github.com/torvalds/linux/pull/765) |\n| **#779** | **\"Infinity Diff\"**<br>Another massive, mostly broken attempt to fix things via web UI. | [View PR](https://github.com/torvalds/linux/pull/779) |\n"
            }
        ]
    }
};