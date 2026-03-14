---
title: Host-Guest File System (HGFS)
tags: Virtualization, VMware, Storage
---

# Host-Guest File System (HGFS)

The "Secret Tunnel"—a specialized connection that allows a **[[virtualization|Virtual Machine]]** to reach out and "see" folders on your actual computer as if they were part of its own hard drive.

When you use **[[virtualization|Virtualization]]** software like VMware, the Virtual Machine (The **Guest**) is usually trapped in its own digital bubble. It cannot see your "Documents" folder or your "Photos." **HGFS** is a protocol that "drills a hole" through the wall of that bubble, allowing files to flow back and forth safely and instantly.

Think of it like a **Serving Window in a Kitchen**:
*   The **Host (Your PC):** Is the **Pantry**. It has all the food and ingredients (your files).
*   The **Guest (The VM):** Is the **Dining Room**. Usually, the door is locked for security.
*   **HGFS:** Is the **Serving Window**. The Chef (the Host) can slide a plate of data through the window directly to the Guest, without anyone having to walk through the main door.

## How it Works in Practice
1.  **On the Host (The Real PC):** You go into settings and click "Share this folder." You are essentially giving the **[[hypervisor|Hypervisor]]** permission to let the VM see that data.
2.  **Inside the Guest (The VM):** Because you have **VMware Tools** installed, the VM sees a new "Network Drive" or a folder (on Linux, it’s usually in `/mnt/hgfs/`). 
3.  **The Magic:** When you save a file into that folder inside the VM, it is **instantly** saved onto your actual physical hard drive. No USB sticks or emailing files to yourself required!

## FAQs

*1. Is it safe to use?*
**Usually, yes.** But remember: the reason Virtual Machines are safe is that they are "Isolated." If you use HGFS to share your entire `C:\` drive with a VM, and that VM gets a virus, the virus can use that "Secret Tunnel" to infect your real computer. **Rule of thumb:** Only share the specific folder you need.

*2. Do I need internet for HGFS?*
**No.** HGFS is purely internal. It happens inside your computer’s memory and doesn't use your Wi-Fi or local network at all. That’s why it is so much faster than other ways of sharing files.

### Further Reading

*   **The Landlord:** *[[hypervisor|Hypervisors]]* (The software that creates the VM bubble).
*   **The Blueprint:** *[[vmx|The .vmx File]]* (Where the HGFS settings are stored).
*   **Technical:** *[Official VMware Tools Documentation](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/tools/12-4-0/vmware-tools-administration-12-4-0/introduction-to-vmware-tools/vmware-tools-device-drivers.html)* (The deep architecture of file redirection).