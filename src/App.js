import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CompletedRoundsViz from './CompletedRoundsViz/CompletedRoundsViz';
import CarProgress from './CarProgress/CarProgress';
import GetOrCreateSavings from './GetOrCreateSavings/GetOrCreateSavings';


class App extends Component {
  render() {

    return (
      <div className="App">
       {/*  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <GetOrCreateSavings></GetOrCreateSavings>
        <CarProgress totalRounded="400.00" weeklyRounded="10.00"></CarProgress>
        {/*
        <CarProgress totalRounded="30.00" weeklyRounded="10.00"></CarProgress>
         <CompletedRoundsViz></CompletedRoundsViz> */}
        
      </div>
    );
  }
}

export default App;
