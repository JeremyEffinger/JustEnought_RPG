import React from "react";

const CharacterSheet = (props) => {
  const selectedCharacter = props.selectedCharacter;

  return (
    <div className="character-info-container">
      <div className="character-name">
        {selectedCharacter.characterName}
        <button
          onClick={() => props.handleDelete(selectedCharacter._id)}
          className="delete-button"
        >
          Delete
        </button>
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
      <div className="character-attributes-title">Attributes:</div>
      <div className="character-attributes-container">
        {Object.entries(selectedCharacter.attributes).map(([key, value]) => (
          <span key={key} className="character-attribute">
            {key}: {value}
          </span>
        ))}
      </div>
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
            {skill.skillName} (skilled: {skill.skilled.toString()}, mastered:{" "}
            {skill.mastered.toString()})
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
            {spell.name} (Circle: {spell.circle}, Type: {spell.type}, Source:{" "}
            {spell.source})
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
            {item.name} (Quantity: {item.quantity}, Weight: {item.weight} lbs,
            Description: {item.description})
          </span>
        ))}
      </div>
    </div>
  );
};

export default CharacterSheet;
