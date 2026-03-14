---
title: Hypervisor
tags: Virtualization, CloudComputing, Infrastructure
---

# Hypervisor

The "Landlord of the Digital Apartment Building" ,a clever layer of software that allows one massive physical computer to pretend to be dozens of smaller, separate computers at the same time.

If a physical computer is a **Building**, the **Hypervisor** is the property manager that takes an empty floor and builds separate apartments (**[[virtualization|Virtual Machines]]**) inside it. It ensures that the person in Apt 1 can't see what the person in Apt 2 is doing, even though they share the same electricity and plumbing.

## The Two Types of Managers

### Type 1: Bare Metal (The Heavy Lifter)
This Hypervisor runs **directly** on the physical hardware. It replaces the normal **[[operating-system|Operating System]]** entirely. This is the fastest and most stable way to run a server.
*   *Analogy:* The Building Manager lives in the lobby and controls everything directly.
*   *Examples:* VMware ESXi, Microsoft Hyper-V, KVM.

### Type 2: Hosted (The App)
This Hypervisor runs **inside** another Operating System, just like Chrome or Spotify. It is easier to set up, but a little bit slower because it has to "ask permission" from the main OS to use the hardware.
*   *Analogy:* You are subletting a room inside someone's already-existing apartment.
*   *Examples:* VMware Workstation, Oracle VirtualBox.

## Why Do We Use Them?

*   **Saving Money:** In the old days, companies bought one physical server for every task (Web server, Email server, File server). These servers were mostly idle. With a Hypervisor, you buy one **Beast** of a server and run all those tasks inside it as "Virtual Machines."
*   **The Sandbox:** If one Virtual Machine gets a **[[malware|Virus]]**, the Hypervisor keeps it trapped in its "Apartment." The virus cannot "leap" out of the VM to infect the rest of the physical computer.

## FAQs

*1. Is a Hypervisor the same as Docker?*
**No.** 
*   **Hypervisor:** Virtualizes the **Hardware**. It gives you a whole "Fake Computer" (with its own RAM, Disk, and [[operating-system|OS]]).
*   **Docker ([[containerization|Containers]]):** Virtualizes the **Software**. It is much lighter and faster because it shares the main computer’s Operating System.

*2. Can I run a Hypervisor on my laptop?*
**Yes!** Using Oracle VirtualBox (Type 2), you can run Linux safely inside a window on your Windows laptop. It’s the best way to learn new software without any risk to your own computer.

### Further Reading

*   **The Guest:** *[[virtualization|Virtual Machines (VMs)]]* (The apartments the Hypervisor manages).
*   **The Connection:** *[[host-guest-file-system|HGFS]]* (How to move files between the host and the VM).
*   **Comparison:** *[Hypervisor vs. Containers Explained](https://www.redhat.com/en/topics/containers/containers-vs-vms)* (Choosing the right virtual tool).
*   **Official:** *[VMware's Guide to Hypervisors](https://www.vmware.com/topics/glossary/content/hypervisor)* (A deep dive from the industry leaders).
