import React from 'react';
import { withStyles, Card, CardActionArea, CardContent, ButtonBase, Button } from '@material-ui/core';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const styles = theme => ({
	card: {
		boxShadow: 'none'
	},
	cardArea: {
		backgroundColor: ''
	},
	icon: {
		fontSize: '30px'
	}
});

class BankAccountCard extends React.Component {
	state = {
		checkingBalance: '',
		savingsBalance: '',
		obj: null
	};

	render() {
		const { classes } = this.props;
		var bal = this.props.balance;
		bal = parseFloat(bal).toFixed(2);
		return (
			<Card className={classes.card}>
				<ButtonBase onClick={this.props.secondPage} />
				<CardActionArea className={classes.cardArea}>
					<CardContent>
						<h1>{this.props.accountType}</h1>
						<h1>${bal}</h1>
						<h3>acc x{this.props.accNum}</h3>
						<KeyboardArrowDown className={classes.icon} />
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}
}

export default withStyles(styles)(BankAccountCard);
