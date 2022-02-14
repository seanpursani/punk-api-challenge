import React from 'react'
import Card from "../Card/Card"
import "./CardList.scss"
import { useState, useEffect } from 'react';

const CardList = (props) => {
  const {
    searchFilter,
    beers,
    setBeers
  } = props;

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => {
      return res.json()
    }).then(data => {
      setBeers(data)
    })
  }

  useEffect(() => {
    return getBeers()
  }, [])

  const filterBeers = () => {
    const tempBeers = [...beers]
    tempBeers.filter(obj => {
      if (searchFilter.name) {
        return obj.name.toLowerCase().includes(searchFilter.name);
      }
      if (searchFilter.classic) {
        return obj.first_brewed.split("/")[1] >= 2010;
      }
      if (searchFilter.abv) {
        return obj.abv > 6;
      }
      if (searchFilter.ph) {
        return obj.ph < 4;
      }
    })
    setBeers(tempBeers)
  }
    

  const renderBeerCards = (arr) => arr.map((obj, index) => (
    <Card className="card-list__card" key={"Beer" + (index + 1)} 
      beerImage={obj.image_url}
      beerName={obj.name}
      beerDesc={obj.description}
    />
  ));

  return (
    <section className="card-list">
     {beers && renderBeerCards(beers)}
    </section>
  )
}

export default CardList