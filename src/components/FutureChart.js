import React, { Component } from 'react';
import { Bar, defaults } from 'react-chartjs-2';

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

class FutureSavingsApp extends Component {
	render() {
		const data = {
			labels: [
				'01/19 - 02/19 (1 Month)',
				'02/19 - 04/19 (3 Months)',
				'04/19 - 06/19 (6 Months)',
				'06/19 - 12/19 (12 Months)'
			],
			// labels: datesArray,
			datasets: [
				{
					label: 'Money Saved',
					data: [
						(totalAmount * 4).toFixed(2),
						(totalAmount * 13).toFixed(2),
						(totalAmount * 26).toFixed(2),
						(totalAmount * 52).toFixed(2)
					],
					// data: savedArray,
					fill: false, // Don't fill area under the line
					backgroundColor: 'rgba(0,128,128,0.8)',
					borderColor: 'rgba(0,0,255,.6)' // Line color
				}
			]
		};

		return (
			<div className='App2'>
				<header className='App2-header'>
					<h1>Money You Could Potentially Save In a Year!</h1>
				</header>

				<article className='canvas-container'>
					<Bar data={data} />
				</article>
				<h3>You could potentially save ${(totalAmount * 52).toFixed(2)} in a year at this rate!</h3>
			</div>
		);
	}
}

export default FutureSavingsApp;
