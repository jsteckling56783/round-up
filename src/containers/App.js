import React from 'react';
import HomePage from '../components/HomePage';
import BankNavBar from '../components/BankNavBar';
import CheckingPage from '../components/CheckingPage';
import SavingsPage from '../components/SavingsPage';

import SimulatedPage from '../components/SimulatedPage';

var divStyle = {
	marginTop: '10vh'
};

class App extends React.Component {
	state = {
		step: 1,
		savingsId: 0
	};

	firstPage = () => {
		this.setState({
			step: 1
		});
	};
	secondPage = () => {
		this.setState({
			step: 2
		});
	};
	thirdPage = () => {
		this.setState({
			step: 3
		});
	};
	fourthPage = () => {
		this.setState({
			step: 4
		});
	};
	fifthPage = () => {
		this.setState({
			step: 5
		});
	};
	hide = () => {
		this.setState({
			hide: true
		});
	};

	handleChange = prop => event => {
		this.setState({
			[prop]: event.target.value
		});
	};

	render() {
		switch (this.state.step) {
			case 1:
				return (
					<div style={divStyle}>
						<BankNavBar
							firstPage={this.firstPage}
							secondPage={this.secondPage}
							thirdPage={this.thirdPage}
							fourthPage={this.fourthPage}
						/>
						<HomePage secondPage={this.secondPage} />
					</div>
				);
			case 2:
				return (
					<div style={divStyle}>
						<BankNavBar
							firstPage={this.firstPage}
							secondPage={this.secondPage}
							thirdPage={this.thirdPage}
							fourthPage={this.fourthPage}
							addAccount={this.addAccount}
						/>
						<CheckingPage fifthPage={this.fifthPage} />
					</div>
				);
			case 3:
				return (
					<div style={divStyle}>
						<BankNavBar
							firstPage={this.firstPage}
							secondPage={this.secondPage}
							thirdPage={this.thirdPage}
							fourthPage={this.fourthPage}
						/>
						<SavingsPage />
					</div>
				);

			case 5:
				return (
					<div style={divStyle}>
						<BankNavBar
							firstPage={this.firstPage}
							secondPage={this.secondPage}
							thirdPage={this.thirdPage}
							fourthPage={this.fourthPage}
							addAccount={this.addAccount}
						/>
						<SimulatedPage />
					</div>
				);
			default:
				return null;
		}
	}
}

export default App;
