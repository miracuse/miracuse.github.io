// Imports ////////////////////////////////////////////////////////////////////
import get_data from "./data.js"; // Globals ////////////////////////////////////////////////////////////////////
// A list of game-specific skills that a character can put points into

const SKILLS = ["Perception", "Knowledge", "Strength", "Bravery", "Magic", "Presence", "Agility", "Cunning"]; // The number of "kits" that a character can equip

const KIT_COUNT = 4; // Hard-coded descriptions of "kits" that a character can equip

const DATA = get_data(); // Functions //////////////////////////////////////////////////////////////////
// JS simplified mockup of np.arange(x)
//
//     Creates an array of size x with contents that count upwards from 1.
//

function arange(size) {
  const generated_array = [];

  for (let i = 1; i <= size; i++) {
    generated_array.push(i);
  }

  return generated_array;
} // Fetch specializations given a class


function fetchSpecializations(characterClass) {
  const specialization_data = Array.from(new Set(DATA.filter(x => x.Class === characterClass).map(x => x.Type)));
  return specialization_data;
} // Fetch kits given a specialization


function fetchKits(specializations) {
  const kit_data = DATA.filter(x => specializations.find(element => element === x.Type)).map(x => x.Kit);
  return kit_data;
} // Fetch a kit description given a kit name


function fetchKitDescription(kit) {
  const kit_description_data = DATA.filter(x => x.Kit === kit).map(x => x.Description);
  return kit_description_data;
} // Components /////////////////////////////////////////////////////////////////
// Specialization selector


class SubclassHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(0, event.target.value);
  }

  render() {
    const specialization_options_data = fetchSpecializations(this.props.class);
    const specialization_options = specialization_options_data.map(x => /*#__PURE__*/React.createElement("option", {
      key: x,
      value: x
    }, x));
    return /*#__PURE__*/React.createElement("div", {
      className: "character_subclass_01"
    }, /*#__PURE__*/React.createElement("select", {
      id: "subclass_select_01",
      name: "subclass_01",
      onChange: this.handleChange
    }, specialization_options));
  }

} // Checkbox tracks for resources (health, points, etc.)


class ResourceTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Create checkbox elements equal to the boxCount
    const box_holders = arange(this.props.boxCount).map(index => /*#__PURE__*/React.createElement("input", {
      key: index,
      type: "checkbox"
    }));
    return /*#__PURE__*/React.createElement("div", {
      className: this.props.prefix + "_track"
    }, box_holders);
  }

} // Auto-generated kit dropdowns


class KitHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(this.props.index, event.target.value);
  }

  render() {
    // Generate kit type selections
    const kit_types = this.props.specializations.map(x => /*#__PURE__*/React.createElement("option", {
      key: x,
      value: x
    }, x)); // Populate the kit selections based on the kit types

    const kit_options_data = fetchKits(this.props.specializations);
    const kit_options = kit_options_data.map(x => /*#__PURE__*/React.createElement("option", {
      key: x,
      value: x
    }, x));
    return /*#__PURE__*/React.createElement("div", {
      id: "kit_chooser_0" + this.props.index,
      className: "kit_chooser_0" + this.props.index
    }, /*#__PURE__*/React.createElement("select", {
      id: "kit_type_0" + this.props.index,
      className: "kit_type_0" + this.props.index
    }, kit_types), /*#__PURE__*/React.createElement("select", {
      id: "kit_0" + this.props.index,
      className: "kit_0" + this.props.index,
      onChange: this.handleChange
    }, kit_options));
  }

}

class KitDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const kit_description = fetchKitDescription(this.props.kit);
    return /*#__PURE__*/React.createElement("div", {
      id: "kit_text_0" + this.props.index,
      className: "kit_text_0" + this.props.index
    }, /*#__PURE__*/React.createElement("p", {
      id: "kit_description_0" + this.props.index,
      className: "kit_description"
    }, kit_description));
  }

} // Main App ///////////////////////////////////////////////////////////////////


class CharacterSheet extends React.Component {
  // State
  constructor(props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleSpecializationChange = this.handleSpecializationChange.bind(this);
    this.handleKitChange = this.handleKitChange.bind(this);
    this.state = {
      Class: "",
      Tier: 1,
      Specializations: [""],
      Kit_01: "",
      Kit_02: "",
      Kit_03: "",
      Kit_04: "",
      Perception: 0,
      Knowledge: 0,
      Strength: 0,
      Bravery: 0,
      Magic: 0,
      Presence: 0,
      Agility: 0,
      Cunning: 0
    };
  }

  componentDidMount() {
    // Initialize the page
    this.setState({
      Class: "Alchemist"
    });
    var specialization_data = fetchSpecializations("Alchemist");
    this.handleSpecializationChange(0, specialization_data[0]);
  }

  handleClassChange(event) {
    // Set the class
    this.setState({
      Class: event.target.value
    }); // Cascade the change, setting the specialization to the top-most value

    var specialization_data = fetchSpecializations(event.target.value);
    this.handleSpecializationChange(0, specialization_data[0]);
  }

  handleSpecializationChange(index, specialization) {
    // Set the specialization
    var specializations_copy = this.state.Specializations.slice(0);
    specializations_copy[index] = specialization;
    this.setState({
      Specializations: specializations_copy
    }); // Cascade the change, setting the kits based on the specializations

    var kit_data = fetchKits([specialization]);
    this.handleKitChange(1, kit_data[0]);
    this.handleKitChange(2, kit_data[0]);
    this.handleKitChange(3, kit_data[0]);
    this.handleKitChange(4, kit_data[0]);
  }

  handleSkillChange(skill, event) {
    // Set the skill value
    this.setState({
      [skill]: parseInt(event.target.value)
    });
  }

  handleKitChange(index, kit) {
    // Set the kit
    if (index === 1) {
      this.setState({
        Kit_01: kit
      });
    }

    if (index === 2) {
      this.setState({
        Kit_02: kit
      });
    }

    if (index === 3) {
      this.setState({
        Kit_03: kit
      });
    }

    if (index === 4) {
      this.setState({
        Kit_04: kit
      });
    }
  }

  render() {
    // Generate the skills
    const skill_holders = SKILLS.map(skill => /*#__PURE__*/React.createElement("div", {
      key: skill.toLowerCase() + "_value",
      id: skill.toLowerCase() + "_value",
      className: skill.toLowerCase() + "_value"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      defaultValue: "0",
      min: "0",
      max: "4",
      onChange: e => this.handleSkillChange(skill, e)
    })));
    const skill_text_holders = SKILLS.map(skill => /*#__PURE__*/React.createElement("div", {
      key: skill.toLowerCase() + "_text",
      id: skill.toLowerCase() + "_text",
      className: skill.toLowerCase() + "_text"
    }, /*#__PURE__*/React.createElement("label", null, skill))); // Generate the kits

    const kit_holders = arange(KIT_COUNT).map(counter => /*#__PURE__*/React.createElement(KitHolder, {
      key: counter,
      index: counter,
      specializations: this.state.Specializations,
      onChange: this.handleKitChange
    })); // const kit_description_holders = arange(KIT_COUNT).map((counter) => (
    //   <KitDescriptionHolder
    //     key={counter}
    //     index={counter}
    //     kit={this.state.Kits[counter-1]}
    //     />
    // ));
    // Put everything together

    return /*#__PURE__*/React.createElement("div", {
      id: "CharacterSheet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "character_sheet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "character_info_header"
    }, /*#__PURE__*/React.createElement("p", null, "Class")), /*#__PURE__*/React.createElement("div", {
      className: "character_class_text"
    }, /*#__PURE__*/React.createElement("p", null, "Class")), /*#__PURE__*/React.createElement("div", {
      className: "character_class"
    }, /*#__PURE__*/React.createElement("select", {
      id: "class_select",
      name: "characterclass",
      onChange: this.handleClassChange
    }, /*#__PURE__*/React.createElement("option", {
      value: "Alchemist"
    }, "Alchemist"), /*#__PURE__*/React.createElement("option", {
      value: "Soldier"
    }, "Soldier"), /*#__PURE__*/React.createElement("option", {
      value: "Mage"
    }, "Mage"), /*#__PURE__*/React.createElement("option", {
      value: "Scoundrel"
    }, "Scoundrel"))), /*#__PURE__*/React.createElement("div", {
      className: "character_tier_text"
    }, /*#__PURE__*/React.createElement("p", null, "Tier")), /*#__PURE__*/React.createElement("div", {
      className: "character_tier"
    }, /*#__PURE__*/React.createElement("div", {
      id: "tier_select",
      name: "charactertier"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      defaultValue: "1",
      min: "1",
      max: "4"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "subclass_header"
    }, /*#__PURE__*/React.createElement("p", null, "Specializations")), /*#__PURE__*/React.createElement(SubclassHolder, {
      class: this.state.Class,
      onChange: this.handleSpecializationChange
    }), /*#__PURE__*/React.createElement("div", {
      className: "character_subclass_02"
    }, /*#__PURE__*/React.createElement("select", {
      id: "subclass_select_02",
      name: "subclass_02",
      disabled: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "None"
    }, "Locked"))), /*#__PURE__*/React.createElement("div", {
      className: "character_subclass_03"
    }, /*#__PURE__*/React.createElement("select", {
      id: "subclass_select_03",
      name: "subclass_03",
      disabled: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "None"
    }, "Locked"))), /*#__PURE__*/React.createElement("div", {
      className: "character_subclass_04"
    }, /*#__PURE__*/React.createElement("select", {
      id: "subclass_select_04",
      name: "subclass_04",
      disabled: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "None"
    }, "Locked"))), /*#__PURE__*/React.createElement("div", {
      className: "health_header"
    }, /*#__PURE__*/React.createElement("p", null, "Health")), /*#__PURE__*/React.createElement("div", {
      className: "physical_health_text"
    }, /*#__PURE__*/React.createElement("label", null, "Physical Health")), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "physical_health",
      boxCount: 3 + this.state.Strength
    }), /*#__PURE__*/React.createElement("div", {
      className: "mental_health_text"
    }, /*#__PURE__*/React.createElement("label", null, "Mental Health")), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "mental_health",
      boxCount: 3 + this.state.Presence
    }), /*#__PURE__*/React.createElement("div", {
      className: "resources_header"
    }, /*#__PURE__*/React.createElement("b", null, "Resources")), /*#__PURE__*/React.createElement("div", {
      className: "charge_point_text"
    }, /*#__PURE__*/React.createElement("label", null, "Charge Points")), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "charge_point",
      boxCount: 2 * this.state.Knowledge
    }), /*#__PURE__*/React.createElement("div", {
      className: "mana_point_text"
    }, /*#__PURE__*/React.createElement("label", null, "Mana Points")), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "mana_point",
      boxCount: 2 * this.state.Presence
    }), /*#__PURE__*/React.createElement("div", {
      className: "fortune_point_text"
    }, /*#__PURE__*/React.createElement("label", null, "Fortune Points")), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "fortune_point",
      boxCount: 2 * this.state.Bravery
    }), /*#__PURE__*/React.createElement("div", {
      className: "prep_point_text"
    }, /*#__PURE__*/React.createElement("label", null, "Prep Points")), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "prep_point",
      boxCount: 2 * this.state.Cunning
    }), /*#__PURE__*/React.createElement("div", {
      className: "skills_header"
    }, /*#__PURE__*/React.createElement("b", null, "Skills")), skill_holders, skill_text_holders, /*#__PURE__*/React.createElement("div", {
      className: "kit_header"
    }, /*#__PURE__*/React.createElement("b", null, "Kits")), kit_holders, /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: 1,
      index: 1,
      kit: this.state.Kit_01
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: 2,
      index: 2,
      kit: this.state.Kit_02
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: 3,
      index: 3,
      kit: this.state.Kit_03
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: 4,
      index: 4,
      kit: this.state.Kit_04
    })));
  }

}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render( /*#__PURE__*/React.createElement(CharacterSheet, null));

