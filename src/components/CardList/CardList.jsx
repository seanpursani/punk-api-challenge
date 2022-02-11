import React from 'react'
import Card from "../Card/Card"
import "./CardList.scss"
import beers from "../../data/beers";

const CardList = (props) => {
  const {
    searchTerm
  } = props;

  const filteredBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  })

  const beerCards = filteredBeers.map((beer, index) => (
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