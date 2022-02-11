import React from 'react'
import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList"
import SearchBox from '../../components/SearchBox/SearchBox';

const Navbar = (props) => {
  const {
    searchTerm,
    setSearchTerm,
    handleInput,
    stateABV,
    setStateABV,
    stateClassic,
    setStateClassic,
    stateAcidic,
    setStateAcidic
  } = props;


  return (
    <nav className="nav">
      <SearchBox className="nav__item" label="search" searchTerm={searchTerm} handleInput={handleInput}/>
      <FiltersList className="nav__item" 
        title="results"
        stateABV={stateABV}
        setStateABV={setStateABV}
        stateAcidic={stateAcidic}
        setStateAcidic={setStateAcidic}
        stateClassic={stateClassic}
        setStateClassic={setStateClassic}
      />
    </nav>
    )
}

export default Navbar;