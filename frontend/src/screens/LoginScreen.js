import React, { useState } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'styles/formStyles';
import { TextField, Button } from '@material-ui/core';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
	validate
} from 'utils/validators';
import { loginAction, logoutAction } from 'actions/adminActions';

const LoginScreen = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { isAuth } = useSelector(state => state.login);
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
					className={classes.button2}
					variant='contained'
					color='secondary'
					disabled={!password.isValid}
					type='submit'
				>
					Log in
				</Button>
			</form>
		);
	if (isAuth)
		return (
			<Button
				className={classes.button}
				variant='contained'
				color='secondary'
				onClick={handleLogout}
			>
				Log Out
			</Button>
		);
};

export default LoginScreen;
