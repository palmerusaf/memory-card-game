import React, { useState, useEffect } from "react";

function MemoryCard(props) {
  const { image, index, handleClick } = props;
  return (
    <button onClick={handleClick} className="card-area__card smoked-rounded">
      <img
        src={image}
        alt={`memory item ${index + 1}`}
        className="card-area__img"
      />
    </button>
  );
}

export default MemoryCard;
