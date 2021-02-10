import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from 'styles/logoStyles';
import { isIE } from 'react-device-detect';

const useStyles = styles;

const Logo = () => {
	const classes = useStyles();
	// Check local storage to see if animation has been played
	// Skip if so
	const [animPlayed, setAnimPlayed] = useState(false);
	useEffect(() => {
		if (JSON.parse(localStorage.getItem('animationPlayed'))) {
			setAnimPlayed(true);
		} else {
			localStorage.setItem('animationPlayed', JSON.stringify(true));
		}
	});

	return (
		<>
			<svg
				className={
					isIE || animPlayed ? classes.logo : clsx(classes.logo, classes.resize)
				}
				version='1.1'
				id='logo'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				viewBox='0 0 100 100'
			>
				<path
					className={!animPlayed ? classes.bottomLeft : null}
					d='
          M 0 100
          L 20 60
          '
				></path>
				<path
					className={!animPlayed ? classes.centerLeft : null}
					d='
          M 20 60
          L 50 60
          '
				></path>
				<path
					className={!animPlayed ? classes.centerRight : null}
					d='
          M 50 60
          L 80 60
          '
				></path>
				<path
					className={!animPlayed ? classes.bottomRight : null}
					d='
          M 80 60
          L 100 100
          '
				></path>
				<path
					className={!animPlayed ? classes.topLeft : null}
					d='
          M 32.5 35
          L 50 0
          
          '
				></path>
				<path
					className={!animPlayed ? classes.topRight : null}
					d='
          M 50 0
          L 67.5 35
          
          '
				></path>
			</svg>
			{!isIE && !animPlayed && <div className={classes.backDrop}></div>}
		</>
	);
};

export default Logo;
