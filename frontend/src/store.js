import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	getBookingsReducer,
	confirmBookingReducer,
	cancelBookingReducer
} from 'reducers/bookingReducers';

const reducer = combineReducers({
	getBookings: getBookingsReducer,
	confirmBooking: confirmBookingReducer,
	cancelBooking: cancelBookingReducer
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
