import { Typography } from '@material-ui/core';
import React from 'react';
import styles from 'styles/appStyles';

const useStyles = styles;

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
		</footer>
	);
};

export default Footer;
