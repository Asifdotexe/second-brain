---
title: Composing Methods
tags: Refactoring, CleanCode, Techniques
---

# Composing Methods

"The Art of the Function" ,a set of techniques for taking massive, "God-like" functions and breaking them down into small, readable, and manageable pieces.

In most messy codebases, the biggest problem is the **Long Method**. A function that is 500 lines long is an "Evil" function. It conceals the logic, makes it impossible to find bugs, and is terrifying to change. We use these "Composition" techniques to streamline our methods and make the code read like a simple story.

## 1. Extract Method (The MVP)
**The Problem:** You have a bunch of code in one function that could be grouped together.
**The Solution:** Cut that code out, put it in a **New Function** with a descriptive name, and call that new function from the old one.

```javascript
// BEFORE: Messy and hard to read
function printOwing() {
  printBanner();
  // Print details (The brain has to stop and read these details)
  console.log("name: " + name);
  console.log("amount: " + getOutstanding());
}

// AFTER: Clean and descriptive
function printOwing() {
  printBanner();
  printDetails(getOutstanding()); // The brain instantly knows what happens here
}

function printDetails(outstanding) {
  console.log("name: " + name);
  console.log("amount: " + outstanding);
}
```

## 2. Extract Variable
**The Problem:** You have a giant `if` statement that looks like a math equation from Mars.
**The Solution:** Take the complex parts of that equation and put them into variables with **Names** that explain what they are.

```javascript
// BEFORE: What does this even mean?
if ((platform.toUpperCase().indexOf("MAC") > -1) && (browser.toUpperCase().indexOf("IE") > -1) && wasInitialized()) {
  // ...
}

// AFTER: Oh, I see!
const isMacUser = platform.toUpperCase().indexOf("MAC") > -1;
const isUsingInternetExplorer = browser.toUpperCase().indexOf("IE") > -1;

if (isMacUser && isUsingInternetExplorer && wasInitialized()) {
  // ...
}
```

## 3. Inline Method
**The Problem:** You have a function that is so simple that the function name is basically the same as the body. It’s "Over-Engineered."
**The Solution:** Delete the function and just put the logic directly where it’s needed. Don't make people jump to a new file just to read `return a > b`.

### Further Reading

*   **The Big Picture:** *[[what-is-refactoring|What is Refactoring?]]* (The janitor's mission).
*   **The Warning:** *[[code-smells|Code Smells Guide]]* (When functions get too long).
*   **Article:** *[Refactoring.guru: Composing Methods](https://refactoring.guru/refactoring/techniques/composing-methods)* (Visual examples of all 9 techniques).
*   **Video:** *[How to Extract Methods Like a Pro](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (Refactoring demo).
