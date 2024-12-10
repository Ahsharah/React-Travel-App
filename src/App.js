import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header/Header';
import DestinationForm from './components/DestinationForm/DestinationForm';
import DestinationList from './components/DestinationList/DestinationList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <DestinationForm />
        <DestinationList />
      </div>
    </Provider>
  );
}

export default App;
