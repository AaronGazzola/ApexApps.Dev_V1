import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
	timestamp: {
		type: Number,
		requried: true
	},
	date: {
		type: Number,
		required: true
	},
	month: {
		type: Number,
		required: true
	},
	hour: {
		type: Number,
		required: true
	},
	booked: {
		type: Boolean,
		default: false
	}
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
