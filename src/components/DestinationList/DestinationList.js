import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeDestination } from '../../store/destinationsSlice';
import DestinationCard from './DestinationCard';

const DestinationList = () => {
  const destinations = useSelector((state) => state.destinations.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeDestination(id));
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
              onRemove={handleRemove}
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
