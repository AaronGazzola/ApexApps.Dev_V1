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
import LoginScreen from 'screens/LoginScreen';
import ListBookingsScreen from 'screens/ListBookingsScreen';
import ListClientsScreen from 'screens/ListClientsScreen';
import ListBlogsScreen from 'screens/ListBlogsScreen';
import EditBlogScreen from 'screens/EditBlogScreen';
import Message from 'components/Message';
import { LOG_IN_CLEAR } from 'constants/adminConstants';
import { GET_BLOGS_CLEAR, GET_BLOG_CLEAR } from 'constants/blogConstants';
import {
	GET_BOOKINGS_CLEAR,
	CONFIRM_BOOKING_CLEAR,
	CANCEL_BOOKING_CLEAR
} from 'constants/bookingConstants';
import SnackBar from 'components/SnackBar';

const App = () => {
	const theme = getTheme();
	const classes = useStyles();

	const {
		login: { isAuth, error: loginError },
		getBookings: { error: getBookingsError },
		confirmBooking: {
			error: confirmBookingError,
			success: confirmBookingSuccess
		},
		cancelBooking: { error: cancelBookingError, success: cancelBookingSuccess },
		getBlogs: { error: getBlogsError },
		getBlog: { error: getBlogError }
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
							confirmBookingError ||
							cancelBookingError ||
							getBlogsError ||
							getBlogError
						}
						clearType={
							loginError
								? LOG_IN_CLEAR
								: getBookingsError
								? GET_BOOKINGS_CLEAR
								: confirmBookingError
								? CONFIRM_BOOKING_CLEAR
								: cancelBookingError
								? CANCEL_BOOKING_CLEAR
								: getBlogsError
								? GET_BLOGS_CLEAR
								: getBlogError
								? GET_BLOG_CLEAR
								: null
						}
					/>
					<SnackBar
						message={confirmBookingSuccess || cancelBookingSuccess}
						clearType={
							confirmBookingSuccess
								? CONFIRM_BOOKING_CLEAR
								: cancelBookingSuccess
								? CANCEL_BOOKING_CLEAR
								: null
						}
					/>
					<Switch>
						<Route path='/' exact component={AboutScreen} />
						<Route path='/apps' exact component={PortfolioScreen} />
						<Route path='/blog' exact component={BlogsScreen} />
						<Route path='/blog/:slug' component={BlogScreen} />
						<Route path='/contact' exact component={ContactScreen} />
						<Route path='/cancel/:id/:client' component={CancelBookingScreen} />
						<Route path='/login' exact component={LoginScreen} />
						{isAuth ? (
							<>
								<Route
									path='/admin/bookings'
									exact
									component={ListBookingsScreen}
								/>
								<Route
									path='/admin/bookings'
									exact
									component={ListClientsScreen}
								/>
								<Route path='/admin/blogs' exact component={ListBlogsScreen} />
								<Route path='/admin/blog/:id' component={EditBlogScreen} />
							</>
						) : (
							<Redirect path='/admin/' to='/login' />
						)}
						<Route path='/' component={PageNotFoundScreen} />
					</Switch>
				</main>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};

export default App;
