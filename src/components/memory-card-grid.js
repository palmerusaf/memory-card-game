import MemoryCard from "./memory-card.js";
import uniqid from "uniqid";

function MemoryCardGrid(props) {
  const { memoryImages, handleClick } = props;
  return (
    <div className="card-area">
      {memoryImages.map((img) => (
        <MemoryCard handleClick={handleClick} img={img} key={uniqid()} />
      ))}
    </div>
  );
}

export default MemoryCardGrid;
