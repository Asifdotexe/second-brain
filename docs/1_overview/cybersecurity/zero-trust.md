---
title: Zero Trust Architecture
tags: security, network, architecture
desc: The "never trust, always verify" security model explained.
icon: fas fa-lock
---

# Zero Trust Security

**Zero Trust** is a strategic initiative that helps prevent successful data breaches by eliminating the concept of trust from an organization's network architecture.

> "Never trust, always verify."

## Core Principles

1. **Verify Explicitly**: Always authenticate and authorize based on all available data points (identity, location, device health).
2. **Use Least Privilege Access**: Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA).
3. **Assume Breach**: Minimize blast radius and segment access. Verify end-to-end encryption.

## Traditional vs. Zero Trust

| Traditional Security | Zero Trust |
| :--- | :--- |
| "Castle and Moat" | Identity-based perimeter |
| Trust anyone inside | Trust no one, inside or out |
| Static credentials | Continuous validation |

## Implementation Example

Instead of a VPN that gives access to the whole network, use an **Identity Aware Proxy**:

```bash
# Example policy logic
if user.mfa_verified && device.is_managed:
    allow_access(resource="database_prod")
else:
    deny_access()
