---
title: RAG (Retrieval Augmented Generation)
tags: ArtificialIntelligence, LLM, KnowledgeManagement
---

# RAG

Giving the robot a textbook during the exam.

Standard AI (like ChatGPT) relies on its **Training Memory** (what it learned months ago). It's like a student taking a closed-book exam; if they forgot the fact, they might guess ([[ai-hallucination|hallucinate]]).

**RAG** (Retrieval Augmented Generation) connects the AI to your *live* documents. Before answering, it looks up the specific information in your files.

## How it Works

1.  **User Asks:** "How much vacation time do I have?"
2.  **Retrieval (The Lookup):** The system searches your company's HR Handbook PDF.
3.  **Generation (The Answer):** It sends the question *plus* the relevant page from the PDF to the AI. "Using this page, answer how much vacation time the user has."
4.  **Result:** "According to page 12 of the handbook, you have 15 days."

## FAQs

*1. Why is this better than [[ai-fine-tuning|fine-tuning]]?*
*   **RAG** is cheaper and instant. If you update the HR handbook, the AI knows immediately.
*   **Fine-tuning** is expensive and slow. You have to "re-train" the brain every time facts change.

*2. Does it stop hallucinations?*
Drastically reduces them. Because the AI is grounded in the text you gave it, it is much less likely to make things up intact.

### Further Reading

*   **Guide:** *[Oracle: What is RAG?](https://www.oracle.com/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/)*
*   **Tutorial:** *[RAG for Beginners](https://python.langchain.com/docs/use_cases/question_answering/)*
