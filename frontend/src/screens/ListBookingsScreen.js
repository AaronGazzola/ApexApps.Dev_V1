import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
	Grid,
	Paper,
	Typography,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	TablePagination,
	useTheme,
	useMediaQuery,
	Switch,
	FormControlLabel,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	DialogActions,
	CircularProgress
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from '@material-ui/pickers';
import { Skeleton } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import Message from 'components/Message';
import useStyles from 'styles/adminStyles';
import useFormStyles from 'styles/formStyles';
import {
	listBookingsAction,
	adminCancelBookingAction,
	setBookingAvailabilityAction
} from 'actions/bookingActions';
import { ArrowBack, Cancel, ContactPhone } from '@material-ui/icons';

const OrderListScreen = () => {
	const classes = useStyles();
	const formClasses = useFormStyles();
	const dispatch = useDispatch();
	const theme = useTheme();
	const matchesXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

	const [confirmCancel, setConfirmCancel] = useState('');
	const [confirmCancelBooking, setConfirmCancelBooking] = useState(null);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [pastBookings, setPastBookings] = useState(false);
	const [availabilityOpen, setAvailabilityOpen] = useState(false);
	const [makeAvailable, setMakeAvailable] = useState(false);
	const [detailsOpen, setDetailsOpen] = useState(false);
	const [bookingDetails, setBookingDetails] = useState({});

	const [fromDate, setFromDate] = useState(new Date());

	const handleFromDateChange = date => {
		setFromDate(date);
	};

	const [toDate, setToDate] = useState(new Date());

	const handleToDateChange = date => {
		setToDate(date);
	};

	const { bookings, loading: listBookingsLoading } = useSelector(
		state => state.listBookings
	);
	const {
		success: adminCancelBookingSuccess,
		loading: adminCancelBookingLoading
	} = useSelector(state => state.adminCancelBooking);

	const {
		success: setBookingAvailabilitySuccess,
		loading: setBookingAvailabilityLoading
	} = useSelector(state => state.setBookingAvailability);

	useEffect(() => {
		dispatch(listBookingsAction(pastBookings));
	}, [dispatch, pastBookings]);

	useEffect(() => {
		if (adminCancelBookingSuccess || setBookingAvailabilitySuccess) {
			dispatch(listBookingsAction(pastBookings));
			setAvailabilityOpen(false);
			setDetailsOpen(false);
		}
	}, [dispatch, adminCancelBookingSuccess, setBookingAvailabilitySuccess]);

	const handleChangeRowsPerPage = e => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleSetAvailability = () => {
		const fromTimestamp = Math.floor(fromDate.getTime() / 1000);
		const toTimestamp = Math.floor(toDate.getTime() / 1000);
		dispatch(
			setBookingAvailabilityAction(fromTimestamp, toTimestamp, makeAvailable)
		);
	};

	return (
		<>
			<Message
				confirm={confirmCancel}
				setConfirm={setConfirmCancel}
				onConfirm={() =>
					dispatch(adminCancelBookingAction(confirmCancelBooking))
				}
			/>
			<Dialog
				open={availabilityOpen}
				onClose={() => setAvailabilityOpen(false)}
				classes={{ paper: formClasses.paper }}
			>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<DialogTitle disableTypography className={formClasses.title}>
						Set Availability
					</DialogTitle>
					<DialogContent>
						<KeyboardDatePicker
							margin='normal'
							id='from=date-picker'
							label='From Date'
							format='dd/MM/yyyy'
							value={fromDate}
							onChange={handleFromDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date'
							}}
						/>
						<KeyboardTimePicker
							margin='normal'
							id='from-time-picker'
							label='From Time'
							value={fromDate}
							onChange={handleFromDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change time'
							}}
						/>
						<KeyboardDatePicker
							margin='normal'
							id='to-date-picker-dialog'
							label='To Date'
							format='dd/MM/yyyy'
							value={toDate}
							onChange={handleToDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date'
							}}
						/>
						<KeyboardTimePicker
							margin='normal'
							id='to-time-picker'
							label='To Time'
							value={toDate}
							onChange={handleToDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change time'
							}}
						/>
					</DialogContent>
				</MuiPickersUtilsProvider>
				<DialogActions>
					<Grid container justify='space-between'>
						<FormControlLabel
							label={makeAvailable ? 'Set as available' : 'Set as unavailable'}
							labelPlacement='start'
							control={
								<Switch
									checked={makeAvailable}
									onChange={() => {
										setMakeAvailable(!makeAvailable);
									}}
									color='secondary'
									name='Set available'
									inputProps={{
										'aria-label': 'Set available'
									}}
									className={classes.switch}
								/>
							}
						/>
						<Button
							variant='contained'
							color='secondary'
							className={formClasses.submitButton}
							onClick={handleSetAvailability}
							disabled={fromDate.getTime() > toDate.getTime()}
						>
							{setBookingAvailabilityLoading ? (
								<CircularProgress
									className={formClasses.submitProgress}
									size={25}
								/>
							) : (
								'Submit'
							)}
						</Button>
					</Grid>
				</DialogActions>
			</Dialog>
			<Dialog
				open={detailsOpen}
				onClose={() => setDetailsOpen(false)}
				classes={{ paper: formClasses.paper }}
			>
				<DialogTitle disableTypography className={formClasses.title}>
					Booking Details
				</DialogTitle>
				<DialogTitle disableTypography className={formClasses.subTitle}>
					{moment
						.unix(bookingDetails?.timestamp)
						.format('h:mma dddd Do MMMM YYYY')}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Name:{' '}
						<span className={formClasses.dialogText}>
							{bookingDetails.name}
						</span>
					</DialogContentText>
					<DialogContentText>
						Email:{' '}
						<span className={formClasses.dialogText}>
							{bookingDetails.email}
						</span>
					</DialogContentText>
					<DialogContentText>
						Phone:{' '}
						<span className={formClasses.dialogText}>
							{bookingDetails.phone}
						</span>
					</DialogContentText>
					<DialogContentText>
						Description:{' '}
						<span className={formClasses.dialogText}>
							{bookingDetails.description}
						</span>
					</DialogContentText>
				</DialogContent>
			</Dialog>
			<Grid container className={classes.container}>
				<Grid item container xs justify='space-between' alignItems='center'>
					<Typography variant='h1' className={classes.title}>
						Bookings
					</Typography>
					<FormControlLabel
						label='Show Past Bookings'
						labelPlacement='start'
						control={
							<Switch
								checked={pastBookings}
								onChange={() => {
									setPastBookings(!pastBookings);
								}}
								color='secondary'
								name='Show Past Bookins'
								inputProps={{
									'aria-label': 'Show Past Bookings'
								}}
								className={classes.switch}
							/>
						}
					/>
				</Grid>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow className={classes.headerRow}>
								{!matchesXs && <TableCell align='left'>Name</TableCell>}
								<TableCell align='center'>Time</TableCell>
								<TableCell align='center'>Details</TableCell>
								<TableCell align='center' className={classes.error}>
									Cancel
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{listBookingsLoading || adminCancelBookingLoading ? (
								<TableRow>
									{[...Array(matchesXs ? 3 : 4).keys()].map(key => (
										<TableCell key={key}>
											<Skeleton className={classes.skeleton} />
										</TableCell>
									))}
								</TableRow>
							) : bookings?.length === 0 ? (
								<TableRow>
									<TableCell align='center' colSpan={matchesXs ? 3 : 4}>
										No bookings
									</TableCell>
								</TableRow>
							) : (
								bookings
									?.sort((a, b) => a.timestamp - b.timestamp)
									.map(booking => (
										<TableRow className={classes.tableRow} key={booking._id}>
											{!matchesXs && (
												<TableCell align='left'>
													{booking.client.name}
												</TableCell>
											)}
											<TableCell align='center'>
												{moment.unix(booking.timestamp).format('h:mma D-M-YY')}
											</TableCell>
											<TableCell
												align='center'
												style={{ color: theme.palette.error.main }}
											>
												<IconButton
													onClick={() => {
														setDetailsOpen(true);
														setBookingDetails({
															timestamp: booking.timestamp,
															description: booking.description,
															email: booking.client.email,
															phone: booking.client.phone,
															name: booking.client.name
														});
													}}
												>
													<ContactPhone color='secondary' />
												</IconButton>
											</TableCell>
											<TableCell align='center' className={classes.error}>
												{booking.isCanceled ? (
													'Cancelled'
												) : (
													<IconButton
														onClick={() => {
															setConfirmCancel(
																`Are you sure you want to cancel this booking for ${
																	booking.client.name
																} at ${moment
																	.unix(booking.timestamp)
																	.format('h:mm a Do MMM')}?`
															);
															setConfirmCancelBooking(booking._id);
														}}
														style={{ color: theme.palette.error.main }}
													>
														<Cancel />
													</IconButton>
												)}
											</TableCell>
										</TableRow>
									))
							)}
						</TableBody>
					</Table>
					{bookings && (
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component='div'
							count={bookings.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onChangePage={handleChangePage}
							onChangeRowsPerPage={handleChangeRowsPerPage}
						/>
					)}
				</TableContainer>
				<Grid container justify='space-between'>
					<Button
						variant='outlined'
						component={Link}
						to='/login'
						className={formClasses.button}
						startIcon={<ArrowBack />}
						color='secondary'
					>
						Back
					</Button>
					<Button
						variant='outlined'
						className={formClasses.button}
						color='secondary'
						onClick={() => setAvailabilityOpen(true)}
					>
						Set availability
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default OrderListScreen;
