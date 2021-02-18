import axios from 'axios';
import moment from 'moment';
import {
	GET_BOOKINGS_REQUEST,
	GET_BOOKINGS_SUCCESS,
	GET_BOOKINGS_FAIL
} from 'constants/bookingConstants';

export const getBookingsAction = midnightSunday => async dispatch => {
	try {
		dispatch({
			type: GET_BOOKINGS_REQUEST
		});
		const { data } = await axios.get(
			`/api/v1/bookings/${midnightSunday.utc().unix()}`
		);

		dispatch({ type: GET_BOOKINGS_SUCCESS, payload: data.bookings });
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
