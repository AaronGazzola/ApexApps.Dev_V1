import {
	GET_BOOKINGS_REQUEST,
	GET_BOOKINGS_SUCCESS,
	GET_BOOKINGS_FAIL,
	GET_BOOKINGS_CLEAR,
	SUBMIT_BOOKING_REQUEST,
	SUBMIT_BOOKING_SUCCESS,
	SUBMIT_BOOKING_FAIL,
	SUBMIT_BOOKING_CLEAR,
	CANCEL_BOOKING_REQUEST,
	CANCEL_BOOKING_SUCCESS,
	CANCEL_BOOKING_FAIL,
	CANCEL_BOOKING_CLEAR,
	LIST_BOOKINGS_REQUEST,
	LIST_BOOKINGS_SUCCESS,
	LIST_BOOKINGS_FAIL,
	LIST_BOOKINGS_CLEAR,
	SET_BOOKING_AVAILABILITY_REQUEST,
	SET_BOOKING_AVAILABILITY_SUCCESS,
	SET_BOOKING_AVAILABILITY_FAIL,
	SET_BOOKING_AVAILABILITY_CLEAR,
	VERIFY_CLIENT_REQUEST,
	VERIFY_CLIENT_SUCCESS,
	VERIFY_CLIENT_FAIL,
	VERIFY_CLIENT_CLEAR,
	LIST_CLIENTS_REQUEST,
	LIST_CLIENTS_SUCCESS,
	LIST_CLIENTS_FAIL,
	LIST_CLIENTS_CLEAR
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

export const submitBookingReducer = (state = {}, action) => {
	switch (action.type) {
		case SUBMIT_BOOKING_REQUEST:
			return { loading: true };
		case SUBMIT_BOOKING_SUCCESS:
			return {
				loading: false,
				success: action.payload
			};
		case SUBMIT_BOOKING_FAIL:
			return { loading: false, error: action.payload };
		case SUBMIT_BOOKING_CLEAR:
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
export const verifyClientReducer = (state = {}, action) => {
	switch (action.type) {
		case VERIFY_CLIENT_REQUEST:
			return { loading: true };
		case VERIFY_CLIENT_SUCCESS:
			return {
				loading: false,
				success: action.payload
			};
		case VERIFY_CLIENT_FAIL:
			return { loading: false, error: action.payload };
		case VERIFY_CLIENT_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const listClientsReducer = (state = {}, action) => {
	switch (action.type) {
		case LIST_CLIENTS_REQUEST:
			return { loading: true };
		case LIST_CLIENTS_SUCCESS:
			return {
				loading: false,
				clients: action.payload
			};
		case LIST_CLIENTS_FAIL:
			return { loading: false, error: action.payload };
		case LIST_CLIENTS_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};
