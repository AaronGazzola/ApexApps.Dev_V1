import asyncHandler from '../middleware/async.js';
import Booking from '../models/bookingModel.js';
import Client from '../models/clientModel.js';
import ErrorResponse from '../utils/errorResponse.js';
import moment from 'moment';
import sendEmail from '../utils/sendEmail.js';

// @desc    Get all available bookings
// @route   GET /api/bookings/calendar/:start/:end
// @access    Public
const getAvailableBookings = asyncHandler(async (req, res, next) => {
	const start = Number(req.params.start);
	const end = Number(req.params.end);

	const bookings = await Booking.find({
		booked: false,
		timestamp: {
			$gte: start,
			$lte: end
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
	const foundClient = await Client.findOne({ email }).populate('bookings');
	if (foundClient) {
		// check if client already has a booking in the future
		const futureBookings = foundClient.bookings.filter(
			x => x.timestamp > moment().unix()
		);
		if (futureBookings.length > 0) {
			return next(
				new ErrorResponse(
					`You already have a call booked for ${moment
						.unix(futureBookings[0].timestamp)
						.format('h:mma dddd Do MMMM YYYY')}`,
					500
				)
			);
		} else {
			// add booking to client
			foundClient.bookings.push(booking);
		}

		// add contact info to model if not already present
		if (foundClient.phone.filter(x => x === phone).length === 0) {
			foundClient.phone.push(phone);
		}
		if (foundClient.name.filter(x => x === name).length === 0) {
			foundClient.name.push(name);
		}
		// add client to booking
		booking.client = foundClient._id;
		await foundClient.save();
	} else {
		// create client
		const newClient = await Client.create({
			name,
			email,
			phone,
			bookings: [booking._id]
		});
		// add client to booking
		booking.client = newClient._id;
	}

	// update booking
	booking.description = description;
	booking.booked = true;
	await booking.save();

	// get base URL from request protocol and host domain
	const protocol = req.protocol;
	const host =
		process.env.NODE_ENV === 'production' ? req.get('host') : 'localhost:3000';
	const baseUrl = `${protocol}://${host}`;

	try {
		// send confirmation email to client with cancelation link
		await sendEmail({
			type: 'CLIENT_CONFIRM_BOOKING',
			email,
			booking,
			baseUrl,
			phone,
			name
		});
		// send email to self with booking and client details
		await sendEmail({
			type: 'ADMIN_CONFIRM_BOOKING',
			email,
			booking,
			baseUrl,
			phone,
			name,
			description
		});
	} catch (error) {
		console.log(error);

		return next(
			new ErrorResponse(
				'Your booking has successfully been cancelled, but an error occurred while the cancellation email. Please email aaron@apexapps.dev for details.',
				500
			)
		);
	}
	res.json({
		success: true
	});
});

// @desc    Cancel Booking
// @route   POST /api/bookings/cancel/:id/:client
// @access    Public
const cancelBooking = asyncHandler(async (req, res, next) => {
	// find booking
	const id = req.params.id;
	const isClient = req.params.client === 'client';

	let booking = await Booking.findById(id).populate({
		path: 'client',
		populate: { path: 'bookings' }
	});
	const { description } = booking;

	// remove booking from client
	let client = booking.client;
	const {
		name: [name],
		email,
		phone: [phone]
	} = client;

	// get base URL from request protocol and host domain
	const protocol = req.protocol;
	const host =
		process.env.NODE_ENV === 'production' ? req.get('host') : 'localhost:3000';
	const baseUrl = `${protocol}://${host}`;

	try {
		// send confirmation email to client with cancelation link
		await sendEmail({
			type: isClient
				? 'BOOKING_CANCEL_BY_CLIENT_TO_CLIENT'
				: 'BOOKING_CANCEL_BY_ADMIN_TO_CLIENT',
			email,
			booking,
			baseUrl,
			phone,
			name
		});
		// send email to self with booking and client details
		await sendEmail({
			type: isClient
				? 'BOOKING_CANCEL_BY_CLIENT_TO_ADMIN'
				: 'BOOKING_CANCEL_BY_ADMIN_TO_ADMIN',
			email,
			booking,
			baseUrl,
			phone,
			name,
			description
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
	// remove booking from client's bookings array
	client.bookings = client.bookings.filter(x => x !== id);
	await client.save();

	// clear booking of client details
	booking.booked = false;
	await booking.save();

	res.json({
		success: true
	});
});

export { getAvailableBookings, confirmBooking, cancelBooking };
