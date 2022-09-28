// Load Data
const data = fetch("../assets/data/miracuse_kits.tsv").then(function (
    response
) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response.text();
});

// Page State
var page_state = {
    class: "",
    subclasses: [""],
    kits: ["", "", "", ""],
    skills: {
        perception: 0,
        knowledge: 0,
        strength: 0,
        bravery: 0,
        magic: 0,
        focus: 0,
        cunning: 0,
        agility: 0,
    },
};

// UI Elements
let class_selector = document.getElementById("class_select");
let tier_selector = document.getElementById("tier_select");
let subclass_selectors = [
    document.getElementById("subclass_01"),
    document.getElementById("subclass_02"),
    document.getElementById("subclass_03"),
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
    document.getElementById("strength_value"),
    document.getElementById("bravery_value"),
    document.getElementById("magic_value"),
    document.getElementById("focus_value"),
    document.getElementById("agility_value"),
    document.getElementById("cunning_value"),
];

// Render Function
function render_page() {
    // Populate class
    document.getElementById("class_select").value = page_state.class;

    // Populate subclasses

    // Populate skills

    // Populate kits

    // Populate health
}

// Page Load Function
window.addEventListener("load", (event) => {
    page_state.class = "Alchemist";
    render_page();
});
