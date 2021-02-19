import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	paper: {
		backgroundColor: theme.palette.grey[900]
	},
	title: {
		fontWeight: 400,
		fontSize: '2rem',
		fontStyle: 'italic',
		fontFamily: "'Montserrat', sans-serif"
	},
	titleIcon: {
		marginLeft: theme.spacing(1)
	},
	subTitle: {
		fontWeight: 300,
		fontSize: '1.4rem',
		fontFamily: "'Montserrat', sans-serif",
		paddingTop: 0,
		paddingBottom: 0
	},
	text: {
		color: theme.palette.text.primary
	},
	date: {
		fontWeight: 500,
		fontSize: '1.1rem'
	},
	textarea: {
		marginTop: theme.spacing(2)
	},
	input: {
		'& .MuiFormLabel-root': {
			// color: theme.palette.grey[600],
			fontWeight: 500
		}
	},
	error: {
		'& .Mui-error': {
			color: theme.palette.error.light,
			'& .MuiInputBase-input': {
				color: theme.palette.text.primary
			},
			'&:after': {
				borderColor: theme.palette.error.light
			}
		},
		'& .MuiInputBase-root': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: theme.palette.error.light
			}
		}
	},
	cancel: {
		color: theme.palette.error.light
	}
}));

export default styles;
