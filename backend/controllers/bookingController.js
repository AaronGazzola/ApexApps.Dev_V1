import asyncHandler from '../middleware/async.js';
import crypto from 'crypto';
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
		isBooked: false,
		isAvailable: true,
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

// @desc    Submit Booking
// @route   POST /api/bookings/submit/:id
// @access    Public
const submitBooking = asyncHandler(async (req, res, next) => {
	const id = req.params.id;
	const { name, phone, description } = req.body;
	const email = req.body.email.toLowerCase();
	// find booking and client
	const booking = await Booking.findById(id);
	const client = await Client.findOne({ email }).populate('bookings');

	// check if booking is available
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

	const sendVerifyEmail = async client => {
		const token = client.getVerifyToken();
		await client.save({ validateBeforeSave: false });

		const baseUrl = `${req.protocol}://${
			process.env.NODE_ENV === 'production' ? req.get('host') : 'localhost:3000'
		}`;
		const actionLink = `${baseUrl}/verifyclient/${token}`;

		try {
			await sendEmail({
				type: 'VERIFY',
				actionLink,
				client,
				baseUrl,
				reason: `You have received this email because your email address was used to submit a booking at ApexApps.dev. This is not a promotional email. `,
				buttonText: 'Verify Email'
			});
			res.status(200).json({
				success: 'Please check your email inbox to confirm your booking'
			});
		} catch (error) {
			console.log(error);
			client.verifyClientToken = undefined;

			await client.save({ validateBeforeSave: false });

			return next(new ErrorResponse('Email could not be sent', 500));
		}
	};

	// if not client found
	if (!client) {
		// create client
		const newClient = await Client.create({
			email,
			phone,
			name,
			pendingBooking: {
				description,
				timestamp: booking.timestamp
			}
		});
		sendVerifyEmail(newClient);
	}

	// if unverified client found
	if (client && !client.isVerified) {
		// update client
		client.pendingBooking.description = description;
		client.pendingBooking.timestamp = booking.timestamp;
		await client.save();

		// resend verify email
		sendVerifyEmail(client);
	}

	// if verified client found
	if (client?.isVerified) {
		// check if client already has a booking in the future
		const futureBooking = client.bookings.find(
			booking => booking.timestamp >= moment().unix() && !booking.isCanceled
		);
		if (futureBooking) {
			return next(
				new ErrorResponse(
					`You already have a call booked for ${moment
						.unix(futureBooking.timestamp)
						.format('h:mma dddd Do MMMM YYYY')}`,
					500
				)
			);
		}

		// update booking
		booking.description = description;
		booking.isBooked = true;
		booking.client = client._id;
		await booking.save();

		// update client
		client.bookings.push(booking);
		client.phone = phone;
		client.name = name;
		await client.save();

		// send confirmation email
		const baseUrl = `${req.protocol}://${
			process.env.NODE_ENV === 'production' ? req.get('host') : 'localhost:3000'
		}`;

		try {
			// send confirmation email to client with cancelation link
			await sendEmail({
				type: 'CLIENT_CONFIRM_BOOKING',
				client,
				booking,
				baseUrl,
				actionLink: `${baseUrl}/cancel/client/${id}`,
				reason: `You have received this email because your email address was used to confirm a booking at ApexApps.dev. This is not a promotional email. `
			});
			// send email to self with booking and client details
			await sendEmail({
				type: 'ADMIN_CONFIRM_BOOKING',
				client,
				booking,
				baseUrl,
				actionLink: `${baseUrl}/cancel/admin/${id}`
			});
			res.status(200).json({ success: 'Booking confirmed' });
		} catch (error) {
			console.log(error);
			client.verifyClientToken = undefined;

			await client.save({ validateBeforeSave: false });

			return next(new ErrorResponse('Email could not be sent', 500));
		}
	}
});

// @desc    Verify client
// @route   POST /api/bookings/verifyclient/:token
// @access    Public
const verifyClient = asyncHandler(async (req, res, next) => {
	// get hashed token
	const token = req.params.token;
	const verifyClientToken = crypto
		.createHash('sha256')
		.update(token)
		.digest('hex');

	// find client with token
	const client = await Client.findOne({ verifyClientToken });

	if (!client) {
		return next(new ErrorResponse('Invalid token', 400));
	}

	// find client's pending booking
	const booking = await Booking.findOne({
		timestamp: client.pendingBooking.timestamp
	});

	if (!booking) {
		return next(
			new ErrorResponse('Could not confirm booking, please try again', 500)
		);
	}

	// update client
	client.isVerified = true;
	client.verifyClientToken = undefined;
	client.bookings.push(booking._id);
	await client.save();

	// check if booking is available
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

	// update booking
	booking.description = client.pendingBooking.description;
	booking.isBooked = true;
	booking.client = client._id;
	await booking.save();

	// send confirmation email
	const baseUrl = `${req.protocol}://${
		process.env.NODE_ENV === 'production' ? req.get('host') : 'localhost:3000'
	}`;

	try {
		// send confirmation email to client with cancelation link
		await sendEmail({
			type: 'CLIENT_CONFIRM_BOOKING',
			client,
			booking,
			baseUrl,
			actionLink: `${baseUrl}/cancel/client/${booking._id}`,
			reason: `You have received this email because your email address was used to confirm a booking at ApexApps.dev. This is not a promotional email. `
		});
		// send email to self with booking and client details
		await sendEmail({
			type: 'ADMIN_CONFIRM_BOOKING',
			client,
			booking,
			baseUrl,
			actionLink: `${baseUrl}/cancel/admin/${booking._id}`
		});
		res.status(200).json({ success: true, booking });
	} catch (error) {
		console.log(error);
		client.verifyClientToken = undefined;

		await client.save({ validateBeforeSave: false });

		return next(new ErrorResponse('Email could not be sent', 500));
	}
});

// @desc    Cancel Booking
// @route   POST /api/bookings/cancel/:isClient/:id
// @access    Private/admin
const cancelBooking = asyncHandler(async (req, res, next) => {
	const id = req.params.id;
	const isClient = req.params.isClient === 'client';

	const booking = await Booking.findById(id).populate('client');
	const { client } = booking;

	// change booking to cancelled
	booking.isCanceled = true;
	await booking.save();
	// replace with new booking
	await Booking.create({ timestamp: booking.timestamp });

	// get base URL from request protocol and host domain
	const protocol = req.protocol;
	const host =
		process.env.NODE_ENV === 'production' ? req.get('host') : 'localhost:3000';
	const baseUrl = `${protocol}://${host}`;

	try {
		// send confirmation email to client with cancelation link
		await sendEmail({
			type: isClient
				? 'BOOKING_CANCEL_BY_CLIENT_TO_ADMIN'
				: 'BOOKING_CANCEL_BY_ADMIN_TO_ADMIN',
			booking,
			baseUrl,
			client
		});
		// send email to self with booking and client details
		await sendEmail({
			type: isClient
				? 'BOOKING_CANCEL_BY_CLIENT_TO_CLIENT'
				: 'BOOKING_CANCEL_BY_ADMIN_TO_CLIENT',
			booking,
			baseUrl,
			client
		});
	} catch (error) {
		console.log(error);

		return next(
			new ErrorResponse(
				'Booking cancelled; could not send cancellation email',
				500
			)
		);
	}

	res.json({
		success: true
	});
});

// @desc    Get booked bookings
// @route   GET /api/bookings
// @access    Private/admin
const listBookings = asyncHandler(async (req, res, next) => {
	const pastBookings = req.query.pastBookings === 'true';
	const bookings = await Booking.find({
		isBooked: true,
		timestamp: pastBookings
			? {
					$lte: moment().unix()
			  }
			: {
					$gte: moment().unix()
			  }
	}).populate('client');
	res.status(200).json({
		success: true,
		bookings
	});
});

// @desc    Set booking availability for time period
// @route   GET /api/bookings
// @access    Private/admin
const setBookingAvailability = asyncHandler(async (req, res, next) => {
	const fromTimestamp = req.params.from;
	const toTimestamp = req.params.to;
	const { makeAvailable } = req.body;

	const bookings = await Booking.find({
		timestamp: {
			$gte: fromTimestamp,
			$lte: toTimestamp
		}
	});

	bookings.forEach(async booking => {
		booking.isAvailable = makeAvailable;
		await booking.save();
	});

	res.status(201).json({
		success: true,
		bookings
	});
});

// @desc    List all verified clients
// @route   GET /api/bookings/clients
// @access    Public
const listClients = asyncHandler(async (req, res, next) => {
	const clients = await Client.find({
		isVerified: true
	});
	res.status(200).json({
		clients
	});
});

export {
	getAvailableBookings,
	submitBooking,
	cancelBooking,
	listBookings,
	setBookingAvailability,
	verifyClient,
	listClients
};
