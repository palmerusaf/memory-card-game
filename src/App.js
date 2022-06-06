import React, { useState, useEffect } from "react";
import Title from "./components/title.js";
import UserScore from "./components/user-score.js";
import MemoryCardGrid from "./components/memory-card-grid.js";
import _ from "lodash";
import "./App.scss";

function App() {
  const importAlphabet = () => {
    const imgDirContext = require.context("./imgs/alpha/", false, /svg$/);
    return imgDirContext.keys().map((imgKey) => ({
      src: imgDirContext(imgKey),
      alt: getAltFrom(imgKey),
    }));

    function getAltFrom(aImgKey) {
      const letterName = aImgKey.replace("./", "").replace(/\.[^/.]+$/, "");
      return `Phoenician Letter ${letterName}`;
    }
  };

  const [memoryImgs, setMemoryImgs] = useState(importAlphabet());
  const [score, setScore] = useState(0);
  const [lastImgClicked, setLastImgClicked] = useState(null);

  function handleClick(e) {
    shuffleImgs();
    handleScoring();

    function handleScoring() {
      const imgClicked = e.target.alt;
      lastImgClicked !== imgClicked ? setScore(score + 5) : setScore(0);
      setLastImgClicked(imgClicked);
    }

    function shuffleImgs() {
      setMemoryImgs(_.shuffle(memoryImgs));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <UserScore score={score} />
        <MemoryCardGrid
          handleClick={handleClick}
          memoryImgs={memoryImgs}
        ></MemoryCardGrid>
      </header>
    </div>
  );
}

export default App;
