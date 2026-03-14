---
title: RSA (Rivest-Shamir-Adleman)
tags: Cryptography, AsymmetricEncryption, Math
---

# RSA

"The Prime Number Trapdoor" ,the world's first and most famous system for sharing secrets. It is built on a simple mathematical bet: that it is easy to multiply two giant numbers together, but nearly impossible to pull them apart.

**RSA** (named after its creators Rivest, Shamir, and Adleman) is a type of **[[asymmetric-encryption|Asymmetric Encryption]]**. Since 1977, it has been the invisible backbone of the internet, securing everything from your private emails to the digital signatures that prove a software update actually came from Apple or Microsoft.

Think of it as **A Specialized One-Way Door**:
*   Anyone can "push" a message through the door to you (using your **Public Key**).
*   But only you possess the secret mathematical "lever" (the **Private Key**) to open the door from the inside and read what was sent.

## The Prime Secret
The security of global banking rests on a single mathematical "shorthand":
*   **The Easy Task:** If I give you two massive prime numbers (each 300 digits long) and ask you to multiply them, a computer does it in a fraction of a second.
*   **The Impossible Task:** If I give you the *result* (a 600-digit number) and ask you to find the two original prime numbers that created it, the most powerful supercomputer on Earth would have to run for billions of years to guess the answer.

In RSA, your **Public Key** is that giant 600-digit result. Your **Private Key** is the two original prime numbers. Because only you know the "ingredients," only you can undo the math.

## FAQs

*1. Is RSA "unbreakable"?*
**For a normal computer, yes.** To "crack" a modern 2048-bit RSA key, you would need more energy than is produced by the Sun. However, scientists are worried that future **[[quantum-computing|Quantum Computers]]** (using **[[shors-algorithm|Shor's Algorithm]]**) could solve this math in minutes.

*2. If it's old, why do we still use it?*
**Compatibility.** Millions of servers, gov-issued IDs, and smartcards were built to use RSA. Transitioning the entire world to a newer system (like **[[ecc|ECC]]**) takes decades.

### Further Reading

*   **The Successor:** *[[ecc|ECC (Elliptic Curve Cryptography)]]* (The faster, smaller replacement).
*   **The Concept:** *[[asymmetric-encryption|Asymmetric Encryption Explained]]*.
*   **The Threat:** *[[shors-algorithm|Shor's Algorithm (The Quantum Killer)]]*.
*   **Video:** *[Computerphile: How RSA Encryption Works](https://www.youtube.com/watch?v=M7kEpw1tn50)*.
*   **Article:** *[The History of the RSA Algorithm](https://www.thalesgroup.com/en/markets/digital-identity-and-security/government/magazine/history-rsa-algorithm)*.
