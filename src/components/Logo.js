import React from 'react';
import clsx from 'clsx';
import styles from 'styles/logoStyles';
import { isIE } from 'react-device-detect';

const useStyles = styles;

const Logo = () => {
	const classes = useStyles();
	return (
		<svg
			className={isIE ? classes.logo : clsx(classes.logo, classes.resize)}
			version='1.1'
			id='logo'
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			viewBox='0 0 100 100'
		>
			<path
				d='
          M 0 100
          L 20 60
          L 80 60
          L 100 100
          '
			></path>
			<path
				d='
          M 32.5 35
          L 50 0
          L 67.5 35
          
          '
			></path>
		</svg>
	);
};

export default Logo;
