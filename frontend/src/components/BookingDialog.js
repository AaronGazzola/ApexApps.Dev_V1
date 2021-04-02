import React, { useEffect, useReducer } from 'react';
import useStyles from 'styles/formStyles';
import moment from 'moment';
import { produce } from 'immer';
import clsx from 'clsx';
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField
} from '@material-ui/core';
import {
	validate,
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_MAXLENGTH,
	VALIDATOR_REQUIRE
} from 'utils/validators';
import { useDispatch, useSelector } from 'react-redux';
import { confirmBookingAction } from 'actions/bookingActions';

const initialState = {
	isValid: false,
	inputs: {
		name: {
			value: '',
			isValid: false,
			isTouched: false
		},
		email: {
			value: '',
			isValid: false,
			isTouched: false
		},
		phone: {
			value: '',
			isValid: false,
			isTouched: false
		},
		description: {
			value: '',
			isValid: false,
			isTouched: false
		}
	}
};

const reducer = (formState, action) =>
	produce(formState, draft => {
		switch (action.type) {
			case 'CHANGE':
				// run validators for current input
				let inputIsValid = validate(action.payload.value, action.validators);
				// loop over form inputs in formState
				let formIsValid = true;
				for (const inputId in formState.inputs) {
					if (inputId === action.payload.id) {
						// if current inputId matches dispatched id
						// set formIsValid based on dispatched id
						formIsValid = formIsValid && inputIsValid;
					} else {
						// if current inputId does not match dispatched id
						// set formIsValid based on formState value of matched id
						formIsValid = formIsValid && formState.inputs[inputId].isValid;
					}
				}
				draft.isValid = formIsValid;
				draft.inputs[action.payload.id].value = action.payload.value;
				draft.inputs[action.payload.id].isValid = inputIsValid;
				break;
			case 'TOUCH':
				draft.inputs[action.payload.id].isTouched = true;
				break;
			default:
				break;
		}
	});

const BookingDialog = ({ open, setOpen, booking }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [formState, formDispatch] = useReducer(reducer, initialState);
	const {
		inputs: { name, email, phone, description }
	} = formState;

	const confirmBooking = useSelector(state => state.confirmBooking);
	const { success, loading, error } = confirmBooking;

	useEffect(() => {
		if (success || error) {
			setOpen(false);
		}
	}, [success, dispatch, error]);

	const handleClose = () => {
		setOpen(false);
	};

	const changeHandler = (e, validators) => {
		formDispatch({ type: 'CHANGE', payload: e.target, validators });
	};

	const touchHandler = e => {
		if (!formState.inputs[e.target.id].isTouched) {
			formDispatch({ type: 'TOUCH', payload: e.target });
		}
	};

	const submitHandler = () => {
		dispatch(confirmBookingAction(formState.inputs, booking));
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			classes={{ paper: classes.paper }}
		>
			<DialogTitle disableTypography className={classes.title}>
				Confirm Call Booking
			</DialogTitle>
			<DialogTitle disableTypography className={classes.subTitle}>
				{moment.unix(booking?.timestamp).format('h:mma dddd Do MMMM YYYY')}
			</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					color='secondary'
					margin='dense'
					id='name'
					label='Name'
					type='text'
					fullWidth
					className={
						name.isTouched && !name.isValid
							? clsx(classes.input, classes.error)
							: classes.input
					}
					onChange={e => changeHandler(e, [VALIDATOR_REQUIRE()])}
					onBlur={touchHandler}
					value={name.value}
					error={name.isTouched && !name.isValid}
					helperText={name.isTouched && !name.isValid && 'Name is requried'}
				/>
				<TextField
					color='secondary'
					margin='dense'
					id='email'
					label='Email Address'
					type='email'
					fullWidth
					className={
						email.isTouched && !email.isValid
							? clsx(classes.input, classes.error)
							: classes.input
					}
					onChange={e =>
						changeHandler(e, [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()])
					}
					onBlur={touchHandler}
					value={email.value}
					error={email.isTouched && !email.isValid}
					helperText={
						email.isTouched &&
						!email.isValid &&
						'Please add a valid email address'
					}
				/>
				<TextField
					color='secondary'
					margin='dense'
					id='phone'
					label='Phone Number'
					type='tel'
					fullWidth
					className={
						phone.isTouched && !phone.isValid
							? clsx(classes.input, classes.error)
							: classes.input
					}
					onChange={e =>
						changeHandler(e, [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)])
					}
					onBlur={touchHandler}
					value={phone.value}
					error={phone.isTouched && !phone.isValid}
					helperText={
						phone.isTouched &&
						!phone.isValid &&
						'Please add a valid phone number'
					}
				/>
				<TextField
					color='secondary'
					margin='dense'
					id='description'
					label='Project Description'
					type='textarea'
					variant='outlined'
					multiline
					rows={3}
					fullWidth
					className={
						description.isTouched && !description.isValid
							? clsx(classes.textarea, classes.input, classes.error)
							: clsx(classes.textarea, classes.input)
					}
					onChange={e =>
						changeHandler(e, [
							VALIDATOR_REQUIRE(),
							VALIDATOR_MINLENGTH(10),
							VALIDATOR_MAXLENGTH(1000)
						])
					}
					onBlur={touchHandler}
					value={description.value}
					error={description.isTouched && !description.isValid}
					helperText={
						description.isTouched &&
						!description.isValid &&
						'Please include a brief description of your project'
					}
				/>
				<DialogActions>
					<Button onClick={handleClose} className={classes.cancelButton}>
						Cancel
					</Button>
					<Button
						onClick={submitHandler}
						color='secondary'
						disabled={!formState.isValid}
						variant='contained'
						className={classes.submitButton}
					>
						{loading ? (
							<CircularProgress size={25} className={classes.progress} />
						) : (
							'Confirm'
						)}
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

export default BookingDialog;
