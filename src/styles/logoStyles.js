import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	logo: {
		width: 70,
		height: 70,
		position: 'fixed',
		top: 16,
		left: '50%',
		transform: 'translate(-50%, 0%)',
		stroke: '#C84C11',
		// stroke: theme.palette.primary.main,
		strokeWidth: 3,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		fill: 'none'
	}
}));

export default styles;
