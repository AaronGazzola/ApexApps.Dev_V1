import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from 'styles/contentStyles';
import Calendar from 'components/Calendar';
import BookingDialog from 'components/BookingDialog';

const useStyles = styles;

const ContactScreen = () => {
	const classes = useStyles();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [bookingModalIsOpen, setBookingModalIsOpen] = useState(false);
	const [booking, setBooking] = useState(null);

	return (
		<>
			<BookingDialog
				open={bookingModalIsOpen}
				setOpen={setBookingModalIsOpen}
				booking={booking}
			/>
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
				<Calendar setOpen={setBookingModalIsOpen} setBooking={setBooking} />
			</Grid>
		</>
	);
};

export default ContactScreen;
