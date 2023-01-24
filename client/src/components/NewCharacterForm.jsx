import React, { useState } from "react";
import "../styles/NewCharacterForm.css";
import axios from "axios";

const NewCharacterForm = () => {
  const [formData, setFormData] = useState({
    characterName: "",
    playerName: "",
    classes: [],
    race: "",
    type: "",
    upbringing: "",
    disposition: "",
    attributes: {
      might: 0,
      agility: 0,
      vitality: 0,
      intellect: 0,
      judgement: 0,
      personality: 0,
    },
    hitpoints: {
      current: 0,
      bonus: 0,
      max: 0,
    },
    armorRating: {
      current: 0,
      bonus: 0,
      source: {
        name: "",
        type: "",
      },
    },
    rollBonus: 0,
    movement: [],
    skills: [],
    abilities: [],
    spells: [],
    techniques: [],
    inventory: [],
  });

  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value,
      },
      console.log(formData)
    );
  };

  const handleChangeArray = (e) => {
    if (!formData[e.target.name]) {
      formData[e.target.name] = [];
    }
    formData[e.target.name].push(e.target.value);
    setFormData({ ...formData });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/characters", formData);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Character Name:
        <input
          type="text"
          name="characterName"
          value={formData.characterName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Player Name:
        <input
          type="text"
          name="playerName"
          value={formData.playerName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Class:
        <input
          type="text"
          name="classes"
          value={formData.classes}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Race:
        <input
          type="text"
          name="race"
          value={formData.race}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Upbringing:
        <input
          type="text"
          name="upbringing"
          value={formData.upbringing}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Disposition:
        <input
          type="text"
          name="disposition"
          value={formData.disposition}
          onChange={handleChange}
        />
      </label>
      <br />

      <div className="attributes-container">
        <div className="attributes-title">Attributes:</div>
        <div className="attribute-input-row">
          <label>Might:</label>
          <input
            type="number"
            name="might"
            value={formData.might}
            onChange={handleChange}
          />
        </div>
        <div className="attribute-input-row">
          <label>Agility:</label>
          <input
            type="number"
            name="agility"
            value={formData.agility}
            onChange={handleChange}
          />
        </div>
        <div className="attribute-input-row">
          <label>Vitality:</label>
          <input
            type="number"
            name="vitality"
            value={formData.vitality}
            onChange={handleChange}
          />
        </div>
        <div className="attribute-input-row">
          <label>Intellect:</label>
          <input
            type="number"
            name="intellect"
            value={formData.intellect}
            onChange={handleChange}
          />
        </div>
        <div className="attribute-input-row">
          <label>Judgement:</label>
          <input
            type="number"
            name="judgement"
            value={formData.judgement}
            onChange={handleChange}
          />
        </div>
        <div className="attribute-input-row">
          <label>Personality:</label>
          <input
            type="number"
            name="personality"
            value={formData.personality}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label>Hitpoints:</label>
          <input
            type="number"
            name="hitpoints.current"
            value={formData.hitpoints.current}
            onChange={handleChange}
          />
          <input
            type="number"
            name="hitpoints.max"
            value={formData.hitpoints.max}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label>Armor Rating:</label>
          <input
            type="number"
            name="armorRating.current"
            value={formData.armorRating.current}
            onChange={handleChange}
          />
          <input
            type="number"
            name="armorRating.bonus"
            value={formData.armorRating.bonus}
            onChange={handleChange}
          />
          <input
            type="text"
            name="armorRating.source"
            value={formData.armorRating.source.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label>Roll Bonus:</label>
          <input
            type="number"
            name="rollBonus"
            value={formData.rollBonus}
            onChange={handleChange}
          />
          <div>
            <label>Add Skills:</label>
            <input
              type="text"
              name="skillName"
              placeholder="Skill Name"
              value={null}
              onChange={handleChange}
            />
            <input
              type="checkbox"
              name="skilled"
              value={null}
              onChange={handleChange}
            />{" "}
            Skilled
            <input
              type="checkbox"
              name="mastered"
              value={null}
              onChange={handleChange}
            />{" "}
            Mastered
            <button type="button" onClick={null}>
              Add Skill
            </button>
          </div>
          <div>
            <label>Add Spells:</label>
            <input type="text" name="spellName" placeholder="Spell Name" />
            <input type="number" name="circle" placeholder="Circle Number" />
            <input type="text" name="type" placeholder="Type of Spell" />
            <input
              type="text"
              name="description"
              placeholder="Spell Description"
            />
            <input type="text" name="source" placeholder="Source" />
            <button type="button" onClick={null}>
              Add Spell
            </button>
          </div>
          <div>
            <label>Add Abilities:</label>
            <input type="text" name="abilityName" placeholder="Ability Name" />
            <input
              type="text"
              name="description"
              placeholder="Ability Description"
            />
            <input type="text" name="source" placeholder="Source" />
            <button type="button" onClick={null}>
              Add Ability
            </button>
            <label>Add Techniques:</label>
            <input
              type="text"
              name="techniqueName"
              placeholder="Technique Name"
            />
            <input type="text" name="art" placeholder="Art" />
            <input type="text" name="type" placeholder="Type" />
            <input
              type="text"
              name="description"
              placeholder="Technique Description"
            />
            <input type="text" name="source" placeholder="Source" />
            <button type="button" onClick={null}>
              Add Technique
            </button>
          </div>
          <div className="character-inventory">
            <div className="character-inventory-title">Inventory:</div>
            {formData.inventory.map((item, index) => (
              <div key={index} className="character-inventory-item">
                <input
                  type="text"
                  name="itemName"
                  placeholder="Item Name"
                  value={item.itemName}
                  onChange={(e) => handleInventoryChange(e, index)}
                />
                <input
                  type="text"
                  name="itemDescription"
                  placeholder="Item Description"
                  value={item.itemDescription}
                  onChange={(e) => handleInventoryChange(e, index)}
                />
                <button onClick={null}>Remove Item</button>
              </div>
            ))}
            <button oonClick={null}>Add Item</button>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Create Character
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewCharacterForm;
