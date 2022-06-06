import "./App.scss";
import MemoryCardGrid from "./components/memory-card-grid.js";
import _ from "lodash";
import React, { useState, useEffect } from "react";

function App() {
  const importAlphabet = () => {
    const imgDirContext = require.context("./imgs/alpha/", false, /svg$/);
    return imgDirContext
      .keys()
      .map((key) => ({ src: imgDirContext(key), alt: getAltFrom(key) }));

    function getAltFrom(aKey) {
      return aKey.replace("./", "").replace(/\.[^/.]+$/, "");
    }
  };

  const [memoryImages, setMemoryImages] = useState(importAlphabet());

  function handleClick() {
    setMemoryImages(_.shuffle(memoryImages));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title smoked-rounded">Test Your Memory</h1>
        <MemoryCardGrid
          handleClick={handleClick}
          memoryImages={memoryImages}
        ></MemoryCardGrid>
      </header>
    </div>
  );
}

export default App;
