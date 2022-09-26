"use strict"; // Globals ////////////////////////////////////////////////////////////////////

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
]; // Components /////////////////////////////////////////////////////////////////
// Header

class CharacterInfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "character_class",
        },
        /*#__PURE__*/ React.createElement(
          "select",
          {
            id: "class_select",
          },
          /*#__PURE__*/ React.createElement(
            "option",
            {
              value: "Alchemist",
            },
            "Alchemist"
          ),
          /*#__PURE__*/ React.createElement(
            "option",
            {
              value: "Soldier",
            },
            "Soldier"
          ),
          /*#__PURE__*/ React.createElement(
            "option",
            {
              value: "Mage",
            },
            "Mage"
          ),
          /*#__PURE__*/ React.createElement(
            "option",
            {
              value: "Scoundrel",
            },
            "Scoundrel"
          ),
          /*#__PURE__*/ React.createElement(
            "option",
            {
              value: "Hybrid",
            },
            "Hybrid"
          )
        )
      ),
      /*#__PURE__*/ React.createElement(
        "select",
        {
          id: "subclass_01",
        },
        /*#__PURE__*/ React.createElement(
          "option",
          {
            value: "Placeholder",
          },
          "Placeholder"
        )
      )
    );
  }
} // Health and points

class HealthContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const physical_health_html = Array(props.physical_health).map(
      /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
      })
    );
    const mental_health_html = Array(props.mental_health).map(
      /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
      })
    );
    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "physical_health_text",
        },
        /*#__PURE__*/ React.createElement("label", null, "Physical Health")
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "physical_health_track",
        },
        physical_health_html
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "mental_health_text",
        },
        /*#__PURE__*/ React.createElement("label", null, "Mental Health")
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "mental_health_track",
        },
        mental_health_html
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "fortune_point_text",
        },
        /*#__PURE__*/ React.createElement("label", null, "Fortune Points")
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "fortune_point_track",
        },
        /*#__PURE__*/ React.createElement("input", {
          type: "checkbox",
        }),
        /*#__PURE__*/ React.createElement("input", {
          type: "checkbox",
        }),
        /*#__PURE__*/ React.createElement("input", {
          type: "checkbox",
        })
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "prep_point_text",
        },
        /*#__PURE__*/ React.createElement("label", null, "Prep Points")
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "prep_point_track",
        },
        /*#__PURE__*/ React.createElement("input", {
          type: "checkbox",
        }),
        /*#__PURE__*/ React.createElement("input", {
          type: "checkbox",
        }),
        /*#__PURE__*/ React.createElement("input", {
          type: "checkbox",
        })
      )
    );
  }
} // Interactive skill list

class SkillContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skillName = props.value;
    return /*#__PURE__*/ React.createElement(
      "tr",
      null,
      /*#__PURE__*/ React.createElement(
        "td",
        null,
        /*#__PURE__*/ React.createElement(
          "div",
          {
            id: "{skillName}_text",
          },
          /*#__PURE__*/ React.createElement("label", null, skillName)
        )
      ),
      /*#__PURE__*/ React.createElement(
        "td",
        null,
        /*#__PURE__*/ React.createElement(
          "div",
          {
            id: "{skillName}_value",
          },
          /*#__PURE__*/ React.createElement("input", {
            type: "number",
            defaultValue: "0",
            min: "0",
            max: "4",
          })
        )
      )
    );
  }
} // Kits

class KitContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const index_val = props.value;
    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "kit_chooser_0{index_val}",
        },
        /*#__PURE__*/ React.createElement(
          "select",
          {
            id: "kit_type_0{index_val}",
          },
          /*#__PURE__*/ React.createElement(
            "option",
            {
              value: "placeholder",
            },
            "Placeholder"
          )
        ),
        /*#__PURE__*/ React.createElement(
          "select",
          {
            id: "kit_0{index_val}",
          },
          /*#__PURE__*/ React.createElement(
            "option",
            {
              value: "potion",
            },
            "Potion"
          )
        ),
        /*#__PURE__*/ React.createElement("div", {
          id: "kit_uses_0{index_val}",
        })
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "kit_text_0{index_val}",
        },
        /*#__PURE__*/ React.createElement(
          "p",
          {
            id: "kit_description_0{index_val}",
            class: "kit_description",
          },
          "Description"
        )
      )
    );
  }
} // Create the page ////////////////////////////////////////////////////////////

function App() {
  // Track state
  this.state = {
    physical_health: 3,
    mental_health: 5,
  }; // Generate the skills and kits

  const skill_holders = skills.map((skill) =>
    /*#__PURE__*/ React.createElement(SkillContainer, {
      key: skill,
      value: skill,
    })
  );
  const kit_holders = kits.map((counter) =>
    /*#__PURE__*/ React.createElement(KitContainer, {
      key: counter,
      value: counter,
    })
  ); // Return the page's HTML

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      class: "character_sheet",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        id: "class_header",
      },
      /*#__PURE__*/ React.createElement("b", null, "Class")
    ),
    /*#__PURE__*/ React.createElement(CharacterInfoContainer, null),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        id: "health_header",
        physical_health: physical_health,
        mental_health: mental_health,
      },
      /*#__PURE__*/ React.createElement("b", null, "Health")
    ),
    /*#__PURE__*/ React.createElement(HealthContainer, null),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "skills_header",
      },
      /*#__PURE__*/ React.createElement("b", null, "Skills")
    ),
    /*#__PURE__*/ React.createElement(
      "table",
      {
        id: "skill_table",
      },
      skill_holders
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "kit_header",
      },
      /*#__PURE__*/ React.createElement("b", null, "Kits")
    ),
    kit_holders
  );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
