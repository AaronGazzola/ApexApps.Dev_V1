import axios from 'axios';
import moment from 'moment';
import {
	GET_BOOKINGS_REQUEST,
	GET_BOOKINGS_SUCCESS,
	GET_BOOKINGS_FAIL,
	CONFIRM_BOOKING_REQUEST,
	CONFIRM_BOOKING_SUCCESS,
	CONFIRM_BOOKING_FAIL,
	ADMIN_CANCEL_BOOKING_REQUEST,
	ADMIN_CANCEL_BOOKING_SUCCESS,
	ADMIN_CANCEL_BOOKING_FAIL,
	CLIENT_CANCEL_BOOKING_REQUEST,
	CLIENT_CANCEL_BOOKING_SUCCESS,
	CLIENT_CANCEL_BOOKING_FAIL,
	LIST_BOOKINGS_REQUEST,
	LIST_BOOKINGS_SUCCESS,
	LIST_BOOKINGS_FAIL,
	SET_BOOKING_AVAILABILITY_REQUEST,
	SET_BOOKING_AVAILABILITY_SUCCESS,
	SET_BOOKING_AVAILABILITY_FAIL
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

export const listBookingsAction = pastBookings => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: LIST_BOOKINGS_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};

		const { data } = await axios.get(
			`/api/v1/bookings?pastBookings=${pastBookings}`,
			config
		);

		dispatch({ type: LIST_BOOKINGS_SUCCESS, payload: data.bookings });
	} catch (error) {
		dispatch({
			type: LIST_BOOKINGS_FAIL,
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

export const adminCancelBookingAction = id => async (dispatch, getState) => {
	try {
		dispatch({
			type: ADMIN_CANCEL_BOOKING_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};

		await axios.post(`/api/v1/bookings/cancel/admin/${id}/`, {}, config);

		dispatch({ type: ADMIN_CANCEL_BOOKING_SUCCESS });
	} catch (error) {
		dispatch({
			type: ADMIN_CANCEL_BOOKING_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const clientCancelBookingAction = id => async dispatch => {
	try {
		dispatch({
			type: CLIENT_CANCEL_BOOKING_REQUEST
		});

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		await axios.post(`/api/v1/bookings/cancel/client/${id}/`, {}, config);

		dispatch({ type: CLIENT_CANCEL_BOOKING_SUCCESS });
	} catch (error) {
		dispatch({
			type: CLIENT_CANCEL_BOOKING_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const setBookingAvailabilityAction = (
	fromTimestamp,
	toTimestamp,
	makeAvailable
) => async (dispatch, getState) => {
	try {
		dispatch({
			type: SET_BOOKING_AVAILABILITY_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};

		await axios.post(
			`/api/v1/bookings/available/${fromTimestamp}/${toTimestamp}`,
			{ makeAvailable },
			config
		);

		dispatch({ type: SET_BOOKING_AVAILABILITY_SUCCESS });
	} catch (error) {
		dispatch({
			type: SET_BOOKING_AVAILABILITY_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
