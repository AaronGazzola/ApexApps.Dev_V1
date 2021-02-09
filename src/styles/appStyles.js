import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;
const appBarHeight = 100;
// const footerHeight = 50;

const styles = makeStyles(theme => ({
	appBar: {
		height: appBarHeight,
		backgroundColor: '#000',
		borderBottom: `1px solid ${theme.palette.grey[900]}`
	}
}));

export default styles;
