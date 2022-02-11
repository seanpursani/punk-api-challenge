import React from 'react'
import "./FilterItem.scss"

const FilterItem = (props) => {
  const {
    name
  } = props;

  return (
    <div className="toggle">
      <label className="toggle__label" for={name}>{name}</label>
      <input className="toggle__input" type="checkbox" id={name} value={name}/>
    </div>
  )
}

export default FilterItem