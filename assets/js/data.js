export default function get_data() {
  var data = [
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Agua Regia",
      Tags: "Alchemy",
      Description:
        "A dangerously potent acid that eats through metals with ease. Can be used to break locks, sabotage equipment, and create clouds of poisonous gas. When you Produce a Grenade, you can create a canister of poisonous gas instead.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Lunar Silver",
      Tags: "Alchemy",
      Description:
        "Crystallized holy water, a substance that leeches away magic on contact. Can be used to deaden a person to magic for a short time, rendering them immune and incapable of casting spells. When you Produce a Grenade, magic in the area of effect is torn apart. You have Advantage when defending against magic in any form while this kit is equipped.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Midnight Oil",
      Tags: "Alchemy",
      Description:
        "A dark oil that absorbs sound and light, muting its surroundings. When burned it produces an invisible flame that gives off heat but not light, and an odorless gas that lulls others to sleep. When you Produce a Grenade, you can create a canister of sleeping gas instead, which deals Mental damage rather than Physical.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Pocket Wall",
      Tags: "Alchemy",
      Description:
        "A rapidly expanding cement-like substance. Can be used to create shelter, mend cracks, seal doors, or adhere objects to one another. You have Advantage when creating or repairing objects with this substance. When you Produce a Potion, it heals an additional Physical box.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Pyre Powder",
      Tags: "Alchemy",
      Description:
        "A crackling dust that serves as the ideal catalyst. When you use Produce a Potion or Produce a Grenade, you produce two items instead of one. You are still limited to using one item per action in combat.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Winterbloom Extract",
      Tags: "Alchemy",
      Description:
        "Highly-concentrated extract from the Winterbloom flower. A droplet can freeze fifty gallons of water into hard ice, create a billowing cloud of fog, or plummet the temperature of anything it comes into contact with. When you Produce a Grenade, you can create a flash freeze grenade instead.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Dancing Shadow",
      Tags: "Alchemy",
      Description:
        "You have a servant made of shadow, granting you a limited form of telekinesis. The servant exists within your shadow, but can move independently and interact with the physical world. The shadow is able to retrieve lightweight objects and jostle objects, but cannot fight.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Familiar",
      Tags: "Alchemy",
      Description:
        "You have a servant that takes the form of a small animal, such as a crow or cat. You are able to borrow its senses, temporarily gaining a bird\u2019s eye view or a dog\u2019s sense of smell for example. The form of the familiar is chosen when the kit is equipped, and may be changed by expending a Charge Point.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Featherweave",
      Tags: "Alchemy, Reaction",
      Description:
        "You have a servant made from enchanted cloth, capable of resisting gravity to a limited degree. You glide gently to the ground while wearing this kit. When folded into a bag, you can carry heavy objects with ease. When unrolled it becomes a flying carpet, able to carry you through the air across short distances.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Golem",
      Tags: "Alchemy",
      Description:
        "You have a servant made from clay, capable of fighting and lifting heavy objects. Equipping this Kit provides one golem. You can expend a Charge Point to create additional golems.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Quicksilver",
      Tags: "Weapon, Alchemy, Reaction",
      Description:
        "You have a servant made from liquid metal, capable of shaping itself into weapons, tools, and objects. Using this weapon allows you to use Perception when attacking in melee. You can expend a Charge Point to deflect an attack.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Shikigami",
      Tags: "Alchemy",
      Description:
        "You have a servant made from enchanted paper, capable of flying, spying, and carrying messages.  Equipping this kit provides one shikigami. You can expend a Charge Point to create additional servants.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Electromagnetic Charges",
      Tags: "Alchemy",
      Description:
        "Electrically charged bullets that shock (dealing Mental damage) or magnetize targets instead of dealing Physical damage. When used with Produce a Grenade inflicts one of the two effects in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Friction Charges",
      Tags: "Alchemy",
      Description:
        "Capsule bullets filled with liquid that produces quick-drying adhesive or slippery grease instead of dealing Physical damage. When used with Produce a Grenade this kit inflicts one of the two effects in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Iron-Sighted Rifle",
      Tags: "Weapon",
      Description:
        "A long-barreled gun used for precision shooting. Using this weapon allows your ranged attacks to harm specific targets (like eyes or hands), in addition to any Physical damage dealt. You have Advantage when making ranged attacks without any distractions.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Phosphos Charges",
      Tags: "Alchemy",
      Description:
        "Volatile bullets that ignite (dealing Physical damage) or produce blinding flashes of light on impact. When used with Produce a Grenade this kit inflicts one of the two effects in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Sonic Charges",
      Tags: "Alchemy",
      Description:
        "Explosive bullets that create powerful shockwaves to knock enemies over or deliver deafening sonic booms, instead of dealing Physical damage. When used with Produce a Grenade inflicts one of the two effects in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Trenchcoat Boomstick",
      Tags: "Weapon",
      Description:
        "A short-barreled gun used for clearing rooms. Using this weapon allows your ranged attacks to cause harm in a cone area-of-effect immediately in front of you.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Abjuration",
      Tags: "Talisman, Reaction",
      Description:
        "A wand or other object that can be used to repel and dispel. Can be used to create barriers, destroy magic, and turn away otherworldly influences. You can expend a Mana Point to deflect an attack aimed at you.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Divination",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to petition otherworldly forces for information. Can be used to divine the location of people, places, and things through magical means.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Dreaming",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to meddle with the boundary between conscious and unconscious. Can be used to induce sleep, daze enemies, and put others into a trance. You have Advantage when using Presence to hypnotize the weak-willed.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Language",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to speak and undestand all creatures. Can be used to communicate with animals, use charm magic, and compel others to your will. You have Advantage when using Presence to awe others.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Necromancy",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to meddle with the boundary between life and death. Can be used to puppet corpses to do your bidding, summon ghosts, and stave off death.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Restoration",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to restore what is broken. Can be used to heal Physical damage, repair broken objects, and treat natural afflictions. The number of Physical boxes healed is equal to the result of the roll.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Talisman of Aether",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate electricity. Can be used to shoot lightning from your hands, induce pain without damage, and shock enemies that harm you.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Talisman of Air",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate air. Can be used to create ferocious whirlwinds, fall gently from great heights, and rebuff projectiles.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Talisman of Earth",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate earth. Can be used to throw jagged spikes from the ground, reshape stone, and send tremors through the earth.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Talisman of Flame",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate fire. Can be used to throw flames, create floating torches, and control raging fires.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Talisman of Metal",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate metal. Can be used to magnetize metallic objects, binding them together or pushing them apart.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Talisman of Water",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate water. Can be used to create spears of ice, conjure fog, and purify liquids.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Entropy",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate the rate of decay. Can be used to accelerate or slow rotting, rusting, and other decomposition processes.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Force",
      Tags: "Talisman, Reaction",
      Description:
        "A wand or other object that can be used to perform limited telekinesis. Can be used to levitate nearby objects and launch them through the air. You can expend a Mana Point to deflect an attack aimed at you.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Gravity",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate gravity. Can be used to add or reduce weight for a short time.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Locomotion",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate kinetic energy. Can be used to add or reduce the speed of a moving object.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Siphoning",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to sap energy. Can be used to steal away lifeforce and pull it into oneself, or tap into the magic energy of enchanted objects.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Thermos",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate thermal energy. Can be used to add or reduce heat.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Barbed Thorns",
      Tags: "Weapon",
      Description:
        "A set of poisoned barbed arrows and needles that hamper an enemy\u2019s movement. Using this weapon greatly reduces a target\u2019s mobility, in addition to any Physical damage dealt. You have Advantage when sprinting, as might be the case when chasing after someone or retreating from danger.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Golden Silk",
      Tags: "Alchemy",
      Description:
        "A potent hallucinogenic dust. Can be used to induce confusion, to numb pain, to put a target into a stupor, to render someone highly suggestable, or to inflict Mental damage.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Manifold Venom",
      Tags: "Alchemy",
      Description:
        "A collection of dangerous poisons. Can be applied to the user\u2019s weapons to induce paralysis, sap strength, cause blindness, or inflict additional Physical damage. Requires an action if applied in combat.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Nerve Thorns",
      Tags: "Weapon",
      Description:
        "A set of needles laced with nerve poison. Using this technique can incapacitate targets without lasting harm or visible injury, in addition to any Physical damage dealt. You have Advantage when sensing the motivations of others and detecting lies.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Talisman of Darkness",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate darkness. Can be used to obscure appearances, darken areas, and blind enemies.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Traceless Thorns",
      Tags: "Weapon",
      Description:
        "A set of transparent glass arrows and needles that make it difficult to trace the trajectory of attacks. Using this weapon reduces the likelihood that you\u2019ll be exposed after making a sneak attack.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Charmed Chain",
      Tags: "Weapon",
      Description:
        "A length of enchanted chain that can become rigid or loose on command. Using this weapon allows your attacks to grapple enemies with ease, in addition to any damage dealt. You have Advantage when climbing.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Dervish Knives",
      Tags: "Weapon",
      Description:
        "A set of throwing knives that can be flicked through the air with ease. Using this weapon allows you to move before and after making an attack, darting outside of melee range or throwing blades while running. You have Advantage when performing acrobatics.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Faerie Fire",
      Tags: "Alchemy",
      Description:
        "A volatile powder used in fireworks. Can create plumes of smoke, bright lights, flames, loud noises, or induce violent coughing. When you Disappear from Sight, you can create a cloud of smoke that blocks line of sight.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Holy Water",
      Tags: "Alchemy, Reaction",
      Description:
        "A specially treated water that negates magic. Can be used to counter spells, disperse spirits, damage magical objects, or repel monsters. You can expend a Prep Point to negate hostile magic as a reaction.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Talisman of Light",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate light. Can be used to create ghostly illusions, see afar, and blind enemies.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Talisman of Sound",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate sound. Can be used to project noises, eavesdrop from afar, and shatter eardrums.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Beast\u2019s Balm",
      Tags: "Alchemy",
      Description:
        "A mixture that bewitches animals. You can communicate with and befriend beasts. You can use I Know a Guy to recruit a local beast to aid you. The beast can track, fight, and is capable of anything that a creature of its kind might otherwise do. Can also be used to attract beasts and monsters.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Monster Hunter\u2019s Salve",
      Tags: "Alchemy",
      Description:
        "A thick medicinal paste that can neutralize most poisons, diseases, and noxious odors. Allows the user to pierce through illusions when worn over the eyes, ears, and nose.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Silent Arrows",
      Tags: "Weapon",
      Description:
        "A set of arrows that seem to absorb sound. Using this weapon ensures that an enemy won\u2019t cause a commotion for a brief period of time, in addition to any Physical damage dealt. You have Advantage when determining who acts first, such as when determining combat turn order.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Talisman of Wood",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate plants. Can be used to accelerate plant growth, speed up natural healing, and command flora.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Twin Edges",
      Tags: "Weapon, Reaction",
      Description:
        "A pair of swords used together to create a whirlwind of slashes. Using this weapon gives your attacks an area of effect around your body, damaging enemies nearby. On a successful defense against a melee attack, you inflict a box of Physical damage to the attacker.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Twinned Arrows",
      Tags: "Weapon",
      Description:
        "A set of arrows that split apart in mid-flight. Using this weapon gives your attack an additional target, with both hits landing within moments of one another. The additional target cannot be the same as the original target.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Blinding Silver",
      Tags: "Weapon",
      Description:
        "A sleek sword with an alchemical mirror finish that blinds enemies with reflected light. Using this weapon gives Advantage to the next attack made on the target, either by you or by one of your allies, in addition to any Physical damage dealt.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Flametongue",
      Tags: "Weapon",
      Description:
        "An enchanted iron sword that glows with heat, as though it was just taken out of a forge. Using this weapon ignites flammable surfaces on contact. Successful attacks also deal an additional box of Physical damage.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Harmonic Steel",
      Tags: "Weapon",
      Description:
        "A vibrating length of metal that resonates like a tuning fork when struck. Using this weapon bypasses the effects of armor and shields by sending shockwaves through strikes. Can be used to cause tremors in the ground and shatter glass at range.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Mournblade",
      Tags: "Weapon, Resource",
      Description:
        "A cursed sword that feeds off the living. Using this weapon restores a Fortune Point whenever it\u2019s used to incapacitate an enemy. At any time when you would otherwise spend a Fortune Point, you can spend a Physical box instead.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Shaping Oil",
      Tags: "Alchemy",
      Description:
        "An ointment that temporarily softens metal and stone when rubbed in. Can be used to sharpen objects into blades, repair damaged tools, and bend steel bars.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Windcutter",
      Tags: "Weapon, Reaction",
      Description:
        "A curved scimitar that catches the wind and turns it into sharp blades. Using this weapon greatly extends the range of your attacks. You have Advantage when defending against projectile attacks like arrows and bullets.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Arrows of Light",
      Tags: "Weapon",
      Description:
        "A set of silver-tipped arrows that glow brightly in the dark. Using this weapon allows your ranged attacks to ignore magical defenses and prevents targets from healing by magic or alchemy.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Blessed Sword",
      Tags: "Weapon",
      Description:
        "A blade quenched in holy water, used to break curses and strike down otherworldly forces. Using this weapon allows your attacks to interfere with magic, in addition to any Physical damage dealt. You have Advantage when inspiring or rallying others.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Hospitaler Salts",
      Tags: "Alchemy",
      Description:
        "Smelling salts that wake the unconscious. Can be used to revive an incapacitated ally and allow them to briefly ignore the effects of their injuries. Revived allies clear one box of damage, Physical or Mental, depending on which is necessary. Requires physical contact.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Impact Mace",
      Tags: "Weapon",
      Description:
        "An enchanted warmace that stores kinetic energy. Using this weapon allows your attacks to forcibly reposition enemies, knocking them back or into the air, in addition to any Physical damage dealt. You have Advantage against any effect that attempts to forcibly move you or impede your movement.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Ironheart Shield",
      Tags: "Weapon, Reaction",
      Description:
        "A magnetically-charged shield, capable of attracting arrows and blades. Using this weapon allows your attacks to trap metal objects and armored enemies, in addition to any Physical damage dealt. When a nearby ally would otherwise take damage, you can take damage in their place, so long as you are able to provide a narrative justification for how you do so.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Mythril Spear",
      Tags: "Weapon",
      Description:
        "A featherweight spear with a chain attached to its base, allowing it to be thrown or spun. Using this weapon compels an enemy to focus their attentions on you after a successful attack, in addition to any Physical damage dealt.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Breaker Axe",
      Tags: "Weapon",
      Description:
        "An alchemically-enhanced axe that\u2019s just as effective on doors and walls as enemies. Using this weapon allows your attacks to cut through materials like stone and metal. Successful attacks also deal an additional box of Physical damage. You have Advantage when using this weapon to destroy objects.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Compliant Rod",
      Tags: "Weapon",
      Description:
        "A metal staff that can shrink to fit in a pocket or grow to ten feet in length. Using this weapon allows your attacks to inflict damage in an area around your main target.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Ogre Draught",
      Tags: "Alchemy",
      Description:
        "A dangerous drug that requires training to withstand. While this kit is equipped you are immune to poisons, diseases, and curses. You have Advantage against hazards like sweltering heat, bitter cold, or traps.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Shocklance",
      Tags: "Weapon",
      Description:
        "A spear whose tip crackles with electricity, causing intense pain on contact. Using this weapon inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when intimidating others.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Thunderclap Javelins",
      Tags: "Weapon",
      Description:
        "A set of javelins that release sonic booms when they land. Using this weapon shatters the eardrums of enemies, deafening and disorienting in an area around your main target.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Wicked Blade",
      Tags: "Weapon, Reaction",
      Description:
        "An implausably sharp shortsword that excels in quick, piercing strikes. Using this weapon adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage. Enemies that attempt to leave your melee range take one box of Physical damage.",
    },
  ];

  return data;
}
