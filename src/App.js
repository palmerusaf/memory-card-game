import "./App.scss";

function App() {
  const memoryImages = [];

  function importAll(r) {
    r.keys().forEach((key) => memoryImages.push(r(key)));
  }

  importAll(require.context("./imgs/alpha/", false, /svg$/));

  function renderAllImages() {
    return (
      <div>
        {memoryImages.map((image) => {
          return <img src={image} alt="" />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Test Your Memory</h1>
        {renderAllImages()}
      </header>
    </div>
  );
}

export default App;
