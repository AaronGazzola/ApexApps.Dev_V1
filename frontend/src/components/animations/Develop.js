import React, { useEffect, useState } from 'react';
import useStyles from 'styles/animationStyles';
import clsx from 'clsx';

const Develop = ({ animate }) => {
	const classes = useStyles();
	const [played, setPlayed] = useState(false);
	useEffect(() => {
		if (animate) setPlayed(true);
	}, [animate]);
	return (
		<svg
			id='Icons'
			viewBox='0 0 74 74'
			xmlns='http://www.w3.org/2000/svg'
			className={clsx(classes.svg, classes.develop)}
		>
			<path
				className={
					animate
						? classes.develop1In
						: played
						? classes.develop1Out
						: classes.develop1Start
				}
				d='m69 72h-64a3 3 0 0 1 -3-3v-64a3 3 0 0 1 3-3h64a3 3 0 0 1 3 3v64a3 3 0 0 1 -3 3zm-64-68a1 1 0 0 0 -1 1v64a1 1 0 0 0 1 1h64a1 1 0 0 0 1-1v-64a1 1 0 0 0 -1-1z'
			/>
			<path
				className={
					animate
						? classes.develop2In
						: played
						? classes.develop2Out
						: classes.develop2Start
				}
				d='m71 20h-68a1 1 0 0 1 0-2h68a1 1 0 0 1 0 2z'
			/>
			<path
				className={
					animate
						? classes.develop3In
						: played
						? classes.develop3Out
						: classes.develop3Start
				}
				d='m62.25 14.688a3.688 3.688 0 1 1 3.688-3.688 3.692 3.692 0 0 1 -3.688 3.688zm0-5.375a1.688 1.688 0 1 0 1.688 1.687 1.688 1.688 0 0 0 -1.688-1.687z'
			/>
			<path
				className={
					animate
						? classes.develop3In
						: played
						? classes.develop3Out
						: classes.develop3Start
				}
				d='m51.563 14.688a3.688 3.688 0 1 1 3.687-3.688 3.692 3.692 0 0 1 -3.687 3.688zm0-5.375a1.688 1.688 0 1 0 1.687 1.687 1.689 1.689 0 0 0 -1.687-1.687z'
			/>
			<path
				className={
					animate
						? classes.develop3In
						: played
						? classes.develop3Out
						: classes.develop3Start
				}
				d='m40.875 14.688a3.688 3.688 0 1 1 3.688-3.688 3.692 3.692 0 0 1 -3.688 3.688zm0-5.375a1.688 1.688 0 1 0 1.688 1.687 1.688 1.688 0 0 0 -1.688-1.687z'
			/>
			<path
				className={
					animate
						? classes.develop4In
						: played
						? classes.develop4Out
						: classes.develop4Start
				}
				d='m30.563 12.094h-21.5a1 1 0 0 1 0-2h21.5a1 1 0 0 1 0 2z'
			/>
			<path
				className={
					animate
						? classes.develop5In
						: played
						? classes.develop5Out
						: classes.develop5Start
				}
				d='m24.25 41.547h-12.562a1 1 0 0 1 -1-1v-12.563a1 1 0 0 1 1-1h12.562a1 1 0 0 1 1 1v12.563a1 1 0 0 1 -1 1zm-11.562-2h10.562v-10.563h-10.562z'
			/>
			<path
				className={
					animate
						? classes.develop6In
						: played
						? classes.develop6Out
						: classes.develop6Start
				}
				d='m62.313 31.766h-30.625a1 1 0 1 1 0-2h30.625a1 1 0 0 1 0 2z'
			/>
			<path
				className={
					animate
						? classes.develop7In
						: played
						? classes.develop7Out
						: classes.develop7Start
				}
				d='m49.563 38.766h-17.875a1 1 0 1 1 0-2h17.875a1 1 0 0 1 0 2z'
			/>
			<path
				className={
					animate
						? classes.develop5In
						: played
						? classes.develop5Out
						: classes.develop5Start
				}
				d='m24.25 62.766h-12.562a1 1 0 0 1 -1-1v-12.566a1 1 0 0 1 1-1h12.562a1 1 0 0 1 1 1v12.566a1 1 0 0 1 -1 1zm-11.562-2h10.562v-10.566h-10.562z'
			/>
			<path
				className={
					animate
						? classes.develop6In
						: played
						? classes.develop6Out
						: classes.develop6Start
				}
				d='m62.313 52.984h-30.625a1 1 0 1 1 0-2h30.625a1 1 0 0 1 0 2z'
			/>
			<path
				className={
					animate
						? classes.develop7In
						: played
						? classes.develop7Out
						: classes.develop7Start
				}
				d='m49.563 59.984h-17.875a1 1 0 1 1 0-2h17.875a1 1 0 0 1 0 2z'
			/>
			<path
				className={
					animate
						? clsx(classes.develop8In, classes.orange)
						: played
						? clsx(classes.develop8Out, classes.orange)
						: clsx(classes.develop8Start, classes.orange)
				}
				d='m16.541 37.568a1 1 0 0 1 -.707-.293l-1.75-1.75a1 1 0 0 1 1.416-1.414l1.043 1.043 3.9-3.9a1 1 0 0 1 1.415 1.414l-4.605 4.6a1 1 0 0 1 -.712.3z'
			/>
			<path
				className={
					animate
						? clsx(classes.develop9In, classes.orange)
						: played
						? clsx(classes.develop9Out, classes.orange)
						: clsx(classes.develop9Start, classes.orange)
				}
				d='m16.541 58.787a1 1 0 0 1 -.707-.293l-1.75-1.75a1 1 0 0 1 1.416-1.414l1.043 1.043 3.9-3.9a1 1 0 0 1 1.415 1.414l-4.605 4.6a1 1 0 0 1 -.712.3z'
			/>
		</svg>
	);
};

export default Develop;
