import React, { useState } from 'react';
import logo from 'assets/logo.svg';
import origamiLogo from 'assets/origami.svg';
import { Link } from 'react-router-dom';
import useContentStyles from 'styles/contentStyles';
import {
	Typography,
	Paper,
	Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	useMediaQuery
} from '@material-ui/core';
import {
	AccountBalanceWallet,
	ArtTrack,
	ContactMail,
	Create,
	Devices,
	EventAvailable,
	ShoppingCart,
	Storefront,
	ExpandMore
} from '@material-ui/icons';

const details = {
	apexApps: [
		{
			icon: <EventAvailable />,
			text: 'Booking calendar with availability management'
		},
		{
			icon: <Create />,
			text: 'Styled blog editor'
		},
		{
			icon: <Devices />,
			text: 'Responsive design for any screen size'
		},
		{
			icon: <ContactMail />,
			text: 'Client verification for booking confirmation'
		}
	],
	origami: [
		{
			icon: <ShoppingCart />,
			text: 'User friendly shopping cart and checkout'
		},
		{
			icon: <AccountBalanceWallet />,
			text: 'PayPal payment integration'
		},
		{
			icon: <ContactMail />,
			text: 'User authentication and verification'
		},
		{
			icon: <Devices />,
			text: 'Responsive design for any screen size'
		}
	]
};

const PortfolioScreen = () => {
	const contentClasses = useContentStyles();
	const [expanded, setExpanded] = useState(0);
	const matchesXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
	const handleExpand = panel => {
		setExpanded(panel === expanded ? 0 : panel);
	};
	return (
		<>
			<div className={contentClasses.textBox1}>
				<Typography variant='h1' className={contentClasses.title}>
					Portfolio
				</Typography>
				<Typography className={contentClasses.paragraph}>
					Explore some of my{' '}
					<span className={contentClasses.highlight}>Full-Stack</span> and{' '}
					<span className={contentClasses.highlight}>Front-End</span>{' '}
					development work
				</Typography>
			</div>
			<div className={contentClasses.textBox4}>
				<Typography variant='h2' className={contentClasses.title}>
					Full-Stack Web Apps:
				</Typography>
			</div>
			<Accordion
				expanded={expanded === 1}
				onChange={() => handleExpand(1)}
				className={contentClasses.accordion}
			>
				<AccordionSummary
					expandIcon={<ExpandMore fontSize='large' style={{ color: '#fff' }} />}
					aria-controls='Origami.cool information'
					id='origami-panel'
					className={contentClasses.accordionSummary}
				>
					<Grid container className={contentClasses.accordionSummaryGrid}>
						<img
							className={contentClasses.accordionLogo}
							src={origamiLogo}
							alt='Origami logo'
						/>
						<Typography variant='h3' className={contentClasses.accordionTitle}>
							{expanded === 1 ? (
								<a
									className={contentClasses.link}
									style={{ fontWeight: 100 }}
									href='https://www.origami.cool'
									rel='noopener noreferrer'
									target='_blank'
								>
									Origami.cool
								</a>
							) : (
								'Origami.cool'
							)}
						</Typography>
						{expanded !== 1 && !matchesXs && (
							<Typography variant='body2' className={contentClasses.expandText}>
								Click to expand
							</Typography>
						)}
					</Grid>
				</AccordionSummary>
				<AccordionDetails className={contentClasses.accordionDetails}>
					<Grid container>
						<Grid item xs={12} md={6}>
							<ul className={contentClasses.list}>
								<li>
									<Grid
										container
										direction='row'
										alignItems='center'
										justify='flex-start'
										style={{ flexWrap: 'nowrap' }}
									>
										<Storefront color='primary' />
										<Typography className={contentClasses.listText}>
											<span className={contentClasses.highlight}>
												Custom eCommerce platform
											</span>
										</Typography>
									</Grid>
								</li>
								{details.origami.map(item => (
									<li key={item.text}>
										<Grid
											container
											direction='row'
											alignItems='center'
											justify='flex-start'
											style={{ flexWrap: 'nowrap' }}
										>
											{item.icon}
											<Typography className={contentClasses.listText}>
												{item.text}
											</Typography>
										</Grid>
									</li>
								))}
							</ul>
						</Grid>
						<Grid item xs={12} md={6} className={contentClasses.description}>
							<Typography variant='h4'>Origami Store</Typography>
							<Typography className={contentClasses.paragraph}>
								A live eCommerce app, selling hand made origami
							</Typography>
							<Typography className={contentClasses.paragraph}>
								This project combines two of my favourit things - programming
								and origami! I hand fold each origmai model with the same care
								and love that I put into my apps.
							</Typography>
							<Typography className={contentClasses.paragraph}>
								Watch the video below for a full walkthrough.
							</Typography>
						</Grid>
					</Grid>
					<div className={contentClasses.video}>
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
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 2}
				onChange={() => handleExpand(2)}
				className={contentClasses.accordion}
			>
				<AccordionSummary
					expandIcon={<ExpandMore fontSize='large' style={{ color: '#fff' }} />}
					aria-controls='ApexApps.dev informaiton'
					id='apex-apps-panel'
					className={contentClasses.accordionSummary}
				>
					<Grid container className={contentClasses.accordionSummaryGrid}>
						<img
							className={contentClasses.accordionLogo}
							style={{ padding: 2 }}
							src={logo}
							alt='ApexApps logo'
						/>
						<Typography variant='h3' className={contentClasses.accordionTitle}>
							ApexApps.dev
						</Typography>
						{expanded !== 2 && !matchesXs && (
							<Typography variant='body2' className={contentClasses.expandText}>
								Click to expand
							</Typography>
						)}
					</Grid>
				</AccordionSummary>
				<AccordionDetails className={contentClasses.accordionDetails}>
					<Grid container>
						<Grid item xs={12} md={6}>
							<ul className={contentClasses.list}>
								<li>
									<Grid
										container
										direction='row'
										alignItems='center'
										justify='flex-start'
										style={{ flexWrap: 'nowrap' }}
									>
										<ArtTrack color='primary' />
										<Typography className={contentClasses.listText}>
											<span className={contentClasses.highlight}>
												Web App Portfolio
											</span>
										</Typography>
									</Grid>
								</li>
								{details.apexApps.map(item => (
									<li key={item.text}>
										<Grid
											container
											direction='row'
											alignItems='center'
											justify='flex-start'
											style={{ flexWrap: 'nowrap' }}
										>
											{item.icon}
											<Typography className={contentClasses.listText}>
												{item.text}
											</Typography>
										</Grid>
									</li>
								))}
							</ul>
						</Grid>
						<Grid item xs={12} md={6} className={contentClasses.description}>
							<Typography variant='h4'>My Portfolio</Typography>
							<Typography className={contentClasses.paragraph}>
								Welcome to my Web App development portfolio!
							</Typography>
							<Typography className={contentClasses.paragraph}>
								Here clients are able to view some of my work and book a call
								via the booking calendar.
							</Typography>
							<Typography className={contentClasses.paragraph}>
								Watch the video below for a full walkthrough!
							</Typography>
						</Grid>
					</Grid>
					<div className={contentClasses.video}>
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
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default PortfolioScreen;
