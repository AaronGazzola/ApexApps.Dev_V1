import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { getTheme } from 'styles/theme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import useStyles from 'styles/appStyles';
import PageNotFoundScreen from 'screens/PageNotFoundScreen';
import PortfolioScreen from 'screens/PortfolioScreen';
import AboutScreen from 'screens/AboutScreen';
import ContactScreen from 'screens/ContactScreen';
import BlogsScreen from 'screens/BlogsScreen';
import BlogScreen from 'screens/BlogScreen';
import CancelBookingScreen from 'screens/CancelBookingScreen';
import AdminScreen from 'screens/AdminScreen';
import ListBookingsScreen from 'screens/ListBookingsScreen';
import ListClientsScreen from 'screens/ListClientsScreen';
import ListBlogsScreen from 'screens/ListBlogsScreen';
import EditBlogScreen from 'screens/EditBlogScreen';
import TermsScreen from 'screens/TermsScreen';
import PrivacyPolicyScreen from 'screens/PrivacyPolicyScreen';
import VerifyClientScreen from 'screens/VerifyClientScreen';
import Message from 'components/Message';
import { LOG_IN_CLEAR } from 'constants/adminConstants';
import {
	GET_BLOGS_CLEAR,
	GET_BLOG_BY_SLUG_CLEAR,
	GET_BLOG_BY_ID_CLEAR,
	DELETE_BLOG_CLEAR,
	UPDATE_BLOG_CLEAR,
	CREATE_BLOG_CLEAR,
	UPLOAD_IMAGE_CLEAR
} from 'constants/blogConstants';
import {
	GET_BOOKINGS_CLEAR,
	LIST_BOOKINGS_CLEAR,
	SUBMIT_BOOKING_CLEAR,
	CANCEL_BOOKING_CLEAR,
	VERIFY_CLIENT_CLEAR,
	SET_BOOKING_AVAILABILITY_CLEAR,
	LIST_CLIENTS_CLEAR
} from 'constants/bookingConstants';
import SnackBar from 'components/SnackBar';

const App = () => {
	const theme = getTheme();
	const classes = useStyles();

	const {
		login: { isAuth, error: loginError },
		getBookings: { error: getBookingsError },
		listBookings: { error: listBookingsError },
		submitBooking: { error: submitBookingError, success: submitBookingSuccess },
		setBookingAvailability: {
			error: setBookingAvailabilityError,
			success: setBookingAvailabilitySuccess
		},
		cancelBooking: { error: cancelBookingError, success: cancelBookingSuccess },
		verifyClient: { error: verifyClientError, success: verifyClientSuccess },
		getBlogs: { error: getBlogsError },
		getBlogBySlug: { error: getBlogBySlugError },
		getBlogById: { error: getBlogByIdError },
		deleteBlog: { error: deleteBlogError, success: deleteBlogSuccess },
		listClients: { error: listClientsError },
		updateBlog: { error: updateBlogError, success: updateBlogSuccess },
		createBlog: { error: createBlogError, success: createBlogSuccess },
		uploadImage: { error: uploadImageError, success: uploadImageSuccess }
	} = useSelector(state => state);
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<main className={classes.main}>
					<Message
						error={
							loginError ||
							getBookingsError ||
							listBookingsError ||
							submitBookingError ||
							cancelBookingError ||
							getBlogsError ||
							getBlogBySlugError ||
							getBlogByIdError ||
							setBookingAvailabilityError ||
							verifyClientError ||
							listClientsError ||
							deleteBlogError ||
							createBlogError ||
							updateBlogError ||
							uploadImageError
						}
						success={
							submitBookingSuccess ===
								'Please check your email inbox to confirm your booking' &&
							submitBookingSuccess
						}
						clearType={
							loginError
								? LOG_IN_CLEAR
								: getBookingsError
								? GET_BOOKINGS_CLEAR
								: listBookingsError
								? LIST_BOOKINGS_CLEAR
								: cancelBookingError
								? CANCEL_BOOKING_CLEAR
								: getBlogsError
								? GET_BLOGS_CLEAR
								: getBlogBySlugError
								? GET_BLOG_BY_SLUG_CLEAR
								: getBlogByIdError
								? GET_BLOG_BY_ID_CLEAR
								: setBookingAvailabilityError
								? SET_BOOKING_AVAILABILITY_CLEAR
								: verifyClientError
								? VERIFY_CLIENT_CLEAR
								: listClientsError
								? LIST_CLIENTS_CLEAR
								: deleteBlogError
								? DELETE_BLOG_CLEAR
								: updateBlogError
								? UPDATE_BLOG_CLEAR
								: createBlogError
								? CREATE_BLOG_CLEAR
								: uploadImageError
								? UPLOAD_IMAGE_CLEAR
								: submitBookingError ||
								  submitBookingSuccess ===
										'Please check your email inbox to confirm your booking'
								? SUBMIT_BOOKING_CLEAR
								: null
						}
					/>
					<SnackBar
						message={
							submitBookingSuccess &&
							submitBookingSuccess !=
								'Please check your email inbox to confirm your booking'
								? submitBookingSuccess
								: cancelBookingSuccess ||
								  setBookingAvailabilitySuccess ||
								  verifyClientSuccess ||
								  deleteBlogSuccess ||
								  updateBlogSuccess ||
								  createBlogSuccess ||
								  uploadImageSuccess
						}
						clearType={
							submitBookingSuccess
								? SUBMIT_BOOKING_CLEAR
								: cancelBookingSuccess
								? CANCEL_BOOKING_CLEAR
								: setBookingAvailabilitySuccess
								? SET_BOOKING_AVAILABILITY_CLEAR
								: verifyClientSuccess
								? VERIFY_CLIENT_CLEAR
								: deleteBlogSuccess
								? DELETE_BLOG_CLEAR
								: createBlogSuccess
								? CREATE_BLOG_CLEAR
								: updateBlogSuccess
								? UPDATE_BLOG_CLEAR
								: uploadImageSuccess
								? UPLOAD_IMAGE_CLEAR
								: null
						}
					/>
					{isAuth ? (
						<Switch>
							<Route path='/' exact component={AboutScreen} />
							<Route path='/apps' exact component={PortfolioScreen} />
							<Route path='/blog' exact component={BlogsScreen} />
							<Route path='/blog/:slug' component={BlogScreen} />
							<Route path='/contact' exact component={ContactScreen} />
							<Route
								path='/cancel/:client/:id'
								component={CancelBookingScreen}
							/>
							<Route
								path='/verifyclient/:token'
								component={VerifyClientScreen}
							/>
							<Route path='/admin' exact component={AdminScreen} />
							<Route
								path='/admin/bookings'
								exact
								component={ListBookingsScreen}
							/>
							<Route
								path='/admin/clients'
								exact
								component={ListClientsScreen}
							/>
							<Route path='/admin/blogs' exact component={ListBlogsScreen} />
							<Route path='/admin/blog/:id' component={EditBlogScreen} />
							<Route path='/admin/blog/' component={EditBlogScreen} />
							<Route path='/terms' exact component={TermsScreen} />
							<Route path='/privacy' exact component={PrivacyPolicyScreen} />
							<Route path='/' component={PageNotFoundScreen} />
						</Switch>
					) : (
						<Switch>
							<Route path='/' exact component={AboutScreen} />
							<Route path='/apps' exact component={PortfolioScreen} />
							<Route path='/blog' exact component={BlogsScreen} />
							<Route path='/blog/:slug' component={BlogScreen} />
							<Route path='/contact' exact component={ContactScreen} />
							<Route
								path='/cancel/:client/:id/'
								component={CancelBookingScreen}
							/>
							<Route
								path='/verifyclient/:token'
								component={VerifyClientScreen}
							/>
							<Route path='/admin' exact component={AdminScreen} />

							<Redirect path='/admin/' to='/admin' />
							<Route path='/terms' exact component={TermsScreen} />
							<Route path='/privacy' exact component={PrivacyPolicyScreen} />
							<Route path='/' component={PageNotFoundScreen} />
						</Switch>
					)}
				</main>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};

export default App;
