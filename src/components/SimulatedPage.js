import React from 'react';

import { withStyles } from '@material-ui/core';
import SimulatedBankStatement from './SimulatedBankStatement';
import LocalAtm from '@material-ui/icons/LocalAtm';

const styles = theme => ({
	root: {
		fontFamily: "'Poppins', 'sans-serif'",
		textTransform: 'lowercase'
	},
	nav: {
		alignItems: 'center'
	},
	title: {
		textAlign: 'center'
	},
	logoDiv: {
		textAlign: 'center'
	},
	logo: {
		fontSize: '80px'
	}
});

class SimulatedPage extends React.Component {
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
					<div id='getSavings' className={classes.tip} />
					<SimulatedBankStatement />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(SimulatedPage);
