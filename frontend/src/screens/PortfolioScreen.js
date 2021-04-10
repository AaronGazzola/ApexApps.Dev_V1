import React from 'react';
import useStyles from 'styles/contentStyles';
import { Typography, Paper, Grid } from '@material-ui/core';
import {
	AccountBalanceWallet,
	ContactMail,
	Devices,
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
						rel='noreferrer'
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
							<Storefront />
							<Typography className={classes.listText}>
								Custom eCommerce platform
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
						src='https://www.youtube.com/embed/2LrtihcStQM'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			</Paper>
		</>
	);
};

export default PortfolioScreen;
