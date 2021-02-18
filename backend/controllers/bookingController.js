import asyncHandler from '../middleware/async.js';
import Booking from '../models/bookingModel.js';
import ErrorResponse from '../utils/errorResponse.js';
import moment from 'moment';

// @desc    Get all available bookings
// @route   GET /api/bookings/
// @access    Public
const getAvailableBookings = asyncHandler(async (req, res, next) => {
	const midnightSunday = Number(req.params.timestamp);
	const unixTimeNow = moment().unix();
	const minTime = unixTimeNow > midnightSunday ? unixTimeNow : midnightSunday;
	const maxTime = moment.unix(minTime).add(7, 'd').unix();

	const bookings = await Booking.find({
		booked: false,
		timestamp: {
			$gte: minTime,
			$lte: maxTime
		}
	});

	res.json({
		success: true,
		bookings
	});
});

export { getAvailableBookings };
