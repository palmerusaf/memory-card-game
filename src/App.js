import "./App.scss";

function App() {
  const importAllImgs = () => {
    const imgDirContext = require.context("./imgs/alpha/", false, /svg$/);
    return imgDirContext.keys().map((key) => imgDirContext(key));
  };

  const memoryImages = importAllImgs();

  const renderAllImages = () => (
    <div className="card-area">
      {memoryImages.map((image, index) => (
        <button className="card-area__card smoked-rounded">
          <img src={image} alt={`memory item ${index + 1}`} className='card-area__img' />
        </button>
      ))}
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title smoked-rounded">Test Your Memory</h1>
        {renderAllImages()}
      </header>
    </div>
  );
}

export default App;
