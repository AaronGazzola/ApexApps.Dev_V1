import React, { useEffect } from 'react';
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
							<div
								className={clsx(classes.textBox3, classes.blogTextBox)}
								key={p._id}
							>
								{p.subtitle && (
									<Typography variant='h4' className={classes.subtitle3}>
										{p.subtitle}
									</Typography>
								)}
								<Typography
									className={classes.paragraph}
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
				</>
			)}
		</Grid>
	);
};

export default BlogScreen;
