import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
	timestamp: {
		type: Number,
		requried: true
	},
	booked: {
		type: Boolean,
		default: false
	}
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
