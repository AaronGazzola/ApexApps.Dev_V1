import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	getBookingsReducer,
	confirmBookingReducer,
	cancelBookingReducer
} from 'reducers/bookingReducers';
import { getBlogsReducer, getBlogReducer } from 'reducers/blogReducers';

const reducer = combineReducers({
	getBookings: getBookingsReducer,
	confirmBooking: confirmBookingReducer,
	cancelBooking: cancelBookingReducer,
	getBlogs: getBlogsReducer,
	getBlog: getBlogReducer
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
