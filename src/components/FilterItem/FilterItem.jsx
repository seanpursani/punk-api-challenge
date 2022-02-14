import React from 'react'
import "./FilterItem.scss"

const FilterItem = (props) => {
  const {
    handleInput,
    name,
  } = props;

  return (
    <div className="toggle">
      <label className="toggle__label" for={name}>{name}</label>
      <input 
        className="toggle__input" 
        type="checkbox" 
        onChange={handleInput}
      />
    </div>
  )
}

export default FilterItem