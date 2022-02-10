import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const { 
    beerImage,
    beerName,
    beerDesc,
    title
  } = props;



  return (
    <div className="card">
      <img className="card__image" src={beerImage} alt="Image of Beer" />
      <h2 className="card__header">{beerName}</h2>
      <p className='card__desc'>{beerDesc}</p>
    </div>
  )
}

export default Card