---
layout: default
title: Statistics
parent: System Design
grand_parent: More
nav_order: 4
---

# Statistics

### Player Character Competency

One of the design principles of this system is that Player Characters are competent. Most of the time, when they do something they're supposed to be good at, they'll do it well. This is built into the `Roll + Skill Level` system.

{% include dice_table.html %}

Put another way:

- You have a 10% chance of rolling a +2
- You have a 20% chance of rolling a +1
- You have a 40% chance of rolling a +0
- You have a 20% chance of rolling a -1
- You have a 10% chance of rolling a -2

That means that a character has a **70% chance of getting their Skill Level or higher**.

A Soldier with a +2 to Strength will, usually, do well on Strength rolls. Likewise, the absolute worst they can do is a +0.

### Critical Failures

An intentional consequence of **Player Character Competency** is that "critical failures" are rare. Two things generally need to be true for a bad outcome:

1. The Player is using a Skill they don't have (+0).
2. The Player rolls a -1 or a -2 (30% chance).
