import React from 'react'
import { useState } from 'react';
import "./SearchBox.scss"

const SearchBox = (props) => {
  const { 
    handleInput } = props;

  return (
    <form className="search-box">
      <input type="text" id="name" onInput={handleInput} className="search-box__input" />
    </form>
  )
}

export default SearchBox