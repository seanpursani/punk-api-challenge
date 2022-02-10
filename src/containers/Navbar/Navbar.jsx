import React from 'react'
import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList"
import SearchBox from '../../components/SearchBox/SearchBox';

const Navbar = () => {
  return (
    <nav className="nav">
      <SearchBox className="nav__item" alt="Search Box"/>
      <FiltersList className="nav__item" alt="Filters List" />
    </nav>
    )
}

export default Navbar