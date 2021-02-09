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
				yellow3: '#A66200',
				yellow4: '#834E00',
				yellow5: '#573400',
				orange1: '#E47139',
				orange2: '#C84c11',
				orange3: '#A63600',
				orange4: '#832A00',
				orange5: '#571C00',
				pink1: '#D0345B',
				pink2: '#B61039',
				pink1: '#970026',
				pink1: '#77001E',
				pink1: '#500014'
			},
			contrastThreshold: 3,
			tonalOffset: 0.2,
			background: {
				default: '#000'
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
