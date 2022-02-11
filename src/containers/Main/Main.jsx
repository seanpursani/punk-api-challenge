import React from 'react'
import CardList from "../../components/CardList/CardList"
import "./Main.scss";

const Main = (props) => {
  const { searchTerm } = props;

  return (
    <section class="main">
      <CardList class="cardlist" searchTerm={searchTerm}/>
    </section>
  )
}

export default Main