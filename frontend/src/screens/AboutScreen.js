import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import useStyles from 'styles/contentStyles';
import Discuss from 'components/animations/Discuss';
import Design from 'components/animations/Design';
import Develop from 'components/animations/Develop';
import Deploy from 'components/animations/Deploy';
import { Link } from 'react-router-dom';

const AboutScreen = () => {
	const classes = useStyles();
	const [animateProfile, setAnimateProfile] = useState(false);
	const [animateDiscuss, setAnimateDiscuss] = useState(false);
	const [animateDesign, setAnimateDesign] = useState(false);
	const [animateDevelop, setAnimateDevelop] = useState(false);
	const [animateDeploy, setAnimateDeploy] = useState(false);
	const [imagesLoaded, setImagesLoaded] = useState([]);
	const discussRef = useRef(null);
	const designRef = useRef(null);
	const developRef = useRef(null);
	const deployRef = useRef(null);
	const profileImageRef = useRef(null);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll1);
		return () => window.removeEventListener('scroll', handleScroll1);
	}, []);

	useEffect(() => {
		if (imagesLoaded.length === 3) {
			window.addEventListener('scroll', handleScroll2);
		}
		return () => window.removeEventListener('scroll', handleScroll2);
	}, [imagesLoaded]);

	useEffect(() => {
		if (animateProfile) setTimeout(() => setAnimateProfile(false), 2500);
	}, [animateProfile]);

	const getScrollHeight = ref =>
		ref.current?.offsetTop + ref.current?.offsetHeight - window.innerHeight;

	const handleScroll1 = e => {
		setAnimateDiscuss(window.scrollY >= getScrollHeight(discussRef));
		setAnimateDesign(window.scrollY >= getScrollHeight(designRef));
		setAnimateDevelop(window.scrollY >= getScrollHeight(developRef));
		setAnimateDeploy(window.scrollY >= getScrollHeight(deployRef));
	};

	const handleScroll2 = e => {
		if (
			getScrollHeight(profileImageRef) < window.scrollY &&
			window.scrollY < profileImageRef.current?.offsetTop
		)
			setAnimateProfile(true);
	};

	const handleImageLoaded = e => {
		setImagesLoaded([...imagesLoaded, e]);
	};

	return (
		<Grid container direction='column' alignItems='center'>
			<div className={classes.textBox1}>
				<Typography variant='h1' className={classes.title}>
					Web App Excellence
				</Typography>
				<Typography className={classes.paragraph}>
					Apex Apps is dedicated to creating&nbsp;
					<span className={classes.highlight}>elegant</span> and&nbsp;
					<span className={classes.highlight}>powerful</span>
					&nbsp;web applications.
				</Typography>
			</div>
			<Grid
				className={classes.row}
				item
				container
				xs
				alignItems='center'
				direction='column'
			>
				<div className={classes.avatar} ref={profileImageRef}>
					<img
						onLoad={e => handleImageLoaded(e)}
						className={
							animateProfile
								? clsx(classes.animateProfile1, classes.profileImage1)
								: classes.profileImage1
						}
						src='images/profile1.jpg'
						alt='Aaron Gazzola profile image 1'
					/>
					<img
						onLoad={e => handleImageLoaded(e)}
						className={
							animateProfile
								? clsx(classes.animateProfile2, classes.profileImage2)
								: classes.profileImage2
						}
						src='images/profile2.jpg'
						alt='Aaron Gazzola profile image 2'
					/>
					<img
						onLoad={e => handleImageLoaded(e)}
						className={
							animateProfile
								? clsx(classes.animateProfile3, classes.profileImage3)
								: classes.profileImage3
						}
						src='images/profile3.jpg'
						alt='Aaron Gazzola profile image 3'
					/>
					<img
						className={
							animateProfile
								? clsx(classes.animateProfile4, classes.profileImage4)
								: classes.profileImage4
						}
						src='images/profile1.jpg'
						alt='Aaron Gazzola profile image 3'
					/>
				</div>
				<div className={classes.textBox2} style={{ maxWidth: 500 }}>
					<Typography variant='h2' className={classes.subTitle}>
						Aaron Gazzola
					</Typography>
					<Typography className={classes.paragraph}>
						Hi! I'm Aaron - A{' '}
						<span className={classes.highlight}>Full Stack Javascript</span>{' '}
						Developer.
					</Typography>
					<Typography className={classes.paragraph}>
						I build engaging user experiences available cross-platform and
						worldwide. I conduct the entire process myself, from initial
						discussion to final deployment.
					</Typography>
				</div>
			</Grid>
			<Grid container className={classes.divider} justify='center'>
				<Typography variant='h3' className={classes.subTitle2}>
					The Process:
				</Typography>
			</Grid>
			<Grid item container xs spacing={3} className={classes.row}>
				<Grid
					ref={discussRef}
					item
					container
					alignItems='center'
					justify='center'
					xs={12}
					sm={4}
					className={classes.animationGrid}
				>
					<Discuss animate={animateDiscuss} />
				</Grid>
				<Grid item xs={12} sm={8}>
					<div className={classes.textBox3}>
						<Typography variant='h4' className={classes.subTitle3}>
							Discuss
						</Typography>
						<Typography className={classes.paragraph}>
							<Link className={classes.link} to='/conact'>
								Book a call
							</Link>{' '}
							to discuss your project and assess your needs.
						</Typography>
						<Typography className={classes.paragraph}>
							Each situation is unique, and so is each app. Discover your
							options and find the right fit for you.
						</Typography>
					</div>
				</Grid>
			</Grid>
			<Grid item container xs spacing={3} className={classes.row}>
				<Grid item sm={8} xs={12}>
					<div className={classes.textBox3}>
						<Typography variant='h4' className={classes.subTitle3}>
							Design
						</Typography>
						<Typography className={classes.paragraph}>
							Once the purpose and requirements of your project are clarified, I
							design the user experience.
						</Typography>
						<Typography className={classes.paragraph}>
							This design is then presented in a project proposal.
						</Typography>
					</div>
				</Grid>
				<Grid
					item
					container
					alignItems='center'
					justify='center'
					xs={12}
					sm={4}
					ref={designRef}
				>
					<Design animate={animateDesign} />
				</Grid>
			</Grid>
			<Grid item container spacing={3} className={classes.row}>
				<Grid
					container
					item
					xs={12}
					sm={4}
					justify='center'
					alignItems='center'
					className={classes.animationGrid}
					ref={developRef}
				>
					<Develop animate={animateDevelop} />
				</Grid>
				<Grid item xs={12} sm={8}>
					<div className={classes.textBox3}>
						<Typography variant='h4' className={classes.subTitle3}>
							Develop
						</Typography>
						<Typography className={classes.paragraph}>
							I then use the magic of programming to develop your great idea
							into a great application.
						</Typography>
						<Typography className={classes.paragraph}>
							You will recieve updates during this process, which will track the
							progress and timeline of development.
						</Typography>
					</div>
				</Grid>
			</Grid>
			<Grid item container spacing={3} className={classes.row}>
				<Grid item xs={12} sm={8}>
					<div className={classes.textBox3}>
						<Typography variant='h4' className={classes.subTitle3}>
							Deploy
						</Typography>
						<Typography className={classes.paragraph}>
							Once development is complete, your app is deployed and released to
							the world!
						</Typography>
						<Typography className={classes.paragraph}>
							Apex Apps is able to provide hosting, domain registry, and ongoing
							maintenance for your new application.
						</Typography>
					</div>
				</Grid>
				<Grid
					container
					justify='center'
					alignItems='center'
					item
					xs={12}
					sm={4}
					ref={deployRef}
				>
					<Deploy animate={animateDeploy} />
				</Grid>
			</Grid>
			<Grid item container className={classes.row} justify='center' spacing={3}>
				<Button
					color='secondary'
					variant='outlined'
					className={classes.contactButton}
					size='large'
					component={Link}
					endIcon={<Phone className={classes.phoneIcon} />}
					to='/contact'
				>
					Book a Call
				</Button>
			</Grid>
		</Grid>
	);
};

export default AboutScreen;
