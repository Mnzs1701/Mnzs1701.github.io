---
layout: page
title: 2D LiDAR Only SLAM
description: A CUDA accelerated 2D LiDAR SLAM algorithm running in real time on ROS1.
importance: 4
category: robotics
---

A 2D SLAM algorithm that uses nothing but a planar LiDAR, written in C++ for ROS1 and accelerated
with CUDA so it runs in real time.

The frontend estimates motion using a Fourier Mellin Transform, which recovers rotation and
translation between scans in the frequency domain. The backend closes loops and optimizes the pose
graph using SE-Sync, a certifiably correct graphSLAM solver.
