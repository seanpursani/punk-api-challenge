import React from 'react'
import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList"
import SearchBox from '../../components/SearchBox/SearchBox';

const Navbar = (props) => {
  const {
    searchTerm,
    setSearchTerm,
    handleInput,
    toggles
  } = props;


  return (
    <nav className="nav">
      <SearchBox className="nav__item" label="search" searchTerm={searchTerm} handleInput={handleInput}/>
      <FiltersList className="nav__item" title="results"/>
    </nav>
    )
}

export default Navbar;