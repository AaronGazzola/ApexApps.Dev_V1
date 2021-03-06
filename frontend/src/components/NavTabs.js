import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import useStyles from 'styles/appStyles';
import { Link } from 'react-router-dom';

const NavTabs = ({ tabValue, handleTabChange }) => {
	const classes = useStyles();
	return (
		<Tabs
			value={tabValue}
			onChange={handleTabChange}
			aria-label='navigation tabs'
			indicatorColor='primary'
			className={classes.tabs}
			textColor='primary'
		>
			<Tab
				className={classes.tab}
				component={Link}
				to='/'
				disableRipple
				label='About'
			/>
			<Tab
				className={classes.tab}
				component={Link}
				to='/apps'
				disableRipple
				label='Apps'
			/>
			<Tab
				className={classes.tab}
				component={Link}
				to='/blog'
				disableRipple
				label='Blog'
			/>
			<Tab
				className={classes.tab}
				component={Link}
				to='/contact'
				disableRipple
				label='Contact'
			/>
		</Tabs>
	);
};

export default NavTabs;
