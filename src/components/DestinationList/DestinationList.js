import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeDestination, toggleVisited } from '../../store/destinationsSlice';
import DestinationCard from './DestinationCard';

const DestinationList = () => {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeDestination(id));
  };

  const handleToggleVisited = (id) => {
    dispatch(toggleVisited(id));
  };

  return (
    <div>
      <h2>Your Destinations</h2>
      <div>
        {destinations.length > 0 ? (
          destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onToggleVisited={handleToggleVisited}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No destinations added yet!</p>
        )}
      </div>
    </div>
  );
};

export default DestinationList;
