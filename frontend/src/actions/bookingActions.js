import axios from 'axios';
import moment from 'moment';
import {
	GET_BOOKINGS_REQUEST,
	GET_BOOKINGS_SUCCESS,
	GET_BOOKINGS_FAIL,
	CONFIRM_BOOKING_REQUEST,
	CONFIRM_BOOKING_SUCCESS,
	CONFIRM_BOOKING_FAIL,
	CANCEL_BOOKING_REQUEST,
	CANCEL_BOOKING_SUCCESS,
	CANCEL_BOOKING_FAIL
} from 'constants/bookingConstants';

export const getBookingsAction = (start, end) => async dispatch => {
	try {
		dispatch({
			type: GET_BOOKINGS_REQUEST
		});
		const { data } = await axios.get(
			`/api/v1/bookings/calendar/${start.utc().unix()}/${end.utc().unix()}`
		);

		const bookings = data.bookings.map(booking => ({
			timestamp: booking.timestamp,
			_id: booking._id,
			date: moment.unix(booking.timestamp).date(),
			hour: moment.unix(booking.timestamp).hour()
		}));

		dispatch({ type: GET_BOOKINGS_SUCCESS, payload: bookings });
	} catch (error) {
		dispatch({
			type: GET_BOOKINGS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const confirmBookingAction = (inputs, booking) => async dispatch => {
	try {
		dispatch({
			type: CONFIRM_BOOKING_REQUEST
		});

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		await axios.post(
			`/api/v1/bookings/confirm/${booking._id}`,
			{
				name: inputs.name.value,
				email: inputs.email.value,
				phone: inputs.phone.value,
				description: inputs.description.value
			},
			config
		);

		dispatch({ type: CONFIRM_BOOKING_SUCCESS });
	} catch (error) {
		dispatch({
			type: CONFIRM_BOOKING_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const cancelBookingAction = (id, isClient) => async dispatch => {
	try {
		dispatch({
			type: CANCEL_BOOKING_REQUEST
		});

		const config = {};

		await axios.post(
			`/api/v1/bookings/cancel/${id}/${isClient ? 'client' : 'admin'}`,
			{},
			config
		);

		dispatch({ type: CANCEL_BOOKING_SUCCESS });
	} catch (error) {
		dispatch({
			type: CANCEL_BOOKING_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
