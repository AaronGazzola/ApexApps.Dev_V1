import {
	GET_BOOKINGS_REQUEST,
	GET_BOOKINGS_SUCCESS,
	GET_BOOKINGS_FAIL,
	GET_BOOKINGS_CLEAR
} from 'constants/bookingConstants';

export const getBookingsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_BOOKINGS_REQUEST:
			return { loading: true };
		case GET_BOOKINGS_SUCCESS:
			return {
				loading: false,
				success: true,
				bookings: action.payload
			};
		case GET_BOOKINGS_FAIL:
			return { loading: false, error: action.payload };
		case GET_BOOKINGS_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};
