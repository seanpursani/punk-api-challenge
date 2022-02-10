import React from 'react'
import Card from "../Card/Card"
import "./CardList.scss"
import beers from "../../data/beers"

const CardList = () => {
  
  return (
    <section className="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default CardList