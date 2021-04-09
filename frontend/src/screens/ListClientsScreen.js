import React, { useEffect, useState } from 'react';
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
	TablePagination,
	useTheme,
	useMediaQuery,
	Button
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'styles/adminStyles';
import useFormStyles from 'styles/formStyles';
import { listClientsAction } from 'actions/bookingActions';
import { ArrowBack } from '@material-ui/icons';

const ListClientsScreen = () => {
	const classes = useStyles();
	const formClasses = useFormStyles();
	const dispatch = useDispatch();

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const { loading: listClientsLoading, clients } = useSelector(
		state => state.listClients
	);

	useEffect(() => {
		dispatch(listClientsAction());
	}, [dispatch]);

	const handleChangeRowsPerPage = e => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item container xs justify='space-between' alignItems='center'>
				<Typography variant='h1' className={classes.title}>
					Clients
				</Typography>
			</Grid>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='simple table'>
					<TableHead>
						<TableRow className={classes.headerRow}>
							<TableCell align='center'>Name</TableCell>
							<TableCell align='left'>Email</TableCell>
							<TableCell align='left'>Phone</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{listClientsLoading ? (
							<TableRow>
								{[...Array(3).keys()].map(key => (
									<TableCell key={key}>
										<Skeleton className={classes.skeleton} />
									</TableCell>
								))}
							</TableRow>
						) : clients?.length === 0 ? (
							<TableRow>
								<TableCell align='left' colSpan={3}>
									No Clients
								</TableCell>
							</TableRow>
						) : (
							clients
								?.sort((a, b) => {
									if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
									if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
									return 0;
								})
								.map(client => (
									<TableRow className={classes.tableRow} key={client._id}>
										<TableCell align='center'>{client.name}</TableCell>
										<TableCell align='left'>{client.email}</TableCell>
										<TableCell align='left'>{client.phone}</TableCell>
									</TableRow>
								))
						)}
					</TableBody>
				</Table>
				{clients && (
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component='div'
						count={clients.length}
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
					to='/admin'
					className={formClasses.button}
					startIcon={<ArrowBack />}
					color='secondary'
				>
					Back
				</Button>
			</Grid>
		</Grid>
	);
};

export default ListClientsScreen;
