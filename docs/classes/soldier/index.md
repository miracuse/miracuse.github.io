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

- **<span style="color: {{ site.soldier_color }}">Strength</span>**: Soldiers are strong and resilient. They use this Skill when attacking with most weapons or defending against Physical attacks. This Skill also gives them more Physical [Health](../../gameplay/health.md) than other classes.

- **<span style="color: {{ site.soldier_color }}">Bravery</span>**: Soldiers don't flinch in the face of danger. They use this Skill when defending against Mental attacks. It also determines how many Fortune Points they have, and can be used to provoke, intimidate, or impress others.

### Techniques

{% include single_soldier_kit.html %}

Kits with the _Technique_ tag add additional effects to attacks.

- _Cleave_ allows attacks to hit multiple enemies and objects in an area of effect.
- _Smite_ moves targets on impact, knocking them over or staggering them with force.
- _Wind Strike_ extends the range of attacks by creating blades or gusts of wind around weapons.

### Fortune

Soldiers have a number of Fortune Points equal to two times their **<span style="color: {{ site.soldier_color }}">Bravery</span>**. Fortune Points can be used to:

- **Reroll** any roll the Soldier makes.

- **Escape Harm** by negating or greatly reducing damage you would otherwise take.

- Use _Spirit_ Kits with **<span style="color: {{ site.soldier_color }}">Strength</span>** or **<span style="color: {{ site.soldier_color }}">Bravery</span>** instead of **<span style="color: {{ site.mage_color }}">Magic</span>**.

- **Empower** Kits with the _Technique_ tag.

{% include fortune_uses.html %}

### Empower Techniques

Soldiers can perform dazzling feats of superhuman skill by amplifying or combining _Technique_ Kits. Doing so costs a Fortune Point.

| Technique          | Description                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Cleave (Amplified) | Make an attack that effects a large area, hitting many enemies and objects.                             |
| Cleave + Sunder    | Make an area-of-effect attack that deals additional Physical damage while destroying armor and weapons. |
| Cleave + Smite     | Make an area-of-effect attack that sends enemies flying.                                                |

Additional information about Techniques can be found on [this page](../../more_resources/techniques/index.md).
