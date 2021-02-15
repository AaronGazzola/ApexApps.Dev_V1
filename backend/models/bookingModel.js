import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
	timeStamp: {
		type: Number,
		required: true
	},
	date: {
		type: Number,
		required: true
	},
	month: {
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
