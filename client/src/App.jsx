import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState();

  useEffect(() => {
    axios
      .get("api/v1/characters")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(selectedCharacter);
  }, [selectedCharacter]);

  const handleSelectCharacter = (characterId) => {
    if (!characters.length) return;
    const selectedChar = characters.find((char) => char._id === characterId);
    setSelectedCharacter(selectedChar);
  };

  return (
    <div className="character-sheet">
      <div className="character-sheet-title">Select a character</div>
      <select
        className="character-select"
        onChange={(e) => handleSelectCharacter(e.target.value)}
      >
        <option value="" disabled selected>
          Select a character
        </option>
        {characters.map((character) => (
          <option key={character._id} value={character._id}>
            {character.characterName}
          </option>
        ))}
      </select>
      {selectedCharacter ? (
        <div className="character-info-container">
          <div className="character-name">
            {selectedCharacter.characterName}
          </div>
          <div className="character-player-name">
            Player Name: {selectedCharacter.playerName}
          </div>
          <div className="character-race">Race: {selectedCharacter.race}</div>
          <div className="character-upbringing">
            Upbringing: {selectedCharacter.upbringing}
          </div>
          <div className="character-disposition">
            Disposition: {selectedCharacter.disposition}
          </div>
          {selectedCharacter ? (
            <>
              <div className="character-attributes-title">Attributes:</div>
              <div className="character-attributes-container">
                {Object.entries(selectedCharacter.attributes).map(
                  ([key, value]) => (
                    <span key={key} className="character-attribute">
                      {key}: {value}
                    </span>
                  )
                )}
              </div>
            </>
          ) : (
            <div>Please select a character</div>
          )}
          <div className="character-hitpoints">
            Hitpoints: {selectedCharacter.hitpoints.current}/
            {selectedCharacter.hitpoints.max}
          </div>
          <div className="character-armor-rating">
            Armor Rating: {selectedCharacter.armorRating.current}
          </div>
          <div className="character-roll-bonus">
            Roll Bonus: {selectedCharacter.rollBonus}
          </div>
          <div className="character-movement">
            Movement:{" "}
            {selectedCharacter.movement.map((movement) => (
              <span key={movement.type}>
                {movement.type} ({movement.speed})
              </span>
            ))}
          </div>
          <div className="character-skills">
            Skills:{" "}
            {selectedCharacter.skills.map((skill) => (
              <span key={skill.skillName}>
                {skill.skillName} (skilled: {skill.skilled.toString()},
                mastered: {skill.mastered.toString()})
              </span>
            ))}
          </div>
          <div className="character-abilities">
            Abilities:{" "}
            {selectedCharacter.abilities.map((ability) => (
              <span key={ability.name} className="character-ability">
                {ability.name} ({ability.source})
              </span>
            ))}
          </div>
          <div className="character-spells">
            Spells:{" "}
            {selectedCharacter.spells.map((spell) => (
              <span key={spell.name} className="character-spells">
                {spell.name} (Circle: {spell.circle}, Type: {spell.type},
                Source: {spell.source})
              </span>
            ))}
          </div>
          <div className="character-techniques">
            Techniques:{" "}
            {selectedCharacter.techniques.map((technique) => (
              <span key={technique.name} className="character-technique">
                {technique.name} (Art: {technique.art}, Type: {technique.type},
                Source: {technique.source})
              </span>
            ))}
          </div>
          <div className="character-inventory">
            Inventory:{" "}
            {selectedCharacter.inventory.map((item) => (
              <span key={item.name} className="character-item">
                {item.name} (Quantity: {item.quantity}, Weight: {item.weight}{" "}
                lbs, Description: {item.description})
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div>Please select a character.</div>
      )}
    </div>
  );
}

export default App;
