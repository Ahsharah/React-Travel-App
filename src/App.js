import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import DestinationList from './components/DestinationList/DestinationList';
import DestinationForm from './components/DestinationForm/DestinationForm';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DestinationForm />
        <DestinationList />
      </main>
    </div>
  );
}

export default App;
