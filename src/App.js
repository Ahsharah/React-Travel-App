import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations } from './store/destinationsSlice';
import DestinationForm from './components/DestinationForm/DestinationForm';
import DestinationList from './components/DestinationList/DestinationList';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations.items);
  const status = useSelector((state) => state.destinations.status);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <h1>Travel Organizer App</h1>
      </header>
      <main>
        <DestinationForm />
        {status === 'loading' && <p>Loading destinations...</p>}
        {status === 'failed' && <p>Failed to load destinations!</p>}
        <DestinationList destinations={destinations} />
      </main>
    </div>
  );
};

export default App;
