import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, withStyles, TableBody } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Description from '@material-ui/icons/Description';
import Money from '@material-ui/icons/Money';

const styles = theme => ({
	root: {
		margin: '0 100px'
	},
	nameCells: {
		align: 'right'
	},
	arrow: {
		color: 'green'
	},
	fontRow: {
		fontSize: '20px',
		padding: '24px'
	}
});

class SimulatedBankStatement extends React.Component {
	render() {
		const { classes } = this.props;
		const rows2 = require('../data/purchases.json');
		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>
								<div>
									<CalendarToday />
								</div>
							</TableCell>
							<TableCell>
								<dir>
									<Description />
								</dir>
							</TableCell>
							<TableCell>
								<dir>
									<Money />
								</dir>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows2.map(row => {
							return (
								<TableRow key={row.id}>
									<TableCell className={classes.fontRow} component='th' scope='row'>
										{row.purchase_date}
									</TableCell>
									<TableCell className={classes.fontRow}>{row.description}</TableCell>
									<TableCell className={classes.fontRow}>
										<ExpandLess className={classes.arrow} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
										{row.amount + row.round_up} ({row.amount} + {row.round_up})
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(SimulatedBankStatement);
