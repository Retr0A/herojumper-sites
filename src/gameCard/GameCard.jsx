import React from 'react';

import './GameCard.scss';

function GameCard({ gameName }) {
  return (
    <div className="gameCard">
        <h1>{ gameName }</h1>
    </div>
  );
}

export default GameCard;
