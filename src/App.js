import React, { useState } from "react";
import { importAlphabet } from "./helpers/import-alphabet.js";
import Title from "./components/title.js";
import Directions from "./components/directions.js";
import ScoreField from "./components/score-field.js";
import { ScoreKeeper } from "./modules/score-keeper";
import MemoryCardGrid from "./components/memory-card-grid.js";
import _ from "lodash";
import "./App.scss";

function App() {
  const [memoryImgs, setMemoryImgs] = useState(importAlphabet());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(e) {
    const selectedImg = e.target.alt;
    handleScoring();
    shuffleImgs();

    function handleScoring() {
      ScoreKeeper.score(selectedImg);
      setScore(ScoreKeeper.getScore());
      setHighScore(ScoreKeeper.getHighScore());
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
        <ScoreField score={score} highScore={highScore} />
        <MemoryCardGrid
          handleClick={handleClick}
          memoryImgs={memoryImgs}
        ></MemoryCardGrid>
      </header>
    </div>
  );
}

export default App;
