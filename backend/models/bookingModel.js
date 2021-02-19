import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
	timestamp: {
		type: Number,
		requried: true
	},
	booked: {
		type: Boolean,
		default: false
	},
	description: {
		type: String,
		required: false
	},
	client: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		ref: 'Client'
	}
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
