---
title: Command Injection
tags: CyberAttack, WebSecurity, Vulnerability
---

# Command Injection

"The Mind-Control Trick"—tricking a computer into obeying a hidden, malicious command by disguising it as an innocent piece of information.

**Command Injection** is a technique where an attacker sends a malicious instruction through an input field (like a search bar or a login form). The web server, thinking it’s just processing a password or a name, accidentally executes that instruction on its "brain"—the Operating System.

Think of it like **An Automated Coffee Shop**:
*   You type your name into the ordering screen: `"John"`.
*   The screen says: *"Hello John, your latte is ready."*
*   But if the software is badly written, you could type: **`"John; and also open the cash drawer"`**.
*   If the computer sees the semicolon (`;`) as a separator, it might say "Hello John," and then immediately proceed to open the register because it thought the second half of your name was its next official order.

## How it works
Hackers use special symbols like `;`, `&`, or `|` to "break out" of the text box and start talking directly to the computer's motherboard. If they succeed, they achieve **[[remote-code-execution|Remote Code Execution (RCE)]]**, giving them the power to delete files, steal databases, or shut down the entire server.

## FAQs

*1. Why does the computer even listen?*
**Bad Manners.** Secure software should treat everything you type as just "boring text." A vulnerable program treats part of what you type as "data" and another part as "executable logic." It’s like a waiter who hears a customer say "I'll have the steak, and fire the cook" and actually goes into the kitchen to fire the cook.

*2. How do we stop it?*
**Validation and Sanitization.** A secure text box should physically reject anything that isn't a "normal" character. Developers also use "Parameterized Queries," which ensure that no matter what symbols a hacker types, the computer only ever sees them as harmless text, never as a command.

### Further Reading

*   **The Goal:** *[[remote-code-execution|Remote Code Execution (RCE)]]* (Total takeover).
*   **The Most Common Bug:** *[SQL Injection (A relative of command injection)](https://owasp.org/www-community/attacks/SQL_Injection)*.
*   **Interactive Lab:** *[Practice Defending against Command Injection](https://portswigger.net/web-security/os-command-injection/)*.
*   **Technical Guide:** *[OWASP: Testing for Command Injection](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/12-Testing_for_Command_Injection)*.
