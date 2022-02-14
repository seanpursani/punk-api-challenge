import React from 'react'
import CardList from "../../components/CardList/CardList"
import "./Main.scss";

const Main = (props) => {
  const { 
    searchFilter,
    beers,
    setBeers
  } = props;

  return (
    <section class="main">
      <CardList class="cardlist" 
        searchFilter={searchFilter}
        beers = {beers}
        setBeers = {setBeers}
      />
    </section>
  )
}

export default Main