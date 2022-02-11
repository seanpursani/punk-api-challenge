import React from 'react'
import Card from "../Card/Card"
import "./CardList.scss"
import beers from "../../data/beers";
import { useState } from 'react';

const CardList = (props) => {
  const {
    searchTerm
  } = props;

  const [filterBeers, setFilterBeers] = useState(beers)

  setFilterBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  })

  const beerCards = filterBeers.map((beer, index) => (
    <Card className="card-list__card" key={"Beer" + (index + 1)} 
      beerImage={beer.image_url}
      beerName={beer.name}
      beerDesc={beer.description}
    />
  ));

  return (
    <section className="card-list">
     {beerCards}
    </section>
  )
}

export default CardList