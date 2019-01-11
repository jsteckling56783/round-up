import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import GetOrCreateSavings from "./GetOrCreateSavings/GetOrCreateSavings";
import CarProgress from "./CarProgress/CarProgress";


class App extends Component {
  render() {

    return (
      <div className="App">
       <CarProgress totalRounded="30.00" weeklyRounded="10.00"></CarProgress>
        
      </div>
    );
  }
}

export default App;
