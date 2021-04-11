import asyncHandler from '../middleware/async.js';
import sanitizeHtml from 'sanitize-html';
import path from 'path';
import fs from 'fs';
import moment from 'moment';
import Blog from '../models/blogModel.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    Get all blogs
// @route   GET /api/blogs
// @access    Public
const getBlogs = asyncHandler(async (req, res, next) => {
	const blogs = await Blog.find().sort({ createdAt: 'desc' });
	res.json({
		success: true,
		blogs
	});
});

// @desc    Get single blogs with slug
// @route   GET /api/blogs/:slug
// @access    Public
const getBlog = asyncHandler(async (req, res, next) => {
	const slug = req.params.slug;
	const id = req.params.id;
	const blog = slug ? await Blog.findOne({ slug }) : await Blog.findById(id);

	if (!blog) {
		return next(new ErrorResponse('Could not find blog', 404));
	}
	res.json({
		success: true,
		blog
	});
});

// @desc    Delete blog by id
// @route   GET /api/blogs/delete/:id
// @access    Private/admin
const deleteBlog = asyncHandler(async (req, res, next) => {
	const blog = await Blog.findById(req.params.id);
	if (!blog) {
		return next(new ErrorResponse('Could not find blog to delete', 404));
	}

	// delete all images on blog
	blog.paragraphs.forEach(p => {
		if (p.imagePath) {
			fs.unlink(`.${p.imagePath}`, err => {
				if (err && err.code !== 'ENOENT') {
					return next(new ErrorResponse('Could not create blog', 500));
				}
			});
		}
	});

	await blog.delete();

	res.json({
		success: true
	});
});

// @desc    Create blog
// @route   POST /api/blogs/
// @access    Private/admin
const createBlog = asyncHandler(async (req, res, next) => {
	const { title, description, paragraphs } = req.body;
	// move images from uploads to images folder
	paragraphs.forEach(p => {
		if (p.imagePath) {
			const oldPath = p.imagePath;
			const newPath = oldPath.replace('uploads', 'images');
			fs.rename(`.${oldPath}`, `.${newPath}`, err => {
				if (err) {
					return next(new ErrorResponse('Could not create blog', 500));
				}
			});
			p.imagePath = newPath;
		}
	});

	// delete remaining images in uploads folder
	const directory = './uploads';
	fs.readdir(directory, (err, files) => {
		if (err) {
			return next(new ErrorResponse('Could not create blog', 500));
		} else if (files.length) {
			for (const file of files) {
				fs.unlink(path.join(directory, file), err => {
					if (err && err.code !== 'ENOENT') {
						return next(new ErrorResponse('Could not create blog', 500));
					}
				});
			}
		}
	});
	paragraphs.forEach(p => (p.body = p.body.replace(/&lt;/g, '<')));
	const blog = await Blog.create({
		title,
		description,
		paragraphs
	});

	res.json({
		success: true,
		blog
	});
});

// @desc    Update blog
// @route   PUT /api/blogs/:slug
// @access    Private/admin
const updateBlog = asyncHandler(async (req, res, next) => {
	const id = req.params.id;
	const { title, description, paragraphs } = req.body;
	// move images from uploads to images folder
	paragraphs.forEach(p => {
		if (p.imagePath && p.imagePath.startsWith('/uploads')) {
			const oldPath = p.imagePath;
			const newPath = oldPath.replace('uploads', 'images');
			fs.rename(`.${oldPath}`, `.${newPath}`, err => {
				if (err) {
					return next(new ErrorResponse('Could not create blog', 500));
				}
			});
			p.imagePath = newPath;
		}
	});

	// delete remaining images in uploads folder
	const directory = './uploads';
	fs.readdir(directory, (err, files) => {
		if (err) {
			return next(new ErrorResponse('Could not create blog', 500));
		} else if (files.length) {
			for (const file of files) {
				fs.unlink(path.join(directory, file), err => {
					if (err && err.code !== 'ENOENT') {
						return next(new ErrorResponse('Could not create blog', 500));
					}
				});
			}
		}
	});

	// paragraphs.map(p => (p.body = sanitizeHtml(p.body.replace(/&lt;/g, '<'))));
	paragraphs.map(p => (p.body = p.body.replace(/&lt;/g, '<')));
	const blog = await Blog.findById(id);

	if (!blog) {
		return next(new ErrorResponse('Could not find blog to update', 404));
	}

	blog.title = title;
	blog.description = description;
	blog.paragraphs = paragraphs;

	await blog.save();

	res.json({
		success: true,
		blog
	});
});

// @desc    Upload image
// @route   POST /api/blogs/image
// @access    Private/admin
const uploadImage = asyncHandler(async (req, res, next) => {
	// check for uploaded file
	if (!req.files) {
		return next(new ErrorResponse(`Please upload a file`, 400));
	}

	const file = Object.values(req.files)[0];

	// Make sure the image is a photo
	if (!file.mimetype.startsWith('image')) {
		return next(new ErrorResponse(`Please upload an image file`, 400));
	}

	// Check filesize
	if (file.size > process.env.MAX_FILE_UPLOAD) {
		return next(
			new ErrorResponse(
				`Please upload an image smaller than ${
					process.env.MAX_FILE_UPLOAD / 1000000
				} Mb`,
				400
			)
		);
	}

	// Create new custom filename
	file.name = `${moment().valueOf()}${path.parse(file.name).ext}`;
	//Create new image path
	const newImagePath = `${process.env.FILE_UPLOAD_PATH}/${file.name}`;
	// upload file
	file.mv(newImagePath, async err => {
		if (err) {
			console.error(err);
			return next(new ErrorResponse(`Problem with file upload`, 500));
		}

		const absoluteImagePath = newImagePath.slice(1);

		res.status(200).json({
			success: true,
			image: absoluteImagePath
		});
	});
});

export { getBlogs, getBlog, deleteBlog, updateBlog, createBlog, uploadImage };
