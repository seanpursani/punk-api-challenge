import React from 'react'
import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList"
import SearchBox from '../../components/SearchBox/SearchBox';

const Navbar = (props) => {
  const {
    handleInput
  } = props;


  return (
    <nav className="nav">
      <SearchBox className="nav__item" 
        handleInput={handleInput}
      />
      <FiltersList className="nav__item" 
        handleInput={handleInput}
      />
    </nav>
    )
}

export default Navbar;