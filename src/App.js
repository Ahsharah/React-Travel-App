import React from "react";
import DestinationList from "./components/DestinationList/DestinationList";
import DestinationForm from "./components/DestinationForm/DestinationForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <DestinationForm />
      <DestinationList />
    </div>
  );
}

export default App;
