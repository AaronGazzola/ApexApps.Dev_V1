import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'styles/formStyles';
import { TextField, Button, CircularProgress, Grid } from '@material-ui/core';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
	validate
} from 'utils/validators';
import { loginAction, logoutAction } from 'actions/adminActions';

const AdminScreen = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { isAuth, loading: loginLoading } = useSelector(state => state.login);
	const [password, setPassword] = useState({
		value: '',
		isValid: false,
		isTouched: false
	});
	const changeHandler = (e, validators) => {
		setPassword({
			...password,
			value: e.target.value,
			isValid: validate(e.target.value, validators)
		});
	};
	const touchHandler = e => {
		setPassword({ ...password, isTouched: true });
	};
	const submitHandler = e => {
		e.preventDefault();
		dispatch(loginAction(password.value));
	};
	const handleLogout = () => {
		dispatch(logoutAction());
	};
	if (!isAuth)
		return (
			<form onSubmit={submitHandler} className={classes.form}>
				<TextField
					id='password'
					label='Password'
					type='password'
					placeholder='Password'
					fullWidth
					color='secondary'
					className={
						password.isTouched && !password.isValid
							? clsx(classes.input, classes.error)
							: classes.input
					}
					onChange={e =>
						changeHandler(e, [VALIDATOR_MINLENGTH(6), VALIDATOR_REQUIRE()])
					}
					onBlur={touchHandler}
					value={password.value}
					error={password.isTouched && !password.isValid}
					helperText={
						password.isTouched && !password.isValid
							? 'Please enter your password'
							: ' '
					}
				/>
				<Button
					className={classes.submitButton}
					variant='contained'
					color='secondary'
					disabled={!password.isValid}
					type='submit'
				>
					{loginLoading ? (
						<CircularProgress size={25} className={classes.submitProgress} />
					) : (
						'Log in'
					)}
				</Button>
			</form>
		);
	if (isAuth)
		return (
			<Grid
				container
				spacing={2}
				direction='column'
				alignItems='center'
				className={classes.grid}
			>
				<Grid item>
					<Button
						className={classes.blueButton}
						variant='outlined'
						color='secondary'
						component={Link}
						to='/admin/blogs'
					>
						Blogs
					</Button>
				</Grid>
				<Grid item>
					<Button
						className={classes.blueButton}
						variant='outlined'
						color='secondary'
						component={Link}
						to='/admin/bookings'
					>
						Bookings
					</Button>
				</Grid>
				<Grid item>
					<Button
						className={classes.blueButton}
						variant='outlined'
						color='secondary'
						component={Link}
						to='/admin/clients'
					>
						Clients
					</Button>
				</Grid>
				<Grid item>
					<Button
						className={classes.errorButton}
						variant='outlined'
						onClick={handleLogout}
					>
						Log Out
					</Button>
				</Grid>
			</Grid>
		);
};

export default AdminScreen;
