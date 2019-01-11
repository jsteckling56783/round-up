import React from 'react';
import BankAccountCard from './BankAccountCard';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AccountBalance from '@material-ui/icons/AccountBalance';

const styles = theme => ({
	root: {
		fontFamily: "'Poppins', 'sans-serif'",
		textTransform: 'lowercase',
		margin: '0 100px'
	},
	logoDiv: {
		textAlign: 'center'
	},
	logo: {
		fontSize: '80px'
	},
	checkingCard: {
		textAlign: 'center'
	}
});

class HomePage extends React.Component {
	state = {
		dataset: [],
		dataset2: []
	};
	componentDidMount() {
		axios
			.get('http://api.reimaginebanking.com/accounts?type=Savings&key=8543480faf3e75a4ae4051b7f731f696')
			.then(res => {
				this.setState({ dataset: res.data });
			});
		axios
			.get('http://api.reimaginebanking.com/accounts?type=Checking&key=8543480faf3e75a4ae4051b7f731f696')
			.then(res => {
				this.setState({ dataset2: res.data[0] });
			});
	}
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.logoDiv}>
					<AccountBalance className={classes.logo} />
				</div>
				<h1 className={classes.logoDiv}>home</h1>
				<hr />
				<br />

				<div className={classes.checkingCard}>
					<BankAccountCard
						accountType={this.state.dataset2.type}
						balance={this.state.dataset2.balance}
						accNum='5930'
					/>
				</div>
				{this.state.dataset.map(data => (
					<div className={classes.checkingCard}>
						<BankAccountCard accountType={data.type} balance={data.balance} accNum='1234' />
					</div>
				))}
			</div>
		);
	}
}

/*
<div className={classes.checkingCard}>
					<BankAccountCard
						onClick={this.props.nextStep}
						accountType='Checking'
						balance='1000'
						accNum='5930'
					/>
				</div>
				<div className={classes.checkingCard}>
					<BankAccountCard onClick={this.props.nextStep} accountType='Savings' balance='2000' accNum='4590' />
				</div>
*/

export default withStyles(styles)(HomePage);
