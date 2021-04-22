import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from 'styles/contentStyles';
import { Typography, Paper, Grid } from '@material-ui/core';
import {
	AccountBalanceWallet,
	ArtTrack,
	ContactMail,
	Create,
	Devices,
	EventAvailable,
	ShoppingCart,
	Storefront
} from '@material-ui/icons';

const PortfolioScreen = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.textBox1}>
				<Typography variant='h1' className={classes.title}>
					App Portfolio
				</Typography>
				<Typography className={classes.paragraph}>
					Below are some of the web apps designed and developed by Apex Apps
				</Typography>
			</div>
			<div className={classes.appBox}>
				<Paper
					variant='outlined'
					component={Grid}
					container
					direction='column'
					alignItems='center'
					className={classes.paper}
				>
					<Typography variant='h2' className={classes.subTitle}>
						<Link className={classes.link} to='/'>
							ApexApps.dev
						</Link>
					</Typography>
					<ul className={classes.list}>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<ArtTrack color='primary' />
								<Typography className={classes.listText}>
									<span className={classes.highlight}>Web App Portfolio</span>
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<EventAvailable />
								<Typography className={classes.listText}>
									Booking calendar with availability management
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<Create />
								<Typography className={classes.listText}>
									Styled blog editor
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<Devices />
								<Typography className={classes.listText}>
									Responsive design for any screen size
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<ContactMail />
								<Typography className={classes.listText}>
									Client verification for booking confirmation
								</Typography>
							</Grid>
						</li>
					</ul>

					<div className={classes.video}>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/moGGjXAPuis'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</Paper>
			</div>
			<div className={classes.appBox}>
				<Paper
					variant='outlined'
					component={Grid}
					container
					direction='column'
					alignItems='center'
					className={classes.paper}
				>
					<Typography variant='h2' className={classes.subTitle}>
						<a
							className={classes.link}
							href='https://www.origami.cool'
							target='_blank'
							rel='noreferrer noopener'
						>
							Origami.cool
						</a>
					</Typography>
					<ul className={classes.list}>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<Storefront color='primary' />
								<Typography className={classes.listText}>
									<span className={classes.highlight}>
										Custom eCommerce platform
									</span>
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<ShoppingCart />
								<Typography className={classes.listText}>
									User friendly shopping cart and checkout
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<AccountBalanceWallet />
								<Typography className={classes.listText}>
									PayPal payment integration
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<Devices />
								<Typography className={classes.listText}>
									Responsive design for any screen size
								</Typography>
							</Grid>
						</li>
						<li>
							<Grid
								container
								direction='row'
								alignItems='center'
								justify='flex-start'
								style={{ flexWrap: 'nowrap' }}
							>
								<ContactMail />
								<Typography className={classes.listText}>
									User authentication and verification
								</Typography>
							</Grid>
						</li>
					</ul>
					<div className={classes.video}>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/qPjeQMoujjU'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</Paper>
			</div>
		</>
	);
};

export default PortfolioScreen;
