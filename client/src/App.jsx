import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState("[]");
  const urlWithProxy = "/api/v1/characters";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <button onClick={getDataFromServer}>Access server using proxy</button>
      <p>
        data :
        {data.map((character) => (
          <li key={character._id}>{character.characterName}</li>
        ))}
      </p>
    </div>
  );
}

export default App;
