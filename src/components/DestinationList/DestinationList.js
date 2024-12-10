import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisited, deleteDestination } from '../../store/destinationsSlice';
import DestinationCard from './DestinationCard';

const DestinationList = () => {
  const destinations = useSelector(state => state.destinations);
  const dispatch = useDispatch();

  const handleToggleVisited = (id) => {
    dispatch(toggleVisited(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteDestination(id));
  };

  return (
    <div className="destination-list">
      {destinations.length === 0 ? (
        <p>No destinations added yet!</p>
      ) : (
        destinations.map(dest => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            onToggleVisited={handleToggleVisited}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default DestinationList;
