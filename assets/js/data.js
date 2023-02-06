export default function get_data() {
  var data = [
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Golden Silk",
      Tags: "Alchemy",
      Description:
        "A potent hallucinogenic dust. Can be used to induce confusion, put a target into a stupor, render someone highly suggestable, or inflict Mental damage.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Manifold Venom",
      Tags: "Alchemy",
      Description:
        "A collection of dangerous liquid venoms. Can be applied to the user\u2019s weapons to induce paralysis, sap strength, or cause blindness. Requires an action if applied in combat.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Nerve Thorns",
      Tags: "Weapon",
      Description:
        "A set of needles laced with nerve poison. Using this technique can incapacitate targets without lasting harm or visible injury, in addition to any Physical damage dealt.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Slowing Thorns",
      Tags: "Weapon",
      Description:
        "A set of needles tipped with slowing poison. Using this weapon greatly reduces a target\u2019s mobility, in addition to any Physical damage dealt.",
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
        "A set of transparent needles that make it difficult to trace the origin of attacks. Using this weapon reduces the likelihood that you\u2019ll be exposed after making a sneak attack.",
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
      Kit: "Vorpal Blade",
      Tags: "Weapon",
      Description:
        "An impossibly sharp sword made of liquid metal. Using this weapon allows your attacks to cleanly slice through most objects. Successful attacks also deal an additional box of damage.",
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
        "A rapidly expanding cement-like substance. Can be used to create shelter, mend cracks, seal doors, or adhere objects to one another. You have Advantage when creating or repairing objects with this substance.",
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
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Brimstone Powder",
      Tags: "Alchemy",
      Description:
        "An otherworldly dust that conducts and magnifies magical energy. When added to fire it becomes hellfire, burning hotter and creating a noxious stench. When you use Produce a Grenade, the resulting explosion deals an additional point of damage.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Fey Venom",
      Tags: "Alchemy",
      Description:
        "A chemical that can stem the flow of blood or increase the rate of blood loss depending on how the substance is prepared. When you Produce a Potion, it heals an additional Physical box.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Solomon Rod",
      Tags: "Weapon",
      Description:
        "An metal rod that holds sway over otherworldly creatures. Wielding this weapon compels nearby magical creatures into obedience, providing Advantage on all rolls to influence them. Successful attacks against magical creatures deal one additional box of Mental damage.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Talisman of Demons",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to bring forth demonic influence. Can be used to summon imps, consult devils for knowledge, or fling hellfire. You have Advantage when using Knowledge to recall forbidden information.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Talisman of Fey",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to bring forth faerie influence. Can be used to summon pixies, bewitch the senses, and change your appearence. You have Advantage when using Presence to confuse and bewilder others.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Talisman of Jinn",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to bring forth jinn influence. Can be used to summon snakes, call forth hot desert wind, and see into the past of an object. You have Advantage when using Knowledge to recall history.",
    },
    {
      Class: "Advanced",
      Type: "Corsair",
      Kit: "Bloody Cutlass",
      Tags: "Weapon",
      Description:
        "A pirate\u2019s sword with a nasty red hue. Using this weapon causes it to leech blood on every strike, leaving few bloodstains. Successful attacks on enemies with blood deal an additional box of damage.",
    },
    {
      Class: "Advanced",
      Type: "Corsair",
      Kit: "Marauder Flintlock",
      Tags: "Weapon",
      Description:
        "A bewitched handgun whose bullets hammer through ships and sails. Using this weapon allows your ranged attacks to cause outsized damage to objects.",
    },
    {
      Class: "Advanced",
      Type: "Corsair",
      Kit: "Sticky Fingers",
      Tags: "Alchemy",
      Description:
        "A set of gloves covered in an odd adhesive. Allows the user to climb any surface with ease and snatch objects with a light touch. You have Advantage when stealing.",
    },
    {
      Class: "Advanced",
      Type: "Corsair",
      Kit: "Talisman of Sea",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to call on the spirits of the sea. Can be used to breathe underwater, commune with aquatic creatures, and change the flow of a current.",
    },
    {
      Class: "Advanced",
      Type: "Corsair",
      Kit: "Talisman of Sky",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to call on the spirits of the sky. Can be used to whip up strong breezes, find your way when lost, and commune with birds.",
    },
    {
      Class: "Advanced",
      Type: "Corsair",
      Kit: "Tar Rum",
      Tags: "Alchemy",
      Description:
        "A bottle of truly rancid alcohol. Can be used to numb pain, treat poison, and create flames. Makes for a good offering to spirits.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Dancing Shadow",
      Tags: "Alchemy",
      Description:
        "You have a servant made of shadow, granting you a limited form of telekinesis. The servant exists within your shadow, but can move independently and interact with the physical world. The shadow is able to retrieve and store lightweight objects within itself, but is lacking in strength.",
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
        "You have many servants made from enchanted paper, capable of flying, spying, and carrying messages.  Equipping this kit provides half a dozen shikigami. You can expend a Charge Point to create an additional six servants.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Piercing Bullets",
      Tags: "Alchemy",
      Description: "Steel-tipped bullets that punch through armor and cover.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Quickdraw Pistol",
      Tags: "Weapon, Reaction",
      Description:
        "A handgun specialized for near-instant withdraw. Using this weapon, your first attack in combat counts as a sneak attack. You cannot use grenades when using this weapon to attack. You have Advantage on rolls to determine who acts first, including turn order for combat.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Rubber Bullets",
      Tags: "Alchemy",
      Description:
        "Rubberized bullets that can be used for non-lethal attacks. Ricochet uncontrollably in closed spaces.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Silver Bullets",
      Tags: "Alchemy",
      Description: "Anti-magic bullets that can shatter spells.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Trenchsteel Charges",
      Tags: "Alchemy",
      Description:
        "Attacks that use this ammunition are physically loaded, exploding into a mass of ball bearings or coils of barbed wire in addition to any Physical damage dealt. When used with Produce a Grenade this kit inflicts Physical damage and one other effect in a wide area.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Twoshot Bullets",
      Tags: "Alchemy",
      Description:
        "Trick bullets that can fire twice, changing trajectory in midair. Can be used to fire around corners or other obstacles.",
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
      Class: "Advanced",
      Type: "Metallurgist",
      Kit: "Ring of Change",
      Tags: "Alchemy",
      Description:
        "A red ring with the power to convert metals into other metals. The greater the difference from the original, the more difficult the change. Requires physical contact. Can be completed instantaneously by expending a Charge Point.",
    },
    {
      Class: "Advanced",
      Type: "Metallurgist",
      Kit: "Ring of Decomposition",
      Tags: "Alchemy",
      Description:
        "A black ring with the power to destroy metal. Can be used to split apart metal neatly or violently. The more drastic the change, the more difficult and time consuming it is. Requires physical contact. Can be completed instantaneously by expending a Charge Point.",
    },
    {
      Class: "Advanced",
      Type: "Metallurgist",
      Kit: "Ring of Forge",
      Tags: "Alchemy",
      Description:
        "A white ring with the power to smelt metals. Can be used to heat metals, purge them of impurities, and strengthen or weaken them. Requires physical contact. Can be completed instantaneously by expending a Charge Point.",
    },
    {
      Class: "Advanced",
      Type: "Metallurgist",
      Kit: "Ring of Form",
      Tags: "Alchemy",
      Description:
        "A gold ring with the power to reshape metal. The more drastic the change, the more difficult and time consuming it is. Requires physical contact. Can be completed instantaneously by expending a Charge Point.",
    },
    {
      Class: "Advanced",
      Type: "Metallurgist",
      Kit: "Runehammer",
      Tags: "Weapon",
      Description:
        "A lengthy warhammer with power over metals. Using this weapon shatters metal objects and heavily damages enchanted items. If a Metallurgist ring kit is equipped, the Runehammer can transmit its effects on impact.",
    },
    {
      Class: "Advanced",
      Type: "Metallurgist",
      Kit: "Vitrolic Edge",
      Tags: "Weapon",
      Description:
        "A shortsword that sweats sulfuric acid. Using this weapon causes painful acid burns. Successful attacks deal an additional box of Physical damage.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Breaker Axe",
      Tags: "Weapon",
      Description:
        "An indestructable axe that\u2019s just as effective on doors and walls as enemies. Using this weapon allows your attacks to smash through materials like stone and metal. Successful attacks also deal an additional box of Physical damage. You have Advantage when using this weapon to destroy objects.",
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
        "A short spear whose tip crackles with electricity, causing intense pain on contact. Using this weapon inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when intimidating others.",
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
        "A sharp shortsword that seeks out targets. Using this weapon adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage. Enemies that attempt to leave your melee range take one box of Physical damage.",
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
      Kit: "Shepherd\u2019s Flute",
      Tags: "Alchemy",
      Description:
        "A ritually crafted flute that has power over simple-minded creatures. Playing the flute with care can calm wild animals and insects. Playing the flute recklessly can stir them into a frenzy, attacking anything nearby.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Talisman of Life",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to preserve life. Can be used to heal wounds, sense the presence of living things, and detect disturbances in the natural order.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Talisman of Wood",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate plants. Can be used to accelerate plant growth, command flora, and commune with the spirits of the land.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Twin Edges",
      Tags: "Weapon, Reaction",
      Description:
        "A pair of charmed swords that gravitate towards one another. Using this weapon gives your attacks an area of effect around your body, damaging enemies nearby. On a successful defense against a melee attack, you inflict a box of Physical damage to the attacker.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Whisper Bowstring",
      Tags: "Weapon",
      Description:
        "A bowstring made of siren\u2019s hair that enchants arrows to \u2018eat sound\u2019, creating small pockets of silence on impact. Using this weapon ensures that an enemy won\u2019t cause a commotion for a brief period of time, in addition to any Physical damage dealt.",
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
        "Volatile bullets that ignite targets (dealing Physical damage) or produce blinding flashes of light on impact. When used with Produce a Grenade this kit inflicts one of the two effects in a wide area.",
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
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Mythril Blade",
      Tags: "Weapon",
      Description:
        "A blade that conducts magic. Using this weapon allow you to use Talismans in conjunction with attacks, empowering strikes with effects related to the Talisman.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Mythril Chain",
      Tags: "Weapon",
      Description:
        "A length of chain that conducts magic. Using this weapon allows you to channel the power of a Talisman into the chain, conducting its energy onto anyone or anything wrapped with the chain.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Impact",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to amplify the force of individual motions your body makes. Can be used to leap high into the air, knock an enemy back with a strike, or kick a door off its hinges. May cause Physical damage to you if used excessively.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Moon",
      Tags: "Talisman, Reaction",
      Description:
        "A wand or other object that can be used to deflect harm away from your body. Can be used to parry projectiles, repel magic, or reflect spells back on their caster. You can spend a Mana Point to avoid harm from incoming attacks.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Stars",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to accelerate your body. Can be used to briefly move faster than normal, heal your wounds, or quicken your thoughts. May cause Physical damage to you if used excessively.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Sun",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to radiate heat and light from your body. Can be used to burn off restraints, blind enemies in melee range, or stave off cold. May cause Physical damage to you if used excessively.",
    },
    {
      Class: "Advanced",
      Type: "Templar",
      Kit: "Abjuring Chain",
      Tags: "Weapon",
      Description:
        "A metal chainlink whip engraved with warding runes. Using this weapon allows your attacks to interfere with magic, similar to a knight\u2019s holy sword. The whip can be joined together to create a magic circle that repels magic from the outside and contains magic within.",
    },
    {
      Class: "Advanced",
      Type: "Templar",
      Kit: "Lantern Spear",
      Tags: "Weapon",
      Description:
        "A shaft of steel tipped with enchanted silver that permanently glows with light. Using this weapon blinds creatures with strong night vision. Successful attacks against magical creatures deal an additional point of damage.",
    },
    {
      Class: "Advanced",
      Type: "Templar",
      Kit: "Sacred Censure",
      Tags: "Alchemy",
      Description:
        "A brass vessel suspended by a chain, made for burning incense. Can be used to create swirls of white smoke that dampen the effects of magic in an area. Monsters and other animals are repelled by the smell, making it useful for setting up camp in dangerous areas.",
    },
    {
      Class: "Advanced",
      Type: "Templar",
      Kit: "Talisman of Binding",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to restrict and reinforce. Can be used to imprison enemies, to fortify doors, and to seal away magic.",
    },
    {
      Class: "Advanced",
      Type: "Templar",
      Kit: "Talisman of Purity",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to purify and sanctify. Can be used to expel poisons, harm magical creatures, and bless objects with the power to ward off evil spirits.",
    },
    {
      Class: "Advanced",
      Type: "Templar",
      Kit: "Tolling Bell",
      Tags: "Alchemy",
      Description:
        "A metal bell whose deep sound sends a feeling of peace through those who hear it. Weak undead in the area are immediately put to rest, while stronger undead take Physical and Mental damage. Can be used softly to put others into a stupor, but only if they\u2019re caught unaware.",
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
  ];

  return data;
}
