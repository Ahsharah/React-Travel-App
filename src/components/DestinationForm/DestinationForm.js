import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDestination } from '../../store/destinationsSlice';

const DestinationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    bestTime: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDestination(formData));
    setFormData({ name: '', description: '', bestTime: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Destination Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Best Time to Visit"
        value={formData.bestTime}
        onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
      />
      <button type="submit">Add Destination</button>
    </form>
  );
};

export default DestinationForm;
