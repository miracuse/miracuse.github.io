// Imports ////////////////////////////////////////////////////////////////////
import get_kit_data from "./kit_data.js";
import get_class_description_data from "./class_data.js";
import get_specialization_description_data from "./specialization_data.js";
import get_class_mapping from "./class_mapping.js";

// Globals ////////////////////////////////////////////////////////////////////
// A list of game-specific skills that a character can put points into
const SKILLS = [
  "Perception",
  "Knowledge",
  "Strength",
  "Bravery",
  "Magic",
  "Presence",
  "Agility",
  "Cunning",
];

// Hard-coded descriptions of "kits" that a character can equip
const KIT_DATA = get_kit_data();
const CLASS_DESCRIPTION_DATA = get_class_description_data();
const SPECIALIZATION_DESCRIPTION_DATA = get_specialization_description_data();

// Functions //////////////////////////////////////////////////////////////////
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
}

// Fetch "Specializations" data.
//
//     Pull "Specializations" data where the data matches the provided game Class.
//
function fetchSpecializations(characterClass) {
  if (characterClass != "Custom") {
    const specialization_data = Array.from(
      new Set(
        KIT_DATA.filter((x) => x.Class === characterClass).map((x) => x.Type)
      )
    );
    return specialization_data;
  } else {
    const specialization_data = Array.from(
      new Set(KIT_DATA.map((x) => x.Type))
    );
    return specialization_data;
  }
}

// Fetch "Kit" data.
//
//     Pull "Kit" data where the data matches the provided Specialization.
//
function fetchKits(specializations) {
  const kit_data = KIT_DATA.filter((x) =>
    specializations.find((element) => element === x.Type)
  ).map((x) => x.Kit);
  return kit_data;
}

// Fetch "Kit Description" data.
//
//     Pull "Kit Description" data where the data matches the provided Kit.
//
function fetchKitDescription(kit) {
  const kit_description_data = KIT_DATA.filter((x) => x.Kit === kit).map(
    (x) => x.Description
  );
  return kit_description_data;
}

// Fetch "Class Description" data.
//
//     Pull "Class Description" data where the data matches the provided Class.
//
function fetchClassDescription(class_name) {
  const class_description_data = CLASS_DESCRIPTION_DATA.filter(
    (x) => x.Class === class_name
  ).map((x) => x.Description);
  return class_description_data;
}

// Fetch "Class Tags" data.
//
//     Pull "Class Tags" data where the data matches the provided Class.
//
function fetchClassTags(class_name) {
  const class_tag_data = CLASS_DESCRIPTION_DATA.filter(
    (x) => x.Class === class_name
  ).map((x) => x.Tags);
  return class_tag_data;
}

// Fetch "Class Description" data.
//
//     Pull "Class Description" data where the data matches the provided Class.
//
function fetchSpecializationDescription(specialization) {
  const specialization_description_data =
    SPECIALIZATION_DESCRIPTION_DATA.filter(
      (x) => x.Specialization === specialization
    ).map((x) => x.Description);
  return specialization_description_data;
}

// Fetch "Class Description" data.
//
//     Pull "Class Description" data where the data matches the provided Class.
//
function fetchSpecializationTags(specialization) {
  const specialization_tag_data = SPECIALIZATION_DESCRIPTION_DATA.filter(
    (x) => x.Specialization === specialization
  ).map((x) => x.Tags);
  return specialization_tag_data;
}

// Fetch "Kit Tag" data.
//
//     Pull "Kit Tag" data where the data matches the provided Kit.
//
function fetchKitTags(kit) {
  const kit_tag_data = KIT_DATA.filter((x) => x.Kit === kit).map((x) => x.Tags);
  return kit_tag_data;
}

// Components /////////////////////////////////////////////////////////////////
// A button that presents information.
//
//     When clicked, the button launches an alert with a pre-configured message.
//
class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { active: false };
  }

  onClick(event) {
    alert(this.props.message);
  }

  render() {
    return (
      <icon className="info-btn" onClick={this.onClick}>
        <b>?</b>
      </icon>
    );
  }
}

// Class descriptions.
//
//     Presents a class description based on state.
//
class ClassDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.class === "Custom") {
      return (
        <div className="character_class_description_text">
          <p className="character_class_description">
            <b><a href={"https://miracuse.github.io/docs/more/custom_class.html"} target="_blank">{this.props.class}</a>:</b> {fetchClassDescription(this.props.class)}
            <br></br>
            <i>({fetchClassTags(this.props.class)})</i>
          </p>
        </div>
      );
    }
    else {
      return (
        <div className="character_class_description_text">
          <p className="character_class_description">
            <b><a href={"https://miracuse.github.io/docs/classes/" + this.props.class.toLowerCase() + "/"} target="_blank">{this.props.class}</a>:</b> {fetchClassDescription(this.props.class)}
            <br></br>
            <i>({fetchClassTags(this.props.class)})</i>
          </p>
        </div>
      );
    }
  }
}

// Specialization descriptions.
//
//     Presents a specialization description based on state.
//
class SpecializationDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="character_specialization_description_text">
        <p className="character_specialization_description">
          <b><a href={"https://miracuse.github.io/docs/more/specializations/" + this.props.specialization.toLowerCase() + ".html"} target="_blank">{this.props.specialization}</a>:</b>{" "}
          {fetchSpecializationDescription(this.props.specialization)}
          <br></br>
          <i>({fetchSpecializationTags(this.props.specialization)})</i>
        </p>
      </div>
    );
  }
}

// A dropdown for specializations.
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
    const specialization_options = specialization_options_data.map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ));

    return (
      <div className="character_subclass_01">
        <select
          id="subclass_select_01"
          name="subclass_01"
          onChange={this.handleChange}
          value={this.props.specialization}
        >
          {specialization_options}
        </select>
      </div>
    );
  }
}

// Checkboxes for health and resources.
//
//     Provides a number of checkboxes proportional to some value (Strength, Cunning, etc.)
//
class ResourceTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Create checkbox elements equal to the boxCount
    const box_holders = arange(this.props.boxCount).map((index) => (
      <label className="switch resource">
          <input 
            key={"skill_" + this.props.prefix + "_" + index}
            className="toggle"
            type="checkbox">
          </input>
          <span className="slider round resource_box"></span>
      </label>
      // <input
      //   key={"skill_" + this.props.prefix + "_" + index}
      //   type="checkbox">
      // </input>
    ));

    return (
      <div className={this.props.prefix + "_track"}>{box_holders}</div>
    );
  }
}

// Text labels for Resources.
//
//     Text that becomes bolded and colored when their corresponding value is > 0.
//
class ResourceTextHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.skillValue > 0) {
      return (
        <label>
          <span>{this.props.text}</span>
        </label>
      );
    }
    return <label>{this.props.text}</label>;
  }
}

//
//
//
//
class SkillCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills_header">
        <b>{this.props.class + " Skills"}</b>
      </div>
    );
  }
}

// Numeric inputs for Skills.
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
    return (
      <div
        key={this.props.skill.toLowerCase() + "_value"}
        id={this.props.skill.toLowerCase() + "_value"}
        className={this.props.skill.toLowerCase() + "_value"}
      >
        {/* Display Value */}
        <label className="skill_value_text">{"+" + this.props.skillValue} </label>

        {/* Increment Button */}
        <button className="btn increment_button" onClick={(e) => this.handleChange(this.props.skill, e)}>&#8593;</button>

        {/* Spacer */}
        <label> / </label>

        {/* Decrement Button */}
        <button className="btn decrement_button" onClick={(e) => this.handleChange(this.props.skill, e)}>&#8595;</button>
      </div>
    );
  }
}

// Text labels for Skills.
//
//     Text that becomes bolded and colored when their corresponding value is > 0.
//
class SkillTextHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.skillValue > 0) {
      return (
        <div
          key={this.props.skill.toLowerCase() + "_text"}
          id={this.props.skill.toLowerCase() + "_text"}
          className={this.props.skill.toLowerCase() + "_text"}
        >
          <label>
            <span>{this.props.skill}</span>
          </label>
        </div>
      );
    }
    return (
      <div
        key={this.props.skill.toLowerCase() + "_text"}
        id={this.props.skill.toLowerCase() + "_text"}
        className={this.props.skill.toLowerCase() + "_text"}
      >
        <label>{this.props.skill}</label>
      </div>
    );
  }
}

// A tracker for the number of equipped kits.
//
//     Tracks the number of equipped kits and displays it.
//
class KitCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.kit_count <= 4) {
      return (
        <div className="kit_header">
          <label>
            <b>
              {this.props.specialization +
                " Kits (" +
                this.props.kit_count +
                "/4)"}
            </b>
          </label>
        </div>
      );
    } else {
      return (
        <div className="kit_header">
          <label>
            <span>
              <b>
                {this.props.specialization +
                  " Kits (" +
                  this.props.kit_count +
                  "/4)"}
              </b>
            </span>
          </label>
        </div>
      );
    }
  }
}

// A button that equips and unequips kits.
//
//     When clicked, the button toggles states.
//
class KitEquipper extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(this.props.index, event);
  }

  render() {
    return (
      <div
        id={"kit_chooser_0" + this.props.index}
        className={"kit_chooser_0" + this.props.index + " kit_chooser"}
      >
        <label className="switch">
          <input 
            className="toggle"
            type="checkbox"
            checked={this.props.equipped}
            onChange={this.handleChange}>
          </input>
          <span className="slider round equip_box text-delta">
            EQUIP
          </span>
        </label>
      </div>
    );
  }
}

// Text for kit descriptions.
//
//     Dropdown that contains a description of the kit.
//
class KitDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Fetch kit data
    const kit_options_data = fetchKits(this.props.specializations);
    const kit_description = fetchKitDescription(this.props.kit);
    const kit_tags = String(fetchKitTags(this.props.kit));

    // Include icons based on tags
    const sword_icon = kit_tags.includes("Gear") ? <span class="material-symbols-outlined">swords</span> : <span></span>
    const flask_icon = kit_tags.includes("Alchemy") ? <span class="material-symbols-outlined">science</span> : <span></span>
    const wand_icon = kit_tags.includes("Talisman") ? <span class="material-symbols-outlined">auto_fix</span> : <span></span>
    const high_damage_icon = kit_tags.includes("High Damage") ? <span class="material-symbols-outlined">shift</span> : <span></span>
    const ranged_icon = kit_tags.includes("Ranged") ? <span class="material-symbols-outlined">keyboard_double_arrow_right</span> : <span></span>
    const reaction_icon = kit_tags.includes("Reaction") ? <span class="material-symbols-outlined">replay</span> : <span></span>
    const defense_icon = kit_tags.includes("Defense") ? <span class="material-symbols-outlined">security</span> : <span></span>
    const accurate_icon = kit_tags.includes("Accurate") ? <span class="material-symbols-outlined">point_scan</span> : <span></span>
    const healing_icon = kit_tags.includes("Healing") ? <span class="material-symbols-outlined">medical_services</span> : <span></span>
    const resource_icon = kit_tags.includes("Resource") ? <span class="material-symbols-outlined">atr</span> : <span></span>
    
    if (this.props.equipped) {
      return (
        <div
          id={"kit_text_0" + this.props.index}
          className={"kit_text_0" + this.props.index}
        >
          <div class="wrap-collapsible">
            <input id={"collapsible_"+this.props.index} class="toggle" type="checkbox"></input>
            <label for={"collapsible_"+this.props.index} class="lbl-toggle equipped-kit">
              {kit_options_data[this.props.index - 1]} {sword_icon}{flask_icon}{wand_icon}{high_damage_icon}{accurate_icon}{ranged_icon}{reaction_icon}{defense_icon}{resource_icon}{healing_icon}<br></br><span className="aleph">{String(kit_description).split(".")[0] + "."}</span><br></br><span class="material-symbols-outlined">expand_more</span>
            </label>
            <div class="collapsible-content">
              <div class="content-inner">
                <p id={"kit_tags_0" + this.props.index} className={"kit_tags"}>
                  Tags: {kit_tags}
                </p>
                <p className="kit_description">{String(kit_description).split(".").slice(1).join(".")}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    else {
      return (
        <div
          id={"kit_text_0" + this.props.index}
          className={"kit_text_0" + this.props.index}
        >
          <div class="wrap-collapsible">
            <input id={"collapsible_"+this.props.index} class="toggle" type="checkbox"></input>
            <label for={"collapsible_"+this.props.index} class="lbl-toggle">
              {kit_options_data[this.props.index - 1]} {sword_icon}{flask_icon}{wand_icon}{high_damage_icon}{accurate_icon}{ranged_icon}{reaction_icon}{defense_icon}{resource_icon}{healing_icon}<br></br><span className="aleph">{String(kit_description).split(".")[0] + "."}</span><br></br><span class="material-symbols-outlined">expand_more</span>
            </label>
            <div class="collapsible-content">
              <div class="content-inner">
                <p id={"kit_tags_0" + this.props.index} className={"kit_tags"}>
                  Tags: {kit_tags}
                </p>
                <p className="kit_description">{String(kit_description).split(".").slice(1).join(".")}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

// A button for dice rolling
//
//     When clicked, generates a random value appropriately.
//
class DiceRoller extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() { 
      return(
        <span className="btn dice_roller text-delta" onClick={this.handleChange}>Dice Roller</span>
      )
  }
}

// A value generated by the dice roller button
//
//     
//
class DiceValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return(
      <span className="dice_value">{this.props.dice_value}</span>
    )
  }
}

// Main App ///////////////////////////////////////////////////////////////////
class CharacterSheet extends React.Component {
  // State
  constructor(props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleSpecializationChange =
      this.handleSpecializationChange.bind(this);
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
      DiceValue: "5 (+0)",
    };
  }

  // Runs on Startup //////////////////////////////////////////////////////////
  componentDidMount() {
    // Initialize the page
    // Set the class
    this.setState({ Class: "Alchemist" });

    // Set the default skills for the class
    var class_skills = get_class_mapping("Alchemist");
    this.setState(class_skills);

    // Cascade the change, setting the specialization to the top-most value
    var specialization_data = fetchSpecializations("Alchemist");
    this.handleSpecializationChange(0, specialization_data[0]);
  }

  // Handlers for Events //////////////////////////////////////////////////////
  handleClassChange(event) {
    // Set the class
    this.setState({ Class: event.target.value });

    // Set the default skills for the class
    var class_skills = get_class_mapping(event.target.value);
    this.setState(class_skills);

    // Cascade the change, setting the specialization to the top-most value
    var specialization_data = fetchSpecializations(event.target.value);
    this.handleSpecializationChange(0, specialization_data[0]);
  }

  handleSpecializationChange(index, specialization) {
    // Set the specialization
    this.setState({ Specialization_01: specialization });

    // Cascade the change, setting the kits based on the specializations
    var kit_data = fetchKits([specialization]);
    this.setState({ Kit_01: kit_data[0] });
    this.setState({ Kit_02: kit_data[1] });
    this.setState({ Kit_03: kit_data[2] });
    this.setState({ Kit_04: kit_data[3] });
    this.setState({ Kit_05: kit_data[4] });
    this.setState({ Kit_06: kit_data[5] });

    // Unequip all kits
    this.setState({ Kit_01_Equipped: false });
    this.setState({ Kit_02_Equipped: false });
    this.setState({ Kit_03_Equipped: false });
    this.setState({ Kit_04_Equipped: false });
    this.setState({ Kit_05_Equipped: false });
    this.setState({ Kit_06_Equipped: false });
    this.setState({ Kit_Equip_Count: 0 });
  }

  handleSkillChange(skill, event) {
    // Check button type
    if (event.target.className.includes("increment")) {
      this.setState((prevState) => {
        if (prevState[skill] < 4) {
          return { [skill]: prevState[skill] + 1 };
        }
        else {
          return { [skill]: prevState[skill] };
        }
      });
    }
    else if (event.target.className.includes("decrement")) {
      this.setState((prevState) => {
        if (prevState[skill] != 0) {
          return { [skill]: prevState[skill] - 1 };
        }
        else {
          return { [skill]: prevState[skill] };
        }
      });
    }
    else {
      alert("Skill Not Recognized");
    }
    // Set the skill value
    // this.setState({ [skill]: parseInt(event.target.value) });
  }

  handleEquipChange(index, event) {
    // Update the equip marker
    if (index === 1) {
      this.setState((prevState) => {
        if (prevState.Kit_Equip_Count < 4 || event.target.checked === false) { return { Kit_01_Equipped: event.target.checked } }
        else { return { Kit_01_Equipped: prevState.Kit_01_Equipped }}
      });
    } else if (index === 2) {
      this.setState((prevState) => {
        if (prevState.Kit_Equip_Count < 4 || event.target.checked === false) { return { Kit_02_Equipped: event.target.checked } }
        else { return { Kit_02_Equipped: prevState.Kit_02_Equipped }}
      });
    } else if (index === 3) {
      this.setState((prevState) => {
        if (prevState.Kit_Equip_Count < 4 || event.target.checked === false) { return { Kit_03_Equipped: event.target.checked } }
        else { return { Kit_03_Equipped: prevState.Kit_03_Equipped }}
      });
    } else if (index === 4) {
      this.setState((prevState) => {
        if (prevState.Kit_Equip_Count < 4 || event.target.checked === false) { return { Kit_04_Equipped: event.target.checked } }
        else { return { Kit_04_Equipped: prevState.Kit_04_Equipped }}
      });
    } else if (index === 5) {
      this.setState((prevState) => {
        if (prevState.Kit_Equip_Count < 4 || event.target.checked === false) { return { Kit_05_Equipped: event.target.checked } }
        else { return { Kit_05_Equipped: prevState.Kit_05_Equipped }}
      });
    } else if (index === 6) {
      this.setState((prevState) => {
        if (prevState.Kit_Equip_Count < 4 || event.target.checked === false) { return { Kit_06_Equipped: event.target.checked } }
        else { return { Kit_06_Equipped: prevState.Kit_06_Equipped }}
      });
    }

    // Update the count
    if (event.target.checked === true) {
      this.setState((prevState) => {
        if (prevState.Kit_Equip_Count < 4) { return { Kit_Equip_Count: prevState.Kit_Equip_Count + 1 }; }
        else { return { Kit_Equip_Count: prevState.Kit_Equip_Count } }        
      });
    } else {
      this.setState((prevState) => {
        return { Kit_Equip_Count: prevState.Kit_Equip_Count - 1 };
      });
    }
  }

  handleDiceRoll() {
    var result;
    var dice_outcome = Math.floor(Math.random() * 10) + 1;
    if (dice_outcome == 10) {
      result = dice_outcome + " (+2)";
    } else if (dice_outcome >= 8) {
      result = dice_outcome + " (+1)";
    } else if (dice_outcome >= 4) {
      result = dice_outcome + " (+0)";
    } else if (dice_outcome >= 2) {
      result = dice_outcome + " (-1)";
    } else if (dice_outcome == 1) {
      result = dice_outcome + " (-2)";;
    } else {
      result = "err";
    }

    this.setState({ DiceValue: result });
  }

  // Render the Page on State Change //////////////////////////////////////////
  render() {
    // Generate the skills
    const skill_holders = SKILLS.map((skill) => (
      <SkillHolder
        skill={skill}
        skillValue={this.state[skill]}
        onChange={this.handleSkillChange}
      />
    ));

    const skill_text_holders = SKILLS.map((skill) => (
      <SkillTextHolder skill={skill} skillValue={this.state[skill]} />
    ));

    // Put everything together
    return (
      <div id="CharacterSheet">
        <div className="character_sheet">
          {/* Character Info  */}
          <div className="character_info_header">
            <p>Class</p>
          </div>
          <div className="character_class">
            <select
              id="class_select"
              name="characterclass"
              onChange={this.handleClassChange}
            >
              <option value="Alchemist">Alchemist</option>
              <option value="Soldier">Soldier</option>
              <option value="Mage">Mage</option>
              <option value="Scoundrel">Scoundrel</option>
              <option value="Custom">Custom</option>
            </select>
          </div>

          <ClassDescriptionHolder class={this.state.Class} />

          {/* Horizontal Rule */}
          <div className="barrier_01">
            <hr></hr>
          </div>

          {/* Subclasses */}
          <div className="subclass_header">
            <p>Specialization</p>
          </div>

          <SpecializationHolder
            class={this.state.Class}
            specialization={[this.state.Specialization_01]}
            onChange={this.handleSpecializationChange}
          />

          <SpecializationDescriptionHolder
            specialization={this.state.Specialization_01}
          />

          {/* Health */}
          <div className="health_header">
            <p>Health / Resources</p>
          </div>

          <div className="physical_health_text">
          <ResourceTextHolder
              text="Physical Health"
              skillValue={this.state.Strength}
            />
          </div>

          <ResourceTrack
            prefix="physical_health"
            boxCount={3 + this.state.Strength}
          />

          <div className="mental_health_text">
          <ResourceTextHolder
              text="Mental Health"
              skillValue={this.state.Bravery}
            />
          </div>

          <ResourceTrack
            prefix="mental_health"
            boxCount={3 + this.state.Bravery}
          />

          <div className="potion_text">
            <InfoBox message="Potions can be used to recover two Physical boxes or to amplify kits with the Alchemy tag." />
            <ResourceTextHolder
              text="Potions"
              skillValue={this.state.Knowledge}
            />
          </div>
          <ResourceTrack prefix="potion" boxCount={2 * this.state.Knowledge} />

          <div className="mana_text">
            <InfoBox message="Mana can be used to amplify or combine kits with the Talisman tag." />
            <ResourceTextHolder text="Mana" skillValue={this.state.Presence} />
          </div>
          <ResourceTrack prefix="mana" boxCount={2 * this.state.Presence} />

          <div className="fortune_text">
            <InfoBox message="Fortune can be used to reroll an action or to amplify kits with the Gear tag." />
            <ResourceTextHolder
              text="Fortune"
              skillValue={this.state.Bravery}
            />
          </div>
          <ResourceTrack prefix="fortune" boxCount={2 * this.state.Bravery} />

          <div className="trick_text">
            <InfoBox message="Tricks can be used for 'I Know a Guy', 'What You Needed', or to amplify kits with any tag." />
            <ResourceTextHolder text="Tricks" skillValue={this.state.Cunning} />
          </div>
          <ResourceTrack prefix="trick" boxCount={2 * this.state.Cunning} />

          {/* Horizontal Rule */}
          <div className="barrier_02">
            <hr></hr>
          </div>

          {/* Skills  */}
          <SkillCounter class={this.state.Class} />
          {/* Dice Roller */}
          <DiceRoller 
            onChange={this.handleDiceRoll}
          />
          <DiceValue 
            dice_value={this.state.DiceValue}
          />
          {/* Skill Point Counter */}
          {skill_holders}
          {skill_text_holders}

          {/* Horizontal Rule */}
          <div className="barrier_03">
            <hr></hr>
          </div>

          {/* Kits  */}
          <KitCounter
            kit_count={this.state.Kit_Equip_Count}
            specialization={this.state.Specialization_01}
          />
          <KitEquipper
            key={"kit_holder_1"}
            index={1}
            kit={this.state.Kit_01}
            equipped={this.state.Kit_01_Equipped}
            onChange={this.handleEquipChange}
          />
          <KitEquipper
            key={"kit_holder_2"}
            index={2}
            kit={this.state.Kit_02}
            equipped={this.state.Kit_02_Equipped}
            onChange={this.handleEquipChange}
          />
          <KitEquipper
            key={"kit_holder_3"}
            index={3}
            kit={this.state.Kit_03}
            equipped={this.state.Kit_03_Equipped}
            onChange={this.handleEquipChange}
          />
          <KitEquipper
            key={"kit_holder_4"}
            index={4}
            kit={this.state.Kit_04}
            equipped={this.state.Kit_04_Equipped}
            onChange={this.handleEquipChange}
          />
          <KitEquipper
            key={"kit_holder_5"}
            index={5}
            kit={this.state.Kit_05}
            equipped={this.state.Kit_05_Equipped}
            onChange={this.handleEquipChange}
          />
          <KitEquipper
            key={"kit_holder_6"}
            index={6}
            kit={this.state.Kit_06}
            equipped={this.state.Kit_06_Equipped}
            onChange={this.handleEquipChange}
          />

          <KitDescriptionHolder
            key={"kit_description_holder_1"}
            index={1}
            kit={this.state.Kit_01}
            equipped={this.state.Kit_01_Equipped}
            specializations={[this.state.Specialization_01]}
          />
          <KitDescriptionHolder
            key={"kit_description_holder_2"}
            index={2}
            kit={this.state.Kit_02}
            equipped={this.state.Kit_02_Equipped}
            specializations={[this.state.Specialization_01]}
          />
          <KitDescriptionHolder
            key={"kit_description_holder_3"}
            index={3}
            kit={this.state.Kit_03}
            equipped={this.state.Kit_03_Equipped}
            specializations={[this.state.Specialization_01]}
          />
          <KitDescriptionHolder
            key={"kit_description_holder_4"}
            index={4}
            kit={this.state.Kit_04}
            equipped={this.state.Kit_04_Equipped}
            specializations={[this.state.Specialization_01]}
          />
          <KitDescriptionHolder
            key={"kit_description_holder_5"}
            index={5}
            kit={this.state.Kit_05}
            equipped={this.state.Kit_05_Equipped}
            specializations={[this.state.Specialization_01]}
          />
          <KitDescriptionHolder
            key={"kit_description_holder_6"}
            index={6}
            kit={this.state.Kit_06}
            equipped={this.state.Kit_06_Equipped}
            specializations={[this.state.Specialization_01]}
          />
        </div>
      </div>
    );
  }
}

// Configure React ////////////////////////////////////////////////////////////
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<CharacterSheet />);
