---
title: SSH (Secure Shell)
tags: Networking, Tools, Encryption
---

# SSH (Secure Shell)

"The Secret Portal"—a secure, encrypted tunnel that allows you to "teleport" your hands and mind into a computer on the other side of the planet, controlling it as if you were sitting right in front of it.

**SSH** is the "Grand Master" of remote control. If you are a developer or an IT admin, this is how you work. It allows you to open a terminal in London while sitting in Los Angeles. Most importantly, it uses **military-grade encryption** to ensure no one—not a hacker, not the government—can see what you are doing or steal your password.

Think of it like **A Secure Video Call with a Robot**:
*   You send it commands: *"Tell me how much battery is left."*
*   The robot does the work and sends the answer back.
*   The "Tunnel" around this conversation is made of lead. No one can peak inside.

## Two Ways to Login
1.  **Passwords (The Old Way):** You type a password.
    *   **The Risk:** It can be guessed or "Brute-Forced" by a persistent hacker.
2.  **SSH Keys (The Pro Way):** Uses two digital files.
    *   **The Padlock (Public Key):** You give this to the server.
    *   **The Physical Key (Private Key):** You keep this on your laptop.
    *   **The Result:** When you connect, the server sees your key matches the lock and lets you in instantly. It’s 1,000x safer because a hacker would have to physically steal your laptop to get in.

## FAQs

*1. How is it different from a VPN?*
*   **[[vpn|VPN]]**: Moves your **entire computer** onto a different network. Every app (Browser, Spotify, Zoom) goes through the VPN "Shield."
*   **SSH**: Only connects **one terminal window** to one specific computer. It’s a "Sniper Rifle" for controlling one machine; a VPN is a "Shield" for your whole connection.

*2. Is it just for Geeks?*
Mostly, but it’s built into **Windows 10/11**, Mac, and Linux. You don't need fancy software—you can just open a "Command Prompt" and start using it.

### Further Reading

*   **The Math:** *[[cryptography|Asymmetric Encryption (How keys work)]]*.
*   **The Safety:** *[[pam|Privileged Access Management]]*.
*   **Guide:** *[SSH Essentials: Working with Servers](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)*.
*   **Video:** *[SSH Explained (Computerphile)](https://www.youtube.com/watch?v=ORcvSkgdA58)*.
