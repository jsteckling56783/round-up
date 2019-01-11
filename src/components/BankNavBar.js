import React from 'react';
import { withStyles, AppBar, Tabs, Tab } from '@material-ui/core';

const styles = theme => ({
	nav: {
		alignItems: 'center'
	}
});

//					<Tab label='settings' onClick={this.props.fourthPage} />

class BankNavBar extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<AppBar className={classes.nav}>
				<Tabs>
					<Tab label='home' onClick={this.props.firstPage} />
					<Tab label='checking' onClick={this.props.secondPage} />
					<Tab label='savings' onClick={this.props.thirdPage} />
				</Tabs>
			</AppBar>
		);
	}
}

export default withStyles(styles)(BankNavBar);
