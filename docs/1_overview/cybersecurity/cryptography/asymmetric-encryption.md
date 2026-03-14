---
title: Asymmetric Encryption (Public Key Cryptography)
tags: Cryptography, Security, Web, TLS
---

# Asymmetric Encryption

"The Digital Mailbox"—a brilliant system that allows two total strangers to share secret messages without ever having to meet in person to trade a password.

**Asymmetric Encryption** (or "Public Key Cryptography") uses two unique, linked keys: a **Public Key** and a **Private Key**. This tech is the only reason you can safely type your credit card into a website today. It solved the "Key Exchange" problem—the ancient dilemma of how to share a secret password without a spy seeing it.

Think of it like **A High-Security Mailbox**:
*   **The Public Key (The Slot):** Anyone can walk up to your mailbox and drop a letter in the slot. Everyone knows where the mailbox is.
*   **The Private Key (Your Key):** Only *you* have the key that opens the back of the mailbox to read the letters.
*   Crucially, once a letter is dropped in the slot, even the person who wrote it can't get it back out. Only the owner of the Private Key can read it.

## How the Magic Works
1.  **The Generation:** Your computer creates a pair of keys. They are like two halves of a complex mathematical puzzle.
2.  **The Lock:** You give your **Public Key** to the whole world. When someone wants to send you a secret, their computer uses your lock.
3.  **The Reveal:** When the message arrives, you use your **Private Key** to unscramble it. 
4.  **The One-Way Rule:** The Public Key can lock the message, but it **cannot** unlock it. It is a "one-way" security device.

## FAQs

*1. What happens if I lose my Private Key?*
**You are locked out forever.** No one—not even the FBI or the smartest hacker—can help you. This is why people who lose the private keys to their Bitcoin wallets lose millions of dollars instantly. There is no "Forgot Password" button for math.

*2. Is it slow?*
**Yes.** The math behind this (involving massive prime numbers) is "heavy" on your processor. Because of this, it is usually only used to send a tiny "starter password," which then takes over the rest of the work using faster **[[symmetric-encryption|Symmetric Encryption]]**.

### Further Reading

*   **The Algorithm:** *[[rsa|RSA Encryption (The Prime Number system)]]*.
*   **The Future:** *[[ecc|ECC (Elliptic Curve Cryptography - The mobile standard)]]*.
*   **The Bulk Carrier:** *[[symmetric-encryption|Symmetric Encryption]]*.
*   **Video:** *[Public Key Cryptography: How RSA Works](https://www.youtube.com/watch?v=vgTtMqs66_A)*.
*   **Article:** *[How TLS/SSL keeps your browser safe](https://www.cloudflare.com/learning/ssl/how-does-ssl-work/)*.
