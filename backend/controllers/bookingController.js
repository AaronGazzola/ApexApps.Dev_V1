import asyncHandler from '../middleware/async.js';
import Booking from '../models/bookingModel.js';
import Client from '../models/clientModel.js';
import ErrorResponse from '../utils/errorResponse.js';
import moment from 'moment';
import sendEmail from '../utils/sendEmail.js';

// @desc    Get all available bookings
// @route   GET /api/bookings/calendar/:timestamp
// @access    Public
const getAvailableBookings = asyncHandler(async (req, res, next) => {
	const midnightSunday = Number(req.params.timestamp);
	const unixTimeNow = moment().add(1, 'h').unix();
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

// @desc    Confirm Booking
// @route   POST /api/bookings/confirm/:id
// @access    Public
const confirmBooking = asyncHandler(async (req, res, next) => {
	const id = req.params.id;
	const { name, email, phone, description } = req.body;

	// find booking
	const booking = await Booking.findById(id);
	if (!booking) {
		return next(
			new ErrorResponse('Could not confirm booking, please try again', 500)
		);
	}
	if (booking.booked) {
		return next(
			new ErrorResponse(
				'Sorry, that booking is already booked, please chose another time',
				500
			)
		);
	}
	if (booking.timestamp < moment().unix()) {
		return next(
			new ErrorResponse(
				'Sorry, that booking is now in the past! Please choose another time',
				500
			)
		);
	}

	// check for existing client with email
	const foundClient = await Client.findOne({ email });
	if (foundClient) {
		// add booking to client
		foundClient.bookings.push(booking);
		// add contact info to model if not already present
		if (foundClient.phone.filter(x => x.phone === phone).length === 0) {
			foundClient.phone.push(phone);
		}
		if (foundClient.name.filter(x => x.name === name).length === 0) {
			foundClient.name.push(name);
		}
		// add client to booking
		booking.client = foundClient;
		await foundClient.save();
	} else {
		// create client
		const newClient = await Client.create({
			name,
			email,
			phone,
			bookings: [booking]
		});
		// add client to booking
		booking.client = newClient;
	}

	// update booking
	booking.description = description;
	booking.booked = true;
	await booking.save();

	// send confirmation email to client with cancelation link
	try {
		await sendEmail({
			// type: 'CONFIRM_BOOKING',
			to: email,
			booking
			// baseUrl
		});
	} catch (error) {
		console.log(error);

		return next(
			new ErrorResponse(
				'Your booking has successfully been recorded, but an error occurred while the confirmation email. Please email aaron@apexapps.dev for confirmation.',
				500
			)
		);
	}
	// send email to self with booking and client details

	res.json({
		success: true,
		booking
	});
});

// @desc    Cancel Booking
// @route   POST /api/bookings/cancel/:id
// @access    Public
const cancelBooking = asyncHandler(async (req, res, next) => {
	res.json({
		success: true
	});
});

export { getAvailableBookings, confirmBooking, cancelBooking };
