import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	tabs: {
		position: 'absolute',
		left: '50%',
		top: 130,
		transform: 'translate(-50%, -50%)',
		'& .MuiTabs-indicator': {
			top: 0,
			height: 2,
			backgroundColor: theme.palette.secondary.dark
		},
		borderTop: `1px solid ${theme.palette.grey[900]}`
	},
	tab: {
		color: theme.palette.grey[600],
		fontSize: '.95rem',
		textTransform: 'none',
		'&.Mui-selected': {
			color: theme.palette.secondary.main
		}
	}
}));

export default styles;
