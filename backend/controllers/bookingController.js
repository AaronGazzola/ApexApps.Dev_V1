import asyncHandler from '../middleware/async.js';
import Booking from '../models/bookingModel.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    Get all available bookings
// @route   GET /api/bookings/
// @access    Public
const getAvailableBookings = asyncHandler(async (req, res, next) => {
	const bookings = await Booking.find({ booked: false });

	res.json({
		success: true,
		bookings
	});
});

export { getAvailableBookings };
