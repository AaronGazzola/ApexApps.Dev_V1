import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from 'styles/calendarStyles';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import { getBookingsAction } from 'actions/bookingActions';

const useStyles = styles;

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const Calendar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [dates, setDates] = useState(
		days.map((day, i) => moment().subtract(moment().day(), 'd').add(i, 'd'))
	);

	const getBookings = useSelector(state => state.getBookings);
	const { bookings } = getBookings;

	useEffect(() => {
		dispatch(getBookingsAction(dates[0].hour(0).minute(0)));
	}, [dates, dispatch]);

	const handleNextWeek = () => {
		setDates(dates.map(date => date.add(7, 'd')));
	};

	const handlePrevWeek = () => {
		setDates(dates.map(date => date.subtract(7, 'd')));
	};

	return (
		<>
			<div className={classes.header}>
				<IconButton
					disabled={dates[0] === moment() || dates[0].isBefore(moment())}
					color='secondary'
					onClick={handlePrevWeek}
					className={classes.arrowBack}
				>
					<ArrowBackIos color='secondary' />
				</IconButton>
				<Grid container alignItems='flex-end' justify='center'>
					<Typography variant='h2'>
						{dates[0].month() === dates[6].month()
							? months[dates[0].month()]
							: `${months[dates[0].month()].substring(0, 3)} - ${months[
									dates[6].month()
							  ].substring(0, 3)}`}
					</Typography>
					<Typography className={classes.year}>
						{dates[0].year() === dates[6].year()
							? dates[0].year()
							: `${dates[0].year()} - ${dates[6].year()}`}
					</Typography>
				</Grid>
				<IconButton color='secondary' onClick={handleNextWeek}>
					<ArrowForwardIos color='secondary' />
				</IconButton>
			</div>
			<div className={classes.container}>
				{dates.map((date, i) => (
					<div className={classes.day} key={date._d}>
						<Typography variant='h4' className={classes.dayName}>
							{days[i]}
						</Typography>
						<Typography variant='h4' className={classes.date}>
							{date.date()}
						</Typography>
						{/* {appointments
							.filter(a => !a.booked && a.date === date)
							.map(a => (
								<div key={a.timeStamp} className={classes.hour}>
									
									<p>
										{new Date(a.timeStamp).getHours() < 12
											? new Date(a.timeStamp).getHours()
											: new Date(a.timeStamp).getHours() - 12}
										{new Date(a.timeStamp).getHours() < 12 ? ' am' : ' pm'}
									</p>
								</div>
							))} */}
					</div>
				))}
			</div>
		</>
	);
};

export default Calendar;
