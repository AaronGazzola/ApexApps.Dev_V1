import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from 'styles/contentStyles';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import { getBlogBySlugAction } from 'actions/blogActions';

const BlogScreen = ({ match }) => {
	const slug = match.params.slug;
	const classes = useStyles();

	const dispatch = useDispatch();

	const getBlogBySlug = useSelector(state => state.getBlogBySlug);
	const { blog, loading } = getBlogBySlug;

	useEffect(() => {
		dispatch(getBlogBySlugAction(slug));
	}, [dispatch, slug]);

	return (
		<Grid container direction='column' alignItems='center'>
			{loading ? (
				<>
					<CircularProgress
						style={{ marginTop: 20 }}
						size={50}
						color='primary'
						thickness={2}
					/>
				</>
			) : (
				<>
					{blog && (
						<div className={classes.textBox1}>
							<Typography variant='h1' className={classes.title}>
								{blog?.title}
							</Typography>
							<Typography
								variant='body2'
								style={{ marginLeft: 16 }}
								className={classes.date}
							>
								{moment(blog?.createdAt.substring(0, 10)).format('Do MMM YYYY')}
							</Typography>
							<Typography className={classes.paragraph}>
								{blog?.description}
							</Typography>
						</div>
					)}
					{blog?.paragraphs.map((p, i) => (
						<Grid container direction='column' alignItems='center' key={i}>
							<div className={classes.blogTextBox} key={p._id}>
								{p.subtitle && (
									<Typography variant='h4' className={classes.subtitle3}>
										{p.subtitle}
									</Typography>
								)}
								<Typography
									className={p.subtitle ? classes.paragraph : null}
									dangerouslySetInnerHTML={{ __html: p.body }}
								></Typography>
							</div>
							{p.imagePath && (
								<img
									className={classes.image}
									src={p.imagePath}
									alt={p.imageLabel}
								/>
							)}
						</Grid>
					))}
					{blog && (
						<div
							className={classes.textBox3}
							style={{ width: '100%', maxWidth: 800 }}
						>
							<Typography>
								Feel free to{' '}
								<Link className={classes.link} to='/contact'>
									book a call
								</Link>{' '}
								to discuss your custom web application
							</Typography>
							<Typography className={classes.signature1}>
								Hope to hear from you soon!
							</Typography>
							<Typography className={classes.signature2}>
								Aaron Gazzola
							</Typography>
						</div>
					)}
				</>
			)}
		</Grid>
	);
};

export default BlogScreen;
