import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import "./FiltersList.scss"

const FiltersList = () => {
  return (
    <div className="filterList">
      <FilterItem name="High ABV (>6.0%)" />
      <FilterItem name="Classic Range" />
      <FilterItem name="Acidic" />
    </div>
  )
}

export default FiltersList