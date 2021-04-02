import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;
const appBarHeight = 150;
const footerHeight = 55;

const styles = makeStyles(theme => ({
	appBar: {
		height: appBarHeight,
		backgroundColor: '#000'
	},
	toolbar: {
		position: 'relative'
	},
	headerTitle: {
		fontFamily: "'Poiret One', Sans Serif",
		fontSize: '3.5rem',
		color: theme.palette.secondary.main,
		position: 'absolute',
		top: 12,
		left: '50%',
		margin: 0,
		padding: 0,
		userSelect: 'none',
		[theme.breakpoints.down('xs')]: {
			fontSize: '3rem',
			top: 20
		}
	},
	headerTitle1: {
		transform: 'translate(-140%, 0)',
		[theme.breakpoints.down('xs')]: {
			transform: 'translate(-150%, 0)'
		}
	},
	headerTitle2: {
		transform: 'translate(35%, 0)',
		[theme.breakpoints.down('xs')]: {
			transform: 'translate(45%, 0)'
		}
	},
	main: {
		position: 'relative',
		overflow: 'visible',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '0 auto',
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
		minHeight: `calc(100vh - ${
			appBarHeight + footerHeight + theme.spacing(3)
		}px)`,
		margin: 'auto',
		paddingTop: theme.spacing(1),
		width: 1100,
		[theme.breakpoints.down('md')]: {
			width: 800
		},
		[theme.breakpoints.down('sm')]: {
			width: 600
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		}
	},
	footer: {
		height: footerHeight,
		width: 320,
		margin: 'auto',
		marginTop: theme.spacing(3),
		borderTop: `1px solid ${theme.palette.grey[900]}`,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: theme.spacing(1),
		'& p': {
			color: theme.palette.text.secondary
		}
	}
}));

export default styles;
