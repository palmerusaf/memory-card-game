import "./App.scss";
import MemoryCard from "./components/memory-card.js";

function App() {
  const importAllImgs = () => {
    const imgDirContext = require.context("./imgs/alpha/", false, /svg$/);
    return imgDirContext.keys().map((key) => imgDirContext(key));
  };

  const memoryImages = importAllImgs();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title smoked-rounded">Test Your Memory</h1>
        <div className="card-area">
          {memoryImages.map((image, index) => (
            <MemoryCard image={image} index={index} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
