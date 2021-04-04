import {
	GET_BOOKINGS_REQUEST,
	GET_BOOKINGS_SUCCESS,
	GET_BOOKINGS_FAIL,
	GET_BOOKINGS_CLEAR,
	CONFIRM_BOOKING_REQUEST,
	CONFIRM_BOOKING_SUCCESS,
	CONFIRM_BOOKING_FAIL,
	CONFIRM_BOOKING_CLEAR,
	ADMIN_CANCEL_BOOKING_REQUEST,
	ADMIN_CANCEL_BOOKING_SUCCESS,
	ADMIN_CANCEL_BOOKING_FAIL,
	ADMIN_CANCEL_BOOKING_CLEAR,
	CLIENT_CANCEL_BOOKING_REQUEST,
	CLIENT_CANCEL_BOOKING_SUCCESS,
	CLIENT_CANCEL_BOOKING_FAIL,
	CLIENT_CANCEL_BOOKING_CLEAR,
	LIST_BOOKINGS_REQUEST,
	LIST_BOOKINGS_SUCCESS,
	LIST_BOOKINGS_FAIL,
	LIST_BOOKINGS_CLEAR,
	SET_BOOKING_AVAILABILITY_REQUEST,
	SET_BOOKING_AVAILABILITY_SUCCESS,
	SET_BOOKING_AVAILABILITY_FAIL,
	SET_BOOKING_AVAILABILITY_CLEAR
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

export const adminCancelBookingReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_CANCEL_BOOKING_REQUEST:
			return { loading: true };
		case ADMIN_CANCEL_BOOKING_SUCCESS:
			return {
				loading: false,
				success: 'Booking Cancelled'
			};
		case ADMIN_CANCEL_BOOKING_FAIL:
			return { loading: false, error: action.payload };
		case ADMIN_CANCEL_BOOKING_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const clientCancelBookingReducer = (state = {}, action) => {
	switch (action.type) {
		case CLIENT_CANCEL_BOOKING_REQUEST:
			return { loading: true };
		case CLIENT_CANCEL_BOOKING_SUCCESS:
			return {
				loading: false,
				success: 'Booking Cancelled'
			};
		case CLIENT_CANCEL_BOOKING_FAIL:
			return { loading: false, error: action.payload };
		case CLIENT_CANCEL_BOOKING_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const setBookingAvailabilityReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_BOOKING_AVAILABILITY_REQUEST:
			return { loading: true };
		case SET_BOOKING_AVAILABILITY_SUCCESS:
			return {
				loading: false,
				success: 'Booking availability updated'
			};
		case SET_BOOKING_AVAILABILITY_FAIL:
			return { loading: false, error: action.payload };
		case SET_BOOKING_AVAILABILITY_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};
