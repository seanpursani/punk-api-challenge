import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import "./FiltersList.scss"

const FiltersList = () => {
  return (
    <div className="filterList">
      <FilterItem />
      <FilterItem />
      <FilterItem />
    </div>
  )
}

export default FiltersList