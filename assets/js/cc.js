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
        Kit: "Beast's Blood",
        Tags: "Exploration, Alchemy, Potion, Substance",
        Description:
            "Adopt an animal-like adaption for a short period of time by drinking a potion. Example of effects could include a cat's night vision, a bat's sense of hearing, or a gecko's skin. Can be used as a substance to attract animals and monsters.",
    },
    {
        Class: "Alchemist",
        Type: "Chemist",
        Kit: "Elixir",
        Tags: "Recovery, Alchemy, Potion",
        Description:
            "Recover from harm and illness by drinking a potion. This can include recovering Physical damage, recovering Mental damage, treating an Injury, or curing various natural afflictions. Can be used to revitalize most living creatures.",
    },
    {
        Class: "Alchemist",
        Type: "Chemist",
        Kit: "Faerie Fire",
        Tags: "Combat, Exploration, Alchemy, Substance, Grenade",
        Description:
            "Create dazzling fireworks displays with a highly volatile powder. Capable of producing blinding lights, making smoke screens, emitting deafening noises, and causing painful coughing when breathed. Can be used as a grenade to produce any two of the effects listed or inflict Physical damage.",
    },
    {
        Class: "Alchemist",
        Type: "Chemist",
        Kit: "Golden Silk",
        Tags: "Combat, Exploration, Alchemy, Substance, Grenade",
        Description:
            "Distort perceptions with a potent hallucinogenic. Can be used as a potion to see through illusions, ignore the effects of injuries, and change mental states. Can be used as a grenade to inflict Mental damage. Can be used as an offering to powerful spirits and supernatural creatures.",
    },
    {
        Class: "Alchemist",
        Type: "Chemist",
        Kit: "Holy Water",
        Tags: "Exploration, Alchemy, Substance, Grenade",
        Description:
            "Neutralize magic by spraying specially treated water. Can be used to negate spells, harm the undead, treat curses, or produce anti-magic effects. Can be used as a grenade. Can be used as a substance to repel monsters and magical creatures.",
    },
    {
        Class: "Alchemist",
        Type: "Chemist",
        Kit: "Manifold Venom",
        Tags: "Exploration, Alchemy, Substance",
        Description:
            "Cause harm by applying poisons to weapons and ammunition. Example of effects could include additional Physical damage, temporary blindness, or gradual petrification.",
    },
    {
        Class: "Alchemist",
        Type: "Enchanter",
        Kit: "Rune of Awareness",
        Tags: "Exploration, Alchemy, Tool",
        Description:
            "A sigil that allows the user to see and hear around the object it's applied to for two hours. Can be used to create a shikigami, a paper origami servant capable of flight and relaying messages. The shikigami falls apart after twenty-four hours, or when this Kit is removed.",
    },
    {
        Class: "Alchemist",
        Type: "Enchanter",
        Kit: "Rune of Featherweight",
        Tags: "Exploration, Alchemy, Tool",
        Description:
            "A sigil that makes objects lighter and more brittle for two hours when applied. Can be used to create a backpack that's bigger on the inside than the outside, capable of holding three times its volume without growing heavier. The bag falls apart after twenty-four hours, or when this Kit is removed.",
    },
    {
        Class: "Alchemist",
        Type: "Enchanter",
        Kit: "Rune of Quickening",
        Tags: "Exploration, Alchemy, Tool",
        Description:
            "A sigil that makes solid objects malleable and liquid for a short period of time when applied. Can be used to create a quicksilver familiar, a sentient metal ooze that can reshape itself into tools and weapons on command. The familiar hardens into whatever shape it was holding after two hours.",
    },
    {
        Class: "Alchemist",
        Type: "Enchanter",
        Kit: "Rune of Stoneweight",
        Tags: "Combat, Exploration, Alchemy, Tool",
        Description:
            "A sigil that makes objects stronger and heavier for two hours when applied. Can be used to create a golem from stone or dirt, which will follow your orders and fight on your behalf for two hours.",
    },
    {
        Class: "Alchemist",
        Type: "Enchanter",
        Kit: "Spirit of Animation",
        Tags: "Spirit, Alchemy, Tool",
        Description:
            "Awaken inanimate objects, compel them to move and act on your orders. You can spend this Kit's Charges to use Knowledge or Perception when using this spirit.",
    },
    {
        Class: "Alchemist",
        Type: "Enchanter",
        Kit: "Spirit of Transmutation",
        Tags: "Spirit, Alchemy, Tool",
        Description:
            "Change the properties of a substance, such as shape and weight. The greater the difference from the original, the more difficult the change. You can spend this Kit's Charges to use Knowledge or Perception when using this spirit.",
    },
    {
        Class: "Alchemist",
        Type: "Sapper",
        Kit: "Concussive Charges",
        Tags: "Combat, Alchemy, Grenade, Bullet",
        Description:
            "Grenade that is especially destructive, dealing two boxes of Physical damage and damaging the surrounding area. When used as a bullet, deals an additional box of Physical damage and pierces through obstacles.",
    },
    {
        Class: "Alchemist",
        Type: "Sapper",
        Kit: "Electromagnetic Charges",
        Tags: "Combat, Alchemy, Grenade, Bullet",
        Description:
            "Grenade that covers an area with crackling electricity, or magnetizes an area, forcing metal objects in the vicinity to adhere to one another. When used as a bullet, deals an additional box of Physical damage and one of the grenade effects.",
    },
    {
        Class: "Alchemist",
        Type: "Sapper",
        Kit: "Friction Charges",
        Tags: "Combat, Alchemy, Grenade, Bullet",
        Description:
            "Grenade that covers an area with a grease slick, or a quick-drying adhesive. When used as a bullet, deals an additional box of Physical damage and one of the grenade effects.",
    },
    {
        Class: "Alchemist",
        Type: "Sapper",
        Kit: "Thermic Charges",
        Tags: "Combat, Alchemy, Grenade, Bullet",
        Description:
            "Grenade that covers an area with roaring flames, or a layer of ice. When used as a bullet, deals an additional box of Physical damage and one of the grenade effects.",
    },
    {
        Class: "Alchemist",
        Type: "Sapper",
        Kit: "Trenchsteel Charges",
        Tags: "Combat, Alchemy, Grenade, Bullet",
        Description:
            "Grenade that covers an area with metal ball bearings, or a sprawl of barbed wire. When used as a bullet, ricochets in closed spaces, deals an additional box of Physical damage, and can change course mid-flight by detonating a second time .",
    },
    {
        Class: "Alchemist",
        Type: "Sapper",
        Kit: "Vapor Charges",
        Tags: "Combat, Alchemy, Grenade, Bullet",
        Description:
            "Grenade that covers an area in tear gas, or a billowing cloud of fog. When used as a bullet, deals an additional box of Physical damage and can instantly rust through most metals.",
    },
    {
        Class: "Mage",
        Type: "Priest",
        Kit: "Spirit of Abjuration",
        Tags: "Combat, Spirit",
        Description:
            "Create barriers, dispel magic, and repel otherworldly influences.",
    },
    {
        Class: "Mage",
        Type: "Priest",
        Kit: "Spirit of Divination",
        Tags: "Exploration, Spirit",
        Description:
            "Find people, places, things, and hidden knowledge through divination.",
    },
    {
        Class: "Mage",
        Type: "Priest",
        Kit: "Spirit of Language",
        Tags: "Social, Spirit",
        Description:
            "Speak all languages, use charm magic, and compel others to your will.",
    },
    {
        Class: "Mage",
        Type: "Priest",
        Kit: "Spirit of Necromancy",
        Tags: "Combat, Exploration, Spirit",
        Description:
            "Raise the dead, curse the living, and meddle with the boundary between life and death.",
    },
    {
        Class: "Mage",
        Type: "Priest",
        Kit: "Spirit of Restoration",
        Tags: "Recovery, Spirit",
        Description:
            "Heal Physical wounds, restore broken objects, and treat natural afflictions.",
    },
    {
        Class: "Mage",
        Type: "Priest",
        Kit: "Spirit of Summoning",
        Tags: "Exploration, Social, Spirit",
        Description:
            "Call imps, pixies, and other minor magical creatures to serve you. Pull otherworldly influences into the world.",
    },
    {
        Class: "Mage",
        Type: "Shaman",
        Kit: "Spirit of Aether",
        Tags: "Combat, Exploration, Spirit",
        Description:
            "Manipulate electricity, shoot lightning, and stun enemies.",
    },
    {
        Class: "Mage",
        Type: "Shaman",
        Kit: "Spirit of Air",
        Tags: "Combat, Exploration, Spirit",
        Description: "Manipulate air, create gusts of wind, and fall gently.",
    },
    {
        Class: "Mage",
        Type: "Shaman",
        Kit: "Spirit of Earth",
        Tags: "Combat, Exploration, Spirit",
        Description: "Manipulate earth, reshape terrain, and mold stone.",
    },
    {
        Class: "Mage",
        Type: "Shaman",
        Kit: "Spirit of Flame",
        Tags: "Combat, Exploration, Spirit",
        Description: "Manipulate fire, throw flames, and ignite objects.",
    },
    {
        Class: "Mage",
        Type: "Shaman",
        Kit: "Spirit of Metal",
        Tags: "Combat, Exploration, Spirit",
        Description:
            "Manipulate metal, create magnetic fields, and sharpen blades.",
    },
    {
        Class: "Mage",
        Type: "Shaman",
        Kit: "Spirit of Water",
        Tags: "Combat, Exploration, Spirit",
        Description: "Manipulate water, freeze liquids, and conjure fog.",
    },
    {
        Class: "Mage",
        Type: "Wizard",
        Kit: "Spirit of Binding",
        Tags: "Combat, Exploration, Spirit",
        Description:
            "Manipulate bonds, adhering things together or loosening them from one another.",
    },
    {
        Class: "Mage",
        Type: "Wizard",
        Kit: "Spirit of Entropy",
        Tags: "Combat, Exploration, Spirit",
        Description:
            "Manipulate decay, accelerating or slowing processes like rotting and rusting.",
    },
    {
        Class: "Mage",
        Type: "Wizard",
        Kit: "Spirit of Force",
        Tags: "Combat, Exploration, Spirit",
        Description:
            "Manipulate magic energy, lob bolts of raw power at enemies, and tinker with magical forces present in the world.",
    },
    {
        Class: "Mage",
        Type: "Wizard",
        Kit: "Spirit of Locomotion",
        Tags: "Combat, Exploration, Spirit",
        Description: "Manipulate kinetic energy, add or reduce speed.",
    },
    {
        Class: "Mage",
        Type: "Wizard",
        Kit: "Spirit of Gravity",
        Tags: "Combat, Exploration, Spirit",
        Description: "Manipulate gravity, add or reduce weight.",
    },
    {
        Class: "Mage",
        Type: "Wizard",
        Kit: "Spirit of Thermos",
        Tags: "Combat, Exploration, Spirit",
        Description: "Manipulate thermal energy, add or reduce heat.",
    },
    {
        Class: "Scoundrel",
        Type: "Assassin",
        Kit: "Assassinate",
        Tags: "Combat, Stealth",
        Description:
            "Your sneak attacks deal an additional box of Physical damage. You can use Assume a Disguise to disappear from sight, taking an action to do so if done in combat. You can tell if a target will be incapacitated by your sneak attack before you make it.",
    },
    {
        Class: "Scoundrel",
        Type: "Assassin",
        Kit: "Convincing Fake",
        Tags: "Exploration, Social, Health",
        Description:
            "Choose a Skill and raise it to half the level of your highest Skill (rounded down). You can spend a Prep Point to change the chosen Skill, provided you have a few minutes to concentrate. You can use Assume a Disguise without spending Prep Points.",
    },
    {
        Class: "Scoundrel",
        Type: "Assassin",
        Kit: "Infiltration Team",
        Tags: "Social, Stealth",
        Description:
            "Nearby allies can use your Cunning when moving in stealth. When you use Assume a Disguise, you can provide disguises to your allies as well. When you or an ally would otherwise be revealed, you can spend a Prep Point to prevent it, so long as you can narratively describe how you do so.",
    },
    {
        Class: "Scoundrel",
        Type: "Assassin",
        Kit: "Pin Down",
        Tags: "Combat, Technique",
        Description:
            "Your attacks reduce an enemy's movement, cutting off their ability to escape or pursue. Using this technique greatly reduces a target's mobility, in addition to any Physical damage dealt. You have Advantage when using Agility to sprint, as might be the case when chasing after someone or retreating from danger.",
    },
    {
        Class: "Scoundrel",
        Type: "Assassin",
        Kit: "Pressure Points",
        Tags: "Combat, Technique, Stealth",
        Description:
            "Your attacks strike at an enemy's nerves. Using this technique can incapacitate targets without lasting harm or visible injury, in addition to any Physical damage dealt. You have Advantage when sensing the motivations of others, such as detecting lies, by picking up on nervous ticks or other tells.",
    },
    {
        Class: "Scoundrel",
        Type: "Assassin",
        Kit: "Spirit of Shadow",
        Tags: "Spirit, Stealth",
        Description:
            "Manipulate shadows, obscure appearances, and blind enemies. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
    },
    {
        Class: "Scoundrel",
        Type: "Bard",
        Kit: "Charm Arcana",
        Tags: "Social",
        Description:
            "You can use Cunning as though it were Presence, Bravery, or Knowledge for social purposes. You can spend a Prep Point to reroll a social action and take the new result, a maximum of one time per social action. You can use I Know a Guy without spending Prep Points.",
    },
    {
        Class: "Scoundrel",
        Type: "Bard",
        Kit: "Lore Arcana",
        Tags: "Combat, Exploration",
        Description:
            "You can use Cunning or Agility to detect and identify magic. You can use What You Needed to produce an item that briefly channels or negates magic you've identified. You can use Cunning or Agility when recalling information about history, religion, magic, or politics.",
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
        Tags: "Exploration, Spirit",
        Description:
            "Manipulate light, create ghostly illusions, and see afar. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
    },
    {
        Class: "Scoundrel",
        Type: "Bard",
        Kit: "Spirit of Sound",
        Tags: "Exploration, Spirit",
        Description:
            "Manipulate sound, shatter eardrums, and eavesdrop from afar. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
    },
    {
        Class: "Scoundrel",
        Type: "Bard",
        Kit: "War Arcana",
        Tags: "Combat, Technique",
        Description:
            "Your fighting style resembles dancing, making you particularly mobile. Using this technique allows you to move before and after making an attack, escaping from melee range or otherwise covering ground. You have Advantage reacting to traps or similar surprise attacks.",
    },
    {
        Class: "Scoundrel",
        Type: "Ranger",
        Kit: "Herbalism",
        Tags: "Recovery",
        Description:
            "You can use What You Needed to heal Physical and Mental damage outside of combat.",
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
        Kit: "Quickdraw",
        Tags: "Combat, Technique, Stealth",
        Description:
            "Your attacks are swift and silent, preventing targets from crying out when struck or otherwise making noise. Using this technique ensures that an enemy won't cause a commotion for a brief period of time, in addition to any Physical damage dealt. You have Advantage when determining who acts first, including combat turn order.",
    },
    {
        Class: "Scoundrel",
        Type: "Ranger",
        Kit: "Spirit of Wood",
        Tags: "Combat, Exploration, Spirit",
        Description:
            "Manipulate plants, encourage growth, and influence the environment. You can spend a Prep Point to use Cunning or Agility when using this spirit.",
    },
    {
        Class: "Scoundrel",
        Type: "Ranger",
        Kit: "Tamer",
        Tags: "Combat, Exploration, Social",
        Description:
            "You can speak with and understand beasts. You can use I Know a Guy to recruit a local beast to aid you. The beast can track, fight, and is capable of anything that a creature of its kind might otherwise do. The beast will follow your orders, but will prioritize its own survival. Only one beast can be recruited at a time.",
    },
    {
        Class: "Scoundrel",
        Type: "Ranger",
        Kit: "Twin Strike",
        Tags: "Combat, Technique",
        Description:
            "Your attacks hit two targets instead of one. Using this technique gives your attack an additional target, with both hits landing within moments of one another. The additional target cannot be the same as the original target.",
    },
    {
        Class: "Soldier",
        Type: "Fencer",
        Kit: "Called Shot",
        Tags: "Combat, Exploration, Technique",
        Description:
            "Your attacks are exceptionally precise. Using this technique allows you to harm specific targets (like eyes or hands), in addition to any Physical damage dealt. You have Advantage when making ranged attacks without any distractions.",
    },
    {
        Class: "Soldier",
        Type: "Fencer",
        Kit: "Harass",
        Tags: "Combat, Social, Technique",
        Description:
            "Your attacks taunt and frustrate targets in addition to dealing damage. Using this technique inflicts a box of Mental damage on successful attacks, in addition to any Physical damage dealt. You have Advantage when using Bravery to provoke others.",
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
        Kit: "Riposte",
        Tags: "Combat",
        Description:
            "On a successful defense against a melee attack, you inflict a box of Physical damage to the attacker. You recover a Fortune Point when an enemy is incapacitated using this Kit.",
    },
    {
        Class: "Soldier",
        Type: "Fencer",
        Kit: "Spellbreak",
        Tags: "Combat, Exploration, Technique",
        Description:
            "Your attacks interfere with magic. Using this technique allows your attacks to destroy spells and spirits, in addition to any Physical damage dealt. You have Advantage when defending against magical attacks.",
    },
    {
        Class: "Soldier",
        Type: "Fencer",
        Kit: "Wind Strike",
        Tags: "Combat, Exploration, Technique",
        Description:
            "Your melee attacks create blades of cutting wind, while your ranged attacks are propelled by gusts. Using this technique greatly extends the range of your attacks. You have Advantage when defending against projectile attacks like arrows and bullets.",
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
            "You can spend a Fortune Point to revive an incapacitated ally, restoring one box of either of their damage tracks and taking your action to do so if done in combat. You can use Strength or Bravery to perform medical tasks outside of combat, giving you the ability to heal Physical damage and treat Physical injuries.",
    },
    {
        Class: "Soldier",
        Type: "Knight",
        Kit: "Impose",
        Tags: "Combat, Social, Technique",
        Description:
            "Your attacks demand the attention of targets and cloud their perception. Using this technique compels an enemy to focus on you on successful attacks, in addition to any Physical damage dealt. You have Advantage when using Bravery to intimidate others.",
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
            "Your attacks encourage and inspire allies on the battlefield. Using this technique can provide Advantage to one nearby ally on their next roll in combat when you make a successful attack, in addition to dealing Physical damage to an enemy. You have Advantage when using Bravery to inspire or rally others outside of combat.",
    },
    {
        Class: "Soldier",
        Type: "Knight",
        Kit: "Smite",
        Tags: "Combat, Technique",
        Description:
            "Your attacks strike with enough force to knock targets back or topple them over. Using this technique allows your attacks to forcibly reposition enemies, in addition to any Physical damage dealt. You have Advantage against any attempt to forcibly move you and against any effect that impedes your movement, including terrain hazards like ice or mud.",
    },
    {
        Class: "Soldier",
        Type: "Myrmidon",
        Kit: "Cleave",
        Tags: "Combat, Technique",
        Description:
            "Your attacks are especially destructive, hitting enemies and objects adjacent to your target. Using this technique allows your attacks to inflict damage in a small area of effect.",
    },
    {
        Class: "Soldier",
        Type: "Myrmidon",
        Kit: "Gambler's Fallacy",
        Tags: "Exploration, Recovery",
        Description:
            "Treat any roll of 1 as a -1 instead of a -2. You recover a Fortune Point when you roll a 1 in combat.",
    },
    {
        Class: "Soldier",
        Type: "Myrmidon",
        Kit: "Iron Blow",
        Tags: "Combat, Technique",
        Description:
            "Your attacks cause harm even on glancing blows. Using this technique allows your attacks to inflict damage when your roll would normally have tied with the defender, increasing the odds of a successful attack. You have Advantage when performing feats that rely solely on raw muscle, such as lifting heavy objects or bending metal bars.",
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
        Tags: "Exploration, Spirit",
        Description:
            "Manipulate probability, tweak the odds in your favor, and jinx enemies. You can spend a Fortune Point to use Physique or Bravery instead of Aura when using this spirit.",
    },
    {
        Class: "Soldier",
        Type: "Myrmidon",
        Kit: "Sunder",
        Tags: "Combat, Exploration, Technique",
        Description:
            "Your attacks are brutally effective, causing great harm and striking through armor. Using this technique allows your attacks to deal an additional box of Physical damage when successful. You have Advantage when using this technique to destroy objects and obstacles.",
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
                .filter(
                    (x) => x.Type === page_state["selected_kit_types"][kt_index]
                )
                .map((x) => x.Kit)
        )
    );
    var available_kit_descriptions = Array.from(
        new Set(
            data
                .filter(
                    (x) => x.Type === page_state["selected_kit_types"][kt_index]
                )
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
                data
                    .filter((x) => x.Class === page_state["class"])
                    .map((x) => x.Type)
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
        } else if (
            matching_skill === "bravery" ||
            matching_skill === "cunning"
        ) {
            box_count = box_count * 2;
        } else if (matching_skill === "knowledge") {
            box_count = box_count + 2;
        }

        // Account for certain kits that increase box count
        for (kit_name of page_state["selected_kits"]) {
            if (
                (kit_name === "Resilience Arcana" &&
                    matching_skill === "Strength") ||
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
                    .filter(
                        (x) => x.Kit === page_state["selected_kits"][kt_index]
                    )
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
            update_skill(
                window.event.srcElement.name,
                window.event.srcElement.value
            );
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
