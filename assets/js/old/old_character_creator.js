// Globals //////////////////////////////////////////////////////////
const kt_vals = [1, 2, 3, 4];
const class_skill_mapping = {
  Alchemist: {
    perception: 2,
    knowledge: 2,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    focus: 0,
    cunning: 0,
    agility: 0,
  },
  Soldier: {
    perception: 0,
    knowledge: 0,
    Strength: 2,
    bravery: 2,
    Magic: 0,
    focus: 0,
    cunning: 0,
    agility: 0,
  },
  Mage: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 2,
    focus: 2,
    cunning: 0,
    agility: 0,
  },
  Scoundrel: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    focus: 0,
    cunning: 2,
    agility: 2,
  },
  Hybrid: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    focus: 0,
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
  "focus_value",
  "cunning_value",
  "agility_value",
];
const skill_health_mappings = {
  physical_health_track: "Strength",
  mental_health_track: "focus",
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
  focus: "#953553",
  cunning: "#90a959",
  agility: "#90a959",
};

let class_selector = document.getElementById("class_select");
let tier_selector = document.getElementById("tier_select");
let subclass_selectors = [
  document.getElementById("subclass_01"),
  document.getElementById("subclass_02"),
  document.getElementById("subclass_03"),
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
  document.getElementById("focus_value"),
  document.getElementById("agility_value"),
  document.getElementById("cunning_value"),
];

// Load Data ////////////////////////////////////////////////////////

// var csv = require('jquery-csv');
var data = $.csv.toObjects("../../miracuse_kits.tsv");

// Track Page State /////////////////////////////////////////////////
// Initialize defaults
var page_state = {
  class: "",
  kit_types: [""],
  selected_subclasses: ["", ""],
  selected_kit_types: ["", "", "", ""],
  selected_kits: ["", "", "", ""],
  selected_kit_descriptions: ["", "", "", ""],
  skills: {
    perception: 0,
    knowledge: 0,
    Strength: 0,
    bravery: 0,
    Magic: 0,
    focus: 0,
    cunning: 0,
    agility: 0,
  },
};

// Helper Functions (Update Data) /////////////////////////////////////////////////
function fetch_data() {}

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
    page_state["kit_types"] = page_state.selected_subclasses;
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

function set_subclasses(kt_index, value) {
  page_state["selected_subclasses"][kt_index] = value;
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
    if (matching_skill === "Strength" || matching_skill === "focus") {
      box_count = box_count + 3;
    } else if (matching_skill === "bravery" || matching_skill === "cunning") {
      box_count = box_count * 2;
    } else if (matching_skill === "knowledge") {
      box_count = box_count + 2;
    }

    // Account for certain kits that increase box count
    for (kit_name of page_state["selected_kits"]) {
      if (
        (kit_name === "Arta Forteiza" && matching_skill === "Strength") ||
        (kit_name === "Iron Will" && matching_skill === "focus")
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

function update_subclass(kt_index, selected_index) {
  page_state["selected_subclasses"][kt_index] =
    subclass_selectors[kt_index].options[selected_index].value;
}

function render_subclass_selectors_visibility() {
  // Make hybrid kit type selectors visible/invisible
  // based on whether or not hybrid class is selected
  for (kit_type_selector of subclass_selectors) {
    if (
      Number(tier_selector.options[tier_selector.selectedIndex].value) >=
      Number(kit_type_selector.name)
    ) {
      kit_type_selector.style.visibility = "visible";
    } else {
      kit_type_selector.style.visibility = "hidden";
    }
  }
}

function onetime_setup_subclass_selectors() {
  // Populate options
  for (kit_type_selector of subclass_selectors) {
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
  set_subclasses(0, "Golemcraft");
  set_subclasses(1, "Golemcraft");
  set_subclasses(2, "Golemcraft");
}

function render_page() {
  // Render hybrid kit type selectors
  render_subclass_selectors_visibility();

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

  // Change Subclass
  tier_selector.addEventListener("change", (event) => {
    render_subclass_selectors_visibility();
  });

  // Change Hybrid Class Kits
  for (subclass_selector of subclass_selectors) {
    subclass_selector.addEventListener("change", (event) => {
      update_subclass(
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
onetime_setup_subclass_selectors();

window.addEventListener("load", (event) => {
  set_class("Alchemist");
  render_page();
});
