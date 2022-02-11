import React from 'react'
import "./FilterItem.scss"

const FilterItem = (props) => {
  const {
    name,
    onClick
  } = props;

  return (
    <div className="toggle">
      <label className="toggle__label" for={name}>{name}</label>
      <input className="toggle__label" type="checkbox" id={name} onClick={onClick}/>
    </div>
  )
}

export default FilterItem