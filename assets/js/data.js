export default function get_data() {
  var data = [
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Bag of Holding",
      Tags: "Alchemy",
      Description:
        "You have a bag that\u2019s bigger on the inside than the outside, capable of reducing the weight of objects placed within. You can expend a Charge Point to place a particularly large or heavy object within. The object should generally be less than 300 lbs. and less than five times the bag\u2019s size.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Flying Carpet",
      Tags: "Alchemy",
      Description:
        "You have a flying carpet, capable of carrying you into the air for short periods of time. When not in use the carpet folds itself into a scarf, cloak, or other wearable object. You can expend a Charge Point to extend the carpet\u2019s flight or to allow it to carry multiple people for a time.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Golem",
      Tags: "Alchemy",
      Description:
        "You have a golem made from clay, capable of fighting and lifting heavy objects. The golem has a Strength equal to half your Knowledge rounded down. You can expend a Charge Point to create additional golems.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Quicksilver Familiar",
      Tags: "Alchemy, Reaction",
      Description:
        "You have a familiar made from liquid metal, capable of shaping itself into weapons, tools, and objects. You can expend a Charge Point to deflect an attack by having the familiar change into a shield or similar object.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Shikigami",
      Tags: "Alchemy",
      Description:
        "You have a servant made from enchanted paper, capable of flying, scouting, and carrying messages. The shikigami has a Cunning equal to half your Knowledge rounded down. You can expend a Charge Point to create additional servants.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Spirit of Animation",
      Tags: "Spirit",
      Description:
        "Awaken inanimate objects. Can be used to imbue lightweight objects with motion and purpose, such as compelling a broom to sweep by itself.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Called Shot",
      Tags: "Technique",
      Description:
        "Your attacks are exceptionally precise. Using this technique allows you to harm specific targets (like eyes or hands), in addition to any Physical damage dealt. You have Advantage when making ranged attacks without any distractions.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Electromagnetic Charges",
      Tags: "Alchemy",
      Description:
        "Attacks that use this ammunition are electrically charged, shocking or magnetizing targets in addition to any Physical damage dealt. When used with Produce a Grenade inflicts Physical damage and one other effect in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Friction Charges",
      Tags: "Alchemy",
      Description:
        "Attacks that use this ammunition involve capsules of liquid, producing quick-drying adhesive or slippery grease in addition to any Physical damage dealt. When used with Produce a Grenade this kit inflicts Physical damage and one other effect in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Thermic Charges",
      Tags: "Alchemy",
      Description:
        "Attacks that use this ammunition have thermal properties, producing flames or frost on targets in addition to any Physical damage dealt. When used with Produce a Grenade this kit inflicts Physical damage and one other effect in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Trenchsteel Charges",
      Tags: "Alchemy",
      Description:
        "Attacks that use this ammunition are physically loaded, exploding into a mass of ball bearings or barbed wire in addition to any Physical damage dealt. When used with Produce a Grenade this kit inflicts Physical damage and one other effect in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Vapor Charges",
      Tags: "Alchemy",
      Description:
        "Attacks that use this ammunition are chemically loaded, instantly rusting through metal or producing small clouds of tear gas in addition to any Physical damage dealt. When used with Produce a Grenade this kit inflicts Physical damage and one other effect in a wide area.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Efficient",
      Tags: "Resource",
      Description:
        "Gain an additional two Charge Points. When you expend a Mental Box to recover a Charge Point, you recover two instead of one.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Sigil of Conversion",
      Tags: "Alchemy",
      Description:
        "A formula circle that can be drawn on objects. When completed, converts one material into another. The greater the difference from the original, the more difficult it is to perform the change. Can be drawn and completed instantly by expending a Charge Point.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Sigil of Division",
      Tags: "Alchemy",
      Description:
        "A formula circle that can be drawn on objects. When completed, breaks apart two objects, or reduces one object into its constituent elements. Can be drawn and completed instantly by expending a Charge Point.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Sigil of Shape",
      Tags: "Alchemy",
      Description:
        "A formula circle that can be drawn on objects. When completed, reshapes an object, altering its form by expanding or contracting its mass. Can be drawn and completed instantly by expending a Charge Point.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Sigil of Strength",
      Tags: "Alchemy",
      Description:
        "A formula circle that can be drawn on objects. When completed, strengthens an object, making it harder and more durable. Can also be used to weaken an object, making it flimsy and brittle. Can be drawn and completed instantly by expending a Charge Point.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Sigil of Synthesis",
      Tags: "Alchemy",
      Description:
        "A formula circle that can be drawn on objects. When completed, welds two objects together. Can be drawn and completed instantly by expending a Charge Point.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Abjuration",
      Tags: "Spirit, Reaction",
      Description:
        "Repel and dispel. Can be used to create barriers, destroy magic, and scare away otherworldly influences. You can expend a Mana Point to deflect an attack aimed at you.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Divination",
      Tags: "Spirit",
      Description:
        "Find and seek. Can be used to divine the location of people, places, and things through magical means.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Dreaming",
      Tags: "Spirit",
      Description:
        "Meddle with the boundary between conscious and unconscious. Can be used to induce sleep, daze enemies, and put others into a trance. You have Advantage when using Presence to hypnotize the weak-willed.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Language",
      Tags: "Spirit",
      Description:
        "Speak and undestand all creatures. Can be used to communicate with animals, use charm magic, and compel others to your will. You have Advantage when using Presence to awe others.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Necromancy",
      Tags: "Spirit",
      Description:
        "Meddle with the boundary between life and death. Can be used to puppet corpses to do your bidding, summon ghosts, and stave off death.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Restoration",
      Tags: "Spirit",
      Description:
        "Restore what is broken. Can be used to heal Physical damage, repair broken objects, and treat natural afflictions.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Aether",
      Tags: "Spirit",
      Description:
        "Manipulate electricity. Can be used to shoot lightning from your hands, induce pain without damage, and x. Represents emptiness and void.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Air",
      Tags: "Spirit",
      Description:
        "Manipulate air. Can be used to create ferocious whirlwinds, fall gently from great heights, and rebuff projectiles. Represents movement and freedom.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Earth",
      Tags: "Spirit",
      Description:
        "Manipulate earth. Can be used to throw jagged spikes from the ground, reshape stone, and x. Represents solidity and strength.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Flame",
      Tags: "Spirit",
      Description:
        "Manipulate fire. Can be used to conjure flames from nothing, create floating torches, and x. Represents cleansing and destruction.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Metal",
      Tags: "Spirit",
      Description:
        "Manipulate metal. Can be used to magnetize metallic objects, binding them together or pushing them apart. Represents clarity and reason.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Water",
      Tags: "Spirit",
      Description:
        "Manipulate water. Can be used to create spears of ice, conjure fog, and purify liquids. Represents tranquility and adaptability.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Manafont",
      Tags: "Resource",
      Description:
        "Gain an additional two Mana Points. When you expend a Mental health box to recover a Mana Point, you gain two instead of one.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Entropy",
      Tags: "Spirit",
      Description:
        "Manipulate decay. Can be used to accelerate or decelerate processes like rotting and rusting.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Force",
      Tags: "Spirit, Reaction",
      Description:
        "Perform limited telekinesis. Can be used to levitate nearby objects and launch them through the air. You can expend a Mana Point to deflect an attack aimed at you.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Gravity",
      Tags: "Spirit",
      Description:
        "Manipulate gravity. Can be used to add or reduce weight for a short time.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Locomotion",
      Tags: "Spirit",
      Description:
        "Manipulate kinetic energy. Can be used to add or reduce speed of a moving object.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Thermos",
      Tags: "Spirit",
      Description:
        "Manipulate thermal energy. Can be used to add or reduce heat.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Golden Silk",
      Tags: "Alchemy",
      Description:
        "A potent hallucinogenic. Can be used to induce confusion, to numb pain, to put a target into a stupor, to render someone highly suggestable, or to inflict Mental damage.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Manifold Venom",
      Tags: "Alchemy",
      Description:
        "A collection of dangerous poisons. Can be applied to the user\u2019s weapons to induce paralysis, sap strength, create nausea, cause blindness, or inflict additional Physical damage. Requires an action if applied in combat, unless the Kit is amplified.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Pin Down",
      Tags: "Technique",
      Description:
        "Your attacks reduce an enemy\u2019s movement, cutting off their ability to escape or pursue. Using this technique greatly reduces a target\u2019s mobility, in addition to any Physical damage dealt. You have Advantage when using Agility to sprint, as might be the case when chasing after someone or retreating from danger.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Pressure Points",
      Tags: "Technique",
      Description:
        "Your attacks strike at an enemy\u2019s nerves. Using this technique can incapacitate targets without lasting harm or visible injury, in addition to any Physical damage dealt. You have Advantage when sensing the motivations of others, such as detecting lies, by picking up on nervous ticks or other tells.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Spirit of Darkness",
      Tags: "Spirit",
      Description:
        "Manipulate darkness. Can be used to obscure appearances, darken areas, and blind enemies.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Uncanny Dodge",
      Tags: "Reaction",
      Description:
        "You can expend a Prep Point to avoid harm from an attack or hazard. You have Advantage against traps and area of effect attacks.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Faerie Fire",
      Tags: "Alchemy",
      Description:
        "A volatile powder used in fireworks. Can create plumes of smoke, bright lights, flames, loud noises, or induce violent coughing.",
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
      Kit: "Resilience Arcana",
      Tags: "Resource",
      Description:
        "Gain an additional Physical box. You do not need to sleep, and cannot be rendered unconscious against your will, but can be incapacitated in other ways.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Spirit of Light",
      Tags: "Spirit",
      Description:
        "Manipulate light. Can be used to create ghostly illusions, see afar, and produce lighting.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Spirit of Sound",
      Tags: "Spirit",
      Description:
        "Manipulate sound. Can be used to shatter eardrums, eavesdrop from afar, and mimic sounds.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "War Arcana",
      Tags: "Technique",
      Description:
        "Your fighting style resembles dancing, making you particularly mobile. Using this technique allows you to move before and after making an attack, darting outside of melee range or firing shots while running. You have Advantage when performing acrobatics, such as climbing walls or jumping over obstacles.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Beast Balm",
      Tags: "Alchemy",
      Description:
        "A mixture that bewitches animals. You can communicate with and befriend beasts. You can use I Know a Guy to recruit a local beast to aid you. The beast can track, fight, and is capable of anything that a creature of its kind might otherwise do.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Beast\u2019s Blood",
      Tags: "Alchemy",
      Description:
        "A mixture that heightens senses. Can provide a bat\u2019s sense of hearing, a hound\u2019s sense of smell, or similar effects. When amplified, can provide more drastic animal adaptations, like fireproof scales or a fish\u2019s gills. Can also be used to attract beasts and monsters.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Prepared",
      Tags: "Resource",
      Description:
        "Gain an additional two Prep Points. You can expend a Prep Point to change a Kit without resting, provided you have a few minutes to do so.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Quickdraw",
      Tags: "Technique",
      Description:
        "Your attacks are swift and silent, preventing targets from crying out when struck. Using this technique ensures that an enemy won\u2019t cause a commotion for a brief period of time, in addition to any Physical damage dealt. You have Advantage when determining who acts first, such as when determining combat turn order.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Spirit of Wood",
      Tags: "Spirit",
      Description:
        "Manipulate plants. Can be used to accelerate plant growth, speed up natural healing, and command flora. Represents growth and vitality.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Ambush",
      Tags: "Technique",
      Description:
        "Your attacks hit two targets instead of one. Using this technique gives your attack an additional target, with both hits landing within moments of one another. The additional target cannot be the same as the original target. You have Advantage when tracking a target, such as when finding the trail of a monster or criminal.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Flourish",
      Tags: "Technique",
      Description:
        "Your attacks are complex, dazzling, and distracting to enemies. Using this technique gives Advantage to the next attack made on the target, either by you or by one of your allies, in addition to any Physical damage dealt. You have Advantage when using Bravery to inspire or rally others.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Harass",
      Tags: "Technique",
      Description:
        "Your attacks unnerve and frustrate targets in addition to dealing damage. Using this technique inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when using Bravery to provoke others.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Inner Flame",
      Tags: "Resource",
      Description:
        "At any time when you would otherwise spend a Fortune Point, you can spend a Physical box instead. When you recover Physical or Mental boxes, you recover one more than you would otherwise.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Riposte",
      Tags: "Reaction",
      Description:
        "On a successful defense against a melee attack, you inflict a box of Physical damage to the attacker. You recover a Fortune Point when an enemy is incapacitated in this fashion.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Whirlwind",
      Tags: "Technique",
      Description:
        "Your attacks hit all enemies adjacent to you. Using this technique gives your attacks a small area of effect around your body, targeting enemies immediately next to you. You have Advantage when defending against melee attacks made with weapons.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Windcutter",
      Tags: "Technique",
      Description:
        "Your melee attacks create blades of cutting wind, while your ranged attacks are propelled by gusts. Using this technique greatly extends the range of your attacks. You have Advantage when defending against projectile attacks like arrows and bullets.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Guardian",
      Tags: "Reaction",
      Description:
        "When a nearby ally would otherwise take damage, you can take damage in their place, so long as you are able to provide a narrative justification for how you do so. You recover a Fortune Point when using this Kit. You cannot attempt to block, dodge, or otherwise reduce damage taken using this Kit.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Hospitaler Salts",
      Tags: "Alchemy, Recovery",
      Description:
        "Revive an incapacitated ally and allow them to briefly ignore the effects of their injuries. Revived allies clear one box of damage, Physical or Mental, depending on which is necessary. Requires physical contact.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Impose",
      Tags: "Technique",
      Description:
        "Your attacks demand the attention of targets and cloud their perception. Using this technique compels an enemy to focus on you after a successful attack, in addition to any Physical damage dealt. You have Advantage when using Bravery to intimidate others.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Iron Will",
      Tags: "Resource",
      Description:
        "Gain an additional Mental box. You are immune to Mental damage from exhaustion, fear, or similar psychological effects.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Smite",
      Tags: "Technique",
      Description:
        "Your attacks strike with enough force to knock targets around or launch them into the air. Using this technique allows your attacks to forcibly reposition enemies, in addition to any Physical damage dealt. You have Advantage against any effect that attempts to forcibly move you or impede your movement.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Spellbreak",
      Tags: "Technique",
      Description:
        "Your attacks interfere with magic. Using this technique allows your attacks to destroy spells and spirits, in addition to any Physical damage dealt. You have Advantage when defending against magical effects.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Blitz",
      Tags: "Technique",
      Description:
        "Your attacks are more likely to cause harm. Using this technique adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Cleave",
      Tags: "Technique",
      Description:
        "Your attacks are especially destructive, hitting enemies and objects adjacent to your target. Using this technique allows your attacks to inflict damage in a small area of effect centered around your main target. You have Advantage when using raw Strength to overcome an obstacle, such as bending metal bars or lifting heavy objects.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "No Escape",
      Tags: "Reaction",
      Description:
        "Enemies that attempt to leave your melee range take one box of Physical damage. You recover a Fortune Point when an enemy is incapacitated in this fashion.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Lucky",
      Tags: "Resource",
      Description:
        "Gain an additional two Fortune Points. When you use a Fortune Point to reroll, take the better result of the two rolls.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Spirit of Chance",
      Tags: "Spirit",
      Description:
        "Manipulate probability. Can be used to tweak the odds in your favor, jinx enemies with poor luck, and make improbable outcomes more likely.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Sunder",
      Tags: "Technique",
      Description:
        "Your attacks are brutally effective, causing great harm and breaking through defences. Using this technique allows your attacks to cut or pierce durable materials like stone and metal. Successful attacks also deal an additional box of Physical damage. You have Advantage when using this technique to destroy objects and obstacles.",
    },
  ];

  return data;
}
