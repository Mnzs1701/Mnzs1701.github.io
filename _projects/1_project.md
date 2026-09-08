---
layout: page
title: RoboHacks, Y Combinator
description: Winner of the overall prize and the Scale AI data track. Cross-robot spatial memory.
importance: 1
category: competitions
---

Built at RoboHacks, the robotics hackathon hosted at Y Combinator, where the project won both the
**Overall Prize** and the **Scale AI Data Track** ($2,500 and two Innate robots).

The idea: a robot should not have to explore a room to know what is in it. We take an iPhone video
walkthrough with spoken narration and turn it into a shared 3D map that any robot can use for pick
and place tasks, so spatial memory transfers between robots instead of being rebuilt from scratch.

The pipeline combines NVIDIA Parakeet ASR for the narration, 3D reconstruction and ICP registration
for the map, a Gemma 3 VLM for grounding language to objects in the scene, and an action chunking
policy to execute the resulting tasks.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://youtu.be/tvfdS_9N-v4">Demo video: Zero-Shot Cross-Domain Spatial Memory for MARS</a>
  </div>
</div>
