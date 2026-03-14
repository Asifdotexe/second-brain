---
title: Knowledge Graph
tags: AI, DataStructures, InformationRetrieval, NLP
---

# Knowledge Graph

A massive web of interconnected facts, rather than just a rigid, boring spreadsheet of numbers.

A **Knowledge Graph** (or Semantic Network) is a data structure that explicitly captures the relationships between different entities (objects, events, situations, or abstract concepts). Instead of stuffing data into isolated rows and columns like a traditional 1990s SQL database, a knowledge graph maps data as **nodes** (the entities) connected by **edges** (the relationships).

For example, a knowledge graph wouldn't just store the text "Leonardo da Vinci" and "Mona Lisa" in separate columns on a table. It would literally draw a map: `[Leonardo da Vinci] --(painted)--> [Mona Lisa]`.

## Why Are They Suddenly a Big Deal?

As global data becomes insanely complex, blindly searching a database for exact keywords is no longer enough. Knowledge graphs provide actual context and semantics, allowing AI to understand the *meaning* behind the data. 

*   **Fixing AI Hallucinations:** While a [[vector-database|Vector Database]] is fantastic at finding *similar* text ideas via [[embeddings]], a knowledge graph excels at mapping hard, logical facts. Modern RAG (Retrieval-Augmented Generation) systems smash both of them together to give [[llm|LLMs]] highly accurate, structured facts. This aggressively stops the AI from [[ai-hallucination|hallucinating]] lies.
*   **Weirdly Good Google Searches:** Google's massive transition from a "string matching" search engine to a "thing matching" search engine was entirely driven by the Google Knowledge Graph. This is exactly why searching for a famous actor instantly gives you a slick infobox summarizing their life, family tree, and movies without you having to click a single blue link.

## How It's Built

A knowledge graph is built on a brutally simple structure called an RDF triple:
1.  **Subject:** The main thing (e.g., "Paris").
2.  **Predicate:** The relationship (e.g., "is the capital of").
3.  **Object:** The related thing (e.g., "France").

## FAQs

*1. Is it the exact same thing as a graph database?*
Not exactly. A graph database (like Neo4j) is the physical [[hard-drive|hard drive]] software used to actually store and search the data. A Knowledge Graph is the conceptual map of interconnected facts and rules built *on top* of that database.

*2. How does an AI actually build one of these?*
Mostly through Natural Language Processing (NLP). Companies train AI models to speed-read vast amounts of messy, unstructured text (like all of Wikipedia or 10,000 corporate PDFs), identify the nouns, extract how they relate to each other, and automatically wire them into a massive graph.

### Further Reading

*   **The Sibling Tech:** *[[vector-databases|Vector Databases]]* (The other half of the modern AI data storage equation).
*   **The Beneficiary:** *[[generative-ai|Generative AI]]* (The tech that desperately needs structured facts so it stops lying).
