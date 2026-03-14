---
title: When to Refactor
tags: Refactoring, CleanCode, SoftwareDesign
---

# When to Refactor

"Maintenance over Miracles" ,the rule that you should clean your code every single day, rather than waiting for it to become a disaster that requires a "Miracle" to fix.

Refactoring shouldn't be a special event on your calendar (like a "Refactoring Month"). It should be a **Constant Habit**, like washing your hands. If you only wash your hands once a year, you’re going to get sick. If you only clean your code once a year, your project is going to die.

Here are the three big moments when you should pick up the broom:

## 1. The Rule of Three
This is the most famous rule in software engineering:
1.  When you do something for the first time, **just get it done.** Don't worry about perfection.
2.  When you do the same thing a second time (Copy-Paste), **cringe a little**, but do it anyway.
3.  **The third time you do it, stop.** Refactor that code into its own reusable function. Never let a pattern repeat three times without a clean structure.

## 2. When Adding a Feature
Before you add a new room to a house, you have to make sure the foundation is strong. 
*   If the existing code is "Rotten" or "Messy," **do not** add your new feature on top of it. 
*   **First:** Clean the messy area until it's easy to understand.
*   **Second:** Add your new feature into that clean space. 
As the saying goes: *"For each desired change, make the change easy (warning: this may be hard), then make the easy change."*

## 3. During Code Review
This is the final "Checkpoint." Before a piece of code is allowed into the main project, it should be reviewed by a teammate. 
*   If the reviewer sees a [[code-smells|Code Smell]] (like a 500-line function), they should stop the process.
*   The author must refactor and clean the code **immediately** before it's allowed in. This prevents [[technical-debt|Technical Debt]] from piling up.

## FAQs

*1. What if I don't have time to refactor?*
**You don't have time NOT to refactor.** Messy code slows you down. If you don't clean as you go, eventually you will be so "swamped" by bugs and confusion that it will take you 2 weeks to change one simple button. 

### Further Reading

*   **The Checklist:** *[[how-to-refactor|How to Refactor Checklist]]* (The steps to follow).
*   **The Warning:** *[[technical-debt|Technical Debt Overview]]* (The cost of waiting).
*   **Article:** *[The Rule of Three in Engineering](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming))* (Why repetition is the enemy).
*   **Video:** *[Refactor Early, Refactor Often](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Why small steps beat big rewrites).
