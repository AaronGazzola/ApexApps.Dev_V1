import React, { useEffect } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import styles from 'styles/contentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { cancelBookingAction } from 'actions/bookingActions';
import { CANCEL_BOOKING_CLEAR } from 'constants/bookingConstants';
import Message from 'components/Message';

const useStyles = styles;

const CancelBookingScreen = ({ match }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const bookingId = match.params.id;
	const isClient = match.params.client === 'client';

	const cancelBooking = useSelector(state => state.cancelBooking);
	const { loading, error, success } = cancelBooking;

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(cancelBookingAction(bookingId, isClient));
	}, []);

	return (
		<>
			<Message
				error={error}
				success={success}
				linkText='Home'
				link={'/'}
				reset={() => dispatch({ type: CANCEL_BOOKING_CLEAR })}
				ok={false}
			/>
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
		</>
	);
};

export default CancelBookingScreen;
