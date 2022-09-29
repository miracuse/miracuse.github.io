---
layout: default
title: Gameplay Mechanics
parent: Playtest Notes
grand_parent: System Design
has_children: false
nav_order: 2
---

# Gameplay Mechanics

### Automatic Character Sheets

> Observation

Swift character creation was a stated goal of the system, and seems to have been successful. The automatic character creation solutions appeal to the Players more than the system documentation. They're skilled in intuiting gameplay mechanisms based on how the character sheets are structured.

> Takeaways

_Give yourself a pat on the back._

> Treatments

-   (Dropped) Use a Google Sheets doc as an early prototype. The built-in collaborative nature was surprisingly useful, allowing Players and GMs to see all the information at a glance. However, the limitations of spreadsheet software prevented full automation. Dropdowns couldn't cascade changes across several fields (i.e. changing class should also change equipped kits).

-   (In Use) Hacked together a vanilla JS web application and dropped it into a Jekyll website. Surprisingly effective, but difficult to maintain.

-   (Planned) Build a React JS app for easier maintainability.

---

### Dice Rolling

> Observation

Based on my completely subjective observations, the 1d10 system has been relatively successful in ensuring that Player Character ability is weighted more heavily than luck. The Fortune Point mechanic also demonstrated a good synergy with that design ideal. Rerolls have helped Soldiers to feel [especially proficient](classes.md#mages-are-fun). One notable shortcoming is that everyone at the table (myself included) keeps forgetting the mapping of dice faces to roll results.

> Takeaways

_Put a reference table of dice rolls to results somewhere obvious._

> Treatments

-   (Planned) Add a dice roll table to the character sheet.

---

### Kit System

> Observation

Kits are one of the major components of this game system. They're my attempt to create an enjoyable customization mechanic, similar to "choosing spells for the day" or "choosing equipment" from D&D. They're also intended to restrict complexity with a hard limit on the number of Kits that can be equipped at one time.

They seem successful in restricting analysis paralysis during gameplay. But, the current implementation does cause about a ~10 min. real world downtime whenever Players make camp.

> Takeaway

_Kits are working during gameplay, but slowing down pacing during rests._

> Treatment

-   (Planned) Restrict Kit access by subclass, so that Players only have access to 6 Kits at low levels instead of the full 18.

-   (Planned) Build a level-up system based on gaining new subclasses, so that Players gradually ease into larger selections of Kits.

-   (Done) Drop the previous multiclass system that would be incompatible with the level-up approach.

---

### Character Customization: Multiclassing

> Observation

A considerable appeal to RPG's is the character customization component. This might fall along a mechanical axis (abilities, stats, etc.) or a thematic axis (character background, appearance, style). I would like to ensure that Players are able to explore character ideas both within and without the four base classes.

Multiclassing has been popularly received in the early playtests. Recent changes to the system have necessitated a different approach, which is unfortunate given the success of the current approach.

> Takeaway

_Multiclassing is good, try to keep it fun in the next iteration too._

> Treatment

-   (Testing) Replace the "Hybrid Class" setup with a "Custom Class" setup.

-   (Planned) Implement multiclassing as part of "Advancement".
