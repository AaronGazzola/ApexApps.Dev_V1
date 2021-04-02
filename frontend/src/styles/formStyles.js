import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	form: {
		width: 320,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	input: {
		width: '90%',
		'& .MuiInput-input': {
			borderBottom: `2px solid ${theme.palette.grey[800]}`
		},
		'&:first-of-type': {
			marginTop: theme.spacing(2)
		},
		'& .MuiInputLabel-shrink, p': {
			fontWeight: 700
		},
		'& .MuiFormLabel-root': {
			// color: theme.palette.grey[600],
			fontWeight: 500
		}
	},
	error: {
		'& label.Mui-focused': {
			color: theme.palette.error.main
		},
		'& .Mui-error': {
			color: theme.palette.error.main,
			'& .MuiInputBase-input': {
				color: theme.palette.text.primary
			},
			'&:after': {
				borderColor: theme.palette.error.main
			}
		},
		'& .MuiInputBase-root': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: theme.palette.error.main
			}
		}
	},
	button: {
		marginTop: theme.spacing(3),
		fontWeight: 700
	},
	button2: {
		marginTop: theme.spacing(2),
		fontWeight: 700,
		'&.Mui-disabled': {
			background: theme.palette.grey[800]
		}
	},
	button3: {
		marginTop: theme.spacing(1),
		color: theme.palette.secondary.main,
		textTransform: 'none',
		fontWeight: 700,
		'&:hover': {
			// color: theme.palette.primary.main
		}
	},
	submitProgress: {
		color: theme.palette.background.default
	},
	modalPaper: {
		padding: theme.spacing(4, 2, 3, 2),
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		overflowY: 'scroll',
		'&:focus': {
			outline: 'none'
		},
		width: 500,
		maxWidth: '100%',
		maxHeight: '85%',
		[theme.breakpoints.down('xs')]: {
			top: 0,
			left: 0,
			width: '100%',
			maxHeight: '100%',
			transform: 'none'
		}
	},
	modalForm: {
		maxWidth: 400,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	close: {
		position: 'absolute',
		top: 0,
		left: 0
	},
	outerList: {
		width: '90%',
		marginTop: theme.spacing(2),
		padding: 0,
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 5
	},
	outerListOpen: {
		borderColor: theme.palette.primary.main
	},
	innerList: {
		padding: theme.spacing(1, 2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	greyText: {
		color: theme.palette.grey[600]
	},
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
		margin: theme.spacing(2, 0),
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: theme.palette.grey[800]
		}
	},
	cancelButton: {
		color: theme.palette.error.main
	},
	submitButton: {
		minWidth: 100,
		minHeight: 34,
		fontWeight: 700
	},
	progress: {
		color: '#000'
	}
}));

export default styles;