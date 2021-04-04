import React, { useEffect } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import useStyles from 'styles/contentStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
	adminCancelBookingAction,
	clientCancelBookingAction
} from 'actions/bookingActions';

const CancelBookingScreen = ({ match, history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const bookingId = match.params.id;
	const isClient = match.params.client === 'client';

	const {
		loading: adminCancelBookingLoading,
		success: adminCancelBookingSuccess
	} = useSelector(state => state.adminCancelBooking);

	const {
		loading: clientCancelBookingLoading,
		success: clientCancelBookingSuccess
	} = useSelector(state => state.clientCancelBooking);

	useEffect(() => {
		if (isClient) dispatch(clientCancelBookingAction(bookingId));
		if (!isClient) dispatch(clientCancelBookingAction(bookingId));
	}, [isClient, dispatch, bookingId]);
	useEffect(() => {
		if (clientCancelBookingSuccess || adminCancelBookingSuccess)
			history.push('/');
	}, [clientCancelBookingSuccess, adminCancelBookingSuccess]);

	return (
		<Grid container direction='column' alignItems='center'>
			<Typography variant='h1' className={classes.title}>
				Cancelling {isClient && 'your'} Booking
			</Typography>
			{clientCancelBookingLoading || adminCancelBookingLoading ? (
				<CircularProgress
					style={{ marginTop: 20 }}
					size={50}
					color='primary'
					thickness={2}
				/>
			) : (
				<></>
			)}
		</Grid>
	);
};

export default CancelBookingScreen;
