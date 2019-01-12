import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';

//import AddIcon from '@material-ui/icons/Add';


var TEST_CUSTOMER_ID_NO_CHECKING;
var TEST_CUSTOMER_ID_NO_SAVINGS;
var TEST_CUSTOMER_ID_HAS_SAVINGS;
var API_KEY = "a0cbc71278bf264bca12e7e377984ae8";

var customerID;
var customerName;
var accountNickname ;




// for a given customerID, check if they have a savings account and make one if needed

export default class GetOrCreateSavings extends React.Component {

  componentDidMount() {


    this.TEST_CUSTOMER_ID_NO_CHECKING = "5c37e5d1b8e2a665da3ea9e2";
    this.TEST_CUSTOMER_ID_NO_SAVINGS = "5c38606eb8e2a665da3eb73b";
    this.TEST_CUSTOMER_ID_HAS_SAVINGS = "5c37a14ab8e2a665da3ded20";

    this.customerID = this.TEST_CUSTOMER_ID_HAS_SAVINGS;

    document.getElementById('congrats').style.display = "none";
    document.getElementById('noSavings').style.display = "none";

    this.checkForSavings();
  }

  render() {

    let newAccountStyles = {
      textAlign: 'left',
      
      padding: '5px 35px',
      margin: '15px',
      background: 'linear-gradient(to left, rgba(0,190,20Ks0,0.1), rgba(0,190,200,0.2))'
    };

    const {classes} = this.props;

    return (
      <div  className="getorcreatesavings">        
          <div id="noSavings">
         <br></br>

            <h1 color='rgb(180, 229, 100)'>Your future starts today</h1>
            <h3>There is no savings account currently associated with your profile. You can create one directly from Round Up today.</h3>
            <Fab id="createBtn" onClick={() => this.createSavings()}  aria-label="Add"  variant="extended"> Create Savings Account
            </Fab>
          </div>
          <div id="congrats" className="container" >
          <br></br>
            <h1>Congratulations!</h1>
            <h3>You have successfully created a savings account</h3>
            <div style={newAccountStyles}>
              <h3>Bob's shnazzy savings</h3>
              <p>Savings Account</p>
              <p>Account Number: 7364 9283 3841 8317</p>
              <span><p>Balance: $0.00</p></span>
            </div>
            

         
        </div>
        
        { this.props.children }
      </div>
    )
  }


  checkForSavings(){

   var url = "http://api.reimaginebanking.com/customers/" + this.TEST_CUSTOMER_ID_NO_SAVINGS + "/accounts?key=" + API_KEY;
 
  url = "http://api.reimaginebanking.com/customers/5c37a14ab8e2a665da3ded20/accounts?key=a0cbc71278bf264bca12e7e377984ae8";
  
    
    fetch(url)
    .then(data => {
      document.getElementById('noSavings').style.display = "block";
      document.getElementById('congrats').style.display = "none";
      if(data.status===201){
        console.log(data.json())
        data.json().then(res => {
          if(res && res[0]){

            var savingsAccount;
            console.log(res);
            Array.from(res).forEach( account => {
              
              if(account["type"] && account["type"]==="Savings") {
                savingsAccount = account;
              }
            })

            if(savingsAccount){
              
            } else {
              document.getElementById("noSavings").style.display = "block";
              document.getElementById("congrats").style.display = "none";

            }
          } else {
            document.getElementById("noSavings").style.display = "block";

          } 

        })
        

      } else {
        document.getElementById("noSavings").style.display = "block";

      }
      console.log(data.status, data.statusText)}
    )
    //.then(res=>{console.log(res)})
  }

  createSavings(){

    const urlNeedsBody = "http://api.reimaginebanking.com/customers/"+ this.customerID.TEST_CUSTOMER_ID_HAS_SAVINGS + "/accounts?key=a0cbc71278bf264bca12e7e377984ae8";
    
    
    const reqBody = {
      
        "type": "Savings",
            "nickname": "My Savings",
            "rewards": 0,
            "balance": 0,
            "account_number": "9898222255546741"
      
    }
    const otherParam = {
      headers: {    "Content-Type": "application/json"   },
      body: JSON.stringify(reqBody),
      method: "POST"
    }

    var createdAccount;
    
    document.getElementById('noSavings').style.display = "none";
    document.getElementById('congrats').style.display = "block";

    fetch(urlNeedsBody, otherParam).then(data => {
      if(data.status===201) {

        //do first call again
        console.log("calling get api again");
        
        //var url = "http://api.reimaginebanking.com/customers/" + this.TEST_CUSTOMER_ID_HAS_SAVINGS + "/accounts?key=" + API_KEY;
        var url = "http://api.reimaginebanking.com/customers/5c37e5d1b8e2a665da3ea9e2/accounts?key=" + API_KEY;
        fetch(url).then(result => {
          if(result.status===200) {
            result.json().then(res => {
              var savingsAccount;
              Array.from(res).forEach( account => {
                
                if(account["type"] && account["type"]==="Savings") {
                  savingsAccount = account;
                  document.getElementById('noSavings').style.display = "none";
                  document.getElementById('congrats').style.display = "block";

                }
              })

            })
          }
        })
      }
    })
  }
}
