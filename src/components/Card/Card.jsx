import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const { 
    beerImage,
    beerName,
    beerDesc,
  } = props;



  return (
    <div className="card">
      <img className="card__image" src={beerImage} alt="Image of Beer" />
      <div className="card__content">
        <h2 className="card__header">{beerName}</h2>
        <p className="card__desc">{beerDesc.split("\n")[0]}</p>
      </div>
    </div>
  )
}

export default Card