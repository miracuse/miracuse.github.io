---
layout: default
title: Soldier
parent: Classes
has_children: true
has_toc: false
nav_order: 2
---

# The Soldier

The Soldier is a warrior without peer. They may be knights, bandits, infantrymen, or come from other walks of life. What makes one a Soldier is not their profession but their skill at arms, courage, and a surprising amount of luck.

-   **<span style="color: {{ site.soldier_color }}">Strength</span>**: Soldiers are strong and resilient. They use this Skill when attacking with most weapons or defending against Physical attacks. This Skill also determines how much Physical health they have.

-   **<span style="color: {{ site.soldier_color }}">Bravery</span>**: Soldiers don't flinch in the face of danger. They use this Skill when defending against Mental attacks. It also determines how many Fortune Points they have, and can be used to provoke, intimidate, or impress others.

### Fortune

Soldiers have a number of Fortune Points equal to two times their **<span style="color: {{ site.soldier_color }}">Bravery</span>**. Fortune Points can be used to:

-   **Reroll** any action the Soldier takes.

-   **Amplify** Kits with the "Technique" tag.

-   **Combine** Kits with the "Technique" tag.

{% include fortune_uses.html %}

### Techniques

{% include single_solider_kit.html %}

Techniques are Kits that modify attacks. They add additional effects, such as increasing damage, hitting multiple enemies, or targeting multiple enemies at once. For example, the _Cleave_ Kit might be used to:

-   Swing an axe through a horde of goblins.
-   Shoot a volley of arrows at a cluster of bandits.
-   Throw a javelin that destroys cover and strikes the assassin hiding behind it.
-   Ricochet a thrown shield off of one enemy and into another.

In addition to their passive effect, Techniques can also be amplified
or mixed together by expending Fortune Points.

-   **Cleave (Amplified)**: Make an attack against every enemy in the room.
-   **Cleave + Sunder**: Make an area-of-effect attack that deals additional Physical damage while destroying armor and weapons.
-   **Cleave + Smite**: Make an area-of-effect attack that sends enemies flying.
-   **Cleave + Spellbreak**: Obliterate a horde of zombies by cutting through the magic that animates them.

Additional information about Techniques can be found on [this page](../../more_resources/techniques/index.md).
