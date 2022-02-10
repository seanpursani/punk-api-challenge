import React from 'react'
import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList"
import SearchBox from '../../components/SearchBox/SearchBox';

const Navbar = () => {
  return (
    <nav className="nav">
      <SearchBox className="nav__item" label="search"/>
      <FiltersList className="nav__item" title="results"/>
    </nav>
    )
}

export default Navbar