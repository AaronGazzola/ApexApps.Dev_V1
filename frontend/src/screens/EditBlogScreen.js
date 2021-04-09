import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useStyles from 'styles/adminStyles';
import useFormStyles from 'styles/formStyles';
import useBlogForm from 'hooks/editBlogHook';
import {
	TextField,
	Typography,
	Button,
	CircularProgress,
	Paper,
	Grid
} from '@material-ui/core';
import {
	Delete,
	Image as ImageIcon,
	ArrowBack,
	AddCircleOutline
} from '@material-ui/icons';
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE } from 'utils/validators';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogAction } from 'actions/blogActions';

const EditBlogScreen = ({ match, history }) => {
	const classes = useStyles();
	const formClasses = useFormStyles();
	const slug = match.params.slug;
	const dispatch = useDispatch();
	const { blog, success: getBlogSuccess } = useSelector(state => state.getBlog);
	const {
		success: updateBlogSuccess,
		loading: updateBlogLoading
	} = useSelector(state => state.updateBlog);
	const {
		success: createBlogSuccess,
		loading: createBlogLoading
	} = useSelector(state => state.createBlog);

	const {
		success: uploadImageSuccess,
		loading: uploadImageLoading
	} = useSelector(state => state.uploadImage);

	const [formState, formDispatch] = useBlogForm(slug && blog);
	const { formIsValid, paragraphs, title } = formState;

	useEffect(() => {
		if (slug && slug !== blog?.slug) dispatch(getBlogAction(slug));
	}, [dispatch, slug, blog]);

	useEffect(() => {
		if (getBlogSuccess) formDispatch({ type: 'RESET' });
	}, [getBlogSuccess, formDispatch]);

	useEffect(() => {
		if (updateBlogSuccess || createBlogSuccess) history.push('/admin/blogs');
	}, [history, updateBlogSuccess, createBlogSuccess]);

	const submitHandler = e => {
		e.preventDefault();
	};

	const changeHandler = (e, validators) => {};

	const touchHandler = () => {};

	const uploadFileHandler = () => {};

	const deleteParagraphHandler = () => {};

	return (
		<>
			<Typography variant='h1'>{slug ? 'Edit ' : 'Create '}Blog</Typography>
			<form onSubmit={submitHandler} className={formClasses.formWide}>
				<TextField
					id='title'
					label='Title'
					type='text'
					placeholder='Title'
					fullWidth
					color='secondary'
					value={title.value}
					onChange={e =>
						changeHandler(e, [VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(100)])
					}
					className={
						title.isTouched && !title.isValid
							? clsx(formClasses.input, formClasses.error)
							: title.isChanged
							? clsx(formClasses.input, formClasses.changed)
							: formClasses.input
					}
					onBlur={touchHandler}
					error={title.isTouched && !title.isValid}
					helperText={
						title.isTouched && !title.isValid
							? 'Add a blog title below 100 characters'
							: ' '
					}
				/>
				{paragraphs.map((p, i) => (
					<Paper
						key={i}
						variant='outlined'
						component={Grid}
						container
						direction='column'
						alignItems='center'
						className={classes.paper}
					>
						<TextField
							id='subtitle'
							label='Subtitle'
							type='text'
							placeholder='Subtitle'
							fullWidth
							color='secondary'
							value={p.subtitle}
							onChange={e => changeHandler(e, [])}
							className={formClasses.input}
						/>
						<TextField
							multiline
							rows={10}
							id='body'
							label='Paragraph Body'
							type='textarea'
							variant='outlined'
							placeholder='Paragraph Body'
							fullWidth
							color='secondary'
							value={p.body}
							onChange={e => changeHandler(e, [VALIDATOR_REQUIRE()])}
							className={
								p.isTouched && !p.isValid
									? clsx(formClasses.input, formClasses.error)
									: p.isChanged
									? clsx(formClasses.input, formClasses.changed)
									: formClasses.input
							}
							onBlur={touchHandler}
							error={p.isTouched && !p.isValid}
							helperText={
								p.isTouched && !p.isValid
									? 'Add the content for the pargraph body'
									: ' '
							}
						/>
						<Button variant='outlined' className={classes.imageButton}>
							<Grid container direction='column' alignItems='center'>
								{uploadImageLoading ? (
									<CircularProgress thickness={1} />
								) : (
									<>
										<ImageIcon fontSize='large' />
										<Typography>Upload Image</Typography>
									</>
								)}
							</Grid>
							<input
								type='file'
								id='imageUpload'
								name='userImage'
								className={classes.imageInput}
								value=''
								onChange={uploadFileHandler}
							/>
						</Button>
						{p.image.path && (
							<img
								className={classes.image}
								src={p.image.path}
								alt={p.image.label || `Uploaded image ${i + 1}`}
							/>
						)}

						<TextField
							id={`paragraph${i}Image`}
							label='Image label'
							type='text'
							placeholder='Image label'
							fullWidth
							color='secondary'
							value={p.image.label}
							onChange={changeHandler}
							className={formClasses.input}
						/>
						<Button
							variant='outlined'
							startIcon={<Delete />}
							className={classes.deleteButton}
							onClick={deleteParagraphHandler}
						>
							Delete
						</Button>
					</Paper>
				))}
				<Button
					variant='outlined'
					to='/admin/blogs'
					className={formClasses.button}
					startIcon={<AddCircleOutline />}
					color='secondary'
				>
					Add Paragraph
				</Button>
				<Button
					type='submit'
					variant='contained'
					disabled={!formIsValid}
					className={formClasses.submitButton}
				>
					{createBlogLoading || updateBlogLoading ? (
						<CircularProgress style={{ color: '#000' }} size={25} />
					) : slug ? (
						'Update Blog'
					) : (
						'Create Blog'
					)}
				</Button>
				<Button
					variant='outlined'
					component={Link}
					to='/admin/blogs'
					className={formClasses.button}
					startIcon={<ArrowBack />}
					color='secondary'
				>
					Back
				</Button>
			</form>
		</>
	);
};

export default EditBlogScreen;
