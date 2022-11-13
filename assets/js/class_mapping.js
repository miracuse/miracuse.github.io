export default function get_class_mapping(gameClass) {
  if (gameClass === "Alchemist") {
    return {
      Perception: 2,
      Knowledge: 2,
      Strength: 0,
      Bravery: 0,
      Magic: 0,
      Presence: 0,
      Agility: 0,
      Cunning: 0,
    };
  } else if (gameClass === "Soldier") {
    return {
      Perception: 0,
      Knowledge: 0,
      Strength: 2,
      Bravery: 2,
      Magic: 0,
      Presence: 0,
      Agility: 0,
      Cunning: 0,
    };
  } else if (gameClass === "Mage") {
    return {
      Perception: 0,
      Knowledge: 0,
      Strength: 0,
      Bravery: 0,
      Magic: 2,
      Presence: 2,
      Agility: 0,
      Cunning: 0,
    };
  } else if (gameClass === "Scoundrel") {
    return {
      Perception: 0,
      Knowledge: 0,
      Strength: 0,
      Bravery: 0,
      Magic: 0,
      Presence: 0,
      Agility: 2,
      Cunning: 2,
    };
  } else {
    return {
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
}
