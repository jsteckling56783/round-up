import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.maintainAspectRatio = false;

console.log(defaults);

var i = 0;
var j = 0;

function onlyUnique(value, index, self) {
	//removes dupes in array
	return self.indexOf(value) === index;
}

var purchaseJson = require('../data/chart.json');

const numberPurchases = purchaseJson.length; //number purchases
const datesArray = new Array(numberPurchases); //number of dates

for (i = 0; i < purchaseJson.length; i++) {
	if (purchaseJson.hasOwnProperty(i)) {
		datesArray[i] = purchaseJson[i].purchase_date;
	}
}
var totalDatesArray = datesArray.filter(onlyUnique); //filter unique dates

var totalPurchasesArray = new Array(totalDatesArray.length); //adding up sum of purchases for each date

for (i = 0; i < totalPurchasesArray.length; i++) {
	totalPurchasesArray[i] = 0.0;
}

console.log(totalPurchasesArray[0]);

for (i = 0; i < purchaseJson.length; i++) {
	for (j = 0; j < totalDatesArray.length; j++) {
		const roundedNum = (Math.ceil(purchaseJson[i].amount) - purchaseJson[i].amount).toFixed(2);

		if (purchaseJson[i].purchase_date === totalDatesArray[j]) {
			totalPurchasesArray[j] += parseFloat(roundedNum);
		}
	}
}

for (i = 0; i < totalPurchasesArray.length; i++) {
	totalPurchasesArray[i] = totalPurchasesArray[i].toFixed(2);
}

var totalAmount = 0.0;
for (i = 0; i < totalPurchasesArray.length; i++) {
	totalAmount += parseFloat(totalPurchasesArray[i]);
}

console.log(totalAmount);

class SavingsApp extends Component {
	render() {
		const data = {
			labels: totalDatesArray,
			datasets: [
				{
					label: 'Money Saved',
					data: totalPurchasesArray,
					fill: false, // Don't fill area under the line
					borderColor: 'blue' // Line color
				}
			]
		};

		return (
			<div className='App2'>
				<header className='App2-header'>
					<h1>Money Saved in a Week!</h1>
				</header>

				<article className='canvas-container'>
					<Line data={data} />
				</article>
				<h3>You saved a total of ${totalAmount.toFixed(2)}!</h3>
			</div>
		);
	}
}

export default SavingsApp;
