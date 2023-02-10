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
      Tags: "Weapon, Ranged",
      Description:
        "A set of needles laced with nerve poison. Using this technique can incapacitate targets without lasting harm or visible injury, in addition to any Physical damage dealt.",
    },
    {
      Class: "Scoundrel",
      Type: "Assassin",
      Kit: "Slowing Thorns",
      Tags: "Weapon, Ranged",
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
      Tags: "Weapon, Ranged",
      Description:
        "A set of transparent needles that make it difficult to trace the origin of attacks. Using this weapon reduces the likelihood that you\u2019ll be exposed after making a sneak attack.",
    },
    {
      Class: "Scoundrel",
      Type: "Bard",
      Kit: "Dervish Knives",
      Tags: "Weapon, Ranged",
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
      Kit: "Fencing Knives",
      Tags: "Weapon, Defense",
      Description:
        "A set of daggers meant for close combat. Using this weapon gives you Advantage on rolls to dodge until the start of your next turn. You have Advantage on rolls to move swifty, such as when retreating or pursuing.",
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
      Kit: "Adamantine Gauntets",
      Tags: "Alchemy",
      Description:
        "Heavy gauntlets made of a nearly indestructable material. Can be used to grab blades, poisonous spines, molten metal, and other hazards without harm.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Dueling Steel",
      Tags: "Weapon, Defense, Accurate",
      Description:
        "A regulation-length sword for resolving legal disputes. Using this weapon gives you Advantage on rolls to defend until the start of your next turn, and adds +1 to the roll result of your attacks. You have Advantage when provoking others into a duel.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Flametongue",
      Tags: "Weapon, High Damage",
      Description:
        "An enchanted iron sword that glows with heat. Using this weapon ignites flammable surfaces on contact. Successful attacks deal an additional box of damage.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Sturdy Boots",
      Tags: "Alchemy",
      Description:
        "A set of boots that provide steady footing in all manner of conditions. You are immune to environmental hazards that impede your movement, such as grease slicks or ice, and attempts to knock you over. Your feet are protected from spikes, fire, and similar sources of harm.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Vorpal Blade",
      Tags: "Weapon, High Damage",
      Description:
        "An impossibly sharp sword made of liquid metal. Using this weapon allows your attacks to cleanly slice through most enemies and objects. Successful attacks deal an additional box of damage.",
    },
    {
      Class: "Soldier",
      Type: "Blademaster",
      Kit: "Windcutter",
      Tags: "Weapon, Ranged",
      Description:
        "A curved scimitar that catches the wind and turns it into sharp blades. Using this weapon greatly extends the range of your attacks. You have Advantage when defending against projectile attacks like arrows and bullets.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Agua Regia",
      Tags: "Alchemy",
      Description:
        "A dangerously potent acid that eats through metals with ease. Can be used to break locks, sabotage equipment, and create clouds of poisonous gas. You can expend a Potion to create a poisonous gas bomb that fills the air with thick toxic smoke.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Lunar Silver",
      Tags: "Alchemy",
      Description:
        "Crystallized holy water, a substance that leeches away magic on contact. Can be used to deaden a person to magic for a short time, rendering them immune and incapable of casting spells. You can expend a Potion to create an anti-magic bomb that nullifies magic in an area. You have Advantage when defending against magic in any form while this kit is equipped.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Midnight Oil",
      Tags: "Alchemy",
      Description:
        "A dark oil that absorbs sound and light, muting its surroundings. When burned it produces an invisible flame that gives off heat but not light, and an odorless gas that lulls others to sleep. You can expend a Potion to create a knockout grenade that releases sleeping gas into an area, dealing Mental damage.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Vaccuum Space",
      Tags: "Alchemy",
      Description:
        "A jar of carefully prepared void, which emits a strong suction force when opened. Can be used to capture a fog of poisonous gas, put out fires, propel yourself forward. You can expend a Potion to create an implosion grenade.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Vorpal Metal",
      Tags: "Alchemy, High Damage",
      Description:
        "Flowing vorpal metal, exceedingly sharp and highly resillient. Can be used to mend broken objects, create sheets of metal, and make precise cuts through most materials. You can use a Potion to create a spike of vorpal metal that pierces through an object or enemy, dealing an additional box of damage.",
    },
    {
      Class: "Alchemist",
      Type: "Chemist",
      Kit: "Winterbloom Extract",
      Tags: "Alchemy",
      Description:
        "Highly-concentrated extract from the Winterbloom flower. A droplet can freeze fifty gallons of water into hard ice, create a billowing cloud of fog, or plummet the temperature of anything it comes into contact with. You can expend a Potion to create a flash freeze bomb that deals damage and covers an area with a thin sheet of ice.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Brimstone Powder",
      Tags: "Alchemy",
      Description:
        "An otherworldly dust that conducts and magnifies magical energy. When added to fire it becomes hellfire, burning hotter and creating a noxious stench. You can expend a Potion to create a hellfire grenade that deals damage and creates waterproof flames.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Fey Venom",
      Tags: "Alchemy",
      Description:
        "A chemical that can stem the flow of blood or increase the rate of blood loss depending on how the substance is prepared. When you produce a Potion, it heals an additional Physical box.",
    },
    {
      Class: "Advanced",
      Type: "Conjurer",
      Kit: "Solomon Rod",
      Tags: "Weapon",
      Description:
        "A metal rod that holds sway over otherworldly creatures. Wielding this weapon compels nearby magical creatures into obedience, providing Advantage on all rolls to influence them. Successful attacks against magical creatures deal one additional box of Mental damage.",
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
      Tags: "Weapon, High Damage",
      Description:
        "A pirate\u2019s sword with a nasty red hue. Using this weapon causes it to leech blood on every strike, leaving few bloodstains. Successful attacks deal an additional box of damage.",
    },
    {
      Class: "Advanced",
      Type: "Corsair",
      Kit: "Marauder Flintlock",
      Tags: "Weapon, High Damage",
      Description:
        "A bewitched handgun whose bullets hit like cannon balls. Using this weapon breaks through armor and obstacles with significant force, but it requires several minutes to reload. Successful attacks deal an additional box of damage. You have Advantage when using this weapon to destroy objects.",
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
      Class: "Advanced",
      Type: "Druid",
      Kit: "Athame",
      Tags: "Weapon",
      Description:
        "A ritual knife used in sacrificial practices. This weapon provides a Mana Point when it\u2019s used to incapacitate a target.",
    },
    {
      Class: "Advanced",
      Type: "Druid",
      Kit: "Blight",
      Tags: "Alchemy",
      Description:
        "A dangerous toxin that corrupts and corrodes living matter. Can be used to spread disease, wither plants, and poison water.",
    },
    {
      Class: "Advanced",
      Type: "Druid",
      Kit: "Primal Staff",
      Tags: "Weapon",
      Description:
        "A staff carved from a lightning-stuck tree. Wielding this weapon gives you Advantage on all rolls to influence animals and insects. Natural wildlife will not attack you unless provoked.",
    },
    {
      Class: "Advanced",
      Type: "Druid",
      Kit: "Talisman of Beasts",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to take the form of an animal. Can be used to transform into wolves, birds, and other animals, as well as communicate with beasts.",
    },
    {
      Class: "Advanced",
      Type: "Druid",
      Kit: "Talisman of Storms",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to change the weather. Can be used to summon rain, call down lightning, and drive howling winds.",
    },
    {
      Class: "Advanced",
      Type: "Druid",
      Kit: "Talisman of Time",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to gently influence time. Can be used to peer into the past, accelerate decay, and speed the growth of plants.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Dancing Shadow",
      Tags: "Alchemy, Reaction",
      Description:
        "You have a servant made of shadow, granting you a limited form of telekinesis. The servant exists within your shadow, but can move independently and interact with the physical world. The shadow is able to retrieve and store lightweight objects within itself, but is lacking in strength. You can expend a Potion to have the shadow deflect an incoming attack.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Featherweave",
      Tags: "Alchemy, Reaction",
      Description:
        "You have a servant made from enchanted cloth, capable of resisting gravity to a limited degree. You glide gently to the ground while wearing this kit. When folded into a bag, you can carry heavy objects with ease. You can expend a Potion to turn the Featherweave into a flying carpet, able to carry multiple people for a short time.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Golem",
      Tags: "Alchemy",
      Description:
        "You have a servant made from clay, capable of fighting and lifting heavy objects. Equipping this Kit provides one golem. You can expend a Potion to create additional golems.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Quicksilver",
      Tags: "Weapon, Alchemy",
      Description:
        "You have a servant made from liquid metal, capable of shaping itself into weapons, tools, and objects. Using this weapon allows you to use Perception when attacking in melee. You can expend a Potion to have the Quicksilver transform into something large or complex.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Shikigami",
      Tags: "Alchemy",
      Description:
        "You have servants made from enchanted paper, capable of flying, spying, and carrying messages.  Equipping this kit provides half a dozen shikigami. You can expend a Potion to create an additional six servants.",
    },
    {
      Class: "Alchemist",
      Type: "Enchanter",
      Kit: "Skyglass",
      Tags: "Alchemy",
      Description:
        "You have a servant made of floating glass, able to break apart into sharp shards and reform at will so long as it\u2019s near you. You can expend a Potion to transform it into a grenade, shredding everything in the blast radius before reforming.",
    },
    {
      Class: "Advanced",
      Type: "Fell Knight",
      Kit: "Ash Knives",
      Tags: "Weapon, Ranged",
      Description:
        "A set of cursed throwing knives that prevent alchemical and magical healing. Using this weapon ensures that targets cannot be revived or brought back as undead.",
    },
    {
      Class: "Advanced",
      Type: "Fell Knight",
      Kit: "Mournblade",
      Tags: "Weapon, High Damage",
      Description:
        "A sword with a demon trapped inside that feeds off the living. Using this weapon restores a Fortune Point whenever it\u2019s used to incapacitate an enemy. Successful attacks deal an additional box of damage. You have Advantage when intimidating others.",
    },
    {
      Class: "Advanced",
      Type: "Fell Knight",
      Kit: "Talisman of Fear",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to push terror into the minds of others. Can be used to incite a retreat, paralyze an enemy with fear, and interrogate others.",
    },
    {
      Class: "Advanced",
      Type: "Fell Knight",
      Kit: "Talisman of Siphoning",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to steal away energy. Can be used to drain the lifeforce from others, tap into the power of an enchanted object, and consume spirits. Restores one Physical box on successful attacks.",
    },
    {
      Class: "Advanced",
      Type: "Fell Knight",
      Kit: "Vim Drink",
      Tags: "Alchemy",
      Description:
        "A distant ancestor to the modern alchemist\u2019s potion. When consumed, the user expends a Mental box in exchange for recoving a Physical box. Can be used by others.",
    },
    {
      Class: "Advanced",
      Type: "Fell Knight",
      Kit: "Wyther Toxin",
      Tags: "Alchemy",
      Description:
        "A bitter venom that causes intense pain. Can be applied to the user\u2019s weapons to inflict Mental damage, cripple the wills of enemies, or cloud the mind.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Bouncing Bullets",
      Tags: "Alchemy",
      Description:
        "Rubberized bullets that ricochet in closed spaces. Can be used to bounce gunfire around corners, to cause non-lethal harm, and to knock objects over instead of piercing them.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Hand Cannon",
      Tags: "Weapon, High Damage, Ranged",
      Description:
        "A hefty iron sidearm that hits harder than most. Successful attacks deal an additional box of damage.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Quickdraw Pistol",
      Tags: "Weapon, Ranged",
      Description:
        "A handgun built for quick access. If you strike before an enemy, the attack is treated as a sneak attack. You have Advantage when determining who goes first, such as rolling turn order.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Silver Bullets",
      Tags: "Alchemy",
      Description:
        "Bullets that tear through magic. Can be used to break through spells, damage enchanted equipment, and harm spirits. Valuable enough to be used as bribes.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Warded Greatcoat",
      Tags: "Alchemy",
      Description:
        "A thick leather coat that reaches past the knees. Sigils of protection have been stitched into the lining, making the wearer resistant to bullets and blunt trauma. You have Advantage when defending against bludgeoning.",
    },
    {
      Class: "Advanced",
      Type: "Gunslinger",
      Kit: "Whiplash Bullets",
      Tags: "Alchemy",
      Description:
        "Bullets that leave a gust of wind in their wake. Can be used to clear smokescreens, scatter debris, and throw arrows off course.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Anointing Oil",
      Tags: "Alchemy",
      Description:
        "A ritually prepared oil that knights apply before going to battle. Monsters, beasts, and the undead will target you before your allies. You are immune to illusions and curses. Can be used as bait.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Blessed Sword",
      Tags: "Weapon",
      Description:
        "A blade quenched in holy water. Using this weapon allows your attacks to interfere with magic. You have Advantage when inspiring or rallying others.",
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
      Kit: "Inscribed Shield",
      Tags: "Weapon, Defense",
      Description:
        "A shield warded against hostile magic. Spells rebound from its surface. Using this weapon to attack gives you Advantage on rolls to defend until the start of your next turn. You have Advantage when defending against magical attacks.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Smiting Mace",
      Tags: "Weapon, High Damage",
      Description:
        "An enchanted warmace that stores kinetic energy. Using this weapon allows your attacks to knock enemies back or into the air with significant force. Successful attacks deal an additional box of damage.",
    },
    {
      Class: "Soldier",
      Type: "Knight",
      Kit: "Taunting Scourge",
      Tags: "Weapon",
      Description:
        "An enchanted metal chain with barbs that bind and resticts enemies. Using this weapon grapples targets in addition to any damage dealt, compelling them to attack the user. You have Advantage when provoking others into attacking you.",
    },
    {
      Class: "Soldier",
      Type: "Legionnaire",
      Kit: "Ogre Draught",
      Tags: "Alchemy",
      Description:
        "A dangerous drug that requires training to withstand. While this kit is equipped you are immune to poisons and diseases. You have Advantage against hazards like sweltering heat and bitter cold.",
    },
    {
      Class: "Soldier",
      Type: "Legionnaire",
      Kit: "Pocket Wall",
      Tags: "Alchemy",
      Description:
        "A rapidly expanding cement-like substance. Can be used to create shelter, mend cracks, seal doors, or adhere objects to one another. You have Advantage when building or repairing objects with this substance.",
    },
    {
      Class: "Soldier",
      Type: "Legionnaire",
      Kit: "Shocklance",
      Tags: "Weapon",
      Description:
        "A spear whose tip crackles with electricity, causing intense pain on contact. Using this weapon inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when intimidating others.",
    },
    {
      Class: "Soldier",
      Type: "Legionnaire",
      Kit: "Thunderclap Javelins",
      Tags: "Weapon, Ranged",
      Description:
        "A set of javelins that release sonic booms when they land. Using this weapon shatters the eardrums of enemies, deafening and disorienting in an area around your main target.",
    },
    {
      Class: "Soldier",
      Type: "Legionnaire",
      Kit: "Vanguard Shield",
      Tags: "Weapon, Defense",
      Description:
        "A collapsible shield that can unfold from a bracer into a full tower shield. Using this weapon to attack gives you Advantage on rolls to defend until the start of your next turn. You have Advantage when defending others from harm.",
    },
    {
      Class: "Soldier",
      Type: "Legionnaire",
      Kit: "Wicked Blade",
      Tags: "Weapon, Accurate, Reaction",
      Description:
        "A sharp shortsword that seeks out targets. Using this weapon adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage. Enemies that attempt to leave your melee range take one box of Physical damage.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Holy Symbol",
      Tags: "Weapon",
      Description:
        "An object affiliated with your patron spirits in some way. Using this weapon, attacks with Talismans are especially effective against magical entities. You have Advantage when rolling Magic against other mages or spirits.",
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
        "A wand or other object that can be used to meddle with the boundary between conscious and unconscious. Can be used to induce sleep, daze enemies, and put others into a trance. You have Advantage when using Presence to put others into a stupor.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Language",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to speak with and undestand all creatures. Can be used to speak with animals, put compulsions on others, and understand otherworldly creatures . You have Advantage when using Presence to command others.",
    },
    {
      Class: "Mage",
      Type: "Priest",
      Kit: "Talisman of Necromancy",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to meddle with the boundary between life and death. Can be used to heal Physical damage, summon ghosts for information, and create undead. The number of Physical boxes healed is equal to the result of the roll.",
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
        "A wand or other object that can be used to preserve life. Can be used to heal wounds, sense the presence of living things, and detect disturbances in the natural order. The number of Physical boxes healed is equal to the result of the roll.",
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
      Kit: "Concussive Charges",
      Tags: "Alchemy",
      Description:
        "Explosive bullets that create powerful shockwaves to knock enemies over with instead of dealing Physical damage. You can expend a Potion to create a concussive grenade that deals damage and creates a shockwave.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Grease Charges",
      Tags: "Alchemy",
      Description:
        "Capsule bullets filled with slippery and flammable grease, covering targets instead of dealing Physical damage. You can expend a Potion to create a grease bomb that covers an area with oil.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Iron-Sighted Rifle",
      Tags: "Weapon, Accurate, Ranged",
      Description:
        "A long-barreled gun used for precision shooting. Using this weapon adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage. You have Advantage when making ranged attacks without any distractions.",
    },
    {
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Phosphos Charges",
      Tags: "Alchemy",
      Description:
        "Volatile bullets that ignite targets and produce blinding flashes of light. You can expend a Potion to create a flash bomb that blinds enemies, or a fire bomb that causes damage and sets the area ablaze.",
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
      Class: "Alchemist",
      Type: "Sapper",
      Kit: "Trenchsteel Charges",
      Tags: "Alchemy",
      Description:
        "Loaded bullets that fire twice, changing trajectory in mid-air to shoot around corners or cover. You can expend a Potion to create a ball bearing grenade that deals damage and covers an area with metal balls.",
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
      Kit: "Talisman of Water",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate water. Can be used to create spears of ice, conjure fog, and purify liquids.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Totemic Staff",
      Tags: "Weapon",
      Description:
        "A decorated staff that fosters balance between the elements. Using this weapon, attacks with Talismans become more precise, able to strike multiple enemies without harming allies. You have Advantage when petitioning spirits with Presence.",
    },
    {
      Class: "Mage",
      Type: "Shaman",
      Kit: "Vision Powder",
      Tags: "Alchemy",
      Description:
        "A ritually prepared dust that enhances magical senses. Can be used to induce deep trances and to disperse illusions. You have Advantage on Presence rolls to sense magical phenomenon.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Mythril Blade",
      Tags: "Weapon, Accurate",
      Description:
        "A blade that conducts magic. Using this weapon allow you to use Talismans in conjunction with attacks, empowering strikes with effects related to the Talisman.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Mythril Gauntlets",
      Tags: "Alchemy",
      Description:
        "A pair of gauntles that conduct magic. Used to channel Spellsword Talismans outside the body. Can project magic a short distance away, into an object being held, or into a person being touched.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Moon",
      Tags: "Talisman, Reaction",
      Description:
        "A wand or other object that can be used to deflect harm away from your body. Can be used to parry projectiles, repel magic, and break grapples. You can spend a Mana box to avoid harm from incoming attacks.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Stars",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to accelerate your body. Can be used to briefly move faster than normal, heal your wounds, and quicken your thoughts. May cause Physical damage to you if used excessively. The number of Physical boxes healed is equal to the result of the roll.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Sun",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to radiate heat and light from your body. Can be used to burn off restraints, blind enemies in melee range, and stave off cold. May cause Physical damage to you if used excessively.",
    },
    {
      Class: "Advanced",
      Type: "Spellsword",
      Kit: "Talisman of Terra",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to amplify the force of individual motions your body makes. Can be used to leap high into the air, knock an enemy back with a strike, or kick a door off its hinges. May cause Physical damage to you if used excessively.",
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
        "A wand or other object that can be used to purify and sanctify. Can be used to expel poisons, harm magical creatures, and bless objects with the power to ward off evil.",
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
      Kit: "Familiar",
      Tags: "Alchemy",
      Description:
        "You have a shapeshifting servant that takes the form of a small animal, such as a crow or cat. You are able to borrow its senses, issue commands to it, and cast spells through it.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Aether",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate electromagnetic energy. Can be used to shoot lightning, magnetize metals, and control the flow of electricity.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Force",
      Tags: "Talisman, Reaction",
      Description:
        "A wand or other object that can be used to manipulate kinetic energy. Can be used to perform telekinesis, lob blasts of kinetic force at enemies, and adjust the speed of moving objects. You can expend a Mana Point to deflect an attack aimed at you.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Gravity",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate gravity. Can be used to pull an enemy to the ground, lighten the weight of an object, and adjust gravity.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Talisman of Heat",
      Tags: "Talisman",
      Description:
        "A wand or other object that can be used to manipulate thermal energy. Can be used to ignite enemies, freeze objects, and adjust temperature.",
    },
    {
      Class: "Mage",
      Type: "Wizard",
      Kit: "Wizard Staff",
      Tags: "Weapon, Accurate",
      Description:
        "A staff that leverages alchemy to improve the effectiveness of combat magic. Using this weapon adds +1 to attacks with Talismans, significantly improving the chance that they\u2019ll cause harm.",
    },
  ];

  return data;
}
