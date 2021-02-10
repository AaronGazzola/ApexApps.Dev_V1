import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	logo: {
		width: 70,
		zIndex: 3,
		height: 70,
		position: 'fixed',
		top: 16,
		left: '50%',
		transform: 'translate(-50%, 0%)',
		stroke: theme.palette.primary.main,
		strokeWidth: 3,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		fill: 'none'
	},
	resize: {
		animation: '$resize 1s ease 3.3s backwards'
	},
	bottomLeft: {
		strokeDasharray: 45,
		strokeDashoffset: 0,
		animation: '$bottom-left 1.5s linear 1s backwards 1'
	},
	bottomRight: {
		strokeDasharray: 45,
		strokeDashoffset: 0,
		animation: '$bottom-right 1.5s linear 1s backwards 1'
	},
	centerLeft: {
		strokeDasharray: 30,
		strokeDashoffset: 0,
		animation: '$center-left .3s linear 2.5s backwards 1'
	},
	centerRight: {
		strokeDasharray: 30,
		strokeDashoffset: 0,
		animation: '$center-right .3s linear 2.5s backwards 1'
	},
	topLeft: {
		strokeDasharray: 40,
		strokeDashoffset: 0,
		animation: '$top-left 1.5s linear 1.3s backwards 1'
	},
	topRight: {
		strokeDasharray: 40,
		strokeDashoffset: 0,
		animation: '$top-right 1.5s linear 1.3s backwards 1'
	},
	backDrop: {
		zIndex: 2,
		position: 'fixed',
		opacity: 1,
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#000',
		animation: '$fade-out .5s linear 4.3s forwards'
	},
	'@keyframes resize': {
		'0%': {
			strokeWidth: 1,
			position: 'fixed',
			top: '50%',
			left: '50%',
			height: '50vh',
			width: '50vh',
			maxWidth: '100vw',
			transform: 'translate(-50%, -50%)'
		},
		'100%': {
			strokeWidth: 3,
			position: 'fixed',
			top: 16,
			left: '50%',
			width: 70,
			height: 70,
			transform: 'translate(-50%, 0%)'
		}
	},
	'@keyframes bottom-left': {
		'0%': {
			strokeDashoffset: 45
		},
		'20%': {
			strokeDashoffset: 0
		},
		'40%': {
			strokeDashoffset: -45
		},
		'60%': {
			strokeDashoffset: -90
		},
		'80%': {
			strokeDashoffset: -135
		},
		'100%': {
			strokeDashoffset: -180
		}
	},
	'@keyframes bottom-right': {
		'0%': {
			strokeDashoffset: -135
		},
		'20%': {
			strokeDashoffset: -90
		},
		'40%': {
			strokeDashoffset: -45
		},
		'60%': {
			strokeDashoffset: 0
		},
		'80%': {
			strokeDashoffset: 45
		},
		'100%': {
			strokeDashoffset: 90
		}
	},
	'@keyframes top-left': {
		'0%': {
			strokeDashoffset: 40
		},
		'20%': {
			strokeDashoffset: 0
		},
		'40%': {
			strokeDashoffset: -40
		},
		'60%': {
			strokeDashoffset: -80
		},
		'80%': {
			strokeDashoffset: -120
		},
		'100%': {
			strokeDashoffset: -160
		}
	},
	'@keyframes top-right': {
		'0%': {
			strokeDashoffset: -120
		},
		'20%': {
			strokeDashoffset: -80
		},
		'40%': {
			strokeDashoffset: -40
		},
		'60%': {
			strokeDashoffset: 0
		},
		'80%': {
			strokeDashoffset: 40
		},
		'100%': {
			strokeDashoffset: 80
		}
	},
	'@keyframes center-left': {
		'0%': {
			strokeDashoffset: 30
		},
		'100%': {
			strokeDashoffset: 0
		}
	},
	'@keyframes center-right': {
		'0%': {
			strokeDashoffset: -30
		},
		'100%': {
			strokeDashoffset: 0
		}
	},
	'@keyframes fade-out': {
		'0%': {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			opacity: 1
		},
		'99%': {
			opacity: 0,
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		},
		'100%': {
			opacity: 0,
			left: 0,
			top: 0,
			right: '100%',
			bottom: '100%'
		}
	}
}));

export default styles;
