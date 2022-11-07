---
layout: default
title: Alchemist
parent: Classes
has_children: true
has_toc: false
nav_order: 1
---

# Alchemist

The Alchemist is a keen adventurer, keeping a watchful eye out for danger and a finger on the trigger. They carry a collection of handy items to throw at any problem that arises.

- **<span style="color: {{ site.alchemist_color }}">Perception</span>**: Alchemists are good at detecting danger, finding clues, and searching for hidden treasure. They also use this skill to make precise attacks with ranged weapons.

- **<span style="color: {{ site.alchemist_color }}">Knowledge</span>**: Alchemists are familiar with many different fields that might be useful to an adventurer, such as monster biology or regional politics. This Skill also determines how many uses of their Kits they have, and their ability to persuade others using rhetoric.

### Charges

Alchemists have a number of Charge Points equal to two times their **<span style="color: {{ site.alchemist_color }}">Knowledge</span>**. Charge Points can be used to:

- **Produce a Potion** that can restore Physical boxes, treat poisons, or heal similar afflictions.

- **Produce a Grenade** that can deal Physical damage in an area-of-effect and destroy objects.

- Declare that you have "**What You Needed**", describing an item that can help you with the problem at hand, such as a bribe or a tool.

- Use _Spirit_ Kits with **<span style="color: {{ site.alchemist_color }}">Perception</span>** or **<span style="color: {{ site.alchemist_color }}">Knowledge</span>** instead of **<span style="color: {{ site.mage_color }}">Magic</span>**.

- **Empower** Kits with the _Alchemy_ tag.

{% include alchemy_uses.html %}

### Potions

Alchemists don't need to worry about handing out potions to other Players in the middle of combat. So long as it makes sense, they can declare that they handed out a potion earlier in the day. When consumed in combat, drinking a potion takes a turn.

> **Note:** Potions are the only Alchemy items that other classes can safely use. Non-Alchemist Players can roll Knowledge to try to use others, though failure can cause disastrous results.

Additional information about Alchemy can be found on [this page](../../more_resources/alchemy/index.md). Information about Healing can be found on [this page](../../more_resources/healing.md).
