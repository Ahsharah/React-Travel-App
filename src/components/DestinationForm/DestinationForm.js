import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDestination } from '../../store/destinationsSlice';
import './DestinationForm.css';

const DestinationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;

    dispatch(addDestination({ ...formData, id: Date.now() }));
    setFormData({ name: '', description: '' });
  };

  return (
    <form className="destination-form" onSubmit={handleSubmit}>
      <h2>Add Destination</h2>
      <input
        type="text"
        placeholder="Destination Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      ></textarea>
      <button type="submit">Add Destination</button>
    </form>
  );
};

export default DestinationForm;
