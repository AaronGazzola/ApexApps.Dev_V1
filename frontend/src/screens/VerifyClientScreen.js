import React, { useEffect } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import useStyles from 'styles/contentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyClientAction } from 'actions/bookingActions';

const CancelBookingScreen = ({ match, history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const token = match.params.token;

	const {
		loading: verifyClientLoading,
		success: verifyClientSuccess
	} = useSelector(state => state.verifyClient);

	useEffect(() => {
		dispatch(verifyClientAction(token));
	}, []);

	useEffect(() => {
		if (verifyClientSuccess) history.push('/contact');
	}, [verifyClientSuccess, history]);

	return (
		<Grid container direction='column' alignItems='center'>
			<Typography variant='h1' className={classes.title}>
				Verifying Your Booking
			</Typography>
			{verifyClientLoading && (
				<CircularProgress
					style={{ marginTop: 20 }}
					size={50}
					color='primary'
					thickness={2}
				/>
			)}
		</Grid>
	);
};

export default CancelBookingScreen;
