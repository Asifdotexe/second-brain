---
title: Simplifying Method Calls
tags: Refactoring, CleanCode, Techniques
---

# Simplifying Method Calls

"The Conversation Rule" ,techniques for making the "Interactions" between your classes as simple and polite as possible.

When Class A calls a method in Class B, they are having a "Conversation." If the method has 10 parameters, it’s like a conversation where you have to repeat someone's social security number, mother's maiden name, and favorite color just to say "Hello." We use these techniques to simplify the "Signature" of our methods so they are easy to use.

## 1. Rename Method (The Most Powerful Tool)
**The Problem:** A method is named `getnm()`. Is it "Get Name"? "Get Nautical Mile"? "Get New Message"? 
**The Solution:** Rename it to `getName()`. **Names are 90% of programming.** If a function is named perfectly, you don't even have to look at the code inside.

## 2. Separate Query from Modifier (The "No Surprises" Rule)
**The Problem:** You have a function called `getTotal()` that calculates the price... but also **charges the credit card.** 
**The Issue:** Your teammate calls `getTotal()` just to show the price in the UI, and accidentally charges the customer $500. This is a "Side Effect."
**The Solution:** Never mix "Asking" (Query) with "Doing" (Modifier).
*   Method 1: `getTotal()` (Only calculates).
*   Method 2: `processPayment()` (Only charges).

## 3. Replace Parameter with Method Call
**The Problem:** You calculate a value (`let price = item.getPrice()`) and then pass that `price` into another method (`order.applyDiscount(price)`).
**The Solution:** Why not just let `applyDiscount` ask the `item` for the price itself? Removing parameters makes the method call much simpler and prevents you from accidentally passing the wrong number.

## 4. Parameterize Method
**The Problem:** You have two functions: `raiseSalaryByFivePercent()` and `raiseSalaryByTenPercent()`.
**The Solution:** Create one function `raiseSalary(percentage)`. This makes your code more flexible and prevents "Duplicate Code."

### Further Reading

*   **The Principles:** *[[what-is-refactoring|Clean Code Overview]]* (Why names matter).
*   **The Smell:** *[[code-smells|Bloater Smells]]* (When parameter lists get too long).
*   **Article:** *[Refactoring.guru: Simplifying Method Calls](https://refactoring.guru/refactoring/techniques/simplifying-method-calls)* (Interface design tips).
*   **Video:** *[The Art of Naming in Code](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (How to talk to your compiler).
