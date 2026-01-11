---
title: Week 2
tags: security, network, architecture
desc: Summary of 3 January 2026 - 9 January 2026.
---

# Week 2

## Cyber Security

### Critical RCE Flaws Patched in Veeam Backup

![Veeam](https://www.bleepstatic.com/content/hl-images/2024/11/08/Veeam.jpg)

Date: 2026-01-07

- Veeam released urgent patches for its Backup & Replication software to fix a critical vulnerability ([[cve|CVE]]-2025-59470) and two high-severity flaws.
- The flaw allows low-privileged users, such as backup operators, to execute arbitrary code remotely ([[remote-code-execution|RCE]]) by manipulating backup configuration files or password parameters.
- Given Veeam's ubiquity in enterprise disaster recovery, unpatched servers act as a prime gateway for attackers to seize control of backup data and demand extortion payments.

*Read more about it: https://www.bleepingcomputer.com/news/security/new-veeam-vulnerabilities-expose-backup-servers-to-rce-attacks/*

### China-Linked Bad Actors Exploit VMware ESXi zero-day Chain

![VMware](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm8E9a8qNOO2_xOS89H3cvGDWPpRKo2WRFf41jVFbT6TGf62B4tUg2HJVFblopdAftu8NYjNO-S2MF-_VOr6mHghokD_zhl8Ybf-H8XLhw5_E4tDfkvIfjltzVwsOo-BK731rpbx2-eClOz4yN3Nw8nHXZaRo9ATkbzTLNIP9j7OaeHCdebT_S8uXri6Iu/s790-rw-e365/vmware.jpg)

Date: 2026-01-09

- Chinese-speaking bad actors utilized a chain of three [[zero-day|zero-day]] vulnerabilities ([[cve|CVE]]-2025-22224, 22225, 22226) to escape virtual machines and compromise host systems.
- Successful exploitation of the issue could permit a malicious actor with admin privileges to leak memory from the Virtual Machine Executable ([[vmx|VMX]]) process or execute code as the [[vmx|VMX]] process.
- The attack vector originated from a compromised SonicWall [[vpn|VPN]], allowing attackers to deploy a toolkit named "MAESTRO" and a malicious driver to execute code on the [[hypervisor|Hypervisor]] level.
- This highlights a sophisticated escalation where attackers can bypass standard isolation protections, putting critical virtualized infrastructure at severe risk of [[ransomware|Ransomware]] deployment.

*Read more about it: https://thehackernews.com/2026/01/chinese-linked-hackers-exploit-vmware.html*

### Critical Flaws Expose 50k+ Coolify Instances to Root Takeover

![Coolify](https://image-optimizer.cyberriskalliance.com/unsafe/1920x0/https://files.cyberriskalliance.com/wp-content/uploads/2025/09/AdobeStock_1364130870.jpg)

Date: 2026-01-09

- Security researchers have disclosed 11 critical vulnerabilities in Coolify, an open-source self-hosting platform, with severity scores reaching the maximum [[cvss|CVSS]] rating of 10.0.
- The flaws include massive security gaps such as the exposure of private [[ssh|SSH]] keys (CVE-2025-64420) and [[command-injection|Command-Injection]] bugs ([[cve|CVE]]-2025-59157) that allow low-privileged users to execute arbitrary code.
- With over 52,000 instances currently exposed online, unpatched servers are at immediate risk of total compromise, allowing attackers to escape container environments and seize full control of the host infrastructure.

*Read more about it: https://www.scworld.com/brief/nearly-a-dozen-coolify-flaws-put-servers-at-risk*

## Artificial Intelligence

### Google Rolls Out Speed-Focused Gemini 3 Flash Model

![Gemini 3 Flash](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-16.png)

Date: 2026-01-03

- Google has globally deployed "Gemini 3 Flash," a new iteration of its model designed specifically for low-latency, real-time responses in Search and mobile ecosystems.
- The model powers a new "AI Mode" in Google Search, capable of verifying its own answers to minimize [[ai-hallucination|AI-Hallucination]] before presenting them to the user.
- This marks a shift from "larger is better" to "faster and more reliable," directly targeting users who need instant, verified information rather than creative generation.

*Read more about it: [Boston Institute of Analytics](ht tps://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*

### India Launches "Skill the Nation" AI Initiative

![Skill the Nation](https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2026/01/image-17.png)

Date: 2026-01-03

- The Indian government announced the SOAR (Skilling for AI Readiness) initiative, aiming to upskill the workforce for an AI-centric economy.
- Announced by President Murmu, the program shifts the focus of AI from a "tech sector issue" to a national GDP driver, with specific training mandates.
- This represents one of the largest state-sponsored AI literacy pushes, potentially positioning India as a massive talent hub for the global [[generative-ai|Generative-AI]] supply chain.

*Read more about it: [Boston Institute of Analytics](https://bostoninstituteofanalytics.org/blog/this-week-in-ai-29th-dec-2nd-jan-biggest-breakthroughs-news-you-missed/)*


### Perplexity launches free AI tool for law enforcement agencies

![Perplexity](https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg)

Date: 2026-01-08

- Perplexity has released a specialized enterprise AI platform designed for law enforcement and emergency responders, offered free to qualifying agencies for one year.
- The tool allows officers to analyze crime scene photos, bodycam transcripts, and incident reports in real-time, though Perplexity states the data is isolated and not used for model training.
- While aimed at reducing police paperwork, the launch has ignited immediate privacy debates regarding the reliability of AI analysis in criminal justice and the potential for automated bias in policing.

*Read more about it: [Investing.com](https://in.investing.com/news/company-news/perplexity-launches-free-ai-tool-for-law-enforcement-agencies-93CH-5179360)*

### OpenAI and SoftBank Invest $1B in "Stargate" Energy Project

![Stargate](https://media.gettyimages.com/id/2243573116/photo/the-openai-logo-appears-on-a-smartphone-screen-reflecting-an-abstract-illustration-dominated.jpg?s=612x612&w=0&k=20&c=Bm-p9812p4vS8LpdeOV9X-caneeclVR3bIg-1lic_5A=)

Date: 2026-01-09

- OpenAI and SoftBank Group have jointly invested $1 billion into SB Energy to build massive renewable energy infrastructure for the upcoming "Stargate" data center project.
- The partnership focuses on supplying 1.2 gigawatts of power, enough to light up a major city, specifically to support the immense compute requirements of OpenAI's next-generation models.
- This move signals that power availability, not just chip supply, is now the primary bottleneck for AI scaling, forcing tech giants to become energy infrastructure developers.

*Read more about it: [OpenAI Official Blog](https://openai.com/index/stargate-sb-energy-partnership/)*

### Allianz Deploys Anthropic's Claude to Global Workforce

![Allianz](https://www.pymnts.com/wp-content/uploads/2025/07/Allianz-.jpg?w=768)

Date: 2026-01-09

- Insurance giant Allianz announced a global partnership with Anthropic to integrate the Claude AI model into its daily operations across insurance, claims, and compliance.
- Unlike standard chatbots, this integration will embed Claude directly into Allianz's core risk assessment workflows to automate complex document processing and claims analysis.
- This represents one of the largest enterprise deployments of 2026 so far, signaling a shift where traditional industries are moving from "AI experiments" to full-scale production dependencies.

*Read more about it: [PYMNTS](https://www.pymnts.com/artificial-intelligence-2/2026/allianz-taps-anthropic-to-help-deploy-ai-throughout-its-insurance-business/)*

### Amazon’s Ring rolls out controversial, AI-powered facial-recognition feature to video doorbells

Date: 2026-01-09

![Ring](https://techcrunch.com/wp-content/uploads/2024/08/ring_battery_doorbell_2024.jpg)

- Amazon's Ring has begun deploying AI-powered facial recognition features that can identify specific individuals rather than just detecting generic motion.
- The "Familiar Faces" update allows the system to tag known visitors, a feature that has sparked renewed debate regarding biometric privacy in consumer electronics.
- While offering convenience for users to screen visitors, the mainstreaming of granular surveillance in home security raises concerns about data retention and neighborhood privacy.

## General Technology

### Intel Launches "Panther Lake" on Historic 18A Process

![Intel](https://mms.businesswire.com/media/20260105738564/en/2682502/4/ntel-Core-Ultra-processor-series3-with-Arc-GPU.jpg)

Date: 2026-01-08

- At CES 2026, Intel officially debuted its Core Ultra Series 3 processors (codenamed "Panther Lake"), the first consumer chips built on its advanced 18A Node manufacturing process.
- These chips utilize "RibbonFET" transistors to deliver a massive leap in efficiency, with Intel claiming up to 27 hours of battery life and a 77% boost in gaming performance over previous generations.
- This is a "make or break" moment for US semiconductor manufacturing; successfully shipping 18A proves Intel can arguably match or beat TSMC’s technology, potentially reshaping the global chip supply chain.

*Read more about it: [Extreme Tech](https://www.extremetech.com/computing/intel-debuts-core-ultra-series-3-cpus-from-its-18a-node)*