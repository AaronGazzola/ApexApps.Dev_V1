import asyncHandler from '../middleware/async.js';
import Blog from '../models/blogModel.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    Get all blogs
// @route   GET /api/blogs
// @access    Public
const getBlogs = asyncHandler(async (req, res, next) => {
	const blogs = await Blog.find();
	// sort blogs from latest to earliest
	res.json({
		success: true,
		blogs
	});
});
export { getBlogs };
