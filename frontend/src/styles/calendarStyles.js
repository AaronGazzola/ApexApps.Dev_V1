import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		padding: theme.spacing(1),
		borderTop: `1px solid ${theme.palette.grey[900]}`,
		marginTop: theme.spacing(4)
	},
	container: {
		width: '100%',
		height: 'min-content',
		display: 'flex',
		marginBottom: theme.spacing(2)
	},
	year: {
		marginLeft: theme.spacing(1),
		marginTop: -theme.spacing(1)
	},
	day: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'felx-start',
		alignItems: 'center',
		borderTop: `1px solid ${theme.palette.grey[900]}`,
		borderRight: `1px solid ${theme.palette.grey[900]}`,
		width: '14.28%',
		minHeight: 200,
		'& h4': {
			textAlign: 'center'
		},
		'&:last-of-type': {
			borderRight: `none`
		},
		[theme.breakpoints.down('xs')]: {
			width: '33.33%'
		}
	},
	today: {
		color: theme.palette.primary.light
	},
	dayName: {
		fontSize: '1.1rem',
		fontWeight: 300,
		marginTop: theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			fontSize: '1rem'
		}
	},
	date: {
		fontSize: '1.2rem',
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(0),
		fontWeight: 400,
		fontStyle: 'none',
		[theme.breakpoints.down('xs')]: {
			fontSize: '.9rem'
		}
	},
	skeleton: {
		width: '80%',
		height: 50,
		margin: 'auto',
		padding: 0
	},
	hour: {
		// border: `1px solid ${theme.palette.secondary.dark}`,
		borderRadius: 4,
		width: '90%',
		marginBottom: theme.spacing(1),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& p': {
			margin: 0,
			color: theme.palette.secondary.dark,
			fontWeight: 500,
			userSelect: 'none'
		},
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			cursor: 'pointer',
			'& p': {
				color: '#000'
			}
		}
	},
	arrowBack: {
		'&.Mui-disabled .MuiIconButton-label svg': {
			fill: theme.palette.grey[900]
		},
		'& .MuiIconButton-label': {
			transform: 'translateX(4px)'
		}
	}
}));

export default styles;
