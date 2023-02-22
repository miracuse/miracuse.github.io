// Imports ////////////////////////////////////////////////////////////////////
import get_kit_data from "./kit_data.js";
import get_class_description_data from "./class_data.js";
import get_specialization_description_data from "./specialization_data.js";
import get_class_mapping from "./class_mapping.js"; // Globals ////////////////////////////////////////////////////////////////////
// A list of game-specific skills that a character can put points into

const SKILLS = ["Perception", "Knowledge", "Strength", "Bravery", "Magic", "Presence", "Agility", "Cunning"]; // Hard-coded descriptions of "kits" that a character can equip

const KIT_DATA = get_kit_data();
const CLASS_DESCRIPTION_DATA = get_class_description_data();
const SPECIALIZATION_DESCRIPTION_DATA = get_specialization_description_data(); // Functions //////////////////////////////////////////////////////////////////
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
} // Fetch "Specializations" data.
//
//     Pull "Specializations" data where the data matches the provided game Class.
//


function fetchSpecializations(characterClass) {
  if (characterClass != "Custom") {
    const specialization_data = Array.from(new Set(KIT_DATA.filter(x => x.Class === characterClass).map(x => x.Type)));
    return specialization_data;
  } else {
    const specialization_data = Array.from(new Set(KIT_DATA.map(x => x.Type)));
    return specialization_data;
  }
} // Fetch "Kit" data.
//
//     Pull "Kit" data where the data matches the provided Specialization.
//


function fetchKits(specializations) {
  const kit_data = KIT_DATA.filter(x => specializations.find(element => element === x.Type)).map(x => x.Kit);
  return kit_data;
} // Fetch "Kit Description" data.
//
//     Pull "Kit Description" data where the data matches the provided Kit.
//


function fetchKitDescription(kit) {
  const kit_description_data = KIT_DATA.filter(x => x.Kit === kit).map(x => x.Description);
  return kit_description_data;
} // Fetch "Class Description" data.
//
//     Pull "Class Description" data where the data matches the provided Class.
//


function fetchClassDescription(class_name) {
  const class_description_data = CLASS_DESCRIPTION_DATA.filter(x => x.Class === class_name).map(x => x.Description);
  return class_description_data;
} // Fetch "Class Tags" data.
//
//     Pull "Class Tags" data where the data matches the provided Class.
//


function fetchClassTags(class_name) {
  const class_tag_data = CLASS_DESCRIPTION_DATA.filter(x => x.Class === class_name).map(x => x.Tags);
  return class_tag_data;
} // Fetch "Class Description" data.
//
//     Pull "Class Description" data where the data matches the provided Class.
//


function fetchSpecializationDescription(specialization) {
  const specialization_description_data = SPECIALIZATION_DESCRIPTION_DATA.filter(x => x.Specialization === specialization).map(x => x.Description);
  return specialization_description_data;
} // Fetch "Class Description" data.
//
//     Pull "Class Description" data where the data matches the provided Class.
//


function fetchSpecializationTags(specialization) {
  const specialization_tag_data = SPECIALIZATION_DESCRIPTION_DATA.filter(x => x.Specialization === specialization).map(x => x.Tags);
  return specialization_tag_data;
} // Fetch "Kit Tag" data.
//
//     Pull "Kit Tag" data where the data matches the provided Kit.
//


function fetchKitTags(kit) {
  const kit_tag_data = KIT_DATA.filter(x => x.Kit === kit).map(x => x.Tags);
  return kit_tag_data;
} // Components /////////////////////////////////////////////////////////////////
// A button that presents information.
//
//     When clicked, the button launches an alert with a pre-configured message.
//


class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      active: false
    };
  }

  onClick(event) {
    alert(this.props.message);
  }

  render() {
    return /*#__PURE__*/React.createElement("icon", {
      className: "info-btn",
      onClick: this.onClick
    }, /*#__PURE__*/React.createElement("b", null, "?"));
  }

} // class DiceRoller extends React.Component {
//   constructor(props){
//     super(props)
//     this.handleDiceRoll = this.handleDiceRoll.bind(this);
//   }
//   handleDiceRoll() {
//     this.props.onDiceRoll();
//   }
//   render() {
//       return(
//       <div className="dice_button">
//         <button className="btn" onClick={this.handleDiceRoll}>Roll Dice</button>
//       </div>
//     );
//   }
// }
// class DiceResult extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render() {
//     return (
//       <div className="dice_outcome">
//         <label id="dice_outcome">{this.props.diceValue}</label>
//       </div>
//     );
//   }
// }
// Class descriptions.
//
//     Presents a class description based on state.
//


class ClassDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "character_class_description_text"
    }, /*#__PURE__*/React.createElement("p", {
      className: "character_class_description"
    }, /*#__PURE__*/React.createElement("b", null, this.props.class, ":"), " ", fetchClassDescription(this.props.class), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "(", fetchClassTags(this.props.class), ")")));
  }

} // Specialization descriptions.
//
//     Presents a specialization description based on state.
//


class SpecializationDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "character_specialization_description_text"
    }, /*#__PURE__*/React.createElement("p", {
      className: "character_specialization_description"
    }, /*#__PURE__*/React.createElement("b", null, this.props.specialization, ":"), " ", fetchSpecializationDescription(this.props.specialization), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "(", fetchSpecializationTags(this.props.specialization), ")")));
  }

} // A dropdown for specializations.
//
//     When clicked, the dropdown lists available specializations.
//


class SpecializationHolder extends React.Component {
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
      onChange: this.handleChange,
      value: this.props.specialization
    }, specialization_options));
  }

} // Checkboxes for health and resources.
//
//     Provides a number of checkboxes proportional to some value (Strength, Cunning, etc.)
//


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

} //
//
//
//


class SkillCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "skills_header"
    }, /*#__PURE__*/React.createElement("b", null, this.props.class + " Skills"));
  }

} // Numeric inputs for Skills.
//
//     Clickable increase/decrease fields that represent Skill values.
//


class SkillHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(skill, event) {
    this.props.onChange(skill, event);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      key: this.props.skill.toLowerCase() + "_value",
      id: this.props.skill.toLowerCase() + "_value",
      className: this.props.skill.toLowerCase() + "_value"
    }, /*#__PURE__*/React.createElement("input", {
      name: this.props.skill.toLowerCase() + "_input_name",
      type: "number",
      value: this.props.skillValue,
      min: "0",
      max: "4",
      onChange: e => this.handleChange(this.props.skill, e)
    }));
  }

} // Text labels for Skills.
//
//     Text that becomes bolded and colored when their corresponding value is > 0.
//


class SkillTextHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.skillValue > 0) {
      return /*#__PURE__*/React.createElement("div", {
        key: this.props.skill.toLowerCase() + "_text",
        id: this.props.skill.toLowerCase() + "_text",
        className: this.props.skill.toLowerCase() + "_text"
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, this.props.skill)));
    }

    return /*#__PURE__*/React.createElement("div", {
      key: this.props.skill.toLowerCase() + "_text",
      id: this.props.skill.toLowerCase() + "_text",
      className: this.props.skill.toLowerCase() + "_text"
    }, /*#__PURE__*/React.createElement("label", null, this.props.skill));
  }

} // Text labels for Resources.
//
//     Text that becomes bolded and colored when their corresponding value is > 0.
//


class ResourceTextHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.skillValue > 0) {
      return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, this.props.text));
    }

    return /*#__PURE__*/React.createElement("label", null, this.props.text);
  }

} // A tracker for the number of equipped kits.
//
//     Tracks the number of equipped kits and displays it.
//


class KitCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.kit_count <= 4) {
      return /*#__PURE__*/React.createElement("div", {
        className: "kit_header"
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("b", null, this.props.specialization + " Kits (" + this.props.kit_count + "/4)")));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "kit_header"
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, this.props.specialization + " Kits (" + this.props.kit_count + "/4)"))));
    }
  }

} // A dropdown for Kit options.
//
//     When clicked, the dropdown lists available kits.
//


class KitHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(this.props.index, event);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "kit_chooser_0" + this.props.index,
      className: "kit_chooser_0" + this.props.index + " kit_chooser"
    }, /*#__PURE__*/React.createElement("label", null, "Equipped: "), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: this.props.equipped,
      onChange: this.handleChange
    }));
  }

} // Text for kit descriptions.
//
//     Plain text that changes depending on what Kit is selected.
//


class KitDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const kit_options_data = fetchKits(this.props.specializations);
    const kit_description = fetchKitDescription(this.props.kit);
    const kit_tags = fetchKitTags(this.props.kit);
    return /*#__PURE__*/React.createElement("div", {
      id: "kit_text_0" + this.props.index,
      className: "kit_text_0" + this.props.index
    }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("label", null, kit_options_data[this.props.index - 1])), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
      id: "kit_tags_0" + this.props.index,
      className: "kit_tags"
    }, "Tags: ", kit_tags), /*#__PURE__*/React.createElement("p", {
      id: "kit_description_0" + this.props.index,
      className: "kit_description"
    }, kit_description)); // if (this.props.equipped) {
    //   return (
    //     <div
    //     id={"kit_text_0" + this.props.index}
    //     className={"kit_text_0" + this.props.index}
    //   >
    //     <b><label>{kit_options_data[this.props.index - 1]}</label></b>
    //     <br></br>
    //     <p id={"kit_tags_0" + this.props.index} className={"kit_tags"}>
    //       Tags: {kit_tags}
    //     </p>
    //     <p
    //       id={"kit_description_0" + this.props.index}
    //       className="kit_description"
    //     >
    //       {kit_description}
    //     </p>
    //   </div>
    //   );
    // }
    // else {
    //   return (
    //     <div
    //     id={"kit_text_0" + this.props.index}
    //     className={"kit_text_0" + this.props.index}
    //   >
    //     <b><label>{kit_options_data[this.props.index - 1]}</label></b>
    //     <br></br>
    //     <p id={"kit_tags_0" + this.props.index} className={"kit_tags"}>
    //       Tags: {kit_tags}
    //     </p>
    //   </div>
    //   );
    // }
  }

} // Main App ///////////////////////////////////////////////////////////////////


class CharacterSheet extends React.Component {
  // State
  constructor(props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleSpecializationChange = this.handleSpecializationChange.bind(this);
    this.handleEquipChange = this.handleEquipChange.bind(this);
    this.handleDiceRoll = this.handleDiceRoll.bind(this);
    this.state = {
      Class: "",
      Tier: 1,
      Specialization_01: "",
      Kit_01: "",
      Kit_02: "",
      Kit_03: "",
      Kit_04: "",
      Kit_05: "",
      Kit_06: "",
      Kit_01_Equipped: false,
      Kit_02_Equipped: false,
      Kit_03_Equipped: false,
      Kit_04_Equipped: false,
      Kit_05_Equipped: false,
      Kit_06_Equipped: false,
      Kit_Equip_Count: 0,
      Perception: 0,
      Knowledge: 0,
      Strength: 0,
      Bravery: 0,
      Magic: 0,
      Presence: 0,
      Agility: 0,
      Cunning: 0,
      DiceValue: "+0"
    };
  } // Runs on Startup //////////////////////////////////////////////////////////


  componentDidMount() {
    // Initialize the page
    // Set the class
    this.setState({
      Class: "Alchemist"
    }); // Set the default skills for the class

    var class_skills = get_class_mapping("Alchemist");
    this.setState(class_skills); // Cascade the change, setting the specialization to the top-most value

    var specialization_data = fetchSpecializations("Alchemist");
    this.handleSpecializationChange(0, specialization_data[0]);
  } // Handlers for Events //////////////////////////////////////////////////////


  handleClassChange(event) {
    // Set the class
    this.setState({
      Class: event.target.value
    }); // Set the default skills for the class

    var class_skills = get_class_mapping(event.target.value);
    this.setState(class_skills); // Cascade the change, setting the specialization to the top-most value

    var specialization_data = fetchSpecializations(event.target.value);
    this.handleSpecializationChange(0, specialization_data[0]);
  }

  handleSpecializationChange(index, specialization) {
    // Set the specialization
    this.setState({
      Specialization_01: specialization
    }); // Cascade the change, setting the kits based on the specializations

    var kit_data = fetchKits([specialization]);
    this.setState({
      Kit_01: kit_data[0]
    });
    this.setState({
      Kit_02: kit_data[1]
    });
    this.setState({
      Kit_03: kit_data[2]
    });
    this.setState({
      Kit_04: kit_data[3]
    });
    this.setState({
      Kit_05: kit_data[4]
    });
    this.setState({
      Kit_06: kit_data[5]
    }); // Unequip all kits

    this.setState({
      Kit_01_Equipped: false
    });
    this.setState({
      Kit_02_Equipped: false
    });
    this.setState({
      Kit_03_Equipped: false
    });
    this.setState({
      Kit_04_Equipped: false
    });
    this.setState({
      Kit_05_Equipped: false
    });
    this.setState({
      Kit_06_Equipped: false
    });
    this.setState({
      Kit_Equip_Count: 0
    });
  }

  handleSkillChange(skill, event) {
    // Set the skill value
    this.setState({
      [skill]: parseInt(event.target.value)
    });
  }

  handleEquipChange(index, event) {
    // Update the equip marker
    if (index === 1) {
      this.setState({
        Kit_01_Equipped: event.target.checked
      });
    } else if (index === 2) {
      this.setState({
        Kit_02_Equipped: event.target.checked
      });
    } else if (index === 3) {
      this.setState({
        Kit_03_Equipped: event.target.checked
      });
    } else if (index === 4) {
      this.setState({
        Kit_04_Equipped: event.target.checked
      });
    } else if (index === 5) {
      this.setState({
        Kit_05_Equipped: event.target.checked
      });
    } else if (index === 6) {
      this.setState({
        Kit_06_Equipped: event.target.checked
      });
    } // Update the count


    if (event.target.checked === true) {
      this.setState(prevState => {
        return {
          Kit_Equip_Count: prevState.Kit_Equip_Count + 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          Kit_Equip_Count: prevState.Kit_Equip_Count - 1
        };
      });
    }
  }

  handleDiceRoll() {
    var result;
    var dice_outcome = Math.floor(Math.random() * 10) + 1;

    if (dice_outcome == 10) {
      result = "+2";
    } else if (dice_outcome >= 8) {
      result = "+1";
    } else if (dice_outcome >= 4) {
      result = "+0";
    } else if (dice_outcome >= 2) {
      result = "-1";
    } else if (dice_outcome == 1) {
      result = "-2";
    } else {
      result = "err";
    }

    this.setState({
      DiceValue: result
    });
  } // Render the Page on State Change //////////////////////////////////////////


  render() {
    // Generate the skills
    const skill_holders = SKILLS.map(skill => /*#__PURE__*/React.createElement(SkillHolder, {
      skill: skill,
      skillValue: this.state[skill],
      onChange: this.handleSkillChange
    }));
    const skill_text_holders = SKILLS.map(skill => /*#__PURE__*/React.createElement(SkillTextHolder, {
      skill: skill,
      skillValue: this.state[skill]
    })); // Put everything together

    return /*#__PURE__*/React.createElement("div", {
      id: "CharacterSheet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "character_sheet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "character_info_header"
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
    }, "Scoundrel"), /*#__PURE__*/React.createElement("option", {
      value: "Custom"
    }, "Custom"))), /*#__PURE__*/React.createElement(ClassDescriptionHolder, {
      class: this.state.Class
    }), /*#__PURE__*/React.createElement("div", {
      className: "barrier_01"
    }, /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("div", {
      className: "subclass_header"
    }, /*#__PURE__*/React.createElement("p", null, "Specialization")), /*#__PURE__*/React.createElement(SpecializationHolder, {
      class: this.state.Class,
      specialization: [this.state.Specialization_01],
      onChange: this.handleSpecializationChange
    }), /*#__PURE__*/React.createElement(SpecializationDescriptionHolder, {
      specialization: this.state.Specialization_01
    }), /*#__PURE__*/React.createElement("div", {
      className: "health_header"
    }, /*#__PURE__*/React.createElement("p", null, "Health / Resources")), /*#__PURE__*/React.createElement("div", {
      className: "physical_health_text"
    }, /*#__PURE__*/React.createElement(ResourceTextHolder, {
      text: "Physical Health",
      skillValue: this.state.Strength
    })), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "physical_health",
      boxCount: 3 + this.state.Strength
    }), /*#__PURE__*/React.createElement("div", {
      className: "mental_health_text"
    }, /*#__PURE__*/React.createElement(ResourceTextHolder, {
      text: "Mental Health",
      skillValue: this.state.Bravery
    })), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "mental_health",
      boxCount: 3 + this.state.Bravery
    }), /*#__PURE__*/React.createElement("div", {
      className: "potion_text"
    }, /*#__PURE__*/React.createElement(InfoBox, {
      message: "Potions can be used to recover two Physical boxes or to amplify kits with the Alchemy tag."
    }), /*#__PURE__*/React.createElement(ResourceTextHolder, {
      text: "Potions",
      skillValue: this.state.Knowledge
    })), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "potion",
      boxCount: 2 * this.state.Knowledge
    }), /*#__PURE__*/React.createElement("div", {
      className: "mana_text"
    }, /*#__PURE__*/React.createElement(InfoBox, {
      message: "Mana can be used to amplify or combine kits with the Talisman tag."
    }), /*#__PURE__*/React.createElement(ResourceTextHolder, {
      text: "Mana",
      skillValue: this.state.Presence
    })), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "mana",
      boxCount: 2 * this.state.Presence
    }), /*#__PURE__*/React.createElement("div", {
      className: "fortune_text"
    }, /*#__PURE__*/React.createElement(InfoBox, {
      message: "Fortune can be used to reroll an action or to amplify kits with the Gear tag."
    }), /*#__PURE__*/React.createElement(ResourceTextHolder, {
      text: "Fortune",
      skillValue: this.state.Bravery
    })), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "fortune",
      boxCount: 2 * this.state.Bravery
    }), /*#__PURE__*/React.createElement("div", {
      className: "trick_text"
    }, /*#__PURE__*/React.createElement(InfoBox, {
      message: "Tricks can be used for 'I Know a Guy', 'What You Needed', or to amplify kits with any tag."
    }), /*#__PURE__*/React.createElement(ResourceTextHolder, {
      text: "Tricks",
      skillValue: this.state.Cunning
    })), /*#__PURE__*/React.createElement(ResourceTrack, {
      prefix: "trick",
      boxCount: 2 * this.state.Cunning
    }), /*#__PURE__*/React.createElement("div", {
      className: "barrier_02"
    }, /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement(SkillCounter, {
      class: this.state.Class
    }), skill_holders, skill_text_holders, /*#__PURE__*/React.createElement("div", {
      className: "barrier_03"
    }, /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement(KitCounter, {
      kit_count: this.state.Kit_Equip_Count,
      specialization: this.state.Specialization_01
    }), /*#__PURE__*/React.createElement(KitHolder, {
      key: "kit_holder_1",
      index: 1,
      kit: this.state.Kit_01,
      equipped: this.state.Kit_01_Equipped,
      onChange: this.handleEquipChange
    }), /*#__PURE__*/React.createElement(KitHolder, {
      key: "kit_holder_2",
      index: 2,
      kit: this.state.Kit_02,
      equipped: this.state.Kit_02_Equipped,
      onChange: this.handleEquipChange
    }), /*#__PURE__*/React.createElement(KitHolder, {
      key: "kit_holder_3",
      index: 3,
      kit: this.state.Kit_03,
      equipped: this.state.Kit_03_Equipped,
      onChange: this.handleEquipChange
    }), /*#__PURE__*/React.createElement(KitHolder, {
      key: "kit_holder_4",
      index: 4,
      kit: this.state.Kit_04,
      equipped: this.state.Kit_04_Equipped,
      onChange: this.handleEquipChange
    }), /*#__PURE__*/React.createElement(KitHolder, {
      key: "kit_holder_5",
      index: 5,
      kit: this.state.Kit_05,
      equipped: this.state.Kit_05_Equipped,
      onChange: this.handleEquipChange
    }), /*#__PURE__*/React.createElement(KitHolder, {
      key: "kit_holder_6",
      index: 6,
      kit: this.state.Kit_06,
      equipped: this.state.Kit_06_Equipped,
      onChange: this.handleEquipChange
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: "kit_description_holder_1",
      index: 1,
      kit: this.state.Kit_01,
      equipped: this.state.Kit_01_Equipped,
      specializations: [this.state.Specialization_01]
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: "kit_description_holder_2",
      index: 2,
      kit: this.state.Kit_02,
      equipped: this.state.Kit_02_Equipped,
      specializations: [this.state.Specialization_01]
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: "kit_description_holder_3",
      index: 3,
      kit: this.state.Kit_03,
      equipped: this.state.Kit_03_Equipped,
      specializations: [this.state.Specialization_01]
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: "kit_description_holder_4",
      index: 4,
      kit: this.state.Kit_04,
      equipped: this.state.Kit_04_Equipped,
      specializations: [this.state.Specialization_01]
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: "kit_description_holder_5",
      index: 5,
      kit: this.state.Kit_05,
      equipped: this.state.Kit_05_Equipped,
      specializations: [this.state.Specialization_01]
    }), /*#__PURE__*/React.createElement(KitDescriptionHolder, {
      key: "kit_description_holder_6",
      index: 6,
      kit: this.state.Kit_06,
      equipped: this.state.Kit_06_Equipped,
      specializations: [this.state.Specialization_01]
    })));
  }

} // Configure React ////////////////////////////////////////////////////////////


const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render( /*#__PURE__*/React.createElement(CharacterSheet, null));

