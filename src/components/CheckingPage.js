import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BankStatement from './BankStatement';
import { Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import axios from 'axios';
import Done from '@material-ui/icons/Done';
import LocalAtm from '@material-ui/icons/LocalAtm';

const styles = theme => ({
	root: {
		fontFamily: "'Poppins', 'sans-serif'",
		textTransform: 'lowercase',
		margin: '0 100px'
	},
	tip: {
		textAlign: 'center',
		marginBottom: '50px',
		border: '1px solid black',
		padding: '5px 5px',
		borderRadius: '10px'
	},
	button: {
		backgroundColor: 'red',
		color: 'white'
	},
	title: {
		textAlign: 'center'
	},
	value: {
		fontSize: '20px'
	},
	dialogContent: {
		fontFamily: "'Poppins', 'sans-serif'",
		textTransform: 'lowercase',
		alignItems: 'center',
		textAlign: 'center'
	},
	done: {
		fontSize: '50px'
	},
	logoDiv: {
		textAlign: 'center'
	},
	logo: {
		fontSize: '80px'
	}
});

class CheckingPage extends React.Component {
	state = {
		open: false,
		id: ''
	};

	handleClickOpen = () => {
		this.setState({
			open: true
		});

		var idd;

		var myHeaders = new Headers({
			'Content-Type': 'application/json',
			Accept: 'application/json'
		});

		var data = {
			type: 'Savings',
			nickname: 'string',
			rewards: 0,
			balance: 0
		};

		// add a new /customer/*, CHANGE THIS works customer id, hard coded
		const url =
			'http://api.reimaginebanking.com/customers/5c3884a0b8e2a665da3eb7b2/accounts?key=8543480faf3e75a4ae4051b7f731f696';

		axios.post(url, data, { headers: myHeaders }).then(res => {
			idd = res.data.objectCreated._id;
			this.setState({ id: res.data.objectCreated._id });
			console.log('idd:' + idd);
			console.log('state:' + this.state.id);
		});

		//Take money from the checking account, /accounts/* CHANGE THIS
		// url3 takes the checking account _id so this shouldd be hard coded
		var url3 =
			'http://api.reimaginebanking.com/accounts/' +
			'5c38859ab8e2a665da3eb7bb' +
			'/withdrawals?key=8543480faf3e75a4ae4051b7f731f696';

		var data3 = {
			medium: 'balance',
			amount: 20.58
		};

		axios.post(url3, data3, { headers: myHeaders }).then(res => {
			console.log(res.data);
		});

		document.getElementById('getSavings').style.display = 'none';
	};

	handleClose = () => {
		var myHeaders = new Headers({
			'Content-Type': 'application/json',
			Accept: 'application/json'
		});
		// Deposit money into the savings
		var data2 = {
			medium: 'balance',
			amount: 20.58
		};
		// the /accounts/* needs to be changed put money into savings account, CHANGE THIS
		// url2 takes savings account _id, no need to touch
		console.log(this.state.id);
		let url2 =
			'http://api.reimaginebanking.com/accounts/' +
			this.state.id +
			'/deposits?key=8543480faf3e75a4ae4051b7f731f696';
		console.log(url2);

		axios.post(url2, data2, { headers: myHeaders }).then(res => {
			console.log(res.data);
		});
		this.setState({
			open: false
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.logoDiv}>
					<LocalAtm className={classes.logo} />
				</div>

				<h1 className={classes.title}>CHECKING ACCOUNT</h1>
				<hr />
				<br />

				<div>
					<div id='getSavings' className={classes.tip}>
						<p>
							If you used the round up feature, you would have saved{' '}
							<b className={classes.value}>$6.65</b>. Click below to sign up for a savings account!
						</p>
						<Button onClick={this.handleClickOpen} className={classes.button}>
							SIGN UP
						</Button>
						<Dialog onClose={this.handleClose} open={this.state.open}>
							<DialogContent className={classes.dialogContent}>
								<Done className={classes.done} />
								<h1>Congratulations!</h1>
								<h3>Your savings account has been successfully created!</h3>
							</DialogContent>
							<DialogActions>
								<Button onClick={this.handleClose} color='primary'>
									x
								</Button>
							</DialogActions>
						</Dialog>
					</div>
					<Button onClick={this.props.fifthPage}>SIMULATE PURCHASES</Button>

					<BankStatement />
				</div>
			</div>
		);
	}

	hideGetSavings() {
		document.getElementById('getSavings').style.display = 'none';
	}
}

export default withStyles(styles)(CheckingPage);
