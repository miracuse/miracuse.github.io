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
        "Description":"A set of wax stamps made from an inert material and alchemic paints. Can be used to instantly mark objects with low-power versions of sigils that you have equipped."
    },
    {
        "Class":"Advanced",
        "Type":"Antiquarian",
        "Kit":"Vitriolic Edge",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A dagger that sweats acid, useful for etching stone and similar materials. Using this weapon causes painful acid burns. Successful attacks deal an additional box of Physical damage. Any sigils drawn with this weapon are more powerful than they would be otherwise."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Assassin Thorns",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of transparent needles used to deliver poison. Using this weapon allows you to administer poison in the same action as an attack. You have Advantage when disguising your sneak attacks to avoid notice."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Golden Silk",
        "Tags":"Alchemy",
        "Description":"A collection of hallucinogenic poisons that can be made into a powder. Can be used to induce confusion, render someone highly suggestible, or inflict Mental damage. You have Advantage when lying to others."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Heart Toxins",
        "Tags":"Alchemy, High Damage",
        "Description":"A collection of poisons to speed or slow the heart. Can be used to render someone unconscious or induce cardiac arrest. When applied to a weapon, inflicts an additional box of Physical damage on successful attacks."
    },
    {
        "Class":"Scoundrel",
        "Type":"Assassin",
        "Kit":"Manifold Venom",
        "Tags":"Alchemy",
        "Description":"A collection of poisons that influence the senses. Can be used to make targets numb, cause blindness, or induce intense vertigo. You are immune to poisons."
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
        "Type":"Assassin",
        "Kit":"Talisman of Telepathy",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to communicate silently. Can be used to project psychic messages, sense emotions, and attack the mind. You have Advantage when detecting lies."
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
        "Kit":"Holy Water",
        "Tags":"Alchemy",
        "Description":"A specially treated liquid that negates magic. Can be used to counter spells, damage magical objects, and repel monsters. You have Advantage when resisting the effects of magic."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Juggling Knives",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of throwing knives that can be flicked through the air with ease. Using this weapon allows you to move before and after making an attack, darting outside of melee range or throwing blades while running. You have Advantage when performing acrobatics."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Resonant Steel",
        "Tags":"Gear, Weapon",
        "Description":"A baton that hums like a tuning fork when struck. Using this weapon sends shockwaves through enemies, numbing the hands of those who parry and disarming them. Can also be used to shatter glass or ice at range."
    },
    {
        "Class":"Scoundrel",
        "Type":"Bard",
        "Kit":"Talisman of Light",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate light. Can be used to create ghostly illusions, see from afar, and blind enemies. You have Advantage on rolls related to seeing."
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
        "Class":"Soldier",
        "Type":"Blademaster",
        "Kit":"Windwalking Boots",
        "Tags":"Gear",
        "Description":"A set of boots that hover just above the ground while worn. Can be used to run across water, ignore the effects of bad terrain, and change direction in mid air. You have Advantage when climbing."
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
        "Tags":"Gear, Weapon",
        "Description":"A mechanical tool with a nozzle that sprays chemicals. Can be adjusted to precisely shoot liquids, spray fine mists, or create gases. Gains various effects when used in conjunction with other Alchemy kits."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Vacuum Space",
        "Tags":"Alchemy",
        "Description":"A jar of carefully prepared void, which emits a strong suction force when opened. Can be used to capture a fog of poisonous gas, put out fires, and propel yourself forward. You can expend a Potion to create an implosion grenade."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Vorpal Glue",
        "Tags":"Alchemy",
        "Description":"An unprocessed liquid metal that hardens after exposure to the air. Can be used as an adhesive, as a construction material, and as means of restricting enemy movement. You have Advantage when repairing or building objects with this tool. You can expend a Potion to create a wall of sheet metal."
    },
    {
        "Class":"Alchemist",
        "Type":"Chemist",
        "Kit":"Winterbloom Extract",
        "Tags":"Alchemy",
        "Description":"Highly-concentrated extract from the Winterbloom flower. Can be used to freeze liquids, create clouds of fog, and plummet the temperature of objects. You can expend a Potion to create a flash freeze bomb that deals damage and covers an area with a thin sheet of ice."
    },
    {
        "Class":"Advanced",
        "Type":"Chevalier",
        "Kit":"Bravo\u2019s Charm",
        "Tags":"Alchemy",
        "Description":"An alchemical perfume that draws attention. Can be used to lure monsters, create distractions, and draw the focus of crowds. You have Advantage when making yourself stand out, when rallying others, and when flirting."
    },
    {
        "Class":"Advanced",
        "Type":"Chevalier",
        "Kit":"Cutting Wit",
        "Tags":"Gear, Weapon",
        "Description":"A slender rapier meant for duelling. Using this weapon, you can choose between dealing Physical or Mental damage. You have Advantage when intimidating or provoking others."
    },
    {
        "Class":"Advanced",
        "Type":"Chevalier",
        "Kit":"Honeyed Words",
        "Tags":"Alchemy",
        "Description":"A handful of alchemic candies that diminish pain and induce sleep. Can be used to endure harm, tranquilize unwary guards, and ease suffering. You have Advantage on rolls to resist discomfort, or when bribing others."
    },
    {
        "Class":"Advanced",
        "Type":"Chevalier",
        "Kit":"Lover\u2019s Embrace",
        "Tags":"Gear",
        "Description":"A charmed scarf that can change its properties on command. Can be extended into a length of sturdy rope, used as a whip, or made rigid as steel. You have Advantage when grappling someone with this tool."
    },
    {
        "Class":"Advanced",
        "Type":"Chevalier",
        "Kit":"Sharp Retort",
        "Tags":"Gear, Weapon, Defense, Reaction",
        "Description":"A long dagger held in the off-hand, intended to parry and riposte. Using this weapon to attack gives you Advantage on rolls to defend until the start of your next turn. On a successful defense against a melee attack, you inflict a box of Physical damage to the attacker."
    },
    {
        "Class":"Advanced",
        "Type":"Chevalier",
        "Kit":"Venomous Smile",
        "Tags":"Gear, Weapon, Ranged, High Damage",
        "Description":"A set of throwing knives coated in fey poison. Wounds made with this weapon bleed far more than they should. Successful attacks deal an additional box of Physical damage."
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
        "Description":"A wand or other object that can be used to bring forth jinn influence. Can be used to summon snakes, control sand, and see into the past of an object. You have Advantage when using Knowledge to recall history."
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
        "Description":"A set of gloves covered in an odd adhesive. Can be used to climb any surface with ease, snatch objects with a light touch, and keep a grip on equipment. You have Advantage when stealing or climbing. You cannot be disarmed."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Talisman of Sea",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to call on the spirits of the sea. Can be used to create drinking water, shift water currents, and speak with creatures of the sea. You can breathe underwater."
    },
    {
        "Class":"Advanced",
        "Type":"Corsair",
        "Kit":"Talisman of Sky",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to call on the spirits of the sky. Can be used to whip up strong winds, find your way when lost, and speak with creatures of the sky. You fall at half the speed that someone of your size should."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Dragon\u2019s Breath",
        "Tags":"Alchemy, High Damage",
        "Description":"A draught that lets the user breathe flames like a dragon. Can be used to spit flame at an enemy, blow clouds of smoke, and control the heat of their body. You are immune to fire while this kit is equipped. You can expend a Potion to breathe a large cone of fire that deals two boxes of Physical damage."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Dragon\u2019s Eyes",
        "Tags":"Alchemy",
        "Description":"A draught that changes the user\u2019s eyes to see like a dragon. Can be used to see heat, see in the dark, and see across great distances. You have Advantage on rolls related to eyesight. You can expend a Potion to see the true nature of a person or object."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Dragon\u2019s Scales",
        "Tags":"Alchemy, Reaction",
        "Description":"A draught that causes the user to grow scales, claws, and fangs like a dragon. Can be used to take on a monstrous appearance, climb with sharp claws, and chew through restraints. You have Advantage when defending against slashing and piercing attacks. You can expend a Potion to deflect an attack."
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
        "Tags":"Gear, Weapon, Ranged, High Damage",
        "Description":"A spear tipped with vorpal metal, capable of piercing through a dragon\u2019s scales. A length of chain connects the spear to its wielder, allowing it to be thrown and pulled back. Successful attacks deal an additional box of damage. You have Advantage when attacking heavily armored targets."
    },
    {
        "Class":"Advanced",
        "Type":"Dragon Knight",
        "Kit":"Winged Boots",
        "Tags":"Gear",
        "Description":"A pair of boots charmed to augment the wearer\u2019s jumping abilities. Can be used to leap onto buildings, fall without harm, and kick doors off their hinges. You never take harm from falling, provided you land on your feet."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Athame",
        "Tags":"Gear, Weapon, Resource",
        "Description":"A ritual knife used in sacrificial practices. You recover a Mana Point whenever you use a Talisman or this weapon to incapacitate a target in melee range."
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
        "Description":"A wand or other object that can be used to take the form of an animal. Can be used to transform into wolves, birds, and other natural creatures. You can speak with and understand wildlife."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Talisman of Storms",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to change the weather. Can be used to summon rain, call down lightning from the sky, and drive howling winds. You have Advantage when using Presence to inspire terror."
    },
    {
        "Class":"Advanced",
        "Type":"Druid",
        "Kit":"Talisman of Time",
        "Tags":"Talisman, Reaction",
        "Description":"A wand or other object that can be used to gently influence time. Can be used to peer into the past, accelerate decay, and speed the growth of plants. You can spend a Mana box to avoid attacks by briefly glimpsing the future."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Compliant Rod",
        "Tags":"Gear, Alchemy",
        "Description":"You have a servant that takes the form of a metal staff. It can shrink to fit in a pocket or grow to ten feet in length. You can expend a Potion to lock the staff in place, defying gravity and requiring several hundred pounds of force to move."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Dancing Shadow",
        "Tags":"Alchemy, Reaction",
        "Description":"You have a servant made of shadow. The servant resides within your shadow but can move independently and reach a hand into the physical world. It can retrieve lightweight objects and store a small number within itself. You can expend a Potion to have the shadow deflect an incoming attack."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Featherweave",
        "Tags":"Alchemy",
        "Description":"You have a servant made from enchanted cloth, capable of resisting gravity to a limited degree. You glide gently to the ground while wearing this kit. When folded into a bag, you can carry heavy objects with ease. You can expend a Potion to turn the Featherweave into a flying carpet, able to carry multiple people for a short time."
    },
    {
        "Class":"Alchemist",
        "Type":"Enchanter",
        "Kit":"Float Glass",
        "Tags":"Gear, Weapon, Alchemy",
        "Description":"You have a servant made of floating glass, able to break apart into sharp shards and reform at will. You can command the servant to strike at enemies nearby. You can expend a Potion to transform it into a grenade, shredding everything in the blast radius before reforming."
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
        "Description":"A set of cursed throwing knives that prevent alchemical and magical healing. Using this weapon ensures that targets cannot be revived or reanimated. You have Advantage when attacking undead."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Mournblade",
        "Tags":"Gear, Weapon, High Damage, Resource",
        "Description":"A sword with a demon trapped inside. Using this weapon restores a Fortune box whenever it\u2019s used to incapacitate an enemy. Successful attacks deal an additional box of damage. You have Advantage when using this weapon to attack demons and spirits."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Talisman of Fear",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to push terror into the minds of others. Can be used to incite a retreat, paralyze an enemy, and cause seizures. You have Advantage when intimidating others with Bravery."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Talisman of Siphoning",
        "Tags":"Talisman, Healing",
        "Description":"A wand or other object that can be used to steal energy. Can be used to drain lifeforce from others, tap into the power of an enchanted object, and consume spirits. Restores one Physical box on successful attacks."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Vim Drink",
        "Tags":"Alchemy, Healing",
        "Description":"A distant ancestor to the modern alchemist potion. When consumed, the user expends a Mental box in exchange for recovering a Physical box. Can be used by others."
    },
    {
        "Class":"Advanced",
        "Type":"Fell Knight",
        "Kit":"Wither Toxin",
        "Tags":"Alchemy",
        "Description":"A bitter venom that causes intense pain. Can be used to torture prisoners, cripple the wills of enemies, or cloud the mind. You have Advantage when interrogating someone for information. When applied to a weapon, inflicts an additional box of Mental damage on successful attacks."
    },
    {
        "Class":"Advanced",
        "Type":"Forgemaster",
        "Kit":"Adamantine Shield",
        "Tags":"Gear, Defense",
        "Description":"A heavy shield made of a nearly indestructible material. Can be used as a makeshift anvil. You have Advantage when blocking all Physical forms of attack."
    },
    {
        "Class":"Advanced",
        "Type":"Forgemaster",
        "Kit":"Philosopher Stone",
        "Tags":"Alchemy",
        "Description":"A liquid gem that can change one metal into another. Can be used to transmute strong metals into weak metals and vice versa. The greater the change, the more Knowledge is required to succeed. You can sacrifice this kit to recover two Potion boxes, losing its functionality until the next time you rest."
    },
    {
        "Class":"Advanced",
        "Type":"Forgemaster",
        "Kit":"Runic Warhammer",
        "Tags":"Gear, Weapon",
        "Description":"An enchanted hammer with power over metal. Using this weapon damages and destroys other enchanted objects. Your strikes shatter ordinary metal."
    },
    {
        "Class":"Advanced",
        "Type":"Forgemaster",
        "Kit":"Searing Carbuncle",
        "Tags":"Alchemy",
        "Description":"A ruby that catches light and produces burning beams. Can be used to make precise etchings, start fires, and cut through metals."
    },
    {
        "Class":"Advanced",
        "Type":"Forgemaster",
        "Kit":"Talisman of Fortification",
        "Tags":"Talisman",
        "Description":"A wand or other object that brings out the potential of an object. Can be used to make materials sturdier, sharper, or otherwise stronger. You have Advantage when repairing objects."
    },
    {
        "Class":"Advanced",
        "Type":"Forgemaster",
        "Kit":"Talisman of Metal",
        "Tags":"Talisman",
        "Description":"A wand or other object that manipulates metal. Can be used to reshape metal, magnetize objects, and heat metallic materials. You have Advantage when defending against metal weapons."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Dueling Pistol",
        "Tags":"Gear, Weapon, Ranged, Defense",
        "Description":"A pistol intended for formal duels. Using this weapon gives you Advantage on rolls to defend against ranged attacks until the start of your next turn. You have Advantage when provoking others."
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
        "Kit":"Quickdraw Pistols",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of single-shot pistols built for quick access. If you strike before an enemy, the attack is treated as a sneak attack. You have Advantage when determining who goes first, such as rolling turn order."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Trick Bullets",
        "Tags":"Gear, Accurate",
        "Description":"A collection of bullets with unusual effects. Includes non-lethal rubber bullets, two-shot bullets that can change trajectory in midflight, and paint bullets that stain skin. Attacks with these bullets are especially accurate, adding +1 to rolls."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"War Bullets",
        "Tags":"Gear, High Damage",
        "Description":"A collection of specialized bullets for warfare. Includes steel-tipped bullets for piercing through cover, breaching rounds for opening doors, and flare rounds for signalling. Successful attacks with these bullets do an additional box of Physical damage."
    },
    {
        "Class":"Advanced",
        "Type":"Gunslinger",
        "Kit":"Warded Greatcoat",
        "Tags":"Gear",
        "Description":"A leather jacket imbued with protective magic. You have Advantage when defending against bludgeoning, such as bullets or clubs."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Annointing Oil",
        "Tags":"Alchemy",
        "Description":"A ritual oil that knights don before battle. Can be used to attract monsters, grant immunity to curses, and create holy flames that eat away at magic without harming the body. You have Advantage when defending against magic while this kit is equipped."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Guardian Shield",
        "Tags":"Gear, Reaction, Resource",
        "Description":"A magnetic shield that attracts arrows, bullets, and swords away from allies. When a nearby ally is attacked, you can choose to take damage in their place and gain a Fortune Point for doing so. Damage taken in this way cannot be reduced or avoided."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Holy Sword",
        "Tags":"Gear, Weapon",
        "Description":"A blade quenched in holy water. Using this weapon allows your attacks to destroy magic and repel evil. You have Advantage when destroying magic, inspiring others, or intimidating creatures aligned with dark magic."
    },
    {
        "Class":"Soldier",
        "Type":"Knight",
        "Kit":"Hospitaler Salts",
        "Tags":"Alchemy, Healing",
        "Description":"Smelling salts that wake the unconscious. Can be used to revive allies, jolt others out of a trance, and overpower odors. Revived allies clear one box of damage, Physical or Mental, depending on which is necessary."
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
        "Description":"An enchanted metal chain with barbs that bind and restrict enemies. Using this weapon grapples targets in addition to any damage dealt, keeping them from moving outside of melee range. You have Advantage when provoking others into attacking you."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Flex Pilum",
        "Tags":"Gear, Weapon, Ranged",
        "Description":"A set of thin alchemical javelins with points on both ends. They become much sturdier when a point impacts a target. Using this weapon knocks enemies to the ground. Can be used to create spike traps, small palisades, and similar fortifications."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Legion Pick",
        "Tags":"Gear",
        "Description":"A combination handaxe and hammer made of adamantine. Makes short work of most obstacles. Can be used to collect lumber, destroy walls, and break objects apart with ease. You have Advantage when destroying objects with this tool."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Pocket Wall",
        "Tags":"Alchemy",
        "Description":"A rapidly expanding cement-like substance. Can be used to create shelter, mend cracks, and adhere objects to one another. You have Advantage when building or repairing objects with this kit."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Shocklance",
        "Tags":"Gear, Weapon",
        "Description":"A spear whose tip crackles with electricity, causing intense pain on contact. Using this weapon inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when attacking targets wearing metal armor."
    },
    {
        "Class":"Soldier",
        "Type":"Legionnaire",
        "Kit":"Vanguard Shield",
        "Tags":"Gear, Weapon, Defense",
        "Description":"A collapsible shield that can unfold from a bracer into a large shield with a flick of the wrist. Using this weapon to attack gives you Advantage on rolls to defend until the start of your next turn. You have Advantage when protecting others from harm."
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
        "Tags":"Gear",
        "Description":"A glowing pendant that commands the respect of spirits. Can be used to repulse the undead with divine light and petition powerful spirits for an audience. You have Advantage when negotiating with magical entities."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Judge\u2019s Staff",
        "Tags":"Gear, Weapon",
        "Description":"A symbol of authority, both magical and political. Can be used to declare a contract magically binding and to pass legal judgement. You have Advantage when using Talismans against other mages."
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
        "Description":"A wand or other object that can be used to petition otherworldly forces for information. Can be used to divine the location of people, places, and things through magical means. You have Advantage when identifying magic or magical effects."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Talisman of Dreaming",
        "Tags":"Talisman",
        "Description":"A wand or other object that influences the boundary between conscious and unconscious. Can be used to induce sleep, daze enemies, and curse others with night terrors. You have Advantage when using Presence to put others into a stupor."
    },
    {
        "Class":"Mage",
        "Type":"Priest",
        "Kit":"Talisman of Necromancy",
        "Tags":"Talisman, Healing",
        "Description":"A wand or other object that influences the boundary between life and death. Can be used to heal Physical damage, summon ghosts for information, and create undead. The number of Physical boxes healed is equal to the result of the roll."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Shepherd\u2019s Flute",
        "Tags":"Gear",
        "Description":"A ritually crafted flute that has power over simple-minded creatures. Playing the flute can calm, attract, or enrage wildlife depending on the melody chosen. You can expend a Trick box to recruit a local beast to aid you. You have Advantage when influencing animals."
    },
    {
        "Class":"Scoundrel",
        "Type":"Ranger",
        "Kit":"Talisman of Life",
        "Tags":"Talisman, Healing",
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
        "Description":"An enchanted leather whip that controls beasts. Successful attacks against wildlife deal one box of Mental damage instead of Physical. A beast incapacitated with this weapon will submit to the wielder and follow their commands."
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
        "Description":"A bowstring made of siren hair. Using this weapon creates pockets of silence where arrows land, in addition to any Physical damage dealt. You have Advantage when trying to move quietly."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Concussive Charges",
        "Tags":"Alchemy, High Damage",
        "Description":"Explosive elements that create powerful shockwaves. Can be used to knock enemies over, create loud noises, and destroy obstacles. You can expend a Potion to create a concussive grenade that deals two boxes of Physical damage instead of one."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Element Boomstick",
        "Tags":"Gear, Weapon",
        "Description":"A short-barreled gun used for clearing rooms. Using this weapon allows your ranged attacks to cause harm in a cone area-of-effect immediately in front of you. Can be used with various Alchemy kits to broadly administer effects while attacking."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Element Rifle",
        "Tags":"Gear, Weapon, Accurate, Ranged",
        "Description":"A long-barreled gun used for precision shooting. Using this weapon adds +1 to the roll result of your attacks, significantly improving the chance that they\u2019ll inflict damage. Can be used with various Alchemy kits to precisely administer effects while attacking."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Grease Charges",
        "Tags":"Alchemy",
        "Description":"Chemical elements filled with slippery and flammable grease. Can be used to create oil slicks, increase the intensity of flames, and loosen metal jams. You can expend a Potion to create a grease bomb that covers an area with oil."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Phosphos Charges",
        "Tags":"Alchemy",
        "Description":"Volatile elements that ignite and produce blinding flashes of light. Can be used to start fires, create signal flares, and send messages through flickering light. You can expend a Potion to create a flash bomb that blinds enemies, or a fire bomb that causes damage and sets the area ablaze."
    },
    {
        "Class":"Alchemist",
        "Type":"Sapper",
        "Kit":"Smoke Charges",
        "Tags":"Alchemy",
        "Description":"Powdered elements that create clouds of choking smoke. Can be used to set smokescreens, induce violent coughing, and send smoke signals. You can expend a Potion to create a smoke grenade that blocks line of sight in a wide area."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Spirit Well",
        "Tags":"Gear, Resource",
        "Description":"A gemstone imbued with energy. You have a +1 to Magic rolls using a specific Talisman, chosen when this kit is equipped. You can sacrifice this kit to recover two Mana Points, but lose the +1 benefit until your next rest."
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
        "Description":"A wand or other object that can be used to manipulate earth. Can be used to throw jagged spikes from the ground, reshape stone, and send tremors through the earth. You cannot be knocked over or otherwise forcibly moved while this kit is equipped."
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
        "Description":"A wand or other object that can be used to manipulate water. Can be used to create spears of ice, conjure fog, and purify liquids. You have Advantage when using detecting nearby magic."
    },
    {
        "Class":"Mage",
        "Type":"Shaman",
        "Kit":"Warmage Staff",
        "Tags":"Gear, Weapon, High Damage",
        "Description":"A sharpened staff that doubles as a spear. Using this weapon, even basic attacks with Talismans deal an additional box of Physical damage when successful."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Mythril Blade",
        "Tags":"Gear, Weapon",
        "Description":"A blade that conducts magic. Using this weapon allows you to apply the effects of an equipped Talisman in conjunction with an attack."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Mythril Gauntlets",
        "Tags":"Gear",
        "Description":"A pair of gauntlets that conduct magic. Can be used to channel the power of an equipped Talisman into your hands, into an object being touched, or into a person being touched."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Moon",
        "Tags":"Talisman, Reaction",
        "Description":"A wand or other object that can be used to deflect harm away from your body. Can be used to create protective barriers around yourself. You can spend a Mana box to avoid harm from incoming attacks. You have Advantage when blocking."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Stars",
        "Tags":"Talisman, Healing",
        "Description":"A wand or other object that can be used to accelerate your body. Can be used to heal yourself and quicken your reactions. The number of Physical boxes healed is equal to the result of the roll. You have Advantage when dodging."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Sun",
        "Tags":"Talisman, Reaction",
        "Description":"A wand or other object that can be used to radiate heat and light from your body. Can be used to burn off restraints, blind nearby enemies, and stave off cold. On a successful defense against a melee attack, you inflict a box of Physical damage to the attacker."
    },
    {
        "Class":"Advanced",
        "Type":"Spellsword",
        "Kit":"Talisman of Terra",
        "Tags":"Talisman, High Damage",
        "Description":"A wand or other object that can be used to amplify the force of a blow delivered by your body. Can be used to add a box of Physical damage to a strike, knock enemies back, and jump great heights."
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
        "Description":"A shaft of steel tipped with enchanted silver that permanently glows with searing heat. Successful attacks deal an additional point of damage. You have Advantage when attacking magical creatures."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Sacred Censure",
        "Tags":"Gear",
        "Description":"A brass vessel suspended by a chain, made for burning incense. Can be used to dampen magic in an area, repel wildlife, and ward away evil. You have Advantage when defending against magic."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Talisman of Binding",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to restrict and reinforce. Can be used to imprison enemies, to fortify objects against damage, and to seal away magic. You have Advantage when grappling others."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Talisman of Purification",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to purify and sanctify. Can be used to expel corruption, harm magical creatures, and bless objects with the power to ward off spirits. You are immune to curses, poisons, and disease."
    },
    {
        "Class":"Advanced",
        "Type":"Templar",
        "Kit":"Tolling Bell",
        "Tags":"Gear",
        "Description":"A metal bell whose deep sound sends a feeling of peace through those who hear it. Can be used to destroy weak undead, lull others to sleep, and scare away wildlife. You do not need to sleep while this kit is equipped, and cannot be put to sleep against your will."
    },
    {
        "Class":"Advanced",
        "Type":"Witch",
        "Kit":"Byrd",
        "Tags":"Gear",
        "Description":"An intelligent bird spirit, usually a crow or raven, that serves you. It can speak, deliver messages, and warn you of nearby threats. If destroyed, you can call it back into the world with a bird feather. You have Advantage when noticing danger."
    },
    {
        "Class":"Advanced",
        "Type":"Witch",
        "Kit":"Flying Broom",
        "Tags":"Gear, Defense",
        "Description":"An enchanted staff built using the same principles as airships. Can be used to fly through the air with ease and at high speeds. You have Advantage when dodging attacks while on the broom."
    },
    {
        "Class":"Advanced",
        "Type":"Witch",
        "Kit":"Slowing Thorns",
        "Tags":"Gear, Weapon",
        "Description":"A set of needles tipped with slowing poison. Using this weapon reduces a target\u2019s ability to react quickly, think clearly, and pursue. You have Advantage when attempting to escape or flee."
    },
    {
        "Class":"Advanced",
        "Type":"Witch",
        "Kit":"Talisman of Heart",
        "Tags":"Talisman",
        "Description":"A wand or other object that influences positive emotions. Can be used to calm others, improve moods, and dimish hostilities. When you fail to influence someone with Presence, they do not become hostile."
    },
    {
        "Class":"Advanced",
        "Type":"Witch",
        "Kit":"Talisman of Restoration",
        "Tags":"Talisman, Healing",
        "Description":"A wand or other object that mends that which is broken. Can be used to fix damaged objects, repair enchanted items, and heal wounds. You have Advantage when repairing objects. The number of Physical boxes healed is equal to the result of the roll."
    },
    {
        "Class":"Advanced",
        "Type":"Witch",
        "Kit":"Willow Perfume",
        "Tags":"Alchemy",
        "Description":"A bottle of alchemic perfume that fogs minds. Can be used to erase recent memories, lower someone\u2019s guard, and become less noticable. You have Advantage when using Presence to hypnotize or charm others."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Talisman of Aether",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate electromagnetic energy. Can be used to shoot lightning, magnetize metals, and control the flow of electricity. You are immune to harm from lightning."
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
        "Description":"A wand or other object that can be used to manipulate gravity. Can be used to pull an enemy to the ground, lighten the weight of an object, and adjust gravity. You cannot be harmed from falling."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Talisman of Heat",
        "Tags":"Talisman",
        "Description":"A wand or other object that can be used to manipulate thermal energy. Can be used to ignite enemies, freeze objects, and adjust temperature. You cannot be harmed by thermal effects like heat stroke or hypothermia, but are still vulnerable to fire, ice, and other elemental attacks."
    },
    {
        "Class":"Mage",
        "Type":"Wizard",
        "Kit":"Transmutation Rod",
        "Tags":"Gear, Resource",
        "Description":"An enchanted rod that can gather and store energy. When expend a Mana box to freeze, slow, or otherwise greatly reduce the energy of a target, you can store the excess energy in this rod as a temporary Mana box. A maximum of one Mana box can be held in the rod at any given time."
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