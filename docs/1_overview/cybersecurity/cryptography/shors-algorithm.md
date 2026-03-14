---
title: Shor's Algorithm
tags: CyberSecurity, QuantumComputing, Threats
---

# Shor's Algorithm

"The Doomsday Clock" ,a mathematical formula that, when run on a powerful enough quantum computer, could instantly shatter the encryption protecting every bank account and government secret on Earth.

Current encryption stays secure because of a single bet: *"We bet it will take a hacker a billion years to guess the math."* **Shor's Algorithm** (discovered by Peter Shor in 1994) proved that with a **[[quantum-computing|Quantum Machine]]**, that billion-year task could be finished in **less than an hour**.

Think of it like **A Master Key for every digital lock**:
*   **Traditional Strategy:** A computer tries to pick a lock one tumbler at a time ,it works hard, but it’s slow.
*   **Shor's Strategy:** A quantum computer uses "Superposition" to check every possible combination at the exact same time. It doesn't "guess"; it computes the answer almost instantly.

## The Grace Period
If Shor's Algorithm is so scary, why hasn't the internet collapsed?
1.  **The Hardware Gap:** While the *math* is perfect, we don't have a quantum computer big enough to run it yet.
2.  **Noisy Qubits:** Today's quantum machines make too many mistakes. To break **[[rsa|RSA]]** encryption, we need a machine with millions of stable qubits. We currently only have a few hundred.

## Why it matters NOW (Harvest Today, Decrypt Later)
Hostile governments are currently vacuuming up and storing tons of encrypted internet traffic. Even though they can't read it today, they are betting that in 10 or 15 years, they can run that "old" data through a quantum computer to reveal all your current secrets.

## FAQs

*1. Is my Bitcoin safe?*
**Not forever.** Bitcoin uses **[[ecc|ECC]]**, which is just as vulnerable to Shor's Algorithm as RSA is. If a powerful quantum computer is built before Bitcoin updates its math, a hacker could theoretically steal any coin on the network.

*2. How do we survive?*
**"Post-Quantum Cryptography" (PQC).** Scientists are currently building "Quantum-Resistant" math ,new locks that are so complex that even a Shor's-Algorithm-powered machine can't pick them.

### Further Reading

*   **The Danger:** *[[quantum-computing|Quantum Computing Basics]]*.
*   **The Solution:** *[[post-quantum-cryptography|Preparing for the Quantum Apocalypse]]*.
*   **Video:** *[Veritasium: How Quantum Computers Break Encryption](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)* (The best visual guide).
*   **Article:** *[NIST: Announcing the Post-Quantum Standard](https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms)*.
