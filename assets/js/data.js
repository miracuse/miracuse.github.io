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
      Kit: "Golem",
      Tags: "Alchemy",
      Description:
        "You have a golem made from clay, capable of fighting and lifting heavy objects. The golem has a Strength equal to half your Knowledge rounded down. You can expend a Charge Point to create an additional golem.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Potency",
      Tags: "Resource",
      Description:
        "Gain an additional two Charge Points. When you Produce a Potion, the potion restores an additional box of Physical damage.",
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
        "You have a servant made from enchanted paper, capable of flying, spying, and carrying messages. The shikigami has a Cunning equal to half your Knowledge rounded down. You can expend a Charge Point to create an additional servant.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Spirit of Animation",
      Tags: "Spirit",
      Description:
        "Awaken inanimate objects, compel them to move and act on your orders.",
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
      Kit: "Transmute Division",
      Tags: "Alchemy",
      Description:
        "Separate objects. Can be used to physically sever two objects from one another, or to distill an object into its base elements. The more complex the intended result is, the more difficult the change. Requires physical contact.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Transmute Self",
      Tags: "Alchemy, Resource",
      Description:
        "Expend a Mental box to recover a Physical box or vice versa. Can only be applied to yourself. When done in combat, requires an action.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Transmute Shape",
      Tags: "Alchemy",
      Description:
        "Reshape an object, altering its form by expanding or contracting its mass. Requires physical contact.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Transmute Strength",
      Tags: "Alchemy",
      Description:
        "Strengthen an object, making it harder and more durable. Or weaken an object, making it flimsy and more brittle. Requires physical contact.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Transmute Substance",
      Tags: "Alchemy",
      Description:
        "Convert one material into another. The greater the difference from the original, the more difficult the change. Requires physical contact.",
    },
    {
      Class: "Alchemist",
      Type: "Transmuter",
      Kit: "Transmute Synthesis",
      Tags: "Alchemy",
      Description:
        "Combine objects. Can be used to physically weld two objects to one another, or to mix them into one another as a means of creating a new object. The more complex the intended result is, the more difficult the change. Requires physical contact.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Abjuration",
      Tags: "Spirit, Reaction",
      Description:
        "Create barriers, dispel magic, and repel otherworldly influences. You can expend a Mana Point to deflect an attack aimed at you.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Divination",
      Tags: "Spirit",
      Description:
        "Find people, places, things, and hidden knowledge through divination.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Language",
      Tags: "Spirit",
      Description:
        "Communicate with all creatures, use charm magic, and compel others to your will.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Necromancy",
      Tags: "Spirit",
      Description:
        "Raise the dead, curse the living, and meddle with the boundary between life and death.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Restoration",
      Tags: "Spirit",
      Description:
        "Heal Physical wounds, restore broken objects, and treat natural afflictions.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Spirit of Summoning",
      Tags: "Spirit",
      Description: "Pull otherworldly influences into the world.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Aether",
      Tags: "Spirit",
      Description:
        "Manipulate electricity, create lightning, and stun enemies. Represents emptiness and void.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Air",
      Tags: "Spirit",
      Description:
        "Manipulate air, create gusts of wind, and fall gently. Represents movement and freedom.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Earth",
      Tags: "Spirit",
      Description:
        "Manipulate earth, reshape terrain, and mold stone. Represents solidity and strength.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Flame",
      Tags: "Spirit",
      Description:
        "Manipulate fire, conjure flames, and blast enemies. Represents cleansing and destruction.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Metal",
      Tags: "Spirit",
      Description:
        "Manipulate metal, magnetize metallic objects, and sharpen or dull blades. Represents clarity and reason.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Spirit of Water",
      Tags: "Spirit",
      Description:
        "Manipulate water, conjure fog, and freeze liquids. Represents tranquility and adaptability.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Manafont",
      Tags: "Resource",
      Description:
        "Gain an additional two Mana Points. When you Sacrifice a Mental health box, you gain two Mana Points instead of one.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Entropy",
      Tags: "Spirit",
      Description:
        "Manipulate decay, accelerating or decelerating processes like rotting and rusting.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Force",
      Tags: "Spirit, Reaction",
      Description:
        "Perform limited telekinesis, levitating objects and lobbing them through the air. You can expend a Mana Point to deflect an attack aimed at you.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Gravity",
      Tags: "Spirit",
      Description: "Manipulate gravity, add or reduce weight.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Locomotion",
      Tags: "Spirit",
      Description: "Manipulate kinetic energy, add or reduce speed.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Spirit of Thermos",
      Tags: "Spirit",
      Description: "Manipulate thermal energy, add or reduce heat.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Golden Silk",
      Tags: "Alchemy",
      Description:
        "A potent hallucinogenic. Can be used to induce confusion, to put a target into a stupor, to render someone highly suggestable, or to inflict Mental damage.",
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
      Kit: "Spirit of Shadow",
      Tags: "Spirit",
      Description:
        "Manipulate shadows, obscure appearances, and blind enemies.",
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
      Description: "Manipulate light, create ghostly illusions, and see afar.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Spirit of Sound",
      Tags: "Spirit",
      Description:
        "Manipulate sound, shatter eardrums, and eavesdrop from afar.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "War Arcana",
      Tags: "Technique",
      Description:
        "Your fighting style resembles dancing, making you particularly mobile. Using this technique allows you to take a second action after making an attack, so long as the second action is not an attack. Examples might include moving out of range, using an item, or using magic.",
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
      Description: "Gain an additional two Prep Points.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Quickdraw",
      Tags: "Technique",
      Description:
        "Your attacks are swift and silent, preventing targets from crying out when struck. Using this technique ensures that an enemy won\u2019t cause a commotion for a brief period of time, in addition to any Physical damage dealt. You have Advantage when determining who acts first, including combat turn order.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Spirit of Wood",
      Tags: "Spirit",
      Description:
        "Manipulate plants, encourage growth, and influence the environment. Represents growth and vitality. Can be used to accelerate the process of natural healing outside of combat.",
    },
    {
      Class: "Scoundrel",
      Type: "Ranger",
      Kit: "Twin Strike",
      Tags: "Technique",
      Description:
        "Your attacks hit two targets instead of one. Using this technique gives your attack an additional target, with both hits landing within moments of one another. The additional target cannot be the same as the original target.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Aura Strike",
      Tags: "Technique",
      Description:
        "Your melee attacks create blades of cutting wind, while your ranged attacks are propelled by gusts. Using this technique greatly extends the range of your attacks. You have Advantage when defending against projectile attacks like arrows and bullets.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Curve",
      Tags: "Technique",
      Description:
        "Your melee attacks bend the shape of your weapon in unpredictable ways, while your ranged attacks can change trajectory in mid-flight. Using this technique allows your attacks to circumvent cover and obstacles. When you tie with a defender while attacking, you deal damage regardless.",
    },
    {
      Class: "Soldier",
      Type: "Fencer",
      Kit: "Flourish",
      Tags: "Technique",
      Description:
        "Your attacks are complex, dazzling, and distracting to enemies. Using this technique can either give Disadvantage to the target\u2019s next action, or give Advantage to the next attack made on the target. You have Advantage when using Bravery to inspire or rally others.",
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
        "Your attacks strike with enough force to knock targets around or launch them into the air. Using this technique allows your attacks to forcibly reposition enemies, in addition to any Physical damage dealt. You have Advantage against any attempt to forcibly move you, and against any effect that impedes your movement.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Spellbreak",
      Tags: "Technique",
      Description:
        "Your attacks interfere with magic. Using this technique allows your attacks to destroy spells and spirits, in addition to any Physical damage dealt. You have Advantage when defending against magical attacks.",
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
        "Your attacks are especially destructive, hitting enemies and objects adjacent to your target. Using this technique allows your attacks to inflict damage in a small area of effect.",
    },
    {
      Class: "Soldier",
      Type: "Myrmidon",
      Kit: "Danger Zone",
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
        "Manipulate probability, tweak the odds in your favor, and jinx enemies.",
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
