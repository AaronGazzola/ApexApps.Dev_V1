import React, { useState, useEffect } from 'react';
import {
	AppBar,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	useMediaQuery,
	Divider,
	Typography
} from '@material-ui/core';
import {
	Menu as MenuIcon,
	ChevronRight as ChevronRightIcon
} from '@material-ui/icons';
import Logo from 'components/Logo';
import NavTabs from 'components/NavTabs';
import styles from 'styles/appStyles';
import { Link, useLocation } from 'react-router-dom';

const useStyles = styles;

const Header = () => {
	const location = useLocation();
	const classes = useStyles();
	const matchesSm = useMediaQuery(theme => theme.breakpoints.down('sm'));

	// update selected tab with router location on page reload
	useEffect(() => {
		switch (location.pathname) {
			case '/portfolio':
				setTabValue(0);
				break;
			case '/about':
				setTabValue(1);
				break;
			case '/':
				setTabValue(2);
				break;
			case '/blog':
				setTabValue(3);
				break;
			case '/contact':
				setTabValue(4);
				break;
			default:
				break;
		}
	}, [location.pathname]);

	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const [tabValue, setTabValue] = useState(0);

	const handleTabChange = (e, newValue) => {
		setTabValue(newValue);
	};

	const handleDrawerOpen = () => {
		setDrawerIsOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerIsOpen(false);
	};

	return (
		<>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar disableGutters className={classes.toolBar}>
					<Logo handleTabChange={handleTabChange} />
					{matchesSm ? (
						<IconButton onClick={handleDrawerOpen}>
							<MenuIcon size='large' color='primary' />
						</IconButton>
					) : (
						<NavTabs tabValue={tabValue} handleTabChange={handleTabChange} />
					)}
				</Toolbar>
			</AppBar>
			{matchesSm && (
				<Drawer
					className={classes.drawer}
					variant='temporary'
					anchor='left'
					open={drawerIsOpen}
					onClose={handleDrawerClose}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<Typography variant='h6'>Apex Apps</Typography>
						<IconButton onClick={handleDrawerClose}>
							<ChevronRightIcon color='primary' />
						</IconButton>
					</div>
					<Divider />
					<List disablePadding>
						<ListItem
							button
							component={Link}
							to='/'
							selected={tabValue === 0}
							onClick={() => {
								setTabValue(0);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='About' />
						</ListItem>
						<ListItem
							button
							component={Link}
							to='/products'
							selected={tabValue === 1}
							onClick={() => {
								setTabValue(1);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='Products' />
						</ListItem>
						<ListItem
							button
							component={Link}
							to='/cars'
							selected={tabValue === 3}
							onClick={() => {
								setTabValue(3);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='Classic Cars' />
						</ListItem>
						<ListItem
							button
							component={Link}
							to='/contact'
							selected={tabValue === 4}
							onClick={() => {
								setTabValue(4);
								setDrawerIsOpen(false);
							}}
							className={classes.drawerNavButton}
						>
							<ListItemText primary='Contact Us' />
						</ListItem>
					</List>
				</Drawer>
			)}
		</>
	);
};

export default Header;
