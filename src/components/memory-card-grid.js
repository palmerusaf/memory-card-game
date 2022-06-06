import MemoryCard from "./memory-card.js";
import uniqid from "uniqid";

function MemoryCardGrid(props) {
  const {  memoryImgs, handleClick } = props;
  return (
    <div className="card-area">
      {memoryImgs.map((img) => (
        <MemoryCard handleClick={handleClick} img={img} key={uniqid()} />
      ))}
    </div>
  );
}

export default MemoryCardGrid;
