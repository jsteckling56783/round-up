import React, { Component } from 'react';
import car from'../media/tesla2.png';
import shoes from'../media/shoes.png';
import flight from'../media/flight2.png';
import Grid from '@material-ui/core/Grid/Grid';
import Hidden from '@material-ui/core/Hidden/Hidden';
import './carProgress.css';

//needs props:  totalRounded="30.00" weeklyRounded="10.00"


export default class CarProgress extends React.Component {
  componentWillMount() {

    this.setState({months: 6})
    this.setState({monthly: parseFloat(this.props.weeklyRounded.substring(0, this.props.weeklyRounded.indexOf(".")))*30/7})
  }

  render() {


    let w = window.screen.availWidth

    let lc = "<"
    let rc = ">"

    let saved = this.props.totalRounded.substring(0, this.props.totalRounded.indexOf("."))
    let weekly = this.props.weeklyRounded.substring(0, this.props.weeklyRounded.indexOf("."))


    let prices = [70, 600, 30000]
    var savedPic = car;
    let curPrice = prices[2];

    if(saved<prices[0]){
      savedPic = shoes;
      curPrice = prices[0];
    } else if(saved<prices[1]) {
      savedPic = flight
      curPrice = prices[1];
    } 

    let carH = w/10;
    let fullCarW = w/5;
    let carCurPercent = Math.min(0.02 + parseFloat(saved)/curPrice, 1);

    return (
      <div className="car-progress">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        <Grid container spacing={40}>
          <Grid xs={12}>
          </Grid>
        </Grid>
        <Grid container spacing={40}>
          <Grid xs={2}></Grid>
          <Grid xs={3} style={{alignItems:'center'}} className='align-items-xs-center'>
              <div style={{width: fullCarW, height:carH, horizontal:'center', paddingLeft:50}}>
              <div style={{ zIndex: 100, width: fullCarW*0.1, height:carH, overflow:'hidden', position:'absolute'}}>
                  <img  src={savedPic} alt="Car"  style={{width: fullCarW, height:carH}}/>
              </div>
              <div styes={{position:'absolute', zIndex:200}}>
                <img  src={savedPic} alt="Car"  style={{width: fullCarW, height:carH, opacity:0.5}}/>

              </div>
            </div>
            <div>
              <h1 style={{color:'#999', fontSize:20, margin:0}}>You have saved</h1>
              <h1 style={{color:'rgb(180, 229, 100)', fontSize:70, margin:0}}>${saved}</h1>
              <h1 style={{color:'#999', fontSize:16, margin:0}}>By rounding up</h1>
            </div>
          </Grid>
          <Grid xs={1}>
          <h1 id="lc" onClick={() =>{this.moveMonth(false)}} onMouseEnter={() => this.doHover(true, true)} onMouseLeave={() => this.doHover(true, false)} style={{color:'#ddd', fontSize:100, margin:0, textAlign:'right', marginTop:(carH)}}>{lc}</h1>

          </Grid>
          <Grid xs={3} >
            <div style={{width: fullCarW, height:carH, paddingLeft:50}}>
              <div style={{ zIndex: 100, width: fullCarW*this.getFuturePercent(), height:carH, overflow:'hidden', position:'absolute'}}>
                  <img  src={
                    this.chooseFutureImage()
                  } alt="Car"  style={{width: fullCarW, height:carH}}/>
              </div>
              <div styes={{position:'absolute', zIndex:200}}>
                <img  src={this.chooseFutureImage()} alt="Car"  style={{width: fullCarW, height:carH, opacity:0.6}}/>

              </div>
            </div>

            <h1 style={{color:'#999', fontSize:20, margin:0}}>After {this.state.months} months:</h1>
            <h1 style={{color:'rgb(180, 229, 100)', fontSize:70, margin:0}}>${Math.ceil(this.state.months*this.state.monthly)}</h1>
            <h1 style={{color:'#999', fontSize:16, margin:0}}>If you continue rounding up ${Math.ceil(this.props.weeklyRounded)} per week</h1>
          </Grid>
          <Grid xs={1}>
              <h1 id='rc' onClick={() => this.moveMonth(true)} onMouseEnter={() => this.doHover(false, true)} onMouseLeave={() => this.doHover(false, false)} style={{color:'#ddd', fontSize:100, margin:0, marginTop:(carH), textAlign:'left'}}>{rc}</h1>
          </Grid>

          <Grid xs={1}></Grid>
        </Grid>
        { this.props.children }
      </div>
    )
  }

  moveMonth(increase) {

    var old = this.state.months;
    var newM = old;
    if(increase){
      newM = Math.min(old*2, 1000)
    } else {
      newM = Math.max(Math.floor(old/2), 1)

    }
    this.setState({months: newM});
  }

  doHover(left, enter) {
    let id = left ? 'lc' : 'rc';
    let shad = enter ? "1px 1px 17px #444444" : "0px 0px #ffffff"
    document.getElementById(id).style.textShadow = shad;

  }

  chooseFutureImage() {
    var willHave = Math.ceil(this.state.months*this.state.monthly)
    if(willHave<70){
      return shoes;
    } else if (willHave<600){
      return flight;
    } else {
      return car;
    }

  }

  getFuturePercent() {

    var willHave = Math.ceil(this.state.months*this.state.monthly);
    var goal = 30000;
    if(willHave<70){
      goal = 70;
    } else if (willHave<600){
      goal = 600;
    } 
    return Math.min(willHave/goal, 1)
  }

}
