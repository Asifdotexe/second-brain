---
title: RFID (Radio Frequency Identification)
tags: Hardware, Wireless, Tracking
---

# RFID (Radio Frequency Identification)

The "Invisible Barcode"—a simple, clever technology that allows objects to "announce" who they are to a computer without needing to be scanned by a laser or seen by a human eye.

**RFID** is the older, tougher cousin of **[[nfc|NFC]]**. While a barcode requires a human to point a red laser at a specific spot, an RFID reader can "see" a tag through a box, a wall, or even from a hundred feet away. It is the backbone of modern shipping, logistics, and security.

Think of it like a **"Who am I?" Shout**:
*   **Barcode:** Is like a name tag on your shirt. Someone has to look at you to know who you are.
*   **RFID:** Is like you constantly shouting "I'M STEVE!" Every time you walk past a "Listener" (the reader), it writes down that Steve was there.

## The Two Types of "Shouters"

1.  **Passive Tags (The Battery-Free):** These are the most common. They have **no battery**. They are "dead" until a radio wave from a reader hits them. They "absorb" the energy from that radio wave, use it to power up for a split second, shout their ID number, and go back to sleep. They are cheap (often 5 cents) and are found in clothing tags and library books.
2.  **Active Tags (The Battery-Powered):** These have their own battery. They are much louder and can be "heard" from hundreds of feet away. These are used for things like **E-ZPass** toll booth transponders or tracking expensive shipping containers across a shipyard.

## FAQs

*1. Can I be tracked by RFID?*
Technically, yes. Some passports, credit cards, and even clothing items have RFID tags inside. This is why "Faraday Wallets" (metal-lined wallets) are popular—the metal acts as a "Shield" that prevents the radio waves from reaching the tag, keeping it "Silent."

*2. Is it the same as a QR code?*
No. A QR code is a visual image. If it gets dirty or covered in mud, it breaks. An RFID tag is inside the object; it can be covered in mud, hidden inside a box, or buried in a pallet, and it will still work perfectly.

### Further Reading

*   **The Secure Version:** *[[nfc|NFC Overview]]* (The short-range, "secure" version of RFID).
*   **The Hacker Tool:** *[[flipper-zero|Flipper Zero]]* (How to read and clone these tags).
*   **Guide:** *[How RFID Works (HowStuffWorks)](https://electronics.howstuffworks.com/gadgets/high-tech-gadgets/rfid.htm)* (A great illustrated breakdown).
*   **Video:** *[RFID in the Warehouse](https://www.youtube.com/watch?v=0hW64R1P14g)* (Seeing how thousands of items are scanned instantly).
