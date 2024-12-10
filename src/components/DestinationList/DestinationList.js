import React from 'react';
import { useSelector } from 'react-redux';

const DestinationList = () => {
  const destinations = useSelector((state) => state.destinations);

  return (
    <div className="destination-list">
      <h2>Destinations</h2>
      {destinations.length ? (
        <ul>
          {destinations.map((dest) => (
            <li key={dest.id}>
              <strong>{dest.name}</strong> - {dest.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No destinations added yet.</p>
      )}
    </div>
  );
};

export default DestinationList;
