import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
	svg: {
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		stroke: theme.palette.grey[300],
		maxWidth: 200
	},
	orange: {
		stroke: theme.palette.primary.main
	},
	discuss: {
		width: '95%',
		strokeWidth: 4
	},
	design: {
		width: '100%',
		strokeWidth: 3
	},
	develop: {
		width: '90%',
		strokeWidth: 0.5
	},
	deploy: {
		width: '100%',
		maxWidth: '100%',
		marginTop: -theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			maxWidth: 200,
			marginTop: 0
		},
		strokeWidth: 3
	},
	discuss1Start: {
		strokeDasharray: 1045,
		strokeDashoffset: 1045
	},
	discuss1In: {
		animation: '$discuss1In 1s linear forwards'
	},
	discuss1Out: {
		animation: '$discuss1Out 1s linear forwards'
	},
	'@keyframes discuss1In': {
		'0%': {
			strokeDasharray: 1045,
			strokeDashoffset: 1045
		},
		'100%': {
			strokeDasharray: 1045,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss1Out': {
		'0%': {
			strokeDasharray: 1045,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 1045,
			strokeDashoffset: 1045
		}
	},
	discuss2Start: {
		strokeDasharray: 1580,
		strokeDashoffset: 1580
	},
	discuss2In: {
		animation: '$discuss2In 1s linear forwards'
	},
	discuss2Out: {
		animation: '$discuss2Out 1s linear forwards'
	},
	'@keyframes discuss2In': {
		'0%': {
			strokeDasharray: 1580,
			strokeDashoffset: 1580
		},
		'100%': {
			strokeDasharray: 1580,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss2Out': {
		'0%': {
			strokeDasharray: 1580,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 1580,
			strokeDashoffset: 1580
		}
	},
	discuss3Start: {
		strokeDasharray: 70,
		strokeDashoffset: 70
	},
	discuss3In: {
		animation: '$discuss3In 1s linear forwards'
	},
	discuss3Out: {
		animation: '$discuss3Out 1s linear forwards'
	},
	'@keyframes discuss3In': {
		'0%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'80%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'100%': {
			strokeDasharray: 70,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss3Out': {
		'0%': {
			strokeDasharray: 70,
			strokeDashoffset: 0
		},
		'20%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'100%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		}
	},
	discuss4Start: {
		strokeDasharray: 815,
		strokeDashoffset: 815
	},
	discuss4In: {
		animation: '$discuss4In 1s linear forwards'
	},
	discuss4Out: {
		animation: '$discuss4Out 1s linear forwards'
	},
	'@keyframes discuss4In': {
		'0%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		},
		'30%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		},
		'100%': {
			strokeDasharray: 815,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss4Out': {
		'0%': {
			strokeDasharray: 815,
			strokeDashoffset: 0
		},
		'70%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		},
		'100%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		}
	},
	discuss5Start: {
		strokeDasharray: 815,
		strokeDashoffset: 815
	},
	discuss5In: {
		animation: '$discuss5In 1s linear forwards'
	},
	discuss5Out: {
		animation: '$discuss5Out 1s linear forwards'
	},
	'@keyframes discuss5In': {
		'0%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		},
		'30%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		},
		'100%': {
			strokeDasharray: 815,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss5Out': {
		'0%': {
			strokeDasharray: 815,
			strokeDashoffset: 0
		},
		'70%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		},
		'100%': {
			strokeDasharray: 815,
			strokeDashoffset: 815
		}
	},
	discuss6Start: {
		strokeDasharray: 215,
		strokeDashoffset: 215
	},
	discuss6In: {
		animation: '$discuss6In 2s linear forwards'
	},
	discuss6Out: {
		animation: '$discuss6Out 1s linear forwards'
	},
	'@keyframes discuss6In': {
		'0%': {
			strokeDasharray: 215,
			strokeDashoffset: 215
		},
		'80%': {
			strokeDasharray: 215,
			strokeDashoffset: 215
		},
		'100%': {
			strokeDasharray: 215,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss6Out': {
		'0%': {
			strokeDasharray: 215,
			strokeDashoffset: 0
		},
		'70%': {
			strokeDasharray: 215,
			strokeDashoffset: 215
		},
		'100%': {
			strokeDasharray: 215,
			strokeDashoffset: 215
		}
	},
	discuss7Start: {
		strokeDasharray: 315,
		strokeDashoffset: 315
	},
	discuss7In: {
		animation: '$discuss7In 2s linear forwards'
	},
	discuss7Out: {
		animation: '$discuss7Out 1s linear forwards'
	},
	'@keyframes discuss7In': {
		'0%': {
			strokeDasharray: 315,
			strokeDashoffset: 315
		},
		'60%': {
			strokeDasharray: 315,
			strokeDashoffset: 315
		},
		'80%': {
			strokeDasharray: 315,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 315,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss7Out': {
		'0%': {
			strokeDasharray: 315,
			strokeDashoffset: 0
		},
		'70%': {
			strokeDasharray: 315,
			strokeDashoffset: 315
		},
		'100%': {
			strokeDasharray: 315,
			strokeDashoffset: 315
		}
	},
	discuss8Start: {
		strokeDasharray: 70,
		strokeDashoffset: 70
	},
	discuss8In: {
		animation: '$discuss8In 2s linear forwards'
	},
	discuss8Out: {
		animation: '$discuss8Out 1s linear forwards'
	},
	'@keyframes discuss8In': {
		'0%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'70%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'80%': {
			strokeDasharray: 70,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 70,
			strokeDashoffset: 0
		}
	},
	'@keyframes discuss8Out': {
		'0%': {
			strokeDasharray: 70,
			strokeDashoffset: 0
		},
		'70%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'100%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		}
	},
	design1Start: {
		strokeDasharray: 820,
		strokeDashoffset: 820
	},
	design1In: {
		animation: '$design1In 1s linear forwards'
	},
	design1Out: {
		animation: '$design1Out 1s linear forwards'
	},
	'@keyframes design1In': {
		'0%': {
			strokeDasharray: 820,
			strokeDashoffset: 820
		},
		'20%': {
			strokeDasharray: 820,
			strokeDashoffset: 820
		},
		'100%': {
			strokeDasharray: 820,
			strokeDashoffset: 0
		}
	},
	'@keyframes design1Out': {
		'0%': {
			strokeDasharray: 820,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 820,
			strokeDashoffset: 820
		}
	},
	design2Start: {
		strokeDasharray: 280,
		strokeDashoffset: 280
	},
	design2In: {
		animation: '$design2In 1s linear forwards'
	},
	design2Out: {
		animation: '$design2Out 1s linear forwards'
	},
	'@keyframes design2In': {
		'0%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		},
		'25%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		},
		'100%': {
			strokeDasharray: 280,
			strokeDashoffset: 0
		}
	},
	'@keyframes design2Out': {
		'0%': {
			strokeDasharray: 280,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		}
	},
	design3Start: {
		strokeDasharray: 70,
		strokeDashoffset: 70
	},
	design3In: {
		animation: '$design3In 1s linear forwards'
	},
	design3Out: {
		animation: '$design3Out 1s linear forwards'
	},
	'@keyframes design3In': {
		'0%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'50%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'100%': {
			strokeDasharray: 70,
			strokeDashoffset: 0
		}
	},
	'@keyframes design3Out': {
		'0%': {
			strokeDasharray: 70,
			strokeDashoffset: 0
		},
		'50%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		},
		'100%': {
			strokeDasharray: 70,
			strokeDashoffset: 70
		}
	},
	design4Start: {
		strokeDasharray: 545,
		strokeDashoffset: 545
	},
	design4In: {
		animation: '$design4In 2s linear forwards'
	},
	design4Out: {
		animation: '$design4Out 1s linear forwards'
	},
	'@keyframes design4In': {
		'0%': {
			strokeDasharray: 545,
			strokeDashoffset: 545
		},
		'60%': {
			strokeDasharray: 545,
			strokeDashoffset: 545
		},
		'85%': {
			strokeDasharray: 545,
			strokeDashoffset: 0
		}
	},
	'@keyframes design4Out': {
		'0%': {
			strokeDasharray: 545,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 545,
			strokeDashoffset: 545
		}
	},
	design5Start: {
		strokeDasharray: 120,
		strokeDashoffset: 120
	},
	design5In: {
		animation: '$design5In 2s linear forwards'
	},
	design5Out: {
		animation: '$design5Out 1s linear forwards'
	},
	'@keyframes design5In': {
		'0%': {
			strokeDasharray: 120,
			strokeDashoffset: 120
		},
		'85%': {
			strokeDasharray: 120,
			strokeDashoffset: 120
		},
		'100%': {
			strokeDasharray: 120,
			strokeDashoffset: 0
		}
	},
	'@keyframes design5Out': {
		'0%': {
			strokeDasharray: 120,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 120,
			strokeDashoffset: 120
		}
	},
	design6Start: {
		strokeDasharray: 2955,
		strokeDashoffset: 2955
	},
	design6In: {
		animation: '$design6In 1s linear forwards'
	},
	design6Out: {
		animation: '$design6Out 1s linear forwards'
	},
	'@keyframes design6In': {
		'0%': {
			strokeDasharray: 2955,
			strokeDashoffset: 2955
		},
		'100%': {
			strokeDasharray: 2955,
			strokeDashoffset: 0
		}
	},
	'@keyframes design6Out': {
		'0%': {
			strokeDasharray: 2955,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 2955,
			strokeDashoffset: 2955
		}
	},
	develop1Start: {
		strokeDasharray: 280,
		strokeDashoffset: 280
	},
	develop1In: {
		animation: '$develop1In 1s linear forwards'
	},
	develop1Out: {
		animation: '$develop1Out 1s linear forwards'
	},
	'@keyframes develop1In': {
		'0%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		},
		'100%': {
			strokeDasharray: 280,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop1Out': {
		'0%': {
			strokeDasharray: 280,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		}
	},
	develop2Start: {
		strokeDasharray: 280,
		strokeDashoffset: 280
	},
	develop2In: {
		animation: '$develop2In 1s linear forwards'
	},
	develop2Out: {
		animation: '$develop2Out 1s linear forwards'
	},
	'@keyframes develop2In': {
		'0%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		},
		'30%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		},
		'100%': {
			strokeDasharray: 280,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop2Out': {
		'0%': {
			strokeDasharray: 280,
			strokeDashoffset: 0
		},
		'70%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		},
		'100%': {
			strokeDasharray: 280,
			strokeDashoffset: 280
		}
	},
	develop3Start: {
		strokeDasharray: 30,
		strokeDashoffset: 30
	},
	develop3In: {
		animation: '$develop3In 1s linear forwards'
	},
	develop3Out: {
		animation: '$develop3Out 1s linear forwards'
	},
	'@keyframes develop3In': {
		'0%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'70%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'100%': {
			strokeDasharray: 30,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop3Out': {
		'0%': {
			strokeDasharray: 30,
			strokeDashoffset: 0
		},
		'30%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'100%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		}
	},
	develop4Start: {
		strokeDasharray: 55,
		strokeDashoffset: 55
	},
	develop4In: {
		animation: '$develop4In 1s linear forwards'
	},
	develop4Out: {
		animation: '$develop4Out 1s linear forwards'
	},
	'@keyframes develop4In': {
		'0%': {
			strokeDasharray: 55,
			strokeDashoffset: 55
		},
		'70%': {
			strokeDasharray: 55,
			strokeDashoffset: 55
		},
		'100%': {
			strokeDasharray: 55,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop4Out': {
		'0%': {
			strokeDasharray: 55,
			strokeDashoffset: 0
		},
		'30%': {
			strokeDasharray: 55,
			strokeDashoffset: 55
		},
		'100%': {
			strokeDasharray: 55,
			strokeDashoffset: 55
		}
	},
	develop5Start: {
		strokeDasharray: 65,
		strokeDashoffset: 65
	},
	develop5In: {
		animation: '$develop5In 1s linear forwards'
	},
	develop5Out: {
		animation: '$develop5Out 1s linear forwards'
	},
	'@keyframes develop5In': {
		'0%': {
			strokeDasharray: 65,
			strokeDashoffset: 65
		},
		'500%': {
			strokeDasharray: 65,
			strokeDashoffset: 65
		},
		'100%': {
			strokeDasharray: 65,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop5Out': {
		'0%': {
			strokeDasharray: 65,
			strokeDashoffset: 0
		},
		'50%': {
			strokeDasharray: 65,
			strokeDashoffset: 65
		},
		'100%': {
			strokeDasharray: 65,
			strokeDashoffset: 65
		}
	},
	develop6Start: {
		strokeDasharray: 75,
		strokeDashoffset: 75
	},
	develop6In: {
		animation: '$develop6In 1s linear forwards'
	},
	develop6Out: {
		animation: '$develop6Out 1s linear forwards'
	},
	'@keyframes develop6In': {
		'0%': {
			strokeDasharray: 75,
			strokeDashoffset: 75
		},
		'50%': {
			strokeDasharray: 75,
			strokeDashoffset: 75
		},
		'100%': {
			strokeDasharray: 75,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop6Out': {
		'0%': {
			strokeDasharray: 75,
			strokeDashoffset: 0
		},
		'50%': {
			strokeDasharray: 75,
			strokeDashoffset: 75
		},
		'100%': {
			strokeDasharray: 75,
			strokeDashoffset: 75
		}
	},
	develop7Start: {
		strokeDasharray: 50,
		strokeDashoffset: 50
	},
	develop7In: {
		animation: '$develop7In 1s linear forwards'
	},
	develop7Out: {
		animation: '$develop7Out 1s linear forwards'
	},
	'@keyframes develop7In': {
		'0%': {
			strokeDasharray: 50,
			strokeDashoffset: 50
		},
		'50%': {
			strokeDasharray: 50,
			strokeDashoffset: 50
		},
		'100%': {
			strokeDasharray: 50,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop7Out': {
		'0%': {
			strokeDasharray: 50,
			strokeDashoffset: 0
		},
		'50%': {
			strokeDasharray: 50,
			strokeDashoffset: 50
		},
		'100%': {
			strokeDasharray: 50,
			strokeDashoffset: 50
		}
	},
	develop8Start: {
		strokeDasharray: 30,
		strokeDashoffset: 30
	},
	develop8In: {
		animation: '$develop8In 2s linear forwards'
	},
	develop8Out: {
		animation: '$develop8Out 1s linear forwards'
	},
	'@keyframes develop8In': {
		'0%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'60%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'80%': {
			strokeDasharray: 30,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop8Out': {
		'0%': {
			strokeDasharray: 30,
			strokeDashoffset: 0
		},
		'50%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'100%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		}
	},
	develop9Start: {
		strokeDasharray: 30,
		strokeDashoffset: 30
	},
	develop9In: {
		animation: '$develop9In 2s linear forwards'
	},
	develop9Out: {
		animation: '$develop9Out 1s linear forwards'
	},
	'@keyframes develop9In': {
		'0%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'80%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'100%': {
			strokeDasharray: 30,
			strokeDashoffset: 0
		}
	},
	'@keyframes develop9Out': {
		'0%': {
			strokeDasharray: 30,
			strokeDashoffset: 0
		},
		'50%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		},
		'100%': {
			strokeDasharray: 30,
			strokeDashoffset: 30
		}
	},
	deploy1Start: {
		strokeDasharray: 2895,
		strokeDashoffset: 2895
	},
	deploy1In: {
		animation: '$deploy1In 1s linear forwards'
	},
	deploy1Out: {
		animation: '$deploy1Out 1s linear forwards'
	},
	'@keyframes deploy1In': {
		'0%': {
			strokeDasharray: 2895,
			strokeDashoffset: 2895
		},
		'100%': {
			strokeDasharray: 2895,
			strokeDashoffset: 0
		}
	},
	'@keyframes deploy1Out': {
		'0%': {
			strokeDasharray: 2895,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 2895,
			strokeDashoffset: 2895
		}
	},
	deploy2Start: {
		strokeDasharray: 930,
		strokeDashoffset: 930
	},
	deploy2In: {
		animation: '$deploy2In 2s linear forwards'
	},
	deploy2Out: {
		animation: '$deploy2Out 1s linear forwards'
	},
	'@keyframes deploy2In': {
		'0%': {
			strokeDasharray: 930,
			strokeDashoffset: 930
		},
		'60%': {
			strokeDasharray: 930,
			strokeDashoffset: 930
		},
		'80%': {
			strokeDasharray: 930,
			strokeDashoffset: 0
		}
	},
	'@keyframes deploy2Out': {
		'0%': {
			strokeDasharray: 930,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 930,
			strokeDashoffset: 930
		}
	},
	deploy3Start: {
		strokeDasharray: 205,
		strokeDashoffset: 205
	},
	deploy3In: {
		animation: '$deploy3In 2s linear forwards'
	},
	deploy3Out: {
		animation: '$deploy3Out 1s linear forwards'
	},
	'@keyframes deploy3In': {
		'0%': {
			strokeDasharray: 205,
			strokeDashoffset: 205
		},
		'85%': {
			strokeDasharray: 205,
			strokeDashoffset: 205
		},
		'100%': {
			strokeDasharray: 205,
			strokeDashoffset: 0
		}
	},
	'@keyframes deploy3Out': {
		'0%': {
			strokeDasharray: 205,
			strokeDashoffset: 0
		},
		'100%': {
			strokeDasharray: 205,
			strokeDashoffset: 205
		}
	}
}));

export default styles;
