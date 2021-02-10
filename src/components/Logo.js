import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from 'styles/logoStyles';
import { isIE } from 'react-device-detect';
import { useHistory } from 'react-router-dom';

const useStyles = styles;

const Logo = ({ handleTabChange }) => {
	const history = useHistory();
	const classes = useStyles();
	// Check local storage to see if animation has been played
	// Skip if so
	const [animPlayed, setAnimPlayed] = useState(false);
	const [replayAnim, setReplayAnim] = useState(false);
	useEffect(() => {
		if (JSON.parse(localStorage.getItem('animationPlayed'))) {
			setAnimPlayed(true);
		} else {
			localStorage.setItem('animationPlayed', JSON.stringify(true));
			setTimeout(() => {
				setAnimPlayed(true);
			}, 4800);
		}
	});

	useEffect(() => {
		if (replayAnim) {
			setTimeout(() => {
				setReplayAnim(false);
			}, 2000);
		}
	}, [replayAnim]);

	return (
		<>
			<svg
				onClick={e => {
					history.push('/');
					handleTabChange(e, 0);
					setReplayAnim(true);
				}}
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
					className={
						!animPlayed
							? classes.bottomLeft
							: replayAnim
							? classes.bottomLeftReplay
							: null
					}
					d='
          M 0 100
          L 20 60
          '
				></path>
				<path
					className={
						!animPlayed
							? classes.centerLeft
							: replayAnim
							? classes.centerLeftReplay
							: null
					}
					d='
          M 20 60
          L 50 60
          '
				></path>
				<path
					className={
						!animPlayed
							? classes.centerRight
							: replayAnim
							? classes.centerRightReplay
							: null
					}
					d='
          M 50 60
          L 80 60
          '
				></path>
				<path
					className={
						!animPlayed
							? classes.bottomRight
							: replayAnim
							? classes.bottomRightReplay
							: null
					}
					d='
          M 80 60
          L 100 100
          '
				></path>
				<path
					className={
						!animPlayed
							? classes.topLeft
							: replayAnim
							? classes.topLeftReplay
							: null
					}
					d='
          M 32.5 35
          L 50 0
          
          '
				></path>
				<path
					className={
						!animPlayed
							? classes.topRight
							: replayAnim
							? classes.topRightReplay
							: null
					}
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
