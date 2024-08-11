import React, { useState } from "react";
import backOfCard from "./back.png";
import {useFlip} from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} className="PlayingCard">
      {isFlipped ? (
        <img src={front} alt="card front" />
      ) : (
        <img src={back} alt="card back" />
      )}
    </div>
  );
}

export default PlayingCard;
