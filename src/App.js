import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GetOrCreateSavings from "./GetOrCreateSavings/GetOrCreateSavings";


class App extends Component {
  render() {

    return (
      <div className="App">
       <GetOrCreateSavings></GetOrCreateSavings>
        <h5>sup</h5>
        
      </div>
    );
  }
}

export default App;
