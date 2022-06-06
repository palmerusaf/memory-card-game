import MemoryCard from "./memory-card.js";

function MemoryCardGrid(props) {
  const { memoryImages, handleClick } = props;
  return (
    <div className="card-area">
      {memoryImages.map((img) => (
        <MemoryCard handleClick={handleClick} img={img} key={img.alt} />
      ))}
    </div>
  );
}

export default MemoryCardGrid;
