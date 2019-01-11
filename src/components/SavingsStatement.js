import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, withStyles, TableBody } from '@material-ui/core';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Description from '@material-ui/icons/Description';
import Money from '@material-ui/icons/Money';

const styles = theme => ({
	root: {
		height: 500,
		width: '100%',
		overflow: 'auto'
	},
	nameCells: {
		align: 'right'
	},
	fontRow: {
		fontSize: '20px',
		padding: '24px'
	}
});

class SavingsStatement extends React.Component {
	render() {
		const { classes } = this.props;
		var rows2 = require('../data/purchases.json');
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
									<TableCell className={classes.fontRow}>checking account transfer</TableCell>
									<TableCell className={classes.fontRow}>${row.round_up}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(SavingsStatement);
