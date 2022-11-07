// import React, { useState } from '/assets/js/react-dom.development.js';

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

// Create the page ////////////////////////////////////////////////////////////
export default function App() {
    // Generate the skills and kits
    // const skill_holders = skills.map(skill => (
    //     <tr>
    //         <td>
    //             <div id={skill + "_text"}>
    //                 <label>{skill}</label>
    //             </div>
    //         </td>
    //         <td>
    //             <div id={ skill + "_value"}>
    //                 <input type="number" defaultValue="0" min="0" max="4" />
    //             </div>
    //         </td>
    //     </tr>
    // ));

    // const kit_holders = kits.map(counter => (
    //     <div>
    //         <div id={"kit_chooser_0"+counter}>
    //             <select id={"kit_type_0"+counter}>
    //                 <option value="placeholder">Placeholder</option>
    //             </select>
    //             <select id={"kit_0"+counter}>
    //                 <option value="potion">Potion</option>
    //             </select>
    //             <div id={"kit_uses_0"+counter}></div>
    //         </div>

    //         <div id={"kit_text_0"+counter}>
    //             <p
    //                 id={"kit_description_0"+counter}
    //                 class="kit_description"
    //             >
    //                 Description
    //             </p>
    //         </div>
    //     </div>
    // ));

    return (
        <div id="CharacterSheet">
            <h3>Character Sheet</h3>
            <div class="character_sheet">
                {/* <div class="class_header">
                <b>Class</b>
            </div> */}

                <div class="character_class">
                    <select id="class_select" name="characterclass">
                        <option value="Alchemist">Alchemist</option>
                        <option value="Soldier">Soldier</option>
                        <option value="Mage">Mage</option>
                        <option value="Scoundrel">Scoundrel</option>
                    </select>
                </div>

                <div class="character_subclass_01">
                    <select id="subclass_select_01" name="subclass_01">
                        <option value="Enchanter">Enchanter</option>
                        <option value="Sapper">Sapper</option>
                        <option value="Transmuter">Transmuter</option>
                    </select>
                </div>

                <div class="health_header">
                    <b>Health</b>
                </div>

                <div class="physical_health_text">
                    <label>Physical Health</label>
                </div>

                <div class="mental_health_text">
                    <label>Mental Health</label>
                </div>

                <div
                    class="physical_health_track"
                    id="physical_health_track"
                ></div>

                <div class="mental_health_track" id="mental_health_track"></div>

                <div class="resources_header">
                    <b>Resources</b>
                </div>

                <div
                    class="charge_point_text"
                    aria-describedby="charge_point_description"
                >
                    <label>Charge Points</label>
                </div>

                <div
                    role="tooltip"
                    id="charge_point_description"
                    class="info_tab"
                >
                    <p>Placeholder 01</p>
                </div>

                <div
                    class="mana_point_text"
                    aria-describedby="mana_point_description"
                >
                    <label>Mana Points</label>
                </div>

                <div
                    role="tooltip"
                    id="mana_point_description"
                    class="info_tab"
                >
                    <p>Placeholder 02</p>
                </div>

                <div class="fortune_point_text">
                    <label>Fortune Points</label>
                </div>

                <div class="prep_point_text">
                    <label>Prep Points</label>
                </div>

                <div class="charge_point_track" id="charge_point_track"></div>

                <div class="mana_point_track" id="mana_point_track"></div>

                <div class="fortune_point_track" id="fortune_point_track"></div>

                <div class="prep_point_track" id="prep_point_track"></div>

                <div class="skills_header">
                    <b>Skills</b>
                </div>

                <div class="perception_text" id="perception_text">
                    <label>Perception</label>
                </div>

                <div class="perception_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="perception_value"
                        name="perception"
                    />
                </div>

                <div class="knowledge_text" id="knowledge_text">
                    <label>Knowledge</label>
                </div>

                <div class="knowledge_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="knowledge_value"
                        name="knowledge"
                    />
                </div>

                <div class="Strength_text" id="Strength_text">
                    <label>Strength</label>
                </div>

                <div class="Strength_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="Strength_value"
                        name="Strength"
                    />
                </div>

                <div class="bravery_text" id="bravery_text">
                    <label>Bravery</label>
                </div>

                <div class="bravery_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="bravery_value"
                        name="bravery"
                    />
                </div>

                <div class="Magic_text" id="Magic_text">
                    <label>Magic</label>
                </div>

                <div class="Magic_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="Magic_value"
                        name="Magic"
                    />
                </div>

                <div class="Presence_text" id="Presence_text">
                    <label>Presence</label>
                </div>

                <div class="Presence_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="Presence_value"
                        name="Presence"
                    />
                </div>

                <div class="cunning_text" id="cunning_text">
                    <label>Cunning</label>
                </div>

                <div class="cunning_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="cunning_value"
                        name="cunning"
                    />
                </div>

                <div class="agility_text" id="agility_text">
                    <label>Agility</label>
                </div>

                <div class="agility_value">
                    <input
                        type="number"
                        value="0"
                        min="0"
                        max="4"
                        class="skill_holder"
                        id="agility_value"
                        name="agility"
                    />
                </div>
                <div class="kit_header">
                    <b>Kits</b>
                </div>

                <div class="kit_chooser_01" name="1">
                    <select id="kit_type_01" name="1">
                        <option value="placeholder">Placeholder</option>
                    </select>
                    <select id="kit_01" name="1">
                        <option value="potion">Potion</option>
                    </select>
                    <div id="kit_tags_01" class="kit_tags" name="1">
                        Alchemy
                    </div>
                </div>

                <div class="kit_text_01">
                    <p id="kit_description_01" class="kit_description" name="1">
                        Description
                    </p>
                </div>

                <div class="kit_chooser_02" name="2">
                    <select id="kit_type_02" name="2">
                        <option value="placeholder">Placeholder</option>
                    </select>
                    <select id="kit_02" name="2">
                        <option value="potion">Potion</option>
                    </select>
                    <div id="kit_tags_02" class="kit_tags" name="2">
                        Alchemy
                    </div>
                </div>

                <div class="kit_text_02">
                    <p id="kit_description_02" class="kit_description" name="2">
                        Description
                    </p>
                </div>

                <div class="kit_chooser_03" name="3">
                    <select id="kit_type_03" name="3">
                        <option value="placeholder">Placeholder</option>
                    </select>
                    <select id="kit_03" name="3">
                        <option value="potion">Potion</option>
                    </select>
                    <div id="kit_tags_03" class="kit_tags" name="3">
                        Alchemy
                    </div>
                </div>

                <div class="kit_text_03">
                    <p id="kit_description_03" class="kit_description" name="3">
                        Description
                    </p>
                </div>

                <div class="kit_chooser_04" name="4">
                    <select id="kit_type_04" name="4">
                        <option value="placeholder">Placeholder</option>
                    </select>
                    <select id="kit_04" name="4">
                        <option value="potion">Potion</option>
                    </select>
                    <div id="kit_tags_04" class="kit_tags" name="4">
                        Alchemy
                    </div>
                </div>

                <div class="kit_text_04">
                    <p id="kit_description_04" class="kit_description" name="4">
                        Description
                    </p>
                </div>
            </div>
        </div>
    );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
