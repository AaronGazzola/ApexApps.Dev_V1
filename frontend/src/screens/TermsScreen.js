import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import useStyles from 'styles/contentStyles';
import { Grid, Typography } from '@material-ui/core';

const TermsScreen = () => {
	const classes = useStyles();
	return (
		<Grid container direction='column' alignItems='center'>
			<Typography
				variant='h1'
				className={clsx(classes.title, classes.padding2)}
			>
				Terms and Conditions
			</Typography>

			<div className={classes.blogTextBox}>
				<Typography variant='h3' className={classes.subtitle1}>
					Business Information
				</Typography>
				<Typography className={classes.paragraph}>
					Business Name: Apex Apps
				</Typography>
				<Typography className={classes.paragraph}>ABN: 81700757157</Typography>
				<Typography className={classes.paragraph}>
					Business Name Holder: Aaron Gazzola
				</Typography>
			</div>
			<div className={classes.blogTextBox}>
				<Typography variant='h3' className={classes.subtitle3}>
					Project discussion
				</Typography>
				<Typography className={classes.paragraph}>
					The purpose of calls arranged via the booking calendar at
					apexapps.dev/contact is to discuss the potential for Apex Apps to
					develop a web application for the client. All call bookings are
					obligation free and are of no cost to the client. Neither party is
					under any obligation to proceed further following the call. Calls may
					be cancelled before the appointed time by either party, following a
					cancelation an email will be sent by Apex Apps to the client in order
					to arrange another booking.
				</Typography>
			</div>
			<div className={classes.blogTextBox}>
				<Typography variant='h3' className={classes.subtitle3}>
					Project proposal
				</Typography>
				<Typography className={classes.paragraph}>
					If both the client and Apex Apps agree to move forward with
					development, a project proposal will be sent by Apex Apps to the
					client via email. This document will detail the approximate structure
					of the proposed project, as well as early conceptual renderings of
					color schemes, layouts, and other design elements. The features of the
					website will also be clearly outlined, including any limitations or
					restrictions.
				</Typography>
			</div>
			<div className={classes.blogTextBox}>
				<Typography variant='h3' className={classes.subtitle3}>
					Project agreement
				</Typography>
				<Typography className={classes.paragraph}>
					The project proposal will also contain a project agreement, outlining
					the project details, an estimated development time frame, and payment
					terms. A percentage of the total price of the project is usually
					required as a non-refundable deposit before development commences. The
					remaining balance is to be paid at the completion of development once
					the project has been completed and deployed. The project agreement
					must be signed by both parties before development commences.
				</Typography>
			</div>
			<div className={classes.blogTextBox}>
				<Typography variant='h3' className={classes.subtitle3}>
					Project amendments
				</Typography>
				<Typography className={classes.paragraph}>
					Any changes to the design, layout, structure, functionality or
					features of the web application must be communicated and agreed upon
					between both parties. If the change will alter the development
					timeframe or payment terms, a new project proposal will be sent to the
					client. An additional fee may be included for this amendment. The new
					project agreement will replace and nullify the existing agreement.
				</Typography>
			</div>
			{/* <div className={classes.blogTextBox}>
				<Typography variant='h3' className={classes.subtitle3}>
					Progress updates
				</Typography>
				<Typography className={classes.paragraph}>
					A dynamic, password protected project update webpage will be available
					via a unique URL throughout the development process. The url and
					password to access this page will be sent to the client’s email soon
					after development has begun. The project progress page will outline
					the key milestones of the project and the estimated timeline for these
					milestones to be completed. As each milestone is completed, the time,
					date and details of the milestone will be displayed on the project
					progress page, and included in a milestone email sent to the client.
					The client may opt out of receiving milestone emails at any time.
				</Typography>
			</div> */}
			<div className={classes.blogTextBox}>
				<Typography variant='h3' className={classes.subtitle3}>
					Privacy policy
				</Typography>
				<Typography className={classes.paragraph}>
					Apex Apps is committed to protecting your privacy. You can{' '}
					<Link to='/privacy' className={classes.link}>
						read the full Privacy Policy here
					</Link>
				</Typography>
			</div>
		</Grid>
	);
};

export default TermsScreen;
