import './App.scss';
import { useState } from 'react';
import Main from "./containers/Main/Main"
import Navbar from './containers/Navbar/Navbar';
import React from 'react'



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleInput = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);  
  }


  return (
    <div className="App">
      <Navbar className="nav" searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleInput={handleInput}/>
      <Main className="main" searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
