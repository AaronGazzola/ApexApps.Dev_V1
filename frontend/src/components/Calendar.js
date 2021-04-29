import React, { useState, useEffect } from 'react';
import moment from 'moment';
import clsx from 'clsx';
import useStyles from 'styles/calendarStyles';
import { Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsAction } from 'actions/bookingActions';

const Calendar = ({ setOpen, setBooking }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'));

	const getBookings = useSelector(state => state.getBookings);
	const { bookings, loading } = getBookings;

	const submitBooking = useSelector(state => state.submitBooking);
	const { success, error } = submitBooking;

	const [page, setPage] = useState(0);
	const [dates, setDates] = useState(
		[...Array(matchesXS ? 3 : 7).keys()].map(key =>
			moment()
				.hour(0)
				.minute(0)
				.subtract(!matchesXS ? moment().day() : 0, 'd')
				.add(key + page * (matchesXS ? 3 : 7), 'd')
		)
	);

	useEffect(() => {
		let newDates = [...Array(matchesXS ? 3 : 7).keys()].map(key =>
			moment()
				.subtract(!matchesXS ? moment().day() : 0, 'd')
				.add(key + page * (matchesXS ? 3 : 7), 'd')
		);
		setDates(newDates);
		dispatch(
			getBookingsAction(
				page === 0
					? moment().add(2, 'h')
					: moment(newDates[0]).hour(0).minute(0),
				moment(newDates[newDates.length - 1])
					.hour(23)
					.minute(59)
			)
		);
	}, [matchesXS, page, dispatch]);

	useEffect(() => {
		if (success || error) {
			dispatch(
				getBookingsAction(
					page === 0
						? moment().add(1, 'h')
						: moment(dates[0]).hour(0).minute(0),
					moment(dates[dates.length - 1])
						.hour(23)
						.minute(59)
				)
			);
		}
	}, [success, dispatch, error]);

	const handleNextPage = () => {
		setPage(page + 1);
	};

	const handlePrevPage = () => {
		if (page > 0) setPage(page - 1);
	};

	const handleSelectBooking = timestamp => {
		setOpen(true);
		setBooking(timestamp);
	};

	return (
		<>
			<div className={classes.header}>
				<IconButton
					disabled={
						dates[0] === moment().hour(0).minute(0) ||
						dates[0].isBefore(moment())
					}
					color='secondary'
					onClick={handlePrevPage}
					className={classes.arrowBack}
				>
					<ArrowBackIos color='secondary' />
				</IconButton>
				<Grid container alignItems='flex-end' justify='center'>
					<Typography variant='h2'>
						{dates[0].month() === dates[dates.length - 1].month()
							? dates[0].format('MMMM')
							: `${dates[0].format('MMM')} - ${dates[dates.length - 1].format(
									'MMM'
							  )}`}
					</Typography>
					<Typography className={classes.year}>
						{dates[0].year() === dates[dates.length - 1].year()
							? dates[0].year()
							: `${dates[0].year()} - ${dates[dates.length - 1].year()}`}
					</Typography>
				</Grid>
				<IconButton color='secondary' onClick={handleNextPage}>
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
							{date.format('ddd')}
						</Typography>
						<Typography variant='h4' className={classes.date}>
							{date.date()}
						</Typography>
						{loading
							? [
									...Array(Math.floor(Math.random() * 10 + 10)).keys()
							  ].map(key => (
									<Skeleton key={key} className={classes.skeleton} />
							  ))
							: bookings
									?.filter(booking => booking.date === date.date())
									.sort((a, b) => a.timestamp - b.timestamp)
									.map(booking => (
										<div
											key={booking.timestamp}
											className={classes.hour}
											onClick={() => handleSelectBooking(booking)}
										>
											<p>{moment.unix(booking.timestamp).format('h:mm a')}</p>
										</div>
									))}
					</div>
				))}
			</div>
		</>
	);
};

export default Calendar;
