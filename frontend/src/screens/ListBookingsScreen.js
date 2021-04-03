import React, { useEffect, useState } from 'react';
import moment from 'moment';
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
	DialogTitle
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import Message from 'components/Message';
import useStyles from 'styles/adminStyles';
import useFormStyles from 'styles/formStyles';
import {
	listBookingsAction,
	cancelBookingAction
} from 'actions/bookingActions';
import { Cancel, ContactPhone } from '@material-ui/icons';

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
	const [detailsOpen, setDetailsOpen] = useState(false);
	const [bookingDetails, setBookingDetails] = useState({});
	const isClient = false;

	const { bookings, loading: listBookingsLoading } = useSelector(
		state => state.listBookings
	);
	const {
		success: cancelBookingSuccess,
		loading: cancelBookingLoading
	} = useSelector(state => state.cancelBooking);

	useEffect(() => {
		dispatch(listBookingsAction(pastBookings));
	}, [dispatch, pastBookings]);

	useEffect(() => {
		if (cancelBookingSuccess) dispatch(listBookingsAction(pastBookings));
	}, [dispatch, cancelBookingSuccess]);

	const handleChangeRowsPerPage = e => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	return (
		<>
			<Message
				confirm={confirmCancel}
				setConfirm={setConfirmCancel}
				onConfirm={() =>
					dispatch(cancelBookingAction(confirmCancelBooking, isClient))
				}
			/>
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
							{listBookingsLoading || cancelBookingLoading ? (
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
			</Grid>
		</>
	);
};

export default OrderListScreen;
