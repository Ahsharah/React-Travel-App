import React from 'react';

const DestinationCard = ({ destination, onRemove }) => {
  return (
    <div className="destination-card">
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <p>
        <strong>Best Time to Visit:</strong> {destination.bestTime}
      </p>
      <button onClick={() => onRemove(destination.id)}>Remove</button>
    </div>
  );
};

export default DestinationCard;
