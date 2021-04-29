import React from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
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
import FeedbackHandler from 'components/FeedbackHandler';

const App = () => {
	const theme = getTheme();
	const classes = useStyles();
	const { isAuth } = useSelector(state => state.login);
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<main className={classes.main}>
					<FeedbackHandler />
					{isAuth ? (
						<Switch>
							<Route path='/' exact component={AboutScreen} />
							<Route path='/portfolio' exact component={PortfolioScreen} />
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
							<Route path='/portfolio' exact component={PortfolioScreen} />
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
