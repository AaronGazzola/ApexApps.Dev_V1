import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from 'styles/contentStyles';
import Calendar from 'components/Calendar';

const useStyles = styles;

const ContactScreen = () => {
	const classes = useStyles();
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Grid container xs item direction='column' alignItems='center'>
			<Grid item xs container justify='center'>
				<div className={classes.textBox1}>
					<Typography variant='h1' className={classes.title}>
						Book a Call
					</Typography>
					<Typography className={classes.paragraph}>
						Select a date and time to discuss your web app.
					</Typography>
				</div>
			</Grid>

			<Calendar />
		</Grid>
	);
};

export default ContactScreen;
