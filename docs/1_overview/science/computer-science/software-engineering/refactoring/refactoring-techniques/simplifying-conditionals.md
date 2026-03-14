---
title: Simplifying Conditional Expressions
tags: Refactoring, CleanCode, Techniques
---

# Simplifying Conditional Expressions

"Unlocking the Maze"—techniques for taking complex `if/else` logic that looks like a tangled ball of yarn and turning it into a straight, clear path.

Conditionals (If/Else) are where most bugs live. As a project grows, we add "Wait, what if this happens?" checks until the code is a 10-level deep "Nest" that no human can understand. We use these techniques to "Flatten" the logic and make it readable at a glance.

## 1. Decompose Conditional
**The Problem:** You have a giant `if` statement with complex math inside the check.
**The Solution:** Extract the check into a function with a name that asks a question.

```javascript
// BEFORE: Hard to read at a glance
if (date < SUMMER_START || date > SUMMER_END) {
  charge = quantity * winterRate + serviceFee;
}

// AFTER: Simple and clear
if (isWinter(date)) {
  charge = getWinterCharge(quantity);
} else {
  charge = getSummerCharge(quantity);
}
```

## 2. Use Guard Clauses (Bailing Early)
**The Problem:** You have "Nested" Ifs that keep indentation pushing to the right. To see the "Actual" logic, you have to scroll through 4 levels of edge cases.
**The Solution:** Invert the logic. Check for the "Errors" first and **Return** immediately. This leaves the "Normal" logic at the bottom, perfectly clear.

```javascript
// BEFORE: The "Arrow" of Doom
public double getPay() {
  if (isDead) {
    return 0;
  } else {
    if (isRetired) {
      return 100;
    } else {
      return normalRate;
    }
  }
}

// AFTER: Clean and Flat
public double getPay() {
  if (isDead) return 0;   // Bailing early
  if (isRetired) return 100; // Bailing early
  
  return normalRate; // The "Normal" path is clear
}
```

## 3. Replace Conditional with Polymorphism
**The Problem:** You have a giant `switch` statement that checks `if (animal == "Cat")`, `if (animal == "Dog")`, etc.
**The Solution:** Create a `Cat` class and a `Dog` class. Give them both a `makeSound()` method. Now, your main code doesn't need to "Check" anything—it just calls `animal.makeSound()` and the object handles itself.

### Further Reading

*   **The Goal:** *[[what-is-refactoring|What is Refactoring?]]* (The mission).
*   **The Smell:** *[[code-smells|OOP Abuser Smells]]* (Why Switch statements are dangerous).
*   **Article:** *[Refactoring.guru: Simplifying Conditionals](https://refactoring.guru/refactoring/techniques/simplifying-conditional-expressions)* (The 'Maze' cleanup guide).
*   **Video:** *[How to Delete If/Else Statements](https://www.youtube.com/watch?v=RPlfC808EPU)* (A masterclass in polymorphism).
