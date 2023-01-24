import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import CharacterSheet from "./components/CharacterSheet";
import NewCharacterForm from "./components/NewCharacterForm";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [showNewCharacterForm, setShowNewCharacterForm] = useState(false);
  const [createNewCharacter, setCreateNewCharacter] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
    if (characterId === "new") {
      setShowForm(true);
    } else {
      if (!characters.length) return;
      const selectedChar = characters.find((char) => char._id === characterId);
      setSelectedCharacter(selectedChar);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/characters/${id}`);

      const updatedCharacters = characters.filter(
        (char) => char._id !== selectedCharacter._id
      );

      setCharacters(updatedCharacters);
      setSelectedCharacter(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
    setSelectedCharacter(newCharacter);
    setShowNewCharacterForm(false);
  };

  return (
    <div className="character-info-container">
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
        <option value="createNew" onClick={() => setShowForm(true)}>
          Create New Character
        </option>
      </select>
      {showForm ? (
        <NewCharacterForm handleCreate={handleCreateCharacter} />
      ) : selectedCharacter ? (
        <CharacterSheet
          selectedCharacter={selectedCharacter}
          handleDelete={handleDelete}
        />
      ) : (
        <div>Please select a character.</div>
      )}
    </div>
  );
}
export default App;
