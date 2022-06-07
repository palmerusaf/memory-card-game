import React, { useState } from "react";
import { importAlphabet } from "./helpers/import-alphabet.js";
import Title from "./components/title.js";
import Directions from "./components/directions.js";
import UserScore from "./components/user-score.js";
import HighScore from "./components/high-score.js";
import MemoryCardGrid from "./components/memory-card-grid.js";
import _, { set } from "lodash";
import "./App.scss";

function App() {
  const [memoryImgs, setMemoryImgs] = useState(importAlphabet());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [previousSelectedImgs, setPreviousSelectedImgs] = useState([]);

  function handleClick(e) {
    const imgSelected = e.target.alt;
    shuffleImgs();
    handleScoring();
    console.log(previousSelectedImgs);
    setPreviousSelectedImgs(previousSelectedImgs.concat(imgSelected));

    function handleScoring() {
      !isSelectedBefore() ? setScore(score + 5) : setScore(0);
      if(isSelectedBefore())setPreviousSelectedImgs([])
      if (score > highScore) setHighScore(score);
    }

    function isSelectedBefore() {
      previousSelectedImgs.some((img) => img == imgSelected);
    }

    function shuffleImgs() {
      setMemoryImgs(_.shuffle(memoryImgs));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Directions />
        <div className="score-field">
          <UserScore score={score} />
          <HighScore highScore={highScore} />
        </div>
        <MemoryCardGrid
          handleClick={handleClick}
          memoryImgs={memoryImgs}
        ></MemoryCardGrid>
      </header>
    </div>
  );
}

export default App;
