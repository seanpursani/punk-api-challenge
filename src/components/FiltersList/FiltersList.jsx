import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import "./FiltersList.scss"

const FiltersList = (props) => {

  const { 
    handleInput } = props;

  return (
    <div className="filterList">
      <FilterItem 
        id="abv" 
        name="High ABV (>6.0%)"
        handleInput={handleInput}
      />
      <FilterItem 
        id="classic" 
        name="Classic Range" 
        handleInput={handleInput}
      />
      <FilterItem 
        id="ph" 
        name="Acidic" 
        handleInput={handleInput}/>
    </div>
  )
}

export default FiltersList