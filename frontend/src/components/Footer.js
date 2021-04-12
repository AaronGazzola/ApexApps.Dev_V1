import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import useStyles from 'styles/appStyles';

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant='body2'>
				Designed and Developed by Apex Apps
			</Typography>
			<Typography variant='body2'>
				Copyright &copy; Apex Apps {new Date().getFullYear()}
			</Typography>
			<Typography variant='body2'>
				<Link to='/terms' className={classes.link}>
					Terms and Conditions
				</Link>
			</Typography>
		</footer>
	);
};

export default Footer;
