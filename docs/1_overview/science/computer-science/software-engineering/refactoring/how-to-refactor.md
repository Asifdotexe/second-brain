---
title: How to Refactor
tags: Refactoring, CleanCode, SoftwareDesign, Testing
---

# How to Refactor

"Micro-Steps and Red Lights"—the rigid, step-by-step checklist you must follow to ensure you are cleaning the code without accidentally breaking the whole application.

Refactoring is dangerous. You are taking apart the "Foundation" of a building while people are still living in it. If you try to do a "Massive Rewrite" over a weekend, you will almost certainly fail and introduce dozens of bugs. To stay safe, you must follow the **Janitor’s Rule**: move one piece of trash at a time and check the floor every 3 seconds.

## The Safety Checklist

1.  **The Code Must Be "Green" (Tests Passing):** Never try to refactor code that doesn't have automated tests. If you don't have tests, you have no way of knowing if you broke something until a customer calls you screaming.
2.  **Take Tiny, "Baby" Steps:** Don't delete 100 lines. Rename **one** variable. Move **one** function to a new file. A refactor should consist of 50 tiny, 2-minute changes, moving from one "Working State" to another.
3.  **Run Tests After EVERY Step:** After you hit "Save" on that one tiny change, immediately run your tests. 
    *   **Passed?** Move to the next tiny step.
    *   **Failed?** Immediately hit **Ctrl+Z** to undo. You know exactly what broke it because you only changed one thing.
4.  **No New Features:** If you notice a bug while cleaning, **do not fix it yet.** If you realize you need a new feature, **do not add it yet.** Stay focused on cleaning. If you mix "Cleaning" and "Building," you will get lost in the logic.

## The "Zen" of Refactoring
If you are doing it right, refactoring should be **Boring**. If you feel a "Rush of Adrenaline" or your "Heart is Pounding" because you just deleted a giant block of code, you are doing it wrong. You should always be 5 seconds away from a perfectly working system.

### Further Reading

*   **The Goal:** *[[what-is-refactoring|What is Refactoring?]]* (Understanding the mission).
*   **The Smells:** *[[code-smells|Code Smells Guide]]* (Finding the trash to clean).
*   **Article:** *[Extreme Programming Refactoring Guide](https://www.agilealliance.org/glossary/refactoring/)* (Why tests are mandatory).
*   **Video:** *[Live Refactoring: Tiny Steps Demo](https://www.youtube.com/watch?v=RPlfC808EPU)* (Watch how a pro cleans code).
