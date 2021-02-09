import { createMuiTheme } from '@material-ui/core/styles';

const apexOrange = '#a63600';
const apexGreen = '#309772';

export const getTheme = () =>
	createMuiTheme({
		palette: {
			primary: {
				main: apexOrange,
				contrastText: '#fff'
			},
			secondary: {
				main: apexGreen,
				contrastText: '#fff'
			},
			success: {
				main: apexGreen
			},
			error: {
				main: '#970026'
			},
			common: {
				yellow1: '#E49F39',
				yellow2: '#C87D11',
				yellow3: '#A66200'
			},
			contrastThreshold: 3,
			tonalOffset: 0.2,
			background: {
				default: '#000'
			}
		}
	});
