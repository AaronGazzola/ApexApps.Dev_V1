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
		minHeight: `calc(100vh - ${appBarHeight + footerHeight}px)`
	},
	footer: {
		height: footerHeight,
		width: 320,
		margin: 'auto',
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
