// Globals //////////////////////////////////////////////////////////
const kt_vals = [1, 2, 3, 4];
const class_skill_mapping = {
  Alchemist: {
    perception: 2,
    knowledge: 2,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    Presence: 0,
    cunning: 0,
    agility: 0,
  },
  Soldier: {
    perception: 0,
    knowledge: 0,
    Strength: 2,
    bravery: 2,
    Magic: 0,
    Presence: 0,
    cunning: 0,
    agility: 0,
  },
  Mage: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 2,
    Presence: 2,
    cunning: 0,
    agility: 0,
  },
  Scoundrel: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    Presence: 0,
    cunning: 2,
    agility: 2,
  },
  Hybrid: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    Presence: 0,
    cunning: 0,
    agility: 0,
  },
};
const skill_holder_ids = [
  "perception_value",
  "knowledge_value",
  "Strength_value",
  "bravery_value",
  "Magic_value",
  "Presence_value",
  "cunning_value",
  "agility_value",
];
const skill_health_mappings = {
  physical_health_track: "Strength",
  mental_health_track: "Presence",
  fortune_point_track: "bravery",
  prep_point_track: "cunning",
  kit_uses_01: "knowledge",
  kit_uses_02: "knowledge",
  kit_uses_03: "knowledge",
  kit_uses_04: "knowledge",
};

const skill_color_mapping = {
  perception: "#268bd2",
  knowledge: "#268bd2",
  Strength: "#d28445",
  bravery: "#d28445",
  Magic: "#953553",
  Presence: "#953553",
  cunning: "#90a959",
  agility: "#90a959",
};

let class_selector = document.getElementById("class_select");
let hybrid_kit_type_selectors = [
  document.getElementById("hybrid_kit_type_01"),
  document.getElementById("hybrid_kit_type_02"),
];
let kit_type_selectors = [
  document.getElementById("kit_type_01"),
  document.getElementById("kit_type_02"),
  document.getElementById("kit_type_03"),
  document.getElementById("kit_type_04"),
];
let kit_selectors = [
  document.getElementById("kit_01"),
  document.getElementById("kit_02"),
  document.getElementById("kit_03"),
  document.getElementById("kit_04"),
];
let kit_description_selectors = [
  document.getElementById("kit_description_01"),
  document.getElementById("kit_description_02"),
  document.getElementById("kit_description_03"),
  document.getElementById("kit_description_04"),
];
let skill_selectors = [
  document.getElementById("knowledge_value"),
  document.getElementById("perception_value"),
  document.getElementById("Strength_value"),
  document.getElementById("bravery_value"),
  document.getElementById("Magic_value"),
  document.getElementById("Presence_value"),
  document.getElementById("agility_value"),
  document.getElementById("cunning_value"),
];

// Load Data ////////////////////////////////////////////////////////
var data = [
  {
    Class: "Alchemist",
    Type: "Chemist",
    Kit: "Basilisk’s Tongue",
    Tags: "Exploration, Alchemy, Substance, Grenade",
    Description:
      "Reshape stone and metal by rubbing an ointment into them. Possible applications might include creating a shelter in rock, opening an entry to a brick building, or bending metal bars. Can be used as a grenade to turn areas of solid dirt or rock into quicksand.",
  },
  {
    Class: "Alchemist",
    Type: "Chemist",
    Kit: "Beast’s Blood",
    Tags: "Exploration, Alchemy, Potion",
    Description:
      "Adopt an animal-like adaption for a short period of time by drinking a potion. Example of effects could include a cat’s night vision, a bat’s sense of hearing, or a gecko’s skin.",
  },
  {
    Class: "Alchemist",
    Type: "Chemist",
    Kit: "Elixir",
    Tags: "Recovery, Alchemy, Potion",
    Description:
      "Recover from harm and illness by drinking a potion. This can include recovering Physical damage, recovering Mental damage, treating an Injury, or curing various natural afflictions.",
  },
  {
    Class: "Alchemist",
    Type: "Chemist",
    Kit: "Faerie Fire",
    Tags: "Combat, Exploration, Alchemy, Substance, Grenade",
    Description:
      "Cause burning pain and violent coughing by throwing a highly volatile dust. Capable of creating dazzling fireworks displays, conducting electricity, and producing abundant colorful smoke. Can be used as a grenade to inflict Physical damage.",
  },
  {
    Class: "Alchemist",
    Type: "Chemist",
    Kit: "Holy Water",
    Tags: "Exploration, Alchemy, Substance, Grenade",
    Description:
      "Neutralize magic by spraying specially treated water. Can be used to negate spells, ward away monsters, create light, or produce anti-magic effects. Can be used as a grenade to dampen magical effects over a wide area.",
  },
  {
    Class: "Alchemist",
    Type: "Chemist",
    Kit: "Manifold Venom",
    Tags: "Exploration, Alchemy, Substance",
    Description:
      "Cause additional harm by applying poisons to weapons and ammunition. Example of effects could include additional Physical damage, temporary blindness, or gradual petrification.",
  },
  {
    Class: "Alchemist",
    Type: "Enchanter",
    Kit: "Clay Homunculus",
    Tags: "Combat, Exploration, Alchemy, Tool",
    Description:
      "Create a clay golem from mud or dirt. The golem is roughly three feet tall, will follow your orders, and is capable of fighting on your behalf. It will fall apart one hour after its creation.",
  },
  {
    Class: "Alchemist",
    Type: "Enchanter",
    Kit: "Cloth Homunculus",
    Tags: "Exploration, Alchemy, Tool",
    Description:
      "Create a bag that reduces the weight of its contents, and is bigger on the inside than the outside. Without expending any of this Kit’s uses, a few reasonably sized objects that are each under 50 lbs. can be placed within, becoming weightless. You can expend a use to place larger objects weighing up to 300 lbs. into the bag. The bag remains active so long as this Kit is equipped.",
  },
  {
    Class: "Alchemist",
    Type: "Enchanter",
    Kit: "Paper Homunculus",
    Tags: "Exploration, Social, Alchemy, Tool",
    Description:
      "Create a shikigami, a flying talisman made of paper. The talisman can carry messages, eavesdrop, and scout. It has Cunning equal to half your Knowledge rounded down. The talisman will fall apart one hour after its creation.",
  },
  {
    Class: "Alchemist",
    Type: "Enchanter",
    Kit: "Quicksilver Homunculus",
    Tags: "Exploration, Alchemy, Tool",
    Description:
      "Create a shapeshifting metal familiar, generally worn as a bracelet when not in use. Without expending any of this Kit’s uses, the familiar can change into simple metal objects like tools and weapons. The creator can expend a use to perform more complex or fast-paced transformations. Examples might include a shield to deflect an incoming attack, a musical instrument, or a bear trap. The familiar remains active so long as this Kit is equipped.",
  },
  {
    Class: "Alchemist",
    Type: "Enchanter",
    Kit: "Spirit of Animation",
    Tags: "Magic, Alchemy, Tool",
    Description:
      "Awaken and imbue with purpose. Used to compel objects to move with a life of their own. You can spend this Kit’s uses to use Knowledge or Perception when using this spirit.",
  },
  {
    Class: "Alchemist",
    Type: "Enchanter",
    Kit: "Spirit of Transmutation",
    Tags: "Magic, Alchemy, Tool",
    Description:
      "Transform and alter. Used to change the properties of a substance, such as shape and weight. The greater the difference from the original, the more difficult the change. You can spend this Kit’s uses to use Knowledge or Perception when using this spirit.",
  },
  {
    Class: "Alchemist",
    Type: "Sapper",
    Kit: "Concussive Charges",
    Tags: "Combat, Alchemy, Grenade, Bullet",
    Description:
      "Grenade that is especially destructive, dealing two boxes of Physical damage and damaging the surrounding area. When used as a bullet, deals two boxes of Physical damage and pierces through obstacles.",
  },
  {
    Class: "Alchemist",
    Type: "Sapper",
    Kit: "Electromagnetic Charges",
    Tags: "Combat, Alchemy, Grenade, Bullet",
    Description:
      "Grenade that covers an area with crackling electricity, or magnetizes an area, forcing metal objects in the vicinity to adhere to one another. When used as a bullet, deals two boxes of Physical damage and one of the grenade effects.",
  },
  {
    Class: "Alchemist",
    Type: "Sapper",
    Kit: "Friction Charges",
    Tags: "Combat, Alchemy, Grenade, Bullet",
    Description:
      "Grenade that covers an area with a grease slick, or a quick-drying adhesive. When used as a bullet, deals two boxes of Physical damage and one of the grenade effects.",
  },
  {
    Class: "Alchemist",
    Type: "Sapper",
    Kit: "Thermic Charges",
    Tags: "Combat, Alchemy, Grenade, Bullet",
    Description:
      "Grenade that covers an area with roaring flames, or a layer of ice. When used as a bullet, deals two boxes of Physical damage and one of the grenade effects.",
  },
  {
    Class: "Alchemist",
    Type: "Sapper",
    Kit: "Trenchsteel Charges",
    Tags: "Combat, Alchemy, Grenade, Bullet",
    Description:
      "Grenade that covers an area with metal ball bearings, or a sprawl of barbed wire. When used as a bullet, can change course mid-flight by detonating a second time and ricochets in closed spaces.",
  },
  {
    Class: "Alchemist",
    Type: "Sapper",
    Kit: "Vapor Charges",
    Tags: "Combat, Alchemy, Grenade, Bullet",
    Description:
      "Grenade that covers an area in tear gas, or a billowing cloud of fog. When used as a bullet, can instantly rust through most metals.",
  },
  {
    Class: "Mage",
    Type: "Priest",
    Kit: "Spirit of Abjuration",
    Tags: "Combat, Magic",
    Description: "Seal and purify. Used to create barriers and dispel magic.",
  },
  {
    Class: "Mage",
    Type: "Priest",
    Kit: "Spirit of Divination",
    Tags: "Exploration, Magic",
    Description:
      "Seek and learn. Used to scry for hidden things and reveal new information.",
  },
  {
    Class: "Mage",
    Type: "Priest",
    Kit: "Spirit of Language",
    Tags: "Social, Magic",
    Description:
      "Speak and understand. Used to commune with all creatures and compel others to your will.",
  },
  {
    Class: "Mage",
    Type: "Priest",
    Kit: "Spirit of Necromancy",
    Tags: "Combat, Exploration, Magic",
    Description:
      "Corrupt and wrong. Used to raise the dead and curse the living.",
  },
  {
    Class: "Mage",
    Type: "Priest",
    Kit: "Spirit of Restoration",
    Tags: "Recovery, Magic",
    Description:
      "Restore and repair. Used to heal wounds and mend broken objects.",
  },
  {
    Class: "Mage",
    Type: "Priest",
    Kit: "Spirit of Summoning",
    Tags: "Exploration, Magic",
    Description:
      "Petition and conjure. Used to pull otherworldly influences into the mortal realm.",
  },
  {
    Class: "Mage",
    Type: "Shaman",
    Kit: "Spirit of Aether",
    Tags: "Combat, Exploration, Magic",
    Description: "Allows for control and limited manifestation of electricity.",
  },
  {
    Class: "Mage",
    Type: "Shaman",
    Kit: "Spirit of Air",
    Tags: "Combat, Exploration, Magic",
    Description: "Allows for control and limited manifestation of air.",
  },
  {
    Class: "Mage",
    Type: "Shaman",
    Kit: "Spirit of Earth",
    Tags: "Combat, Exploration, Magic",
    Description: "Allows for control and limited manifestation of earth.",
  },
  {
    Class: "Mage",
    Type: "Shaman",
    Kit: "Spirit of Flame",
    Tags: "Combat, Exploration, Magic",
    Description: "Allows for control and limited manifestation of flame.",
  },
  {
    Class: "Mage",
    Type: "Shaman",
    Kit: "Spirit of Metal",
    Tags: "Combat, Exploration, Magic",
    Description:
      "Allows for control and limited manifestation of metal and magnetism.",
  },
  {
    Class: "Mage",
    Type: "Shaman",
    Kit: "Spirit of Water",
    Tags: "Combat, Exploration, Magic",
    Description: "Allows for control and limited manifestation of water.",
  },
  {
    Class: "Mage",
    Type: "Wizard",
    Kit: "Spirit of Binding",
    Tags: "Exploration, Magic",
    Description:
      "Adhere and restrain. Used to lash things together with gravitational force.",
  },
  {
    Class: "Mage",
    Type: "Wizard",
    Kit: "Spirit of Entropy",
    Tags: "Combat, Exploration, Magic",
    Description:
      "Diminish and dissolve. Used to unravel targets into their base elements.",
  },
  {
    Class: "Mage",
    Type: "Wizard",
    Kit: "Spirit of Force",
    Tags: "Combat, Exploration, Magic",
    Description:
      "Channel raw magical energy. Used to lob bolts of force at enemies, or otherwise manipulate energy.",
  },
  {
    Class: "Mage",
    Type: "Wizard",
    Kit: "Spirit of Locomotion",
    Tags: "Exploration, Magic",
    Description:
      "Accelerate and slow. Used to manipulate kinetic energy, adding or taking away speed.",
  },
  {
    Class: "Mage",
    Type: "Wizard",
    Kit: "Spirit of Reinforcement",
    Tags: "Exploration, Magic",
    Description:
      "Fortify and empower. Used to improve existing qualities, such as making someone stronger or faster.",
  },
  {
    Class: "Mage",
    Type: "Wizard",
    Kit: "Spirit of Thermos",
    Tags: "Combat, Exploration, Magic",
    Description:
      "Heat and cool. Used to manipulate thermal energy, adding or taking away temperature.",
  },
  {
    Class: "Scoundrel",
    Type: "Assassin",
    Kit: "Assassinate",
    Tags: "Combat, Stealth",
    Description:
      'Your sneak attacks deal an additional box of Physical damage. You can use "Assume a Disguise" to disappear from sight, taking an action to do so if done in combat. You can tell if a target will be incapacitated by your sneak attack before you make it.',
  },
  {
    Class: "Scoundrel",
    Type: "Assassin",
    Kit: "Convincing Fake",
    Tags: "Exploration, Social, Health",
    Description:
      "Choose a Skill you have no points in, and raise it to half the level of your highest Skill (rounded down). You can spend a Prep Point to change the chosen Skill, provided you have a few minutes to concentrate. You can use “Assume a Disguise” without spending Prep Points.",
  },
  {
    Class: "Scoundrel",
    Type: "Assassin",
    Kit: "Infiltration Team",
    Tags: "Social, Stealth",
    Description:
      'Nearby allies can use your Cunning when moving in stealth. When you use "Assume a Disguise", you can provide disguises to your allies as well. When you or an ally would otherwise be revealed, you can spend a Prep Point to prevent it.',
  },
  {
    Class: "Scoundrel",
    Type: "Assassin",
    Kit: "Iocane Powder",
    Tags: "Combat, Social, Stealth",
    Description:
      'Your sneak attacks can put targets to sleep and cause short-term memory loss. You can use "What You Needed" to produce a vial of liquid that makes those who drink it highly suggestible. Those under the effects of the liquid will speak truthfully, but are visibly drugged, and slow to react.',
  },
  {
    Class: "Scoundrel",
    Type: "Assassin",
    Kit: "Pin Down",
    Tags: "Combat, Technique",
    Description:
      "Your attacks reduce an enemy’s movement, cutting off their ability to escape or pursue. Using this technique greatly reduces a target’s mobility, in addition to any Physical damage dealt.  You can expend a Prep Point to amplify this technique or combine this with another.",
  },
  {
    Class: "Scoundrel",
    Type: "Assassin",
    Kit: "Spirit of Shadow",
    Tags: "Magic, Stealth",
    Description:
      "Obscure and muffle. Used to manipulate darkness and quiet footsteps. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
  },
  {
    Class: "Scoundrel",
    Type: "Bard",
    Kit: "Charm Arcana",
    Tags: "Social",
    Description:
      'You can use Cunning as though it were Presence, Bravery, or Knowledge for social purposes. You can spend a Prep Point to reroll a social action and take the new result, a maximum of one time per social action. You can use "I Know a Guy" without spending Prep Points.',
  },
  {
    Class: "Scoundrel",
    Type: "Bard",
    Kit: "Lore Arcana",
    Tags: "Combat, Exploration",
    Description:
      'You can use Cunning or Agility to detect and identify magic. You can use "What You Needed" to produce an item that briefly channels or negates magic you\'ve identified. You can use Cunning or Agility when recalling information about history, religion, magic, or politics.',
  },
  {
    Class: "Scoundrel",
    Type: "Bard",
    Kit: "Resilience Arcana",
    Tags: "Health, Exploration, Recovery",
    Description:
      "Gain an additional Physical box. You can exchange Mental boxes for Prep Points and vice versa, and can do so as an action while in combat. You do not need to sleep, and cannot be rendered unconscious against your will, but can be incapacitated in other ways.",
  },
  {
    Class: "Scoundrel",
    Type: "Bard",
    Kit: "Spirit of Light",
    Tags: "Exploration, Magic",
    Description:
      "Brighten and bend light. Used to create and manipulate illusory images, as well as to see afar. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
  },
  {
    Class: "Scoundrel",
    Type: "Bard",
    Kit: "Spirit of Sound",
    Tags: "Exploration, Magic",
    Description:
      "Amplify and distort. Used to create and manipulate sound, as well as to listen in from a distance. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
  },
  {
    Class: "Scoundrel",
    Type: "Bard",
    Kit: "War Arcana",
    Tags: "Combat, Technique",
    Description:
      "Your fighting style resembles dancing, making you particularly mobile. Using this technique allows you to move before and after making an attack. You can spend a Prep Point to take an additional action on your turn, besides another attack. You can expend a Prep Point to combine this technique with another.",
  },
  {
    Class: "Scoundrel",
    Type: "Ranger",
    Kit: "Camouflage",
    Tags: "Combat, Exploration, Stealth",
    Description:
      'Your sneak attacks do not reveal your position or break stealth, though they may alert enemies to your presence. You can use "Assume a Disguise" to take on the appearance of terrain or common objects, such as trees or crates. When using stealth passively you are nearly impossible to notice, even by perceptive guards and sentries.',
  },
  {
    Class: "Scoundrel",
    Type: "Ranger",
    Kit: "Herbalism",
    Tags: "Recovery",
    Description:
      "You can use “What You Needed” to produce teas and poultices, capable of recovering Physical or Mental boxes outside of combat.",
  },
  {
    Class: "Scoundrel",
    Type: "Ranger",
    Kit: "Prepared",
    Tags: "Exploration, Health",
    Description:
      "Gain an additional two Prep Points. When you use a Prep Point to change Kits, you can change two Kits instead of one.",
  },
  {
    Class: "Scoundrel",
    Type: "Ranger",
    Kit: "Sharpshooter",
    Tags: "Combat, Technique",
    Description:
      "Your attacks are inhumanly precise. Using this technique lowers the difficulty of making targeted attacks, such as disarming an enemy by striking their hand or blinding an enemy by striking their eyes. You have Advantage when making ranged attacks without any distractions. You can expend a Prep Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Scoundrel",
    Type: "Ranger",
    Kit: "Spirit of Wood",
    Tags: "Combat, Exploration, Magic",
    Description:
      "Allows for control and limited manifestation of plants. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
  },
  {
    Class: "Scoundrel",
    Type: "Ranger",
    Kit: "Tamer",
    Tags: "Combat, Exploration, Social",
    Description:
      'You can speak with and understand beasts. You can use "I Know a Guy" to recruit a local beast to aid you. The beast can track, fight, and is capable of anything that a creature of its kind might otherwise do. The beast will follow your orders, but will prioritize its own survival. Only one beast can be recruited at a time.',
  },
  {
    Class: "Soldier",
    Type: "Fencer",
    Kit: "Harass",
    Tags: "Combat, Social, Technique",
    Description:
      "Your attacks taunt and frustrate targets in addition to dealing damage. Using this technique inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when using Bravery to provoke others outside of combat. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Fencer",
    Kit: "Inner Flame",
    Tags: "Health, Recovery",
    Description:
      "At any time when you would otherwise spend a Fortune Point, you can spend a Physical box instead. When you recover Physical or Mental boxes, you recover one more than you would otherwise.",
  },
  {
    Class: "Soldier",
    Type: "Fencer",
    Kit: "Quickdraw",
    Tags: "Combat, Stealth, Technique",
    Description:
      "Your attacks are swift and silent, preventing targets from crying out when struck or otherwise making noise. Using this technique ensures that an enemy won’t cause a commotion for a brief period of time, in addition to any Physical damage dealt. You can expend a Fortune Point to attack before someone else acts. If done in combat, moves your turn in front of the target’s, and cannot be used again until your next turn is complete. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Fencer",
    Kit: "Spellbreak",
    Tags: "Combat, Exploration, Technique",
    Description:
      "Your attacks interfere with magical energies. Using this technique allows your attacks to destroy spells and spirits. You have Advantage when defending against magical attacks. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Fencer",
    Kit: "Subvert",
    Tags: "Combat, Technique",
    Description:
      "Your attacks put targets off-balance. Using this technique delays an enemy’s turn on successful attacks, in addition to any Physical damage dealt. On a successful defense against a melee attack, you inflict a point of Physical damage on the attacker. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Fencer",
    Kit: "Wind Strike",
    Tags: "Combat, Technique",
    Description:
      "Your melee attacks create blades of cutting wind, while your ranged attacks are propelled by gusts. Using this technique greatly extends the range of your attacks. You have Advantage when defending against ranged attacks. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Knight",
    Kit: "Guardian",
    Tags: "Combat, Exploration",
    Description:
      "When an ally would otherwise take damage, you can spend a Fortune Point to negate it, so long as you are able to provide a narrative justification for how you do so. You can use Strength or Bravery to detect danger.",
  },
  {
    Class: "Soldier",
    Type: "Knight",
    Kit: "Hospitaler",
    Tags: "Combat, Exploration, Recovery",
    Description:
      "You can spend a Fortune Point to revive an incapacitated ally, restoring one box of either of their damage tracks and taking your action to do so if done in combat. You can use Strength or Bravery to perform medical tasks outside of combat, giving you the ability to heal others and treat injuries.",
  },
  {
    Class: "Soldier",
    Type: "Knight",
    Kit: "Impose",
    Tags: "Combat, Social",
    Description:
      "When you successfully intimidate a group of enemies, they take a box of Mental damage in addition to any other effects that intimidation may have. You have Advantage when using Bravery to intimidate others outside of combat.",
  },
  {
    Class: "Soldier",
    Type: "Knight",
    Kit: "Iron Will",
    Tags: "Health, Recovery",
    Description:
      "Gain an additional Mental box. You can convert a Fortune Point into a Mental box or vice versa, and can do so as an action while in combat. You are immune to Mental damage from exhaustion, fear, or similar effects.",
  },
  {
    Class: "Soldier",
    Type: "Knight",
    Kit: "Rally",
    Tags: "Combat, Social, Technique",
    Description:
      "Using this technique provides Advantage to one nearby ally on their next roll in combat when you make a successful attack, in addition to dealing Physical damage to an enemy. You have Advantage when using Bravery to inspire or rally others outside of combat. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Knight",
    Kit: "Smite",
    Tags: "Combat, Technique",
    Description:
      "Your attacks strike with enough force to knock targets back or topple them over. Using this technique allows your attacks to forcibly reposition enemies, in addition to any Physical damage dealt. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Myrmidon",
    Kit: "Cleave",
    Tags: "Combat, Technique",
    Description:
      "Your attacks are especially destructive, hitting enemies and objects adjacent to your target. Using this technique allows your attacks to inflict Physical damage in an area of effect. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
  {
    Class: "Soldier",
    Type: "Myrmidon",
    Kit: "Gambler’s Fallacy",
    Tags: "Exploration, Recovery",
    Description:
      "Treat a roll of 1 as a +0 instead of a -2. You recover a Fortune Point when you roll a 1 in combat.",
  },
  {
    Class: "Soldier",
    Type: "Myrmidon",
    Kit: "Iron Blood",
    Tags: "Combat, Exploration",
    Description:
      "Take Advantage against environmental hazards, traps, and area of effect attacks. You are immune to poisons, diseases, and similar afflictions.",
  },
  {
    Class: "Soldier",
    Type: "Myrmidon",
    Kit: "Lucky",
    Tags: "Health, Recovery",
    Description:
      "Gain an additional two Fortune Points. When a roll for luck is called for, it always goes in your favor.",
  },
  {
    Class: "Soldier",
    Type: "Myrmidon",
    Kit: "Spirit of Chance",
    Tags: "Exploration, Magic",
    Description:
      "Manipulate probability and tweak the odds. Used to alter the likelihood of events. You can spend a Fortune Point to use Physique or Bravery instead of Aura when using this spirit.",
  },
  {
    Class: "Soldier",
    Type: "Myrmidon",
    Kit: "Sunder",
    Tags: "Combat, Exploration, Technique",
    Description:
      "Your attacks are brutally effective, causing great harm and striking through armor. Using this technique allows your attacks to deal an additional box of Physical damage, on top of any Physical damage that would otherwise be dealt. You can expend a Fortune Point on a successful attack to make it capable of destroying obstacles, breaking through even metal and stone. You can expend a Fortune Point to combine this technique with another, or amplify its effects.",
  },
];

// Track Page State /////////////////////////////////////////////////
// Initialize defaults
var page_state = {
  class: "",
  kit_types: [""],
  selected_hybrid_kit_types: ["", ""],
  selected_kit_types: ["", "", "", ""],
  selected_kits: ["", "", "", ""],
  selected_kit_descriptions: ["", "", "", ""],
  skills: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    Presence: 0,
    cunning: 0,
    agility: 0,
  },
};

// Helper Functions (Update Data) /////////////////////////////////////////////////
function set_kit(kt_index, selection_index) {
  // Get available kits for this kit type
  var available_kits = Array.from(
    new Set(
      data
        .filter((x) => x.Type === page_state["selected_kit_types"][kt_index])
        .map((x) => x.Kit)
    )
  );
  var available_kit_descriptions = Array.from(
    new Set(
      data
        .filter((x) => x.Type === page_state["selected_kit_types"][kt_index])
        .map((x) => x.Description)
    )
  );

  // Set the kit
  page_state["selected_kits"][kt_index] = available_kits[selection_index];
  page_state["selected_kit_descriptions"][kt_index] =
    available_kit_descriptions[selection_index];
}

function set_kit_type(kt_index, selection_index) {
  if (page_state["class"] === "Hybrid") {
    // Kit types are selected from user input
    page_state["kit_types"] = page_state.selected_hybrid_kit_types;
  } else {
    // Set kit types for class
    page_state["kit_types"] = Array.from(
      new Set(
        data.filter((x) => x.Class === page_state["class"]).map((x) => x.Type)
      )
    );
  }

  // Set selected kit types to first value as defaults
  page_state["selected_kit_types"][kt_index] =
    page_state["kit_types"][selection_index];

  // Set selected kits to first value as defaults
  for (var i = 0; i < page_state["selected_kits"].length; i++) {
    set_kit(i, 0);
  }
}

function set_skill(skill_name, value) {
  page_state["skills"][skill_name] = value;
}

function set_class(class_name) {
  // Set the class
  page_state["class"] = class_name;

  // Set the default skills for that class
  page_state["skills"] = class_skill_mapping[page_state["class"]];

  // Set the kits for that class
  for (var i = 0; i < page_state["selected_kit_types"].length; i++) {
    set_kit_type(i, 0);
  }
}

function set_hybrid_kit_types(kt_index, value) {
  page_state["selected_hybrid_kit_types"][kt_index] = value;
}

// Helper Functions (Update Display) /////////////////////////////////////////////////
function update_track(track_element, amount) {
  var current_track_size = track_element.childElementCount;
  var diff_amount = current_track_size - amount;
  for (var i = 0; i < Math.abs(diff_amount); i++) {
    if (diff_amount > 0) {
      track_element.removeChild(
        track_element.children[track_element.childElementCount - 1]
      );
    } else if (diff_amount < 0) {
      var new_box_element = document.createElement("input");
      new_box_element.type = "checkbox";
      track_element.appendChild(new_box_element);
    }
  }
}

function render_health_and_points() {
  // For each health track...
  Object.keys(skill_health_mappings).forEach((element) => {
    // Get the track being modified
    var track_element = document.getElementById(element);

    // Get the number of boxes this track should have
    var matching_skill = skill_health_mappings[element];
    var box_count = page_state["skills"][skill_health_mappings[element]];
    if (matching_skill === "Strength" || matching_skill === "Presence") {
      box_count = box_count + 3;
    } else if (matching_skill === "bravery" || matching_skill === "cunning") {
      box_count = box_count * 2;
    } else if (matching_skill === "knowledge") {
      box_count = box_count + 2;
    }

    // Account for certain kits that increase box count
    for (kit_name of page_state["selected_kits"]) {
      if (
        (kit_name === "Resilience Arcana" && matching_skill === "Strength") ||
        (kit_name === "Iron Will" && matching_skill === "Presence")
      ) {
        box_count = box_count + 1;
      } else if (
        (kit_name === "Lucky" && matching_skill === "bravery") ||
        (kit_name === "Prepared" && matching_skill === "cunning")
      ) {
        box_count = box_count + 2;
      }
    }

    // Zero the track count for kit uses if the kit type is not alchemist
    if (track_element.id.includes("kit_uses")) {
      var kt_index = track_element.attributes.name.value - 1;
      if (
        !data
          .filter((x) => x.Kit === page_state["selected_kits"][kt_index])
          .map((x) => x.Tags)[0]
          .includes("Alchemy")
      ) {
        box_count = 0;
      }
    }

    // Update accordingly
    update_track(track_element, box_count);
  });
}

function render_skills() {
  // For each skill in the page state, set the value
  Object.keys(page_state["skills"]).forEach((element) => {
    skill_value_selector = document.getElementById(element + "_value");
    skill_value_selector.value = page_state["skills"][element];
    console.log(element);
    skill_text_element = document.getElementById(element + "_text");

    if (page_state["skills"][element] > 0) {
      skill_text_element.style.color = skill_color_mapping[element];
      skill_text_element.style.fontWeight = "bold";
    } else {
      skill_text_element.style.color = "";
      skill_text_element.style.fontWeight = "";
    }
  });
}

function render_kit_description(kt_index) {
  // Kit Description
  var kit_description_selector = kit_description_selectors[kt_index];

  // Replace existing text
  kit_description_selector.innerText =
    page_state["selected_kit_descriptions"][kt_index];
}

function update_kit_type_options() {
  for (var i = 0; i < kit_type_selectors.length; i++) {
    // Update Kit Type Options
    //// Kit Type Selector
    var kit_type_selector = kit_type_selectors[i];

    //// Remove existing options
    while (kit_type_selector.childElementCount > 0) {
      kit_type_selector[kit_type_selector.childElementCount - 1].remove();
    }

    //// Add new options
    for (var j = 0; j < page_state["kit_types"].length; j++) {
      // Create option
      var opt = document.createElement("option");
      opt.value = page_state["kit_types"][j];
      opt.innerHTML = page_state["kit_types"][j];

      // Append to list
      kit_type_selector.appendChild(opt);
    }

    // Update related kit options
    update_kit_options(i);
  }
}

function update_kit_options(kt_index) {
  // Kit Selector
  var kit_selector = kit_selectors[kt_index];

  // Kit Type Selector
  var kit_type_selector = kit_type_selectors[kt_index];

  // Remove existing options
  while (kit_selector.childElementCount > 0) {
    kit_selector[kit_selector.childElementCount - 1].remove();
  }

  // Add new options
  var kit_options = data
    .filter((x) => x.Type === page_state["selected_kit_types"][kt_index])
    .map((x) => x.Kit);
  for (var j = 0; j < kit_options.length; j++) {
    // Create option
    var opt = document.createElement("option");
    opt.value = kit_options[j];
    opt.innerHTML = kit_options[j];

    // Append to list
    kit_selector.appendChild(opt);
  }

  render_kit_description(kt_index);
}

function update_skill(skill, value) {
  // Update the skill value
  page_state["skills"][skill] = parseInt(value, 10);
}

function update_hybrid_kit_type(kt_index, selected_index) {
  page_state["selected_hybrid_kit_types"][kt_index] =
    hybrid_kit_type_selectors[kt_index].options[selected_index].value;
}

function render_hybrid_kit_type_selectors_visibility() {
  // Make hybrid kit type selectors visible/invisible
  // based on whether or not hybrid class is selected
  if (page_state["class"] === "Hybrid") {
    state_text = "visible";
  } else {
    state_text = "hidden";
  }

  for (kit_type_selector of hybrid_kit_type_selectors) {
    kit_type_selector.style.visibility = state_text;
  }
}

function onetime_setup_hybrid_kit_type_selectors() {
  // Populate options
  for (kit_type_selector of hybrid_kit_type_selectors) {
    for (kit_type of new Set(data.map((x) => x.Type))) {
      // Create option
      var opt = document.createElement("option");
      opt.value = kit_type;
      opt.innerHTML = kit_type;

      // Append to list
      kit_type_selector.appendChild(opt);
    }
  }

  // Set defaults
  set_hybrid_kit_types(0, "Drugs");
  set_hybrid_kit_types(1, "Drugs");
}

function render_page() {
  // Render hybrid kit type selectors
  render_hybrid_kit_type_selectors_visibility();

  // Render skills
  render_skills();

  // Render kit types
  update_kit_type_options();

  // Render kits and kit descriptions
  for (var i = 0; i < kit_selectors.length; i++) {
    render_kit_description(i);
  }

  // Render health
  render_health_and_points();
}

// Helper Functions (Configure Listeners) ////////////////////////////////
// Configure listeners to act on user input ///////////////////////////////
function configure_listeners() {
  // Change Class
  class_selector.addEventListener("change", (event) => {
    set_class(window.event.srcElement.value);
    update_kit_type_options();
    render_page();
  });

  // Change Hybrid Class Kits
  for (hybrid_kit_type_selector of hybrid_kit_type_selectors) {
    hybrid_kit_type_selector.addEventListener("change", (event) => {
      update_hybrid_kit_type(
        window.event.srcElement.name - 1,
        window.event.srcElement.selectedIndex
      );
      set_class("Hybrid");
      update_kit_type_options();
      render_page();
    });
  }

  // Change Kit Type
  for (kit_type_selector of kit_type_selectors) {
    kit_type_selector.addEventListener("change", (event) => {
      set_kit_type(
        window.event.srcElement.name - 1,
        window.event.srcElement.selectedIndex
      );
      update_kit_options(window.event.srcElement.name - 1);
      render_health_and_points();
    });
  }

  // Change Kit
  for (kit_selector of kit_selectors) {
    kit_selector.addEventListener("change", (event) => {
      set_kit(
        window.event.srcElement.name - 1,
        window.event.srcElement.selectedIndex
      );
      render_kit_description(window.event.srcElement.name - 1);
      render_health_and_points();
    });
  }

  // Change skills
  for (skill_selector of skill_selectors) {
    skill_selector.addEventListener("change", (event) => {
      update_skill(window.event.srcElement.name, window.event.srcElement.value);
      render_skills();
      render_health_and_points();
    });
  }
}

// // Initialize Page ///////////////////////////////////////////////////
// hybrid_skill_selector_onetime_setup()
configure_listeners();
onetime_setup_hybrid_kit_type_selectors();

window.addEventListener("load", (event) => {
  set_class("Alchemist");
  render_page();
});
