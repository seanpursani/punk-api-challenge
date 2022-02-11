import React from 'react'
import CardList from "../../components/CardList/CardList"
import "./Main.scss";

const Main = (props) => {
  const { 
    searchTerm,
    stateClassic,
    stateAcidic,
    stateABV
  } = props;

  return (
    <section class="main">
      <CardList class="cardlist" 
        searchTerm={searchTerm}
        stateClassic={stateClassic}
        stateAcidic={stateAcidic}
        stateABV={stateABV}
      />
    </section>
  )
}

export default Main