import React, { useEffect } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import useStyles from 'styles/contentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { cancelBookingAction } from 'actions/bookingActions';

const CancelBookingScreen = ({ match, history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const bookingId = match.params.id;
	const isClient = match.params.client === 'client';

	const cancelBooking = useSelector(state => state.cancelBooking);
	const { loading, success: cancelBookingSuccess } = cancelBooking;

	useEffect(() => {
		dispatch(cancelBookingAction(bookingId, isClient));
	}, []);
	useEffect(() => {
		if (cancelBookingSuccess) history.push('/');
	}, [cancelBookingSuccess]);

	return (
		<Grid container direction='column' alignItems='center'>
			<Typography variant='h1' className={classes.title}>
				Cancelling {isClient && 'your'} Booking
			</Typography>
			{loading && (
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
