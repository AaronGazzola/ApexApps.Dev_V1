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
	Button
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import Message from 'components/Message';
import useStyles from 'styles/adminStyles';
import useFormStyles from 'styles/formStyles';
import { getBlogsAction, deleteBlogAction } from 'actions/blogActions';
import { AddCircleOutline, ArrowBack, Delete, Edit } from '@material-ui/icons';

const ListBlogsScreen = () => {
	const classes = useStyles();
	const formClasses = useFormStyles();
	const dispatch = useDispatch();

	const [confirmDelete, setConfirmDelete] = useState('');
	const [deleteBlogId, setDeleteBlogId] = useState(null);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const { blogs, loading: getBlogsLoading } = useSelector(
		state => state.getBlogs
	);

	const {
		success: deleteBlogSuccess,
		loading: deleteBlogLoading
	} = useSelector(state => state.deleteBlog);

	useEffect(() => {
		dispatch(getBlogsAction());
	}, [dispatch]);

	useEffect(() => {
		if (deleteBlogSuccess) dispatch(getBlogsAction());
	}, [dispatch, deleteBlogSuccess]);

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
				confirm={confirmDelete}
				setConfirm={setConfirmDelete}
				onConfirm={() => dispatch(deleteBlogAction(deleteBlogId))}
			/>
			<Grid container className={classes.container}>
				<Grid item container xs justify='space-between' alignItems='center'>
					<Typography variant='h1' className={classes.title}>
						Blogs
					</Typography>
					<Button
						variant='outlined'
						component={Link}
						to='/admin/blog'
						className={formClasses.button}
						startIcon={<AddCircleOutline />}
						color='secondary'
					>
						New blog
					</Button>
				</Grid>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow className={classes.headerRow}>
								<TableCell align='center'>Title</TableCell>
								<TableCell align='center'>Date</TableCell>
								<TableCell align='center'>Edit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{getBlogsLoading || deleteBlogLoading ? (
								<TableRow>
									{[...Array(3).keys()].map(key => (
										<TableCell key={key}>
											<Skeleton className={classes.skeleton} />
										</TableCell>
									))}
								</TableRow>
							) : blogs?.length === 0 ? (
								<TableRow>
									<TableCell align='center' colSpan={3}>
										No blogs
									</TableCell>
								</TableRow>
							) : (
								blogs?.map(blog => (
									<TableRow className={classes.tableRow} key={blog._id}>
										<TableCell align='center'>
											<Link
												to={`/blog/${blog.slug}`}
												className={classes.link}
												style={{ fontWeight: 500 }}
											>
												{blog.title}
											</Link>
										</TableCell>
										<TableCell align='center'>
											{moment(blog.createdAt).format('Do MMM YY')}
										</TableCell>
										<TableCell align='center'>
											<IconButton
												component={Link}
												to={`/admin/blog/${blog.slug}`}
											>
												<Edit color='secondary' />
											</IconButton>
											<IconButton
												onClick={() => {
													setConfirmDelete(
														`Are you sure you want to delete this blog: "${blog.title}"?`
													);
													setDeleteBlogId(blog._id);
												}}
											>
												<Delete className={classes.error} />
											</IconButton>
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
					{blogs && (
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component='div'
							count={blogs.length}
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
		</>
	);
};

export default ListBlogsScreen;
