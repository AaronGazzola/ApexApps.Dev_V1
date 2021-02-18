import React, { useState, useEffect } from 'react';
import moment from 'moment';
import clsx from 'clsx';
import styles from 'styles/calendarStyles';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';

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
	const { bookings, loading } = getBookings;

	useEffect(() => {
		dispatch(getBookingsAction(moment(dates[0]).hour(0).minute(0)));
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
					<div
						className={
							date.date() === moment().date() &&
							date.month() === moment().month()
								? clsx(classes.day, classes.today)
								: classes.day
						}
						key={date._d}
					>
						<Typography variant='h4' className={classes.dayName}>
							{days[i]}
						</Typography>
						<Typography variant='h4' className={classes.date}>
							{date.date()}
						</Typography>
						{loading
							? [...Array(Math.floor(Math.random() * 10)).keys()].map(key => (
									<Skeleton key={key} className={classes.skeleton} />
							  ))
							: bookings
									?.filter(booking => booking.date === date.date())
									.map(booking => (
										<div key={booking.timestamp} className={classes.hour}>
											{booking.hour <= 12 ? (
												<p>{`${booking.hour} am`}</p>
											) : (
												<p>{`${booking.hour - 12} pm`}</p>
											)}
										</div>
									))}
					</div>
				))}
			</div>
		</>
	);
};

export default Calendar;
