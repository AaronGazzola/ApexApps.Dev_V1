import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	title: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '3.2rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.75rem'
		}
	},
	subTitle: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem'
		}
	},
	subTitle2: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.75rem'
		}
	},
	subTitle3: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.7rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	},
	paragraph: {
		marginTop: theme.spacing(2)
	},
	textBox1: {
		backgroundColor: '#090909',
		borderLeft: `1px solid ${theme.palette.primary.main}`,
		maxWidth: 650,
		// borderLeft: `1px solid ${theme.palette.grey[200]}`,
		boxShadow: `inset 6px 0 9px -7px ${theme.palette.primary.dark}`,
		// boxShadow: `inset 5px 0 7px -7px ${theme.palette.grey[200]}`,
		padding: theme.spacing(3),
		paddingTop: theme.spacing(2),
		marginTop: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			maxWidth: '90%'
		}
	},
	textBox2: {
		backgroundColor: '#0A0A0A',
		// borderTop: `1px solid ${theme.palette.grey[200]}`,
		borderTop: `1px solid ${theme.palette.primary.main}`,
		// boxShadow: `inset 0 5px 7px -7px ${theme.palette.grey[200]}`,
		boxShadow: `inset 0 6px 9px -7px ${theme.palette.primary.dark}`,
		padding: theme.spacing(3),
		marginTop: theme.spacing(2)
	},
	textBox3: {
		backgroundColor: '#0d0d0d',
		// borderLeft: `1px solid ${theme.palette.grey[200]}`,
		// boxShadow: `inset 5px 0 7px -7px ${theme.palette.grey[200]}`,
		padding: theme.spacing(3)
	},
	highlight: {
		borderBottom: `1px solid ${theme.palette.primary.main}`,
		fontStyle: 'italic',
		fontWeight: 500
	},
	row: {
		maxWidth: 800,
		padding: theme.spacing(3)
	},
	avatar: {
		width: 150,
		height: 150,
		backgroundColor: theme.palette.grey[800],
		margin: theme.spacing(1)
	},
	link: {
		color: theme.palette.secondary.main,
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
		// fontStyle: 'italic',
		textDecoration: 'none',
		fontWeight: 400
	},
	linkReset: {
		textDecoration: 'none',
		color: theme.palette.text.primary
	},
	contactButton: {
		color: theme.palette.secondary.main,
		border: `1px solid ${theme.palette.secondary.main}`,
		// color: '#000',
		fontSize: '2rem',
		fontWeight: 300,
		padding: theme.spacing(2),
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
		textTransform: 'none',
		fontWeight: 500,
		transition: 'none',
		'&:hover': {
			border: `1px solid ${theme.palette.secondary.main}`,
			backgroundColor: theme.palette.secondary.main,
			color: '#000'
		}
	},
	phoneIcon: {
		width: '1.8rem',
		height: '1.8rem',
		marginLeft: theme.spacing(1)
	},
	animationGrid: {
		[theme.breakpoints.down('xs')]: {
			order: 2
		}
	},
	divider: {
		padding: theme.spacing(2),
		marginTop: theme.spacing(1),
		width: '80%',
		maxWidth: 600,
		borderBottom: `1px solid ${theme.palette.grey[800]}`
	},
	divider2: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(2),
		width: '80%',
		maxWidth: 400,
		borderBottom: `1px solid ${theme.palette.grey[800]}`
	},
	icons: {
		marginTop: theme.spacing(2),
		maxWidth: 150,
		'& a': {
			color: theme.palette.text.primary,
			'&:hover': {
				color: theme.palette.secondary.main
			}
		}
	},
	email: {
		marginTop: theme.spacing(1),
		'& a': {
			color: theme.palette.text.primary,
			textDecoration: 'none',
			'&:hover': {
				color: theme.palette.secondary.main
			}
		}
	},
	date: {
		fontStyle: 'italic',
		color: theme.palette.text.secondary
	},
	blogList: {
		border: `1px solid ${theme.palette.grey[800]}`,
		padding: theme.spacing(2),
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
		backgroundColor: '#090909',
		marginTop: theme.spacing(2),
		minWidth: 400,
		'&:hover': {
			border: `1px solid #fff`,
			backgroundColor: theme.palette.grey[900],
			color: '#fff',
			cursor: 'pointer'
		}
	},
	blogTextBox: {
		marginTop: theme.spacing(2),
		'& strong': {
			borderBottom: `1px solid ${theme.palette.primary.main}`,
			fontStyle: 'italic',
			fontWeight: 500
		},
		'& a': {
			color: theme.palette.secondary.main,
			borderBottom: `1px solid ${theme.palette.secondary.main}`,
			// fontStyle: 'italic',
			textDecoration: 'none',
			fontWeight: 400
		}
	},
	skeleton: {
		marginTop: theme.spacing(2)
	},
	image: {
		marginTop: theme.spacing(3),
		maxWidth: 400,
		maxHeight: 400
	},
	blogTitle: {
		marginTop: theme.spacing(2)
	}
}));

export default styles;
