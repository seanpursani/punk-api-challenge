import './App.scss';
import { useState } from 'react';
import Main from "./containers/Main/Main"
import Navbar from './containers/Navbar/Navbar';
import React from 'react';

function App() {
  const [stateABV, setStateABV] = useState(false)
  const [stateClassic, setStateClassic] = useState(false)
  const [stateAcidic, setStateAcidic] = useState(false)

  //SEARCH BOX
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleInput = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);  
  }

  return (
    <div className="App">
      <Navbar 
        className="nav"
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleInput={handleInput}
        stateABV={stateABV}
        setStateABV={setStateABV}
        stateAcidic={stateAcidic}
        setStateAcidic={setStateAcidic}
        stateClassic={stateClassic}
        setStateClassic={setStateClassic}
      />
      <Main className="main" 
        searchTerm={searchTerm}
        stateClassic={stateClassic}
        stateAcidic={stateAcidic}
        stateABV={stateABV}
      />
    </div>
  );
}

export default App;
