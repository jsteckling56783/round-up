import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


export default class CompletedRoundsViz extends Component {


  render() {

    const url = "http://api.reimaginebanking.com/accounts?key=a0cbc71278bf264bca12e7e377984ae8";
    fetch(url)
      .then(data => {return data.json})
      .then(res=>{return console.log(res)})

    return (
      
      <div className="completedroundsviz">

        <Grid container spacing={24} style={{padding: 24}}>
            <Grid item xs={12}>
              <p> hello some words 1 </p>
            </Grid><Grid item xs={12} sm={6} lg={4} xl={3}>
              <p> hello some words 2</p>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <p> hello some words 3</p>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <p> hello some words 4</p>
            </Grid>
        </Grid>
        { this.props.children }
        <p> hello some words 3</p>
      </div>
    )
  }
}
