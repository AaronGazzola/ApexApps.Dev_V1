import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
	container: { width: 200, height: 200, border: '2px solid grey' }
}));

const CardScreen = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			justify='center'
			className={classes.container}
		>
			<Typography>ApexApps.dev</Typography>
		</Grid>
	);
};

export default CardScreen;
