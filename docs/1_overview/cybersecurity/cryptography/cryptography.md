---
title: Cryptography
tags: CyberSecurity, Math, Privacy, Encryption
---

# Cryptography

The art and science of writing secrets.

Cryptography is the mathematical foundation of digital security. It provides the tools to ensure that data remains confidential, authentic, and untampered with. This section covers the core concepts of encryption, world-standard algorithms, and the emerging threats of the quantum era.

## The Catalog of Cryptography

### 1. [[encryption|Encryption]]
The fundamental process of scrambling plaintext into unreadable ciphertext using mathematical formulas.

### 2. [[symmetric-encryption|Symmetric Encryption]]
The "House Key" approach: using a single secret key for both locking and unlocking data. Extremely fast and efficient for bulk storage.

### 3. [[asymmetric-encryption|Asymmetric Encryption]]
The "Mailbox" approach: using pairs of public and private keys to solve the problem of safely sharing secrets over the internet.

### 4. [[rsa|RSA]]
The pioneer of asymmetric encryption. Its security relies on the fact that multiplying large prime numbers is easy, but factoring them is nearly impossible for classical computers.

### 5. [[ecc|ECC]]
The modern standard for efficiency. It provides the same security as RSA but with much smaller keys, making it ideal for mobile devices and cryptocurrencies.

### 6. [[aes-256|AES-256]]
The world's gold standard for symmetric encryption, used to protect everything from personal hard drives to government secrets.

### 7. [[shors-algorithm|Shor's Algorithm]]
The quantum "doomsday clock": an algorithm that could theoretically break today's asymmetric encryption in hours.

### 8. [[post-quantum-cryptography|Post-Quantum Cryptography]]
The next generation of mathematical defenses designed to be secure even against the threat of future quantum computers.

---

## Core Concepts

Currently, this folder documents the transition from **Classical Cryptography** (like AES) to **[[post-quantum-cryptography|Post-Quantum Cryptography]]** (defenses against Shor's Algorithm). 

- **[[symmetric-encryption|Symmetric Encryption]]**: Using the same key for locking and unlocking (Fast, secure, but requires safe key sharing).
- **[[asymmetric-encryption|Asymmetric Encryption]]**: Using public/private key pairs (The backbone of HTTPS and secure web browsing).
