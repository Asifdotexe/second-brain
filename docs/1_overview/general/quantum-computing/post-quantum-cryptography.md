---
title: Post-Quantum Cryptography (PQC)
tags: Cryptography, QuantumComputing, FutureProofing
---

# Post-Quantum Cryptography (PQC)

"Fixing the Locks before the Master Key is Built"—the global race to replace every security system on the internet before a **[[quantum-computing|Quantum Computer]]** becomes powerful enough to break them.

Almost every password, bank transfer, and secret message on the internet today is protected by a type of math called **[[rsa|RSA]]** or **[[ecc|ECC]]**. These are great for regular computers, but they have a fatal flaw: a fast **[[shors-algorithm|Quantum Computer]]** can "solve" that math almost instantly.

**Post-Quantum Cryptography (PQC)** is the "New Math." It is a new set of puzzles that are designed to be so complicated that **neither** a regular computer nor a quantum computer can crack them.

Think of it like **Upgrading a Safe**:
*   **Current Security:** Is a high-tech combination lock. It’s great, unless someone invents a **"Skeleton Key"** (Quantum Computer) that can unlock any combination.
*   **PQC:** Is replacing the combination lock with a **Rubik's Cube of 5-Dimensional Shapes**. Even if you have the "Skeleton Key," it doesn't fit in this new kind of lock.

## The Strategy: "Store Now, Decrypt Later"
You might ask: *"Why do we need this now if quantum computers aren't ready yet?"*
The answer is scary: **The Harvest Attack.**
Hackers and government agencies are currently stealing and storing as much encrypted data as they can. They can't read it today, but they are betting that in 10 years, they will have a quantum computer to unlock it. If we don't start using PQC **today**, our secrets from this morning will be wide open in a decade.

## The New Puzzles (NIST Standard)
The world’s top mathematicians are currently picking the "Winners" of the PQC era. The most promising math is based on **Lattices**—hiding a secret inside a massive, multi-dimensional grid of points that is literally impossible to navigate through.
*   **The Winner:** An algorithm called **CRYSTALS-Kyber** is currently being built into Google Chrome and other browsers as the new standard for a "Quantum-Safe" internet.

## FAQs

*1. Is this the same as "Quantum Encryption"?*
**No.** 
*   **Quantum Encryption (QKD):** Uses actual lasers and light particles to send data. It is highly secure but very expensive and requires special hardware.
*   **Post-Quantum Cryptography:** Is just **Clever Math**. It runs on your current phone and laptop, but it’s math that is "Quantum-Proof."

*2. Will I need a new phone?*
**No.** The magic of PQC is that it is just a software update. Your current phone is smart enough to run the "New Math."

### Further Reading

*   **The Threat:** *[[shors-algorithm|Shor's Algorithm]]* (The "Skeleton Key" that breaks the old math).
*   **The Brain:** *[[quantum-computing|Quantum Computing Overview]]* (Why we need PQC in the first place).
*   **The Math:** *[[rsa|RSA Encryption]]* (The old system we are replacing).
*   **Official:** *[The NIST PQC Selection Project](https://csrc.nist.gov/projects/post-quantum-cryptography)* (Seeing the finalists for the new world standard).
*   **Video:** *[The Quantum Apocalypse (Veritasium)](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)* (A deep, slightly scary dive into the end of encryption).
