---
title: Moving Features between Objects
tags: Refactoring, CleanCode, Techniques
---

# Moving Features between Objects

"The Neighbors" ,techniques for moving code and data between different classes to ensure that everything is in its "Proper Home."

In bad code, classes are often like neighbors who are constantly "Snooping" in each other’s business. A method in **Class A** might spend more time talking to **Class B** than to its own data. This is called "Feature Envy." We use these techniques to move the logic to the class that actually "Owns" it.

## 1. Move Method
**The Problem:** A method in `Account` spends all its time calculating things using data from `AccountType`. 
**The Solution:** Move the whole method into `AccountType`. If the code depends on `AccountType`'s data, it belongs IN `AccountType`. This is called **"Tell, Don't Ask"** ,you should tell an object what to do, not ask it for its data and do the work yourself.

```java
// BEFORE: Account is doing AccountType's job
class Account {
  double getOverdraftCharge() {
    if (this.type.isPremium()) { /* ... */ }
  }
}

// AFTER: AccountType does its own job
class AccountType {
  double getOverdraftCharge(int days) { /* ... */ }
}
```

## 2. Extract Class
**The Problem:** You have a `Person` class that has 30 fields, including `officeAreaCode`, `officeNumber`, and `officeExtension`.
**The Issue:** Your `Person` class is "Bloated." It’s trying to be a "Person" AND a "Phone Number." 
**The Solution:** Create a new class called `TelephoneNumber` and move all the phone-related fields and logic there. Now `Person` just has a simple link to a `TelephoneNumber` object. This makes the code **Modular** and much easier to test.

## 3. Hide Delegate
**The Problem:** **Class A** has to talk to **Class B** just to get something from **Class C**. 
**The Debt:** `a.getB().getC().doSomething()`. This is brittle! If the relationship between B and C changes, A breaks.
**The Solution:** Add a simple method to B that does the work for A. Now A only knows about its direct neighbor (B).

### Further Reading

*   **The Smell:** *[[code-smells|Coupler Smells]]* (When neighbors are too close).
*   **The Goal:** *[[what-is-refactoring|Clean Code Overview]]* (Why we move features).
*   **Article:** *[Refactoring.guru: Moving Features](https://refactoring.guru/refactoring/techniques/moving-features)* (The 8 techniques of moving code).
*   **Video:** *[Tell, Don't Ask Principle](https://www.youtube.com/watch?v=Hu4YbmPhFKQ)* (How to design better objects).
