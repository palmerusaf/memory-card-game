import MemoryCard from "./memory-card.js";

function MemoryCardGrid(props) {
  const { memoryImages, handleClick } = props;
  return (
    <div className="card-area">
      {memoryImages.map((image, index) => (
        <MemoryCard handleClick={handleClick} image={image} index={index} />
      ))}
    </div>
  );
}

export default MemoryCardGrid;
