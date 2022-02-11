import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import "./FiltersList.scss"

const FiltersList = (props) => {

  const { 
    stateABV,
    setStateABV,
    stateClassic,
    setStateClassic,
    stateAcidic,
    setStateAcidic
  } = props;


  const onClickABV = (event) => {
    setStateABV(!stateABV)
  }

  const onClickClassic = (event) => {
    setStateClassic(!stateClassic)
  }

  const onClickAcidic = (event) => {
    setStateAcidic(!stateAcidic)
  }

  return (
    <div className="filterList">
      <FilterItem name="High ABV (>6.0%)" onClick={onClickABV}/>
      <FilterItem name="Classic Range" onClick={onClickClassic}/>
      <FilterItem name="Acidic" onClick={onClickAcidic}/>
    </div>
  )
}

export default FiltersList