import {
	GET_BOOKINGS_REQUEST,
	GET_BOOKINGS_SUCCESS,
	GET_BOOKINGS_FAIL,
	GET_BOOKINGS_CLEAR,
	CONFIRM_BOOKING_REQUEST,
	CONFIRM_BOOKING_SUCCESS,
	CONFIRM_BOOKING_FAIL,
	CONFIRM_BOOKING_CLEAR,
	CANCEL_BOOKING_REQUEST,
	CANCEL_BOOKING_SUCCESS,
	CANCEL_BOOKING_FAIL,
	CANCEL_BOOKING_CLEAR,
	LIST_BOOKINGS_REQUEST,
	LIST_BOOKINGS_SUCCESS,
	LIST_BOOKINGS_FAIL,
	LIST_BOOKINGS_CLEAR
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

export const listBookingsReducer = (state = {}, action) => {
	switch (action.type) {
		case LIST_BOOKINGS_REQUEST:
			return { loading: true };
		case LIST_BOOKINGS_SUCCESS:
			return {
				loading: false,
				success: true,
				bookings: action.payload
			};
		case LIST_BOOKINGS_FAIL:
			return { loading: false, error: action.payload };
		case LIST_BOOKINGS_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const confirmBookingReducer = (state = {}, action) => {
	switch (action.type) {
		case CONFIRM_BOOKING_REQUEST:
			return { loading: true };
		case CONFIRM_BOOKING_SUCCESS:
			return {
				loading: false,
				success: 'Booking confirmed!'
			};
		case CONFIRM_BOOKING_FAIL:
			return { loading: false, error: action.payload };
		case CONFIRM_BOOKING_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const cancelBookingReducer = (state = {}, action) => {
	switch (action.type) {
		case CANCEL_BOOKING_REQUEST:
			return { loading: true };
		case CANCEL_BOOKING_SUCCESS:
			return {
				loading: false,
				success: 'Booking Cancelled'
			};
		case CANCEL_BOOKING_FAIL:
			return { loading: false, error: action.payload };
		case CANCEL_BOOKING_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};
