import React, { useState, useEffect } from "react";

function MemoryCard(props) {
  const { img, handleClick } = props;
  return (
    <button onClick={handleClick} className="card-area__card smoked-rounded">
      <img src={img.src} alt={img.alt} className="card-area__img" />
    </button>
  );
}

export default MemoryCard;
