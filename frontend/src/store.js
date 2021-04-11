import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	getBookingsReducer,
	listBookingsReducer,
	submitBookingReducer,
	cancelBookingReducer,
	setBookingAvailabilityReducer,
	verifyClientReducer,
	listClientsReducer
} from 'reducers/bookingReducers';
import {
	getBlogsReducer,
	getBlogBySlugReducer,
	getBlogByIdReducer,
	deleteBlogReducer,
	updateBlogReducer,
	createBlogReducer,
	uploadImageReducer
} from 'reducers/blogReducers';
import { loginReducer } from 'reducers/adminReducers';

const reducer = combineReducers({
	login: loginReducer,
	getBookings: getBookingsReducer,
	listBookings: listBookingsReducer,
	submitBooking: submitBookingReducer,
	setBookingAvailability: setBookingAvailabilityReducer,
	cancelBooking: cancelBookingReducer,
	getBlogs: getBlogsReducer,
	getBlogById: getBlogByIdReducer,
	getBlogBySlug: getBlogBySlugReducer,
	deleteBlog: deleteBlogReducer,
	verifyClient: verifyClientReducer,
	listClients: listClientsReducer,
	updateBlog: updateBlogReducer,
	createBlog: createBlogReducer,
	uploadImage: uploadImageReducer
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
