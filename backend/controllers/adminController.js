import asyncHandler from '../middleware/async.js';
import ErrorResponse from '../utils/errorResponse.js';
import jwt from 'jsonwebtoken';

// @desc    Log in admin user
// @route   POST /api/v1/admin
// @access    Public
const login = asyncHandler(async (req, res, next) => {
	if (req.body.password !== process.env.PASSWORD) {
		return next(new ErrorResponse('Invalid Password', 401));
	}
	const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE
	});
	res.status(200).json({
		token
	});
});

export { login };
