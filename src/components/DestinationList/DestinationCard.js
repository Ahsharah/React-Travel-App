import React from 'react';

const DestinationCard = ({ destination, onToggleVisited, onDelete }) => {
  return (
    <div className="destination-card">
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <p>
        <strong>Best Time to Visit:</strong> {destination.bestTime}
      </p>
      <div>
        <button onClick={() => onToggleVisited(destination.id)}>
          {destination.visited ? 'Visited' : 'Not Visited'}
        </button>
        <button onClick={() => onDelete(destination.id)}>Delete</button>
      </div>
    </div>
  );
};

export default DestinationCard;
