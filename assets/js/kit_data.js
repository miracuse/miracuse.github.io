export default function get_kit_data() {
  var data = [
    {
        "Class":"Advanced",
        "Type":"Antiquarian",
        "Kit":"Sigil of Chaos",
        "Tags":"Sigil",
        "Description":"An eye-catching design of messy spirals. Can be used to weaken objects, cause Mental damage, and produce a pulling force. The strength of the effect is proportional to the size of sigil drawn and the Knowledge of the artist. You have Advantage when actively searching for information."
    },
    {
        "Class":"Advanced",
        "Type":"Antiquarian",
        "Kit":"Sigil of Creation",
        "Tags":"Sigil",
        "Description":"A beautiful design of graceful curves. Can be used to build or reshape an object. The strength of the effect is proportional to the size of sigil drawn and the Knowledge of the artist. You have Advantage trying to determine what an object is made out of."
    },
    {
        "Class":"Advanced",
        "Type":"Antiquarian",
        "Kit":"Sigil of Destruction",
        "Tags":"Sigil",
        "Description":"A fearsome design of jagged edges. Can be used to violently destroy or damage an object. The strength of the effect is proportional to the size of sigil drawn and the Knowledge of the artist. You have Advantage when looking for the weak points of an object or enemy."
    },
    {
        "Class":"Advanced",
        "Type":"Antiquarian",
        "Kit":"Sigil of Order",
        "Tags":"Sigil",
        "Description":"A neatly structured design of interlocking symbols. Can be used to reinforce objects, protect against intrusion, and produce a repelling force. The strength of the effect is proportional to the size of sigil drawn and the Knowledge of the artist. You have Advantage when detecting threats."
    },
    {
        "Class":"Advanced",
        "Type":"Antiquarian",
        "Kit":"Skywax Stamps",
        "Tags":"Gear",
        "Description":"A set of wax stamps made from an inert material and alchemic paints. Can be used to instantly mark objects with low-power sigils that you have equipped."
    },
    {
        "Class":"Advanced",
        "Type":"Antiquarian",
        "Kit":"Vitriolic Edge",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A dagger that sweats acid, useful for etching stone and similar materials. Using this weapon causes painful acid burns. Successful attacks deal an additional box of Physical damage."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Golden Silk",
        "Tags":"Alchemy",
        "Description":"A hallucinogenic dust that can be powdered on gloves or thrown. Can be used to induce confusion, render someone highly suggestible, or inflict Mental damage. You have Advantage when lying to others."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Heartstop Thorns",
        "Tags":"Gear, Weapon, Ranged, High Damage",
        "Description":"A set of needles tipped with paralyzing poison. Using this weapon greatly reduces a target\u2019s mobility, in addition to any Physical damage dealt. Successful attacks deal an additional box of damage."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Magebane Thorns",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of silver needles coated in holy water. Using this weapon cuts off a target\u2019s ability to use magic temporarily."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Manifold Venom",
        "Tags":"Alchemy",
        "Description":"A collection of dangerous poisons that can be applied to weapons or slipped into drinks. Can be used to sap strength, cause blindness, or render targets unconscious. Requires an action if applied to a weapon in combat."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Nerve Thorns",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of transparent needles laced with nerve poison. Using this weapon can incapacitate targets without lasting harm or visible injury, in addition to any Physical damage dealt. You have Advantage when disguising your sneak attacks to avoid notice."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Talisman of Darkness",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate darkness. Can be used to obscure appearances, darken areas, and blind enemies. You have Advantage when hiding in dimly lit areas."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Dervish Knives",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of throwing knives that can be flicked through the air with ease. Using this weapon allows you to move before and after making an attack, darting outside of melee range or throwing blades while running. You have Advantage when performing acrobatics."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Faerie Fire",
        "Tags":"Alchemy",
        "Description":"A volatile powder used in fireworks. Can create plumes of smoke, bright lights, flames, and loud noises. You have Advantage when entertaining and distracting others."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Fencing Knives",
        "Tags":"Gear, Defense",
        "Description":"A set of daggers meant for close combat. Using this weapon gives you Advantage on rolls to dodge until the start of your next turn. You have Advantage on rolls to move swiftly, such as when retreating or pursuing."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Holy Water",
        "Tags":"Alchemy",
        "Description":"A specially treated liquid that negates magic. Can be used to counter spells, damage magical objects, and repel monsters. You have Advantage when resisting the effects of magic."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Talisman of Light",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate light. Can be used to create ghostly illusions, see afar, and blind enemies. You have Advantage on rolls related to seeing."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Talisman of Sound",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate sound. Can be used to project noises, eavesdrop from afar, and shatter eardrums. You have Advantage on rolls related to hearing."
    },
    {
        "Class":"Soldier",
        "Type":"Blademaster",
        "Kit":"Adamantine Gauntlets",
        "Tags":"Gear",
        "Description":"Heavy gauntlets made of a nearly indestructible material. Can be used to grab blades, poisonous spines, molten metal, and other hazards without harm. You have Advantage when grappling or otherwise keeping a tight grip on something. You cannot be disarmed."
    },
    {
        "Class":"Soldier",
        "Type":"Blademaster",
        "Kit":"Dueling Steel",
        "Tags":"Gear, Weapon, Defense, Accurate",
        "Description":"A regulation-length sword for resolving legal disputes. Using this weapon gives you Advantage on rolls to defend against melee attacks until the start of your next turn, and adds +1 to the roll result of your attacks. You have Advantage when provoking others into a duel."
    },
    {
        "Class":"Soldier",
        "Type":"Blademaster",
        "Kit":"Flametongue",
        "Tags":"Gear, Weapon",
        "Description":"A sword of living flame whose length and heat can be controlled. Can be used to weld metal, set objects on fire, and burn enemies. You have Advantage when attacking beasts and other wildlife with this weapon."
    },
    {
        "Class":"Soldier",
        "Type":"Blademaster",
        "Kit":"Sturdy Boots",
        "Tags":"Gear",
        "Description":"A set of boots that provide steady footing in dangerous conditions. You are immune to hazards that impede your movement, such as grease slicks or ice. You have Advantage when reacting to traps. You cannot be knocked down or thrown back."
    },
    {
        "Class":"Soldier",
        "Type":"Blademaster",
        "Kit":"Vorpal Blade",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"An impossibly sharp sword made of liquid metal. Using this weapon allows your attacks to cleanly slice through iron. Successful attacks deal an additional box of damage, and can cause harm in a small area of effect near your primary target."
    },
    {
        "Class":"Soldier",
        "Type":"Blademaster",
        "Kit":"Windcutter",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A curved scimitar that catches the wind and turns it into sharp blades. Using this weapon greatly extends the range of your attacks. You have Advantage when defending against projectile attacks like arrows and bullets."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Agua Regia",
        "Tags":"Alchemy",
        "Description":"A dangerously potent acid that eats through metals with ease. Can be used to break locks, sabotage equipment, and create clouds of poisonous gas. You can expend a Potion to create a poisonous gas bomb that fills the air with thick toxic smoke."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Midnight Oil",
        "Tags":"Alchemy",
        "Description":"A dark oil that absorbs sound and light, muting its surroundings. Can be used to create invisible flames, create sleeping gas, and dampen sound or light. You can expend a Potion to create a knockout grenade that releases sleeping gas into an area, dealing Mental damage."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Mist Rod",
        "Tags":"Gear",
        "Description":"A mechanical tool with an adjustable nozzle that sprays chemicals. When used as a weapon, produces a painful acid wash that causes Physical damage. Can be used with other Alchemy kits."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Vaccuum Space",
        "Tags":"Alchemy",
        "Description":"A jar of carefully prepared void, which emits a strong suction force when opened. Can be used to capture a fog of poisonous gas, put out fires, and propel yourself forward. You can expend a Potion to create an implosion grenade."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Vorpal Glue",
        "Tags":"Alchemy, High Damage",
        "Description":"An unprocessed liquid metal that hardens after exposure to the air. Can be used as an adhesive, as a construction material, and as means of restricting enemy movement. You can expend a Potion to create a spike of Vorpal metal, dealing two boxes of Physical damage and piercing through metal."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Winterbloom Extract",
        "Tags":"Alchemy",
        "Description":"Highly-concentrated extract from the Winterbloom flower. Can be used to freeze large volumes of water, create clouds of fog, and plummet the temperature of objects. You can expend a Potion to create a flash freeze bomb that deals damage and covers an area with a thin sheet of ice."
    },
    {
        "Class":"Advanced",
        "Type":"Conjurer",
        "Kit":"Brimstone Powder",
        "Tags":"Alchemy, High Damage",
        "Description":"An otherworldly dust that conducts and magnifies magical energy. Can be used to set explosive traps, turn fire into waterproof hellfire, and bribe unsavory merchants. You can expend a Potion to create a hellfire grenade that deals two boxes of Physical damage."
    },
    {
        "Class":"Advanced",
        "Type":"Conjurer",
        "Kit":"Fey Venom",
        "Tags":"Alchemy",
        "Description":"A drug that changes the properties of blood. Can be used to stop blood loss, create wounds that bleed incessantly, and treat inflammation. When you produce a Potion, it heals an additional Physical box."
    },
    {
        "Class":"Advanced",
        "Type":"Conjurer",
        "Kit":"Solomon Rod",
        "Tags":"Gear, Weapon",
        "Description":"A metal rod that holds sway over otherworldly creatures. Successful attacks against magical creatures fog their minds and deal an additional box of Mental damage. You have Advantage when influencing magical creatures."
    },
    {
        "Class":"Advanced",
        "Type":"Conjurer",
        "Kit":"Talisman of Demons",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to bring forth demonic influence. Can be used to summon imps, consult devils for knowledge, and fling hellfire. You have Advantage when using Knowledge to recall forbidden information."
    },
    {
        "Class":"Advanced",
        "Type":"Conjurer",
        "Kit":"Talisman of Fey",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to bring forth faerie influence. Can be used to summon will-o-wisps, bewitch the senses, and change your appearance. You have Advantage when using Presence to confuse and bewilder others."
    },
    {
        "Class":"Advanced",
        "Type":"Conjurer",
        "Kit":"Talisman of Jinn",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to bring forth jinn influence. Can be used to summon snakes, call forth desert winds, and see into the past of an object. You have Advantage when using Knowledge to recall history."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Bloody Cutlass",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A sword with a nasty red hue that drinks blood with every strike. Successful attacks deal an additional box of damage. You have Advantage when intimidating others."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Grapple Hook",
        "Tags":"Gear",
        "Description":"A projectile grappling hook, the last resort of unfortunate sky pirates. Can be used to avoid fatal falls, capture fleeing enemies, and make daring entrances. You have Advantage when making quick escapes."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Marauder Flintlock",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A bewitched handgun whose bullets hit like cannon balls. Using this weapon breaks through armor and obstacles with significant force, but requires several minutes to reload. Successful attacks deal an additional box of damage. You have Advantage when using this weapon to destroy objects."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Sticky Fingers",
        "Tags":"Gear",
        "Description":"A set of gloves covered in an odd adhesive. Allows the user to climb any surface with ease and snatch objects with a light touch. You have Advantage when stealing."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Talisman of Sea",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to call on the spirits of the sea. Can be used to shift the flow of currents, breathe underwater, and speak with creatures of the sea. You have Advantage when swimming."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Talisman of Sky",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to call on the spirits of the sky. Can be used to whip up strong winds, find your way when lost, and speak with creatures of the sky. You have Advantage when breaking your falls."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Dragon\u2019s Breath",
        "Tags":"Alchemy",
        "Description":"A draught that lets the user breathe flames like a dragon. Can be used to spit flame at an enemy, blow a cloud of fire, and cover yourself in fire. You are immune to fire while this kit is equipped."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Dragon\u2019s Eyes",
        "Tags":"Alchemy",
        "Description":"A draught that changes the user\u2019s eyes to see like a dragon. Can be used to see heat, see in the dark, and see across great distances."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Dragon\u2019s Scales",
        "Tags":"Alchemy",
        "Description":"A draught that causes the user to grow scales like a dragon. You have Advantage when defending against piercing attacks, like arrows or fangs."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Thunderclap Javelins",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of javelins that release sonic booms when they land. Using this weapon shatters the eardrums of enemies, deafening and disorienting in an area around your main target. You have Advantage when using this weapon against flying targets."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Vorpal Spear",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A spear tipped with vorpal metal, capable of piercing through a dragon\u2019s scales. A length of chain connects the spear to its wielder. Successful attacks deal an additional box of damage. You have Advantage when attacking heavily armored targets."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Winged Boots",
        "Tags":"Alchemy",
        "Description":"A pair of boots charmed to augment the wearer\u2019s jumping abilities. Can be used to leap onto buildings, fall without harm, and kick doors off their hinges."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Athame",
        "Tags":"Gear, Weapon",
        "Description":"A ritual knife used in sacrificial practices. You recover a Mana Point whenever you use a Talisman or this weapon to incapacitate a target."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Blight",
        "Tags":"Alchemy",
        "Description":"A dangerous toxin that corrupts and corrodes living matter. Can be used to spread disease, wither plants, and poison water. You are immune to poisons and diseases while this kit is equipped."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Primal Staff",
        "Tags":"Gear, Weapon",
        "Description":"A staff carved from a lightning-stuck tree. Wielding this weapon gives you Advantage on all rolls to influence or attack wildlife. Natural wildlife will not attack you unless provoked."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Talisman of Beasts",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to take the form of an animal. Can be used to transform into wolves, birds, and other animals. You can speak with and understand wildlife."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Talisman of Storms",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to change the weather. Can be used to summon rain, call down lightning from the sky, and drive howling winds. You have Advantage when using Presence to inspire terror in people."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Talisman of Time",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to gently influence time. Can be used to peer into the past, accelerate decay, and speed the growth of plants. You have Advantage when detecting danger in the immediate future."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Compliant Rod",
        "Tags":"Gear, Weapon, Alchemy",
        "Description":"You have a servant that takes the form of a metal staff. It can shrink to fit in a pocket or grow to ten feet in length. You can expend a Potion to reshape the staff into another weapon, tool, or object."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Dancing Shadow",
        "Tags":"Alchemy, Reaction",
        "Description":"You have a servant made of shadow. The servant resides within your shadow but can move independently and interact with the physical world. It can retrieve lightweight objects and store a small number within itself. You can expend a Potion to have the shadow deflect an incoming attack."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Featherweave",
        "Tags":"Alchemy, Reaction",
        "Description":"You have a servant made from enchanted cloth, capable of resisting gravity to a limited degree. You glide gently to the ground while wearing this kit. When folded into a bag, you can carry heavy objects with ease. You can expend a Potion to turn the Featherweave into a flying carpet, able to carry multiple people for a short time."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Float Glass",
        "Tags":"Gear, Weapon, Alchemy",
        "Description":"You have a servant made of floating glass, able to break apart into sharp shards and reform at will. You can command the servant to slash at enemies nearby. You can expend a Potion to transform it into a grenade, shredding everything in the blast radius before reforming."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Golem",
        "Tags":"Alchemy",
        "Description":"You have a servant made from clay, capable of fighting independently and lifting heavy objects. Equipping this Kit provides one golem. You can expend a Potion to create additional golems."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Shikigami",
        "Tags":"Alchemy",
        "Description":"You have servants made from enchanted paper, capable of flying, spying, and carrying messages.  Equipping this kit provides half a dozen shikigami. You can expend a Potion to create an additional six servants."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Ash Knives",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of cursed throwing knives that prevent alchemical and magical healing. Using this weapon ensures that targets cannot be revived or reanimated. You have Advantage when attacking undead with this weapon."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Mournblade",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A sword with a demon trapped inside. Using this weapon restores a Fortune box whenever it\u2019s used to incapacitate an enemy. Successful attacks deal an additional box of damage. You have Advantage when using this weapon to attack demons and spirits."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Talisman of Fear",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to push terror into the minds of others. Can be used to incite a retreat, paralyze an enemy, and cause seizures. You have Advantage when intimidating others."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Talisman of Siphoning",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to steal energy. Can be used to drain lifeforce from others, tap into the power of an enchanted object, and consume spirits. Restores one Physical box on successful attacks."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Vim Drink",
        "Tags":"Alchemy",
        "Description":"A distant ancestor to the modern alchemist potion. When consumed, the user expends a Mental box in exchange for recovering a Physical box. Can be used by others."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Wither Toxin",
        "Tags":"Alchemy",
        "Description":"A bitter venom that causes intense pain. Can be used to inflict Mental damage, cripple the wills of enemies, or cloud the mind. You have Advantage when interrogating someone for information."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Hand Cannon",
        "Tags":"Gear, Weapon, High Damage, Ranged",
        "Description":"A hefty iron sidearm that packs a punch. Successful attacks deal an additional box of damage."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Magic Bullets",
        "Tags":"Gear",
        "Description":"A collection of enchanted bullets. Includes silver bullets that tear through magic, whiplash bullets that create gusts of wind to disperse smokescreens, and spark bullets that manifest as bolts of lightning."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Quickdraw Pistol",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A handgun built for quick access. If you strike before an enemy, the attack is treated as a sneak attack. You have Advantage when determining who goes first, such as rolling turn order."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Trick Bullets",
        "Tags":"Gear",
        "Description":"A collection of bullets with unusual effects. Includes non-lethal rubber bullets, two-shot bullets that can change trajectory in midflight, and paint bullets that stain skin."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"War Bullets",
        "Tags":"Gear",
        "Description":"A collection of specialized bullets for warfare. Includes steel-tipped bullets for piercing through cover, breaching rounds for opening doors, and flare rounds for signalling."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Warded Greatcoat",
        "Tags":"Gear",
        "Description":"A leather coat that reaches past the knees. Sigils of protection have been stitched into the lining, making the wearer resistant to bullets and blunt trauma. You have Advantage when defending against bludgeoning."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Anointing Oil",
        "Tags":"Gear, Alchemy",
        "Description":"A ritually prepared oil that knights apply before going to battle. Monsters, beasts, and the undead will target you before your allies. You are immune to illusions and curses."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Holy Sword",
        "Tags":"Gear, Weapon",
        "Description":"A blade quenched in holy water. Using this weapon allows your attacks to interfere with magic. You have Advantage when inspiring or rallying others."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Hospitaler Salts",
        "Tags":"Alchemy",
        "Description":"Smelling salts that wake the unconscious. Can be used to revive the unconscious, jolt others out of a trance, and overpower odors. Revived allies clear one box of damage, Physical or Mental, depending on which is necessary."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Inscribed Shield",
        "Tags":"Gear, Weapon, Defense",
        "Description":"A shield warded against hostile magic. Spells rebound from its surface. Using this weapon to attack gives you Advantage on rolls to defend until the start of your next turn. You have Advantage when defending against magical attacks."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Smiting Mace",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"An enchanted warmace that stores kinetic energy. Using this weapon allows your attacks to knock enemies back or into the air with significant force. Successful attacks deal an additional box of damage."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Taunting Scourge",
        "Tags":"Gear, Weapon",
        "Description":"An enchanted metal chain with barbs that bind and restrict enemies. Using this weapon grapples targets in addition to any damage dealt, compelling them to attack the user. You have Advantage when provoking others into attacking you."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Breaching Hammer",
        "Tags":"Gear, Weapon",
        "Description":"A short hammer that sends shockwaves through objects, breaking them apart. Using this weapon bypasses the effects of armor and damages enemy equipment. You have Advantage when destroying objects and obstacles."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Ogre Draught",
        "Tags":"Alchemy",
        "Description":"A dangerous drug that requires training to withstand. While this kit is equipped you are immune to poisons and diseases. You have Advantage against hazards like sweltering heat and bitter cold."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Pocket Wall",
        "Tags":"Alchemy",
        "Description":"A rapidly expanding cement-like substance. Can be used to create shelter, mend cracks, seal doors, or adhere objects to one another. You have Advantage when building or repairing objects with this kit."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Shocklance",
        "Tags":"Gear, Weapon",
        "Description":"A spear whose tip crackles with electricity, causing intense pain on contact. Using this weapon inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when intimidating others."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Vanguard Shield",
        "Tags":"Gear, Weapon, Defense",
        "Description":"A collapsible shield that can unfold from a bracer into a full tower shield. Using this weapon to attack gives you Advantage on rolls to defend until the start of your next turn. You have Advantage when defending others from harm."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Wicked Blade",
        "Tags":"Gear, Weapon, Accurate, Reaction",
        "Description":"A sharp shortsword that seeks out targets. Using this weapon adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage. Enemies that attempt to leave your melee range take one box of Physical damage."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Holy Symbol",
        "Tags":"Gear, Weapon",
        "Description":"An object affiliated with your patron spirits in some way. Using this weapon, attacks with Talismans are especially effective at chastising magical entities. You have Advantage when rolling Magic against other mages or spirits."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Talisman of Abjuration",
        "Tags":"Talisman, Reaction",
        "Description":"A wand or other object that can be used to repel and dispel. Can be used to create barriers, destroy magic, and turn away otherworldly influences. You can expend a Mana Point to deflect an attack aimed at you."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Talisman of Divination",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to petition otherworldly forces for information. Can be used to divine the location of people, places, and things through magical means."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Talisman of Dreaming",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to meddle with the boundary between conscious and unconscious. Can be used to induce sleep, daze enemies, and curse others with night terrors. You have Advantage when using Presence to put others into a stupor."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Talisman of Language",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to speak with and understand all creatures. Can be used to speak with animals, put compulsions on others, and understand otherworldly creatures . You have Advantage when using Presence to command others."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Talisman of Necromancy",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to meddle with the boundary between life and death. Can be used to heal Physical damage, summon ghosts for information, and create undead. The number of Physical boxes healed is equal to the result of the roll."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Shepherd\u2019s Flute",
        "Tags":"Gear",
        "Description":"A ritually crafted flute that has power over simple-minded creatures. Playing the flute can calm wild animals and insects, or stir them into a dangerous frenzy. You can use I Know a Guy to recruit a local beast to aid you. You have Advantage when influencing animals."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Talisman of Life",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to preserve life. Can be used to heal wounds, sense the presence of living things, and detect disturbances in the natural order. The number of Physical boxes healed is equal to the result of the roll. You have Advantage when tracking others."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Talisman of Wood",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate plants. Can be used to accelerate plant growth, command flora, and commune with the spirits of the land. You have Advantage on rolls to interact with plant life."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Tamer\u2019s Whip",
        "Tags":"Gear, Weapon",
        "Description":"An enchanted leather whip that controls beasts. Successful attacks against wildlife deal one box of Mental damage instead of Physical. A beast incapacitated with this weapon will submit to the wielder."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Twin Edges",
        "Tags":"Gear, Weapon, Ranged, Reaction",
        "Description":"A pair of charmed axes that gravitate towards one another. Throwing one axe will cause it to boomerang back towards the other. On a successful defense against a melee attack, you inflict a box of Physical damage to the attacker."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Whisper Bowstring",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A bowstring made of siren\u2019s hair that enchants arrows to \u2018eat sound\u2019, creating small pockets of silence on impact. Using this weapon ensures that an enemy won\u2019t cause a commotion for a brief period of time, in addition to any Physical damage dealt. You have Advantage when trying to move quietly."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Concussive Charges",
        "Tags":"Alchemy",
        "Description":"Explosive bullets that create powerful shockwaves to knock enemies over with instead of dealing Physical damage. You can expend a Potion to create a concussive grenade that deals damage and creates a shockwave."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Grease Charges",
        "Tags":"Alchemy",
        "Description":"Capsule bullets filled with slippery and flammable grease, covering targets instead of dealing Physical damage. You can expend a Potion to create a grease bomb that covers an area with oil."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Iron-Sighted Rifle",
        "Tags":"Gear, Weapon, Accurate, Ranged",
        "Description":"A long-barreled gun used for precision shooting. Using this weapon adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage. You have Advantage when making ranged attacks without any distractions."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Phosphos Charges",
        "Tags":"Alchemy",
        "Description":"Volatile bullets that ignite targets and produce blinding flashes of light. You can expend a Potion to create a flash bomb that blinds enemies, or a fire bomb that causes damage and sets the area ablaze."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Trenchcoat Boomstick",
        "Tags":"Gear, Weapon",
        "Description":"A short-barreled gun used for clearing rooms. Using this weapon allows your ranged attacks to cause harm in a cone area-of-effect immediately in front of you."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Trenchsteel Charges",
        "Tags":"Alchemy",
        "Description":"Loaded bullets that fire twice, changing trajectory in mid-air to shoot around corners or cover. You can expend a Potion to create a ball bearing grenade that deals damage and covers an area with metal balls."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Talisman of Air",
        "Tags":"Talisman, Reaction",
        "Description":"A wand or other object that can be used to manipulate air. Can be used to create ferocious whirlwinds, fall gently from great heights, and rebuff projectiles. You can expend a Mana box to deflect an attack."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Talisman of Earth",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate earth. Can be used to throw jagged spikes from the ground, reshape stone, and send tremors through the earth. You cannot be knocked over while this kit is equipped."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Talisman of Fire",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate fire. Can be used to throw flames, create floating torches, and control raging fires. You cannot be harmed by fire while this kit is equipped."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Talisman of Water",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate water. Can be used to create spears of ice, conjure fog, and purify liquids. You are immune to poison while this kit is equipped."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Totemic Staff",
        "Tags":"Gear, Weapon",
        "Description":"A decorated staff that fosters balance between the elements. Using this weapon, attacks with Talismans become more precise, able to strike groups of enemies without harming nearby allies. You have Advantage when petitioning spirits with Presence."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Vision Powder",
        "Tags":"Alchemy",
        "Description":"A ritually prepared dust that enhances magical senses. Can be used to induce deep trances, avoid the need for sleep, and disperse illusions. You have Advantage on Presence rolls to sense and identify magic."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Mythril Blade",
        "Tags":"Gear, Weapon",
        "Description":"A blade that conducts magic. Using this weapon allow you to use Talismans in conjunction with attacks, empowering strikes with effects related to the Talisman."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Mythril Gauntlets",
        "Tags":"Gear",
        "Description":"A pair of gauntlets that conduct magic. Used to channel Spellsword Talismans outside the body. Can project magic a short distance away, into an object being held, or into a person being touched."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Moon",
        "Tags":"Talisman, Reaction",
        "Description":"A wand or other object that can be used to deflect harm away from your body. Can be used to parry projectiles and other attacks. You can spend a Mana box to avoid harm from incoming attacks. You have Advantage when blocking."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Stars",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to accelerate your body. Can be used to heal yourself and react before others. The number of Physical boxes healed is equal to the result of the roll. You have Advantage when dodging."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Sun",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to radiate heat and light from your body. Can be used to burn off restraints, blind enemies in melee range, and stave off cold. You have Advantage when breaking free of grapples and similar entanglements."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Terra",
        "Tags":"Talisman, High Damage",
        "Description":"A wand or other object that can be used to amplify the force of a blow delivered by your body. Can be used to add a box of Physical damage to a strike, knock enemies back, and break through obstacles."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Abjuring Chain",
        "Tags":"Gear, Weapon",
        "Description":"A metal chainlink whip engraved with warding runes. Using this weapon allows your attacks to interfere with magic. The whip can be joined together to create a magic circle that repels magic from the outside and contains magic within. You have Advantage when attacking mages."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Lantern Spear",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A shaft of steel tipped with enchanted silver that permanently glows. Using this weapon blinds creatures with strong night vision. Successful attacks against magical creatures deal an additional point of damage. You have Advantage when attacking magical creatures."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Sacred Censure",
        "Tags":"Gear",
        "Description":"A brass vessel suspended by a chain, made for burning incense. Can be used to create swirls of white smoke that dampen the effects of magic in an area. Wildlife are repelled by the smell, making it useful for setting up camp in dangerous areas. You have Advantage when defending against magic."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Talisman of Binding",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to restrict and reinforce. Can be used to imprison enemies, to fortify doors, and to seal away magic. You have Advantage when grappling others."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Talisman of Purity",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to purify and sanctify. Can be used to expel poisons, harm magical creatures, and bless objects with the power to ward off spirits. You are immune to curses."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Tolling Bell",
        "Tags":"Gear",
        "Description":"A metal bell whose deep sound sends a feeling of peace through those who hear it. Weak undead in the area are immediately put to rest, while stronger undead take Physical and Mental damage. Can be used to put others to sleep."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Familiar",
        "Tags":"Alchemy",
        "Description":"You have a shapeshifting servant that takes the form of a small animal, such as a crow or cat. You are able to borrow its senses, issue commands to it, and cast spells through it. You can change your familiar\u2019s shape by expending a Mana box."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Talisman of Aether",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate electromagnetic energy. Can be used to shoot lightning, magnetize metals, and control the flow of electricity."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Talisman of Force",
        "Tags":"Talisman, Reaction",
        "Description":"A wand or other object that can be used to manipulate kinetic energy. Can be used to perform telekinesis, lob blasts of kinetic force at enemies, and adjust the speed of moving objects. You can expend a Mana Point to deflect an attack aimed at you."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Talisman of Gravity",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate gravity. Can be used to pull an enemy to the ground, lighten the weight of an object, and adjust gravity."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Talisman of Heat",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate thermal energy. Can be used to ignite enemies, freeze objects, and adjust temperature."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Wizard Staff",
        "Tags":"Gear, Weapon, Accurate",
        "Description":"A staff that leverages alchemical principles to improve the effectiveness of combat magic. Using this weapon adds +1 to attacks with Talismans, significantly improving the chance that they\u2019ll cause harm."
    }
];

  return data;
}