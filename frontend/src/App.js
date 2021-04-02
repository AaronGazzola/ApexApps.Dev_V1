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
import AdminCancelBooking from 'screens/AdminCancelBooking';
import LoginScreen from 'screens/LoginScreen';

const theme = getTheme();

const App = () => {
	const classes = useStyles();

	const { isAuth } = useSelector(state => state.login);
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<main className={classes.main}>
					<Switch>
						<Route path='/' exact component={AboutScreen} />
						<Route path='/apps' exact component={PortfolioScreen} />
						<Route path='/blog' exact component={BlogsScreen} />
						<Route path='/blog/:slug' component={BlogScreen} />
						<Route path='/contact' exact component={ContactScreen} />
						<Route path='/cancel/:id/:client' component={CancelBookingScreen} />
						<Route path='/login' exact component={LoginScreen} />
						{isAuth ? (
							<Route
								path='/admin/cancelbooking/:id'
								component={AdminCancelBooking}
							/>
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
