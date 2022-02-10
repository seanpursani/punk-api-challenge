import React from 'react'
import Card from "../Card/Card"
import "./CardList.scss"
import beers from "../../data/beers"

const CardList = () => {
  const title = "Beer"
  const beerCards = beers.map((beer, index) => (
    <Card className="card-list__card" key={title + (index + 1)} 
      beerImage={beer.image_url}
      beerName={beer.name}
      beerDesc={beer.description}
      beerTitle={title}
    />
  ));

  return (
    <section className="card-list">
     {beerCards}
    </section>
  )
}

export default CardList