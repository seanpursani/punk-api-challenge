import './App.scss';
import { useState } from 'react';
import Main from "./containers/Main/Main"
import Navbar from './containers/Navbar/Navbar';
import React from 'react'

function App() {

  //SEARCH BOX
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleInput = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);  
  }

  //FILTER ITEM
  
  // const [showHighABV, setShowHighABV] = useState(false);
  // const [showClassicRange, setShowClassicRange] = useState(false);
  // const [showAcidicPH, setShowAcidicPH] = useState(false);

  // const toggles = {
  //   toggleABV: setShowHighABV(!showHighABV),
  //   toggleClassicRange: setShowClassicRange(!showClassicRange),
  //   toggleAcidicPH: setShowAcidicPH(!showAcidicPH)
  // }

  return (
    <div className="App">
      <Navbar 
        className="nav"
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleInput={handleInput}
        // toggles={toggles}
      />
      <Main className="main" searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
