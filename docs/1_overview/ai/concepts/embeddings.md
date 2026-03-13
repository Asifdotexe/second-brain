---
title: Embeddings
tags: ArtificialIntelligence, MachineLearning, DataRepresentation, VectorDatabases
---

# Embeddings

Embeddings are essentially a massive, cosmic map of concepts, where the mathematical coordinates for the word "Kitten" live right next door to "Puppy," but are ten thousand miles away from the word "Carburetor."

**Embeddings** are the foundational "language" that AI models actually use to understand physical reality.

[[machine-learning|Machine learning]] models (like [[llm|LLMs]]) are just math equations. They cannot read English text, they cannot see the colors in a JPEG, and they cannot hear audio waves. They can only crunch raw numbers. An embedding is a mathematical translation: it violently boils down a complex, real-world object (like a word, an image, or a whole document) into a **vector** (a wildly long list of floating-point numbers).

These lists of numbers act exactly like GPS coordinates, plotting the object onto a massive, multi-dimensional map. 

## The Golden Rule: Distance = Meaning

The absolute magic of embeddings is that the numbers aren't random; they strictly capture *semantic meaning and context*. 

Unlike a dumb 1990s database that only looks for exact keyword string matches, embeddings map the actual *vibe* of the concept. If you plot two embedding vectors on this giant math graph:
* **Small Distance:** The concepts are highly related.
* **Large Distance:** The concepts have absolutely nothing to do with each other.

For example, IBM illustrates word vectors like this:
* `dad` = [0.1548, 0.4848, …, 1.864]
* `mom` = [0.8785, 0.8974, …, 2.794]
* Because the underlying human concepts are intimately related, the math algorithm forces the word `father` to calculate out to coordinates that live in extremely close proximity to `dad`.

## Why Do We Care?

Because embeddings represent *actual meaning* rather than exact letters, they are the secret sauce behind almost everything cool AI does today:
1.  **Semantic Search:** It's why you can search a database for "felines" and it successfully returns a document that only uses the word "cats." This is the entire foundation of [[rag|RAG (Retrieval-Augmented Generation)]].
2.  **Recommendation Engines:** Spotify maps your "User Preference Embedding" against a "Song Characteristics Embedding." If the two math vectors land close to each other on the map, it puts the song in your Discover Weekly playlist.
3.  **Anomaly Detection:** Finding a credit card transaction that plots extremely far away from the rest of your normal spending herd, immediately flagging it as fraud.

## Where do they live?

Because these multi-dimensional vectors are incredibly complex (often having thousands of coordinates), standard SQL databases completely choke trying to search them. Therefore, engineers have to store and search embeddings inside highly specialized, totally distinct [[vector-databases|Vector Databases]].

### Further Reading

*   **Corporate View:** *[IBM: What is Embedding?](https://www.ibm.com/think/topics/embedding)* (A solid, starchy overview of the math).
*   **Engineering View:** *[Cloudflare: What are Embeddings?](https://www.cloudflare.com/learning/ai/what-are-embeddings/)* (How infrastructure providers actually handle the data).
