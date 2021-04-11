import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Email, GitHub, Twitter } from '@material-ui/icons';
import useStyles from 'styles/contentStyles';
import Calendar from 'components/Calendar';
import BookingDialog from 'components/BookingDialog';

const ContactScreen = () => {
	const classes = useStyles();

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
							Select a date and time to discuss your web app. <br />
							I'll call by phone for best availability and connection
						</Typography>
					</div>
				</Grid>
				<Calendar setOpen={setBookingModalIsOpen} setBooking={setBooking} />
				<Grid container className={classes.divider2} justify='center'>
					<Typography variant='h4' className={classes.subTitle3}>
						Find Me Online:
					</Typography>
				</Grid>
				<Grid
					item
					container
					alignItems='center'
					justify='space-between'
					className={classes.icons}
				>
					<a
						href='https://github.com/AaronGazzola'
						target='_blank'
						rel='noreferrer'
					>
						<GitHub fontSize='large' />
					</a>
					<a
						href='https://twitter.com/aarongazzola'
						target='_blank'
						rel='noreferrer'
					>
						<Twitter fontSize='large' />
					</a>
					<a href='mailto: aaron@apexapps.dev'>
						<Email fontSize='large' />
					</a>
				</Grid>
				<Grid
					item
					container
					alignItems='center'
					justify='center'
					className={classes.email}
				>
					<a href='mailto: aaron@apexapps.dev'>
						<Typography>Aaron@ApexApps.dev</Typography>
					</a>
				</Grid>
			</Grid>
		</>
	);
};

export default ContactScreen;
