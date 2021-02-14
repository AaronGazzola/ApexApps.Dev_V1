import React, { useState } from 'react';
import styles from 'styles/calendarStyles';
import { Button, IconButton, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = styles;

const appointments = [
	{
		date: 15,
		month: 1,
		UTCHours: 1,
		booked: false
	},
	{
		date: 17,
		month: 1,
		UTCHours: 3,
		booked: false
	}
];

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

const useGetDates = () => {
	const today = new Date();
	const todayDate = today.getDate();
	const todayDay = today.getDay();
	const [week, setWeek] = useState(0);
	const [month, setMonth] = useState(today.getMonth());
	const [year, setYear] = useState(today.getFullYear());
	const getDaysInMonth = (year, month, end) => {
		return new Date(year, month + 1, 0).getDate();
	};
	const [dates, setDates] = useState(() => {
		// loop through week starting from monday
		let dates = [];
		for (let i = 0; i < 7; i++) {
			let date = todayDate - todayDay + i;
			// check if dates go into previous or next month
			if (date <= 0) {
				dates.push(getDaysInMonth(year, month - 1) - date);
			} else if (date > getDaysInMonth(year, month)) {
				dates.push(date - getDaysInMonth(year, month));
			} else {
				dates.push(date);
			}
		}
		return dates;
	});

	const handleNextWeek = () => {
		// increment week relative to current week
		setWeek(week + 1);
		// if next week starts in next month
		if (dates[6] + 7 > getDaysInMonth(year, month)) {
			if (month === 11) {
				setYear(year + 1);
				setMonth(0);
			} else {
				setMonth(month + 1);
			}
		}
		setDates(() => {
			let newDates = [];
			for (let i = 1; i < 8; i++) {
				let date = dates[6] + i;
				// check if dates go into next month
				if (date > getDaysInMonth(year, month)) {
					newDates.push(date - getDaysInMonth(year, month));
				} else {
					newDates.push(date);
				}
			}
			return newDates;
		});
	};

	const handlePrevWeek = () => {
		if (week > 0) {
			setWeek(week - 1);
			// if previous week starts in previous month
			if (dates[6] - 7 <= 0) {
				if (month === 0) {
					setYear(year - 1);
					setMonth(11);
				} else {
					setMonth(month - 1);
				}
			}
			setDates(() => {
				let newDates = [];
				for (let i = 1; i < 8; i++) {
					let date = dates[0] - 8 + i;
					// check if dates go into next month
					if (date <= 0) {
						newDates.push(
							getDaysInMonth(
								month === 0 ? year - 1 : year,
								month === 0 ? 11 : month - 1
							) - Math.abs(date)
						);
					} else {
						newDates.push(date);
					}
				}
				return newDates;
			});
		}
	};

	return { week, dates, month, handleNextWeek, handlePrevWeek };
};

const Calendar = () => {
	const classes = useStyles();
	const { week, dates, month, handleNextWeek, handlePrevWeek } = useGetDates();

	return (
		<>
			<div className={classes.header}>
				<IconButton
					disabled={week === 0}
					color='secondary'
					onClick={handlePrevWeek}
					className={classes.arrowBack}
				>
					<ArrowBackIos color='secondary' />
				</IconButton>
				<Typography variant='h2'>{months[month]}</Typography>
				<IconButton color='secondary' onClick={handleNextWeek}>
					<ArrowForwardIos color='secondary' />
				</IconButton>
			</div>
			<div className={classes.container}>
				{dates.map((date, i) => (
					<div className={classes.day} key={date}>
						<Typography variant='h4' className={classes.dayName}>
							{days[i]}
						</Typography>
						<Typography variant='h4' className={classes.date}>
							{date}
						</Typography>
					</div>
				))}
				{/* <div className={classes.day}>
					<Typography variant='h4'>Sun</Typography>
					<Typography variant='h4'>12</Typography>
					{times.map(time => (
						<Button
							key={time.time}
							variant='outlined'
							color='secondary'
							size='small'
							disabled={!time.available}
							className={
								time.available
									? clsx(classes.hour, classes.available)
									: clsx(classes.hour, classes.unavailable)
							}
						>
							{time.time}
						</Button>
					))}
				</div> */}
			</div>
		</>
	);
};

export default Calendar;
