---
title: PhantomRaven
tags: CyberSecurity, SupplyChainAttack, Malware, NpmRegistry
---

# PhantomRaven

Imagine ordering a "safe" package from a trusted store, but it turns out the delivery instructions are actually a secret signal to a thief who then breaks into your house. That’s essentially how the PhantomRaven attack works.

It’s a nasty supply-chain attack that’s been hitting the **npm registry**, the place where almost every JavaScript developer gets their code. What makes it clever is that the malicious code isn't actually *in* the package you download. Instead, it uses something called **Remote Dynamic Dependencies (RDD)**.

Essentially, the configuration file tells your computer to reach out to a specific URL and fetch "extra" code right as you're installing it. Because the code is fetched at the last second, standard security scanners, which usually just check the static files on the registry, miss it entirely. It’s like a ghost appearing only once the door is already unlocked.

## How it works

The attackers didn't just rely on technical tricks. They used a combination of persistence and psychological games:

*   **Slopsquatting:** They created hundreds of packages with names that sound boring and useful, like `utility-tool-ai`. They used AI to generate professional-looking descriptions to make everything look legitimate.
*   **The RDD Switch:** By fetching the bad stuff from an external link during `npm install`, they can change what they're actually sending at any time. They don't have to keep republishing the package to the registry.
*   **Asset Stripping:** Once it's in, the malware goes straight for the "keys to the kingdom." It harvests GitHub tokens, cloud credentials for AWS or Azure, and SSH keys. Everything is then sent back to their own servers.
*   **Ghost Infrastructure:** To stay ahead of researchers, they used over 50 different accounts and swapped their servers constantly. It’s a lot of "cat and mouse" work.

## FAQs

*How do I know if I've been hit?*
It’s tough. If you’ve been installing newer, obscure packages that suddenly need internet access during setup, you should probably be suspicious. Check your environment variables and `.npmrc` files for anything that looks like it’s shipping data out.

*Why don't current security tools catch this?*
Most tools are "static", they look at the files as they sit there. This attack is "dynamic." The malicious part doesn't even exist on your system until the moment you run the install command.

### Further Reading

*   **Analysis:** [PhantonRaven: The Persistent npm Supply Chain Attack](https://www.endorlabs.com/blog/phantomraven-npm-supply-chain-attack) (The Endor Labs report that broke the story).
*   **Concept:** [What is a Supply Chain Attack?](https://www.cisa.gov/news-events/news/what-supply-chain-attack) (A good primer from CISA).
