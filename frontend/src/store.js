import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	getBookingsReducer,
	listBookingsReducer,
	submitBookingReducer,
	cancelBookingReducer,
	setBookingAvailabilityReducer,
	verifyClientReducer
} from 'reducers/bookingReducers';
import { getBlogsReducer, getBlogReducer } from 'reducers/blogReducers';
import { loginReducer } from 'reducers/adminReducers';

const reducer = combineReducers({
	login: loginReducer,
	getBookings: getBookingsReducer,
	listBookings: listBookingsReducer,
	submitBooking: submitBookingReducer,
	setBookingAvailability: setBookingAvailabilityReducer,
	cancelBooking: cancelBookingReducer,
	getBlogs: getBlogsReducer,
	getBlog: getBlogReducer,
	verifyClient: verifyClientReducer
});

const middleware = [thunk];

const adminFromStorage = localStorage.getItem('admin')
	? JSON.parse(localStorage.getItem('admin'))
	: null;

const initialState = {
	login: {
		token: adminFromStorage?.token,
		isAuth: !!adminFromStorage?.token
	}
};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
