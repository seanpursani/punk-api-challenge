import './App.scss';
import Main from "./containers/Main/Main"
import Navbar from './containers/Navbar/Navbar';
import React from 'react'



function App() {
  return (
    <div className="App">
      <Navbar className="nav"/>
      <Main className="main"/>
    </div>
  );
}

export default App;
