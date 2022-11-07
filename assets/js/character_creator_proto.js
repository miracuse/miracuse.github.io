// Imports ////////////////////////////////////////////////////////////////////
import get_data from "./data.js";

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

// The number of "kits" that a character can equip
const KIT_COUNT = 4;

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

// Fetch specializations given a class
function fetchSpecializations(characterClass) {
  const specialization_data = Array.from(
    new Set(DATA.filter((x) => x.Class === characterClass).map((x) => x.Type))
  );
  return specialization_data;
}

// Fetch kits given a specialization
function fetchKits(specializations) {
  const kit_data = DATA.filter((x) =>
    specializations.find((element) => element === x.Type)
  ).map((x) => x.Kit);
  return kit_data;
}

// Fetch a kit description given a kit name
function fetchKitDescription(kit) {
  const kit_description_data = DATA.filter((x) => x.Kit === kit).map(
    (x) => x.Description
  );
  return kit_description_data;
}

// Components /////////////////////////////////////////////////////////////////
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
        >
          {specialization_options}
        </select>
      </div>
    );
  }
}

// Checkbox tracks for resources (health, points, etc.)
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

// Auto-generated kit dropdowns
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
    const kit_types = this.props.specializations.map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ));

    // Populate the kit selections based on the kit types
    const kit_options_data = fetchKits(this.props.specializations);
    const kit_options = kit_options_data.map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ));

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

class KitDescriptionHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const kit_description = fetchKitDescription(this.props.kit);
    return (
      <div
        id={"kit_text_0" + this.props.index}
        className={"kit_text_0" + this.props.index}
      >
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
      Cunning: 0,
    };
  }

  componentDidMount() {
    // Initialize the page
    this.setState({ Class: "Alchemist" });
    var specialization_data = fetchSpecializations("Alchemist");
    this.handleSpecializationChange(0, specialization_data[0]);
  }

  handleClassChange(event) {
    // Set the class
    this.setState({ Class: event.target.value });

    // Cascade the change, setting the specialization to the top-most value
    var specialization_data = fetchSpecializations(event.target.value);
    this.handleSpecializationChange(0, specialization_data[0]);
  }

  handleSpecializationChange(index, specialization) {
    // Set the specialization
    var specializations_copy = this.state.Specializations.slice(0);
    specializations_copy[index] = specialization;
    this.setState({ Specializations: specializations_copy });

    // Cascade the change, setting the kits based on the specializations
    var kit_data = fetchKits([specialization]);
    this.handleKitChange(1, kit_data[0]);
    this.handleKitChange(2, kit_data[0]);
    this.handleKitChange(3, kit_data[0]);
    this.handleKitChange(4, kit_data[0]);
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

  render() {
    // Generate the skills
    const skill_holders = SKILLS.map((skill) => (
      <div
        key={skill.toLowerCase() + "_value"}
        id={skill.toLowerCase() + "_value"}
        className={skill.toLowerCase() + "_value"}
      >
        <input
          type="number"
          defaultValue="0"
          min="0"
          max="4"
          onChange={(e) => this.handleSkillChange(skill, e)}
        />
      </div>
    ));

    const skill_text_holders = SKILLS.map((skill) => (
      <div
        key={skill.toLowerCase() + "_text"}
        id={skill.toLowerCase() + "_text"}
        className={skill.toLowerCase() + "_text"}
      >
        <label>{skill}</label>
      </div>
    ));

    // Generate the kits
    const kit_holders = arange(KIT_COUNT).map((counter) => (
      <KitHolder
        key={counter}
        index={counter}
        specializations={this.state.Specializations}
        onChange={this.handleKitChange}
      />
    ));

    // const kit_description_holders = arange(KIT_COUNT).map((counter) => (
    //   <KitDescriptionHolder
    //     key={counter}
    //     index={counter}
    //     kit={this.state.Kits[counter-1]}
    //     />
    // ));

    // Put everything together
    return (
      <div id="CharacterSheet">
        <div className="character_sheet">
          {/* Character Info  */}
          <div className="character_info_header">
            <p>Class</p>
          </div>
          <div className="character_class_text">
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
            </select>
          </div>

          <div className="character_tier_text">
            <p>Tier</p>
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

          <SubclassHolder
            class={this.state.Class}
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
            <label>Physical Health</label>
          </div>

          <ResourceTrack
            prefix="physical_health"
            boxCount={3 + this.state.Strength}
          />

          <div className="mental_health_text">
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
            <label>Charge Points</label>
          </div>
          <ResourceTrack
            prefix="charge_point"
            boxCount={2 * this.state.Knowledge}
          />

          <div className="mana_point_text">
            <label>Mana Points</label>
          </div>
          <ResourceTrack prefix="mana_point" boxCount={2 * this.state.Presence} />

          <div className="fortune_point_text">
            <label>Fortune Points</label>
          </div>
          <ResourceTrack
            prefix="fortune_point"
            boxCount={2 * this.state.Bravery}
          />

          <div className="prep_point_text">
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
          {kit_holders}
          <KitDescriptionHolder key={1} index={1} kit={this.state.Kit_01} />
          <KitDescriptionHolder key={2} index={2} kit={this.state.Kit_02} />
          <KitDescriptionHolder key={3} index={3} kit={this.state.Kit_03} />
          <KitDescriptionHolder key={4} index={4} kit={this.state.Kit_04} />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<CharacterSheet />);
