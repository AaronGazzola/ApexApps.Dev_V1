import { createMuiTheme } from '@material-ui/core/styles';

const apexOrange = '#CF3A19';
const apexGreen = '#309772';

export const getTheme = () =>
	createMuiTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 650,
				md: 960,
				lg: 1280,
				xl: 1920
			}
		},
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
				orange1: '#CF3919',
				orange2: '#FF886F',
				orange3: '#E65E41',
				orange4: '#A82409',
				orange5: '#801600',
				yellow1: '#CF7819',
				yellow2: '#FFBA6F',
				yellow3: '#E69741',
				yellow4: '#A85C09',
				yellow5: '#804300',
				blue1: '#146482',
				blue2: '#4A8AA2',
				blue3: '#2D7591',
				blue4: '#0A4F69',
				blue5: '#033B50',
				green1: '#129643',
				green2: '#51BA78',
				green3: '#2FA75C',
				green4: '#067A31',
				green5: '#005D23'
			},
			contrastThreshold: 3,
			tonalOffset: 0.2,
			background: {
				default: '#000'
			},
			text: {
				primary: '#bdbdbd',
				secondary: '#616161'
			}
		},
		typography: {
			fontFamily: "'Montserrat', sans-serif",
			h1: {
				fontWeight: 100,
				fontFamily: "'Poiret One', Sans Serif"
			}
		}
	});
