import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		padding: theme.spacing(1),
		borderTop: `1px solid ${theme.palette.grey[900]}`,
		marginTop: theme.spacing(1)
	},
	container: {
		width: '100%',
		height: 500,
		display: 'flex'
	},
	day: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'felx-start',
		alignItems: 'center',
		borderTop: `1px solid ${theme.palette.grey[900]}`,
		borderRight: `1px solid ${theme.palette.grey[900]}`,
		width: '14.28%',
		height: 'min-content',
		'& h4': {
			textAlign: 'center'
		},
		'&:last-of-type': {
			borderRight: `none`
		}
	},
	dayName: {
		fontSize: '1.1rem',
		fontWeight: 300,
		marginTop: theme.spacing(1)
	},
	date: {
		fontSize: '1.2rem',
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(0),
		fontWeight: 400,
		fontStyle: 'none'
	},
	hour: {
		width: '90%',
		height: 30,
		marginBottom: theme.spacing(1)
		// display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	available: {
		// color: theme.palette.secondary.main
		// border: `2px solid ${theme.palette.secondary.main}`
	},
	unavailable: {
		'& span': {
			color: theme.palette.grey[800]
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
