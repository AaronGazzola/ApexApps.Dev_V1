import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;
const appBarHeight = 150;
// const footerHeight = 50;

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
		color: theme.palette.common.orange4,
		position: 'absolute',
		top: 12,
		left: '50%',
		margin: 0,
		padding: 0
	},
	headerTitle1: {
		transform: 'translate(-140%, 0)'
	},
	headerTitle2: {
		transform: 'translate(35%, 0)'
	}
}));

export default styles;
