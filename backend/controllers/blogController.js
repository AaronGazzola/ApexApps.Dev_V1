import asyncHandler from '../middleware/async.js';
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
	const blog = await Blog.findOne({ slug });
	res.json({
		success: true,
		blog
	});
});
export { getBlogs, getBlog };
