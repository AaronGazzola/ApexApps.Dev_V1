import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import styles from 'styles/contentStyles';
import Message from 'components/Message';
import { GET_BLOG_CLEAR } from '../constants/blogConstants';
import { getBlogAction } from 'actions/blogActions';
import { Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = styles;

const BlogScreen = ({ match }) => {
	const slug = match.params.slug;
	const classes = useStyles();

	const dispatch = useDispatch();

	const getBlog = useSelector(state => state.getBlog);
	const { blog, error, loading } = getBlog;

	return (
		<>
			<Message
				error={error}
				func={() => {
					dispatch(getBlogAction(slug));
				}}
				funcText='Retry'
				reset={() => dispatch({ type: GET_BLOG_CLEAR })}
			/>
			<Grid container direction='column' alignItems='center'>
				{loading ? (
					<>
						<Skeleton
							variant='rect'
							width={400}
							height={80}
							style={{ marginTop: 20 }}
						/>
						<Skeleton
							variant='text'
							style={{ marginTop: 20 }}
							width={600}
							height={120}
						/>
					</>
				) : (
					<>
						<Typography
							variant='h1'
							className={clsx(classes.title, classes.blogTitle)}
						>
							{blog?.title}
						</Typography>
						{blog?.paragraphs.map(p => (
							<>
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
										dangerouslySetInnerHTML={{ __html: p.content }}
									></Typography>
								</div>
								{p.image && (
									<img
										className={classes.image}
										src={p.image.path}
										alt={p.image.label}
									/>
								)}
							</>
						))}
					</>
				)}
			</Grid>
		</>
	);
};

export default BlogScreen;
