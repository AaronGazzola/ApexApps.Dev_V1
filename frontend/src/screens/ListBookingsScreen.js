import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
	Grid,
	Paper,
	Typography,
	CircularProgress,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	TablePagination,
	useTheme
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Message from 'components/Message';
import useStyles from 'styles/adminStyles';
import {
	listBookingsAction,
	cancelBookingAction
} from 'actions/bookingActions';
import { Cancel, ContactPhone } from '@material-ui/icons';

const OrderListScreen = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const theme = useTheme();

	const [confirmCancel, setConfirmCancel] = useState('');
	const [confirmCancelBooking, setConfirmCancelBooking] = useState(null);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const isClient = false;

	const { bookings, loading: listBookingsLoading } = useSelector(
		state => state.listBookings
	);
	const {
		success: cancelBookingSuccess,
		loading: cancelBookingLoading
	} = useSelector(state => state.cancelBooking);

	useEffect(() => {
		dispatch(listBookingsAction());
	}, [dispatch]);

	useEffect(() => {
		if (cancelBookingSuccess) dispatch(listBookingsAction());
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
			<Grid container className={classes.container}>
				<Grid item container xs justify='space-between' alignItems='center'>
					<Typography variant='h1' className={classes.title}>
						Bookings
					</Typography>
				</Grid>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow className={classes.headerRow}>
								<TableCell align='left'>Name</TableCell>
								<TableCell align='center'>Time</TableCell>
								<TableCell align='center'>Details</TableCell>
								<TableCell
									align='center'
									style={{ color: theme.palette.error.main }}
								>
									Cancel
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{listBookingsLoading || cancelBookingLoading ? (
								<TableRow>
									<TableCell component='th' scope='row'>
										<CircularProgress />
									</TableCell>
								</TableRow>
							) : bookings?.length === 0 ? (
								<TableRow>
									<TableCell component='th' scope='row'>
										No bookings
									</TableCell>
								</TableRow>
							) : (
								bookings
									?.sort(
										(a, b) =>
											moment(b.createdAt.substring(0, 19)).valueOf() -
											moment(a.createdAt.substring(0, 19)).valueOf()
									)
									.map(booking => (
										<TableRow className={classes.tableRow} key={booking._id}>
											<TableCell align='left'>{booking.client.name}</TableCell>
											<TableCell align='left'>
												{moment.unix(booking.timestamp).format('h:mm a Do MMM')}
											</TableCell>
											<TableCell
												align='center'
												style={{ color: theme.palette.error.main }}
											>
												<IconButton onClick={() => {}}>
													<ContactPhone />
												</IconButton>
											</TableCell>
											<TableCell
												align='center'
												style={{ color: theme.palette.error.main }}
											>
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
