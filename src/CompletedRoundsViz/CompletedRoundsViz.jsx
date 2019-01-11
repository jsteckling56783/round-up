import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// dont use!!! only for storing successful code for get and post


export default class CompletedRoundsViz extends Component {

  componentDidMount(){
    alert('hello');
    this.callNessie();


  }

  render() {


   
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

  callNessie() {

    const url = "http://api.reimaginebanking.com/accounts?key=a0cbc71278bf264bca12e7e377984ae8";
    /* const otherParamGet = {
      crossDomain: true,
      //headers: {    "cache-control": "no-cache",},
      method: "GET"
    } */
    
    fetch(url)
      .then(data => {console.log(data.json())})
      //.then(res=>{return console.log(res)})

    const urlNeedsBody = "http://api.reimaginebanking.com/customers/5c3775a2322fa06b6779431c/accounts?key=a0cbc71278bf264bca12e7e377984ae8";
    
    
    const reqBody = {
      
        "type": "Savings",
            "nickname": "Bob savings",
            "rewards": 0,
            "balance": 0,
            "account_number": "1111222255546744"
      
    }
    const otherParam = {
      headers: {    "Content-Type": "application/json"   },
      body: JSON.stringify(reqBody),
      method: "POST"
    }
  

    fetch(urlNeedsBody, otherParam)
      .then((data, something) => {console.log(data.json(), typeof(data), something)})
      .catch(error=>{console.log(error)})


  }
}
