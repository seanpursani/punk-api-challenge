import './App.scss';
import { useState } from 'react';
import Main from "./containers/Main/Main"
import Navbar from './containers/Navbar/Navbar';
import React from 'react';

function App() {
  const [beers, setBeers] = useState(false)

  const [searchFilter, setSearchFilter] = useState({
    name: "",
    abv: false,
    year: false,
    ph: false
  })
  
  const handleInput = (event) => {
    const tempFilter = {...searchFilter};
    if (event.target.id === "name") {
      tempFilter.name = event.target.value.toLowerCase()
    } else if (event.target.id === "abv") {
      tempFilter.abv = event.target.checked;
    } else if (event.target.id === "year") {
      tempFilter.year = event.target.checked;
    } else if (event.target.id === "ph") {
      tempFilter.ph = event.target.checked;
    }
    setSearchFilter(tempFilter);  
  }

  return (
    <div className="App">
      <Navbar 
        className="nav"
        handleInput = {handleInput}
      />
      <Main className="main" 
        searchFilter = {searchFilter}
        beers = {beers}
        setBeers = {setBeers}
      />
    </div>
  );
}

export default App;
