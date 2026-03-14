---
title: Organizing Data
tags: Refactoring, CleanCode, Techniques
---

# Organizing Data

"Cleaning the Cabinets" ,techniques for turning messy, "Magic" numbers and loose data into clear, self-explanatory structures.

If your code is full of random numbers like `9.81` or `0.05`, it is like a kitchen where nothing has a label. You might know what the powders are today, but six months from now, you’ll accidentally put salt in your coffee. We use "Data Organization" to put labels on everything and make the code "Self-Documenting."

## 1. Replace Magic Number with Constant
**The Problem:** You have a number in your code that "does something," but its name doesn't explain **why**.
**The Solution:** Create a constant variable with a clear name (in ALL_CAPS) and use that instead.

```javascript
// BEFORE: What is 9.81? Why is it here?
function getFallingSpeed(mass) {
  return mass * 9.81;
}

// AFTER: Oh, it's gravity!
const GRAVITY_ON_EARTH = 9.81;

function getFallingSpeed(mass) {
  return mass * GRAVITY_ON_EARTH;
}
```

## 2. Encapsulate Field
**The Problem:** You have a class with a `public` variable that anyone can change at any time. It's like leaving your front door wide open. Someone could "hack" your data or break your logic without you knowing.
**The Solution:** Make the data `private` (lock the door) and create **Getters and Setters** (the doorbell). Now, if someone wants to change your data, they have to go through your "Security Check" first.

## 3. Replace Type Code with Class
**The Problem:** You use a "Code" to describe something (e.g., `0` = Admin, `1` = User).
**The Issue:** It’s easy to mess up the numbers.
**The Solution:** Create a real class or an "Enum" for the types. Now the system has to use the names, which makes it impossible to accidentally set someone's permissions to "Pizza" instead of "Admin."

### Further Reading

*   **The Big Picture:** *[[what-is-refactoring|What is Refactoring?]]* (The cleaning plan).
*   **The Smell:** *[[code-smells|Dispensable Smells]]* (Removing pointless data).
*   **Article:** *[Refactoring.guru: Organizing Data](https://refactoring.guru/refactoring/techniques/organizing-data)* (Every data technique explained).
*   **Video:** *[Why Public Variables are Evil](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Understanding encapsulation).
