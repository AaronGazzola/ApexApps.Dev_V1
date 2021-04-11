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
		boxShadow: `inset 7px 0 9px -7px ${theme.palette.primary.dark}`,
		// boxShadow: `inset 5px 0 7px -7px ${theme.palette.grey[200]}`,
		padding: theme.spacing(3),
		paddingTop: theme.spacing(2),
		marginTop: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			maxWidth: '90%'
		}
	},
	textBox2: {
		backgroundColor: '#090909',
		// borderTop: `1px solid ${theme.palette.grey[200]}`,
		borderTop: `1px solid ${theme.palette.primary.main}`,
		// boxShadow: `inset 0 5px 7px -7px ${theme.palette.grey[200]}`,
		boxShadow: `inset 0 7px 9px -7px ${theme.palette.primary.dark}`,
		padding: theme.spacing(3),
		marginTop: theme.spacing(2)
	},
	textBox3: {
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
		transform: 'translateZ(0)',
		zIndex: 10,
		position: 'relative',
		width: 250,
		height: 250,
		borderRadius: '50%',
		overflow: 'hidden',
		margin: theme.spacing(1),
		'& img': {
			width: '100%',
			position: 'absolute'
		}
	},
	profileImage1: {
		transform: 'translateY(0)'
	},
	profileImage2: {
		transform: 'translateY(100%)'
	},
	profileImage3: {
		transform: 'translateY(100%)'
	},
	profileImage4: {
		transform: 'translateY(100%)'
	},
	animateProfile1: {
		animation: '$profileImage1 2.5s ease .1s'
	},
	animateProfile2: {
		animation: '$profileImage2 1.5s ease forwards'
	},
	animateProfile3: {
		animation: '$profileImage2 1.5s ease .9s forwards'
	},
	animateProfile4: {
		animation: '$profileImage3 .5s ease 1.85s forwards'
	},
	'@keyframes profileImage1': {
		'0%': {
			transform: 'translateY(0%)'
		},
		'20%': {
			transform: 'translateY(-100%)'
		},
		'99%': {
			transform: 'translateY(-100%)'
		},
		'100%': {
			transform: 'translateY(0%)'
		}
	},
	'@keyframes profileImage2': {
		'0%': {
			transform: 'translateY(100%)'
		},
		'33%': {
			transform: 'translateY(0%)'
		},
		'66%': {
			transform: 'translateY(0%)'
		},
		'100%': {
			transform: 'translateY(-100%)'
		}
	},
	'@keyframes profileImage3': {
		'0%': {
			transform: 'translateY(100%)'
		},
		'100%': {
			transform: 'translateY(0%)'
		}
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
		color: theme.palette.text.primary,
		marginTop: theme.spacing(2)
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
		borderBottom: `1px solid ${theme.palette.grey[600]}`
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
		backgroundColor: '#090909',
		maxWidth: 800,
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
		},
		'& span': {
			fontSize: '.5rem'
			// color: theme.palette.text.secondary
		}
	},
	skeleton: {
		marginTop: theme.spacing(2)
	},
	image: {
		maxWidth: 800,
		width: '100%',
		padding: theme.spacing(2)
	},
	blogTitle: {
		marginTop: theme.spacing(2)
	},
	video: {
		position: 'relative',
		width: '100%',
		paddingTop: '56.25%',
		margin: theme.spacing(1, 0),
		'& iframe': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		}
	},
	paper: {
		margin: theme.spacing(4, 0),
		padding: theme.spacing(2),
		border: `1px solid ${theme.palette.grey[900]}`,
		background: 'transparent',
		width: '100%',
		[theme.breakpoints.down('xs')]: {
			width: '90%'
		}
	},
	list: {
		listStyle: 'none',
		padding: 0,
		marginTop: theme.spacing(3),
		'& li': {
			marginBottom: theme.spacing(2)
		}
	},
	listText: {
		marginLeft: theme.spacing(1)
	},
	signature1: {
		margin: theme.spacing(1, 2)
	},
	signature2: {
		margin: theme.spacing(0, 4),
		fontFamily: "'Yellowtail', cursive",
		fontSize: '2.5rem'
	}
}));

export default styles;
