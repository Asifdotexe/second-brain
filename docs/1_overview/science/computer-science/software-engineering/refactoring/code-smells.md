---
title: Code Smells
tags: Refactoring, CleanCode, SoftwareDesign
---

# Code Smells

"The Early Warning Signs"—surface indicators that your code is rotting underneath. Like a bad smell in a kitchen, it doesn't mean the house is falling down *yet*, but it tells you that a disaster is coming if you don't start cleaning.

**A Code Smell** is like a "Fuzzy Green Spot" on a slice of bread. The bread might still be edible today, but that spot is a sign of mold. If you ignore it and build a "Sandwich" (a new feature) on top of it, the whole system is going to get sick. We use these "Smells" to help us decide **exactly** where we need to [[what-is-refactoring|Refactor]] first.

Here are the 5 most common smells:

## 1. The Bloaters (Too Big)
These are pieces of code that have grown so large they are impossible to understand.
*   **Long Method:** A single function that goes on for 200 lines. (Hard to read, hard to test).
*   **Large Class:** A file that tries to do 20 different jobs at once.

## 2. The Abusers (Misusing Rules)
This happens when a developer tries to use "Fancy" programming rules in the wrong way.
*   **Switch Statements:** Using giant "If/Else" chains instead of proper object-oriented design.
*   **Refused Bequest:** A child class that inherits a bunch of "Junk" from its parent that it doesn't actually want.

## 3. The Preventers (Hard to Change)
These smells make it impossible to update the code.
*   **Shotgun Surgery:** Every time you want to change one small thing, you have to find and edit **10 different files**. If you miss one, the whole app crashes.

## 4. The Dispensables (Dead Weight)
Things that are just "Clutter" and should be deleted immediately.
*   **Duplicate Code:** The same logic copy-pasted in two different places.
*   **Dead Code:** Functions or variables that aren't even being used anymore.

## 5. The Couplers (Stuck Together)
Classes that are too "Attached" to each other.
*   **Feature Envy:** When Class A is constantly "snooping" around inside Class B’s data. This makes the code very "Brittle"—if you change Class B, Class A breaks instantly.

### Further Reading

*   **The Solution:** *[[what-is-refactoring|Refactoring Overview]]* (How to fix the smells).
*   **The Debt:** *[[technical-debt|Technical Debt Overview]]* (What happens if you ignore the smell).
*   **Article:** *[The Encyclopedia of Code Smells](https://refactoring.guru/refactoring/smells)* (Every smell described in detail).
*   **Video:** *[7 Code Smells You Need to Eradicate](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Visual examples of bad code).
