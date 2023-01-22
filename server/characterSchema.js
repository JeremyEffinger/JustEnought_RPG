import mongoose from "mongoose";

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  characterName: {
    type: "String",
  },
  playerName: {
    type: "String",
  },
  classes: {
    type: ["Mixed"],
  },
  race: {
    type: "String",
  },
  type: {
    type: "String",
  },
  upbringing: {
    type: "String",
  },
  disposition: {
    type: "String",
  },
  attributes: {
    might: {
      type: "Number",
    },
    agility: {
      type: "Number",
    },
    vitality: {
      type: "Number",
    },
    intellect: {
      type: "Number",
    },
    judgement: {
      type: "Number",
    },
    personality: {
      type: "Number",
    },
  },
  hitpoints: {
    current: {
      type: "Number",
    },
    bonus: {
      type: "Number",
    },
    max: {
      type: "Number",
    },
  },
  armorRating: {
    current: {
      type: "Number",
    },
    bonus: {
      type: "Number",
    },
    source: {
      name: {
        type: "String",
      },
      type: {
        type: "String",
      },
    },
  },
  rollBonus: {
    type: "Number",
  },
  movement: {
    type: ["Mixed"],
  },
  skills: {
    type: ["Mixed"],
  },
  abilities: {
    type: ["Mixed"],
  },
  spells: {
    type: ["Mixed"],
  },
  techniques: {
    type: ["Mixed"],
  },
  inventory: {
    type: ["Mixed"],
  },
});

export default mongoose.model("Character", characterSchema);
