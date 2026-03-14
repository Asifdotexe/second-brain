---
title: Dealing with Generalization
tags: Refactoring, CleanCode, Techniques
---

# Dealing with Generalization

"The Family Tree"—techniques for moving code between "Parent" classes and "Child" classes to ensure that everyone has exactly what they need and nothing more.

In Object-Oriented Programming, we often use **Inheritance** (Parent/Child relationships). But over time, the family tree gets messy. You might have code in the "Children" that should be shared by everyone, or code in the "Parent" that only one child actually uses. We use these techniques to "Clean up the Tree."

## 1. Pull Up Field / Method
**The Problem:** Two sibling classes (like `Engineer` and `Salesman`) both have the exact same field, like `private String name`. 
**The Solution:** "Pull it Up" into the parent class (`Employee`). Now you only have to maintain the `name` code in one place instead of two.

```java
// BEFORE: Scattered logic
class Salesman extends Employee { private String name; }
class Engineer extends Employee { private String name; }

// AFTER: Consolidated logic
class Employee { protected String name; }
class Salesman extends Employee { /* Uses Parent's name */ }
class Engineer extends Employee { /* Uses Parent's name */ }
```

## 2. Push Down Field / Method
**The Problem:** You have a method in the Parent class (`Employee`) called `getSalesCommission()`. 
**The Issue:** `Salesmen` need it, but `Engineers` don't. Leaving it in the Parent means the Engineer now has a "Ghost" method that doesn't make sense for them.
**The Solution:** "Push it Down" into the `Salesman` class only. Keep the Parent class clean and focused only on things **everyone** has in common.

## 3. Extract Superclass
**The Problem:** You have two classes that are very similar but have different parents.
**The Solution:** Create a **New Parent** (a Superclass) that holds the shared logic, and then have both classes inherit from it.

### Further Reading

*   **The Roots:** *[[what-is-refactoring|What is Refactoring?]]* (The core philosophy).
*   **The OOP Rule:** *[[code-smells|OOP Abuser Smells]]* (When inheritance goes wrong).
*   **Article:** *[Refactoring.guru: Dealing with Generalization](https://refactoring.guru/refactoring/techniques/dealing-with-generalization)* (Inheritance refactoring).
*   **Video:** *[Inheritance vs Composition](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (How to choose the right tree structure).
