import React, { useEffect, useState } from 'react';
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
import {
	getBlogAction,
	uploadImageAction,
	updateBlogAction,
	createBlogAction
} from 'actions/blogActions';
import { GET_BLOG_CLEAR } from 'constants/blogConstants';

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
		image: uploadedImage,
		success: uploadImageSuccess,
		loading: uploadImageLoading
	} = useSelector(state => state.uploadImage);

	const [uploadImageIndex, setUploadImageIndex] = useState(0);
	const [formState, formDispatch] = useBlogForm(slug && blog);
	const { formIsValid, paragraphs, title, description } = formState;

	useEffect(() => {
		if (slug && slug !== blog?.slug) dispatch(getBlogAction(slug));
	}, [dispatch, slug, blog]);

	useEffect(() => {
		if (getBlogSuccess) {
			formDispatch({ type: 'RESET' });
			dispatch({ type: GET_BLOG_CLEAR });
		}
	}, [getBlogSuccess, formDispatch]);

	useEffect(() => {
		if (updateBlogSuccess || createBlogSuccess) history.push('/admin/blogs');
	}, [history, updateBlogSuccess, createBlogSuccess]);

	useEffect(() => {
		if (uploadImageSuccess)
			formDispatch({
				type: 'UPLOAD_IMAGE',
				payload: uploadedImage,
				i: uploadImageIndex
			});
	}, [
		uploadImageSuccess,
		uploadedImage,
		uploadImageIndex,
		dispatch,
		formDispatch
	]);

	const submitHandler = e => {
		e.preventDefault();
		const newBlog = {
			title: title.value,
			description: description.value,
			paragraphs: paragraphs.map(p => ({
				subtitle: p.subtitle || '',
				body: p.body || '',
				imagePath: p.imagePath,
				imageLabel: p.imageLabel
			}))
		};
		if (slug) {
			dispatch(updateBlogAction(newBlog, blog?._id));
		} else {
			dispatch(createBlogAction(newBlog));
		}
	};

	const changeHandler = (e, validators = [], i = 0) => {
		formDispatch({ type: 'CHANGE', payload: e.target, validators, i });
	};

	const touchHandler = (e, i = 0) => {
		formDispatch({ type: 'TOUCH', payload: e.target, i });
	};

	const addParagraphHandler = () => {
		formDispatch({ type: 'ADD_PARAGRAPH' });
	};

	const deleteParagraphHandler = i => {
		formDispatch({ type: 'DELETE_PARAGRAPH', i });
	};

	const uploadFileHandler = (e, i) => {
		const file = e.target.files[0];
		dispatch(uploadImageAction(file));
		setUploadImageIndex(i);
	};
	return (
		<>
			<Typography variant='h1'>{slug ? 'Edit ' : 'Create '}Blog</Typography>
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
					onBlur={e => touchHandler(e)}
					error={title.isTouched && !title.isValid}
					helperText={
						title.isTouched && !title.isValid
							? 'Add a blog title below 100 characters'
							: ' '
					}
				/>
				<TextField
					id='description'
					label='Description'
					type='textarea'
					variant='outlined'
					placeholder='Description'
					fullWidth
					color='secondary'
					value={description.value}
					onChange={e =>
						changeHandler(e, [VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(300)])
					}
					className={
						description.isTouched && !description.isValid
							? clsx(formClasses.input, formClasses.error)
							: description.isChanged
							? clsx(formClasses.input, formClasses.changed)
							: formClasses.input
					}
					onBlur={e => touchHandler(e)}
					error={description.isTouched && !description.isValid}
					helperText={
						description.isTouched && !description.isValid
							? 'Add a blog description below 300 characters'
							: ' '
					}
				/>
				{paragraphs.map((p, i) => (
					<Paper
						key={p.key}
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
							onChange={e => changeHandler(e, [], i)}
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
							onChange={e => changeHandler(e, [VALIDATOR_REQUIRE()], i)}
							className={
								p.isTouched && !p.isValid
									? clsx(formClasses.input, formClasses.error)
									: p.isChanged
									? clsx(formClasses.input, formClasses.changed)
									: formClasses.input
							}
							onBlur={e => touchHandler(e, i)}
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
								onChange={e => uploadFileHandler(e, i)}
							/>
						</Button>
						{p.imagePath && (
							<img
								className={classes.blogImage}
								src={p.imagePath}
								alt={p.imageLabel || `Uploaded image ${i + 1}`}
							/>
						)}

						<TextField
							id='imageLabel'
							label='Image label'
							type='text'
							placeholder='Image label'
							fullWidth
							color='secondary'
							value={p.imageLabel}
							onChange={e => changeHandler(e, [], i)}
							className={formClasses.input}
						/>
						<Button
							variant='outlined'
							startIcon={<Delete />}
							className={classes.deleteButton}
							onClick={() => deleteParagraphHandler(i)}
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
					onClick={addParagraphHandler}
				>
					Add Paragraph
				</Button>
				<Button
					type='submit'
					variant='contained'
					color='secondary'
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
			</form>
		</>
	);
};

export default EditBlogScreen;
