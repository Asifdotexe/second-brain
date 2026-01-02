---
title: Week 1
tags: security, network, architecture
desc: Summary of 27 December 2025 - 3 December 2026.
---

# Week 52

## Cyber Security

### RondoDox Botnet Exploits Next.js Servers
- The What: A new [[botnet]] campaign dubbed "RondoDox" has been observed actively targeting servers running the Next.js framework by exploiting a critical vulnerability known as "[[react2shell|React2Shell]]" ([[CVE]]-2025-55182).
- The Detail: Attackers are using this flaw to execute remote code on vulnerable servers, subsequently deploying cryptominers and malware. The botnet specifically hunts for unpatched instances of the popular React framework used for building web applications.
- The Impact: This poses a severe risk to web infrastructure, as Next.js is widely used by enterprise-grade applications. Successful compromise can lead to server resource theft ([[cryptojacking]]) or deeper network infiltration.

*Read more about it: https://www.bleepingcomputer.com/news/security/rondodox-botnet-exploits-react2shell-flaw-to-breach-nextjs-servers/*

### Fourth Wave of "GlassWorm" Targets macOS Developers

- The What: A persistent malware campaign known as GlassWorm has launched its fourth wave, specifically targeting macOS developers through malicious extensions for VSCode and OpenVSX.
- The Detail: The attackers distribute trojanized versions of cryptocurrency wallet applications and development tools. Once installed, the malware grants persistent access to the victim's machine, aiming to steal sensitive credentials and crypto assets.
- The Impact: This highlights the growing trend of [[supply-chain-attack|Supply Chain Attack]] targeting developers. By compromising the tools developers use, attackers can potentially inject malicious code into downstream software or steal high-value intellectual property.

*Read more about it: https://www.bleepingcomputer.com/news/security/new-glassworm-malware-wave-targets-macs-with-trojanized-crypto-wallets/*

### Unleash Protocol Drained of $3.9 Million

- The What: The decentralized finance (DeFi) platform Unleash Protocol suffered a major security breach, resulting in the theft of approximately $3.9 million in cryptocurrency.
- The Detail: The attack was executed via an unauthorized contract upgrade. The attacker managed to hijack the platform's multisig (multi-signature) wallet controls, allowing them to approve a malicious update that drained the protocol's assets.
- The Impact: This incident underscores the fragility of "upgradeable" smart contracts. If administrative keys are compromised, the immutability of the blockchain offers no protection against theft, leaving investors with significant losses.

*Read more about it: https://www.bleepingcomputer.com/news/security/hackers-drain-39m-from-unleash-protocol-after-multisig-hijack/*


## Artificial Intelligence

### SoftBank Completes $40B Investment in OpenAI
- The What: SoftBank has officially finalized a massive $40 billion investment into OpenAI, solidifying the Japanese conglomerate's stake in the leading American AI research lab.
- The Detail: This capital injection is expected to fund the exorbitant compute costs required for training the next generation of models (potentially GPT-6) and expanding global infrastructure.
- The Impact: This moves OpenAI further away from its non-profit roots and deeper into the corporate mega-structure. It signals that the "AI Arms Race" has become too expensive for anyone but the most heavily capitalized entities to compete in.

*Read more about it: https://www.reuters.com/business/media-telecom/softbank-has-fully-funded-its-40-billion-investment-openai-cnbc-reports-2025-12-30/*

### OpenAI Prioritizes "Sponsored Content" in Answers
- The What: Reports indicate that OpenAI is shifting its business model to prioritize "sponsored content" within its AI-generated responses, moving away from a purely subscription/API-based revenue stream.
- The Detail: Despite initial resistance to advertising, the company is testing formats where paid partners' information appears prominently when relevant queries are asked, distinct from organic training data results.
- The Impact: This fundamentally changes the user trust model for [[LLM|Large Language Models]]. If answers are influenced by sponsorship, the perceived neutrality of AI "reasoning" is compromised, making it more akin to a search engine ad platform than an impartial assistant.

*Read more about it: https://www.bleepingcomputer.com/news/artificial-intelligence/openais-chatgpt-ads-will-allegedly-prioritize-sponsored-content-in-answers/*

### NVIDIA in Advanced Talks to Acquire AI21
- The What: Reports indicate NVIDIA is in late-stage negotiations to acquire Israeli startup AI21 Labs for approximately $2-3 billion.
- The Detail: AI21 is known for its "Jurassic" large language models and specialized enterprise AI tools. The deal is described as an "acqui-hire," focusing on absorbing AI21's top-tier research talent.
- The Impact: This represents significant market consolidation. Hardware giant NVIDIA is moving vertically up the stack, owning not just the chips (H200s/Blackwell) but increasingly the models and software ecosystems that run on them.

*Read more about it: https://www.reuters.com/business/nvidia-advanced-talks-buy-israels-ai21-labs-up-3-billion-report-says-2025-12-30/*

### Meta Acquires "Manus" for Agentic AI
- The What: Meta has agreed to acquire Singapore-based startup Manus, a company specializing in [[Agentic AI|AI Agents]] for small and medium businesses (SMBs).
- The Detail: Manus's technology focuses on autonomous agents that can execute complex multi-step workflows for businesses. Meta plans to integrate this directly into its enterprise offerings, potentially within the WhatsApp/Messenger business ecosystem.
- The Impact: This signals a shift from "Chatbots" (which just talk) to "Agents" (which do work). Meta is betting that the future of business messaging involves AI that can autonomously handle customer service, booking, and sales tasks.

*Read more about it: https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about/*

## General Technology

### New "Microchip" Enables Quantum Control
- The What: Researchers have developed a new microchip-sized device capable of controlling laser frequencies with extreme precision, a critical step for scalable quantum computing.
- The Detail: Published in ScienceDaily, the research details how this chip uses a fraction of the power required by traditional bulky systems to stabilize the lasers needed to manipulate quantum bits (qubits).
- The Impact: Reducing the size and power consumption of control hardware is one of the biggest hurdles in moving quantum computers from the lab to commercial reality. This chip could accelerate the timeline for practical quantum processors.

*Read more about it: https://www.sciencedaily.com/releases/2025/12/251226045341.htm*

### NYC Mayoral Inauguration Bans Flipper Zero
- The What: For the 2026 inauguration of New York City Mayor Zohran Mamdani, officials have explicitly added the Flipper Zero and Raspberry Pi devices to the list of banned items.
- The Detail: The Flipper Zero is a portable multi-tool for geeks that can interact with radio protocols (RFID, NFC, Sub-GHz). While legal, it has gained a reputation in security circles for its ability to clone badges or disrupt wireless signals.
- The Impact: This is one of the first high-profile public events to specifically blacklist "hacker tools" by name, acknowledging the physical security risks posed by accessible, pocket-sized cyber-physical devices.

*Read more about it: https://www.bleepingcomputer.com/news/security/nyc-mayoral-inauguration-bans-flipper-zero-raspberry-pi-devices/*

### US Grants Chip Export Waivers to Samsung & SK Hynix
- The What: The US government has granted a renewed annual license to South Korean chip giants Samsung and SK Hynix, allowing them to continue shipping advanced chip manufacturing equipment to their facilities in China through 2026.
- The Detail: This waiver is a critical exception to the strict US export controls designed to limit China's semiconductor capabilities. It allows these companies to maintain their existing massive memory chip fabrication plants in China.
- The Impact: This decision stabilizes the global memory chip supply chain for the coming year. Without it, global prices for RAM and Flash storage (used in everything from phones to servers) would likely have spiked due to production disruptions.

*Read more about it: https://www.reuters.com/world/china/samsung-wins-us-annual-approval-chipmaking-tool-shipments-china-source-says-2025-12-30/*

### SpaceX Hints at 2026 IPO
- The What: Following a court victory reinstating Tesla stock options, Elon Musk has publicly hinted that SpaceX may finally initiate its Initial Public Offering (IPO) in 2026.
- The Detail: Analysts suggest a valuation potentially exceeding $1.5 trillion. The move would transition the world's dominant private spaceflight company into the public markets, opening it to retail investors.
- The Impact: A SpaceX IPO would be the most significant financial event in the aerospace sector in decades, likely flooding the industry with capital and forcing competitors to accelerate their own capitalization strategies to survive.

*Read more about it: https://www.scientificamerican.com/article/spacex-could-go-public-in-2026-what-does-that-mean-for-space-exploration/*
