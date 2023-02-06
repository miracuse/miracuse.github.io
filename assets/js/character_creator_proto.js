// Imports ////////////////////////////////////////////////////////////////////
import get_data from "./data.js";
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
const DATA = get_data();

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
      new Set(DATA.filter((x) => x.Class === characterClass).map((x) => x.Type))
    );
    return specialization_data;
  }
  else {
    const specialization_data = Array.from(
      new Set(DATA.map((x) => x.Type))
    );
    return specialization_data;
  }
  
}

// Fetch "Kit" data.
//
//     Pull "Kit" data where the data matches the provided Specialization.
//
function fetchKits(specializations) {
  const kit_data = DATA.filter((x) =>
    specializations.find((element) => element === x.Type)
  ).map((x) => x.Kit);
  return kit_data;
}

// Fetch "Kit Description" data.
//
//     Pull "Kit Description" data where the data matches the provided Kit.
//
function fetchKitDescription(kit) {
  const kit_description_data = DATA.filter((x) => x.Kit === kit).map(
    (x) => x.Description
  );
  return kit_description_data;
}

// Fetch "Kit Tag" data.
//
//     Pull "Kit Tag" data where the data matches the provided Kit.
//
function fetchKitTags(kit) {
  const kit_tag_data = DATA.filter((x) => x.Kit === kit).map((x) => x.Tags);
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
      <input key={index} type="checkbox"></input>
    ));

    return <div className={this.props.prefix + "_track"}>{box_holders}</div>;
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
        <input
          name={this.props.skill.toLowerCase() + "_input_name"}
          type="number"
          value={this.props.skillValue}
          min="0"
          max="4"
          onChange={(e) => this.handleChange(this.props.skill, e)}
        />
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

// A dropdown for Kit options.
//
//     When clicked, the dropdown lists available kits.
//
class KitHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(this.props.index, event.target.value);
  }

  generateKitOption(x) {
    if (x == this.props.kit) {
      return (
        <option key={x} value={x} selected>
          {x}
        </option>
      );
    } else {
      return (
        <option key={x} value={x}>
          {x}
        </option>
      );
    }
  }

  render() {
    // Generate kit type selections
    const kit_types = this.props.specializations.map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ));

    // Populate the kit selections based on the kit types
    const kit_options_data = fetchKits(this.props.specializations);
    const kit_options = kit_options_data.map((x) => this.generateKitOption(x));

    return (
      <div
        id={"kit_chooser_0" + this.props.index}
        className={"kit_chooser_0" + this.props.index}
      >
        <select
          id={"kit_type_0" + this.props.index}
          className={"kit_type_0" + this.props.index}
        >
          {kit_types}
        </select>
        <select
          id={"kit_0" + this.props.index}
          className={"kit_0" + this.props.index}
          onChange={this.handleChange}
        >
          {kit_options}
        </select>
      </div>
    );
  }
}

// Text for kit descriptions.
//
//     Plain text that changes depending on what Kit is selected.
//
class KitDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const kit_description = fetchKitDescription(this.props.kit);
    const kit_tags = fetchKitTags(this.props.kit);
    return (
      <div
        id={"kit_text_0" + this.props.index}
        className={"kit_text_0" + this.props.index}
      >
        <p id={"kit_tags_0" + this.props.index} className={"kit_tags"}>
          Tags: {kit_tags}
        </p>
        <p
          id={"kit_description_0" + this.props.index}
          className="kit_description"
        >
          {kit_description}
        </p>
      </div>
    );
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
    this.handleKitChange = this.handleKitChange.bind(this);
    this.state = {
      Class: "",
      Tier: 1,
      Specialization_01: [""],
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
      Cunning: 0,
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
    // var specializations_copy = this.state.Specialization_01.slice(0);
    // specializations_copy[index] = specialization;
    // this.setState({ Specialization_01: specializations_copy });
    this.setState( {Specialization_01 : specialization} );

    // Cascade the change, setting the kits based on the specializations
    var kit_data = fetchKits([specialization]);
    this.handleKitChange(1, kit_data[0]);
    this.handleKitChange(2, kit_data[1]);
    this.handleKitChange(3, kit_data[2]);
    this.handleKitChange(4, kit_data[3]);
  }

  handleSkillChange(skill, event) {
    // Set the skill value
    this.setState({ [skill]: parseInt(event.target.value) });
  }

  handleKitChange(index, kit) {
    // Set the kit
    if (index === 1) {
      this.setState({ Kit_01: kit });
    }
    if (index === 2) {
      this.setState({ Kit_02: kit });
    }
    if (index === 3) {
      this.setState({ Kit_03: kit });
    }
    if (index === 4) {
      this.setState({ Kit_04: kit });
    }
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
          <div className="character_class_text">
            <InfoBox message="Your Class determines what skills you start with." />
            <label>Class</label>
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

          <div className="character_tier_text">
            <InfoBox message="Your Tier determines how many specializations you can have at one time. More experienced characters have a higher tier." />
            <label>Tier</label>
          </div>
          <div className="character_tier">
            <div id="tier_select" name="charactertier">
              <input type="number" defaultValue="1" min="1" max="4" />
            </div>
          </div>

          {/* Subclasses */}
          <div className="subclass_header">
            <p>Specializations</p>
          </div>

          <SpecializationHolder
            class={this.state.Class}
            specialization={this.state.Specialization_01}
            onChange={this.handleSpecializationChange}
          />

          <div className="character_subclass_02">
            <select id="subclass_select_02" name="subclass_02" disabled={true}>
              <option value="None">Locked</option>
            </select>
          </div>
          <div className="character_subclass_03">
            <select id="subclass_select_03" name="subclass_03" disabled={true}>
              <option value="None">Locked</option>
            </select>
          </div>
          <div className="character_subclass_04">
            <select id="subclass_select_04" name="subclass_04" disabled={true}>
              <option value="None">Locked</option>
            </select>
          </div>

          {/* Health */}
          <div className="health_header">
            <p>Health</p>
          </div>

          <div className="physical_health_text">
            <InfoBox message="Physical Health represents how many times you can be hit before becoming incapacitated. Increasing Strength will add more boxes." />
            <label>Physical Health</label>
          </div>

          <ResourceTrack
            prefix="physical_health"
            boxCount={3 + this.state.Strength}
          />

          <div className="mental_health_text">
            <InfoBox message="Mental Health represents how much psychological harm you can withstand before becoming incapacitated. Increasing Presence will add more boxes." />
            <label>Mental Health</label>
          </div>

          <ResourceTrack
            prefix="mental_health"
            boxCount={3 + this.state.Presence}
          />

          {/* Resources */}
          <div className="resources_header">
            <b>Resources</b>
          </div>

          <div className="charge_point_text">
            <InfoBox message="Charge Points can be used to work potent alchemy, amplifying the effects of an equipped Alchemy kit. They can also be used to 'Produce a Potion', 'Produce a Grenade', or declare that you have 'What You Needed'." />
            <label>Charge Points</label>
          </div>
          <ResourceTrack
            prefix="charge_point"
            boxCount={2 * this.state.Knowledge}
          />

          <div className="mana_point_text">
            <InfoBox message="Mana Points can be used to cast powerful spells, amplifying the effects of an equipped Talisman or combining two Talismans to produce a complex effect." />
            <label>Mana Points</label>
          </div>
          <ResourceTrack
            prefix="mana_point"
            boxCount={2 * this.state.Presence}
          />

          <div className="fortune_point_text">
            <InfoBox message="Fortune Points can be used to pull off fantastical physical feats, amplifying the effects of an equipped Weapon. They can also be used to 'Reroll' or 'Avoid Harm'." />
            <label>Fortune Points</label>
          </div>
          <ResourceTrack
            prefix="fortune_point"
            boxCount={2 * this.state.Bravery}
          />

          <div className="prep_point_text">
            <InfoBox message="Prep Points can be used to 'Disappear From Sight', 'Produce a Disguise', 'Use a Magic Device', or declare 'I Know a Guy'." />
            <label>Prep Points</label>
          </div>
          <ResourceTrack
            prefix="prep_point"
            boxCount={2 * this.state.Cunning}
          />

          {/* Skills  */}
          <div className="skills_header">
            <b>Skills</b>
          </div>
          {skill_holders}
          {skill_text_holders}

          {/* Kits  */}
          <div className="kit_header">
            <b>Kits</b>
          </div>
          <KitHolder
            key={1}
            index={1}
            kit={this.state.Kit_01}
            specializations={[this.state.Specialization_01]}
            onChange={this.handleKitChange}
          />
          <KitHolder
            key={2}
            index={2}
            kit={this.state.Kit_02}
            specializations={[this.state.Specialization_01]}
            onChange={this.handleKitChange}
          />
          <KitHolder
            key={3}
            index={3}
            kit={this.state.Kit_03}
            specializations={[this.state.Specialization_01]}
            onChange={this.handleKitChange}
          />
          <KitHolder
            key={4}
            index={4}
            kit={this.state.Kit_04}
            specializations={[this.state.Specialization_01]}
            onChange={this.handleKitChange}
          />

          <KitDescriptionHolder key={1} index={1} kit={this.state.Kit_01} />
          <KitDescriptionHolder key={2} index={2} kit={this.state.Kit_02} />
          <KitDescriptionHolder key={3} index={3} kit={this.state.Kit_03} />
          <KitDescriptionHolder key={4} index={4} kit={this.state.Kit_04} />
        </div>
      </div>
    );
  }
}

// Configure React ////////////////////////////////////////////////////////////
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<CharacterSheet />);
