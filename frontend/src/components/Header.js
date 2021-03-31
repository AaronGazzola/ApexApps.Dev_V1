import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from 'components/Logo';
import NavTabs from 'components/NavTabs';
import styles from 'styles/appStyles';
import { useLocation } from 'react-router-dom';

const useStyles = styles;

const Header = () => {
	const location = useLocation();
	const classes = useStyles();

	// scroll to top on navigation
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// update selected tab with router location on page reload
	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setTabValue(0);
				break;
			case '/apps':
				setTabValue(1);
				break;
			case '/blog':
				setTabValue(2);
				break;
			case '/contact':
				setTabValue(3);
				break;
			default:
				break;
		}
	});

	const [tabValue, setTabValue] = useState(0);

	const handleTabChange = (e, newValue) => {
		setTabValue(newValue);
	};

	return (
		<AppBar position='relative' className={classes.appBar}>
			<Toolbar disableGutters className={classes.toolbar}>
				<Typography
					className={clsx(classes.headerTitle, classes.headerTitle1)}
					variant='h1'
				>
					apex
				</Typography>
				<Typography
					className={clsx(classes.headerTitle, classes.headerTitle2)}
					variant='h1'
				>
					apps
				</Typography>
				<Logo handleTabChange={handleTabChange} />
				<NavTabs tabValue={tabValue} handleTabChange={handleTabChange} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
