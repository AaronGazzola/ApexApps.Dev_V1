import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	getBookingsReducer,
	listBookingsReducer,
	confirmBookingReducer,
	adminCancelBookingReducer,
	clientCancelBookingReducer,
	setBookingAvailabilityReducer
} from 'reducers/bookingReducers';
import { getBlogsReducer, getBlogReducer } from 'reducers/blogReducers';
import { loginReducer } from 'reducers/adminReducers';

const reducer = combineReducers({
	setBookingAvailability: setBookingAvailabilityReducer,
	getBookings: getBookingsReducer,
	listBookings: listBookingsReducer,
	confirmBooking: confirmBookingReducer,
	adminCancelBooking: adminCancelBookingReducer,
	clientCancelBooking: clientCancelBookingReducer,
	getBlogs: getBlogsReducer,
	getBlog: getBlogReducer,
	login: loginReducer
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
