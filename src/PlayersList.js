import React from 'react';
import Player1 from './Player1'; 
import playersData from './players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {playersData.map((player, index) => (
        <Player1 key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;