import jwt from 'jsonwebtoken';
import asyncHandler from '../middleware/async.js';
import ErrorResponse from '../utils/errorResponse.js';

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		// Check if bearer token is sent in authorization header
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		// Set token from Bearer token in header
		token = req.headers.authorization.split(' ')[1];
	}

	// Check if token exists
	if (!token) {
		return next(new ErrorResponse('Please login to view this content', 401));
	}

	try {
		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (!decoded.admin) {
			return next(new ErrorResponse('Please login to view this content', 401));
		}
		next();
	} catch (error) {
		return next(new ErrorResponse('Please login to view this content', 401));
	}
});

export { protect };
