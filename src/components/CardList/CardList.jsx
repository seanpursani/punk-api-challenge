import React from 'react'
import Card from "../Card/Card"
import "./CardList.scss"
import beers from "../../data/beers";
import { useState } from 'react';

const CardList = (props) => {
  const {
    searchTerm,
    stateClassic,
    stateAcidic,
    stateABV
  } = props;

  const beersFilter = beers.filter(beer => {
    if (searchTerm) {
      return beer.name.toLowerCase().includes(searchTerm);
    }
    if (stateClassic) {
      return beer.first_brewed.split("/")[1] >= 2010;
    }
    if (stateABV) {
      return beer.abv > 6;
    }
    if (stateAcidic) {
      return beer.ph < 4;
    }
    if (!searchTerm) {
      return beers;
    }
  })

  
  const beerCards = beersFilter.map((beer, index) => (
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