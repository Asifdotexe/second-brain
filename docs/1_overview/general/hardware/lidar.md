---
title: LiDAR (Light Detection and Ranging)
tags: Hardware, Sensors, Robotics
---

# LiDAR

The "Laser Bat"—a sophisticated sensor that allows machines to "see" the world in 3D by shooting out millions of invisible laser beams every second and measuring the "echo" as they bounce off objects.

**LiDAR** (Light Detection and Ranging) is the 3D vision system for the modern world. While a normal camera takes a 2D picture (flat), LiDAR builds a **Point Cloud**—a digital map that knows exactly how many centimeters away every single leaf, person, and wall is.

Think of it like **A Bat using Flashlights instead of Sound**:
*   **Sonar (Bats/Submarines):** Screams out a sound and waits for the echo. It’s slow and not very detailed.
*   **LiDAR:** Screams out a **Laser Beam**. Light travels at 300,000 kilometers per second. By measuring the time it takes for that "flash" to return, the machine can calculate distance with sub-millimeter precision.

## The 3 Worlds of LiDAR

1.  **Self-Driving Cars:** That spinning bucket you see on top of a Waymo or Cruise car is a LiDAR sensor. It creates a 360-degree safety bubble around the car, telling the computer exactly where the "Curbs," "Children," and "Parked Cars" are, even in total darkness.
2.  **The iPhone Pro:** Ever wonder why your iPhone Pro takes better photos at night or can "scan" a room to see if a new couch fits? That’s the tiny LiDAR scanner next to the camera lenses. It helps the camera focus instantly in the dark.
3.  **Archaeology (The Jungle X-Ray):** LiDAR is revolutionizing history. Archaeologists fly LiDAR drones over thick jungles. The lasers can "see through" the leaves and bounce off the ground, revealing entire lost Mayan cities and pyramids that have been hidden for 1,000 years.

## FAQs

*1. Can the lasers hurt my eyes?*
**No.** Commercial LiDAR (like in your phone or car) uses "Class 1" lasers. They are completely invisible to the human eye and are at such a low power that they are 100% safe, even if you stare directly at the sensor.

*2. Why don't all cars use LiDAR?*
Because it’s expensive. A high-end LiDAR sensor for a self-driving car can cost $10,000 or more. This is why companies like **Tesla** try to use only cameras (**[[computer-vision|Computer Vision]]**) instead—it’s much cheaper, but much harder to get perfectly right.

### Further Reading

*   **The Rival:** *[[computer-vision|Computer Vision]]* (Seeing with eyes vs. seeing with lasers).
*   **The Platform:** *[[drone-technology|Drones]]* (How LiDAR is mapped from the sky).
*   **Video:** *[Visualizing LiDAR Data (Velodyne)](https://www.youtube.com/watch?v=EYbhNSUnIdU)* (Seeing what a self-driving car actually "sees").
*   **Article:** *[How LiDAR Discovered a Lost City](https://www.nationalgeographic.com/history/article/maya-laser-scan-lidar-guatemala-belize)* (The incredible story of jungle archaeology).
