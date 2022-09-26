"use strict";

// Globals ////////////////////////////////////////////////////////////////////
const e = React.createElement;
const kits = [1, 2, 3, 4];
const skills = [
  "Perception",
  "Knowledge",
  "Strength",
  "Bravery",
  "Magic",
  "Focus",
  "Agility",
  "Cunning",
];

// Components /////////////////////////////////////////////////////////////////
// Header
class CharacterInfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="character_class">
          <select id="class_select">
            <option value="Alchemist">Alchemist</option>
            <option value="Soldier">Soldier</option>
            <option value="Mage">Mage</option>
            <option value="Scoundrel">Scoundrel</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <select id="subclass_01">
          <option value="Placeholder">Placeholder</option>
        </select>
      </div>
    );
  }
}

// Health and points
class HealthContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const physical_health_html = Array(props.physical_health).map(
      <input type="checkbox"></input>
    );
    const mental_health_html = Array(props.mental_health).map(
      <input type="checkbox"></input>
    );
    return (
      <div>
        <div id="physical_health_text">
          <label>Physical Health</label>
        </div>

        <div id="physical_health_track">{physical_health_html}</div>

        <div id="mental_health_text">
          <label>Mental Health</label>
        </div>

        <div id="mental_health_track">{mental_health_html}</div>

        <div id="fortune_point_text">
          <label>Fortune Points</label>
        </div>

        <div id="fortune_point_track">
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div>

        <div id="prep_point_text">
          <label>Prep Points</label>
        </div>

        <div id="prep_point_track">
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div>
      </div>
    );
  }
}

// Interactive skill list
class SkillContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skillName = props.value;
    return (
      <tr>
        <td>
          <div id="{skillName}_text">
            <label>{skillName}</label>
          </div>
        </td>
        <td>
          <div id="{skillName}_value">
            <input type="number" defaultValue="0" min="0" max="4" />
          </div>
        </td>
      </tr>
    );
  }
}

// Kits
class KitContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const index_val = props.value;
    return (
      <div>
        <div id="kit_chooser_0{index_val}">
          <select id="kit_type_0{index_val}">
            <option value="placeholder">Placeholder</option>
          </select>
          <select id="kit_0{index_val}">
            <option value="potion">Potion</option>
          </select>
          <div id="kit_uses_0{index_val}"></div>
        </div>

        <div id="kit_text_0{index_val}">
          <p id="kit_description_0{index_val}" class="kit_description">
            Description
          </p>
        </div>
      </div>
    );
  }
}

// Create the page ////////////////////////////////////////////////////////////
function App() {
  // Track state
  this.state = {
    physical_health: 3,
    mental_health: 5,
  };

  // Generate the skills and kits
  const skill_holders = skills.map((skill) => (
    <SkillContainer key={skill} value={skill} />
  ));

  const kit_holders = kits.map((counter) => (
    <KitContainer key={counter} value={counter} />
  ));

  // Return the page's HTML
  return (
    <div class="character_sheet">
      <div id="class_header">
        <b>Class</b>
      </div>
      <CharacterInfoContainer />
      <div
        id="health_header"
        physical_health={physical_health}
        mental_health={mental_health}
      >
        <b>Health</b>
      </div>
      <HealthContainer />
      <div class="skills_header">
        <b>Skills</b>
      </div>
      <table id="skill_table">{skill_holders}</table>
      <div class="kit_header">
        <b>Kits</b>
      </div>
      {kit_holders}
    </div>
  );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
