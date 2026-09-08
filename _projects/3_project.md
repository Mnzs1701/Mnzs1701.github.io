---
layout: page
title: GPS Denied Navigation
description: A full stack autonomous navigation stack for environments without GPS.
importance: 3
category: robotics
---

A full stack autonomous navigation algorithm for GPS denied environments, developed at the
Artificial Intelligence and Robotics Lab at IISc, Bangalore, and demonstrated on an actual vehicle.

Localization works by registering a LiDAR map against the real world using a particle filter built
on the PCL library, removing the dependence on GPS. On top of that sit local and global planners
that produce real time obstacle avoidance and road alignment.

The stack was part of the autonomous driving work presented at CES 2024.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://youtu.be/S9IHIZG8YQU?list=PLPl8iycu9xeS6BWIGt6JtPrvTUPkZhOr6">Demo</a>
  </div>
</div>
