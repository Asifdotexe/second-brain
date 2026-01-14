---
title: Cryptography
tags: CyberSecurity, Math, Privacy
---

# Cryptography

The art of writing secrets.

**Cryptography** is the science of using math to transform a message so that only the intended recipient can read it. It is the foundation of specific tools like [[encryption|Encryption]].

If you send a letter in a clear plastic bag, anyone can read it. Cryptography puts the letter in a steel safe.

## The Two Main Types

1.  **Symmetric (The Hotel Key):**
    *   One key locks the door, and the *same* key unlocks it.
    *   *Problem:* How do you give the key to your friend without a spy stealing it?
    *   *Example:* [[aes-256|AES]].

2.  **Asymmetric (The Mailbox):**
    *   **Public Key (Slot):** Anyone can put mail *in*. (Lock it).
    *   **Private Key (Key):** Only you can take mail *out*. (Unlock it).
    *   *Solution:* You shout your Public Key to the world. People use it to send you secrets. Only you can read them.
    *   *Example:* [[rsa|RSA]], ECC (Used for HTTPS/Websites).

## FAQs

*1. Is it just for spies?*
No. You use it every time you:
*   Use a credit card chip.
*   Unlock your car with a fob.
*   Visit a website with a "Padlock" icon (HTTPS).

*2. What is Steganography?*
Hiding files *inside* other files (like hiding a text document inside a picture of a cat). Cryptography scrambles the message; Steganography hides the existence of the message.

### Further Reading

*   **Book:** *[The Code Book](https://www.simonandschuster.com/books/The-Code-Book/Simon-Singh/9780385495325)* by Simon Singh (A history of codes from Egypt to Quantum).
*   **Concept:** *[Khan Academy: Cryptography](https://www.khanacademy.org/computing/computer-science/cryptography)*.
